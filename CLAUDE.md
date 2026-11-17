# CLAUDE.md — Proyecto charcuteriapadilla

Punto de entrada para Claude Code en cualquier sesión y en cualquier máquina.
Leer este fichero completo antes de tocar nada.

---

## Qué es este proyecto

**«Charcutería Padilla. Las recetas de Juan Padilla Agut»**: la recogida de las recetas con que
**Juan Padilla Agut**, charcutero, fabricaba los embutidos en su negocio. Aprendió el oficio de su padre.

El material lo ha proporcionado **Francisca Julián Querol** («Paquita», Cinctorres, 1945), y por
decisión del usuario **consta como autora** del proyecto (2026-11-17).

Material de partida, escaneado por el usuario:
1. recetas que le daba el proveedor;
2. recetas propias;
3. algunas etiquetas de los fabricantes de especias.

Los puntos 1 y 3 son material de terceros: afecta a la licencia (T-03).

**Estado: recién creado (2026-11-17).** Solo en local; no hay repositorio en GitHub todavía (T-04).

Idioma de trabajo con el usuario: **castellano**. Idiomas del sitio: por decidir (T-05).

### Proyectos hermanos (clonados al lado de este, en `~/IdeaProjects/francisca/`)

Es el **octavo repositorio** de la familia de la autora. Consultar sus `CLAUDE.md` antes de
reinventar decisiones.

| Repositorio | Relación con este |
|---|---|
| franciscajulianquerol | La portada (franciscajulianquerol.es). Cuando esto se publique, tendrá ficha allí (T-06) |
| franciscaineditos | Sus obras C19 «Familia Padilla Agut» y C22 «Món rural i cuina» (con recetas) pueden tener material relacionado (T-07) |
| santjoanslibro, masosdemorella | Modelo de documento escaneado/PDF → masters abiertos + sitio Astro |
| franciscabacket | Fondo en bruto, no publicado |

---

## Estructura

```
raw/        bandeja de entrada de los escaneos. No se versiona hasta resolver T-02.
NOTES.md    hallazgos y decisiones.
TODO.md     tareas numeradas T-nn; se citan en los commits al resolverlas.
```

---

## Convenciones

- Commits y ficheros en castellano.
- Todo hallazgo o decisión va a `NOTES.md`; las tareas, a `TODO.md`.
- No inventar datos biográficos ni de la charcutería (nombre comercial, lugar, fechas): si falta
  uno, se pregunta.
