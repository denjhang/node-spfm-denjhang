ren *.vgz *.vgm.gz
ren *.vgm *.vgm.gz
gzip -d *.vgm.gz
for %%f in (*.vgm.gz) do ren "%%f" "%%~nf"