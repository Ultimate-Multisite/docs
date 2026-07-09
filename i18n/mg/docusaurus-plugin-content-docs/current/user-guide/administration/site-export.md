---
title: Famoahana ny toerana
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportation an' Site {#site-export}

Ny pejy admin hoe **Site Export**, dia mamela ny administrator an'ny tambajotra (network) mba hampaketrahana site iray, na ny tambajotra manontolo rehetra ho archive azo alaina ho an'ny famindrana (migration), fanatsarana (backup), na asa fanomezana.

## Famindrana site iray {#exporting-one-site}

Mandehana any amin'i **Ultimate Multisite > Site Export** ary safidio hoe **Generate new Site Export**. Safidio ny subsite tianao hivoaka, dia safidio koa raha tokony ahitana ao anatin'ilay archive ireo uploads, plugins, ary themes.

Rehefa vita ny famindrana, dia alao ZIP avy amin'ny lisitry ny **Existing Exports**. Ireo ZIP azo alefa dia ahitana `index.php` mampandray azy ho automatique (self-booting) sy `readme.txt`, ka afaka atao ny mametraka ilay archive amin'ny host vaovao ary manomboka avy hatrany tsy mila mametraka plugin importer hafa aloha.

## Famindrana ny tambajotra manontolo {#exporting-the-whole-network}

Ampiasao ny **Network Export** eo amin'ny pejy Site Export rehefa mila archive iray ahitana ireo subsite rehetra ao anatin'ny tambajotra ianao. Tena ilaina izany mialoha ny famindrana host, fanazaran-tena momba ny fahasimban'ny rafitra (disaster-recovery drills), na fanamboarana staging izay mila miara-miasa tsirairay ny subsite rehetra.

Satria ny Network Export dia mety lehibe kokoa noho ny famindrana site iray, dia ataovy izany mandritra fotoana tsy misy olana (low-traffic window) ary avereno ve raha azo antoka fa manana toerana malalaka ampy ny toerana fitehirizana ho an'ny uploads, plugins, themes, ary ZIP voatavo.

### Network Import Bundles {#network-import-bundles}

Nanomboka tamin'ny Ultimate Multisite 2.12.0, ny Site Exporter dia afaka mamorona **network import bundles** — archive manokana natao mba hanatsarana ny famerenana site an-tanjon-dranomasina (network-wide site restoration). Ny network import bundle dia ahitana ireo rakitra sy metadata ilaina rehetra mba hanatsarana ireo site maromaro ho amin'ny fampiasana tambajotra vaovao.

#### Famoronana Network Import Bundle {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export**-nifotra
2. Tsindrio ny **Generate new Network Export**
3. Safidio ny **Network Import Bundle** ho karazana export
4. Mifidiana raha hampidirina ireo upload, plugins ary themes ianao
5. Tsindrio **Generate**
6. Download ny ZIP bundle avy ao amin'ny lisitry ny **Existing Exports**

#### Famohana avy amin'ny Network Import Bundle {#restoring-from-a-network-import-bundle}

Mba hanamboarana (restore) ireo tranonkala avy amin'ny network import bundle ianao:

1. Apetra Ultimate Multisite eo amin'ny host tianao
2. Feno ny wizard fametrahana multisite
3. Mandehana any amin'ny **Ultimate Multisite > Site Export** eo amin'ny network vaovao
4. Tsindrio **Import Network Bundle**
5. Apetra ny ZIP file an'ny network import bundle
6. Araho ny toromarika fametrahana miseho eo amin'ny efijery

Ny network import bundles dia mitazona:
- Ny votoatin'ny tranonkala (posts, pages, custom post types)
- Fandrefesana sy safidy an'ny tranonkala
- Anjara toerana sy zo fiasa ho mpampiasa (User roles and permissions)
- Plugins sy themes (raha voarakitra ao amin'ilay bundle)
- Uploads media (raha voarakitra ao amin'ilay bundle)
- Database tables sy data manokana

## Fametrahana ZIP export izay mitsangana (self-booting) {#installing-a-self-booting-export-zip}

Mba hanamboarana ny ZIP mitsangana eo amin'ny host vaovao:

1. Apetra ny votoatin'ny ZIP efa nivoaka ao amin'ny web root tianao
2. Sofian'ny `index.php` napetraka dia amin'ny browser ianao
3. Araho ny toromarika fametrahana miseho eo amin'ny efijery avy amin'ilay export package efa voarakitra.
4. Jereo ny `readme.txt` efa voarakitra mba hahazoana fampahalalana momba ny export manokana alohan'ny hanaovana fanesorana ireo rakitra vonjy taitra (temporary files).

Ho an'ny antsipiriany momba ny fametrahana sy ny import ho an'ny addon manokana, jereo ny [Site Exporter addon documentation](/addons/site-exporter).

Ho an'ilay tool ho an'ny tranonkala iray (single-site) voarakitra ao amin'ny Ultimate Multisite 2.9.0, jereo eto: [Export & Import](/user-guide/administration/export-import).
