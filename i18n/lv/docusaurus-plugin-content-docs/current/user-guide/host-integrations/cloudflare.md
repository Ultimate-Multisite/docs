---
title: Cloudflare integrācija
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integrācija {#cloudflare-integration}

## Īskatsauce {#overview}
Cloudflare ir galvenais satura sniegšanas tīkls (CDN) un drošības pakalpojums, kas palīdz aizsargāt un ātrāk strādāt vietnes. Šī integrācija ļauj automātiskai domēna pārvaldīšanai starp Ultimate Multisite un Cloudflare, īpaši subdomain multisite instalācijās.

## Funkcionalitātes {#features}
- Automātiska subdomainu izveide Cloudflare.
- Proxied subdomainu atbalsts.
- DNS reģistru pārvaldība.
- Uzlabotas DNS reģistru attēlošana Ultimate Multisite admin panelī.

## Prasības {#requirements}
Jums jādefinē šādas konstantes savā `wp-config.php` failā:

```php
define('WU_CLOUDFLARE_API_KEY', 'jūsu_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'jūsu_zone_id');
```

## Iestatīšanas instrukcijas {#setup-instructions}

### 1. Saņemiet savu Cloudflare API kluātri (API Key) {#1-get-your-cloudflare-api-key}

1. Loginieties uz savu Cloudflare dashboardu.
2. Dodieties uz "My Profile" (klikšķiniet uz savas e-pasta adresi augšvecīnā).
3. Izvēlieties "API Tokens" menu no opciju saraksta.
4. Izveidiet jaunu API kluātri ar šādi iestatījumus:
   - Zone.Zone: Read (Lasīt)
   - Zone.DNS: Edit (Rediģēt)
5. Kopējiet savu API kluātri.

### 2. Saņemiet savu Zone ID {#2-get-your-zone-id}

1. Savā Cloudflare dashboardā izvēlieties domēnu, ko vēlaties izmantot.
2. Zone ID ir redzams "Overview" (Izskats) tabā, labajā pusē ap "API" sadaļas zem "Zone ID".
3. Kopējiet Zone ID.

### 3. Pievienojiet konstantes `wp-config.php` failā {#3-add-constants-to-wp-configphp}

Pievienojiet šo konstantes savam `wp-config.php` failam:

```php
define('WU_CLOUDFLARE_API_KEY', 'jūsu_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'jūsu_zone_id');
```

### 4. Iespējojiet integrāciju {#4-enable-the-integration}

1. Savā WordPress admin panelī dodieties uz Ultimate Multisite > Settings (Iestatījumi).
2. Navigējieties uz "Domain Mapping" (Domēnu mapi) tabu.
3. Scrolliet lejā, lai atrastu "Host Integrations" (Uzdevumu integrācijas).
4. Iespējojiet Cloudflare integrāciju.
5. Nospiediet "Save Changes" (Saglabāt izmaiņas).

## Kā tas strādā {#how-it-works}

### Subdomainu pārvaldība {#subdomain-management}

Kad tiek radīts jauns vietnes instalācijā ar subdomain multisite:

1. Integrācija sūta pieprasījumu Cloudflare API, lai pievienotu CNAME rekurdīru subdomēnam.
2. Subdomēna pēc defaulta ir konfiguriēta caur Cloudflare proxy (to šo var izveidot filtrus).
3. Kad vietne tiek izslēgta, integrācija atņem subdomēnu no Cloudflare.

### DNS rekurdīru attēlots {#dns-record-display}

Integrācija uzlabo DNS rekurdīru redzamību Ultimate Multisite admin panelī šādi:

1. Tieši saņem DNS rekurdīrus no Cloudflare
2. Parāda, vai rekurdīri ir proxy (vai nav)
3. Rāda papildu informāciju par DNS rekurdīriem

## Cloudflare custom hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (laiku vai nosaukts "Cloudflare for SaaS") ir Cloudflare funkcija, kas ļauj jūsu klientiem izmantot savus domānos ar SSL-u jūsu multisite tīklā. Tas ir ieteikts pieeju domānu mapejamais multisite instalācijām, kas izmanto Cloudflare, jo Cloudflare automātiski pārvaldī rekurdīru sertifikāta izdošanu un atjaunošanu katram custom domānam.

### Kā tas atšķiras no standarta Cloudflare integrācijas {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standarta integrācija | Cloudflare Custom Hostnames |
|---|---|---|
| **Mērķis** | Automātiski izveido DNS rekurdīrus subdomēniem | Uzlabo custom (mapejamus) domānu ar Cloudflare pārvaldītu SSL |
| **Ieteikts** | Subdomēna multisite | Domānu mapejamais multisite |
| **SSL** | Pārvaldīts atsevišķi | Automātiski pārvaldīts Cloudflare

1. At savā Cloudflare dashboard atveriet zonu jūsu galvenajam domēnam.
2. Navigojiet uz **SSL/TLS > Custom Hostnames**.
3. Pievienojiet fallback origin, kas norāda uz servera IP adresi vai hostnes.
4. Katru klientu domēnu, kas ir mapets Ultimate Multisite, pievienojiet Cloudflare iestatījumos Custom Hostname ierakstu. Šo soju var automātiski izveidot ar Cloudflare API.
5. Cloudflare automātiski izveido un atjaunina TLS sertifikātus katras custom hostnames, kad divas DNS adresi ir norādītas uz jūsu tīklu.

Pilna API referance ir pieejama [Cloudflare Custom Hostnames dokumentācijai](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminology update
Ultimate Multisite v2.6.1 no šī versijas sākot ar visiem pluginu iestatījumiem un labelēm šo funkciju nosaužam **Cloudflare Custom Hostnames**. Pirmais versijās to nosaukums bija "Cloudflare for SaaS", kas ir pamata Cloudflare produkta nosaukums.
:::

## Savi اہم paziņojumi {#setting-up-cloudflare-custom-hostnames}

At Cloudflare lasītās atjauninājumiem wildcard proxying tagad ir pieejams visiem klientiem. Tas nozīmē, ka standarta Cloudflare DNS integrācija nav tik kritika subdomēnu multisite instalācijām kā iepriekš, jo jūs vienkārši varat izveidot wildcard DNS ierakstu Cloudflare.

## Kļūdu likums {#important-notes}

### API savienojuma problēmas {#troubleshooting}
- Pārbaudiet, vai jūsu API token ir pareizs un vai tas ir nepieciešamie iestatījumi.
- Pārbaudiet, vai jūsu Zone ID ir pareizs.
- Nodrošiniet, ka jūsu Cloudflare kontam ir nepieciešami atļaujas.

### Subdomēna nav pievienota {#api-connection-issues}
- Pārbaudiet Ultimate Multisite logus jebkurām kļūdu ziņojumiem.
- Pārbaudiet, vai subdomēna vēl nav pievienota Cloudflare.
- Nodrošiniet, ka jūsu Cloudflare plāns atbalsta DNS ierakstu skaitu, ko jūs izveidojat.

### Proxy problēmas {#subdomain-not-added}

* Ja jūs nevola, lai subdomēni tika proxyti, varat izmantot filtru `wu_cloudflare_should_proxy`.
* Noteikumi var nepiemērots darboties labi, ja tie ir proxyti (piemēram, noteikumi dažām WordPress admin funkcijām).
* Izvēlieties izmantot Cloudflare's Page Rules, lai apmeklējiet cache-u nobrīdinātu admin lapas.
