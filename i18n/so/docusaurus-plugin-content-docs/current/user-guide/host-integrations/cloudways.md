---
title: Isdhexgalka Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Iskuulka Cloudways Lagu Dhisidda (Cloudways Integration) {#cloudways-integration}

## Guudbootsooni (Overview) {#overview}
Cloudways waa platform hosting cloud oo la maamulo (managed) oo kuu oggolaanaya inaad WordPress sites ku dhiso adeegsiga hay'adaha cloud kala duwan sida DigitalOcean, AWS, Google Cloud, iyo kuwa kale. Isku-dhafka (integration) kan wuxuu u oggolaanaya isku-dubbaridda domain-ka (domain syncing) iyo maamulka shahaadada SSL-ka (SSL certificate management) inta badan ka dhexeeya Ultimate Multisite iyo Cloudways.

## Wax-soo-saariyo (Features) {#features}
- Isku-dubbaridda automatic ee domain-ka
- Maamulka shahaadada SSL-ka
- Taageerada domain-yada dheeraadka ah
- Xaqiijinta DNS-ka (DNS validation) ee shahaadada SSL-ka

## Shuruudaha (Requirements) {#requirements}
Waxyaabahan waa in la qeexaa (define) constants-ka soo socda faylkaaga `wp-config.php` dhexdiisa:

```php
define('WU_CLOUDWAYS_EMAIL', 'email-ka-cloudways-kaaga');
define('WU_CLOUDWAYS_API_KEY', 'api-key-ka-ga');
define('WU_CLOUDWAYS_SERVER_ID', 'server-id-ka-ga');
define('WU_CLOUDWAYS_APP_ID', 'app-id-ka-ga');
```

Waxaad sidoo kale si doorasho ah u qeexi kartaa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'liis-comma-sareyn, ee, domain-yada');
```

## Tallaabooyinka Qaadista (Setup Instructions) {#setup-instructions}

### 1. Hel Isticmaalka API-ka Cloudways-kaaga (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. Tag dashboard-ka Cloudways-kaaga oo ku gal
2. Tag "Account" > "API Keys"
3. Samee api key haddii aadan haysan mid hore
4. Duub email-kaaga iyo api key-kaaga

### 2. Hel ID-ga Server-ka iyo Application-kaaga (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

1. Dashboard-ka Cloudways-kaaga, tag "Servers"
2. Dooro server-ka uu ku jiro WordPress multisite-kaaga
3. Server ID-gu wuxuu si cad u muuqdaa URL-ka: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Tag "Applications" oo dooro application-ka WordPress-kaaga
5. App ID-gu wuxuu si cad u muuqdaa URL-ka: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ku dar Constants-ka faylka wp-config.php (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Ku dar constants-ka soo socda faylkaaga `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'email-ka-cloudways-kaagaaga');
define('WU_CLOUDWAYS_API_KEY', 'api-key-ka-cloudways-kaagaaga');
define('WU_CLOUDWAYS_SERVER_ID', 'server-id-ka-cloudways-kaagaaga');
define('WU_CLOUDWAYS_APP_ID', 'app-id-ka-cloudways-kaagaaga');
```

Haddii aad leedahay domainyo **dhexe** (oo aan ku jirin shabakadaha multisite-kaaga) oo si joogto ah loo ilaaliyo liiska alias-yada Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Haadad ku darin domainka shabakaddaada (wildcard)
**Haadad ku darin `*.your-network.com` (ama qaabab kale oo subdomain ah ee shabakaddaada) `WU_CLOUDWAYS_EXTRA_DOMAINS`. Waxaad arki kartaa [Muhiimka — dhibaatada wildcard SSL](#important--wildcard-ssl-pitfall) si aad u ogaato sababta ay tani ka hor imaanayso in shahaaynta SSL-ka loo sameeyo qoraallada (tenants) kasta.
:::

### 4. Furista Isdhexgalka (Enable the Integration) {#4-enable-the-integration}

1. Admin-ka WordPress-kaaga, u tag Ultimate Multisite > Settings
2. Tag "Domain Mapping" tab-ka
3. Hoos u soo saar "Host Integrations"
4. Fur (Enable) isdhexgalka Cloudways
5. Click "Save Changes"

## Sidee U Shaqayso? {#how-it-works}

### Sync-ka Domainyada (Domain Syncing) {#domain-syncing}

Marka domain la dhigo Ultimate Multisite:

1. Isdhexgalku wuxuu soo qaadaa dhammaan domainyada hadda la dhigay
2. Wuxuu ku darayaa domainka cusub liiska (iyo nooc www-ka haddii uu jiro)
3. Wuxuu u dirayaa liiska oo dhan Cloudways iyadoo la isticmaalayo API-ga
4. Cloudways wuxuu cusboonaysiiyaa alias-yada domainkaaga ee application-ka

Fadlan ogaow: API-ga Cloudways wuxuu u baahan yahay in la dirto liiska dhammaystiran oo domainyada markasta, ma aha kaliya in la daro ama la saaro domainyo gaar ah.

### Maareynta Shahaaynta SSL (SSL Certificate Management) {#ssl-certificate-management}

Marka domainyada la sync-gareeyay:

1. Isdhexgalku wuxuu hubinayaa domainkaas oo ay jiraan DNS records sax ah oo u socda server-kaaga
2. Wuxuu u dirayaa codsi Cloudways si loo dhiso shahaaynta Let's Encrypt SSL-ka ee domainyadaas
3. Cloudways wuxuu maareynayaa in la soo saaro (issue) oo la dhiso shahaaynta SSL-ka

Intimoolka wuxuu mar kastaa codsiga (certificate) ee Let's Encrypt u baahan yahay mid **standard** (oo aan ahayn wildcard). Haddii aad ku siiso qaab wildcard ah oo ku jira `WU_CLOUDWAYS_EXTRA_DOMAINS`, waxaa la saaraa qaybta hore ee `*.` ka hor inta aan la codsiga SSL-ka. Isku dayga wildcard-ka isina weli ma lagu soo dejiyo integration-kaas. Si aad u isticmaasho qaab wildcard ah oo Cloudways ku jira, waxaad u baahan doontaa inaad si gacanta ugu installayso, laakiin inaad sidaas qabato waxay ka hor imaanaysaa in Let's Encrypt uu codsiyo domain-yada gaarka ah ee aad samaynayso (isoo arag dhibaatada hoose).

## Extra Domains (Domain-yada Kale) {#extra-domains}

Isticmaalka `WU_CLOUDWAYS_EXTRA_DOMAINS` wuxuu kuu oggolaanayaa inaad qeexdo domain-yo **ka soo horreeya** oo si joogto ah loo ilaaliyo liiska alias-yada (aliases list) ee application-ka Cloudways. Isticmaal si aad u isticmaasho:

- Domain-yo ka soo horreeya oo aan Ultimate Multisite ku maamayn (tusaale, website marketing ah oo la wadaagayo application-ka Cloudways).
- Domain-yo la haysta ama staging domain-yo aad rabto inaad si joogto ah u ilaasho liiska alias-yada application-ka.

**Ha isticmaalin** qaybtaas (constant) si aad u samayso wildcard subdomain-ka shabakadahaaga gaarka ah (tusaale, `*.your-network.com`). Isoo arag dhibaatada SSL-ka wildcard-ka hoose.

## Muhiim — Dhibaatada SSL-ka Wildcard-ka Hoose {#important--wildcard-ssl-pitfall}

Khaladaadka caawiyay ee la samayn karo marka aad raacdo qaabka default-ka Cloudways waa inaad ku darto wildcard sida `*.your-network.com` `WU_CLOUDWAYS_EXTRA_DOMAINS`, ama inaad si gacanta ugu installayso codsiga SSL-ka wildcard-ka Cloudways ee domain-kaas gaarka ah.

**Haddii aad sidaas qabato, Cloudways wuu diidi doonaa inuu codsiyo Let's Encrypt certificates-ka domain-yada gaarka ah ee Ultimate Multisite ku xiran.** Cloudways wuxuu beddelaa codsiga SSL-ka socda (active) application-ka markasta oo la isticmaalo, iyo codsigii wildcard-ka hore u jiray application-ka ayaa ka hor imaanaya in Let's Encrypt uu codsiyo domain-yada gaarka ah ee integration-ku ku tiirsan.

### Qaabka SSL-ka Cloudways-ga La Taloobay ee Network Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

---

1. Ku tabka (tab) ee applikayta Cloudways-ga, **SSL Certificate** tabka ku soo dhig, oo isticmaal **standard Let's Encrypt certificate** oo kaliya `your-network.com` iyo `www.your-network.com` loogu talagalay — **ma aha** wildcard.
2. Ha ku qorin `*.your-network.com` (ama qaabka subdomain-kaaga gaarka ah ee shirkaddaada) `WU_CLOUDWAYS_EXTRA_DOMAINS`-ka. Waxaan u haynaa halistaas oo kaliya **domain-yada dibadda ah** (external domains).
3. Wildcard subdomain-ka per-tenant-ka, samee level-ka **DNS** oo kaliya (record `A` oo ku socda IP-ga server-ka Cloudways-kaaga) si subdomains-ku u soo celiyo. SSL-ka ee domain-yada gaarka ah ee aad qorsheysay ayaa ka soo saari doona automatic-ka isdiiwaangelinta iyadoo la isticmaalayo Let's Encrypt.

Haddii domain-yada gaarka ah ee qoysaskaaga ay ku jiraan oo aan SSL lahayn, hubi tabka Cloudways SSL. Haddii certificate wildcard ah uu ka shaqaynayo, siiso (remove) oo dib u soo saar certificate Let's Encrypt standard oo kaliya loogu talagalay domain-ka koowaad ee shirkaddaada, ka saar dhammaan qoraallada wildcard-ka laga soo qaaday `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ka dibna dib u bilow mapping-ga domain-ka (ama sug inta la yeesho kan xigta) isdiiwaangelinta ayaa mar kale bilaabi doona inuu siiso certificate gaar ah oo loogu talagalay domain-ka.

