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
  | manual06 | Título dudoso («Tarbena»?) | receta |
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
  - `manual06`: título en azul dudoso, con «Tarbena» escrito encima en rojo.
  - `manual12` (blanquets): la nota roja dice «el secret de Juan era afegir ous batuts…», en pasado
    y en tercera persona.
- Etiquetas (9): Fiambre cocido 611 (dos ejemplares), Morcilla de cebolla 091, Salchichas crudas
  022, Sobrasada 045, Longaniza Aragón 033, Clavillo Zanzíbar, Chorizo lomo 041 y Chorizo 043 (la
  que estaba pegada detrás de la 041).
- Vínculo receta ↔ etiqueta. Coinciden nombre y dosis: salchichas crudas (40 g), sobrasada (75 g),
  morcillas de cebolla (40 g). Solo coincide la dosis, por confirmar: chorizo fresco ↔ Chorizo lomo
  041 (90 g); longanizas de pascua y catalana ↔ Longaniza Aragón 033 (70 g); Tarbena ↔ Sobrasada
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
- Siguen sin identificar las clientas, los años de todas, y las personas de image2 y 3.
