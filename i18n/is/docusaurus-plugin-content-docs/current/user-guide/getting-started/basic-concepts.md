---
title: Grundkonsept
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Grundlæggandi konseptir

Fyrir nýja notandafólks WordPress Multisite og fólks sem byrjar að nota Ultimate Multisite, getur það verið mjög ný og ókunnugt orða og hugtök á fyrsta stund. Það er mikilvægt að læra þau fyrir því að þú þarft að skilja plattforma og hvernig hún virkar sem heildarverk.

Í þessum greininum mun við reyna að skilgreina og útskýra nokkrar lykilhugtök í WordPress. Nokkari eru mikilvæg fyrir notendur, nokkar fyrir þróalögnum, og nokkar fyrir bæði.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** er nauðsynlegur hlutfall af WordPress uppsetningum sem leyfir þér að skapa og stjórna netverk af fleiri vísindamanna (websites) frá einum WordPress dashboard. Þú getur stýrt allt, sérstaklega fjölda vísindamanna, eiginleika, themes (þema), og notandarhæfðir. Það er mögulelegt að stjórna hundruð og þúsundir vísindamanna.

## Netverk {#network}

Í samband við WordPress er multisite netverk staður þar sem fleiri **subsites** geta styrkt úr einum dashboard. Þótt sköpun multisite netwerks skilji sig milli vefsveitenda, er endilegi niðurstöðin oft nokkönn auðveldari stefnur í lausnari `wp-config.php` til að láta WordPress vita að það körpum í þennan sérstaka möguleika.

Það eru fleiri sérstakar skilningar milli multisite netwerks og stand-alone WordPress uppsetningu sem við munum kortast fyrir kort.

## Database {#database}

Database er byggð, ábyrgð og organiserð setning af gögnum. Í tæknilegu hugtökum nauðsynlegur database er söfuna notað til að lagast og organiserja gögn. Hugsa þér það sem fólfkapin sem þú lagar gögn í ólíku hluta sem kallast tables (veitir).

WordPress Multisite notar einn database og hver subsite fær sína eiga tables með blog id í prefix, svo eftir að þú installir netverk uppsetningu þína og skapar subsite, þurftuð þar eru þessar tables:

_wp_1_options_ \- opnun fyrir fyrsta undersite

_wp_2_options_ \- opnun fyrir anna undersite

## Héðunaraðili {#hosting-provider}

Héðunaraðili er fyrirtæki sem gerir þemu og einstaklingum mögulegt að gera sínum vísönnum til við webbinn. Þjónustur sem héðunaraðilar býður upp eru ólíkar, en oftast felur þau í sér hlutverk á netasíðu, gögnumótun á vefsítanum og tengingu við Internet.

## Domén {#domain}

