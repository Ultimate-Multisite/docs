---
title: Prehliadka panel administrácie
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Prehliadka admin panela {#touring-the-admin-panel}

Ultimate Multisite sa cieľom je byť čo najjednoduchší a samopoznávateľný, ale s takto výkonným nástrojom môže pomôcť mať vedený prehlídku. Prejdeme po admin stránkach, aby ste si mohli získať orientáciu.

## Dashboard {#dashboard}

**Dashboard** Ultimate Multisite zobrazuje základné reporty a analýzy vrátane príjmov, aktivity sítí, rast členstva, počtu návštevíacich a geografických údajov.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Tu je plný prehľad dashboardu:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

A spodná časť dashboardu:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Tu je aj plný prehľad sieti dashboardu:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Formuláre pre platbu (Checkout Forms) {#checkout-forms}

**Formuláre pre platbu** vám dá flexibilitu na vytváranie vlastných stránok registrácii. Môžete prispôsobiť pole, vložiť vlastné клаsy a skripty a obmedziť prístup na základe krajiny alebo polohy návštevníka.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Produkty {#products}

Sekcia **Produkty** je miesto, kde vytvárate rôzne plány, balíčky a služby pre vašu sieti. Definujte ceny, frekvencie fakturácie a limity a kvóty na úrovni produktu.

![Products list](/img/admin/products-list.png)

## Členstvo (Memberships) {#memberships}

Stránka **Členstvo** zobrazuje všetky predplatné v vašej sieti. Prejdite po podrobnosti o predplatnom vrátane plánov, produktov, výšky fakturácie a frekvencií, histórie platení a časových značiek.

![Memberships list](/img/admin/memberships-list.png)

## Platby {#payments}

Stránka **Platby** poskytuje rýchly prehľad histórie platení po celej vašej siete, vrátane podrobnej informácie o transakciách so špecifickými produktmi a sumami.

![Payments list](/img/admin/payments-list.png)

## Klienci {#customers}

Stránka **Klienci** zobrazuje všetkých členov zaregistrovaných v vašej sieti s základnými informáciami o používateľoch, vrátane mena, e-mailovej adresy, posledného prihlásenia a odkaz "premieniť sa na" pre prihlásenie do ich podsiete.

![Customers list](/img/admin/customers-list.png)

## Siete {#sites}

Stránka **Siete** uvádza všetky subsiete v vašej sieti vrátane šablon sítí a sítí vlastnených klientmi. Môžete ľahko spravovať mapované domény, limity a kvóty, pluginy a témy, a miniatúry sítí.

![Sites list](/img/admin/sites-list.png)

## Domény {#domains}

Stránka **Domény** je určená pre prispôsobené domény mapované na subsiete. Ako superadmin môžete manuálne pridávať alebo mapovať prispôsobené názvy domén a zobraziť DNS záznamy a logy.

![Domains list](/img/admin/domains-list.png)

## Kupónové kódy {#discount-codes}

**Kuponové kódy** vám umožňujú vytvárať kódky kupónov na ponuku zľav, aby ste mohli ponúkať zľavy vašim koncovým používateľom. Určite hodnotu zľavy a cílite sa konkrétne používateľské skupiny alebo skupiny.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Rozsielanie informácií (Broadcasts) {#broadcasts}

**Rozsielanie informácií (Broadcasts)** je nástroj na rozoslanie oznámení alebo sendovanie súkromných správ používateľom vašej subsiete. Cílite sa konkrétne skupiny používateľov na základe plánu alebo produktu, na ktorý sú predplatní.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Nastavenia {#settings}

Stránka **Nastavenia** je miesto, kde konfigurujete Ultimate Multisite — nastavenia registráции, platby, API a webhooks, mapovanie domén a iné integrácie.

Nastavenia pre AI konektory zoznamy podporované OAuth poskytovacie bazárov: Anthropic Max, OpenAI ChatGPT/Codex a Google AI Pro. Ka karta poskytovateľa umožňuje super adminom pripojiť účty, obnoviť uložené účty, odstrániť účty po e-mailu a použiť manuálnu OAuth západku ako rezervný možný, ak sandboxed среda blokuje prechod v prehliadači. Možnosti nastavenia Cursor Pro sú odstránené z admin panelu.

Účty ChatGPT/Codex podporujú použitie nástrojov podporovaným konektorom, kde operácia umožňuje nástroje, takže pracovné postupy adminov, ktoré sa spoliehajú na operácie podporované konektorom, môžu používať správanie nástroja Codex po pripojení účtu OpenAI.

![Settings page](/img/admin/settings-general.png)

Tu je kompletný prehľad stránky všeobecných nastavení:

![Settings general full page](/img/admin/settings-general-full.png)

A stránka nastavení e-mailov:

![Settings emails full page](/img/admin/settings-emails-full.png)

A stránka nastavení platob:

![Settings payments full page](/img/admin/settings-payments-full.png)

A spodná časť nastavení platob:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

A stránka nastavení sítí:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Udokladania udalostí (Events) {#events}

Stránka **Events** udržia záznam všetkých udalostí a logov v vašej sieti. Sleduje aktivit ako zmeny plánov, registráции a iné pohyby – je to užito pre monitorovanie vášho multisite.

![Events list](/img/admin/events-list.png)

## Webhooky {#webhooks}

**Webhooky** vám umožňujú posielať údaje do inej aplikácie. Je to užito na odosielanie údajov z Ultimate Multisite na platformy ako Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
