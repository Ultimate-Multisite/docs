---
title: Indlela yokuqwalasela ukumephwa kwedomeyini
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Indlela yokuQwalasela ukuMapishwa kweeDomeyini (v2)

_**INQAKU ELIBALULEKILEYO: Eli nqaku libhekisa ku-Ultimate Multisite uguqulelo 2.x.**_

Enye yezona mpawu zinamandla zenethiwekhi ye-premium kukukwazi ukunika abathengi bethu ithuba lokuncamathisela idomeyini yenqanaba eliphezulu kwiisayithi zabo. Ekugqibeleni, yeyiphi ebonakala inobungcali ngakumbi: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) okanye [_**joesbikeshop.com**_](http://joesbikeshop.com)? Yiyo loo nto Ultimate Multisite inikezela olo phawu lufakwe ngaphakathi, ngaphandle kwesidingo sokusebenzisa ii-plugin zomntu wesithathu.

## Yintoni ukumapishwa kweedomeyini?

Njengoko igama lisitsho, ukumapishwa kweedomeyini kukukwazi okunikelwa yi-Ultimate Multisite ukwamkela isicelo sedomeyini yesiko kwaye imatanise eso sicelo nesayithi ehambelanayo kwinethiwekhi enaloo domeyini incamathiselweyo.

### Indlela yokuseta ukumapishwa kweedomeyini kwiNethiwekhi yakho ye-Ultimate Multisite

Ukumapishwa kweedomeyini kufuna ukuseta okuthile kwicala lakho ukuze kusebenze. Ngethamsanqa, Ultimate Multisite iyawenza ngokuzenzekelayo umsebenzi onzima ukuze ukwazi ukuhlangabezana neemfuno ngokulula.

Ngexesha lofakelo lwe-Ultimate Multisite, iwizard iya kukopa ngokuzenzekelayo ize ifake **sunrise.php** kwifolda echongiweyo. **Iwizard ayiyi kukuvumela ukuba uqhubeke de eli nyathelo ligqitywe**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Oku kuthetha ukuba xa iwizard yofakelo lwe-Ultimate Multisite igqibile ukuseta inethiwekhi yakho, ungaqalisa ukumapisha idomeyini yesiko ngoko nangoko.

Qaphela ukuba ukumapishwa kweedomeyini kwi-Ultimate Multisite akunyanzelekanga. Unokhetho lokusebenzisa umsebenzi wemveli we-WordPress Multisite wokumapisha iidomeyini okanye nasiphi na esinye isisombululo sokumapisha iidomeyini.

Ukuba kufuneka ukhubaze ukumapishwa kweedomeyini kwe-Ultimate Multisite ukuze uvulele ezinye izisombululo zokumapisha iidomeyini, ungakhubaza olu phawu phantsi kwe-**Ultimate Multisite > Iisetingi > UkuMapishwa kweeDomeyini**.

![Iphepha leesetingi zokuMapishwa kweeDomeyini elibonisa ukuhanjiswa kwakhona komlawuli, umyalezo wokumapisha kunye nokhetho lwe-DNS](/img/config/domain-mapping-settings.png)

Ngqo ngezantsi kolu khetho, ungabona kwakhona ukhetho **Nyanzelisa ukuHanjiiswa kwakhona koMlawuli**. Olu khetho lukuvumela ukuba ulawule ukuba abathengi bakho baya kukwazi ukufikelela kwidashboard yabo yomlawuli zombini kwidomeyini yabo yesiko nakwisabdomeyini okanye kuphela kwenye yazo.

Ukuba ukhetha **Nyanzelisa ukuhanjiswa kwakhona kwidomeyini emapishiweyo** , abathengi bakho baya kukwazi kuphela ukufikelela kwidashboard yabo yomlawuli kwiidomeyini zabo zesiko.

Ukhetho **Nyanzelisa ukuhanjiswa kwakhona ku** **domeyini yenethiwekhi** luya kwenza kanye okuchaseneyo - abathengi bakho baya kuvunyelwa kuphela ukufikelela kwiidashboard zabo kwisabdomeyini yabo, nokuba bazama ukungena kwiidomeyini zabo zesiko.

Kwaye ukhetho **Vumela ukufikelela kumlawuli ngazo zombini idomeyini emapishiweyo kunye nedomeyini yenethiwekhi** lubavumela ukuba bafikelele kwiidashboard zabo zomlawuli zombini kwisabdomeyini nakwidomeyini yesiko.

![Imenyu eyehlayo yokuHanjiiswa kwakhona koMlawuli ivuliwe ibonisa iinketho ezintathu zokuhanjiiswa kwakhona](/img/config/domain-mapping-redirect-options.png)

Zimbini iindlela zokumapisha idomeyini yesiko. Eyokuqala kukumapisha igama ledomeyini ukusuka kwidashboard yomlawuli wenethiwekhi yakho njenge-super admin kwaye eyesibini kukudlula kwidashboard yomlawuli wesabhsayithi phantsi kwephepha le-akhawunti.

Kodwa ngaphambi kokuba uqalise ukumapisha idomeyini yesiko kwenye yeesabhsayithi kwinethiwekhi yakho, kuya kufuneka uqinisekise ukuba **iisetingi ze-DNS** zegama ledomeyini ziqwalaselwe ngokuchanekileyo.

###

### Ukuqinisekisa ukuba iisetingi ze-DNS zedomeyini ziqwalaselwe ngokuchanekileyo

Ukuze ukumapisha kusebenze, kufuneka uqinisekise ukuba idomeyini oceba ukuyimapisha ikhomba kwidilesi ye-IP yeNethiwekhi yakho. Qaphela ukuba ufuna idilesi ye-IP yeNethiwekhi - idilesi ye-IP yedomeyini apho Ultimate Multisite ifakwe khona - hayi idilesi ye-IP yedomeyini yesiko ofuna ukuyimapisha. Ukukhangela idilesi ye-IP yedomeyini ethile, sicebisa ukuya ku-[Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), umzekelo.

Ukuze umapisha idomeyini ngokuchanekileyo, kufuneka wongeze **A RECORD** kuqwalaselo lwakho lwe-**DNS** olukhomba kuloo **dilesi ye-IP**. Ulawulo lwe-DNS luyahluka kakhulu phakathi kwababhalisi beedomeyini abohlukeneyo, kodwa kukho izifundo ezininzi kwi-intanethi ezikugubungelayo oko ukuba ukhangela " _Ukwenza i-A Record ku-XXXX_ " apho XXXX ingumbhalisi wedomeyini yakho (umz.: " _Ukwenza i-A Record ku-_ _GoDaddy_ ").

Ukuba uzifumana unengxaki yokwenza oku kusebenze, **qhagamshelana nenkxaso yombhalisi wedomeyini yakho** kwaye baya kukwazi ukukunceda ngale nxalenye.

Ukuba uceba ukuvumela abathengi bakho ukuba bamapishe ezabo iidomeyini, kuya kufuneka benze umsebenzi kule nxalenye ngokwabo. Bakhokelele kwinkqubo yenkxaso yombhalisi wabo ukuba bazifumana bengakwazi ukwenza i-A Record.

### Ukumapisha igama ledomeyini yesiko njenge-Super Admin

Xa ungene njenge-super admin kwinethiwekhi yakho, unokongeza kwaye ulawule amagama eedomeyini zesiko ngokulula ngokuya phantsi kwe-**Ultimate Multisite > Iidomeyini**.

![Iphepha loluhlu lweeDomeyini kwi-Ultimate Multisite](/img/admin/domains-list.png)

Phantsi kweli phepha, ungacofa iqhosha **Yongeza iDomeyini** phezulu kwaye oku kuya kuvula ifestile ye-modal apho unokuseta kwaye ugcwalise **igama ledomeyini yesiko** , **isabhsayithi** ofuna ukufaka kuyo igama ledomeyini yesiko, kwaye ugqibe ukuba ufuna ukuyiseta njengegama **ledomeyini ephambili** okanye hayi (qaphela ukuba ungamapisha **amagama eedomeyini amaninzi kwisabhsayithi enye**).

![I-modal yokuYongeza iDomeyini enegama ledomeyini, isikhethi sesayithi kunye neswitshi yedomeyini ephambili](/img/admin/domain-add-modal.png)

Emva kokufaka lonke ulwazi, emva koko ungacofa iqhosha **Yongeza iDomeyini esele Ikhona** ezantsi.

Oku kuya kuqalisa inkqubo yokuqinisekisa kunye nokulanda ulwazi lwe-DNS lwedomeyini yesiko. Uya kubona kwakhona ilog ezantsi kwephepha ukuze ulandele inkqubo edlula kuyo. Le nkqubo inokuthatha imizuzu embalwa ukuyigqiba.

Ultimate Multisite v2.13.0 ikwadala ngokuzenzekelayo irekhodi ledomeyini langaphakathi xa kudalwa indawo entsha kumamkeli omele athathwe njengedomeyini yendawo nganye. Ukuba umamkeli yidomeyini ephambili yenethiwekhi, okanye yenye yeedomeyini zesiseko zefomu ye-checkout ekwabelwana ngazo ezilungiselelwe kwindawo ethi **Site URL**, irekhodi ledomeyini elimephiweyo elizenzekelayo liyatsitywa ukuze loo domeyini yesiseko ekwabelwana ngayo ihlale ifumaneka kuyo yonke indawo eyisebenzisayo.

Xa umthengi ebhalisa idomeyini entsha nge-Domain Seller v1.3.0 okanye entsha, Ultimate Multisite imephu ngokuzenzekelayo idomeyini ebhalisiweyo kwindawo yenethiwekhi yomthengi ngokungagqibekanga. Abalawuli abasadingi ukongeza irekhodi ledomeyini elimephiweyo elahlukileyo emva kobhaliso oluphumeleleyo ngaphandle kokuba bafuna ukulungisa iinketho ezifana neflegi yedomeyini ephambili, imeko yokuvula, okanye ukuphathwa kwe-SSL.

**Inqanaba** okanye imeko kufuneka itshintshe ukusuka ku-**Kujongwa i-DNS** iye ku-**Ilungile** ukuba yonke into imiselwe ngokufanelekileyo.

<!-- Umfanekiso-skrini awufumaneki: Umqolo wedomeyini obonisa inqanaba elithi Kujongwa i-DNS kuluhlu lweedomeyini -->

<!-- Umfanekiso-skrini awufumaneki: Umqolo wedomeyini obonisa inqanaba elithi Ilungile ngesalathisi semeko esiluhlaza -->

Ukuba ucofa kwigama ledomeyini, uya kukwazi ukubona ezinye iinketho ngaphakathi kwayo. Masizijonge ngokukhawuleza:

![Iphepha leenkcukacha zedomeyini elinamaqhosha okutshintsha inqanaba, indawo, esebenzayo, ephambili kunye ne-SSL](/img/admin/domain-edit.png)

**Inqanaba:** Eli linqanaba idomeyini ekulo. Xa uqala ukongeza idomeyini, mhlawumbi iya kuba kwinqanaba elithi **Kujongwa i-DNS**. Inkqubo iya kujonga amangeniso e-DNS ize iqinisekise ukuba achanekile. Emva koko, idomeyini iya kubekwa kwinqanaba elithi **Kujongwa i-SSL**. Ultimate Multisite iya kujonga ukuba idomeyini ine-SSL okanye ayinayo ize ihlele idomeyini yakho njenge-**Ilungile** okanye **Ilungile (ngaphandle kwe-SSL)**.

**Indawo:** I-subdomain enxulumene nale domeyini. Idomeyini emefiweyo iya kubonisa umxholo wale ndawo ikhethekileyo.

**Iyasebenza:** Ungayivula okanye uyicime le nketho ukuze uvule okanye uvale idomeyini.

**Ngaba yiDomeyini Ephambili?:** Abathengi bakho banokuba nedomeyini engaphezulu kwenye emefiweyo kwindawo nganye. Sebenzisa le nketho ukukhetha ukuba le yidomeyini ephambili yale ndawo ikhethekileyo na.

**Ikhuselekile?:** Nangona Ultimate Multisite ijonga ukuba idomeyini inesatifikethi se-SSL okanye ayinaso ngaphambi kokuyivumela, ungakhetha ngesandla ukulayisha idomeyini ngesatifikethi se-SSL okanye ngaphandle kwaso. Qaphela ukuba ukuba iwebhusayithi ayinasatifikethi se-SSL kwaye uzama ukuyinyanzela ukuba ilayishe nge-SSL, inokukunika iimpazamo.

### Ukumefisha igama ledomeyini elilungiselelweyo njengomsebenzisi wendawo engaphantsi

Abalawuli beendawo ezingaphantsi banokumefisha amagama eedomeyini alungiselelweyo ukusuka kwi-dashboard yolawulo lwendawo yabo engaphantsi.

Okokuqala, kufuneka uqinisekise ukuba uyayivula le nketho phantsi kwezicwangciso ze-**Domain mapping**. Jonga umfanekiso-skrini ongezantsi.

<!-- Umfanekiso-skrini awufumaneki: Izicwangciso ze-Domain mapping ezivumela abasebenzisi beendawo ezingaphantsi ukuba bamefishe iedomeyini ngeqhosha lokutshintsha le-Customer DNS Management -->

Ungayiseta okanye uyilungiselele le nketho phantsi kwenqanaba le-**Isicwangciso** okanye iinketho zemveliso ku-**Ultimate Multisite > Iimveliso**.

![Icandelo leeDomeyini eziLungiselelweyo kwiphepha lokuhlela imveliso](/img/config/product-custom-domains.png)

Xa nayiphi na kwezo nketho ivuliwe kwaye umsebenzisi wendawo engaphantsi evunyelwe ukumefisha amagama eedomeyini alungiselelweyo, umsebenzisi wendawo engaphantsi kufuneka abone i-metabox phantsi kwephepha le-**Account** ebizwa ngokuba **IiDomeyini**.

<!-- Umfanekiso-skrini awufumaneki: I-metabox yeeDomeyini kwiphepha le-Account lendawo engaphantsi eneqhosha elithi Yongeza iDomeyini -->

Umsebenzisi angacofa iqhosha elithi **Yongeza iDomeyini** kwaye liya kuveza ifestile ye-modal enezinye izikhokelo.

<!-- Umfanekiso-skrini awufumaneki: I-modal ethi Yongeza iDomeyini ebonisa imiyalelo yerekhodi ye-DNS A kubasebenzisi beendawo ezingaphantsi -->

Umsebenzisi angacofa emva koko **Inyathelo Elilandelayo** aze aqhubeke nokongeza igama ledomeyini elilungiselelweyo. Banokukhetha nokuba le iya kuba yidomeyini ephambili okanye hayi.

<!-- Umfanekiso-skrini awufumaneki: Ifomu ethi Yongeza iDomeyini enendawo yegama ledomeyini elilungiselelweyo kunye neqhosha lokutshintsha idomeyini ephambili -->

<!-- Umfanekiso-skrini awufumaneki: Inyathelo lokuqinisekisa elithi Yongeza iDomeyini eliqalisa ukuqinisekiswa kwe-DNS -->

Ukucofa ku-**Yongeza iDomeyini** kuya kuqalisa inkqubo yokuqinisekisa nokuzisa ulwazi lwe-DNS lwedomeyini elilungiselelweyo.

### Malunga nokuNgqamanisa iiDomeyini

UkuNgqamanisa iiDomeyini yinkqubo apho Ultimate Multisite yongeza igama ledomeyini elilungiselelweyo kwi-akhawunti yakho yokusingatha njengedomeyini eyongeziweyo **ukuze i-domain mapping isebenze**.

Uku-ngqamanisa idomeyini kwenzeka ngokuzenzekelayo ukuba umboneleli wakho wokusingatha unodibaniso nenqaku le-domain mapping le-Ultimate Multisite. Okwangoku, aba baboneleli bokusingatha ngu-_Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ kunye _Cpanel._

Xa udibaniso lomboneleli wokusingatha lusebenza, Ultimate Multisite inokufaka emgceni umsebenzi wokudalwa kwe-DNS okanye i-subdomain kwicala lomboneleli kwiindawo ezisanda kudalwa. Ukuba akukho ludibaniso luphulaphule loo msebenzi, umsebenzi wangasemva uyatsitywa ukuphepha amangeniso omgca angenzi nto. Uvavanyo lwe-DNS kunye ne-SSL kwiidomeyini ezimefiiweyo luyaqhubeka lusebenza ngenkqubo yesiqhelo yenqanaba ledomeyini.

Kuya kufuneka uvule olu didaniso kwizicwangciso ze-Ultimate Multisite phantsi kwethebhu ye-**Integration**.

![Ithebhu ye-Integrations kwizicwangciso ze-Ultimate Multisite ebonisa ababoneleli bokusingatha](/img/config/integrations-tab.png)

<!-- Umfanekiso-skrini awufumaneki: Amakhonkco oLungiselelo lomboneleli wokusingatha kwithebhu yezicwangciso ze-Integrations -->

_Qaphela ukuba ukuba umboneleli wakho wokusingatha akangomnye wabo baboneleli bakhankanywe ngasentla,**kuya kufuneka ungqamanise ngesandla okanye wongeze igama ledomeyini** kwi-akhawunti yakho yokusingatha._
