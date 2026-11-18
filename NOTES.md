# NOTES

## 2026-11-17 — Creación

- Nombre del repositorio: `charcuteriapadilla`, elegido frente a `recetaspadilla` (deja fuera las
  etiquetas) y `juanpadillaagut` (suena a portada). Título: «Charcutería Padilla. Las recetas de
  Juan Padilla Agut».
- Autora: Francisca Julián Querol, que proporcionó el material (decisión del usuario).
- Se crea solo en local, sin GitHub.

## 2026-11-17 — Fotos del punto de venta

- El usuario identifica cuatro fotos publicadas en franciscaineditos como las del punto de venta.
  Proceden de la obra «El mercat de Sant Antoni» (id 452), en
  `franciscaineditos/md/Castelló/El mercat de Sant Antoni/img/`; se comprobó por md5 que son
  idénticas a las publicadas.
- Copiadas a `raw/FotosParada/` con el nombre `mercat-sant-antoni-imageN.jpeg`:

  | Fichero | Tamaño | md5 | Pie en la obra |
  |---|---|---|---|
  | image1 | 848×592 | 9d0bfdb8… | «Paquita la de Padilla 1967. Clienta: Teresa La Mascarosa» |
  | image2 | 1600×1136 | 78bb8a6b… | sin pie |
  | image3 | 688×688 | 49be6f8c… | sin pie |
  | image4 | 688×688 | 4d35479f… | sin pie |
  | image9 | 1200×784 | 57775d07… | sin pie |

  image1 no estaba en la lista del usuario; se añade con su visto bueno.
- No son escaneos originales, sino imágenes extraídas del Word
  `portatil-antiguo/Documents/2 tapas/mercat de Sant Antoni.docx` (franciscabacket lo indexa, pero
  en local solo está su conversión a markdown). No hay copias idénticas en franciscabacket.
- La obra tiene otras dos copias del texto (ids 220 y 178), con fotos que no están en la 452.

## 2026-11-17 — Etiqueta09 regenerada

- La etiqueta 9 (Ceylamix CH-C «Chorizo 043») se escaneó por el reverso, a través del adhesivo,
  porque estaba pegada detrás de otra: el escaneo salía espejado.
- `raw/EtiquetasCeylan/Etiqueta09.pdf` es ese escaneo volteado en horizontal (misma página, 2550×3508
  a 300 ppp; JPEG recodificado a calidad 95). El escaneo tal como salió se guarda en
  `raw/_descartes/Etiqueta09-original-espejado.pdf`.
- Al estar leída por detrás, tiene menos contraste que las demás y se transparenta la otra etiqueta.

## 2026-11-17 — Sección «El oficio» e inventario de los manuscritos

- Decisión del usuario: el sitio tendrá una sección aparte, «El oficio», para lo que no es receta
  (empezando por `manual01`), junto a las recetas y las fotos de la parada.
- Primer vistazo a `raw/MagistralesJuanPadilla/` (12 PDF de una página; lectura a baja resolución,
  títulos provisionales hasta transcribir):

  | Fichero | Contenido | Tipo |
  |---|---|---|
  | manual01 | «Fases de la venta», apuntes en papel de la Cámara de Comercio de Castellón | oficio |
  | manual02 | Nota: los aditivos son de la casa Ceylan; acompaña fotocopia de una factura con su n.º de registro | oficio |
  | manual03 | Salchichas (segunda palabra por leer) | receta |
  | manual04 | Chorizo fresco | receta |
  | manual05 | Sobrasada | receta |
  | manual06 | Tarmena | receta |
  | manual07 | Longaniza de pascua | receta |
  | manual08 | Morcilla de cebolla | receta |
  | manual09 | Morcilla de arroz | receta |
  | manual10 | Catalana | receta |
  | manual11 | Morcilla negra | receta |
  | manual12 | Blanquets | receta |

- Las diez recetas siguen el mismo patrón: título y fórmula en tinta azul y en castellano
  (proporción magro/lardeo y gramos de aditivos por kg, sal incluida) y, debajo, una nota de
  elaboración en tinta roja y en valenciano. Afecta a T-05 (idiomas) y al diseño de la ficha.
- La factura que cita `manual02` no está entre los escaneos.

## 2026-11-17 — Primera maqueta («El archivador de la parada»)

- `maqueta/`: portada, ficha de receta (`receta.html?r=<id>`, las diez de casa y la hoja de la
  longaniza Aragón 033) y «El oficio». HTML estático, sin compilación; los datos están en
  `maqueta/datos.js`. Es una maqueta de diseño, no el sitio: falta decidir si se pasa a Astro como
  los hermanos.
- Diseño: granate y oro de las etiquetas Ceylan, fondo de azulejo, Oswald para los rótulos y
  Courier Prime para lo mecanografiado. La ficha enseña el papel junto a la transcripción, con la
  fórmula (tinta azul), la nota de elaboración (tinta roja, en valenciano, con traducción), una
  calculadora por kilos de masa y la etiqueta Ceylan «pegada».
- Transcripción provisional de las diez recetas de casa (en `datos.js`). Lecturas a confirmar:
  - `manual06`: título en azul dudoso, con una palabra escrita encima en rojo. Se leyó «Tarbena»;
    el usuario confirmó el 2026-11-18 que es **Tarmena**.
  - `manual12` (blanquets): la nota roja dice «el secret de Juan era afegir ous batuts…», en pasado
    y en tercera persona.
- Etiquetas (9): Fiambre cocido 611 (dos ejemplares), Morcilla de cebolla 091, Salchichas crudas
  022, Sobrasada 045, Longaniza Aragón 033, Clavillo Zanzíbar, Chorizo lomo 041 y Chorizo 043 (la
  que estaba pegada detrás de la 041).
