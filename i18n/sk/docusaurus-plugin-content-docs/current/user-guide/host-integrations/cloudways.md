---
title: Integrácia s Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrácia s Cloudways

## Úvod
Cloudways je správy cloudovej hostingovej platformou, ktorá vám umožňuje nasporiť WordPress webové stránky na rôznych cloudových poskytovateľoch ako DigitalOcean, AWS, Google Cloud a ďalších. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a Cloudways.

## Funkcionality
- Automatické synchronizovanie domén
- Správa SSL certifikátov
- Podpora extra domén
- Validácia DNS pre SSL certifikáty

## Požiadavky
Nasledujúce kon constanty musia byť definované v súbore `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'vaša_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'vaše_api_kľúč');
define('WU_CLOUDWAYS_SERVER_ID', 'vaše_server_id');
define('WU_CLOUDWAYS_APP_ID', 'vaše_app_id');
```

Voliteľne môžete tiež definovať:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domény,rozdelené_vysekaným_záradníkom');
```

## Pokyny na konfiguráciu

### 1. Získať svoje Cloudways API kredenciálne údaje

1. Prihláste sa do vášho dashboardu Cloudways
2. Prejdite do "Account" > "API Keys" (Účet > API kľúče)
3. Vytvorte si API kľúč, ak ho ešte nemáte
4. Skopírujte svoj e-mail a API kľúč

### 2. Získať svoje ID serveru a aplikácie

1. V dashboarde Cloudways prejdite do "Servers" (Server)
2. Vyberte server, kde je hostovaná vaša WordPress multisite
3. Server ID je viditeľný v URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Prejdite do "Applications" (Aplikácie) a vyberte svoju aplikáciu WordPress
5. App ID je viditeľný v URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Pridať constanty do wp-config.php

Pridajte nasledujúce constanty do vášho súboru `wp-config.php`:

### 4. Aktivácia integrácie

1. V administrácii WordPress pre Ultimate Multisite pridať: Settings (Nastavenia)
2. Prejsť na záložku "Domain Mapping" (Mapovanie domén)
3. Prejsť dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivovať integráciu Cloudways
5. Kliknúť na "Save Changes" (Uložiť zmeny)

## Ako to funguje

### Synchronizácia domén

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia si vyžiada všetky aktuálne mapované domény
2. Pridá novú doménu do zoznamu (spolu s verziou s www, ak je to prípadné)
3. Odošle kompletný zoznam na Cloudways cez API
4. Cloudways aktualizuje aliasy domén pre vaše aplikácie

Poznámka: API Cloudways vyžaduje odoslanie kompletného zoznamu domén pri každom vykonaní, nie len pridanie alebo odstránenie jednotlivých domén.

### Správa SSL certifikátov

Po synchronizácii domén:

1. Integrácia skontroluje, ktoré domény majú platné DNS záznamy smerujúce na váš server
2. Odošle požiadavku Cloudways na nainštalovanie Let's Encrypt SSL certifikátov pre tieto domény
3. Cloudways si postará o vydanie a nainštaláciu SSL certifikátu

Integrácia vždy vyžaduje **štandardné** (newildcard) certifikáty Let's Encrypt z Cloudways. Ak v `WU_CLOUDWAYS_EXTRA_DOMAINS` poskytnete wildcard vzor, predvodný `*.` sa odstráni pred požiadavkou na SSL — samotný wildcard nikdy nie bude nainštalovaný touto integráciou. Aby ste mohli použiť wildcard certifikát na Cloudways, museli by ste ho nainštalovať manuálne, ale to blokuje vydávanie Let's Encrypt certifikátov pre jednotlivé domény mapované na prispôsobené doménové имена (vidieť problém nižšie).

## Extra Domény

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` vám umožňuje uviesť extra **externé** domény, ktoré by mali byť vždy v zozname aliasov aplikácie na Cloudways. Použite ju pre:

- Externé domény, ktoré nie sú spravované Ultimate Multisite (napr. oddelený marketingový portail, ktorý zdieľa ten istý Cloudways server).
- Parkované alebo staging domény, ktoré chcete zachovať v zozname aliasov aplikácie.

