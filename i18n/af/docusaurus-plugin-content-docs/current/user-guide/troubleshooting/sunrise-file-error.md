---
title: Sunrise Bestand Fout
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Fout by die Installeer van die Sunrise-lêr {#error-installing-the-sunrise-file}

Die sunrise.php lêr is 'n spesiale lêr wat WordPress soek wanneer dit self opblaas (bootstraps). Vir WordPress om die sunrise.php lêr te kan opspoor, moet dit binne die **wp-content-maatskappy** gevind word.

Wanneer jy Ultimate Multisite aktiveer en deur die opstelwenaar gaan, soos die een wat jy op die skermkiekieer het, probeer Ultimate Multisite om ons sunrise.php lêr na die wp-content maatskappy te kopieer.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Die meeste van die tye slaag ons daarin om die lêr suksesvol te kopieer en alles werk. Maar, as iets nie korrek opgestel is nie (maatskappyverhasilings, byvoorbeeld), kan jy 'n scenario teëkom waar Ultimate Multisite nie die lêr kan kopieer nie.

As jy die foutboodskap wat Ultimo aan jou gee lees, sal jy sien dat dit presies hier gebeur het: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Om dit reg te stel, kan jy eenvoudig die sunrise.php lêr binne die wp-ultimo plugin-maatskappy kopieer en dit in jou wp-content maatskappy plak. Nadat jy dit gedoen het, laai jy die opstelwenaarbladsy her en die kontrole moet verbygaan.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In enige geval, dit mag 'n algemene ondersoek van jou maatskappyverhasilings motiver vir jou om probleme in die toekoms te vermy (nie net met Ultimate Multisite nie, maar ook met ander plugins en temas).

Die **Health Check tool** wat deel is van WordPress (wat jy kan bereik via jou hoofwebwerf **admin panel > Tools > Health Check**) is in staat om jou te laat weet of jy maatskappyverhasilings op waardes gestel het wat probleme met WordPress kan veroorsaak.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
