---
title: Pag-e-export ng Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export

Ang admin page na **Site Export** ay nagpapahintulot sa mga administrator ng network na i-package ang isang site, o ang buong network, sa isang downloadable archive para sa paglilipat (migration), pag-backup, o pagpasa ng trabaho.

## Pag-e-export ng isang site {#exporting-one-site}

Pumunta sa **Ultimate Multisite > Site Export** at piliin ang **Generate new Site Export**. Piliin ang subsite na gusto mong i-export, pagkatapos ay piliin kung kasama ba sa archive ang mga uploads, plugins, at themes.

Kapag natapos ang export, i-download ang ZIP mula sa listahan ng **Existing Exports**. Kasama na ngayon sa mga Export ZIP ang isang self-booting na `index.php` at isang `readme.txt`, kaya maaaring i-upload ang archive sa isang bagong host at simulan nang hindi na kailangang mag-install ng hiwalay na importer plugin.

## Pag-e-export ng buong network {#exporting-the-whole-network}

Gamitin ang **Network Export** sa Site Export page kapag kailangan mo ng isang archive na naglalaman ng lahat ng subsites sa network. Ito ay kapaki-pakinabang bago ang mga paglilipat ng host, mga pagsasanay sa disaster-recovery, o pag-rebuild ng staging kung saan kailangang maglakbay nang magkakasama ang bawat subsite.

Dahil ang network export ay maaaring mas malaki kaysa sa single-site export, patakbuhin ito sa oras na mababa ang trapiko (low-traffic window) at kumpirmahin na may sapat na bakanteng espasyo ang target storage para sa uploads, plugins, themes, at mga nabuong ZIP files.

### Network Import Bundles {#network-import-bundles}

Simula sa Ultimate Multisite 2.12.0, ang Site Exporter ay maaaring bumuo ng **network import bundles** — mga espesyal na archive na dinisenyo para sa mas madaling pagbabalik-buhay (restoration) ng buong network. Ang isang network import bundle ay naglalaman ng lahat ng kinakailangang files at metadata upang maibalik ang maraming sites sa isang bagong network installation.

#### Pagbuo ng Network Import Bundle {#generating-a-network-import-bundle}

1. Pumunta sa **Ultimate Multisite > Site Export**
2. I-click ang **Generate new Network Export**
3. Piliin ang **Network Import Bundle** bilang export type
4. Piliin kung isasama ba ang uploads, plugins, at themes
5. I-click ang **Generate**
6. I-download ang bundle ZIP mula sa listahan ng **Existing Exports**

#### Pagbabalik-buhay mula sa Network Import Bundle {#restoring-from-a-network-import-bundle}

Upang maibalik ang mga sites mula sa network import bundle:

1. I-install ang Ultimate Multisite sa iyong target host
2. Kumpletuhin ang multisite setup wizard
3. Pumunta sa **Ultimate Multisite > Site Export** sa bagong network
4. I-click ang **Import Network Bundle**
5. I-upload ang network import bundle ZIP file
6. Sundin ang mga on-screen import instructions
7. Ibinabalik ng proseso ng import ang lahat ng sites, ang kanilang content, at mga configuration.

Pinapanatili ng network import bundles ang:
- Site content (posts, pages, custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (kung kasama sa bundle)
- Media uploads (kung kasama sa bundle)
- Custom database tables and data

## Pag-install ng self-booting export ZIP {#installing-a-self-booting-export-zip}

Upang maibalik ang isang self-booting ZIP sa isang bagong host:

1. I-upload ang nilalaman ng exported ZIP sa target web root.
2. Buksan ang na-upload na `index.php` sa isang browser.
3. Sundin ang mga on-screen installer instructions mula sa bundled export package.
4. Suriin ang bundled `readme.txt` para sa mga tala na partikular sa export bago tanggalin ang mga temporary files.

Para sa mga detalye ng pag-install at pag-import para sa mga addon, tingnan ang [Site Exporter addon documentation](/addons/site-exporter).

Para sa single-site tool na idinagdag sa Ultimate Multisite 2.9.0, tingnan ang [Export & Import](/user-guide/administration/export-import).
