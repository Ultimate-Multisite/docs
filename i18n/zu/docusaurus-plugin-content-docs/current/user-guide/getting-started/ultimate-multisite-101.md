---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite iyi-WordPress Multisite plugin ekuvumela ukuthi unikeze i-WaaS noma Websites as a Service kumakhasimende. Ngaphambi kokuthi singene sijule futhi sifunde ukuthi Ultimate Multisite ingasiza kanjani ibhizinisi lakho namakhasimende, kunolwazi oluyisisekelo okudingeka siluthole.

## I-WordPress Multisite

Iningi lethu lijwayelene nokufakwa okujwayelekile kwe-WordPress. Uyikudala nge-control panel yomhlinzeki wakho wokusingatha noma, kwabanesibindi, usethe i-web server entsha ne-database, ulande amafayela ayisisekelo bese uqala inqubo yokufaka.

Lokhu kusebenza ezigidini zamasayithi e-WordPress emhlabeni wonke kodwa ngokombono we-agency noma umhlinzeki wokusingatha ake sixoxe ngamavolumu umzuzu.

Nakuba kulula ukudala isayithi elilodwa le-WordPress noma ngisho ikhulu nge-control panel ezenzakalelayo, izinkinga ziqala ukubonakala ngokushesha lapho sekufanele kuphathwe lawa masayithi. Uma eshiywa engaphathwa uba yisisulu esiyinhloko se-malware. Ukuphatha kusho umsebenzi womzamo nezinsiza futhi nakuba kukhona amathuluzi angaphandle nama-plugin atholakalayo ukusiza ukwenza ukuphathwa nokulawulwa kwamasayithi e-WordPress kube lula, iqiniso lokuthi amakhasimende agcina ukufinyelela kokuphatha lisho ukuthi le mizamo inganqotshwa kalula.

Emgogodleni wayo, WordPress inikeza isici esibizwa kalula ngokuthi ‘Multisite’ esilandela imvelaphi yaso emuva ku-2010 ngesikhathi kwethulwa WordPress 3.0. Kusukela lapho sesithole izibuyekezo eziningana ezihloselwe ukwethula izici ezintsha nokuqinisa ukuphepha.

Ngokuyisisekelo, i-WordPress multisite ingacatshangwa kanje: Inyuvesi igcina ukufakwa okukodwa kwe-WordPress kodwa ifakhalthi ngayinye igcina isayithi layo le-WordPress.

Ukuhlukanisa lesi sitatimende ake sibheke elinye lamagama ayisisekelo akhona hhayi kuphela emibhalweni ye-Ultimate Multisite kodwa futhi nasemphakathini we-WordPress.

### I-Network

Ngokwe-WordPress, i-multisite network yindawo lapho amasayithi angaphansi amaningi angaphathwa khona kusuka ku-dashboard eyodwa. Nakuba ukudala i-multisite network kwehluka phakathi kwabahlinzeki bokusingatha, umphumela wokugcina uvamise ukuba iziqondiso ezimbalwa ezengeziwe efayeleni le-wp-config.php ukwazisa WordPress ukuthi isebenza kule modi ethile.

Kunezinguquko ezihlukile eziningana phakathi kwe-multisite network nokufakwa kwe-WordPress okuzimele esizoxoxa ngazo kafushane.

#### Subdomain vs. Subdirectory

Esinye sezinqumo zokuqala ozodinga ukuzenza ukuthi ukufakwa kwe-multisite kuzosebenza ngama-_subdirectories_ noma ama-_subdomains_. Ultimate Multisite isebenza kahle ngokulinganayo ngazo zombili izinketho kodwa kunezinguquko ezithile zesakhiwo phakathi kwezilungiselelo ezimbili.

Ekulungiselelweni kwe-_subdirectory_, amasayithi e-network athola indlela esekelwe egameni lesizinda eliyinhloko. Isibonelo isayithi le-network elibhalwe ‘site1’ lizoba ne-URL yalo ephelele njenge-https://domain.com/site1. Ekulungiselelweni kwe-_subdomain_, isayithi le-network lizoba ne-_subdomain_ yalo etholakala egameni lesizinda eliyinhloko. Ngakho isayithi elibhalwe ‘site1’ lizoba ne-URL yalo ephelele njenge-https://site1.domain.com/.

Nakuba zombili izinketho ziyizinketho ezivumelekile ngokuphelele, ukusetshenziswa kwama-_subdomains_ kunikeza izinzuzo eziningana kodwa futhi kudinga ukucabanga nokuhlela okwengeziwe esakhiweni sakho.

Ngokwe-DNS ukusetshenziswa kwama-_subdirectories_ kuletha inselele elula ngokulinganiselwe. Njengoba amasayithi e-network eyizingane nje zendlela yomzali, kudingeka kube khona kuphela ukufakwa kwegama lesizinda okukodwa kwegama lesizinda eliyinhloko. Kuma-_subdomains_ inselele iyinkimbinkimbi kancane idinga noma ukufakwa kwe-CNAME okuhlukile kwesayithi ngalinye le-network noma ukufakwa kwe-wildcard (*) kumarekhodi e-DNS.

Enye indawo yokucatshangelwa yileyo ye-SSL nokukhishwa nokusetshenziswa kwezitifiketi ze-SSL. Ekulungiselelweni kwe-_subdirectory_ isitifiketi sesizinda esisodwa singasetshenziswa njengoba amasayithi e-network eyizindlela nje zegama lesizinda eliyinhloko. Ngakho isitifiketi se-domain.com sizohlinzeka ngokwanele nge-SSL ku-https://domain.com/site1, https://domain.com/site2 nokunye.

