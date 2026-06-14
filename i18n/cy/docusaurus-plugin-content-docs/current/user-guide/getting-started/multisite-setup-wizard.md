---
title: Gweidiad y Cyfarwyddyd Gweithredol Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Gwyrchu'r Cyfathreithiad Multisite

Mae Ultimate Multisite yn cynnwys gwyrchu (wizard) sy'n cael ei ddefnyddio i chysylltu'r y cyfluniad WordPress arbenigol i rheol WordPress Multisite. Mae hyn yn tynnu angen i redig manual `wp-config.php` neu gyflwyno adferiadau datab.

:::tip
Os ydych chi'n gweithio'r cyfluniad WordPress eich bod yn rheol Multisite, gallwch ddefnyddio ystafell hwn yn llwyr. Mae'r gwyrchu yn dangos yn unig pan nid yw Multisite wedi cael ei chynllunio eto.
:::

## Pan Gyda'r Gwyrchu'r Cyfathreithiad?

Pan mae'ch chi'n chynllunio Ultimate Multisite ar gyfer cyfluniad WordPress arbenigol (nadwy-Multisite), mae'r plugin yn gweld bod Multisite nid wedi cael ei chynllunio eto ac yn redirifu'n awt i'r Gwyrchu'r Cyfathreithiad Multisite yn lle y gwyrchu cyffredinol.

Gallwch hefyd cyrraeddnu'r hyn yn uniongyrchol ar **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prifau Cynllunio

Ar ôl i'r gwyrchu, sicrwch bod:

- Mae eich **cyffredin administrator** ar gyfer eich cyfluniad WordPress
- Mae ffeil `wp-config.php` o'r server eich bod yn **gwrthosiol** gan y web server
- Mae gennych **bachau ddiogel** o'ch ffeil a datab

:::warning
Mae'r gwyrchu yn newid eich ffeil `wp-config.php` ac yn creu tablau datab newydd. Creu bachau ddiogel arall arall cyn ymlaen.
:::

## Cynllun 1: Cyfeiriad

Mae'r gyfrifennol cyntaf yn esbonio beth yw WordPress Multisite a beth fydd y gwyrchu ei wneud:

- Mae'r ffeithau Multisite yn cael eu chynllunio mewn cyfluniad WordPress eich
- Creu tablau datab rheol sydd angen i'w gael
- Ychwanegu'r constantau multisite angen i `wp-config.php`
- Mae'n cael ei chynllunio'r Multisite ar gyfer y rheol yn gyffredinol

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Cliciw ar **Continue** i ddechrau.

## Cynllun 2: Cyfeiriad Rheol

Mae'r cynllun hwn yn gofyn i chi gael eich cyfeiriadau rheol.

### Estrwyll y Safl

Myddwch beth eich cynnigau eich siatol network yn cael eu cyflwyno:

- **Sub-domains** (Aralltrefiwyd) — Mae'r siatol yn cael eu subdomain ei hun, fel `site1.yourdomain.com`
- **Sub-directories** — Mae'r siatol wedi'u creu fel llwybrau, fel `yourdomain.com/site1`

:::note
Os ydych chi'n gw mill â sub-domains, byddwch yn angen i'ch ddefnyddio **wildcard DNS** a **wildcard SSL certificate** ar gyfer eich domain. Mae'r bennafau WordPress sydd wedi'u gael ei rheoli yn hanfodol hyn yn awtomatig. Gweld [Ultimate Multisite 101](./ultimate-multisite-101) i'w cyflwyno cyfathrebu aml.
:::

### Enw Network

Rhaid i chi ddarganfod enw ar gyfer eich network. Mae hyn yn deallio gyda'r enw siatol gyfredol gyfan gyda "Network" wedi'i ddogfen. Gallwch gwahaniaethu hyn yn neslin o'r setegau network.

### E-bostell Admin Network

Mae'r e-bostell a ddefnyddir i gynnigau admin network. Mae hyn yn deallio gyda'r e-bostell ystodol ar gyfer y borthwr cyfan.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Ar ôl i ddifynnu'r ffeiliau, cliwch ar **Continue** i ddeall.

## Cynllun 3: Cyflwyniad

