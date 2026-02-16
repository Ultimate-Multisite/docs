---
title: Jinsi ya Kusanidi Uwekaji wa Kikoa
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Jinsi ya Kusanidi Uunganishaji wa Kikoa (v2)

_**MUHIMU: Makala hii inahusu toleo la 2.x la Ultimate Multisite.**_

Moja ya vipengele vyenye nguvu zaidi vya mtandao wa premium ni uwezo wa kuwapa wateja wetu nafasi ya kuunganisha kikoa cha kiwango cha juu kwenye tovuti zao. Baada ya yote, lipi linaonekana kitaalamu zaidi: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) au [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ndiyo maana Ultimate Multisite inatoa kipengele hiki kilichojengwa ndani, bila kuhitaji kutumia programu-jalizi za nje.

## Uunganishaji wa kikoa ni nini?

Kama jina linavyopendekeza, uunganishaji wa kikoa ni uwezo unaotolewa na Ultimate Multisite wa kupokea ombi la kikoa maalum na kuunganisha ombi hilo kwenye tovuti inayofanana katika mtandao yenye kikoa hicho mahususi.

### Jinsi ya kusanidi uunganishaji wa kikoa kwenye Mtandao wako wa Ultimate Multisite

Uunganishaji wa kikoa unahitaji usanidi fulani upande wako ili ufanye kazi. Kwa bahati nzuri, Ultimate Multisite inakufanyia kazi ngumu kiotomatiki ili uweze kutimiza mahitaji kwa urahisi.

Wakati wa usakinishaji wa Ultimate Multisite, mchawi utanakili na kusakinisha **sunrise.php** kwenye folda iliyoteuliwa kiotomatiki. **Mchawi hautakuruhusu kuendelea hadi hatua hii ikamilike**.

![Mchawi wa usakinishaji wa Ultimate Multisite na hatua ya sunrise.php](/img/config/settings-domain-mapping.png)

Hii inamaanisha kwamba mara tu mchawi wa usakinishaji wa Ultimate Multisite ukimaliza kusanidi mtandao wako, unaweza kuanza kuunganisha kikoa maalum mara moja.

Kumbuka kwamba uunganishaji wa kikoa katika Ultimate Multisite si lazima. Una chaguo la kutumia kipengele cha asili cha uunganishaji wa kikoa cha WordPress Multisite au suluhisho lingine lolote la uunganishaji wa kikoa.

Ikiwa unahitaji kuzima uunganishaji wa kikoa wa Ultimate Multisite ili kutoa nafasi kwa suluhisho zingine za uunganishaji wa kikoa, unaweza kuzima kipengele hiki chini ya **Ultimate Multisite > Settings > Domain Mapping**.

![Mipangilio ya Domain Mapping na kitufe cha kuwasha](/img/config/settings-domain-mapping.png)

Chini ya chaguo hili, unaweza pia kuona chaguo la **Force Admin Redirect**. Chaguo hili linakuruhusu kudhibiti kama wateja wako wataweza kufikia dashibodi yao ya msimamizi kwenye kikoa chao maalum na kikoa-ndogo au kwenye moja tu kati yao.

Ukichagua **Force redirect to mapped domain**, wateja wako wataweza kufikia dashibodi yao ya msimamizi kwenye vikoa vyao maalum tu.

Chaguo la **Force redirect to network domain** litafanya kinyume kabisa - wateja wako wataruhusiwa kufikia dashibodi zao kwenye kikoa-ndogo chao tu, hata wakijaribu kuingia kwenye vikoa vyao maalum.

Na chaguo la **Allow access to the admin by both mapped domain domain and network domain** linawapa ruhusa ya kufikia dashibodi zao za msimamizi kwenye kikoa-ndogo na kikoa maalum.

![Chaguzi za Force Admin Redirect kwa uunganishaji wa kikoa](/img/config/settings-domain-mapping.png)

Kuna njia mbili za kuunganisha kikoa maalum. Ya kwanza ni kuunganisha jina la kikoa kutoka dashibodi yako ya msimamizi wa mtandao kama super admin na ya pili ni kupitia dashibodi ya msimamizi wa tovuti-ndogo chini ya ukurasa wa akaunti.

Lakini kabla ya kuanza kuunganisha kikoa maalum kwenye moja ya tovuti-ndogo katika mtandao wako, utahitaji kuhakikisha kuwa **mipangilio ya DNS** ya jina la kikoa imesanidiwa vizuri.

### 

### Kuhakikisha mipangilio ya DNS ya kikoa imesanidiwa vizuri

Ili uunganishaji ufanye kazi, unahitaji kuhakikisha kikoa unachopanga kuunganisha kinaelekeza kwenye anwani ya IP ya Mtandao wako. Kumbuka kwamba unahitaji anwani ya IP ya Mtandao - anwani ya IP ya kikoa ambapo Ultimate Multisite imesakinishwa - si anwani ya IP ya kikoa maalum unachotaka kuunganisha. Kutafuta anwani ya IP ya kikoa mahususi, tunapendekeza kwenda [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), kwa mfano.

Ili kuunganisha kikoa kwa usahihi, unahitaji kuongeza **A RECORD** kwenye usanidi wako wa **DNS** unaelekeza kwenye **anwani hiyo ya IP**. Usimamizi wa DNS unatofautiana sana kati ya wasajili tofauti wa vikoa, lakini kuna mafunzo mengi mtandaoni yanayoshughulikia hilo ukitafuta "_Creating A Record on XXXX_" ambapo XXXX ni msajili wako wa kikoa (mfano: "_Creating A Record on GoDaddy_").

Ukijikuta una shida kupata hii kufanya kazi, **wasiliana na msaada wa msajili wako wa kikoa** na wataweza kukusaidia na sehemu hii.

Ukipanga kuruhusu wateja wako kuunganisha vikoa vyao wenyewe, watalazimika kufanya kazi hii sehemu hii wenyewe. Waelekeze kwenye mfumo wa msaada wa msajili wao wakijikuta hawawezi kuunda A Record.

### Kuunganisha jina la kikoa maalum kama Super Admin

Ukiwa umeingia kama super admin kwenye mtandao wako, unaweza kuongeza na kusimamia majina ya vikoa maalum kwa urahisi kwa kwenda chini ya **Ultimate Multisite > Domains**.

![Ukurasa wa orodha ya Domains katika Ultimate Multisite](/img/admin/domains-list.png)

Chini ya ukurasa huu, unaweza kubonyeza kitufe cha **Add Domain** juu na hii italeta dirisha la modal ambapo unaweza kuweka na kujaza **jina la kikoa maalum**, **tovuti-ndogo** unayotaka kutumia jina la kikoa maalum, na kuamua kama unataka kuiweka kama **kikoa cha msingi** au la (kumbuka kwamba unaweza kuunganisha **majina ya vikoa vingi kwenye tovuti-ndogo moja**).

![Modal ya Add Domain yenye sehemu za jina la kikoa na tovuti](/img/admin/domains-list.png)

Baada ya kuweka taarifa zote, unaweza kisha kubonyeza kitufe cha **Add Existing Domain** chini.

Hii itaanza mchakato wa kuthibitisha na kupata taarifa za DNS za kikoa maalum. Pia utaona kumbukumbu chini ya ukurasa ili ufuatilie mchakato unaopitia. Mchakato huu unaweza kuchukua dakika chache kukamilika.

**Stage** au hali inapaswa kubadilika kutoka **Checking DNS** hadi **Ready** ikiwa kila kitu kimesanidiwa vizuri.

![Hatua ya kikoa inabadilika kutoka Checking DNS hadi Ready](/img/admin/domains-list.png)

![Kikoa chenye hali ya Ready katika orodha ya vikoa](/img/admin/domains-list.png)

Ukibonyeza jina la kikoa, utaweza kuona chaguzi kadhaa ndani yake. Hebu tuangalie haraka:

![Ukurasa wa maelezo ya kikoa wenye chaguzi za stage, site, active, na SSL](/img/admin/domains-list.png)

**Stage:** Hii ni hatua ambayo kikoa kipo. Unapoongeza kikoa kwa mara ya kwanza, labda kitakuwa kwenye hatua ya **Checking DNS**. Mchakato utaangalia maingizo ya DNS na kuthibitisha ni sahihi. Kisha, kikoa kitawekwa kwenye hatua ya **Checking SSL**. Ultimate Multisite itaangalia kama kikoa kina SSL au la na itaainisha kikoa chako kama **Ready** au **Ready (without SSL)**.

**Site:** Kikoa-ndogo kinachohusishwa na kikoa hiki. Kikoa kilichounganishwa kitaonyesha maudhui ya tovuti hii mahususi.

**Active:** Unaweza kuwasha au kuzima chaguo hili kuamilisha au kulemaza kikoa.

**Is Primary Domain?:** Wateja wako wanaweza kuwa na zaidi ya kikoa kimoja kilichounganishwa kwa kila tovuti. Tumia chaguo hili kuchagua kama hiki ni kikoa cha msingi kwa tovuti mahususi.

**Is Secure?:** Ingawa Ultimate Multisite inaangalia kama kikoa kina cheti cha SSL au la kabla ya kukiwezesha, unaweza kuchagua mwenyewe kupakia kikoa na au bila cheti cha SSL. Kumbuka kwamba ikiwa tovuti haina cheti cha SSL na unajaribu kulazimisha kuipakia na SSL, inaweza kukupa makosa.

### Kuunganisha jina la kikoa maalum kama mtumiaji wa Tovuti-ndogo

Wasimamizi wa tovuti-ndogo wanaweza pia kuunganisha majina ya vikoa maalum kutoka dashibodi yao ya msimamizi wa tovuti-ndogo.

Kwanza, unahitaji kuhakikisha unawezesha chaguo hili chini ya mipangilio ya **Domain mapping**. Tazama picha ya skrini hapa chini.

![Mipangilio ya Domain mapping inayoruhusu watumiaji wa tovuti-ndogo kuunganisha vikoa](/img/config/settings-domain-mapping.png)

Unaweza pia kuweka au kusanidi chaguo hili chini ya kiwango cha **Plan** au chaguzi za bidhaa kwenye **Ultimate Multisite > Products**.

![Chaguo la vikoa maalum vya bidhaa katika mipangilio ya bidhaa](/img/config/settings-domain-mapping.png)

Wakati chaguzi hizo zozote zimeamilishwa na mtumiaji wa tovuti-ndogo anaruhusiwa kuunganisha majina ya vikoa maalum, mtumiaji wa tovuti-ndogo anapaswa kuona kisanduku-meta chini ya ukurasa wa **Account** kinachoitwa **Domains**.

![Kisanduku-meta cha Domains kwenye ukurasa wa akaunti ya tovuti-ndogo](/img/admin/domains-list.png)

Mtumiaji anaweza kubonyeza kitufe cha **Add Domain** na italeta dirisha la modal lenye maelekezo fulani.

![Modal ya Add Domain yenye maelekezo ya DNS kwa watumiaji wa tovuti-ndogo](/img/admin/domains-list.png)

Mtumiaji anaweza kisha kubonyeza **Next Step** na kuendelea kuongeza jina la kikoa maalum. Wanaweza pia kuchagua kama hiki kitakuwa kikoa cha msingi au la.

![Sehemu ya kuongeza jina la kikoa maalum na chaguo la kikoa cha msingi](/img/admin/domains-list.png)

![Bonyeza Add Domain kuanza uthibitishaji wa DNS](/img/admin/domains-list.png)Kubonyeza **Add Domain** kutaanza mchakato wa kuthibitisha na kupata taarifa za DNS za kikoa maalum.

### Kuhusu Usawazishaji wa Kikoa

Usawazishaji wa Kikoa ni mchakato ambapo Ultimate Multisite inaongeza jina la kikoa maalum kwenye akaunti yako ya upoaji kama kikoa cha ziada **ili uunganishaji wa kikoa ufanye kazi**.

Usawazishaji wa kikoa hufanyika kiotomatiki ikiwa mtoa huduma wako wa upoaji ana muunganisho na kipengele cha uunganishaji wa kikoa cha Ultimate Multisite. Kwa sasa, watoa huduma hawa wa upoaji ni _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ na _Cpanel._

Utahitaji kuamilisha muunganisho huu kwenye mipangilio ya Ultimate Multisite chini ya kichupo cha **Integration**.

![Kichupo cha Integration katika mipangilio ya Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Mipangilio ya muunganisho wa mtoa huduma wa upoaji kwa usawazishaji wa kikoa](/img/config/settings-domain-mapping.png)

_Kumbuka kwamba ikiwa mtoa huduma wako wa upoaji si mmoja wa watoa huduma walioorodheshwa hapo juu, **utahitaji kusawazisha au kuongeza jina la kikoa mwenyewe** kwenye akaunti yako ya upoaji._
