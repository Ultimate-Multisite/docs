---
title: Nedgradera ett abonnemang
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Nedgradera ett plan (v2)

_**VIKTIG NOTERING: Den här artikeln avser Ultimate Multisite version 2.x.**_

Att nedgradera ett plan eller en prenumeration är en vanlig åtgärd som dina klienter kan göra om de har en begränsad budget eller har bestämt att de inte behöver många resurser för att köra sin undersajt.

## Så nedgraderar du ett plan

Dina klienter kan nedgradera sitt plan när som helst genom att logga in på sin undersajts admin-Dashboard och klicka på **Ändra** under sin Account-sida.

![Kundens Account-sida med kortet Ditt medlemskap och knappen Ändra](/img/account-page/membership-change-button.png)

När användaren/klienten klickar på knappen **Ändra** omdirigeras de till kassasidan där de kan välja det plan de vill ändra sin prenumeration till.

![Sida med alternativ för att nedgradera plan på kundsidan](/img/account-page/downgrade-picker.png)

I det här exemplet nedgraderar vi planet från **Premium** till **Gratis**.

För att fortsätta behöver användaren bara klicka på knappen **Slutför köp**. Därefter tas de tillbaka till Account-sidan, där ett meddelande visas om den väntande ändringen för medlemskapet. Ändringarna träder i kraft under kundens **nästa faktureringscykel**.

![Account-sida som visar banner för väntande medlemskapsändring](/img/account-page/pending-change.png)

### Vad händer när en användare nedgraderar sitt plan

Det är viktigt att notera att en nedgradering av planet inte ändrar den befintliga konfigurationen på användarens undersajt.

Det ändrar inte automatiskt webbplatsmallen, eftersom en ändring av webbplatsmallen helt raderar och återställer undersajten. Detta är för att undvika onödig dataförlust. Så diskutrymme, teman, plugins osv. förblir intakta, förutom inläggen.

Vi förstår att din huvudsakliga oro är de gränser och kvoter du anger under varje plan, men vi måste ta hänsyn till vilken skada det skulle göra på användarens undersajt om vi skulle ta bort eller ändra någon av dess konfigurationer.

För inlägg som överskrider gränsen som angetts i planet har du 3 olika alternativ: **Behåll inläggen som de är** *,* **Flytta inläggen till papperskorgen** *,* eller **Flytta inläggen till utkast** *.* Du kan konfigurera detta under Ultimate Multisite-inställningarna.

![Sidan Webbplatser i Network Admin Settings som visar alternativ för beteende när inläggsgränsen överskrids](/img/account-page/settings-sites-post-limit.png)

### Vad händer med betalningen

I version 2.0 krävs inte längre några justeringar av betalningen vad gäller proportionell debitering.

Detta beror på att systemet väntar på att det befintliga medlemskapet ska **slutföra sin faktureringscykel innan** det nya planet/medlemskapet träder i kraft. Det nya faktureringsbeloppet för det nya medlemskapet tillämpas automatiskt och debiteras vid nästa faktureringscykel.
