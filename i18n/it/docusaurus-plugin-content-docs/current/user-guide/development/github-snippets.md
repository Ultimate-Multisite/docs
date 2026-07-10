---
title: Frammenti GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Come usare gli snippet di Ultimate Multisite sul nostro repository GitHub {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Nel repository GitHub sono disponibili snippet di codice richiesti frequentemente dagli utenti di Ultimate Multisite che desiderano aggiungere piccole funzionalità, come aggiungere lo script di Google Analytics nelle pagine di registrazione o nascondere una meta box dalla dashboard di amministrazione.

Questo articolo ti mostrerà come usare questi codici o, più specificamente, dove inserirli.

Puoi trovare gli snippet al link qui sotto.

https://github.com/next-press/wp-ultimo-snippets/

Ci sono 2 modi per aggiungere il codice

  1. Nel file functions.php del tuo tema.

  2. Must-Use Plugins (mu-plugins)

# Come aggiungere lo snippet nel file functions.php del tuo tema. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Accedi alla dashboard di amministrazione della tua rete WordPress e vai su Themes >Theme Editor (vedi screenshot sotto).

  2. Nella pagina "Edit Themes", assicurati di avere selezionato il tuo tema attivo nel campo a discesa situato nella parte in alto a destra dello schermo (#3 nello screenshot sotto).

  3. Fai clic sul file functions.php nella sezione "Theme Files" per caricare il file. Scorri fino in fondo e incolla lo snippet di Ultimate Multisite che hai preso dal repository GitHub.

<!-- Screenshot non disponibile: Theme Editor di WordPress che mostra la modifica del file functions.php -->

# Come creare Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ha una funzionalità che ti consente di caricare funzionalità personalizzate chiamate "Must-Use Plugins", o "mu-plugins" in breve.

Questi speciali mu-plugin vengono caricati prima di tutti gli altri plugin regolari e non possono essere disattivati. In una rete multisite, il codice in questi mu-plugin verrà caricato su tutti i siti della tua installazione.

1\. Usa FTP o SSH per accedere al filesystem della tua installazione WordPress.

2\. All'interno della directory wp-content della tua installazione WordPress, crea una nuova directory chiamata: mu-plugins.

<!-- Screenshot non disponibile: File manager che mostra la directory wp-content con la cartella mu-plugins -->

3\. Crea un nuovo file PHP sul tuo computer chiamato wu-snippet.php usando Notepad o qualsiasi editor di codice.

4\. Inserisci nel file lo snippet di codice di Ultimate Multisite che hai preso dal repository GitHub e salvalo. Puoi anche aggiungere questo codice sopra lo snippet di codice per etichettare il tuo MU plugin.