Cliwch ar bot **Install** i ddechrau. Mae'r cynllun yn gwneud pethau cyfathrebu mewn pum ystafell yn gyfansawdd, gan dangos ei chyflym yn real-time:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Cynllun | Disgrifiad |
|------|-------------|
| **Gofalwch Multisite** | Ychwanegwch y constant `WP_ALLOW_MULTISITE` i `wp-config.php` |
| **Creu Cnyfrifol** | Creu'r tablau databasar cnyfrifol (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) a llenwiwch nhw gyda'ch cynnig y cnyfrifol |
| **Cyflwyno Cynnig** | Ychwanegwch y constantau cyfrifol olaf i `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Gofalwch Cookies** | Sicrhewch bod yr URL y safle yn iawn yn y metadata cnyfrifol ar gyfer y rheiniad i roi'r angenau cyflwyniad arall yn ôl y chwarae |
| **Cyflwyno Plugin Cnyfrifol** | Cyflwynwch Ultimate Multisite i fynd yn gweithio arall y cnyfrifol |

Mae pob cynllun yn dangos un o'r statwsau hyn:

- **Pending** — Mae'n aros i cael ei prosesu
- **Installing...** — Mae'n weithio ar hyn o bryd
- **Success!** — Cyflwynwyd yn llwyddiannus
- **Message eror** — Bu wytref yn digwydd (bydd y message yn disgrifio'r angen)

Ar ôl cael pob cynllun wedi'i cyflwyno'n llwyddiannus, byddwch yn gweld statws "Success!" gwynig ar gyfer pob item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Yn ymyrchau hyn, bydd y cyfrifol yn mynd i'r screen cyflwyniad yn awtomatig.

## Cynllun 4: Cyflwyno

Ar ôl cael yr chwarae wedi'i cyflwyno, byddwch yn gweld message llwyddiannus sy'n cadarnhau bod WordPress Multisite wedi'i gofalwch.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Gallwch chi ddilyn y cyflwyniad Ultimate Multisite i ddefnyddio eich platform WaaS (dioddefau cwmni, cynnig gyffredinol, gwyllyddau peiriant, etc.).

:::note
Ar ôl ymlaen y cyflwyniad o'r multisite yn gwblhau, bydd eich browder yn cael ei ddiriedig trwy'r admin cyd-nort wedi'i chynllunio. Gallwch angen i chi log in eto eto felly am ychwanegu gyfathriau cyffredinol ar gyfer y multisite.
:::

## Cyflwyniad Manwl Fel Ddychwion (Manual Setup Fallback)

Os nad yw'r gwirdd yn gallu ysgrifennu i'r ffeil `wp-config.php` eich rhai (oherwydd amgylchedd o'r ffeil neu restrion y server), bydd yn dangos yr cod cywir sy rydych chi angen i drosu manwl:

1. Y **constantlyr wp-config.php** sydd angen i addasu is-odol o'r llinell `/* That's all, stop editing! */`
2. Y **reglawau rewrite .htaccess** a ddifrifol i'r stratig eich gwefan a dychwilio (subdomain neu subdirectory)

Ar ôl cyflwyno'r newidiadau manwl, gwahanwch y peidiad ac bydd y gwirdd yn gweld bod y multisite yn weithredol.

## Cyfathriau (Troubleshooting)

### Mae'r gwirdd yn dweud nad yw wp-config.php yn gallu ysgrifennu

Mae angen i'r proses web eich server i gael swyddi ysgrifennu ar y ffeil `wp-config.php`. Gallwch chi:

- Newchwilio amser yn ddiweddar y permisiwnau o'r ffeil i `644` neu `666`
- Defnyddio gyfarwyddiadau cyflwyniad manwl a rhoi'r gwirdd wedi'i chynllunio gan y gwirdd
- Mae'n cael ei gynnig amser eich cyd-nort i gael help

### Nid yw gwefan yn cael ei ddefnyddio ar ôl cyflwyniad (subdomains)

Os ydych chi wedi dewis stratig subdomain, mae angen i chi gyfathri **wildcard DNS** ar gyfer eich domain. Addasu record DNS:

```
Type: A (neu CNAME)
Host: *
Value: [your server IP]
```

Gofyn amser gyda'ch cyd-nort i gael cyfarwyddiadau os ydych chi nid yn sicr sut i gyfathri hyn.

### Pwobl cyfathriau ar ôl cyflwyniad

Os ydych chi wedi tystyr neu byddwch yn cael ei ddefnyddio erosau cookie ar ôl y multisite setup:

1. Tystyr eich cookies o'r gwefan
2. Log in eto eto felly am `yourdomain.com/wp-login.php`
3. Os oes angen y problem yn parhau, gweld i fod eich `wp-config.php` nid yn cael `COOKIE_DOMAIN` wedi'i setio i `false` — mae hyn yn problem cyfarwydd ar gyfer cyflwyniad multisite mewn subdomainau

Os mae un o'r cynlluniau ychwanegu yn dangos eror:

1. Rwy'n nodi'r enw yr eror a ddefnyddiwyd.
2. Gwrdd yn ôl i'r cynllun cyflwyniad (configuration step) a ceisio eto.
3. Os mae'r eror yn parhau, gwchwch y log eror PHP o'r server eich am sicr mwy o fanylion.
4. Bydd y cynlluniau a ddigwyddodd eisoes yn cael eu tynnu ar gyfer cyflymau nesaf (mae'r installer idymol).
