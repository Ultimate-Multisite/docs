---
title: Snippets ta GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Come l'utilizzare i snippet di Ultimate Multisite sul nostro repository GitHub

Ci sono dei piccoli pezzi di codice disponibili nel repository GitHub che vengono spesso richiesti dagli utenti di Ultimate Multisite che vogliono aggiungere piccole funzionalità, come inserire lo script di Google Analytics nelle pagine di registrazione o nascondere una meta box dal dashboard dell'amministratore.

Questo articolo ti mostrerà come usare questi codici o più precisamente dove posizionarli.

Puoi trovare i snippet al link qui sotto.

https://github.com/next-press/wp-ultimo-snippets/

Ci sono 2 modi per aggiungere il codice:

  1. Nel file functions.php del tuo tema.

  2. Plugin Must-Use (mu-plugins).

# Come aggiungere lo snippet nel file functions.php del tuo tema.

  1. Accedi al dashboard di amministrazione della tua rete WordPress e vai su Temi > Theme Editor (Vedi screenshot qui sotto).

  2. Nella pagina "Edit Themes", assicurati di aver selezionato il tuo tema attivo sul campo a tendina situato nell'angolo in alto a destra dello schermo (#3 nello screenshot qui sotto).

  3. Clicca sul file functions.php sotto la sezione "Theme Files" per caricare il file. Scorri fino in fondo e incolla lo snippet di Ultimate Multisite che hai preso dal repository GitHub.

<!-- Screenshot non disponibile: WordPress Theme Editor che mostra l'editing del file functions.php -->

# Come creare Must-Use Plugins (mu-plugins)

WordPress ha una funzione che ti permette di caricare funzionalità personalizzate chiamate "Must-Use Plugins", o "mu-plugins" in breve.

Questi speciali mu-plugins vengono caricati prima di tutti gli altri plugin regolari e non possono essere disattivati. In una rete multisite, il codice in questi mu-plugins verrà caricato su tutti i siti della tua installazione.

1. Usa FTP o SSH per accedere al filesystem della tua installazione WordPress.

2. F'diriet ġdida fil-direttori wp-content tal installazzjoni tiegħek ta WordPress, issaħħel direttori niddiq: `mu-plugins`.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Iċċekkja fi file PHP ġdid fuq il-kompjuter tiegħek u smalhu `wu-snippet.php` b'Notepad jew bil-editor tal-kod tiegħek.

4. Ipprockja l-code snippet ta Ultimate Multisite li għandek mill-GitHub repository f'il-file u issalvu. Tista' ikteb din il-code fuq il-code snippet biex t-labeli il-mu plugin tiegħek.
