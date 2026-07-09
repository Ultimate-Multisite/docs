---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite jẹ àfikún WordPress Multisite tí ó jẹ́ kí o lè fún àwọn oníbàárà ní WaaS tàbí Websites as a Service. Ṣáájú kí a tó wọ inú rẹ̀ kí a sì kọ́ bí Ultimate Multisite ṣe lè ran iṣẹ́ ajé rẹ àti àwọn oníbàárà lọ́wọ́, ìmọ̀ ìpilẹ̀ kan wà tí a ní láti ní.

## WordPress Multisite

Ọ̀pọ̀ nínú wa mọ fifi WordPress sori ẹrọ boṣewa. O lè dá a sílẹ̀ nípasẹ̀ pánẹ́ẹ̀lì ìṣàkóso ti olùpèsè hosting rẹ tàbí, fún àwọn tó ní ìgboyà, ṣètò web server tuntun àti ibi ipamọ́ data, gba àwọn fáìlì core kalẹ̀, kí o sì bẹ̀rẹ̀ ìlànà fifi sori ẹrọ.

Èyí ń ṣiṣẹ́ fún ọ̀pọ̀ mílíọ̀nù àwọn ojúlé WordPress káàkiri ayé, ṣùgbọ́n láti ojú ìwòye ilé iṣẹ́ aṣojú tàbí olùpèsè hosting, ẹ jẹ́ kí a jíròrò ìwọ̀n fún ìṣẹ́jú kan.

Bí ó tilẹ̀ jẹ́ pé ó rọrùn láti dá ojúlé WordPress kan sílẹ̀ tàbí kódà ọgọ́rùn-ún kan nípasẹ̀ pánẹ́ẹ̀lì ìṣàkóso aládàáṣe, àwọn ìṣòro máa ń bẹ̀rẹ̀ sí í hàn láìpẹ́ nígbà tí ó bá kan ìṣàkóso àwọn ojúlé wọ̀nyí. Bí a bá fi wọn sílẹ̀ láìṣàkóso, o di ibi-afẹ́de pàtàkì fún malware. Láti ṣàkóso túmọ̀ sí lílo akitiyan àti àwọn ohun àmúlò, àti bí ó tilẹ̀ jẹ́ pé àwọn irinṣẹ́ ita àti àwọn àfikún wà láti ràn wá lọ́wọ́ láti mú ìṣàkóso àti ìtọ́jú àwọn ojúlé WordPress rọrùn, òtítọ́ pé àwọn oníbàárà ṣi ní ìwọlé ìṣàkóso túmọ̀ sí pé àwọn akitiyan wọ̀nyí lè rọrùn láti ṣàìṣe.

Nínú core rẹ̀, WordPress pèsè ẹ̀yà kan tí a pè ní rọọrun ní ‘Multisite’ tí ìpilẹ̀ rẹ̀ ti bẹ̀rẹ̀ láti ọdún 2010 ní ìgbéjáde WordPress 3.0. Láti ìgbà náà, ó ti gba ọ̀pọ̀ àtúnṣe tí a ṣe láti ṣàfikún àwọn ẹ̀yà tuntun àti láti mú ààbò le síi.

Ní ìtumọ̀ pàtàkì, WordPress multisite lè jẹ́ bí èyí: Yunifásítì kan ń tọ́jú fifi WordPress sori ẹrọ kan ṣoṣo, ṣùgbọ́n ẹ̀ka kọ̀ọ̀kan ń tọ́jú ojúlé WordPress tirẹ̀.

Láti tú gbólóhùn yìí ká, ẹ jẹ́ kí a wo díẹ̀ lára àwọn ọ̀rọ̀ ìpilẹ̀ tí ó wà kì í ṣe nínú ìwé ìtọnisọ́nà Ultimate Multisite nìkan, ṣùgbọ́n tún káàkiri àwùjọ WordPress.

### Nẹ́tíwọ́ọ̀kì náà

Ní ti WordPress, nẹ́tíwọ́ọ̀kì multisite ni ibi tí a ti lè ṣàkóso ọ̀pọ̀ àwọn ojúlé abẹ́ láti Dashboard kan ṣoṣo. Bí ó tilẹ̀ jẹ́ pé dídá nẹ́tíwọ́ọ̀kì multisite sílẹ̀ yàtọ̀ láàárín àwọn olùpèsè hosting, àbájáde ìkẹyìn sábà máa jẹ́ àwọn ìtọ́nisọ́nà díẹ̀ síi nínú fáìlì wp-config.php láti jẹ́ kí WordPress mọ̀ pé ó ń ṣiṣẹ́ ní módù pàtó yìí.

Ọ̀pọ̀ ìyàtọ̀ kedere wà láàárín nẹ́tíwọ́ọ̀kì multisite àti fifi WordPress sori ẹrọ tó dúró lọ́tọ̀, èyí tí a ó jíròrò ní ṣókí.

#### Subdomain vs. Subdirectory

Ọ̀kan lára àwọn ìpinnu tó máa ń dé kíákíá tí o ní láti ṣe ni bóyá fifi multisite sori ẹrọ yóò ṣiṣẹ́ pẹ̀lú _subdirectories_ tàbí _subdomains_. Ultimate Multisite ń ṣiṣẹ́ dáadáa bákan náà pẹ̀lú àwọn yíyàn méjèèjì, ṣùgbọ́n àwọn ìyàtọ̀ àkọ́lé-ìmọ̀-ẹ̀rọ kan wà láàárín àwọn ìṣètò méjèèjì.

Nínú ìṣètò _subdirectory_, àwọn ojúlé nẹ́tíwọ́ọ̀kì máa ń jogún ipa-ọ̀nà kan tí ó dá lórí orúkọ domain àkọ́kọ́. Fún àpẹẹrẹ, ojúlé nẹ́tíwọ́ọ̀kì tí a pè ní ‘site1’ yóò ní URL kíkún rẹ̀ gẹ́gẹ́ bí https://domain.com/site1. Nínú ìṣètò _subdomain_, ojúlé nẹ́tíwọ́ọ̀kì náà yóò ní _subdomain_ tirẹ̀ tí ó yọ láti orúkọ domain àkọ́kọ́. Nítorí náà, ojúlé tí a pè ní ‘site1’ yóò ní URL kíkún rẹ̀ gẹ́gẹ́ bí https://site1.domain.com/.

Bí ó tilẹ̀ jẹ́ pé àwọn aṣàyàn méjèèjì jẹ́ yíyàn tó péye, lílo _subdomains_ ń fúnni ní ọ̀pọ̀ àǹfààní, ṣùgbọ́n ó tún nílò ìrònú àti ìṣètò púpọ̀ síi nínú àkọ́lé-ìmọ̀-ẹ̀rọ rẹ̀.

Ní ti DNS, lílo _subdirectories_ ń fi ìpenija tó rọrùn díẹ̀ hàn. Nítorí pé àwọn ojúlé nẹ́tíwọ́ọ̀kì jẹ́ ọmọ ipa-ọ̀nà òbí nìkan, àkọsílẹ̀ orúkọ domain kan ṣoṣo ni ó nílò láti wà fún orúkọ domain àkọ́kọ́. Fún _subdomains_, ìpenija náà díẹ̀ nira síi, ó nílò bóyá àkọsílẹ̀ CNAME lọ́tọ̀ fún ojúlé nẹ́tíwọ́ọ̀kì kọ̀ọ̀kan tàbí àkọsílẹ̀ wildcard (*) nínú àwọn àkọsílẹ̀ DNS.

