---
title: Integrace WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrace s WPMU DEV

## Přehled
WPMU DEV je komplexní WordPress platforma nabízející hosting, pluginy a služby pro WordPress weby. Tato integrace umožňuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a WPMU DEV hostingem.

## Funkce
- Automatická synchronizace domén
- Správa SSL certifikátů
- Rozšířený počet pokusů o ověření SSL certifikátu

## Požadavky
Integrace automaticky rozpozná, zda používáte WPMU DEV hosting, a využije vestavěné API. Pokud používáte WPMU DEV hosting, není potřeba žádná další konfigurace.

Integrace kontroluje přítomnost konstanty `WPMUDEV_HOSTING_SITE_ID`, která je automaticky definována při hostování na WPMU DEV.

## Návod k nastavení

### 1. Ověření WPMU DEV hostingu

Pokud používáte WPMU DEV hosting, potřebné konstanty by již měly být definovány. Ověřte, že:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` je definována ve vašem prostředí
2. Máte aktivní WPMU DEV členství s přístupem k API

### 2. Aktivace integrace

1. V administraci WordPressu přejděte na Ultimate Multisite > Settings
2. Přejděte na záložku „Domain Mapping"
3. Sjeďte dolů na „Host Integrations"
4. Aktivujte integraci WPMU DEV
5. Klikněte na „Save Changes"

## Jak to funguje

### Synchronizace domén

Když je doména namapována v Ultimate Multisite:

1. Integrace použije WPMU DEV API k přidání domény do vašeho hostingového účtu
2. Automaticky přidá také www verzi domény
3. WPMU DEV se postará o konfiguraci domény a vydání SSL certifikátu

### Správa SSL certifikátů

Integrace je nastavena tak, aby zvýšila počet pokusů o ověření SSL certifikátu pro WPMU DEV hosting, protože vydání a instalace SSL certifikátů může nějakou dobu trvat. Ve výchozím nastavení provede až 10 pokusů o ověření SSL certifikátu, oproti standardním 5 pokusům.

## Důležité informace

### Odstranění domény

V současné době WPMU DEV API neposkytuje způsob, jak domény odstraňovat. Když je mapování domény odstraněno v Ultimate Multisite, doména zůstane ve vašem WPMU DEV hostingovém účtu. V případě potřeby ji budete muset ručně odstranit z WPMU DEV hostingového dashboardu.

### Autentizace API

Integrace používá WPMU DEV API klíč uložený ve vaší WordPress databázi jako volba `wpmudev_apikey`. Ten je automaticky nastaven při připojení vašeho webu k WPMU DEV.

## Řešení problémů

### Problémy s připojením k API
- Ověřte, že je váš web správně připojen k WPMU DEV
- Zkontrolujte, zda je volba `wpmudev_apikey` nastavena ve vaší WordPress databázi
- Ujistěte se, že vaše WPMU DEV členství je aktivní

### Problémy s SSL certifikátem
- WPMU DEV může potřebovat nějaký čas na vydání SSL certifikátů (obvykle 5–15 minut)
- Integrace je nastavena na kontrolu SSL certifikátů až 10krát
- Pokud SSL certifikáty stále nejsou vydány ani po několika pokusech, kontaktujte podporu WPMU DEV

### Doména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména již není přidána do WPMU DEV
- Ujistěte se, že váš WPMU DEV hostingový plán podporuje počet domén, které přidáváte
