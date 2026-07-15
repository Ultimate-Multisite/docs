---
title: Mphindo wa Mulungu
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Mfundo ya Msingi

Kwa mtumiaji mpya wa WordPress Multisite na mtu anayechanganya kuanza kutumia Ultimate Multisite, kuna maneno na misemo mengi mipya ambayo unaweza kuyapokea mwanzoni. Kujifunza hayo ni kazi muhimu kwa sababu utahitaji kuelewa jukwaa hilo na jinsi inavyofanya kazi kama jumla.

Katika makala hii, tutajaribu kufafanua na kuelezea baadhi ya dhana kuu katika WordPress. Baadhi yake ni muhimu zaidi kwa watumiaji, mengine kwa waendelezaji, na baadhi kwa wote wawili.

## WordPress Multisite {#wordpress-multisite}

**Multisite** ya WordPress ni aina ya usakinishaji wa WordPress unaokuruhusu kuunda na kusimamia mtandao wa tovuti nyingi kutoka dashboard moja ya WordPress. Unaweza kusimamia kila kitu ikiwemo idadi ya tovuti, vipengele (features), themes, na majukumu ya watumiaji. Ni halali kusimamia tovuti mia na elfu.

## Mtandao (Network) {#network}

Kwa maneno ya WordPress, mtandao wa multisite ni mahali ambapo unaweza kusimamia idadi ya **subsites** kutoka dashboard moja. Ingawa kuunda mtandao wa multisite hutofautiana kati ya watoa huduma za hosting, matokeo yake kwa kawaida huwa ni maelekezo madogo kadhaa katika faili la **wp-config.php** ili kueleza WordPress kwamba inafanya kazi katika hali hii maalum.

Kuna tofauti nyingi kati ya mtandao wa multisite na usakinishaji wa WordPress unaotegemea (stand-alone) ambayo tutazozungumzia kwa kifupi.

## Database {#database}

Database ni seti iliyopangwa, iliyopangwa la data. Katika istilahi za kompyuta, database inarejelea programu inayotumika kuhifadhi na kupanga data. Fikiria kama kabati la faili ambapo unahifadhi data katika sehemu tofauti zinazoitwa tables (meza).

WordPress Multisite hutumia database moja na kila subsite inapata meza yake mwenyewe yenye idani ya blog (blog id) kwenye prefix, kwa hivyo mara tu unapoweka usakinishaji wa mtandao wako na kuunda subsite, unapaswa kuwa na meza hizi:

_wp_1_options_ \- options table for first subsite

_wp_2_options_ \- options table for second subsite

## Mwandikazi wopanga (Hosting provider) {#hosting-provider}

Mwandikazi wopanga ndi kampani yomwe imapangitsa kuti bizinesi ndi anthu kupereka zinthu zawo m'mwebu wose. Zinthu zomwe mpangidzi wopanga m'mwebu imapereka zimene kukhala kwambiri, komwe zimene zikuphatikiza kuphatira website, malo omwe kudziwa (storage space) pa host, ndi kutayika ndi Internet. Zinthu zomwe mpangidzi wopanga m'mwebu imapereka zimene kukhala kwambiri, komwe zimene zikuphatikiza kuphatira website, komwe zimene zikuphatikiza malo omwe kudziwa (storage space) pa host, ndi kutayika ndi Internet.

## Domain {#domain}

