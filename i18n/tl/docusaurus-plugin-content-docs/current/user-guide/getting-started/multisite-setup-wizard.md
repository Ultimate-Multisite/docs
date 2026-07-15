---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ang Ultimate Multisite ay may kasamang built-in na wizard na awtomatikong ginagawang WordPress installation mo para maging isang WordPress Multisite network. Tinatanggal nito ang pangangailangan na manu-manong i-edit ang `wp-config.php` o magpatakbo ng mga database command.

:::tip
Kung ang iyong WordPress installation ay tumatakbo na bilang isang Multisite network, maaari mong laktawan ang hakbang na ito nang buo. Lumilitaw lang ang wizard kapag hindi pa naka-enable ang Multisite.
:::

## Kailan Lumilitaw ang Wizard? {#when-does-the-wizard-appear}

Kapag nag-activate ka ng Ultimate Multisite sa isang standard (non-Multisite) WordPress installation, madedetect ng plugin na hindi naka-enable ang Multisite at awtomatikong ididirekta ka nito sa Multisite Setup Wizard sa halip na sa regular setup wizard.

Maaari mo rin itong ma-access nang direkta sa **WP Admin > Ultimate Multisite > Multisite Setup**.

## Mga Kinakailangan (Prerequisites) {#prerequisites}

Bago mo simulan ang wizard, siguraduhin na:

- Mayroon kang **administrator access** sa iyong WordPress installation
- Ang file na `wp-config.php` ng iyong server ay **pwedeng i-edit** ng web server
- Mayroon kang **recent backup** ng iyong mga files at database

:::warning
Binabago ng wizard ang iyong `wp-config.php` file at lumilikha ng mga bagong database table. Laging gumawa ng backup bago magpatuloy.
:::

## Hakbang 1: Pagbati (Welcome) {#step-1-welcome}

Ang unang screen na ito ay nagpapaliwanag kung ano ang WordPress Multisite at kung ano ang gagawin ng wizard:

- I-enable ang feature ng Multisite sa iyong WordPress configuration
- Lumikha ng mga kinakailangang network database tables
- Magdagdag ng mga kailangang multisite constants sa `wp-config.php`
- Gawing active ang Ultimate Multisite sa buong network

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

I-click ang **Continue** para magpatuloy.

## Hakbang 2: Network Configuration {#step-2-network-configuration}

Sa hakbang na ito, itatanong sa iyo kung paano mo i-configure ang mga setting ng iyong network.

### Site Structure {#site-structure}

Piliin kung paano naka-organisa ang iyong mga site sa network:

- **Sub-domains** (Inirerekomenda) — Ang bawat site ay magkakaroon ng sariling subdomain, halimbawa ay `site1.yourdomain.com`
- **Sub-directories** — Ang mga site ay gagawin bilang mga path, halimbawa ay `yourdomain.com/site1`

:::note
Kung pipili ka ng sub-domains, kailangan mong i-configure ang **wildcard DNS** at isang **wildcard SSL certificate** para sa iyong domain. Karamihan sa mga managed WordPress host na bahala dito nang awtomatiko. Tingnan ang [Ultimate Multisite 101](./ultimate-multisite-101) para sa mas detalyadong paghahambing.
:::

### Network Title {#network-title}

Maglagay ng pangalan para sa iyong network. Ang default ay ang pamagat ng kasalukuyang site mo na may idinadagdag na "Network". Maaari mo itong baguhin mamaya mula sa network settings.

### Email ng Network Admin {#network-admin-email}

Ang email address na gagamitin para sa mga notification ng administrasyon ng network. Ang default ay ang email address ng kasalukuyang user.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Pagkatapos punan ang mga fields, i-click ang **Continue** para magpatuloy.

## Hakbang 3: Instala {#step-3-installation}

