---
title: Àwọn Èrò Ìpìlẹ̀
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Awọn Erongba Ipilẹ {#basic-concepts}

Fun olumulo WordPress Multisite tuntun ati ẹni ti o ṣẹṣẹ bẹrẹ lilo Ultimate Multisite, ọpọlọpọ awọn ọrọ ati gbolohun tuntun le wa lati kọkọ gba sinu ọkan. Kikọ wọn jẹ iṣẹ pataki nitori iwọ yoo nilo lati loye pẹpẹ naa ati bi o ṣe n ṣiṣẹ lapapọ.

Ninu nkan yii, a yoo gbiyanju lati ṣalaye ati ṣe alaye diẹ ninu awọn erongba pataki ni WordPress. Diẹ ninu awọn wọnyi wulo diẹ sii fun awọn olumulo, awọn miiran fun awọn oludagbasoke, ati diẹ ninu fun mejeeji.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** jẹ iru fifi sori WordPress ti o gba ọ laaye lati ṣẹda ati ṣakoso nẹtiwọọki ti ọpọlọpọ awọn oju opo wẹẹbu lati dashboard WordPress kan ṣoṣo. O le ṣakoso ohun gbogbo pẹlu nọmba awọn oju opo, awọn ẹya, awọn akori, ati awọn ipa olumulo. O ṣee ṣe lati ṣakoso ọgọọgọrun ati ẹgbẹẹgbẹrun awọn oju opo.

## Nẹtiwọọki {#network}

Ni awọn ọrọ WordPress, nẹtiwọọki multisite ni ibi ti nọmba kan ti **subsites** le jẹ iṣakoso lati dashboard kan ṣoṣo. Botilẹjẹpe ṣiṣẹda nẹtiwọọki multisite yatọ laarin awọn olupese alejo gbigba, abajade ikẹhin maa n jẹ diẹ ninu awọn itọsọna afikun ninu faili **wp-config.php** lati jẹ ki WordPress mọ pe o n ṣiṣẹ ni ipo pataki yii.

Awọn iyatọ pato pupọ wa laarin nẹtiwọọki multisite ati fifi sori WordPress aladuro ti a yoo jiroro ni ṣoki.

## Ibi ipamọ data {#database}

Ibi ipamọ data jẹ akojọpọ data ti a ṣeto ati ti a ṣakoso. Ninu awọn ọrọ kọmputa, ibi ipamọ data tọka si sọfitiwia ti a lo lati tọju ati ṣeto data. Ronu rẹ bi kabineti faili nibiti o ti tọju data ni awọn apakan oriṣiriṣi ti a npe ni tabili.

WordPress Multisite nlo ibi ipamọ data kan, ati subsite kọọkan gba awọn tabili tirẹ pẹlu id bulọọgi ninu prefix, nítorí náà ni kete ti o ba fi fifi sori nẹtiwọọki sori ẹrọ, ibi ipamọ data rẹ si ṣẹda subsite kan, o yẹ ki o ni awọn tabili wọnyi:

_wp_1_options_ \- tabili awọn aṣayan fun subsite akọkọ

_wp_2_options_ \- tabili awọn aṣayan fun subsite keji

## Olupese alejo gbigba {#hosting-provider}

Olupese alejo gbigba jẹ ile-iṣẹ ti o jẹ ki awọn iṣowo ati awọn ẹni-kọọkan le jẹ ki awọn oju opo wẹẹbu wọn wa lori World Wide Web. Awọn iṣẹ ti awọn olupese web hosting nfun yoo yatọ, ṣugbọn wọn maa n pẹlu apẹrẹ oju opo wẹẹbu, aaye ipamọ lori host, ati asopọ si Intanẹẹti.

## Domain {#domain}

Orukọ domain jẹ adirẹsi ti eniyan nlo lati ṣabẹwo si oju opo rẹ. O sọ fun aṣàwákiri wẹẹbu ibi ti yoo wa oju opo rẹ. Gẹgẹ bi adirẹsi opopona, domain ni bi eniyan ṣe n ṣabẹwo si oju opo wẹẹbu rẹ lori ayelujara. Ati, o dabi nini ami niwaju ile itaja rẹ. Ti o ba fẹ ṣabẹwo si oju opo wẹẹbu wa, iwọ yoo ni lati tẹ adirẹsi wẹẹbu wa sinu adirẹsi aṣàwákiri rẹ, eyi ti o jẹ [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ nibiti [**ultimatemultisite.com**](http://ultimatemultisite.com) jẹ orukọ domain.

## Subdomain {#subdomain}

Subdomain jẹ iru ilana ipo oju opo wẹẹbu labẹ domain akọkọ, ṣugbọn dipo lilo awọn folda lati ṣeto akoonu lori oju opo wẹẹbu, o dabi pe o gba oju opo wẹẹbu tirẹ. A fi han bi [**https://site1.domain.com/**](https://site1.domain.com/) nibiti _site1_ jẹ orukọ subdomain ati [_domain.com_](http://domain.com) jẹ domain akọkọ.

## Subdirectory {#subdirectory}

Subdirectory jẹ iru ilana ipo oju opo wẹẹbu labẹ root domain ti o nlo awọn folda lati ṣeto akoonu lori oju opo wẹẹbu. Subdirectory jẹ kanna bi subfolder, ati awọn orukọ naa le ṣee lo ni paarọ ara wọn. A fi han bi [**https://domain.com/site1**](https://domain.com/site1) nibiti _site1_ jẹ orukọ subdirectory ati [_domain.com_](http://domain.com) jẹ domain akọkọ.

## Subsite {#subsite}

Subsite jẹ oju opo ọmọ ti o ṣẹda lori nẹtiwọọki Multisite. O le jẹ boya **subdomain** tabi **subdirectory** da lori bi fifi sori WordPress Multisite rẹ ṣe jẹ atunto.

## Super Admin {#super-admin}

WordPress Super Admin jẹ ipa olumulo pẹlu gbogbo agbara lati ṣakoso gbogbo subsites lori nẹtiwọọki Multisite. Fun awọn olumulo Multisite, eyi ni **ipele iraye ti o ga julọ** ti o le pese fun fifi sori WordPress rẹ.

## Afikun {#plugin}

Ni gbogbogbo, afikun jẹ akojọpọ koodu ti o ṣafikun iṣẹ afikun si oju opo WordPress rẹ. Eyi le rọrun bi yiyipada aami iwọle, tabi le nira bi fifi iṣẹ e-commerce kun. _Woocommerce ati Fọọmu Olubasọrọ_ jẹ awọn apẹẹrẹ ti afikun kan.

Lori WordPress Multisite, awọn afikun le fi sori ẹrọ nikan lati dashboard alakoso nẹtiwọọki nipasẹ Super Admin. Awọn Alakoso Subsite le mu awọn afikun ṣiṣẹ ati pa wọn ṣiṣẹ nikan laarin subsite wọn.

## Awọn akori {#themes}

Akori WordPress jẹ ẹgbẹ awọn faili (_awọn aworan, awọn iwe ara, ati koodu_) ti o pinnu irisi gbogbogbo ti oju opo naa. O pese gbogbo awọn aṣa iwaju bii aṣa fonti, eto oju-iwe, awọn awọ, ati bẹbẹ lọ.

Bakanna pẹlu awọn afikun, awọn akori ninu WordPress Multisite le fi sori ẹrọ nikan nipasẹ Super Admin ati pe awọn alakoso subsite le muu ṣiṣẹ ni ipele subsite.

## Awoṣe Oju Opo {#site-template}

**Awoṣe Oju Opo** jẹ oju opo boilerplate ti a le lo gẹgẹ bi ipilẹ nigba ṣiṣẹda awọn oju opo tuntun ninu nẹtiwọọki rẹ.

Eyi tumọ si pe o le ṣẹda oju opo ipilẹ, mu awọn afikun oriṣiriṣi ṣiṣẹ, ṣeto akori ti n ṣiṣẹ, ki o si ṣe akanṣe rẹ ni ọna eyikeyi ti o fẹ. Lẹhinna, nigba ti alabara rẹ ba ṣẹda Account tuntun, dipo ki wọn gba oju opo WordPress aiyipada ti ko ni akoonu to ni itumọ ninu rẹ, wọn yoo gba ẹda ti oju opo ipilẹ rẹ pẹlu gbogbo awọn akanṣe ati awọn akoonu ti wa ni ipo tẹlẹ.

## Sisopọ Domain {#domain-mapping}

**Sisopọ domain** pẹlu WordPress jẹ ọna lati darí awọn olumulo pada si host to tọ, nipasẹ adirẹsi oju opo wẹẹbu kan. Ninu WordPress Multisite, a ṣẹda subsites nipa lilo boya subdirectory tabi subdomain. Ohun ti sisopọ domain n ṣe ni pe o gba awọn olumulo subsite laaye lati lo domain ipele oke bii [**joesbikeshop.com**](http://joesbikeshop.com) lati jẹ ki adirẹsi oju opo wọn dabi ti ọjọgbọn diẹ sii.

## SSL {#ssl}

SSL dúró fún **Secure Sockets Layer**. Ó jẹ́ ìjẹ́rìí onídíjítà tí ń jẹ́rìí ìdánimọ̀ ojúlé wẹ́ẹ̀bù kan, tí ó sì ń jẹ́ kí ìsopọ̀ tí a ti parọ́ọ̀lù ṣiṣẹ́. Ní báyìí, a ń lò ó gẹ́gẹ́ bí imọ̀-ẹ̀rọ àṣekára fún pípa ìsopọ̀ intanẹẹti mọ́ ní ààbò àti dídáàbò bo gbogbo dátà ìfarapa tó ń ránṣẹ́ láàárín eto méjì, ní dídènà àwọn ọ̀daràn láti kà àti láti yí gbogbo ìwífún tí a gbé kọjá padà, pẹ̀lú àwọn àlàyé ara ẹni tó lè wà. Àwọn ẹrọ aṣàwákiri òde òní nílò SSL, èyí tó mú kí ó ṣe pàtàkì nígbà tí a bá ń dá àti ṣàkóso ojúlé wẹ́ẹ̀bù.

## Media {#media}

Media ni àwọn àwòrán, ohun, fídíò, àti àwọn fáìlì míì tí ń dá ojúlé wẹ́ẹ̀bù sílẹ̀.

Àwọn ojúlé nẹ́tíwọ́ọ̀kì ń pín ibi ìpamọ́ dátà kan ṣoṣo nínú WordPress Multisite, wọ́n sì ń pa àwọn ọ̀nà ọ̀tọ̀ọ̀tọ̀ mọ́ lórí eto fáìlì fún àwọn fáìlì Media.

Ipo WordPress boṣewa (wp-content/uploads) ṣi wà; ṣùgbọ́n, a yí ọ̀nà rẹ̀ padà láti fi ID aláìlẹ́gbẹ́ ti ojúlé nẹ́tíwọ́ọ̀kì hàn. Nítorí náà, àwọn fáìlì Media fún ojúlé nẹ́tíwọ́ọ̀kì ń hàn bí wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks ni àwọn URL tí kò yí padà ti ìfìwéránṣẹ́ búlọọ̀gù kọọkan tàbí ojú-ìwé rẹ nínú ojúlé rẹ. A tún ń pè Permalinks ní **àwọn ìjápọ̀ arẹwà**. Ní àìyípadà, àwọn URL WordPress ń lo fọ́ọ̀mù query string tí ó rí bíi èyí:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite jẹ́ plugin WordPress kan, tí a ṣe fún àwọn ìfíṣọ̀ WordPress Multisite, tí ń yí ìfíṣọ̀ WordPress rẹ padà sí nẹ́tíwọ́ọ̀kì ojúlé aládídùn – bíi [WordPress.com](https://WordPress.com) – tí ń jẹ́ kí àwọn alabara dá àwọn ojúlé sílẹ̀ nípasẹ̀ owó oṣooṣù, oṣù mẹ́ta mẹ́ta, tàbí ọdọọdún (o tún lè dá àwọn ètò Ọ̀fẹ́ sílẹ̀).

## Fọ́ọ̀mù Checkout {#checkout-form}

Fọ́ọ̀mù Checkout jẹ́ fọ́ọ̀mù àṣẹ ìgbésẹ̀ kan tàbí ọ̀pọ̀ ìgbésẹ̀ tí ó ní ìdásílẹ̀ subsite, membership, àti àwọn Account oníṣe nípasẹ̀ ìforúkọsílẹ̀ Ultimate Multisite. Ó ní àwọn field àti fọ́ọ̀mù ìsanwó oriṣiriṣi tí oníṣe gbọdọ̀ fi ránṣẹ́ nígbà ìlànà ìforúkọsílẹ̀.

## Webhook {#webhook}

Webhook (tí a tún ń pè ní web callback tàbí HTTP push API) jẹ́ ọ̀nà fún app kan láti pèsè ìwífún àkókò-gidi fún àwọn àpílíkéṣọ̀nù míì. Webhook ń fi dátà ránṣẹ́ sí àwọn àpílíkéṣọ̀nù míì bí ó ṣe ń ṣẹlẹ̀, èyí túmọ̀ sí pé o máa gba dátà lẹ́sẹ̀kẹsẹ̀.

**Àwọn webhook Ultimate Multisite** ṣí àwọn ànfààní àìlópin, tí ń jẹ́ kí àwọn alákóso nẹ́tíwọ́ọ̀kì ṣe onírúurú ìṣọ̀kan aṣiwèrè-ṣùgbọ́n-tó-wúlò, pàápàá jùlọ bí a bá lò ó pọ̀ mọ́ àwọn iṣẹ́ bíi _Zapier àti IFTTT_.

## Events {#events}

Event jẹ́ ìṣe kan tí ó ṣẹlẹ̀ gẹ́gẹ́ bí abajade ìṣe oníṣe tàbí orísun míì, bíi títẹ asin. Ultimate Multisite ń pa àkọsílẹ̀ gbogbo Events àti logs tí ń ṣẹlẹ̀ nínú gbogbo nẹ́tíwọ́ọ̀kì rẹ mọ́. Ó ń tọpa àwọn ìṣe oriṣiriṣi tí ń ṣẹlẹ̀ nínú multisite rẹ, bíi àwọn ìyípadà plan.
