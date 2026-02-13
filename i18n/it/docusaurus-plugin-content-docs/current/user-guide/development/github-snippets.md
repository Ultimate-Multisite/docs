---
title: Snippet di GitHub
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# Come usare gli snippet di Ultimate Multisite nel nostro repository GitHub

Ci sono snippet di codice disponibili nel repository GitHub che vengono spesso richiesti dagli utenti di Ultimate Multisite che desiderano aggiungere piccole funzionalità come l'aggiunta di uno script Google Analytics sulle pagine di registrazione o la nascita di una meta box dal cruscotto di amministrazione.

Questo articolo ti mostrerà come usare o, più precisamente, dove posizionare questi codici.

Puoi trovare gli snippet al link qui sotto.

https://github.com/next-press/wp-ultimo-snippets/

Ci sono 2 modi per aggiungere il codice

  1. Nel file functions.php del tuo tema.
  2. Must-Use Plugins (mu-plugins)

# Come aggiungere lo snippet nel file functions.php del tuo tema.

  1. Accedi al cruscotto di amministrazione della rete WordPress e vai su Themes > Theme Editor (vedi screenshot sotto).
  2. Nella pagina "Edit Themes", assicurati di avere il tuo tema attivo selezionato nel menu a tendina situato nell'angolo in alto a destra dello schermo (#3 nello screenshot sotto).
  3. Fai clic sul file functions.php nella sezione "Theme Files" per caricarlo. Scorri verso il basso fino in fondo e incolla lo snippet di Ultimate Multisite che hai ottenuto dal repository GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Come creare Must-Use Plugins (mu-plugins)

WordPress ha una funzionalità che ti consente di caricare funzionalità personalizzate chiamate "Must-Use Plugins", o "mu-plugins" per brevità.

Questi speciali mu-plugins vengono caricati prima di tutti gli altri plugin regolari e non possono essere disattivati. In una rete multisito, il codice in questi mu-plugins verrà caricato su tutti i siti della tua installazione.

1\. Usa FTP o SSH per accedere al filesystem della tua installazione WordPress.

2\. All'interno della directory wp-content della tua installazione WordPress, crea una nuova directory chiamata: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Crea un nuovo file PHP sul tuo computer chiamato wu-snippet.php usando Notepad o qualsiasi editor di codice.

4\. Inserisci lo snippet di codice Ultimate Multisite che hai ottenuto dal repository GitHub nel file e salvalo. Puoi anche aggiungere questo codice in cima allo snippet per etichettare il tuo mu plugin.
