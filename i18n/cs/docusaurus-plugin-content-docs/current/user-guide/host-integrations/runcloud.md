---
title: Integrace RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrace RunCloud {#runcloud-integration}

## Přehled {#overview}
RunCloud je cloudová platforma pro správu serverů, která vám umožňuje snadno nasazovat a spravovat webové aplikace na vašich vlastních cloudových serverech. Tato integrace zajišťuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a RunCloud.

## Funkce {#features}
- Automatická synchronizace domén
- Správa SSL certifikátů
- Odebrání domény při smazání mapování

## Požadavky {#requirements}
Ve vašem souboru `wp-config.php` musí být definovány následující konstanty:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Pokyny k nastavení {#setup-instructions}

### 1. Získejte přihlašovací údaje k RunCloud API {#1-get-your-runcloud-api-credentials}

1. Přihlaste se do svého RunCloud dashboardu
2. Přejděte na „User Profile" (klikněte na svůj profilový obrázek v pravém horním rohu)
3. V menu vyberte „API"
4. Klikněte na „Generate API Key", pokud ještě žádný nemáte
5. Zkopírujte svůj API Key a API Secret

### 2. Získejte ID serveru a aplikace {#2-get-your-server-and-app-ids}

1. Ve svém RunCloud dashboardu přejděte na „Servers"
2. Vyberte server, na kterém je hostován váš WordPress multisite
3. ID serveru je viditelné v URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Přejděte na „Web Applications" a vyberte svou WordPress aplikaci
5. ID aplikace je viditelné v URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Přidejte konstanty do wp-config.php {#3-add-constants-to-wp-configphp}

Do souboru `wp-config.php` přidejte následující konstanty:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktivujte integraci {#4-enable-the-integration}

1. V administraci WordPress přejděte na Ultimate Multisite > Settings
2. Přejděte na záložku „Domain Mapping"
3. Sjeďte dolů k „Host Integrations"
4. Aktivujte integraci RunCloud
5. Klikněte na „Save Changes"

## Jak to funguje {#how-it-works}

Když je doména namapována v Ultimate Multisite:

1. Integrace odešle požadavek na RunCloud API, aby přidala doménu k vaší aplikaci
2. Pokud je doména úspěšně přidána, integrace také znovu nasadí SSL certifikáty
3. Když je mapování domény odebráno, integrace doménu z RunCloud odstraní

U instalací se subdoménami integrace automaticky zajistí vytvoření subdomén v RunCloud, když jsou do vaší sítě přidány nové weby.

## Řešení problémů {#troubleshooting}

### Problémy s připojením k API {#api-connection-issues}
- Ověřte, že vaše přihlašovací údaje k API jsou správné
- Zkontrolujte, že ID serveru a aplikace jsou správné
- Ujistěte se, že váš RunCloud účet má potřebná oprávnění

### Problémy s SSL certifikáty {#ssl-certificate-issues}
- Vydání SSL certifikátů může v RunCloud nějakou dobu trvat
- Ověřte, že vaše domény správně směřují na IP adresu vašeho serveru
- Zkontrolujte nastavení SSL v RunCloud pro vaši aplikaci

### Doména nebyla přidána {#domain-not-added}
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména ještě není v RunCloud přidána
- Ujistěte se, že váš tarif RunCloud podporuje více domén
