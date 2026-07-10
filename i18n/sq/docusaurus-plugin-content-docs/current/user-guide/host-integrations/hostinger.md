---
title: Integrimi me Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrimi me Hostinger (hPanel) {#hostinger-hpanel-integration}

## Përmbledhje {#overview}

Hostinger është një ofrues i popullor i hostingut web me një panel kontrolli modern të quajtur hPanel. Integrimi Ultimate Multisite Hostinger lejon sinkronizimin automatik të domenve midis Ultimate Multisite dhe hPanel-it të Hostinger, duke ju lejuar të menaxhoni automatikisht mapimet e domenve dhe subdomainet direkt nga admini juaj WordPress.

## Karakteristikat {#features}

- Krijimi automatik i addon domain në hPanel
- Krijimi automatik i subdomain (për instalime multisite subdomain) në hPanel
- Fshirja e domeneve kur hiqni mapimet
- Integrim i pa ndërprerë me API-n e menaxhimit të domenve të hPanel

## Kërkesat {#requirements}

Për të përdorur integrimin Hostinger, ju nevojitet:

1. Një llogari Hostinger me akses në hPanel
2. Një token API nga Hostinger
3. Konstante të mëposhtme e definuar në skedarin tuaj `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'tokeni_i_hostinger_tuaj');
define('WU_HOSTINGER_ACCOUNT_ID', 'id_i_llogaris_tuaj_hostinger');
```

Opsionale, ju mund të definoni edhe:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Pikat e fundit API
```

## Udhëzimet për Konfigurim {#setup-instructions}

### 1. Krijoni Tokenin tuaj API të Hostinger {#1-generate-your-hostinger-api-token}

1. Logojuni në llogarinë tuaj Hostinger dhe hyjni në hPanel
2. Shkoni te **Account Settings** → **API Tokens**
3. Klikoni **Create New Token** (Krijoni Token të Ri)
4. I jepni tokenit tuaj një emër përshkrues (p.sh., "Ultimate Multisite")
5. Zgjidhni lejet e nevojshme:
   - Domain management (Menaxhimi i domenit)
   - Subdomain management (Menaxhimi i subdomainit)
6. Kopjoni tokenin e krijuar dhe ruani atë në mënyrë të sigurt

### 2. Gjeni ID-në tuaj Llogarie {#2-find-your-account-id}

1. Në hPanel, shkoni te **Account Settings** → **Account Information** (Informacion i Llogarisë)
2. ID-ja e llogarisë tuaj duket në këtë faqe
3. Kopjoni dhe ruani këtë ID për hapin tjetër

### 3. Shtoni Konstante në wp-config.php {#3-add-constants-to-wp-configphp}

Shtoni konstante të mëposhtme në skedarin tuaj `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Nëse llogaria jote në Hostinger përdor një endpoint API të ndryshëm, mund ta personalizoni:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivizimi i Integrimit {#4-enable-the-integration}

1. Në adminin tuaj WordPress, shkoni te **Ultimate Multisite > Settings** (Cilësimet)
2. Navigjoni te tabja **Domain Mapping** (Mapele e Domenive)
3. Scrolloni poshtë deri në **Host Integrations** (Integrimet me Hostin)
4. Aktivizoni integrimin **Hostinger (hPanel)**
5. Klikoni **Save Changes** (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

### Addon Domains (Domenet Shtesë) {#addon-domains}

Kur mapi një domen në Ultimate Multisite:

1. Integrimi dërgon një kërkesë te API i Hostinger për të shtuar domenit si addon domain
2. Domeni konfigurohet të tregojë drejt direkt në direktorin tuaj kryesor (root directory)
3. Kur hiqni mape e domeneve, integrimi automatikisht heq addon domain-in nga hPanel

### Subdomains (Subdomenit) {#subdomains}

Për instalimet me multisite subdomene: kur krijohet një site e re:

1. Integrimi nxjerr pjesën e subdomenies nga domeni i plotë
2. Ai dërgon një kërkesë te API i Hostinger për të shtuar subdomenien
3. Subdomena konfigurohet të tregojë drejt direkt në direktorin tuaj kryesor

## Shënim të Rëndësishëm {#important-notes}

- Integrimi përdor REST API-n e Hostingerit për komunikim me llogarin tuaj
- Tokeni i API juaj duhet të ketë lejet e nevojshme për menaxhimin e domenve dhe subdomenive
- Integrimi nuk trajton konfigurimin e DNS; domenët duhet të tregohen tashmë te llogaria jote në Hostinger

- Kërkesat API bëhen në mënyrë të sigurt përmes HTTPS
- Mbani tokenin tuaj të API-së të sigurt dhe mos e ndaheni kurrë publikisht.

## Zgjidhja e Probleme (Troubleshooting) {#troubleshooting}

### Masat e Lidhur me Konnektivitetin e API-së {#api-connection-issues}

Verifikoni që tokeni i API juaj është i saktë dhe nuk ka skaduar
Kontrolloni që ID-ja e llogarisë tuaj është e saktë
Sigurohuni që tokeni i API juaj të ketë lejet e nevojshme për menaxhimin e domenit
Verifikoni që llogaria Hostinger juaj është aktive dhe në gjendje të mirë

### Domeni nuk është shtuar {#domain-not-added}

- Kontrolloni logjet e Ultimate Multisite për ndonjë mesazh gabimi
- Verifikoni që domeni nuk është shtuar tashmë në llogarinë tuaj Hostinger
- Sigurohuni që llogaria Hostinger juaj nuk ka arritur kufirin e saj për domenet shtesë (addon domains)
- Konfirmojeni që domeni i drejtuar si duhet te nameserverët Hostinger

### Problemet me Sertifikatën SSL {#ssl-certificate-issues}

- Integrimi nuk menaxhon dhënien e sertifikave SSL
- Hostinger zakonisht ofron sertifikat SSL falas përmes AutoSSL
- Mund të menaxhoni sertifikatat SSL direkt në hPanel në seksionin **SSL/TLS**
- Alternativisht, përdorni Let's Encrypt me funksionalitetin e AutoSSL të Hostinger

## Mbështetje {#support}

Për ndihmë shtesë me integrimin Hostinger, ju lutemi referohuni:

- [Dokumentacioni i API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Dokumentacioni i Ultimate Multisite](/)
- [Mbështetja e Ultimate Multisite](https://ultimatemultisite.com/support)
