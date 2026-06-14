---
title: Integrácia Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrácia s Cloudflare

## Prehľad
Cloudflare je špičkový poskytovateľ siete pre doručovanie obsahu (CDN) a zabezpečenia, ktorý pomáha chrániť a rýchlejšie načítavať webové stránky. Táto integrácia umožňuje automatické správanie domény medzi Ultimate Multisite a Cloudflare, najmä pri inštalácii multisite na poddoménach.

## Funkcionality
- Automatické vytváranie poddomenenov v Cloudflare
- Podpora pre proxyované poddomeneny
- Správa záznamov DNS
- Vylepšený zobrazenie záznamov DNS v admin paneli Ultimate Multisite

## Požiadavky
Nasledujúce konconstanty musíte definovať v súbore `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Pokyny na konfiguráciu

### 1. Získanie svojho API kľúča Cloudflare

1. Prihláste sa do svojej paneli Cloudflare
2. Prejdite do sekcie "My Profile" (kliknite na svoju e-mailovú adresu v pravom rohu)
3. Vyberte si "API Tokens" z menu
4. Vytvorte nový API token s nasledujúcimi povoleniami:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Skopírujte svoj API token

### 2. Získanie ID svojej domény (Zone ID)

1. V paneli Cloudflare vyberte domén, ktorú chcete použiť
2. ID domény je viditeľné v záložke "Overview", v pravom laterálnom paneli pod sekciou "API"
3. Skopírujte ID domény (Zone ID)

### 3. Pridanie kon constantov do wp-config.php

Pridajte nasledujúce konconstanty do svojho súboru `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktivácia integrácie

1. V admin paneli WordPress prejdite do Ultimate Multisite > Settings (Nastavenia)
2. Prejdite na záložku "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu Cloudflare
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje

### Správa poddomenenov

Keď sa vytvorí nová stránka v inštalácii multisite na poddoménach:

1. Integrácia posiela požiadavku na API Cloudflare, aby bola pridaná záznam CNAME pre poddoménu.
2. Poddoména je štandardne nastavená na proxyovanie cez Cloudflare (to sa dá zmeniť pomocou filtrov).
3. Keď je webová stránka odstránená, integrácia odstráni poddoménu z Cloudflare.

### Zobrazenie DNS záznamov

Integrácia zlepšuje zobrazenie DNS záznamov v admin panel Ultimate Multisite tým, že:

1. Pripomína DNS záznamy priamo z Cloudflare
2. Zobrazuje, či sú záznamy proxyované alebo nie
3. Ukazuje extra informácie o DNS záznamoch

## Vlastné hostné mená Cloudflare (Cloudflare Custom Hostnames)

**Vlastné hostné mená Cloudflare** (prave sa nazývali "Cloudflare for SaaS") je funkcia Cloudflare, ktorá umožňuje vašim klientom používať vlastné domény s SSL na vašej multisite sieti. Je to odporúčaný prístup pre multisite instalácie mapované na doménu, ktoré používajú Cloudflare, pretože Cloudflare automaticky spravuje vydávanie a obnovu SSL certifikátov pre každú vlastnú doménu.

### Ako sa to líši od štandardnej integrácie Cloudflare

| | Štandardná integrácia | Vlastné hostné mená Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **Účel** | Automaticky vytvára DNS záznamy pre poddoménu | Umožňuje vlastné (mapované) domény s SSL spravovaným Cloudflare |
| **Ideálne pre** | Multisite na poddoménach | Multisite mapované na domény |
| **SSL** | Pravidelne správanie samostatne | Automaticky spravované Cloudflare |

### Konfigurácia vlastných hostných mení Cloudflare

1. V svojom dashboardu Cloudflare otvoríte zónu pre vašu hlavnú doménu.
2. Prejdite do **SSL/TLS > Custom Hostnames**.
3. Pridajte origin fallback, ktorý ukazuje IP alebo hostname vášho servera.
4. Pre každý zákaznícky doménu mapovaný v Ultimate Multisite pridajte záznam Custom Hostname v Cloudflare. Tento krok môžete automatizovať pomocou Cloudflare API.
5. Cloudflare si sám vydáva a obnovuje TLS certifikáty pre každý custom hostname, hneď ako je DNS zákazníka smerovaný na vašu sieť.

Pre úplnú referenciu k API si pozrite do [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Aktualizácia terminológie
Od verzie Ultimate Multisite v2.6.1 sa táto funkcia volá **Cloudflare Custom Hostnames** vo všetkých nastaveniach a označeních pluginu. Vších verziách sa používal názov "Cloudflare for SaaS", ktorý je základným názvom Cloudflare produktu.
:::

## Dôležité poznámky

Od najnovších aktualizácií Cloudflare je teraz k dispozícii wildcard proxying pre všetkých zákazníkov. To znamená, že štandardná integrácia DNS Cloudflare je pre inštalácie multisite poddoméniek menej kritická ako v minulosti, pretože môžete jednoducho nastaviť wildcard záznam DNS v Cloudflare.

## Řešenie problémov

### Problémy s pripojením k API
- Skontrolujte, či je váš API token správny a má potrebné povolenia
- Skontrolujte, či je váš Zone ID správny
- Uistite sa, že váš účet Cloudflare má potrebné povolenia

### Poddoména nebola pridaná
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy
- Overte, či poddoména nie bola už pridaná do Cloudflare
- Uistite sa, že váš plán Cloudflare podporuje počet záznamov DNS, ktoré vytvárate

### Problémy s proxy

- Ak nechcete, aby poddomény boli proxyované, môžete použiť filtro `wu_cloudflare_should_proxy`.
- Niektoré funkcie sa môžu chovať nečistenia pri proxyovaní (napr. určité funkcie administrácie WordPressu).
- Predpokladajte si, že Cloudflare Page Rules môžete použiť na obejście cache pre admin stránky.
