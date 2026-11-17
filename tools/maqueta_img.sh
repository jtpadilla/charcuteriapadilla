#!/usr/bin/env bash
# Genera maqueta/img/ a partir de raw/. Las imágenes derivadas no se versionan (como raw/, ver T-02).
# Uso: tools/maqueta_img.sh   (necesita pdftoppm e ImageMagick)
set -euo pipefail
cd "$(dirname "$0")/.."
out=maqueta/img; tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT
mkdir -p "$out"

# Manuscritos: el papel ocupa la parte alta de la página escaneada.
for n in 02 03 04 05 06 07 08 09 10 11 12; do
  pdftoppm -r 150 -jpeg -singlefile "raw/MagistralesJuanPadilla/manual$n.pdf" "$tmp/m"
  convert "$tmp/m.jpg" -crop 1275x705+0+0 +repage -quality 82 "$out/manual$n.jpg"
done
pdftoppm -r 150 -jpeg -singlefile raw/MagistralesJuanPadilla/manual01.pdf "$tmp/m"
convert "$tmp/m.jpg" -crop 850x1150+0+0 +repage -quality 82 "$out/manual01.jpg"

# Etiquetas: pegadas arriba a la izquierda (la 09, volteada, arriba a la derecha).
for n in 01 02 03 04 05 06 07 08 09; do
  pdftoppm -r 150 -jpeg -singlefile "raw/EtiquetasCeylan/Etiqueta$n.pdf" "$tmp/e"
  g=NorthWest; [ "$n" = 09 ] && g=NorthEast
  convert "$tmp/e.jpg" -gravity $g -crop 510x505+0+0 +repage -quality 85 "$out/etiqueta$n.jpg"
done

# Hojas del proveedor: página entera.
for n in 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16; do
  pdftoppm -r 110 -jpeg -singlefile "raw/PropuestasCeylan/propuesta$n.pdf" "$tmp/p"
  convert "$tmp/p.jpg" -quality 80 "$out/propuesta$n.jpg"
done

# Fotos de la parada.
for n in 1 2 3 4 9; do
  convert "raw/FotosParada/mercat-sant-antoni-image$n.jpeg" -resize '1600x1600>' -quality 85 "$out/parada$n.jpg"
done
du -sh "$out"
