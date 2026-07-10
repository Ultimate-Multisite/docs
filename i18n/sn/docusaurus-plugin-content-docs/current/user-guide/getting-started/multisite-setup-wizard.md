---
title: Mavizara yeKugadzirisa Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard {#multisite-setup-wizard}

Ultimate Multisite inoratir wizard inotir WordPress installation yakai kune into WordPress Multisite network. Izviro kuno kuita kuti uone kuti unenge ukati `wp-config.php` kana kurunika database commands.

:::tip
Kana WordPress yako inenge inogona ne network Multisite, unogona kuenda kupfuura iye step iye. Wizard inotopurwa chete kana Multisite haingakubviri.
:::

## Kana Wizard Inotopurwa? {#when-does-the-wizard-appear}

Kana uri kuitira Ultimate Multisite pa WordPress installation yakai standard (non-Multisite), plugin inoziva kuti Multisite haingakubviri uye inokupa redirect ku Multisite Setup Wizard chete kunoona regular setup wizard.

Unogona kuda kuenda nechekucheku **WP Admin > Ultimate Multisite > Multisite Setup**.

## Zvinotore Serudzo (Prerequisites) {#prerequisites}

Panguva unenge ukaitira wizard, ndichida kuti uone:

- Unenge uri **administrator access** pa WordPress installation yako
- File `wp-config.php` ya server yako inenge **writable** ne web server
- Unenge uri ne **recent backup** ye files uye database yako

:::warning
Wizard inobva kuunda changes mufile wako `wp-config.php` uye inokupa new database tables. Ndinenge uita backup panguva unenge ukaitira izvi.
:::

## Step 1: Welcome (Kutangazara) {#step-1-welcome}

Chikamu chekare chinobvunza kuti WordPress Multisite ndiyo, uye zvakaita wizard ichaita:

- Kuitira feature ya Multisite mu configuration yako ya WordPress
- Kuita database tables dzakakosha dze network
- Kuita constants dzakakosha dze multisite ku `wp-config.php`
- Kuvira Ultimate Multisite pachine network yese

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Chikamu chekare chiri **Continue** kuti uende.

## Step 2: Network Configuration (Kutanga Settings dzemakore) {#step-2-network-configuration}

Iye iinoda kuti uita configuration yakanzvimbo dze network yako.

### Site Structure (Mavhondso ekurimo) {#site-structure}

Chine chine kuti mweya wako we network dzachikwanisa kuva sei:

- **Sub-domains** (Zvinoreva) — Sites dzinogona kuva ne subdomain dzinazo, onozivakwa zvichiri, sezvi `site1.yourdomain.com`
- **Sub-directories** — Sites dzinogone kuva se paths, onozivakwa sei, sezvi `yourdomain.com/site1`

:::note
Kana uchigona sub-domains, unofanira kuita configuration ya **wildcard DNS** uye **wildcard SSL certificate** kuti domain yako iwe. Vakaramba vashandisa WordPress vanovaka izvi zvakanzvimbo. Serudzo [Ultimate Multisite 101](./ultimate-multisite-101) kuti uve nekuona kuratidza zvakawanda.
:::

### Network Title {#network-title}

Chinjira zvinoda kunzwa (name) yenyaya yako ya network. Izvi zvichatanga nechinangwa chesite yako chero ne "Network" kuitika. Unogona kuva nekuura izvi panguva dzine kuratidza kubva munzira dzinotevera (network settings).

### Network Admin Email {#network-admin-email}

Email inoshandiswa kuti vhizha (notifications) dze network administration. Izvi zvichatanga neemail ya mutsavo wako.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Panguva unopfuura maitembe, ndichida kuti uita **Continue** kuti utangane.

## Step 3: Installation {#step-3-installation}

Chinjira **Install** kuti utange. Wizard inaita zvinhu zviri kuita zvakawanda zvinotevera (automated steps) zvinoita zvakawanda, uye inokupa kuratidza kuratidza kwake mberi mberi:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Dingi | Chinyoriso |
|------|-------------|
| **Chida Multisite** | Ino chida `WP_ALLOW_MULTISITE` kune `wp-config.php` |
| **Kudzidzisa Network** | Kuratidza tables dzemafutikazi dze multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, nhema) uye kuva neconfiguration yako ye network |
| **Kupedzisira Configuration** | Kuita constants dzakare kune `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, nhema) |
| **Kupfura Cookies** | Kuti URL yechitambo iwe yakakodzera mu metadata ye network kuti usawane matambudziko ekutambudzika (authentication issues) panguva inopfungwa |
| **Kusarudza Plugin ye Network** | Kuratidza Ultimate Multisite kuti itizvise kune network yese |

Muri zvinhu zvakawanda, chinhu chinotarisirwa chinoratidza iwe:

- **Pending** — Inotarisirwa kutarisirwa
- **Installing...** — Inoenda nekuita
- **Success!** — Inokupa zvakakodzera
- **Error message** — Kuti kune matambudziko (chinhu chinoratidza matambudziko)

Ngeva zvichida chiri chakanaka, uchaona status ye "Success!" inochinja kwemwe mweya:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Kuti zvinhu zvose zvinokura zvakanaka, uchange uona status ye "Success!" yechidzidzisa chine mweya:

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Ushandisa iye kuti utatanga ne setup wizard ya Ultimate Multisite kuti uregure platform yako ye WaaS (matanho akawanda, content yakakodzera, payment gateways, nhema, nhema, nhema, nhema).

:::note
Pasi ndapana nekuti kurulum ya multisite yakumbuka, browser yako idzobva kuparamu (redirect) kune network admin inoitwa. Unogona kuendawo login chete chete kana kuti unenge uchida login chete chete chete nekuti authentication cookies dzichineerwa kuti environment ya multisite ine.
:::

## Setup Yekuti Inenge Iri Kufamba NeChikoro (Manual Setup Fallback) {#step-4-complete}

Kana wizard haunogone kuenda kune file yako `wp-config.php` (kunezvinhu zvepermissions kana restrictions dzinogara munyoyo we server), idzobva kuona code yakakodzera kuti uingire nehanda:

1. **Constants dzemweya ya wp-config.php** dzine kuingira kupfuura line `/* That's all, stop editing! */`
2. **Rewrite rules dzemweya ya .htaccess** dzinogona kutamba nemhando yakakosha yekuti unenge uita site yako (subdomain kana subdirectory)

Pasi kubva nekuita izvi zvinotamba, refresh page uye wizard idzobona kuti multisite inenge ine.

## Kufamba NeChikoro (Troubleshooting) {#manual-setup-fallback}

### Wizard inoti wp-config.php haunogone kuwedzera (not writable) {#troubleshooting}

Process ya web server yako inoda iweya (write permission) kune file `wp-config.php`. Unogona:

- Kubata permissions dzemweya kuti `644` kana `666`
- Kuratidza instructions dzinotamba dzinogara munyoyo we wizard

kana

- Kuenda neinstructions dzinotamba dzakazviratidzwa newizard
- Kuti hosting provider yako inenge yakubatsira

### Sites haziine kuita panguva kurulum (subdomains) {#the-wizard-says-wp-configphp-is-not-writable}

Kana uingine subdomain structure, unofanira kune configuration ya **wildcard DNS** yekuti domain yako ine. Shanda record:

```
Type: A (kana CNAME)
Host: *
Value: [your server IP]
```

Tsvaga nehosting provider yako kana haunoziva kuti uingire sei izvi.

### Masimba ekutambura panguva kurulum {#sites-are-not-accessible-after-setup-subdomains}

Kana uri kuenda out of login kana unenge uchida cookie errors panguva multisite setup:

1. Clear cookies dzako browser kune site
2. Login chete chete chete chete kuti `yourdomain.com/wp-login.php`
3. Kana masimba anogara, shanda kuti `wp-config.php` yako haine `COOKIE_DOMAIN` inoitwa `false` — iwe ndiri kunzwisisa izvi panguva multisite setup ya subdomain

### Kuti Chii Chishanda Panguva Kuratidza (A step failed during installation) {#authentication-issues-after-setup}

Kana chimwe zvinotarisirwa kubva munzira we kukura:

1. Ndinonoda chibvumirano chepanyama chinotarisirwa.
2. Zivimbisa ku step ye configuration uye ramba kuenda kuitorera.
3. Kana chibvumirano chinotarisirwa chinotarisirwa, ndichinja log ya PHP yechikuru (server) kuti ndizire zvinhu zvakawanda.
4. Steps dzakare yakakura dzachida kuenda zvinotarisirwa (installer inobva nekuita zvinhu zvakasiyana).
