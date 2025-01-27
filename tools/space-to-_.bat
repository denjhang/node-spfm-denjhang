::═代码═开始═
@echo off&setlocal enabledelayedexpansion
for /f "delims=" %%i in ('dir /a/b/s *.*') do (
cd /d "%%~pi"&set n=%%~nxi
set m=!n: =_!&ren "%%i" "!m!")

::═代码═结束═