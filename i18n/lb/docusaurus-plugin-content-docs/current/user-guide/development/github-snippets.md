---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Wie mer d'Ultimate Multisite snippets uf üsem GitHub repository bruche chönd {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Es git Code-Snippets im GitHub repository, wo vo Ultimate Multisite Benutzer sehr oft gfrogt wärde, wenn sie chliini Funktionalitäte wie zum Bischpil s'Hinzuefüge vom Google Analytics Script uf Registrierigs-Sitte oder d'Versteckig vo eme Meta Box us em Admin Dashboard wend.

Dä Artikel zeigt Ihne, wie Sie die Codes bruche oder genauer, wo Sie die Codes platziere chönd.

Sie finded d'Snippets über de Link obe:

https://github.com/next-press/wp-ultimo-snippets/

Es git 2 Wäg, wie Sie de Code hinzufüge chönd:

  1. Im Functions.php File vo Ihrem Theme.

  2. Must-Use Plugins (mu-plugins).

# Wie mer de Snippet i d'Functions.php File vom Theme füege {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Logged Sie sich i Ihr WordPress Network Admin Dashboard ii und gönd zu Themes > Theme Editor (Luege Sie sich de Screenshot obe a).

  2. Uf de "Edit Themes" Site müend Sie sicherstelle, dass s'aktivi Theme im Dropdown-Feld uf de obere rechts Siite ausgewählt isch (#3 uf em Screenshot obe).

  3. Klicke Sie uf d'functions.php File under de Sektion "Theme Files", um die Datei z'lade. Scrollen Sie ganz nach unten und füege Sie de Ultimate Multisite Snippet ii, wo Sie vom GitHub Repository becho händ.

<!-- Screenshot nöd verfügbar: WordPress Theme Editor zeigt Funktionen.php File Bearbeitig -->

# Wie mer Must-Use Plugins (mu-plugins) erstelle {#how-to-create-must-use-plugins-mu-plugins}

WordPress het e Funktion, wo Ihne erlaubt, benutzerdefinierti Funktionalität z'lade, wo "Must-Use Plugins" oder kurz "mu-plugins" gnannt wird.

Die spezielle mu-plugins wärde vor allne andere normale Plugins gelade und chönd nöd deaktiviert werde. In eme Multisite Network wärde d'Codes i dene mu-plugins uf alli Sites i Ihrer Installation gelade.

1. Bruche Sie FTP oder SSH, um zuegriffe uf s'Dateisystem vo Ihrem WordPress Install.

2. Im WordPress-Installationsordirekt wp-content, erstellt en neui ordire namens: mu-plugins.

<!-- Screenshot nöd verfügbar: File manager met de wp-content ordire mit em mu-plugins folder -->

3. Erstelle en neui PHP-File op din Computer met de Notepad of irgendein Code Editor.

4. Leg de Ultimate Multisite code snippet, dat je vo GitHub geholt hesch, in die File und speichs et. Je chönntsch au dëse Code op de Code snippet lege, um din mu plugin z'markiere.
