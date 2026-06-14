---
title: Cloudways integrācija
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integrācija

## Īsszums
Cloudways ir pārvaldīta viltas (cloud) hostings platforma, kas ļauj jums izvietot WordPress vietnes dažādās viltu sniedzējus, piemēram DigitalOcean, AWS, Google Cloud un citus. Šī integrācija atrodas iespējama automātiskās domānu sinhronizācijas un SSL sertifikātu pārvaldības starp Ultimate Multisite un Cloudways.

## Funkcionalitātes
- Automātiskā domānu sinhronizācija
- SSL sertifikātu pārvaldība
- Atbalsts papildu domānu
- DNS validācija SSL sertifikātiem

## Prasības
Jums jādefinē šīs konstantes `wp-config.php` failā:

```php
define('WU_CLOUDWAYS_EMAIL', 'jūsu_cloudways_e-pasta');
define('WU_CLOUDWAYS_API_KEY', 'jūsu_api_kunci');
define('WU_CLOUDWAYS_SERVER_ID', 'jūsu_servera_id');
define('WU_CLOUDWAYS_APP_ID', 'jūsu_aplikācijas_id');
```

Optiāli, jūs varat definēt arī:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domānu_saraksts_kommas_starp_elementiem');
```

## Iestatīšanas instrukcijas

### 1. Saņemiet savus Cloudways API atļaujas (Credentials)

1. Loginieties uz savu Cloudways dashboardu
2. Dodieties uz "Account" > "API Keys" (Kontrole > API kļūtres)
3. Izveidiet API kluci, ja jums vēl nav
4. Kopējiet savu e-pastu un API kluci

### 2. Saņemiet savus servera un lietojuma ID

1. Savā Cloudways dashboardā dodieties uz "Servers" (Serveri)
2. Izvēlieties serveri, kurā hostēts jūsu WordPress multisite
3. Servera ID ir redzams URL adresē: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Dodieties uz "Applications" (Aplikācijas) un izvēlieties savu WordPress lietojumu
5. Aplikacijas ID ir redzams URL adresē: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Pievienojiet konstantes `wp-config.php` failā

Pievienojiet šīs konstantes savam `wp-config.php` failam:

```php
define('WU_CLOUDWAYS_EMAIL', 'jūsu cloudways e-pasta');
define('WU_CLOUDWAYS_API_KEY', 'jūsu api_klausla');
define('WU_CLOUDWAYS_SERVER_ID', 'jūsu servera ID');
define('WU_CLOUDWAYS_APP_ID', 'jūsu app_ID');
```

Ja ja, vai jums ir papildu **ārēji** domāni (neklāsties jūsu multisite tīkliem), kas vienmēr jāiekļauj Cloudways alias listā:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Neiekļaujet savu tīkla wildcard domānu
**Neievadiet** `*.jūsu-tīkla.com` (vai jebkuru jūsu tīkla subdomēna shēmu) `WU_CLOUDWAYS_EXTRA_DOMAINS`-ā. Redziet [Svarīgi — wildcard SSL problēma](#important--wildcard-ssl-pitfall) lai saprastu, kāpēc tas novērš per-tenant SSL sertifikātu izdošanu.
:::

### 4. Iespējot integrāciju

1. Savuk WordPress admina, dodieties uz Ultimate Multisite > Settings (Iestatījumi)
2. Navigējieties uz tabulu "Domain Mapping" (Domānu mapi)
3. Scrolliet lejā, lai atrastu "Host Integrations" (Host integrācijas)
4. Iespējiet Cloudways integrāciju
5. Nospressiet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas

### Domānu sinkronizēšana

Kad domāns tiek mapiet Ultimate Multisite:

1. Integrācija atrauc visus pašreiz mapietie domānos
2. Tas pievieno jauno domānu sarakstam (kopējot www versiju, ja tas ir jāievada)
3. Tas nosūtīja pilnu sarakstu Cloudways API cauri
4. Cloudways atjaunina jūsu lietojumējo aplika alias domānos

Piezīme: Cloudways API prasa sūtīt pilnu domānu sarakstu katru reizi, ne tikai pievienot vai izņemt viens domānu.

### SSL sertifikātu pārvaldība

Pēc domānu sinkronizēšanas:

1. Integrācija pārbauda, kādi domāni ir ar pareizi DNS ierakstiem, kas punkti jūsu serverim
2. Tas sūta pieprasījumu Cloudways, lai instalētu Let's Encrypt SSL sertifikātu šiem domāniem
3. Cloudways veic SSL sertifikāta izdošanu un instalēšanu

Integrācija vienmēr prasa **standartus** (neveidrojamus) Let's Encrypt sertifikātu no Cloudways. Ja `WU_CLOUDWAYS_EXTRA_DOMAINS` iestatas wildcard atkarību, pirmais `*.` tiek izņemts pirms SSL pieprasījumam — pašas wildcard atkarības šo integrāciju neinstalē nekad. Lai izmantotu wildcard sertifikātu Cloudways, jums būtu jāinstalē tas maniski, bet to darīšana blokē Let's Encrypt sertifikātu izdošanu par katru domānu (skatīt apakšpusēm).

## Papildu domāni

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` ļauj jums noteikt papildu **ārējus** domānu, kas vienmēr jātur atkarībā Cloudways lietojuma alias listā. Izmantojiet to šādi:

