---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite huwa plugin WordPress Multisite li jippermek li toffri WaaS (Web as a Service) jew Websites għall kliementi. Qabel ma niddir l-għoti u nifhmu kif Ultimate Multisite jistax jgħin lil biznis tiegħek u lil kliementi, għandna xi għarfien fundamentali li għandna li nisvolvi.

## Il WordPress Multisite {#the-wordpress-multisite}

Għal ħafna minnna, inħossu l-installazzjoni standard ta WordPress. Tgħid it-tneqqas biex tgħmlih minn panel tal-kontroll tal-hosting tiegħek jew, għall il-ġenerali (jew għallom), tset applikazzjoni web u database, tnedix il-file core u tibda l-proċess ta installazzjoni.

Dan jaħdem għal miljonijiet ta siti WordPress fuq din id-duni, iżda minn perspektiva ta agenzija jew fornitur tal-hosting, jiddiskutu l-volumi għal minitra.

Kif jkun it-tneqqas biex tgħmli xi sito WordPress waħda jew għalih cent siti b'mod awtomatiku minn panel tal-kontroll, problemi jibdew juri dwar iż-żmien meta jidir il-ġestjoni ta’d siti. Jekk ma jitqabbilji (unmanaged), tiġi target primarju għall-malware. Li tgħandu b'ġestjoni significa li hija esercizio ta sforzo u resurssi, u ben sinifikanti jidher li l-għodda tagħha tista' tiffaħ min alat u plugin esterni li jistgħu jgħinu biex jipproċednu b'mod aktar sempliċi għall-ġestjoni u amministrazzjoni ta’WordPress sites.

F'il-core tiegħu, WordPress joffri funqjoni li tistgħu tintejjeb biss b'titoli "Multisite", li jista' jiġi trassat mill-origini lill-2010 mal-llaunch ta’WordPress 3.0. Minħabba minn hekk, għandu is-revisioni tal-mejju li huma oġġetti biex jipprovdu funqjonijiet nuovi u jgħattu is-segurità.

F'essenza, WordPress multisite jista' jiġi imassimillat b'dan: Un Università tista' tgħandu installazzjoni waħda ta WordPress iżda kull fakultà tista' tgħandu sit tiegħaha proprju ta WordPress.

Biex nifitlien dan il-istatjam, niddirixiemna xi żmienji biex naħseb fuq terminoloġja biex nifhmu l-istatjam biex WordPress u fil-komunità tal-WordPress.

### Il Network (R-Rete) {#the-network}

F'WordPress, il network multisite huwa postell li tista' tmarrigu żmienji (subsites) min dashboard waħda. Kif ma jiddu l-kunsillenti għall-creaġimenti ta network multisite, l-risultatu finali huwa tipikament xi direttivi aggiemiet fil-file wp-config.php biex tgħti WordPress b'informazzjoni li qed jopera f'din il-mod speċifiku.

Jumha għandna ħafna differenzi bejn network multisite u installazzjoni WordPress standalone, u nħobb nfermuh b'mod qasir.

#### Subdomain vs. Subdirectory (Subdirettori) {#subdomain-vs-subdirectory}

Ikuna dan l-deċizzjoni li għandek tmur biex tiffaċċja: jiddeċiedi se l-installazzjoni multisite tqiegħed b _subdirectories_ jew _subdomains_. Ultimate Multisite jopera b'mod ikejfu ma'dha, iżda huma għandhom xi differenzi arkitekturali bejn il-kunsillenti.

F'konfigurazzjoni ta _subdirectory_, siti network jirriġettaw l-path bbażat fuq ism madomaina primari. Biex nippjiegħel it-tostart, siti network li tistgħu jkun mmarkati b 'site1' għandhom il-URL kollu tagħhom biex ikun https://domain.com/site1. F'konfigurazzjoni ta _subdomain_, sit network jirriġettaw subdomaina proprja derivata min ism madomaina primari. Għalhe, siti mmarkat b 'site1' għandhom il-URL kollu tagħhom biex ikun https://site1.domain.com/.

Kif ma l-opzioni kbejn huma opzjonijiet validi perfetti, l-użu ta _subdomains_ jgħudi xi vanta, iżda jirreqiex għal ħsieb u pianificazione aktar.

Fit ba DNS, l'użu tal-`_subdirectories_` jista problema relativament semplice. Minħabba li siti reti huma biss figlioli tal-path parent, għandu biex ikun esistenti passat tista' entry ta domenu waħdha għall-domenu madwar. B'mod de jekk `_subdomains_`, il-problema hija ħafna aktar complessa u teħtieġ li tkun għandek entry CNAME separata għal ogni sit reti jew entry wildcard (\*) f-record tal-DNS.

