---
title: Integrace Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integrace s Cloudflare

## Přehled
Cloudflare je přední síť pro doručování obsahu (CDN) a poskytovatel zabezpečení, který pomáhá chránit a zrychlovat webové stránky. Tato integrace umožňuje automatickou správu domén mezi Ultimate Multisite a Cloudflare, zejména pro multisite instalace se subdoménami.

## Funkce
- Automatické vytváření subdomén v Cloudflare
- Podpora proxy pro subdomény
- Správa DNS záznamů
- Vylepšené zobrazení DNS záznamů v administraci Ultimate Multisite

## Požadavky
V souboru `wp-config.php` musí být definovány následující konstanty:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Návod k nastavení

### 1. Získání API klíče Cloudflare

1. Přihlaste se do svého Cloudflare dashboardu
2. Přejděte na „My Profile" (klikněte na svůj e-mail v pravém horním rohu)
3. V menu vyberte „API Tokens"
4. Vytvořte nový API token s následujícími oprávněními:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Zkopírujte svůj API token

### 2. Získání Zone ID

1. Ve svém Cloudflare dashboardu vyberte doménu, kterou chcete použít
2. Zone ID najdete na záložce „Overview" v pravém postranním panelu pod „API"
3. Zkopírujte Zone ID

### 3. Přidání konstant do wp-config.php

Do souboru `wp-config.php` přidejte následující konstanty:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktivace integrace

1. V administraci WordPress přejděte na Ultimate Multisite > Settings
2. Přejděte na záložku „Domain Mapping"
3. Sjeďte dolů k sekci „Host Integrations"
4. Aktivujte integraci s Cloudflare
5. Klikněte na „Save Changes"

## Jak to funguje

### Správa subdomén

Když je vytvořen nový web v multisite instalaci se subdoménami:

1. Integrace odešle požadavek na Cloudflare API pro přidání CNAME záznamu pro subdoménu
2. Subdoména je ve výchozím nastavení nakonfigurována tak, aby procházela přes proxy Cloudflare (toto lze změnit pomocí filtrů)
3. Když je web smazán, integrace odstraní subdoménu z Cloudflare

### Zobrazení DNS záznamů

Integrace vylepšuje zobrazení DNS záznamů v administraci Ultimate Multisite tím, že:

1. Načítá DNS záznamy přímo z Cloudflare
2. Zobrazuje, zda jsou záznamy proxované či nikoliv
3. Ukazuje další informace o DNS záznamech

## Důležité poznámky

Od nedávných aktualizací Cloudflare je wildcard proxy dostupná pro všechny zákazníky. To znamená, že integrace s Cloudflare je pro multisite instalace se subdoménami méně kritická než dříve, protože můžete jednoduše nastavit wildcard DNS záznam v Cloudflare.

## Řešení problémů

### Problémy s připojením k API
- Ověřte, že váš API token je správný a má potřebná oprávnění
- Zkontrolujte, zda je vaše Zone ID správné
- Ujistěte se, že váš Cloudflare účet má potřebná oprávnění

### Subdoména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že subdoména ještě není v Cloudflare přidána
- Ujistěte se, že váš Cloudflare tarif podporuje počet DNS záznamů, které vytváříte

### Problémy s proxy
- Pokud nechcete, aby subdomény procházely přes proxy, můžete použít filtr `wu_cloudflare_should_proxy`
- Některé funkce nemusí při použití proxy fungovat správně (např. některé funkce administrace WordPress)
- Zvažte použití Cloudflare Page Rules pro obejití cache u administračních stránek
