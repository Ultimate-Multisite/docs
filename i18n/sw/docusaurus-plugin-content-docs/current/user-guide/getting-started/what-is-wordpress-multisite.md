---
title: Nini WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite ni Nini?

Ndani ya msingi wake, WordPress inatoa kipengele kinachoitwa 'Multisite' ambacho kina asili yake tangu mwaka 2010 wakati wa uzinduzi wa WordPress 3.0. Tangu wakati huo kimepokea marekebisho kadhaa yenye lengo la kuongeza vipengele vipya na kuimarisha usalama.

Kwa ufupi, WordPress multisite inaweza kuelezwa hivi: Chuo Kikuu kinadumisha usanidi mmoja wa WordPress lakini kila kitivo kinadumisha tovuti yake yenyewe ya WordPress.

## 

## WordPress Multisite ni Nini Hasa?

Multisite ni kipengele cha WordPress kinachoruhusu tovuti nyingi kushiriki usanidi mmoja wa WordPress. Multisite inapowashwa, tovuti ya asili ya WordPress inabadilishwa kuunga mkono kile kinachojulikana kama **mtandao wa tovuti**.

Mtandao huu unashiriki mfumo wa faili (maana yake **plugins na themes zinashirikiwa pia**), hifadhidata, faili za msingi za WordPress, wp-config.php, na kadhalika.

Hii inamaanisha kuwa masasisho ya WordPress, theme, na plugin yanahitaji kufanywa mara moja tu kwa tovuti zote za mtandao wako kwani zinashiriki faili zile zile kwenye mfumo wa faili.

Ukweli huu ni moja ya faida kuu za multisite, kwani inakuruhusu kuongeza idadi ya tovuti unazosimamia huku ukidumisha idadi ya kazi unazohitaji kufanya kudumisha tovuti za wateja wako sawa.

## 

## Subdomain au Subdirectory?

Kuna njia mbili za kuendesha WordPress multisite – na unahitaji kuchagua moja unapobadilisha usanidi wako wa kawaida wa WordPress kuwa usanidi wa multisite:

**Subdomain:** mfano: [site.domain.com](http://site.domain.com)

…au

**Subdirectory:** mfano: [yourdomain.com/site](http://yourdomain.com/site)

Kila njia ina faida na hasara ambazo unahitaji kuzingatia unapofanya uamuzi huu.

Jambo moja ni muhimu kuzingatia, hata hivyo: ukishafanya uamuzi wako, kubadilisha mtandao wako kutoka subdirectory kwenda subdomain au kinyume chake ni ngumu sana – hasa kama tayari una tovuti kadhaa zilizoundwa.

Kabla ya kufanya uamuzi huo, hapa kuna mambo machache ya kukumbuka:

**Njia ya Subdirectory** ni njia rahisi zaidi kwa upande wa usanidi na matengenezo. Hii hutokea kwa sababu tovuti zote ni njia zilizounganishwa na kikoa kikuu (mfano [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kwa hivyo, unahitaji **cheti kimoja tu cha SSL** kwa kikoa kikuu na hicho kitashughulikia mtandao mzima.

Wakati huo huo, kwa sababu ya muundo wake wa URL, Google na injini nyingine nyingi za utafutaji zitachukulia tovuti ndogo zote kwenye mtandao wako unaotegemea subdirectory kama tovuti moja kubwa. Kwa hivyo, maudhui yanayoongezwa kwenye tovuti ndogo na wateja wako wa mwisho yanaweza kuathiri utendaji wa SEO wa tovuti yako kuu, kwa mfano. Kiwango cha athari kinajadiliwa na kuna hoja inayoweza kutolewa kwamba kuwa na mpangilio kama huo kunaweza hata kuwa na manufaa kwa utendaji wa SEO.

**Njia ya Subdomain** ni ngumu zaidi kusanidi, lakini muundo wake wa URL (mfano [subsite.yournetwork.com](http://subsite.yournetwork.com)) kwa ujumla unaonekana "kitaalamu zaidi".

Mojawapo ya changamoto kuu katika kusanidi njia ya subdomain ni ulinzi wa SSL (HTTPS) kwa mtandao mzima. Inategemea ukweli kwamba vivinjari vinachukulia subdomain kuwa huluki zilizotengwa. Kwa hivyo, utahitaji cheti tofauti cha SSL kwa kila subdomain kwenye mtandao wako, au aina maalum ya cheti inayoitwa **Wildcard SSL certificate**. Katika miaka ya hivi karibuni, watoa huduma za hosting na paneli wanaboresha mchezo wao kuhusu utoaji wa SSL na wengine wanatoa vyeti vya wildcard kwa kubofya kitufe kimoja, wakipunguza pengo kati ya njia hizo mbili kuhusu ugumu wa kusanidi.

Kinyume na njia ya subdirectory, tovuti ndogo kwenye mtandao unaotegemea subdomain zinachukuliwa na injini za utafutaji kama tovuti tofauti, ambayo inamaanisha kuwa maudhui yaliyopo kwenye tovuti ndogo moja hayaingii katika utendaji wa SEO wa tovuti ndogo nyingine kabisa.

## Super Admin

Usanidi wa tovuti moja ya WordPress unakuruhusu kuongeza idadi isiyo na kikomo ya watumiaji na kuwapa watumiaji hao majukumu tofauti ya mtumiaji yenye ruhusa tofauti.

Katika WordPress Multisite, aina mpya ya mtumiaji inafunguliwa: **super admin** – na paneli mpya ya usimamizi inafunguliwa: **paneli ya usimamizi wa mtandao**.

Kama jina linavyoonyesha, super admin ana nguvu za ziada juu ya mtandao, akiwa na uwezo wa kusimamia tovuti zake ndogo zote, plugins, themes, kila kitu!

Ukibadilisha usanidi wako wa tovuti moja ya WordPress kuwa multisite, msimamizi wa asili wa tovuti hiyo moja atabadilishwa moja kwa moja kuwa super admin.

Plugins na themes zinaweza kusanidiwa au kuondolewa tu kutoka kwenye paneli ya usimamizi wa mtandao na super admins. Wasimamizi wa tovuti ndogo wanaweza kuchagua kuwasha au kuzima plugins au themes hizo isipokuwa super admin awashe plugin kwenye mtandao, ambayo inalazimisha iwe hai kwa tovuti ndogo zote wakati wote.

_Kumbuka: kama unavyoona, kumwalika mtu kwenye mtandao wako na kumpa hadhi ya super admin kunampa mtumiaji huyu udhibiti kamili juu ya mtandao wako. Kwa mfano, super admins wengine wanaweza hata kuondoa hadhi yako ya super admin, na kukufungia nje ya paneli yako ya usimamizi wa mtandao. Ili kuruhusu wateja wa Ultimate Multisite kuwa na udhibiti wa kina juu ya kile super admins wa ziada wanaweza kufanya, tuna add-on inayoitwa Support Agents. Add-on hii inakuruhusu kuunda aina nyingine ya mtumiaji – agent – aliye na ruhusa tu wanazohitaji kufanya kazi zao kwenye mtandao._

## Nini kinashirikiwa kati ya tovuti ndogo na nini hakishirikiwa

Kama tulivyotaja awali, moja ya faida kuu za WordPress multisite ni kwamba tovuti ndogo zote zinashiriki mipangilio sawa, faili za msingi, themes, plugins, faili za msingi za WordPress, na kadhalika.

Hata hivyo, kuna vipengele ambavyo vimepangwa vizuri kwa kila tovuti ndogo.

\- Kwa mfano, kila tovuti ndogo inapata folda yake ya uploads. Kwa hivyo, uploads zilizofanywa na watumiaji wa tovuti ndogo fulani haziwezi kufikiwa kwenye tovuti ndogo nyingine.

\- Kila tovuti ndogo ina paneli yake ya usimamizi na inaweza kuwasha au kuzima plugins au themes isipokuwa zilwashwe kwenye mtandao na super admin.

\- Jedwali nyingi za hifadhidata zinaundwa kwa kila tovuti ndogo, ikimaanisha kuwa machapisho, maoni, kurasa, mipangilio, na zaidi yamepangwa kwa kila tovuti ndogo.

## Usimamizi wa watumiaji kwenye WordPress Multisite

Suala moja gumu kwenye WordPress multisite ni usimamizi wa watumiaji. Jedwali la watumiaji wa WordPress ni mojawapo ya machache yanayoshirikiwa kati ya tovuti ndogo zote.

Mpangilio huu unaweza kuzalisha matatizo fulani kulingana na unachopanga kujenga na mtandao wako. Mfano hapa chini unasaidia kuonyesha tatizo kuu zaidi.

Fikiria hali ifuatayo:

Unaunda mtandao wa WordPress multisite na unaanza kutoa tovuti ndogo kwa ada ya kila mwezi kwa watu wanaotaka kuwa na duka la e-commerce.

Unapata mteja wako wa kwanza anayelihipa – John. Unamundia tovuti kwenye mtandao wako, unasanidi plugins zote zinazohitajika, kisha unamundia mtumiaji John ili aweze kusimamia duka lake.

Kisha anakuja mteja wa pili – Alice. Unamfanyia vivyo hivyo na sasa ana duka kwenye mtandao wako pia.

John na Alice wote ni wateja wako, lakini hawajuani. Muhimu zaidi, ikiwa mmoja wao atatembelea tovuti ya duka la mwingine, hakuna njia ya kujua kuwa duka hili linahifadhiwa kwenye mtandao ule ule wa tovuti.

Siku moja, John anahitaji kununua viatu vipya na anapata vinavyofaa kabisa katika duka la Alice. Anapojaribu kumaliza ununuzi, anapata ujumbe wa kosa "barua pepe tayari inatumika", ambao ni wa ajabu kwani John ana uhakika 100% hii ni mara ya kwanza kutembelea tovuti ya Alice.

Kilichotokea hapa ni kwamba mtumiaji wa John anashirikiwa kwenye mtandao mzima hivyo anapojaribu kuunda akaunti ya kulipia kwenye tovuti ya Alice, WordPress itagundua kuwa mtumiaji aliye na anwani sawa ya barua pepe tayari yupo na kutupa kosa.

_Kumbuka: Tunaelewa jinsi hii inavyoweza kuwa mbaya kulingana na matumizi yako, hivyo Ultimate Multisite ina chaguo linalopita ukaguzi wa kawaida wa mtumiaji aliyepo, kuruhusu akaunti nyingi kuundwa kwa kutumia anwani moja ya barua pepe. Kila akaunti imefungwa kwa tovuti ndogo, hivyo hatari ya mgongano imepunguzwa. Katika mfano hapo juu, John hangelikuwa akipata ujumbe wa kosa na angeweza kununua viatu hivyo bila tatizo. Chaguo hili linaitwa Enable Multiple Accounts, na linaweza kuwashwa kwenye Ultimate Multisite → Settings → Login & Registration._

Ingawa jedwali la watumiaji linashirikiwa, watumiaji wanaweza kuongezwa na kuondolewa kwenye tovuti ndogo na wasimamizi wa tovuti ndogo au super admin, na wanaweza hata kuwa na majukumu tofauti ya mtumiaji kwenye tovuti ndogo tofauti.

## Mazingatio ya utendaji

WordPress multisite ni yenye nguvu sana linapokuja suala la idadi ya tovuti inazoweza kuunga mkono. Hii inaweza kuthibitishwa na ukweli kwamba [WordPress.com](https://WordPress.com), Edublogs, na Campuspress zote ni huduma zinazotegemea multisite na kila moja inahifadhi maelfu ya tovuti.

Ingawa kwa nadharia hakuna idadi ya juu ya tovuti unazoweza kuhifadhi kwenye usanidi mmoja wa WordPress multisite, kwa vitendo idadi ya tovuti unazoweza kuendesha kwa kuridhisha inaweza kutofautiana sana kulingana na mambo kadhaa tofauti: jinsi tovuti zinavyokuwa na nguvu, ni plugins zipi zinapatikana kwa tovuti ndogo, na kadhalika.

Kama kanuni ya jumla, mtandao wako unavyokuwa rahisi zaidi, ndivyo unavyokuwa bora zaidi. Kupendelea tovuti ambazo maudhui hayabadiliki sana (ambazo zinafanya kuwa wagombea wazuri wa mikakati ya caching kali) na kudumisha rafu ya plugin kuwa nyepesi iwezekanavyo (idadi ndogo ya plugins hai ndivyo bora zaidi) kunaweza kuongeza sana idadi ya tovuti ndogo unazoweza kuhifadhi.

Sehemu nzuri zaidi ni kwamba kwa kuwa hii yote ni WordPress, zana zile zile unazozijua tayari na kuzipenda kwa uboreshaji wa utendaji pia zitafanya kazi kwa mtandao wa multisite.

Kikwazo kikuu kwa multisite ni hifadhidata lakini ikiwa kila kitu kingine kimesanidiwa vizuri, inaweza kuchukua maelfu kadhaa ya tovuti kabla ya kuhitaji kuwa na wasiwasi kuhusu hilo. Hata wakati huo, kuna suluhisho ambazo zinaweza kuongezwa polepole wakati huo (kama suluhisho za database sharding, kwa mfano).
