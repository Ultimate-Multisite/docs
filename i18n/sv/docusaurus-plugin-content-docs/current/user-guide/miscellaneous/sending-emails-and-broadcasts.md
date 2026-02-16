---
title: Skicka e-post och utskick
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Skicka e-post och utskick (v2)

_**VIKTIG INFORMATION: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Ultimate Multisite har en funktion som låter dig kommunicera med dina kunder genom att skicka e-post till en specifik användare eller en grupp användare, samt visa meddelanden på deras adminpanel för att sprida nyheter och information.

## Lägg till adminmeddelanden på dina kunders dashboard med utskick

Med Ultimate Multisites utskicksfunktion kan du lägga till **adminmeddelanden** på dina användares undersajters adminpanel.

Det här är väldigt praktiskt om du behöver göra ett tillkännagivande, till exempel om systemunderhåll eller nya produkter och tjänster för dina befintliga användare. Så här kommer adminmeddelandet att se ut på din användares dashboard.

![Adminmeddelande via utskick som visas på kundens dashboard](/img/admin/broadcasts-list.png)

För att skapa ett adminmeddelande går du till din nätverksadminpanel och under menyn **Ultimate Multisite** hittar du alternativet **Broadcasts**.

![Broadcasts-meny i Ultimate Multisite-admin](/img/admin/broadcasts-list.png)

På den här sidan klickar du på knappen **Add Broadcast** högst upp.

Då öppnas ett modalfönster där du kan välja vilken typ av utskick du vill skicka.

Välj **Message** och klicka sedan på knappen **Next Step**.

![Modalfönster för nytt utskick med Message-typ vald](/img/admin/broadcasts-list.png)

I nästa fönster får du välja antingen **Target customer** eller **Target product**. Observera att du kan välja mer än en användare eller mer än en produkt.

För att söka efter ett användarkonto eller en produkt börjar du skriva nyckelordet i fältet.

Under fältet **Message type** kan du välja färg på meddelandet. Det här framhäver hur brådskande ditt meddelande är.

Klicka sedan på **Next Step**.

![Val av målkund och produkt för utskick](/img/admin/broadcasts-list.png)

I nästa fönster kan du börja skriva ditt meddelande genom att ange ämne och innehållet du vill skicka ut till användarna.

![Redigering av ämne och innehåll för utskick](/img/admin/broadcasts-list.png)

När du har skapat ditt meddelande klickar du på knappen **Send**.

Och det var allt. Adminmeddelandet bör omedelbart visas på dina användares dashboard.

## Skicka e-post till dina kunder

Med Ultimate Multisites utskicksfunktion kan du skicka e-post till dina användare. Du kan välja att skicka e-post endast till specifika användare eller rikta dig till en specifik användargrupp baserat på vilken produkt eller plan de prenumererar på.

För att starta ett e-postutskick går du till din nätverksadminpanel och under menyn Ultimate Multisite hittar du alternativet Broadcast.

![Broadcasts-sida i Ultimate Multisite-admin](/img/admin/broadcasts-list.png)

På den här sidan klickar du på knappen **Add broadcast** högst upp.

Då öppnas ett modalfönster där du kan välja vilken typ av utskick du vill skicka. Välj **Email** och klicka sedan på knappen **Next Step**.

![Modalfönster för nytt utskick med Email-typ vald](/img/admin/broadcasts-list.png)

I nästa fönster får du välja antingen **Target customer** eller **Target product**. Observera att du kan välja mer än en användare eller mer än en produkt.

För att söka efter ett användarkonto eller en produkt börjar du skriva nyckelordet i fältet.

När du har valt din målgrupp klickar du på **Next Step**.

![Val av målkund och produkt för e-postutskick](/img/admin/broadcasts-list.png)

I nästa fönster kan du börja skriva din e-post genom att ange ämne och innehållet du vill skicka till användarna.

![Redigering av ämne och innehåll för e-postutskick](/img/admin/broadcasts-list.png)

När du har skapat ditt meddelande klickar du på knappen **Send**.

Och så enkelt är det att skicka e-post till dina slutanvändare med utskicksfunktionen.

## Systemmeddelanden

Systemmeddelanden i Ultimate Multisite är de **automatiska notifieringar** som skickas av systemet efter vissa händelser, som registrering, betalning, domänmappning med mera. Dessa e-postmeddelanden kan redigeras eller ändras i Ultimate Multisites inställningar. Det finns också en funktion som låter dig återställa och importera befintliga inställningar från en annan Ultimate Multisite-installation.

### Återställning och import

Nya versioner av Ultimate Multisite, liksom tillägg, kan och kommer att registrera nya e-postmeddelanden då och då.

För att undvika konflikter och andra problem **lägger vi inte automatiskt till de nya e-postmallarna som systemmeddelanden i din installation**, såvida de inte är avgörande för att en viss funktion ska fungera korrekt.

Superadministratörer och agenter kan dock importera dessa nyregistrerade e-postmeddelanden via importverktyget. Den processen skapar ett nytt systemmeddelande med innehållet och konfigurationen från den nya e-postmallen, vilket låter superadministratören göra de ändringar de vill eller behålla dem som de är.

#### Så här importerar du systemmeddelanden

Gå till din Ultimate Multisite-inställningssida och navigera till fliken **Emails**.

![Fliken Emails i Ultimate Multisite-inställningar](/img/config/settings-emails.png)

Klicka sedan på knappen **Customize System Emails** i sidofältet.

![Knappen Customize System Emails i sidofältet](/img/config/settings-emails.png)

På sidan System Emails ser du åtgärdsknappen **Reset & Import** högst upp. När du klickar på den öppnas ett modalfönster för import och återställning.

![Åtgärdsknappen Reset and Import på sidan System Emails](/img/config/settings-emails.png)

Sedan kan du slå på alternativet Import Emails för att se vilka systemmeddelanden som finns tillgängliga för import.

![Alternativ för Import Emails som visar tillgängliga systemmeddelanden](/img/config/settings-emails.png)

#### Återställa systemmeddelanden

Ibland inser du att ändringarna du gjort i en viss e-postmall inte längre fungerar för dig och att du vill återställa den till **standardläget**.

I sådana fall har du två alternativ: du kan helt enkelt ta bort systemmeddelandet och importera det igen (enligt instruktionerna ovan) – vilket raderar sändningsstatistik och annat, vilket gör den här metoden mindre lämplig.

Eller så kan du använda verktyget **Reset & Import** för att återställa den e-postmallen.

För att återställa en e-postmall kan du följa stegen ovan tills du kommer till verktyget Reset & Import, och sedan slå på alternativet **Reset** och välja de e-postmeddelanden du vill återställa till standardinnehållet.

![Alternativet Reset för att återställa e-postmallar till standardvärden](/img/config/settings-emails.png)
