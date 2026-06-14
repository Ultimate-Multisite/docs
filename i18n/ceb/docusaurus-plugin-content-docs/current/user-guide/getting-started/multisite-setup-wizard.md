---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ang Ultimate Multisite naglakip og built-in wizard nga awtomatikong nag-convert sa usa ka standard WordPress installation ngadto sa WordPress Multisite network. Kini nagkuha nimo sa kinahanglanon nga i-edit manual ang `wp-config.php` o magpadagan og database commands.

:::tip
Kung ang imong WordPress installation kay nag-run na isip Multisite network, pwede nimong laktaw ni step kining tanan. Ang wizard mosulod lang kung wala pa gi-enable ang Multisite.
:::

## Kanus-a Mo Makita ang Wizard?

Kung i-activate nimo ang Ultimate Multisite sa usa ka standard (non-Multisite) WordPress installation, madetect sa plugin nga wala pa gi-enable ang Multisite ug awtomatikong magdadala kanimo sa Multisite Setup Wizard imbes sa regular setup wizard.

Pwede pud nimo kini i-access direkta pinaagi sa **WP Admin > Ultimate Multisite > Multisite Setup**.

## Mga Kinahanglanon (Prerequisites)

Sa dili pa mo-run sa wizard, siguruha nga:

- Naa kay **administrator access** sa imong WordPress installation
- Ang file nga `wp-config.php` sa imong server kay **writable** sa web server
- Naa kay **recent backup** sa imong mga files ug database

:::warning
Ang wizard mag-modify sa imong `wp-config.php` file ug maghimo og bag-ong database tables. Kanunay maghimo og backup sa dili pa mopadayon.
:::

## Step 1: Welcome

Ang unang screen nagpatin-aw unsa ang WordPress Multisite ug unsa ang buhaton sa wizard:

- I-enable ang Multisite feature sa imong WordPress configuration
- Paghimo sa kinahanglanon nga network database tables
- Pagdugang sa gikinahanglang multisite constants sa `wp-config.php`
- Network-activate ang Ultimate Multisite sa tibuok network

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

I-click ang **Continue** aron magpadayon.

## Step 2: Network Configuration

Kini nga step mangutana kanimo kung unsa ang imong mga network settings.

### Site Structure

Pili kung paano i-organisa ang imong mga network site:

- **Sub-domains** (Recommended) — Ang matag site makakuha og kaugalingon nga subdomain, sama sa `site1.yourdomain.com`
- **Sub-directories** — Ang mga site gi-create isip mga path, sama sa `yourdomain.com/site1`

:::note
Kung pilion nimo ang sub-domains, kinahanglan nimo i-configure ang **wildcard DNS** ug usa ka **wildcard SSL certificate** para sa imong domain. Kadaghanan sa managed WordPress hosts kini awtomatiko nga giatubang. Tan-awa ang [Ultimate Multisite 101](./ultimate-multisite-101) alang sa detalyadong pagkompara.
:::

### Network Title

Isulod ang ngalan para sa imong network. Kini default kay ang kasamtangang titulo sa imong site nga adunay "Network" nga gidugang. Mahimo nimo kining usbon sa ulahi gikan sa network settings.

### Network Admin Email

Ang email address nga gigamit alang sa mga notipikasyon sa administrasyon sa network. Kini default kay ang email address sa kasamtangang user.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Human pun-on ang mga field, i-click ang **Continue** aron magpadayon.

## Step 3: Installation