Aree oħra ta l-considerazzjoni huwa tiegħu tal-SSL u l-emissioni u l-użu tal-certifikati SSL. F konfigurazzjoni `_subdirectory_`, certifikat domenu waħda tista' ittuża minnna l-siti huma biss path tal-domenu madwar. Għalfe, certifikat għadomenu.com tista' توffri SSL adekwat għal https://domain.com/site1, https://domain.com/site2 u għalih.

F konfigurazzjoni `_subdomain_`, l-użu tal-certifikatu SSL wildcard huwa minn il-opzioni më comuni. Dan tip certifikatu SSL jipprovvidi enkripsjoni għad domenu u subdomains tiegħu. Għalfe, certifikatu SSL wildcard jipprovvidi enkripsjoni għal https://site1.domain.com, https://site2.domain.com u HTTPS://domain.com stess.

Kif hija opzioni oħra, huma spiss limitati fl-scope u applikazzjoni u teħtieġ konfigurazzjoni u considerazzjoni aggiementi biex tqassmu l-adegwazzjoni tiegħek.

#### Plugins u Themes {#plugins-and-themes}

X'la WordPress jgħid, jista' jgħid ukoll minn perspektiva tal-customer. F installazzjoni WordPress standalone, se l-administrator tal-siti jinstall plugin ħażin jew ma jippassja biex jipprovvidi l-installazzjoni tiegħu għall-aggiornamenti, l-viqqa' u l-talfiem huma l-istess. Madankollu, se l-administrator tal-siti jinstall plugin ħażin fuq installazzjoni multisite, hu jikkawża vittima ta ogni sit installat f-network.

Għal peress dan, meta jkun konfigurat bħala WordPress multisite, WordPress jixabbir il-kapabilità mill-administratorijiet tal-siti ta installa pluginijiet u temi u invece jmur din il-kapabilità għall-network administrator jew "super admin" li jkun n नवे creat. Dan il-ruolo privilegiat jista' jiddeċiedi se jalluw l-administratorijiet tal-siti network jgħانو o jakses menu tal-plugin f'dashboard tagħhom, u meta kien dan il-permess jinkludi l-attivazzjoni jew il-disattivazzjoni tal-pluginijiet.

F'dan mod, l-network administrator huwa responsabbli għall-installazzjoni ta pluginijiet u temi f'network u jiddelega permessi biex jkun jistgħu jutilizzaw dan il-pluginijiet u temi f'siti network. L-administratorijiet tal-siti ma jistgħux jiġu installa pluginijiet u temi jew jakses pluginijiet u temi li ma huma assegnati lis-siti tagħhom.

#### Utenti u Administratorijiet {#users-and-administrators}

F'WordPress Multisite, kull sito network tajba isxi l-database u fil-mejlus isxi l-utenti, ruoli u kapabilità. Il-mod aktar adekwat biex tfihmu huwa li kull utente huwa membru tal-network u ma partikolari siti.

B'għandha fehmu dan, jista' tkun diġustat li tithjeb l-utenti u għal peress dan WordPress Multisite jixabbir din il-kapabilità mill-administratorijiet tal-siti u jmurha għall-network administrator. B'mejlus, l-network administrator jista' jiddelega il-privilegiji nepreżsa lis-administrator ta siti biex jkun jistgħu jieħdu account utenti għas-siti tagħhom.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Jifabbilja l-dittakin, per ankba li l-account utenti jiddehjaha relatat lis-sita li huma fil-verità hija assegnata lill-network u għal peress dan jkun unika b'mod fih kull network. Jista' jkun ewlieni fejn ismijiet tal-utenti ma jistgħux jiġu registrati minħabba dan.

Although it's not a foreign concept in enterprise systems, this single source of user registration and authentication is often a difficult concept to understand for people familiar with stand-alone WordPress installations where user administration is somewhat easier.

#### Media {#media}

Where network sites share a single database in a WordPress Multisite, they maintain separate paths on the filesystem for media files.

Il-lokazzjoni standard ta WordPress (wp-content/uploads) tajjeb; però il-indirizzjoni tiegħu tinteressil biex turi l-ID uniku tal-site network. Għalhekk, il-file ta media għas-site network juri bħala wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Qed nferrat qabel li jkun għandna vantaġġi differenti għall-konfigurazzjoni ta _subdomain_ kontra _subdirectory_, u fl-forza hija: il-paths.

