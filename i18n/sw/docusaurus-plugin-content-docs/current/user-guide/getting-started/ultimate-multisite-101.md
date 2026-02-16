---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Mwongozo wa Msingi wa Ultimate Multisite

Ultimate Multisite ni programu-jalizi ya WordPress Multisite inayokuwezesha kutoa WaaS au Tovuti kama Huduma kwa wateja. Kabla ya kuanza kujifunza jinsi Ultimate Multisite inavyoweza kusaidia biashara yako na wateja wako, kuna maarifa ya msingi tunayohitaji kupata kwanza.

## WordPress Multisite

Wengi wetu tunafahamu usakinishaji wa kawaida wa WordPress. Unaweza kuuunda kupitia paneli ya kudhibiti ya mtoaji wako wa hosting au, kwa wajasiri zaidi, kuweka seva mpya ya wavuti na hifadhidata, kupakua faili za msingi na kuanza mchakato wa usakinishaji.

Hii inafanya kazi kwa mamilioni ya tovuti za WordPress duniani kote lakini kutoka kwa mtazamo wa shirika au mtoaji wa hosting, hebu tuzungumze kuhusu idadi kwa dakika moja.

Ingawa ni rahisi kuunda tovuti moja ya WordPress au hata mia moja kupitia paneli ya kudhibiti ya kiotomatiki, matatizo huanza kuonekana haraka inapokuja suala la kusimamia tovuti hizi. Zikiachiwa bila usimamizi, unakuwa shabaha rahisi ya programu hasidi. Kusimamia kunamaanisha kutumia juhudi na rasilimali na ingawa kuna zana za nje na programu-jalizi zinazopatikana kusaidia kurahisisha usimamizi wa tovuti za WordPress, ukweli kwamba wateja wana ufikiaji wa usimamizi unamaanisha kuwa juhudi hizi zinaweza kushindwa kwa urahisi.

Ndani ya mfumo wake wa msingi, WordPress inatoa kipengele kinachoitwa tu 'Multisite' ambacho chimbuko lake linarudi nyuma hadi 2010 wakati wa uzinduzi wa WordPress 3.0. Tangu wakati huo kimepokea marekebisho kadhaa yenye lengo la kuanzisha vipengele vipya na kuimarisha usalama.

Kwa ufupi, WordPress multisite inaweza kueleweka hivi: Chuo Kikuu kinadumisha usakinishaji mmoja wa WordPress lakini kila kitivo kinadumisha tovuti yake ya WordPress.

Ili kuelewa kauli hii vizuri, hebu tuangalie baadhi ya istilahi za msingi zinazopatikana si tu katika nyaraka za Ultimate Multisite bali pia katika jamii ya WordPress kwa ujumla.

### Mtandao (Network)

Kwa mujibu wa WordPress, mtandao wa multisite ni mahali ambapo tovuti ndogo kadhaa zinaweza kusimamiwa kutoka kwenye dashibodi moja. Ingawa kuunda mtandao wa multisite kunatofautiana kati ya watoa huduma za hosting, matokeo ya mwisho kwa kawaida ni maagizo machache ya ziada katika faili ya wp-config.php ili kumjulisha WordPress kuwa inafanya kazi katika hali hii maalum.

Kuna tofauti kadhaa dhahiri kati ya mtandao wa multisite na usakinishaji wa WordPress wa peke yake ambazo tutazijadili kwa ufupi.

#### Subdomain dhidi ya Subdirectory

Moja ya maamuzi ya kwanza utakayohitaji kufanya ni kama usakinishaji wa multisite utafanya kazi na _subdirectories_ au _subdomains_. Ultimate Multisite inafanya kazi vizuri sawa na chaguo zote mbili lakini kuna tofauti za kiusanifu kati ya usanidi huu mbili.

Katika usanidi wa _subdirectory_, tovuti za mtandao zinarithi njia kulingana na jina la kikoa kikuu. Kwa mfano, tovuti ya mtandao inayoitwa 'site1' itakuwa na URL yake kamili kama https://domain.com/site1. Katika usanidi wa _subdomain_, tovuti ya mtandao itakuwa na _subdomain_ yake inayotokana na jina la kikoa kikuu. Hivyo tovuti inayoitwa 'site1' itakuwa na URL yake kamili kama https://site1.domain.com/.

Ingawa chaguo zote mbili ni halali kabisa, matumizi ya _subdomains_ yanatoa faida kadhaa lakini pia yanahitaji mawazo na mipango zaidi katika usanifu wake.

Kwa upande wa DNS, matumizi ya _subdirectories_ yanawasilisha changamoto rahisi kiasi. Kwa kuwa tovuti za mtandao ni watoto tu wa njia ya mzazi, ingizo moja tu la jina la kikoa linahitajika kuwepo kwa jina la kikoa kikuu. Kwa _subdomains_, changamoto ni ngumu zaidi inayohitaji ama ingizo tofauti la CNAME kwa kila tovuti ya mtandao au ingizo la wildcard (*) katika rekodi za DNS.

