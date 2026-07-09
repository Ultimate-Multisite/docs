---
title: Nástroje a konfigurácia
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Nástroje a konfigurácia

Theme Builder používa súbor nástrojov na analýzu, návrh a vytvorenie vašej WordPress stránky. Vo verzii 1.16.0 je **sd-ai-agent/site-scrape teraz nástroj Tier 1**, vďaka čomu je predvolene dostupný v Theme Builder. Superdav AI Agent v1.18.0 zároveň zavádza samostatne distribuovaný Advanced sprievodný balík pre dôveryhodné vývojárske pracovné postupy; tieto nástroje nie sú súčasťou základného balíka WordPress.org a musia byť nainštalované a autorizované samostatne.

## Dostupné nástroje

### Nástroje Tier 1 (vždy dostupné)

Nástroje Tier 1 sú v Theme Builder predvolene dostupné bez akejkoľvek dodatočnej konfigurácie.

#### sd-ai-agent/site-scrape

**Účel:** Analyzovať existujúce webové stránky s cieľom získať dizajnovú inšpiráciu, štruktúru obsahu a funkcionalitu.

**Možnosti:**

- **Analýza webovej stránky** — scrapovať a analyzovať konkurenčné alebo inšpiračné webové stránky
- **Extrakcia dizajnu** — identifikovať farby, písma a vzory rozloženia
- **Štruktúra obsahu** — pochopiť organizáciu a hierarchiu stránok
- **Detekcia funkcií** — identifikovať pluginy a funkcionalitu
- **Analýza výkonu** — skontrolovať rýchlosť stránky a optimalizáciu
- **SEO analýza** — skontrolovať meta tagy a štruktúrované dáta

**Použitie:**

```
Analyzuj dizajn example.com a použi ho ako inšpiráciu pre moju stránku.
```

**Čo extrahuje:**

- Paleta farieb a používanie farieb
- Typografia (písma a veľkosti)
- Štruktúra rozloženia a rozostupy
- Navigačné vzory
- Organizácia obsahu
- Používanie obrázkov a médií
- Interaktívne prvky
- Responzivita na mobilných zariadeniach

**Obmedzenia:**

- Nedokáže scrapovať stránky chránené heslom
- Rešpektuje robots.txt a pravidlá stránky
- Nemusí zachytiť dynamický obsah
- Stránky výrazne závislé od JavaScript môžu mať obmedzenú analýzu
- Analýza veľkých stránok môže trvať dlhšie

### Nástroje Tier 2 (voliteľné)

Nástroje Tier 2 sú dostupné, keď sú výslovne povolené v nastaveniach Theme Builder.

#### Pokročilá analytika

Poskytuje podrobné metriky výkonu:

- Časy načítania stránok
- Core Web Vitals
- SEO skóre
- Skóre prístupnosti
- Skóre osvedčených postupov

#### Optimalizátor obsahu

Analyzuje a navrhuje zlepšenia pre:

- Čitateľnosť
- SEO optimalizáciu
- Používanie kľúčových slov
- Štruktúru obsahu
- Umiestnenie výziev na akciu

### Nástroje Tier 3 (prémiové)

Nástroje Tier 3 vyžadujú dodatočnú konfiguráciu alebo prémiové funkcie.

#### Generátor obsahu AI

Generuje obsah pre:

- Popisy produktov
- Stránky služieb
- Blogové príspevky
- Meta popisy
- Texty výziev na akciu

#### Pokročilé dizajnové nástroje

Poskytuje pokročilé dizajnové možnosti:

- Generovanie vlastného CSS
- Tvorba animácií
- Návrh interaktívnych prvkov
- Pokročilá teória farieb
- Optimalizácia typografie

### Pokročilé sprievodné nástroje (samostatný balík)

Advanced sprievodný balík je distribuovaný samostatne od základného vydania Superdav AI Agent. Je určený pre dôveryhodné prostredia vývojárov a vlastníkov stránok, kde administrátori výslovne povoľujú agentovi používať nástroje s vysokým dopadom.

Možnosti Advanced sprievodného balíka môžu zahŕňať:

- **Nástroje súborového systému** — kontrolovať a upravovať schválené súbory v dôveryhodných prostrediach
- **Databázové nástroje** — dotazovať alebo aktualizovať dáta stránky, keď je to výslovne autorizované
- **Nástroje WP-CLI** — spúšťať príkazy údržby a kontroly WordPress
- **Nástroje REST dispečera** — volať registrované REST endpointy cez riadené dispečerské pracovné postupy
- **Nástroje na tvorbu pluginov** — vytvárať kostru a iterovať na kóde pluginov
- **Nástroje Git snapshotov** — vytvárať snapshoty pred rizikovými vývojárskymi operáciami
- **Nástroje správy používateľov** — pomáhať kontrolovať alebo upravovať používateľské záznamy tam, kde je to povolené
- **Benchmark nástroje** — spúšťať výkonnostné alebo schopnostné benchmarky na vývojársku kontrolu

Nedokumentujte ich ako všeobecne dostupné nástroje Theme Builder pre každú inštaláciu. Sú dostupné iba vtedy, keď je Advanced sprievodný balík nainštalovaný, povolený a obmedzený na dôveryhodných administrátorov.

## Konfigurácia nástrojov

### Povolenie nástrojov

Ak chcete povoliť dodatočné nástroje v Theme Builder:

1. Prejdite na **Gratis AI Agent → Settings**
2. Prejdite na **Theme Builder → Tools**
3. Podľa potreby zapnite/vypnite nástroje
4. Uložte nastavenia

### Oprávnenia nástrojov

Niektoré nástroje vyžadujú oprávnenia:

