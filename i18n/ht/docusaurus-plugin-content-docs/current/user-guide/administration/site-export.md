---
title: Eksport Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Eksport Site {#site-export}

La page d'administration **Site Export** pèmèt les administrateur rétoye koneksyon pake yon sèl site, oswa tout rezo a, anba fòma yon archive ki ka telechaje pou migrasyon, backup, oubyen travay transfer.

## Eksport yon sèl site {#exporting-one-site}

Ale nan **Ultimate Multisite > Site Export** epi chwazi **Generate new Site Export**. Chwazi sous-site ou vle eksporte a, apre sa chwazi si archive a dwe genyen telechaj (uploads), plugin yo, ak tem yo.

Lè eksport la fini, telechaje ZIP la nan lis **Existing Exports**. ZIP ki egziste kounye a gen yon `index.php` ki ka monte tèt li epi yon `readme.txt`, sa pou archive a ka monte sou yon nou an (fresh host) e kòmanse san ou pa bezwen enstale yon plugin import separè an premye.

## Eksport tout rezo a {#exporting-the-whole-network}

Sèvi ak **Network Export** sou page Site Export la lè ou bezwen yon sèl archive ki genyen tout sous-site nan rezo a. Sa itil pouvan anvan migrasyon anba host, egzèsis rekòtè (disaster-recovery drills), oubyen rebuild staging kote chak sous-site bezwen voyaj ansanm.

Puis ke yon eksport rezo ka pi gwo pase eksport sèl site a, fè li pandan yon moman ki pa gen anpil trafik e konfime ke espas estoke ou a gen ase espas lib pou telechaj (uploads), plugin yo, tem yo, ak ZIP ki te jene.

### Network Import Bundles {#network-import-bundles}

Kòmanse ak Ultimate Multisite 2.12.0, Site Exporter ka jene **network import bundles** — archive espesyal ki fèt pou reasemblans tout site nan rezo a byen fasil. Yon network import bundle genyen tout fichye ak metadata ki nesesè pou reasemblans plizyè site sou yon nou enstalasyon rezo a.

#### Jene yon Network Import Bundle {#generating-a-network-import-bundle}

1. Ale chèche **Ultimate Multisite > Site Export**
2. Klike sou **Generate new Network Export**
3. Chwazi **Network Import Bundle** kòm kalite export
4. Chwazi si ou vle mete uploads, plugins, ak themes la
5. Klike sou **Generate**
6. Télécharge bundle ZIP la soti nan lis **Existing Exports**

#### Retorno nan yon Network Import Bundle {#restoring-from-a-network-import-bundle}

Pou retounen sit yo soti nan yon network import bundle:

1. Enstale Ultimate Multisite sou host ou vle atake a
2. Fè tout etap setup multisite a fini
3. Ale nan **Ultimate Multisite > Site Export** sou nouvo network la
4. Klike sou **Import Network Bundle**
5. Telechaje ZIP file network import bundle la
6. Swiv enstriksyon ki sou ekran an pou import la
7. Pwosesis import la ap retounen tout sit yo, kontni yo, ak konfigirasyon yo

Network import bundles yo kenbe:
- Kontni sit la (posts, pages, custom post types)
- Konfigirasyon ak opsyon sit la
- Wòl ak pèmisyon itilizatè yo
- Plugins ak themes (si yo genyen nan bundle la)
- Upload media yo (si yo genyen nan bundle la)
- Tablè baz done koutim ak done

## Enstale yon ZIP export ki monte tèt li sou yon host nou an {#installing-a-self-booting-export-zip}

Pou retounen yon ZIP ki monte tèt li sou yon host ki janm limye:

1. Telechaje kontni ZIP la ki ekspor la nan web root atake a
2. Louvri `index.php` ou telechaje a nan yon browser la
3. Swiv enstriksyon installer ki sou ekran an soti nan pake export ki genyen an bundle la
4. Revize `readme.txt` ki genyen nan bundle la pou not ak espesifik pou export anvan ou retire fichye temporè yo.

Pou detay enstale ak import espesifik pou addon, gade dokiman [Site Exporter addon](/addons/site-exporter).

Pou zouti sit sèl (single-site tool) ki ajoute nan Ultimate Multisite 2.9.0, gade [Export & Import](/user-guide/administration/export-import).
