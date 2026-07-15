---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite është një plugin i WordPress Multisite që ju lejon të ofroni WaaS ose Websites as a Service klientëve tuaj. Para se të thellohemi dhe të mësojmë si Ultimate Multisite mund t'ju ndihmojë biznesin tuaj dhe klientët, duhet të kemi disa njohuri themelore.

## WordPress Multisite {#the-wordpress-multisite}

Çdo prej nesh është i i njohur me instalimin standard të WordPress-it. Ju e krijoni atë përmes paneli kontrolli të ofrues suaj hosting ose, për ata që janë më të guximshëm, vendosni një server web dhe bazë të dhënash të re, shkarkoni skedarët themelorë dhe filloni procesin e instalimit.

Kjo funksionon për miliona vende WordPress në të gjithë botën, por nga perspektiva e një agjenci ose ofruesi hosting, le të diskutojmë volumin për një minutë.

Ndërsa është synues të krijoni një vend WordPress ose edhe një qind përmes një paneli kontrolli automatik, probleme fillojnë të shfaqen së shpej kur vjen në menaxhimin e këtyre vendeve. Pa menaxhim, ju jeni një target kryesor për malware. Menaxhimi do të thotë një ushtrim për përpjekje dhe burime dhe megjithëse ka mjete dhe pluginë të jashtme të disponueshme për të ndihmuar në rregullimin dhe administrimin e vendeve WordPress, fakti që klientët ruajnë akses administrator do të thotë se këto përpjekje mund të mbarojnë lehtë.

Brenda bazës së tij, WordPress ofron një funksion thjesht i quajtur 'Multisite' i cili rrjedh origjinalisht nga viti 2010 me lëshimin e WordPress 3.0. Qëndrueshmen, ai ka marrë disa revizime që synojnë të hyjnë funksione të reja dhe të fortifikojnë sigurinë.

Në thelb, një multisite WordPress mund të mendojmë si kështu: Një Universitet mbart një instalim të vetëm të WordPress-it por secili fakultet mbart vendin e tij të vekit të WordPress-it.

Për të kuptuar këtë deklaratë, le të shohim disa termat bazë që gjenden jo vetëm në dokumentacionin e Ultimate Multisite, por edhe në të gjithu në komunitetin WordPress.

### Rrënet (The Network) {#the-network}

Në kontekstin e WordPress-it, rrjeti multisite është një vend ku mund të menaxhohet një numër subsite-sh duke përdorur një dashboard të vetëm. Edhe pse krijimi i një rrjeti multisite ndryshon nga ofrueshtësit (hosting providers), rezultati final është zakonisht disa udhëzime shtesë në skedarin `wp-config.php` që t'i thotë WordPress-it se po punon në këtë mod.

Ekzistojnë disa ndryshime të qarta midis një rrjeti multisite dhe një instalimi standalone WordPress, të cilat do ta diskutojmë shkurtimisht.

#### Subdomeni vs. Subdirektori (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Një nga vendimet më të menjëhershme që duhet të bëni është nëse instalimi multisite do të punojë me _subdirectories_ (subdirektori) apo _subdomains_ (subdomenin). Ultimate Multisite funksionon vetëm me të dy zgjedhjet, por ka disa ndryshime arkitektonike midis këtyre dy konfigurimeve.

Në konfigurimin e _subdirectory_, sitet në rrjet trashëgojnë një rrugë (path) bazuar në emrin kryesor të domenit. Për shembull, një sit i etiketuar si ‘site1’ do të ketë URL-in e plotë si https://domain.com/site1. Në konfigurimin e _subdomain_, sitja në rrjet do të ketë _subdomenin_ e saj të vetë, i derivuar nga emri kryesor i domeneve. Kështu, një sit i etiketuar si ‘site1’ do të ketë URL-in e plotë si https://site1.domain.com/.

Ndërsa të dy opsionet janë zgjedhje perfekte, përdorimi i _subdomain_ ofron disa avantazhe por kërkon edhe më shumë mendim dhe planifikim në arkitekturën e tij.

Në lidhje me DNS, përdorimi i `_subdirectories_` paraqet një sfidë relativisht të thjeshtë. Sepse sajtat në rrjet janë thjesht fëmijë të rrugës kryesore, duhet të ekzistojë vetëm një hyrje e emrit të domeneve për emrin kryesor të domenit. Për `_subdomains_` sfidës është pak më komplekse dhe kërkon ose një hyrje CNAME të veçantë për secilin sajt në rrjet ose një hyrje wildcard (\*) në regjistrat DNS.

