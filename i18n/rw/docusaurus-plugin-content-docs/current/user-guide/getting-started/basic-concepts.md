---
title: Intego z'Ubwoko
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Ingozi y'Uburyo

Kwa umuntu w'uri mu WordPress Multisite uyu munsi, kandi umuntu wumutseye gukoresha Ultimate Multisite, hari ibindi mibare myiza cyane ugomba kwiga mu gihe cyo mu ntangiriro. Kwiga ibyo ni ikintu runini kuko uza gutegura gukunda uburyo uburyo bwo gukora platform yose kandi uburyo bwo gukora.

Mu gihe cyacu, twagira gukora no gukoresha ibindi mibare myiza mu WordPress. Iyo zimwe zikwiriye cyane ku bantu bashobora gukoresha, zimwe n'ibindi ku bakoresha uburyo bwo gukora (developers), kandi zimwe n'ibindi ku babiri.

## WordPress Multisite

WordPress **Multisite** ni uburyo bwo gukoresha WordPress kuko bishobora kugufasha ugukora no gutegura umuryango w'ubwoko bw'ibanga (network) mu dashboard yimwe ya WordPress. Uza gutegura ibindi byose, nk'ubwo ubundi bw'ibanga, uburyo bwo gukoresha (features), themes, n'uburyo bwo gukora umuntu (user roles). Ni hari uburyo bwo gutegura ibindi mu cyaka cyose.

## Ubwoko (Network)

Mu gihe cyo mu WordPress, multisite network niho hari ubundi bw'ibanga (subsites) bishobora gutegurwa ku dashboard yimwe. Iyo gukora multisite network ikwiye kuri hosting providers zikwiye, ariko uburyo bwo gukoresha cyangwa ibindi byiza byose ni ibindi mu gihe cyo mu **wp-config.php** kugira ngo WordPress izitangire ko yari ifite uburyo bwo gukora.

Hari ibindi mibare myiza nyinshi hagati multisite network n'ubwoko bw'ubwoko (stand-alone) bwa WordPress, kandi twagomba kubyera mu gihe cyo mu buryo bwo gukoresha.

## Database

Database ni uburyo bwo gukoresha ibindi byose mu gukoresha data yiza. Mu gihe cyo mu gukora inyandiko (computing terminology), database ni software ishobora gukoresha kugira ngo itegeze no gutegure data. Uzi nk'umuri w'ibanga uhoze ibindi byose, aho uhoza data mu nshingano zikiriye zishoboraga guhinduka (tables).

WordPress Multisite yashobora gukoresha database ya mbere kandi umubwoko w'ubwoko (subsite) niho hari tables z'ibindi byose, aho idakira blog idakira mu prefix. No gukora multisite network, uza kuba ufite ibi tables:

_wp_1_options_ \- table ya ko ya mbere y'ubwoko bw'umunsi w'ubwoko bw'ubwoko bw'inyuma (subsite)

_wp_2_options_ \- table ya ko ya mbere y'ubwoko bw'ubwoko bw'inyuma (subsite)

## Umuyobozi w'ubwoko bwo gukoresha (Hosting provider)

Umuyobozi w'ubwoko bwo gukoresha ni kompani itanga abantu n'abizina bitanga uburenganzira bwo gutanga uburyo bwose bwo kubona ibintu kuri Internet. Icyiciro cyangwa ibyo umuyobozi w'ubwoko bwo gukoresha yitanga byaba byiza, ariko mu gihe runaka byitanga uburyo bwo gukora website, ubwoko bw'ubwoko (storage space), no kugera ku Internet.

## Domain

