---
title: Uppgradera ett abonnemang
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Uppgradera ett abonnemang (v2)

_**VIKTIGT: Denna artikel gäller Ultimate Multisite version 2.x.**_

Dina kunder kan uppgradera sina abonnemang när som helst. De kan antingen uppgradera till ett annat abonnemang eller köpa tilläggstjänster eller paket som du erbjuder i ditt nätverk.

I den här guiden går vi igenom hur dina kunder uppgraderar sitt abonnemang och vad som händer efter uppgraderingen.

För att uppgradera sitt abonnemang ska dina kunder gå till sin dashboard och navigera till sidan **Account**.

![Kundens dashboard med länk till Account-sidan](/img/admin/memberships-list.png)

På Account-sidan visas deras nuvarande medlemskap och det abonnemang som är kopplat till det. För att uppgradera till ett annat abonnemang klickar de på **Change** i det övre högra hörnet av sektionen **Your Membership**.

![Your Membership-sektionen med Change-knapp](/img/admin/memberships-list.png)

De omdirigeras då till ett kassaformulär där alla tillgängliga abonnemang visas.

De kan också se **vilka tjänster och paket som är tillgängliga för deras nuvarande abonnemang**, om de bara vill köpa en specifik tjänst eller ett paket (som obegränsat antal besök eller diskutrymme i vårt exempel här) utan att uppgradera själva abonnemanget.

![Kassaformulär som visar tillgängliga abonnemang och paket](/img/admin/memberships-list.png)

När de har valt den produkt de vill köpa ser de hur mycket de behöver betala just nu – exklusive eventuell befintlig kredit – och hur mycket de kommer att debiteras vid nästa faktureringsdatum.

Om produkten är ett annat abonnemang och betalningen sker mellan två faktureringscykler får de vanligtvis en kredit för det belopp de betalade för det första abonnemanget.

![Sammanfattning av uppgraderingsbetalning med kredit och nästa faktureringsbelopp](/img/admin/memberships-list.png)

Om de väljer ett abonnemang eller paket som inte ändrar något i den befintliga prenumerationen visas ett meddelande som förklarar detta.

![Meddelande när valt abonnemang inte ändrar prenumerationen](/img/admin/memberships-list.png)

När kassan är slutförd läggs de nya produkterna till på kundens konto, och alla begränsningar och funktioner i de nya produkterna aktiveras omedelbart: besök, diskutrymme, inlägg med mera.

## 

## 

## Uppgraderings- och nedgraderingsvägar

I varje produkt finns en flik som heter **Up & Downgrades**. Det första alternativet på den fliken är ett fält som heter **Plan Group**.

**Plan groups** är det som gör att Ultimate Multisite förstår att vissa abonnemang tillhör samma "familj", och därför ska användas för att bygga upp alternativen för uppgradering och nedgradering.

![Fliken Up and Downgrades med fältet Plan Group](/img/config/product-upgrades.png)

Låt oss säga att du har ett **Free plan**, ett **Basic Plan** och ett **Premium Plan** tillgängliga. Du vill att användare med **Free Plan** bara ska kunna uppgradera till **Premium Plan**, och du vill inte att de ska se "Basic Plan" som ett uppgraderingsalternativ. Allt du behöver göra är att tilldela samma plan group-namn till både Free och Premium, som visas i skärmbilderna nedan.

![Free Plan med plan group High End tilldelad](/img/config/product-upgrades.png)

![Premium Plan med plan group High End tilldelad](/img/config/product-upgrades.png)

Detta talar om för Ultimate Multisite att det finns en "familj" av abonnemang i nätverket som heter **High End**. När uppgraderingar eller nedgraderingar erbjuds visas endast abonnemang från samma familj som alternativ för användaren.