Një fushë tjetër që vlen të konsiderohet është ajo e SSL-it dhe lëshimin dhe përdorimi i sertifikatave SSL. Në konfigurimin `_subdirectory_`, një certifikat domene mund të përdoret si sajtat në rrjet janë thjesht rrugë të emrit kryesor të domenit. Kështu, një certifikat për domain.com do t'i ofrojë mjaftueshëm SSL-in për https://domain.com/site1, https://domain.com/site2 dhe kështu me radhën.

Në konfigurimin `_subdomain_`, përdorimi i një certifikati wildcard SSL është një nga opsionet më të zakonshme. Ky lloj certifikati SSL ofron enkriptim për një domen dhe `_subdomains_` e tij. Prandaj, një certifikat wildcard SSL do t'i ofrojë enkriptimin për https://site1.domain.com, https://site2.domain.com dhe edhe për domain.com vetë.

Edhe pse ekzistojnë opsione të tjera, ato shpesh janë të kufizuara në kuptim dhe aplikim dhe kërkojnë konfigurime dhe vlerësime shtesë lidhur me përshtatshmërinë.

#### Plugins dhe Themes {#plugins-and-themes}

Çfarë WordPress i jep edhe ia marr, të paktën nga perspektiva e klientit. Në një instalim standalone WordPress, nëse administrator i sajtës instalohet një plugin të keq ose dështon ta mbajë instalimin e tij të përditësuar, vetëm viktimi dhe dëmtuesi i këtij veprimi është ai vetë. Megjithatë, një administrator i sajtës që instalohet një plugin të keq në një instalim multisite krijon një viktim për çdo sajt të instaluar në rrjet.

Për këtë arsye, kur konfigurohet si WordPress multisite, WordPress fshin aftësinë nga administratorët e situsave për të instaluar plugin dhe teme dhe në vend të kësaj lëviz këtë aftësi te një rol i krijuar me arsyen "administratori i rrjetit" ose 'super admin'. Ky rol i privilegjuar më pas mund të vendosë nëse lejon administratorëve të sitave të rrjetit të shohin apo aksesojnë menyn e plugin-eve në dashboard-in e tyre dhe, nëse po kështu, nëse këto leje zgjerohen edhe për _aktivizimin_ ose _deaktivizimin_ të plugin-eve.

Në këtë kuptim, administrator i rrjetit është përgjegjës për instalimin e plugin-eve dhe temave në rrjet dhe delegon lejet për të përdorur këto plugin dhe tema në sitet e rrjetit. Administratorët e sitave nuk mund të instalohen plugin ose tema ose të aksesojnë plugin dhe tema që nuk i janë caktuar atyre.

#### Përdoruesit dhe Administratorët {#users-and-administrators}

Në WordPress Multisite, të gjitha sitet e rrjetit ndajnë të njëjtin bazë të dhënash dhe përpara kësaj ndajnë përdorues, role dhe aftësi të njëjta. Më i përshtatshmi mënyrë për ta menduar është se të gjithë përdoruesit janë anëtarë të rrjetit dhe jo të një sit specifike.

Duke marrë parasysh këtë, mund të jetë e dëshirueshme të mos lejohet krijimi i përdoruesve dhe për këtë arsye WordPress Multisite fshin këtë aftësi nga administratorët e sitave dhe e lëviz këtë aftësi te administratorit i rrjetit. Në miring, administrator i rrjetit mund të delegon privilegjet e nevojshme një administratorit të situsës për t'i lejuar krijimin e kontave të përdoruesve për sitin e tij.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Duke rikuperuar deklaratën e mësipërme, edhe pse kontodet përdoruesit duken se janë të lidhura me sitin që ndodhen, ato në fakt i caktueshen te rrjeti dhe prandaj duhet të jenë unike gjithë rrjetit. Mund të ketë raste ku emrat e përdoruesve nuk mund të regjistrohen për këtë arsye.

Edhe pse koncepti i një burimi të vetëm për regjistrimin dhe autentikimin e përdoruesve nuk është diçka e huaj në sistemet enterprise, por shpesh është një koncept i vështirë për njerëzit që janë mësuar me instalime WordPress standalone, ku menaxhimi i përdoruesve është pak më i thjeshtë.

#### Media {#media}

Kuqoftë se sitet në rrjet (Multisite) ndajnë një bazë të vetme të të dhënave në WordPress Multisite, ato ruajnë rrugë të veçanta në sistemin operativ për skedarët multimedia.

