---
title: Ställa in Sunrise-konstanten på Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Aktivera Sunrise-konstanten på Closte

Vissa webbhotell låser wp-config.php av säkerhetsskäl. Det innebär att Ultimate Multisite inte automatiskt kan redigera filen för att lägga till de konstanter som krävs för att domänmappning och andra funktioner ska fungera. Closte är ett sådant webbhotell.

Closte erbjuder dock ett säkert sätt att lägga till konstanter i wp-config.php. Du behöver bara följa stegen nedan:

## I Clostes kontrollpanel

Börja med att [logga in på ditt Closte-konto](https://app.closte.com/), klicka på menyalternativet Sites och sedan på länken Dashboard för den webbplats du arbetar med:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Du kommer att se ett antal nya menyalternativ på vänster sida av skärmen. Navigera till sidan **Settings** via den menyn:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

På sidan **Settings** hittar du fliken WP-Config och sedan fältet "Additional wp-config.php content" på den fliken:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

När du installerar Ultimate Multisite behöver du lägga till sunrise-konstanten i det fältet. Lägg helt enkelt till en ny rad och klistra in raden nedan. Klicka sedan på knappen **Save All**.

define('SUNRISE', true);

Det var allt – nu är du klar. Gå tillbaka till installationsguiden för Ultimate Multisite och uppdatera sidan för att fortsätta processen.
