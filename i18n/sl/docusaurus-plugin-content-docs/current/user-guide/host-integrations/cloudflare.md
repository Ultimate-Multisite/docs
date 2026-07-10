---
title: Integracija Cloudflareja
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integracija z Cloudflare {#cloudflare-integration}

## Pregled {#overview}
Cloudflare je vodilna omrežja za dostavo vsebine (CDN) in zagotavlja varnost, ki pomaga varovati in skrivati spletne strani. Ta integracija omogoča avtomatizirano upravljanje domena med Ultimate Multisite in Cloudflare, zlasti pri nastavitvah multisite na poddomene.

## Funkcionalnosti {#features}
- Avtomatizirana kreacija poddomen v Cloudflarju
- Podpora za prenašanje (proxy) poddomen
- Upravljanje registrov DNS
- Obranjen prikaz registrov DNS v admin panelu Ultimate Multisite

## Zahtevi {#requirements}
Slede konstante morate definirati v svojem datoteki `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'vaš_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'vaš_zone_id');
```

## Navodila za nastavitve {#setup-instructions}

### 1. Dobite svoj Cloudflare API ključ {#1-get-your-cloudflare-api-key}

1. Pri logiranje na vaš Cloudflare dashboard
2. Pojdite na "My Profile" (kliknite na svojo e-poštno adresu v zgornjem desnem kotu)
3. Izberite "API Tokens" iz menija
4. Kreirajte novi API token z naslednjimi dovoljenostmi:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopirajte svoj API token

### 2. Dobite svoj Zone ID {#2-get-your-zone-id}

1. Na vašem Cloudflare dashboard, izberite domen, ki ga želite uporabiti
2. Zone ID je vidno v tabu "Overview", v desnem panelu pod "API"
3. Kopirajte Zone ID

### 3. Dodajte konstante v wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte naslednje konstante v datoteko `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'vaš_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'vaš_zone_id');
```

### 4. Omogočite integracijo {#4-enable-the-integration}

1. V admin panelu WordPress, pojadite na Ultimate Multisite > Settings
2. Navigirajte do tabe "Domain Mapping" (Mapiranje domen)
3. Skrolajte dolje do "Host Integrations" (Integracije hostov)
4. Omogočite integracijo Cloudflare
5. Kliknite na "Save Changes" (Shrani spremembe)

## Kako to deluje {#how-it-works}

### Upravljanje poddomen {#subdomain-management}

Ko se ustavi nova stran v nastavitvah multisite na poddomeni:

1. Integracija pošlje zahtevo API-ju Cloudflare za dodajanje CNAME registra za poddomeno.
2. Poddomeno je po defaultu konfigurirano za preusmerjanje (proxy) preko Cloudflare (to lahko spremenite z filteri).
3. Ko se stran izbriše, integracija bo poddomeno odstranila iz Cloudflare.

### Prikaz DNS registra {#dns-record-display}

Integracija obogati prikaz DNS registra v admin panel Ultimate Multisite tako:

1. Direktno vzeta DNS registre iz Cloudflare-ja
2. Prikazuje, ali so registri preusmerjeni (proxied) ali ne
3. Prikazuje dodatne informacije o DNS registrih

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (prejšnje imenovano "Cloudflare for SaaS") je funkcija Cloudflare-ja ki omogoča vašim strankam uporabo lastnih domen z SSL na vaših multisite mreži. To je priporočljiv pristop za multisite instalacije, povezane s domenami, ki uporabljajo Cloudflare, ker Cloudflare sam upravlja izdajanjem in obnovo SSL sertifikatov za vsako prilagojeno domen.

### Kako se razlikuje od standardne integracije Cloudflare-ja {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standardna integracija | Cloudflare Custom Hostnames |
|---|---|---|
| **Namena** | Avtomatsko ustvarjanje DNS registrov za poddomena | Omogoča prilagojene (mapirane) domene z SSL, ki jih upravlja Cloudflare |
| **Najboljša za** | Multisite na poddomeni | Multisite povezane s domenami |
| **SSL** | Upravljeno ločeno | Avtomatsko upravljano s strani Cloudflare-ja |

### Konfiguracija Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. V svojem Cloudflare dashboardu odprite domen (zone) za vaš glavni domen.
2. Pojdite na **SSL/TLS > Custom Hostnames**.
3. Dodajte fallback origin, ki usmerja na IP ali hostname vaše serverne naprave.
4. Za vsak stranski domen, ki ga je mapiran v Ultimate Multisite, dodajte v Cloudflare vnos (entry) z custom hostnem imenom. To lahko ta korak automatizirate z uporabo Cloudflare API-ja.
5. Cloudflare sam izdanja in obnovlja TLS sertifikate za vsako custom hostname avtomatsko, ko je DNS stranke stranke usmerjen na vašo mrežo.

Za celoten referenčni seznam API-ja se ogledajte v [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Obnovitev terminologije
Od verzije Ultimate Multisite v2.6.1 je ta funkcija vseh nastavitvah in oznak pluginov označena kot **Cloudflare Custom Hostnames**. Prejšnje verzije so uporablale ime "Cloudflare for SaaS", ki je podstresni produkt Cloudflare.
:::

## Pomembne opombe {#important-notes}

Od zadnjih aktualizacij Cloudflare je zdaj na voljo tudi wildcard proxying za vse stranke. To pomeni, da je standardna integracija DNS-a Cloudflare manj ključna pri nastavitvah multisite z poddomeni kot prej, ker lahko preprosto postavite wildcard DNS zapis v Cloudflare.

## Reševanje težav {#troubleshooting}

### Problemi z povezavo API {#api-connection-issues}
- Preverite, da je vaš API token pravilno in ima potrebne dovoljenja
- Preverite, da je vaš Zone ID pravilno
- Preverite, da ima vaš Cloudflare račun potrebna dovoljenja

### Poddomeni ni dodan {#subdomain-not-added}
- Preverite log Ultimate Multisite za kakršne koli sporočila o napaki
- Preverite, da poddomeni ni že dodan v Cloudflare
- Preverite, da vaš Cloudflare plan podpira število DNS zapisov, ki jih ustvarjate

### Problemi z proxyjem {#proxying-issues}
- Če ne želite, da poddomene bili v prometu (proxied), lahko uporabite filter `wu_cloudflare_should_proxy`.
- Nekateri funkcije se morda ne bodo pravilno delale, če so v prometu (npr. določene WordPress admin funkcije).
- Razmislite o uporabi Cloudflare Page Rules za prehod preko cacheja za admin strani.
