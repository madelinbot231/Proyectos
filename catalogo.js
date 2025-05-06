document.addEventListener("DOMContentLoaded", () => {
  const libros = [
    {
      titulo: "Los Margenes del Juego", 
      autor: "F.Pipa", 
      descripcion: 'Poppy llega a la universidad con la esperanza de empezar de cero, dejando atrás los fantasmas de su pasado. Sin embargo, al cruzar las puertas del campus, se encuentra con Daniel Reed, su primer amor no correspondido, quien reaparece tras cinco años de ausencia.<br>' +
                  '<br>Por si eso no fuera suficiente, Máximo Delacroix, el carismático y peligroso capitán del equipo de rugby, despierta en ella una atracción irresistible, a pesar de ser rival del equipo de su hermano y alguien de quien debería mantenerse lejos.<br>' +
                  '<br>Como si el destino se burlara de ella, Máximo termina siendo su nuevo compañero de cuarto. Entre secretos oscuros, traiciones inesperadas y mentiras que nunca imaginó, Poppy descubrirá que su vida está en peligro, y enfrentará verdades que pondrán a prueba todo lo que creía saber.<br>',
      imagen: "margen.jpg",
      categoria:'Dark Romance',
      reseña:'La historia se despliega en un torbellino de secretos oscuros, traiciones inesperadas y verdades que amenazan con desmoronar la vida de Poppy. Con personajes intrigantes, una trama llena de giros inesperados y una atmósfera cargada de peligro y pasión, esta historia atrapará a los lectores.',
    },
    { 
      titulo: "Hechizado", 
      autor: "Carolina Mendez", 
      descripcion: 'Anya ha pasado toda su adolescencia admirando a su fascinante vecino, Colton Lake. Alto, fuerte y con un aire peligroso que hace que cualquier corazón se acelere, incluyendo el de ella. <br>' +
                  '<br>Sin embargo, no es hasta una fría y lluviosa noche que él finalmente la mira como ella siempre había deseado: no como una niña, sino como una mujer hecha y derecha. <br>' +
                  '<br>Esa noche, la pasión los envuelve como un incendio descontrolado, cambiándolo todo entre ellos. Pero las cosas no siempre salen como en los sueños... y esta historia, apenas comienza.<br>',
      imagen: "hechizados.jpg",
      categoria:'Dark Romance',
      reseña:'La historia se despliega en un torbellino de secretos oscuros, traiciones inesperadas y verdades que amenazan con desmoronar la vida de Poppy. Con personajes intrigantes, una trama llena de giros inesperados y una atmósfera cargada de peligro y pasión, esta historia atrapará a los lectores.',
    },
    { 
      titulo: "Inevitable Destrucción", 
      autor: "Lena Mesias", 
      descripcion: 'Lydia tiene estrictamente prohibido meterse en más problemas, pero su vida toma un giro complicado cuando el rompecorazones de su nuevo instituto,Tyler Levin, fija su atención en ella.<br>'+
'<br>Tyler, con sus cautivadores ojos cafés y su sonrisa irresistible, es el chico perfecto para muchas, pero tiene una creencia peligrosa: su corazón es intocable. Mientras el juego continúe, nadie puede herirlo.<br>'+
'<br>Sin embargo, Lydia no es una chica cualquiera. Ella es la rebelde hermana menor de su mejor amigo, y eso la convierte en territorio prohibido. Solo hay una regla: ella está fuera de límites. No jugar con ella, no provocarla, y bajo ninguna circunstancia, romperle el corazón.<br>'+
'<br>Debería ser sencillo seguir esas normas... salvo que Tyler siempre ha deseado aquello que no puede tener. Entre fiestas salvajes, noches de desenfreno y una atracción imposible de ignorar, ambos se encuentran atrapados en un juego del que será difícil escapar.'+
'<br>Porque en este juego, todos guardan secretos y nadie dice la verdad. Bienvenido al implacable mundo de los corazones rotos.',
      imagen: "destruccion.jpg",
      categoria:'Dark Romance',
      reseña: 'Es una historia que habla sobre el deseo prohibido, donde se envoscan en un amor en el cual alguien tiene que ganar el juego',
    },
    {
      titulo:'De Sangre y Cenisas',
      autor:'Jennifer L. Armentrout',
      descripcion:'Poppy, una joven conocida como la Doncella, ha sido destinada desde su nacimiento a una vida marcada por el aislamiento. Elegida para una misteriosa Ascensión que podría cambiar el destino de su reino, su existencia está regida por estrictas normas que le prohíben experimentar los placeres más básicos, formar lazos afectivos o tomar decisiones propias. Su vida, cuidadosamente controlada, parece destinada a la obediencia absoluta... hasta que Hawke irrumpe en ella.<br>'+
      '<br>Hawke, un guardia con un carisma magnético y unos enigmáticos ojos dorados, desafía todo lo que Poppy cree saber. Su presencia despierta en ella sentimientos y deseos desconocidos, llevándola a cuestionarse las reglas que le han sido impuestas. Pero mientras su conexión con Hawke se profundiza, el mundo que la rodea comienza a tambalearse. Secretos enterrados y conspiraciones políticas emergen, envolviendo a Poppy en un juego peligroso de lealtades, traiciones y una amenaza latente proveniente de un reino olvidado, dispuesto a recuperar su poder con violencia.<br>'+
      '<br>Entre el deber y el deseo, la lucha entre el bien y el mal, y su anhelo de libertad, Poppy descubrirá que su destino no es solo el de cambiar un reino, sino también el de redefinir su lugar en un mundo que siempre ha buscado controlarla. Con giros impredecibles y una narrativa cautivadora, atrapa a los lectores en un universo lleno de misterio, pasión y desafíos, donde la verdad y el amor son las armas más poderosas.<br>',
      imagen:'seniza.jpg',
      categoria: 'Dark Romance',
      reseña: 'La historia combina romance intenso, intriga política y un mundo fantástico con seres sobrenaturales. Con giros argumentales inesperados, tensión y una protagonista fuerte, la novela ha cautivado a los lectores que buscan emociones y una trama envolvente. Es el inicio de una saga que profundiza en secretos, rebeliones y poderes ocultos.',
    },
    {
      titulo:'Damian',
      autor:'Alex Mírez',
      descripcion:'Padme es una joven curiosa que siempre ha sentido una inexplicable atracción hacia su vecino Damián, un chico rodeado de misterio, cuya actitud reservada parece ocultar secretos oscuros y perturbadores.<br>'+ '<br>Cuando Damián desaparece sin dejar rastro, la vida de Padme continúa, aunque con cierta inquietud latente. Sin embargo, todo cambia con su inesperado regreso meses después, reavivando no solo su peligrosa curiosidad, sino también una cadena de eventos que desafiarán su percepción de la realidad. Determinada a descubrir la verdad, Padme se sumerge en un mundo sombrío, donde las líneas entre la moralidad y la locura se desdibujan.<br>'+
      '<br>En su búsqueda, Padme enfrentará secretos enterrados, traiciones inesperadas y decisiones que pondrán en juego no solo su vida, sino también la de quienes la rodean. Su camino estará marcado por la lucha constante entre el bien y el mal, mientras la fina barrera entre la fantasía y la realidad amenaza con romperse. Con giros impactantes y una atmósfera que combina tensión y misterio, *Damián* invita a los lectores a explorar las profundidades de un relato en el que nada es lo que parece y donde los secretos tienen un precio que pocos están dispuestos a pagar.',
      imagen:'damian.jpg',
      categoria: 'Dark Romance',
      reseña: 'Explora temas como la locura, la obsesión y los límites de la moralidad. Aunque algunos giros pueden ser predecibles, la historia mantiene un ritmo intrigante y ofrece momentos de tensión y sorpresa',
    },
    {
      titulo:'Pretty Monster',
      autor:'Sheridan Anne',
      descripcion:'La protagonista vive sumergida en una oscuridad constante, atormentada por la presencia de un acosador misterioso que, cada noche, cruza los límites de su hogar y su vida. Lo que debería inspirar un miedo paralizante, en cambio, da paso a una experiencia profundamente desconcertante, donde su cuerpo y mente reaccionan de manera inexplicable, estableciendo un vínculo distorsionado entre ella y su intruso.<br>'+
      '<br>Con el tiempo, los movimientos del acosador se tornan más atrevidos, acercándose peligrosamente a ella y empujándola hacia un juego psicológico tan fascinante como peligroso. Sin haber visto jamás su rostro ni conocer su identidad, la protagonista se ve atrapada por una atracción irracional y perturbadora, consciente de que este oscuro vínculo podría tener consecuencias catastróficas para su vida.<br>'+
      '<br>Pretty Monster desvela una narrativa intensa y provocadora, explorando los matices más oscuros del deseo, la obsesión y los límites humanos, creando una historia que atrapa y desafía a sus lectores con cada página.',
      imagen:'dark.jpg',
      categoria: 'Dark Romance',
      reseña: 'Explora temas como la locura, la obsesión y los límites de la moralidad. Aunque algunos giros pueden ser predecibles, la historia mantiene un ritmo intrigante y ofrece momentos de tensión y sorpresa',
    },
    {
      titulo:'Hunt Me Darling',
      autor:'Maree Rose',
      descripcion:'Alexandra Darling, una destacada agente del FBI especializada en perfiles forenses, ha construido su carrera desentrañando las mentes de los asesinos más letales. Su habilidad para comprender las motivaciones y oscuros impulsos detrás de sus crímenes la hace única, pero también alimenta una peligrosa fascinación que amenaza con consumirla.<br>'+
      '<br>Cuando se une a un equipo especial encargado de atrapar a un dúo de asesinos notorios, Alexandra se encuentra envuelta en un caso que la lleva a enfrentarse cara a cara con la naturaleza retorcida del mal. Su obsesión por desentrañar los secretos de estos criminales la empuja cada vez más cerca del abismo, difuminando las líneas entre el cazador y la presa.<br>'+
      '<br>A medida que el peligro se intensifica, Alexandra se ve atrapada en un juego psicológico que no solo pone en riesgo su cordura, sino también sus valores más profundos sobre la justicia y el deseo. En esta lucha interna y externa, deberá decidir hasta dónde está dispuesta a llegar para capturar a los monstruos que persigue, sin convertirse en uno de ellos.<br>',
      imagen:'hunde.jpg',
      categoria: 'Dark Romance',
      reseña: 'Una novela de thrillers románticos con una fuerte carga de obsesión y peligro. La protagonista, una joven atrapada en una relación con un hombre misterioso, se enfrenta a una batalla psicológica entre el miedo y la atracción. A lo largo de la historia, se profundiza en el peligro de las relaciones tóxicas y la manipulación.',
    }, 
    {
      titulo:'Hide Me Darling',
      autor:'Maree Rosa',
      descripcion:'Hydessa Darling, una brillante detective marcada por el legado de su madre, reconocida por su inquietante habilidad para comprender las mentes de asesinos y víctimas, se encuentra ante un caso que pondrá a prueba su instinto y determinación. Una serie de asesinatos detallados en un blog anónimo despierta su interés, llevándola a emprender una misión encubierta en una isla turística que parece estar repleta de misterios.<br>'+
      '<br>Mientras se adentra en esta compleja investigación, Hydessa comienza a descubrir que, en este juego de intrigas, las verdades se ocultan tras capas de secretos y nadie es lo que aparenta ser. Enfrentada a un asesino astuto que siempre parece llevar la delantera, Hydessa deberá utilizar todas sus habilidades para desentrañar el misterio y, al mismo tiempo, luchar contra sus propias dudas y sombras.<br>'+
      '<br>En este peligroso y psicológico enfrentamiento, Hydessa aprende que la línea entre cazador y presa puede ser más tenue de lo que imaginaba. *Hide Me Darling* es una historia que teje una red de peligro, intriga y obsesión, manteniendo al lector al borde del abismo mientras la detective decide si puede superar los obstáculos o si el juego ya ha sido decidido antes de empezar.',
      imagen:'hide.jpg',
      categoria: 'Dark Romance',
      reseña: 'Una novela de thrillers románticos con una fuerte carga de obsesión y peligro. La protagonista, una joven atrapada en una relación con un hombre misterioso, se enfrenta a una batalla psicológica entre el miedo y la atracción. A lo largo de la historia, se profundiza en el peligro de las relaciones tóxicas y la manipulación.',
    },
    {
      titulo:'Haunting Adeline',
      autor:'H.D. Carlton',
      descripcion:'Es una novela de romance oscuro que entrelaza misterio, obsesión y elementos psicológicos en una narrativa intensa y cautivadora. La trama sigue a Adeline Reilly, una joven escritora que, tras la muerte de su abuela, se muda a la antigua y enigmática mansión familiar. Lo que en un principio parece un refugio pronto se convierte en el escenario de un juego inquietante cuando Zade Meadows, un hombre enigmático y líder de una organización secreta dedicada a combatir el tráfico humano, se obsesiona con ella y comienza a acecharla.<br>'+
      '<br>Mientras Zade se infiltra en su vida de manera cada vez más perturbadora, Adeline se ve atrapada en una relación que camina por la delgada línea entre el miedo y la atracción. A medida que lidia con este acosador, descubre también oscuros secretos relacionados con el asesinato no resuelto de su bisabuela, desenterrando un misterio que amenaza con desmoronar su ya frágil equilibrio',
      imagen:'adeline.jpg',
      categoria: 'Dark Romance',
      reseña: 'Una novela de romance oscuro y suspenso con tintes de thriller. Adeline es una escritora que comienza a notar la presencia de un misterioso acosador. Este hombre, aunque aterrador, despierta una atracción inexplicable en ella, llevándola a un juego retorcido donde el deseo y el peligro se mezclan.',
    },   
    {
      titulo:'Haunted Love',
      autor:'Sheridan Anne',
      descripcion:'Es una novela de romance oscuro que explora los límites del deseo, la pasión y los secretos. La historia sigue a Aspen Ryder, una joven universitaria que guarda un amor no correspondido por Izaac Banks, el mejor amigo de su hermano. A pesar de sus intentos por olvidar sus sentimientos, Aspen se encuentra atrapada en un torbellino emocional cuando una noche en un club exclusivo, Vixen, la lleva a un encuentro inesperado con un hombre enmascarado que despierta sus deseos más profundos.<br>'+
      '<br>Sin saber que este misterioso hombre es Izaac, Aspen se ve envuelta en un juego de atracción y traición que pone a prueba sus emociones y su confianza. A medida que los secretos salen a la luz, ambos deberán enfrentar las consecuencias de sus decisiones y descubrir si su conexión puede superar las barreras que los separan.',
      imagen:'lovdha.jpg',
      categoria: 'Dark Romance',
      reseña: 'La historia sigue a una protagonista que se ve envuelta en una relación con alguien que parece no ser completamente humano. A medida que avanza la trama, se desarrollan secretos sobrenaturales y un amor que desafía la lógica.',
    },
    { 
      titulo: "365 días", 
      autor: "Blanka Lipińska", 
      descripcion: 'Massimo Toricelli, el temido capo de una poderosa familia mafiosa siciliana, es un hombre oscuro y peligroso que ha dedicado su vida a buscar obsesivamente a una mujer que apareció en una visión mientras luchaba entre la vida y la muerte. Esa mujer es Laura, una joven ejecutiva polaca atrapada en un empleo asfixiante y una relación carente de pasión.<br>'+
'<br>Durante unas vacaciones en Sicilia, el destino los une cuando Massimo la reconoce y decide no dejarla escapar. Laura es llevada a su lujosa mansión, donde él le impone un ultimátum: tiene un año para enamorarse de él.<br>'+
            '<br>Así comienza una historia marcada por una pasión intensa, un lujo sin límites y un poder arrollador. A medida que su relación se vuelve más ardiente y profunda, Laura se adentra en las sombras del peligroso mundo de la mafia. Con cada paso, enfrenta amenazas que desafían su vida y su moralidad.<br>'+
            '<br>Sin embargo, a pesar de la fuerza de su conexión, Laura descubre rápidamente el precio de amar al hombre más peligroso de Sicilia. Mientras navegan entre secretos, traiciones y desafíos ineludibles, su amor será puesto a prueba una y otra vez, obligándolos a confrontar el abismo que los rodea.',
      imagen: "365.jpg",
      categoria: 'Dark Romance',
      reseña: 'Un romance erótico con una trama intensa y controvertida. Laura Biel es secuestrada por Massimo, un mafioso que le da 365 días para enamorarse de él. La novela explora la dinámica de poder, el deseo y la sumisión, generando opiniones divididas entre los lectores.',
    },
    {
      titulo:'La Mecanica del Corazón',
      autor:'Mathias Malzieu',
      descripcion:'Jack nació en la noche más fría que se haya registrado, una tan helada que su pequeño corazón no logró soportarlo. Para salvar su vida, su partera reemplazó su corazón congelado por un delicado reloj de cuco, una máquina que lo mantiene vivo pero bajo tres reglas inquebrantables: jamás manipular las manecillas, controlar cada estallido de ira y, por encima de todo, nunca permitirse enamorarse.<br>'+
      '<br>Durante años, Jack vivió siguiendo estas reglas, temeroso de las consecuencias que podría traer romperlas. Pero su mundo se tambalea cuando conoce a Miss Acacia, una cantante de voz dulce y ojos hipnóticos que despierta en él un amor tan profundo como peligroso. Decidido a conquistar su corazón, Jack se embarca en un viaje extraordinario que lo lleva desde los paisajes gélidos de Edimburgo hasta las calles cálidas de París y Granada.<br>'+
      '<br>En el camino, Jack descubrirá que el amor, aunque dulce, es también una fuerza capaz de desafiarlo todo, incluso las limitaciones impuestas por su propio reloj de cuco. Cada paso que da lo enfrenta a las complejidades y las heridas que solo el amor puede infligir, mientras aprende que, aunque su corazón sea mecánico, los sentimientos que alberga son profundamente humanos. Su historia es un relato encantador y melancólico sobre la vulnerabilidad, la pasión y los sacrificios necesarios para seguir los dictados del corazón.<br>',
      imagen:'corme.jpg',
      categoria: 'Romance',
      reseña: 'Una novela mágica y poética ambientada en el siglo XIX. Jack nació con un corazón defectuoso y para sobrevivir, le implantan un reloj en su pecho. Su vida se complica cuando se enamora de una cantante, pues el amor pone en riesgo su frágil mecanismo. Una historia con una mezcla de fantasía y romance conmovedor.',
    },
    {
      titulo:'El Fabricante de Lagrimas',
      autor:'Erin Doom',
      descripcion:'En el orfanato donde Nica pasó su infancia, las noches siempre fueron iluminadas por velas y llenas de relatos inquietantes. Entre todas las historias y leyendas compartidas, una en particular resonaba por encima de las demás: la del Fabricante de Lágrimas, un enigmático artesano al que se le atribuía la creación de todos los temores y angustias que anidan en el corazón humano. Para Nica, sin embargo, esas leyendas eran tan solo ecos de la niñez que estaba lista para dejar atrás, especialmente ahora que su mayor sueño estaba a punto de hacerse realidad: ser adoptada.<br>'+
      '<br>Pero este nuevo capítulo de su vida no lo emprenderá sola. Su familia adoptiva también abrirá las puertas a Rigel, un niño con un rostro angelical que esconde un pasado oscuro y misterioso. Aunque ambos comparten un origen común, la convivencia entre ellos será todo menos sencilla. Las diferencias y las tensiones se multiplicarán, especialmente cuando algo inesperado suceda: la leyenda del Fabricante de Lágrimas cobrará vida y empezará a manifestarse de formas aterradoramente reales.<br>'+
      '<br>Enfrentados no solo a las sombras de su pasado, sino también a los oscuros secretos que la leyenda encierra, Nica y Rigel tendrán que navegar un camino lleno de desafíos. Juntos descubrirán que a veces, las historias más aterradoras contienen verdades ocultas que pueden cambiar el destino de aquellos lo suficientemente valientes como para enfrentarlas.',
      imagen:'lagrimas.jpg',
      categoria: 'Dark Romance',
      reseña: 'Dos huérfanos, Nica y Rigel, viven con el recuerdo de una leyenda sobre el "Fabricante de lágrimas". A medida que crecen juntos, descubren que su pasado está más conectado de lo que imaginaban. Un romance oscuro, con una narrativa intensa que explora el dolor y el amor.',
    },
    {
      titulo:'A dos metros de ti',
      autor:'Rachel lippincott',
      descripcion:'Stella Grant es una joven que vive su vida bajo estrictas reglas. Con la fibrosis quística marcando cada uno de sus días, se ha acostumbrado a controlar cada detalle, manteniendo la distancia de dos metros que le separa de las personas para evitar infecciones que podrían poner en riesgo su frágil existencia. Su mundo, aunque limitado por su enfermedad, parece estar bajo control, hasta que conoce a Will Newman.<br>'+
      '<br>Will, un joven que también vive con fibrosis quística, tiene un enfoque completamente distinto hacia su condición. Desafiante y rebelde, su resistencia a seguir el tratamiento con rigor lo convierte en el opuesto de Stella. Pero en esa oposición surge algo inesperado: una conexión profunda que los lleva a replantearse las barreras que los separan, tanto físicas como emocionales.<br>'+
      '<br>A medida que Stella y Will navegan entre sus estrictas realidades y la creciente cercanía entre ellos, se enfrentan a una pregunta fundamental: ¿el amor puede realmente desafiar las reglas que han definido sus vidas? Su historia es un delicado equilibrio entre la búsqueda de una vida plena y la lucha contra los límites impuestos por sus cuerpos, un relato que explora la fortaleza humana, la fragilidad y la intensidad del primer amor.<br>',
      imagen:'metros.jpg',
      categoria: 'Romance',
      reseña: 'Stella y Will son adolescentes con fibrosis quística que deben mantener una distancia de dos metros entre ellos para evitar complicaciones médicas. A pesar de las reglas, su conexión emocional crece y deben enfrentarse a la imposibilidad de tocarse. Una historia emotiva sobre el amor y la pérdida.',
    },
    {
      titulo:'Twisted Love',
      autor:'Ana Huang',
      descripcion:'En Twisted Love de Ana Huang, Ava Chen es una talentosa fotógrafa conocida por su naturaleza cálida y optimista, aunque oculta un pasado lleno de sombras y traumas que la han marcado profundamente. Por otro lado, Alex Volkov es un hombre frío, brillante y exitoso, consumido por una obsesión de venganza que lo ha dejado emocionalmente distante de todo y de todos.<br>'+
      '<br>Cuando Alex, cumpliendo con un favor al mejor amigo de Ava, asume el papel de protector en su vida, sus mundos chocan de formas impredecibles. Lo que comienza como una convivencia forzada se transforma lentamente en una conexión intensa e innegable, desafiando las barreras que ambos han construido a su alrededor. Sin embargo, el amor entre ellos no es simple; está lleno de secretos oscuros, riesgos inminentes y decisiones que podrían cambiar sus vidas para siempre.<br>'+
      '<br>Con una combinación de pasión desenfrenada, intriga emocional y giros inesperados, Twisted Love lleva a los lectores a través de un viaje de redención, sanación y el descubrimiento del amor en su forma más cruda y auténtica. Es un romance que deja huella y que prueba que, incluso en las almas más rotas, puede haber lugar para el amor verdadero.<br>',
      imagen:'tlove.jpg',
      categoria: 'Contemporaneo',
      reseña: 'Una serie de romance contemporáneo donde cada libro se centra en diferentes parejas. Con personajes intensos y dinámicas de amor complejas, cada historia explora temas como la venganza, el poder, la traición y la pasión desenfrenada.',
    },
    {
      titulo:'Twisted Games',
      autor:'Ana Huang',
      descripcion:'Bridget von Ascheberg, una princesa atrapada entre las expectativas de su linaje y su anhelo de libertad, ve su vida cambiar por completo tras la inesperada abdicación de su hermano. Obligada a asumir mayores responsabilidades reales, se encuentra en medio de un torbellino político y social, donde cada movimiento que hace es observado y juzgado.<br>'+
      '<br>En este escenario de presión y deber, aparece Rhys Larsen, su nuevo guardaespaldas. Con una personalidad estoica y una disciplina inquebrantable, Rhys es un hombre marcado por un pasado lleno de sombras y secretos. Aunque su relación comienza de manera estrictamente profesional, las circunstancias los acercan de una forma que ninguno de los dos esperaba.<br>'+
      '<br>Lo que comienza como un deber se transforma en un vínculo prohibido, donde la tensión y el deseo se entrelazan con los obstáculos que los separan. Bridget y Rhys enfrentan el peso de sus responsabilidades, las diferencias sociales que los dividen y los secretos que amenazan con salir a la luz. En medio de este conflicto, deberán decidir si el amor que sienten es lo suficientemente fuerte como para desafiar las reglas y redefinir su destino.<br>'+
      '<br>Twisted Games ofrece una historia que combina pasión, intriga y lucha por la libertad, llevando a sus lectores a un mundo donde el amor verdadero desafía cualquier barrera.',
      imagen:'game.jpg',
      categoria: 'Contemporaneo',
      reseña: 'Una serie de romance contemporáneo donde cada libro se centra en diferentes parejas. Con personajes intensos y dinámicas de amor complejas, cada historia explora temas como la venganza, el poder, la traición y la pasión desenfrenada.',
    },
    {
      titulo:'Twisted Hate',
      autor:'Ana Huang',
      descripcion:'Twisted Hate, de Ana Huang, es el tercer libro de la serie Twisted, una apasionante novela de romance contemporáneo que combina pasión, tensión y secretos oscuros. La historia sigue a Josh Chen, un futuro médico arrogante y encantador, y a Jules Ambrose, una estudiante de derecho decidida y con un pasado complicado. Desde el momento en que se conocieron, ambos han sentido una intensa animosidad mutua, pero esa tensión pronto se transforma en algo mucho más profundo.<br>'+
      '<br>Lo que comienza como una relación de "enemigos con beneficios" pronto se convierte en un vínculo lleno de emociones complejas y desafíos inesperados. A medida que Josh y Jules se acercan, los secretos de sus pasados resurgen, amenazando con destruir lo que han construido juntos. Entre la pasión y el dolor, ambos deberán decidir si su conexión es lo suficientemente fuerte como para superar las barreras que los separan.<br>',
      imagen:'hate.jpg',
      categoria: 'Contemporaneo',
      reseña: 'Una serie de romance contemporáneo donde cada libro se centra en diferentes parejas. Con personajes intensos y dinámicas de amor complejas, cada historia explora temas como la venganza, el poder, la traición y la pasión desenfrenada.',
    },
    {
      titulo:'Twisted Lies',
      autor:'Ana Huang',
      descripcion:'En Twisted Lies, de Ana Huang, conocemos a Stella Alonso, una influencer de redes sociales dulce y reservada, que guarda su corazón tras una coraza de timidez. Su vida da un giro inesperado cuando Christian Harper, su vecino y un hombre tan encantador como peligroso, entra en escena. Christian, dueño de una empresa de seguridad y con un pasado oscuro, se siente irresistiblemente atraído por Stella, convirtiéndola en su obsesión y en el único enigma que no puede resolver.<br>'+
      '<br>Cuando una amenaza del pasado de Stella resurge, Christian le ofrece un trato que no puede rechazar: fingir ser su novio para protegerla y, al mismo tiempo, ayudarla a impulsar su carrera como influencer. Sin embargo, lo que comienza como un acuerdo práctico pronto se convierte en una relación cargada de pasión, secretos y mentiras. A medida que sus mundos se entrelazan, ambos deberán enfrentarse a las sombras de sus pasados y a las verdades que podrían destruirlo todo.<br>'+
      '<br>Con una narrativa intensa y personajes complejos, Twisted Lies explora el amor, la obsesión y los sacrificios que se hacen en nombre de la verdad y la protección. Es una historia que combina romance, intriga y emociones profundas, atrapando a los lectores hasta la última página.<br>',
      imagen:'lies.jpg',
      categoria:'Contemporaneo',
      reseña:'Una serie de romance contemporáneo donde cada libro se centra en diferentes parejas. Con personajes intensos y dinámicas de amor complejas, cada historia explora temas como la venganza, el poder, la traición y la pasión desenfrenada.'
    },
    {
      titulo:'CIRCE',
      autor:'Madeline Miller ',
      descripcion:'En el palacio de Helios, el dios del sol y el más poderoso de los titanes, nace una niña. Pero Circe no es como los demás; carece de los prodigiosos poderes de su padre y de la deslumbrante capacidad de seducción de su madre. Rechazada por sus propios dioses, Circe busca compañía en el mundo de los mortales y, en ese proceso, descubre algo extraordinario: el poder de la brujería. Con este don, es capaz de transformar a sus enemigos en monstruos y desafiar incluso a los dioses más temidos.<br>'+
      '<br>Su poder, sin embargo, despierta el temor de Zeus, quien decide desterrarla a una isla desierta. Allí, en su soledad, Circe perfecciona sus artes oscuras, doma bestias salvajes y cruza caminos con figuras legendarias de la mitología griega: el Minotauro, Dédalo y su hijo Ícaro, la implacable Medea, y, por supuesto, el astuto Odiseo. A pesar de su aparente aislamiento, la amenaza sigue acechándola, pues Circe, sin saberlo, ha provocado la ira tanto de los dioses como de los hombres. Al final, se verá obligada a enfrentarse a uno de los olímpicos más poderosos y vengativos.<br>'+
      '<br>Para proteger lo que ama, Circe deberá reunir toda su fuerza y enfrentarse a una decisión crucial: ¿pertenece al mundo inmortal en el que nació o al mundo humano que ha aprendido a amar? Repleta de personajes inolvidables y con un estilo narrativo cautivador, *Circe* es una épica envolvente sobre rivalidades familiares, intrigas palaciegas, amor y pérdida. Al mismo tiempo, celebra la fuerza femenina indómita en un universo gobernado por hombres, dejando una marca imborrable en quienes se sumergen en su historia.<br>',
      imagen:'circe.jpg',
      categoria: 'Fantasia',
      reseña: 'Una reinvención de la mitología griega que sigue la historia de Circe, una poderosa hechicera que es rechazada por los dioses y encuentra su lugar entre los humanos. A través de su vida, enfrenta desafíos épicos y descubre su verdadera fuerza. Una narrativa envolvente y poética.',
    },
    { 
      titulo: "Bridgerton - El duque y Yo ", 
      autor: "Julia Quinn", 
      descripcion: 'Daphne Bridgerton está cansada de ser vista solo como la "amiga perfecta" por los solteros de Londres. Desea que, por una vez, la consideren una mujer atractiva, deseable y llena de encanto, no únicamente amigable y bonita. Por otro lado, Simon Basset, el misterioso duque de Hastings, busca mantenerse lejos de los reflectores de la alta sociedad, especialmente de las madres ansiosas por casar a sus hijas con el mejor partido. Y, como duque, Simon es precisamente el blanco ideal.<br>'+
'<br>Cuando sus caminos se cruzan, surge un plan que parece perfecto: Simon fingirá cortejarla, ayudándola a captar la atención de los jóvenes londinenses, mientras Daphne actuará como su escudo ante las insistentes madres que desean un yerno. Pero lo que comienza como un acto cuidadosamente planeado se transforma en algo más profundo. La química entre ellos crece y las emociones, cada vez más intensas, se vuelven imposibles de ignorar.<br>'+
            '<br>Sin embargo, Simon guarda oscuros secretos que amenazan con romper el vínculo que han formado. Daphne deberá enfrentarse a una difícil decisión: ¿puede su amor resistir las barreras que se alzan entre ellos, o los secretos del duque serán más fuertes que su atracción? Una historia de pasión, desafíos y emociones a flor de piel que pondrá a prueba la fuerza de su conexión.',
      imagen: "duque_.jpg",
      categoria: 'Romance',
      reseña: 'Una saga de romance histórico ambientada en la Regencia, con protagonistas encantadores que buscan el amor en medio de normas sociales rígidas. Cada libro sigue a un miembro de la familia Bridgerton en su camino hacia el matrimonio y el amor verdadero.',
    },
    {
      titulo:'Bridgerton - El Visconde que me amo',
      autor: 'Julia Quinn',
      descripcion:'Anthony Bridgerton está decidido a encontrar una esposa. Tras presenciar la trágica muerte de su padre debido a una picadura de abeja, Anthony entiende que el tiempo no perdona. Con esta urgencia, ha elegido a Edwina Sheffield como la candidata ideal para ser su vizcondesa, pues reúne todas las cualidades que él considera necesarias. Sin embargo, existe un obstáculo inesperado.<br>'+
      '<br>Kate Sheffield, la hermana mayor de Edwina.Kate está convencida de que Anthony Bridgerton no es el hombre adecuado para su hermana menor. En cada encuentro entre ambos, Kate no duda en expresar su desprecio hacia él, dejando en claro que lo considera indigno.<br>'+
      '<br>Pero, paradójicamente, estas tensas interacciones los acercan de maneras inexplicables, haciéndolos bajar las defensas. Cuando sus emociones finalmente se desbordan, deberán enfrentar las consecias',
      imagen:'conde.jpg',
      categoria:'Romance',
      reseña:'Una saga de romance histórico ambientada en la Regencia, con protagonistas encantadores que buscan el amor en medio de normas sociales rígidas. Cada libro sigue a un miembro de la familia Bridgerton en su camino hacia el matrimonio y el amor verdadero.',
    },
    {
      titulo:'Bridgerton - Te doy mi corazón',
      autor:'Julia Quinn',
      descripcion:'Sophie Beckett nunca soñó con asistir a una de las grandiosas fiestas de Lady Bridgerton. Después de todo, su madrastra siempre la había confinado a un rincón de invisibilidad, tratándola como si no fuera más que una sirvienta. Pero esa noche era diferente. Oculta tras una máscara y armada con un valor que apenas reconocía como suyo, Sophie se prometió disfrutar cada instante de la velada, hasta que el reloj marcara las doce. En la pista de baile, el mundo pareció detenerse cuando sus ojos se cruzaron con los de Benedict Bridgerton. '+
      'Por primera vez, se permitió soñar.<br>Benedict Bridgerton no esperaba nada fuera de lo común en el baile familiar; otro evento más entre la élite londinense. Pero todo cambió al ver a aquella misteriosa joven, cuya elegancia y dulzura parecían eclipsar todo a su alrededor.<br> En un abrir y cerrar de ojos, quedó cautivado, su corazón entregado a una desconocida. Sin embargo, la magia de la noche se desvaneció cuando ella desapareció antes de que pudiera siquiera conocer su nombre.'+
      'Cuando el destino los reúna de nuevo, Benedict deberá enfrentarse a sus propias creencias sobre la sociedad y el estatus, mientras Sophie luchará con el temor de que su humilde origen sea una barrera insuperable. <br>¿Podrán encontrar juntos su "felices para siempre," o las apariencias serán el obstáculo que transforme esta historia de amor en un cuento de desamor?',
      imagen:'coraon.jpg',
      categoria: 'Romance',
      reseña: 'Una saga de romance histórico ambientada en la Regencia, con protagonistas encantadores que buscan el amor en medio de normas sociales rígidas. Cada libro sigue a un miembro de la familia Bridgerton en su camino hacia el matrimonio y el amor verdadero.',
    },
    {
      titulo:'Bridgerton - Seduciendo a Mr. Bridgerton',
      autor:'Julia Quinn',
      descripcion:'Penelope Featherington siempre supo lo que sentía por Colin Bridgerton. Desde el momento en que lo vio por primera vez, su corazón le perteneció, aunque estaba claro que él no compartía el mismo sentimiento. <br>'+'<br>Durante años, lo observó desde las sombras, convencida de que conocía cada faceta de su encantadora personalidad. Pero todo cambia cuando descubre un lado de Colin que nunca imaginó, un secreto que pone en duda su percepción de él y revela una profundidad que había pasado desapercibida.<br>'+
      '<br>Para Colin Bridgerton, ser “encantador” era un papel que desempeñaba con naturalidad, pero uno que con el tiempo comenzó a sentirse vacío. ¿Qué significado real podía tener su vida si no dejaba algo trascendental detrás? Es Penelope, la mejor amiga de su hermana y una presencia constante que siempre había dado por sentada, quien inesperadamente se convierte en el centro de su reflexión. Con ella comienza a descubrir quién realmente es, y lo más importante, quién desea ser.<br>'+
      '<br>En esta historia de amor inesperado, Colin deberá superar las barreras de su propia percepción, mientras Penelope enfrenta el miedo de abrir su corazón por completo. ¿Podrán ambos encontrar su camino hacia el amor, o los secretos que guardan amenazarán con separarlos para siempre?',
      imagen:'señorb.jpg',
      categoria: 'Romance',
      reseña: 'Una saga de romance histórico ambientada en la Regencia, con protagonistas encantadores que buscan el amor en medio de normas sociales rígidas. Cada libro sigue a un miembro de la familia Bridgerton en su camino hacia el matrimonio y el amor verdadero.',
    },
    {
      titulo:'Orgullo y Prejuicio',
      autor:'Jane Austen',
      descripcion:'Elizabeth Bennet, una joven astuta e independiente, vive en la Inglaterra rural del siglo XIX, donde las expectativas sociales y familiares dictan la importancia de encontrar un buen matrimonio. Junto a sus cuatro hermanas, enfrenta las presiones de una sociedad donde la posición social y la fortuna definen las oportunidades para las mujeres.<br>'+
      '<br>La llegada del reservado y orgulloso señor Darcy a su vida marca el inicio de una relación turbulenta. Desde su primer encuentro, los prejuicios mutuos y los malentendidos tiñen su interacción, dando lugar a desencuentros que parecen insalvables. Sin embargo, a medida que las circunstancias los obligan a conocerse mejor, ambos empiezan a cuestionar sus creencias y actitudes.<br>'+
      '<br>En este camino lleno de conflictos emocionales, Elizabeth y Darcy se ven forzados a confrontar no solo las barreras sociales que los separan, sino también las inseguridades y juicios que arrastran consigo. Poco a poco, el amor comienza a florecer entre ellos, mostrando que incluso los corazones más orgullosos y los prejuicios más arraigados pueden ser superados.<br>',
      imagen:'Orgullo.jpg',
      categoria: 'Romance',
      reseña: 'Un clásico de la literatura que sigue a Elizabeth Bennet y el orgulloso señor Darcy. A través de malentendidos y prejuicios, ambos aprenden sobre el amor y el carácter, en una historia llena de ironía y crítica social.',
    },
    {
      titulo:'El Perfume del Rey',
      autor:'Karine Bernal Lobo',
      descripcion:'Emily Malhore, hija de los célebres perfumistas del reino de Mishnock, siempre disfrutó de una vida apacible y llena de aromas exquisitos. Sin embargo, el destino tenía otros planes para ella. Su encuentro inesperado con el príncipe Stefan, quien quedó fascinado por su singular esencia y gracia, marcaría el inicio de una serie de eventos que transformarían su vida para siempre.<br>'+
      '<br>Sumida en un torbellino de nuevas relaciones con los miembros de las altas casas de la nación, Emily se enfrentará a desafíos inesperados. La guerra desatada contra el poderoso reino Lacrontte, las intensas luchas por el poder, los lazos de amor y amistad puestos a prueba por la traición, y los secretos que oscurecen incluso a las almas más puras, pondrán en juego su fuerza y convicción.<br>'+
      '<br>En su viaje, la dulce Emily aprenderá que no solo el príncipe Stefan tiene el poder de sacudir su mundo. Descubrirá verdades sobre sí misma y sobre los demás que la llevarán a situaciones que nunca había imaginado presenciar, dejando atrás la sencillez de su vida para adentrarse en un destino lleno de intensidad, drama y pasión. Su historia será un lienzo de amor, engaño, sacrificio y transformación, una lucha constante por mantener su esencia en un mundo plagado de desafíos.<br>',
      imagen:'perfume.jpg',
      categoria: 'Fantasia',
      reseña: 'La secuela de El perfume del rey, esta novela sigue a Emily Malhore, quien ahora es prisionera en el palacio de Stefan Denavritz, el rey de Mishnock. En medio de intrigas políticas y conflictos personales, Emily se convierte en una pieza clave en las negociaciones de paz entre dos reinos enemigos. La historia mezcla romance, poder y traición, mientras la protagonista enfrenta decisiones que desafían sus convicciones',
    },
    {
      titulo:'Las Cadenas del Rey',
      autor:'Karine Bernal Lobo',
      descripcion:'Tras la cruel traición del hombre que una vez creyó ser el amor de su vida, Emily Malhore, hija de los renombrados perfumistas de Mishnock, encuentra su hogar en el majestuoso pero opresivo palacio real. Ahora prisionera del frío y calculador Rey Stefan Denavritz, su mundo se ha transformado en una jaula dorada, donde las intrigas y el poder acechan en cada rincón.<br>'+
      '<br>Atrapada en un torbellino de emociones, Emily comienza a librar una guerra interna que desafía sus propios sentimientos. Cuando el temido y enigmático Rey Magnus Lacrontte, conocido por su imponente fuerza y misteriosa presencia, invade su mundo, las reglas que una vez gobernaron su corazón se desmoronan. Magnus despierta en ella deseos prohibidos y sensaciones desconocidas, llevándola a cuestionar si alguna vez ha experimentado el verdadero amor.<br>'+
      '<br>Mientras los juegos de poder se convierten en sus aliados y nuevos vínculos la conducen hacia destinos que alguna vez parecían imposibles, Emily descubre que su felicidad no reside únicamente en la fuerza de su voluntad o su capacidad para prosperar en un reino turbulento. Solo podrá alcanzar la paz y la libertad cuando encuentre el coraje para liberar su corazón de las cadenas del miedo y la traición, permitiéndose descubrir quién es realmente y qué significa amar.<br>',
      imagen:'cadenas.jpg',
      categoria: 'Fantasia',
      reseña: 'Es una novela juvenil que mezcla romance e intriga política. La historia sigue a Emily Malhore, hija de los perfumistas más famosos del reino de Mishnock, quien lleva una vida tranquila hasta que el príncipe Stefan se fija en ella, convirtiéndola en el centro de atención de su pueblo y de sus enemigos',
    },
    {
      titulo:'El Corazón del Rey',
      autor:'Karine Bernal Lobo',
      descripcion:'Las cicatrices de un pasado marcado por el dolor persiguen al Rey Magnus Lacrontte, un hombre que ha construido murallas infranqueables alrededor de su corazón, decidido a no permitir que nadie lo hiera nuevamente. Pero el destino, en su caprichosa ironía, lo coloca en una posición que él considera su mayor debilidad: enamorarse.<br>'+
      '<br>La muerte de seres queridos, el sabor amargo de su primer amor, las marcas de una traición que nunca sanó y las interminables batallas que han definido su vida, han moldeado el carácter frío y arrogante de Magnus. Sin embargo, hay un nombre que logra atravesar su impenetrable coraza: Emily Malhore. Bajo su influencia, el imponente y temido rey se enfrenta a emociones que nunca creyó posibles, dejando entrever un lado vulnerable que pocos podrían imaginar.<br>'+
      '<br>Mientras exploramos los rincones oscuros de la vida de Magnus, descubrimos los secretos que han cimentado su personalidad y los eventos que lo han llevado a convertirse en el hombre que ahora gobierna. Desde los ecos de su tormentoso pasado hasta las decisiones que definirán su futuro, seremos testigos de una historia épica de amor, donde el poder, el sacrificio y la redención convergen, y donde Magnus deberá decidir si abrir su corazón por última vez podría ser su mayor acto de valentía.<br>',
      imagen:'rey1.jpg',
      categoria: 'Fantasia',
      reseña: 'La historia sigue la vida de Magnus Lacrontte, un monarca con un pasado tormentoso que debe lidiar con el poder y el amor. A medida que la trama avanza, se enfrenta a decisiones que afectan su destino.',
    },
    {
      titulo:'FLEUR',
      autor:'Ariana Godoy',
      descripcion:'Una sola noche bastó para que mi vida se desmoronara por completo. Él destruyó todo lo que amaba, acabó con mi familia y, por alguna razón que todavía no comprendo, decidió perdonarme la vida. A veces pienso que dejarme vivir fue su castigo más cruel, como si hubiese querido condenarme a un sufrimiento eterno.<br>'+ 
      '<br>Cada día es una lucha constante por sobrevivir, por mantenerme en pie mientras el recuerdo de aquella noche se mezcla con la incertidumbre. No pasa ni un instante en el que no intente reconstruir los fragmentos de esa memoria perdida, visualizar su rostro, identificarlo. Soy la única que salió con vida, la única testigo de sus crímenes. Sin embargo, mi mente me traiciona, bloqueando las respuestas que podrían llevar a hacer justicia por mi familia y por las demás víctimas. La impotencia me consume, y la desesperación por no poder cerrar este capítulo duele como una herida abierta.<br>'+
      '<br>Pero no pienso rendirme. Voy a recordar. Voy a encontrarlo, y voy a asegurarme de que pague por todo el daño que ha causado. No importa el precio que deba pagar. Si mi vida se convierte en el costo de justicia, entonces estoy dispuesta a entregarla. Mi dolor será mi fuerza, y mi determinación será la espada que atraviese la sombra de su crueldad.<br>',
      imagen:'fleur.jpg',
      categoria: 'Romance',
      reseña: 'Un thriller con una protagonista que intenta resolver el asesinato de su familia mientras se enfrenta a fuerzas misteriosas. La historia mezcla drama, misterio y venganza',
    },
    {
      titulo:'Insania',
      autor:'Ariana Godoy',
      descripcion:'Todos llevamos dentro un fragmento de locura, una chispa de irracionalidad que, sin saberlo, lo alimenta. Esa misma locura es la que dibuja en su rostro una sonrisa siniestra, revelando dientes afilados, ansiosos por desgarrar piel y liberar la esencia de la vida. Él no necesita palabras ni señales; puede olfatear la locura en tu alma como un sabueso implacable, siempre hambriento de dolor, siempre buscando teñir el mundo con decadencia y muerte.<br>'+
      '<br>Su presencia es un susurro en la oscuridad, una sombra que se desliza entre los rincones más profundos de tu mente. Pero cuidado, no pronuncies su nombre. Decirlo es invitarlo, es abrirle la puerta a tus miedos más profundos y dejar que se convierta en el dueño de tu realidad. Shhh... guarda silencio, porque en el silencio es donde él acecha.<br>',
      imagen:'insania.jpg',
      categoria: 'Suspenso',
      reseña: 'Una novela de horror y suspenso psicológico que explora la locura y el fanatismo en un entorno oscuro y opresivo.',
    },
    {
      titulo:'Antes de Diciembre',
      autor:'Joana Marcús',
      descripcion:'Para Jenna Brown, su primer año en la universidad representaba un punto de inflexión: dejar atrás a su familia y amigos para enfrentarse, por primera vez, al mundo por su cuenta. Con la emoción de un nuevo comienzo también llegaron las incertidumbres y los desafíos, incluyendo los que surgieron en su relación.<br>'+
      '<br>Su novio había sido claro desde el principio: a partir de ese momento, su relación sería a distancia y abierta. Ambos podrían hacer lo que quisieran, confiando en que el amor que sentían el uno por el otro los mantendría unidos. Jenna intentó convencerse de que aquello tenía sentido, pero el destino no tardaría en poner a prueba su aparente acuerdo.<br>'+
      '<br>Cuando comenzó a pasar tiempo con el mejor amigo del novio de su compañera de habitación, la atracción surgió de forma natural e inevitable. ¿Qué importaba si algo sucedía entre ellos, mientras su novio no estuviera? Al fin y al cabo, todo debería volver a la normalidad en diciembre, ¿o no?<br>'+
      '<br>El reloj corría, y Jenna tenía hasta entonces para desentrañar lo que realmente quería, descubrir hasta qué punto sus decisiones podían cambiarlo todo y si los lazos del amor podían sobrevivir a la libertad. En ese breve intervalo, su vida podía dar un giro que jamás habría imaginado.<br>',
      imagen:'antes.jpg',
      categoria: 'Romance',
      reseña: 'Una novela juvenil donde la protagonista experimenta una relación abierta antes de diciembre. Conforme avanza la historia, descubre el amor y los desafíos de las emociones intensas.',
    },
    {
      titulo:'El laberinto del Fauno',
      autor:'Guillermo del toro',
      descripcion:'Ofelia, una niña con una imaginación desbordante, se muda junto a su madre al hogar del cruel y despiadado Capitán Vidal, su nuevo padrastro. En un ambiente marcado por la violencia y la opresión de la España de 1944, Ofelia busca refugio en un mundo de fantasía para escapar de las sombras que oscurecen su realidad.<br>'+
      '<br>En medio de este tumulto, descubre un antiguo laberinto cerca de su nuevo hogar. Allí, un fauno enigmático se le presenta y le revela una verdad sorprendente: Ofelia podría ser la reencarnación de una princesa perdida de un reino subterráneo mágico. Para reclamar su lugar en ese mundo oculto, deberá superar tres pruebas peligrosas y llenas de simbolismo, cada una diseñada para medir su valentía, compasión y fidelidad.<br>'+
      '<br>Mientras la delgada línea entre la realidad y la fantasía comienza a desdibujarse, Ofelia se enfrentará a desafíos tanto en su mundo real como en el mágico, descubriendo hasta dónde es capaz de llegar por proteger lo que ama y por mantenerse fiel a sí misma en un mundo que parece empeñado en destruirla. Su viaje será una lucha constante entre el bien y el mal, donde las elecciones que tome no solo cambiarán su destino, sino también el de quienes la rodean.<br>',
      imagen:'fauno.jpg',
      categoria: 'Fantasia',
      reseña: 'Es una adaptación de la famosa película de Del Toro. La historia está ambientada en la España de posguerra civil y sigue a Ofelia, una niña que se muda con su madre embarazada a un molino en el campo, donde vive su nuevo padrastro, el cruel Capitán Vidal. <br>Para escapar de la brutal realidad que la rodea, Ofelia se adentra en un misterioso laberinto donde conoce a un fauno, quien le revela que ella es la reencarnación de una princesa perdida. Para regresar a su reino, debe completar tres pruebas que la llevarán a enfrentarse a criaturas mágicas y desafíos oscuros.',
    },
  ];

  function renderizarLibros(lista) {
    const listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = "";

    lista.forEach((libro, indice) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}" style="max-width:80px; margin-right:10px; vertical-align:middle;">
        <div>
          <strong>${libro.titulo}</strong> - ${libro.autor}<br>
          <button onclick="mostrarDescripcion(${indice})">Ver Descripción</button>
          <button onclick="mostrarResena(${indice})">Reseña</button>
        </div>
      `;
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.gap = "10px";
      li.style.marginBottom = "10px";
      listaLibros.appendChild(li);
    });
  }

  window.mostrarDescripcion = function(indice) {
    const libro = libros[indice];
    const detalleLibro = document.getElementById("detalleLibro");
    detalleLibro.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p><em>Autor:</em> ${libro.autor}</p>
      <img src="${libro.imagen}" alt="${libro.titulo}" style="max-width:200px; display:block; margin-bottom:10px;">
      <p>${libro.descripcion}</p>
      <button onclick="navegarA('catalogo')" style="margin-top: 20px;">Volver al Catálogo</button>
    `;
    navegarA("descripcion");
  }

  window.mostrarResena = function(indice) {
    const libro = libros[indice];
    const listaResenas = document.getElementById("listaResenas");
    listaResenas.innerHTML = `
      <h3>Reseña de: ${libro.titulo}</h3>
      <p>${libro.reseña}</p>
      <button onclick="navegarA('catalogo')" style="margin-top: 20px;">Volver al Catálogo</button>
    `;
    navegarA("resenas");
  }

  window.filtrarLibros = function(categoria) {
    const librosFiltrados = categoria ? libros.filter(libro => libro.categoria === categoria) : libros;
    renderizarLibros(librosFiltrados);
    navegarA("catalogo");
  }

  document.getElementById("ordenarTitulo").addEventListener("click", () => {
    const sorted = libros.slice().sort((a, b) => a.titulo.localeCompare(b.titulo));
    renderizarLibros(sorted);
  });

  document.getElementById("ordenarAutor").addEventListener("click", () => {
    const sorted = libros.slice().sort((a, b) => a.autor.localeCompare(b.autor));
    renderizarLibros(sorted);
  });

  function navegarA(idSeccion) {
    document.querySelectorAll(".seccion").forEach(sec => sec.classList.remove("activa"));
    document.getElementById(idSeccion).classList.add("activa");
  }

  document.querySelectorAll("nav ul li a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const idSeccion = this.getAttribute("href").substring(1);
      navegarA(idSeccion);
    });
  });

  renderizarLibros(libros);
  window.navegarA = navegarA;
});
const librosCompra = [
  { titulo: "Los Margenes del Juego", imagen: "margen.jpg", precio: "$390" },
  { titulo: "Hechizado", imagen: "hechizados.jpg", precio: "$290" },
  { titulo: "Inevitable Destrucción", imagen: "destruccion.jpg", precio: "$360" },
  { titulo: "De Sangre y Cenizas", imagen: "seniza.jpg", precio: "$295" },
  { titulo: "Damian", imagen: "damian.jpg", precio: "$360" },
  { titulo: 'Pretty Monster', imagen:'dark.jpg' , precio: '$350'},
  { titulo: 'Hunt Me Darling', imagen:'hunde.jpg' , precio: '$ 340'},
  { titulo: 'Hide Me Darling', imagen:'hide.jpg' , precio: '$ 330'},
  { titulo: 'Haunting Adeline', imagen:'adeline.jpg' , precio: ''},
  { titulo: 'Haunted Love', imagen:'lovdha.jpg' , precio: '$340'},
  { titulo: '365 días', imagen:'365.jpg' , precio: '$ 390'},
  { titulo: 'La Mecanica del Corazón', imagen:'corme.jpg' , precio: '$230'},
  { titulo: 'El Fabricante de Lagrimas', imagen:'lagrimas.jpg' , precio: '$500'},
  { titulo: 'A dos metros de ti', imagen:'metros.jpg' , precio: '$260'},
  { titulo: 'Twisted Love', imagen:'tlove.jpg' , precio: '$390'},
  { titulo: 'Twisted Games', imagen:'game.jpg' , precio: '$ 390'},
  { titulo: 'Twisted Hate', imagen:'hate.jpg' , precio: '$ 390'},
  { titulo: 'Twisted Lies', imagen:'lies.jpg' , precio: '$ 390'},
  { titulo: 'CIRCE', imagen:'circe.jpg' , precio: '$ 230'},
  { titulo: 'Bridgerton - El duque y yo', imagen:'duque_.jpg' , precio: '$ 400'},
  { titulo: 'Bridgerton - El visconde que me amo', imagen:'conde.jpg' , precio: '$390'},
  { titulo: 'Bridgerton - Te doy mi corazón', imagen:'coraon.jpg' , precio: '$ 380'},
  { titulo: 'Bridgerton - Seduciendo a Mr.Bridgerton', imagen:'señorb.jpg' , precio: '$ 380'},
  { titulo: 'Orgullo y Prejuicio', imagen:'Orgullo.jpg' , precio: '$ 390'},
  { titulo: 'El Perfume del Rey', imagen:'perfume.jpg' , precio: '$ 260'},
  { titulo: 'Las Cadenas del Rey', imagen:'cadenas.jpg' , precio: '$ 270'},
  { titulo: 'El Corazón del Rey', imagen:'rey1.jpg' , precio: '$280'},
  { titulo: 'FLEUR', imagen:'fleur.jpg' , precio: '$ 290'},
  { titulo: 'Insania', imagen:'insania.jpg' , precio: '$ 320'},
  { titulo: 'Antes de Diciembre', imagen:'antes.jpg' , precio: '$ 360'},
  { titulo: 'El Laberinto del Fauno', imagen:'fauno.jpg' , precio: '$ 240'}
];

