---
title: Waa maxay WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Maxafka Multisite waa maxay?

WordPress-ka aasaasiga ah, waxaa jira oo loo yaqaano "Multisite" (Waddan-site), kaas oo ka soo bilaabo sanadkii 2010 markii la bilaabay WordPress 3.0. Inta badan, waxa uu la qaaday hagaajinro badan si loogu daro astaamo cusub iyo si loo xoojiyo amniga.

Si kooban, Multisite-ka WordPress waxaa loo arki kara sida kan: Jaamacadda waxay hayso saddex-dhowr installation oo WordPress ah, laakiin kasta oo xafiis (faculty) uu leeyahay website-kiisa WordPress gaarka ah.

##

## Maxay Tahay Si Gaaban Multisite-ka WordPress?

Multisite waa astaamaha WordPress ee u oggolaanaya in meel badan oo website lahayd ay wadaagaan installation kaliya oo WordPress ah. Marka aad furto multisite, installation-ka asalka ah ee WordPress waxaa loo beddelayaa si uu taageero waxa caadiga ah loo tixgeliyaa **"shabakad websites" (network of sites)**.

Shabakaddaani waxay wadaagaan faylasha nidaamka faylasha (taas macnaheedu waa **plugins iyo themes-ka sidoo kale ayaa la wadaaga**), database-ka, faylasha asalka ah ee WordPress, wp-config.php, iwm.

Tani waxay ka dhigan tahay in waxa la cusboonaysiiyo WordPress, theme-yada, iyo plugins-ka laga sameeyo kaliya mar kaliya oo ay ku jiraan dhammaan websites-ka labada meelood (network sites) sababtoo ah waxay wadaagaan faylasha isku midka ah nidaamka faylasha.

Ficilkan waa faa'iidada ugu weyn ee multisite, sababtoo ah waxay kuu oggolaaneysaa inaad kordhiso tirada websites-ka aad maamulayso inta badan adiga oo weli ilaalinaysa tirada shaqooyinka aad u baahan tahay inaad qabato si aad u ilaasho websites-ka macaamiishaada.

##

## Subdomain mise Subdirectory?

Waxaa jira laba hab oo lagu fuliyo Multisite WordPress – waxaadna dooranaysaa mid ka mid ah marka aad ka beddesho installation-ka WordPress-kaaga caadiga ah si uu u noqdo multisite:

