---
title: GitHub-fragmenten
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Hoe je Ultimate Multisite snippets gebruikt op onze GitHub repository {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Er zijn code snippets beschikbaar in de GitHub repository die vaak worden aangevraagd door Ultimate Multisite-gebruikers die kleine functionaliteiten willen toevoegen, zoals het toevoegen van een Google Analytics-script op aanmeldpagina's of het verbergen van een metabox uit het admin dashboard.

Dit artikel laat je zien hoe je deze codes gebruikt, of specifieker waar je ze moet plaatsen.

Je kunt de snippets vinden via de link hieronder.

https://github.com/next-press/wp-ultimo-snippets/

Er zijn 2 manieren om de code toe te voegen

  1. In het functions.php-bestand van je theme.

  2. Must-Use Plugins (mu-plugins)

# Hoe je de snippet toevoegt aan het functions.php-bestand van je theme. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Log in op je WordPress Network admin dashboard en ga naar Themes >Theme Editor (zie screenshot hieronder).

  2. Zorg er op de pagina "Edit Themes" voor dat je je actieve theme hebt geselecteerd in het dropdownveld rechtsboven op je scherm (#3 op de screenshot hieronder).

  3. Klik op het functions.php-bestand onder de sectie "Theme Files" om het bestand te laden. Scrol omlaag naar de onderkant en plak de Ultimate Multisite snippet die je uit de GitHub repository hebt gehaald.

<!-- Screenshot niet beschikbaar: WordPress Theme Editor die het bewerken van het functions.php-bestand toont -->

# Hoe je Must-Use Plugins (mu-plugins) maakt {#how-to-create-must-use-plugins-mu-plugins}

WordPress heeft een functie waarmee je aangepaste functionaliteit kunt laden, genaamd "Must-Use Plugins", of kortweg "mu-plugins".

Deze speciale mu-plugins worden geladen vóór alle andere reguliere plugins en ze kunnen niet worden gedeactiveerd. In een multisite-netwerk wordt de code in deze mu-plugins geladen op alle sites in je installatie.

1\. Gebruik FTP of SSH om toegang te krijgen tot het bestandssysteem van je WordPress-installatie.

2\. Maak binnen de wp-content directory van je WordPress-installatie een nieuwe directory aan met de naam: mu-plugins.

<!-- Screenshot niet beschikbaar: bestandsbeheerder met wp-content directory met mu-plugins-map -->

3\. Maak een nieuw PHP-bestand op je computer met de naam wu-snippet.php met Notepad of een code-editor.

4\. Plaats de Ultimate Multisite code snippet die je uit de GitHub repository hebt gehaald in het bestand en sla het op. Je kunt deze code ook bovenaan de code snippet toevoegen om je mu plugin te labelen.