Eneo lingine la kuzingatia ni la SSL na utoaji na matumizi ya vyeti vya SSL. Katika usanidi wa _subdirectory_, cheti kimoja cha kikoa kinaweza kutumika kwa kuwa tovuti za mtandao ni njia tu za jina la kikoa kikuu. Hivyo cheti cha domain.com kitatoa SSL kwa ufasaha kwa https://domain.com/site1, https://domain.com/site2 na kadhalika.

Katika usanidi wa _subdomain_, matumizi ya cheti cha SSL cha wildcard ni mojawapo ya chaguo zinazotumika zaidi. Aina hii ya cheti cha SSL inatoa usimbaji fiche kwa kikoa na _subdomains_ zake. Kwa hivyo cheti cha SSL cha wildcard kitatoa usimbaji fiche kwa https://site1.domain.com, https://site2.domain.com na https://domain.com yenyewe.

Ingawa chaguo nyingine zipo, mara nyingi zina upeo na matumizi machache na zinahitaji usanidi wa ziada na kuzingatia kuhusu uhalali.

#### Programu-jalizi na Mandhari

Kile WordPress inachokipa pia inakiondoa, angalau kutoka kwa mtazamo wa mteja. Katika usakinishaji wa WordPress wa peke yake, ikiwa msimamizi wa tovuti anasakinisha programu-jalizi mbaya au anashindwa kudumisha usakinishaji wake, mwathirika na mhasiriwa pekee wa kitendo hiki ni yeye mwenyewe. Hata hivyo, msimamizi wa tovuti anayesakinisha programu-jalizi mbaya kwenye usakinishaji wa multisite anaunda mwathirika wa kila tovuti iliyosakinishwa kwenye mtandao.

Kwa sababu hii, inaposanidiwa kama multisite, WordPress inaondoa uwezo kutoka kwa wasimamizi wa tovuti wa kusakinisha programu-jalizi na mandhari na badala yake inahamisha uwezo huu kwa msimamizi mpya wa mtandao aliyeundwa au jukumu la 'super admin'. Jukumu hili lenye mamlaka linaweza kuamua ikiwa kuwaruhusu wasimamizi wa tovuti za mtandao kuona au kufikia menyu ya programu-jalizi katika dashibodi yao na, ikiwa ndivyo, ikiwa ruhusa kama hizo zinaenea hadi _kuwezesha_ au _kuzima_ programu-jalizi.

Kwa kiwango hiki, msimamizi wa mtandao ana jukumu la kusakinisha programu-jalizi na mandhari kwenye mtandao na kukabidhi ruhusa za kutumia programu-jalizi na mandhari hizi kwa tovuti za mtandao. Wasimamizi wa tovuti hawawezi kusakinisha programu-jalizi na mandhari au kufikia programu-jalizi na mandhari ambayo hayajakabidhiwa kwa tovuti yao.

#### Watumiaji na Wasimamizi

Katika WordPress Multisite, tovuti zote za mtandao zinashiriki hifadhidata sawa na kwa hivyo zinashiriki watumiaji, majukumu na uwezo sawa. Njia bora ya kufikiri juu yake ni kwamba watumiaji wote ni wanachama wa mtandao na si tovuti fulani.

Kwa kuelewa hili, inaweza kuwa haifai kuruhusu watumiaji kuundwa na kwa sababu hii WordPress Multisite inaondoa uwezo huu kutoka kwa wasimamizi wa tovuti na kuhamisha uwezo huu kwa msimamizi wa mtandao. Kwa upande wake, msimamizi wa mtandao anaweza kukabidhi mamlaka muhimu kwa msimamizi wa tovuti ili kuwaruhusu kuunda akaunti za watumiaji kwa tovuti yao wenyewe.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Kurudia kauli hapo juu, ingawa akaunti za watumiaji zinaonekana kuhusiana na tovuti, kwa kweli zimekabidhiwa kwa mtandao na kwa hivyo lazima ziwe za kipekee katika mtandao wote. Kunaweza kuwa na hali ambapo majina ya watumiaji hayapatikani kusajiliwa kwa sababu hii.

Ingawa si dhana ya kigeni katika mifumo ya biashara, chanzo hiki kimoja cha usajili na uthibitishaji wa watumiaji mara nyingi ni dhana ngumu kuelewa kwa watu wanaofahamu usakinishaji wa WordPress wa peke yake ambapo usimamizi wa watumiaji ni rahisi zaidi.

#### Vyombo vya Habari (Media)

Ambapo tovuti za mtandao zinashiriki hifadhidata moja katika WordPress Multisite, zinadumisha njia tofauti kwenye mfumo wa faili kwa faili za vyombo vya habari.

