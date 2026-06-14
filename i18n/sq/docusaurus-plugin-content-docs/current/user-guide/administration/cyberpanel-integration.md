---
title: Integrimi CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrimi me CyberPanel

Ky udhëzues shpjegon se si të konfigurosh integrimin Ultimate Multisite CyberPanel në mënyrë që domeneve të mapuara në rrjetin tuaj të vendosen (dhe hiqen) automatikisht si virtual host-e në CyberPanel, me opsionin e provizimit automatik SSL përmes Let's Encrypt.

## Çfarë Bën

- Kur një domen i mapohet në Ultimate Multisite, integrimi thërret API-n CyberPanel për të krijuar një virtual host për atë domen.
- Kur hiqet një mapim domene, integrimi thërret API-n për të fshirë virtual host-in që korrespondon.
- Kur auto-SSL është i aktivizuar, integrimi shpërthej zbatimin e certifikatës Let's Encrypt menjëherë pas krijimit të virtual host-it.
- Opsionalisht shton/hiq aliasin `www.` në varësi të cilësimit tuaj "Auto-create www subdomain" (Krijimi automatik i ndërveprunimit www) në cilësimet e Mapimit të Domenit.

## Përparueshmëri

- Një instancë CyberPanel që po punon (v2.3 ose më i ri rekomandohet) e arritshme nga serveri juaj WordPress.
- Një faqe interneti ekzistuese në CyberPanel që tashmë shërben rrëdhënësit tuaj të WordPress-it. Integrimi lidh virtual host-e të reja me këtë server.
- Qasja në API-n e CyberPanel i aktivizuar. Autentifikimi përdor emrin dhe fjalëkalimin tuaj si administrator CyberPanel.
- Regjistrat DNS për domenët e mapuara duhet të tregojnë tashmë adresën IP të serverit tuaj para se auto-SSL mund të lëshojë një certifikatë valide.

## Kërkesat

Këto konstanta duhet të përcaktohen në skedarin tuaj `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsionalisht, mund të përcaktoni edhe:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — problemi me Let's Encrypt SSL pas krijimin domeneve
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Përdoret për kontaktin e sertifikatës SSL
```

## Instruktime për Konfigurim

### 1. Aktivizo API-n CyberPanel

1. Hapni kyçjen në dashboard-in tuaj të CyberPanel si administrator.
2. Shkoni te **Security** > **SSL** dhe konfirmojeni se SSL është aktiv në vetë interfejsin e CyberPanel (është i nevojshëm për thirrjet e sigurta të API-së).
3. API-ja e CyberPanel është e disponueshme në `https://your-server-ip:8090/api/` si defolt, nuk keni nevojë për hapa shtesë për ta aktivizuar — është aktive por defecto për përdoruesit administratorë.

### 2. Shtoni Konstante në wp-config.php

