---
title: Integrácia WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrácia s WPMU DEV {#wpmu-dev-integration}

## Prehľad {#overview}
WPMU DEV je komplexná platforma WordPress, ktorá ponúka hosting, pluginy a služby pre WordPress webové stránky. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a hostovaním WPMU DEV.

## Funkcionality {#features}
- Automatické synchronizovanie domén
- Správa SSL certifikátov
- Rozšírené skúšky validácie SSL certifikátov

## Požiadavky {#requirements}
Integrácia automaticky detekuje, či hostujete na WPMU DEV, a používa vbuiltínou API. Ak hostujete na WPMU DEV, nepožaduje sa žiadna ďalšia konfigurácia.

Integrácia skontroluje prítomnosť kon constantu `WPMUDEV_HOSTING_SITE_ID`, ktorá sa automaticky definuje pri hostovaní na WPMU DEV.

## Pokyny na nastavenie {#setup-instructions}

### 1. Overenie hostovania na WPMU DEV {#1-verify-wpmu-dev-hosting}

Ak hostujete na WPMU DEV, potrebné konstanty by mali byť už definované. Preverte, že:

1. Kon constant `WPMUDEV_HOSTING_SITE_ID` je definovaný v vašom okrese
2. Máte aktívnu členstvo WPMU DEV s prístupom k API

### 2. Aktivácia integrácie {#2-enable-the-integration}

1. V administrácii WordPress prejdite do Ultimate Multisite > Settings (Nastavenia)
2. Prejdite na záložku "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu WPMU DEV
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

### Synchronizácia domén {#domain-syncing}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia používa API WPMU DEV na pridaní domény do vášho účtu na hostovaní
2. Automaticky pridá aj www verziu domény
3. WPMU DEV si postará o konfiguráciu domény a vydávanie SSL certifikátu

### Správa SSL certifikátov {#ssl-certificate-management}

Integrácia je nastavená tak, aby sa zvýšila počet pokusov o vérifikáciu SSL certifikátov pre hostovanie WPMU DEV, pretože vydávanie a inštalácia SSL certifikátov môže trvať určitý čas. Po výpadku zvyčajne bude skúšať až 10 pokusov o vérifikáciu SSL certifikátu, čo je viac ako štandardné 5 pokusov.

## Dôležité poznámky {#important-notes}

### Odstránenie domén {#domain-removal}
Aktuálne API WPMU DEV neposkytuje spôsob, ako odstrániť domény. Keď sa mapovanie domény odstráni v Ultimate Multisite, doména zostane v účte WPMU DEV pre hostovanie. Ak je to potrebné, budete musieť manuálne odstrániť doménu z dashboardu WPMU DEV.

### Autentifikácia API {#api-authentication}
Integrácia používa kľúč API WPMU DEV uložený v pôsobku `wpmudev_apikey` v vašej databáze WordPress. Toto sa automaticky nastaví, keď pripojte svoj webový portál na WPMU DEV.

## Řešenie problémov (Troubleshooting) {#troubleshooting}

### Problémy s pripojením k API {#api-connection-issues}
- Overtečte, či je váš portál správne pripojený na WPMU DEV
- Skontrolujte, či je pôsobok `wpmudev_apikey` nastaven v vašej databáze WordPress
- Uistite sa, že vaše členstvo na WPMU DEV je aktívne

### Problémy so SSL certifikátmi {#ssl-certificate-issues}
- WPMU DEV môže trvať určitý čas na vydávanie SSL certifikátov (zvyčajne 5–15 minút)
- Integrácia je nastavená tak, aby skontrolovala až 10 pokusov o SSL certifikátoch
- Ak sa SSL certifikáty stále nevydávajú po viacerých pokusoch, kontaktujte podporu WPMU DEV

### Doména nie bola pridaná {#domain-not-added}
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy
- Uistite sa, že doména nie je už pridaná do WPMU DEV
- Uistite sa, že váš plán hostovania WPMU DEV podporuje počet domén, ktoré pridávate