Domain name ndi boma lomwe anthu amagwira ntchito kuti awonjeza sitini lanu. Limapereka wopanga m'mwebu kuti browser imapereke kuti ipereze sitini lanu. Mmodzi monga boma la m'mwayi, domain ndi momwe anthu amagwira ntchito kuti awonjeze website lanu m'mwebu. Komabe, monga kupereka chithunzi m'moyo m'mwayi wanu. Ngati mukufuna kuwonetsa website lathu, mudzapeza kuti mupereke boma la m'mwebu wathu pa address ya browser yanu komwe ndi [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ pamene [**ultimatemultisite.com**](http://ultimatemultisite.com) ndi boma la m'mwebu.

## Subdomain {#subdomain}

Subdomain ndi mtundu wopanga website m'mwayi m'moyo mwa domain yomwe yomwe yomwe, komwe m'mwayi monga kupereka folders kuti zikugwirizana malo pa website, koma muli monga kupeza website lanu lolimba. Imapereka monga [**https://site1.domain.com/**](https://site1.domain.com/) pamene _site1_ ndi mtindo wopanga subdomain ndipo [_domain.com_](http://domain.com) ndi domain yomwe yomwe yomwe.

## Subdirectory {#subdirectory}

Subdirectory ndi mtundu wopanga website m'mwayi mwa root domain womwe womwe, komwe imapereka folders kuti zikugwirizana malo pa website. Subdirectory ndi monga subfolder ndipo mavuto angayendetsedwe m'mwayi. Imapereka monga [**https://domain.com/site1**](https://domain.com/site1) pamene _site1_ ndi mtindo wopanga subdirectory ndipo [_domain.com_](http://domain.com) ndi domain yomwe yomwe yomwe.

## Subsite {#subsite}

Subsite ndi site lina kukhala site lina m'moyo (child site) lomwe ulipanga m'moyo wosamakhale (Multisite network). Kuti ndi **subdomain** kapena **subdirectory**, kuli kuthengera ku mwayi wosamakhale wanu ulipanga.

## Super Admin {#super-admin}

WordPress Super Admin ndi umwamba wosamakhale womwe ali ndi ulemu wosamakhale wosamakhale wosamakhale (full capabilities) kuti amene m'moyo wosamakhale wosamakhale wanu onse. Kwa wosamakhale wosamakhale, ndi **kukhala kofunika kwakukulu** komwe mungapereke ku WordPress installation yanu.

## Plugin {#plugin}

M'moyo wosamakhale (Multisite), plugins ndi setse la code lomwe limapereka ulemu wosonyeza (extra functionality) pa site yanu ya WordPress. Izi zingakhale kukhala kofunika kwakukulu monga kutsegula logo ya login kapena kukhala kofunika kwakukulu monga kutsegula e-commerce. _Woocommerce and Contact Form_ ndi zomwe zikuti plugins.

M'moyo wosamakhale (Multisite) wosamakhale, plugins zimene zingapereke pa dashboard ya admin yosamakhale ndi Super Admin. Subsite Admins angathe kutsegula ndikutsegula plugins m'subsite yanu.

## Themes {#themes}

WordPress theme ndi setse la files (_graphics, style sheets, ndi code_) lomwe limapereka ulemu wosonyeza wosamakhale wosamakhale (overall appearance) ya site. Limapereka ndalama zonse za front-end styling monga kutsegula font, layout ya page, mabwino (colors), ndi zina zambiri.

Monga plugins, themes m'moyo wosamakhale (Multisite) zimene zingapereke ndi Super Admin ndikutsogolera pa level ya subsite ndi Subsite admins.

## Site Template {#site-template}

**Site Template** ndi site lina lomwe mungayendetsedwe monga chinthu chomwe munggwanirira poyamba (base) potsegula sites zingine m'moyo wanu.

Izi imana kuti mungapeze site yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe

Kupanga kwa domain mapping ndi njira yomwe imapereka anthu ku m'host woyenera, monga m'address ya website. M'WordPress Multisite, subsites zimaperekedwa monga subdirectory kapena subdomain. Domain mapping imapereka kuti mabwiri a subsite amagwiritse ntchito top-level domain monga [**joesbikeshop.com**](http://joesbikeshop.com) kuti address ya site yanu itseve kutha kukhala ndi chofunika kwambiri.

## SSL {#domain-mapping}

SSL imapereka **Secure Sockets Layer**. Iyi ndi digital certificate yomwe imapereka ntchito ya m'website kuti iwonetsedwe ndipo imaperekera mwayi wosavuta (encrypted connection). Ngakuti lero limapereka ntchito yomwe imapereka mwayi wosavuta kukhala ndi mwayi wosavuta kwa m'internet ndikupanga chinthu chomwe chimaperekedwa m'moyo, imapereka ntchito ya SSL. M'browser zosiyanasiyana zimapereka SSL, komwe imapereka ntchito yomwe ndi yofunika poyenera kupeza ndikupanga website.

## Media {#ssl}

Media ndi zithunzi, audio, video, ndi zinthu zina zomwe zimapangitsa kukhala m'website.

M'network sites imapereka database yakati yomwe imaperekedwa m'WordPress Multisite, ndipo zimapereka mitundu ya path juu pa filesystem kuti zithunzi zikhalidwe.

M'location ya standard ya WordPress (wp-content/uploads) imapereka ntchito yomwe imaperekedwa; koma path yake imaperekedwa kuti itseve ID yomwe ndi m'network site. Mwachidule, zithunzi za network site zimapereka wp-contents/uploads/site/[id].

## Permalinks {#media}

Permalinks ndi URLs zosavuta za blog post kapena page yanu m'm'site yanu. Permalinks zimapereka ntchito ya **pretty links**. Kwa mavuto, WordPress URLs imapereka query string format yomwe imapereka chinthu chomwe chimapereka monga momwe:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#permalinks}

Ultimate Multisite ndi plugin la WordPress, lomwe limakwaniritsa kudzera ku WordPress Multisite installs, limenetsa m'WordPress yanu ikhale m'mwayi wamphamvu wa sites – monga [WordPress.com](https://WordPress.com) – kumaliza kuti clients angathe sites m'mabwino a mwezi, m'mwezi wosanu, kapena m'mwezi wosanu ndi osanu (mungathe kukhala ndi plans za M'moyo).

## Checkout Form {#ultimate-multisite}

Checkout Form ndi fomu ya amagulu omwe imakhala m'mwezi kapena m'mwezi wosanu omwe imapereka kufufuza subsite, membership, ndi user accounts m'mene Ultimate Multisite imalimbikitsa. Imakhala ndi mafields ena ndi forms za kulipira zomwe m'mene user amagwira pansi poyamba.

## Webhook {#checkout-form}

Webhook (limakwaniritsidwa kuti web callback kapena HTTP push API) ndi njira yomwe app imapereka mavuto omwe ali m'mwayi wosonyeza kwa apps zina. Webhook imapereka data kwa apps zina monga momwe imakhala, zomwezi kumphindikira data mwachangu.

**Ultimate Multisite webhooks** zimene kufukufuka zambiri, kumaliza kuti network admins angathe kulipira zinthu zambiri zomwe zimene kukhala zofunika, makamaka ngati zimapereka m'mwayi ndi services monga _Zapier_ ndi _IFTTT_.

## Events {#webhook}

Event ndi chinthu chomwe chimakhala mkati pomwe mwamphamvu wosonyeza kapena chinthu china chimene chimapereka, monga mouse click. Ultimate Multisite imalimbikitsa zinthu zonse za events ndi logs zomwe zimene kukhala m'mwayi wanu wosonyeza wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonyeza wanu wosonye
