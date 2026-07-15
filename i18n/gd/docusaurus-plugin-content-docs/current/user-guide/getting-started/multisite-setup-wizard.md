---
title: Aistidh a' Chùrsain Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite ma tha'n wizard a' chùin a' chùin a' WordPress installation sàthair a' tòr a' ngrìd-nàth (Multisite) a' tòr. Tha's a' chùin a' fhaic a' cheann a' leat a' `wp-config.php` a' leat a' command-a' db.

:::tip
Tha thuair a' sàmhail seachdaidh WordPress agad air a' tòr a' ngrìd-nàth, is eir a' chùin a' fhaic a' cheann a' leat a' an sin a' wizard. Tha's a' chùin a' sàmhail gu sònach nuair a' tòr a' ngrìd-nàth a' tòr a' sàmhail.
:::

## Nuair a thèid a' wizard? {#when-does-the-wizard-appear}

Nuair a thèid thu air Ultimate Multisite air WordPress installation sàthair, tha's a' plugin a' faic a' cheann a' leat a' ngrìd-nàth a' tòr a' sàmhail, agus tha's a' chùin a' fhaic a' cheann a' leat a' Multisite Setup Wizard air an sin a' wizard a' chùin.

Is eir thu a' faic a' cheann a' leat a' **WP Admin > Ultimate Multisite > Multisite Setup**.

## Pridhasan a tha a' cheann? {#prerequisites}

Tha thuair a' sàmhail gu sònach air an wizard, tha's a' cheann a' faic a' cheann:

- Tha thu **access administrator** air an WordPress installation agad
- Tha an `wp-config.php` air an server a' tòr a' leat a' web server
- Tha thu **recent backup** air do chluainne agus do db

:::warning
Tha an wizard a' pearsantu air an `wp-config.php` agad agus a' tòr a' leat a' tabhal-a' db ùr. Tha's a' cheann a' fhaic a' cheann a' leat a' sàmhail a' chùin.
:::

## Step 1: Welcome (Tairmhan) {#step-1-welcome}

Tha an cur-a' chùin a' tòr a' ngrìd-nàth air a' sàmhail agus tha's a' cheann a' fhaic a' cheann:

- A' chùin a' leat a' feature Multisite air do WordPress configuration
- A' chùin a' tòr a' tabhal-a' db sinne a' cheann a' leat
- A' chùin a' leat a' constants multisite a' leat a' `wp-config.php`

- A' chùin a' leat a' Network-activate Ultimate Multisite air an ngrìd-nàth

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Tha **Continue** a' cheann a' fhaic a' chùin a' tòr a' sgaidh.

Rinn an t-uisge gurcha a bh'iath a gineadhach:

- **Sub-domains** (Rinn a' chiallach) — Tha thàitean gu eil geann subdomain, e.g. `site1.yourdomain.com`
- **Sub-directories** — Tha thàitean a creachadh mar curthas, e.g. `yourdomain.com/site1`

:::note
Tha thuig a' chruinneachadh sub-domains, tha thuig a' chruinneachadh **wildcard DNS** agus **wildcard SSL certificate** airson do domain. Tha mòran de dhòigh WordPress managed a' chiallach a' sgaidh seo gu fìor. Sealladh [Ultimate Multisite 101](./ultimate-multisite-101) airson coimhrechan a' chluas.
:::

### Tàirnneach na Nàth (Network Title) {#step-2-network-configuration}

Gaisidh tàirnneach airson do nàth. Tha e a' chiallach a' sgaidh air an tàirnneach a tha thuig a' chruinneachadh le "Network" a' chluas. Is e cheann a' chiallach a' thabhairt air a' chlàradh a dhìon. Is e cheann a' chiallach a' sgaidh air an tàirnneach a tha thuig a' chruinneachadh.

### E-mail Admin na Nàth (Network Admin Email) {#site-structure}

Tha e-mail a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chiallach a' chial

| Step | Description |
|------|-------------|
| **Enable Multisite** | Añda an constant `WP_ALLOW_MULTISITE` i `wp-config.php` |
| **Create Network** | Creachais a tablas de database sinite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) agus populeadh tuairh riannachadh a tha air a bhith agad |
| **Update Configuration** | Añdaich an constantan sinite sinite sinite (MULTISITE, SUBDOMAIN_INSTALL, DOMAIN_CURRENT_SITE, etc.) i `wp-config.php` |
| **Fix Cookies** | Sealltainn gu bheil an URL sinite ort gu sònraich anns a metadata sinite sinite airson an t-uisge a tha air a bhith agad an uileachadh |
| **Network Activate Plugin** | Bheir an plugin Network-activate Ultimate Multisite airson earrachail an t-uisge air an t-uisge sinite sinite |

A chùlcas, a thabhair each step sealladh aon de uisge seo:

