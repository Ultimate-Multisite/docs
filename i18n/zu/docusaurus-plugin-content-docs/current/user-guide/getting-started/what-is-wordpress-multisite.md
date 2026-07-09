---
title: Yini i-WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Iyini i-WordPress Multisite?

Ngaphakathi komgogodla wayo, i-WordPress inikeza isici esibizwa ngokuthi ‘Multisite’ esilandela imvelaphi yaso emuva ku-2010 ngesikhathi kwethulwa i-WordPress 3.0. Kusukela lapho sesithole izibuyekezo eziningi ezihlose ukwethula izici ezintsha nokuqinisa ukuphepha.

Ngokuyisisekelo, i-WordPress multisite ingacatshangwa kanje: Inyuvesi igcina ukufakwa okukodwa kwe-WordPress kodwa ikhono ngalinye ligcina isayithi lalo le-WordPress.

##

## Iyini Ngempela i-WordPress Multisite?

I-Multisite iyisici se-WordPress esivumela amasayithi amaningi ukuthi abelane ngokufakwa okukodwa kwe-WordPress. Lapho i-multisite ivuliwe, isayithi lokuqala le-WordPress liguqulwa ukuze lisekele lokho okuvame ukubizwa ngokuthi **inethiwekhi yamasayithi**.

Le nethiwekhi yabelana ngohlelo lwamafayela (okusho ukuthi **izengezo namatimu nakho kuyabiwa**), isizindalwazi, amafayela omgogodla we-WordPress, i-wp-config.php, njll.

Lokhu kusho ukuthi izibuyekezo ze-WordPress, zetimu, nezezengezo kudingeka zenziwe kanye kuphela kuwo wonke amasayithi enethiwekhi yakho njengoba abelana ngamafayela afanayo ohlelweni lwamafayela.

Leli qiniso lingenye yezinzuzo eziyinhloko ze-multisite, njengoba likuvumela ukuthi ukhulise inani lamasayithi owaphathayo kuyilapho ugcina inani lemisebenzi okudingeka uyenze ukuze unakekele amasayithi amakhasimende akho lifana.

##

## Subdomain noma Subdirectory?

Kunezindlela ezimbili zokusebenzisa i-WordPress multisite – futhi kudingeka ukhethe eyodwa lapho uguqula ukufakwa kwakho okuvamile kwe-WordPress kube ukufakwa kwe-multisite:

