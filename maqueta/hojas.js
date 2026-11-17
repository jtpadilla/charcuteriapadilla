// Transcripción de las hojas del proveedor (Ceylan). PROVISIONAL, leída de los escaneos de raw/.
// Se respeta el texto de cada hoja, con la ortografía y las unidades normalizadas.
// Cada hoja es una lista de bloques:
//   ["h", título]            apartado
//   ["p", texto]             párrafo
//   ["l", [[texto, valor]]]  líneas de dosificación (el valor es opcional)
//   ["ol", [paso, ...]]      pasos numerados
//   ["x", texto]             línea tachada a bolígrafo en el original
//   ["m", texto]             anotación a mano, en bolígrafo azul
//   ["a", texto]             aviso de quien transcribe
window.HOJAS = {
  "longaniza-aragon-033": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el magro, la panceta y los recortes limpios y pasarlo a la cámara a −2 °C."],
    ["h", "Dosificación masa"],
    ["l", [["3 kg de magro", "a 0 °C"], ["2 kg de panceta y recortes", "a −2 °C"],
           ["0,350 kg de CEYLAMIX n.º 033, o sea, 70 g por kg de masa"]]],
    ["x", "0,005 de PAKERS POWDER CH-C"],
    ["a", "La última línea está tachada a bolígrafo azul en el original. Los kilos de magro y de panceta se leen mal; cuadran con los 0,350 kg de mezcla a 70 g por kilo."],
    ["h", "Fabricación"],
    ["p", "Picar con placa de 8 o 10 milímetros, mezclándolo, el magro y la panceta y los recortes. Pasarlo a la amasadora y agregarle el CEYLAMIX n.º 033, en forma de papilla hecha con agua fría y un gramo de Jerez por kilo de masa. Amasar durante 5 o 6 minutos al 60 de vacío, si se tiene, y dejar la masa en la cámara a +2 °C durante 24 horas. Transcurrido este tiempo proceder a embutir en tripa china de cerdo, calibre 34-36."],
    ["p", "A continuación debe colgarse en lugar cerrado o en habitación de estufaje, con temperatura de +18 °C a +20 °C y 85-90 % de humedad, durante 24 horas. Posteriormente pasarlo a lugar más aireado o secadero artificial con humedad relativa del 70-75 %."],
    ["p", "Debe evitarse toda corriente directa de aire."]
  ],

  "hamburguesa-ave-911": [
    ["h", "Composición (para 5 kg de carne)"],
    ["l", [["Carne de ave (pollo, pavo)", "3,5 kg"], ["Panceta", "1,5 kg"], ["Agua fría (0 °C)", "1,0 kg"],
           ["CEYLAMIX 911", "0,175 kg"], ["Cereales y/o vegetales", "0,150 kg"]]],
    ["h", "Procedimiento de fabricación"],
    ["ol", [
      "Limpiar la carne de pollo de grasa y llevarla a la cámara a −2 °C, durante 18 a 24 horas.",
      "Limpiar la panceta de cerdo, eliminando la corteza, y pasarla a la cámara de −2 °C.",
      "Picar la carne de ave mezclada con la panceta con placa de 4-5 milímetros.",
      "Pasar la carne picada a la amasadora. Añadir el agua fría en la que, previamente, se ha dispersado el CEYLAMIX 911 y los cereales y/o vegetales. Amasar durante 5 o 6 minutos al 60 cm de vacío.",
      "Moldear la hamburguesa utilizando una prensa normal, añadiendo para esto las dos cubiertas de celofán.",
      "Es muy importante almacenar la hamburguesa inmediatamente en cámara a 0 °C + 2 °C."]],
    ["p", "Nuestro Departamento Técnico se ofrece para establecer las condiciones óptimas de fabricación en función de sus equipos e instalaciones, y para asesorarle en el cumplimiento de las exigencias legales."],
    ["a", "Es la única hoja con el membrete de «Manufacturas Ceylan, S.L.» y el sello «Departamento de Aseguramiento de la Calidad». El título dice «Haburguesa de ave 911 (burguer meat)»."]
  ],

  "sobrasada-mallorca-035": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger la panceta, recortes y papada limpios de cortezas y coágulos de sangre y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["3,500 kg de panceta y recortes", "a 0 °C"], ["1,500 kg de papada", "a 0 °C"],
           ["0,500 kg de CEYLAMIX n.º 035, o sea, 100 g por kg de masa"]]],
    ["h", "Fabricación"],
    ["p", "Picar la panceta, recortes y papada, mezclándolo, con placa de 6 milímetros en verano y de 4 milímetros en invierno. Pasarlo a la amasadora, donde se le agregará de 3 a 4 litros de agua fría. Dadas unas vueltas, espolvorearle el CEYLAMIX n.º 035 y agregarle de 10 a 12 gramos de mistela o vino dulce por kilo de masa."],
    ["p", "Trabajarla hasta formar una masa compacta y dejar en maceración durante 24 horas a una temperatura de +8 °C."],
    ["p", "Transcurrido este tiempo, embutir en tripa rizada de cerdo y colgar en lugar fresco y poco aireado, con una temperatura de +16 °C o +18 °C y una humedad relativa del 80-85 %."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.00042/V-1.110."],
    ["a", "Los «3 a 4 litros de agua fría» están así en la hoja, sin decir para cuánta masa; la báscula no los cuenta."]
  ],

  "salchichon-cocido-ajo-077": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el magro y la panceta y pasarlo a la cámara a −2 °C."],
    ["h", "Dosificación masa"],
    ["l", [["3,250 kg de magro", "a −2 °C"], ["1,250 kg de panceta", "a −2 °C"], ["0,500 kg de agua"],
           ["0,350 kg de CEYLAMIX n.º 077, o sea, 75 g por kg de masa"], ["0,100 g de fécula"]]],
    ["a", "La línea de la fécula está añadida con otra máquina de escribir; dice «0,100 g», que se lee como 0,100 kg. Las cuentas de la hoja no cuadran: 0,350 kg de mezcla para 5 kg de masa son 70 g por kilo, no 75. La báscula usa los 75 g que dice la hoja."],
    ["h", "Fabricación"],
    ["p", "Picar el magro y la panceta en la placa de 6-7 milímetros. Pasar a la amasadora, agregándole el agua a la que previamente se le habrá disuelto el CEYLAMIX n.º 077 y [en blanco] kg de fécula. Amasarlo durante 6-8 minutos al 70 % de vacío, si se tiene. Pasarlo a la cámara durante 24 horas. Pasadas las 24 horas, proceder a embutir en tripa artificial o natural de 70-80 milímetros."],
    ["l", [["Temperatura de cocción", "78-80 °C"]]],
    ["p", "El tiempo de cocción está relacionado con el calibre de la tripa, aproximadamente 1 minuto por milímetro de diámetro."],
    ["p", "Registrada en la Dirección General de Sanidad con el n.º 31.00042/V2.552."],
    ["a", "Arriba, junto al membrete, hay una palabra tachada a bolígrafo azul, ilegible."]
  ],

  "salchichon-puro-031": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el magro y la panceta limpios de cortezas y coágulos de sangre y pasarlo a la cámara a −2 °C."],
    ["h", "Dosificación masa"],
    ["l", [["6,5 kg de magro", "a −2 °C"], ["3,5 kg de panceta", "a −2 °C"],
           ["0,7 kg de CEYLAMIX n.º 031, o sea, 70 g por kg de masa"], ["0,010 de PAKERS POWDER CH-C"]]],
    ["h", "Fabricación"],
    ["p", "Picar con placa de 8 milímetros, mezclándolo, el magro y la panceta. Pasarlo a la amasadora y agregarle el CEYLAMIX n.º 031, en forma de papilla espesa hecha con agua fría y un gramo de Jerez seco por kilo de masa. Amasarlo durante 5 o 6 minutos al 60 de vacío, si se tiene, y dejar la masa en la cámara a 0 °C durante 24 horas. Transcurrido este tiempo, embutir en tripas naturales o artificiales calibre 65-70."],
    ["p", "A continuación pasarlo a una habitación de estufaje durante 35 o 40 horas a una temperatura de +20 °C y una humedad relativa del 85-90 %. Transcurrido este tiempo, pasarlo a secadero artificial, si se tiene, con +12 °C o +14 °C de temperatura y 70-75 % de humedad, o a una habitación fresca sin corrientes fuertes de aire y humedad parecida a la del secadero artificial."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.42/V-1109."],
    ["a", "Los kilos y la línea del Pakers Powder están sobrescritos con otra máquina de escribir."]
  ],

  "fiambres-cocidos-066-pavo": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger la carne de ave limpia de grasa y coágulos de sangre, extenderlo en bandejas y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["7 kg de carne de pavo", "a 0 °C"], ["3 kg de agua fría", "a +1 °C"],
           ["0,450 kg de CEYLAMIX n.º 066, o sea, 45 g por kg de masa (carne y agua)"],
           ["0,100 kg de INYECTOGEL n.º 1"], ["0,500 kg de fécula de patata"]]],
    ["h", "Fabricación"],
    ["p", "Picar la carne de ave con placa de 2-3 ojos y pasarlo a la amasadora, agregándole el agua fría, a la que previamente se le habrá disuelto la fécula y el CEYLAMIX n.º 066. Amasarlo durante 30 minutos al 60 de vacío, si se tiene. Seguidamente introducir en la cámara con temperatura entre +2 °C y 0 °C durante 24 horas. Transcurrido este tiempo pasar toda la masa a la amasadora y amasarlo durante 10 o 15 minutos al 60 de vacío, si se tiene."],
    ["p", "Una vez preparada la masa, puede embutirse y cocerse seguidamente, o bien guardar la masa en la cámara para el día siguiente."],
    ["l", [["Temperatura de cocción", "entre +80 y 85 °C"]]],
    ["m", "(70 y 75)"],
    ["p", "El tiempo de cocción está relacionado con el calibre de la tripa, aproximadamente un minuto por milímetro de diámetro."],
    ["m", "(Hay que vigilar la t.ª del centro)"],
    ["h", "Observaciones"],
    ["p", "Debe embutirse en molde cuadrado con tripas artificiales del tipo RILSA, FIBROUS, VIACORA o CREALON."],
    ["p", "Registrada en la Dirección General de Sanidad con el núm. 31.00042/V-123."],
    ["a", "Las dos anotaciones a bolígrafo azul están unidas por una flecha: «(70 y 75)» está escrito encima de la temperatura de cocción, entre paréntesis en el original."]
  ],

  "chorizo-043": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el vacuno, la panceta y los recortes de magro limpios y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["0,750 kg de vacuno", "a 0 °C"], ["2,250 kg de panceta", "a 0 °C"], ["2 kg de magro segunda", "a 0 °C"],
           ["0,300 kg de CEYLAMIX n.º 043, o sea, 60 g por kg de masa"], ["0'100 de PAKERS POWDER CH-C"]]],
    ["a", "La cantidad de Pakers Powder se lee «0'100», veinte veces más que en las otras hojas (0,005 para 5 kg de masa). Es dudosa y la báscula no la cuenta."],
    ["h", "Fabricación"],
    ["p", "Picar el vacuno, magro y la panceta, mezclándolo, con placa de 7 milímetros. Pasarlo a la amasadora agregándole el CEYLAMIX n.º 043 en forma de papilla hecha con agua fría."],
    ["p", "Amasarlo hasta formar una masa compacta y dejar en maceración durante 20 o 24 horas en lugar fresco. A continuación embutir en tripas de vacuno o de cerdo raspadas, calibre 32-34."],
    ["p", "Después de embutirse debe colgarse en lugar fresco, seco y poco aireado."],
    ["h", "Observaciones"],
    ["p", "Añádase ajo natural al gusto de la zona."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.42/V-…"],
    ["a", "El número de registro queda cortado en la fotocopia. Los kilos, el «7» de la placa y la línea del Pakers Powder están sobrescritos con otra máquina."]
  ],

  "catalana-trufada-631": [
    ["h", "Instrucciones de fabricación"],
    ["p", "Escoger el magro limpio de grasa y coágulos de sangre, extenderlo en bandejas y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["7 kg de magro", "a 0 °C"], ["3 kg de agua fría", "a +1 °C"],
           ["0,700 kg de CEYLAMIX n.º 631, o sea, 70 g de masa (carne y agua)"], ["0,100 kg de INYECTOGEL n.º 1"]]],
    ["h", "Fabricación"],
    ["p", "Picar el magro con la placa de 2-3 ojos y pasar a la amasadora, agregándole el agua fría, a la que previamente se le habrá disuelto el CEYLAMIX n.º 631. Amasar durante 30 minutos al 60 de vacío, si se tiene. Transcurrido este tiempo, introducir la masa en la cámara con temperatura entre +2 °C y 0 °C durante 24 horas. Seguidamente separar un 20 % de esta masa y picarla con la placa de 8 milímetros. A continuación toda la masa se introduce en la amasadora, agregándole del 4 al 5 % de fécula de patata y dos botes de trufa artificial; amasarlo todo durante 5 o 6 minutos al 60 de vacío, si se tiene."],
    ["p", "Una vez preparada la masa, puede embutirse y cocerse seguidamente, o bien guardarla en la cámara para el día siguiente."],
    ["l", [["Temperatura de cocción", "entre +80 °C y +82 °C"]]],
    ["p", "El tiempo de cocción está relacionado con el calibre de la tripa, aproximadamente un minuto por milímetro de diámetro."],
    ["h", "Observaciones"],
    ["p", "Los culares deben ser siempre frescos y nunca rancios, ya que estos últimos aguantan menos temperatura en caldera y presentan muy mal aspecto."],
    ["p", "Les recomendamos nuestra trufa artificial «BLAKFLAW»."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.42/V-123."],
    ["a", "La hoja dice «70 grs. de masa», sin «por kg». El nombre de la trufa artificial se lee «Blakflaw», por confirmar. Los «dos botes de trufa» no dicen de qué tamaño; la báscula no los cuenta."]
  ],

  "salchichas-crudas-221": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el magro y la panceta limpios y pasarlos a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["5 kg de magro", "a 0 °C"], ["5 kg de panceta", "a 0 °C"], ["2 kg de agua fría", "a 0 °C"],
           ["0,400 kg de CEYLAMIX n.º 221, o sea, 40 g por kg de masa"], ["0,100 kg de trufa"]]],
    ["h", "Fabricación"],
    ["p", "Picar con placa de 7 milímetros el magro y la panceta mezcladas, pasar a la amasadora y agregarle el agua fría, a la que previamente se le habrá disuelto el CEYLAMIX n.º 221. Amasarlo durante 5 o 6 minutos y proceder a embutir seguidamente."],
    ["h", "Observaciones"],
    ["p", "Las tripas a emplear deben ser de cordero calibre 18-20."],
    ["h", "Muy importante"],
    ["p", "Para la perfecta fabricación de este tipo de salchichas, es necesario utilizar carnes frescas, o sea, cuyo sacrificio no sea anterior a las 48 horas, y a ser posible se utilizarán magros claros y consistentes."],
    ["p", "Terminadas de embutir, se deben guardar en la cámara a 0 °C."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.00042/V-463."],
    ["a", "El número «221» y los «40» gramos están sobrescritos con otra máquina sobre una hoja anterior. Los 40 g por kilo cuadran con los 10 kg de carne, sin contar el agua."]
  ],

  "mortadela-071": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el vacuno, magro, papada y recortes de panceta limpios y pasarlos a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["4 kg de carne de vacuno o cerdo", "a 0 °C"], ["3,500 kg de agua", "a 0 °C"],
           ["2,500 kg de papada y recortes de panceta", "a 0 °C"],
           ["1 kg de 071, o sea, 100 g por kg de masa"], ["0,030 kg de SUPER GUM"]]],
    ["h", "Fabricación"],
    ["p", "Picar la carne, la papada y los recortes, todo mezclado, por una placa de 3-4 milímetros, pasando seguidamente a la amasadora, agregándole el agua en la que previamente se habrá disuelto la n.º 071 y la fécula. Se amasará hasta que se consiga una masa compacta; esta se conseguirá seguidamente. Se embutirá en moldes o en tripas, y a continuación se cocerá."],
    ["l", [["Temperatura de cocción", "entre +80 °C y 85 °C"]]],
    ["p", "El tiempo de cocción está relacionado con el calibre de la tripa o molde, aproximadamente un minuto por milímetro de diámetro. La temperatura final en el interior de la pieza deberá ser de 75 °C."],
    ["p", "Registrada en la Dirección General de Sanidad con el n.º 31.42/V-125."],
    ["a", "El texto nombra una fécula que no está en la dosificación. La hoja no lleva el nombre de la gama; la del cursillo la llama «Mortadela siciliana 071»."]
  ],

  "chorizo-parrillero-220": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger la panceta y los recortes de magro limpios y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["3 kg de panceta", "a 0 °C"], ["2 kg de magro segunda", "a 0 °C"],
           ["0,250 kg de FÓRMULA COMPLETA n.º 220, o sea, 50 g por kg de masa"]]],
    ["h", "Fabricación"],
    ["p", "Picar el magro y la panceta, mezclándolo, con placa de 8 milímetros. Pasarlo a la amasadora agregándole la FÓRMULA COMPLETA n.º 220 en forma de papilla hecha con agua fría."],
    ["p", "Amasarlo hasta formar una masa compacta y dejar reposar durante 8 o 10 horas en lugar fresco. A continuación embutir en tripas de vacuno o de cerdo raspadas, calibres 32-34."],
    ["p", "Después de embutirse, debe colgarse en lugar seco y aireado, con el fin de que saque el color rosado. El local tendrá que estar a 20-25 °C."],
    ["p", "Añádase ajo natural picado al gusto de la zona."],
    ["p", "Registrada en la Dirección General de Sanidad con el n.º 31.42/V-124."]
  ],

  "chorizo-044": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger la panceta y los recortes de magro limpios y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["3,250 kg de panceta", "a 0 °C"], ["1,750 kg de magro de segunda", "a 0 °C"],
           ["0,250 kg de CEYLAMIX n.º 044, o sea, 50 g por kg de masa"], ["0,005 PAKERS POWDER CH-C"]]],
    ["h", "Fabricación"],
    ["p", "Picar el magro y la panceta, mezclándolo, con placa de 7 milímetros. Pasarlo a la amasadora agregándole el CEYLAMIX n.º 044, en forma de papilla hecha con agua fría."],
    ["p", "Amasarlo hasta formar una masa compacta y dejar reposar durante 8 o 10 horas en lugar fresco. A continuación embutir en tripas de vacuno o de cerdo raspadas, calibre 32-34."],
    ["p", "Después de embutirse debe colgarse en lugar fresco, seco y poco aireado."],
    ["h", "Observaciones"],
    ["p", "Añádase ajo natural picado al gusto de la zona."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.42/V-111…"],
    ["a", "El número de registro acaba borroso en la fotocopia. Los kilos, el «7» de la placa y la línea del Pakers Powder están sobrescritos con otra máquina."]
  ],

  "fiambres-cocidos-066-paleta": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el magro limpio de grasa y coágulos de sangre, extenderlo en bandejas y pasarlo a la cámara a 0 °C."],
    ["h", "Dosificación masa"],
    ["l", [["7 kg de magro de paleta", "a 0 °C"], ["3 kg de agua fría", "a +1 °C"],
           ["0,450 kg de CEYLAMIX n.º 066, o sea, 45 g por kg de masa (carne y agua)"],
           ["0,200 kg de fécula de patata"], ["0,100 g de inyectogel N1"], ["0,050 g de aglotex"]]],
    ["m", "último producto (día siguiente)"],
    ["m", "1 o 2 g × kg — mix sin sabor (para potenciar el sabor del embutido al gusto)"],
    ["a", "La primera anotación a mano está junto a la línea del aglotex; la segunda, debajo, y su principio («1 o 2 g × kg») es de lectura dudosa. «Magro de paleta», «066», «45» y las líneas del inyectogel y el aglotex están sobrescritos con otra máquina; estas dos dicen «g», que se lee como kg (el texto pide 5 g de aglotex por kilo)."],
    ["h", "Fabricación"],
    ["p", "Pasar el magro por el usillo de la máquina 3 veces, pasarlo a la amasadora, agregándole el agua fría, a la que previamente se le habrá disuelto la fécula y CEYLAMIX n.º 066. Amasarlo durante 30 minutos al 60 de vacío, si se tiene. Seguidamente introducir en la cámara con temperatura entre +2 °C y 0 °C durante 24/48 horas. Transcurrido este tiempo pasar toda la masa a la amasadora y amasarlo durante 10 o 15 minutos al 60 de vacío, si se tiene. Agregando 5 g por kilo de Aglotex."],
    ["a", "Subrayado a bolígrafo azul en el original: «por el usillo de la máquina» y «Amasarlo durante 30 minutos al 60 de vacío, si se tiene»."],
    ["p", "Una vez preparada la masa, puede embutirse y cocerse seguidamente, o bien guardar la masa en la cámara para el día siguiente."],
    ["l", [["Temperatura de cocción", "entre +80 °C y +85 °C"]]],
    ["p", "El tiempo de cocción está relacionado con el calibre de la tripa, aproximadamente un minuto por milímetro de diámetro."],
    ["h", "Observaciones"],
    ["p", "Debe embutirse en molde cuadrado con tripas artificiales del tipo RILSAN, FIBROUS, VIACORA o CREALON."],
    ["p", "Registrada en la Dirección General de Sanidad con el n.º 31.42/V-123."]
  ],

  "fuet-vich-350": [
    ["h", "Preparación de carnes"],
    ["p", "Escoger el magro y la panceta limpios de cortezas y coágulos de sangre y pasarlo a la cámara a −2 °C."],
    ["h", "Dosificación masa"],
    ["l", [["3,500 kg de magro", "a −2 °C"], ["1,500 kg de panceta", "a −2 °C"],
           ["0,250 kg de CEYLAMIX n.º 350, o sea, 50 g por kg de masa"], ["0,005 de PAKERS POWDER CH-C"]]],
    ["h", "Fabricación"],
    ["p", "Picar con placa de 8 milímetros, mezclándolo, el magro y la panceta. Pasarlo a la amasadora y agregarle el CEYLAMIX n.º 350, en forma de papilla espesa hecha con agua fría y un gramo de Jerez seco por kilo de masa. Amasarlo durante 5 o 6 minutos al 60 de vacío, si se tiene, y dejar la masa en la cámara a 0 °C durante 24 horas. Transcurrido este tiempo, embutir en tripas naturales o artificiales calibre 34-36."],
    ["p", "A continuación pasarlo a una habitación de estufaje durante 30 horas a una temperatura de +20 °C y una humedad relativa del 85-90 %. Transcurrido este tiempo, pasarlo a secadero artificial, si se tiene, con +12 °C o +14 °C de temperatura y 70-75 % de humedad, o a una habitación fresca sin corrientes de aire y humedad parecida a la del secadero artificial."],
    ["p", "Registrado en la Dirección General de Sanidad con el n.º 31.00042/V-1.109."],
    ["a", "Los kilos y la línea del Pakers Powder están sobrescritos con otra máquina de escribir."]
  ],

  "chorizo-lomo-041": [
    ["h", "Composición"],
    ["l", [["Magro", "8,0 kg"], ["Panceta", "2,0 kg"], ["CEYLAMIX 041", "0,900 kg"], ["PAKERS POWDER CH-C", "0,010 kg"]]],
    ["h", "Procedimiento de fabricación"],
    ["ol", [
      "Escoger el magro, limpiar la panceta y almacenarlos en cámara a −2 °C, durante 18 a 24 horas.",
      "Picar el magro con placa de 3 ojos y la panceta con placa de 12-14 milímetros.",
      "Pasar a la amasadora y adicionar el CEYLAMIX y PAKERS POWDER CH-C, en forma de papilla con un poco de agua fría. (Puede adicionarse, al gusto de cada región, ajo y 2 g por kg de vino de Jerez). Amasar durante 4-5 minutos a 60 cm de vacío, si se dispone.",
      "Dejar la masa en cámara, a +2 ÷ 4 °C, durante 24 horas.",
      "Embutir en tripa FIBRAN o natural de vacuno calibre 70/80.",
      "Estufar a temperatura entre 20-22 °C y humedad relativa de 82-85 % durante 68-70 horas. Puede hacerse un poco de humo con madera de haya o carbón vegetal si se considera conveniente.",
      "Secar, preferentemente en secadero artificial, a temperatura entre 10-12 °C y humedad relativa del 78-82 % (si se utiliza tripa artificial) o del 78-80 (con tripa natural)."]],
    ["p", "Nuestro Departamento Técnico se ofrece para establecer las condiciones óptimas de fabricación, en función de sus equipos e instalaciones, y para asesorarle en el cumplimiento de las exigencias legales."],
    ["a", "Las cantidades de la composición, el calibre, las horas de estufaje y las humedades del secado están sobrescritos con otra máquina de escribir."]
  ],

  "cursillo-ceylamix": [
    ["p", "Cursillo <span class=\"tinta-azul\"><i>ABRIL</i></span>"],
    ["h", "Día <span class=\"tinta-azul\"><i>21</i></span>, lunes"],
    ["ol", [
      "<a href=\"receta.html?r=fiambres-cocidos-066-pavo\">Ceylamix fiambre de pavo 066</a>.",
      "Ceylamix jamón y paleta cocida 067.",
      "<a href=\"receta.html?r=catalana-trufada-631\">Ceylamix catalana trufada n.º 631</a>.",
      "<a href=\"receta.html?r=mortadela-071\">Ceylamix mortadela siciliana 071</a>.",
      "<a href=\"receta.html?r=salchichon-cocido-ajo-077\">Ceylamix salchichón cocido / ajo 077</a>.",
      "<a href=\"receta.html?r=salchichon-puro-031\">Ceylamix salchichón puro 031</a>.",
      "<a href=\"receta.html?r=fuet-vich-350\">Ceylamix fuet Vich 350</a>.",
      "<a href=\"receta.html?r=longaniza-aragon-033\">Ceylamix longaniza Aragón 033</a>.",
      "<a href=\"receta.html?r=chorizo-lomo-041\">Ceylamix chorizo lomo 041</a>.",
      "<a href=\"receta.html?r=sobrasada-mallorca-035\">Ceylamix sobrasada Mallorca 035</a>."]],
    ["h", "Día <span class=\"tinta-azul\"><i>22</i></span>, martes"],
    ["ol", [
      "<a href=\"receta.html?r=chorizo-parrillero-220\">Ceylamix chorizo parrillero 220</a>.",
      "<a href=\"receta.html?r=chorizo-044\">Ceylamix chorizo 044</a>.",
      "<a href=\"receta.html?r=chorizo-043\">Ceylamix chorizo 043</a>.",
      "<a href=\"receta.html?r=salchichas-crudas-221\">Ceylamix salchicha cruda extra 221</a>.",
      "Ceylamix salchicha cruda 921."]],
    ["h", "Día <span class=\"tinta-azul\"><i>23</i></span>, miércoles"],
    ["p", "Finalización del cursillo y degustación de los productos elaborados."],
    ["a", "No es una receta: es el programa de un cursillo de la casa Ceylan. «ABRIL» y los números de los días están escritos a mano, en azul; el 21 y el 22 se leen con dificultad y el año no consta. Junto a la salchicha cruda extra 221 hay una marca a bolígrafo."],
    ["a", "Los productos enlazados son los que tienen hoja entre las escaneadas. Del jamón y paleta cocida 067 y de la salchicha cruda 921 no hay hoja; la hamburguesa de ave 911 tiene hoja y no está en este programa."]
  ]
};