Mahali pa kawaida pa WordPress (wp-content/uploads) linabaki; hata hivyo, njia yake inabadilishwa ili kuonyesha kitambulisho cha kipekee cha tovuti ya mtandao. Kwa hivyo, faili za vyombo vya habari kwa tovuti ya mtandao zinaonekana kama wp-contents/uploads/site/[id].

#### Permalinks

Tulitaja hapo awali kwamba kuna faida dhahiri za _subdomain_ kuliko usanidi wa _subdirectory_ na hapa ndipo: njia.

Katika usanidi wa _subdirectory_, tovuti kuu (tovuti ya kwanza iliyoundwa wakati mtandao unaanzishwa) na tovuti ndogo za mtandao lazima zishiriki njia sawa inayoongoza kutoka kwenye jina la kikoa. Hii ina uwezekano wa migogoro mingi.

Kwa machapisho, njia ya lazima ya /blog/ inaongezwa kwenye tovuti kuu ili kuzuia migongano na tovuti za mtandao. Hii inamaanisha kuwa permalinks nzuri kama 'Post name' zitawasilishwa kama domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Katika usanidi wa _subdomain_, hatua hii si lazima kwa sababu kila tovuti ya mtandao inafaidika na utenganishaji kamili wa kikoa na hivyo haihitaji kutegemea njia moja. Badala yake zinadumisha njia zao za kipekee kulingana na _subdomain_ yao.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Kurasa Tuli

Katika usanidi wa _subdirectory_, uwezekano wa migogoro ya majina unaenea hadi kurasa tuli kwa kuwa tovuti kuu na tovuti za mtandao zinashiriki njia sawa.

Ili kuzuia hili, WordPress inatoa njia ya kuweka orodha nyeusi majina fulani ya tovuti ili yasigongane na majina ya tovuti ya kwanza. Kwa kawaida, msimamizi wa mtandao angeingiza njia za mzizi za kurasa za tovuti kuu.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Katika usanidi wa _subdomain_, uwezekano wa migogoro ya majina unapunguzwa na _subdomain_ kwa kuwa ni ya kipekee kwa tovuti ya mtandao na haihusiani kwa njia yoyote na tovuti kuu.

### Usajili

Ndani ya mipangilio ya mtandao wa WordPress Multisite, chaguo kadhaa mpya za usajili wa watumiaji zinapatikana, kuruhusu watumiaji wapya na waliopo kuunda tovuti.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Kinyume na usakinishaji wa WordPress wa peke yake, tovuti za mtandao hazidumishi chaguo zinazojulikana za kuruhusu usajili wa watumiaji au kukabihi usajili huo kwa majukumu.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Wakati akaunti za watumiaji zinaundwa, akaunti hizo zinaundwa katika kiwango cha mtandao. Hivyo badala ya kuwa mali ya tovuti moja fulani, badala yake zinakuwa mali ya mtandao. Hii ina faida na hasara kadhaa dhahiri.

Kwa mfano, fikiria WordPress Multisite yako ilikuwa katika biashara ya habari na taarifa. Ungeanzisha multisite na kisha kuunda tovuti za mtandao kwa fedha, teknolojia, burudani na maeneo mengine ya kupendeza huku ukidumisha udhibiti wa jumla wa programu-jalizi na mandhari. Kila tovuti ya mtandao ingekuwa na kiwango kikubwa zaidi cha udhibiti juu ya muonekano na hisia na uzoefu wa mtumiaji wa tovuti yao ya mtandao kuliko aina za machapisho maalum au kategoria za kawaida za machapisho.

Kwa kiwango hiki, wakati mtumiaji anaingia, anaingia kwenye mtandao na hatimaye ameingia kwenye kila tovuti ya mtandao pia ili kutoa uzoefu unaoendelea bila mshono. Ikiwa tovuti yako mpya ilikuwa ya usajili, hii ingekuwa suluhisho na matokeo bora.

Hata hivyo, ikiwa asili na madhumuni yaliyokusudiwa ya multisite yalikuwa kutoa tovuti za mtandao tofauti ambazo hazina uhusiano wowote, karibu kila mara inahitajika programu-jalizi za nje au za ziada kudhibiti majukumu ya watumiaji.

### Kikoa na SSL

Hebu tuzungumze kuhusu usakinishaji wa WordPress Multisite ambao karibu unaepuka umakini wetu - Wordpress.com. Hii ndiyo mfano mkubwa zaidi wa WordPress multisite na inaonyesha uwezo wake mpana wa kubinafsishwa na kuumbwa ili kutimiza madhumuni.

Siku hizi katika mtandao wa kisasa, matumizi ya SSL ni karibu ya lazima na wasimamizi wa mtandao wa WordPress multisites hivi karibuni wanakutana na changamoto hizi.

