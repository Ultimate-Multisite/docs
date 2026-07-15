---
title: Integrace cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrace s cPanel

## Přehled {#overview}
cPanel je jeden z nejoblíbenějších kontrolních panelů pro webhosting, který používá řada poskytovatelů sdíleného i dedikovaného hostingu. Tato integrace umožňuje automatickou synchronizaci domén mezi Ultimate Multisite a cPanel, díky čemuž můžete automaticky přidávat doménové aliasy a subdomény do svého cPanel účtu.

## Funkce {#features}
- Automatické vytváření addon domén v cPanel
- Automatické vytváření subdomén v cPanel (pro multisite instalace se subdoménami)
- Odstranění domény při smazání mapování

## Požadavky {#requirements}
V souboru `wp-config.php` musíte definovat následující konstanty:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Volitelně můžete definovat také:

```php
define('WU_CPANEL_PORT', 2083); // Výchozí hodnota je 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Výchozí hodnota je /public_html
```

## Pokyny k nastavení {#setup-instructions}

### 1. Získejte své přihlašovací údaje do cPanel {#1-get-your-cpanel-credentials}

1. Získejte své uživatelské jméno a heslo pro cPanel od svého poskytovatele hostingu
2. Zjistěte adresu svého cPanel hostitele (obvykle `cpanel.vasedomena.cz` nebo `vasedomena.cz:2083`)

### 2. Přidejte konstanty do wp-config.php {#2-add-constants-to-wp-configphp}

Do souboru `wp-config.php` přidejte následující konstanty:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Volitelně můžete přizpůsobit port a kořenový adresář:

```php
define('WU_CPANEL_PORT', 2083); // Změňte, pokud váš cPanel používá jiný port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Změňte, pokud je váš kořenový adresář dokumentů jiný
```

### 3. Aktivujte integraci {#3-enable-the-integration}

1. V administraci WordPress přejděte na Ultimate Multisite > Nastavení
2. Přejděte na záložku „Mapování domén"
3. Přejděte dolů k sekci „Integrace s hostingem"
4. Aktivujte integraci s cPanel
5. Klikněte na „Uložit změny"

## Jak to funguje {#how-it-works}

### Addon domény {#addon-domains}

Když je doména namapována v Ultimate Multisite:

1. Integrace odešle požadavek na API cPanel pro přidání domény jako addon domény
2. Doména je nakonfigurována tak, aby směřovala do vašeho kořenového adresáře
3. Když je mapování domény odstraněno, integrace odebere addon doménu z cPanel

### Subdomény {#subdomains}

U multisite instalací se subdoménami, když je vytvořen nový web:

1. Integrace extrahuje část subdomény z celé domény
2. Odešle požadavek na API cPanel pro přidání subdomény
3. Subdoména je nakonfigurována tak, aby směřovala do vašeho kořenového adresáře

## Důležité poznámky {#important-notes}

- Integrace používá ke komunikaci s vaším cPanel účtem rozhraní cPanel API2
- Váš cPanel účet musí mít oprávnění přidávat addon domény a subdomény
- Někteří poskytovatelé hostingu mohou omezovat počet addon domén nebo subdomén, které můžete vytvořit
- Integrace nezajišťuje konfiguraci DNS; stále musíte nasměrovat své domény na IP adresu vašeho serveru

## Řešení problémů {#troubleshooting}

### Problémy s připojením k API {#api-connection-issues}
- Ověřte, že vaše uživatelské jméno a heslo pro cPanel jsou správné
- Zkontrolujte, že adresa vašeho cPanel hostitele je správná a dostupná
- Ujistěte se, že váš cPanel účet má potřebná oprávnění
- Zkuste použít úplnou URL adresu hostitele (např. `https://cpanel.vasedomena.cz`)

### Doména nebyla přidána {#domain-not-added}
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména již není v cPanel přidána
- Ujistěte se, že váš cPanel účet nedosáhl limitu pro addon domény nebo subdomény

### Problémy s SSL certifikátem {#ssl-certificate-issues}
- Integrace nezajišťuje vydávání SSL certifikátů
- Pro vydání SSL certifikátů pro vaše domény budete muset použít nástroje SSL/TLS v cPanel nebo funkci AutoSSL
- Alternativně můžete využít službu jako Let's Encrypt s funkcí AutoSSL v cPanel
