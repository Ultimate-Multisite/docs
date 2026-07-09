---
title: Integrace CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrace s CyberPanel {#cyberpanel-integration}

Tento průvodce vysvětluje, jak nakonfigurovat integraci Ultimate Multisite s CyberPanel, aby domény přiřazené do vaší sítě byly automaticky přidávány (a odstraňovány) jako virtuální hosty v CyberPanelu, s možností automatického poskytování SSL certifikátu přes Let's Encrypt.

## Co dělá {#what-it-does}

*   Když je doména přiřazena v Ultimate Multisite, integrace zavolá CyberPanel API, aby vytvořila virtuální host pro tuto doménu.
*   Pokud je přiřazení domény odstraněno, integrace zavolá API, aby smazala odpovídající virtuální host.
*   Pokud je automatické SSL zapnuté, integrace spustí vydání certifikátu Let's Encrypt ihned po vytvoření virtuálního hostu.
*   Volitelně přidává/odstraňuje alias `www.` v závislosti na nastavení „Auto-create www subdomain“ v nastavení Domain Mapping.

## Předpoklady {#prerequisites}

*   Spouštěná instance CyberPanel (doporučujeme v2.3 nebo novější), která je dostupná z vašeho WordPress serveru.
*   Existující webová stránka v CyberPanelu, která již hostuje kořen vaší WordPress sítě. Integrace přidává nové virtuální hosty na tento server.
*   Zapnutý přístup k CyberPanel API. Autentizace používá uživatelské jméno a heslo vašeho administrátora CyberPanelu.
*   Vaše DNS záznamy pro přiřazené domény musí již ukazovat na IP adresu vašeho serveru, aby bylo možné automaticky vydat platný certifikát.

## Požadavky {#requirements}

Následující konstanty musí být definovány ve vašem souboru `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Volitelně můžete také definovat:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Výchozí: true — vydá Let's Encrypt SSL po vytvoření domény
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Výchozí: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Používá se pro kontakt při certifikaci SSL
```

## Instrukce pro nastavení {#setup-instructions}

### 1. Zapněte CyberPanel API {#1-enable-the-cyberpanel-api}

1. Přihlaste se do vašeho CyberPanel dashboardu jako administrátor.
2. Přejděte do **Security** > **SSL** a potvrďte, že je SSL aktivní přímo na rozhraní CyberPanelu (je to nutné pro bezpečné API volání).
3. CyberPanel API je výchozí k dispozici na adrese `https://your-server-ip:8090/api/`. Není nutné provádět žádné další kroky k jeho aktivaci — je zapnuté výchozí pro administrátory.

### 2. Přidejte konstanty do wp-config.php {#2-add-constants-to-wp-configphp}

Přidejte následující konstanty do vašeho souboru `wp-config.php` před řádkem `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Pro povolení automatického SSL (doporučeno):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Zapněte integraci {#3-enable-the-integration}

1. V administraci vaší WordPress sítě přejděte do **Ultimate Multisite** > **Settings**.
2. Přejděte do záložky **Domain Mapping**.
3. Posuvte se dolů k **Host Integrations**.
4. Zapněte integraci **CyberPanel**.
5. Klikněte na **Save Changes**.

### 4. Ověřte připojení {#4-verify-connectivity}

Použijte vestavěný test připojení v průvodci nastavení:

1. Přejděte do **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klikněte na **Test Connection**.
3. Zobrazí se zpráva úspěchu, která potvrzuje, že plugin může dosáhnout CyberPanel API a správně se autentizovat.

## Jak to funguje {#how-it-works}

### Domain Mapping {#domain-mapping}

Když je doména přiřazena v Ultimate Multisite:

1. Integrace odešle `POST` požadavek na `/api/createWebsite` na váš host CyberPanelu.
2. CyberPanel vytvoří nový virtuální host pro doménu v rámci nakonfigurovaného balíčku.
3. Kořen dokumentu je nastaven tak, aby ukazoval na kořen vaší WordPress sítě.
4. Když je přiřazení domény odstraněno, integrace zavolá `/api/deleteWebsite` pro vyčištění virtuálního hostu.

### Auto-SSL {#auto-ssl}

Když je `WU_CYBERPANEL_AUTO_SSL` nastaven na `true`:

1. Po vytvoření virtuálního hostu integrace zavolá `/api/issueSSL` pro doménu.
2. CyberPanel požádá o certifikát Let's Encrypt pomocí výzvy ACME HTTP-01.
3. Certifikát je automaticky obnovován CyberPanelem před expirací.

> **Důležité:** DNS musí být plně propagováno na IP adresu vašeho serveru, než Let's Encrypt může doménu ověřit. Pokud selže vydání SSL ihned po přiřazení, počkejte s propagací DNS a znovu spuštění SSL z dashboardu CyberPanelu pod **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Pokud je v nastavení Domain Mapping zapnuté **Auto-create www subdomain**, integrace také vytvoří virtuální host alias pro `www.<doména>` a při zapnutém auto-SSL vydá certifikát pokrývající jak apex, tak www variantu.

### Email Forwarders {#email-forwarders}

Když je aktivní addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/), CyberPanel může také poskytovat zákaznické emailové přeposílání. Přeposílatelé směrují zprávy z adresy domény na jinou schránku bez vytváření plné schránky, což je užitečné pro aliasy jako `info@customer-domain.test` nebo `support@customer-domain.test`.

Před povolení přeposílání pro zákazníky:

1. Potvrďte, že konstanty CyberPanelu výše jsou nakonfigurovány a test připojení je úspěšný.
2. Zapněte poskytovatele e-mailu CyberPanelu v nastavení addonu Emails.
3. Potvrďte, že doména zákazníka již existuje v CyberPanelu před vytvořením přeposílatel.
4. Vytvořte testovací přeposílatel a odešlete přes něj zprávu, než funkci nabídnete na produkčních plánech.

Pokud selže vytvoření přeposílatel, nejprve zkontrolujte v logu aktivit Ultimate Multisite, poté v CyberPanelu potvrďte, že zdrojová doména existuje a že uživatel API má oprávnění k správě e-mailů.

## Reference pro konfiguraci {#configuration-reference}

| Konstanty | Požadováno | Výchozí | Popis |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ano | — | Plná URL vašeho CyberPanelu včetně portu, např. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ano | — | Uživatelské jméno administrátora CyberPanelu |
| `WU_CYBERPANEL_PASSWORD` | Ano | — | Heslo administrátora CyberPanelu |
| `WU_CYBERPANEL_PACKAGE` | Ano | `Default` | Balíček hostingu CyberPanelu, který se přiřadí novým virtuálním hostům |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Vydá Let's Encrypt SSL certifikát po vytvoření domény |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | Verze PHP pro nové virtuální hosty (musí odpovídat verzi nainstalované v CyberPanelu) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | Kontaktový e-mail pro registraci certifikátu SSL |

## Důležité poznámky {#important-notes}

*   API CyberPanel používá autentizaci založenou na tokenu s aktivní séssí. Integrace automaticky zpracuje získání tokenu při každém volání API.
*   Váš administrátorský účet CyberPanelu musí mít oprávnění k vytváření a odstraňování webových stránek.
*   CyberPanel běží výchozí na portu `8090`. Pokud váš server používá firewall, ujistěte se, že je tento port dostupný z aplikace WordPress.
*   Integrace neřídí DNS záznamy. Musíte doménu DNS přesměrovat na IP adresu vašeho serveru, než doménu v Ultimate Multisite přiřadíte.
*   Pokud používáte OpenLiteSpeed (OLS), po změnách virtuálních hostů je automaticky spuštěn jemný restart. Manuální zásah není nutný.

## Řešení problémů {#troubleshooting}

### Connection Refused (Odmítnuté připojení API) {#api-connection-refused}

*   Ověřte, že je port `8090` otevřen ve firewallu vašeho serveru.
*   Potvrďte, že hodnota `WU_CYBERPANEL_HOST` obsahuje správný protokol (`https://`) a port.
*   Zkontrolujte, zda je váš SSL certifikát CyberPanelu platný; self-signed certifikáty mohou způsobit chyby ověření TLS. Nastavte `WU_CYBERPANEL_VERIFY_SSL` na `false` pouze v důvěryhodném soukromém síťovém prostředí.

### Authentication Errors (Chyby autentizace) {#authentication-errors}

*   Potvrďte, že jsou vaše `WU_CYBERPANEL_USERNAME` a `WU_CYBERPANEL_PASSWORD` správné, přihlášením se do CyberPanelu přímo.
*   CyberPanel účty blokuje po opakovaných pokusech o přihlášení. Zkontrolujte **Security** > **Brute Force Monitor** v CyberPanelu, pokud dojde k blokování.

### Domain Not Created (Doména nebyla vytvořena) {#domain-not-created}

*   Zkontrolujte log aktivit Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) pro zprávy chyb API.
*   Ověřte, že balíček definovaný v `WU_CYBERPANEL_PACKAGE` existuje v CyberPanelu (**Packages** > **List Packages**).
*   Ujistěte se, že doména není již v CyberPanelu registrována jako webová stránka — duplicitní vytváření webových stránek vrátí chybu.

### SSL Certificate Not Issued (SSL certifikát nebyl vydán) {#ssl-certificate-not-issued}

*   Potvrďte, že DNS bylo plně propagováno: `dig +short your-domain.com` by mělo vrátit IP adresu vašeho serveru.
*   Let's Encrypt vynucuje limity rychlosti. Pokud jste nedávno vydali několik certifikátů pro stejnou doménu, počkejte s pokusy.
*   Zkontrolujte logy SSL CyberPanelu pod **Logs** > **Error Logs** pro podrobnosti o selhání vydání certifikátu.
*   Jako zálohu můžete SSL ručně vydat z CyberPanelu: **SSL** > **Manage SSL** > vybrat doménu > **Issue SSL**.

## Reference {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
