---
title: Gukoresha uburyo bwo gukoresha umuryango w'ubwoko bw'ubwoko
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Export Y'Urururo (Site Export) {#site-export}

Icyo **Site Export** admin page yitangira abanyamwuga b'uburyo bwo gukoresha uburyo bw'ubwujyanye n'uburyo bwo gutanga umwe site, cyangwa uburyo bwose bw'ubwoko (network), kugira ngo utangire mu buryo bwo gukoresha ibyo byo gutunganya (migration), gufata (backup), cyangwa gukora ibindi.

## Gutanga umwe site {#exporting-one-site}

Gukoresha **Ultimate Multisite > Site Export** kandi ugira uburyo bwo gukora **Generate new Site Export**. Urahindura umwe subsite wumva gukoresha, mbere yitangira kumenya niba uvirimo (archive) byashobora gutanga uploads, plugins, no themes.

Icyiza cyane iyo utanga yisobanuye, ugenda mu **Existing Exports** kandi utangira gukoresha ZIP. Izi ZIP zishobora gutanga `index.php` yizera ku muryango (self-booting) n'umugande w'ubwoko (`readme.txt`), kugira ngo uvirimo byashobora gufata ku host yashya kandi utangire gukoresha nta kumenya plugin ya gutanga ishyirwaho mbere.

## Gutanga uburyo bwose bw'ubwoko (whole network) {#exporting-the-whole-network}

Gukoresha **Network Export** kuri Site Export page iyo ukeneye umwe uvirimo wumva gukoresha uburyo bwo gutanga ibyo byose by'ubwoko mu muryango. Ibi bituma byiza mbere yitangira kumenya niba hari uvirimo (archive) cyose ku subsites mu muryango. Icyo cyari cyiza iyo hari uburyo bwo gukoresha ibyo byose by'ubwoko byashobora kuba byinshi cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane cyane

1. Kwibuka **Ultimate Multisite > Site Export** (Kopanya Ultimate Multisite > Site Export)
2. Click **Generate new Network Export** (Kwibuka **Gukora uburyo gishya bwo guhagarira mu Gukoresha Ubwoko**)
3. Select **Network Import Bundle** as the export type (Gukoresha **Network Import Bundle** nk'uburyo bw'uko uburengera)
4. Choose whether to include uploads, plugins, and themes (Kora uburyo bwo gukoresha ibyo bishobora guhindurwa, plugins n'ibyo byo gutegura)
5. Click **Generate** (Kwibuka **Gukora**)
6. Download the bundle ZIP from the **Existing Exports** list (Downloada bundle ZIP ku gice cy'uburyo bw'uko ibyo bishobora guhindurwa)

#### Gukoresha mu gihe cyo gutera ku Network Import Bundle {#network-import-bundles}

Kugira ngo utereye siti zitera ku network import bundle:

1. Install Ultimate Multisite ku host wako ukenewe
2. Wumvikane umwujiza (wizard) w'uburengera bw'ubusite
3. Kwibuka **Ultimate Multisite > Site Export** ku network yashya
4. Click **Import Network Bundle** (Kwibuka **Gukoresha Network Bundle**)
5. Uploada file ZIP ryo network import bundle
6. Gukora ibindi byo mu gihe cyo gutera ku gice cy'uburengera

Network import bundles bishobora guhindura:
- Icyemezo cy'ubusite (posts, pages, custom post types)
- Icyemezo n'ibyo bikoreshwa mu siti
- Ubwoko bw'abantu n'ibyo bishobora gukora (User roles and permissions)
- Plugins n'ibyo byo gutegura (niba bishobora guhindurwa mu bundle)
- Icyemezo cyo gukoresha ibintu (Media uploads) (niba bishobora guhindurwa mu bundle)
- Icyemezo cyo database n'ubwoko bw'ibyo bikoreshwa

## Gukoresha ZIP rya export ryihagarira mu gihe cyo gutera ku self-booting {#generating-a-network-import-bundle}

Kugira ngo utereye ZIP rya self-booting ku host w'umunsi w'ubusite:

1. Uploada ibintu byo gukoresha (contents) y'export ZIP ku web root ya siti ukenewe
2. Gusa `index.php` yashobora guhindurwa mu browser.
3. Gukora ibindi byo mu gihe cyo gutera ku mwandiko w'umwujiza (installer instructions) w'uburyo bw'uko uburengera bweziye mu bundle.
4. Gushyira umwanzuro w'ibyo bikoreshwa (readme.txt) ryihagarira mu gihe cyo gutera ku gice cy'uburengera mbere yagabanya ibintu by'umunsi.

Kugira ngo utereye ibindi byo gutegura n'ibindi byo guhindura bwo addon, umbwire [Site Exporter addon documentation](/addons/site-exporter).

Kugira ngo utereye ikintu cy'ubusite cyose mu Ultimate Multisite 2.9.0, umbwire [Export & Import](/user-guide/administration/export-import).
