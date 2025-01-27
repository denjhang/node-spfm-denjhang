set path=D:\Program Files (x86)\gzip-1.3.12-1-bin\bin
rem VGM -> VGZ
gzip.exe -n9 *.vgm
for %%f in (*.vgm.gz) do ren "%%f" "%%~nf"
ren *.vgm *.vgz