Agbègbè ìrònú míì ni ti SSL àti fífúnni àti lílo àwọn ìwé-ẹ̀rí SSL. Nínú ìṣètò _subdirectory_, ìwé-ẹ̀rí domain kan ṣoṣo lè jẹ́ lílo nítorí pé àwọn ojúlé nẹ́tíwọ́ọ̀kì jẹ́ àwọn ipa-ọ̀nà orúkọ domain àkọ́kọ́ nìkan. Nítorí náà, ìwé-ẹ̀rí fún domain.com yóò pèsè SSL tó tó fún https://domain.com/site1, https://domain.com/site2 àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.

Nínú ìṣètò _subdomain_, lílo ìwé-ẹ̀rí SSL wildcard jẹ́ ọ̀kan lára àwọn aṣàyàn tó wọ́pọ̀ jù. Irú ìwé-ẹ̀rí SSL yìí ń pèsè ìṣàkọsílẹ̀ ààbò fún domain àti àwọn _subdomains_ rẹ̀. Nítorí náà, ìwé-ẹ̀rí SSL wildcard yóò pèsè ìṣàkọsílẹ̀ ààbò fún https://site1.domain.com, https://site2.domain.com àti https://domain.com fúnra rẹ̀.

Bí ó tilẹ̀ jẹ́ pé àwọn aṣàyàn míì wà, wọ́n sábà máa ń ní ìdíwọ̀n nínú àgbègbè àti ìlò, wọ́n sì nílò ìṣètò àti ìrònú àfikún nípa bí wọ́n ṣe yẹ.

#### Àwọn Àfikún àti Àwọn Akori

Ohun tí WordPress bá fúnni, ó tún lè gba padà, ó kéré tán láti ojú ìwòye oníbàárà. Nínú fifi WordPress sori ẹrọ tó dúró lọ́tọ̀, bí olùṣàkóso ojúlé bá fi àfikún búburú sori ẹrọ tàbí kò bá pa fifi sori ẹrọ wọn mọ́ ní ìmúdójúìwọ̀n, ẹni tí ìṣe yìí kan àti ẹni tí ó ṣòfò nìkan ni ara wọn. Ṣùgbọ́n, olùṣàkóso ojúlé tó fi àfikún búburú sori fifi multisite sori ẹrọ ń dá ìpalára sí gbogbo ojúlé tí a fi sori nẹ́tíwọ́ọ̀kì náà.

Fún ìdí yìí, nígbà tí a bá ṣètò WordPress gẹ́gẹ́ bí multisite, ó yọ agbára láti ọwọ́ àwọn olùṣàkóso ojúlé láti fi àwọn àfikún àti àwọn akori sori ẹrọ, ó sì gbe agbára yìí sí ipa olùṣàkóso nẹ́tíwọ́ọ̀kì tuntun tàbí ‘super admin’. Ipa aláṣẹ yìí lè pinnu bóyá láti gba àwọn olùṣàkóso àwọn ojúlé nẹ́tíwọ́ọ̀kì láàyè láti rí tàbí wọlé sí àkójọ àfikún nínú Dashboard wọn, àti bí ó bá rí bẹ́ẹ̀, bóyá irú àwọn àṣẹ bẹ́ẹ̀ gbooro sí _mímú ṣiṣẹ́_ tàbí _mímú dáwọ́ dúró_ àwọn àfikún.

Ní ìwọ̀n yìí, olùṣàkóso nẹ́tíwọ́ọ̀kì ni ó ní ojúṣe fún fifi àwọn àfikún àti àwọn akori sori nẹ́tíwọ́ọ̀kì, ó sì ń fi àwọn àṣẹ lé àwọn ojúlé nẹ́tíwọ́ọ̀kì lọ́wọ́ láti lè lo àwọn àfikún àti àwọn akori wọ̀nyí. Àwọn olùṣàkóso ojúlé kò lè fi àwọn àfikún àti àwọn akori sori ẹrọ tàbí wọlé sí àwọn àfikún àti àwọn akori tí a kò yàn sí ojúlé wọn.

#### Àwọn Olùlò àti Àwọn Olùṣàkóso

Nínú WordPress Multisite, gbogbo àwọn ojúlé nẹ́tíwọ́ọ̀kì ń pín ibi ipamọ́ data kan náà, nítorí náà wọ́n ń pín àwọn olùlò, àwọn ipa àti àwọn agbára kan náà. Ọ̀nà tó yẹ jù láti ronú nípa rẹ̀ ni pé gbogbo àwọn olùlò jẹ́ ọmọ ẹgbẹ́ nẹ́tíwọ́ọ̀kì náà, kì í ṣe ti ojúlé kan pàtó.

Pẹ̀lú òye yìí, ó lè má dára láti jẹ́ kí a dá àwọn olumulo sílẹ̀, àti fún ìdí yìí WordPress Multisite yọ agbára yìí kúrò lọ́wọ́ àwọn alábòójútó ojúlé, ó sì gbe agbára yìí sí ti alábòójútó nẹ́tíwọ́ọ̀kì. Ní ìdáhùn, alábòójútó nẹ́tíwọ́ọ̀kì lè fi àwọn àṣẹ tó yẹ fún alábòójútó ojúlé láti jẹ́ kí wọ́n lè dá àwọn Account olumulo sílẹ̀ fún ojúlé tiwọn.

<!-- Aworan iboju kò sí: ojú ìṣàkóso olumulo nẹ́tíwọ́ọ̀kì WordPress Multisite -->

Ní fífi gbólóhùn lókè tún un sọ, bí ó tilẹ̀ jẹ́ pé àwọn Account olumulo dàbí ẹni pé wọ́n ní ìbáṣepọ̀ pẹ̀lú ojúlé, ní tòótọ́ a pín wọn sí nẹ́tíwọ́ọ̀kì, nítorí náà wọ́n gbọ́dọ̀ jẹ́ aláìlẹ́gbẹ́ káàkiri nẹ́tíwọ́ọ̀kì náà. Ó lè wà nígbà tí àwọn orúkọ olumulo kò ní wà fún ìforúkọsílẹ̀ nítorí ìdí yìí.

Bí ó tilẹ̀ jẹ́ pé kì í ṣe èrò àjèjì nínú àwọn ètò ilé-iṣẹ́ ńlá, orísun kan ṣoṣo yìí fún ìforúkọsílẹ̀ àti ìfìdímúlẹ̀ olumulo máa ń jẹ́ èrò tó ṣòro láti lóye fún àwọn ènìyàn tó mọ àwọn fifi sori WordPress aládàáṣe, níbi tí ìṣàkóso olumulo ti rọrùn díẹ̀.

#### Mídíà

Níbi tí àwọn ojúlé nẹ́tíwọ́ọ̀kì ti ń pín database kan ṣoṣo nínú WordPress Multisite, wọ́n pa àwọn ipa ọ̀nà lọ́tọ̀ sílẹ̀ lórí filesystem fún àwọn fáìlì mídíà.

Ipò WordPress àkọ́kọ́ (wp-content/uploads) wà bí ó ti rí; ṣùgbọ́n, a yí ipa ọ̀nà rẹ̀ padà láti fi ID aláìlẹ́gbẹ́ ti ojúlé nẹ́tíwọ́ọ̀kì hàn. Nítorí náà, àwọn fáìlì mídíà fún ojúlé nẹ́tíwọ́ọ̀kì kan máa ń farahàn bí wp-contents/uploads/site/[id].

