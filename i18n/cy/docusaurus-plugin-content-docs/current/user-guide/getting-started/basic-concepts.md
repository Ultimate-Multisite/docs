---
title: Cymryddau sylfaenol
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Cysgodau
Mae'r gweithredol ychwanegol yn WordPress Multisite yw'r fath o gyflwyniad WordPress sy'n sylw'n rhoi'r chaws i chi creu a rheoli cyfathredegau am ychwanegol o webo o'r dashboard unig. Gallwch ddefnyddio'r dashboard hwn i rheoli pob hyn, gan gynnwys y nifer y weboedd, y ffeithiau (features), y themau (themes) a'r rôlau o'r benynolwr (user roles). Mae'n posibilr ystyried cyfathredegau oer oethau.

## Cwmni (Network)

Yn terms WordPress, mae cwmwd Multisite yn lle mae'r nifer o **subsites** allan i rheoli o'r dashboard unig. Er bod ychwanegol yn diffygio rhwng cyfathreggiwr gweithredol, mae'r byddiadau ddiweddar yn aml yn dod â chwaraeau ychwanegol mewn ffeil **wp-config.php** i ddweud i WordPress bod yn gweithio mewn modd honno.

Mae rhai diffygiau gwahanol rhwng cwmwd Multisite a gyflwyniad WordPress unig sydd yn cael eu dysgu'n ddefnyddiol. Byddwn yn siarad am hynny yn briodol.

## Databwth (Database)

Mae databwth yn set o data sydd wedi'i sefydlu ac i'r chefnog. Yn y gweithredol cyfrifol, mae databwth yn cyfeiriadwch software a ddefnyddir i sicrhau a chwarae data. Meddwch am ei fod yn ffeil cabinet lle mae'n rhoi data mewn cyd-fyddiau olys yn cael eu cyfeiriadu fel tabelau.

Mae WordPress Multisite yn defnyddio databwth un ac mae pob subsite yn cael ei gael ei thabelau ei hun gyda'r idd blog yn y prefix, felly pan fyddwch chi'n creu gyflwyniad cwmwd, byddwch e'n cael y tabelau hyn:

_wp_1_options_ \- tabli o opsiynau ar gyfer y subsite cyntaf

_wp_2_options_ \- tabli o opsiynau ar gyfer y subsite ddwy

## Cyfderau gweithredol (Hosting provider)

Mae cyfderau gweithredol yn cwmni sy'n rhoi'r cyfathrebu wefanau i gweithwyr a personau i ddefnyddio drwy y Gweithredol Mawr. Mae'r gwasanaethau sydd ar gael gan cyfderau gweithredol yn ewch yn newid, ond felly, yn aml, mae'n cynnwys dylunio wefanau, safonau storio ar gyfer y host, a cysylltiad â'r Internet.

## Domain

Mae enw domain yn cyfeiriad i bobl yn defnyddio i fy mynd ar eich wefan. Mae'n dweud i'r browser web lle dod i chwilio am eich wefan. Fel y cyfeiriad o'r stryd, mae domain yn ddweud i bobl gwesoio eich wefan ar-lein. A fel gynnwys sign yn flaen eich stref. Os oes angen i chi fy mynd ar eich wefan, byddwch yn rhaid i chi tebyd eich cyfeiriad web ar gyfer y browser eich cyfeiriad sy'n cael ei ddefnyddio, sy'n bod yn [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), lle mae [**ultimatemultisite.com**](http://ultimatemultisite.com) yn enw domain.

## Subdomain

Mae subdomain yn rheol o wefanau o dan y domain cyflym, ond fel y cyfathrebu ffurfiol i ddefnyddio gyffredinol ar wefan, mae'n cael ei gael fel [**https://site1.domain.com/**](https://site1.domain.com/), lle _site1_ yw enw subdomain a [_domain.com_](http://domain.com) yw domain cyflym.

## Subdirectory