- **Scrapovanie stránky** — vyžaduje prístup na internet
- **Analytika** — vyžaduje integráciu Google Analytics
- **Generovanie obsahu** — vyžaduje API kľúče
- **Pokročilé funkcie** — môžu vyžadovať prémiové predplatné
- **Advanced sprievodné nástroje** — vyžadujú samostatne distribuovaný Advanced balík a výslovnú dôveru administrátora

### API kľúče a prihlasovacie údaje

Nakonfigurujte API kľúče pre nástroje, ktoré ich vyžadujú:

1. Prejdite na **Gratis AI Agent → Settings → API Keys**
2. Zadajte prihlasovacie údaje pre každý nástroj
3. Otestujte pripojenie
4. Bezpečne uložte

### Inštalácia Advanced sprievodného balíka

Advanced sprievodný balík sa vydáva samostatne od základného ZIP balíka WordPress.org. Inštalujte ho iba z oficiálneho distribučného kanála projektu pre dané vydanie a potom obmedzte prístup na dôveryhodných administrátorov. Pred povolením nástrojov súborového systému, databázy, WP-CLI, REST dispečera, tvorby pluginov, správy používateľov alebo benchmarkov na produkčnej stránke skontrolujte brány ľudského schvaľovania a správanie Git snapshotov.

## Používanie sd-ai-agent/site-scrape

### Základné použitie

Požiadajte Theme Builder, aby analyzoval webovú stránku:

```
Analyzuj dizajn stránky môjho konkurenta na competitor.com
a navrhni dizajnové zlepšenia pre moju stránku.
```

### Špecifická analýza

Vyžiadajte si konkrétne typy analýzy:

```
Extrahuj paletu farieb z example.com a použi ju ako inšpiráciu.
```

```
Analyzuj navigačnú štruktúru example.com a použi podobnú
organizáciu na mojej stránke.
```

```
Skontroluj mobilnú responzivitu example.com a zabezpeč, aby moja stránka
bola rovnako responzívna.
```

### Porovnávacia analýza

Porovnajte viacero stránok:

```
Porovnaj dizajny site1.com a site2.com a vytvor dizajn,
ktorý kombinuje najlepšie prvky oboch.
```

## Obmedzenia a úvahy o nástrojoch

### Obmedzenie frekvencie

- Scraping je obmedzený rýchlostným limitom, aby sa predišlo preťaženiu servera
- Viaceré požiadavky na rovnaký web môžu byť spomalené
- Analýza veľkých webov môže trvať dlhšie

### Presnosť obsahu

- Dynamický obsah nemusí byť zachytený úplne
- Obsah vykresľovaný pomocou JavaScript môže byť neúplný
- Údaje v reálnom čase sa nemusia prejaviť
- Časť obsahu môže byť za paywallmi

### Právne a etické úvahy

- Rešpektujte robots.txt a pravidlá webu
- Nescrapujte obsah chránený autorskými právami na účely reprodukcie
- Používajte analýzu na inšpiráciu, nie na kopírovanie
- Overte si, že máte práva na používanie extrahovaného obsahu
- Dodržiavajte podmienky používania analyzovaných webov

### Vplyv na výkon

- Scraping veľkých webov môže trvať dlhšie
- Viaceré súbežné scrapingy môžu byť pomalšie
- Sieťové pripojenie ovplyvňuje rýchlosť
- Veľké súbory údajov môžu vyžadovať viac spracovania

## Osvedčené postupy

### Používanie analýzy webu

1. **Analyzujte viacero webov** — získajte inšpiráciu z viacerých zdrojov
2. **Zamerajte sa na štruktúru** — spoznajte vzory rozloženia a organizácie
3. **Extrahujte farby** — použite farebné palety ako východiskové body
4. **Študujte typografiu** — identifikujte kombinácie písiem, ktoré sa vám páčia
5. **Skontrolujte navigáciu** — pochopte organizáciu menu

### Etický scraping

1. **Rešpektujte robots.txt** — dodržiavajte pokyny webu
2. **Nekopírujte obsah** — používajte analýzu iba na inšpiráciu
3. **Overte práva** — uistite sa, že môžete používať extrahovaný obsah
4. **Uveďte zdroje** — pripíšte zásluhy zdrojom inšpirácie
5. **Dodržiavajte podmienky** — riaďte sa podmienkami používania webu

### Maximalizácia účinnosti nástroja

1. **Buďte konkrétni** — žiadajte konkrétne typy analýzy
2. **Poskytnite kontext** — vysvetlite účel svojho webu
3. **Nastavte očakávania** — opíšte svoje dizajnové ciele
4. **Iterujte** — spresňujte na základe výsledkov
5. **Kombinujte nástroje** — použite viacero nástrojov na komplexnú analýzu

## Riešenie problémov

### Web sa nedá scrapovať

- Skontrolujte, či je web verejne prístupný
- Overte, či robots.txt povoľuje scraping
- Skúste iný web
- Skontrolujte internetové pripojenie
- Ak problém pretrváva, kontaktujte podporu

### Neúplná analýza

- Web môže mať dynamický obsah
- JavaScript nemusí byť úplne vykreslený
- Pri veľkých weboch môže dôjsť k vypršaniu časového limitu
- Skúste namiesto toho analyzovať konkrétne stránky
- Požiadajte o konkrétne typy analýzy

### Pomalý výkon

- Analýza veľkých webov trvá dlhšie
- Viaceré súbežné scrapingy sú pomalšie
- Sieťové pripojenie ovplyvňuje rýchlosť
- Skúste to mimo špičky
- Najprv analyzujte menšie sekcie

## Súvisiaca dokumentácia

- [Discovery Interview](./discovery-interview.md) — zhromaždite informácie o dizajne
- [Design Direction](./design-direction.md) — spresnite svoj dizajn
- [Hospitality Menus](./hospitality-menus.md) — vytvorte stránky menu
