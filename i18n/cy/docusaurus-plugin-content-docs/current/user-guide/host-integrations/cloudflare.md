---
title: Ymddygiad Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Ymddianion gyda Cloudflare {#cloudflare-integration}

## Oglwyddictod {#overview}
Mae Cloudflare yn gynnwys y rheolwr cyflenwi (CDN) a chyfyngedig diogelwch sy mae'n helpu i gwarchod a gyflymu weboedd. Mae’r cysylltiad hwn yn sylw'r rheoli domain yn awt rhwng Ultimate Multisite a Cloudflare, yn enwedig ar gyfer ystafell multisite subdomain.

## Eithriadau {#features}
- Creu subdomain yn awt mewn Cloudflare
- Cyddefnyddio subdomain gyda proxy
- Rheoli cyfathiadau DNS
- Dysgu cyfathiadau DNS wellfystyr yn admin Ultimate Multisite

## Cynlluniau {#requirements}
Rhaid i'ch ddefnyddio y cyfaintau canlynol mewn fyllyn `wp-config.php` eich llyfr:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Cynlluniau Rheoli {#setup-instructions}

### 1. Derbyn eich Clai API Cloudflare {#1-get-your-cloudflare-api-key}

1. Cyflwynwch i'r dashboard Cloudflare eich cyflwyniad (dashboard)
2. Ymddangos i "My Profile" (clychw ar eich e-bost mewn cyd-ddiwr o'r cyfeiriad uchel-drefn)
3. Dechrau i "API Tokens" o'r menu
4. Creu un clai API newydd gyda'r gynnwysau canlynol:
   - Zone.Zone: Read (Dysgu)
   - Zone.DNS: Edit (Redig)
5. Copi eich clai API

### 2. Derbyn eich ID Zon {#2-get-your-zone-id}

1. Mewn dashboard Cloudflare eich domain syddwch yn ei dymuno
2. Mae'r ID Zon yn agor yn y tab "Overview", mewn llyfr o'r chwarae (sidebar) o'r ddefnyddio "API"
3. Copi'r ID Zon

### 3. Ymddangos Cyfaintau i wp-config.php {#3-add-constants-to-wp-configphp}

Ymddangos y cyfaintau canlynol i eich fyllyn `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Gynllunio'r Cysylltiad {#4-enable-the-integration}

1. Mewn admin WordPress eich Ultimate Multisite, mynd i Settings (Cynlluniau)
2. Ymddangos i'r tab "Domain Mapping" (Rheoli Domainau)
3. Dechrau i'r isel i "Host Integrations" (Cysylltiadau Host)
4. Gynllunio'r cysylltiad Cloudflare
5. Clic ar "Save Changes" (Cadw newidiadau)

## Sut mae hyn yn gweithio {#how-it-works}

### Rheoli Subdomainau {#subdomain-management}

Pan cael site newydd yn cael ei creu mewn stafell multisite subdomain:

1. Mae'r cyfathrebu yn angen yn anfon gyfle i API Cloudflare i dros y cyfathreg (record) CNAME ar gyfer y subdomain.
2. Mae'r subdomain wedi'i sicrwydd i fod yn cael ei prosyddio trwy Cloudflare yn ddefnyddiol yn deulu (gall ei newid gyda filtru).
3. Pan cael site wedi'i ddifais, bydd y cyfathreg yn tynnu'r subdomain o Cloudflare.

### Cyflwyniad Cyfeiriadau DNS (DNS Record Display) {#dns-record-display}

Mae'r cyfathreg yn gwella'r cyflwyniad cyfeiriadau DNS mewn admin Ultimate Multisite gan:

1. Gweld y cyfeiriadau DNS yn uniongyrchol o Cloudflare
2. Dangoswch arol y cyfeiriadau yn cael eu prosyddio neu nad yw'n cael eu prosyddio
3. Dangoswch wybodaeth ychwanegol am y cyfeiriadau DNS

## Hostnames Custom Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Hostnames Custom Cloudflare** (a oedd yn cael ei ddweud "Cloudflare for SaaS" yn gyntaf) yw ffeithau Cloudflare sy'n sylw i eich cleientau eu cyfathreg gyda'u domainau gyda SSL ar eich rheol multisite. Mae'n ddefnyddiol y ffordd arallangol i gael site wedi'i sicrwydd (domain-mapped) sy'n defnyddio Cloudflare, oherwydd mae Cloudflare yn gwarchod y cyflwyniad a chynllunio SSL ar gyfer pob domain custom yn awyr.

### Sut mae hyn yn gwahaniaeth â'r cyfathreg standard Cloudflare? {#how-it-differs-from-the-standard-cloudflare-integration}

| | Cyfathreg Standard (Standard integration) | Hostnames Custom Cloudflare |
|---|---|---|
| **Gweithred** | Creu cyfeiriadau DNS arallangol i subdomainau | Mae'n sylw i domainau custom (mapped) gyda SSL a cael ei rheoli gan Cloudflare |
| **Mae'n ddefnyddiol i** | Multisite yn subdomainau | Multisite sydd wedi'i sicrwydd domainau |
| **SSL** | Caeffall yn cael eu gwarchod yn rhydd | Mae'n cael ei rheoli gan Cloudflare yn awyr |

### Rheoli Hostnames Custom Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. Yn eich dashboard Cloudflare, gaelwch y zone ar gyfer eich domain cyffredinol.
2. Gawswch i **SSL/TLS > Custom Hostnames**.
3. Refynwch origin fallback yn cyfeiriadol i'r IP neu'r enw gwefrgwr eich server.
4. Ar gyfer pob domain cleient sy mae'n mapio mewn Ultimate Multisite, refynwch entry Custom Hostname mewn Cloudflare. Gallwch ddefnyddio'r API Cloudflare i'r ystafell hwn yn awtomatig.
5. Mae Cloudflare yn cyflwyno a'i atalio certyddau TLS ar gyfer pob enw gwefrgwr custom yn awt os oes gan yr cleient'r DNS wedi'i cyfeiriadu i'ch rheol.

Ar gyfer cyfeiriad API llawn, gweld [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Cyfnewidiadau o ddefnyddio
Oes ychwanegau rhyddig Cloudflare, mae'r ffeithiau hyn yn cael eu cyfeiriadu fel **Cloudflare Custom Hostnames** mewn pob seteg a label y plugin. Mae'r frawddegion cynharach wedi defnyddio'r enw "Cloudflare for SaaS", sydd yn enw produsg Cloudflare sydd yn gynnwys.
:::

## Notedau pwysig {#important-notes}

Oes ychwanegau rhyddig Cloudflare, mae cyfnewidiadau hyn yn cael eu cyflwyno ar gyfer pob cleient. Mae hyn yn ei fod yn ddefnyddio y cyfathrebu DNS standard Cloudflare yn hanfodol i ffurfion multisite subdomain fel yr oedd yn cael ei wneud yn rhyfedd, gan gallwch eithaf seteg record DNS rhyddig mewn Cloudflare.

## Cyfeiriad {#troubleshooting}
### Pัญหาau gyda Chysyllti API {#api-connection-issues}
- Cynnal y byddiad eich token API'n cywir ac mae ganddo'r gynnwysau sydd ei angen
- Gwylio bod eich Zone ID yn wir
- Sicru bod eich cyfrif Cloudflare gyda'r gynnwysau sydd ei angen

### Subdomain Nid cael ei droselu {#subdomain-not-added}
- Gwylio'r log Ultimate Multisite ar gyfer unrhyw mesg eror
- Cynnal bod y subdomain nid wedi cael ei droselu i Cloudflare
- Sicru bod eich plan Cloudflare yn cefnogi'r amser o record DNS sydd yn cael eich creu

### Pethau'r Pros {#proxying-issues}
- Os oes rhyddhau subdomains i'r proxy, gallwch defnyddio'r filter `wu_cloudflare_should_proxy`
- Gallai fod rhai ffeithiau nid yn gweithio'n dda pan mae'n cael eu proxy (e.e., rhai ffeithiau admin WordPress)
- Meddwl am ddefnyddio Cloudflare Page Rules i ddarganfod y cache ar gyfer pethau admin