Vendosja standarde e WordPress-it (wp-content/uploads) mbetet; megjithatë, rruga e saj ndrysohet për të pasqyruar ID-n unik të sitit në rrjet. Si pasojë, skedarët multimedial për një sit në rrjet duken si wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Kemi përmendur më parë se ka avantazhe specifike të konfigurimit me _subdomain_ para se _subdirectory_. Ja rrugët.

Në konfiguratën me _subdirectory_, sitja kryesore (siti i parë që krijohet kur rrjeti vendoset) dhe sitet e sub-rrjetit në rrjet duhet të ndajnë të njëjtin rrugë nga emri i domene. Kjo ka potencial për shumë konflikte.

Për postime, një rrugë obligatorie /blog/ shtohet në sitin kryesor për të parandaluar konfliktet me sitet e rrjetit. Kjo do të thotë se permalink-et të bukur si ‘Post name’ do të paraqiten si domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Në konfiguratën me _subdomain_, kjo veprim nuk është e nevojshme sepse secili sit në rrjet merr përfitim nga separimi i plotë i domenit dhe kështu nuk duhet të mbështetet tek një rrugë e vetme. Ata, pkaqë, ruajnë rrugët e tyre të veçanta bazuar në _subdomain_-in e tyre.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

Në konfigurimin e _subdirectory_, mundësia për konflikt të emrave shtrihet edhe tek faqet statike si faqe kryesore dhe faqe në rrjet (network sites) ndajnë të njëjtin rrugë.

Për të parandaluar këtë, WordPress ofron një mënyrë për të bllokuar disa emra të saj që të mos konflikojnë me emrat e faqes së parë. Zakonisht administrator i rrjetit do të vendosë rrugët themelore (root paths) të faqeve të faqeve kryesore.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Në konfigurimin e _subdomain_, mundësia për konflikt të emrave zvogëlohet nga _subdomain_ pasi ky është i veçantë për faqe në rrjet dhe nuk ka asnjë lidhje me faqen kryesore.

### Regjistrimi (Registration) {#registration}

Ndryshe instalimeve standalone të WordPress, faqe në rrjet nuk mbajnë opsionet e zakonshme që lejojnë regjistrimin e përdoruesve ose i atribunit këto regjistrime rrolëve (roles).

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kur krijohen llogaritjet e përdoruesve, ato gjenerohen në nivelin e rrjetit. Kështu që, në vend që të përkasin ndonjë faqe specifike, ato përkasin rrjetin. Kjo ka disa avantazhe dhe dobe.

Për shembull, supozo që WordPress Multisite juje keni në biznesin e lajmeve dhe informacionit. Ju do të krijonit multisiten dhe më pas do të krijoitit site-e rrjetike për financat, teknologjinë, shpirtin e divertimit dhe zona të tjera të interesit, duke ruajtur kontrollin përgjithshëm mbi pluginet dhe temat. Secili site rrjetik do të kase një nivel shumë më të lartë kontrolli mbi pamjen dhe përvojën e përdoruesve të site-s së tij rrjetike se sa çfarë mund t'i ofrojnë post-tipat ose kategoritë normale të postimeve.

Në këtë kuptim, kur një përdorues hyr në sistem, ai hyn në rrjet dhe në fund do të jetë i hyr në secilin site rrjetik për të ofruar një përvojë të pa ndërprerë. Nëse site-i juar i ri ishte bazuar në abonim, ky do të ishte zgjidhja ideale dhe rezultati.

Megjithatë, nëse natyra dhe qëllimi i supozuar të multisite-it ishte të ofrojmë site rrjetike të ndryshme që nuk kanë lidhje me njëri-tjetrin, është pothuajse gjithmonë e nevojshëm pluginet e jashtme ose shtesë për të manipuluar rolet e përdoruesve.

### Domeni dhe SSL {#domain-and-ssl}

Le të flasim për një instalim WordPress Multisite që pothuajse na shmang – Wordpress.com. Ky është shembulli më i gjatë i multisite-it të WordPress dhe demonstron aftësitë e tij të gjerë për t'u personalizuar dhe formuar për të plotësuar një qëllim.

Sot në internetin modern, përdorimi i SSL është pothuajse i detyrueshëm dhe administratorët e rrjetit të WordPress Multisite do të paraqiten me këto sfide.

Në konfigurimin e _subdomain_ (ndryshe nga domeni kryesor), site-t krijohen bazuar në emrin e domeneve kryesore. Kështu, një site i etiketuar si ‘site1’ do të krijohet si ‘site1.domain.com’. Duke përdorur një sertifikat SSL wildcard, administratorit e rrjetit mund të adresojë me sukses këtë sfidë dhe t'i ofrojë aftësitë e enkriptimit SSL për rrjetin.

