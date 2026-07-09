---
title: Export at Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ang Ultimate Multisite 2.9.0 ay nagdaragdag ng isang tool para sa **Export & Import** sa ilalim ng **Tools > Export & Import**. Gamitin ito kapag kailangan mong i-package ang isang WordPress site bilang ZIP file, ibalik (restore) ang ZIP na iyon, o ilipat ang isang site sa pagitan ng mga Ultimate Multisite at single-site WordPress installation na magkatugma.

## Kinakailangang pahintulot (Required permissions) {#required-permissions}

Kailangan mong mag-sign in bilang administrator na may access sa menu ng **Tools** ng WordPress sa site na iyong ini-export o ini-import. Sa isang multisite network, gumamit ng account ng network administrator kapag nag-e-export o nag-i-import ng mga subsites mula sa mga Ultimate Multisite tools na nasa antas ng network.

Ang mga ZIP download ay ipinapadala sa pamamagitan ng isang authenticated download endpoint, kaya panatilihing aktibo ang admin session hanggang matapos ang download at huwag ibahagi nang publiko ang mga nabuong download URL.

## Pag-export ng site sa isang ZIP file {#exporting-a-site-to-a-zip}

1. Sa WordPress admin para sa site na gusto mong kopyahin, pumunta sa **Tools > Export & Import**.
2. Buksan ang area ng pag-export at piliin ang site na gusto mong i-package.
3. Piliin ang mga opsyon na gusto mong isama, tulad ng uploads, plugins, at themes, kapag available ang mga opsyong iyon.
4. Simulan ang export at hintayin na matapos ang proseso. Ang malalaking site ay maaaring kailangang matapos sa background bago maging handa ang ZIP file.
5. I-download ang tapos nang ZIP mula sa listahan ng exports.

Panatilihing ligtas ang ZIP file sa isang secure na lokasyon. Maaari itong maglaman ng content ng site, settings, media files, at mga napiling code assets.

## Ano ang kasama sa export {#what-the-export-includes}

Ang isang export ZIP ay maaaring maglaman ng:

Ang nilalaman ng database at configuration ng napiling site.
Mga file na naka-upload kapag kasama ang mga upload.
Mga plugin at theme kapag pinili ang mga opsyong iyon.
Metadata na ginagamit ng Export & Import tool para muling buuin ang site sa target installation.

Ang eksaktong laki ng ZIP ay nakadepende sa dami ng media, mga napiling plugin at theme, at sa laki ng mga database table ng site.

## Pag-import ng site mula sa ZIP {#importing-a-site-from-a-zip}

1. Pumunta sa **Tools > Export & Import** sa destination WordPress site mo.
2. Buksan ang import area at i-upload yung ZIP file na ginawa ng Export & Import tool.
3. Ilagay ang replacement URL kung gusto mong gamitin ang bagong address para sa site, o iwanan lang blank kung gusto mong panatiliin ang orihinal na URL.
4. Pumili kung gusto mong burahin ang na-upload na ZIP file pagkatapos matapos ang import.
5. I-click ang **Begin Import**.
6. Bantayan ang pending import hanggang matapos ito. Gamitin lang ang **Cancel Import** kung kailangan mong itigil ang proseso bago matapos.
7. Suriin ang site na na-import bago mo payagan ang normal na traffic o access ng customer.

Sa isang single-site na instalasyon ng WordPress, ang pag-import ng ZIP file ay papalitan nito ang kasalukuyang site ng imported site. Gumawa muna ng kumpletong backup ng target site bago ka magsimula, at iwasang magsimulang maraming import para sa parehong site nang sabay-sabay.

## Mga Limitasyon at Tala Tungkol sa Compatibility {#limitations-and-compatibility-notes}

Ang mga direktoryo ng malalaking upload o media library ay maaaring magdulot ng malalaking ZIP file. Siguraduhin na tama ang PHP upload limits, execution limits, disk space, memory, at server timeout settings bago mag-export o mag-import ng malalaking site.
Maaaring kailanganing ilipat ang mga napakalaking media library sa panahon ng maintenance window kung mababa ang traffic.
Ang target WordPress installation ay dapat tumakbo ng compatible na bersyon ng WordPress, PHP, Ultimate Multisite, plugin, at theme.
Ang single-site import ay pumapalit sa target site. Hindi ito isang merge tool.
Ang mga move mula Multisite patungong single-site at single-site patungong Multisite ay sinusuportahan lamang kung kaya ng target environment na tumakbo ang mga plugins, theme, URLs, at kinakailangang mga component ng Ultimate Multisite ng site na ini-export.

Panatilihing pribado ang ZIP file. Maaari itong maglaman ng nilalaman ng database, mga na-upload na file, at mga detalye ng configuration mula sa site na ini-export.

Para sa mas lumang paraan ng pag-export sa antas ng network, tingnan ang [Site Export](/user-guide/administration/site-export).
