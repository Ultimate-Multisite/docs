---
title: cPanel integreerimine
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integratsioon cPaneliga {#cpanel-integration}

## Üldine ülevaade {#overview}
cPanel on üks populaarseid veebihlasterhoone kontrollpaneeleid, mida kasutavad paljud shared ja dedicated hoone pakkujad. See integratsioon võimaldab automaatselt domeenide sünkroonimist Ultimate Multisite'i ja cPanel-i vahel, mis võimaldab teil domeenide aliasid ja subdomeene automaatselt lisada oma cPanel kontole.

## Funktsioonid {#features}
- Automootne lisakogumise domeeni loomine cPanelis
- Automootne subdomeenide loomine cPanelis (subdomeen multisite installatsioonide jaoks)
- Domeeni eemaldamine, kui ühendused eemaldata on tehtud

## nõuded {#requirements}
Järgnev konstantsid tuleb definitsiooniks määrata teie `wp-config.php` failis:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valikult saate definitsionaalselt määrata ka:

```php
define('WU_CPANEL_PORT', 2083); // Oletus on 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Oletus on /public_html
```

## Seadistamise juhised {#setup-instructions}

### 1. Pide oma cPanel ühendustudendi {#1-get-your-cpanel-credentials}
1. Saanud oma cPanel kasutaja ja parooli hoonepakkujalt
2. Tehniline hosti (pole igalgi `cpanel.yourdomain.com` või `yourdomain.com:2083`)

### 2. Lisage konstantsid wp-config.php'le {#2-add-constants-to-wp-configphp}
Lisa järgmised konstantsid oma `wp-config.php` failile:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valikult saate porti ja juuride muutuda:

```php
define('WU_CPANEL_PORT', 2083); // Muuda, kui teie cPanel kasutab teise porta
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Muuda, kui teie dokumentjuur on erinev
```

### 3. Lülitage integratsioon {#3-enable-the-integration}

1. WordPress adminisüsteemistri, Ultimate Multisite > Settings menüüle minnige
2. Navigeerige "Domain Mapping" tabilele
3. Skroolipõige "Host Integrations" allale
4. Lülitage cPanel integratsioon aktiivseks
5. Klõpsake "Save Changes" (Muudatused salvesta)

## Kuidas see toimib {#how-it-works}

### Addon domeenid {#addon-domains}

Kui domeen on Ultimate Multisite'is mappitud:

1. Integratsioon läheb cPanel API-le ja lisab domeeni addon domeenina
2. Domeen konfiguratiakse viituma teie juurdirektoriumile
3. Kui domeen mapping eemaldatakse, eemaldab integratsioon addon domeeni cPanelist

### Subdomeenid {#subdomains}

Subdomeen multisite installatsioonide jaoks, kui uus site luuakse:

1. Integratsioon välja laadib subdomeeni osa täielikust domeenist
2. See läheb cPanel API-le ja lisab subdomeeni
3. Subdomeen konfiguratiakse viituma teie juurdirektoriumile

## Oluline märkused {#important-notes}

- Integratsioon kasutab cPanel'i API2 kommunikatsiooniks teie cPanel kontoga
- Teie cPanel kontil peavad olema õigused lisadomeenide ja subdomeenide lisäämiseks
- Mõned hoostaid võivad piirata selle, kui palju addon domeene või subdomeene saate luua
- Integratsioon ei halda DNS konfiguratsiooni; peab teil end domeenid ikka serveri IP aadressile viitama

## Probleemide lahendamine {#troubleshooting}

### API ühenduse probleemid {#api-connection-issues}
- Kontrollige, kas teie cPanel kasutaja ja parool on õigused
- Kontrollige, kas teie cPanel host on õige ja kättesaadav
- Veenduge, et teie cPanel kontil on vajalikud õigused
- Proovige kasutada hosti täielikat URL-t (nt `https://cpanel.yourdomain.com`)

### Domeen ei lisatud {#domain-not-added}
- Kontrollige Ultimate Multisite logud varem esitatud vigaotsingute osas
- Veenduge, et domeen ei ole juba cPanelis lisatud
- Veenduge, et teie cPanel kontil ei ole jõudnud oma piiri addon domeenide või subdomeenide kohta

### SSL sertifikaadi probleemid {#ssl-certificate-issues}
- Integreerimine ei käsitle SSL sertifikaadide väljastamist.
- Domainidele SSL sertifikaadid välja andmiseks peate kasutama cPanel'i SSL/TLS tööriistu või AutoSSL funktsiooni.
- Alternatiivseks olete võimalik kasutada Let's Encrypti tüüpilise teenust cPanel AutoSSL abil.