**Subdomain:** tusaale: [site.domain.com](http://site.domain.com)

…ama

**Subdirectory:** tusaale: [yourdomain.com/site](http://yourdomain.com/site)

Labada habbaas ayaa leh faa'iidooyin iyo dhibaatooyin aad u baahan inaad ka fekto si aad go'aansho samayso.

Waxaa muhiim ah in la ogaado hal shay: marka aad go'aansato, isbeddelka shabakadahaaga oo ka guur sub-directory ama subdomain ama ka dibna waa mid aad u adag – gaar ahaan haddii aad horeyso samaysay qaar ka mid ah meelaha.

Ka hor intaadan go'aankaas qaadan, halkan waxaa ku jira dhow qodob oo aad ka xasuusato:

**Subdirectory Mode (Habka Sub-directory)** waa habka ugu fudud ee arrimaha aasaaska iyo wax-soo-saarka ah. Tani waxay sabab u tahay in dhammaan meelaha ay yihiin kaliya waddo (paths) la xiriira domain-ka koowaad (tusaale: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Natiijada ah, waxaad u baahan tahay **hal SSL certificate** oo loogu talagalay domain-ka koowaad, taasoo daboolaysa dhammaan shabakadda.

Isla mar, sababtoo ah qaab dhismeedka URL-ka (URL structure), Google iyo inta badan search engines kale waxay arki doonaan dhammaan meelaha subsite-ka ah ee shabakadtaada oo ku tiirsan subdirectory-ga ah inay yihiin mid hal weyn. Natiijada ah, waxa lagu daro content-ka meelaha subsite-ka ah ay macaamiishaadu ku dari karaan waxay saameyn karaan performance-ka SEO ee website-kaaga ugu muhiimsan (landing site), tusaale ahaan. Heerka saamaynta waa mid la kala qaadan karaa, waxaana jira dood ah in arrintan ay laga yaabo inay faa'iido u geysato performance-ka SEO.

**Subdomain Mode (Habka Subdomain)** wuxuu ka adag yahay aasaaska, laakiin qaab dhismeedka URL-kiisa (tusaale: [subsite.yournetwork.com](http://subsite.yournetwork.com)) inta badan waxaa loo arkaa inuu "si fiican u eego" ama "professional" oo ka duwan.

Halistaarada ugu weyn ee ku la socda habka subdomain mode waa helitaanka SSL (HTTPS) oo lagu daboolo dhammaan shabakadda. Waa sababta browser-yadu waxay u arkaan subdomains inay yihiin hay'ad kala go'an. Natiijada ah, waxaad u baahan doontid shahaado SSL oo kala duwan oo ku ah subdomain kasta oo ku jira shabkaddaada, ama nooc gaar ah oo la yiraahdo **Wildcard SSL certificate**. Inta badan sano ee la soo dhaafay, bixiyeya hosting-ka iyo panels-ka ayaa horumarinaya waxyaabaha SSL-ka laga bixiyo, kuwaas oo qaar waxay bixiyaan wildcards certificates iyadoo hal guji la sameeyo, taasoo xiraysa dhibaatada u dhexeysa labada hab ee ku saabsan adigaa samaynaya.

In kantiina habka subdirectory mode, subsites-ka ku jira shabakadaha ku salaysan subdomain waxaa aragti suuqgeynta (search engines) inay yihiin website-yo kala duwan, taasoo macnaheedu yahay in wax kasta oo ku jiro subsite hal ma saameeyo performance-ka SEO ee subsites kale.

## Super Admin

Waxaa jira install-ka WordPress ee hal website ah oo kuu oggolaanaya inaad ku dari karto isticmaalaya (users) aan la xaddidan oo aad siin karto kuwaas doorashooyin isbeddel ah oo u kala duwan (user roles) iyo fursado kala duwan.

In WordPress Multisite, nooc cusub oo isticmaalaya ayaa la furaya: **super admin** – iyo dashboard-ka maamulka cusub ee la furaya: **network admin panel**.

Sida magaca uu ula yahay, super admin wuxuu leeyahay awoodyo weyn oo ku saabsan shabkadda, isagoo awood u leh inuu maamulo dhammaan subsites-ka, plugins-yada, themes-ka, wax kasta!

Marka aad ka beddesho install-ka WordPress ee hal website ah oo loo yaqaan multisite, admin-ka asalka ah ee website-ka halga ah ayaa si toos ah u qaadaya super admin.

Plugins iyo themes-ka waxaa kaliya la soo saari karo ama la ka saari karaa network admin panel-ka iyadoo la isticmaalayo super admins. Admin-ka subsite-ka waxay dooran karaan inay furayaan (activate) ama ka xirayaan (deactivate) plugins-ka ama themes-kaas haddii aan super admin-ku shabkadda oo dhan ku furayn plugin, taasoo xoogga saartay inuu mar walba yahay mid la furmay dhammaan subsites-ka.

_Fadlan: sida aad u soo martiiso qofka shabakadahaaga oo aad siinayso mustaqbalka super admin, waxay siisaa isticmaalayaashaada xakamaynta buuxda shabakaddaada. Sida tusaale, kuwa kale ee super admin-ka ayaa lagaa ka saari karin mustaqbalka super admin-kaaga, taasoo si waxtar leh u xiraysa inaad ka fogaato dashboard-ka maamulka shabkaddaada. Si aan u oggolaano macaamiisha Ultimate Multisite inay helaan xakamayn faahfaahsan oo ku saabsan waxa super admin-yada kale ay samayn karaan, waxaan leenahay add-on la yiraahdo Support Agents. Add-onkan wuxuu kuu oggolaanayaa inaad samayso nooc kale oo isticmaalayaal ah – agent – iyadoo la siinayo hakan kuwo uusan helin in ay qabta ay u baahan yihiin inay fuliyaan hawlaha ay shabkadda ka shaqeeyaan._

## Waa maxay waxa wadaagga ah ee subsites-ka iyo waxa aan la wadaagin

Sida hore ayaanu sheegnay, faa'iidada ugu weyn ee WordPress multisite waa in dhammaan subsites-yadu ay wadaagaan isku midka ah qaabinta (configurations), faylasha muhiimka ah (core files), themes, plugins, faylasha asalka ah ee WordPress, iwm.

Si kastaba ha ahaatee, waxaa jira qaybo si qurux badan loo kala saaray iyadoo la tixgelin subsite kasta.

- Tusaale ahaan, subsite kasta wuxuu leeyahay folder-kiisa gaarka ah ee faylasha la soo galiyay (uploads folder). Natiijada ah, waxa ay isticmaalayaashu subsite gaar ah ayaa samayn kara waxayna ku heli karaan subsite kale.

- Subsite kasta wuxuu leeyahay dashboard-kiisa maamulka gaarka ah (dedicated admin panel) oo isbeddelka ama xiritaanka plugins-ka ama themes-ka, haddii aan la shaqayn super admin-ka shabkadda.

- Inta badan database tables-ka waxaa loo abuuraa subsite kasta, taasoo macnaheedu yahay in posts, comments, pages, settings, iwm ay si gaar ah u kala saaran yihiin subsite kasta.

## Maamulka isticmaalayaasha WordPress Multisite

Mawduuca aad u daciifka ah ee WordPress multisite waa maamulka isticmaalayaasha (user management). Dashboard-kaistada WordPress (WordPress user table) waa mid ka mid ah kuwa yar ee la wadaaggaa dhammaan subsites.

Qaabkan wuxuu keeni karaa dhibaatooyin iyadoo ku xiran waxa aad qorsheysid inaad samayso shabkaddaada. Tusaalah hoose ayaa caawinaya in la muujiyo midka ugu waaweyn ee ay tahay.

Ka fariinaga dhig tan:

Waxaad samaynaysaa shabakad WordPress multisite oo aad bilaawdo inaad u bixisid meelaha yar (subsites) ku bixinta bil kasta oo dadka raba inay lahayd dukaan e-commerce.

Waxaad heli lahayd macmiilkaaga ugu horreeya – John. Waxaad samaynaysaa website loogu talagalay John shabakaddaada, waxaadna ku rakibtaa dhammaan plugins-ka loo baahan yahay, ka dibna waxaad abuurtid user (isticmaalayaal) oo uu John isticmaali karo si uu maamulo dukaan-kiisa.

Markaas soo socotaa macmiilka labaad – Alice. Waxaad samaynaysaa isku mid ah sidaas iyada, hadda waxay leedahay dukaan ku jira shabakaddaada sidoo kale.

John iyo Alice labaduba waa macmiiladaada, laakiin ma ogaadaan hal-abuurka. Waxay ka hor imaan kartaan in midkood uu booqdo website-ka dukaan-kiisa midka kale, mana heli karo sida loo ogaado in dukaan-kan lagu host yahay shabakad isku mid ah.

Maalin maalmaha ka mid ah, John wuxuu u baahan yahay inuu iibsado koob cusub oo uu ka helayo dukaan-kiisa Alice. Marka uu isku dayayo inuu dhammaystiro iibka, wuxuu helayaa farriin "email horey u isticmaalaysay" (email already in use), taas oo ah wax aan caadi ahayn maadaama John 100% la hub yahay in tani ay tahay markii ugu horreysay uu booqday website-ka Alice.

Waxa dhacay waa in isticmaalka John-ka lagu wadaagayo dhammaan shabkadda (network) oo marka uu isku dayo inuu abuuro account si uu u dhammaystiro iibka dukaan-ka Alice, WordPress wuxuu ogaa in user la mid ah email-kaas hore u jiro oo wuxuu soo saari doonaa error.

_Fadlan ogow: Waxaan fahannaa sida ay tani u kugu xun tahay iyadoo ku xiran macmiilkaaga, sidaas darteed Ultimate Multisite waxay leedahay dooro (option) oo ka gudbaysa baaritaannada caadiga ah ee isticmaalayaasha jira si loo oggolaado in la abuuro account badan iyadoo la isticmaalayo email-ka isku midka ah. Account kasta waxaa lagu xiran subsite gaar ah, sidaas darteed halista isku dhaca (collision) ayaa la yareynaya inta ugu yar. Tusaalaha korantii, John ma helin doono farriin error ah oo wuxuu awoodi doonaa inuu iibsado koobkaas iyadoo aan dhibaato la lahayn. Doorashadaas waxaa loo yaqaanaa Enable Multiple Accounts (Farsamada Account-yada Badan), waxaana lagu fulin karaa Ultimate Multisite → Settings → Login & Registration._

In kasta ah in kastoo laba-galka isticmaaluhu ay la wadaagaan, dadka ayaa lagu dari karaa ama laga saari karaa subsites-yada oo ay admins-ka subsite-yada ama super admin-ku samayn karaan, sidoo kale waxay leeyihiin doorashooyin isticmaaliye (user roles) kala duwan oo ku jira subsites kala duwan.

## Tixgelinta waxqabadka (Performance considerations)

WordPress multisite waa mid aad u xooggan marka la eego tirada websites-ka ay taageeri karaan. Waxaa lagu hubin karaa arrintan sababtoo ah [WordPress.com](https://WordPress.com), Edublogs, iyo Campuspress waxay dhammaantood yihiin adeegyo ku salaysan multisite, oo ay barnaamij kasta ka qabsado boqolkiyo websites.

In koobka aasaasiga ah (theory) ma jiro tirada ugu badan ee websites-ka aad samayn karto installation kaliya oo WordPress multisite ah, laakiin haddii la tixgeliyo sida ay u shaqeeyaan si taxaddar leh, inta badan tirada websites-ka aad si wanaagsan u fulin karto waxay ku kala duwanaan kartaa sababta badan: sida ay isbeddel badan yihiin (dynamic), noocyada plugins-ka ee la heli karo subsites-yada, iwm.

Sida caado guud ah, inta aad fudud tahay shabakadahaaga, inta ay wanaagsan yihiin. Siyaarsii websites-ka halka macluumaadka aysan si weyn isbeddel u sameyn (tani waxay ka dhigaysaa inay yihiin fursado fiican oo loo isticmaalo hababka caching ee xooggan) iyo in la ilaaliyo stack-ga plugins-ka sida ugu fudud ee suurtagalka ah (inta ay yar tahay tirada plugins-ka firfircoon ee aad leedahay waa wanaagsan), waxay si weyn u kordhin kartaa tirada subsites-yada aad samayn karto.

Qaybta ugu fiican waa in sababtoo ah dhammaantood waa WordPress, sidaas darteed qalabka aad hore u aqoon karto oo aad jeceshahay ee hagaajinta waxqabadka (performance improvements) waxay si la mid ah u shaqayn doonaan shabakad multisite.

Cilladda ugu weyn ee multisite waa database-ka, laakiin haddii dhammaan waxyaabaha kale si sax ah loo habeeyay, waxay qaadi kartaa kooban laba kun website ka hor intaadan u baahnayn inaad ka walwalato. Xitaas, waxaa jira xalalka oo laga dari karaa si tartiib ah intaasi ay sii kordhayaan (sida xalalka database sharding-ka), tusaale ahaan.