- Vínculo receta ↔ etiqueta. Coinciden nombre y dosis: salchichas crudas (40 g), sobrasada (75 g),
  morcillas de cebolla (40 g). Solo coincide la dosis, por confirmar: chorizo fresco ↔ Chorizo lomo
  041 (90 g); longanizas de pascua y catalana ↔ Longaniza Aragón 033 (70 g); Tarmena ↔ Sobrasada
  045 (75 g). Morcillas de arroz, morcilla negra y blanquets no tienen etiqueta entre las escaneadas.
- Hojas del proveedor (16): títulos leídos solo de la cabecera, listados en `datos.js`. Transcrita
  entera solo la 01 (Longaniza Aragón 033). La 16 no es una receta: es la hoja de un cursillo.

## 2026-11-17 — Publicación (T-04)

- Publicado en `jtpadilla/charcuteriapadilla` (público) y en GitHub Pages:
  <https://jtpadilla.github.io/charcuteriapadilla/>. Se despliega `maqueta/` tal cual.
- Para que el sitio tenga imágenes, `maqueta/img/` pasa a versionarse (2,6 MB de recortes
  reducidos). Los escaneos completos de `raw/` siguen fuera del repositorio (T-02).
- Queda publicado material de terceros (hojas y etiquetas de Ceylan) sin licencia decidida: T-03
  sigue abierta y el repositorio no tiene todavía fichero de licencia.

## 2026-11-17 — Identificación en las fotos de la parada (T-09, parcial)

- El usuario identifica al hombre de `parada4.jpg` (image4), tras el mostrador, como **Juan Padilla
  Agut**. El pie de la maqueta pasa de «Sin pie en el original» a «Juan Padilla Agut, en la parada»;
  es una identificación del usuario, no un pie de la obra original.
- En `parada9.jpg` (image9), tras la vitrina y de izquierda a derecha: **Juan Padilla Agut, Manuel
  Padilla Julián y Paquita** (Francisca Julián Querol). También es identificación del usuario. El
  usuario escribió «Julian»; se pone la tilde por coherencia con el apellido de la autora.
- En `parada3.jpg` (image3), la mujer que despacha junto a la báscula es **Paquita**. Identificación
  del usuario.
- Siguen sin identificar las clientas y los años de todas. En image2 (cabecera) no se ha preguntado
  aún si sale alguien.

## 2026-11-17 — Transcritas las hojas del proveedor (T-13)

- Transcritas las 14 hojas que faltaban (02 a 15); la 01 ya estaba. Las 15 tienen ficha en la
  maqueta. El texto está en `maqueta/hojas.js` (lista de bloques por hoja) y la fórmula para la
  báscula en `maqueta/datos.js`. Lectura provisional, con la ortografía y las unidades normalizadas;
  las dudas van como aviso en cada ficha y quedan en T-15.
- La fórmula de la báscula se da en % sobre la masa a la que la hoja refiere la dosis: la carne
  sola o «carne y agua», según la hoja (campo `base`).
- La hoja 16 no es una receta: es el programa de un cursillo de Ceylan («CEYLAMIX utilizados en las
  demostraciones»), con «ABRIL» y los días 21, 22 y 23 (lunes a miércoles) añadidos a mano; el año
  no consta. Lista 15 productos y 13 de las 15 hojas están en esa lista: las hojas parecen ser el
  material de ese cursillo (interpretación mía, sin confirmar). Están en la lista y no entre los
  escaneos: «Jamón y paleta cocida 067» y «Salchicha cruda 921». Está entre los escaneos y no en la
  lista: la hamburguesa de ave 911, que además es la única con membrete de «Manufacturas Ceylan,
  S.L.», calle Traginers 6, Valencia. La hoja 06 es el «Fiambre de pavo 066» de la lista; la 13 es
  la misma hoja 066 rehecha para magro de paleta.
- Muchas hojas están reaprovechadas: cantidades, números de mezcla y líneas enteras (Pakers Powder,
  fécula, aglotex) sobrescritos con otra máquina de escribir.
- Anotaciones a bolígrafo azul, de autor por confirmar: en la 06, «(70 y 75)» sobre la temperatura
  de cocción y «(Hay que vigilar la t.ª del centro)»; en la 13, «último producto (día siguiente)»
  junto al aglotex y «[1 o 2 g × kg?] — mix sin sabor (para potenciar el sabor del embutido al
  gusto)», más dos subrayados; en la 04, una palabra tachada ilegible.
- Lecturas dudosas o cuentas que no cuadran: 04 (0,350 kg de mezcla para 5 kg son 70 g/kg y la hoja
  dice 75; fécula «0,100 g»); 07 (Pakers Powder «0'100», veinte veces lo de las demás); 08 (trufa
  artificial «Blakflaw»); 03 («de 3 a 4 litros de agua fría», sin decir para cuánta masa).
- Vínculos hoja ↔ etiqueta nuevos, con nombre y dosis coincidentes: Chorizo 043 ↔ etiqueta 09
  (60 g) y Chorizo lomo 041 ↔ etiqueta 08 (90 g). La etiqueta «Sobrasada 045» no es la mezcla de la
  hoja «Sobrasada Mallorca 035», ni «Fiambre cocido 611» la de las hojas 066 y 631.
- `tools/maqueta_img.sh` genera ya las 16 hojas; `maqueta/img/` pasa de 2,6 a 4,0 MB.
- La hoja 16 tiene también ficha (`receta.html?r=cursillo-ceylamix`), sin fórmula ni báscula: la
  plantilla admite ahora hojas que no son receta. Cada producto del programa enlaza a su hoja.
