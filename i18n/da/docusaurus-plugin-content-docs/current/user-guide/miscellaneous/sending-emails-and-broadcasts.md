---
title: Afsendelse af e-mails og udsendelser
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Afsendelse af e-mails og broadcasts (v2)

_**VIGTIG BEMÆRKNING: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Ultimate Multisite leveres med en funktion, der giver dig mulighed for at kommunikere med dine kunder ved at sende en e-mail til en målrettet bruger eller en gruppe af brugere samt sende meddelelser på deres admin dashboard for at udsende meddelelser

## Tilføj admin-meddelelser til dine kunders dashboard med Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Ved at bruge Ultimate Multisite-broadcastfunktionen kan du tilføje **admin-meddelelser** til din brugers subsite-admin dashboard.

Dette er yderst nyttigt, hvis du har brug for at lave en meddelelse som systemvedligeholdelse eller tilbyde nye produkter eller tjenester til dine eksisterende brugere. Sådan vil admin-meddelelsen se ud på din brugers dashboard.

<!-- Skærmbillede ikke tilgængeligt: Admin-meddelelses-broadcast vist på en kundes subsite-dashboard -->

For at starte en admin-meddelelse skal du gå til dit netværks-admin dashboard, og under menuen **Ultimate Multisite** finder du indstillingen **Broadcasts**.

![Broadcasts-listevisningsside i Ultimate Multisite-admin](/img/admin/broadcasts-list.png)

Du kan også redigere eksisterende broadcasts:

![Broadcast-redigeringsgrænseflade](/img/admin/broadcast-edit.png)

Fra denne side skal du klikke på knappen **Tilføj Broadcast** øverst.

Dette åbner modalvinduet Tilføj broadcast, hvor du kan vælge, hvilken type broadcast du ønsker at sende.

Vælg **Meddelelse**, og klik derefter på knappen **Næste trin**.

![Tilføj broadcast-modal med indstillingen Meddelelse valgt](/img/admin/broadcast-add-message.png)

Det næste vindue vil bede dig om enten **Målkunde** eller **Målprodukt**. Bemærk, at du kan vælge mere end én bruger eller mere end ét produkt.

For at søge efter enten en brugerkonto eller et produkt skal du begynde at skrive nøgleordet inde i feltet.

Under feltet **Meddelelsestype** kan du vælge farven på meddelelsen. Dette vil understrege, hvor hastende din besked er.

Du kan derefter klikke på **Næste trin**.

![Målkunder, målprodukt og meddelelsestypefelter for en Meddelelse-broadcast](/img/admin/broadcast-message-targets.png)

Det næste vindue er, hvor du kan begynde at skrive din besked ved at indtaste emnet og indholdet/beskeden, du ønsker at udsende til brugerne.

![Broadcast-beskedens emne- og indholdseditor i skrive-trinnet](/img/admin/broadcast-edit.png)

Når du har oprettet din besked, kan du derefter trykke på knappen **Send**.

Og det var det. Admin-meddelelsen bør straks blive vist på din brugers dashboard.

## Send e-mails til dine kunder {#send-emails-to-your-customers}

Ved at bruge Ultimate Multisite-broadcastfunktionen kan du sende en e-mail til dine brugere. Du har mulighed for kun at sende e-mailen til specifikke brugere eller målrette en bestemt brugergruppe baseret på det produkt eller den plan, de er subscribed under.

For at starte en e-mail-broadcast skal du gå til dit netværks-admin dashboard, og under Ultimate Multisite-menuen finder du Broadcast-indstillingen.

![Broadcasts-listevisningsside brugt som udgangspunkt for en e-mail-broadcast](/img/admin/broadcasts-list.png)

Fra denne side skal du klikke på knappen **Tilføj broadcast** øverst.

Dette åbner modalvinduet Tilføj broadcast, hvor du kan vælge, hvilken type broadcast du ønsker at sende. Vælg **Email**, og klik derefter på knappen **Næste trin**.

![Tilføj broadcast-modal med indstillingen Email valgt](/img/admin/broadcast-add-email.png)

