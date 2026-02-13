---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# Hoe gebruik je Ultimate Multisite snippets op onze GitHub-repository

Er zijn codefragmenten beschikbaar in de GitHub-repository die vaak worden aangevraagd door Ultimate Multisite-gebruikers die kleine functionaliteiten willen toevoegen, zoals het toevoegen van een Google Analytics-script op aanmeldpagina's of het verbergen van een meta-box in het beheerdersdashboard.

In dit artikel laten we zien hoe je deze codes kunt gebruiken of, specifieker, waar je ze moet plaatsen.

Je kunt de snippets vinden via de onderstaande link.

https://github.com/next-press/wp-ultimo-snippets/

Er zijn 2 manieren waarop je de code kunt toevoegen

1. In het functions.php-bestand van je thema.
2. Must-Use Plugins (mu-plugins)

# Hoe je het snippet toevoegt in het functions.php-bestand van je thema

1. Log in op het netwerkbeheer-dashboard van WordPress en ga naar Thema's > Thema-editor (zie screenshot hieronder).
2. Op de pagina 'Thema's bewerken', zorg ervoor dat je actieve thema is geselecteerd in het dropdown-menu rechtsboven op je scherm (#3 op de screenshot hieronder).
3. Klik op het functions.php-bestand onder de sectie 'Thema-bestanden' om het bestand te laden. Scrol naar beneden en plak het Ultimate Multisite-snipet dat je uit de GitHub-repository hebt gekregen.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Hoe Must-Use Plugins (mu-plugins) aan te maken

WordPress heeft een functie waarmee je aangepaste functionaliteit kunt laden, genaamd 'Must-Use Plugins', of kort 'mu-plugins'.

Deze speciale mu-plugins worden geladen vóór alle andere reguliere plugins en kunnen niet worden gedeactiveerd. In een multisite-netwerk wordt de code in deze mu-plugins geladen op alle sites in je installatie.

1. Gebruik FTP of SSH om toegang te krijgen tot het bestandssysteem van je WordPress-installatie.
2. Maak binnen de wp-content-directory van je WordPress-installatie een nieuwe map aan met de naam: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Maak een nieuw PHP-bestand op je computer met de naam wu-snippet.php met behulp van Kladblok of een andere code-editor.
4. Plaats het Ultimate Multisite-codefragment dat je uit de GitHub-repository hebt gekregen in het bestand en sla het op. Je kunt ook deze code bovenop het codefragment plaatsen om je mu-plugin te labelen.
