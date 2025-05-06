document.getElementById("comenzar").addEventListener("click", () => {
    document.getElementById("bienvenida").classList.remove("activa");
    document.getElementById("formulario-seccion").classList.add("activa");
});

document.getElementById("calcular").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value;

    if (!nombre || !fecha) {
        alert("Por favor completa tu nombre y la fecha.");
        return;
    }

    const pizzas = ["pizza1", "pizza2", "pizza3"].map(id => {
        const el = document.getElementById(id);
        return {
            nombre: el.options[el.selectedIndex].text,
            precio: parseFloat(el.value) || 0
        };
    });

    const complementos = Array.from(document.querySelectorAll('.checkbox-container input[type="checkbox"]:checked'));
    let complementosTotal = 0;
    const complementosDetalle = complementos.map(comp => {
        complementosTotal += parseFloat(comp.value) || 0;
        return comp.closest("label")?.textContent.trim() || "";
    });

    const total = pizzas.reduce((sum, p) => sum + p.precio, 0) + complementosTotal;

    document.getElementById("detallePedido").innerHTML = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Fecha:</strong> ${fecha}<br>
        <strong>Productos:</strong> 
        <ul>${pizzas.map(p => `<li>${p.nombre}</li>`).join("")}</ul>
        <strong>Complementos:</strong> ${complementosDetalle.join(", ") || "Ninguno"}<br>
        <strong>Total:</strong> $${total.toFixed(2)}
    `;
    document.getElementById("detallePedido").dataset.total = total;

    document.getElementById("formulario-seccion").classList.remove("activa");
    document.getElementById("detalle-seccion").classList.add("activa");
});

document.getElementById("continuarPago").addEventListener("click", () => {
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');
    const tipoServicio = document.querySelector('input[name="tipoServicio"]:checked');

    if (!metodoPago || !tipoServicio) {
        alert("Por favor selecciona un método de pago y tipo de servicio.");
        return;
    }

    document.getElementById("detalle-seccion").classList.remove("activa");

    if (tipoServicio.value === "Entrega a domicilio") {
        document.getElementById("domicilio-seccion").classList.add("activa");
    } else {
        metodoPago.value === "Efectivo" ? showEfectivoSection() : document.getElementById("tarjeta-seccion").classList.add("activa");
    }
});

document.getElementById("continuarDomicilio").addEventListener("click", () => {
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (!direccion || !telefono) {
        alert("Por favor completa la dirección y teléfono.");
        return;
    }

    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');
    document.getElementById("domicilio-seccion").classList.remove("activa");
    metodoPago.value === "Efectivo" ? showEfectivoSection() : document.getElementById("tarjeta-seccion").classList.add("activa");
});

document.getElementById("finalizarTarjeta").addEventListener("click", () => {
    if (!validarTarjeta()) return;

    generarPDF();
    alert("Gracias por tu pedido. El pago se ha procesado con tarjeta.");
    document.getElementById("tarjeta-seccion").classList.remove("activa");
    document.getElementById("feedback-seccion").classList.add("activa");
});

function showEfectivoSection() {
    const total = parseFloat(document.getElementById("detallePedido").dataset.total) || 0;
    const efectivoSection = document.getElementById("efectivo-seccion");

    efectivoSection.innerHTML = `
        <h1>Pago en Efectivo</h1>
        <p>Total a pagar: $${total.toFixed(2)}</p>
        <label for="billete">¿Con qué cantidad pagas?</label>
        <input type="number" id="billete" required>
        <button type="button" id="calcularCambio">Calcular Cambio</button>
        <p id="cambio"></p>
        <button type="button" id="finalizarEfectivo">Finalizar Pedido</button>
    `;

    efectivoSection.classList.add("activa");

    document.getElementById("calcularCambio").addEventListener("click", () => {
        const billete = parseFloat(document.getElementById("billete").value);
        if (isNaN(billete)) {
            alert("Ingresa una cantidad válida.");
            return;
        }
        const cambio = billete - total;
        document.getElementById("cambio").textContent = cambio >= 0
            ? `Cambio: $${cambio.toFixed(2)}`
            : "El billete no cubre el monto total.";
    });

    document.getElementById("finalizarEfectivo").addEventListener("click", () => {
        generarPDF();
        alert("Gracias por tu pedido. El pago se realizará al momento de la entrega o consumo.");
        efectivoSection.classList.remove("activa");
        document.getElementById("feedback-seccion").classList.add("activa");
    });
}

function validarTarjeta() {
    const numero = document.getElementById("numeroTarjeta").value.trim();
    const fecha = document.getElementById("fechaExp").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    const regexTarjeta = /^\d{16}$/;
    const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^\d{3,4}$/;

    const [mes, anio] = fecha.split("/").map(Number);
    const ahora = new Date();
    const mesActual = ahora.getMonth() + 1;
    const anioActual = ahora.getFullYear() % 100;

    if (!regexTarjeta.test(numero)) {
        alert("Número de tarjeta inválido.");
        return false;
    }
    if (!regexFecha.test(fecha) || anio < anioActual || (anio === anioActual && mes < mesActual)) {
        alert("Fecha de expiración inválida.");
        return false;
    }
    if (!regexCVV.test(cvv)) {
        alert("CVV inválido.");
        return false;
    }

    return true;
}

function generarPDF() {
    generarPDFyObtenerBase64(() => {});
}

function generarPDFyObtenerBase64(callback) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const direccion = document.getElementById("direccion")?.value || "N/A";
    const telefono = document.getElementById("telefono")?.value || "N/A";
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

    doc.text(`Total: $${total}`, 10, y + 10);
    const base64PDF = doc.output("datauristring").split(',')[1];
    callback(base64PDF);
}

document.getElementById("enviarCorreo").addEventListener("click", () => {
    const nombre = document.getElementById("nombreCliente").value.trim();
    const correo = document.getElementById("correoCliente").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (!nombre || !correo) {
        alert("Por favor, completa tu nombre y correo.");
        return;
    }

    generarPDFyObtenerBase64((base64PDF) => {
        emailjs.send("service_1ys9qie", "template_vdgeomf", {
            nombre,
            email: correo,
            mensaje: comentario,
            pdf_file: base64PDF
        }).then(() => {
            alert("Correo enviado con éxito.");
        }).catch(error => {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un error al enviar el correo.");
        });
    });
});
