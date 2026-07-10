---
title: Bí a ṣe le Ṣètò Domain Mapping
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Bí a ṣe lè Ṣètò Domain Mapping (v2) {#how-to-configure-domain-mapping-v2}

_**ÀKÍYÈSÍ PÀTÀKÌ: Àpilẹ̀kọ yìí tọ́ka sí Ultimate Multisite ẹ̀dà 2.x.**_

Ọ̀kan lára àwọn ànfààní tó lágbára jùlọ ti nẹ́tíwọ́ọ̀kì premium ni agbára láti fún àwọn oníbàárà wa ní àǹfààní láti so domain ipele-òkè mọ́ àwọn site wọn. Ní tòótọ́, èwo ló dà bíi ti amọ̀ṣẹ́dunjú jù: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) tàbí [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ìdí nìyẹn tí Ultimate Multisite fi ń pèsè ànfààní yẹn sínú rẹ̀, láì nílò láti lo àwọn plugin ẹni-kẹta.

## Kí ni domain mapping? {#whats-domain-mapping}

Gẹ́gẹ́ bí orúkọ ṣe sọ, domain mapping ni agbára tí Ultimate Multisite ń pèsè láti gba ìbéèrè fún domain àdáni kan, kí ó sì so ìbéèrè yẹn mọ́ site tó bá yẹ nínú nẹ́tíwọ́ọ̀kì tí domain pàtó yẹn so mọ́.

### Bí a ṣe lè ṣètò domain mapping lórí Ultimate Multisite Network rẹ {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping nílò díẹ̀ ṣíṣe ètò ní apá rẹ kí ó lè ṣiṣẹ́. A dúpẹ́ pé, Ultimate Multisite ń ṣe iṣẹ́ líle náà fún ọ ní aládàáṣiṣẹ́ kí o lè rọrùn láti pàdé àwọn ohun tí a nílò.

Nígbà fifi Ultimate Multisite sílẹ̀, wizard yóò daakọ àti fi **sunrise.php** sí folder tí a yàn ní aládàáṣiṣẹ́. **Wizard náà kò ní jẹ́ kí o tẹ̀síwájú títí ìgbésẹ̀ yìí yóò fi parí**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Èyí túmọ̀ sí pé lẹ́yìn tí wizard fifi Ultimate Multisite sílẹ̀ bá ti parí ṣíṣe ètò nẹ́tíwọ́ọ̀kì rẹ, o lè bẹ̀rẹ̀ sí í ṣe mapping domain àdáni náà lẹ́sẹ̀kẹsẹ̀.

Ṣàkíyèsí pé domain mapping nínú Ultimate Multisite kì í ṣe dandan. O ní àṣàyàn láti lo iṣẹ́ domain mapping abinibi WordPress Multisite tàbí ojútùú domain mapping míì.

Tí o bá nílò láti pa Ultimate Multisite domain mapping kí o lè fún àwọn ojútùú domain mapping míì láàyè, o lè pa ànfààní yìí lábẹ́ **Ultimate Multisite > Settings > Domain Mapping**.

![Ojúewé ètò Domain Mapping tó ń fi admin redirect, ìfiranṣẹ́ mapping àti àwọn àṣàyàn DNS hàn](/img/config/domain-mapping-settings.png)

Ní ìsàlẹ̀ àṣàyàn yìí gan-an, o tún lè rí àṣàyàn **Force Admin Redirect**. Àṣàyàn yìí jẹ́ kí o ṣàkóso bóyá àwọn oníbàárà rẹ yóò lè wọlé sí admin dashboard wọn lórí domain àdáni wọn àti subdomain wọn mejeeji tàbí lórí ọ̀kan ṣoṣo nínú wọn.

Tí o bá yan **Force redirect to mapped domain** , àwọn oníbàárà rẹ yóò lè wọlé sí admin dashboard wọn lórí àwọn domain àdáni wọn nìkan.

Àṣàyàn **Force redirect to** **network domain** yóò ṣe ìdákẹ́jẹ̀ẹ́ idakeji rẹ̀ gan-an - a óò jẹ́ kí àwọn oníbàárà rẹ wọlé sí àwọn dashboard wọn lórí subdomain wọn nìkan, kódà bí wọ́n bá ń gbìyànjú láti wọlé lórí àwọn domain àdáni wọn.

Àti pé àṣàyàn **Allow access to the admin by both mapped domain domain and network domain** jẹ́ kí wọ́n wọlé sí àwọn admin dashboard wọn lórí subdomain àti domain àdáni mejeeji.

![Dropdown Admin Redirect tí a ṣí sílẹ̀ tó ń fi àwọn àṣàyàn redirect mẹ́ta hàn](/img/config/domain-mapping-redirect-options.png)

Ọ̀nà méjì ló wà láti ṣe mapping domain àdáni kan. Èkínní ni nípa ṣíṣe mapping orúkọ domain láti network admin dashboard rẹ gẹ́gẹ́ bí super admin, èkejì sì ni nípasẹ̀ subsite admin dashboard lábẹ́ ojúewé account.

Ṣùgbọ́n kí o tó bẹ̀rẹ̀ sí í ṣe mapping domain àdáni náà sí ọ̀kan lára àwọn subsite nínú nẹ́tíwọ́ọ̀kì rẹ, o ní láti rí i dájú pé **DNS settings** ti orúkọ domain náà ti jẹ́ ṣíṣètò dáadáa.

###

### Rí i dájú pé àwọn ètò DNS domain ti jẹ́ ṣíṣètò dáadáa {#making-sure-the-domain-dns-settings-are-properly-configured}

Kí mapping lè ṣiṣẹ́, o ní láti rí i dájú pé domain tí o ń gbero láti ṣe mapping rẹ ń tọ́ka sí IP address ti Network rẹ. Ṣàkíyèsí pé o nílò IP address ti Network - IP address ti domain níbi tí Ultimate Multisite ti fi sílẹ̀ - kì í ṣe IP address ti domain àdáni tí o fẹ́ ṣe mapping. Láti wá IP address ti domain pàtó kan, a dábàá lílọ sí [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), fún àpẹẹrẹ.

Láti ṣe mapping domain náà dáadáa, o nílò láti ṣàfikún **A RECORD** kan lórí ìṣètò **DNS** rẹ tó ń tọ́ka sí **IP address** yẹn. Ìṣàkóso DNS yàtọ̀ gidigidi láàárín àwọn domain registrar ọ̀tọ̀ọ̀tọ̀, ṣùgbọ́n ọ̀pọ̀lọpọ̀ ìkọ́ni wà lórí ayélujára tó ṣàlàyé ìyẹn tí o bá wá " _Creating A Record on XXXX_ " níbi tí XXXX jẹ́ domain registrar rẹ (àp.: " _Creating A Record on_ _GoDaddy_ ").

Tí o bá rí i pé ó ṣòro fún ọ láti jẹ́ kí èyí ṣiṣẹ́, **kàn sí support domain registrar rẹ** wọ́n á sì lè ràn ọ́ lọ́wọ́ pẹ̀lú apá yìí.

Tí o bá gbero láti jẹ́ kí àwọn oníbàárà rẹ ṣe mapping àwọn domain tiwọn fúnra wọn, wọ́n yóò ní láti ṣe iṣẹ́ náà lórí apá yìí fúnra wọn. Tọ́ wọn sí ètò support registrar wọn tí wọ́n bá rí i pé wọn kò lè dá A Record.

### Ṣíṣe mapping orúkọ domain àdáni gẹ́gẹ́ bí Super Admin {#mapping-custom-domain-name-as-super-admin}

Nígbà tí o bá wọlé gẹ́gẹ́ bí super admin lórí nẹ́tíwọ́ọ̀kì rẹ, o lè rọrùn láti ṣàfikún àti ṣàkóso àwọn orúkọ domain àdáni nípa lílọ sí **Ultimate Multisite > Domains**.

![Ojúewé àtòjọ Domains nínú Ultimate Multisite](/img/admin/domains-list.png)

Lábẹ́ ojúewé yìí, o lè tẹ bọ́tìnì **Add Domain** lókè, èyí yóò sì mú window modal kan wá níbi tí o ti lè ṣètò àti fọwọ́sí **orúkọ domain àdáni** , **subsite náà** tí o fẹ́ fi orúkọ domain àdáni náà sí, àti pinnu bóyá o fẹ́ ṣètò rẹ̀ gẹ́gẹ́ bí orúkọ **primary domain** tàbí rara (ṣàkíyèsí pé o lè ṣe mapping **ọ̀pọ̀ orúkọ domain sí subsite kan**).

![Modal Add Domain pẹ̀lú orúkọ domain, site picker àti toggle primary domain](/img/admin/domain-add-modal.png)

Lẹ́yìn fífi gbogbo ìwífún náà sílẹ̀, o lè tẹ bọ́tìnì **Add Existing Domain** ní ìsàlẹ̀.

Èyí yóò bẹ̀rẹ̀ ìlànà ìmúdájú àti gbígba ìwífún DNS ti domain àdáni náà. O tún máa rí log kan ní ìsàlẹ̀ ojúewé náà fún ọ láti tọ́pa ìlànà tí ó ń kọjá. Ìlànà yìí lè gba ìṣẹ́jú díẹ̀ kí ó tó parí.

Ultimate Multisite v2.13.0 tún ń dá igbasilẹ orúkọ domain inú ṣẹ laifọwọyi nígbà tí a bá dá aaye tuntun sílẹ̀ lórí host tí ó yẹ kí a ka sí domain fún-aaye-kọọkan. Bí host náà bá jẹ́ domain àkọ́kọ́ ti nẹ́tíwọ́ọ̀kì, tàbí ọ̀kan nínú àwọn domain ìpilẹ̀ fọ́ọ̀mù checkout tí a pín tí a ti ṣètò lórí pápá **URL Aaye**, igbasilẹ mapped-domain laifọwọyi yóò fo kọjá kí domain ìpilẹ̀ tí a pín náà lè wà fún gbogbo aaye tí ó ń lò ó.

Nígbà tí oníbàárà bá forúkọ domain tuntun sílẹ̀ nípasẹ̀ Domain Seller v1.3.0 tàbí tuntun ju bẹ́ẹ̀ lọ, Ultimate Multisite máa ń maapu domain tí a forúkọ sílẹ̀ náà sí aaye nẹ́tíwọ́ọ̀kì oníbàárà náà ní aiyipada. Àwọn alákóso kò ní nílò láti ṣàfikún igbasilẹ mapped-domain míì lẹ́yìn ìforúkọsílẹ̀ tó ṣàṣeyọrí mọ́, àyàfi bí wọ́n bá fẹ́ tún àwọn aṣayan bí àsíá domain àkọ́kọ́, ipò ìmúṣiṣẹ́, tàbí bí a ṣe ń bójú tó SSL ṣe.

**Ìpele** tàbí ipò náà yẹ kí ó yí padà láti **Ṣíṣe àyẹ̀wò DNS** sí **Ṣetán** bí gbogbo nǹkan bá ti ṣètò dáadáa.

<!-- Àwòrán iboju kò sí: Ìlà Domain tó ń fi ìpele Ṣíṣe àyẹ̀wò DNS hàn nínú àtòkọ àwọn domain -->

<!-- Àwòrán iboju kò sí: Ìlà Domain tó ń fi ìpele Ṣetán hàn pẹ̀lú atọ́ka ipò aláwọ̀ ewé -->

Bí o bá tẹ orúkọ domain náà, ìwọ yóò lè rí àwọn aṣayan díẹ̀ nínú rẹ̀. Ẹ jẹ́ ká wo wọn ní ṣókí:

![Ojú-ìwé àlàyé Domain pẹ̀lú àwọn bọtìnì ìyípadà ìpele, aaye, active, primary àti SSL](/img/admin/domain-edit.png)

**Ìpele:** Èyí ni ìpele tí domain náà wà. Nígbà tí o bá kọ́kọ́ ṣàfikún domain náà, ó ṣeé ṣe kí ó wà ní ìpele **Ṣíṣe àyẹ̀wò DNS**. Ìlànà náà yóò ṣàyẹ̀wò àwọn ìgbasilẹ DNS, yóò sì jẹ́rìí pé wọ́n tọ́. Lẹ́yìn náà, a ó fi domain náà sí ìpele **Ṣíṣe àyẹ̀wò SSL**. Ultimate Multisite yóò ṣàyẹ̀wò bóyá domain náà ní SSL tàbí kò ní, yóò sì pín domain rẹ sí **Ṣetán** tàbí **Ṣetán (láìsí SSL)**.

**Aaye:** Subdomain tí ó ní ìbáṣepọ̀ pẹ̀lú domain yìí. Domain tí a maapu yóò fi akoonu ti aaye pàtó yìí hàn.

**Ṣiṣẹ́:** O lè tan tàbí pa aṣayan yìí láti mu domain náà ṣiṣẹ́ tàbí láti pa á mọ́.

**Ṣé Domain Àkọ́kọ́ ni?:** Àwọn oníbàárà rẹ lè ní ju domain tí a maapu kan lọ fún aaye kọ̀ọ̀kan. Lo aṣayan yìí láti yan bóyá èyí ni domain àkọ́kọ́ fún aaye pàtó náà.

**Ṣé ó ní Ààbò?:** Bí ó tilẹ̀ jẹ́ pé Ultimate Multisite máa ń ṣàyẹ̀wò bóyá domain náà ní ìwé-ẹ̀rí SSL tàbí kò ní kí ó tó jẹ́ kí ó ṣiṣẹ́, o lè fi ọwọ́ yan láti kojú domain náà pẹ̀lú tàbí láìsí ìwé-ẹ̀rí SSL. Ṣàkíyèsí pé bí wẹ́ẹ̀bù náà kò bá ní ìwé-ẹ̀rí SSL, tí o sì gbìyànjú láti fi tipátipá kojú rẹ̀ pẹ̀lú SSL, ó lè fún ọ ní àwọn àṣìṣe.

### Mímáapu orúkọ domain àdáni gẹ́gẹ́ bí olumulo aaye-kekere {#mapping-custom-domain-name-as-subsite-user}

Àwọn alákóso aaye-kekere tún lè maapu àwọn orúkọ domain àdáni láti Dashboard alákóso aaye-kekere wọn.

Kọ́kọ́, o ní láti rí i dájú pé o mu aṣayan yìí ṣiṣẹ́ lábẹ́ àwọn ètò **Mímáapu domain**. Wo àwòrán iboju tó wà ní isalẹ.

<!-- Àwòrán iboju kò sí: Ètò mímáapu Domain tó ń gba àwọn olumulo aaye-kekere láàyè láti maapu àwọn domain nípasẹ̀ bọtìnì ìyípadà Ìṣàkóso DNS Oníbàárà -->

O tún lè ṣètò tàbí tún aṣayan yìí ṣe lábẹ́ ìpele **Ètò** tàbí àwọn aṣayan ọjà lórí **Ultimate Multisite > Àwọn Ọjà**.

![Abala Àwọn Domain Àdáni lórí ojú-ìwé àtúnṣe ọjà](/img/config/product-custom-domains.png)

Nígbà tí èyíkéyìí nínú àwọn aṣayan wọ̀nyẹn bá ṣiṣẹ́, tí a sì gba olumulo aaye-kekere láàyè láti maapu àwọn orúkọ domain àdáni, olumulo aaye-kekere náà yẹ kí ó rí metabox lábẹ́ ojú-ìwé **Account** tí a ń pè ní **Àwọn Domain**.

<!-- Àwòrán iboju kò sí: Metabox Àwọn Domain lórí ojú-ìwé Account ti aaye-kekere pẹ̀lú bọtìnì Fi Domain kun -->

Olumulo náà lè tẹ bọtìnì **Fi Domain kun**, yóò sì mú ferese modal kan jáde pẹ̀lú àwọn ìtọ́nisọ́nà díẹ̀.

<!-- Àwòrán iboju kò sí: Modal Fi Domain kun tó ń fi ìtọ́nisọ́nà DNS A-record hàn fún àwọn olumulo aaye-kekere -->

Olumulo náà lè tẹ **Ìgbésẹ̀ Tó Kàn** lẹ́yìn náà, kí ó sì tẹ̀síwájú láti ṣàfikún orúkọ domain àdáni náà. Wọ́n tún lè yan bóyá èyí yóò jẹ́ domain àkọ́kọ́ tàbí rara.

<!-- Àwòrán iboju kò sí: Fọ́ọ̀mù Fi Domain kun pẹ̀lú pápá orúkọ domain àdáni àti bọtìnì ìyípadà domain àkọ́kọ́ -->

<!-- Àwòrán iboju kò sí: Ìgbésẹ̀ ìmúdájú Fi Domain kun tó ń bẹ̀rẹ̀ ìfọwọ́sí DNS -->

Títẹ **Fi Domain kun** yóò bẹ̀rẹ̀ ìlànà ìfọwọ́sí àti gbígba ìwífún DNS ti domain àdáni náà.

### Nípa Mímú Domain Ṣọ̀kan {#about-domain-syncing}

Mímú Domain Ṣọ̀kan jẹ́ ìlànà kan níbi tí Ultimate Multisite ti ń ṣàfikún orúkọ domain àdáni sí Account hosting rẹ gẹ́gẹ́ bí domain àfikún **kí mímáapu domain lè ṣiṣẹ́**.

Mímú domain ṣọ̀kan máa ń ṣẹlẹ̀ laifọwọyi bí olupèsè hosting rẹ bá ní ìṣepọ̀ pẹ̀lú ẹ̀yà mímáapu domain ti Ultimate Multisite. Lọ́wọ́lọ́wọ́, àwọn olupèsè hosting wọ̀nyí ni _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ àti _Cpanel._

Nígbà tí ìṣepọ̀ olupèsè-host bá ṣiṣẹ́, Ultimate Multisite tún lè fi iṣẹ́ dídá DNS tàbí subdomain sílẹ̀ ní ẹ̀gbẹ́ olupèsè sínú ẹ̀tọ́ fún àwọn aaye tuntun tí a ṣẹ̀dá. Bí kò bá sí ìṣepọ̀ tó ń tẹ́tí sí iṣẹ́ yẹn, iṣẹ́ abẹ́lẹ̀ náà yóò fo kọjá láti yàgò fún àwọn àkọsílẹ̀ ẹ̀tọ́ tí kò ṣe nǹkan. Àwọn àyẹ̀wò DNS àti SSL fún àwọn domain tí a maapu máa ń tẹ̀síwájú láti ṣiṣẹ́ nípasẹ̀ ìlànà ìpele-domain deede.

Ìwọ yóò ní láti mu ìṣepọ̀ yìí ṣiṣẹ́ lórí àwọn ètò Ultimate Multisite lábẹ́ taabu **Ìṣepọ̀**.

![Taabu Àwọn Ìṣepọ̀ nínú àwọn ètò Ultimate Multisite tó ń fi àwọn olupèsè hosting hàn](/img/config/integrations-tab.png)

<!-- Àwòrán iboju kò sí: Àwọn ọna asopọ̀ Ìṣètò olupèsè hosting lórí taabu ètò Àwọn Ìṣepọ̀ -->

_Ṣàkíyèsí pé bí olupèsè hosting rẹ kò bá jẹ́ ọ̀kan nínú àwọn olupèsè wọ̀nyẹn tí a mẹ́nuba lókè, **ìwọ yóò ní láti fi ọwọ́ mu un ṣọ̀kan tàbí ṣàfikún orúkọ domain náà** sí Account hosting rẹ._
