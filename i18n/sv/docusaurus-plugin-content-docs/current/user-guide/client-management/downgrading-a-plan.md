---
title: Nedgradering av ett abonnemang
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Nedgradera ett abonnemang (v2)

_**VIKTIG INFORMATION: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Att nedgradera ett abonnemang är något dina kunder kan göra om de har en begränsad budget eller har bestämt sig för att de inte behöver så mycket resurser för att driva sin underwebbplats.

## Så här nedgraderar du ett abonnemang

Dina kunder kan nedgradera sitt abonnemang när som helst genom att logga in på adminpanelen för sin underwebbplats och klicka på **Ändra** under sin kontosida.

![Kontosida med knappen Ändra under medlemskap](/img/admin/memberships-list.png)

När användaren/kunden klickar på knappen **Ändra** skickas de vidare till kassasidan där de kan välja vilket abonnemang de vill byta till.

![Kassasida som visar abonnemangsalternativ för nedgradering](/img/admin/memberships-list.png)

I det här exemplet nedgraderar vi abonnemanget från **Premium** till **Gratis**.

För att fortsätta behöver användaren bara klicka på knappen **Slutför köp**. De kommer då tillbaka till kontosidan där ett meddelande visas om den väntande ändringen av medlemskapet. Ändringarna träder i kraft vid kundens **nästa faktureringsperiod**.

![Kontosida som visar meddelande om väntande medlemskapsändring](/img/admin/memberships-list.png)

### Vad händer när en användare nedgraderar sitt abonnemang

Det är viktigt att notera att en nedgradering av abonnemanget inte ändrar den befintliga konfigurationen på användarens underwebbplats.

Webbplatsmallen ändras inte automatiskt eftersom ett byte av webbplatsmall helt raderar och återställer underwebbplatsen. Detta för att undvika onödig dataförlust. Diskutrymme, teman, plugins med mera förblir intakta förutom inläggen.

Vi förstår att din främsta oro skulle vara de gränser och kvoter du har satt för varje abonnemang, men vi måste ta hänsyn till vilken skada det skulle orsaka användarens underwebbplats om vi raderar eller ändrar någon av dess konfigurationer.

För inlägg som överskrider gränsen som är satt för abonnemanget har du 3 olika alternativ: **Behåll inläggen som de är**, **Flytta inläggen till papperskorgen** eller **Flytta inläggen till utkast**. Du kan konfigurera detta under inställningarna för Ultimate Multisite.

![Alternativ för överskridna inläggsgränser i Ultimate Multisite-inställningar](/img/config/settings-sites.png)

### Vad händer med betalningen

I version 2.0 krävs inte längre några justeringar av betalningen vad gäller proportionell återbetalning.

Detta beror på att systemet väntar tills det befintliga medlemskapet **slutför sin faktureringsperiod innan** det nya abonnemanget/medlemskapet träder i kraft. Det nya faktureringsbeloppet för det nya medlemskapet tillämpas och debiteras automatiskt vid nästa faktureringsperiod.
