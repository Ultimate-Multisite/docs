---
title: Skicka e-postmeddelanden och massutskick
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Skicka e-post och utskick (v2)

_**VIKTIGT: Den här artikeln avser Ultimate Multisite version 2.x.**_

Ultimate Multisite levereras med en funktion som gör att du kan kommunicera med dina kunder genom att skicka ett e-postmeddelande till en riktad användare eller en grupp användare samt skicka meddelanden på deras admin dashboard för att sända ut tillkännagivanden

## Lägg till admin notices på dina kunders dashboard med utskick

Med Ultimate Multisite broadcast-funktionen kan du lägga till **admin notices** på din användares subsite admin dashboard.

Detta är extremt användbart om du behöver göra ett tillkännagivande, som systemunderhåll eller att erbjuda nya produkter eller tjänster till dina befintliga användare. Så här kommer admin-meddelandet att se ut på din användares dashboard.

<!-- Skärmbild inte tillgänglig: Admin notice broadcast shown on a customer's subsite dashboard -->

För att starta ett admin-meddelande, gå till din network admin dashboard och under menyn **Ultimate Multisite** hittar du alternativet **Broadcasts**.

![Listsida för utskick i Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Du kan också redigera befintliga utskick:

![Gränssnitt för redigering av utskick](/img/admin/broadcast-edit.png)

Från den här sidan klickar du på knappen **Add Broadcast** högst upp.

Detta öppnar modalfönstret Lägg till utskick, där du kan välja vilken typ av utskick du vill skicka.

Välj **Message** och klicka sedan på knappen **Next Step**.

![Modal för att lägga till utskick med alternativet Message valt](/img/admin/broadcast-add-message.png)

Nästa fönster ber dig ange antingen **Target customer** eller **Target product**. Observera att du kan välja fler än en användare eller fler än en produkt.

För att söka efter antingen ett användarkonto eller en produkt behöver du börja skriva nyckelordet i fältet.

Under fältet **Message type** kan du välja färgen på meddelandet. Detta betonar hur brådskande ditt meddelande är.

Du kan sedan klicka på **Next Step**.

![Fält för målkunder, målprodukt och meddelandetyp för ett Message-utskick](/img/admin/broadcast-message-targets.png)

Nästa fönster är där du kan börja skriva ditt meddelande genom att ange ämnet och innehållet/meddelandet som du vill sända ut till användarna.

![Ämne och innehållsredigerare för utskicksmeddelande i skrivsteget](/img/admin/broadcast-edit.png)

När du har skapat ditt meddelande kan du sedan trycka på knappen **Send**.

Och det var allt. Admin-meddelandet bör omedelbart visas på din användares dashboard.

## Skicka e-post till dina kunder

Med Ultimate Multisite broadcast-funktionen kan du skicka ett e-postmeddelande till dina användare. Du har ett alternativ att skicka e-postmeddelandet endast till specifika användare eller rikta det till en specifik användargrupp baserat på produkten eller planen de prenumererar på.

För att starta ett e-postutskick, gå till din network admin dashboard och under Ultimate Multisite-menyn hittar du alternativet Broadcast.

![Listsida för utskick som används som startpunkt för ett e-postutskick](/img/admin/broadcasts-list.png)

Från den här sidan klickar du på knappen **Add broadcast** högst upp.

Detta öppnar modalfönstret Lägg till utskick, där du kan välja vilken typ av utskick du vill skicka. Välj **Email** och klicka sedan på knappen **Next Step**.

![Modal för att lägga till utskick med alternativet Email valt](/img/admin/broadcast-add-email.png)

Nästa fönster ber dig ange antingen **Target customer** eller **Target produc** t. Observera att du kan välja fler än en användare eller fler än en produkt.

För att söka efter antingen ett användarkonto eller en produkt behöver du börja skriva nyckelordet i fältet.

När din målgrupp har valts kan du klicka på **Next Step**.

![Val av målkunder och målprodukt för ett Email-utskick](/img/admin/broadcast-email-targets.png)

Nästa fönster är där du kan börja skriva ditt e-postmeddelande genom att ange ämnet och innehållet/meddelandet som du vill skicka till användarna.

<!-- Skärmbild inte tillgänglig: Email broadcast subject and content editor on the compose step -->

När du har skapat ditt meddelande kan du trycka på knappen **Send**.

Och så enkelt är det att skicka ett e-postmeddelande till dina slutanvändare med broadcast-funktionen.

## System-e-post

System-e-post i Ultimate Multisite är de **automatiska aviseringar** som skickas av systemet efter vissa åtgärder som registrering, betalning, domänmappning osv. Dessa e-postmeddelanden kan redigeras eller ändras från Ultimate Multisite-inställningarna. Det levereras också med en funktion som gör att du kan återställa och importera befintliga inställningar från en annan Ultimate Multisite-installation.

### Återställning och import

Nya Ultimate Multisite-versioner, samt tillägg, kan och kommer att registrera nya e-postmeddelanden då och då.

För att förhindra konflikter och andra problem, **kommer vi inte att lägga till de nya e-postmallarna som System Emails i din installation automatiskt** , om de inte är avgörande för att en viss funktion ska fungera korrekt.

Super admins och agenter kan dock importera dessa nyligen registrerade e-postmeddelanden via importverktyget. Den processen skapar ett nytt system-e-postmeddelande med innehållet och konfigurationen från den nya e-postmallen, vilket låter super admin göra vilka ändringar de vill eller behålla dem som de är.

#### Så här importerar du system-e-post

Gå till din Ultimate Multisite Settings-sida och gå till fliken **Emails**.

![Fliken Emails i Ultimate Multisite-inställningar som visar avsnittet System Emails](/img/config/settings-emails-tab.png)

Klicka sedan på knappen **Customize System Emails** i sidofältet.

<!-- Skärmbild inte tillgänglig: Customize System Emails button on the System Emails sidebar panel -->

På sidan System Emails ser du åtgärdsknappen **Reset & Import** högst upp. Om du klickar på den knappen bör modalfönstret för import och återställning öppnas.

![Åtgärdsknappen Reset eller Import på adminsidan för System Emails](/img/admin/system-emails-reset-import.png)

Sedan kan du växla alternativen för Import Emails för att se vilka system-e-postmeddelanden som är tillgängliga att importera.

<!-- Skärmbild ej tillgänglig: modalen Återställ och importera med alternativen för att importera mejl expanderade -->

#### Återställa systemmejl

Andra gånger kommer du att inse att ändringarna du gjorde i en viss mejlmall inte längre fungerar för dig och att du vill återställa den till sitt **standardtillstånd**.

I sådana fall har du två alternativ: du kan helt enkelt ta bort systemmejlet och importera det igen (med instruktionerna ovan) – vilket raderar sändningsstatistik och andra saker, vilket gör den här metoden minst att föredra.

Eller så kan du använda **verktyget Återställ och importera** för att återställa den mejlmallen.

För att återställa en mejlmall kan du följa stegen ovan tills du når verktyget Återställ och importera, och sedan slå på alternativet **Återställ** och välja de mejl du vill återställa till deras standardinnehåll.

<!-- Skärmbild ej tillgänglig: modalen Återställ och importera med alternativen för att återställa mejl expanderade -->