Katika usanidi wa _subdomain_, tovuti zinaundwa kulingana na jina la kikoa la mzizi. Hivyo tovuti inayoitwa 'site1' ingeundwa kama 'site1.domain.com'. Kwa kutumia cheti cha SSL cha wildcard, msimamizi wa mtandao anaweza kushughulikia changamoto hii kwa mafanikio na kutoa uwezo wa usimbaji fiche wa SSL kwa mtandao.

WordPress Multisite ina kazi ya domain mapping inayoruhusu tovuti za mtandao kuhusishwa na majina ya kikoa maalum au majina ya kikoa tofauti na kikoa cha mzizi cha mtandao.

Kwa wasimamizi wa mtandao, hii inawasilisha safu ya ziada ya ugumu katika usanidi wa jina la kikoa na pia utoaji na matengenezo ya vyeti vya SSL.

Kwa kiwango hiki, ingawa WordPress Multisite inatoa njia ya kuruhusu [www.anotherdomain.com](http://www.anotherdomain.com) kuwekwa ramani kwa 'site1', msimamizi wa mtandao anaachwa na changamoto ya kusimamia kwa nje maingizo ya DNS na utekelezaji wa vyeti vya SSL.

## Ultimate Multisite

Kwa tofauti kati ya usakinishaji wa WordPress wa peke yake na usakinishaji wa Multisite kueleweka, hebu tuangalie jinsi Ultimate Multisite ilivyo silaha kuu ya kutoa Tovuti kama Huduma.

### Utangulizi

Ultimate Multisite ni kisu chako cha Uswisi linapokuja suala la kuunda Tovuti kama Huduma (WaaS). Fikiria kuhusu Wix.com, Squarespace, WordPress.com na kisha fikiria kumiliki huduma yako mwenyewe.

Chini ya uso, Ultimate Multisite inatumia WordPress Multisite lakini inafanya hivyo kwa njia ambayo si tu inasuluhisha changamoto nyingi ambazo wasimamizi wa mtandao wanakabiliana nazo na usakinishaji wa multisite bali pia inaboresha uwezo kuruhusu aina mbalimbali za matumizi kusaidiwa.

Katika sehemu zifuatazo, tutaangalia baadhi ya matumizi ya kawaida na mambo ya kuzingatia yanayohitajika kusaidia matumizi hayo.

### Matumizi

#### Kesi ya 1: Shirika

Kwa kawaida, ujuzi wa msingi wa shirika upo katika muundo wa tovuti na vipengele kama vile hosting au uuzaji vikiorodheshwa kama huduma za ziada.

Kwa mashirika, Ultimate Multisite inawasilisha pendekezo la thamani ya ajabu katika uwezo wake wa kuhost na kusimamia tovuti nyingi kwenye jukwaa moja. Zaidi ya hayo kwa mashirika yanayosawazisha miundo yao kwenye mandhari maalum kama vile GeneratePress, Astra, OceanWP au nyingine yanaweza kutumia uwezo wa Ultimate Multisite wa kuwezesha mandhari hizi kiotomatiki kwa kila tovuti mpya.

Vivyo hivyo, kwa wingi wa mipango ya bei za shirika kwa programu-jalizi za kawaida na maarufu, matumizi ya Ultimate Multisite yanaruhusu mashirika kutumia uwekezaji uliopo kwa kutoa jukwaa la pamoja ambapo programu-jalizi zinaweza kusakinishwa, kudumishwa na kutumika.

Uwezekano mkubwa zaidi matumizi ya usanidi yangehitajika na kwa bahati nzuri Ultimate Multisite inafanya iwe rahisi sana kuwezesha domain mapping na vyeti vya SSL kwa ushirikiano wake na watoa huduma maarufu wa hosting pamoja na huduma kama vile Cloudflare na cPanel.

Hivyo kwa kutumia mmoja wa watoa huduma hawa au kwa kuweka Ultimate Multisite nyuma ya Cloudflare, vipengele kama vile usimamizi wa vikoa na vyeti vya SSL vinakuwa vya kawaida kiasi.

Mashirika yanayopendelea kudumisha udhibiti mkali juu ya uundaji wa tovuti watafurahia urahisi ambao wanaweza kuunda tovuti na kuhusisha tovuti na wateja na mipango kupitia kiolesura kilichorahisishwa cha Ultimate Multisite.

![Kiolesura cha usimamizi wa tovuti cha Ultimate Multisite](/img/admin/sites-list.png)

Udhibiti mkali juu ya programu-jalizi na mandhari unadumishwa kwa kila bidhaa kupitia violesura vya angavu vya Ultimate Multisite kuruhusu programu-jalizi na mandhari kupatikana au kufichwa pamoja na hali yao ya uanzishaji inapoanzishwa kwa tovuti mpya.

![Kiolesura cha vikwazo vya programu-jalizi za bidhaa](/img/config/product-plugins.png)

Mandhari zinatoa utendaji kama huo, kuruhusu mandhari fulani kuanzishwa au kufichwa wakati wa uundaji wa tovuti.

![Kiolesura cha vikwazo vya mandhari za bidhaa](/img/config/product-themes.png)

Mashirika yatapata amani ya akili na Ultimate Multisite ikiwaruhusu kufanya wanachofanya vizuri zaidi - kuunda tovuti za kipekee.

#### Kesi ya 2: Mtoaji wa Eneo Maalum

Kuna msemo wa zamani unaosema, "fanya jambo moja na ulifanye vizuri". Kwa wataalamu wengi, hii inamaanisha kuunda bidhaa au huduma kulingana na wazo moja la msingi.

Labda wewe ni mchezaji wa gofu wa bidii unaokuza tovuti kwa vilabu au unaweza kuwa mchezaji wa esports wa bidii unaotoa tovuti kwa clans. Mtu binafsi anayekuza huduma ya kuhifadhi nafasi kwa mikahawa labda?

Kwa sababu nyingi ungetaka kutoa huduma kulingana na mfumo na jukwaa la pamoja. Inaweza kuwa kwamba umeunda au umewekeza katika programu-jalizi maalum kutoa utendaji unaohitajika au inaweza kuwa mazoea bora ya sekta yanahitaji aina fulani ya mbinu ya kawaida ya muundo.

Mojawapo ya vipengele vya kibunifu vya Ultimate Multisite ni matumizi ya tovuti za kiolezo. Tovuti ya kiolezo ni ile ambapo mandhari imesakinishwa na kuanzishwa, programu-jalizi zinazohitajika zimesakinishwa na kuanzishwa na machapisho au kurasa za mfano zimeundwa. Wakati mteja anaunda tovuti mpya kulingana na kiolezo, maudhui na mipangilio ya kiolezo yanakopishwa kwenye tovuti iliyoundwa upya.

Kwa mtoaji wa tovuti na huduma za eneo maalum, hii inatoa faida isiyolinganishwa katika uwezo wa kuunda tovuti mara moja iliyo tayari kwenda na programu-jalizi maalum na muundo. Mteja anahitaji tu kutoa mchango mdogo zaidi kukamilisha huduma.

Kulingana na mahitaji, usanidi wa _subdirectory_ au _subdomain_ unaweza kufaa, katika hali hiyo chaguo za kiusanifu zingekuwa kati ya cheti rahisi cha SSL kwa _subdirectories_ au cheti cha SSL cha wildcard kwa _subdomains_.

#### Kesi ya 3: Web Hosting ya WordPress

Kuna njia nyingi za kuhost tovuti za WordPress lakini mara chache ni rahisi kama kutoa nafasi ya wavuti kwa mteja na toleo lililosakinishwa mapema la WordPress. Hii ni kwa sababu maamuzi na mambo kadhaa ya kuzingatia yanahitaji kukuja pamoja ili kutoa huduma yenye maana.

Ultimate Multisite inafanya vizuri katika eneo hili kwa kutoa suluhisho kamili la turnkey kwa uhosting wa tovuti za WordPress. Inajumuishwa katika suluhisho hilo ni mbinu za msingi za kutoa huduma za usajili, ukusanyaji wa malipo, fomu za checkout, vocha za punguzo na mawasiliano ya wateja.

Mengi ya kazi muhimu zinazohitajika kusakinisha, kusanidi na kudumisha WordPress Multisite kwa usahihi yanawezeshwa na Ultimate Multisite kwa kiwango ambacho wasimamizi wa mtandao wanahitaji tu kuzingatia vipengele kama vinavyohusiana na huduma au eneo lao maalum kama vile ngazi za bidhaa, bei na matoleo ya huduma.

Kwa watengenezaji wanaotaka kushirikiana na Ultimate Multisite, suluhisho pia linatoa RESTful API kamili na Webhooks kwa taarifa za matukio.

Bila kutegemea programu-jalizi nyingi za nje na leseni, Ultimate Multisite inatoa suluhisho lenye vipengele vingi na linalolinganishwa na lile la Wix, Squarespace, WordPress.com na nyingine.

### Mambo ya Kuzingatia ya Kiusanifu

Ingawa si mwongozo kamili, vitu vifuatavyo vinapaswa kutumika kama mwongozo wa uchaguzi sahihi wa teknolojia kusaidia usakinishaji wa Ultimate Multisite.

#### Shared dhidi ya Dedicated Hosting

Kwa bahati mbaya si watoa huduma wote wa hosting ni sawa na baadhi wanafanya msongamano mkubwa wa seva. Watoa huduma wa gharama ya chini kwa kawaida wanazalisha mapato kwa kuongeza msongamano wa seva. Kwa hivyo, usakinishaji wako wa Ultimate Multisite unaweza kuwa moja tu kati ya mamia kadhaa ya tovuti kwenye seva sawa.

Bila ulinzi unaofaa kutoka kwa mtoaji, tovuti kwenye seva ya pamoja zinakutana na tatizo la 'jirani mwenye kelele'. Yaani, tovuti kwenye seva sawa inayotumia rasilimali nyingi kiasi kwamba tovuti nyingine zinapaswa kushindana kwa rasilimali zilizobaki. Mara nyingi hii inajitokeza kama tovuti ambazo ni polepole au zinashindwa kujibu kwa wakati unaofaa.

Kama mtoaji wa web hosting mwenyewe, athari za mtiririko zitamaanisha kuwa wateja wako wanakutana na kasi duni, msimamo mdogo wa ukurasa na viwango vya juu vya kuruka mara nyingi kusababisha wateja kuondoka wanapotafuta huduma mahali pengine.

Kwa ufupi, bei ya chini haimaanishi nzuri.

Ultimate Multisite inajulikana kufanya kazi na watoa huduma kadhaa wazuri wa hosting na inashirikiana vizuri na mazingira yao kutoa kazi kama vile domain mapping na SSL ya kiotomatiki. Watoa huduma hawa wanathamini utendaji na hutoa huduma ya daraja la juu kuliko shared hosting.

Kwa orodha ya watoa huduma wanaoendana na maelekezo kamili ya usanidi kwa kila mmoja, tafadhali angalia nyaraka za Watoa Huduma Wanaoendana.

#### Mambo ya Kuzingatia ya Utendaji

Ultimate Multisite si programu polepole, badala yake, ni ya haraka sana. Hata hivyo, inafanya kazi tu kwa ubora wa programu na miundombinu ya msingi na inaweza kutumia tu kile ambacho ina ufikiaji.

Fikiria hili: Wewe ni msimamizi wa mtandao wa usakinishaji wa Ultimate Multisite wenye tovuti 100. Baadhi ya tovuti hizo zinafanya vizuri na zinavutia idadi ya wageni wa tovuti kila siku.

Hali hii ingekuwa tofauti kwa kiwango kidogo cha kusema tovuti moja hadi tano lakini si muda mrefu kabla matatizo ya kiwango yatakuwa dhahiri.

Ikiachiwa bila kusimamwa, tovuti moja ya Ultimate Multisite ingekuwa na jukumu la kutimiza maombi ya wageni wote kwenye tovuti. Maombi haya yanaweza kuwa kwa kurasa za PHP zenye mienendo au mali tuli kama vile stylesheets, javascript au faili za vyombo vya habari. Iwe tovuti moja au mia moja, kazi hizi zinakuwa za kujirudia, za kuchosha na za upotevu. Si lazima kutumia nguvu za CPU na kumbukumbu kusindika faili ya PHP wakati matokeo ni habari sawa tuli kwa kila ombi.

Vivyo hivyo, ombi moja la ukurasa wa PHP au HTML kwa upande wake linazalisha maombi mengi yanayofuata ya hati, stylesheets na faili za picha. Maombi hayo yanalenga moja kwa moja seva yako ya Ultimate Multisite.

Mtu angeweza kutatua tatizo hili kwa urahisi kwa kuboresha seva lakini haisuluhishi tatizo la pili - ucheleweshaji wa kijiografia. Seva nyingi tu katika maeneo mengi zinaweza kushughulikia tatizo hili ipasavyo.

Kwa sababu hii, wasimamizi wengi wa mtandao wanatumia suluhisho za caching za mbele na mitandao ya usambazaji wa maudhui (CDN) kutimiza maombi ya kurasa tuli. Kutimiza maombi haya na kutoa mali kabla ya ombi kufika seva kunaokoa rasilimali za usindikaji, kuondoa ucheleweshaji, kuepuka uboreshaji usio wa lazima na kuongeza uwekezaji wa teknolojia.

Ultimate Multisite inajumuisha nyongeza ya kisasa ya Cloudflare inayowawezesha wasimamizi wa mtandao kuweka usakinishaji wao nyuma ya Cloudflare na kutumia si tu uwezo wake wa caching bali pia hosting ya DNS, vyeti vya SSL na mbinu za usalama pia.

#### Hifadhi rudufu (Backups)

Mtu anaweza kuuliza watu 50 kwa ushauri juu ya hifadhi rudufu na kupokea maoni 50 tofauti juu ya mikakati ya hifadhi rudufu. Jibu ni, inategemea.

Kile ambacho hakipingiwi ni kwamba hifadhi rudufu zinahitajika na kwamba haiwezekani kabisa kwamba hizi hazisimamiwa na mtoaji, hasa yule anayetoa huduma inayosimamiwa. Kwa hivyo, wateja wataangalia msimamizi wa mtandao kutoa na kusimamia huduma hii. Msimamizi wa mtandao anaangalia nani ni tatizo tofauti kabisa.

Kwa madhumuni ya sehemu hii, hebu tukubaliane kuwa hifadhi rudufu ni nakala ya hali ya mfumo wakati wa wakati hifadhi rudufu ilipoanzishwa. Kwa urahisi, hali yoyote ya mfumo wakati wa hifadhi rudufu, hali hiyo inachukuliwa na kufungwa kwenye hifadhi rudufu.

Kwa uelewa huu, jibu la jinsi ya kufikia hifadhi rudufu na nini ni bora kwa mazingira yako litategemea sana mahitaji yako na uwezo wa mtoaji wa hosting kutimiza mahitaji hayo. Hata hivyo, kwa mpangilio wa yenye maoni mengi zaidi hadi yenye maoni machache, chaguo zilizo hapa chini zinapaswa kutoa mwongozo fulani.

#### Picha za Papo Hapo (Snapshots)

Picha za papo hapo ni risasi za fedha kwa hifadhi rudufu kwa sababu ni rahisi, zisizo ngumu (hadi utake kurejesha) na 'zinafanya kazi tu'. Zinahitaji msaada fulani kutoka kwa mtoaji wako ingawa na kwa kawaida zinatumika tu ikiwa una VPS (Virtual Private Server) au kitu kama hicho. Watoa huduma kadhaa walioorodheshwa katika nyaraka zetu za 'Watoa Huduma Wanaoendana' wanatoa hifadhi rudufu zisizohitaji kuingiliwa zaidi au kuzingatia na msimamizi wa mtandao.

Ambapo hifadhi rudufu za jadi zinalenga faili na hifadhidata, picha ya papo hapo inalenga diski nzima. Hii inamaanisha si tu data ya tovuti inachukuliwa katika picha ya papo hapo bali mfumo wa uendeshaji na usanidi pia. Kwa wengi hii ni faida dhahiri kwani mfumo mpya unaweza kuzaliwa karibu mara moja kutoka kwa picha ya papo hapo na kuletwa katika uendeshaji kuchukua nafasi ya mfano unaougua. Vivyo hivyo, mchakato wa kurejesha kupata faili unahitaji tu kuunganisha picha ya papo hapo kama diski kwa mfano uliopo ili faili ziweze kufikiwa na kunakiliwa.

Picha za papo hapo zinaweza kuvutia gharama ya ziada na mtoaji wa hosting lakini ni bima dhidi ya ajali.

#### Hati za Nje

Inaonekana hakuna uhaba wa hati za nje na suluhisho za kuhifadhi rasilimali za WordPress na MySQL na hizi zingefanya kazi vizuri kwa Ultimate Multisite kwani ni programu-jalizi ya WordPress inayotumia mfumo wa faili wa WordPress na hifadhidata. Hivyo suluhisho linalohifadhi tovuti za WordPress lingeweza kushughulikia mahitaji ya Ultimate Multisite kwa ufasaha.

Hatuwezi kupendekeza hati moja juu ya nyingine lakini ushauri wetu wa jumla ni kuendesha majaribio kadhaa ya hifadhi rudufu na kurejesha ili kuhakikisha kuwa matokeo yanayotakiwa na 'kuwa na uhakika wa kuwa na uhakika' kwa kuendelea kutathmini hati na utendaji wake hasa ambapo aina fulani ya mkakati wa hifadhi rudufu tofauti inatumika.

Inapaswa kuzingatiwa kuwa hati hizi, zikiendesha, zitaongeza mzigo wa mfumo ambao unapaswa kuzingatiwa.

#### Programu-jalizi

Karibu hakuna tatizo katika WordPress ambalo haliwezi kutatuliwa na programu-jalizi na ikiwa kusimamia hati za nje si jambo unalolipenda basi labda programu-jalizi ni chaguo bora linalofuata.

Ingawa programu-jalizi zinatofautiana katika chaguo na vipengele, kwa kawaida zinafanya kazi sawa na hiyo ni kutengeneza nakala ya faili za WordPress na maudhui ya hifadhidata. Baadaye utendaji unatofautiana kwani programu-jalizi nyingine zinaweza kusafirisha hifadhi rudufu kwenda huduma za nje kama vile Google Drive au Dropbox au aina fulani ya huduma ya kuhifadhi vitu inayoendana kama vile S3, Wasabi au nyingine. Programu-jalizi kamili zaidi hutoa hifadhi rudufu tofauti au aina fulani ya mkakati wa kuhifadhi data ambayo imebadilishwa tu ili kuokoa gharama za uhifadhi wa nje.

Katika kuchagua programu-jalizi yako, jihadhari kuthibitisha kuwa inafahamu multisite. Kwa sababu ya asili yake ya uendeshaji wakati hifadhi rudufu inafanya kazi unaweza kutarajia mzigo wa muda kwenye seva hadi mchakato ukamilike.

#### Kikoa na SSL

Mengi yamejadiliwa tayari kuhusu majina ya kikoa katika hali ya _subdomain_ ya multisite. Suluhisho karibu la ulimwengu kwa wasimamizi wa mtandao ni kutumia maingizo ya wildcard DNS.

![Mfano wa usanidi wa ingizo la wildcard DNS](/img/config/settings-domain-mapping.png)

Aina hii ya ingizo la DNS itasuluhisha kwa mafanikio _subdomains_ kama vile 'site1.domain.com' na 'site2.domain.com' kwa anwani ya IP ya 1.2.3.4 hivyo kusaidia Ultimate Multisite na kwa kiwango kikubwa zaidi WordPress Multisite inayotumia hali ya _subdomain_.

Hii inaweza kufanya kazi vizuri kabisa kwa HTTP kwa sababu mwenyeji wa lengo unasomwa kutoka kwa vichwa vya HTTP lakini mara chache wavuti ni rahisi hivyo siku hizi ambapo miamala salama ya HTTPS ni karibu ya lazima.

Kwa bahati nzuri kuna chaguo rahisi kwa vyeti vya SSL. Katika hali ya _subdirectory_, cheti cha kawaida cha kikoa kinaweza kutumika. Hivi vinapatikana kwa urahisi na bure kutoka kwa watoa huduma za hosting ambao wanaweza kutumia huduma ya bure ya LetsEncrypt au chanzo kingine. Vinginevyo hivi vinapatikana kibiashara kutoka kwa mamlaka ikiwa una uwezo wa kuzalisha ombi la kusaini cheti.

Kwa hali ya _subdomain_, matumizi ya cheti cha SSL cha wildcard vitaendana kikamilifu na kikoa cha wildcard na kuruhusu cheti kuwa na mamlaka kwa kikoa cha mzizi na _subdomains_ zote bila usanidi wa ziada.

Hata hivyo, inapaswa kuzingatiwa kuwa vyeti vya SSL vya wildcard vinaweza visifanye kazi na huduma kama vile Cloudflare isipokuwa uko kwenye mpango wa biashara au kuweka ingizo kuwa DNS tu ambapo caching yote na uboreshaji unapitwa.

Tayari Ultimate Multisite inatoa suluhisho kwa tatizo hili ikionyesha uzoefu wetu mkubwa na mahitaji ya WordPress multisites. Kuwezesha nyongeza hii rahisi kutafanya Ultimate Multisite kutumia vyeti vyako vya Cloudflare kuongeza kiotomatiki maingizo ya DNS kwa tovuti za mtandao katika Cloudflare na kuweka hali yao kuwa 'proxied'. Kwa njia hii kila tovuti ndogo ya mtandao, inapoandaliwa, itakuwa na ulinzi kamili na faida za Cloudflare ikiwa ni pamoja na SSL.

Kulingana na asili na madhumuni ya usakinishaji wako wa Ultimate Multisite kunaweza kuwa na haja ya wateja kutumia vikoa vyao wenyewe. Katika kesi hii, msimamizi wa mtandao ana jukumu la kutatua matatizo mawili. Moja, hosting ya jina la kikoa na mbili, vyeti vya SSL kwa kikoa.

Kwa wengi, matumizi ya Cloudflare ni chaguo rahisi. Mteja anahitaji tu kuweka kikoa chake kwenye Cloudflare, kuelekeza CNAME kwenye kikoa cha mzizi cha Ultimate Multisite na kuweka ramani ya kikoa chao katika Ultimate Multisite kuanza kufaidika na jina lao la kikoa maalum.

Nje ya hili, suluhisho mbadala zinahitaji kutafutwa ndiyo maana Ultimate Multisite inapendekeza orodha ya Watoa Huduma Wanaoendana. Hii ni kwa sababu mchakato wa kuweka DNS na SSL unaweza kuwa mchakato usio wa kawaida. Hata hivyo, kwa ushirikiano wa Ultimate Multisite na watoa huduma hawa, ugumu unaondolewa sana na utaratibu unakuwa wa kiotomatiki.

#### Programu-jalizi

Kuna uwezekano mkubwa kwamba utahitaji programu-jalizi za ziada kutoa utendaji kwa wateja wako au tovuti za mtandao. Je, programu-jalizi zote zinafanya kazi na WordPress Multisite na Ultimate Multisite? Kweli, inategemea.

Ingawa programu-jalizi nyingi zinaweza kusakinishwa katika WordPress Multisite, uanzishaji na ulipishaji wao unatofautiana kutoka kwa mwandishi mmoja hadi mwingine.

Changamoto iko katika jinsi ulipishaji unavyotumika na programu-jalizi fulani zikihitaji ulipishaji kwa msingi wa kila kikoa. Hii ingemanisha kuwa kwa programu-jalizi fulani msimamizi wa mtandao anahitaji kuwezesha leseni kwa mikono kwa kila programu-jalizi kwenye kila tovuti mpya.

Kwa hivyo inaweza kuwa bora kuangalia na mwandishi wa programu-jalizi kuhusu jinsi programu-jalizi yao ingefanya kazi na WordPress Multisite na mahitaji yoyote maalum au taratibu zinazohitajika kuilipa leseni.
