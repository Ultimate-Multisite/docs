---
title: Whakaaro Whakawāhi Whakamahi
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Whakaritenga Whakawhiti Multisite (Multisite Setup Wizard) {#multisite-setup-wizard}

Ko Ultimate Multisite e hihanga i tōna whakatau ana, he wizard (whakamahi) e whakamohahau ana i te whakamaoritanga o te WordPress standard ki te hoatu network WordPress Multisite. Ko te mea ko, ei āhua ana koe ki te whakarereke manuahi i `wp-config.php` ahau i te whaiaro, ahau i te whakimu database commands.

:::tip
Ko te mea, ko ahau e taea ai koe ki whakatika i tēnei apa i te wā koe e hara ana i te network Multisite, he tino pai. Ko te wizard e pōutu akorua ko i roto i te wā ko ahei i te Multisite.
:::

## Iroana Ko Koa Ko Te Wizard? (When Does the Wizard Appear?) {#when-does-the-wizard-appear}

I te wā koe e whakatau Ultimate Multisite ki te installation WordPress standard (e tino ana, he kore Multisite), ko te plugin e whakaahua ana ko aiko ahau i te Multisite ka hara, ā, e pōutu koe ki te Multisite Setup Wizard i te awhiwai, i tētahi apa whakatau i te regular setup wizard.

Ko koa koe i te whaiaro i te **WP Admin > Ultimate Multisite > Multisite Setup**.

## Whakaritenga Whakawhiti (Prerequisites) {#prerequisites}

I te whakamaoritanga o te wizard, kia kore koe i te mea:

- Ko koe e hara ana i te administrator access ki tō installation WordPress
- Ko te file `wp-config.php` o tō server he tino whaiaro (writable) e te web server
- He backup hou ahau i tōna files me tō database

:::warning
Ko te wizard e whakawāhi ana i tō `wp-config.php` file ko e whakatika ana i ngā table database hou. Kia whakanui he backup koe i tēnei mea mō te whakatau i te apa.
:::

## Apa 1: Whakamāhi (Welcome) {#step-1-welcome}

Ko te screen taiao i whakaahua ana ko te WordPress Multisite he ahau, me te mea ko te mahi o te wizard:

- Whakaritenga i te feature Multisite i tō configuration o WordPress
- Whakawāhi i ngā table database network e pēnei
- Whakawāhi i ngā constants multisite e pēnei ki `wp-config.php`
- Whakatau (activate) Ultimate Multisite i roto i te network

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Whakawhanaungatanga (Click **Continue**) mō te whakatika i tēnei apa.

## Apa 2: Whakaritenga Network (Network Configuration) {#step-2-network-configuration}

Ko tēnei apa e takahia koe ki te whakarite i ngā setting o tō network.

### Whakaritenga Site Structure {#site-structure}

Rauatanga ahau i te mea e pēnei te whakamahi i ngā wāhi o te wāhiwā (network sites):

- **Sub-domains** (E tino rekenga) — Ka whai i te wāhi site i te subdomain, e.g. `site1.yourdomain.com`
- **Sub-directories** — Ka whakawiranga ngā wāhi site mō kaha, e.g. `yourdomain.com/site1`

:::note
Ko te mea i roto i te whiriwhiri sub-domains, ka tino kitea i te whakamahi **wildcard DNS** me **wildcard SSL certificate** mo te domain o koe. Ka whai ake ngā host WordPress a teitei (managed) ko te whakaaro ahau e hoki ana ki tēnei mea. He pēnei te whakaaturanga mō te whakawiranga mō te whakamahi i Ultimate Multisite 101.
:::

### Titiri o te Whānau Wāhi (Network Title) {#network-title}

Whakarite ingoa mō tō whānau wāhi. Ko te mea e pēnei ana ko he whakatutuki i te titiri o tō site i te whakamahi "Network" i te whakamārama. Kei te taea ai koe te whakawhiti i tēnei titiri i runga i ngā whakaritenga o te network i waenga i ngā wāhi.

### Email Admin o te Whānau Wāhi (Network Admin Email) {#network-admin-email}

Te email address e whakamahia mō ngā whakaaturanga whakahaere o te whānau wāhi. Ko te mea e pēnei ana ko he email address o te mea i roto i te user i te ora.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

I raro i te whero i ngā rohe, whakatika **Continue** mō te whakatika.

## Te Wikiwo 3: Whakawiranga (Installation) {#step-3-installation}

Whakaue i te puta mai o te **Install** mō te whai i te mahi. Ka whai ake te wizard i ngā mahi whā automated, ko e whakaatu ai i te whakawhanake i te ora i te wā, ko e whakaatu ana i te whakawhanake i te ora i te wā.

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Viatanga | Whakaritenga |
|------|-------------|
| **Whakaahua Multisite** | Whāinga te `WP_ALLOW_MULTISITE` i `wp-config.php` |
| **Whakawhanaungatanga Wāhi** | Whakawhanaunga ngā table o database mō multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) ā, whai whakaaro ana i te whakaritenga o tō wāhi (network configuration) |
| **Whakawātea Whakaritenga** | Whāinga ngā constants mō multisite i `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Whakawātea Cookies** | Kia tika te URL o te wāhi i te metadata o te network kia whakatika ngā pētrā (authentication issues) i araha i te whakamohana (activation) |
| **Whakaahua Plugin Network** | Whakaahua (Network-activate) i Ultimate Multisite kia maha atu i te network katoa tika |

Ko te mea, ko e whakaatu i tētahi o ngā status efta i ko whakatō (step) katoa:

- **Pending** — E pōtiki ana ki te whakahaere
- **Installing...** — E whakatika ana i te ora
- **Success!** — Whakamua atu i runga i te pai
- **Error message** — He pētrā (error) i tū, ā, ko te pētrā e whakatakoto ai te mea nui o te pētrā

I raro i te katoa i whakamaumau ana ngā whakataunga katoa, ka whakaatu koe i tētahi status "Success!" i te rāhi whero (green) mō kuitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruitiruit

:::note
Ihi, i tū mai i te whakatō multisite iho, ka whakawhiti i roto i te network admin pēnei. He mea nui ki koe kia whakamāhi anō, engari he tino pai ahau ia i te whakamāhi i te cookies authentication mō te multisite environment.
:::

## Whakawātea manu (Manual Setup Fallback) {#step-4-complete}

Ko te wizard ka taea te whakaroa i te `wp-config.php` mo koe (he mea e taea ana ko he ngā whakahaupūatanga o te file, he tino pēnei i te server). Ko te whakaaturanga i roto i te code he mea nui:

1. Ngā **constants o te wp-config.php** kia whakawero i runga i te line `/* That's all, stop editing! */`
2. Ngā **rewrite rules o te .htaccess** e tika ana mō te whānui o te site mo te structure (subdomain he pēnei, sub-directory).

I taro i ngā whakawhiti manu, whakaora i te page (refresh) ā, ka whakaahua te wizard i te multisite e active anō.

## Whakawātea (Troubleshooting) {#manual-setup-fallback}

### Ko te wizard kee ahau i roto i te wp-config.php he pēnei {#troubleshooting}
Ko te process o te web server ana tino pai ki te whakatere (write permission) i te `wp-config.php` file. Kei te mea, koe e taea ai:

- Whakanui anō i ngā permissions o te file ki `644` or `666`
- Whakarongo i ngā whakataunga whakamahi manu (manual setup fallback instructions) e pēnei i te wizard
- Whakawātea i tō hosting provider mō āwhina

### Kaore ia tika ko te site i roto i te setup (subdomains) {#the-wizard-says-wp-configphp-is-not-writable}
Ko te structure o subdomain he tino pai, ka taea e koe te whakarite **wildcard DNS** mo tō domain. Whakawero i te DNS record:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Whakawātea ki tō hosting provider kia whakatutaku ahau mō te whakarite i tēnei.

### Ngā piko o te authentication i roto i te setup {#sites-are-not-accessible-after-setup-subdomains}
Ko koe ka whai i te log out he tino pai, or ka whai i cookie errors i roto i te multisite setup:

1. Whakawātea i ngā cookies o tō browser mo te site
2. Whāhi anō i runga i `yourdomain.com/wp-login.php`
3. Ko te piko e pēnei, he tino pai ki te hiahia ahau kia whakaaro: ko te `COOKIE_DOMAIN` o tō `wp-config.php` ka whakahou i te `false` — he mea nui ana i roto i ngā multisite installations mo subdomain.

### He mahi e p failed during installation {#authentication-issues-after-setup}

Kāore i te whakamahinga i te whakamārama:

1. Tōna whakamārama i te whiriwhiri whakaahu (error message) e roa.
2. Whakarite ki te whakamārama whakaaturanga (configuration step) ā, whai i roto i tō whakamārama.
3. Ko te mea, ko te whakamārama e pēnei ana, he tino nui ia. Ko te whakamārama e pēnei ana, he tino nui ia.

4. Ngā whakamārama e whakatoua koe, ka whakatika i ngā whakamārama e pēnei ana i roto i ngā whakamārama e pēnei ana. (Ko te installer he idempotent).
