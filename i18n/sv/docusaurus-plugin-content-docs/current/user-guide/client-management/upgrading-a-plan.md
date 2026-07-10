---
title: Uppgradera ett abonnemang
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Uppgradera ett abonnemang (v2) {#upgrading-a-plan-v2}

_**VIKTIGT MEDDELANDE: Den här artikeln avser Ultimate Multisite version 2.x.**_

Dina kunder kan uppgradera sina abonnemang när som helst. De kan antingen uppgradera till ett annat abonnemang eller köpa ytterligare tjänster eller paket som du erbjuder i ditt nätverk.

I den här handledningen går vi igenom hur de kan uppgradera sitt abonnemang och vad som händer efter uppgraderingsprocessen.

För att uppgradera sitt abonnemang ska dina kunder gå till sin Dashboard och öppna sidan **Account**.

![Kundens undersidas Dashboard med Account-menylänk synlig](/img/account-page/account-menu.png)

På Account-sidan visas deras nuvarande medlemskap och abonnemanget som är kopplat till det. För att uppgradera till ett annat abonnemang måste de klicka på **Change** i det övre högra hörnet av sektionen **Your Membership**.

![Account-sida med Your Membership-kort och Change-knapp](/img/account-page/membership-change-button.png)

De omdirigeras till ett checkout-formulär där alla tillgängliga abonnemang visas.

De kommer också att kunna se **tjänster och paket som är tillgängliga för deras nuvarande abonnemang**, om de bara vill köpa en specifik tjänst eller ett specifikt paket (som obegränsade besök eller diskutrymme i vårt exempel här), och inte uppgradera abonnemanget.

![Uppgraderingsväljare som visar tillgängliga abonnemang och paket på kundsidan](/img/account-page/upgrade-picker.png)

Efter att de valt produkten de vill köpa ser de hur mycket de behöver betala just nu – exklusive eventuell befintlig kredit – och hur mycket de kommer att debiteras på nästa faktureringsdatum.

Vanligtvis, om produkten är ett annat abonnemang och betalningen kommer att göras mellan en medlemskapsdebitering, får de en kredit för beloppet som betalats för det första abonnemanget.

![Uppgraderingssammanfattning för betalning som visar tillämpad kredit och nästa faktureringsbelopp](/img/account-page/upgrade-summary.png)

Om de väljer ett abonnemang eller paket som inte ändrar något från den nuvarande prenumerationen visas ett meddelande som förklarar det.

![Meddelande när det valda abonnemanget inte ändrar prenumerationen](/img/account-page/upgrade-no-change.png)

Efter att checkout är slutförd läggs de nya produkterna till på dina kunders account och alla gränser eller funktioner för de nya produkterna läggs omedelbart till där: besök, diskutrymme, inlägg osv...

##

##

## Uppgraderings- och nedgraderingsvägar {#upgrade-and-downgrade-paths}

På var och en av dina produkter finns en flik för **Up & Downgrades**. Det första alternativet på den fliken är ett fält som heter **Plan Group**.

**Plan groups** är det som gör att du kan låta Ultimate Multisite veta att vissa abonnemang tillhör samma "familj", och därför bör användas för att skapa alternativ för uppgraderings-/nedgraderingsvägar.

![Produktredigeringens Up and Downgrades-flik med Plan Group-fält](/img/config/product-upgrades-plan-group.png)

Till exempel har du ett **Free plan**, ett **Basic Plan** och ett **Premium Plan** tillgängliga. Du vill att användare som prenumererar på **Free Plan** endast ska kunna uppgradera till **Premium Plan** och du vill inte att de ska se "Basic Plan" som ett uppgraderingsalternativ. Allt du behöver göra är att tilldela samma plan group-namn för både Free- och Premium-abonnemangen, som visas i skärmbilderna nedan.

![Free Plan-produktsida med High End-plan group tilldelad](/img/config/product-upgrades-free.png)

![Premium Plan-produktsida med High End-plan group tilldelad](/img/config/product-upgrades-premium.png)

Detta bör tala om för Ultimate Multisite att det finns en "familj" av abonnemang i nätverket som heter **High End**. När uppgraderingar eller nedgraderingar erbjuds visas endast abonnemang från samma familj som alternativ för användaren.