## Wax-ii-la-tacaal (Troubleshooting) {#troubleshooting}

### Masalahada Xiriirka API-ga {#api-connection-issues}
- Hubi in email-kaaga iyo api key-gaagu ay sax yihiin.
- Hubi in ID-ga server-kaaga iyo application-kaagu ay sax yihiin.
- Hubi in koontada Cloudways-kaaga ay leedahay fursadaha (permissions) ee loo baahan yahay.

### Masalahyada Sertifikalka SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Cloudways waxay u baahan tahay in domain-ka ay leeyihiin DNS records sax ah oo si toos ah ugu sheegaya server-kaaga ka hor inta aan la bixin SSL certificates.
- Isku-dhafka (integration) wuxuu hubiyaa DNS records-ka ka hor inta u codsado SSL certificates.
- Haddii aysan la bixin SSL certificates, hubi in domain-kaagu si sax ah ugu sheegayo IP address-ka server-kaaga.
- **Domain-yada gaarka ah ee per-tenant oo aan la helin SSL?** Hubi tab-ka "SSL Certificate" ee application-ka Cloudways. Haddii certificate wildcard (oo si gacanta loo installay, ama uu ku habboon yahay `*.your-network.com`) uu socdo, Cloudways ma bixin doono Let's Encrypt certificates domain-yada gaarka ah ee la qorsheeyay. Ka beddelo iyadoo la isticmaalayo certificate standard oo kaliya ku habboon domain-ka koowaad ee shirkadda (`your-network.com`, `www.your-network.com`) oo ka saar dhammaan qoraallada wildcard-ka ah ee `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ka dibna dib u bilow mapping-ga domain-ka (ama sug inta la soo socdo) isku-dhafka wuxuu codsan doonaa certificates gaar ah oo ku habboon domain-kood.

### Domain-ka Ma La Bixiyo {#domain-not-added}
- Hubi logs-ka Ultimate Multisite wax walba ka dhashay (error messages).
- Hubi in domain-kaas aysan la darin Cloudways hadda.
- Hubi in qorshahaaga Cloudways uu taageero tirada domain-yada aad ku darayso.
