---
title: Whakaahua Wāhi
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Whakarite i te Wāhi (Site Export) {#site-export}

Ko te **Site Export** admin page e tino whakamōhaka ai ngā administrator o te wāhi (network administrators) ki te pakanga i te wāhi, he pakihi, he whole network, ki te archive (file) e taea te whai mai ana mō te migration, backup, he whakaora, he whakawhanaungatanga.

## Whakarite Wāhi Taku (Exporting one site) {#exporting-one-site}

Pāpā i **Ultimate Multisite > Site Export** ā, he whiri i **Generate new Site Export**. Whiri i te subsite (wāhi whānui) e tino tika ana ki te whakawhakarite, ā, he whiri mō te archive kia ahau pēnei: mō te uploads, plugins, me themes.

I roto i te wā e whakatou te export, whai i te ZIP (file) tō **Existing Exports** list. Ko ngā ZIPs o te export e hoki ana i te `index.php` e tino tika ana ki te whakamahi anō (self-booting) me te `readme.txt`, ko te mea he tino mārama, kia taea ai te whakapūmau i te archive ki te host hou me te whakatō i a ia i roto i te pūrere importer separate (plugin).

## Whakarite Whole Network (Exporting the whole network) {#exporting-the-whole-network}

Whai i **Network Export** i runga i te Site Export page ko te wā e tino tika ana koe he tino archive e mō te subsites katoa i te network. He tino whakahou ana tēnei i roto i te wā e tino tika ana koe ki te migration o host, he whakaora pēnei i te disaster-recovery drills, ā, he staging rebuilds ko te mea kua roa katoa ngā subsites kiawhiri rā.

Ko te network export he tino nui ake (larger) noa i te site export tōi, ko he tino tika ana koe ki te whakatou i a ia i roto i te wā e tino piko ai te traffic (low-traffic window), ā, he tino mārama ana koe mō te free space o te target storage kia whai ake i ngā uploads, plugins, themes, me ngā ZIP files e whakatō.

### Network Import Bundles {#network-import-bundles}

Ko ko te Ultimate Multisite 2.12.0 i runga i te Site Exporter he tino tika ana ki te whakawhakarite **network import bundles** — ngā archive (file) whānui e tino tika ana, kua tino whakahou ana mō te restoration o te site katoa i te network. Ko ko network import bundle ko he tino pūmanawa katoa me ngā metadata e tika ana kia whakatō i ngā sites maha ki te installation hou o te network.

#### Whakarite Network Import Bundle (Generating a Network Import Bundle) {#generating-a-network-import-bundle}

1. Pā no **Ultimate Multisite > Site Export** (Whakaahua Site)
2. Whakaheke **Generate new Network Export** (Tohu Awhi Export hou)
3. Titi i **Network Import Bundle** he mea whakamahinga mō te puta mai o te export
4. Whakarite mō te mea e hoki ana: a uploads, plugins, me themes
5. Whakaheke **Generate** (Whakaahua)
6. Whakarato ZIP bundle teti i te list **Existing Exports** (Export hou e pai)

#### Hoki mai i Network Import Bundle {#restoring-from-a-network-import-bundle}

Mō te hoki mai o ngā site no network import bundle:

1. Whakarite Ultimate Multisite ki te host kua whai mo te wā.
2. Whakamārama te wizard o te multisite setup (whakawhanaungatanga multisite).
3. Pā no **Ultimate Multisite > Site Export** i te network hou.
4. Whakaheke **Import Network Bundle** (Whakarato Network Bundle)
5. Whakarato (Upload) te ZIP file o te network import bundle.
6. Whakarongo ki ngā whakamārama o te screen mō te whakarito.
7. Ko te whakataunga i te puta mai (import process) e hoki ana i ngā site katoa, ngā mea i roto i ahau, me ngā whakaritenga.

Ko ngā network import bundles e whaiaro:
- Ngā mea i roto i te site (posts, pages, custom post types)
- Ngā whakaritenga me ngā option o te site
- Ngā wāhi o ngā user me ngā manatū (roles and permissions)
- Ngā plugins me ngā themes (he tino whaiaro ana i te bundle)
- Ngā uploads o media (he tino whaiaro ana i te bundle)
- Ngā database tables me ngā data whaiaro

## Whakarito ZIP export e mō te self-booting {#installing-a-self-booting-export-zip}

Mō te hoki mai o te ZIP e āwhi ana ki te whakamahi (self-booting) i host hou:

1. Whakarato (Upload) ngā mea i roto i te ZIP e puta mai ki te web root o te target.
2. Whakawātea te `index.php` kua whakarato i te browser.
3. Whakarongo ki ngā whakamārama o te installer o te bundle export mō te whakaahua.
4. Titi i te `readme.txt` e āwhi ana ki te export-specific notes (whakamārama mō te export) mō te whero i ngā file temporary (temporary files).

Mō ngā whakamahi me ngā whakamārama o te addon-specific installation me import, tiaki i te [Site Exporter addon documentation](/addons/site-exporter).

Mō te tool single-site e whāhi ana i Ultimate Multisite 2.9.0, tiaki i [Export & Import](/user-guide/administration/export-import).