F'konfigurazzjoni ta _subdirectory_, is-sito primari (is-sito ewliem li jgħidu meta l-network jitqabbel) u is-siti subsit network għandhom jgħandu l-istess path li jmur minn il-domain name. Dan għandu l-potenzjal biex jkun għal ħafna konflittji.

Biex nipprevjeni conflittji ma' siti network, jiddeħħol path obbligatorju /blog/ is-sito primari. Dan jkun b'mod li permalinks iżgħar bħal ‘Post name’ jinfrattil bħala domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

F'konfigurazzjoni ta _subdomain_, dan l-aġġunt ma jkunx preżedut perché kada sito network jista' jifidi min separazzjoni kumplita tal-domain u għoli ma għandu jfidja b'path waħdhom. Ilhom jinħtieġu path differenti basati fuq il-subdomain tagħhom.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

F'konfigurazzjoni ta _subdirectory_ (subdirettori) l-potenzjal tal konflikti fl-nomi estendi għall-pajti statici bħal siti principali u siti reġistrali. Il-siti main u siti reti jgħandu ism/indirizzament isiem.

Biex jipprevjeni dan, WordPress joff mod biex tixgħel (blacklist) xi nomi di siti biex ma jkollhomx konfliktu mal-nomi tal-siti ewlenin. B'tipu, l-administrator ta' resekuturi jidħol il-root paths tal-pajti tal-sita principale.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

F'konfigurazzjoni ta _subdomain_ (subdomeni), il-possibbiltà għall-konflitti fl-nomi hija mitigata min l-subdomenu biex huwa uniku għas-sita reti u ma jkun relattiv għal xejt mill-sita principal.

### Registrazzjoni {#registration}

F'kontrolli ta' resekuturi tal-WordPress Multisite, huma disponibili diversi opzioni biex tiskribi (register) utenti ġoddi, li jippermet l-utenti ġoddin u esistenti biex ikunu siti.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

B'kontra installazzjonijiet tal-WordPress standalone (siti solenni), siti reti ma jipprovvdu il-opzioni mwamin biex jippermettu registrazzjonijiet ta' utenti jew jgħinaw dak l-registrazzjonijiet għall-ruoli.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Meta jiġu creati konti tal-utenti, il-konti huma generati fuq lejn il livell ta' resekuturi (network level). Għalhe, invece tal-li huma appartenenti għas-sita speċifiku, huma appartenenti lill-resekutori. Dan għandu xi vantaġġi u kontra.

עבור דוגמה, נניח שאת WordPress Multisite שלך הייתה בעסק של חדשות ומידע. תקים את ה-multisite ולאחר מכן תיצור אתרי רשת לכלים כמו פיננסים, טכנולוגיה, בידור ותחומי עניין אחרים תוך שמירה על שליטה כוללת ב-plugins וב-themes. כל אתר רשת יהיה בתורו בעל רמת שליטה רבה יותר במראה ובתחושת המשתמש של אתר הרשת שלו מאשר סוגי פוסט מותאמים אישית או קטגוריות פוסט רגילות.

במידה כזו, כאשר משתמש נכנס לאתר, הוא נכנס לרשת ובסופו של דבר הוא נכנס לכל אתר רשת כדי לספק חוויה חלקת. אם האתר החדש שלך היה מבוסס מנויים, זו הייתה הפתרון והתוצאה האידיאליים.

אם, עם זאת, הטבע והמטרה המיועדים של ה-multisite היו להציע אתרי רשת שאין ביניהם קשר כלשהו, כמעט תמיד נדרשים plugins חיצוניים או נוספים כדי לשלוט בהרשאות המשתמש.

### דומיין ו-SSL {#domain-and-ssl}

בואו נדבר על התקנת WordPress Multisite שכמעט חורגת מהשינוי שלנו - Wordpress.com. זהו למעשה הדוגמה הנרחבת ביותר ל-wordpress multisite ומדגים את היכולות הרחבות שלו להיות מותאם ומוצג כדי למלא מטרה מסוימת.

היום באינטרנט המודרני השימוש ב-SSL הוא כמעט חובה, ומנהלי רשת של WordPress multisites ניצבים בפני אתגרים אלו בקרוב.

בפריסת _subdomain_ (תת-דומיין) אתרים נוצרים על סמך שם הדומיין הראשי. כך, אתר שיוסמן כ-'site1' ייווצר כ-'site1.domain.com'. באמצעות שימוש בתעודת SSL עם Wildcard, מנהל רשת יכול להתמודד בהצלחה עם האתגר הזה ולספק יכולות הצפנת SSL לרשת.