**Subdomain:** isb.: [site.domain.com](http://site.domain.com)

…noma

**Subdirectory:** isb.: [yourdomain.com/site](http://yourdomain.com/site)

Indlela ngayinye inezinzuzo nezinkinga okudingeka uzicabangele lapho wenza lesi sinqumo.

Into eyodwa ibalulekile ukuyiqaphela, nokho: uma ususenze isinqumo sakho, ukushintsha inethiwekhi yakho isuke ku-subdirectory iye ku-subdomain noma ngokuphambene kunzima ngempela – ikakhulukazi uma usuvele unamasayithi ambalwa adaliwe.

Ngaphambi kokwenza leso sinqumo, nanka amaphuzu ambalwa okufanele uwakhumbule:

**Imodi ye-Subdirectory** iyimodi elula kakhulu ngokusethwa nokunakekelwa. Lokhu kwenzeka ngoba wonke amasayithi ayizindlela nje ezinamathiselwe kudomeyini eyinhloko (isb. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Ngenxa yalokho, udinga kuphela **isitifiketi esisodwa se-SSL** sedomeyini eyinhloko futhi leso sizomboza yonke inethiwekhi.

Ngesikhathi esifanayo, ngenxa kwesakhiwo sayo se-URL, i-Google nezinye izinjini zokusesha eziningi zizobheka wonke amasayithi angaphansi enethiwekhi yakho esekelwe ku-subdirectory njengesayithi elilodwa elikhulu. Ngenxa yalokho, okuqukethwe okwengezwe kumasayithi angaphansi amakhasimende akho okugcina kungase kuthinte ukusebenza kwe-SEO kwesayithi lakho lokufikela, ngokwesibonelo. Izinga lomthelela liyaphikiswana futhi kunempikiswano engenziwa yokuthi ukuba nohlelo olunjalo kungase kube yinzuzo ngisho nasekusebenzeni kwe-SEO.

**Imodi ye-Subdomain** iyinkimbinkimbi kancane ukuyisetha, kodwa isakhiwo sayo se-URL (isb. [subsite.yournetwork.com](http://subsite.yournetwork.com)) ngokuvamile sibhekwa njengokubukeka “kuchwepheshile kakhulu”.

Enye yezinselelo eziyinhloko ekusetheni imodi ye-subdomain ukumbozwa kwe-SSL (HTTPS) kuyo yonke inethiwekhi. Kuya eqinisweni lokuthi iziphequluli zibheka ama-subdomain njengezinto ezizimele. Ngenxa yalokho, uzodinga isitifiketi se-SSL esihlukile se-subdomain ngayinye enethiwekhi yakho, noma uhlobo olukhethekile lwesitifiketi olubizwa ngokuthi **isitifiketi se-Wildcard SSL**. Eminyakeni yakamuva, abahlinzeki bokusingatha namaphaneli bakhuphula izinga labo mayelana nokuhlinzekwa kwe-SSL futhi abanye banikeza izitifiketi ze-wildcard ngokuchofoza inkinobho, bevala igebe phakathi kwezindlela ezimbili mayelana nobunkimbinkimbi bokuyisetha.

Ngokuphambene nemodi ye-subdirectory, amasayithi angaphansi enethiwekhi esekelwe ku-subdomain abhekwa izinjini zokusesha njengamawebhusayithi ahlukene, okusho ukuthi okuqukethwe okukhona kusayithi elilodwa elingaphansi akuphazamisi nhlobo ukusebenza kwe-SEO kwamanye amasayithi angaphansi.

## I-Super Admin

Ukufakwa kwe-WordPress kwesayithi elilodwa kukuvumela ukuthi wengeze inani elingenamkhawulo labasebenzisi futhi unikeze labo basebenzisi izindima ezahlukene zabasebenzisi ezinezimvume ezahlukene.

Ku-WordPress Multisite, kuvulwa uhlobo olusha lomsebenzisi: **i-super admin** – futhi kuvulwa iphaneli entsha yomlawuli: **iphaneli yomlawuli wenethiwekhi**.

Njengoba igama lisho, i-super admin inamandla amakhulu phezu kwenethiwekhi, ikwazi ukuphatha wonke amasayithi ayo angaphansi, izengezo, amatimu, yonke into!

Uma usuguqule ukufakwa kwakho kwe-WordPress kwesayithi elilodwa kwaba yi-multisite, umlawuli wokuqala wesayithi elilodwa uzothuthukiswa ngokuzenzakalelayo abe yi-super admin.

Izengezo namatimu kungafakwa noma kukhishwe kuphela kuphaneli yomlawuli wenethiwekhi ngama-super admin. Abalawuli bamasayithi angaphansi bangabe sebekhetha ukuvula noma ukuvala lezo zengezo noma amatimu ngaphandle uma i-super admin izivula ezingeni lenethiwekhi izengezo, okuphoqa ukuthi zihlale zisebenza kuwo wonke amasayithi angaphansi ngaso sonke isikhathi.

_Qaphela: njengoba ubona, ukumema umuntu enethiwekhi yakho nokumnika isimo se-super admin kunika lo msebenzisi ukulawula okuphelele kwenethiwekhi yakho. Njengesibonelo, amanye ama-super admin angasusa ngisho nesimo sakho se-super admin, akukhiyele ngaphandle kwephaneli yakho yomlawuli wenethiwekhi. Ukuze sivumele amakhasimende e-Ultimate Multisite ukuba abe nokulawula okunemininingwane kwalokho ama-super admin engeziwe angakwenza, sine-add-on ebizwa ngokuthi Support Agents. Le add-on ikuvumela ukuthi udale olunye uhlobo lomsebenzisi – i-agent – enezimvume kuphela ezingase zidingeke ukuze enze imisebenzi yakhe enethiwekhi._

## Yini ebiwayo phakathi kwamasayithi angaphansi futhi yini engabiwa

Njengoba sishilo ngaphambili, enye yezinzuzo ezisemqoka ze-WordPress multisite ukuthi wonke amasayithi angaphansi abelana ngokucushwa okufanayo, amafayela omgogodla, amatimu, izengezo, amafayela omgogodla we-WordPress, njll.

Nokho, kunezinto ezilinganiselwe kahle ngokwesayithi ngalinye elingaphansi.

\- Ngokwesibonelo, isayithi ngalinye elingaphansi lithola ifolda yalo yokulayisha. Ngenxa yalokho, okulayishiwe okwenziwe abasebenzisi besayithi elilodwa elithile elingaphansi akunakufinyelelwa kwelinye isayithi elingaphansi.

\- Isayithi ngalinye elingaphansi linephaneli yalo yomlawuli elizinikele futhi lingavula noma livale izengezo noma amatimu ngaphandle uma zenziwe zasebenza enethiwekhi yi-super admin.

\- Amathebula amaningi e-database adalelwa i-subsite ngayinye, okusho ukuthi okuthunyelwe, amazwana, amakhasi, izilungiselelo, nokunye kufakwa ngaphansi kwe-subsite ngayinye.

## Ukuphathwa kwabasebenzisi ku-WordPress Multisite

Isihloko esibucayi ku-WordPress multisite ukuphathwa kwabasebenzisi. Ithebula labasebenzisi le-WordPress lingelinye lamambalwa abiwe phakathi kwawo wonke ama-subsite.

Lolu hlelo lungadala izinkinga ezithile kuye ngokuthi uhlela ukwakha ini ngenethiwekhi yakho. Isibonelo esingezansi sisiza ukukhombisa okuyinkinga ephuthumayo kakhulu.

Cabanga ngalesi simo esilandelayo:

Udala inethiwekhi ye-WordPress multisite bese uqala ukunikeza ama-subsite ngenkokhelo yanyanga zonke kubantu abafuna ukuba nesitolo se-e-commerce.

Uthola ikhasimende lakho lokuqala elikhokhayo – u-John. Udala i-site ka-John kunethiwekhi yakho, ufaka wonke ama-plugin adingekayo, bese udala umsebenzisi ka-John ukuze akwazi ukuphatha isitolo sakhe.

Bese kuvela ikhasimende lesibili – u-Alice. Wenza into efanayo kuye futhi manje naye unesitolo kunethiwekhi yakho.

U-John no-Alice bobabili bangamakhasimende akho, kodwa abazani. Okubaluleke nakakhulu, uma omunye wabo evakashela iwebhusayithi yesitolo somunye, ayikho indlela yokwazi ukuthi lesi sitolo sisingathwe kunethiwekhi efanayo yama-site.

Ngelinye ilanga, u-John udinga ukuthenga ipheya entsha yezicathulo futhi uthola eziphelele esitolo sika-Alice. Lapho ezama ukuqedela ukuthenga, uthola umlayezo wephutha othi “email already in use”, okuyinto exakayo ngoba u-John uqinisekile ngo-100% ukuthi lesi yisikhathi sokuqala ake avakashela iwebhusayithi ka-Alice.

Okwenzekile lapha ukuthi umsebenzisi ka-John wabiwa kuyo yonke inethiwekhi ngakho lapho ezama ukudala i-account ukuze enze i-checkout ku-site ka-Alice, i-WordPress izobona ukuthi umsebenzisi onekheli le-email elifanayo usevele ukhona bese iphonsa iphutha.

_Inothi: Siyaqonda ukuthi lokho kungaba kubi kangakanani kuye ngokusetshenziswa kwakho, ngakho Ultimate Multisite inenketho edlula ukuhlola okuvamile komsebenzisi okhona, ivumele ama-account amaningi ukuthi adalwe kusetshenziswa ikheli le-email elifanayo. I-account ngayinye iboshelwe ku-subsite, ngakho ingozi yokungqubuzana igcinwa incane kakhulu. Esibonelweni esingenhla, u-John ngeke athole umlayezo wephutha futhi uzokwazi ukuthenga lezo zicathulo ngaphandle kwenkinga. Le nketho ibizwa ngokuthi Enable Multiple Accounts, futhi ingavulwa ku-Ultimate Multisite → Settings → Login & Registration._

Nakuba ithebula labasebenzisi labiwe, abasebenzisi bangangezwa futhi basuswe kuma-subsite ngabaphathi be-subsite noma i-super admin, futhi bangaba nezindima zomsebenzisi ezihlukene kuma-subsite ahlukene.

## Okucatshangelwayo ngokusebenza

I-WordPress multisite inamandla ngempela uma kuziwa enanini lama-site engawasekela. Lokhu kungahlolwa iqiniso lokuthi [WordPress.com](https://WordPress.com), Edublogs, ne-Campuspress zonke ziyizinsizakalo ezisekelwe ku-multisite futhi ngayinye isingatha izinkulungwane zama-site.

Nakuba ngokombono kungekho nani eliphezulu lama-site ongawasingatha ekufakweni okukodwa kwe-WordPress multisite, empeleni inani lama-site ongawaqhuba ngendlela eyanelisayo lingahluka kakhulu kuye ngezinto eziningi ezahlukene: ukuthi ama-site aguquguquka kangakanani, yimaphi ama-plugin atholakala kuma-subsite, njll.

Njengomthetho ojwayelekile, lapho inethiwekhi yakho ilula kakhulu, kuba ngcono. Ukuthanda ama-site lapho okuqukethwe kungaguquguquki kakhulu (okuwenza abe ngabakhandidethi abahle kakhulu bamasu e-caching aqinile) nokugcina iqoqo lama-plugin lilula ngangokunokwenzeka (uma inani lama-plugin asebenzayo liphansi kuba ngcono) kungakhuphula kakhulu inani lama-subsite ongawasingatha.

Ingxenye engcono kakhulu ukuthi njengoba konke kuyi-WordPress lapha, amathuluzi afanayo osuwazi futhi owathandayo okuthuthukisa ukusebenza azosebenza nakunethiwekhi ye-multisite.

Isithiyo esikhulu se-multisite yi-database kodwa uma konke okunye kusethwe kahle, ingakwazi ukuthatha ama-site ayizinkulungwane ezimbalwa ngaphambi kokuthi kudingeke ukhathazeke ngayo. Noma kunjalo, kukhona izixazululo ezingangezwa kancane kancane ngaleso sikhathi (njengezixazululo zokuhlukanisa i-database, ngokwesibonelo).
