---
title: Integrace Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrace Cloudflare

## Přehled
Cloudflare je přední síť pro doručování obsahu (CDN) a poskytovatel zabezpečení, který pomáhá chránit a zrychlovat weby. Tato integrace umožňuje automatickou správu domén mezi Ultimate Multisite a Cloudflare, zejména pro multisite instalace se subdoménami.

## Funkce
- Automatické vytváření subdomén v Cloudflare
- Podpora proxovaných subdomén
- Správa DNS záznamů
- Vylepšené zobrazení DNS záznamů v administraci Ultimate Multisite

## Požadavky
V souboru `wp-config.php` musí být definovány následující konstanty:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Pokyny k nastavení

### 1. Získejte svůj Cloudflare API Key

1. Přihlaste se do svého Cloudflare dashboardu
2. Přejděte na „Můj profil“ (klikněte na svůj e-mail v pravém horním rohu)
3. V nabídce vyberte „API Tokens“
4. Vytvořte nový API token s následujícími oprávněními:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Zkopírujte svůj API token

### 2. Získejte své Zone ID

1. Ve svém Cloudflare dashboardu vyberte doménu, kterou chcete použít
2. Zone ID je viditelné na kartě „Přehled“ v pravém postranním panelu pod „API“
3. Zkopírujte Zone ID

### 3. Přidejte konstanty do wp-config.php

Přidejte následující konstanty do souboru `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Povolte integraci

1. V administraci WordPress přejděte na Ultimate Multisite > Nastavení
2. Přejděte na kartu „Mapování domén“
3. Posuňte se dolů na „Integrace hostingu“
4. Povolte integraci Cloudflare
5. Klikněte na „Uložit změny“

## Jak to funguje

### Správa subdomén

Když je v multisite instalaci se subdoménami vytvořen nový web:

1. Integrace odešle požadavek do API Cloudflare pro přidání CNAME záznamu pro subdoménu
2. Subdoména je ve výchozím nastavení nakonfigurována tak, aby byla proxována přes Cloudflare (to lze změnit pomocí filtrů)
3. Když je web smazán, integrace odstraní subdoménu z Cloudflare

### Zobrazení DNS záznamů

Integrace vylepšuje zobrazení DNS záznamů v administraci Ultimate Multisite tím, že:

1. Načítá DNS záznamy přímo z Cloudflare
2. Zobrazuje, zda jsou záznamy proxované, nebo ne
3. Zobrazuje další informace o DNS záznamech

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (dříve nazývané „Cloudflare for SaaS“) je funkce Cloudflare, která umožňuje vašim zákazníkům používat vlastní domény s SSL ve vaší multisite síti. Je to doporučený přístup pro multisite instalace s mapovanými doménami, které používají Cloudflare, protože Cloudflare automaticky spravuje vydávání a obnovování SSL certifikátů pro každou vlastní doménu.

### Jak se liší od standardní integrace Cloudflare

| | Standardní integrace | Cloudflare Custom Hostnames |
|---|---|---|
| **Účel** | Automaticky vytváří DNS záznamy pro subdomény | Umožňuje vlastní (mapované) domény s SSL spravovaným Cloudflare |
| **Nejvhodnější pro** | Multisite se subdoménami | Multisite s mapovanými doménami |
| **SSL** | Řešeno samostatně | Automaticky spravováno Cloudflare |

### Nastavení Cloudflare Custom Hostnames

1. Ve svém Cloudflare dashboardu otevřete zónu pro svou hlavní doménu.
2. Přejděte na **SSL/TLS > Custom Hostnames**.
3. Přidejte fallback origin směřující na IP adresu nebo hostname vašeho serveru.
4. Pro každou zákaznickou doménu mapovanou v Ultimate Multisite přidejte v Cloudflare položku Custom Hostname. Tento krok můžete automatizovat pomocí Cloudflare API.
5. Cloudflare automaticky vydává a obnovuje TLS certifikáty pro každý vlastní hostname, jakmile DNS zákazníka směřuje na vaši síť.

Úplnou referenci API najdete v [dokumentaci Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Aktualizace terminologie
Od Ultimate Multisite v2.6.1 je tato funkce ve všech nastaveních a štítcích pluginu označována jako **Cloudflare Custom Hostnames**. Dřívější verze používaly název „Cloudflare for SaaS“, což je název základního produktu Cloudflare.
:::

## Důležité poznámky

Po nedávných aktualizacích Cloudflare je nyní wildcard proxying dostupný pro všechny zákazníky. To znamená, že standardní integrace Cloudflare DNS je pro multisite instalace se subdoménami méně zásadní než dříve, protože v Cloudflare můžete jednoduše nastavit wildcard DNS záznam.

## Řešení problémů

### Problémy s připojením API
- Ověřte, že je váš API token správný a má potřebná oprávnění
- Zkontrolujte, že je vaše Zone ID správné
- Ujistěte se, že váš Cloudflare account má potřebná oprávnění

### Subdoména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že subdoména již není přidána do Cloudflare
- Ujistěte se, že váš Cloudflare plán podporuje počet DNS záznamů, které vytváříte

### Problémy s proxyingem
- Pokud nechcete, aby subdomény byly proxované, můžete použít filtr `wu_cloudflare_should_proxy`
- Některé funkce nemusí při proxování fungovat správně (např. určité funkce administrace WordPress)
- Zvažte použití Cloudflare Page Rules pro obejití cache u administračních stránek