Mae subdirectory yn rheol o wefanau o dan domain gyflym sy'n defnyddio ffurfiau i ddefnyddio gyffredinol ar wefan. Mae subdirectory yn unol â subfolder, ac gall enwau ei ddefnyddio yn aml. Mae'n cael ei gael fel [**https://domain.com/site1**](https://domain.com/site1), lle _site1_ yw enw subdirectory a [_domain.com_](http://domain.com) yw domain cyflym.

## Subsite

Mae subsite yn gwefan i ddyniadau sy mae'n cael eu creu ar rheol Multisite. Gallai fod yn **subdomain** neu **subdirectory** yn ôl y ffurf o'r càiadwyth WordPress Multisite eich cyfluniad wedi'i chefnogi.

## Super Admin

Mae Super Admin WordPress yn rôl o ddefnyddiwr gyda chymrydau llawn i ddefnyddio pob subsite ar rheol Multisite. Ar gyfer defnyddwyr Multisite, mae hi'n **cyflenurdref uchaf** y cyffredinol sy gallwch rhoi i eich càiadwyth WordPress.

## Plugin

Yn aml, mae plugin yn set o cod sy yn ychwanegu ffurf gweithredol i eich safle WordPress. Gallai fod yn einfedig fel newid logo y cyflwyniad neu'n hanfodol fel ychwanegu ffurf e-commerce. _Woocommerce a Contact Form_ yw enwon o plugin.

Ar WordPress Multisite, gallai cael pluginau i gael eu chwarae o ddashboard admin y rheol gan Super Admin ond bydd Subsite Admins yn gallu chwarae a de-chwarae pluginau yn ôl eu subsite.

## Themes

Mae theme WordPress yn set o fyliau (_graphics, style sheets, a cod_) sy'n cyfarwyddo'r ddefnydd cyfan y safle. Mae'n rhoi pob styl y cyfan o'r ffwrddol fel styl font, llwybrau, neu gyfeiriadau, etc.

Fel pluginau, gallai cael themeon yn WordPress Multisite i gael eu chwarae gan Super Admin ac gallai cael eu chwarae ar lefel subsite gan Subsite Admins.

## Site Template

Mae **Site Template** yn safle cyfan sydd wedi'i chefnogi fel cyfrifol pan mae creu safleoedd newydd yn eich rheol.

Mae hyn yn ei fod yn golygu bod chi'n gallu creu safle cyfrifol, chwarae pluginau gwahanol, set theme ar gyfer y safle a chynllunio'r ffurf fel eich hoffech. Yna, pan mae eich cleient creu cyfrifol newydd, yn lle cael safle WordPress ddefnyddiol heb unrhyw cynnwys o ddefnydd, bydd eu cael cop o'r safle cyfrifol eich gyda'r holl chynlluniau a cynnwysau wedi'u chefnogi.

## Domain Mapping

**Mapiad dwyllau** gyda WordPress yw ffordd i rediru benwiolwyr i'r gweithredwr cywir, trwy adres wefan. Yn WordPress Multisite, mae subsais wedi'i creu gan ddefnyddio either ddau chwarae (subdirectory) neu subdomain. Mae mapiad dwyllau yn sylwi ar ei fod yn sylw i'r benwiolwyr y subsais eu defnyddio domain uchel fel [**joesbikeshop.com**](http://joesbikeshop.com) i gwneud ei adres wefan dod yn ddifrifol.

## SSL

SSL yw **Secure Sockets Layer**. Mae'n certydd ddigidol sy'n cywir identiti wefan a’i'n gael y conwyliad cyffredinol. Yn ystod ystodau hyn, mae'n cael ei ddefnyddio fel technoleg standard i sicrhau cysyllti internet a chynllunio unrhyw data sensitif sydd yn cael ei anfon rhwng ddau system, gan droi'r criminaswyr o gwblhau a newid unrhyw wybodaeth a ddefnyddir, gan gynnwys cyflwyniadau personol allweddol. Mae'r clysurau modern yn bwriadu SSL sydd yn hanfodol pan mae creu a chwarae wefan.

## Media

Mae media yn olygu, audiol, video, a ffilyfrifau eraill sy'n gwneud wefan.

Mae wefan cyd-gynllt yn rhannu database un mewn WordPress Multisite, ac mae'n cadw gyfylau parhaol ar y filesystem i ffilyfrifau media.

Mae lleoliad standard WordPress (wp-content/uploads) yn parhau; fodd bynnag, mae ei llwybr wedi'i newid i ddefnyddio ID unig y wefan cyd-gynllt. Fel yma, mae ffilyfrifau media ar gyfer wefan cyd-gynllt yn dangos fel wp-contents/uploads/site/[id].

## Permalinks

Mae permalinks yn URLau perenniol o'ch post blog neu ddeddf unig yn y wefan. Mae permalinks hefyd yn cael eu cyfeiriadu fel **pretty links**. Yn y cyflwyniad, mae URLau WordPress yn defnyddio ffurf string cwestiwn sydd yn dod yn oherwydd:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Mae Ultimate Multisite yn plugin WordPress sy wedi cael ei gwneud ar gyfer y cyflwyniadau WordPress Multisite, sy'n transformio eich cyflwyniad WordPress i rheol breifat o wefan – fel [WordPress.com](https://WordPress.com) – gan gaelai clydefu'r cleientau wefan drwy ffeithiau manwl, cyntaf, neu flynyddol (gallwch hefyd creu planau Llwybr).

## Ffurf Cyflwyniad (Checkout Form)

Mae Checkout Form yn ffurf brys neu amserau o dros y cyflwyniad sy'n cynnwys creu subsite, cyfrifoldeb (membership), a cyfathrebuurau bawb drwy gyflwyniad Ultimate Multisite. Mae’n cynnwys ffeiliau a ffurfiadau peiriant sydd ei fod yn cael eu cyflwyno gan yboryd yn ystod y proses cyfrifoldeb.

## Webhook

Mae webhook (gan gennych hefyd yr adran web callback neu API push HTTP) yn ffordd i'r app rhoi wybodaeth mewn appau eraill mewn amser byr. Mae webhook yn dod â data i appau eraill fel y mae hi'n digwydd, gan fod, gallwch gael y data yn gyflym.

Mae **Ultimate Multisite webhooks** yn agor cyflwyniadau llwyr, gan gaelol i ddefnyddwyr rheol breifat gwneud pob math o chysylltiadau sydd yn rhyfeddol-buthinol a ddefnyddiol, yn enwedig os cael eu defnyddio gyda gwasanaethau fel _Zapier_ a IFTTT_.

## Eventiau (Events)

Mae Event yn gweithredol sy'n digwydd fel ar gyfer y borthwr neu ffurf syniad eraill, fel clict o weithiau. Mae Ultimate Multisite yn cadw cyfeiriad o bob event a log sydd yn digwydd yn eich breifat gyfan. Mae’n drwy'r gweithredol am y gweithgareddau cyffredinol sydd yn digwydd mewn multisite, fel newidiadau planiau.
