---
title: Zručnosti ovplyvnené témou
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skilly podľa témy

Superdav AI Agent v1.10.0 obsahuje štyri nové vbuilt-in skill, ktoré sa automaticky prispôsobia k vašej aktívnej WordPress téme. Tieto skille poskytujú špecializované návody a schopnosti navrhnuté na základe architektúry a funkcií vašej témy.

## Čo sú Skilly podľa témy?

Skilly podľa témy sú predkonfigurované znalostné bázy a množiny nástrojov, ktoré AI asistent automaticky vyberá na základe témy WordPress, ktorá je v súčasnosti aktív na vašom svete. Keď prepnete tému, dostupnosť skillov asistenta sa automaticky aktualizuje – žiadna manuálna konfigurácia nie je potrebná.

Každý skill obsahuje:

- **Témovú dokumentáciu** — návody na používanie a prispôsobenie témy
- **Referencie blokov a vzorov (patterns)** — dostupné bloky, vzory a návrhové možnosti
- **Príklady personalizácie** — kódové fragmenty a vzory konfigurácie pre bežné úlohy
- **Najlepšie praxe (Best practices)** — odporúčania pre architektúru témy a pracovný postup

## Dostupné Skilly podľa témy

### Blokové témy (Block Themes)

**Prispôsobené na:** Témy, ktoré používajú blokovú architektoniku WordPress (Full Site Editing).

Skill Block Themes poskytuje návody na:

- Vytváranie a upravovanie šablatov pomocou editoru blokov
- Práca s vzorami blokov a opakovanými blokmi
- Personalizáciu globálnych štýlov a nastavení témy.json
- Používanie témových blokov a variant
- Vytváranie vlastných vzorov blokov pre váš svete

**Automaticky aktivované, keď:** Vaša aktívna téma je bloková téma (podporuje funkciu `block-templates`).

### Klasické témy (Classic Themes)

**Prispôsobené na:** Tradičné WordPress témy, ktoré používajú PHP šablóny a klasický editor.

Skill Classic Themes poskytuje návody na:

Pracovanie s PHP šablónami a hookmi
Personalizácia vzhľadu témy pomocou Customizeria
Používanie widgetových oblastí a laterálnych paniel
Modifikácia CSS a vývoj child theme (dodávacie témy)
Zrozumenie hierarchie tém a šablónnych značiek

**Automaticky aktivované, keď:** Vaša aktívna téma je klasická (nie bloková).

### Kadence Blocks

**Prímenia:** Sitov načíňajúci používajú plugin Kadence Blocks pre pokročilý dizajn na základe blokov.

Skil Kadence Blocks poskytuje návody na:

- Používanie pokročitej knihovny blokov Kadence (Hero, Testimonials, Ceny atď.)
- Konfiguráciu nastavení a responsívnych možností blokov Kadence
- Vytváranie prispôsobených rozložení s použitím blokov gríd a kontajnerov Kadence
- Integráciu blokov Kadence s vašou témou
- Používanie design systému a predvoleniek Kadence

**Automaticky aktivované, keď:** Plugin Kadence Blocks je aktív na vašom sieti.

### Kadence Téma

**Prímenia:** Sitov načíňajúci používajú tému Kadence pre blokový dizajn a personalizáciu.

Skil Kadence Téma poskytuje návody na:

- Personalizáciu témy Kadence pomocou globálnych štýlov a súboru theme.json
- Používanie vbudovaných vzorov blokov a šablón Kadence
- Konfiguráciu nastavení a možností témy Kadence
- Vytváranie prispôsobených dizajnov s použitím design systému Kadence
- Integráciu Kadence s populárnymi pluginmi a nástrojmi

**Automaticky aktivované, keď:** Je téma Kadence vašou aktívnou témou.

## Ako sa skily vyberajú

Asistent automaticky detekuje vašu aktívnu tému a nainštalované pluginy pri každom príspevku. Ak je k dispozícii odpovedajúce skill, je automaticky načítaný do kontextu asistenta. Musíte skill manuálne aktivovať alebo prepínať nebudete.

### Viac skily

Ak, ak máte viacero schopností pre váš web (napríklad, ak máte aktivý aj Kadence Blocks a Kadence Theme), asistent má prístup k všetkým príslušným schopnostiam a môže odkazovať na pokyny z každého z nich.

### Premienenie tém
Keď zmeníte aktívnu tému, dostupnosť schopností asistenta sa automaticky aktualizuje pri nasledujúcej správe. Napríklad:

1. Používate tému s blokovými šablónkami s aktivnou schopnosťou **Block Themes**.
2. Premienite sa na klasickú tému.
3. Pri vašej ďalšej správe je schopnosť **Classic Themes** automaticky načítaná, a schopnosť **Block Themes** už nie je dostupná.

## Používanie schopností ovplyvnených témou
Aby ste mohli využiť schopnosť ovplyvnenú témou, jednoducho popíšte v chate, čo chcete urobiť. Asistent automaticky odkazuje na pokyny príslušnej schopnosti.

### Príklady promptov

**Pre Block Themes:**
> "Vytvorte sekciu s hlavným obrázkom a centrálným textom pomocou blokových vzorov."

**Pre Classic Themes:**
> "Pridajte prispôsobenú oblast widgetu do laterálneho panela pomocou child theme."

**Pre Kadence Blocks:**
> "Vytvorte sekciu s odkazmi na recenzie pomocou bloku Kadence Testimonials."

**Pre Kadence Theme:**
> "Prispôsobte štruktúru hlavičky a štýl navigácie menu."

Asistent vám poskytne pokyny špecifické pre tému a príklady kódu prispôsobené vašej aktívnej téme a doplnkov.

:::note
Schopnosti ovplyvnené témou sú automaticky dostupné v Superdav AI Agent v1.10.0 a neskôr. Nie je potrebná žiadna extra konfigurácia ani nastavenie.
:::