WordPress Multisite għandu funzione ta mappatura tal-domain li tista' assoċjata siti rešewti (network sites) ma' domeni kustomi jew domeni differenti minn il-domenu ġuridiku (root domain) tal-network.

Lill-administratorijiet ta network, dan huwa layer aggiem tal-komplessità sia f'konfigurazzjoni tal-domain sia nell'emetting u manutenzjoni tal-SSL certificates.

B'mod kif ma WordPress Multisite jipprovvidi mod li jista' mappat [www.anotherdomain.com](http://www.anotherdomain.com) għal 'site1', l-administrator ta network jipprovdi lilhu l-maħtur tal-managament eksternal tal-DNS entries u l-implementazzjoni tal-SSL certificates.

## Ultimate Multisite {#ultimate-multisite}

Mentre nifhmu l-differenzi bejn installazzjoni WordPress stand-alone u installazzjoni Multisite, famu nħarsu kif jista' jkollu l-Ultimate Multisite bħala arsenal ultim tal-fornita ta Websites as a Service (WaaS).

### Introduzzjoni {#introduction}

L-Ultimate Multisite huwa l-Swiss Army knife tiegħek meta qed tgħmli Website as a Service (WaaS). Isperza f Wix.com, Squarespace, WordPress.com u famu nħarsu possidenza tal-servizz tiegħek.

Sodda, sotto il pannell, l-Ultimate Multisite jista' jiegħtieħdu l-WordPress Multisite iżda b'mod li ma jista' jsolvi l-myriad tal-isfida li jaffrontaw l-administratorijiet ta network mal-installazzjonijiet multisite, iżda jipprovvidi capacità li jgħażlu għal varietà widien u casus oġġetti li jistgħu jiġu supportati.

F'sezzjonijiet li j följande nifhmu xi casus u konsiderazzjonijiet comuni li jagħmlu l-support għall-casus kien hemm.

### Casus Oġġetti (Use Cases) {#use-cases}

#### Casus 1: Aġenzija {#case-1-an-agency}

B'mod tipiku, il-skills principali ta aġenzija jista' jkunu f'disjenijiet tal-websites b'aspettak bħal l-hosting jew il-marketing li jkun msemmi bħala servizzi aggiem.

Biex agjenzi, Ultimate Multisite jgħod offerta diġitali incredibla b'abbliż tal-qabbar tiegħu li jista' jhosti u jidabbilji siti blawli fuq piattaforma waħda. Għal agjenzi li standardizzaw il-disegni tagħhom fuq temi speċifi bħal GeneratePress, Astra, OceanWP jew oħra, l-Ultimate Multisite tista' sfrutta l-abbliż tiegħu biex jattivaw awtomatik dan il-temi għal kada siti ġdid.

F'mod ikum, mal-abbliż tal-dealijiet għall-prezzi tagħhom għall-pluginijiet komuni u popolari tal-agjenzi, l-użu tal-Ultimate Multisite jista' jagħmel li l-agjenzi sfruttaw l-investimenti esistenti bidi furnixxi piattaforma comune minn fil-meħtieġ li pluginijiet jistgħu jiġu installati, jippreżew u jutilizzati.

Probabbli, l-użu tal-konfigurazzjoni se jkun magħmor, u fwliet, l-Ultimate Multisite tispina biex tfassilji mapping ta domini u sertifikat SSL b'integrazzjonijiet tagħha għal ħafna fornituri ta hosting popolari u servizzi bħal Cloudflare u cPanel.

Għal meta fl-użu tal-واحد minn dan il-fornituri jew biex tpożi l-Ultimate Multisite permezz ta Cloudflare, aspetti bħal il-ġestjoni tal-domini u sertifikat SSL jidirfu bħala ħafna semplici.

Agjenzi li jorġu biex jipprovdu kontroll stretto fuq biex jiġu creati siti jgħinux l-għażla kif tista' jikunu siti massoci għall-klijenti u piani permezz l-interfaccia semplifika tal-Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontroll stretto fuq il-pluginijiet u temi jitħtret fuq bazi prodot tal-Ultimate Multisite minn interfatti tiegħu intuiċi li jippassiljaw l-pluginijiet u temi biex jistgħu jiġu magħru o ma jistgħu jiġu magħru, u stat ta l-attivazzjoni tagħhom meta jitqammet għal siti ġdid.

![Product plugin limitations interface](/img/config/product-plugins.png)

I temi fornissono funzionalità simili, permettendo a certi temi di essere attivati o nascosti durante la creazione del sito.

![Product theme limitations interface](/img/config/product-themes.png)

Gli agenzie troveranno tranquillità con Ultimate Multisite che permette loro di fare ciò che sanno fare meglio: progettare siti web eccezionali.

#### Caso 2: Fornitore di nicchia {#case-2-niche-provider}

C'è un vecchio detto che dice: "fai una cosa e falla bene". Per molti specialisti, questo significa creare un prodotto o un servizio attorno a un'unica idea centrale.

Forse sei un appassionato di golf che promuove siti web ai club o potresti essere un giocatore di esports appassionato che fornisce siti web alle clan. Forse un individuo che promuove un servizio di prenotazione ai ristoranti?

Per molte ragioni vorresti fornire servizi basati su una struttura e piattaforma comuni. Potrebbe essere che tu abbia progettato o investito in plugin personalizzati per fornire la funzionalità necessaria, oppure potrebbe essere il caso che le migliori pratiche del settore richiedano una forma di approccio standardizzato al design.

Una delle caratteristiche innovative di Ultimate Multisite è l'uso dei template siti (template sites). Un sito template è uno dove il tema è installato e attivato, i plugin necessari sono installati e attivati, e vengono creati post o pagine di esempio. Quando un cliente crea un nuovo sito basandosi sul template, i contenuti e le impostazioni del template vengono copiati nel nuovo sito creato.

Per un fornitore di siti e servizi di nicchia, questo offre un vantaggio ineguagliabile nella capacità di creare istantaneamente un sito pronto all'uso con plugin e design personalizzati. Il cliente deve fornire solo l'input più minimo per completare il servizio.

Dependet min il-es bigħod, konfigurazzjonijiet ta _subdirectory_ jew _subdomain_ jistgħu jidħlu, u f dan peress l-architettura għandna se jkun bejn opzjonijiet biex nistabbiliss certifikat SSL semplice għal _subdirectories_ jew certifikat SSL wildcard għal _subdomains_.

#### Kaso 3: Hosting Web WordPress {#case-3-wordpress-web-hosting}

Jum huwa ħafna modi biex tista' hosti siti WordPress, iżda mhux famu jkun sempliċi minn fornix spazzja web lil klijent mal-versjoni ta WordPress pre-installata. Dan hija peress li għal qasir tal deċiedi u konsiderazzjonijiet għandna jkun żviluppati biex nipprovdu servizz b'signifikanza.

Ultimate Multisite jxuq f dan l-aħħar billi joffri soluzzjoni turnkey komprewda għall-hosting ta siti WordPress. Il-soluzzjoni hija inklużi mekanismi primari biex nipprovdu servizzi ta abbonament, kollum tal-pagamenti, formijiet ta checkout, voucher discount u komunikazzjoni mal-klijenti.

Gran parte tal-aġġunt integrali li għandna biex ninstallaw, nkonfigurar u nmaintained WordPress Multisite b'mod korrett jolt jkun fasil minn Ultimate Multisite, sabiex l-administratori ta r-rannet jkun għalihom biex ikunu jifhmu aspetti li jkun relatat għas-servizz jew nitħtieġa biex jkun fih, metaħħa tal-niche tiegħu, bħal livelli ta prodotti, prezzijiet u offerti ta servizzi.

Biex l-developer jistgħu jiġu integrati mal-Ultimate Multisite, il-soluzzjoni toffri wkoll API RESTful u Webhooks komprewda għall-notifikazzjoni tal-eventi.

Minqust li niddependu fuq ħafna plugin u licenziamenti esterni, l-Ultimate Multisite joffri soluzzjoni b'funzjonalità għad-ħer u comparabbli mal-Wix, Squarespace, WordPress.com u oħra.

### Konsiderazzjonijiet Arkitettrali {#architecture-considerations}

Mentre li hija giddiretta mhux guida komprewda, il-elementi tal-folji tagħna jidħlu biex jkun għajnuna għall-selezzjoni korretta tal-teknoloġiji biex tivvanta l-installazzjoni ta Ultimate Multisite.

#### Hosting Shared vs. Dedicated {#shared-vs-dedicated-hosting}

Ma se la tutti i fornituri di hosting ma kbe żżid, u xog xi prattica densità server ekstremi. I fornituri b'cost tipikament generawu rividja min jommassi densità server. Għal tal-għax, l-installazzjoni tiegħek ta Ultimate Multisite tista' tkun biss waħda min ħammit siti fuq is-server isiem.

Minqu l-protezzjonijiet appropjiati mill-fornitur, is-siti fuq is-server ġenerali jikkontinu esperimenti il-problema tal-‘noisy neighbour’. Jiddu, s-sita fuq is-server isiem jkonsum dan ħafna resurssi li l-alt siti għandhom jkompetu għall-resurssi li qed jkun. Spiss huwa se jaffidix b'siti li huma lenti jew ma jirrispondu f'temblu.

Bħala fornitur ta hosting web, il-flow tal-effetti jgħandu li is-klijenti tiegħek jikkontinu esperimenti velocità pjanija, rank taqessa u bounce rates għol, li spiss joltju għal churn tal-klijenti meta huma jagħmlu riċetta servizzi l-alt.

B'mod kif jikkunsidra, b'cost ma jkunx significa tajjeb.

Ultimate Multisite jkun magħruf li jservi ma' xogħol ta fornituri hosting tajba u jiġi integrat tajjeb mal-ambiente tagħhom biex jipprovdi funzioni bħal domain mapping u SSL awtomatiku. Il-fornituri homm jvalwaw l-performance u jipprovdu servizz aktar għajja min il-shared hosting.

Biex għandek lista ta fornituri kompatibbli u istruzzjonijiet kompleti biex tsetta għal kulhon, jiddeq fuq dokumentazzjoni Compatible Providers.

#### Considerations ta Performance {#performance-considerations}

Ultimate Multisite mhux applikazzjoni lenta, ma hu sorprendentemente velo. Madankoll, huwa jaffidix biss qed jkun kif jkun l-applikazzjoni u l-infrastruttura tal-parti taqabbil tiegħu u jista' jipprovvidi biss dak li għandu access għalih.

Isapilja dan: Inti għandek bħala amministratur reġistral tal-network ta installazzjoni Ultimate Multisite b'100 siti. Xogħol minn is-siti kien tajba u jattira num tal-visitatijiet fuq is-web kada ġurnata.

Il-ċenari huwa differenti fuq scala aktar żgħira, meta qed nittla min waħda għox o ħamsa siti, iżda qabel problemi tal-scala se jidħlu b'mod ewliem.

Meta ma jkunx msemmi, il-site Unimate Multisite huwa l-responsabbli tfarraġa tal-richiesti ta' tutti i visitaturi għall-siti. Il-richiesti hajn possibbli għal pajji PHP dinamiku jew asset statiku bħal stylesheet, javascript jew filemja media. Għal siti waħda jew cent mill-siti, dan il-funzjonijiet jidħlu ripetittivi, monotoni u maġġuni. Ma huwa neċessar l-użu tal-CPU power u memoria biex jipproċessa filemja PHP meta l-output huwa informazzjoni statika isxi għal ogni richiesta.

Bmod ikum, richiesta waħda għal pajji PHP jew HTML tiffaqid fil-meqsa richieste multipli li jidduq għas-scriptijiet, stylesheet u filemji immaġini. Il-richiesti dan huma direttament indirizzati għall-server Unimate Multisite tiegħek.

Jiddaħħol b'mod fasil biex tsolvi dan il-problema bix-upgrade tal-server, iżda ma jfixxxix xogħol sekondarju – latenzijiet geografi. Jidduq l-problema dan b'mod appropriat biss server multipli f muniti differenti.

Għal kuntratt dan, l-majarri ta' rete għalihom użaw ħafna soluzzjonijiet ta caching tal-front-end u reti distribwiti ta' kontent (CDN) biex jfilfuq il-richiesti għall-pajji statiku. Il-filfuq dan l-richiesti u l-servita tal-asset qabel ma tifarriqha l-server jippassja resorsi ta' proċessament, jiddehnju l-awxija, jevita upgrade maġġuni u jmaximmizza l-investimenti fil-teknoloġija.

Il-Unimate Multisite inkludi add-on sofisticat Cloudflare li jippermettix lil majarri ta' rete jikkontrollaw il-installazzjonijiet tagħhom permezz tal-Cloudflare u jutilizzaw mhux biss l-capacità tal-caching tiegħu, iżda wkoll hosting DNS, sertifikati SSL u mekanismi di sigurtà.

#### Backup {#backups}

Tista' tistaqsi 50 persuni għall-parir fuq il-backup u tirċievi 50 opinjonijiet differenti fuq strateġiji ta' backup. Il-għapus huwa: jiddependi.

X-x-x

Il-punt li ma jgħu b'dissenfu huwa li l-backup għandhom jkun obbligatorju u li hu quasi impossibbli li homma ma gestiti mill-provider, speċjalment qabel li jofferta servizz gestiti. Minħabba dan, il-customerin jorxu għall-network administrator biex jgħandu u jgestjoni dan is-servizz. Kien il-problem bl-network administrator huwa problema wara.

B'mod li nifhmu l-istess sezzjoni, niddikjar li backup huwa kopja tal-sistema f un pjum tal-istat fil-ħin li jkun inizjojat il-backup. B'mod biex njassir: massaqist il-istat tal-sistema fl-ħin tal-backup jinkludi u jfixxxi f il-backup.

Ma għalfeh, l-għapus kif jgħandu il-backup u xie ma huwa l-aħjar għall-ambiente tiegħek jiddependi ħafna mill-reqievi tiegħek u abilità provider hosting biex jaffidu dan ir-reqievi. Madankollu, fil-ordina tal-opzioni li huma l-più opinjonati għall-li huwa l-meno opinjonat, il-opzioni taħt qed jgħandu xi indirizzjiet.

#### Snapshots (Screenshots) {#snapshots}

Il-snapshots huma l-soluzzjoni perfetta biex jgħandu il-backup perché huma fasi, ma għandhomx problemi (finin li tixtiebiex tirrestaw) u "żgħażlu". Huqso biex jgħandu xi ħuda mill-provider tiegħek u japplikaw l-forza tagħhom quasi biss se tista' tkun VPS (Virtual Private Server) jew xi ħaġa kifma hija. Il-provider b’mod wieħed li huma l-lista fil-dokumentazzjoni 'Compatible Providers' tiegħene joffru backup li ma għandhomx ħafna intervenzjoni jew konsiderazzjoni mill-network administrator.

Mentre i backup tradizionali mirano l-filementi u i database, il snapshot mira a tutto il disco. Questo significa che non viene catturata solo l-dati del sito nel snapshot, ma anche il sistema operativo u la configurazzjoni. Per ħafna, dani huwa vanta distinta perché un sistema ġdid jista' wirdi creat quasi istantament min snapshot u wirdi mġiegħed biex jiddeja instanza mal-għaġrifa. Fil-mod ġdid, il-proċess ta rikuperiment biex tirriji l-filementi jipprovdi biss attacher is-snapshot image bħal disk għall-instanza esistenti biex l-filementi jistgħu jiġu aċċessati u kopjati.

Is-snapshot jista' jattira costi aggiemali mill-provider ta hosting, iżda huwa polizza assicurativa kontra l-inċidenti.

#### Scripts Esterni {#external-scripts}

Jumblu li ma hemm ħsara ta scripts u soluzzjonijiet esterni biex tikkontrollaw WordPress u resursi MySQL u dan jista' jservu għall-Ultimate Multisite, peress huwa plugin WordPress li jista' jiegħdu l-filesystem u id-database tal-WordPress. Għalhekk, soluzzjoni li tikkontrolla siti WordPress tista' tgħmlu adeguat għall-esigenza ta Ultimate Multisite.

Mma nistgħu la nġgħandu scripts wa scripts oħra, is-parir ġenerali huwa li tgħmlu diversi test ta backup u rikuperiment biex tiassuru li l-risultati huma żgħar u biex "tkażxi biex tkażxi" minn peress li tqasam kontinwament is-script u l-funzjonalità tiegħu, speċjalment fejn japplika qualche forma ta strategia ta differential backup.

Jista' jiġi notat li dan is-scripts, wa qed jorxu, jgħaddu l-load tal-sistema u għandek tħseb fuq dan.

#### Plugins {#plugins}

Quasi ma hemm problemi f WordPress li ma jistgħu jiġu soluti b'plugin u jekk tmur b'managament ta scripts esterni mhux il-tuq tiegħek, meta plugin huwa l-opzjoni li tqaddem.

Mentre i pluginijiet jikkontinu biviestu opzioni u funzjonalità, l-più importanti huma li l-istess funzione: kopiare il file tal-WordPress u l-database. Wara dan, l-funzjonalità tiferi; x-x-x x-x-x pluginijiet jistgħu invia l-backup għal servizzi esterni bħal Google Drive jew Dropbox, jew għal tipi ta sistemi ta stoccjo kompatibbli bħal S3, Wasabi u oħra. Il-pluginijiet aktar komprewnji jipprovdu backup differentiċjat (differential backups) jew xi strategia biex tibdak backup biss tad-data li kien ġejja fattuta biex risparmi l-kostijiet tal-stoccjo esterni.

Meta tixxli plugin, għandu tkun attenta biex ti verifichi li huwa *multisite aware*. Minħabba natura operazzjonali tiegħu, waqt li backup qed jiffur, tista' tipprovdi żmien ta carico temporann fuq il-server fin ma jkun il-proċess jkomplutt.

#### Domain u SSL {#domain-and-ssl-1}

Ħafna hija diskussija già li għal domini f modalità *subdomain* multisite. Soluzzjoni quasi universali għall-administratorijiet ta r-rannet huwa l-użu tal-wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Dan tip ta entry DNS jgħin biex jipprovdu *subdomains* bħal ‘site1.domain.com’ u ‘site2.domain.com’ għall-IP address ta 1.2.3.4, ilabbida supporta Ultimate Multisite u WordPress Multisite aktar ħafna b'modalità *subdomain*.

Dan jista' jservi per l-HTTP b'mod perfetti biex host target jitqed mill-HTTP headers, iżda rarament huwa web sempliċi fl-għadd li kien il-HTTPS seguru quasi obbligatorju hemm issa.

Fortunatament, jista options semplici għall-SSL certificates. F modalità _subdirectory_ (subdirettori), liema certificat ta domini regolari jistgħu jiġu użati. Hanno disponibbli b'mod fasil u free minn fornituri hosting li jistaqxu uqtari l-servizz tiegħu, jew minn sorgijiet oħra. Altra, huma disponibili kommersjalment minn awtoritajiet jekk titkunsabiex tista' tgħmli l-certificate signing request (CSR).

F modalità _subdomain_, l-użu ta certificat SSL wildcard se jittlaq perfettament ma' domini wildcard u jallwet jippermetti li l-certificate jkollu awtorità għad domini root u kull _subdomains_ b'mod bil-configurazzjoni minimi.

Madankoll, għandienji jkun b'notali li certificat SSL wildcard ma jistgħux jaħmlu ma' servizzi bħal Cloudflare mela li tkun fuq plan enterprise jew tgħallwet l-entry għad DNS only, f'kien dan il-caching u l-ottimizzazzjoni jidduċċja.

L-Ultimate Multisite di-out-of-the-box jipprovdi soluzzjoni għal dan il-problema, li tistabbilixxi l-esperjenza ekstensa tiegħene mal-ħtieġijiet tal-WordPress multisites. B attivazzjoni ta dan add-on semplici, l-Ultimate Multisite jista' użaw il-credentials tiegħek ta Cloudflare biex jiddejna awtomatik entries ta DNS għall-network sites f'Cloudflare u jsethom b'mod ‘proxied’. B'dan mod, kada subsite network, meta jitcrea, jkollu l-protezzjoni u l-benefiċji kollha tal-Cloudflare inkluż SSL.

Dependenti natura u fini installazzjoni Ultimate Multisite tiegħek, jista' jkun għandhom il-customer bżonn li jgħandu domini proprju tagħhom. F dan peress, l-administrator network jkollu isolvi żewġ problemi: oħra, l-hosting tal-domini u ssertifikat SSL għall-domini.

Lillu għal ħafiet, l-użu ta Cloudflare huwa opzjoni sħiħa. Il-klijenti jipprovvdu biex ippojtu dan il-domain fuq Cloudflare, jippoġġu CNAME għall-root domain ta Ultimate Multisite u jmap dan il-domain f Ultimate Multisite biex jibdew jista' jifrufu min isme custom tal-domain tiegħhom.

Ħalwa minn dan, għandien bypassi li għandhom issaġġu, li staqsi l-Ultimate Multisite lista ta Fornitori Kompatibbli (Compatible Providers). Dan hija biex ma jkun il-proċediment tal-setup tal-DNS u SSL proċediment mhux sħiħ. Madankollu, mal-integrazzjoni ta Ultimate Multisite ma jkunx il-komplessità ħafija u il-proċediment huwa awtomatiku.

#### Plugins {#plugins-1}

Il-probabbiltà hija għolja li għandek bżonn plugin aggiemali biex toffri funksjonalità lill-klijenti tiegħek jew siti ta nnetz. Għal ma tutti i plugins jgħانو mal WordPress Multisite u Ultimate Multisite? Il-għapus huwa.

Mentre li maggiora tal-plugins jitqassmu f WordPress Multisite, l-attivazzjoni u il-licenza hijaختلف min l-aħjar għall-aħjar.

It-tħayyol jikem il-problema kif tiddir l-licenza b'mod li xi plugins jirrikjettuna licenza fuq bazi ta domain. Dan jkun significa li għal xi plugins, l-administrator tal-nnetz għandu attiva manualment il-licenza għal ogni plugin fuq ogni sit ġdid.

Għal peress, meta huwa l-aħjar huwa li tqesser mal-aħjar tal-plugin kif jgħandu l-plugin tiegħu biex jaħdem mal WordPress Multisite u jiddeqreq xogħol speċjali jew proċedimenti biex jiġi licenziat.
