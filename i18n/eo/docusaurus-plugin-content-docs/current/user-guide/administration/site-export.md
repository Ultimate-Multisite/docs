---
title: Sito ekspo
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Sito Exportado {#site-export}

La pagu WordPress **Site Export** (Export de Sitio) permet admin de rede paketatu un sito, aŭ la tuta retoj en arkivo descargablaj por migrado, backup, aŭ labor de transdonado.

## Exportado de unu sito {#exporting-one-site}

Aliri al **Ultimate Multisite > Site Export** kaj elektu **Generate new Site Export** (Generi nova Site Export). Elektu la sub-sito kiun vi volas exporti, tiel elektu ĉu la arkivo devas inkluzi uploadojn, pluginojn kaj temojn.

Kiam la exportado finas, descargu la ZIP el la listo **Existing Exports** (Exportoj Ekzistantaj). Export ZIPoj nun inkluzas mem-startan `index.php` kaj `readme.txt`, tiel arkivo povas esti plibordita al nova hosto kaj komenciĝi sen pri pli malvoki instali apartan import plugin.

## Exportado de la tuta retoj {#exporting-the-whole-network}

Uzu **Network Export** (Export de Rete) sur la pagu Site Export, kiam vi bezonas unan arkivon inkluzivan ĉiuj sub-sitoj en la retoj. Tio estas utile antaŭ host migradoj, katastrofo-rekonvilibro provoj aŭ staging reconstruktoj, kie ĉiu sub-sito devas diri kun la alia.

Ĉar reta exportado povas esti multe pli granda ol exportado de unu sito, faru ĝin dum periodaj malgravitaj trafikoj kaj konfirme, ke la celita storo havas sufi sian librevon por uploadoj, pluginoj, temoj kaj generitaj ZIP-filoj.

### Network Import Bundles (Pakluntoj de Import Rete) {#network-import-bundles}

Kevilis kun Ultimate Multisite 2.12.0, Site Exporter povas generi **network import bundles** (pakluntojn de import retoj) — specialaj arkivoj dezajnitaj por simpligita restorado de la sito tuta la retoj. Unu network import bundle inkluzas ĉiuj necesaj filoj kaj metadatumo por restori plurajn sitojn al nova reta instalita.

#### Generi Network Import Bundle {#generating-a-network-import-bundle}

1. Alti **Ultimate Multisite > Site Export** aliri
2. Klik **Generate new Network Export** (Nova Rete Ekspor Kreere)
3. Selekte **Network Import Bundle** kiel ekspor tipon
4. Elekti ĉu vi inkluzas uploadojn, pluginojn kaj temojn
5. Klik **Generate** (Kreere)
6. Senki la bundle ZIP din el la listo **Existing Exports** (Eksistantaj Eksporoj)

#### Restorigo el Network Import Bundle {#restoring-from-a-network-import-bundle}

Por restorigi sitaĵojn el network import bundle:

1. Instalu Ultimate Multisite sur via target hosto
2. Kompletu la multisite setup wizard (wizard por multisite montri)
3. Aliri **Ultimate Multisite > Site Export** sur la nova retejo
4. Klik **Import Network Bundle** (Importi Network Bundle)
5. Senki la network import bundle ZIP filon
6. Segu la instruojn de la skrimi el la ekrano por importo
7. La importproceso restoros ĉiuj sitaĵoj, ilia enon kaj konfiguraciojn

Network import bundles konservas:
- Sitaĵcontentan (postoj, pagoj, custom post types)
- Sitaaj ŝanĝojn kaj opciojn
- Uzeraj roloj kaj permesoj
- Pluginajn kaj temojn (se ili inkluzita en la bundle)
- Media uploadojn (se ili inkluzita en la bundle)
- Custom bazdatobazon kaj datumojn

## Instalu self-booting ekspor ZIP {#installing-a-self-booting-export-zip}

Por restorigi self-booting ZIP sur nova hosto:

1. Senki la eksporita ZIP enhavon al la targeta web rooto.
2. Opun la senkiitan `index.php` en brauzero.
3. Segu la instruojn de la skrimi el la bundled ekspor pakazo por instalisto.
4. Revizi la bundled `readme.txt` por ekspor-specifa notoj antaŭ forigi temporajn filojn.

Por instalado kaj importado detaloj specifaj por addon'oj, renkontu [Site Exporter addon documentation](/addons/site-exporter).

Por la single-site instrumento, ajnan aldatita en Ultimate Multisite 2.9.0, renkontu [Export & Import](/user-guide/administration/export-import).
