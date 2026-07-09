---
title: Kí ni WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Kí ni WordPress Multisite?

Nínú ìpìlẹ̀ rẹ̀, WordPress ń pèsè ẹ̀yà kan tí a ń pè ní ‘Multisite’ tí ìpilẹ̀ṣẹ̀ rẹ̀ padà sí ọdún 2010 nígbà ìfilọ́lẹ̀ WordPress 3.0. Láti ìgbà náà, ó ti gba ọ̀pọ̀ àtúnṣe tí a ṣe láti ṣàfikún àwọn ẹ̀yà tuntun àti láti mú ààbò lágbára.

Ní pàtàkì, a lè ronú nípa WordPress multisite báyìí: Yunifásítì kan ń ṣètọju ìfisín kan ṣoṣo ti WordPress ṣùgbọ́n ẹ̀ka ẹ̀kọ́ kọ̀ọ̀kan ń ṣètọju aaye WordPress tirẹ̀.

##

## Kí Gan-an ni WordPress Multisite?

Multisite jẹ́ ẹ̀yà kan ti WordPress tí ó jẹ́ kí àwọn aaye púpọ̀ lè pín ìfisín WordPress kan ṣoṣo. Nígbà tí a bá mú multisite ṣiṣẹ́, aaye WordPress ìbẹ̀rẹ̀ ni a yí padà láti ṣe àtìlẹ́yìn ohun tí a sábà máa ń pè ní **nẹ́tíwọ́ọ̀kì àwọn aaye**.

Nẹ́tíwọ́ọ̀kì yìí ń pín eto fáìlì (èyí túmọ̀ sí pé **plugins àti themes tún jẹ́ pínpín**), database, àwọn fáìlì ìpìlẹ̀ WordPress, wp-config.php, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.

Èyí túmọ̀ sí pé àwọn àfikúnṣe WordPress, theme, àti plugin ní láti ṣe lẹ́ẹ̀kan ṣoṣo fún gbogbo àwọn aaye nẹ́tíwọ́ọ̀kì rẹ nítorí wọ́n ń pín àwọn fáìlì kan náà lórí filesystem.

Òtítọ́ yìí jẹ́ ọ̀kan lára ​​àwọn àǹfààní pàtàkì ti multisite, nítorí ó jẹ́ kí o lè mú iye àwọn aaye tí o ń ṣàkóso pọ̀ sí i nígbà tí iye iṣẹ́ tí o ní láti ṣe láti ṣètọju àwọn aaye àwọn oníbàárà rẹ yóò dúró bákan náà.

##

## Subdomain tàbí Subdirectory?

Ọ̀nà méjì ló wà fún ṣíṣiṣẹ́ WordPress multisite – o sì ní láti yan ọ̀kan nígbà tí o bá ń yí ìfisín WordPress rẹ deede padà sí ìfisín multisite:

