---
title: Памылка файла "Sunrise"
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Памылка пры ўстаноўцы файла Sunrise

Файл sunrise.php — гэта спецыяльны файл, які WordPress шукае падчас яго самага запуску (bootstrapping). Каб WordPress мог выявіць файл sunrise.php, ён павінен знаходзіцца ў папцы **wp-content**.

Калі вы актывуеце Ultimate Multisite і праходзіце па навугоджальным паказчыку (setup wizard), як на скріншоце, Ultimate Multisite спрабуе skóпіяваць наш файл sunrise.php ў папку wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

У большасці выпадкаў нам усё лаецца, і ўсё працуе. Аднак, калі нешта не наладжана належным чынам (напрыклад, паўлічныя права ў папцы), вы можаце сустрэць сітуацыю, калі Ultimate Multisite не можа skóпіяваць файл.

Калі вы прачытаеце паведамленне пра памылку, якое дае вам Ultimo, вы ўбачыце, што і адбылося тут: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Каб гэта выправіць, вы проста можаце skóпіяваць файл sunrise.php з папки плагіна wp-ultimo і ўставіць яго ў вашу папку wp-content. Пасля гэтага наадкрыйце паказчык і праверыце — усе праверкі павінны прайсці.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> У любым выпадку, гэта можа выклікаць загальны прагляд паўлічных права ў папцы, каб пазбегнуць праблем у будучыні (не толькі з Ultimate Multisite, але і з іншымі плагінамі і тэмамі).

Інструмент **Health Check tool**, які ўваходзіць у skład WordPress (вы можаце дабраць яго праз адмінскую панэль сайта **admin panel > Tools > Health Check**), можа паведаміць вам, калі паўлічныя права ў папцы ўсталяваны на значэнні, якія могуць стварыць праблемы з WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
