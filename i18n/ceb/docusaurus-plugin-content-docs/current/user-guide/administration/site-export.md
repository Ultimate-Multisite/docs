---
title: Pag-export sa Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Pag-export sa Site

Ang admin page nga **Site Export** nagtugot sa mga network administrator nga i-package ang usa ka site, o ang tibuok network, ngadto sa downloadable archive para sa migration, backup, o trabaho sa paghatag.

## Pag-export sa usa ka site {#exporting-one-site}

Moadto sa **Ultimate Multisite > Site Export** ug piliha ang **Generate new Site Export**. Pilihi ang subsite nga gusto nimong i-export, dayon piliha kung ang archive kinahanglan ba maglakip sa uploads, plugins, ug themes.

Pagkahuman sa export, i-download ang ZIP gikan sa listahan sa **Existing Exports**. Ang mga ZIP file nga i-export karon naglakip na og usa ka self-booting `index.php` ug usa ka `readme.txt`, aron ang archive mahimong i-upload sa bag-ong host ug ma-start bisan wala pa mag-install og separate importer plugin.

## Pag-export sa tibuok network {#exporting-the-whole-network}

Gamita ang **Network Export** sa Site Export page kung kinahanglan nimo og usa ka archive nga naglangkob sa tanang subsites sa network. Kini makatabang sa dili pa ang host migrations, disaster-recovery drills, o staging rebuilds diin ang matag subsite kinahanglan maglakaw magkauban.

Tungod kay ang network export mahimong mas dako kaysa usa ka single-site export, i-run kini panahon nga gamay ang traffic ug siguruha nga ang target storage adunay igong libreng espasyo para sa uploads, plugins, themes, ug mga gihimo nga ZIP files.

### Network Import Bundles {#network-import-bundles}

Sugod sa Ultimate Multisite 2.12.0, ang Site Exporter makahimo og **network import bundles** — mga espesyal nga archive nga gidesinyo alang sa dali nga pagpabalik sa site sa tibuok network. Ang usa ka network import bundle naglangkob sa tanang kinahanglanon nga files ug metadata aron ma-restore ang daghang sites ngadto sa bag-ong network installation.

#### Paghimo og Network Import Bundle {#generating-a-network-import-bundle}

1. Adto sa **Ultimate Multisite > Site Export**
2. I-click ang **Generate new Network Export**
3. Piliha ang **Network Import Bundle** isip export type
4. Pilia kung isalakip ang mga uploads, plugins, ug themes
5. I-click ang **Generate**
6. I-download ang bundle ZIP gikan sa listahan sa **Existing Exports**

#### Pag-restore gikan sa Network Import Bundle {#restoring-from-a-network-import-bundle}

Para ma-restore ang mga site gikan sa network import bundle:

1. I-install ang Ultimate Multisite sa imong target host
2. Unlihi ang multisite setup wizard
3. Adto sa **Ultimate Multisite > Site Export** sa bagong network
4. I-click ang **Import Network Bundle**
5. I-upload ang network import bundle ZIP file
6. Sunda ang mga instruksyon sa pag-import nga makita sa screen
7. Ang proseso sa import mag-restore sa tanang sites, ilang content, ug configurations

Ang network import bundles nagapreserba:
- Site content (posts, pages, custom post types)
- Site settings ug options
- User roles ug permissions
- Plugins ug themes (kung naapil kini sa bundle)
- Media uploads (kung naapil kini sa bundle)
- Custom database tables ug data

## Pag-install og self-booting export ZIP {#installing-a-self-booting-export-zip}

Para ma-restore ang usa ka self-booting ZIP sa bag-ong host:

1. I-upload ang mga sulod sa exported ZIP sa target web root.
2. Ablihi ang na-upload nga `index.php` sa browser.
3. Sunda ang mga instruksyon sa installer nga makita sa bundled export package.
4. Huntaha ang bundled `readme.txt` para sa mga nota bahin sa export sa dili pa magtangtang og temporary files.

Para sa detalyado nga pag-install ug import sa addon, tan-awa ang [Site Exporter addon documentation](/addons/site-exporter).

Para sa single-site tool nga gi-add sa Ultimate Multisite 2.9.0, tan-awa ang [Export & Import](/user-guide/administration/export-import).
