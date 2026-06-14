---
title: Doménové produkty a ceny
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domény produkty a cenník

Domény produkty sú spôsob, ako ovládate cenenie, TLD (Top-Level Domain), WHOIS súkromie a výber poskytovateľa. Ka doménový produkt je štandardným Ultimátnym produktom Multisite s extra záložnou záložkou **Domain Settings**.

## Vytvorenie doménového produktu

1. Prejdite do **Network Admin › Ultimate Multisite › Products**
2. Kliknite na **Add New** (Pridať nový)
3. Nastavte typ produktu na **Domain** (Doména)
4. Konfigurujte záložku **Domain Settings** (Nastavenia domény) (vidieť nižšie)
5. Uložiť

Doménové produkty sa zobrazujú s fialovým označením **Domain** v zliastej zliastej a môžu byť filtrované pomocou záložky **Domain Products**.

## Záložka Domain settings

### Poskytovateľ (Provider)

Vyberte, ktorý registrač bude riešiť registráciu pre tento produkt. Po chode na výchozí hodnotu je to globálny **Default provider** nastavený v nastaveniach Domény Predajcu (Domain Seller).

### Podporované TLD (Supported TLDs)

Nechajte prázdne, ak chcete vytvoriť **catch-all produkt**, ktorý sa týka všetkých TLD, ktoré neboli zodporený žiadnym iným produktom.

Vložte zoznam TLD oddelený comom (napr. `.com, .net, .org`), aby ste vytvorili **TLD špecifický produkt**, ktorý sa týka iba týchto rozšierok.

**Ako funguje zodporenie produktov:** Keď zákazník hľadá doménu, doplnok vybere najspíše špecifickejšie zodporený produkt. Produkt s `.com` v zliastej TLD obsahuje má vyššiu prednost ako catch-all produkt. Ak sa žiadny TLD špecifický produkt nezdôrazní, použije sa catch-all. Ak neexistujú žiadne produkty, vyhľadávanie domény sa nezobrazí.

### Typ zoznamu (Markup type)

Tria režimy ovládate, ako sa váš retailný (retail) cena počítajú z cen dodávateľa (wholesale cost):

| Režim | Ako funguje |
|---|---|
| **Percentage** (Procent) | Pridá percento k cenám dodávateľa. 20% markup na doménu s cenou dodávateľa 10 $ dá 12 $. |
| **Fixed markup** (Fiksovaná cena) | Pridá pevnú sumu v dolárach. Fiksovaná cena 5 $ na doménu s cenou dodávateľa 10 $ dá 15 $. |
| **Fixed price** (Fiksová cena) | Celkom ignoruje cenu dodávateľa. Vždy účtuje sumu, ktorú zadáte. |

### Úvodné ceny (Introductory pricing)

Umožňuje ponúkať zľavnenú cenu za prvý rok. Nastavte osobitnú **Úvodnú cenu** (cenu za prvé roky) vedľa štandardnej **Ceny obnovy** (cena za druhý a nasledujúce roky). Klient vidí obe ceny počas pokiaľ sa objednávajú, aby vedel, čo si očakáva pri obnovení.

### WHOIS súkromie

Kontroluje, či je ponúkané WHOIS súkromie pre domény zaregistrované cez tento produkt.

| Nastavenie | Chovanie |
|---|---|
| **Vypnuté** | WHOIS súkromie sa nikdy neponúka ani neaktivuje. |
| **Vždy zahrnuté** | WHOIS súkromie je automaticky aktivované pri registrácii bez poplatku. |
| **Výber klienta** | Pri pokiaľ sa objednávajú sa zobrazí políčko. Nastavte **Cenu na súkromie** tak, aby sa účtovala za rok, alebo ju nechajte na $0, aby bola ponovená zadarmo. |

Pre Namecheap sa WHOIS súkromie používa WhoisGuard (vždy bez poplatku). Pre OpenSRS sa používa služba OpenSRS pre súkromie (môže mať cenu pri dodávateľskom cenovnom plánu).

---

## Import a synchronizácia TLD

Produkty domén zobrazujú ceny v dodávateľskom cenovnom pláne v reálnom čase, ktoré sa načítajú z pripojeného poskytovateľa. Aby to fungovalo, musí byť TLD (top-level domain) importované.

- **Manuálna synchronizácia:** Nastavenia › Predajca domén › Synchronizovať TLD (po dodávateľovi)
- **Automatická synchronizácia:** Behodí každý deň pomocou rozvrhaného cron jobu pre všetky skonfigurované poskytovatele.

Po synchronizácii sa prejdite do záložky Nastavenia domény pre akýkoľvek produkt domény a použite vybiranie TLD, aby ste videli dostupné TLD s ich aktuálnymi cenami v dodávateľskom pláne.

---

## Automatická obnovenie

Obnovenie domén je pripojené k stavu členstva klienta:

- Keď sa členstvo obnoví a doména bude pripojená, obnovenie domény je automaticky nasadené do kolejky
- Pokusy o obnovenie používajú aktívny platobný systém klienta
- Neúspešné obnovenia sa automaticky opakujú s exponenciálnym zpoždenej reakciou (exponential backoff)
- E-mailové upozornenia sa zaslúhajú pri úspešnom obnovení, neúspechoch a nadchádzajúcich expiráciách

ID šablon e-mailov pre udalosti životného cyklu domény:

| Slovenská událosť | Šablón ID |
|---|---|
| Doména je zaregistrovaná | `domain_registered` |
| Doména bola obnovená | `domain_renewed` |
| Obnovenie sa neúsporilo | `domain_renewal_failed` |
| Doména chádza na vyprázdnenie | `domain_expiring_soon` |

---

## Admin: Manuálna registracja domény

Aby ste zaregistrovali doménu za klienta bez toho, aby prechádzal cez pokladňu:

1. Prejdite do **Network Admin › Ultimate Multisite › Register Domain**
2. Vyberte klienta a zadajte názov domény
3. Naplňte kontaktné údaje registráta (meno, adresa, telefón)
4. Kliknite na **Register**

Registračný záznam sa vytvorí a bude pripojený k účtu klienta.