I-click ang button na **Install** para magsimula. Ang wizard ay gagawa ng limang awtomatikong hakbang nang sunod-sunod, at ipapakita nito ang progreso ng bawat isa sa real-time:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Hakbang | Deskripsyon |
|------|-------------|
| **I-enable ang Multisite** | Idagdag ang `WP_ALLOW_MULTISITE` constant sa `wp-config.php` |
| **Gumawa ng Network** | Gumawa ng mga database table para sa multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, atbp.) at punan ito ng iyong network configuration |
| **I-update ang Configuration** | Idagdag ang mga huling multisite constants sa `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, atbp.) |
| **Ayusin ang Cookies** | Siguraduhin na tama ang site URL sa network metadata para maiwasan ang problema sa authentication pagkatapos i-activate |
| **I-activate ang Network Plugin** | I-network activate ang Ultimate Multisite para tumakbo ito sa buong network |

Bawat hakbang ay magpapakita ng isa sa mga status na ito:

- **Pending** — Naghihintay pa itong ma-proseso
- **Installing...** — Kasalukuyang tumatakbo
- **Success!** — Matagumpay na natapos
- **Error message** — May naganap na error (ang mensahe ay maglalarawan ng problema)

Kapag natapos nang matagumpay ang lahat ng hakbang, makikita mo ang luntiang status na "Success!" para sa bawat item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Pagkatapos nito, awtomatikong lalipat ang wizard sa screen ng pagtatapos.

## Hakbang 4: Tapusin {#step-4-complete}

Kapag natapos na ang instalasyon, makikita mo ang mensahe ng tagumpay na nagpapatunay na naka-enable na ang WordPress Multisite.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Maaari mo nang ituloy ang Ultimate Multisite setup wizard para i-configure ang iyong WaaS platform (detalye ng kumpanya, default na nilalaman, payment gateways, atbp.).

:::note
Pagkatapos matapos ang multisite installation, ire-redirect ka sa network admin na bagong naka-enable. Baka kailanganin mong mag-log in ulit dahil ina-update ang authentication cookies para sa multisite environment.
:::

## Manual Setup Fallback {#manual-setup-fallback}

Kung hindi kayang isulat ng wizard ang iyong `wp-config.php` file (dahil sa file permissions o server restrictions), ipapakita nito ang eksaktong code na kailangan mong idagdag nang mano-mano:

1. Ang mga **wp-config.php constants** na kailangang idagdag bago ang linya na `/* That's all, stop editing! */`
2. Ang mga **.htaccess rewrite rules** na angkop para sa napiling istraktura ng iyong site (subdomain o subdirectory)

Pagkatapos mong gawin ang mga manual na pagbabago, i-refresh mo ang page at madedetect ng wizard na aktibo na ang multisite.

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

### Sinasabi ng wizard na hindi writable ang wp-config.php {#the-wizard-says-wp-configphp-is-not-writable}

Kailangan ng web server process mo ng write permission sa file na `wp-config.php`. Maaari mong gawin ito sa pamamagitan ng:

- Pansamantalang baguhin ang file permissions sa `644` o `666`
- Gamitin ang mga manual setup fallback instructions na ibinigay ng wizard
- Magtanong sa iyong hosting provider para humingi ng tulong

### Hindi ma-access ang mga site pagkatapos mag-setup (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Kung pinili mo ang subdomain structure, kailangan mong i-configure ang **wildcard DNS** para sa iyong domain. Magdagdag ng isang DNS record:

```
Type: A (o CNAME)
Host: *
Value: [your server IP]
```

Tingnan sa iyong hosting provider kung hindi ka sigurado kung paano ito i-configure.

### Mga isyu sa authentication pagkatapos mag-setup {#authentication-issues-after-setup}

Kung hindi ka naka-log in o nakakaranas ng problema sa cookie pagkatapos i-set up ang multisite:

1. Mag-clear ng cookies ng iyong browser para sa site na iyon
2. Mag-log in ulit sa `yourdomain.com/wp-login.php`
3. Kung nananatili pa rin ang problema, tingnan kung hindi naka-set ang `COOKIE_DOMAIN` sa `false` sa iyong `wp-config.php` — ito ay kilalang isyu sa mga subdomain multisite installation

### Nagkaroon ng pagkabigo sa isang hakbang sa installation {#a-step-failed-during-installation}

Kung mayroong error na lumalabas sa isa sa mga hakbang ng installation:

1. Itala ang mensahe ng error na ipinapakita
2. Bumalik sa configuration step at subukan ulit
3. Kung nananatili pa rin ang error, tingnan ang PHP error log ng iyong server para sa mas maraming detalye
4. Ang mga hakbang na natapos na ay hindi na susubukan muli (ang installer ay idempotent)
