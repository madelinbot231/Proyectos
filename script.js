document.getElementById("comenzar").addEventListener("click", function () {
    document.getElementById("bienvenida").classList.remove("activa");
    document.getElementById("formulario-seccion").classList.add("activa");
});

document.getElementById("calcular").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const Fecha = document.getElementById("Fecha").value;

    const pizza1 = parseFloat(document.getElementById("Pizza1").value);
    const pizza2 = parseFloat(document.getElementById("Pizza2").value);
    const pizza3 = parseFloat(document.getElementById("Pizza3").value);

    const complementos = document.querySelectorAll('.checkbox-container input[type="checkbox"]:checked');
    let complementosTotal = 0;
    let complementosDetalle = [];

    complementos.forEach((complemento) => {
        complementosTotal += parseFloat(complemento.value);
        complementosDetalle.push(complemento.nextElementSibling.textContent);
    });

    const total = pizza1 + pizza2 + pizza3 + complementosTotal;
    document.getElementById("detalle-seccion").classList.add("activa");
    document.getElementById("formulario-seccion").classList.remove("activa");
    document.getElementById("detallePedido").innerHTML = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Fecha:</strong> ${Fecha}<br>
        <strong>Productos:</strong> 
        <ul>
            <li>Pizza Mexicana ($${pizza1.toFixed(2)})</li>
            <li>Pizza Pepperoni ($${pizza2.toFixed(2)})</li>
            <li>Pizza Hawaiana ($${pizza3.toFixed(2)})</li>
        </ul>
        <strong>Complementos:</strong> ${complementosDetalle.join(", ")}<br>
        <strong>Total:</strong> $${total.toFixed(2)}
    `;
    document.getElementById("detallePedido").dataset.total = total;
});

document.getElementById("continuarPago").addEventListener("click", function () {
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value;
    const tipoServicio = document.querySelector('input[name="tipoServicio"]:checked').value;

    if (tipoServicio === "Entrega a domicilio") {
        document.getElementById("detalle-seccion").classList.remove("activa");
        document.getElementById("domicilio-seccion").classList.add("activa");
    } else {
        document.getElementById("detalle-seccion").classList.remove("activa");
        if (metodoPago === "Efectivo") {
            showEfectivoSection();
        } else if (metodoPago === "Tarjeta") {
            document.getElementById("tarjeta-seccion").classList.add("activa");
        }
    }
});

document.getElementById("continuarDomicilio").addEventListener("click", function () {
    document.getElementById("domicilio-seccion").classList.remove("activa");
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value;
    if (metodoPago === "Efectivo") {
        showEfectivoSection();
    } else if (metodoPago === "Tarjeta") {
        document.getElementById("tarjeta-seccion").classList.add("activa");
    }
});

function showEfectivoSection() {
    const total = parseFloat(document.getElementById("detallePedido").dataset.total);
    const efectivoSection = document.getElementById("efectivo-seccion");
    efectivoSection.innerHTML = `
        <h1>Pago en Efectivo</h1>
        <p>Total a pagar: $${total.toFixed(2)}</p>
        <label for="billete">Ingrese con qué billete va a pagar:</label>
        <input type="number" id="billete" name="billete" required>
        <button type="button" id="calcularCambio">Calcular Cambio</button>
        <p id="cambio"></p>
        <button type="button" id="finalizarEfectivo">Finalizar Pedido</button>
    `;
    efectivoSection.classList.add("activa");
    document.getElementById("calcularCambio").addEventListener("click", function () {
        const billete = parseFloat(document.getElementById("billete").value);
        const cambio = billete - total;
        if (cambio >= 0) {
            document.getElementById("cambio").textContent = `Cambio: $${cambio.toFixed(2)}`;
        } else {
            document.getElementById("cambio").textContent = "El billete no cubre el monto total.";
        }
    });
    document.getElementById("finalizarEfectivo").addEventListener("click", function () {
        generarPDF();
        alert("Gracias por tu pedido. El pago se realizará al momento de la entrega o consumo.");
    });
}

function validarTarjeta() {
    const numeroTarjeta = document.getElementById("numeroTarjeta").value.trim();
    const fechaExp = document.getElementById("fechaExp").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    const regexTarjeta = /^\d{16}$/;
    const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^\d{3}$/;

    if (!regexTarjeta.test(numeroTarjeta)) {
        alert("Número de tarjeta inválido. Debe contener 16 dígitos.");
        return false;
    }

    if (!regexFecha.test(fechaExp)) {
        alert("Fecha de expiración inválida. Debe tener el formato MM/AA.");
        return false;
    }

    const [mes, año] = fechaExp.split("/").map(Number);
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear() % 100;
    const mesActual = fechaActual.getMonth() + 1;

    if (año < añoActual || (año === añoActual && mes < mesActual)) {
        alert("La tarjeta está expirada.");
        return false;
    }

    if (!regexCVV.test(cvv)) {
        alert("CVV inválido. Debe contener 3 dígitos.");
        return false;
    }

    return true;
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("Fecha").value;
    const direccion = document.getElementById("direccion") ? document.getElementById("direccion").value : "N/A";
    const telefono = document.getElementById("telefono") ? document.getElementById("telefono").value : "N/A";
    const detalleHTML = document.getElementById("detallePedido").innerHTML;
    const total = parseFloat(document.getElementById("detallePedido").dataset.total).toFixed(2);

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = detalleHTML;
    const productos = tempDiv.querySelectorAll("ul li");

    doc.setFontSize(14);
    doc.text("Detalle del Pedido", 10, 10);
    doc.setFontSize(11);
    doc.text(`Nombre: ${nombre}`, 10, 20);
    doc.text(`Fecha: ${fecha}`, 10, 30);
    doc.text(`Dirección: ${direccion}`, 10, 40);
    doc.text(`Teléfono: ${telefono}`, 10, 50);
    doc.text("Productos:", 10, 60);

    let y = 70;
    productos.forEach(p => {
        doc.text(`- ${p.textContent}`, 10, y);
        y += 10;
    });

    doc.text(`Total a pagar: $${total}`, 10, y + 10);
    doc.save("detalle_pedido.pdf");
}

document.getElementById("finalizarTarjeta").addEventListener("click", function () {
    if (!validarTarjeta()) return;
    generarPDF();
    alert("Pago con tarjeta realizado con éxito. ¡Gracias por tu pedido!");
});
