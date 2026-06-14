---
title: Sende e-mails og udsendelser
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Afsendelse af e-mails og udsendelser (v2)

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Ultimate Multisite har en funktion, der giver dig mulighed for at kommunikere med dine kunder ved at sende en e-mail til en målrettet bruger eller en gruppe af brugere samt sende meddelelser på deres admin dashboard til at udsende annonceringer.

## Tilføj admin-meddelelser til dine kunders dashboards med Udsendelser (Broadcasts)

Ved hjælp af funktionen Udsendelser i Ultimate Multisite kan du tilføje **admin-meddelelser** til din brugers subsite admin dashboard.

Dette er utrolig nyttigt, hvis du skal gøre en annoncering som systemvedligeholdelse eller tilbyde nye produkter eller tjenester til dine eksisterende brugere. Sådan vil admin-meddelelsen se ud på din brugers dashboard.

<!-- Screenshot unavailable: Admin meddelelse udsendt på en kundes subsite dashboard -->

For at starte en admin-meddelelse skal du gå til dit netværksadmin dashboard og under menuen **Ultimate Multisite** finder du muligheden **Broadcasts**.

![Udsendelsesliste side i Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Du kan også redigere eksisterende udsendelser:

![Redigeringsgrænseflade for udsendelse](/img/admin/broadcast-edit.png)

Fra denne side klikker du på knappen **Add Broadcast** (Tilføj udsendelse) øverst.

Dette åbner en modal vindue til at tilføje en udsendelse, hvor du kan vælge, hvilken type udsendelse du ønsker at sende.

Vælg derefter **Message** (Meddelelse) og klik på knappen **Next Step** (Næste trin).

![Modal til tilføjelse af udsendelse med Message-muligheden valgt](/img/admin/broadcast-add-message.png)

Det næste vindue vil bede dig om enten at vælge en **Target customer** (Målkunde) eller et **Target product** (Målprodukt). Bemærk, at du kan vælge flere brugere eller flere produkter.

For at søge efter en brugerkonto eller et produkt skal du starte med at skrive nøgleordet i feltet.

Under feltet **Message type** kan du vælge farven på meddelelsen. Dette vil fremhæve vigtigheden af din besked.

Derefter kan du klikke på **Next Step**.

![Målgruppe, mårodukt og message type felter for en Message broadcast](/img/admin/broadcast-message-targets.png)

Det næste vindue er her, hvor du kan begynde at opstille din besked ved at indtaste emnefeltet og indholdet/beskeden, du ønsker at sende til brugerne.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Når du har oprettet din besked, kan du trykke på knappen **Send**.

Og det er det. Administratornotatet vil øjeblikkeligt blive vist på brugerens dashboard.

## Send e-mails til dine kunder

Ved hjælp af funktionen Ultimate Multisite broadcast kan du sende en e-mail til dine brugere. Du har mulighed for at sende e-mailen kun til specifikke brugere eller målrette en bestemt brugergruppe baseret på det produkt eller den plan, de er abonnenter på.

For at starte en e-mail broadcast skal du gå til dit netværksadministrator dashboard og under menuen Ultimate Multisite finder du Broadcast-muligheden.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Fra denne side klikker du på knappen **Add broadcast** øverst.

Dette åbner Add broadcast modal vinduet, hvor du kan vælge, hvilken type broadcast du ønsker at sende. Vælg derefter **Email** og klik på knappen **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Det næste vindue vil bede dig om enten den **Target customer** eller det **Target product**. Bemærk, at du kan vælge flere brugere eller flere produkter.

For at søge efter en brugerkonto eller et produkt skal du starte med at skrive nøgleordet i feltet.

Når du har valgt din målgruppe, kan du klikke på **Næste trin**.

![Valg af målgrupper og målprodukt til en e-mailudsendelse](/img/admin/broadcast-email-targets.png)

Det næste vindue er her, hvor du kan begynde at skrive din e-mail ved at indtaste emnefeltet og indholdet/beskeden, du ønsker at sende til brugerne.

<!-- Screenshot unavailable: Editor af emnefelt og indhold til e-mailudsendelse på trinnet -->

Når du har oprettet din besked, kan du trykke på knappen **Send**.

Og så nemt er det at sende en e-mail til dine slutbrugere ved hjælp af udsendelsesfunktionen.

## Systemmails

Systemmails i Ultimate Multisite er de **automatiske notifikationer**, som systemet sender efter visse handlinger som registrering, betaling, domænemapping osv. Disse e-mails kan redigeres eller modificeres fra indstillingerne i Ultimate Multisite. Der findes også en funktion, der giver dig mulighed for at nulstille og importere eksisterende indstillinger fra en anden Ultimate Multisite-installation.

### Nulstilling & Importering

Nye versioner af Ultimate Multisite samt add-ons kan lejlighedsvis registrere nye e-mails.

For at undgå konflikter og andre problemer **tilføjer vi ikke de nye e-mail-skabeloner automatisk som Systemmails på din installation**, medmindre de er essentielle for den korrekte funktion af en given funktion.

Dog kan superadministratorer og agenter importere disse nyregistrerede e-mails via importeringsværktøjet. Denne proces vil oprette en ny systemmail med indholdet og konfigurationen fra den nye e-mail-skabelon, så superadministratoren kan foretage alle de ændringer, de ønsker, eller beholde dem som de er.

#### Sådan importerer du systemmails

Gå til din Ultimate Multisite Indstillingsside og gå til fanen **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Dere klikker dere dere på siden, i sidepanelet, på knappen **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

På System Emails-siden ser du en handlingstasten **Reset & Import** øverst. Ved å klikke på den skal det åpnes vinduet for import og nulstilling (modal window).

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Deretter kan du slå om indstillingerne for Import Emails for at se hvilke systeme-mails der er tilgjengelige for import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Nulstilling af System E-mails

Andre gange vil du opdage, at de ændringer, du har foretaget i en given e-mail-template, ikke virker for dig længere, og du ønsker at nulstille den til dens **standardindstilling**.

I sådanne tilfælde har du to muligheder: Du kan blot slette systeme-mailen og importere den igen (ved hjælp af instruktionerne ovenfor) – hvilket vil slette send-metrikker og andre ting, hvilket gør denne metode mindst foretrukken.

Eller du kan bruge **Reset & Import tool** til at nulstille den pågældende e-mail-template.

For at nulstille en e-mail-template kan du følge trinene ovenfor indtil du når Reset & Import tool, og derefter slå om muligheden **Reset** og vælg de e-mails, du vil nulstille tilbage til deres standardindhold.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
