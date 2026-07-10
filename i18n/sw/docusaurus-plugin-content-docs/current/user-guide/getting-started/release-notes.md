---
title: Maelezo ya Toleo
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Maelezo ya Toleo {#release-notes}

## Toleo 2.13.0 — Lilitolewa tarehe 2026-06-05 {#version-2130--released-on-2026-06-05}

- Mpya: Imeongeza usaidizi wa sovereign-tenant kwa mtiririko wa Account ya mteja, checkout, bili, tovuti, ankara, ubadilishaji wa violezo, na domain mapping ili mitandao ya tenant iweze kuwaelekeza wateja kurudi kwenye tovuti kuu kwa vitendo vinavyosimamiwa.
- Mpya: Imeongeza ukaguzi wa vitambulisho vya usasishaji kwa memberships zinazojirudia ili gateways ziweze kuzima usasishaji otomatiki wakati makubaliano ya bili yaliyohifadhiwa, subscription, au vault token yanakosekana.
- Mpya: Imeongeza uchapishaji wa loopback uliothibitishwa kwa HMAC kwa uundaji wa tovuti unaosubiri ili kufanya utoaji kutoka checkout hadi tovuti uwe wa kuaminika zaidi kwenye hosts ambapo kazi za chinichini huchelewa.
- Mpya: Imeongeza sehemu za upanuzi kwa waendelezaji kwa SSO URLs, domains msingi za fomu ya checkout, na uundaji otomatiki wa rekodi za domain.
- Marekebisho: SSO sasa ni ya kuaminika zaidi kwenye domains zilizo na mapping, matembezi ya broker asiyejulikana, logout, na migongano ya utegemezi kati ya plugins.
- Marekebisho: Uundaji wa tovuti unaosubiri sasa hupona kutokana na alama za uchapishaji zilizopitwa na wakati na huepuka kuwaacha wateja wamenasa kwenye skrini ya uundaji wa tovuti.
- Marekebisho: Rekodi za domain hazitengenezwi tena kwa domains msingi za fomu ya checkout zinazoshirikiwa, na kazi za chinichini za host-provider zisizotumika hurukwa wakati hakuna muunganisho unaofanya kazi.
- Marekebisho: Checkout, anwani ya bili, kuweka upya nenosiri, uthibitishaji wa barua pepe, ubadilishaji wa violezo, ziara, na hali za pembeni za Dashboard ya mteja hazizuii tena mitiririko ya kawaida ya mteja.
- Marekebisho: Barua pepe za matangazo sasa huweka wapokeaji kuwa faragha huku zikiepuka hitilafu mbaya za SMTP/plugin wakati orodha za wapokeaji au njia za usafirishaji wa barua zinaposhindwa.
- Marekebisho: Usasishaji wa memberships, onyesho la kuisha muda, na hali za pembeni za ukusanyaji wa malipo sasa huepuka kuisha mara moja, kuanguka kwa mfumo, au malipo yanayohitajika kukosekana.
- Imeboreshwa: Upatanifu wa WordPress umejaribiwa hadi 7.0, mali za Vue za uzalishaji zimejengwa upya kutoka vyanzo vya npm, na chanjo ya mwisho-hadi-mwisho ya Cypress sasa hujaribu mitiririko zaidi ya checkout, usanidi, SSO, na gateway.

## Toleo 2.12.0 — Lilitolewa tarehe 2026-05-15 {#version-2120--released-on-2026-05-15}

- Mpya: Imeongeza Hostinger (hPanel) kama host provider anayeungwa mkono aliye na muunganisho wa domain mapping
- Mpya: Site Exporter sasa hushughulikia vifurushi vya kuingiza mtandao kwa urejeshaji wa tovuti wa mtandao mzima uliorahisishwa
- Marekebisho: Barua pepe za matangazo za BCC sasa hutumia header ya wapokeaji-wasiofichuliwa ili kuzuia kufichua anwani za wapokeaji
- Marekebisho: Tarehe ya kuisha kwa membership haiharibiki tena wakati wa kuhifadhi kwa thamani isiyo ya tarehe
- Marekebisho: Masasisho ya membership ya Stripe sasa yanaondoa punguzo kwa usahihi bila kuita API ya deleteDiscount iliyopitwa na wakati
- Marekebisho: Uelekezaji upya wa SSO kwenye tovuti zilizo na domain mapping sasa umewekewa kikomo ili kuzuia mizunguko isiyoisha ya uelekezaji upya
- Marekebisho: Uchaguzi wa kichagua picha cha setup wizard sasa husasisha kwa usahihi modeli ya data ya msingi
- Marekebisho: Site Exporter CLI sasa huhifadhi uchaguzi sahihi wa tovuti chaguo-msingi ya mtandao
- Imeboreshwa: Imeondoa wp-cli iliyojumuishwa kutoka kifurushi cha plugin, ikipunguza ukubwa wa plugin

## Toleo 2.11.0 — Lilitolewa tarehe 2026-05-11 {#version-2110--released-on-2026-05-11}

- Mpya: Usafirishaji wa tovuti sasa hujumuisha `index.php` inayojianzisha ili ZIP iweze kusakinishwa kwenye host mpya bila usakinishaji tofauti wa plugin.
- Mpya: Usafirishaji wa mtandao huwawezesha wasimamizi kusafirisha subtovuti zote katika jalada moja kutoka ukurasa wa usimamizi wa Site Export.
- Mpya: Kigeuzi cha plan cha Allow Site Templates sasa kinatekelezwa kupitia mlolongo wa fallback, kikizuia kwa usahihi upatikanaji wa violezo kwa mipaka ya plan.
- Mpya: Kihariri cha fomu ya checkout huonya wakati bidhaa inaongezwa bila field inayohitajika kusanidiwa.
- Mpya: Kichupo cha mipangilio ya Import/Export sasa kinaeleza wazi upeo wake na kuunganisha moja kwa moja kwenye zana ya Site Export.

## Toleo 2.10.0 — Lilitolewa tarehe 2026-05-05 {#version-2100--released-on-2026-05-05}

- Mpya: Setup wizard inayoongozwa ya PayPal kwa uingizaji wa vitambulisho kwa mkono yenye OAuth flag gate kwa usanidi rahisi wa gateway.
- Mpya: Paneli ya mteja ya ubadilishaji wa violezo imeundwa upya ikiwa na kadi ya kiolezo cha sasa, gridi endelevu, na kitufe cha **Weka upya kiolezo cha sasa**.
- Marekebisho: Ubadilishaji wa violezo hausimamishi tena UI wakati AJAX inaposhindwa.
- Marekebisho: Hali za ruhusa za ubadilishaji wa violezo zimelindwa dhidi ya ufikiaji usioidhinishwa.
- Marekebisho: Ingizo za ubatilishaji wa tovuti huthibitishwa kabla ya kuhifadhi.
- Marekebisho: Kidokezo cha anwani ya bili sasa huonyeshwa wakati anwani iko tupu.
- Marekebisho: Arifa za uondoaji wa matumizi zilizopitwa na wakati za PHP 8.1 null-to-string zimetatuliwa.
- Marekebisho: Currents zimepakiwa kwa uvivu kabla ya init hook ili kuzuia matatizo ya muda.
- Marekebisho: Njia ya SSO iliyochujwa inaheshimiwa katika mitiririko yote ya kuingia.
- Marekebisho: Chaguo tupu za utambulisho wa tovuti huhifadhiwa wakati wa kuhifadhi.

## Toleo 2.9.0 — Lilitolewa tarehe 2026-04-30 {#version-290--released-on-2026-04-30}

- Mpya: Usafirishaji na uingizaji wa tovuti moja umeongezwa chini ya **Tools > Export & Import**.
- Marekebisho: Faili za ZIP za usafirishaji sasa hutolewa kupitia endpoint ya upakuaji iliyothibitishwa.
- Marekebisho: Hatari ya SQL injection na matatizo ya hoja katika hoja za usafirishaji/uingizaji zinazongoja zimesahihishwa.
- Marekebisho: Tovuti inayosubiri haichapishwi wakati msimamizi anathibitisha barua pepe ya mteja kwa mkono.
- Marekebisho: Rekodi za pending_site zilizoachwa yatima husafishwa wakati membership inakosekana.
- Marekebisho: Nafasi ya nav ya mipangilio na urambazaji wa nanga ya utafutaji zimesahihishwa.
- Marekebisho: Tovuti zinazongoja sasa huonyeshwa kwanza katika mwonekano wa All Sites.
- Marekebisho: Header ya User-Agent ya mtoa picha ya skrini (mShots) imeongezwa ili kuzuia hitilafu za 403.
- Marekebisho: Utegemezi wa mzunguko wa ratiba ya cron ya uingizaji umetatuliwa.
- Marekebisho: Tour IDs zimesawazishwa kuwa underscores katika funguo za mipangilio ya mtumiaji.
- Imeboreshwa: ZipArchive sasa inatumika badala ya Alchemy/Zippy kwa upatanifu bora.

## Toleo 2.8.0 — Lilitolewa tarehe 2026-04-29 {#version-280--released-on-2026-04-29}

- Mpya: Toggle ya Enable Jumper imeongezwa kwenye UI ya mipangilio ya Other Options.
- Mpya: Safu ya hali imeongezwa kwenye jedwali la orodha ya fomu za checkout.
- Mpya: Kipakiaji cha faili cha addon sunrise kwa viendelezi maalum vya sunrise vya MU-plugin.
- Imeboreshwa: Mpangilio wa kujichagulia kuripoti hitilafu umeondolewa kutoka ukurasa wa mipangilio.
- Marekebisho: Kadi ya tovuti ya ukurasa wa shukrani — picha sasa imewekewa mipaka na viungo vimewekewa mitindo kwa usahihi.
- Marekebisho: Mtoa huduma wa picha ya skrini amebadilishwa kutoka thum.io hadi WordPress.com mShots.
- Marekebisho: Enable Registration na Default Role sasa zinaweka chaguo msingi sahihi kwenye usakinishaji mpya.
- Marekebisho: `get_site_url()` hairudishi tena tupu wakati domain inajumuisha port.
- Marekebisho: Faili za midia za kuiga sasa zinanakiliwa kwa usahihi wakati mpangilio wa `copy_media` ulikuwa tupu.
- Marekebisho: Cache ya kitu imebatilishwa kwa usahihi baada ya uandishi wa sitemeta wa network-activate.
- Marekebisho: Domain maalum inapandishwa kiotomatiki kuwa ya msingi baada ya uthibitishaji wa DNS kwa domain zenye sehemu 3.
- Marekebisho: Uanachama unaosubiri umeghairiwa wakati malipo yaliyoisha muda yanaposafishwa.
- Marekebisho: Kikagua uimara wa nenosiri kimeunganishwa tena baada ya kidokezo cha inline login kufungwa.
- Marekebisho: Upakiaji upya usioisha wa ukurasa umesitishwa kwenye ukurasa wa shukrani wakati tovuti tayari imeundwa.
- Marekebisho: Chaguo la usajili la msingi la WP limesawazishwa wakati wa uanzishaji wa plugin na kuhifadhi mipangilio.
- Marekebisho: Kinga ya muda wa kuisha wa null imeongezwa katika `calculate_expiration` kwa upatanifu wa PHP 8.4.
- Marekebisho: Usajili unaojirudia umezuiwa wakati mteja tayari ana uanachama hai.
- Marekebisho: Ukaguzi wa null umeongezwa kwa `date_expiration` katika checkout.
- Marekebisho: Utoaji wa tovuti umeimarishwa — vikwazo, utambuzi wa uanachama, upandishaji wa domain.
- Marekebisho: Lebo ya hali ya ukaguzi wa kabla ya usakinishaji imesahihishwa kuwa NOT Activated wakati ukaguzi unashindikana.
- Marekebisho: Domain ya checkout imetumika kwa URL za uthibitishaji wa barua pepe.
- Marekebisho: Auto-login baada ya checkout wakati hakuna sehemu ya nenosiri iliyopo.
- Marekebisho: Uanachama wa bure hauishi tena muda — unachukuliwa kuwa wa kudumu.
- Marekebisho: Lango la uthibitishaji wa barua pepe linashikilia uchapishaji wa tovuti hadi mteja athibitishe barua pepe.
- Marekebisho: Njia ya msingi ya endpoint ya SES v2 API na njia ya utambulisho zimesahihishwa.
- Marekebisho: Hook ya `wu_inline_login_error` imetolewa katika block ya pre-submit catch.
