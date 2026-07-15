---
title: Nukuu ya Tovuti
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Kusafirisha Tovuti (Site Export)

Ukurasa wa kiadmin wa **Site Export** unaruhusu wadhamini wa mtandao kuandaa tovuti moja, au mtandao mzima, katika *archive* ya kupakua kwa ajili ya kuhama, kuhifadhi nakala (backup), au kuwasilisha kwa mtu mwingine.

## Kusafirisha Tovuti Moja {#exporting-one-site}

Nenda kwenye **Ultimate Multisite > Site Export** na uchague **Generate new Site Export**. Chagua *subsite* unayotaka kusafirisha, kisha uchague kama *archive* hiyo inapaswa kujumuisha *uploads*, *plugins*, na *themes*.

Wakati usafirishaji unakamilika, pakua ZIP kutoka orodha ya **Existing Exports**. ZIP za usafirishaji sasa zina `index.php` inayojitekeleza (self-booting) na `readme.txt`, kwa hivyo *archive* hiyo inaweza kupakiwa kwenye *host* mpya na kuanza bila kwanza kusakinisha *plugin* tofauti ya kuingiza data (importer plugin).

## Kusafirisha Mtandao mzima {#exporting-the-whole-network}

Tumia **Network Export** kwenye ukurasa wa Site Export wakati unahitaji *archive* moja inayojumuisha *subsites* zote katika mtandao. Hii ni muhimu kabla ya kuhama *host*, mazoezi ya kurejesha baada ya maafa, au kujenga upya *staging* ambapo kila *subsite* inahitaji kusafiri pamoja.

Kwa kuwa usafirishaji wa mtandao unaweza kuwa mkubwa zaidi kuliko usafirishaji wa tovuti moja, uufanye wakati wa trafiki ndogo na thibitisha kuwa hifadhi inayolengwa ina nafasi ya kutosha ya bure kwa ajili ya *uploads*, *plugins*, *themes*, na faili za ZIP zilizotengenezwa.

### Network Import Bundles {#network-import-bundles}

Kuanzia Ultimate Multisite 2.12.0, Site Exporter inaweza kutengeneza **network import bundles** — *archives* maalum zilizoundwa kwa ajili ya kurejesha tovuti kwa kiwango cha mtandao kwa urahisi. Network import bundle inajumuisha faili na metadata zote muhimu za kurejesha *sites* nyingi kwenye usakinishaji mpya wa mtandao.

#### Kutengeneza Network Import Bundle {#generating-a-network-import-bundle}

1. Nenda kwenye **Ultimate Multisite > Site Export**
2. Bonyeza **Generate new Network Export**
3. Chagua **Network Import Bundle** kama aina ya usafirishaji
4. Chagua kama unataka kujumuisha *uploads*, *plugins*, na *themes*
5. Bonyeza **Generate**
6. Pakua bundle ZIP kutoka orodha ya **Existing Exports**

#### Kurejesha kutoka Network Import Bundle {#restoring-from-a-network-import-bundle}

Ili kurejesha *sites* kutoka network import bundle:

1. Sakinisha Ultimate Multisite kwenye *host* yako inayolengwa.
2. Kamilisha kichawi cha kuweka upanga wa multisite.
3. Nenda kwenye **Ultimate Multisite > Site Export** kwenye mtandao mpya.
4. Bonyeza **Import Network Bundle**.
5. Pakua faili ya network import bundle ZIP.
6. Fuata maelekezo ya kuingiza data (import) yanayoonekana kwenye skrini.
7. Mchakato wa kuingiza data utarejesha *sites* zote, maudhui yao, na mipangilio yao.

Network import bundles huhifadhi:
- Maudhui ya tovuti (post, pages, custom post types)
- Mipangilio na chaguo za tovuti
- Nafasi na ruhusa za mtumiaji
- Plugins na themes (ikiwa zimejumuishwa kwenye bundle)
- Uploads za media (ikiwa zimejumuishwa kwenye bundle)
- Meza na data maalum za database

## Kusakinisha Export ZIP inayojitekeleza {#installing-a-self-booting-export-zip}

Ili kurejesha ZIP inayojitekeleza kwenye *host* mpya:

1. Pakua yaliyomo ya ZIP yaliyosafirishwa kwenye *web root* inayolengwa.
2. Fungua `index.php` iliyopakuliwa kwenye *browser*.
3. Fuata maelekezo ya usakinishaji kutoka kwa kifurushi cha usafirishaji kilichojumuishwa.
4. Pitia `readme.txt` iliyojumuishwa kwa maelezo maalum ya usafirishaji kabla ya kuondoa faili za muda.

Kwa maelezo ya usakinishaji na kuingiza data kwa *addon* maalum, tazama [Site Exporter addon documentation](/addons/site-exporter).

Kwa zana ya tovuti moja iliyoongezwa katika Ultimate Multisite 2.9.0, tazama [Export & Import](/user-guide/administration/export-import).
