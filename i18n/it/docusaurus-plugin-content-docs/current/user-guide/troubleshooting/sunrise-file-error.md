---
title: Errore del file Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Errore durante l’installazione del file Sunrise

Il file sunrise.php è un file speciale che WordPress cerca mentre avvia sé stesso. Affinché WordPress sia in grado di rilevare il file sunrise.php, deve trovarsi all’interno della **cartella wp-content**.

Quando attivi Ultimate Multisite e completi la procedura guidata di configurazione come quella che vedi nello screenshot, Ultimate Multisite prova a copiare il nostro file sunrise.php nella cartella wp-content.

<!-- Screenshot non disponibile: pagina della procedura guidata di configurazione che mostra il passaggio di installazione di sunrise.php -->

Nella maggior parte dei casi, riusciamo a copiare correttamente il file e tutto funziona. Tuttavia, se qualcosa non è configurato correttamente (i permessi della cartella, per esempio), potresti trovarti in uno scenario in cui Ultimate Multisite non riesce a copiare il file.

Se leggi il messaggio di errore che Ultimo ti mostra, vedrai che è esattamente ciò che è successo qui: **Copia di Sunrise non riuscita**.

<!-- Screenshot non disponibile: messaggio di errore che mostra Copia di Sunrise non riuscita -->

Per risolvere il problema, puoi semplicemente copiare il file sunrise.php all’interno della cartella del plugin wp-ultimo e incollarlo nella tua cartella wp-content. Dopo averlo fatto, ricarica la pagina della procedura guidata e i controlli dovrebbero andare a buon fine.

<!-- Screenshot non disponibile: gestore file che mostra sunrise.php all’interno della cartella del plugin wp-ultimo --> In ogni caso, questo potrebbe giustificare un controllo generale dei permessi delle tue cartelle per evitare problemi in futuro (non solo con Ultimate Multisite, ma anche con altri plugin e temi).

Lo **strumento Health Check** che fa parte di WordPress (puoi accedervi tramite il **pannello di amministrazione > Strumenti > Health Check** del tuo sito principale) è in grado di farti sapere se hai permessi delle cartelle impostati su valori che potrebbero causare problemi con WordPress.

<!-- Screenshot non disponibile: strumento Health Check di WordPress che mostra lo stato dei permessi delle cartelle -->
