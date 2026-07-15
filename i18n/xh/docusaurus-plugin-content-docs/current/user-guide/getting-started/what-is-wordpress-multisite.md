---
title: Yintoni i-WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Yintoni i-WordPress Multisite?

Embindini wayo, i-WordPress inika uphawu olubizwa ngokuba yi-‘Multisite’ olusuka kwimvelaphi yalo ngo-2010 ekukhululweni kwe-WordPress 3.0. Ukususela ngoko ifumene uhlaziyo oluninzi olujolise ekungeniseni iimpawu ezintsha nasekuqiniseni ukhuseleko.

Ngokuyintloko, i-WordPress multisite inokucingwa ngolu hlobo: Iyunivesithi igcina ukufakelwa okukodwa kwe-WordPress kodwa ifakhalthi nganye igcina isiza sayo se-WordPress.

##

## Yintoni kanye kanye i-WordPress Multisite? {#what-exactly-is-wordpress-multisite}

I-Multisite luphawu lwe-WordPress oluvumela iziza ezininzi ukuba zabelane ngokufakelwa okukodwa kwe-WordPress. Xa i-multisite ivuliwe, isiza sokuqala se-WordPress siguqulelwa ukuxhasa oko kudla ngokubizwa ngokuba **yinethiwekhi yeziza**.

Le nethiwekhi yabelana ngenkqubo yeefayile (oko kuthetha ukuba **ii-plugin kunye nee-theme nazo ziyabelwana**), isiseko sedatha, iifayile ezingundoqo ze-WordPress, i-wp-config.php, njl.

Oku kuthetha ukuba uhlaziyo lwe-WordPress, lwe-theme, nolwe-plugin kufuneka lwenziwe kube kanye kuphela kuzo zonke iziza zenethiwekhi yakho kuba zabelana ngeefayile ezifanayo kwinkqubo yeefayile.

Le nyaniso yenye yeenzuzo eziphambili ze-multisite, kuba ikuvumela ukuba ukhulise inani leziza ozilawulayo ngelixa ugcina inani lemisebenzi ekufuneka uyenzile ukuze ugcine iziza zabathengi bakho lingatshintshi.

##

## Subdomain okanye Subdirectory? {#subdomain-or-subdirectory}

Kukho iindlela ezimbini zokusebenzisa i-WordPress multisite – kwaye kufuneka ukhethe enye xa uguqula ukufakelwa kwakho okuqhelekileyo kwe-WordPress kube kukufakelwa kwe-multisite:

**Subdomain:** umz.: [site.domain.com](http://site.domain.com)

…okanye

**Subdirectory:** umz.: [yourdomain.com/site](http://yourdomain.com/site)

Indlela nganye ineenzuzo nezinto ezingeloncedo ekufuneka uzithathele ingqalelo xa usenza esi sigqibo.

Nangona kunjalo, kukho into enye ebalulekileyo ekufuneka iqatshelwe: xa sele usenze isigqibo sakho, ukutshintsha inethiwekhi yakho ukusuka kwi-subdirectory ukuya kwi-subdomain okanye ngokuchaseneyo kunzima kakhulu – ngakumbi ukuba sele uneziza ezimbalwa ezenziweyo.

Ngaphambi kokwenza eso sigqibo, nanga amanqaku ambalwa ekufuneka uwagcine engqondweni:

**Imo ye-Subdirectory** yeyona ndlela ilula ngokokumisela nokugcina. Oku kwenzeka kuba zonke iziza ziindlela nje ezincanyathiselwe kwidomain ephambili (umz. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Ngenxa yoko, ufuna kuphela **isiqinisekiso esinye se-SSL** sedomain ephambili kwaye eso siya kugubungela inethiwekhi yonke.

Kwangaxeshanye, ngenxa yesakhiwo sayo se-URL, uGoogle kunye nezinye ii-injini zokukhangela ezininzi ziya kuthatha zonke iziza ezingaphantsi kwinethiwekhi yakho esekelwe kwi-subdirectory njengeziza esinye esikhulu. Ngenxa yoko, umxholo owongezwe kwiziza ezingaphantsi ngabathengi bakho bokugqibela unokuchaphazela ukusebenza kwe-SEO kwesiza sakho sokufikela, umzekelo. Inqanaba lempembelelo liyaxoxeka kwaye kukho ingxoxo enokwenziwa yokuba ukuba nolungiselelo olunjalo kunokuba luncedo nakukusebenza kwe-SEO.

**Imo ye-Subdomain** inzima kancinci ukuyimisa, kodwa isakhiwo sayo se-URL (umz. [subsite.yournetwork.com](http://subsite.yournetwork.com)) ngokubanzi sithathwa njengokujongeka “ngobungcali ngakumbi”.

Omnye wemingeni ephambili ekumiseni imo ye-subdomain kukugubungela kwe-SSL (HTTPS) kwinethiwekhi yonke. Oku kusekelwe kwinyani yokuba iibrawuza zithatha ii-subdomain njengezinto ezizimeleyo. Ngenxa yoko, uya kufuna isiqinisekiso se-SSL esahlukileyo kwi-subdomain nganye kwinethiwekhi yakho, okanye uhlobo olukhethekileyo lwesiqinisekiso olubizwa ngokuba **sisiqinisekiso se-Wildcard SSL**. Kwiminyaka yakutshanje, ababoneleli bokusingatha kunye neepaneli bayaphucula kumba wokubonelela nge-SSL kwaye abanye banikezela ngeziqinisekiso ze-wildcard ngokucofa iqhosha, bevala umsantsa phakathi kweendlela ezimbini ngokobunzima bokuyimisa.

Ngokuchaseneyo nemo ye-subdirectory, iziza ezingaphantsi kwinethiwekhi esekelwe kwi-subdomain zithathwa zii-injini zokukhangela njengeewebhusayithi ezahlukileyo, nto leyo ethetha ukuba umxholo okhoyo kwisiza esinye esingaphantsi awuphazamisi konke konke ukusebenza kwe-SEO kwezinye iziza ezingaphantsi.

## I-Super Admin {#the-super-admin}

Ukufakelwa kwe-WordPress kwesiza esinye kukuvumela ukuba wongeze inani elingenamda labasebenzisi kwaye unike abo basebenzisi iindima ezahlukeneyo zabasebenzisi ezineemvume ezahlukeneyo.

Kwi-WordPress Multisite, uhlobo olutsha lomsebenzisi luyavuleka: **i-super admin** – kwaye ipaneli entsha yolawulo iyavuleka: **ipaneli yolawulo yenethiwekhi**.

Njengoko igama libonisa, i-super admin inamandla amakhulu phezu kwenethiwekhi, ikwazi ukulawula zonke iziza zayo ezingaphantsi, ii-plugin, ii-theme, yonke into!

Xa sele uguqule ukufakelwa kwakho kwe-WordPress kwesiza esinye kube yi-multisite, umlawuli wokuqala wesiza esinye uya kunyuselwa ngokuzenzekelayo abe yi-super admin.

Ii-plugin kunye nee-theme zinokufakwa okanye zisuswe kuphela kwipaneli yolawulo yenethiwekhi ngoo-super admin. Abalawuli beziza ezingaphantsi banokukhetha emva koko ukuvula okanye ukuvala ezo plugin okanye ezo theme ngaphandle kokuba i-super admin ivule i-plugin kwinqanaba lenethiwekhi, nto leyo eyinyanzela ukuba ihlale ivuliwe kuzo zonke iziza ezingaphantsi ngalo lonke ixesha.

_Qaphela: njengoko ubona, ukumema umntu kwinethiwekhi yakho nokumnika isimo se-super admin kunika lo msebenzisi ulawulo olupheleleyo kwinethiwekhi yakho. Njengomzekelo, abanye oo-super admin banokude basuse isimo sakho se-super admin, nto leyo ekukuvalela ngaphandle ngokusebenzayo kwipaneli yakho yolawulo yenethiwekhi. Ukuze kuvunyelwe abathengi be-Ultimate Multisite ukuba babe nolawulo oluneenkcukacha koko oo-super admin abongezelelweyo abanokukwenza, sine-add-on ebizwa ngokuba yi-Support Agents. Le add-on ikuvumela ukuba wenze olunye uhlobo lomsebenzisi – i-agent – eneemvume kuphela abanokuzifuna ukuze benze imisebenzi yabo kwinethiwekhi._

## Yintoni ekwabelwana ngayo phakathi kweziza ezingaphantsi kwaye yintoni engabelwana ngayo {#what-is-shared-among-subsites-and-what-is-not}

Njengoko besitshilo ngaphambili, enye yeenzuzo eziphambili ze-WordPress multisite kukuba zonke iziza ezingaphantsi zabelana ngezicwangciso ezifanayo, iifayile ezingundoqo, ii-theme, ii-plugin, iifayile ezingundoqo ze-WordPress, njl.

Nangona kunjalo, kukho izinto ezimiswe kakuhle ngokwahlukeneyo ngokwesiza ngasinye esingaphantsi.

\- Umzekelo, isiza ngasinye esingaphantsi sifumana ifolda yaso yokulayisha. Ngenxa yoko, okulayishwe ngabasebenzisi besiza esinye esithile esingaphantsi akunakufikelelwa kwesinye isiza esingaphantsi.

\- Isiza ngasinye esingaphantsi sinepaneli yaso yolawulo ezinikeleyo kwaye sinokuvula okanye sivale ii-plugin okanye ii-theme ngaphandle kokuba zenziwe zasebenza kwinqanaba lenethiwekhi yi-super admin.

\- Uninzi lweetheyibhile zedatabase zenziwa kwisubsite nganye, okuthetha ukuba iiposti, izimvo, amaphepha, iisetingi, nokunye zibekelwa umda kwisubsite nganye.

## Ulawulo lwabasebenzisi kwi-WordPress Multisite {#user-management-on-wordpress-multisite}

Umxholo obuthathaka kwi-WordPress multisite lulawulo lwabasebenzisi. Itheyibhile yabasebenzisi ye-WordPress yenye yezimbalwa ekwabelwana ngayo phakathi kwazo zonke ii-subsite.

Olu lungiselelo lunokudala iingxaki ezithile kuxhomekeke koko uceba ukukwakha ngenethiwekhi yakho. Umzekelo ongezantsi unceda ukubonisa eyona nto icinezelayo.

Khawube nomfanekiso wale meko ilandelayo:

Udala inethiwekhi ye-WordPress multisite kwaye uqala ukunikezela ngee-subsite ngentlawulo yenyanga kubantu abafuna ukuba nevenkile ye-e-commerce.

Ufumana umthengi wakho wokuqala ohlawulayo – uJohn. Udalela uJohn isayithi kwinethiwekhi yakho, ufake zonke ii-plugin eziyimfuneko, uze udale umsebenzisi kaJohn ukuze akwazi ukulawula ivenkile yakhe.

Emva koko kufika umthengi wesibini – uAlice. Wenza into efanayo kuye kwaye ngoku naye unayo ivenkile kwinethiwekhi yakho.

UJohn noAlice bobabini ngabathengi bakho, kodwa abazani. Okubaluleke ngakumbi, ukuba omnye wabo utyelela iwebhusayithi yevenkile yomnye, akukho ndlela yokwazi ukuba le venkile ibanjwe kwinethiwekhi enye yeesayithi.

Ngenye imini, uJohn ufuna ukuthenga ipere entsha yezihlangu kwaye ufumana ezifanelekileyo kwivenkile kaAlice. Xa ezama ukugqibezela ukuthenga, ufumana umyalezo wempazamo othi “email already in use”, nto leyo engaqhelekanga kuba uJohn uqinisekile nge-100% ukuba eli lixesha lokuqala akhe watyelela iwebhusayithi kaAlice.

Into eyenzekileyo apha kukuba umsebenzisi kaJohn kwabelwana ngaye kuyo yonke inethiwekhi, ngoko xa ezama ukudala i-akhawunti ukuze enze i-checkout kwisayithi kaAlice, i-WordPress iya kufumanisa ukuba umsebenzisi onedilesi ye-imeyile efanayo sele ekhona kwaye iphose impazamo.

_Qaphela: Siyaqonda ukuba kubi kangakanani oko kunokuxhomekeka kwimeko yakho yokusebenzisa, ngoko Ultimate Multisite inokhetho oludlula iitsheki eziqhelekileyo zomsebenzisi osele ekhona, luvumela ukuba ii-akhawunti ezininzi zidalwe kusetyenziswa idilesi ye-imeyile efanayo. I-akhawunti nganye ibotshelelwe kwisubsite, ngoko umngcipheko wokungqubana ugcinwa usezantsi kangangoko. Kumzekelo ongentla, uJohn ebengayi kufumana umyalezo wempazamo kwaye ebeya kukwazi ukuthenga ezo zihlangu ngaphandle kwengxaki. Olu khetho lubizwa ngokuba yi-Enable Multiple Accounts, kwaye lunokuvulwa ku-Ultimate Multisite → Settings → Login & Registration._

Nangona itheyibhile yabasebenzisi kwabelwana ngayo, abasebenzisi banokongezwa kwi-subsite baze basuswe kuzo ngabaphathi bee-subsite okanye yi-super admin, kwaye banokuba neendima zabasebenzisi ezahlukeneyo kwii-subsite ezahlukeneyo.

## Iingqwalasela zentsebenzo {#performance-considerations}

I-WordPress multisite inamandla kakhulu xa kufikwa kwinani leesayithi enokuzixhasa. Oku kunokuvavanywa yinyaniso yokuba [WordPress.com](https://WordPress.com), Edublogs, kunye neCampuspress zonke ziinkonzo ezisekelwe kwi-multisite kwaye nganye ibamba amawaka eesayithi.

Nangona ngokwethiyori kungekho nani liphezulu leesayithi onokuzibamba kufakelo olunye lwe-WordPress multisite, ekusebenzeni inani leesayithi onokuzisebenzisa ngokwanelisayo linokwahluka kakhulu kuxhomekeke kwizinto ezininzi ezahlukeneyo: indlela iisayithi eziguquguquka ngayo, zeziphi ii-plugin ezifumanekayo kwii-subsite, njl.

Njengomgaqo jikelele, okukhona inethiwekhi yakho ilula, kokukhona kungcono. Ukukhetha iisayithi apho umxholo ungaguquguquki kakhulu (nto leyo ezenza zibe ngabagqatswa abalungileyo kwizicwangciso zokugcina kwi-cache ezinamandla) kunye nokugcina uluhlu lwee-plugin lulula kangangoko (okukhona inani lee-plugin ezisebenzayo lisezantsi kokukhona kungcono) kunokwandisa kakhulu inani lee-subsite onokuzibamba.

Eyona nto ilungileyo kukuba kuba yonke le nto iyi-WordPress apha, izixhobo ezifanayo osele uzazi kwaye uzithanda zokuphucula intsebenzo nazo ziya kusebenza kwinethiwekhi ye-multisite.

Eyona nto iphambili ethintelayo kwi-multisite yidatabase kodwa ukuba yonke enye into imiswe ngokuchanekileyo, inokuthatha amawaka ambalwa eesayithi phambi kokuba kufuneka ukhathazeke ngayo. Nangona kunjalo, kukho izisombululo ezinokongezwa ngokuthe ngcembe ngelo xesha (njengezisombululo zokwahlula idatabase, umzekelo).
