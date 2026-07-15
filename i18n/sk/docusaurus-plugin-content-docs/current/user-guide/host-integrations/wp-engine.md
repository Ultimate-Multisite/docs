---
title: Integrácia WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrácia s WP Engine

## Úvod {#overview}
WP Engine je prémiová platforma pre správu WordPressovho hostingu, ktorá poskytuje optimalizované výkon, bezpečnosť a škálovateľnosť pre WordPress webové stránky. Táto integrácia umožňuje automatické synchronizovanie domén medzi Ultimate Multisite a WP Engine.

## Funkcionality {#features}
- Automatické synchronizovanie domén
- Podporuka poddomenenov pre inštalácie multisite
- Bezprecedentná integrácia s existujúcimi systémami WP Engine

## Požiadavky {#requirements}
Integrácia automaticky detekuje, či hostíte na WP Engine, a používa vbudovaný API WP Engine. Ak je plugin WP Engine aktivný a správne nakonfigurovaný, nepožaduje sa žiadna ďalšia konfigurácia.

Avšak, ak potrebujete integráciu manuálne nakonfigurovať, môžete definovať jednu z týchto konstant v súbore `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferovaná metóda
// NEBO
define('WPE_API', 'your_api_key'); // Alternatívna metóda
```

## Pokyny na konfiguráciu {#setup-instructions}

### 1. Overenie pluginu WP Engine {#1-verify-wp-engine-plugin}

Ak hostíte na WP Engine, plugin WP Engine by mal byť už nainštalovaný a aktivovaný. Prejdite si cez:

1. Aktivný stav pluginu WP Engine
2. Existencia súboru `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Ačtenie integrácie {#2-enable-the-integration}

1. V admin paneli WordPress prejdite do Ultimate Multisite > Settings (Nastavenia)
2. Prejdite na záložku "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácia hostov)
4. Aktivujte integráciu WP Engine
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

### Synchronizácia domén {#domain-syncing}
Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia používa API WP Engine na pridaní domény do vašej inštalácie WP Engine
2. WP Engine si vezme za úkol konfiguráciu domény a vydanie SSL certifikátu
3. Keď sa mapovanie domény odstráni, integrácia doménu z WP Engine odstráni

### Podporuka poddomenenov {#subdomain-support}

Pre inštalácii multisite na poddoméniach:

1. Integrácia pridá každý poddoménu do WP Engine pri vytvorení nového webu.
2. WP Engine si postará o konfiguráciu poddomén.
3. Keď bude web odstránený, integrácia odstráni poddoménu z WP Engine.

## Dôležité poznámky {#important-notes}

### Wildcard domény {#wildcard-domains}

Pre inštaláции multisite na poddoméniach odporúčame kontaktovať podporu WP Engine a požiadať o konfiguráciu wildcard domény. To umožňuje, aby všetky poddomény fungovali automaticky bez toho, aby ste musia každú jednu pridávať individuálne.

### SSL certifikáty {#ssl-certificates}

WP Engine si automaticky postará o vydávanie a obnovu SSL certifikátov pre všetky domény pridané cez túto integráciu. Nie je potrebná žiadna iná konfigurácia.

## Riešenie problémov {#troubleshooting}

### Problémy s pripojením k API {#api-connection-issues}
- Skontrolujte, či je plugin WP Engine aktívny a správne nakonfigurovaný.
- Ak ste si manuálne definovali API kľúč, skontrolujte, či je správny.
- Kontaktujte podporu WP Engine, ak máte problémy s API.

### Doména nebola pridaná {#domain-not-added}
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy.
- Potvrďte, že doména nie je už pridaná do WP Engine.
- Uistite sa, že váš plán WP Engine podporuje počet domén, ktoré pridávate.

### Problémy s poddoménami {#subdomain-issues}
- Ak poddomény nefungujú, kontaktujte podporu WP Engine a požiadajte o konfiguráciu wildcard domény.
- Potvrďte, že vaše nastavenia DNS sú správne nakonfigurované pre hlavnú doménu a poddomény.
