---
title: Nastavenie a konfigurácia poskytovateľa
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Doménový predajca: Nastavenie a konfigurácia poskytovateľa

Pridanie Domain Seller obsahuje pramenom súpisovým nástrojom na nastavenie, ktoré vás krok za krokom poprowadí cez každý požadovaný krok. Táto stránka pokrýva postup v tomto nástroji a to, ako nakonfigurovať alebo zkonfigurovať poskytovatele po tom.

## Požiadavky

- **Multisite Ultimate** v2.4.12 alebo vyššie, aktivované v sieti
- **PHP** 7.4+
- API poverenia pre minimálne jeden podporovaný registrára

## Nastavenie nástroja pri prvom spustení

Nastavenie nástroja sa automaticky spustí prvýkrát, keď plugin aktivujete v sieti. Je k dispozícii aj v akomkoľvek čase z **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Krok 1 — Vyberte poskytovateľa

Vyberte registrára, s ktorým chcete pripojiť. Podporované možnosti:

| Poskytovateľ | Správa DNS | WHOIS súkromie |
|---|---|---|
| OpenSRS | Áno | Áno |
| Namecheap | Nie | Áno (WhoisGuard, bezplatné) |
| HostAfrica | Áno | Áno (ochrana ID) |
| Openprovider | Áno | Áno |
| Hostinger | Via mapovanie domén v základnom Hostinger domeňu pre hostované domény | Áno |
| GoDaddy | Nie | Nie |
| ResellerClub | Áno | Nie |
| NameSilo | Nie | Nie |
| Enom | Áno | Nie |

### Krok 2 — Vložte poverenia

Každý poskytovateľ má rôzne polia pre poverenia:

**OpenSRS** — Užívateľské meno a súkromný kľúč (z OpenSRS Reseller Control Panel)

**Namecheap** — Užívateľské meno a API kľúč (z Account › Tools › API Access)

**HostAfrica** — Endpoint API registrára domén a poverenia z modulu reseller HostAfrica. Na razie nie je dokumentovaný osobitný sandbox endpoint; testujte s bezpečnými čítacím operáciami, aby ste nezačali s živými registraciami.

**Openprovider** — Užívateľské meno a heslo s povolením na API. Voliteľný režim sandbox používa Openprovider sandbox API, a voliteľné štandardné označenie zákazníka sa môže použiť pre registráции.

**Hostinger** — Prekonfigurovaný token hPanel API pre zdieľaný Hostinger integráciu z hornej vrstvy. Ten istý token napája mapovanie domén a operácie registrácii Doménových Predajcov.

**GoDaddy** — API kľúč a tajný kľúč (z developer.godaddy.com)

**ResellerClub** — ID Resellera a API kľúč (z ovládacieho panela ResellerClub)

**NameSilo** — API kľúč (z namesilo.com › Account › API Manager)

**Enom** — ID účtu a API token

Pretestujte **Sandbox režim**, ak je dostupný, aby ste si mohli testovať proti testovej sieti poskytovateľa pred live nasadením.

### Krok 3 — Testovanie spojenia

Kliknite na **Test Connection**. Wizár pošle ľahký API hovor k overeniu údajov a pripojenia. Napravte akékoľvek problémy s údajmi, aby ste mohli pokračovať.

### Krok 4 — Import TLDs

Kliknite na **Import TLDs**, aby ste si stáli všetky dostupné TLD a dlhoprisku od zdieľajúceho poskytovateľa. Toto vyplní zoznam TLD používaný pre doménové produkty. Import môže trvať 30–60 sekúnd pri poskytovateľoch s veľkým katalógom TLD.

TLDs sa automaticky synchronizujú aj raz za deň pomocou plánovaného cron jobu.

### Krok 5 — Vytvorenie doménového produktu

Wizár vytvorí štandardný produkt typu catch-all domény so zohľadnením marže 10 %. Môžete tento produkt upraviť okamžite alebo ho prejsť a vytvárať produkty manuálne pod **Ultimate Multisite › Products**.

Pre úplný pramen konfigurácie produktu si pozrite do [Domain Products and Pricing](./domain-products).

