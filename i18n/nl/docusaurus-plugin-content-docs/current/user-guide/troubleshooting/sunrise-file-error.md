---
title: Sunrise-bestandsfout
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Fout bij het installeren van het Sunrise-bestand

Het sunrise.php-bestand is een speciaal bestand waar WordPress naar zoekt terwijl het zichzelf opstart. Om WordPress het sunrise.php-bestand te laten detecteren, moet het zich in de **wp-content-map** bevinden.

Wanneer je Ultimate Multisite activeert en de installatiewizard doorloopt zoals die op de schermafbeelding, probeert Ultimate Multisite ons sunrise.php-bestand naar de wp-content-map te kopiëren.

<!-- Schermafbeelding niet beschikbaar: pagina van de installatiewizard met installatiestap voor sunrise.php -->

Meestal kunnen we het bestand succesvol kopiëren en werkt alles. Als er echter iets niet goed is ingesteld (maprechten, bijvoorbeeld), kun je in een situatie terechtkomen waarin Ultimate Multisite het bestand niet kan kopiëren.

Als je de foutmelding leest die Ultimo je geeft, zie je dat dit precies is wat hier is gebeurd: **Kopiëren van Sunrise mislukt**.

<!-- Schermafbeelding niet beschikbaar: foutmelding met Kopiëren van Sunrise mislukt -->

Om dat op te lossen, kun je eenvoudig het sunrise.php-bestand in de wp-ultimo pluginmap kopiëren en in je wp-content-map plakken. Nadat je dat hebt gedaan, laad je de wizardpagina opnieuw en zouden de controles moeten slagen.

<!-- Schermafbeelding niet beschikbaar: bestandsbeheerder met sunrise.php in de wp-ultimo pluginmap --> Hoe dan ook kan dit een algemene controle van je maprechten rechtvaardigen om problemen in de toekomst te voorkomen (niet alleen met Ultimate Multisite, maar ook met andere plugins en themes).

Het **Sitediagnose-tool** dat deel uitmaakt van WordPress (je kunt het openen via het **beheerpaneel > Gereedschap > Sitediagnose** van je hoofdsite) kan je laten weten of je maprechten hebt ingesteld op waarden die problemen met WordPress kunnen veroorzaken.

<!-- Schermafbeelding niet beschikbaar: WordPress Sitediagnose-tool met status van maprechten -->