Ekulungiselelweni kwe-_subdomain_ ukusetshenziswa kwesitifiketi se-wildcard SSL kungenye yezinketho ezivame kakhulu. Lolu hlobo lwesitifiketi se-SSL lunikeza ukubethela kwesizinda nama-_subdomains_ aso. Ngakho-ke isitifiketi se-wildcard SSL sizohlinzeka ukubethela ku-https://site1.domain.com, https://site2.domain.com kanye ne-https://domain.com uqobo.

Nakuba ezinye izinketho zikhona, lezi zivame ukulinganiselwa ngobubanzi nokusetshenziswa futhi zidinga ukulungiselelwa okwengeziwe nokucatshangelwa maqondana nokufaneleka.

#### Ama-Plugin nama-Theme

Lokho WordPress ekupha khona iyakuphuca futhi, okungenani ngokombono wekhasimende. Ekufakweni kwe-WordPress okuzimele uma umphathi wesayithi efaka i-plugin embi noma ehluleka ukugcina ukufakwa kwakhe kusesikhathini, okuwukuphela kwesisulu nomonakalo walesi senzo nguye uqobo. Kodwa-ke, umphathi wesayithi ofaka i-plugin embi ekufakweni kwe-multisite udala isisulu sayo yonke isayithi efakiwe ku-network.

Ngalesi sizathu lapho ilungiselelwe njenge-multisite, WordPress isusa ikhono kubaphathi besayithi lokufaka ama-plugin nama-theme futhi esikhundleni salokho idlulisela leli khono endimeni entsha yomphathi we-network noma ‘super admin’. Le ndima enamalungelo ingabe isinma ukuthi ivumele yini abaphathi bamasayithi e-network ukuthi babone noma bafinyelele imenyu yama-plugin ku-dashboard yabo futhi, uma kunjalo, ukuthi lezo zimvume zinwebeka yini eku-_activating_ noma eku-_deactivating_ ama-plugin.

Kuleli zinga umphathi we-network unesibopho sokufaka ama-plugin nama-theme ku-network futhi udlulisela izimvume zokusebenzisa lawa ma-plugin nama-theme kumasayithi e-network. Abaphathi besayithi abakwazi ukufaka ama-plugin nama-theme noma ukufinyelela ama-plugin nama-theme angabelwe isayithi labo.

#### Abasebenzisi Nabaphathi

Ku-WordPress Multisite, wonke amasayithi e-network abelana nge-database efanayo ngakho abelana ngabasebenzisi abafanayo, izindima namakhono. Indlela efanele kakhulu yokukucabanga ukuthi bonke abasebenzisi bangamalungu e-network hhayi esayithi elithile.

Ngokwalokhu kuqonda kungase kungafiseleki ukuvumela abasebenzisi ukuthi badalwe, futhi ngenxa yalesi sizathu i-WordPress Multisite isusa leli khono kubaphathi besayithi ilidlulisele kumphathi wenethiwekhi. Ngokulandelayo umphathi wenethiwekhi angadlulisela amalungelo adingekayo kumphathi wesayithi ukuze amvumele ukuthi adale ama-akhawunti abasebenzisi esayithi lakhe.

<!-- Isithombe-skrini asitholakali: isixhumi esibonakalayo sokuphathwa kwabasebenzisi benethiwekhi ye-WordPress Multisite -->

Siphinda isitatimende esingenhla, nakuba ama-akhawunti abasebenzisi ebonakala ehlobene nesayithi, empeleni abelwe kunethiwekhi ngakho-ke kufanele abe yingqayizivele kuyo yonke inethiwekhi. Kungase kube nezimo lapho amagama abasebenzisi engatholakali ukuthi abhaliswe ngenxa yalesi sizathu.

Nakuba lokhu kungewona umqondo ongaziwa ezinhlelweni zamabhizinisi, lo mthombo owodwa wokubhaliswa nokuqinisekiswa kwabasebenzisi uvame ukuba umqondo onzima ukuwuqonda kubantu abajwayelene nokufakwa kwe-WordPress okuzimele lapho ukuphathwa kwabasebenzisi kulula kancane.

#### Imidiya

Lapho amasayithi enethiwekhi abelana ngesizindalwazi esisodwa ku-WordPress Multisite, agcina izindlela ezihlukene ohlelweni lwamafayela zamafayela emidiya.

Indawo ejwayelekile ye-WordPress (wp-content/uploads) iyasala; nokho, indlela yayo iyashintshwa ukuze ibonise i-ID eyingqayizivele yesayithi lenethiwekhi. Ngenxa yalokho amafayela emidiya esayithi lenethiwekhi avela njenge-wp-contents/uploads/site/[id].

#### Ama-Permalinks

Sishilo ngaphambilini ukuthi kunezinzuzo ezihlukile zokuhlelwa kwe-_subdomain_ kunokwe-_subdirectory_ futhi nakhu: izindlela.

Ekuhlelweni kwe-_subdirectory_, isayithi eliyinhloko (isayithi lokuqala elidalwa lapho inethiwekhi isungulwa) kanye namasayithi angaphansi kwenethiwekhi kufanele abelane ngendlela efanayo evela egameni lesizinda. Lokhu kungadala inani elikhulu lezingxabano.

