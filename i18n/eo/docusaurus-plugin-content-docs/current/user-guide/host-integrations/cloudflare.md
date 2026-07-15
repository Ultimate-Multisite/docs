---
title: Integrado Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integrazione

## Rezumi {#overview}
Cloudflare estas la lidera konten-deliĝo (CDN) kaj sekureco-providanto, kiu helpas protekti kaj akceleriĝi sitiojn. Ĉi tiu integriĝo permesas aŭtomatan domen-menĝon inter Ultimate Multisite kaj Cloudflare, partikile por instaliloj de multisitoj por subdomajno.

## Funkcioj {#features}
- Aŭtomata kreo de subdomajnoj en Cloudflare
- Subdomajno proxita suporto
- DNS-registroj demanĝado
- Plibonigita prezentado de DNS-registroj en la admina panela de Ultimate Multisite

## Requisitoj {#requirements}
La seguenti konstantaĵoj devas esti definita en via `wp-config.php` fakto:

```php
define('WU_CLOUDFLARE_API_KEY', 'via_api_clavo');
define('WU_CLOUDFLARE_ZONE_ID', 'via_zona_id');
```

## Instrukoj por Montado {#setup-instructions}

### 1. Akcepte Vian Cloudflare API-Clavon {#1-get-your-cloudflare-api-key}

1. Logi-ĝi en via Cloudflare panelo
2. Aliri "My Profile" (klaki sur vian elektronika en la malalta dreta angulo)
3. Selekti "API Tokens" el la menuko
4. Krei novan API-clavon kun la seguenti permesoj:
   - Zone.Zone: Legi
   - Zone.DNS: Modifi
5. Kopii vian API-clavon

### 2. Akcepte Vian Zona_ID {#2-get-your-zone-id}

1. En via Cloudflare panelo, selekti la domenon, kiun vi volas uzi
2. La Zona\_ID estas vidita en la tabelo "Overview", en la dreta flanbo de "API"
3. Kopii la Zona\_ID

### 3. Aggivi Konstantaĵojn al wp-config.php {#3-add-constants-to-wp-configphp}

Aggivi la seguenti konstantaĵoj al via `wp-config.php` fakto:

```php
define('WU_CLOUDFLARE_API_KEY', 'via_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'via_zone_id');
```

### 4. Aktivado de la Integriĝo {#4-enable-the-integration}

1. En via WordPress admina panelo, aliri Ultimate Multisite > Settings
2. Navigi al la tabelo "Domain Mapping" (Domeno-Mappado)
3. Scrolli nedole en "Host Integrations" (Hosta-Integriĝoj)
4. Aktivizi la Cloudflare integriĝon
5. Klaki sur "Save Changes" (Salvi Modifojn)

## Kiel Ĝi Funkcias {#how-it-works}

### Subdomajno-Menĝado {#subdomain-management}

Kiam nova sitio estas kreita en instalilo de multisitoj por subdomajnoj:

1. La integracio sendas petando al API de Cloudflare por la adición d'un registro CNAME para el subdomeni.
2. El subdomeni estas konfigurita por default por proksio per Cloudflare (esto puede cambiari per filtriloj).
3. Kiam un sitio estas deletita, la integracio eliminis el subdomeni de Cloudflare.

### Montro de Registros DNS {#dns-record-display}

La integracio plibori la montro de registroj DNS en la admin de Ultimate Multisite per:

1. Pibori registroj DNS direktamente de Cloudflare
2. Montri se estas proxita aŭ ne estas
3. Montri pli da informojn pri registroj DNS

## Nomenoj Personalisaj de Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Nomenoj Personalisaj de Cloudflare** (predanke nomita "Cloudflare for SaaS") estas funkcio de Cloudflare kiu permesas al viaj klientoj uzi siajn domajn kun SSL sur via multisite retoj. Ĝi estas la rekomenda alproach por domajno-mapitaj multisite instalacioj, kiuj uzas Cloudflare, ĉar Cloudflare administra la emitadon kaj renovadon de SSL-sertifikatoj por ĉiu personala domeno aŭtomate.

### Kiel ĝi diferencas de la standarda integracio {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integracio | Nomenoj Personalisaj de Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **Cel** | Aŭtomate kreas DNS-registroj por subdominoj | Permesas personalajn (mapitajn) domajn kun SSL administrita per Cloudflare |
| **Mezaj por** | Subdomino multisite | Domajno-mapitaj multisite |
| **SSL** | Administriita aparte | Administriita aŭtomate de Cloudflare |

### Montado de Nomenoj Personalisaj de Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. Dans la viannda de Cloudflare, ouvri la zone pou la viannda ĉe viaja domeno.
2. Al **SSL/TLS > Custom Hostnames** (Nomoj Hospitoj Personalia).
3. Apli a alternan origino (fallback origin) ki ponas al la IP aŭ nomo de via servero.
4. Por ĉiu kliento domeno mapita en Ultimate Multisite, pli apli a enskribon Custom Hostname en Cloudflare. Vi povas automatigi ĉi ti paŝon uzante la Cloudflare API.
5. Cloudflare emitis kaj renove TLS-sertifikojn por ĉiu custom hostname aŭtomate tial ke la DNS de la kliento estas ponita al via retano.

Por kompleta referenco de la API, vidi [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Modernigo de terminologio
Kao ĉe Ultimate Multisite v2.6.1, ĉi tiu funkcio estas nomita **Cloudflare Custom Hostnames** en ĉiuj pluginaj konfiguracioj kaj etiketoj. Antaŭaj versioj uzis la nomon "Cloudflare for SaaS", kiu estas la baziga produkta nomo de Cloudflare.
:::

## Importanta Notoj {#important-notes}

Kao ĉe la recentaj modernizoj de Cloudflare, wildcard proxying (wildcard-proksado) estas nun disponibile por ĉiuj klientoj. Tio signifas, ke la standarda Cloudflare DNS integriĝo estas pli mal kritika por subdomain multisite instalacioj ol antaŭe estis, ĉar vi povas simple montri unuan wildcard DNS-registron en Cloudflare.

## Problemofankto (Troubleshooting) {#troubleshooting}

### Problemo kun API konekto {#api-connection-issues}
- Verifiĝu, ke via API token estas ĝusta kaj havas la necesajn permesojn.
- Kontrolu, ke via Zone ID estas ĝusta.
- Assuringu, ke via Cloudflare konto havas la necesajn permesojn.

### Subdomeno ne adata {#subdomain-not-added}
- Kontrolu la logojn de Ultimate Multisite por ĉian eraro mesaĝoj.
- Verifiu, ke la subdomeno ne estas déjà adata en Cloudflare.
- Assuringu, ke via Cloudflare plan suportas la nancojn de DNS-registroj, kiujn vi kreas.

### Problemajn pri Proxying {#proxying-issues}

- Se vi ne volas, ke subdomena ne estu proxyati, vi povas uzi la filtru `wu_cloudflare_should_proxy`.
- Diversaj funkcioj ne povas fari ĝin bone, se ili estas proxitat (ekz., certaj funkcioj de WordPress admin).
- Konsideru uzi Cloudflare's Page Rules, por eliri la cache por admin pagoj.
