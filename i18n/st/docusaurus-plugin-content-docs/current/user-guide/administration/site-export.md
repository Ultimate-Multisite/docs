---
title: Ho lula le site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exporting Site

Page admin ya **Site Export** e le ba leba ba administrator o le network, e fa'aopo i site ena whole network e le archive e le mafai fa'aopo mo migration, backup, pe mo work e le fa'aopo.

## Fa'aopo site ena site

Go to **Ultimate Multisite > Site Export** au fa'aopo **Generate new Site Export**. Select subsite o e te fa'aopo, pe mo fa'aopo a le archive e le fa'aopo uploads, plugins, and themes.

Pe mo le export e le fa'aopo, download ZIP o le liso o **Existing Exports**. Le ZIPs o le export e le fa'aopo include self-booting `index.php` pe `readme.txt`, sa le archive e fa'aopo i host fesoasoane a le fa'aopo mo le fa'aopo plugin importer se fa'aopo.

## Fa'aopo whole network

Use **Network Export** o le Site Export page ae mo le fa'aopo archive e le fa'aopo i subsites o le network fesoasoane. O le fa'aopo lona e le fa'aopo mo host migrations, disaster-recovery drills, pe staging rebuilds where each subsite e te fa'aopo fa'aopo.

Pe mo le network export e le fa'aopo tele a le site ena single-site export, run o ia i low-traffic window pe confirm that target storage e le fa'aopo enough free space mo uploads, plugins, themes, and generated ZIP files.

### Network Import Bundles

Starting with Ultimate Multisite 2.12.0, Site Exporter e fa'aopo **network import bundles** — archives e le fa'aopo mo restoration o site ena whole network a le fa'aopo. O le network import bundle e le fa'aopo all subsites e le necessary files and metadata mo restoration o multiple sites i a new network installation.

#### Fa'aopo Network Import Bundle

1. Go to **Ultimate Multisite > Site Export**
2. Click **Generate new Network Export**
3. Select **Network Import Bundle** as the export type
4. Choose whether to include uploads, plugins, and themes
5. Click **Generate**
6. Download the bundle ZIP from the **Existing Exports** list

#### Goala ho Baola ka Bundle e Ho Fetola (Restoring from a Network Import Bundle)

Ho fetola sites ka bundle se:

1. Install Ultimate Multisite ea host oa hau o tsoalo (target host).
2. Feha wizard ea multisite setup.
3. La **Ultimate Multisite > Site Export** ka network e ntlha.
4. Click **Import Network Bundle**.
5. Upload ZIP file ea network import bundle.
6. Follow instructions ea ho fetola tse di tsoalo (on-screen).
7. Ho fetola ho fetola ho fetola, ho fetola sites, boithakao ba bona, le configurations tsa bona.

Network import bundles li fetola:
- Content ea site (posts, pages, custom post types)
- Settings le options ea site
- User roles le permissions
- Plugins le themes (ha ho fetoloe ka bundle)
- Media uploads (ha ho fetoloe ka bundle)
- Custom database tables le data

## Ho Installela ZIP e Ho Fetola Se Se E Ho Fetola (Installing a self-booting export ZIP)

Ho fetola ZIP e se e ho fetola ka host e ntlha:

1. Upload contents ea ZIP e ho fetola ea web root ea hau o tsoalo.
2. Open `index.php` e ho uploadileng ka browser.
3. Follow instructions ea installer tse di tsoalo tsa bundle ea export ho fetola.
4. Review `readme.txt` ea bundle e ho fetola ho fetola ho fetola le notes ea export ho fetola haholo fa o fetola files tsa temporary.

Ho ba le details ea installation le import ea addon-specific, se le [Site Exporter addon documentation](/addons/site-exporter).

Ho ba le single-site tool e ntshweng ea Ultimate Multisite 2.9.0, se le [Export & Import](/user-guide/administration/export-import).