Det næste vindue vil bede dig om enten **Målkunde** eller **Målproduc** t. Bemærk, at du kan vælge mere end én bruger eller mere end ét produkt.

For at søge efter enten en brugerkonto eller et produkt skal du begynde at skrive nøgleordet inde i feltet.

Når din målgruppe er valgt, kan du klikke på **Næste trin**.

![Valg af målkunder og målprodukt for en Email-broadcast](/img/admin/broadcast-email-targets.png)

Det næste vindue er, hvor du kan begynde at skrive din e-mail ved at indtaste emnet og indholdet/beskeden, du ønsker at sende til brugerne.

<!-- Skærmbillede ikke tilgængeligt: Email-broadcasts emne- og indholdseditor i skrive-trinnet -->

Når du har oprettet din besked, kan du trykke på knappen **Send**.

Og så nemt er det at sende en e-mail til dine slutbrugere ved hjælp af broadcastfunktionen.

## System-e-mails {#system-emails}

System-e-mails i Ultimate Multisite er de **automatiske notifikationer**, der sendes af systemet efter bestemte handlinger som registrering, betaling, domænetilknytning osv. Disse e-mails kan redigeres eller ændres fra Ultimate Multisite-indstillinger. Det leveres også med en funktion, der giver dig mulighed for at nulstille og importere eksisterende indstillinger fra en anden Ultimate Multisite-installation.

### Nulstilling & import {#resetting--importing}

Nye Ultimate Multisite-versioner samt add-ons kan og vil registrere nye e-mails fra tid til anden.

For at forhindre konflikter og andre problemer **tilføjer vi ikke de nye e-mail-skabeloner som system-e-mails på din installation automatisk** , medmindre de er afgørende for, at en given funktion fungerer korrekt.

Dog kan superadmins og agenter importere disse nyregistrerede e-mails via importværktøjet. Denne proces vil oprette en ny system-e-mail med indholdet og konfigurationen fra den nye e-mail-skabelon, hvilket giver superadmin mulighed for at foretage de ændringer, de ønsker, eller beholde dem, som de er.

#### Sådan importerer du system-e-mails {#how-to-import-system-emails}

Gå til din Ultimate Multisite-indstillingsside og gå til fanen **E-mails**.

![Fanen E-mails i Ultimate Multisite-indstillinger, der viser sektionen System-e-mails](/img/config/settings-emails-tab.png)

Klik derefter på knappen **Tilpas system-e-mails** i sidebaren.

<!-- Skærmbillede ikke tilgængeligt: Knappen Tilpas system-e-mails i sidepanelet System-e-mails -->

På siden System-e-mails vil du se handlingsknappen **Nulstil & importér** øverst. Når du klikker på den knap, bør modalvinduet til import og nulstilling åbnes.

![Handlingsknappen Nulstil eller importér på admin-siden System-e-mails](/img/admin/system-emails-reset-import.png)

Derefter kan du slå indstillingerne Importér e-mails til/fra for at se, hvilke system-e-mails der er tilgængelige til import.

<!-- Skærmbillede ikke tilgængeligt: Nulstil og importér-modal med Importér e-mails-indstillingerne udvidet -->

#### Nulstilling af system-e-mails {#reseting-system-emails}

Andre gange vil du opdage, at de ændringer, du har foretaget i en given e-mailskabelon, ikke længere fungerer for dig, og at du gerne vil nulstille den til dens **standardtilstand**.

I sådanne tilfælde har du to muligheder: Du kan ganske enkelt slette system-e-mailen og importere den igen (ved hjælp af instruktionerne ovenfor) - hvilket vil slette afsendelsesmetrikker og andre ting, hvilket gør denne metode mindst foretrukken.

Eller du kan bruge **Nulstil og importér-værktøjet** til at nulstille den e-mailskabelon.

For at nulstille en e-mailskabelon kan du følge trinnene ovenfor, indtil du når Nulstil og importér-værktøjet, og derefter slå **Nulstil**-indstillingen til og vælge de e-mails, du vil nulstille tilbage til deres standardindhold.

<!-- Skærmbillede ikke tilgængeligt: Nulstil og importér-modal med Nulstil e-mails-indstillingerne udvidet -->