WordPress Multisite përmban një funksion të mapi i domeneve që lejon sahte (network sites) të lidhen me emra domen të veçantë ose me emra domen të ndryshëm nga domeni kryesor i rrjetit.

Për administratorët e rrjetit, kjo paraqet një nivel shtesë kompleksit si në konfigurimin e emrave të domenve ashtu edhe në lëshimin dhe mirëmbajtjen e sertifikave SSL.

Në këtë kuptim, ndërsa WordPress Multisite ofron një mjet për të lejuar [www.anotherdomain.com](http://www.anotherdomain.com) të mapohet me 'site1', administratorit i rrjetit i mbetet sfidat e menaxhimit i dytë të entry-ve DNS dhe implementimit të sertifikave SSL jashtë sistemit.

## Ultimate Multisite {#ultimate-multisite}

Duke kuptuar ndryshimet midis një instalimi WordPress standalone dhe një instalimi Multisite, le të shohim si është Ultimate Multisite si armata ultim për ofrimin e Website as a Service (WaaS).

### Hyrje {#introduction}

Ultimate Multisite është mbledhja jote me çdo gjë kur vjen puna për krijimin e një Website as a Service (WaaS). Mendoni për Wix.com, Squarespace, WordPress.com dhe më pas mendoni për pronësimin e shërbimit tuaj.

Në thellësi, Ultimate Multisite përdor WordPress Multisite, por e bën këtë në një mënyrë që jo vetëm që zgjidh mijëdhjetëra sfidat që hasin administratorët e rrjetit me instalimet multisite, por edhe përzyrefon kapacitetet duke mbështetur një gamë të gjerë raste përdorimi.

Në seksionet e mëposhtëm do të shohim disa raste përdorimi dhe konsideratat që janë të nevojshme për të mbështetur ato raste.

### Raste Përdorimi (Use Cases) {#use-cases}

#### Rasti 1: Një Agjencia {#case-1-an-agency}

Të zakonshëm, aftësitë thelbësore të një agjencie gjenden në dizajnin e faqeve me aspekte si hostimi ose marketingun që listojnë si shërbime shtesë.

Për agjencit, Ultimate Multisite ofron një vlerë të jashtëzakonshme në aftësitë e tij për të hostuar dhe menaxhuar shumë faqe interneti në një platformë të vetme. Kjo është edhe më e vërtetë për agjencit që standardizojnë dizajnet e tyre në teme specifike si GeneratePress, Astra, OceanWP ose të tjerët mund të shfrytezojnë aftësitë e Ultimate Multisite për të aktivizuar automatikisht këto tema për çdo faqe të re.

Në mënyrë të ngjashme me shumëllojshmërinë e ofertave për çmimet agjenciale për plugin-e të zakonshme dhe popullore, përdorimi i Ultimate Multisite lejon agjencit të shfrytezojnë investimet ekzistuese duke ofruar një platformë të përbashkët nga e cila plugin-et mund të instalohen, mbulohen dhe përdoren.

Më probable është se përdorimi i një konfigurimi do të dëshirohej dhe fatkeqësisht Ultimate Multisite e bën shumë të lehtë facilitimin e mapi të domenit (domain mapping) dhe sertifikave SSL me integrimet e tij për disa ofrues hostingë popullore si Cloudflare dhe cPanel.

Kështu, duke shfrytëzuar një nga këto ofrues ose duke vendosur Ultimate Multisite pas Cloudflare, aspekte si menaxhimi i domenve dhe sertifikave SSL bëhen pak të thjeshta.

Agjencit që preferojnë të mbajnë kontroll të ngushtë mbi krijimin e faqeve do të vlerësojnë lehtësinë me të cilën mund të krijojnë faqe dhe të lidhin faqe me klientët dhe plane përmes interfejës së thjeshtë të Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontrolli i ngushtë mbi plugin-et dhe temat mbahet bazuar në produkt, duke lejuar plugin-et dhe tema të bëhen të disponueshme ose të fshehjen si gjendja e tyre aktive kur instanciohen për një faqe të re.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temat (Themes) ofroj funksionalitë të ngjashme, duke lejuar që temave specifike të aktivizohen ose fshihen në krijimin e faqes së internetit.

![Product theme limitations interface](/img/config/product-themes.png)

Agjencitë do të gjejnë qetësinë me Ultimate Multisite, duke u lejuar t'i bëjnë atë që janë më të mirë - dizajnin e faqeve web të jashtëzakonshme.

#### Rasti 2: Ofrues i nisjes (Niche Provider) {#case-2-niche-provider}

Ka një thirrje të vjetër që thotë, "bëj një gjë dhe bëja atë mirë". Për shumë specialistë kjo do të thotë krijimin e një produkti ose shërbimi rreth një ideje thelbësore.

Ndaj një golfeues i pasionuar që promovon faqe interneti për klube, apo ndoshta jeni një lojtar esports i pasionuar që ofron faqe interneti për klanet. Ndoshta një individ që promovon një shërbim rezervimi në restorante?

Për shumë arsye do të dëshironit të ofroni shërbime bazuar në një kerambo dhe platformë të përbashkëta. Mund të jetë se keni dizajnuar ose investuar në plugin-e personalizuara për të ofruar funksionalitetin e nevojshëm, ose mund të jetë që praktikën më të mirë industriale kërkon një formë standardizuese të dizajnit.

Një nga veçoritë inovative të Ultimate Multisite është përdorimi i template-ve (template sites). Një template site është një faqe ku temja është instaluar dhe aktivizuar, plugin-et e nevojshme janë instaluar dhe aktivizuar, dhe janë krijuar postime ose faqe shembullore. Kur një klient krijon një faqe të re bazuar në template, përmbajtja dhe cilësimet e template-it kopjohen në faqen e krijuar me veten.

Për një ofrues të faqeve dhe shërbimeve të nisjes (niche sites and services), kjo ofron një avantazh të paqëndrueshëm në aftësinë për të krijuar menjëherë një faqe gati me plugin-e dhe dizajnin e projektuar. Klienti duhet vetëm të ofrojë inputin më minimal për të përfunduar shërbimin.

Në varësi të kërkesave, konfigurimet e _subdirectory_ ose _subdomain_ mund të jenë të përshtatshme, në atë rast arkitektura zgjedhet midis një sertifikati SSL të thjeshtë për _subdirectories_ ose një sertifikat i wildcard-it SSL për _subdomains_.

#### Rasti 3: Hosting Web WordPress {#case-3-wordpress-web-hosting}

Ka shumë mënyra për të hostuar sahte WordPress, por rrallë është kaq e thjeshtë sa t'i ofrohet hapësirë web klientit me një version të parainstaluar të WordPress-it. Kjo është sepse nevojiten disa vendime dhe konsiderata që duhet të bashkohen për të ofruar një shërbim kuptueshëm.

Ultimate Multisite shkëlqen në këtë fushë duke ofruar një zgjidhje të plotë (turnkey solution) për hostimin e sahte WordPress. Në paketë përfshihen mekanizmat bazë për të ofruar shërbime abonimi, mbledhjen e pagesave, formularët e checkout-it, kuponet e uljes dhe komunikimet me klientin.

Çasti punës thelbësore që kërkohet për instalimin, konfigurimin dhe mirëmbajtjen e WordPress Multisite është e lehtësuar nga Ultimate Multisite në atë mjerë që administratorët e rrjetit vetëm duhet të marrin parasysh aspekte që lidhen me shërbimin ose nisjen e tyre si niche, si p.sh. nivelet produktet, çmimet dhe ofertat e shërbimeve.

Për zhvilluesit që dëshirojnë të integruam me Ultimate Multisite, zgjidhja kjo ofron gjithashtu një RESTful API të plotë dhe Webhooks për njoftimin e ngjarjeve.

Pa mbështetje në një sasi të mëdha pluginësh dhe licencave të jashtme, Ultimate Multisite ofron një zgjidhje me shumë funksionalitete dhe krahasueshëm me atë të Wix-it, Squarespace-it, WordPress.com dhe të tjerëve.

### Konsideratat Arkitekturore {#architecture-considerations}

Edhe pse nuk është një udhëzues i plotë, këto pika duhet të shërbejnë si udhëzim për zgjedhjen e duhur teknologjive për të mbështetur instalimin e Ultimate Multisite.

#### Hosting i Ndarshuar vs. Dedikuar {#shared-vs-dedicated-hosting}

Më vërtet, jo të gjithë ofruesjtë hosting janë të barabart dhe disa praktikojnë densitet ekstrem të serverëve. Ofruesit me kosto të ulët zakonisht gjenerojnë të ardhura duke maksimizuar densitetin e serverit. Si rezultat, instalimi juaj Ultimate Multisite mund të jetë vetëm një nga qindësa faqe në të njëjtin server.

Pa mbrojtje të përshtatshme nga ofruesi, faqet në një server të ndarshëm përjetojnë problemin e "fqinjit i zhurmshëm". Do të thotë se një faqe në të njëjtin server që konsumon atë shumë burim duhet t'i konkurrojnë me pjesën e mbetur të burimeve. Shpesh kjo shfaqet si faqe që janë të ngadalta ose nuk reagojnë në kohë.

Si ofrues i hostingut web, rrjedha e efektive do të thotë se klientët tuaj përjetojnë shpejtësi të ulëta, rang faqeje të ulët dhe shpesh shkurtim të klientëve (churn) pasi kërkojnë shërbime në vende të tjera.

Në thelb, i lirë nuk do të thotë mirë.

Ultimate Multisite është i njohur se punon me një numër ofruesjitorë hostinge të mirë dhe integruar mirë me mjedisin e tyre për të ofruar funksione si maperim domen (domain mapping) dhe SSL automatik. Këta ofruesitorë vlerësojnë performancën dhe ofrojnë një nivel shërbimi më të lartë se hostingi i ndarshëm.

Për një listë ofruesitorë që janë të pajtueshëm dhe udhiza të plotë konfigurimi për secilin, ju lutem kontrolloni dokumentacionin e Compatible Providers (Ofruesitorë të Përshtatshëm).

#### Konsideratat e Performancës {#performance-considerations}

Ultimate Multisite nuk është një aplikacion i ngadaltë, më tepër, është mrekullueshëm i shpejtë. Megjithatë, ai funksionon vetëm sa mirë si aplikacioni dhe infrastruktura që ndodhen poshtë tij dhe mund të përfiton vetëm atë që ka akses në to.

Mendojeni këtë: Ju jeni administratorit i rrjetit i një instalimi Ultimate Multisite me 100 faqe. Disa nga ato faqe po funksionojnë mirë dhe tërheq një numër vizitorë web çdo ditë.

Ky scenari i këtij do të jetë ndryshe në një nivel më të vogël, si p.sh., një deri në pesë faqe web, por para se shfaqen probleme të mëdha të skalës.

Nëse lajmë pa kujdes, faqa e vetme Ultimate Multisite do të ishte përgjegjëse për plotësimin e kërkesave të të gjithë vizitorëve të faqeve. Këto kërkesa mund të jenë për faqe PHP dinamike ose asete statike si stylesheet, javascript ose skedarë multimedia. Qoftë një faqe apo qind faqe, këto detyra bëhen përsëri, monotone dhe i humbur. Nuk është e nevojshme të përdorim fuqinë e CPU dhe memorin për të përpunuar një skedar PHP kur rezultati është informacion statik i njëjtë për çdo kërkesë.

Në mënyrë të ngjashme, një kërkesë për një faqe PHP ose HTML gjeneron dytëgojë kërkesa pasuese për skripte, stylesheet dhe skedarë imazhi. Këto kërkesa synojnë drejtpërdrejt serverin tuaj Ultimate Multisite.

Problemin mund të zgjidhet lehtë duke përditësuar serverin, por nuk rezulton një problem sekondar – latencat gjeografike. Vetëm disa servere në vende të ndryshme mund të adresojnë siç duhet kjo problem.

Për këtë arsye, shumica administratorëve të rrjeteve përdorin zgjidhje cache front-end dhe rrjete distribuimi i përmbajtjes (CDN) për të plotësuar kërkesat për faqe statike. Plotësimi i këtyre kërkesave dhe shërblimi i aseteve para se kërkesa të arrijë në server kthen mjetet e përpunimit, eliminojnë vonesat, shmangin përditësime të panevojshme dhe maksimizojnë investimet teknologjike.

Ultimate Multisite përfshin një addon sofistikuar Cloudflare që lejon administratorët e rrjeteve të vendosin instalimet e tyre pas Cloudflare dhe të përdorin jo vetëm aftësitë e tij cache, por edhe hosting DNS, sertifikatat SSL dhe mekanizma sigurie.

#### Backup-e {#backups}

Mund t'i kërkosh 50 njerëz për këshilla mbi backup-et dhe të marrësh 50 mendime të ndryshme mbi strategjitë e backup-eve. Përgjigja është: varet.

Çfarë nuk dyshohet është se rezervimet (backups) janë të nevojshme dhe se është pothuajse e paimagjinues që ato të mos menaxhojë ofruesi, veçanërisht një që ofron një shërbim menaxhuar. Si pasojë, klientët do të kërkojnë administratorin e rrjetit për të ofruar dhe menaxhuar këtë shërbim. Kush i kërkon administratorin e rrjetit është një problem krejtësisht tjetër.

Për qëllimet e kësaj seksioni, le të pajtohemi se rezervimi është një kopje në kohë të caktuar (point-in-time copy) të gjendjes së sistemit në momentin që fillon rezervimi. Thjesht thjesht, çfarëdo është gjendja e sistemit në momentin e rezervimit, ajo gjendje kapet dhe fiksohet në rezervimin.

Me këtë kuptim, përgjigja se si të arrijmë rezervimet dhe çfarë është më e mirë për mjedisin tuaj do varet kryesisht nga nevojat tuaja dhe aftësia e ofrues së hostimit për të plotësuar ato nevojat. Megjithatë, në rendin më të opinionuar deri te më pak opinionuar, opsionet e mëposhtme duhet t'ju japin disa udhëzime.

#### Snapshots (Këshfesh) {#snapshots}

Snapshots janë "bullet-i argjend" për rezervimet sepse janë të lehtë, pa probleme (deri që dëshironi të ktheheni) dhe thjesht funksionojnë. Megjithatë, ato kërkojnë ndonjë ndihmë nga ofruesi juaj dhe vlen kryesisht nëse keni një VPS (Virtual Private Server) ose diçka të ngjashme. Disa ofrues të listuar në dokumentacionin ton "Compatible Providers" ofrojnë rezervime që nuk kërkojnë asnjë ndërhyrje apo konsiderim më të administratorit të rrjetit.

Kur shërbimeve tradicionale e bëhet rezervat për skedarët dhe bazat të dhënash, ndërsa një snapshot (kapturje) synon të gjithë disku. Kjo do të thotë se nuk merret vetëm të dhënat e faqes në snapshot, por edhe sistemi operativ dhe konfigurimi. Për shumë njerëz kjo është një avantazh i qartë sepse një sistem i ri mund të krijohet pothuaj instiantan nga një snapshot dhe të vendoset në punë për të zëvendësuar një instance që po dështon. Në mënyrë të ngjashme, procesi i rikuperimit për të nxjerrë skedarët kërkon vetëm lidhjen e imazhit të snapshotit si disk në një instance ekzistuese, në mënyrë që skedarët të mund të akseshohen dhe kopjohen.

Snapshotet mund të sjellin një kostim shtesë nga providenci hostingut, por ato janë një sigurim kundër aksidenteve.

#### Skripte të Jashtme (External Scripts) {#external-scripts}

Nuk duket se ka mungesë skripteve dhe zgjidhjeve të jashtme për rezervimin e burimeve WordPress dhe MySQL-it, dhe këto do të funksiononin mirë për Ultimate Multisite pasi është një plugin WordPress që përdor sistemin operativ dhe bazën e të dhënave të WordPress. Kështu, një zgjidhje që rezervohet faqe WordPress do të mbulonte mjaftueshëm nevojat e Ultimate Multisite.

Nuk mund t'ju rekomandojmë një skriptë mbi tjetrin, por këshilla tona të përgjithshme është të bëni disa teste rezervimi dhe rikuperimi për të siguruar që rezultatet janë ato që dëshironi dhe për të qenë "sigur" duke vlerësuar vazhdimisht skriptën dhe funksionalitetin e saj, veçanërisht aty ku aplikohet ndonjë formë strategjie rezervimi diferenciale (differential backup strategy).

Duhet theksuar se këto skripte, gjatë ekzekutimit të tyre, do të rritin ngarkesën e sistemit, gjë që duhet marrë parasysh.

#### Plugins {#plugins}

Nuk ka pothuaj asnjë problem në WordPress që nuk mund të zgjidhet me një plugin dhe nëse menaxhimi i skripteve të jashtme nuk është zona juaj, ndoshta një plugin është opsioni më i mirë i ardhshëm.

Ndërsa pluginet ndryshojnë në opsione dhe funksionalitete, ato kryesisht bëjnë të njëjtën gjë: kopjimin e skedarëve dhe bazës së të dhënave të WordPress-it. Më pas, funksionalitetet ndryshojnë sepse disa pluginet mund të dërgojnë backup-e në shërbime eksterne si Google Drive ose Dropbox, ose në një lloj tjetër shërbimi të ruajtjes të objekteve që është i përshtatshëm si S3, Wasabi apo të tjerë. Pluginet më të plotë ofrojnë backup-e diferenciale ose një strategji për të bërë backup vetëm të të dhënave që janë ndryshuar për të ruajtur koston e ruajtjes eksterne.

Kur zgjidhni pluginin tuaj, kujtuni të verifikoni se është i aftë për multisite. Për shkak të natyrës së veprimtarisë gjatë kur po po ndodh backup-i, mund të prishni një ngarkesë të përkohshme në server derisa procesi nuk përfundon.

#### Domen dhe SSL {#domain-and-ssl-1}

Më shumë ka diskutuar tashmë lidhur me emrat e domenit në modin _subdomain_. Një zgjidhje pothuaj universale për administratorët e rrjetit është përdorimi i entry-ve wildcard DNS.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Ky lloj entry-i DNS do të rezolvojë me sukses _subdomain_ si ‘site1.domain.com’ dhe ‘site2.domain.com’ në një adresë IP 1.2.3.4, duke mbështetur Ultimate Multisite dhe në një masë më të madhe WordPress Multisite duke përdorur modin _subdomain_.

Kjo mund të funksionojë shumë mirë për HTTP sepse host-i i synuar lexohet nga header-t e HTTP-së, por rrare është faqja web ka aq thjeshtë këto ditë ku transaksionet e sigurta HTTPS janë pothuaj të detyrueshme.

Kujetojmë ka opsione të lehta për sertifikatat SSL. Në modin `subdirectory` mund të përdoret një certifikatë standard e domeneve. Këto janë të disponueshme me lehtësi dhe falas nga ofruesit që mund të përdorin shërbimin falas LetsEncrypt ose burim tjetër. Për të tjetrin rast, ato janë të disponueshme komercialisht nga autoritetet nëse jeni në gjendje të gjeneroni kërkesën për nënshkrim certifikate (CSR).

Për modin `subdomain` përdorimi i një sertifikate SSL wildcard do të bashkohet perfekt me një domene wildcard dhe do të lejojë që certifikata të jetë autoritative për domenin kryesor dhe të gjitha `subdomain`-et pa konfigurime shtesë.

Megjithatë, duhet të veti se sertifikatët SSL wildcard mund të mos funksionojnë me shërbime si Cloudflare nëse nuk jeni në një plan korporativ ose vendosni hyrjen në DNS vetëm, në këtë rast të gjitha cache dhe optimizimi kalojnë për detyrë.

Ultimate Multisite nga fillimi (out-of-the-box) ofron një zgjidhje për kët problem duke demonstruar përvojën tonë të gjerë me nevojat e WordPress multisites. Aktivizimi i kësaj add-on thotë që Ultimate Multisite do të përdorë kredencialet tuaja Cloudflare për të shtuar automatikisht hyrje në DNS për sitet e rrjetit në Cloudflare dhe për të vendosur modin si ‘proxied’. Kështu, çdo subsite të rrjetit, kur krijohet, do të ketë mbrojtjen dhe përfitimet e plotë të Cloudflare përfshirë SSL.

Varësisht natyrës dhe qëllimit të instalimit tuaj Ultimate Multisite, mund të jetë e nevojshme që klientët të përdorin domenet e tyre. Në këtë rast administrator i rrjetit bëhet përgjegjës për zgjidhjen e dy problemeve: një, hostimi i emrit të domeneve dhe dy, sertifikatat SSL për domen.

Për shumë njerëz, përdorimi i Cloudflare është një opsion i lehtë. Klienti vetëm duhet të vendosë domenit të tij në Cloudflare, të drejtojë një CNAME te domenit kryesor (root domain) të Ultimate Multisite dhe të mapi domenit të tij në Ultimate Multisite për të filluar marrjen përfitorive të emrit tuaj të domeneve të personalizuara.

Për jashtë kësaj, duhet të kërkohen zgjidhje alternative, gjë që është arsye pse Ultimate Multisite rekomandon një listë furnizuesve (Providers) që janë të pajtueshme. Kjo është sepse procesi i konfigurimit të DNS dhe SSL mund të jetë i vështirë. Megjithatë, me integrimin e Ultimate Multisite me këto furnizues, kompleksiteti do të zviteshjet shumë dhe procedura do të automatizohet.

#### Plugins {#plugins-1}

Është shumë e mundshme që ju të keni nevojë për plugin shtesë për të ofruar funksionalitet klientëve ose pajisjeve në internet. A funksionojnë të gjithë pluginet me WordPress Multisite dhe Ultimate Multisite? Po, varet.

Ndërsa shumica e plugin-eve mund të instalohen në një WordPress Multisite, aktivizimi dhe licencimi ndryshojnë nga autorit në autor.

Sfida qëndron në mënyrën se si aplikohet licencimi me disa pluginet që kërkojnë licencim bazuar në çdo domen. Kjo do të thotë që për disa pluginet, administratorit i rrjetit duhet të aktivizojë manualisht licencën për çdo plugin në çdo faqe të re.

 Prandaj, mund të jetë më mirë të kontrolloni me autorin e pluginit se si do të funksionojë ky plugin me një WordPress Multisite dhe ndonjë kërkesë ose procedurë speciale që kërkohet për ta licencuar atë.
