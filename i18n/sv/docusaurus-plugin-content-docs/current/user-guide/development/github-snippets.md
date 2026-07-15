---
title: GitHub-kodsnuttar
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Hur du använder Ultimate Multisite-kodsnuttar från vårt GitHub-repository

Det finns kodsnuttar tillgängliga i GitHub-repositoryt som ofta efterfrågas av Ultimate Multisite-användare som vill lägga till små funktioner, som att inkludera ett Google Analytics-skript på registreringssidor eller dölja en metaruta från adminpanelen.

Den här artikeln visar hur du använder dessa kodsnuttar, och mer specifikt var du ska placera dem.

Du hittar kodsnuttarna via länken nedan.

https://github.com/next-press/wp-ultimo-snippets/

Det finns två sätt att lägga till koden:

  1. I ditt temas functions.php-fil.

  2. Must-Use Plugins (mu-plugins)

# Så lägger du till kodsnutten i ditt temas functions.php-fil

  1. Logga in på din WordPress nätverksadmin-panel och gå till Utseende > Temaredigeraren (se skärmdump nedan).

  2. På sidan "Redigera teman" ser du till att ditt aktiva tema är valt i rullgardinsmenyn uppe till höger på skärmen (#3 i skärmdumpen nedan).

  3. Klicka på functions.php-filen under "Temafiler" för att ladda filen. Scrolla ner till botten och klistra in kodsnutten från Ultimate Multisite som du hämtade från GitHub-repositoryt.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Så skapar du Must-Use Plugins (mu-plugins)

WordPress har en funktion som låter dig ladda anpassad funktionalitet kallad "Must-Use Plugins", eller "mu-plugins" i kortform.

Dessa speciella mu-plugins laddas före alla andra vanliga plugins och kan inte avaktiveras. I ett multisite-nätverk kommer koden i dessa mu-plugins att laddas på alla webbplatser i din installation.

1\. Använd FTP eller SSH för att komma åt filsystemet på din WordPress-installation.

2\. Inne i wp-content-katalogen på din WordPress-installation skapar du en ny katalog med namnet: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Skapa en ny PHP-fil på din dator med namnet wu-snippet.php med hjälp av Anteckningar eller valfri kodredigerare.

4\. Klistra in kodsnutten från Ultimate Multisite som du hämtade från GitHub-repositoryt i filen och spara den. Du kan även lägga till den här koden högst upp i kodsnutten för att namnge ditt mu-plugin.