I-click ang butang nga **Install** aron magsugod. Ang wizard naghimo og lima ka automated steps sa sunod-sunod nga paagi, diin matag nagpakita sa iyang progreso sa real-time:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Deskripsyon |
|------|-------------|
| **I-on Multisite** | Idagdag ang `WP_ALLOW_MULTISITE` constant sa `wp-config.php` |
| **Pagbuo sa Network** | Gumawa og mga database tables para sa multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, ug uban pa) ug pun-on kini sa imong network configuration |
| **Pagsulod sa Configuration** | Idagdag ang katapusang multisite constants sa `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, ug uban pa) |
| **Ayuhon ang Cookies** | Siguraduhon nga tama ang site URL sa network metadata aron malikayan ang problema sa authentication human ma-activate |
| **Network Activate Plugin** | I-network activate ang Ultimate Multisite aron magtrabaho kini sa tibuok network |

Matag lakang nagpakita og usa niining mga status:

- **Pending** — Naghulat pa nga proseso
- **Installing...** — Aktibo na karon
- **Success!** — Malampuson kining nahuman
- **Error message** — Naa'y problema (ang mensahe maghatag og detalye sa isyu)

Kung malampuson ang tanang lakang, makakita ka og berde nga "Success!" status para sa matag item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Dayon, awtomatikong molihok ang wizard padulong sa screen sa pagkompleto.

## Lakang 4: Kompleto

Kung mahuman na ang installation, makakita ka og success message nga nagpamatuod nga na-enable na ang WordPress Multisite.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Karon, pwede na nimo ipadayon ang Ultimate Multisite setup wizard aron ma-configure ang imong WaaS platform (detalye sa kompanya, default nga content, payment gateways, ug uban pa).

:::note
Pagkatapos makompleto ang pag-install sa multisite, ire-redirect ka sa bagong network admin. Kinahanglan nimo nga mag-login pag-usab kay na-update na ang authentication cookies para sa multisite environment.
:::

## Manual Setup Fallback

Kung dili maka-isulat ang wizard sa imong `wp-config.php` file (tungod sa file permissions o server restrictions), ipakita ni kini kanimo ang eksaktong code nga kinahanglan nimong i-add manually:

1. Ang mga **wp-config.php constants** nga kinahanglan i-add sa ibabaw sa linya nga `/* That's all, stop editing! */`
2. Ang mga **.htaccess rewrite rules** nga angay para sa imong gipili nga site structure (subdomain o subdirectory)

Human maghimo ka og manual changes, i-refresh ang page ug madetect sa wizard nga aktibo na ang multisite.

## Troubleshooting

### Nag-ingon ang wizard nga dili writable ang wp-config.php

Kinahanglan ang web server process nga adunay write permission sa `wp-config.php` file. Mahimo nimo kini:

- Pananduron nga usbon ang file permissions ngadto sa `644` o `666`
- Gamit ang manual setup fallback instructions nga gihatag sa wizard
- Pangayo og tabang sa imong hosting provider

### Dili ma-access ang mga site human sa setup (subdomains)

Kung gipili nimo ang subdomain structure, kinahanglan nimong i-configure ang **wildcard DNS** para sa imong domain. I-add ang usa ka DNS record:

```
Type: A (o CNAME)
Host: *
Value: [imong server IP]
```

Tingali pangutana sa imong hosting provider kung dili ka sigurado unsaon pag-configure ni.

### Mga isyu sa authentication human sa setup

Kung gihawa ka o nasinati nimo ang cookie errors human sa multisite setup:

1. Limpyohan ang imong browser cookies para sa site
2. Mag-login pag-usab sa `yourdomain.com/wp-login.php`
3. Kung nagpadayon ang problema, siguroa nga wala kini set og `COOKIE_DOMAIN` ngadto sa `false` sa imong `wp-config.php` — kini usa ka giila nga isyu sa subdomain multisite installations

### Usa ka lakang nasayop panahon sa installation

Kung naa sa usa sa mga lakang sa pag-install na adunay sayop:

1. Isulat ang mensahe sa sayop nga gipakita
2. Balik sa configuration step ug sulayi pag-usab
3. Kung magpadayon pa ang sayop, i-check ang PHP error log sa imong server para sa dugang detalye
4. Ang mga lakang nga nahuman na sa una dili na ipasok (ang installer kay idempotent)