Kokuthunyelwe, indlela eyimpoqo ethi /blog/ yengezwa kusayithi eliyinhloko ukuze kugwenywe ukushayisana namasayithi enethiwekhi. Lokhu kusho ukuthi ama-permalink amahle njenge-‘Post name’ azovezwa njenge-domain.name/blog/post-name/

<!-- Isithombe-skrini asitholakali: izilungiselelo ze-permalink ze-WordPress ezibonisa indlela ethi /blog/ ekuhlelweni kwe-subdirectory -->

Ekuhlelweni kwe-_subdomain_ lesi senzo asidingeki ngoba isayithi ngalinye lenethiwekhi lizuza ekuhlukanisweni okuphelele kwesizinda, ngakho akudingeki lithembele endleleni eyodwa. Kunalokho agcina izindlela zawo ezihlukile ezisekelwe ku-_subdomain_ yawo.

<!-- Isithombe-skrini asitholakali: izilungiselelo ze-permalink ze-WordPress zokuhlelwa kwe-subdomain -->

#### Amakhasi Angashintshi

Ekuhlelweni kwe-_subdirectory_ amathuba ezingxabano zamagama afinyelela nasemakhasini angashintshi njengoba isayithi eliyinhloko namasayithi enethiwekhi abelana ngendlela efanayo.

Ukuvimbela lokhu, i-WordPress inikeza indlela yokufaka ohlwini oluvinjelwe amagama athile amasayithi ukuze angangqubuzani namagama esayithi lokuqala. Ngokujwayelekile umphathi wenethiwekhi angafaka izindlela eziyisisekelo zamakhasi esayithi eliyinhloko.

<!-- Isithombe-skrini asitholakali: izilungiselelo zenethiwekhi ye-WordPress ezibonisa amagama amasayithi avinjelwe ukuvimbela izingxabano -->

Ekuhlelweni kwe-_subdomain_ amathuba ezingxabano zamagama ancishiswa yi-_subdomain_ njengoba iyingqayizivele kusayithi lenethiwekhi futhi ayihlobene nganoma iyiphi indlela nesayithi eliyinhloko.

### Ukubhalisa

Ngaphakathi kwezilungiselelo zenethiwekhi ze-WordPress Multisite kunezinketho ezintsha eziningana zokubhaliswa kwabasebenzisi ezitholakalayo, ezivumela abasebenzisi abasha nabakhona ukuthi badale amasayithi.

<!-- Isithombe-skrini asitholakali: izilungiselelo zenethiwekhi ye-WordPress Multisite ezibonisa izinketho zokubhalisa -->

Ngokungafani nokufakwa kwe-WordPress okuzimele, amasayithi enethiwekhi awagcini izinketho ezijwayelekile zokuvumela ukubhaliswa kwabasebenzisi noma ukwabela lezo zibhaliso izindima.

<!-- Isithombe-skrini asitholakali: izilungiselelo zokubhaliswa kwabasebenzisi zesayithi le-WordPress elizimele ezibonisa izinketho ezilinganiselwe -->

Lapho ama-akhawunti abasebenzisi edalwa, lawo ma-akhawunti akhiqizwa ezingeni lenethiwekhi. Ngakho-ke esikhundleni sokuba ngawesayithi elithile elilodwa, aba ngawenethiwekhi. Lokhu kunezinzuzo nokubi okuhlukile.

Isibonelo, ake sithi i-WordPress Multisite yakho ibisebhizinisini lezindaba nolwazi. Ubungasungula i-multisite bese udala amasayithi enethiwekhi ezezimali, ubuchwepheshe, ezokuzijabulisa nezinye izindawo ezithakaselwayo kuyilapho ugcina ukulawula okuphelele kwama-plugin nama-theme. Isayithi ngalinye lenethiwekhi nalo belizoba nezinga elikhulu kakhulu lokulawula ukubukeka nomuzwa kanye nolwazi lomsebenzisi wesayithi lalo lenethiwekhi kunalokho obekunganikezwa izinhlobo zokuthunyelwe ezenziwe ngokwezifiso noma izigaba ezivamile zokuthunyelwe.

Ngokwaleli zinga, lapho umsebenzisi engena ngemvume ungena kunethiwekhi futhi ekugcineni ungenile nakuwo wonke amasayithi enethiwekhi ukuze kunikezwe ulwazi olungenazihibe. Uma isayithi lakho elisha belisekelwe ekubhaliseleni, lokhu bekungaba yisixazululo nomphumela ofanele.

Nokho, uma uhlobo nenhloso ehlosiwe ye-multisite bekuwukunikeza amasayithi enethiwekhi ahlukene angenabo ubudlelwano komunye nomunye, cishe njalo kuba njalo ukuthi kudingeke ama-plugin angaphandle noma angeziwe ukuze kulawulwe izindima zabasebenzisi.

### Isizinda ne-SSL

Ake sikhulume ngokufakwa kwe-WordPress Multisite okucishe kusiphunyuke - Wordpress.com. Lesi yisibonelo esibanzi kakhulu se-Wordpress multisite futhi sibonisa amakhono aso abanzi okwenziwa ngokwezifiso nokubunjwa ukuze kufezwe injongo.

Kulezi zinsuku ku-inthanethi yesimanje ukusetshenziswa kwe-SSL kucishe kube yimpoqo futhi abaphathi benethiwekhi bama-WordPress multisites ngokushesha babhekana nalezi zinselelo.