Shtoni këto konstante në skurtin tuaj `wp-config.php` para linjës `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Për të aktivizuar auto-SSL (rekomentim):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktivizo Integrimin

1. Në adminin tuaj të rrjetit WordPress, shkoni te **Ultimate Multisite** > **Settings**.
2. Navigjoni te tabja **Domain Mapping**.
3. Scrolloni poshtë te **Host Integrations**.
4. Aktivizoni integrimin **CyberPanel**.
5. Klikoni **Save Changes**.

### 4. Verifikoni Lidhuritë

Përdorni testin e lidhjes që është i ndërtuar në wizard-in e cilësimeve:

1. Shko në **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Kliko në **Test Connection**.
3. Mesazhi i sukses konfirmoj që plugin-i mund të arrijë API-n CyberPanel dhe të autentikohet siç duhet.

## Si Funksionon

### Domain Mapping (Mapele e Domenit)

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi dërgon një kërkesë `POST` te `/api/createWebsite` në hostin CyberPanel tuaj.
2. CyberPanel krijon një host virtual të ri për domenit nën paketën e konfiguruar.
3. Rrota dokumenti (document root) vendoset të tregojë drejt direktorisë kryesore të rrjetit WordPress tuaj.
4. Kur mapesimi i domenit hiqet, integrimi thërret `/api/deleteWebsite` për të pastruar hostin virtual.

### Auto-SSL (Auto-Certifikim SSL)

Kur `WU_CYBERPANEL_AUTO_SSL` është `true`:

1. Pas krijimit të hostit virtual, integrimi thërret `/api/issueSSL` për domenit.
2. CyberPanel kërkon një certifikat Let's Encrypt duke përdorur sfidën ACME HTTP-01.
3. Certifikati rifreskohet automatikisht nga CyberPanel para se të piqet data e tij.

> **Rëndësishme:** DNS duhet të propagohet plotësisht te adresa IP e serverit tuaj para se Let's Encrypt mund të vërtetojë domenit. Nëse dhënia e SSL dështon menjëherë pas maperimit, presi propagimin e DNS-it dhe riaktivizoni SSL-in nga dashboard-i i CyberPanel në **SSL** > **Manage SSL**.

### Subdomeni www

Nëse është aktiv opsioni **Auto-create www subdomain** (Krijimi automatik të subdomenit www) në cilësimet e Domain Mapping, integrimi gjithashtu krijon një alias host virtual për `www.<domain>` dhe, kur auto-SSL është i aktivizuar, lëshon një certifikat që mbulon si variantin kryesor (apex) ashtu edhe variantin www.

### Email Forwarders (Rishituesit e Postave Elektronike)

Kur aktiv është e njësi i shtesë Ultimate Multisite: Emails, CyberPanel mund të ofroj edhe forwarder-e të emailit për klientët. Forwarder-t shpërndajnë mesazhe nga një adresë domenje në një kuti tjetër pa krijuar një kuti të plotë, gjë që është e dobishme për alias si `info@customer-domain.test` ose `support@customer-domain.test`.

Para se të aktivizoni forwarder-ët për klientët:

1. Sigurohuni se konstante CyberPanel më lart janë konfiguruar dhe testimi i lidhjes kalon.
2. Aktivizoni ofruesin e emailit CyberPanel në cilësimet e addon-it Emails.
3. Konfirmojeni se domeni i klientit ekziston tashmë në CyberPanel para se të krijoni forwarder-in.
4. Krijoni një forwarder test dhe dërgoni një mesazh përmes tij para se t'i ofroni këtë veçori planeve të prodhimit.

Nëse krijimi i forwarder-it dështon, kontrolloni së pari logjet e aktivitetit Ultimate Multisite, pastaj konfirmojeni në CyberPanel që domeni i burimit ekziston dhe se përdoruesi i API ka leje menaxhimi të emailit.

## Referenca për Konfigurim

| Konstante | E Përgjithshme | Vifshatare | Përshkrimi |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Po | — | URL i plotë i instancës suaj CyberPanel duke përfshirë portin, p.sh. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Po | — | Përdoruesi admin i CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Po | — | Fjalëkalimi admin i CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Po | `Default` | Paketi i hosting-ut CyberPanel që do të atribuohet hosteve virtuale të reja |
| `WU_CYBERPANEL_AUTO_SSL` | Jo | `true` | Emitoni sertifikatë SSL Let's Encrypt pas krijimit të domeneve |
| `WU_CYBERPANEL_PHP_VERSION` | Jo | `PHP 8.2` | Versioni i PHP për hostet virtuale të reja (duhet të përshtatet me një version të instaluar në CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Jo | — | Email kontakti për regjistrimin e sertifikatës SSL |

## Shënime Importante

API i CyberPanel përdor autentikim bazuar në token sesioni. Integracioni merr tokenin automatikisht për çdo thirrje API.
Llogaria juaj admin e CyberPanel duhet të ketë leje për të krijuar dhe fshirë faqe interneti (websites).
CyberPanel punon me portin `8090` si def default. Nëse serveri juaj përdor firewall, sigurohuni që ky port të jetë i aksesueshëm nga serveri i aplikacionit WordPress.
Integracioni nuk menaxhon regjistrimet DNS. Ju duhet të drejtoni DNS-in e domenit te adresa IP e serverit tuaj para se të mapi domenit në Ultimate Multisite.
Nëse përdorni OpenLiteSpeed (OLS), një rikuarje e qetë (graceful restart) ndodh automatikisht pas ndryshimeve të virtual host-eve. Nuk keni nevojë për ndonjë ndërhyrje manuale.

## Zgjidhja e problemeve (Troubleshooting)

### Refuzimi i lidhjes API (API Connection Refused)

- Verifikoni që porti `8090` është i hapur në firewall-in e serverit tuaj.
- Konfirmojeni se vlerat e `WU_CYBERPANEL_HOST`-it përfshijnë protokollin e saktë (`https://`) dhe portin.
- Kontrolloni që certifikati SSL i CyberPanel është i vlefshëm; certifikatat me nënshkrim vetë (self-signed) mund të shkaktojnë dështime në verifikimin TLS. Vendosni `WU_CYBERPANEL_VERIFY_SSL` në `false` vetëm në mjedise private të besueshme.

### Gabimet e autentifikimit (Authentication Errors)

- Konfirmojeni se emri i përdoruesit tuaj (`WU_CYBERPANEL_USERNAME`) dhe fjalja e fuqishme (`WU_CYBERPANEL_PASSWORD`) janë të sakta duke hyrë direkt në CyberPanel.
- CyberPanel pengon llogaritjet pas përpjekjeve të refuzuar të hyrjes së përsëritur. Kontrolloni **Security** > **Brute Force Monitor** në CyberPanel nëse ndodhin bloku (lockouts).

### Domeni nuk krijohet (Domain Not Created)

- Kontrolloni logun e aktivitetit të Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) për mesazhe të gabimeve API.
- Verifikoni që paketi i përcaktuar në `WU_CYBERPANEL_PACKAGE` ekziston në CyberPanel (**Packages** > **List Packages**).
- Sigurohuni që domeni nuk është regjistruar tashmë si faqe interneti në CyberPanel — krijimi i dyfa të faqes interneti kthen gabim.

### Certifikati SSL nuk lëshohet (SSL Certificate Not Issued)

- Konfirmo se DNS ka propagim has plotë: `dig +short your-domain.com` du duhet të kthejë IP-n e serverit tuaj.
- Let's Encrypt aplikon kufizime për shpejtësi (rate limits). Nëse keni lëshuar së fundmi disa sertifikate për të njëjtin domen, presi para se të provoni përsëri.
- Kontrolloni logjet SSL të CyberPanel në **Logs** > **Error Logs** për detaje mbi dështimet e lëshimit të sertifikatave.
- Si opsion rezervë (fallback), mund të lëshoni SSL manualisht nga CyberPanel: **SSL** > **Manage SSL** > zgjidhni domenit > **Issue SSL**.

## Referanca

- Dokumentacioni i API-s CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Menaxhimi i SSL në CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Kufizimet e shpejtësisë të Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
