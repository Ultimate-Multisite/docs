---
title: Integrace s Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrace Cloudways

## Přehled {#overview}
Cloudways je spravovaná platforma cloudového hostingu, která vám umožňuje nasazovat WordPress weby u různých cloudových poskytovatelů, jako jsou DigitalOcean, AWS, Google Cloud a další. Tato integrace umožňuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a Cloudways.

## Funkce {#features}
- Automatická synchronizace domén
- Správa SSL certifikátů
- Podpora pro další domény
- DNS validace pro SSL certifikáty

## Požadavky {#requirements}
Následující konstanty musí být definovány ve vašem souboru `wp-config.php`:

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

## Pokyny k nastavení {#setup-instructions}

### 1. Získejte své přihlašovací údaje Cloudways API {#1-get-your-cloudways-api-credentials}

1. Přihlaste se do svého Cloudways Dashboard
2. Přejděte na „Account“ > „Klíče API“
3. Vygenerujte klíč API, pokud ho ještě nemáte
4. Zkopírujte svůj e-mail a klíč API

### 2. Získejte ID svého serveru a aplikace {#2-get-your-server-and-application-ids}

1. Ve svém Cloudways Dashboard přejděte na „Servery“
2. Vyberte server, na kterém je hostován váš WordPress multisite
3. Server ID je viditelné v URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Přejděte na „Aplikace“ a vyberte svou WordPress aplikaci
5. App ID je viditelné v URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Přidejte konstanty do wp-config.php {#3-add-constants-to-wp-configphp}

Přidejte následující konstanty do svého souboru `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Pokud máte další **externí** domény (mimo vaši multisite síť), které mají být vždy ponechány v seznamu aliasů Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Nezahrnujte wildcard své vlastní sítě
**Nepřidávejte** `*.your-network.com` (ani žádný vzor subdomén své vlastní sítě) do
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Níže v části [Důležité — úskalí wildcard SSL](#important--wildcard-ssl-pitfall)
najdete vysvětlení, proč to brání vydávání SSL certifikátů pro jednotlivé tenanty.
:::

### 4. Povolte integraci {#4-enable-the-integration}

1. Ve své WordPress administraci přejděte na Ultimate Multisite > Nastavení
2. Přejděte na kartu „Mapování domén“
3. Posuňte se dolů na „Integrace hostingu“
4. Povolte integraci Cloudways
5. Klikněte na „Uložit změny“

## Jak to funguje {#how-it-works}

### Synchronizace domén {#domain-syncing}

Když je doména namapována v Ultimate Multisite:

1. Integrace načte všechny aktuálně namapované domény
2. Přidá novou doménu do seznamu (spolu s verzí www, pokud je to použitelné)
3. Odešle kompletní seznam do Cloudways přes API
4. Cloudways aktualizuje aliasy domén pro vaši aplikaci

Poznámka: Cloudways API vyžaduje pokaždé odeslat kompletní seznam domén, ne pouze přidat nebo odebrat jednotlivé domény.

### Správa SSL certifikátů {#ssl-certificate-management}

Po synchronizaci domén:

1. Integrace zkontroluje, které domény mají platné DNS záznamy směřující na váš server
2. Odešle požadavek do Cloudways na instalaci Let's Encrypt SSL certifikátů pro tyto domény
3. Cloudways zajistí vydání a instalaci SSL certifikátu

Integrace vždy požaduje **standardní** (ne-wildcard) Let's Encrypt certifikáty od
Cloudways. Pokud je v `WU_CLOUDWAYS_EXTRA_DOMAINS` uveden wildcard vzor, úvodní
`*.` se před SSL požadavkem odstraní — samotný wildcard tato
integrace nikdy neinstaluje. Pokud chcete na Cloudways použít wildcard certifikát, museli byste ho nainstalovat
ručně, ale tím zablokujete vydávání Let's Encrypt pro jednotlivé domény u namapovaných vlastních domén
(viz úskalí níže).

## Další domény {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` vám umožňuje zadat další **externí**
domény, které mají být vždy ponechány v seznamu aliasů aplikace Cloudways. Použijte ji pro:

- Externí domény, které nejsou spravovány Ultimate Multisite (např. samostatný marketingový web sdílející stejnou aplikaci Cloudways)
- Parkované nebo staging domény, které chcete ponechat v seznamu aliasů aplikace

**Nepoužívejte** tuto konstantu pro wildcard subdomén své vlastní sítě
(např. `*.your-network.com`). Viz úskalí wildcard SSL níže.

## Důležité — úskalí wildcard SSL {#important--wildcard-ssl-pitfall}

Běžnou chybou při dodržování výchozího nastavení Cloudways je přidat wildcard, například
`*.your-network.com`, do `WU_CLOUDWAYS_EXTRA_DOMAINS`, nebo ručně nainstalovat Cloudways
wildcard SSL certifikát pro tento wildcard.

**Pokud to uděláte, Cloudways odmítne vydat Let's Encrypt certifikáty pro
vlastní domény jednotlivých tenantů, které Ultimate Multisite mapuje.** Cloudways pokaždé nahrazuje aktivní
SSL certifikát v aplikaci a již existující wildcard certifikát v
aplikaci blokuje vydávání Let's Encrypt pro jednotlivé domény, na kterém integrace závisí.

### Doporučené nastavení Cloudways SSL pro síť Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Na kartě **SSL certifikát** aplikace Cloudways nainstalujte **standardní
   Let's Encrypt certifikát** pokrývající pouze `your-network.com` a `www.your-network.com`
   — **ne** wildcard.
2. Nevkládejte `*.your-network.com` (ani žádný vzor subdomén své vlastní sítě) do
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Vyhraďte tuto konstantu pouze pro **externí** domény.
3. Vytvořte wildcard subdomén pro jednotlivé tenanty pouze na úrovni **DNS** (záznam `A` pro
   `*.your-network.com` směřující na IP vašeho Cloudways serveru), aby se subweby načítaly. SSL
   pro jednotlivé namapované vlastní domény je poté vydáváno automaticky integrací
   přes Let's Encrypt.

Pokud vlastní domény vašich tenantů zůstávají bez SSL, zkontrolujte záložku SSL v Cloudways. Pokud je
tam aktivní wildcard certifikát, odeberte ho, znovu vydejte standardní Let's Encrypt
certifikát pouze pro hlavní síťovou doménu a odstraňte všechny wildcard položky z
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Poté znovu spusťte mapování domény (nebo počkejte na další)
a integrace začne znovu vydávat certifikáty pro jednotlivé domény.

## Řešení problémů {#troubleshooting}

### Problémy s připojením k API {#api-connection-issues}
- Ověřte, že váš e-mail a API klíč jsou správné
- Zkontrolujte, že ID vašeho serveru a aplikace jsou správná
- Ujistěte se, že váš Cloudways account má potřebná oprávnění

### Problémy s SSL certifikátem {#ssl-certificate-issues}
- Cloudways vyžaduje, aby domény před vydáním SSL certifikátů měly platné DNS záznamy směřující na váš server
- Integrace ověřuje DNS záznamy před vyžádáním SSL certifikátů
- Pokud se SSL certifikáty nevydávají, zkontrolujte, že vaše domény správně směřují na IP adresu vašeho serveru
- **Vlastní domény jednotlivých tenantů zůstávají bez SSL?** Zkontrolujte záložku SSL Certificate aplikace Cloudways. Pokud je aktivní wildcard certifikát (nainstalovaný ručně nebo pokrývající `*.your-network.com`), Cloudways nebude vydávat Let's Encrypt certifikáty pro jednotlivě namapované vlastní domény. Nahraďte ho standardním Let's Encrypt certifikátem pokrývajícím pouze hlavní síťovou doménu (`your-network.com`, `www.your-network.com`) a odstraňte všechny wildcard položky z `WU_CLOUDWAYS_EXTRA_DOMAINS`. Poté znovu spusťte mapování domény (nebo počkejte na další) a integrace si vyžádá certifikáty pro jednotlivé domény.

### Doména nebyla přidána {#domain-not-added}
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména už není přidána do Cloudways
- Ujistěte se, že váš Cloudways plán podporuje počet domén, které přidáváte
