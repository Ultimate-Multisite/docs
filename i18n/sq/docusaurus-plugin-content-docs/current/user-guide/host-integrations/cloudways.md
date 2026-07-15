---
title: Integrimi me Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrimi me Cloudways

## Përmbledhje {#overview}
Cloudways është një platform hosting në cloud të menaxhuar që ju lejon të vendosni (deployoni) faqe WordPress në ndryshme ofrues cloud si DigitalOcean, AWS, Google Cloud dhe më shumë. Kjo integrim lejon synkronizimin automatik të domenit dhe menaxhimin e sertifikatëve SSL midis Ultimate Multisite dhe Cloudways.

## Karakteristikat {#features}
- Synkronizim automatik i domenit
- Menaxhimi i sertifikatëve SSL
- Mbështetje për domene shtesë
- Vërtetim DNS për sertifikatët SSL

## Kërkesat {#requirements}
Këto konstante duhet të përcaktohen në skedarin tuaj `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_i_tuaj_n_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'api_key_i_tuaj');
define('WU_CLOUDWAYS_SERVER_ID', 'id_i_serverit_tuaj');
define('WU_CLOUDWAYS_APP_ID', 'id_i_aplikacionit_tuaj');
```

Opsionale, ju mund të përcaktoni edhe:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_e_domeneve_sepse_me_komave');
```

## Udhëzimet për Konfigurim {#setup-instructions}

### 1. Merrni Kredencat e API të Cloudways-it tuaj {#1-get-your-cloudways-api-credentials}

1. Hapni dashboard-in tuaj në Cloudways
2. Shkoni te "Account" > "API Keys" (Llogaria > Klave API)
3. Gjeneroni një klavë API nëse nuk keni një tashmë
4. Kopjoni email-in dhe klavën e API

### 2. Merrni ID-në e Serverit dhe Aplikacionit tuaj {#2-get-your-server-and-application-ids}

1. Në dashboard-in tuaj të Cloudways, shkoni te "Servers" (Serverët)
2. Zgjidhni serverin ku është vendosur multisite WordPress juaj
3. ID-ja e Serverit duket në URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Shkoni te "Applications" (Aplikacionet) dhe zgjidhni aplikacionin tuaj WordPress
5. ID-ja e Aplikacionit duket në URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Shtoni Konstante në wp-config.php {#3-add-constants-to-wp-configphp}

Shtoni konstante të mëposhtme në skedarin tuaj `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Nëse keni domene **tjetër** (jashtë rrjetit tuaj multisite) që duhet të ruhen gjithmonë në listën e alias-eve të Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Mos përfshini domenin tuaj të rrjetit wildcard
Mos shtoni `*.your-network.com` (ose ndonjë model subdomeni të rrjetit tuaj) në
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Shikoni [Çfarë është e rëndësishme — pengesa me SSL wildcard](#important--wildcard-ssl-pitfall) më poshtë për pse kjo pengon lëshimin e sertifikave SSL për çdo tenant.
:::

### 4. Aktivizoni Integrimin {#4-enable-the-integration}

1. Në adminin tuaj të WordPress, shkoni te Ultimate Multisite > Settings (Cilësimet)
2. Navigjoni te tabja "Domain Mapping" (Mapele domene)
3. Shkoni poshtë te "Host Integrations" (Integrimet e hostit)
4. Aktivizoni integrimin Cloudways
5. Klikoni te "Save Changes" (Ruaj ndryshimet)

## Si Funksionon {#how-it-works}

### Sinkronizimi i Domenive {#domain-syncing}

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi merr të gjitha domeneve që janë të mapezuara aktualisht
2. Ai shton domenit e ri në listë (në bashkë me një version www, nëse është i përshtatshëm)
3. Ai dërgon listën e plotë te Cloudways përmes API-së
4. Cloudways përditëson alias-et e domenit për aplikacionin tuaj

Shënim: API-ja e Cloudways kërkon që të dërgohet lista e plotë e domenive çdo herë, jo vetëm shtimin ose heqjen e domeneve individuale.

### Menaxhimi i Sertifikatave SSL {#ssl-certificate-management}

Pas sinkronizimit të domenive:

1. Integrimi kontrollon cilat domene kanë regjistrime DNS valide që tregojnë te serveri juaj
2. Ai dërgon një kërkesë te Cloudways për instalimin e sertifikave Let's Encrypt SSL për ato domene
3. Cloudways menaxhon lëshimin dhe instalimin e sertifikatës SSL

Integrimi gjithmonë kërkon certifikata **standard** (nuk janë wildcards) Let's Encrypt nga Cloudways. Nëse në `WU_CLOUDWAYS_EXTRA_DOMAINS` i paraqitet një model wildcard, prefixi `*.` hiqet para kërkesës SSL — vetë wildcard-i nuk instalohet kurrë nga ky integration. Për të përdorur një certifikat wildcard në Cloudways do të duhet ta instaloni manualisht, por bllokimi i kësaj ndalon lëshimin e Let's Encrypt për domeneve të personalizuara që janë të mapuara (shikoni rrezikun më poshtë).

## Domene Shtesë {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` ju lejon të specifikoni domene **eksterne** shtesë që duhet të ruhen gjithmonë në listën e alias-eve të aplikacionit Cloudways. Përdorni atë për:

- Domene eksterne që nuk menaxhohen nga Ultimate Multisite (p.sh. një faqe marketingje e veçantë që ndan aplikacionin Cloudways të njëjtin).
- Domene parkuar ose staging që dëshironi të ruhen në listën e alias-eve të aplikacionit.

**Mos** përdorni këtë konstante për subdomain wildcard të rrjetit tuaj (p.sh. `*.your-network.com`). Shikonizni rrezikun e SSL wildcard më poshtë.

## Rëndësishme — Rreziku i SSL Wildcard {#important--wildcard-ssl-pitfall}

Një gabim i zakonshëm kur ndiqni konfiguratën standarde të Cloudways është shtimi i një wildcards si `*.your-network.com` në `WU_CLOUDWAYS_EXTRA_DOMAINS`, ose instalimi manual i një certifikati SSL wildcard Cloudways për atë wildcard.

**Nëse bëni këtë, Cloudways do të refuzojë lëshimin e certifikatave Let's Encrypt për domeneve të personalizuara që Ultimate Multisite i mapon.** Cloudways zëvendos certifikatën SSL aktive në aplikacion çdo herë, dhe një certifikat wildcard ekzistuese në aplikacion bllokon lëshimin e Let's Encrypt për secilin domen që integrationi varet prej tij.

### Konfigurimi i Rekomanduar të SSL-it Cloudways për rrjetin Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Në tabin **SSL Certificate** e aplikacionit Cloudways, instaloni një certifikat standard Let's Encrypt që mbulon vetëm `your-network.com` dhe `www.your-network.com` — **jo** një wildcard (asterisk).
2. Mos vendosni `*.your-network.com` (ose ndonjë model subdomeni të rrjetit tuaj) në `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezervoni këtë konstante vetëm për domene **të jashtme**.
3. Krijoni wildcard-n e subdomeneve per-tenant vetëm në nivelin **DNS** (një record `A` për `*.your-network.com` që i drejton te IP-ja e serverit Cloudways tuaj) që subdomenit të zgjidhen. SSL për domene specifike të mapi të personalizuar parahet automatikisht nga integrimi përmes Let's Encrypt.

Nëse domenet tuaja personalizuara janë të ngatissa pa SSL, kontrolloni tabin Cloudways SSL. Nëse një certifikat wildcard është aktiv aty, hiqeni atë, parahet një certifikat standard Let's Encrypt vetëm për domenit kryesor të rrjetit dhe hiqni çdo shënim wildcard nga `WU_CLOUDWAYS_EXTRA_DOMAINS`. Pastaj riaktivizoni mapi domene (ose pritenin atë të ardhmen) dhe integrimi do të fillojë të parahet certifikata per-domain përsëri.

## Zgjidhja e problemeve (Troubleshooting) {#troubleshooting}

### Problemet me lidhjen API {#api-connection-issues}
- Verifikoni që emaili dhe kyçja API ju janë korrekte
- Kontrolloni që ID-të tuaj të serverit dhe aplikacionit janë korrekte
- Sigurohuni që llogaria juaj Cloudways ka të gjitha lejet e nevojshme

### Problemet me Sertifikat SSL {#ssl-certificate-issues}
- Cloudways kërkon që domenet të kenë regjistrime DNS valide që tregojnë drejt serverit tuaj para se të lëshon sertifikatat SSL.
- Integrimi vërteton regjistrimet DNS para se të kërkojë sertifikatat SSL.
- Nëse nuk po lëshohen sertifikatat SSL, kontrolloni që domenet tuaja të tregojnë si duhet drejt adresës IP të serverit tuaj.
- **Domene personalizues për qirëndësi (per-tenant) i ngushtë pa SSL?** Kontrolloni tabin e Sertifikatëve SSL në aplikacionin Cloudways. Nëse një sertifikat wildcard (installuar manualisht, ose që mbulon `*.your-network.com`) është aktiv, Cloudways nuk do të lëshojë sertifikatat Let's Encrypt për domene personalizues individualisht të mapuar. Zëvendësoni me një sertifikat standard Let's Encrypt që mbulon vetëm domen kryesor të rrjetit (`your-network.com`, `www.your-network.com`) dhe fshini çdo shënim wildcard nga `WU_CLOUDWAYS_EXTRA_DOMAINS`. Pastaj riaktivizoni një mapim domene (ose presni atë të ardhmen) dhe integrimi do të kërkojë sertifikata për secilën domen.

### Domene Jo i Shtuar {#domain-not-added}
- Kontrolloni logjet e Ultimate Multisite për ndonjë mesazh gabimi.
- Verifikoni që domeni nuk është shtuar tashmë në Cloudways.
- Sigurohuni që plani juaj Cloudways të mbështet numrin e domenve që po shtoni.
