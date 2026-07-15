---
title: Kupfuura Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Kusarera Kwesaiti (Site Export)

Peji readmin **Site Export** inabva admin page inabva kune administrators ve network kuti vapaone site imwe, kana nzvimbo yese ye network yakaiwa ku archive inogona kutorera kupenyu yekutanga (migration), backup, kana kunge kubatsirwa.

## Kusarera Site Imwe {#exporting-one-site}

Enda ku **Ultimate Multisite > Site Export** uye chine chine **Generate new Site Export**. Chibvumira subsite unoda kusarerwa, ndipo chine kutaura kuti archive inofanira kuva ne uploads, plugins, uye themes.

Nekuti kusarera kunokura, tora ZIP kubva mu list ya **Existing Exports**. ZIPs dzakasarera zvinhu zvinogona kutorera `index.php` inosimbisa yakanzwisisa (self-booting) uye `readme.txt`, izvi zvinoita kuti archive inogone kuitorerwa kune host chinobva nekuita kunyanya plugin ya importer pane kukanga iwe utange kubata importer plugin inotanga.

## Kusarera Network Yese {#exporting-the-whole-network}

Gara sei **Network Export** pa Site Export page kana unoda archive imwe inosimbisa subsites zvose mu network yako. Izvi zvinogona kuita kuti zvinhu zvakaita se host migrations, drills dze disaster-recovery, kana staging rebuilds where subsite dzese dzinofanira kutamba pamwechete.

Kuti Network export inga kuitika pane site imwe yakawanda kupfuura kusarera site imwe, tora iye nguva inenge yakanyanya kuita (low-traffic window) uye tsanidza kuti target storage inenge inazo free space yakaiwa kutorera uploads, plugins, themes, uye ZIP files dzakasarera.

### Network Import Bundles {#network-import-bundles}

Kutanga neUltimate Multisite 2.12.0, Site Exporter inogona kuita **network import bundles** — archive dzine zvinangwa (specialized archives) dzine kukosha kune kutanga kubva kwe network yese ye site restoration. Network import bundle inosimbisa zvinhu zvose zvakakosha uye metadata kuti utange kubva ne subsites dzakawanda ku installation ya network yakare.

#### Kusarera Network Import Bundle {#generating-a-network-import-bundle}

1. Penda ku **Ultimate Multisite > Site Export**
2. Klik **Generate new Network Export**
3. Select **Network Import Bundle** se chiriwe chekare (export type)
4. Chibvira kuti utangei kuita uploads, plugins, uye themes kana kuti haunengei
5. Klik **Generate**
6. Download bundle ZIP yevakundwa (Existing Exports)

#### Kuti unoreda (Restore) kubva munzira yakare (Network Import Bundle) {#restoring-from-a-network-import-bundle}

Kuti urere sites kubva munzira yakare (network import bundle):

1. Iita Ultimate Multisite pa host wako wese
2. Shanda wizard yekutanga multisite
3. Penda ku **Ultimate Multisite > Site Export** pa network yenyu yakare
4. Klik **Import Network Bundle**
5. Upload ZIP file renetwork import bundle
6. Iita misangano yemitemo (instructions) inochinjwa mune chiviri (on-screen)

7. Kurere (import) kunoita kuti sites, zvinhu zvinogona kuonekwa (content), uye nzira dzinogona kutanga (configurations) dziri kubva.

Network import bundles dzichingoshandisa:
- Zvinhu zvesite (posts, pages, custom post types)
- Settings uye options dzesite
- User roles uye permissions
- Plugins uye themes (kuti zvakanyorwa munzira yakare)
- Media uploads (kuti zvakanyorwa munzira yakare)
- Custom database tables uye data

## Kurere ZIP inochinjwa yechidzidzo chake (self-booting export ZIP) {#installing-a-self-booting-export-zip}

Kuti urere ZIP inochinjwa yechidzidzo chake pa host wese wekufamba (fresh host):

1. Upload zvinogona kuonekwa (contents) zveZIP yakare kune web root ya target.
2. Famba index.php yakayirwa munzira yakare mu browser.
3. Iita misangano yemitemo inochinjwa mune package yechidzidzo chake kuti utangei.
4. Shanda readme.txt inochinjwa (bundled) kuti uone zvinoreva zvinhu zveexport pangu, pangu nekuenda kuenda (before removing temporary files).

Kuti uone misangano yekutanga uye zvinogona kutanga kweaddon-specific, shandisa [Site Exporter addon documentation](/addons/site-exporter).

Kuti uone chizindiko chekureda uye kurere (Export & Import) chinotanga Ultimate Multisite 2.9.0, shanda [Export & Import](/user-guide/administration/export-import).
