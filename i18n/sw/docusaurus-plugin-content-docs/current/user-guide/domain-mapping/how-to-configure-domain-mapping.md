---
title: Jinsi ya Kusanidi Ulinganishaji wa Vikoa
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Jinsi ya Kusanidi Uwekaji Ramani wa Kikoa (v2)

_**KUMBUKA MUHIMU: Makala haya yanahusu Ultimate Multisite toleo la 2.x.**_

Moja ya vipengele vyenye nguvu zaidi vya mtandao wa premium ni uwezo wa kuwapa wateja wetu nafasi ya kuambatisha kikoa cha kiwango cha juu kwenye tovuti zao. Hatimaye, ni ipi inaonekana ya kitaalamu zaidi: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) au [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ndiyo maana Ultimate Multisite hutoa kipengele hicho kikiwa kimejengwa ndani, bila haja ya kutumia plugin za wahusika wengine.

## Uwekaji ramani wa kikoa ni nini?

Kama jina linavyopendekeza, uwekaji ramani wa kikoa ni uwezo unaotolewa na Ultimate Multisite wa kupokea ombi la kikoa maalum na kulinganisha ombi hilo na tovuti inayolingana kwenye mtandao ambayo kikoa hicho mahususi kimeambatishwa.

### Jinsi ya kusanidi uwekaji ramani wa kikoa kwenye Mtandao wako wa Ultimate Multisite

Uwekaji ramani wa kikoa unahitaji usanidi fulani upande wako ili ufanye kazi. Kwa bahati nzuri, Ultimate Multisite hujiendesha kiotomatiki kufanya kazi ngumu kwa ajili yako ili uweze kutimiza mahitaji kwa urahisi.

Wakati wa usakinishaji wa Ultimate Multisite, mchawi atanakili na kusakinisha **sunrise.php** kiotomatiki kwenye folda iliyoteuliwa. **Mchawi hatakuruhusu kuendelea hadi hatua hii ikamilike**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Hii inamaanisha kuwa mara tu mchawi wa usakinishaji wa Ultimate Multisite utakapokamilisha kusanidi mtandao wako, unaweza kuanza kuweka ramani ya kikoa maalum mara moja.

Kumbuka kuwa uwekaji ramani wa kikoa katika Ultimate Multisite si wa lazima. Una chaguo la kutumia kitendaji asilia cha uwekaji ramani wa kikoa cha WordPress Multisite au suluhisho lingine lolote la uwekaji ramani wa kikoa.

Ikiwa unahitaji kuzima uwekaji ramani wa kikoa wa Ultimate Multisite ili kutoa nafasi kwa suluhisho nyingine za uwekaji ramani wa kikoa, unaweza kuzima kipengele hiki chini ya **Ultimate Multisite > Mipangilio > Uwekaji Ramani wa Kikoa**.

![Ukurasa wa mipangilio ya Uwekaji Ramani wa Kikoa unaoonyesha uelekezaji upya wa msimamizi, ujumbe wa uwekaji ramani na chaguo za DNS](/img/config/domain-mapping-settings.png)

Mara chini ya chaguo hili, unaweza pia kuona chaguo **Lazimisha Uelekezaji Upya wa Msimamizi**. Chaguo hili hukuruhusu kudhibiti ikiwa wateja wako wataweza kufikia Dashboard yao ya msimamizi kwenye kikoa chao maalum na kikoa-tanzu chao, au kwenye kimojawapo tu.

Ukichagua **Lazimisha kuelekeza upya kwenye kikoa kilichowekewa ramani** , wateja wako wataweza kufikia Dashboard yao ya msimamizi kwenye vikoa vyao maalum pekee.

Chaguo **Lazimisha kuelekeza upya kwenye** **kikoa cha mtandao** litafanya kinyume kabisa - wateja wako wataruhusiwa kufikia Dashboard zao kwenye kikoa-tanzu chao pekee, hata kama wanajaribu kuingia kwenye vikoa vyao maalum.

Na chaguo **Ruhusu ufikiaji wa msimamizi kupitia kikoa kilichowekewa ramani na kikoa cha mtandao** linawaruhusu kufikia Dashboard zao za msimamizi kwenye kikoa-tanzu na kikoa maalum pia.

![Menyu kunjuzi ya Uelekezaji Upya wa Msimamizi ikiwa imepanuliwa ikionyesha chaguo tatu za uelekezaji upya](/img/config/domain-mapping-redirect-options.png)

Kuna njia mbili za kuweka ramani ya kikoa maalum. Ya kwanza ni kwa kuweka ramani ya jina la kikoa kutoka kwenye Dashboard ya msimamizi wa mtandao wako kama msimamizi mkuu na ya pili ni kupitia Dashboard ya msimamizi wa tovuti-tanzu chini ya ukurasa wa Account.

Lakini kabla ya kuanza kuweka ramani ya kikoa maalum kwenye mojawapo ya tovuti-tanzu katika mtandao wako, utahitaji kuhakikisha kuwa **mipangilio ya DNS** ya jina la kikoa imesanidiwa vizuri.

###

### Kuhakikisha mipangilio ya DNS ya kikoa imesanidiwa vizuri

Ili uwekaji ramani ufanye kazi, unahitaji kuhakikisha kuwa kikoa unachopanga kuweka ramani kinaelekeza kwenye anwani ya IP ya Mtandao wako. Kumbuka kuwa unahitaji anwani ya IP ya Mtandao - anwani ya IP ya kikoa ambako Ultimate Multisite imesakinishwa - si anwani ya IP ya kikoa maalum unachotaka kuweka ramani. Ili kutafuta anwani ya IP ya kikoa mahususi, tunapendekeza uende [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), kwa mfano.

Ili kuweka ramani ya kikoa kwa usahihi, unahitaji kuongeza **A RECORD** kwenye usanidi wako wa **DNS** inayoelekeza kwenye **anwani hiyo ya IP**. Usimamizi wa DNS hutofautiana sana kati ya wasajili tofauti wa vikoa, lakini kuna mafunzo mengi mtandaoni yanayoshughulikia hilo ukitafuta " _Creating A Record on XXXX_ " ambapo XXXX ni msajili wako wa kikoa (mf.: " _Creating A Record on_ _GoDaddy_ ").

Ukijikuta unapata shida kufanya hili lifanye kazi, **wasiliana na usaidizi wa msajili wako wa kikoa** na wataweza kukusaidia na sehemu hii.

Ikiwa unapanga kuwaruhusu wateja wako kuweka ramani ya vikoa vyao wenyewe, watalazimika kufanya kazi ya sehemu hii wao wenyewe. Waelekeze kwenye mfumo wa usaidizi wa msajili wao ikiwa watashindwa kuunda A Record.

### Kuweka ramani ya jina la kikoa maalum kama Msimamizi Mkuu

Ukiwa umeingia kama msimamizi mkuu kwenye mtandao wako, unaweza kuongeza na kudhibiti majina ya vikoa maalum kwa urahisi kwa kwenda chini ya **Ultimate Multisite > Vikoa**.

![Ukurasa wa orodha ya Vikoa katika Ultimate Multisite](/img/admin/domains-list.png)

Chini ya ukurasa huu, unaweza kubofya kitufe cha **Ongeza Kikoa** kilicho juu na hii italeta dirisha la modal ambapo unaweza kuweka na kujaza **jina la kikoa maalum** , **tovuti-tanzu** unayotaka kutumia jina la kikoa maalum kwake, na kuamua kama unataka kuliweka kama jina la **kikoa msingi** au la (kumbuka kuwa unaweza kuweka ramani ya **majina mengi ya vikoa kwenye tovuti-tanzu moja**).

![Modal ya Ongeza Kikoa yenye jina la kikoa, kichagua tovuti na swichi ya kikoa msingi](/img/admin/domain-add-modal.png)

Baada ya kuweka taarifa zote, unaweza kisha kubofya kitufe cha **Ongeza Kikoa Kilichopo** kilicho chini.

Hii itaanza mchakato wa kuthibitisha na kuchukua taarifa za DNS za kikoa maalum. Pia utaona kumbukumbu chini ya ukurasa ili ufuatilie mchakato unaoendelea. Mchakato huu unaweza kuchukua dakika chache kukamilika.

Ultimate Multisite v2.13.0 pia huunda rekodi ya ndani ya kikoa kiotomatiki tovuti mpya inapoundwa kwenye host inayopaswa kuchukuliwa kama kikoa cha kila tovuti. Ikiwa host ni kikoa kikuu cha mtandao, au mojawapo ya vikoa vya msingi vya fomu ya checkout ya pamoja vilivyosanidiwa kwenye uga wa **Site URL**, rekodi ya kikoa kilichounganishwa kiotomatiki hurukwa ili kikoa hicho cha msingi cha pamoja kiendelee kupatikana kwa kila tovuti inayokitumia.

Mteja anaposajili kikoa kipya kupitia Domain Seller v1.3.0 au mpya zaidi, Ultimate Multisite huunganisha kiotomatiki kikoa kilichosajiliwa na tovuti ya mtandao ya mteja kwa chaguo-msingi. Wasimamizi hawahitaji tena kuongeza rekodi tofauti ya kikoa kilichounganishwa baada ya usajili kufanikiwa isipokuwa wanataka kurekebisha chaguo kama vile alama ya kikoa kikuu, hali ya uanzishaji, au ushughulikiaji wa SSL.

**Hatua** au hali inapaswa kubadilika kutoka **Inakagua DNS** hadi **Tayari** ikiwa kila kitu kimesanidiwa vizuri.

<!-- Picha ya skrini haipatikani: Safu ya kikoa inayoonyesha hatua ya Inakagua DNS kwenye orodha ya vikoa -->

<!-- Picha ya skrini haipatikani: Safu ya kikoa inayoonyesha hatua ya Tayari yenye kiashiria cha hali cha kijani -->

Ukibofya jina la kikoa, utaweza kuona baadhi ya chaguo ndani yake. Hebu tuziangalie kwa haraka:

![Ukurasa wa maelezo ya kikoa wenye vitufe vya hatua, tovuti, amilifu, msingi na SSL](/img/admin/domain-edit.png)

**Hatua:** Hii ndiyo hatua ambayo kikoa kipo. Unapoongeza kikoa kwa mara ya kwanza, huenda kitakuwa kwenye hatua ya **Inakagua DNS**. Mchakato utakagua maingizo ya DNS na kuthibitisha kuwa yako sahihi. Kisha, kikoa kitawekwa kwenye hatua ya **Inakagua SSL**. Ultimate Multisite itakagua kama kikoa kina SSL au la na itakiweka kikoa chako katika kundi la **Tayari** au **Tayari (bila SSL)**.

**Tovuti:** Kikoa kidogo kinachohusishwa na kikoa hiki. Kikoa kilichounganishwa kitaonyesha maudhui ya tovuti hii maalum.

**Amilifu:** Unaweza kuwasha au kuzima chaguo hili ili kuamilisha au kulemaza kikoa.

**Je, ni Kikoa Kikuu?:** Wateja wako wanaweza kuwa na zaidi ya kikoa kimoja kilichounganishwa kwa kila tovuti. Tumia chaguo hili kuchagua kama hiki ndicho kikoa kikuu cha tovuti husika.

**Je, ni Salama?:** Ingawa Ultimate Multisite hukagua kama kikoa kina cheti cha SSL au la kabla ya kukiwezesha, unaweza kuchagua mwenyewe kupakia kikoa kwa cheti cha SSL au bila cheti cha SSL. Kumbuka kwamba ikiwa tovuti haina cheti cha SSL na ujaribu kulazimisha kuipakia kwa SSL, inaweza kukupa hitilafu.

### Kuunganisha jina maalum la kikoa kama mtumiaji wa tovuti ndogo

Wasimamizi wa tovuti ndogo pia wanaweza kuunganisha majina maalum ya vikoa kutoka kwenye dashibodi ya usimamizi ya tovuti yao ndogo.

Kwanza, unahitaji kuhakikisha kuwa umewezesha chaguo hili chini ya mipangilio ya **Uunganishaji wa kikoa**. Tazama picha ya skrini hapa chini.

<!-- Picha ya skrini haipatikani: Mipangilio ya uunganishaji wa kikoa inayowaruhusu watumiaji wa tovuti ndogo kuunganisha vikoa kupitia kitufe cha Usimamizi wa DNS wa Mteja -->

Unaweza pia kuweka au kusanidi chaguo hili chini ya kiwango cha **Mpango** au chaguo za bidhaa kwenye **Ultimate Multisite > Bidhaa**.

![Sehemu ya Vikoa Maalum kwenye ukurasa wa kuhariri bidhaa](/img/config/product-custom-domains.png)

Wakati mojawapo ya chaguo hizo imewezeshwa na mtumiaji wa tovuti ndogo ameruhusiwa kuunganisha majina maalum ya vikoa, mtumiaji wa tovuti ndogo anapaswa kuona metabox chini ya ukurasa wa **Account** unaoitwa **Vikoa**.

<!-- Picha ya skrini haipatikani: Metabox ya Vikoa kwenye ukurasa wa Account wa tovuti ndogo yenye kitufe cha Ongeza Kikoa -->

Mtumiaji anaweza kubofya kitufe cha **Ongeza Kikoa** na kitaonyesha dirisha la modal lenye baadhi ya maelekezo.

<!-- Picha ya skrini haipatikani: Modal ya Ongeza Kikoa inayoonyesha maelekezo ya rekodi ya DNS A kwa watumiaji wa tovuti ndogo -->

Kisha mtumiaji anaweza kubofya **Hatua Inayofuata** na kuendelea kuongeza jina maalum la kikoa. Pia anaweza kuchagua kama hiki kitakuwa kikoa kikuu au la.

<!-- Picha ya skrini haipatikani: Fomu ya Ongeza Kikoa yenye uga wa jina maalum la kikoa na kitufe cha kikoa kikuu -->

<!-- Picha ya skrini haipatikani: Hatua ya uthibitisho wa Ongeza Kikoa inayochochea uthibitishaji wa DNS -->

Kubofya **Ongeza Kikoa** kutaanza mchakato wa kuthibitisha na kuchukua taarifa za DNS za kikoa maalum.

### Kuhusu Usawazishaji wa Kikoa

Usawazishaji wa Kikoa ni mchakato ambapo Ultimate Multisite huongeza jina maalum la kikoa kwenye hosting account yako kama kikoa cha nyongeza **ili uunganishaji wa kikoa ufanye kazi**.

Usawazishaji wa kikoa hutokea kiotomatiki ikiwa mtoa huduma wako wa hosting ana muunganisho na kipengele cha uunganishaji wa kikoa cha Ultimate Multisite. Kwa sasa, watoa huduma hawa wa hosting ni _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ na _Cpanel._

Wakati muunganisho wa mtoa huduma wa host unafanya kazi, Ultimate Multisite pia inaweza kupanga kazi ya kuunda DNS au kikoa kidogo upande wa mtoa huduma kwa tovuti mpya zilizoundwa. Ikiwa hakuna muunganisho unaosikiliza kazi hiyo, kazi ya usuli hurukwa ili kuepuka maingizo ya foleni yasiyo na utekelezaji. Ukaguzi wa DNS na SSL kwa vikoa vilivyounganishwa unaendelea kuendeshwa kupitia mchakato wa kawaida wa hatua za kikoa.

Utahitaji kuamilisha muunganisho huu kwenye mipangilio ya Ultimate Multisite chini ya kichupo cha **Muunganisho**.

![Kichupo cha Muunganisho katika mipangilio ya Ultimate Multisite kinachoonyesha watoa huduma wa hosting](/img/config/integrations-tab.png)

<!-- Picha ya skrini haipatikani: Viungo vya Usanidi vya mtoa huduma wa hosting kwenye kichupo cha mipangilio ya Miunganisho -->

_Kumbuka kwamba ikiwa mtoa huduma wako wa hosting si mmoja wa watoa huduma waliotajwa hapo juu, **utahitaji kusawazisha au kuongeza jina la kikoa mwenyewe** kwenye hosting account yako._