function renderizarCompra() {
  const compraSection = document.getElementById('compra');
  compraSection.innerHTML = '<h2>Compra tu Libro</h2><div id="librosCompra" style="display:flex; flex-wrap:wrap; gap:20px;"></div>';
  const librosCompraDiv = document.getElementById('librosCompra');

  librosCompra.forEach((libro, indice) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${libro.imagen}" alt="${libro.titulo}" style="width:150px; height:auto; border-radius:8px;"><br>
      <strong>${libro.titulo}</strong><br>
      <span>${libro.precio}</span><br>
      <button onclick="mostrarFormularioCompra(${indice})">Comprar</button>
    `;
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.textAlign = "center";
    div.style.paddingTop = "25px";
    div.style.minHeight = "70vh"; 
    div.style.background = "#fff";
    div.style.border = "2px solidrgb(255, 171, 206)";
    div.style.borderRadius = "8px";
    div.style.width = "200px"; 
    div.style.height = "230px";
    librosCompraDiv.appendChild(div);
  });
}
window.mostrarFormularioCompra = function(indice) {
  const libro = librosCompra[indice];
  const precioNumerico = parseFloat(libro.precio.replace('$', ''));
  const compraSection = document.getElementById('compra');

  compraSection.innerHTML = `
    <h2>Finalizar Compra</h2>
    <form id="formCompra">
      <input type="hidden" name="libro" value="${libro.titulo}">
      <label>Nombre:</label><br>
      <input type="text" name="nombre" required><br><br>

      <label>Teléfono :</label><br>
      <input type="text" name="telefono" pattern="\\d{10}" title="Debe tener exactamente 10 dígitos" required><br><br>

      <label>Domicilio :</label><br>
      <br><input type="text" name="calle" placeholder="Calle" required><br>
      <input type="text" name="colonia" placeholder="Colonia" required><br>
      <input type="text" name="municipio" placeholder="Municipio" required><br>
      <input type="text" name="estado" placeholder="Estado" required><br><br>

      <label>Cantidad :</label><br>
      <input type="number" id="cantidadLibros" name="cantidad" value="1" min="1" required><br><br>

      <label>Total del Libro:</label><br>
      <input type="text" id="totalLibro" value="${libro.precio}" disabled style="background-color:#eee;"><br><br>

      <label>Forma de Pago:</label><br>
      <select name="pago" id="formaPago" required>
        <option value=""  </option>
        <option value="Efectivo">Efectivo</option>
        <option value="Tarjeta">Tarjeta</option>
        <option value="Transferencia">Transferencia</option>
      </select><br><br>

      <div id="datosPagoExtra"></div>

      <label>Correo Electrónico:</label><br>
      <input type="email" name="correo" required><br><br>

      <button type="submit">Finalizar Compra</button>
    </form>
    <br>
    <button onclick="renderizarCompra()">Cancelar</button>
  `;

  const cantidadInput = document.getElementById('cantidadLibros');
  const totalInput = document.getElementById('totalLibro');

  cantidadInput.addEventListener('input', () => {
    const cantidad = parseInt(cantidadInput.value) || 1;
    const total = (precioNumerico * cantidad).toFixed(2);
    totalInput.value = `$${total}`;
  });

  const formaPago = document.getElementById('formaPago');
  const datosPagoExtra = document.getElementById('datosPagoExtra');

  formaPago.addEventListener('change', () => {
    const tipo = formaPago.value;
    datosPagoExtra.innerHTML = '';

    if (tipo === 'Tarjeta') {
      datosPagoExtra.innerHTML = `
        <label>Número de Tarjeta:</label><br>
        <input type="text" name="numeroTarjeta" pattern="\\d{16}" title="Debe tener 16 dígitos" required><br><br>
        <label>Fecha de Expiración:</label><br>
        <input type="month" name="expiracion" required><br><br>
        <label>CVV:</label><br>
        <input type="text" name="cvv" pattern="\\d{3}" title="Debe tener 3 dígitos" required><br><br>
      `;
    } else if (tipo === 'Transferencia') {
      datosPagoExtra.innerHTML = `
        <label>Nombre del Titular:</label><br>
        <input type="text" name="titular" required><br><br>
        <label>Número de Cuenta:</label><br>
        <input type="text" name="cuenta" pattern="\\d+" required><br><br>
        <label>Cantidad a Enviar:</label><br>
        <input type="number" name="cantidadTransferencia" required><br><br>
        <label>Banco:</label><br>
        <input type="text" name="banco" required><br><br>
        <label>Motivo:</label><br>
        <textarea name="motivo" required></textarea><br><br>
      `;
    }
  });

  document.getElementById('formCompra').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.reportValidity()) {
      alert("Por favor, completa correctamente todos los campos requeridos.");
      return;
    }
    emailjs.sendForm('service_1ys9qie', 'template_511qgfc', this)
      .then(() => {
        alert('¡Compra realizada! Revisa tu correo.');
        renderizarCompra();
      }, (error) => {
        alert('Error al enviar el correo: ' + JSON.stringify(error));
      });
  });
};
document.addEventListener("DOMContentLoaded", () => {
  renderizarCompra();
});