**Nesúce** túto konstantu pre wildcard poddoménu vašej vlastnej siete (napr. `*.your-network.com`). Vidieť problém s wildcard SSL nižšie.

## Dôležité — Problém s wildcard SSL

Často sa stáva chybná chyba pri dodržiavaní štandardného nastavenia Cloudways, keď pridáte wildcard ako napríklad `*.your-network.com` do `WU_CLOUDWAYS_EXTRA_DOMAINS`, alebo ak manuálne nainštalujete wildcard SSL certifikát pre Cloudways pre túto wildcard.

**Ak to urobíte, Cloudways odmietne vydávanie Let's Encrypt certifikátov pre prispôsobené domény jednotlivých klientov, ktoré Ultimate Multisite mapuje.** Cloudways nahradia aktívny SSL certifikát na aplikácii pri každom zmenu a predexistujúci wildcard certifikát na aplikácii blokuje vydávanie Let's Encrypt pre jednotlivé domény, na ktorú sa integrácia spolieha.

### Doporučené nastavenie Cloudways SSL pre siete Ultimate Multisite

1. V záľube v tabu **SSL Certificate** aplikácie Cloudways nainštalujte štandardný certifikát Let's Encrypt, ktorý pokrýva len `your-network.com` a `www.your-network.com` — **nie** wildcard.
2. Neumiestňujte `*.your-network.com` (alebo akýkoľvek vzor poddomén vašej siete) v poli `WU_CLOUDWAYS_EXTRA_DOMAINS`. Táto kon constant si zarezávte len pre **externé** domény.
3. Vytvorte wildcard poddoménu na úrovni **DNS** len (rekord `A` pre `*.your-network.com`, ktorý ukazuje IP adresu vášho Cloudways servera), aby sa poddomény správne načítali. SSL pre jednotlivé mapované prispôsobené domény je potom automaticky vydaný integráciou pomocou Let's Encrypt.

Ak sú u vašich klientov prispôsobené domény bez SSL, skontrolujte tabu Cloudways SSL. Ak tam je aktivý wildcard certifikát, odstráňte ho, vydajte štandardný certifikát Let's Encrypt len pre hlavnú sieti doménu a odstráňte všetky vstupy typu wildcard z `WU_CLOUDWAYS_EXTRA_DOMAINS`. Potom znovu spustite mapovanie domény (alebo počkajte na nasledujúci) a integrácia začne vydávať certifikáty pre jednotlivé domény znova.

## Úprava problémov

### Problémy s API pripojením
- Overte, či sú vaše e-mailové údaje a API kľúč správne
- Skontrolujte, či sú vaše ID servera a aplikácie správne
- Uistite sa, že váš účet Cloudways má potrebné povolenia

### Problémy so s SSL certifikátmi
- Cloudways vyžaduje, aby domény mali platné DNS záznamy, ktoré ukazujú na váš server, pred vydávaním SSL certifikátov.
- Integrácia validuje DNS záznamy, než požiada o SSL certifikáty.
- Ak sa SSL certifikáty nevydávajú, skontrolujte, či vaše domény správne ukážu na IP adresu vášho servera.
- **Domény s prispôsobenými menami v rámci jednej platby bez SSL?** Skontrolujte tabu SSL Certificate v aplikácii Cloudways. Ak je aktívny wildcard certifikát (manuálne nainštalovaný, alebo ktorý pokrýva `*.your-network.com`), Cloudways nevyda Let's Encrypt certifikáty pre individuálne mapované prispôsobené domény. Nahraďte ho štandardným Let's Encrypt certifikátom, ktorý pokrýva len hlavnú siatkovú doménu (`your-network.com`, `www.your-network.com`) a odstráňte všetky wildcard záznamy z `WU_CLOUDWAYS_EXTRA_DOMAINS`. Potom ponovte mapovanie domény (alebo počkajte na nasledujúci) a integrácia požiada o certifikáty pre jednotlivé domény.

### Doména nebola pridaná
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy.
- Overte, že doména nie je už pridaná do Cloudways.
- Uistite sa, že váš plán Cloudways podporuje počet domén, ktoré pridávate.