Ubutabera bw'ubwoko ni indwara w'ubwoko abantu bafite cyangwa bakoresha kugira ngo babone website yawe. Buri gihe, butabera bw'ubwoko ni uburyo umuviri (web browser) utagira gukora ibintu kuri site yawe. Urugero, nk'uko ubutabera bwo mu gihe cy'umunsi. Iyo wifuza kubona website yacu, uza kuba ufite gukoresha uburyo bw'ubwoko ku address ya uvugizi (address) ya umuviri wako, itarimo [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), aho [**ultimatemultisite.com**](http://ultimatemultisite.com) ni butabera bw'ubwoko (domain name).

## Subdomain

Subdomain ni uburyo bwo gukora website mu gihe cy'umunsi w'ubwoko, ariko ngo umuntu atagire amakuru y'ubwoko mu buryo bwo gukoresha folders kugira ngo yitanye n'ubwoko. Iyo itanga nk'ubwoko bw'inyuma (website) buri gihe. Iritanga ni [**https://site1.domain.com/**](https://site1.domain.com/) aho _site1_ ni izina ry'ubwoko bw'inyuma kandi [_domain.com_](http://domain.com) ni butabera bw'ubwoko (main domain).

## Subdirectory

Subdirectory ni uburyo bwo gukora website mu gihe cy'umunsi w'ubwoko, ariko gutanga nk'folders kugira ngo yitanye n'ubwoko. Subdirectory ni ngufi y'folder kandi izina zikoreshwa mu gihe runaka. Iritanga ni [**https://domain.com/site1**](https://domain.com/site1) aho _site1_ ni izina ry'subdirectory kandi [_domain.com_](http://domain.com) ni butabera bw'ubwoko (main domain).

## Subsite

Subsite ni subsite yawe umukono wumwe uyuza kuho mu Multisite network. Iyo igaragaza **subdomain** cyangwa **subdirectory** ikoresheje aho ubushakira bwa WordPress Multisite yari yashobora gukoresha, kuko ibyo byerekana ku buryo umwe yisobanuye uyuza.

## Super Admin

WordPress Super Admin ni igikorwa cy'umuntu (user role) cyo gutera inshingano zose mu gukemura ubuzima bwo subsites mu Multisite network. Ku gihe cyo abantu bashobora gukoresha Multisite, ni **ubwoko bw'ubwoko bw'ubwoko bw'ubwoko (highest level of access)** ushobora kubigize uyuho ku WordPress yashobora gutera inshingano.

## Plugin

Mu gihe cy'ingenzi, plugin ni gikorwa cyangwa ikoreshaho ry'urugero rwa code rishobora gufasha umwe mu site yawe n'ubushobozi z'ingenzi. Iyo ibyo byerekana ku rugero, ni guhindura logo y'ubwoko (login logo) cyangwa gukoresha ubushobozi bwo e-commerce. _Woocommerce and Contact Form_ ni uburyo bw'ibyo byerekana mu plugin.

Mu WordPress Multisite, plugins ishobora gukoreshwa ku dashboard ya admin ya network ikoresheje Super Admin gusa. Abantu bashobora gutera inshingano z'ingenzi (activate) cyangwa gufata inshingano (deactivate) mu subsite yabo gusa.

## Themes

WordPress theme ni gikorwa cyangwa igice cyo code cyangwa graphics cyo gukoresha kugira ngo umwe site yoroshye kwerekana. Iyo ishobora gutera inyuguti zose z'ubwoko (front-end stylings) nk'uko uburyo bwo kumenya (font styling), uburyo bw'umuganda w'ubwoko, amakuru y'ubwoko n'ibindi.

Nko mu plugin, themes mu WordPress Multisite ishobora gukoreshwa Super Admin gusa kandi ishobora gutera inshingano ku subsite level na abantu bashobora gutera inshingano z'ingenzi (activate).

## Site Template

**Site Template** ni site yashobora kuba uburyo bwo gufata umukono (boilerplate) wumwe ushobora gukoresha nk'ubushobozi bwa mbere iyo ugiye gukora subsites mu network yawe.

Ibi byerekana ko ushobora gukora site yashobora kuba uburyo bwo gufata umukono, gutera inshingano z'ingenzi (activate) za plugin z'ibindi, gufata theme ikoreshejwe, kandi ugufata inshingano mu buryo wowe ushobora gukora. Iyo umuntu yashobora gukora account yashya, nta site ya WordPress ishyize n'ubwoko bwa mbere n'ubwoko bw'umunsi (meaningful content) mu gihe cyo, azabona copy ya site yawe yashobora kuba uburyo bwo gufata umukono, yisobanuye ubushobozi bwa mbere n'ibindi byose byari yashobora gukoreshwa.

## Domain Mapping

Ubwumva w'ubwumva (Domain mapping) mu WordPress ni uburyo bwo guhindura abantu kuho kw'umuganda w'ubwumva, binyuze mu uburyo bw'ubwoko bw'umwebwe. Mu WordPress Multisite, subsites bishobora gukoreshwa binyuze mu cyangwa mu nshuro (subdomain). Ubwumva bwo guhindura (domain mapping) ni ubushobozi bwo abantu babiri b'ubwumva (subsite users) gukoresha domain y'ibyo by'ingenzi nk'uko [**joesbikeshop.com**](http://joesbikeshop.com), kugira ngo umuganda w'ubwoko we yoroshye kandi yishobora kuba yiza cyane.

## SSL

SSL ni **Secure Sockets Layer**. Ni kintu cy'ubwoko cy'ibinyuriro (digital certificate) kigenzura ubwoko bw'umwebwe bwo kubyara kandi kuguha uburyo bwo gukoresha uburyo bwo kwitonderwa (encrypted connection). Umuhunda, ugiye gukoreshwa nk'ubwoko bw'ubwoko bwo guhindura umwebwe kugira ngo ubwoko bukurirwe kandi ugabane uburyo bwo gukoresha uburyo bwo kwitonderwa. Ni ikintu gikomeye cyane mu gihe cy'uburyo bwo gukora no gukoresha umwebwe.

## Media

Media ni ibindi byo nk'ibyo byo kuvuga, ibisanda, amakuru (video), n'ibindi bifite uburyo bwo gutera umwebwe w'umuganda.

Amakuru y'ubwoko (Network sites) yashyira database ya mbere mu WordPress Multisite, kandi yitera ubwoko bw'amashyirayi (paths) mu filesystem ku buryo bukurirwa kuri subsites. Icyo gishobora kuba ni: wp-contents/uploads/site/[id].

Uburyo bwo gukoresha cyangwa uburyo bwo gukoresha media files mu WordPress yashyira mu cyerekezo cy'ubwoko (wp-content/uploads) kuko ubwoko bukurirwa ku mbere, ariko umusaruro w'amashyirayi (path) ni ukuriye kugira ngo uburyo bwo gukoresha media files mu network site yitandukanye.

## Permalinks

Permalinks ni amakuru y'umwebwe (URLs) y'ibyo byo kwandika kuri blog post cyangwa page yawe mu site. Permalinks zishobora guhindurwa nk'amashyirayi yiza kandi yoroshye (pretty links). Mu gihe cy'ubwoko, URLs za WordPress zikoresha uburyo bwo gukoresha query string, kandi yitandukanye nko kuri:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite ni plugin ya WordPress, umwe n'ubwujyu bwo kuita WordPress Multisite, uyu wumukoresha kugira ngo utangire uburenganzira bw'amashuri y'amashuri – nk'uko [WordPress.com](https://WordPress.com) - ubugenzura abantu gushaka amashuri mu gihe cy'umwuka, imyaka itatu, cyangwa imyaka itatu (ugukora Free plans ntabwo).

## Checkout Form

Checkout Form ni ifunguro cyangwa ifunguro cy'ubwoko bw'amashuri bishobora kuba bifite ibinyuriro by'umwuka, uburyo bwo gukora subsite, ubwujyu (membership), n'abantu b'uburyo bwo gukoresha Ultimate Multisite. Iyo ifunguro irimo amafite amakuru y'ibintu bifite ibyerekezo kandi by'amashuri (payment forms) ugiye gutangira mu gihe utagira umwanya.

## Webhook

Webhook (umwezi w'ubwoko bwo gukoresha HTTP push API cyangwa web callback) ni uburyo abantu bashobora gufasha abandi abantu n'ibindi by'amashuri ku gihe cy'ubwujyu bwo gukora. Webhook igenda amakuru ku bindi by'amashuri mu gihe bishobora kuba, meaning wumva amakuru ngombi.

**Ultimate Multisite webhooks** bizera uburyo bwo gukora ibintu byinshi cyane, bikorera abashinzwe uburenganzira bw'ubwoko (network admins) gufasha gukora ibintu byiza kandi bifite umwanya, cyane iyo bitandukanye n'ibindi by'amashuri nk'uko _Zapier_ na IFTTT_.

## Events

Event ni ikintu kigaragara mu gihe ugiye gukora ikintu cyangwa se mu gihe ugiye gukora ikintu cyo mu gihe cyo gukora ikintu cyangwa se mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyangwa se mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyangwa se mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu gihe cyo gukora ikintu cyo mu
