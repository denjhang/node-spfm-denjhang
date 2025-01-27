ren *.vgz *.vgm
gzip -n9 *.vgm
for %%f in (*.vgm.gz) do ren "%%f" "%%~nf"
ren *.vgm *.vgz