#### Permalinks

A ti mẹ́nuba tẹ́lẹ̀ pé àwọn àǹfààní pàtàkì wà fún ìṣètò _subdomain_ ju _subdirectory_ lọ, ibi nìyí: àwọn ipa ọ̀nà.

Nínú ìṣètò _subdirectory_, ojúlé àkọ́kọ́ (ojúlé àkọ́kọ́ tí a dá sílẹ̀ nígbà tí a dá nẹ́tíwọ́ọ̀kì náà sílẹ̀) àti àwọn ojúlé abẹ́-nẹ́tíwọ́ọ̀kì gbọ́dọ̀ pín ipa ọ̀nà kan náà tó ń bẹ̀rẹ̀ láti orúkọ domain. Èyí ní àǹfààní láti fa ọ̀pọ̀lọpọ̀ ìkọlù.

Fún àwọn ìfiranṣẹ́, a fi ipa ọ̀nà /blog/ dandan kún ojúlé àkọ́kọ́ láti dènà ìkọlù pẹ̀lú àwọn ojúlé nẹ́tíwọ́ọ̀kì. Èyí túmọ̀ sí pé àwọn permalinks tó lẹ́wà bí ‘Orúkọ ìfiranṣẹ́’ yóò hàn bí domain.name/blog/post-name/

<!-- Aworan iboju kò sí: àwọn ìṣètò permalink WordPress tó ń fi ipa ọ̀nà /blog/ hàn nínú ìṣètò subdirectory -->

Nínú ìṣètò _subdomain_, ìgbésẹ̀ yìí kò ṣe pàtàkì nítorí ojúlé nẹ́tíwọ́ọ̀kì kọ̀ọ̀kan ní àǹfààní láti ìyàtọ̀ domain pípé, nítorí náà kò nílò láti gbẹ́kẹ̀ lé ipa ọ̀nà kan ṣoṣo. Dípò bẹ́ẹ̀, wọ́n pa àwọn ipa ọ̀nà tirẹ̀ tó yàtọ̀ sílẹ̀, tí ó dá lórí _subdomain_ wọn.

<!-- Aworan iboju kò sí: àwọn ìṣètò permalink WordPress fún ìṣètò subdomain -->

#### Àwọn Ojúewé Aláìyípadà

Nínú ìṣètò _subdirectory_, àǹfààní fún ìkọlù orúkọ tún kan àwọn ojúewé aláìyípadà, nítorí ojúlé àkọ́kọ́ àti àwọn ojúlé nẹ́tíwọ́ọ̀kì pín ipa ọ̀nà kan náà.

Láti dènà èyí, WordPress pèsè ọ̀nà láti fi àwọn orúkọ ojúlé kan sí blacklist kí wọ́n má bàa kọlu àwọn orúkọ ojúlé àkọ́kọ́. Ní gbogbo ìgbà, alábòójútó nẹ́tíwọ́ọ̀kì yóò tẹ àwọn ipa ọ̀nà gbòǹgbò ti àwọn ojúewé ojúlé àkọ́kọ́.

<!-- Aworan iboju kò sí: àwọn ìṣètò nẹ́tíwọ́ọ̀kì WordPress tó ń fi àwọn orúkọ ojúlé tí a dènà hàn láti dènà ìkọlù -->

Nínú ìṣètò _subdomain_, àǹfààní ìkọlù orúkọ dín kù nípasẹ̀ _subdomain_ nítorí ó jẹ́ aláìlẹ́gbẹ́ sí ojúlé nẹ́tíwọ́ọ̀kì náà, kò sì ní ìbáṣepọ̀ kankan pẹ̀lú ojúlé àkọ́kọ́.

### Ìforúkọsílẹ̀

Nínú àwọn ìṣètò nẹ́tíwọ́ọ̀kì ti WordPress Multisite, ọ̀pọ̀lọpọ̀ aṣayan ìforúkọsílẹ̀ olumulo tuntun wà, tó ń jẹ́ kí àwọn olumulo tuntun àti àwọn tó ti wà tẹ́lẹ̀ lè dá àwọn ojúlé sílẹ̀.

<!-- Aworan iboju kò sí: àwọn ìṣètò nẹ́tíwọ́ọ̀kì WordPress Multisite tó ń fi àwọn aṣayan ìforúkọsílẹ̀ hàn -->

Ní ìdàkejì àwọn fifi sori WordPress aládàáṣe, àwọn ojúlé nẹ́tíwọ́ọ̀kì kò pa àwọn aṣayan tí a mọ̀ dáadáa sílẹ̀ láti gba ìforúkọsílẹ̀ olumulo tàbí láti yàn àwọn ìforúkọsílẹ̀ wọ̀nyẹn sí àwọn ipa.

<!-- Aworan iboju kò sí: àwọn ìṣètò ìforúkọsílẹ̀ olumulo ojúlé WordPress aládàáṣe tó ń fi àwọn aṣayan díẹ̀ hàn -->

Nígbà tí a bá dá àwọn Account olumulo sílẹ̀, àwọn Account wọ̀nyẹn ni a ń dá sílẹ̀ ní ìpele nẹ́tíwọ́ọ̀kì. Nítorí náà, dípò kí wọ́n jẹ́ ti ojúlé pàtó kan, wọ́n jẹ́ ti nẹ́tíwọ́ọ̀kì. Èyí ní àwọn àǹfààní àti àìlera pàtàkì kan.

Fún àpẹẹrẹ, rò pé WordPress Multisite rẹ wà nínú iṣẹ́ ìròyìn àti ìwífúnni. Ìwọ yóò dá multisite náà sílẹ̀, lẹ́yìn náà yóò dá àwọn ojúlé nẹ́tíwọ́ọ̀kì sílẹ̀ fún ìṣúná, imọ̀ ẹrọ, ìdárayá àti àwọn agbègbè ìfẹ́ míì, nígbà tí o ń pa ìṣàkóso gbogbogbò ti àwọn plugins àti themes mọ́. Ojúlé nẹ́tíwọ́ọ̀kì kọ̀ọ̀kan yóò ní ìpele ìṣàkóso tó pọ̀ jù lọ lórí ìrísí àti ìmọ̀lára àti ìrírí olumulo ti ojúlé nẹ́tíwọ́ọ̀kì wọn ju àwọn custom post types tàbí àwọn ẹ̀ka ìfiranṣẹ́ deede lọ.

Ní ìwọn yìí, nígbà tí olumulo bá wọlé, wọ́n wọlé sí nẹ́tíwọ́ọ̀kì, àti ní ìkẹyìn wọ́n tún wọlé sí ojúlé nẹ́tíwọ́ọ̀kì kọ̀ọ̀kan pẹ̀lú láti pèsè ìrírí aláìní ìdíwọ́. Bí ojúlé tuntun rẹ bá dá lórí subscription, èyí yóò jẹ́ ojútùú àti àbájáde tó péye.

Ṣùgbọ́n, bí ìwà àti ète tí a pinnu fún multisite bá jẹ́ láti pèsè àwọn ojúlé nẹ́tíwọ́ọ̀kì tó yàtọ̀ pátápátá tí kò ní ìbáṣepọ̀ sí ara wọn, ó fẹrẹ̀ máa jẹ́ ọ̀ràn ní gbogbo ìgbà pé a nílò àwọn plugins òde tàbí àfikún láti yí àwọn ipa olumulo padà.

### Domain àti SSL

