---
title: Integrace Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Integrace s Cloudways

## Přehled
Cloudways je platforma pro spravovaný cloudový hosting, která umožňuje nasazovat WordPress weby na různých cloudových poskytovatelích jako DigitalOcean, AWS, Google Cloud a další. Tato integrace zajišťuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a Cloudways.

## Funkce
- Automatická synchronizace domén
- Správa SSL certifikátů
- Podpora dalších domén
- DNS validace pro SSL certifikáty

## Požadavky
V souboru `wp-config.php` musíte definovat následující konstanty:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Volitelně můžete také definovat:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Postup nastavení

### 1. Získání API přihlašovacích údajů Cloudways

1. Přihlaste se do svého Cloudways dashboardu
2. Přejděte na "Account" > "API Keys"
3. Vygenerujte API klíč, pokud ho ještě nemáte
4. Zkopírujte svůj e-mail a API klíč

### 2. Získání ID serveru a aplikace

1. V Cloudways dashboardu přejděte na "Servers"
2. Vyberte server, na kterém je hostovaný váš WordPress multisite
3. ID serveru je viditelné v URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Přejděte na "Applications" a vyberte svou WordPress aplikaci
5. ID aplikace je viditelné v URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Přidání konstant do wp-config.php

Přidejte následující konstanty do souboru `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Pokud máte další domény, které by měly být vždy zahrnuty:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Aktivace integrace

1. Ve WordPress administraci přejděte na Ultimate Multisite > Settings
2. Přejděte na záložku "Domain Mapping"
3. Sjeďte dolů k sekci "Host Integrations"
4. Aktivujte integraci s Cloudways
5. Klikněte na "Save Changes"

## Jak to funguje

### Synchronizace domén

Když je doména mapována v Ultimate Multisite:

1. Integrace načte všechny aktuálně mapované domény
2. Přidá novou doménu do seznamu (včetně www verze, pokud je to relevantní)
3. Odešle kompletní seznam do Cloudways přes API
4. Cloudways aktualizuje aliasy domén pro vaši aplikaci

Poznámka: Cloudways API vyžaduje odeslání kompletního seznamu domén pokaždé, nikoliv pouze přidání nebo odebrání jednotlivých domén.

### Správa SSL certifikátů

Po synchronizaci domén:

1. Integrace zkontroluje, které domény mají platné DNS záznamy směřující na váš server
2. Odešle požadavek do Cloudways na instalaci Let's Encrypt SSL certifikátů pro tyto domény
3. Cloudways se postará o vydání a instalaci SSL certifikátů

## Další domény

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` umožňuje specifikovat další domény, které by měly být vždy zahrnuty při synchronizaci s Cloudways. To je užitečné pro:

- Domény, které nejsou spravovány přes Ultimate Multisite
- Wildcard domény (např. `*.example.com`)
- Vývojové nebo testovací domény

## Řešení problémů

### Problémy s API připojením
- Ověřte, že váš e-mail a API klíč jsou správné
- Zkontrolujte, že ID serveru a aplikace jsou správné
- Ujistěte se, že váš Cloudways účet má potřebná oprávnění

### Problémy s SSL certifikáty
- Cloudways vyžaduje, aby domény měly platné DNS záznamy směřující na váš server před vydáním SSL certifikátů
- Integrace validuje DNS záznamy před požadavkem na SSL certifikáty
- Pokud se SSL certifikáty nevydávají, zkontrolujte, že vaše domény správně směřují na IP adresu vašeho serveru

### Doména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové hlášky
- Ověřte, že doména není již přidána v Cloudways
- Ujistěte se, že váš Cloudways tarif podporuje počet domén, které přidáváte
