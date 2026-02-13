---
title: Sunrise-bestandsfout
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Fout bij het installeren van het Sunrise-bestand

Het **sunrise.php**-bestand is een speciaal bestand waar WordPress naar zoekt tijdens het opstarten. Om WordPress het **sunrise.php**-bestand te laten detecteren, moet het zich bevinden in de **wp-content folder**.

Wanneer je Ultimate Multisite activeert en door de installatiewizard gaat zoals op de screenshot, probeert Ultimate Multisite ons **sunrise.php**-bestand naar de **wp-content folder** te kopiëren.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Meestal kunnen we het bestand succesvol kopiëren en werkt alles. Als echter iets niet correct is ingesteld (bijvoorbeeld maprechten), kun je een situatie tegenkomen waarin Ultimate Multisite het bestand niet kan kopiëren.

Als je het foutbericht leest dat Ultimo je geeft, zie je dat dit precies is wat hier gebeurde: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Om dit op te lossen, kun je het **sunrise.php**-bestand simpelweg kopiëren vanuit de **wp-ultimo plugin folder** en het in je **wp-content folder** plakken. Nadat je dat hebt gedaan, laad je de wizardpagina opnieuw en moeten de controles slagen.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

De **Health Check tool** die onderdeel is van WordPress (je kunt er via je hoofdsite **admin panel > Tools > Health Check** bij) kan je laten weten of je maprechten zijn ingesteld op waarden die problemen met WordPress kunnen veroorzaken.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
