---
title: Integrimi me Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrimi me Cloudflare {#cloudflare-integration}

## Përmbledhje {#overview}
Cloudflare është një rrjet i lider për delivery të përmbajtjes (CDN) dhe ofrues sigurie që ndihmon në mbrojtjen dhe shpejtueshmërinë e faqeve. Kjo integrim lejon menaxhimin automatik të domenit midis Ultimate Multisite dhe Cloudflare, veçanërisht për instalimet multisite me subdomain.

## Karakteristikat {#features}
- Krijimi automatik i subdomain në Cloudflare
- Mbështetja për subdomain me proxy (Proxied subdomain support)
- Menaxhimi i regjistrave DNS (DNS record management)
- Tëparje e përmirësuar të regjistrave DNS në adminin Ultimate Multisite

## Kërkesat {#requirements}
Këto konstanta duhet të definen në skedarin tuaj `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'ky_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'ky_zone_id');
```

## Instruktime për Konfigurim {#setup-instructions}

### 1. Merrni Klientin e API-së Cloudflare (Cloudflare API Key) {#1-get-your-cloudflare-api-key}

1. Hapni dashboard-in tuaj të Cloudflare
2. Shkoni te "My Profile" (klikoni në adresën tuaj email në këndin e djathtë të sipërm)
3. Zgjidhni "API Tokens" nga menjuja
4. Krijoni një token API të ri me këto leje:
   - Zone.Zone: Read (Lexim)
   - Zone.DNS: Edit (Redaktim)
5. Kopjoni tokenin tuaj API

### 2. Merrni ID-në e Zonës (Zone ID) {#2-get-your-zone-id}

1. Në dashboard-in tuaj të Cloudflare, zgjidhni domenit që dëshironi të përdorni
2. ID-ja e Zonës është i dukshëm në tabin "Overview", në panelin antdhyrë në të djathtë nën "API"
3. Kopjoni ID-në e Zonës

### 3. Shtoni Konstanta në wp-config.php {#3-add-constants-to-wp-configphp}

Shtoni këto konstante në skedarin tuaj `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'ky_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'ky_zone_id');
```

### 4. Aktivizoni Integrimin {#4-enable-the-integration}

1. Në adminin tuaj të WordPress-it, shkoni te Ultimate Multisite > Settings (Cilësimet)
2. Navigjoni te tabja "Domain Mapping" (Mapele Domeni)
3. Scrolloni poshtë te "Host Integrations" (Integrimet e Host-it)
4. Aktivizoni integrimin Cloudflare
5. Klikoni te "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

### Menaxhimi i Subdomain-eve {#subdomain-management}

Kur krijohet një faqe e re në një instalim multisite me subdomain:

1. Integracioni dërgon një kërkesë në API-n e Cloudflare për të shtuar një regjistër CNAME për ndër-domenin (subdomain).
2. Ndër-domeni është i konfiguruar të provokojë përmes Cloudflare si parë (kjo mund të ndrysohet me filtere).
3. Kur një faqe fshihet, integracioni do të hiqë ndër-domenien nga Cloudflare.

### Të Përdorimi i Regjistrit DNS {#dns-record-display}

Integracioni përmirëson shfaqjen e regjistrave DNS në adminin Ultimate Multisite duke bërë këto gjëra:

1. Merrje direkte të regjistrave DNS nga Cloudflare
2. Tregon nëse regjistrat janë provokues (proxied) apo jo
3. Tregon informacion shtesë rreth regjistrave DNS

## Hostname-t Personalizuar Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (i cili më parë quhej "Cloudflare for SaaS") është një veçori e Cloudflare që lejon klientëve tuaj të përdorin domene të tyre me SSL në rrjetin tuaj multisite. Është arsimi i rekomanduar për instalimet multisite që janë mapuara me domen dhe që përdorin Cloudflare, sepse Cloudflare menaxhon automatikisht dhënien dhe rinovimin e sertifikatës SSL për çdo domene personalizuar.

### Si ndryshon nga integracioni standard i Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integracioni Standard | Hostname-t Personalizuar Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **Qëllimi** | Krijon automatikisht regjistrat DNS për ndër-domene (subdomains) | Lejon domene të personalizuara (mapuara) me SSL menaxhu nga Cloudflare |
| **Për çfarë është më i mirë** | Multisite me ndër-ndomene (subdomain multisite) | Multisite mapuar me domen |
| **SSL** | Menaxhohet veçmas | Menaxhohet automatikisht nga Cloudflare |

### Konfigurimi i Hostname-ve Personalizuar Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. Në dashboardin tuaj të Cloudflare, hap zona për domenit tuaj kryesor.
2. Shko te **SSL/TLS > Custom Hostnames**.
3. Shtoni një origin rezervë (fallback origin) që i drejton adresës IP ose emrit të serverit tuaj.
4. Për çdo domene klient që është mapuar në Ultimate Multisite, shtoni një entry "Custom Hostname" në Cloudflare. Mund të automatizoni këtë hap duke përdorur Cloudflare API.
5. Cloudflare lëshon dhe rikuperon certifikatat TLS për çdo custom hostname automatikisht pasi DNS-i i klientit i drejtohet rrjetit tuaj.

Për referencën e plotë të API-së, shiko [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Përditësim i terminologjis
Nga versionit Ultimate Multisite v2.6.1, ky veçori quhet **Cloudflare Custom Hostnames** në të gjitha cilësimet dhe etiketimet e pluginit. Versionet më të vjetra përdornin emrin "Cloudflare for SaaS", që është emri i produktit bazë Cloudflare-it.
:::

## Shënime Importante {#important-notes}

Nga përditësimeve së fundit të Cloudflare, proxyja wildcard (wildcard proxying) është e disponueshme për të gjithë klientët. Kjo do të thotë që integrimi standard i DNS-së në Cloudflare nuk është aq kritik për instalimet multisite të subdomain-eve sa më parë, sepse mund ta vendosni thjesht një regjistër DNS wildcard në Cloudflare.

## Zgjidhja e Problemeve (Troubleshooting) {#troubleshooting}

### Probleme me Lidhurin me API {#api-connection-issues}
- Verifikoni që tokeni i API juaj është i saktë dhe ka të gjitha lejet e nevojshme.
- Kontrolloni që ID-ja e Zonës tuaj është e saktë.
- Sigurohuni që llogaria juaj në Cloudflare ka të gjitha lejet e nevojshme.

### Subdomeni Nuk Shtohet {#subdomain-not-added}
- Kontrolloni logjet e Ultimate Multisite për çdo mesazh gabimi.
- Verifikoni që subdomeni nuk është shtoar tashmë në Cloudflare.
- Sigurohuni që plani juaj në Cloudflare mbështet numrin e regjistrave DNS që po krijoni.

### Problemet me Proxy {#proxying-issues}

- Nëse nuk dëshiron që subdomenet të proxyrohen, mund të përdorosh filterin `wu_cloudflare_should_proxy`.
- Disa funksione mund të mos funksionojnë siç duhet kur janë në proxy (p.sh., disa funksione të adminit të WordPress).
- Konsidero të përdorësh Page Rules e Cloudflare për të anashkaluar (bypass) keshin për faqet e adminit.
