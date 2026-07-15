---
title: Taron Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Sarar da Gidaite Wurin Gida (Site Export)

Wurin gidaite wuri **Site Export** yana ba masu kula da shafuka na gida (network administrators) damar su riƙa wani wuri ko dukan gida a cikin wani farko mai iya sauke don tura shi, ajiye shi (backup), ko kuma yin aiki na kan shi.

## Sarar Wuri ɗaya {#exporting-one-site}

Tabbatar **Ultimate Multisite > Site Export** sannan ka zaɓi **Generate new Site Export**. Zaɓi subsite ɗin da kake so ka sarar, sannan ka zaɓi ko wani hoto (archive) ya haɗa da uploads, plugins, da themes.

Idan sarar ya gama, ka sauke ZIP daga cikin jerin **Existing Exports**. ZIP-yoyin sarar suna da `index.php` mai iya fara kansa da kuma `readme.txt`, don ajiya su za a iya shiga wuri daban (fresh host) ba tare da a yi shiga plugin na sarar da ke shiga shi kafin ba.

## Sarar Dukan Gida {#exporting-the-whole-network}

Yi amfani da **Network Export** a wurin Site Export idan kana buƙatar wani hoto ɗaya mai ciki dukkan subsites a cikin gida. Wannan yana da kyau kafin canjin wuri (host migrations), gwaje-gwajen samun wuri na asiri (disaster-recovery drills), ko lokacin da ake gina wuri na uji-uji (staging rebuilds) inda kowane subsite ya yi tafiya tare.

Daga cikin sarar dukan gida yana iya zama girma sosai daga sarar wuri ɗaya, ka yi shi a lokacin da ba a samu shiga kai sosai (low-traffic window) kuma ka tabbatar cewa wuri na sauke (target storage) ya sami wani ƙaramin wurin don uploads, plugins, themes, da ZIP files da aka samar.

### Sarar Haɗin Dukan Gida (Network Import Bundles) {#network-import-bundles}

Daga farkon Ultimate Multisite 2.12.0, Site Exporter zai iya samar da **network import bundles** — wadanda su ne hoto na musamman wadda aka tsara don sauke dukkan subsites a cikin gida cikin sauƙi. Network import bundle yana nuna dukkan fayiloli da metadata da ake bukata don sake gina ƙarin shafuka zuwa sabon gida na gida (network installation).

#### Samar da Network Import Bundle {#generating-a-network-import-bundle}

1. Zu **Ultimate Multisite > Site Export** (Sifowarwarka Najeriya > Bayar da Wuri)
2. Danna **Generate new Network Export** (Gana sabon Bayarwa na Rangkawo)
3. Zaɓi **Network Import Bundle** a matsayin nau'in bayarwa (export type)
4. Zaɓi ko za ka haɗa uploads, plugins, da themes ko ba
5. Danna **Generate** (Gana)
6. Shi-shi ZIP na bundle daga cikin jerin **Existing Exports** (Bayarwar da take wajen)

#### Wararewa daga Network Import Bundle {#restoring-from-a-network-import-bundle}

Don wararewa sites daga network import bundle:

1. Shiga Ultimate Multisite a kan server ɗinka da kake son a yi
2. Yi cikakken tsarin setup na multisite
3. Je zuwa **Ultimate Multisite > Site Export** a kan network ɗaya na sabo
4. Danna **Import Network Bundle** (Shigar Network Bundle)
5. Ka ƙoƙarin ZIP na network import bundle
6. Bi umarni da ake nuna a kan layar don shigarwa
7. Wannan tsarin import zai sake gina dukkan sites, abubuwan su, da kuma ayyukan su

Network import bundles suna samar da:
- Abubuwan site (posts, pages, custom post types)
- Bayanai da zaɓi na site da ayyuka
- Matakan amana da ikon masu amfani (User roles and permissions)
- Plugins da themes (idan an haɗa su a cikin bundle)
- Uploads na media (idan an haɗa su a cikin bundle)
- Jadawalin database da data na musamman

## Shigar ZIP na export wanda ke bi kansa (self-booting) {#installing-a-self-booting-export-zip}

Don wararewa ZIP na bi kansa a kan server daban:

1. Ka ƙoƙarin abubuwan ZIP da aka bayarwa zuwa web root ɗin da ake nema
2. Bude `index.php` da aka haɗa a cikin browser
3. Bi umarni da ake nuna a kan layar don shigarwa daga package na export da aka haɗa
4. Bincika `readme.txt` da aka haɗa don samun bayanan musamman ga export kafin ka cire fayilolin wanda suka yi watsi

Don bayanai na shigarwa da import na musamman ga addon, duba [Site Exporter addon documentation](/addons/site-exporter).

Don kayan aiki na site ɗaya (single-site tool) da aka ƙara a Ultimate Multisite 2.9.0, duba [Export & Import](/user-guide/administration/export-import).
