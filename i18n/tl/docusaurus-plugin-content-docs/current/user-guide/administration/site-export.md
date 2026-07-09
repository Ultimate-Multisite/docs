---
title: Pag-export ng Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Pag-export ng Site {#site-export}

Ang admin page na **Site Export** ay nagbibigay-daan sa mga network administrator na i-package ang isang site, o ang buong network, para maging downloadable archive para sa migration, backup, o paglilipat ng trabaho.

## Pag-e-export ng isang site {#exporting-one-site}

Pumunta sa **Ultimate Multisite > Site Export** at piliin ang **Generate new Site Export**. Piliin ang subsite na gusto mong i-export, pagkatapos ay piliin kung isasama ba sa archive ang mga uploads, plugins, at themes.

Kapag natapos ang export, i-download ang ZIP mula sa listahan ng **Existing Exports**. Ang mga ZIP file na ito ay may kasamang sariling `index.php` na nagsisimulang mag-boot at isang `readme.txt`, kaya maaari itong i-upload sa bagong host at simulan nang hindi muna kailangang mag-install ng hiwalay na importer plugin.

## Pag-e-export ng buong network {#exporting-the-whole-network}

Gamitin ang **Network Export** sa Site Export page kapag kailangan mo ng isang solong archive na naglalaman ng lahat ng subsites sa network. Ito ay kapaki-pakinabang bago ang host migrations, disaster-recovery drills, o staging rebuilds kung saan kailangang maglakbay nang magkakasama ang bawat subsite.

Dahil ang network export ay maaaring mas malaki kaysa sa pag-e-export ng isang site lamang, patakbuhin ito sa panahon ng mababang traffic at tiyakin na may sapat na bakanteng espasyo ang target storage para sa mga uploads, plugins, themes, at mga nabuong ZIP file.

### Network Import Bundles {#network-import-bundles}

Simula sa Ultimate Multisite 2.12.0, ang Site Exporter ay makakagawa ng **network import bundles** — mga espesyal na archive na idinisenyo para sa mas mabilis na pagpapanumbalik ng site sa buong network. Ang isang network import bundle ay naglalaman ng lahat ng kinakailangang files at metadata para maibalik ang maraming sites sa bagong network installation.

#### Pag-generate ng Network Import Bundle {#generating-a-network-import-bundle}

1. Pumunta sa **Ultimate Multisite > Site Export**
2. I-click ang **Generate new Network Export**
3. Piliin ang **Network Import Bundle** bilang export type
4. Pumili kung isasama ang mga uploads, plugins, at themes
5. I-click ang **Generate**
6. I-download ang bundle ZIP mula sa listahan ng **Existing Exports**

#### Pagbabalik (Restoring) Mula sa Network Import Bundle {#restoring-from-a-network-import-bundle}

Para maibalik ang mga site mula sa network import bundle:

1. I-install ang Ultimate Multisite sa iyong target host
2. Tapusin ang multisite setup wizard
3. Pumunta sa **Ultimate Multisite > Site Export** sa bagong network
4. I-click ang **Import Network Bundle**
5. I-upload ang network import bundle ZIP file
6. Sundin ang mga instruction sa pag-import na lalabas sa screen
7. Ang proseso ng import ay ibabalik ang lahat ng sites, kanilang content, at configurations

Pinapanatili ng network import bundles:
- Site content (posts, pages, custom post types)
- Mga setting at options ng site
- User roles at permissions
- Plugins at themes (kung kasama sa bundle)
- Media uploads (kung kasama sa bundle)
- Custom database tables at data

## Pag-install ng self-booting export ZIP {#installing-a-self-booting-export-zip}

Para maibalik ang isang self-booting ZIP sa isang bagong host:

1. I-upload ang nilalaman ng na-export na ZIP sa target web root.
2. Buksan ang na-upload na `index.php` sa browser.
3. Sundin ang mga instruction sa installer na lalabas sa bundled export package.
4. Suriin ang bundled `readme.txt` para sa mga notes na partikular sa export bago tanggalin ang mga pansamantalang file.

Para sa detalye ng pag-install at import para sa addon, tingnan ang [Site Exporter addon documentation](/addons/site-exporter).

Para sa single-site tool na idinagdag sa Ultimate Multisite 2.9.0, tingnan ang [Export & Import](/user-guide/administration/export-import).
