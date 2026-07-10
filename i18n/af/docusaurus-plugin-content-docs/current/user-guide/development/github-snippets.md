---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Hoe om Ultimate Multisite snippets op ons GitHub-repository te gebruik {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Daar is kode-snippets beskikbaar in die GitHub-repository wat dikwels versoek word deur Ultimate Multisite-gebruikers wat klein funksionaliteite wil byvoeg, soos die byvoeging van die Google Analytics-skrip op registasiebladsye of die verberg van 'n meta-boks van die admin-dashboard.

Hierdie artikel sal vir jou wys hoe om hierdie kode te gebruik, of meer spesifiek, waar om hierdie kode te plaas.

Jy kan die snippets op die skakel hieronder vind.

https://github.com/next-press/wp-ultimo-snippets/

Daar is 2 maniere om die kode by te voeg

  1. Op jou tema se functions.php lêer.

  2. Must-Use Plugins (mu-plugins)

# Hoe om die snippet in jou tema se functions.php lêer by te voeg. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Log in op jou WordPress Network admin dashboard en gaan na Themes > Theme Editor (Kyk na die skermkiekie hieronder).

  2. Op die "Edit Themes" bladsy, maak seker dat jy jou aktiewe tema op die dropdown-veld aan die boonste regterkant van jou skerm geselekteer het (#3 op die skermkiekie hieronder).

  3. Klik op die functions.php lêer onder die "Theme Files" afdeling om die lêer te laai. Rol onderaan af en plak die Ultimate Multisite snippet wat jy van die GitHub-repository gekry het.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Hoe om Must-Use Plugins (mu-plugins) te skep {#how-to-create-must-use-plugins-mu-plugins}

WordPress het 'n kenmerk wat jou toelaat om aangepaste funksionaliteit te laai, genaamd "Must-Use Plugins", of kortliks "mu-plugins".

Hierdie spesiale mu-plugins word vroeër gelaai as alle ander gewone plugins, en dit kan nie gedeaktiveer word nie. In 'n multisite-netwerk sal die kode in hierdie mu-plugins op al die sites in jou installasie gelaai word.

1. Gebruik FTP of SSH om toegang te kry tot die lêersisteem van jou WordPress-installasie.

2. Binne die wp-content-direktorie van jou WordPress-installasie, skep 'n nuwe direktorie met die naam: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Skep 'n nuwe PHP-lêer op jou rekenaar met die naam wu-snippet.php met behulp van Notepad of enige kode-redigeerder.

4. Plaas die Ultimate Multisite kode-snippet wat jy van die GitHub-repository gekry het in die lêer en stoor dit. Jy kan ook hierdie kode bo-op die kode-snippet byvoeg om jou mu-plugin te benoem.
