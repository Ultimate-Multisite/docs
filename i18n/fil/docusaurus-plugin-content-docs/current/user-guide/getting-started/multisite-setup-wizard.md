---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

May kasamang built-in wizard ang Ultimate Multisite na awtomatikong nagko-convert ng standard WordPress installation papuntang WordPress Multisite network. Hindi mo na kailangang mag-edit ng `wp-config.php` o mag-run ng database commands nang manu-mano.

:::tip
Kung ang iyong WordPress installation ay gumagana na bilang Multisite network, maaari mong laktawan ang hakbang na ito. Ang wizard ay lalabas lamang kapag hindi pa naka-enable ang Multisite.
:::

## Kailan Lalabas ang Wizard?

Kapag na-activate mo ang Ultimate Multisite sa isang standard (non-Multisite) na WordPress installation, made-detect ng plugin na hindi pa naka-enable ang Multisite at awtomatiko kang ire-redirect sa Multisite Setup Wizard imbes na sa regular na setup wizard.

Maaari mo rin itong direktang i-access sa **WP Admin > Ultimate Multisite > Multisite Setup**.

## Mga Kinakailangan

Bago mo i-run ang wizard, siguraduhing:

- May **administrator access** ka sa iyong WordPress installation
- Ang `wp-config.php` file ng iyong server ay **writable** ng web server
- May **recent backup** ka ng iyong mga file at database

:::warning
Binabago ng wizard ang iyong `wp-config.php` file at gumagawa ng mga bagong database table. Palaging gumawa ng backup bago magpatuloy.
:::

## Hakbang 1: Maligayang Pagdating

Ang unang screen ay nagpapaliwanag kung ano ang WordPress Multisite at kung ano ang gagawin ng wizard:

- I-enable ang Multisite feature sa iyong WordPress configuration
- Gawin ang mga kinakailangang network database table
- Idagdag ang mga kinakailangang multisite constant sa `wp-config.php`
- I-network-activate ang Ultimate Multisite sa buong network

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

I-click ang **Continue** para magpatuloy.

## Hakbang 2: Network Configuration

Sa hakbang na ito, kailangan mong i-configure ang iyong network settings.

### Site Structure

Piliin kung paano magiging organisado ang mga site sa iyong network:

- **Sub-domains** (Recommended) — Ang bawat site ay may sariling subdomain, hal. `site1.yourdomain.com`
- **Sub-directories** — Ang mga site ay ginagawa bilang mga path, hal. `yourdomain.com/site1`

:::note
Kung pipiliin mo ang sub-domains, kakailanganin mong i-configure ang **wildcard DNS** at **wildcard SSL certificate** para sa iyong domain. Karamihan ng managed WordPress host ay awtomatikong nag-aasikaso nito. Tingnan ang [Ultimate Multisite 101](./ultimate-multisite-101) para sa detalyadong paghahambing.
:::

### Network Title

Maglagay ng pangalan para sa iyong network. Ang default nito ay ang kasalukuyang site title mo na may dagdag na "Network". Maaari mo itong baguhin mamaya sa network settings.

### Network Admin Email

Ang email address na ginagamit para sa mga network administration notification. Ang default nito ay ang email address ng kasalukuyang user.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Pagkatapos punan ang mga field, i-click ang **Continue** para magpatuloy.

## Hakbang 3: Installation

I-click ang **Install** button para magsimula. Ang wizard ay nagsasagawa ng limang automated step nang sunud-sunod, bawat isa ay nagpapakita ng progress nito sa real-time:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Hakbang | Paglalarawan |
|---------|--------------|
| **Enable Multisite** | Idinadagdag ang `WP_ALLOW_MULTISITE` constant sa `wp-config.php` |
| **Create Network** | Ginagawa ang mga multisite database table (`wp_site`, `wp_sitemeta`, `wp_blogs`, atbp.) at pinupunan ang mga ito ng iyong network configuration |
| **Update Configuration** | Idinadagdag ang mga final multisite constant sa `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, atbp.) |
| **Fix Cookies** | Tinitiyak na tama ang site URL sa network metadata para maiwasan ang mga authentication issue pagkatapos ng activation |
| **Network Activate Plugin** | Ini-network-activate ang Ultimate Multisite para tumakbo ito sa buong network |

Bawat hakbang ay nagpapakita ng isa sa mga status na ito:

- **Pending** — Naghihintay na ma-process
- **Installing...** — Kasalukuyang tumatakbo
- **Success!** — Matagumpay na natapos
- **Error message** — May naganap na error (ang mensahe ang maglalarawan ng problema)

Kapag matagumpay na natapos ang lahat ng hakbang, makikita mo ang berdeng "Success!" status para sa bawat item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Awtomatikong magpapatuloy ang wizard sa completion screen.

## Hakbang 4: Kumpleto

Kapag kumpleto na ang installation, makikita mo ang success message na nagko-confirm na na-enable na ang WordPress Multisite.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Maaari ka nang magpatuloy sa Ultimate Multisite setup wizard para i-configure ang iyong WaaS platform (detalye ng kumpanya, default content, payment gateway, atbp.).

:::note
Pagkatapos makumpleto ang multisite installation, magre-redirect ang iyong browser sa bagong-enable na network admin. Maaaring kailanganin mong mag-log in ulit dahil ina-update ang authentication cookie para sa multisite environment.
:::

## Manual Setup Fallback

Kung hindi makapag-sulat ang wizard sa iyong `wp-config.php` file (dahil sa file permission o server restriction), ipapakita nito ang eksaktong code na kailangan mong idagdag nang manu-mano:

1. Ang mga **wp-config.php constant** na kailangang idagdag sa itaas ng `/* That's all, stop editing! */` na linya
2. Ang mga **.htaccess rewrite rule** na angkop para sa napili mong site structure (subdomain o subdirectory)

Pagkatapos gawin ang mga manu-manong pagbabago, i-refresh ang page at made-detect ng wizard na aktibo na ang multisite.

## Pag-troubleshoot

### Sinasabi ng wizard na hindi writable ang wp-config.php

Kailangan ng iyong web server process ng write permission sa `wp-config.php` file. Maaari mong:

- Pansamantalang baguhin ang file permission sa `644` o `666`
- Gamitin ang manual setup fallback instruction na ibinibigay ng wizard
- Humingi ng tulong sa iyong hosting provider

### Hindi ma-access ang mga site pagkatapos ng setup (subdomains)

Kung pinili mo ang subdomain structure, kailangan mong i-configure ang **wildcard DNS** para sa iyong domain. Magdagdag ng DNS record:

```
Type: A (o CNAME)
Host: *
Value: [IP ng iyong server]
```

Kumonsulta sa iyong hosting provider kung hindi ka sigurado kung paano ito i-configure.

### Mga authentication issue pagkatapos ng setup

Kung na-log out ka o nakakaranas ng cookie error pagkatapos ng multisite setup:

1. I-clear ang iyong browser cookie para sa site
2. Mag-log in ulit sa `yourdomain.com/wp-login.php`
3. Kung magpatuloy ang problema, tingnan kung ang iyong `wp-config.php` ay walang `COOKIE_DOMAIN` na naka-set sa `false` — ito ay isang kilalang issue sa subdomain multisite installation

### May nabigong hakbang sa installation

Kung may hakbang sa installation na nagpakita ng error:

1. Tandaan ang error message na lumabas
2. Bumalik sa configuration step at subukan ulit
3. Kung magpatuloy ang error, tingnan ang PHP error log ng iyong server para sa higit pang detalye
4. Ang mga hakbang na nakumpleto na ay lalaktawan sa mga susunod na pagtatangka (ang installer ay idempotent)
