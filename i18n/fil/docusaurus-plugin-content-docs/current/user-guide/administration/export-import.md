---
title: Pag-export at Pag-import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export at Import

Nagdaragdag ang Ultimate Multisite 2.9.0 ng isang *single-site* na tool na **Export & Import** sa ilalim ng **Tools > Export & Import**. Gamitin ito kapag kailangan mong i-package ang isang WordPress site bilang ZIP file, i-restore ang ZIP na iyon, o ilipat ang isang site sa pagitan ng mga compatible na Ultimate Multisite at *single-site* na WordPress installation.

## Kinakailangang Pahintulot (Required permissions)

Dapat kang mag-sign in bilang administrator na may access sa menu ng WordPress na **Tools** sa site na ie-export o i-iimport. Sa isang multisite network, gumamit ng network administrator account kapag nag-e-export o nag-i-import ng mga *subsite* mula sa mga tool ng Ultimate Multisite sa antas ng network.

Ang mga download ng Export ZIP ay ipinapadala sa pamamagitan ng isang *authenticated download endpoint*, kaya panatilihing aktibo ang admin session hanggang matapos ang pag-download at huwag ibahagi nang publiko ang mga nabuong download URL.

## Pag-e-export ng isang site sa ZIP

1. Sa admin ng WordPress para sa site na gusto mong kopyahin, pumunta sa **Tools > Export & Import**.
2. Buksan ang *export area* at piliin ang site na gusto mong i-package.
3. Piliin ang opsyonal na nilalaman na isasama, tulad ng *uploads*, *plugins*, at *themes*, kapag available ang mga opsyon na iyon.
4. Simulan ang *export* at maghintay na matapos ang proseso. Ang malalaking site ay maaaring kailanganin ng background processing bago maging handa ang ZIP.
5. I-download ang natapos na ZIP mula sa listahan ng *exports*.

Itago ang ZIP sa isang ligtas na lokasyon. Maaari nitong taglayin ang nilalaman ng site, mga *settings*, *media files*, at mga napiling *code assets*.

## Kasama sa Export (What the export includes)

Ang isang export ZIP ay maaaring maglaman ng:

- Ang nilalaman ng database at *configuration* ng napiling site.
- Mga *media files* na na-upload kapag kasama ang *uploads*.
- Mga *plugins* at *themes* kapag napili ang mga opsyon na iyon.
- *Import metadata* na ginagamit ng Export & Import tool upang muling buuin ang site sa target na installation.

Ang eksaktong laki ng ZIP ay nakasalalay sa dami ng *media*, mga napiling *plugins* at *themes*, at sa laki ng mga *database table* ng site.

## Pag-i-import ng isang site mula sa ZIP

1. Pumunta sa **Tools > Export & Import** sa *destination* WordPress site.
2. Buksan ang *import area* at i-upload ang ZIP na ginawa ng Export & Import tool.
3. Maglagay ng *replacement URL* kung ang site ay dapat gumamit ng bagong address, o iwanang blangko ang *field* para mapanatili ang orihinal na URL.
4. Piliin kung tatanggalin ang na-upload na ZIP pagkatapos matapos ang *import*.
5. I-click ang **Begin Import**.
6. Bantayan ang *pending import* hanggang matapos ito. Gamitin lamang ang **Cancel Import** kung kailangan mong itigil ang proseso bago matapos.
7. Suriin ang na-import na site bago payagan ang normal na *traffic* o access ng customer.

Sa isang *single-site* WordPress installation, ang pag-i-import ng ZIP ay papalit sa kasalukuyang site ng na-import na site. Gumawa ng kumpletong *backup* ng target na site bago ka magsimula, at iwasang magsimula ng maraming *import* para sa parehong site nang sabay.

## Limitasyon at Paalala sa Compatibility (Limitations and compatibility notes)

- Ang napakalaking *uploads directory* o *media library* ay maaaring makabuo ng malalaking ZIP file. Kumpirmahin ang PHP *upload limits*, *execution limits*, *disk space*, *memory*, at *server timeout settings* bago mag-export o mag-import ng malalaking site.
- Ang napakalaking *media library* ay maaaring kailanganing ilipat sa panahon ng *low-traffic maintenance window*.
- Ang target na WordPress installation ay dapat tumakbo sa compatible na bersyon ng WordPress, PHP, Ultimate Multisite, *plugin*, at *theme*.
- Ang *single-site import* ay pumapalit sa target na site. Hindi ito isang *merge tool*.
- Ang paglipat mula Multisite patungong *single-site* at mula *single-site* patungong Multisite ay sinusuportahan lamang kapag ang target na environment ay makakapagpatakbo ng mga *plugin*, *themes*, URL, at kinakailangang Ultimate Multisite components ng na-export na site.
- Panatilihing pribado ang ZIP. Maaari itong maglaman ng *database content*, na-upload na mga file, at *configuration details* mula sa na-export na site.

Para sa mas lumang *network-level export workflows*, tingnan ang [Site Export](/user-guide/administration/site-export).