**Subdomain:** àp.: [site.domain.com](http://site.domain.com)

…tàbí

**Subdirectory:** àp.: [yourdomain.com/site](http://yourdomain.com/site)

Ọ̀nà kọ̀ọ̀kan ní àǹfààní àti àìlera tí o ní láti gbé yẹ̀ wò nígbà tí o bá ń ṣe ìpinnu yìí.

Ohun kan ṣe pàtàkì láti ṣàkíyèsí, síbẹ̀: lẹ́yìn tí o bá ti ṣe ìpinnu rẹ, yíyí nẹ́tíwọ́ọ̀kì rẹ padà láti subdirectory sí subdomain tàbí ní òdìkejì jẹ́ ohun tí ó nira gan-an – pàápàá jùlọ bí o bá ti ní díẹ̀ lára ​​àwọn aaye tí a ti dá sílẹ̀.

Ṣáájú kí o tó ṣe ìpinnu yẹn, àwọn kókó díẹ̀ nìyí láti fi sọ́kàn:

**Ọ̀nà Subdirectory** ni ọ̀nà tí ó rọrùn jù lọ ní ti ìṣètò àti ìtọju. Èyí ń ṣẹlẹ̀ nítorí pé gbogbo àwọn aaye jẹ́ paths tí a so mọ́ domain àkọ́kọ́ (fún àpẹẹrẹ [yourdomain.com/subsite](http://yourdomain.com/subsite)). Nítorí náà, o nílò **SSL certificate kan ṣoṣo** fún domain àkọ́kọ́, èyí yóò sì bo gbogbo nẹ́tíwọ́ọ̀kì náà.

Nígbà kan náà, nítorí ìgbékalẹ̀ URL rẹ, Google àti púpọ̀ àwọn search engines míì yóò ka gbogbo subsites lórí nẹ́tíwọ́ọ̀kì rẹ tó dá lórí subdirectory sí aaye ńlá kan ṣoṣo. Nítorí náà, àkóónú tí àwọn oníbàárà ìparí rẹ bá ṣàfikún sí subsites lè ní ipa lórí iṣẹ́ SEO ti landing site rẹ, fún àpẹẹrẹ. Ipele ipa náà jẹ́ ohun tí a lè jiyàn lé lórí, ó sì tún ṣeé ṣe láti sọ pé níní ìṣètò bẹ́ẹ̀ lè paapaa wúlò fún iṣẹ́ SEO.

**Ọ̀nà Subdomain** jẹ́ díẹ̀ díjú sí i láti ṣètò, ṣùgbọ́n ìgbékalẹ̀ URL rẹ (fún àpẹẹrẹ [subsite.yournetwork.com](http://subsite.yournetwork.com)) ni a sábà máa ń rí bí ohun tí ó dà bí “amọ̀ja sí i”.

Ọ̀kan lára ​​àwọn ìṣòro pàtàkì nínú ṣíṣètò ọ̀nà subdomain ni ìbò SSL (HTTPS) fún gbogbo nẹ́tíwọ́ọ̀kì náà. Ó wá sí òtítọ́ pé browsers máa ń ka subdomains sí àwọn nkan tí ó yà sọ́tọ̀. Nítorí náà, o máa nílò SSL certificate ọ̀tọ̀ fún subdomain kọ̀ọ̀kan lórí nẹ́tíwọ́ọ̀kì rẹ, tàbí irú certificate pàtàkì kan tí a ń pè ní **Wildcard SSL certificate**. Ní àwọn ọdún àìpẹ́ yìí, àwọn hosting providers àti panels ń mú iṣẹ́ wọn ga sí i ní ti pípèsè SSL, àwọn kan sì ń fúnni ní wildcard certificates ní títẹ bọ́tìnì kan, tí ó ń dín ààlà tó wà láàárín ọ̀nà méjèèjì kù ní ti ìdíjú nínú fífi í ṣètò.

Ní ìdákẹ́jẹ sí ọ̀nà subdirectory, search engines máa ń ka subsites lórí nẹ́tíwọ́ọ̀kì tó dá lórí subdomain sí websites ọ̀tọ̀ọ̀tọ̀, èyí túmọ̀ sí pé àkóónú tó wà lórí subsite kan kò ní dá iṣẹ́ SEO ti àwọn subsites míì rú rárá.

## Super Admin

Àwọn ìfisín WordPress aaye-kan jẹ́ kí o lè ṣàfikún iye àwọn aṣàmúlò tí kò ní ìwọ̀n, kí o sì fún àwọn aṣàmúlò wọ̀nyẹn ní user roles ọ̀tọ̀ọ̀tọ̀ pẹ̀lú permissions ọ̀tọ̀ọ̀tọ̀.

Nínú WordPress Multisite, irú aṣàmúlò tuntun kan ni a ṣí sílẹ̀: **super admin** – àti admin panel tuntun kan ni a ṣí sílẹ̀: **network admin panel**.

Gẹ́gẹ́ bí orúkọ ṣe fi hàn, super admin ní agbára ńlá lórí nẹ́tíwọ́ọ̀kì náà, ó lè ṣàkóso gbogbo subsites rẹ, plugins, themes, ohun gbogbo!

Nígbà tí o bá yí ìfisín WordPress aaye-kan rẹ padà sí multisite, admin ìbẹ̀rẹ̀ ti aaye kan náà yóò ni a gbé ga laifọwọyi sí super admin.

Plugins àti themes lè jẹ́ fífisín tàbí yíyọ kúrò láti network admin panel nikan nípasẹ̀ super admins. Àwọn admin subsite lè wá yan láti mú plugins tàbí themes wọ̀nyẹn ṣiṣẹ́ tàbí pa wọ́n, àyàfi bí super admin bá mú plugin kan ṣiṣẹ́ fún gbogbo nẹ́tíwọ́ọ̀kì, èyí tí ó fi ipa mú un láti máa ṣiṣẹ́ fún gbogbo subsites ní gbogbo ìgbà.

_Àkíyèsí: bí o ṣe lè rí, pípe ẹnikan sí nẹ́tíwọ́ọ̀kì rẹ àti fífún wọn ní ipo super admin ń fún aṣàmúlò yìí ní ìṣàkóso pípé lórí nẹ́tíwọ́ọ̀kì rẹ. Gẹ́gẹ́ bí àpẹẹrẹ, àwọn super admins míì lè paapaa yọ ipo super admin rẹ kúrò, tí yóò pa ọ mọ́ta kúrò nínú network admin panel tirẹ. Láti jẹ́ kí àwọn oníbàárà Ultimate Multisite ní ìṣàkóso pẹ̀lú àlàyé lórí ohun tí àwọn super admins àfikún lè ṣe, a ní add-on kan tí a ń pè ní Support Agents. Add-on yìí jẹ́ kí o dá irú aṣàmúlò míì sílẹ̀ – agent – pẹ̀lú permissions tí wọ́n lè nílò nikan láti ṣe àwọn iṣẹ́ wọn lórí nẹ́tíwọ́ọ̀kì náà._

## Ohun tí a pín láàárín subsites àti ohun tí a kò pín

Gẹ́gẹ́ bí a ti sọ tẹ́lẹ̀, ọ̀kan lára ​​àwọn àǹfààní pàtàkì ti WordPress multisite ni pé gbogbo subsites ń pín àwọn iṣètò kan náà, àwọn fáìlì ìpìlẹ̀, themes, plugins, àwọn fáìlì ìpìlẹ̀ WordPress, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.

Síbẹ̀síbẹ̀, àwọn eroja kan wà tí a dáàbò bo dáadáa lórí ìpìlẹ̀ subsite-kọ̀ọ̀kan.

\- Fún àpẹẹrẹ, subsite kọ̀ọ̀kan máa ń gba folda uploads tirẹ. Nítorí náà, uploads tí àwọn aṣàmúlò ti subsite kan pàtó ṣe kò lè jẹ́ wíwọlé lórí subsite míì.

\- Subsite kọ̀ọ̀kan ní admin panel tirẹ tí a yà sọ́tọ̀, ó sì lè mú plugins tàbí themes ṣiṣẹ́ tàbí pa wọ́n, àyàfi bí super admin bá ti mú wọn ṣiṣẹ́ fún nẹ́tíwọ́ọ̀kì.

\- Ọ̀pọ̀ àwọn tábìlì database ni a dá fún ojúlé abẹ́ kọ̀ọ̀kan, ìyẹn túmọ̀ sí pé àwọn posts, comments, ojúewé, ètò, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ ni a yà sọ́tọ̀ fún ojúlé abẹ́ kọ̀ọ̀kan.

## Ìṣàkóso aṣàmúlò lórí WordPress Multisite

Ọ̀kan lára àwọn kókó ẹlẹ́gẹ́ lórí WordPress multisite ni ìṣàkóso aṣàmúlò. Tábìlì aṣàmúlò WordPress jẹ́ ọ̀kan lára díẹ̀ tí gbogbo àwọn ojúlé abẹ́ ń pín pa pọ̀.

Ètò yìí lè dá àwọn ìṣòro kan sílẹ̀, ó dá lórí ohun tí o ń gbero láti kọ́ pẹ̀lú nẹ́tíwọ́ọ̀kì rẹ. Àpẹẹrẹ tó wà nísàlẹ̀ ràn wá lọ́wọ́ láti ṣàlàyé èyí tó ṣe pàtàkì jù.

Foju inú wo ìṣẹ̀lẹ̀ yìí:

O dá nẹ́tíwọ́ọ̀kì WordPress multisite kan, o sì bẹ̀rẹ̀ sí í fún àwọn ènìyàn tí wọ́n fẹ́ ní ilé ìtajà e-commerce ní àwọn ojúlé abẹ́ fún owó oṣooṣù.

O rí oníbàárà àkọ́kọ́ tó sanwó – John. O dá ojúlé kan fún John lórí nẹ́tíwọ́ọ̀kì rẹ, o fi gbogbo àwọn àfikún tó yẹ sí i, lẹ́yìn náà o dá aṣàmúlò kan fún John kí ó lè ṣàkóso ilé ìtajà rẹ.

Lẹ́yìn náà oníbàárà kejì dé – Alice. O ṣe ohun kan náà fún un, ó sì tún ní ilé ìtajà lórí nẹ́tíwọ́ọ̀kì rẹ báyìí.

John àti Alice jẹ́ oníbàárà rẹ méjèèjì, ṣùgbọ́n wọn kò mọ ara wọn. Ohun tó ṣe pàtàkì jù ni pé, bí ọ̀kan nínú wọn bá bẹ ojúlé ilé ìtajà ẹni kejì wò, kò sí ọ̀nà láti mọ̀ pé ilé ìtajà yìí wà lórí nẹ́tíwọ́ọ̀kì ojúlé kan náà.

Ní ọjọ́ kan, John nílò láti ra bàtà tuntun méjì, ó sì rí èyí tó péye nínú ilé ìtajà Alice. Nígbà tó gbìyànjú láti parí rírà náà, ó gba ìfiránṣẹ́ àṣìṣe “email ti wà ní lílò tẹlẹ̀”, èyí sì ṣàjèjì nítorí John dájú 100% pé ìgbà àkọ́kọ́ nìyí tí ó ti bẹ ojúlé Alice wò rí.

Ohun tó ṣẹlẹ̀ níbí ni pé a pín aṣàmúlò John káàkiri gbogbo nẹ́tíwọ́ọ̀kì náà, nítorí náà nígbà tó gbìyànjú láti dá Account kan láti parí rírà lórí ojúlé Alice, WordPress yóò rí i pé aṣàmúlò kan pẹ̀lú àdírẹ́sì email kan náà ti wà tẹ́lẹ̀, yóò sì ju àṣìṣe kan jáde.

_Àkíyèsí: A mọ̀ bí èyí ṣe lè burú tó, ó dá lórí ìlò rẹ, nítorí náà Ultimate Multisite ní àṣàyàn kan tó ń yàgò fún àwọn ìṣàyẹ̀wò déédéé fún aṣàmúlò tó ti wà, tó sì ń jẹ́ kí a lè dá ọ̀pọ̀ Account sílẹ̀ nípa lílo àdírẹ́sì email kan náà. Account kọ̀ọ̀kan ni a so mọ́ ojúlé abẹ́ kan, nítorí náà ewu ìkọlù ara wọn ni a pa mọ́ sí kékeré jù. Nínú àpẹẹrẹ lókè, John kì yóò gba ìfiránṣẹ́ àṣìṣe, yóò sì lè ra àwọn bàtà wọ̀nyẹn láìsí ìṣòro. Àṣàyàn yìí ni a ń pè ní Enable Multiple Accounts, a sì lè muu ṣiṣẹ́ lórí Ultimate Multisite → Ètò → Ìwọlé & Ìforúkọsílẹ̀._

Bí ó tilẹ̀ jẹ́ pé a pín tábìlì aṣàmúlò, àwọn alábòójútó ojúlé abẹ́ tàbí alábòójútó gíga lè ṣàfikún àwọn aṣàmúlò sí ojúlé abẹ́, kí wọ́n sì yọ wọ́n kúrò níbẹ̀, wọ́n sì tún lè ní ipa aṣàmúlò tó yàtọ̀ lórí àwọn ojúlé abẹ́ tó yàtọ̀.

## Àwọn ohun ìrònú nípa iṣẹ́-ṣiṣe

WordPress multisite lágbára gan-an nígbà tó bá kan iye àwọn ojúlé tí ó lè gbà. Èyí lè jẹ́ fífi hàn nípa pé [WordPress.com](https://WordPress.com), Edublogs, àti Campuspress jẹ́ iṣẹ́ tó dá lórí multisite, ọkọọkan wọn sì ń gbalejo ẹgbẹẹgbẹ̀rún ojúlé.

Bí ó tilẹ̀ jẹ́ pé ní ìmọ̀ràn kò sí iye tó pọ̀ jù fún àwọn ojúlé tí o lè gbalejo lórí ìfíṣípò WordPress multisite kan ṣoṣo, ní ìṣe iye àwọn ojúlé tí o lè ṣiṣẹ́ dáadáa lè yàtọ̀ gidigidi, ó dá lórí ọ̀pọ̀ àwọn nǹkan tó yàtọ̀: bí àwọn ojúlé ṣe ń yípadà tó, àwọn àfikún wo ni ó wà fún àwọn ojúlé abẹ́, abbl.

Gẹ́gẹ́ bí ìlànà ọwọ́, bí nẹ́tíwọ́ọ̀kì rẹ bá ṣe rọrùn sí i, bẹ́ẹ̀ ni yóò ṣe dára sí i. Fífi ààyò fún àwọn ojúlé tí àkóónú wọn kì í ṣe ohun tó ń yípadà gan-an (èyí tó mú kí wọ́n jẹ́ olùdíje tó dára fún àwọn ọgbọ́n caching tó lágbára) àti pípa àkójọpọ̀ àfikún mọ́ kéré bí ó ti lè ṣeé ṣe tó (bí iye àwọn àfikún tó ń ṣiṣẹ́ bá ṣe kéré sí i, bẹ́ẹ̀ ni yóò ṣe dára sí i) lè pọ̀n iye àwọn ojúlé abẹ́ tí o lè gbalejo sí i gidigidi.

Apá tó dára jù ni pé, níwọ̀n bí gbogbo rẹ̀ ṣe jẹ́ WordPress níbí, àwọn irinṣẹ́ kan náà tí o ti mọ̀ tí o sì fẹ́ràn fún ìmúgbòòrò iṣẹ́-ṣiṣe yóò tún ṣiṣẹ́ fún nẹ́tíwọ́ọ̀kì multisite.

Ìdènà pàtàkì fún multisite ni database, ṣùgbọ́n bí gbogbo ohun mìíràn bá ti ṣètò dáadáa, ó lè gba ẹgbẹẹgbẹ̀rún méjì kan ojúlé kí o tó nílò láti bẹ̀rẹ̀ sí í ṣàníyàn nípa rẹ. Paápàá nígbà yẹn, àwọn ojútùú wà tí a lè fi kún un díẹ̀díẹ̀ ní àkókò yẹn (bí àwọn ojútùú pípín database sí apá, fún àpẹẹrẹ).
