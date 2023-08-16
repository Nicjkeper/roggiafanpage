@echo off

setlocal

:: Passaggio 1: Inizializza il repository locale
git init

:: Passaggio 2: Aggiungi tutti i file al repository
git add --all

:: Passaggio 3: Esegui il commit dei file
git commit -m "Beta"

:: Passaggio 4: Aggiungi la repository remota
git remote add origin https://github.com/Nicjkeper/roggiafanpage.git

:: Passaggio 5: Esegui il push dei file
git push -u origin beta

endlocal