Ekuhlelweni kwe-_subdomain_ amasayithi adalwa ngokusekelwe egameni lesizinda esiyisisekelo. Ngakho isayithi elibhalwe ngokuthi ‘site1’ lingadalwa njenge-‘site1.domain.com’. Ngokusebenzisa isitifiketi se-SSL se-wildcard, umphathi wenethiwekhi angakwazi ukubhekana ngempumelelo nale nselelo futhi anikeze amakhono okubethela nge-SSL enethiwekhi.

I-WordPress Multisite iqukethe umsebenzi wokumatanisa izizinda ovumela amasayithi enethiwekhi ukuthi ahlotshaniswe namagama ezizinda ezenziwe ngokwezifiso noma amagama ezizinda ahlukile esizindeni esiyisisekelo senethiwekhi.

Kubaphathi benethiwekhi lokhu kuveza ungqimba olwengeziwe lobunkimbinkimbi kokubili ekuhlelweni kwegama lesizinda kanye nasekukhishweni nasekugcinweni kwezitifiketi ze-SSL.

Kuleli zinga nakuba WordPress Multisite ihlinzeka indlela yokuvumela [www.anotherdomain.com](http://www.anotherdomain.com) ukuthi imephwe ku-‘site1’ umlawuli wenethiwekhi usala nenselele yokuphatha ngaphandle okufakiwe kwe-DNS nokusetshenziswa kwezitifiketi ze-SSL.

## Ultimate Multisite

Njengoba umehluko phakathi kokufakwa kwe-WordPress okuzimele nokufakwa kwe-Multisite usuqondakele, ake sibheke ukuthi Ultimate Multisite iyisikhali esiphelele kanjani sokuhlinzeka Amawebhusayithi Njengesevisi.

### Isingeniso

Ultimate Multisite iyithuluzi lakho elisebenza ngezindlela eziningi uma kuziwa ekudaleni Iwebhusayithi Njengesevisi (WaaS). Cabanga nge-Wix.com, Squarespace, WordPress.com bese ucabanga ngokuba nesevisi yakho siqu.

Ngaphansi kobuso Ultimate Multisite isebenzisa WordPress Multisite kodwa ikwenza ngendlela engagcini nje ngokuxazulula izinselele eziningi abalawuli benethiwekhi ababhekana nazo ngokufakwa kwe-multisite, kodwa futhi ithuthukisa amakhono ivumele ukusekelwa kwezinhlobonhlobo eziningi zezindlela zokusebenzisa.

Ezigabeni ezilandelayo sizobheka ezinye izindlela zokusebenzisa ezivamile kanye nokucatshangelwa okudingekayo ukuze kusekelwe lezo zimo.

### Izindlela Zokusebenzisa

#### Isimo 1: I-ejensi

Ngokuvamile amakhono ayisisekelo e-ejensi asekwakhiweni kwamawebhusayithi, kanti izici ezifana nokuwasingatha noma ukumaketha kwawo zibhalwa njengezinsizakalo ezengeziwe.

Kuma-ejensi Ultimate Multisite iletha isiphakamiso senani elimangalisayo emandleni ayo okusingatha nokuphatha amawebhusayithi amaningi epulatifomini eyodwa. Ikakhulukazi kuma-ejensi ajwayelanisa imiklamo yawo nezindikimba ezithile ezifana ne-GeneratePress, Astra, OceanWP noma ezinye, angasebenzisa amakhono e-Ultimate Multisite okuzenzakalelayo ukwenza lezi zindikimba zisebenze kusayithi ngayinye entsha.

Ngokufanayo, ngobuningi bezivumelwano zentengo ye-ejensi kuma-plugin ajwayelekile nadumile, ukusetshenziswa kwe-Ultimate Multisite kuvumela ama-ejensi ukuthi asebenzise ukutshalwa kwezimali okukhona ngokuhlinzeka ipulatifomu evamile lapho ama-plugin angafakwa khona, agcinwe futhi asetshenziswe.

Kungenzeka kakhulu ukuthi ukusetshenziswa kokucushwa kungafiseleka futhi ngenhlanhla Ultimate Multisite ikwenza kube lula kakhulu ukusiza ukumephwa kwezizinda nezitifiketi ze-SSL ngokuhlanganiswa kwayo nabahlinzeki bokusingatha abadumile abaningana kanye nezinsizakalo ezifana ne-Cloudflare ne-cPanel.

Ngakho ngokusebenzisa omunye walaba bahlinzeki noma ngokubeka Ultimate Multisite ngemuva kwe-Cloudflare, izici ezifana nokuphathwa kwezizinda nezitifiketi ze-SSL ziba lula kakhulu.

Ama-ejensi akhetha ukugcina ukulawula okuqinile ekudalweni kwamasayithi azokuthokozela ubulula abangakha ngabo amasayithi futhi baxhumanise amasayithi namakhasimende nezinhlelo ngokusebenzisa isixhumi esibonakalayo esilula se-Ultimate Multisite.

![Isixhumi esibonakalayo sokuphathwa kwesayithi se-Ultimate Multisite](/img/admin/sites-list.png)

Ukulawula okuqinile kuma-plugin nezindikimba kugcinwa ngokomkhiqizo ngamunye ngokusebenzisa izixhumi ezibonakalayo eziqondakalayo ze-Ultimate Multisite, okuvumela ama-plugin nezindikimba ukuthi zenziwe zitholakale noma zifihlwe kanye nesimo sazo sokusebenza lapho ziqaliswa kusayithi entsha.

![Isixhumi esibonakalayo semikhawulo yama-plugin yomkhiqizo](/img/config/product-plugins.png)

Izindikimba zinikeza ukusebenza okufanayo, zivumela izindikimba ezithile ukuthi zenziwe zisebenze noma zifihlwe ekudalweni kwesayithi.

![Isixhumi esibonakalayo semikhawulo yezindikimba zomkhiqizo](/img/config/product-themes.png)

Ama-ejensi azothola ukuthula kwengqondo nge-Ultimate Multisite ebavumela ukuthi benze abakwenza kangcono kakhulu - ukuklama amawebhusayithi avelele.

#### Isimo 2: Umhlinzeki Womkhakha Okhethekile

Kukhona isisho sakudala esithi, “yenza into eyodwa futhi uyenze kahle”. Kubachwepheshe abaningi lokhu kusho ukudala umkhiqizo noma isevisi ezungeze umqondo owodwa oyisisekelo.

Mhlawumbe ungumdlali wegalofu oshisekayo okhuthaza amawebhusayithi kumaqembu noma ungase ube umdlali we-esports oshisekayo ohlinzeka amawebhusayithi kumaqembu. Umuntu okhuthaza isevisi yokubhuka ezindaweni zokudlela mhlawumbe?

Ngezizathu eziningi ungafuna ukuhlinzeka izinsizakalo ezisekelwe kuhlaka nepulatifomu evamile. Kungenzeka ukuthi uklame noma utshale imali kuma-plugin akhethekile ukuze unikeze ukusebenza okudingekayo, noma kungenzeka ukuthi izinqubo ezihamba phambili zomkhakha zidinga uhlobo oluthile lwendlela ejwayelekile yokuklama.

Esinye sezici ezintsha ze-Ultimate Multisite ukusetshenziswa kwamasayithi ayizifanekiso. Isayithi eyisifanekiso yilapho itimu ifakiwe futhi yenziwe yasebenza, ama-plugin adingekayo efakiwe futhi enziwe asebenza, futhi okuthunyelwe noma amakhasi esampula edaliwe. Lapho ikhasimende lidala isayithi entsha esekelwe kusifanekiso, okuqukethwe nezilungiselelo zesifanekiso kukopishwa kusayithi esanda kudalwa.

Kumhlinzeki wamasayithi nezinsizakalo zomkhakha okhethekile lokhu kunikeza inzuzo engenakuqhathaniswa emandleni okudala ngokushesha isayithi elilungele ukusebenza nama-plugin akhethekile nomklamo. Ikhasimende lidinga kuphela ukunikeza okokufaka okuncane kakhulu ukuze liphothule isevisi.

Kuye ngezidingo, kokubili ukucushwa kwe-_subdirectory_ noma kwe-_subdomain_ kungase kufaneleke, lapho izinketho zokwakheka zingaba phakathi kwesitifiketi se-SSL esilula sama-_subdirectories_ noma isitifiketi se-SSL se-wildcard sama-_subdomains_.

#### Isimo 3: Ukusingathwa Kwewebhu kwe-WordPress

Kunezindlela eziningi zokusingatha amasayithi e-WordPress kodwa akuvamile ukuthi kube lula njengokunikeza ikhasimende indawo yewebhu enenguqulo ye-WordPress efakwe kusengaphambili. Lokhu kungenxa yokuthi izinqumo nokucatshangelwa okuningi kudinga ukuhlangana ukuze kuhlinzekwe isevisi enenjongo.

Ultimate Multisite iyaphumelela kule ndawo ngokuhlinzeka isixazululo esiphelele esilungele ukusetshenziswa sokusingatha amasayithi e-WordPress. Kufakiwe esixazululweni izindlela eziyinhloko zokuhlinzeka izinsizakalo zokubhalisa, ukuqoqwa kwezinkokhelo, amafomu e-checkout, amavawusha esaphulelo kanye nokuxhumana namakhasimende.

Ingxenye enkulu yomsebenzi obalulekile odingekayo ukuze kufakwe, kucushwe futhi kugcinwe kahle i-WordPress Multisite isizwa yi-Ultimate Multisite kuze kufike ezingeni lapho abalawuli benethiwekhi bedinga kuphela ukucabangela izici njengoba zihlobene nesevisi yabo noma umkhakha wabo okhethekile, ezifana namazinga emikhiqizo, amanani kanye nokunikezwa kwezinsizakalo.

Kubathuthukisi abafisa ukuhlanganisa ne-Ultimate Multisite, isixazululo siphinde sinikeze i-RESTful API ephelele nama-Webhooks ezaziso zezehlakalo.

Ngaphandle kokuncika enqwabeni yama-plugin angaphandle namalayisensi, Ultimate Multisite ihlinzeka ngesixazululo esicebile ngezici futhi esiqhathanisekayo nese-Wix, Squarespace, WordPress.com nabanye.

### Okucatshangelwayo Ngokwakhiwa

Nakuba lokhu kungeyona inkomba ephelele, izinto ezilandelayo kufanele zisebenze njengesiqondiso ekukhetheni okulungile kobuchwepheshe bokusekela ukufakwa kwe-Ultimate Multisite.

#### Ukusingathwa Okwabelwana Ngakho vs. Okuzinikele

Ngeshwa akubona bonke abahlinzeki bokusingathwa abafanayo futhi abanye basebenzisa ukuminyana okwedlulele kwamaseva. Abahlinzeki abanezindleko eziphansi ngokuvamile benza imali ngokwandisa ukuminyana kwamaseva. Ngakho-ke ukufakwa kwakho kwe-Ultimate Multisite kungase kube yisayithi elilodwa kuphela phakathi kwamakhulu amaningana amasayithi kuseva efanayo.

Ngaphandle kwezivikelo ezifanele ezibekwe ngumhlinzeki, amasayithi akuseva eyabelwana ngayo abhekana nenkinga ‘yomakhelwane onomsindo’. Lokho kusho ukuthi, isayithi elikuseva efanayo lidla izinsiza eziningi kangangokuthi amanye amasayithi kufanele ancintisane ngezinsiza ezisele. Kaningi lokhu kubonakala njengamasayithi ahamba kancane noma ahluleka ukuphendula ngesikhathi esifanele.

Njengomhlinzeki wokusingathwa kwewebhu ngokwakho, imiphumela elandelayo izosho ukuthi amakhasimende akho abhekana nesivinini esibi, izinga eliphansi lamakhasi kanye namazinga aphezulu okuphuma, okuvame ukuholela ekushiyweni kwamakhasimende njengoba efuna izinsizakalo kwenye indawo.

Ngamafuphi, okushibhile akusho ukuthi kuhle.

Ultimate Multisite yaziwa ukuthi isebenza nabahlinzeki bokusingathwa abahle abaningi futhi ihlangana kahle nendawo yabo ukuze ihlinzeke ngemisebenzi efana nokumatanisa izizinda ne-SSL ezenzakalelayo. Laba bahlinzeki bayakwazisa ukusebenza futhi bahlinzeka ngesevisi yezinga eliphezulu kunokusingathwa okwabelwana ngakho.

Ukuze uthole uhlu lwabahlinzeki abahambisanayo kanye nemiyalelo ephelele yokusetha ngayinye sicela uhlole imibhalo Yabahlinzeki Abahambisanayo.

#### Okucatshangelwayo Ngokusebenza

Ultimate Multisite akulona uhlelo lokusebenza oluhamba kancane; kunalokho, lushesha ngokumangalisayo. Nokho, lusebenza kahle kuphela njengohlelo lokusebenza oluyisisekelo nengqalasizinda, futhi lungasebenzisa kuphela lokho olunokufinyelela kukho.

Cabanga ngalokhu: Ungumphathi wenethiwekhi wokufakwa kwe-Ultimate Multisite okunamasayithi angu-100. Amanye alawo masayithi enza kahle futhi aheha izivakashi zewebhusayithi eziningana usuku ngalunye.

Lesi simo besingaba sehlukile esikalini esincane esithi isayithi elilodwa kuya kwamahlanu, kodwa kungakapheli isikhathi eside izinkinga zesikali bezizobonakala.

Uma kushiywa kunganakekelwa, isayithi elilodwa le-Ultimate Multisite belizoba nesibopho sokugcwalisa izicelo zazo zonke izivakashi zamasayithi. Lezi zicelo zingaba zamakhasi e-PHP aguqukayo noma izimpahla ezimile ezifana nama-stylesheet, i-javascript noma amafayela emidiya. Kungakhathaliseki ukuthi isayithi elilodwa noma ayikhulu, le misebenzi iba yiphindaphindayo, iyisicefe futhi iyimfucuza. Akudingekile ukusebenzisa amandla e-CPU nememori ukucubungula ifayela le-PHP lapho okukhiphwayo kuwulwazi olufanayo olumile kuzo zonke izicelo.

Ngokufanayo, isicelo esisodwa sekhasi le-PHP noma le-HTML sona sidala izicelo eziningi ezilandelanayo zama-script, ama-stylesheet namafayela ezithombe. Lezo zicelo ziqondiswe ngqo kuseva yakho ye-Ultimate Multisite.

Umuntu angayixazulula kalula le nkinga ngokuthuthukisa iseva, kodwa lokho akulungisi inkinga yesibili - ukubambezeleka kwezindawo. Amaseva amaningi ezindaweni eziningi kuphela angayisingatha kahle le nkinga.

Ngenxa yalesi sizathu abaphathi abaningi benethiwekhi basebenzisa izixazululo zokugcina okwesikhashana zangaphambili namanethiwekhi okusabalalisa okuqukethwe (CDN) ukuze bagcwalise izicelo zamakhasi amile. Ukugcwalisa lezi zicelo nokuhlinzeka izimpahla ngaphambi kokuba isicelo sifinyelele kuseva konga izinsiza zokucubungula, kususa ukubambezeleka, kugwema ukuthuthukiswa okungadingekile futhi kukhulisa izimali ezitshalwe kubuchwepheshe.

Ultimate Multisite ifaka i-add-on ye-Cloudflare ethuthukile evumela abaphathi benethiwekhi ukuthi babeke ukufakwa kwabo ngemuva kwe-Cloudflare futhi basebenzise hhayi kuphela amakhono ayo okugcina okwesikhashana kodwa nokusingathwa kwe-DNS, izitifiketi ze-SSL nezindlela zokuphepha futhi.

#### Izipele

Umuntu angabuza abantu abangu-50 iseluleko ngezipele futhi athole imibono engu-50 ehlukene ngamasu ezipele. Impendulo ithi, kuya ngezimo.

Okungaphikiswana ngakho ukuthi izipele ziyadingeka nokuthi cishe akunakwenzeka ukucabanga ukuthi lezi aziphathwa ngumhlinzeki, ikakhulukazi lowo ohlinzeka ngesevisi ephethwe. Ngenxa yalokho amakhasimende azobheka kumphathi wenethiwekhi ukuthi ahlinzeke futhi aphathe le sevisi. Ukuthi umphathi wenethiwekhi ubheka kubani kuyinkinga ehluke ngokuphelele.

Ngezinhloso zalesi sigaba masivumelane ngokuthi isipele siyikhophi yesimo sesistimu ngesikhathi esithile ngesikhathi isipele siqalisiwe. Kalula nje, noma ngabe isimo sesistimu sinjani ngesikhathi sesipele, leso simo siyabanjwa futhi sivalelwe ngaphakathi esipele.

Ngalokhu kuqonda, impendulo yokuthi izipele zingafezwa kanjani nokuthi yini engcono kakhulu endaweni yakho izoncika kakhulu ezidingweni zakho nasekhonweni lomhlinzeki wokusingathwa lokwanelisa lezo zidingo. Nokho, ngokulandelana kusukela kokunemibono eqinile kakhulu kuya kokunemibono emincane kakhulu, izinketho ezingezansi kufanele zinikeze isiqondiso esithile.

#### Ama-Snapshot

Ama-Snapshot ayizinhlamvu zesiliva zezipele ngoba alula, awanzima (kuze kube yilapho ufuna ukubuyisela) futhi ‘avele asebenze’. Nokho kudinga usizo oluthile kumhlinzeki wakho futhi ikakhulukazi kusebenza kuphela uma une-VPS (Virtual Private Server) noma okufanayo. Abahlinzeki abaningana ababhalwe emibhalweni yethu ethi ‘Abahlinzeki Abahambisanayo’ banikeza izipele ezingadingi kungenelela noma ukucatshangelwa okwengeziwe ngumqondisi wenethiwekhi.

Lapho izipele zendabuko ziqondisa amafayela nama-database, i-snapshot iqondisa idiski yonke. Lokhu kusho ukuthi akubanjwa kuphela idatha yesayithi ku-snapshot, kodwa nesistimu yokusebenza nokumiswa nakho. Kwabaningi lokhu kuyinzuzo ecacile njengoba isistimu entsha ingadalwa cishe ngokushesha kusuka ku-snapshot futhi ingeniswe ekusebenzeni ukuze ithathe indawo ye-instance egulayo. Ngokufanayo, inqubo yokubuyisela ukuze uthole amafayela idinga kuphela ukunamathisela isithombe se-snapshot njengediski ku-instance ekhona ukuze amafayela afinyeleleke futhi akopishwe.

Ama-Snapshot angase adonse izindleko ezengeziwe kumhlinzeki wokusingathwa kodwa ayinqubomgomo yomshwalense ngokumelene nezingozi.

#### Ama-Script Angaphandle

Kubukeka sengathi azishodi izikripthi zangaphandle nezixazululo zokwenza isipele sezinsiza ze-WordPress ne-MySQL, futhi lezi zingasebenza kahle ku-Ultimate Multisite njengoba iyi-plugin ye-WordPress esebenzisa uhlelo lwamafayela nedathabheyisi ye-WordPress. Ngakho-ke isixazululo esenza isipele samasayithi e-WordPress sizohlanganisa ngokwanele izidingo ze-Ultimate Multisite.

Asikwazi ukuncoma isikripthi esisodwa kunesinye, kodwa iseluleko sethu esijwayelekile ukuthi kwenziwe ukuhlolwa okuningi kokwenza isipele nokubuyisela ukuze kuqinisekiswe ukuthi imiphumela iyafuneka, futhi ‘uqiniseke ukuze uqiniseke’ ngokuhlola ngokuqhubekayo isikripthi nokusebenza kwaso, ikakhulukazi lapho kusetshenziswa uhlobo oluthile lwesu lesipele elihlukanisayo.

Kufanele kuqashelwe ukuthi lezi zikripthi, ngesikhathi zisebenza, zizokwandisa umthwalo wesistimu, okumele kubhekwe.

#### Ama-plugin

Cishe ayikho inkinga ku-WordPress engenakuxazululwa nge-plugin, futhi uma ukuphatha izikripthi zangaphandle kungesona isiphuzo sakho se-java, mhlawumbe i-plugin iyindlela elandelayo engcono.

Nakuba ama-plugin ehluka ngezinketho nezici, ngokuvamile enza umsebenzi ofanayo, okuwukwenza ikhophi yamafayela e-WordPress nokuqukethwe kwedathabheyisi. Ngemva kwalokho ukusebenza kuyahluka njengoba amanye ama-plugin engathumela izipele ezinsizeni zangaphandle ezifana ne-Google Drive noma i-Dropbox, noma kolunye uhlobo lwesevisi yokugcina izinto ehambisanayo njenge-S3, Wasabi noma ezinye. Ama-plugin aphelele kakhulu ahlinzeka ngezipele ezihlukanisayo noma uhlobo oluthile lwesu lokwenza isipele sedatha eshintshiwe kuphela ukuze kongiwe izindleko zokugcina zangaphandle.

Lapho ukhetha i-plugin yakho, qaphela ukuqinisekisa ukuthi iyayiqonda i-multisite. Ngenxa yemvelo yokusebenza kwayo, ngesikhathi isipele sisebenza ungalindela umthwalo wesikhashana kuseva kuze kube inqubo isiqediwe.

#### Isizinda ne-SSL

Sekuxoxwe okuningi kakade mayelana namagama ezizinda kumodi ye-_subdomain_ ye-multisite. Isixazululo esicishe sibe semhlabeni wonke kubaphathi benethiwekhi ukusebenzisa okufakiwe kwe-wildcard DNS.

![Isibonelo sokumiswa kokufakiwe kwe-Wildcard DNS](/img/config/settings-domain-mapping.png)

Lolu hlobo lokufakiwe kwe-DNS luzoxazulula ngempumelelo ama-_subdomains_ afana no-‘site1.domain.com’ no-‘site2.domain.com’ ekhelini le-IP elingu-1.2.3.4, ngaleyo ndlela lusekele i-Ultimate Multisite futhi ngezinga elikhulu i-WordPress Multisite esebenzisa imodi ye-_subdomain_.

Lokhu kungase kusebenze kahle ngokuphelele ku-HTTP ngoba umsingathi oqondiwe ufundwa kumaheda e-HTTP, kodwa akuvamile ukuthi iwebhu ibe lula kanjalo kulezi zinsuku lapho ukuthengiselana okuphephile kwe-HTTPS sekucishe kube yisibopho.

Ngenhlanhla kunezinketho ezilula zezitifiketi ze-SSL. Kumodi ye-_subdirectory_ isitifiketi sesizinda esijwayelekile singasetshenziswa. Lezi zitholakala kalula futhi mahhala kubahlinzeki bokusingatha abangase basebenzise isevisi yamahhala ye-LetsEncrypt noma omunye umthombo. Kungenjalo lezi zitholakala ngokuthengiswa kuziphathimandla uma ukwazi ukukhiqiza isicelo sokusayinwa kwesitifiketi.

Kumodi ye-_subdomain_ ukusetshenziswa kwesitifiketi se-wildcard SSL kuzohambisana ngokuphelele nesizinda se-wildcard futhi kuvumele isitifiketi ukuba sibe negunya kusizinda esiyimpande nawo wonke ama-_subdomains_ ngaphandle kokumiswa okungadingekile.

Nokho, kufanele kuqashelwe ukuthi izitifiketi ze-wildcard SSL zingase zingasebenzi nezinsizakalo ezifana ne-Cloudflare ngaphandle uma uku-enterprise plan noma usetha okufakiwe kube yi-DNS kuphela, lapho-ke konke ukugcina kunqolobane nokuthuthukisa kuyadlulwa.

Ngaphandle kokudinga ukulungiswa okwengeziwe, i-Ultimate Multisite inikeza isixazululo sale nkinga, ikhombisa ulwazi lwethu olubanzi ngezidingo zama-multisite e-WordPress. Ukwenza kusebenze le add-on elula kuzokwenza i-Ultimate Multisite isebenzise imininingwane yakho ye-Cloudflare ukuze yengeze ngokuzenzakalelayo okufakiwe kwe-DNS kwamasayithi enethiwekhi ku-Cloudflare futhi isethe imodi yawo ibe ‘proxied’. Ngale ndlela isayithi elincane ngalinye lenethiwekhi, lapho lidalwa, lizoba nokuvikelwa okugcwele nezinzuzo ze-Cloudflare kuhlanganise ne-SSL.

Kuye ngemvelo nenhloso yokufakwa kwakho kwe-Ultimate Multisite, kungase kube nesidingo sokuthi amakhasimende asebenzise izizinda zawo. Kulokhu umphathi wenethiwekhi unikezwa umsebenzi wokuxazulula izinkinga ezimbili. Eyodwa, ukusingathwa kwegama lesizinda, neyesibili, izitifiketi ze-SSL zesizinda.

Kwabaningi, ukusetshenziswa kwe-Cloudflare kuyindlela elula. Ikhasimende lidinga kuphela ukubeka isizinda salo ku-Cloudflare, likhombe i-CNAME kusizinda esiyimpande se-Ultimate Multisite, bese limapha isizinda salo ku-Ultimate Multisite ukuze liqale ukusizakala ngegama lesizinda salo elenziwe ngokwezifiso.

Ngaphandle kwalokhu, kudingeka kufunwe ezinye izixazululo, yingakho i-Ultimate Multisite incoma uhlu lwabahlinzeki abahambisanayo. Lokhu kungenxa yokuthi inqubo yokusetha i-DNS ne-SSL ingaba inqubo engelula. Nokho, ngokuhlanganiswa kwe-Ultimate Multisite nalaba bahlinzeki, ubunzima bususwa kakhulu futhi inqubo yenziwa ngokuzenzakalelayo.

#### Ama-plugin

Kungenzeka kakhulu ukuthi uzodinga ama-plugin angeziwe ukuze unikeze ukusebenza kumakhasimende akho noma kumasayithi enethiwekhi. Ingabe wonke ama-plugin asebenza ne-WordPress Multisite ne-Ultimate Multisite? Hhayi-ke, kuya ngokuthi.

Nakuba ama-plugin amaningi efakeka ku-WordPress Multisite, ukwenziwa kwawo kusebenze nokulayisenswa kwawo kuyahluka kumbhali kuye kumbhali.

Inselelo isendleleni ilayisensi esetshenziswa ngayo, njengoba amanye ama-plugin edinga ilayisensi ngesisekelo sesizinda ngasinye. Lokhu kungasho ukuthi kwamanye ama-plugin umphathi wenethiwekhi udinga ukwenza kusebenze ilayisensi ngesandla ku-plugin ngayinye kusayithi ngalinye elisha.

Ngakho-ke kungaba ngcono ukuhlola nombhali we-plugin mayelana nokuthi i-plugin yabo izosebenza kanjani ne-WordPress Multisite kanye nanoma yiziphi izidingo ezikhethekile noma izinqubo ezidingekayo ukuyilayisensa.