---

## Prekonfigurovanie poskytovateľa

Prejdite na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (alebo kliknite na **Settings** v zozname pluginov).

Strana s nastaveniami obsahuje:

- **Aktívna predaj domén** — prepnite toto funkciu vchádzať/vypínať
- **Predvolený poskytovateľ** — poskytovateľ, ktorý sa používa na vyhľadávanie domén a nových produktov
- **Maximálne TLD na vyhľadávanie** — kolko TLD (Top-Level Domain) skontrolovať, keď zákazník hľadá; vyššie hodnoty zobrazujú viac možností, ale sú pomalejšie
- **Doba cache dostupnosti** — ako dlho cacheovať výsledky dostupnosti a cien; nižšie hodnoty sú presnejšie, ale zvyšujú počet API volaní
- **Správa doménových produktov** — rýchly odkaz na zoznam Produktov
- **Konfigurácia poskytovateľov** — otvorí si Vyznačenie integrácií (Integration Wizard) na pridanie alebo prekonfiguráciu poskytovateľov

### Pridanie druhého poskytovateľa

Kliknite na **Konfigurácia poskytovateľov** a ponovte viznačenie (wizard) pre nového registra. Môžete mať aktivované viacero poskytovateľov naraz. Každý doménový produkt priradíte konkrétnemu poskytovateľovi, alebo ho nechajte na predvolenom.

### Manuálne synchronizovanie TLD

Na stránke nastavení kliknite na **Synchronizovať TLD** vedľa akéhokoľvek skonfigurovaného poskytovateľa, aby ste získali najnovšie ceny. Toto je užitočné po tom, čo poskytovateľ aktualizuje dlhopisové ceny alebo pridá nové TLD.

---

## Logy

Každý poskytovateľ píše do vlastného kanálu logov. Logy sú viditeľné pod **Network Admin › Ultimate Multisite › Logs**:

| Log kanál | Obsaholky |
|---|---|
| `domain-seller-registration` | Všetky pokus o registráciu (úspech a neúspech) |
| `domain-seller-renewal` | Výsledky úlohy obnovy |
| `domain-seller-opensrs` | Surová aktivita OpenSRS API |
| `domain-seller-namecheap` | Surová aktivita Namecheap API |
| `domain-seller-hostafrica` | Surová aktivita HostAfrica API |
| `domain-seller-openprovider` | Surová aktivita Openprovider API |
| `domain-seller-hostinger` | Surová aktivita Hostinger API |
| `domain-seller-godaddy` | Surová aktivita GoDaddy API |
| `domain-seller-resellerclub` | Surová aktivita ResellerClub API |
| `domain-seller-namesilo` | Surová aktivita NameSilo API |
| `domain-seller-enom` | Surová aktivita Enom API |

---

## Poznámky k schopnostám poskytovateľa

Nie všetky registračné API ponúkajú rovnaké operácie. Dodatok zobrazuje nesporované operácie s jasnými chybami pre admina, namiesto ich tichého neúspešného vykonania.

- **HostAfrica** podporuje najširší pracovný postup pre live resellerov, vrátane vyhľadávania, synchronizácie TLD/cen, registráции, obnovy, presmienia, aktualizácie именných serverov, DNS záznamov, EPP kódov, blokovania registračného účtu a ochrany ID.
- **Openprovider** podporuje synchronizáciu TLD s reseller cenami, registráciu, obnovu, presmienie, aktualizácie именných serverov, DNS zón, EPP kódov, blokovanie registračného účtu a súkromie WHOIS. Autentifikuje sa krátkodobým bearer tokenom, ktorý dodatek automaticky obnovuje.
- **Hostinger** podporuje vyhľadávanie dostupnosti, registráciu, prehľad portfóliou, aktualizácie именných serverov, blokovanie registračného účtu a súkromie WHOIS pomocou zdiedelého API tokenu hPanel. Public Domains API Hostinger neexponuje ceny pre reseller/wholesale, vstupné presmienie, explicitnú obnovu ani získavanie EPP kódov; obnovy sa vykonávajú automaticky len.
