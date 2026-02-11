---
title: Errore del file Sunrise
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Errore durante l'installazione del file sunrise.php

Il file **sunrise.php** è un file speciale che WordPress cerca durante il bootstrap. Per permettere a WordPress di rilevare il file **sunrise.php**, deve trovarsi all'interno della cartella **wp-content**.

Quando attivi Ultimate Multisite e procedi con la procedura guidata come quella mostrata nello screenshot, Ultimate Multisite tenta di copiare il nostro file **sunrise.php** nella cartella **wp-content**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-v6hosgLWpt.png)

La maggior parte delle volte siamo in grado di copiare il file con successo e tutto funziona. Tuttavia, se qualcosa non è configurato correttamente (ad esempio i permessi delle cartelle), potresti trovarti in una situazione in cui Ultimate Multisite non riesce a copiare il file.

Se leggi il messaggio di errore che Ultimo ti mostra, vedrai che è esattamente ciò che è successo qui: **Sunrise copy failed**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RXS5EbirfM.png)

Per risolvere, puoi semplicemente copiare il file **sunrise.php** all'interno della cartella del plugin **wp-ultimo** e incollarlo nella tua cartella **wp-content**. Dopo aver fatto ciò, ricarica la pagina della procedura guidata e i controlli dovrebbero superare.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-p6hz1I9ycl.png)

In ogni caso, potrebbe essere utile eseguire un controllo generale dei permessi delle cartelle per evitare problemi in futuro (non solo con Ultimate Multisite ma anche con altri plugin e temi).

Lo **Health Check tool** che fa parte di WordPress (puoi accedervi tramite il **pannello di amministrazione > Strumenti > Health Check** del tuo sito principale) è in grado di informarti se i permessi delle cartelle sono impostati su valori che potrebbero causare problemi con WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oZEKeyxo2E.png)
