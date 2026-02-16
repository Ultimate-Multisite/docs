---
title: Migrering från V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrera från V1

## Ultimate Multisite har gått från den ursprungliga 1.x-versionsserien till 2.x-versionsserien.

Ultimate Multisite version 2.0 och uppåt är en fullständig omskrivning av kodbasen, vilket innebär att väldigt lite är gemensamt mellan den gamla och den nya versionen. Därför behöver din data migreras till ett format som de nya versionerna kan förstå när du uppgraderar från 1.x till 2.x.

Som tur är **innehåller Ultimate Multisite 2.0+ en inbyggd migrerare** i kärnan som kan upptäcka data från den gamla versionen och konvertera den till det nya formatet. Migreringen sker under **installationsguiden** i version 2.0+.

Den här lektionen går igenom hur migreraren fungerar, vad du ska göra om något går fel och hur du felsöker problem som kan uppstå under processen.

_**VIKTIGT: Innan du börjar uppgradera från version 1.x till version 2.0, se till att du skapar en säkerhetskopia av din webbplats databas**_

## Första stegen

Det första steget är att ladda ner tilläggets .zip-fil och installera version 2.0 i din nätverksadministratörs dashboard.

När du har [installerat och aktiverat version 2.0](../getting-started/installing-ultimate-multisite.md) kommer systemet automatiskt att upptäcka att din Multisite körs på den äldre versionen, och du kommer att se det här meddelandet högst upp på tilläggssidan.

_**OBS:** Om du har Ultimate Multisite 1.x installerat på din Multisite får du möjlighet att ersätta tillägget med versionen du just laddat ner. Klicka på **Ersätt nuvarande med uppladdad**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Nästa sida visar vilka äldre tillägg du har installerat tillsammans med version 1.x. Där finns instruktioner om huruvida versionen du använder är kompatibel med version 2.0 eller om du behöver installera en uppgraderad version av tillägget efter migreringen.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

När du är redo att fortsätta kan du klicka på knappen **Besök installationsguiden för att slutföra uppgraderingen**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Du kommer då till installationsguidens sida med några välkomstmeddelanden. Klicka på **Kom igång** för att gå vidare till nästa sida.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Efter att du klickat på **Kom igång** omdirigeras du till Förinstallationskontroller_._ Här visas din systeminformation och WordPress-installation, och du får veta om den uppfyller **Ultimate Multisites krav**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Nästa steg är att ange din Ultimate Multisite-licensnyckel och aktivera tillägget. Detta säkerställer att alla funktioner, inklusive tillägg, blir tillgängliga på din webbplats.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

När du har angett din nyckel klickar du på **Godkänn och aktivera**.

Efter licensaktiveringen kan du påbörja själva installationen genom att klicka på **Installera** på nästa sida. Detta skapar automatiskt de filer och den databas som krävs för att version 2.0 ska fungera.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Nu till migreringen

Migreraren har en inbyggd säkerhetsfunktion som kontrollerar hela din multisite för att säkerställa att all din Ultimate Multisite-data kan migreras utan problem. Klicka på knappen **Kör kontroll** för att starta processen.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Efter kontrollen finns det två möjliga utfall: resultatet kan vara antingen **med** fel eller **utan fel**.

### Med fel

Om du får ett felmeddelande behöver du kontakta vårt supportteam så att de kan hjälpa dig att åtgärda felet. Se till att **bifoga felloggen** när du skapar ett ärende. Du kan ladda ner loggen eller klicka på länken som säger kontakta vårt supportteam. Det öppnar hjälpwidgeten på höger sida av din sida med fälten förfyllda åt dig, inklusive felloggarna under beskrivningen.

_**Eftersom systemet hittade ett fel kommer du inte att kunna fortsätta med migreringen till version 2.0. Du kan då återgå till version 1.x för att fortsätta driva ditt nätverk tills felet är åtgärdat.**_

### Utan fel

Om systemet inte hittar några fel ser du ett framgångsmeddelande och en **Migrera**-knapp längst ner som låter dig fortsätta med migreringen. På den här sidan påminns du om att skapa en säkerhetskopia av din databas innan du går vidare, vilket vi starkt rekommenderar. Klicka på **Migrera** om du redan har en säkerhetskopia.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Och det är allt som krävs!

Du kan antingen fortsätta med installationsguiden för att uppdatera din logotyp och andra saker i ditt nätverk, eller börja utforska din Ultimate Multisite version 2.0-meny och dess nya gränssnitt. Kör hårt och ha kul.
