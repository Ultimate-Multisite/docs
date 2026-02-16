---
title: Integrace Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrace Closte

## Přehled
Closte je spravovaná hostingová platforma pro WordPress postavená na infrastruktuře Google Cloud. Tato integrace umožňuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a Closte.

## Funkce
- Automatická synchronizace domén
- Správa SSL certifikátů
- Podpora wildcard domén
- Žádná konfigurace není potřeba, pokud běžíte na Closte

## Požadavky
Pokud používáte Closte, musíte v souboru `wp-config.php` definovat následující konstantu:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Tato konstanta je obvykle již definovaná, pokud hostujete na Closte.

## Pokyny k nastavení

### 1. Ověřte svůj API klíč Closte

Pokud hostujete na Closte, konstanta `CLOSTE_CLIENT_API_KEY` by již měla být definovaná ve vašem souboru `wp-config.php`. Můžete to ověřit kontrolou souboru `wp-config.php`.

### 2. Povolte integraci

1. V administraci WordPress přejděte na Ultimate Multisite > Settings
2. Přejděte na záložku „Domain Mapping"
3. Přejděte dolů k „Host Integrations"
4. Povolte integraci Closte
5. Klikněte na „Save Changes"

## Jak to funguje

Když je doména namapována v Ultimate Multisite:

1. Integrace odešle požadavek na API Closte pro přidání domény do vaší aplikace
2. Closte automaticky zajistí vydání SSL certifikátu
3. Když je mapování domény odstraněno, integrace odstraní doménu z Closte

Integrace také spolupracuje s nastavením intervalu kontroly DNS v Ultimate Multisite, což vám umožňuje konfigurovat, jak často systém kontroluje šíření DNS a vydávání SSL certifikátů.

## Vytváření záznamů domén

Tato integrace zajišťuje, že při vytvoření nebo duplikaci webu se automaticky vytvoří záznam domény. To je obzvláště důležité pro integraci Closte, protože vytvoření záznamu domény spustí Closte API k vytvoření domény a SSL certifikátu.

## Řešení problémů

### Problémy s připojením k API
- Ověřte, že váš API klíč Closte je správný
- Ujistěte se, že váš účet Closte má potřebná oprávnění

### Problémy s SSL certifikáty
- Vydání SSL certifikátů může Closte nějakou dobu trvat (obvykle 5–10 minut)
- Ověřte, že vaše domény správně směřují na IP adresu vašeho serveru Closte
- Zkontrolujte DNS záznamy vaší domény a ujistěte se, že jsou správně nakonfigurovány

### Doména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména ještě není přidána v Closte
- Ujistěte se, že DNS záznamy vaší domény jsou správně nakonfigurovány

### Interval kontroly DNS
- Pokud vydávání SSL certifikátů trvá příliš dlouho, můžete upravit interval kontroly DNS v nastavení Domain Mapping
- Výchozí interval je 300 sekund (5 minut), ale můžete ho nastavit až na 10 sekund pro rychlejší kontrolu během testování