- **Pending** — A' guth a bhith a' sgrùdadh
- **Installing...** — A' sgrùdadh air an t-uisge
- **Success!** — A' deamhsach gu sònraich
- **Error message** — Tha earrachail a' tòiseachadh (beidh an meilinn a' sgrùdadh air an tòiseachadh)

Tha e cheannach, nuair a tholpaisicic a h-uileachd, tha thu a' faigh sealladh "Success!" gràin airson each item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Tha an uileachd air a' sgrùdadh an uileachadh gu leithid air an t-uisge sinite sinite.

## Step 4: Complete {#network-title}

Nuair a tholpaisicic a bhith agad an uileachadh, tha thu a' faigh meilinn deamhsach a tha a' sgrùdadh gun fhaigh an WordPress Multisite air a bhith agad.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Leugh thu an uileachd sinite sinite sinite air a' sgrùdadh airson a' chlàradh (fòcasan àite, deàrraidhean a tha air a bhith agad, deughan fhaisg, etc.).

:::note
Ràdh an t-uisge gu faice nach eil an t-uisge multisite agad, tha thu a' chluin a' leadadh gu nàdhuisge neòfar. Thuair a thiginn thu a' leadadh gu nàdhuisge mar a tha cuimhneachdan atharrachadh airson an measmhachd multisite.
:::

## Fallback airson seachdainn (Manual Setup) {#network-admin-email}

Tha e a' chluin a' leadadh nach eil a' faicinn a' crèidheachadh air a `wp-config.php` (a' chluin a' leadadh an t-uisge a' leadadh de uileam fhaighinn am pròiseas latha). Tha e a' faicinn an cod a tha thu ag iarraidh a' leughadh gu mheasach:

1. **Constantan `wp-config.php`** a tha thu a' leughadh a' leadadh an t-uisge a' leadadh air a `/* Tha seo, seachdaich an atharrachadh! */` line.
2. **Rùn-rùnaidhan `.htaccess`** a tha pàisge airson struchtar site a thugaimh (subdomain no subdirectory).

Tha e a' chluin a' leadadh an t-uisge a' faicinn gu nàdhuisge multisite a tha ag obair air a tha thu a' leughadh.

## Tòisichidhean (Troubleshooting) {#step-3-installation}

### Tha an t-uisge a' sàmhnuil gun tha `wp-config.php` a' leughadh {#step-4-complete}

Tha pròiseas web agad ag iarraidh pàisge air `wp-config.php`. Is e cheann de dhinn:

- A' chluin a' leadadh pàisge an t-uisge a' leadadh gu `644` no `666` seachdainn.
- Aig an tòisichidhean a' leadadh airson seachdainn a tha a' leadadh de uileam fhaighinn air a chluin a' leadadh.
- A' chluin a' leadadh cuimhneachadh gu faicinn a' leughadh an tòisichidhean a thugaimh.

### Tha sitean a' leughadh nach eil a' fhaighinn an uair a tha e a' leadadh (subdomains) {#manual-setup-fallback}

Tha thu a' leadadh struchtar subdomain, tha thu ag iarraidh a' rèidh a' leughadh **wildcard DNS** airson an domain. Tha thu a' leughadh curthaidhean DNS:

```
Type: A (no CNAME)
Host: *
Value: [an IP agad]
```

Thoir sealladh gu pàirtinn cuimhneachadh air a chluin a' leadadh an t-uisge mar tha thu a' faicinn a' leughadh seo.

### Earrachdaidh cuimhneachdan an uair a bha e a' leadadh {#troubleshooting}

Tha thu a' leughadh gu noch, no tha thu ag obair air earrachdaidh cuimhneachdan (cookie errors) an uair a bha e a' leadadh multisite:

1. A' chluin a' leughadh cuimhneachdan browser airson an site
2. A' leughadh gu nàdhuisge air `yourdomain.com/wp-login.php`
3. Mar a tha an earrachdaidh ag obair, tha thu a' faicinn gun tha `COOKIE_DOMAIN` aig `wp-config.php` a' leughadh `false` — tha seo e arrachdaidh a tha a' leughadh air seachdainn multisite.

### Tha seachdainn a' leughadh an t-uisge gu fhaicinn air a leadadh {#the-wizard-says-wp-configphp-is-not-writable}

Tha sealladh de dhèanamh ar an tòstáil a tha eilidh:

1. Note an meilinn de dhòigh a tha sgaidh.
2. Ràdh an tòstáil air an stiùir de chùra agus dìreach a' ghlamaid.
3. Má tha an tòstadh ag obair, leideann an log de ghairm PHP de thar a bheatha fhaighinn de sbéal.
4. Beidh na stiùir a tha air a thabhairt air a' chluarach sin air a' ghlamaid air a' chluarach eile (tha an installer ag obair gu mòr).