Ẹ jẹ́ ká sọ̀rọ̀ nípa fifi sori WordPress Multisite kan tó fẹrẹ̀ bọ́ lọ́wọ́ àkíyèsí wa - Wordpress.com. Èyí ni àpẹẹrẹ tó gbòòrò jù lọ fún Wordpress multisite, ó sì fi àwọn agbára rẹ̀ tó gbòòrò hàn láti jẹ́ kí a ṣe àdáṣe rẹ̀ kí a sì ṣe é ní mímu bá ìdí kan mu.

Ní àwọn ọjọ́ yìí lórí ìntánẹ́ẹ̀tì òde òní, lílo SSL fẹrẹ̀ jẹ́ dandan, àwọn alábòójútó nẹ́tíwọ́ọ̀kì ti àwọn WordPress multisites sì máa ń dojú kọ àwọn ìpenija wọ̀nyí láìpẹ́.

Nínú ìṣètò _subdomain_, a ń dá àwọn ojúlé sílẹ̀ dá lórí orúkọ domain gbòǹgbò. Nítorí náà, ojúlé kan tí a pè ní ‘site1’ yóò dá sílẹ̀ bí ‘site1.domain.com’. Nípa lílo wildcard SSL certificate, alábòójútó nẹ́tíwọ́ọ̀kì lè koju ìpenija yìí ní àṣeyọrí, kí ó sì pèsè àwọn agbára ìfi aṣírí SSL fún nẹ́tíwọ́ọ̀kì.

WordPress Multisite ní iṣẹ́ domain mapping kan tó jẹ́ kí àwọn ojúlé nẹ́tíwọ́ọ̀kì lè ní ìbáṣepọ̀ pẹ̀lú àwọn orúkọ domain àdáṣe tàbí àwọn orúkọ domain tó yàtọ̀ sí domain gbòǹgbò ti nẹ́tíwọ́ọ̀kì.

Fún àwọn alábòójútó nẹ́tíwọ́ọ̀kì, èyí ń mú ìpele ìdíjú àfikún wá, mejeeji nínú ìṣètò orúkọ domain àti nínú fífúnni àti ìtọju àwọn SSL certificates.