- Ārējās domāni, ko nepaliek Ultimate Multisite (piemēram, atsevišķa mārketinga vietne, kas dalās ar to pašu Cloudways lietojumu).
- Parkētas vai staging domāni, kurus vēlaties turēt lietojuma alias listā.

**Neizmantojiet** šo konstantu savas tīkla subdomānu wildcard atkarībām (piemēram, `*.your-network.com`). Skatīt apakšpusēm wildcard SSL problēmu.

## Savieta Cloudways SSL konfigurācija Ultimate Multisite tīklamai

Parasti kļūda, kad sekojam Cloudways defaultu iestatījumus, ir pievienot wildcard atkarību, piemēram `*.your-network.com`, `WU_CLOUDWAYS_EXTRA_DOMAINS` vai maniski instalēt Cloudways wildcard SSL sertifikātu šai wildcard atkarībai.

**Ja to darāt, Cloudways neuzdo Let's Encrypt sertifikātus par katru lietotāju domāniem, ko Ultimate Multisite mapē.** Cloudways katru reizi aizstāj aktīvo SSL sertifikātu lietojumā, un jau eksistējošais wildcard sertifikāts lietojumā blokē Let's Encrypt sertifikātu izdošanu par domānu, kur uz to atkarīga integrācija atkar.

1. In lietotājs **SSL sertifikāta** tabā Cloudways lietojumā instalējiet **standart Let's Encrypt sertifikātu**, kas attiecas tikai uz `your-network.com` un `www.your-network.com` — **nevis** vārdslēju (wildcard).
2. Neievadiet `*.your-network.com` (vai jebkuru savas tīkla subdomēnu shēmu) `WU_CLOUDWAYS_EXTRA_DOMAINS` i variablī. Rezervējiet šo konstanšu vērtību tikai **ārējiem** domēniem.
3. Izveidojiet atsevišķu lietotāja subdomēnu vārdslēju (wildcard) tikai **DNS** līmenī ( `A` rekurdants, kas uzskata `*.your-network.com` jūsu Cloudways servera IP adresi), lai subdomēni varētu atskaņoties. SSL sertifikāti individuāli mapejām lietotajiem domēniem tiek izdošti automātiski integrācijas veidota Let's Encrypt ar šo veicinājumu.

Ja jūsu lietotāju personālajos domēnos nav SSL, pārbaudiet Cloudways SSL tabu. Ja tur ir aktīvs vārdslēju sertifikāts, izņemiet to, izdoši standart Let's Encrypt sertifikātu tikai galvenajai tīkla domēnei un izņemiet jebkuru vārdslēju ienriets no `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tad atspējiet domēnu mapejumu (vai gaidiet nākamu) un integrācija sāk novērtēt sertifikātu individuāli lietotajiem domēniem.

## Kļūdu likums

### API savienojuma problēmas
- Pārbaudiet, vai jūsu e-pasta adrese un API kluāvs ir pareizi ievadīti
- Pārbaudiet, vai jūsu servera un lietojuma ID ir pareizi
- Nodrošiniet, ka jūsu Cloudways kontam ir nepieciešamās atļaujas

### Problemas ar SSL sertifikāti

- Cloudways prasa, ka domēniem jābūt veiksmīgi DNS ierakstiem, kas norāda uz jūsu serveri pirms SSL sertifikātu izdošanas.
- Integrācija pārbauda DNS ierakstus pirms lūdzot SSL sertifikāt.
- Ja SSL sertifikāti neizdojās, pārliecinieties, ka jūsu domēni ir pareizi norādīti uz jūsu servera IP adresi.
- **Vai lietotāji (per-tenant) custom domēni nav ar SSL?** Pārbaudiet Cloudways lietojumkārtas (application) "SSL Certificate" (SSL sertifikāta) tabu. Ja aktīvs ir viltotais sertifikāts (manusāli instalēts vai kas apgrāj `*.your-network.com`), Cloudways neizdo Let's Encrypt sertifikāt individuāli mapejušajiem custom domēniem. Atstājiet to vietā standartizētu Let's Encrypt sertifikātu, kas apgrāj tikai galveno tīkla domēnu (`your-network.com`, `www.your-network.com`) un izņemiet jebkuru viltotās ierakstu no `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tad atspējiet domēna mapešanu (vai gaidiet nākamu) un integrācija lūdz sertifikāt individuāli domēniem.

### Domēna nav pievienota

- Pārbaudiet Ultimate Multisite logus jebkurām kļūdas ziņojumiem.
- Noteikiet, ka domēna vēl nav pievienota Cloudways.
- Nodrošiniet, ka jūsu Cloudways plāns atbilst todomēnu skaitli, ko jūs pievienojat.
