---
title: Správa sítí
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Správa sítí

Sité (alebo subsity) sú základom vášho WaaS biznessu. Ultimate Multisite má 3 typy sítí:

- **Sítia vlastníci zákazníka** — Sité prispôsobené konkrétnym zákazníkom
- **Šablóny sítí** — Preddefinované sitá, ktoré môžu zákazníci vybrať ako bod štartu
- **Hlavná sieť** — Vaša primárna siatová sieť

## Zobrazenie sítí {#viewing-sites}

Pre zobrazenie všetkých subsít na vašej sietovej siete prejdite do **Ultimate Multisite → Sites**. Každá sieť je označená jej typom a môžete filtrujť podľa Všetkých sit, Sítí vlastníci zákazníka, Šablón alebo Očakávané.

![Sites list page](/img/admin/sites-list.png)

## Pridanie novej siete {#adding-a-new-site}

Kliknite na tlačidlo **Add Site** (Pridať siat). Potrebujete poskytnúť:

- **Názov siete** — Názov novej siete
- **URL siete** — Domén alebo cesta pre sieť
- **Typ siete** — či je to sieť zákazníka, šablón alebo bežná sieť

Možnosť **Copy Site** (Kopírovať siat) vám umožňuje vytvoriť novú sieť na základe existujúce šablóny siete. Keď je zapnutá, môžete vybrať, ktorú šablónu použiť ako bod štartu. Uistite sa, že je zapnutá možnosť **Copy Media on Duplication** (Kopírovať media pri duplikácii), aby boli zahrnuté súbory médií.

## Správa existujúcej siete {#managing-an-existing-site}

Kliknite na **Manage** (Správa) na akýkoľvek sitú, aby ste otvorili stránku **Edit Site** (Upraviť siat). Tu nájdete:

### Základné informácie {#basic-information}

Názov siete, typ, ID siete a popis. Uvidíte tiež mapovaný domén, spojené členstvo a účet zákazníka, ktorý vlastní sieť.

### Možnosti siete {#site-options}

Konfigurujte schopnosti a limity siete:

- **Limit návštev** — Maximálny počet návštev siete
- **Limity účtov používateľov** — Limity pre rôzne role používateľov
- **Disk priestor** — Quota (limita) na ukladanie dát pre sieť
- **Prispôsobený domén** — Zapnite mapovanie domény pre túto sieť
- **Viditeľnosť pluginov a tém** — Kontrolujte, ktoré pluginy a tém sú viditeľné, skryté alebo predaktivované

Po chcelných stránkach sa v podmienках počítania sú nastavené na úrovni členstva. Nastavenie limitov na úrovni stránky prebodá (prekračuje) nastavenia členstva.

### Spojenia {#associations}

Pod možnosťami stránky nájdete informácie o:

- **Mapovaných doménach** spojených so stránkou
- **Členstve**, pod ktorým sa nachádza stránka
- **Používateľskom účtovke**, ktorá je spojená so stránkou

### Pravá kolónka {#right-sidebar}

Na pravej strane môžete:

- **Vypnúť/vypnúť stránku** pomocou prepínačného tlačidla
- **Zmeniť typ stránky** alebo presmerovať vlastnickú práva
- **Nastaviť obrázok/miniatúru stránky** (zobrazený na prednej časti pre šablóny stránok)
- **Trvalo odstrániť stránku**

:::warning
Odstránenie stránky je neobratné. Stránka a všetko jej obsiah budú trvalo odstránené.
:::