Ní ìwọ̀n yìí, bí WordPress Multisite ṣe pèsè ọ̀nà láti jẹ́ kí [www.anotherdomain.com](http://www.anotherdomain.com) lè jẹ́ mímápù sí ‘site1’, alábòójútó nẹ́tíwọ́ọ̀kì ni a fi sílẹ̀ pẹ̀lú ìpèníjà láti máa ṣàkóso àwọn ìgbàwọlé DNS àti ìmúlò àwọn ìwé-ẹ̀rí SSL láti òde.

## Ultimate Multisite

Pẹ̀lú òye àwọn ìyàtọ̀ láàárín fifi WordPress sori ẹrọ gẹ́gẹ́ bí ohun tó dá dúró fúnra rẹ̀ àti fifi Multisite sori ẹrọ, ẹ jẹ́ ká wo bí Ultimate Multisite ṣe jẹ́ ohun ìjà tó péye jù fún pípèsè Àwọn Wẹ́búsaìtì gẹ́gẹ́ bí Iṣẹ́.

### Ìfáàrà

Ultimate Multisite ni ọ̀bẹ Swiss Army rẹ nígbà tí ó bá kan ṣíṣe Wẹ́búsaìtì gẹ́gẹ́ bí Iṣẹ́ (WaaS). Ronú nípa Wix.com, Squarespace, WordPress.com, lẹ́yìn náà ronú nípa níní iṣẹ́ tirẹ.

Ní abẹ́lẹ̀, Ultimate Multisite ń lo WordPress Multisite ṣùgbọ́n ó ń ṣe bẹ́ẹ̀ ní ọ̀nà tí kì í ṣe pé ó kan yanjú ọ̀pọ̀lọpọ̀ ìpèníjà tí àwọn alábòójútó nẹ́tíwọ́ọ̀kì máa ń dojú kọ pẹ̀lú fifi multisite sori ẹrọ nìkan, ṣùgbọ́n ó tún ń mú agbára rẹ̀ pọ̀ sí i, kí oríṣiríṣi ìlò lè ní àtìlẹ́yìn.

Nínú àwọn apá tó tẹ̀lé, a óò wo díẹ̀ nínú àwọn ọ̀nà ìlò tó wọ́pọ̀ àti àwọn ohun tó yẹ kí a gbé yẹ̀ wò láti ṣe àtìlẹ́yìn fún àwọn ọ̀ràn wọ̀nyẹn.

### Àwọn Ọ̀nà Ìlò

#### Ọ̀ràn 1: Ilé-iṣẹ́ aṣojú

Ní ọ̀pọ̀ ìgbà, àwọn ọgbọ́n pàtàkì ti ilé-iṣẹ́ aṣojú wà nínú àpẹrẹ àwọn wẹ́búsaìtì, pẹ̀lú àwọn apá bíi ìgbéléwọ̀n wọn tàbí titaja tí a máa ń ṣe àkójọ rẹ̀ gẹ́gẹ́ bí àwọn iṣẹ́ àfikún.

Fún àwọn ilé-iṣẹ́ aṣojú, Ultimate Multisite ń fi ìpèsè iye tó lágbára hàn nínú agbára rẹ̀ láti gbàlejò àti ṣàkóso ọ̀pọ̀ wẹ́búsaìtì lórí pẹpẹ kan ṣoṣo. Ó tún lágbára jù bẹ́ẹ̀ lọ fún àwọn ilé-iṣẹ́ aṣojú tí wọ́n fi àwọn àpẹrẹ wọn lé àwọn akori kan pàtó bíi GeneratePress, Astra, OceanWP tàbí àwọn mìíràn, nítorí wọ́n lè lo agbára Ultimate Multisite láti mú àwọn akori wọ̀nyí ṣiṣẹ́ fún ojúlé tuntun kọ̀ọ̀kan ní aládàáṣe.

Bákan náà, pẹ̀lú ọ̀pọ̀lọpọ̀ ìdúnàádúrà fún ìdíyelé ilé-iṣẹ́ aṣojú sí àwọn àfikún tó wọ́pọ̀ àti tó gbajúmọ̀, lílo Ultimate Multisite jẹ́ kí àwọn ilé-iṣẹ́ aṣojú lè lo àwọn ìdókòwò tó ti wà tẹ́lẹ̀ nípa pípèsè pẹpẹ kan ṣoṣo láti inú èyí tí a ti lè fi àwọn àfikún sori ẹrọ, tọ́jú wọn, àti lò wọ́n.

Ó ṣeé ṣe kí lílo ìṣètò kan jẹ́ ohun tí a fẹ́, àti láyọ̀, Ultimate Multisite mú kí ó rọrùn gan-an láti jẹ́ kí ìmápù àwọn orúkọ agbègbè àti àwọn ìwé-ẹ̀rí SSL lè ṣeé ṣe pẹ̀lú àwọn ìṣepọ̀ rẹ̀ fún ọ̀pọ̀ àwọn olùpèsè ìgbéléwọ̀n tó gbajúmọ̀, àti pẹ̀lú àwọn iṣẹ́ bíi Cloudflare àti cPanel.

Nítorí náà, nípa lílo ọ̀kan nínú àwọn olùpèsè wọ̀nyí tàbí nípa fífi Ultimate Multisite sí ẹ̀yìn Cloudflare, àwọn apá bíi ìṣàkóso àwọn orúkọ agbègbè àti àwọn ìwé-ẹ̀rí SSL di ohun tó rọrùn díẹ̀.

Àwọn ilé-iṣẹ́ aṣojú tí ó fẹ́ láti pa ìṣàkóso tó muna mọ́ lórí dídá àwọn ojúlé yóò mọrírì bí ó ṣe rọrùn tó fún wọn láti dá àwọn ojúlé àti láti so àwọn ojúlé pọ̀ mọ́ àwọn oníbàárà àti àwọn ètò nípasẹ̀ ojú ìbáṣepọ̀ tó ṣànṣoṣo ti Ultimate Multisite.

![Ojú ìbáṣepọ̀ ìṣàkóso ojúlé Ultimate Multisite](/img/admin/sites-list.png)

Ìṣàkóso tó muna lórí àwọn àfikún àti àwọn akori ni a ń ṣetọju lórí ìpìlẹ̀-ọja-kọọkan nípasẹ̀ àwọn ojú ìbáṣepọ̀ tó rọrùn láti lóye ti Ultimate Multisite, tí ń jẹ́ kí àwọn àfikún àti àwọn akori lè wà fún lílo tàbí farasin, àti pẹ̀lú ipo ìmúṣiṣẹ́ wọn nígbà tí a bá dá a sílẹ̀ fún ojúlé tuntun.

![Ojú ìbáṣepọ̀ àwọn ìdíwọ̀n àfikún ọja](/img/config/product-plugins.png)

Àwọn akori ń pèsè iṣẹ́ tó jọra, tí ń jẹ́ kí àwọn akori kan pàtó lè jẹ́ mímú ṣiṣẹ́ tàbí kí wọ́n farasin nígbà dídá ojúlé.

![Ojú ìbáṣepọ̀ àwọn ìdíwọ̀n akori ọja](/img/config/product-themes.png)

Àwọn ilé-iṣẹ́ aṣojú yóò rí ìfarabalẹ̀ pẹ̀lú Ultimate Multisite tí ń jẹ́ kí wọ́n ṣe ohun tí wọ́n mọ̀ jù lọ - ṣíṣe àpẹrẹ àwọn wẹ́búsaìtì aláìlẹ́gbẹ́.

#### Ọ̀ràn 2: Olùpèsè fún àgbègbè ìmọ̀ pàtó

Òwe àtijọ́ kan wà tó sọ pé, “ṣe ohun kan, kí o sì ṣe é dáadáa”. Fún ọ̀pọ̀ àwọn amọ̀ja, èyí túmọ̀ sí dídá ọja tàbí iṣẹ́ kan yí ká èrò pàtàkì kan ṣoṣo.

Bóyá o jẹ́ eléré golf tó ní ìfẹ́ gidi tí ń ṣe ìpolówó wẹ́búsaìtì sí àwọn ẹgbẹ́ golf, tàbí o lè jẹ́ eléré esports tó ní ìfẹ́ gidi tí ń pèsè wẹ́búsaìtì fún àwọn clan. Ẹni kọ̀ọ̀kan tí ń ṣe ìpolówó iṣẹ́ ìfipamọ́ ààyè sí àwọn ilé onjẹ, bóyá?

Fún ọ̀pọ̀ ìdí, o máa fẹ́ pèsè àwọn iṣẹ́ tó dá lórí fireemuwọ́ọ̀kì àti pẹpẹ tó wọ́pọ̀. Ó lè jẹ́ pé o ti ṣe àpẹrẹ tàbí ti ṣe ìdókòwò sínú àwọn àfikún àdáni láti pèsè iṣẹ́ tó yẹ, tàbí ó lè jẹ́ pé àwọn ìṣe tó dára jù lọ nínú ilé-iṣẹ́ náà ń béèrè irú ọ̀nà àpẹrẹ tí a ti ṣe àfọwọ́kọ sí i.

Ọ̀kan nínú àwọn ànfààní tuntun ti Ultimate Multisite ni lílo àwọn ojúlé àdàkọ. Ojúlé àdàkọ jẹ́ ọ̀kan tí a ti fi akori sori ẹrọ tí a sì ti mú un ṣiṣẹ́, tí a ti fi àwọn àfikún tó yẹ sori ẹrọ tí a sì ti mú wọn ṣiṣẹ́, tí a sì ti dá àwọn àpẹẹrẹ ìfìwéránṣẹ́ tàbí ojúewé. Nígbà tí oníbàárà bá dá ojúlé tuntun tó dá lórí àdàkọ náà, àwọn àkóónú àti àwọn ìṣètò àdàkọ náà ni a máa ń dàkọ sí ojúlé tuntun tí a ṣẹ̀ṣẹ̀ dá.

Fún olùpèsè àwọn ojúlé àti iṣẹ́ fún àgbègbè ìmọ̀ pàtó, èyí ń pèsè ànfààní aláìlẹ́gbẹ́ nínú agbára láti dá ojúlé tó ti ṣetan lẹ́sẹ̀kẹsẹ̀ pẹ̀lú àwọn àfikún àdáni àti àpẹrẹ. Oníbàárà náà nílò láti pèsè ìwọlé tó kere jù lọ nìkan láti parí iṣẹ́ náà.

Da lori àwọn àìní, àwọn ìṣètò _subdirectory_ tàbí _subdomain_ lè bá a mu, níbi tí àwọn yíyàn faaji yóò wà láàárín ìwé-ẹ̀rí SSL tó rọrùn fún _subdirectories_ tàbí ìwé-ẹ̀rí SSL wildcard fún _subdomains_.

#### Ọ̀ràn 3: Ìgbéléwọ̀n Wẹẹbu WordPress

Ọ̀pọ̀lọpọ̀ ọ̀nà ló wà láti gbàlejò àwọn ojúlé WordPress, ṣùgbọ́n ó ṣọ̀wọ́n kí ó rọrùn bíi pípèsè ààyè wẹẹbu fún oníbàárà pẹ̀lú ẹ̀dà WordPress tí a ti fi sori ẹrọ tẹ́lẹ̀. Èyí jẹ́ nítorí pé ọ̀pọ̀ ìpinnu àti àwọn ohun tó yẹ kí a gbé yẹ̀ wò gbọ́dọ̀ wá papọ̀ láti pèsè iṣẹ́ tó ní ìtumọ̀.

Ultimate Multisite tayọ ní agbègbè yìí nípa pípèsè ojútùú turnkey tó péye fún ìgbéléwọ̀n àwọn ojúlé WordPress. Nínú ojútùú náà ni àwọn ọ̀nà pàtàkì láti pèsè àwọn iṣẹ́ ìforúkọsílẹ̀, gbígba owó sísan, àwọn fọ́ọ̀mù checkout, àwọn voucher ẹ̀dinwó, àti àwọn ìbánisọ̀rọ̀ oníbàárà.

Ọ̀pọ̀ nínú iṣẹ́ pàtàkì tí a nílò láti fi WordPress Multisite sori ẹrọ dáadáa, ṣètò rẹ̀, àti tọ́jú rẹ̀ ni Ultimate Multisite ń ràn wá lọ́wọ́ láti ṣe, dé ìwọ̀n pé àwọn alábòójútó nẹ́tíwọ́ọ̀kì nílò láti gbé àwọn apá kan yẹ̀ wò nìkan bí ó ṣe ní í ṣe pẹ̀lú iṣẹ́ tàbí àgbègbè ìmọ̀ pàtó wọn, bíi àwọn ìpele ọja, ìdíyelé, àti àwọn ìpèsè iṣẹ́.

Fún àwọn olùdàgbàsókè tí wọ́n fẹ́ ṣepọ̀ pẹ̀lú Ultimate Multisite, ojútùú náà tún ń pèsè RESTful API tó péye àti Webhooks fún ìfitónilétí ìṣẹ̀lẹ̀.

Láì gbẹ́kẹ̀ lé ọ̀pọ̀lọpọ̀ àwọn àfikún ita àti àwọn ìwé-aṣẹ, Ultimate Multisite ń pèsè ojútùú tó kún fún àwọn ẹ̀yà àti tó ṣeé fi wé ti Wix, Squarespace, WordPress.com àti àwọn míì.

### Àwọn Ìròyìn Nípa Àgbékalẹ̀

Bí ó tilẹ̀ jẹ́ pé kì í ṣe ìtọ́nisọ́nà tó péye, àwọn nǹkan wọ̀nyí yẹ kí ó jẹ́ ìtọ́nisọ́nà sí yíyan àwọn imọ̀-ẹrọ tó tọ́ láti ṣètìlẹ́yìn fún fifi Ultimate Multisite sílẹ̀.

#### Hosting Pipín vs. Hosting Tí A Yà Sọ́tọ̀

Ó ṣeni láàánú pé kì í ṣe gbogbo àwọn olùpèsè hosting ló dọ́gba, àwọn kan sì ń lo ìpọ̀pọ̀ server tó pọ̀ jù. Àwọn olùpèsè olówó-kékeré sábà máa ń rí owó wọlé nípa mímú ìpọ̀pọ̀ server pọ̀ sí i dé òpin. Nítorí náà, fifi Ultimate Multisite rẹ sílẹ̀ lè jẹ́ ọ̀kan ṣoṣo nínú ọgọ́rọ̀ọ̀rún àwọn ojúlé lórí server kan náà.

Láì sí àwọn ìdábobo tó yẹ láti ọ̀dọ̀ olùpèsè, àwọn ojúlé lórí server pipín máa ń ní ìṣòro ‘aládùúgbò aláriwo’. Ìyẹn ni pé, ojúlé kan lórí server kan náà ń jẹ àwọn ohun àmúlò tó pọ̀ tó bẹ́ẹ̀ tí àwọn ojúlé míì fi ní láti bá a dije fún àwọn ohun àmúlò tó kù. Ní ọ̀pọ̀ ìgbà, èyí máa ń hàn gẹ́gẹ́ bí àwọn ojúlé tó lọra tàbí tí kò dáhùn ní àkókò tó yẹ.

Gẹ́gẹ́ bí olùpèsè web hosting fúnra rẹ, àwọn ipa tó ń tẹ̀ lé e yóò túmọ̀ sí pé àwọn oníbàárà rẹ yóò ní ìrírí iyára búburú, ipo ojú-ewé tó kéré àti oṣuwọn fífi ojúlé sílẹ̀ tó ga, èyí tí ó sábà máa ń yọrí sí pipadanu oníbàárà bí wọ́n ṣe ń wá iṣẹ́ ní ibòmíràn.

Ní kúkúrú, olówó-pẹ̀lẹ́ kò túmọ̀ sí pé ó dára.

A mọ̀ pé Ultimate Multisite ń ṣiṣẹ́ pẹ̀lú ọ̀pọ̀ àwọn olùpèsè hosting rere, ó sì ń darapọ̀ dáadáa pẹ̀lú àyíká wọn láti pèsè àwọn iṣẹ́ bíi domain mapping àti SSL aládàáṣiṣẹ́. Àwọn olùpèsè wọ̀nyí mọyì iṣẹ́ tó yara, wọ́n sì ń pèsè iṣẹ́ tó ga ju hosting pipín lọ.

Fún àtòjọ àwọn olùpèsè tó bá mu àti àwọn ìtọ́nisọ́nà ìṣètò pipe fún ọkọọkan, jọ̀wọ́ ṣàyẹ̀wò ìwé ìtọ́nisọ́nà Àwọn Olùpèsè Tó Bá Mu.

#### Àwọn Ìròyìn Nípa Iṣẹ́-ṣiṣe

Ultimate Multisite kì í ṣe ohun elo tó lọra, dípò bẹ́ẹ̀, ó yara lọ́nà àgbàyanu. Síbẹ̀, ó máa ń ṣiṣẹ́ dáadáa tó bí ohun elo àti amáyédẹrùn tó wà ní ìsàlẹ̀ rẹ, ó sì lè lo ohun tí ó ní ààyè sí nìkan.

Rò ó báyìí: Ìwọ ni olùṣàkóso nẹ́tíwọ́ọ̀kì fún fifi Ultimate Multisite sílẹ̀ tó ní ojúlé 100. Díẹ̀ lára àwọn ojúlé wọ̀nyẹn ń ṣe dáadáa, wọ́n sì ń fa ọ̀pọ̀lọpọ̀ àlejò wẹ́ẹ̀bù lojoojúmọ́.

Ipò yìí yóò yàtọ̀ ní ìwọn kékeré bíi ojúlé kan sí márùn-ún, ṣùgbọ́n láìpẹ́ àwọn ìṣòro ìwọn-nlá yóò hàn gbangba.

Bí a bá fi sílẹ̀ láì tọ́jú, ojúlé Ultimate Multisite kan ṣoṣo yóò jẹ́ ẹni tó ní ojúṣe láti mú gbogbo àwọn ìbéèrè àwọn àlejò sí àwọn ojúlé ṣẹ. Àwọn ìbéèrè wọ̀nyí lè jẹ́ fún àwọn ojú-ewé PHP aláyípadà tàbí àwọn ohun-èlò tí kò yí padà bíi stylesheets, javascript tàbí àwọn fáìlì media. Yálà ojúlé kan tàbí ọgọ́rùn-ún, àwọn iṣẹ́ wọ̀nyí máa ń di ohun tó ń tún ara rẹ̀ ṣe, tó ń súni, tó sì ń fi ohun àmúlò ṣòfò. Kò ṣe dandan láti lo agbára CPU àti memory láti ṣiṣẹ́ fáìlì PHP kan nígbà tí abajade náà jẹ́ ìwífún aláìyípadà kan náà fún gbogbo ìbéèrè.

Bákan náà, ìbéèrè kan fún ojú-ewé PHP tàbí HTML máa ń dá ọ̀pọ̀ ìbéèrè tó tẹ̀ lé e sílẹ̀ fún scripts, stylesheets àti àwọn fáìlì àwòrán. Àwọn ìbéèrè wọ̀nyí ni a ń darí taara sí server Ultimate Multisite rẹ.

Ẹnikan lè yanju ìṣòro yìí rọrùn nípa fífi server sílẹ̀ sí ipele tó ga, ṣùgbọ́n kò tún ìṣòro kejì ṣe - àwọn ìdádúró àgbègbè. Àwọn server púpọ̀ ní àwọn ibi púpọ̀ nìkan ló lè bá ìṣòro yìí ṣiṣẹ́ dáadáa.

Nítorí ìdí yìí, ọ̀pọ̀ àwọn olùṣàkóso nẹ́tíwọ́ọ̀kì máa ń lo àwọn ojútùú caching iwájú àti àwọn nẹ́tíwọ́ọ̀kì pípín akoonu (CDN) láti mú àwọn ìbéèrè fún àwọn ojú-ewé aláìyípadà ṣẹ. Mímú àwọn ìbéèrè wọ̀nyí ṣẹ àti pípèsè àwọn ohun-èlò kí ìbéèrè tó dé server máa ń fi àwọn ohun àmúlò ìṣiṣẹ́ pamọ́, ó ń mú ìdádúró kúrò, ó ń yẹra fún fífi sí ipele tó ga tí kò pọn dandan, ó sì ń mú ìdókòwò imọ̀-ẹrọ pọ̀ sí i.

Ultimate Multisite ní àfikún Cloudflare tó fafa nínú rẹ, tó ń jẹ́ kí àwọn olùṣàkóso nẹ́tíwọ́ọ̀kì lè fi fifi sílẹ̀ wọn sí ẹ̀yìn Cloudflare, kí wọ́n sì lo kì í ṣe àwọn agbára caching rẹ nìkan ṣùgbọ́n DNS hosting, àwọn ìwé-ẹ̀rí SSL àti àwọn ìlànà ààbò pẹ̀lú.

#### Àwọn Afẹ́yinti

Ẹnikan lè béèrè ìmọ̀ràn lọ́wọ́ ènìyàn 50 nípa àwọn afẹ́yinti, kí ó sì gba èrò 50 tó yàtọ̀ nípa àwọn ọgbọ́n afẹ́yinti. Ìdáhùn ni pé, ó dá lórí ipò.

Ohun tí kò sí àríyànjiyàn nípa rẹ ni pé àwọn afẹ́yinti jẹ́ dandan àti pé ó fẹ́rẹ̀ẹ́ jẹ́ ohun tí kò ṣeé rò pé àwọn wọ̀nyí kò jẹ́ ohun tí olùpèsè ń ṣàkóso, pàápàá ẹni tó ń fúnni ní iṣẹ́ tí a ń ṣàkóso. Nítorí náà, àwọn oníbàárà yóò wo olùṣàkóso nẹ́tíwọ́ọ̀kì láti pèsè àti ṣàkóso iṣẹ́ yìí. Ẹni tí olùṣàkóso nẹ́tíwọ́ọ̀kì yóò wo jẹ́ ìṣòro míì pátápátá.

Fún ète apá yìí, ẹ jẹ́ kí a gba pé afẹ́yinti jẹ́ ẹ̀dà ipo eto ní àkókò kan nígbà tí a bẹ̀rẹ̀ afẹ́yinti náà. Ní ṣókí, ohunkóhun tí ipo eto bá jẹ́ nígbà afẹ́yinti ni a mú, tí a sì ti pa mọ́ sínú afẹ́yinti náà.

Pẹ̀lú òye yìí, ìdáhùn sí bí a ṣe lè ṣe àwọn afẹ́yinti àti ohun tí ó dára jù fún àyíká rẹ yóò dale gidigidi lórí àwọn àìní rẹ àti agbára olùpèsè hosting láti tẹ́ àwọn àìní wọ̀nyẹn lọ́rùn. Síbẹ̀, ní ìtòlẹ́sẹẹsẹ láti èyí tí ó ní èrò tó pọ̀ jù sí èyí tí ó ní èrò tó kéré jù, àwọn àṣàyàn tó wà ní ìsàlẹ̀ yẹ kí ó pèsè ìtọ́nisọ́nà díẹ̀.

#### Àwọn Snapshot

Àwọn Snapshot ni ojútùú àgbàyanu sí àwọn afẹ́yinti nítorí pé wọ́n rọrùn, wọn kò ní ìdíjú (títí ìwọ yóò fi fẹ́ mu padà) wọ́n sì ‘kan ń ṣiṣẹ́’. Ó nílò ìrànlọ́wọ́ díẹ̀ láti ọ̀dọ̀ olùpèsè rẹ ṣùgbọ́n, ó sì sábà máa ń kan ọ́ nìkan bí o bá ní VPS (Virtual Private Server) tàbí ohun tó jọra. Ọ̀pọ̀ àwọn olùpèsè tí a ṣe àtòjọ wọn nínú ìwé ìtọ́nisọ́nà ‘Àwọn Olùpèsè Tó Bá Mu’ wa ń pèsè àwọn afẹ́yinti tí kò nílò ìfarapa tàbí ìròyìn síwájú sí i láti ọ̀dọ̀ olùṣàkóso nẹ́tíwọ́ọ̀kì.

Níbi tí àwọn afẹ́yinti ìbílẹ̀ ti ń fojú kọ àwọn fáìlì àti databases, snapshot máa ń fojú kọ gbogbo disk. Èyí túmọ̀ sí pé kì í ṣe data ojúlé nìkan ni a mú sínú snapshot, ṣùgbọ́n operating system àti configuration pẹ̀lú. Fún ọ̀pọ̀ ènìyàn, èyí jẹ́ àǹfààní tó yàtọ̀, nítorí eto tuntun lè dá sílẹ̀ fẹrẹẹ́ lẹ́sẹ̀kẹsẹ̀ láti inú snapshot, kí a sì mú un wọ iṣẹ́ láti rọ́pò instance tó ń ṣàìlera. Bákan náà, ìlànà ìmúpadàbọ̀ láti gba àwọn fáìlì nìkan nílò fífi àwòrán snapshot mọ́ gẹ́gẹ́ bí disk sí instance tó wà tẹ́lẹ̀ kí àwọn fáìlì lè ṣeé wọlé sí, kí a sì daakọ wọn.

Àwọn Snapshot lè fa iye owó àfikún pẹ̀lú olùpèsè hosting, ṣùgbọ́n ó jẹ́ ìlànà ìdábò bo ara lòdì sí àwọn ìjàmbá.

#### Àwọn Scripts Ita

Ó dà bí ẹni pé kò sí àìní àwọn script àti ojútùú ita láti ṣe backup fún àwọn ohun-èlò WordPress àti MySQL, àwọn wọ̀nyí yóò sì ṣiṣẹ́ dáadáa fún Ultimate Multisite nítorí ó jẹ́ àfikún WordPress tí ń lo filesystem àti database WordPress. Nítorí náà, ojútùú kan tí ń ṣe backup àwọn site WordPress yóò bo àwọn àìní Ultimate Multisite dáadáa.

A kò lè ṣàbẹ̀wò script kan ju omíràn lọ, ṣùgbọ́n ìmọ̀ràn gbogbogbò wa ni pé kí ẹ ṣe ọ̀pọ̀ ìdánwò backup àti restore láti rí i dájú pé àwọn àbájáde náà ni ẹ fẹ́, àti láti ‘dájú pé ó dájú’ nípa ṣíṣe àyẹ̀wò script náà àti iṣẹ́ rẹ̀ nígbà gbogbo, pàápàá níbi tí a ti ń lo irú ọ̀nà differential backup kan.

Ó yẹ kí a ṣàkíyèsí pé àwọn script wọ̀nyí, nígbà tí wọ́n ń ṣiṣẹ́, yóò pọ̀ sí i ẹrù lórí system, èyí tí ó yẹ kí a fi sí ìṣirò.

#### Àwọn àfikún

Ó fẹ́rẹ̀ẹ́ má sí ìṣòro kankan nínú WordPress tí a kò lè fi àfikún yanju, àti bí ṣíṣàkóso àwọn script ita kò bá jẹ́ ohun tí ó dùn mọ́ ọ, bóyá àfikún ni aṣayan tó dára jù lọ lẹ́yìn náà.

Bí àwọn àfikún ṣe yàtọ̀ ní àwọn aṣayan àti àwọn ẹya ara iṣẹ́, púpọ̀ jù lọ wọn ń ṣe iṣẹ́ kan náà, ìyẹn ni láti dá ẹ̀dà kan ti àwọn faili WordPress àti àwọn àkóónú database ṣe. Lẹ́yìn náà, àwọn iṣẹ́ yàtọ̀ síra nítorí àwọn àfikún kan lè fi àwọn backup ránṣẹ́ sí àwọn iṣẹ́ ita bí Google Drive tàbí Dropbox, tàbí sí irú iṣẹ́ ìpamọ́ object tó bá a mu bí S3, Wasabi tàbí àwọn míì. Àwọn àfikún tó péye jù lọ ń pèsè differential backups tàbí irú ọ̀nà kan láti ṣe backup data tí a ti yí padà nìkan láti fi owó ìpamọ́ ita pamọ́.

Nígbà tí ẹ bá ń yan àfikún yín, ẹ ṣọ́ra láti jẹ́risi pé ó mọ multisite. Nítorí irú ìṣiṣẹ́ rẹ̀ nígbà tí backup ń lọ, ẹ lè retí ẹrù fún ìgbà díẹ̀ lórí server títí di ìgbà tí process náà bá parí.

#### Domain àti SSL

A ti jíròrò púpọ̀ tẹ́lẹ̀ nípa àwọn orúkọ domain nínú ipo _subdomain_ multisite. Ojútùú tó fẹ́rẹ̀ẹ́ jẹ́ ti gbogbo ayé fún àwọn alákóso network ni láti lo àwọn entry wildcard DNS.

![Àpẹẹrẹ ìṣètò entry wildcard DNS](/img/config/settings-domain-mapping.png)

Irú entry DNS yìí yóò ṣe resolve àwọn _subdomains_ bí ‘site1.domain.com’ àti ‘site2.domain.com’ sí IP address 1.2.3.4 ní aṣeyọrí, nípa bẹ́ẹ̀ yóò ṣe àtìlẹ́yìn fún Ultimate Multisite àti, ní ìtẹ̀síwájú tó tóbi jù, WordPress Multisite tí ń lo ipo _subdomain_.

Èyí lè ṣiṣẹ́ dáadáa pátápátá fún HTTP nítorí a ń ka host ibi-afẹ́ láti inú àwọn HTTP headers, ṣùgbọ́n ó ṣọ̀wọ́n kí web rọrùn báyìí ní àwọn ọjọ́ wọ̀nyí, níbi tí àwọn ìdúnàádúrà HTTPS tó ní ààbò ti fẹ́rẹ̀ẹ́ jẹ́ dandan.

Ní oríire, àwọn aṣayan tó rọrùn wà fún àwọn certificate SSL. Ní ipo _subdirectory_, a lè lo certificate domain àtàwọn ìlànà rẹ̀. Àwọn wọ̀nyí wà lọ́pọ̀, wọ́n sì sábà máa ń jẹ́ ọ̀fẹ́ láti ọ̀dọ̀ àwọn hosting providers tí ó lè lo iṣẹ́ LetsEncrypt ọ̀fẹ́ tàbí orísun míì. Bí bẹ́ẹ̀ kọ́, àwọn wọ̀nyí wà fún rírà láti ọ̀dọ̀ àwọn authorities bí ẹ bá lè dá certificate signing request.

Fún ipo _subdomain_, lílo certificate SSL wildcard yóò bá domain wildcard mu pátápátá, yóò sì jẹ́ kí certificate náà ní àṣẹ fún root domain àti gbogbo _subdomains_ láìsí ìṣètò àfikún tí kò yẹ.

Síbẹ̀, ó yẹ kí a ṣàkíyèsí pé àwọn certificate SSL wildcard lè má ṣiṣẹ́ pẹ̀lú àwọn iṣẹ́ bí Cloudflare àyàfi tí ẹ bá wà lórí plan enterprise tàbí kí ẹ ṣètò entry náà sí DNS nìkan, nígbà náà ni gbogbo caching àti optimization yóò jẹ́ bypassed.

Láìsí ìṣètò àfikún, Ultimate Multisite pèsè ojútùú sí ìṣòro yìí, tí ó ń fi ìrírí gbooro wa hàn pẹ̀lú àwọn àìní WordPress multisites. Ṣíṣe àfikún rọrùn yìí yóò jẹ́ kí Ultimate Multisite lo àwọn credentials Cloudflare yín láti fi àwọn entry DNS kún un fún àwọn site network ní Cloudflare laifọwọyi, kí ó sì ṣètò ipo wọn sí ‘proxied’. Ní ọ̀nà yìí, subsite network kọọkan, nígbà tí a bá dá a, yóò ní ààbò àti àǹfààní Cloudflare pátápátá, pẹ̀lú SSL.

Gẹ́gẹ́ bí irú àti ète fifi Ultimate Multisite yín sori ṣe rí, ó lè ṣeé ṣe kí àwọn oníbàárà nílò láti lo àwọn domain tiwọn. Ní ọ̀ràn yìí, alákóso network ni a fi ojúṣe yíyanjú ìṣòro méjì lé lọ́wọ́. Èkíní, hosting orúkọ domain, àti èkejì, àwọn certificate SSL fún domain náà.

Fún ọ̀pọ̀ ènìyàn, lílo Cloudflare jẹ́ aṣayan tó rọrùn. Oníbàárà nílò nìkan láti fi domain wọn sí Cloudflare, tọ́ka CNAME kan sí root domain Ultimate Multisite, kí wọ́n sì map domain wọn nínú Ultimate Multisite láti bẹ̀rẹ̀ sí í lo àǹfààní orúkọ domain àdáni wọn.

Ní òde èyí, a ní láti wá àwọn ojútùú míì, èyí ni ìdí tí Ultimate Multisite fi ń ṣàbẹ̀wò àkójọ Compatible Providers. Èyí jẹ́ nítorí process ṣíṣètò DNS àti SSL lè jẹ́ process tí kì í ṣe rọrùn. Síbẹ̀, pẹ̀lú integration Ultimate Multisite pẹ̀lú àwọn providers wọ̀nyí, a ti yọ apá púpọ̀ nínú ìdíjú náà kúrò, a sì ti ṣe procedure náà laifọwọyi.

#### Àwọn àfikún

Ó ṣeé ṣe gan-an pé ẹ yóò nílò àwọn àfikún míì láti pèsè iṣẹ́ fún àwọn oníbàárà yín tàbí àwọn site network. Ṣé gbogbo àfikún ń ṣiṣẹ́ pẹ̀lú WordPress Multisite àti Ultimate Multisite? Ó dá lórí rẹ̀.

Bí ó tilẹ̀ jẹ́ pé a lè fi ọ̀pọ̀ àwọn àfikún sori WordPress Multisite, activation àti licensing wọn yàtọ̀ láti ọ̀dọ̀ author kan sí omíràn.

Ìpenija náà wà nínú bí a ṣe ń lo licensing, nítorí àwọn àfikún kan nílò licensing lórí ìpìlẹ̀ domain kọọkan. Èyí yóò túmọ̀ sí pé fún àwọn àfikún kan, alákóso network nílò láti activate license fún àfikún kọọkan lórí site tuntun kọọkan ní ọwọ́.

Nítorí náà, ó lè dára jù lọ láti ṣàyẹ̀wò pẹ̀lú author àfikún náà nípa bí àfikún wọn yóò ṣe ṣiṣẹ́ pẹ̀lú WordPress Multisite àti eyikeyi àwọn àìní pàtàkì tàbí àwọn procedure tí a nílò láti license rẹ̀.