Doméngreyfi er staðsetning sem fólk notar til að heimsækja síðuna þína. Það segir webbrausarinn hvar hann skal leita eftir síðunni þinni. Eftir sama eins og gataheiti er domén hvernig fólk heimsækja vefsíðuna þína netið. Og, eins og að hafa skýn fyrir framan liðnum þínu. Ef þú vilt heimsækja síðuna okkar, verður þú að skrifa webbheiti okkar í lykilréttinni á webbrausarinn sem er [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ þar sem [**ultimatemultisite.com**](http://ultimatemultisite.com) er doméngreyfið.

## Undersdomén {#subdomain}

Undersdomén er ein hlutfall vefsítu í gegnum að hófum domény, en í stað þess að nota fólfur til að stjórna innihaldi á vefsítanum, fær það sjálft eitt vefsítan. Það sýnist sem [**https://site1.domain.com/**](https://site1.domain.com/) þar sem _site1_ er nafn undersdoméns og [_domain.com_](http://domain.com) er hóf domény.

## Undersforgit {#subdirectory}

Undersforgit er ein hlutfall vefsítu í gegnum hóf domény sem notar fólfur til að stjórna innihaldi á vefsítanum með forgitum. Undersforgit er sama eins og underskóli og nafnin getur notað saman. Það sýnist sem [**https://domain.com/site1**](https://domain.com/site1) þar sem _site1_ er nafn undersforgitsins og [_domain.com_](http://domain.com) er hóf domény.

## Undersite {#subsite}

Subsite er barnsteytingur semurðar á netverk Multisite. Það getur verið **subdomain** eða **subdirectory**, eftir því hvernig þín WordPress Multisite uppsetning er sett upp.

## Super Admin {#super-admin}

WordPress Super Admin er notkunarhlutfall með fullkomlegum mögulegum til að stjórna öll subsítofn á Multisite netverk. Til Multisite notenda er þetta **hæst möguleiki** sem þú getur gefið í WordPress uppsetningu þinni.

## Plugin {#plugin}

Almennt er plugin einn setning kóða sem bætir extra möguleika við WordPress síðuna þinni. Þetta getur verið eins einfalt og að breyta loginnögu-logon eða eins flókið og að bæta e-commerce möguleikum í viðskipti. _Woocommerce_ og _Contact Form_ eru dæmi um plugin.

Á WordPress Multisite geta pluginir bara verið sett upp frá netverkstjórnarmönnum með Super Admin. Subsite Admins geta aðeins aktivert og inaktivert pluginir í subsítonni sínu.

## Themes {#themes}

WordPress theme er gruppa lausna (_grafik, stílskjal og kóða_) sem steytir upp heilum sjónar fyrir síðuna. Það gerir allar front-end stílsetningar eins og font setningu, yfirborðsreyfing, lög, fargar osafyrir.

Eins og með pluginum geta themes í WordPress Multisite bara verið sett upp af Super Admin og geta aktivert á subsítonni level af subsite admins.

## Site Template {#site-template}

**Site Template** er grunn síða sem getur verið nota sem grunnur þegar þú ert að skapa nýja síður í netverkinn þínu.

Þetta þýðir að þú getur skapað grunn síðu, aktivert ólíka pluginir, sett upp aktivt theme og sérsniðið það á hvaða hátt sem þú vilt. Þegar notandinn þinn skapar nýja reikning, í stað þess að fá almenna WordPress síðu án merkilega innihaldsins, fær hann kopíun af grunn síðuna þinni með öll snjónum og innihaldi sem er sett upp á.

## Domain Mapping {#domain-mapping}

**Doménnarpennung** í WordPress er hátt að leysa vísbendingar til að leiða notendur til rétta staðar, með heiti netasíðans. Í WordPress Multisite eru subsíður skapnaðar með því að nota eða undirskipti (subdomain). Doménnarpennung fer í það að leysa það að subsíðu notendur geta notað topp-nivó domén eins og [**joesbikeshop.com**](http://joesbikeshop.com) til að gera neitsja sínu staðsetningu meira fagleg.

## SSL {#ssl}

SSL stendur fyrir **Secure Sockets Layer**. Þetta er tölvulegt sertifiki sem staðfestar skilgreiningu netasíðans og gerir mögulega tengingu krypingu. Í dag er það standardtækni til að halda internettþjónustu tryggvað með öruggum og verndu hvaða kjarnafangarsdata sem eru send á milli tveggja kerfa, og hindra kriminilega menn frá því að lesa eða breyta nánast persónulegum upplýsingum. Samskipti í nútíma grefum krefjast SSL, sem gerir það nauðsynlegt við byggingu og framkvæmd netasíðans.

## Media {#media}

Media eru myndir, hljóð, vísafilm og öðrar lausna sem gera netasíða.

Netasíður deila einum grunnréttum í WordPress Multisite, en viðhalda sérstökum leiðum á skráningum fyrir mediafilar.

Standardstaðsetningur WordPress (wp-content/uploads) er annarra sé eftir; þó að leiðin er breytt til að spyrja um einstakan ID netasíðans. Erfaldlega séu mediafilar fyrir netasíða sýndar sem wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks eru varanlegir URL-ar þínar fyrir einstaka bloggfærsluna eða síðuna í staðsetningu. Permalinks eru einnig nefndar **pretty links**. Í grínum er WordPress URL-ar notaðir við formét sem líkar svo:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite er ein WordPress plugin, laga fyrir WordPress Multisite installasjonar, sem endrar innstillingane dine til eina premium nettverk av nettsider – eins og [WordPress.com](https://WordPress.com) – sem gjev kynningarmannum að skapa sider með månadleg, kvartalsleg eða árs gebur (þú geturðu einnig skapa friðlaosar).

## Checkout Form {#checkout-form}

Checkout Form er einn eller-eða fleiri-steppar-bestillingarform sem felur í seg sjálf skráning fyrir subsite, samþætting og notendakréftar með Ultimate Multisite skráningu. Hún felur í seg yfirlið og betalingsform sem nota upplýsingum sem notandinn måli inn á meðan han er að skráningu.

## Webhook {#webhook}

E webhook (sem einnig kallast web callback eða HTTP push API) er leið fyrir app-a til að veita öðrum app-um raunverulega upplýsingar. E webhook sender data í andre app-um þegar hún skiptir, sem það þýðir að þú fær data strax.

**Ultimate Multisite webhooks** opna óendanleg möguleika, sem leyfa nettverkstjórum að gera alls orðin ótrúlega en gagnlegar samþættingar, sérstaklega ef það er nota í samræmi við þjónustur eins og _Zapier_ og IFTTT_.

## Events {#events}

E Event er aðgerð sem skiptir fyrir sig sem á raun á eftir notandaframkvæmd eða aðra kjelda aðgerðar, eins og miðlahliti. Ultimate Multisite heldur rekystu á öllum hændlusa og loggum sem eru í gangi innan heilsa nettortsins þíns. Hún fangar eftir alheimar virkni sem skipta fyrir sig í multisiten þínu, eins og breytingar á planum.
