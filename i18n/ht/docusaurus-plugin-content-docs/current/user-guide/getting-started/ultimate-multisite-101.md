---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite se pa yon plugin WordPress ki pèmèt ou ofri WaaS oswa Websites as a Service bay kliyan yo. Anvan nou kòmanse epi aprann kijan Ultimate Multisite ka ede biznis ou ak kliyan ou, gen kèk konpreyansyon de baz nou bezwen genyen anvan sa.

## WordPress Multisite a {#the-wordpress-multisite}

Pifò nou byen konnen enstalasyon WordPress ki vini la (stock-standard). Ou ka kreye li atravè panel kontwòl prestè wèb ou a oswa, pou moun ki gen kouraj, mete yon nou sèvè wèb ak baz done, telechaje fichye kò a epi kòmanse pwosesis enstalasyon an.

Sa itilize pou milyon WordPress site nan tout mond lan men de nan pwen yon ajans oswa yon prestè wèb, ann diskite sou volum yo yon ti moman.

Malgre ke li fasil pou kreye youn sit WordPress oubyen senkè sit atravè yon panel kontwòl automate, pwoblèm yo kòmanse parèt byen bonè lè li vin nan menaj sa yo sit yo. Si ou pa jere yo, ou vin yon ti objekt piblik pou malware. Pou jere yo vle di fè yon efò ak resous epi menm si gen zouti eksteryè ak plugin ki ka ede simplifye menaj ak administrasyon WordPress site yo, fap la ke kliyan yo kenbe aksè administrasyon vle di sa yo efò yo ka fasil pou yo deplase.

Nan kò a li, WordPress bay yon fonksyon ki sèlman rele ‘Multisite’ ki remonte nan menm tan lwayaj nan 2010 lè lansman WordPress 3.0. Depi la, li te resevwa plizyè revizyon ki gen objekt pou bay nouvo fonksyon ak ranfòse sekirite a.

Nan esans, yon WordPress multisite ka panse tankou sa: Yon universitè kenbe yon sèl enstalasyon WordPress men chak fakilte kenbe sit WordPress li pwòp.

Pou nou dekouvri sa deklarasyon la, nou pral gade kèk terminoloji batatik ki genyen nan dokiman Ultimate Multisite men tou nan kominote WordPress an jeneral.

### Rezo a (The Network) {#the-network}

Nan kont WordPress, rezo multisite se kote ou ka jere plizyè subsit sites soti nan yon sèl dashboard. Men ke kreye yon rezo multisite diferan selon pwovider wèb la, men rezilta final la se anjeneral kèk direksyon anplisye nan fichye `wp-config.php` pou fè WordPress konnen li ap fonksyone nan mod sa a espesifik la.

Gen plizyè diferans klè ant yon rezo multisite ak yon enstalasyon WordPress ki pa gen okenn site pou kont li, nou pral diskite yo briitman.

#### Subdomain vs. Subdirectory (Subdomèn vs. Sous-direswa) {#subdomain-vs-subdirectory}

Youn nan desizyon ki pi rapid ou dwe pran se si enstalasyon multisite a ap fonksyone ak _sous-direswa_ (subdirectories) oswa _sous-dòmen_ (subdomains). Ultimate Multisite travay menm byen avèk de chwazi sa yo, men gen kèk diferans nan arkitektir ant de konfigirasyon sa yo.

Nan konfigirasyon _sous-direswa_ (subdirectory), sit rezo yo souvan resevwa yon chemen ki baze sou non domèn prensipal la. Pa egzanp, yon sit rezo ki labele ‘site1’ ap gen URL total li kòm `https://domain.com/site1`. Nan konfigirasyon _sous-dòmen_ (subdomain), sit rezo a pral gen pwòp _sous-dòmen_ li derivè nan non domèn prensipal la. Donk yon sit labele ‘site1’ ap gen URL total li kòm `https://site1.domain.com/`.

Malgre ke de opsyon yo se chwazi ki valide, itilizasyon _sous-dòmen_ ofri plizyè avantaj men li mande tou plis panse ak planifikasyon nan arkitektir li.

Nan sa DNS la, itilizasyon $\_subdirectories\_$ prezante yon defi ki pi senp. Tankou sit ètwat yo se jis pitit nan chemen prensipal la, ou sèlman bezwen yon sèl enskripsyon non domèn pou non domèn prensipal la. Pou $\_subdomains\_$, defi a chaje plis epi li mande oswa yon enskripsyon CNAME sepandan pou chak sit rezo a oswa yon enskripsyon wildcard (\*) nan rekò DNS yo.

Yon lòt zòn ki gen valè se sa ki gen rapò ak SSL la e emisyon ak itilizasyon sertifikat SSL. Nan konfigirasyon $\_subdirectory\_$, ou ka itilize yon sèl sertifikat domèn paske sit rezo yo jis se chemen nan non domèn prensipal la. Donk, yon sertifikat pou domain.com ap bay SSL ki apwopriye pou https://domain.com/site1, https://domain.com/site2 e souvan konsa.

Nan konfigirasyon $\_subdomain\_$, itilizasyon yon sertifikat SSL wildcard se youn nan opsyon ki pi komen yo. Tip sertifikat SSL sa a bay kòmantè pou yon domèn ak $\_subdomains\_$ li. Donk, yon sertifikat SSL wildcard ap bay kòmantè pou https://site1.domain.com, https://site2.domain.com e menm https://domain.com la.

Malgre gen lòt opsyon egziste, yo souvan limite nan espas ak aplikasyon epi yo mande konfigirasyon ak konsiderasyon anplis ki gen rapò ak atèknik pou w wè si li ap bon pou ou.

#### Plugins ak Themes {#plugins-and-themes}

Sa k ap bay WordPress la, se sa l pran tou, men anpil nan pwen non kliyan an. Nan yon enstalasyon WordPress endepandan si administrateur sit la mete yon plugin ki pa bon oswa li pa kenbe enstalasyon an ajou, sèl viktim ak koze aksyon sa a se tèt li. Sepandan, lè yon administrateur sit la mete yon plugin ki pa bon nan yon enstalasyon multisite, li kreye yon viktim pou chak sit ki enstale nan rezo a.

Pou sa rezon, lè ou configure kòm WordPress multisite, WordPress ap retire kapasite sèl administrateur sit la pou li mete plugin ak theme epi li mete kapasite sa a nan yon nouvo wòl ki rele 'network administrator' oswa 'super admin'. Wòl privilèje sa a ka deside si li pèmèt administrateur sit yo wè oswa jwenn mennu plugin yo nan dashboard yo, e si se konsa, si pèmisyon sa yo estendi pou _aktive_ o _deaktive_ plugin yo.

Jiskenn sa la, network administrator la responsab pou mete plugin ak theme nan rezo a epi bay pèmisyon pou itilize plugin ak theme sa yo pou sit rezo yo. Administrateur sit yo pa ka mete plugin ak theme oubyen jwenn aksè nan plugin ak theme ki pa bay sit yo.

#### Itilizatè ak Administrateur {#users-and-administrators}

Nan WordPress Multisite, tout sit rezo a pataje menm baz done a epi donplike menm itilizatè, wòl, ak kapasite. Fason pi bon pou ou panse sa se ke tout itilizatè yo gen manm nan rezo a e pa yon sit espesifik.

Avèk konpreyansyon sa a, li ka pa swen pou ou pèmèt kreye itilizatè epi pou sa rezon WordPress Multisite retire kapasite sa a sèl administrateur sit la epi li mete l nan menm wòl network administrator la. Anvan sa, network administrator la ka bay privilèj ki nesesè ba yon administrateur sit pou pèmèt li kreye kont itilizatè pou sit li pwòp la.

<!-- Screenshot indisponible: interface jere itilizatè rezo WordPress Multisite -->

Pou repete deklarasyon an, menm si kont itilizatè yo parèt ki gen rapò ak sit sa a, yo de fwa yo te atèdike nan rezo a e se poutèt sa yo dwe inik pou tout rezo a. Gen kèk ka kote non itilizatè yo pa disponib pou reyèlman mete yo anrejistre pou rezon sa la.

Malgre ke sa se konsept la nan sistèm entreprise, men li sou yon sèl kote pou reyegisite ak autentifikasyon itilizat la souvan difisil pou moun ki byen konnen enstalasyon WordPress endividyèl kote administrasyon itilizat la pi fasil.

#### Media {#media}

Lè sit entènat yo pataje yon sèl baz done nan WordPress Multisite, yo kenbe chemen septe sou sistem fichye a pou fayil media yo.

Kote ki te nan WordPress la (wp-content/uploads) rete menm; sepandan, chemen li chanje pou reflechi ID inik sit entènat la. Konsekwans, fayil media pou yon sit entènat parèt kòm wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Nou te mansyone anvan ke gen avantaj espesyal nan konfigirasyon _subdomain_ olye de _subdirectory_, e men li se sa: chemen yo.

Nan yon konfigirasyon _subdirectory_, sit prensipal la (sit premye ki kreye lè rezo a etabli) ak sous-sit entènat yo dwe pataje menm chemen k ap mennen nan non domèn an. Sa gen potansyèl pou anpil konfli.

Pou pòs, yon chemen /blog/ obligatwa ajoute sou sit prensipal la pou evite konfli ak sit entènat yo. Sa vle di ke permalink ki byen fòm tankou ‘Non Pò’ ap prezante kòm domain.name/blog/non-pò/

<!-- Screenshot indisponible: paramèt permalink WordPress montre chemen /blog/ nan konfigirasyon subdirectory -->

Nan yon konfigirasyon _subdomain_, aksyon sa a pa nesesè paske chak sit entènat benefisye de separasyon domèn konplè epi li pa bezwen depann sou yon sèl chemen. Yo kenbe chemen septe yo ki espesifik pou _subdomain_ yo.

<!-- Screenshot indisponible: paramèt permalink WordPress pou konfigirasyon subdomain -->

#### Static Pages {#static-pages}

Nan la konfigirasyon _subdirectory_, chans pou gen konfli nan non, menm pou paj estatik kòm sit prensipal ak sit rezo yo pataje menm chemen an.

Pou evite sa, WordPress bay yon fason pou ou ka blake kèk non sit ki pa koresponn ak non premye sit la. Anjeneral, administrateur rezo a ap mete chemen ra (root paths) paj sit prensipal la.

<!-- Screenshot pa disponib: konfigirasyon rezo WordPress montre non sit ki bloke pou evite konfli -->

Nan konfigirasyon _subdomain_, posiblite gen konfli nan non yo diminye paske _subdomain_ a se yon bagay ki espesifik pou sit rezo a epi li pa gen okenn relasyon ak sit prensipal la.

### Registrasyon {#registration}

Nan konfigirasyon rezo WordPress Multisite, gen plizyè opsyon nouvo pou registre itilizatè yo, ki pèmèt itilizatè nouvo ak egzistans yo kreye sit.

<!-- Screenshot pa disponib: konfigirasyon rezo WordPress Multisite montre opsyon registrasyon -->

Kontrè a kont enstalasyon WordPress ki se yon sèl site, sit rezo yo pa kenbe opsyon komen pou pèmèt itilizatè yo reyisi oswa bay registrasyon sa yo nan wòl (roles).

<!-- Screenshot pa disponib: konfigirasyon itilizatè sit WordPress ki se yon sèl site montre opsyon limit -->

Lè kont akta itilizatè yo kreye, conta sa yo jene nan nivo rezo a. Donk anplis de pwezi nan nenpòt sit espesifik, yo ap gen menm bagay la pou sit rezo a. Sa gen kèk avantaj ak desavantaj espesyal.

Pou egzanp, imagine ou WordPress Multisite ou anpil nan biznis nou anjeneral la se nouvèl ak enfòmasyon. Ou ta mete multisite a epi apre sa ou pral kreye sit ki gen rete pou finans, teknoloji, divertissement e lòt domèn enterè yo pandan ou kenbe kontwòl jeneral sou plugins ak themes yo. Chak sit rezo a ap gen yon nivo kontwòl pi gwo sou aparans ak eksperyans itilizatè sit rezo a non custom post types oswa kategori post regilye.

Jiskenn sa, lè yon itilizatè konekte, li konekte nan rezo a epi an fen li konekte nan chak sit rezo a tou pou bay yon eksperyans ki san okenn pwoblèm. Si sit ou la nouvo a se baze sou abònman, sa ta dwe rezoud ide ak rezilta a.

Men, si nèt amaç ak objektif multisite a se pou ofri sit rezo ki pa gen okenn relasyon ant yo, li ap mande anpil plugins eksteryè oswa adisyonèl pou manipile wòl itilizatè yo.

### Domèn ak SSL {#domain-and-ssl}

Ann pale de yon enstalasyon WordPress Multisite ki prèske evite atansyon nou - Wordpress.com. Sa se pi gwo egzanp nan WordPress multisite epi li montre kapasite l pou adapte epi fòme pou reyalize yon objektif.

Jodi a sou entènèt modèn, itilizasyon SSL la anpil obligatwa e administrateur rezo WordPress multisite yo ap konfòte ak sa yo chèz la.

Nan konfigirasyon _subdomain_, sit yo kreye baze sou non domèn prensipal la. Sa vle di yon sit ki labele ‘site1’ pral kreye kòm ‘site1.domain.com’. Pou itilize yon sertifikat SSL wildcard, yon administrateur rezo ka rezoud defi sa a epi bay kapasite enkripsyon SSL pou rezo a.

WordPress Multisite genyen yon fonksyon ki rele domain mapping, ki pèmèt sit WordPress yo asosye ak non domèn koutim oswa non domèn diferan de domèn rad (root domain) rezo a.

Pou administrateur rezo yo, sa kreye yon nivo okenn konplike sou konfigirasyon non domèn menm nan tankou emisyon ak antretyen sertifikat SSL la.

Nan kapasite sa a, pandan ke WordPress Multisite bay yon fason pou map [www.anotherdomain.com](http://www.anotherdomain.com) sou ‘site1’, administrateur rezo a rete avèk defi pou li jere ekzanp DNS entries yo ak implimentasyon sertifikat SSL la anba l.

## Ultimate Multisite {#ultimate-multisite}

Lè nou konprann diferans ant yon enstalasyon WordPress stand-alone ak yon enstalasyon Multisite, ann gade kijan Ultimate Multisite se armay ultimate pou bay Websites as a Service (WaaS).

### Entwodiksyon {#introduction}

Ultimate Multisite se kouto swiss ou lè w ap kreye yon Website as a Service (WaaS). Panse a Wix.com, Squarespace, WordPress.com epi apre sa panse sou gen pwòp sèvis ou.

Anba kapak Ultimate Multisite itilize WordPress Multisite men li fè sa nan yon fason ki pa sèlman rezoud anpil defi administrateur rezo yo ak enstalasyon multisite a, men li amelyore kapasite yo pou sipòte yon gwo varyete ka itilizasyon.

Nan seksyon ki vini an, nou pral gade kèk ka itilizasyon komen ak konsèvasyon ki nesesè pou sipòte ka sa yo.

### Ka Itilizasyon (Use Cases) {#use-cases}

#### Ka 1: Yon Agansy (An Agency) {#case-1-an-agency}

Tipikman, konpèns souvan yon agansy la se nan konsepsyon sit entènèt ak aspè tankou wè rezoud yo oswa marketing yo ap lis kòm sèvis adisyonèl.

Pou agence, Ultimate Multisite prezante yon valè senprik nan kapasite li pou bay ak jere plizyè sit entènèt sou yon sèl platfòm. Men plis toujou pou agence ki standardize konsepsyon yo sou tem ki espesifik tankou GeneratePress, Astra, OceanWP oswa lòt; yo ka itilize kapasite Ultimate Multisite pou aktive otomatikman tem sa yo pou chak nouvo sit la.

Men menm jan ak anpil ofres pou pri agence pou plugin komen ak popilè, itilizasyon Ultimate Multisite pèmèt agence yo itilize envestisman ki egziste lè yo bay yon platfòm komen kote plugin yo ka instale, swiv epi itilize li.

Pi chans ke itilizasyon yon konfigirasyon ta renmen, e la, Ultimate Multisite fè sa senp pou fè map nan domèn (domain mapping) ak sertifikat SSL avèk entegrasyon li pou anpil founisè wèb popilè tankou Cloudflare ak cPanel.

Donk lè ou itilize youn nan founisè sa yo oswa si ou mete Ultimate Multisite dèyè Cloudflare, aspè tankou jere domèn ak sertifikat SSL vin pi fasil anpil.

Agence ki prefere kenbe kontwòl rèd sou kreasyon sit yo ap apresye fasilite ki genyen pou yo ka kreye sit epi asosye sit yo ak kliyan ak plan atravè entèfas Ultimate Multisite la senplifye a.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontwòl rèd sou plugin ak tem yo kenbe sou baz chak pwodwi grasa entèfas ki byen klè nan Ultimate Multisite la, ki pèmèt plugin ak tem yo ka disponib oswa ka fèmen tankou eta aktive yo lè yo itilize pou yon nouvo sit.

![Product plugin limitations interface](/img/config/product-plugins.png)

Les thèmes offrent des fonctionnalités similaires, ce qui permet d'activer ou de masquer certains thèmes lors de la création du site.

![interface des limitations des thèmes produits](/img/config/product-themes.png)

Les agences trouveront la tranquillité d'esprit avec Ultimate Multisite leur permettant de faire ce qu'elles font de mieux : concevoir des sites web exceptionnels.

#### Cas 2 : Fournisseur de niche {#case-2-niche-provider}

Il y a une vieille expression qui dit : « fais une chose et fais-la bien ». Pour beaucoup de spécialistes, cela signifie créer un produit ou un service autour d'une idée centrale unique.

Peut-être êtes-vous un golfeur passionné qui promeut des sites web aux clubs ou peut-être êtes-vous un joueur d'esport passionné qui fournit des sites web aux clans. Un individu qui promeut un service de réservation aux restaurants, par exemple ?

Pour de nombreuses raisons, vous voudrez fournir des services basés sur un cadre et une plateforme communs. Il se peut que vous ayez conçu ou investi dans des plugins personnalisés pour fournir les fonctionnalités nécessaires ou il se peut que les meilleures pratiques de l'industrie exigent une forme d'approche standardisée pour la conception.

L'une des fonctionnalités innovantes d'Ultimate Multisite est l'utilisation des sites modèles (template sites). Un site modèle est un site où le thème a été installé et activé, les plugins nécessaires sont installés et activés, et des articles ou pages d'exemple ont été créés. Lorsque le client crée un nouveau site basé sur le modèle, le contenu et les paramètres du modèle sont copiés vers le nouveau site créé.

Pour un fournisseur de sites et de services de niche, cela offre un avantage inégalé dans la capacité à créer instantanément un site prêt à l'emploi avec des plugins personnalisés et une conception. Le client n'a qu'à fournir l'entrée la plus minimale pour compléter le service.

Selon les besoins, la configuration _subdirectory_ ou _subdomain_ peut convenir, et dans ce cas, le choix d'architecture se fera entre un certificat SSL simple pour les _subdirectories_ ou un certificat SSL wildcard pour les _subdomains_.

#### Cas 3 : Hébergement WordPress {#case-3-wordpress-web-hosting}

Il y a une multitude de façons d'héberger des sites WordPress, mais il est rarement aussi simple que fournir de l'espace web à un client avec une version de WordPress préinstallée. C'est parce qu'un certain nombre de décisions et de considérations doivent être réunis pour offrir un service significatif.

Ultimate Multisite excelle dans ce domaine en fournissant une solution clé en main complète pour héberger des sites WordPress. La solution inclut les mécanismes de base pour fournir des services d'abonnement, la collecte de paiements, les formulaires de paiement (checkout forms), les bons de réduction et les communications avec les clients.

Une grande partie du travail essentiel requis pour installer, configurer et maintenir un WordPress Multisite correctement est facilitée par Ultimate Multisite, car les administrateurs réseau n'ont qu'à considérer des aspects liés à leur service ou à leur niche, comme les niveaux de produits, la tarification et les offres de services.

Pour les développeurs qui souhaitent s'intégrer avec Ultimate Multisite, la solution offre également une API RESTful complète et des Webhooks pour les notifications d'événements.

Sans dépendre d'une multitude de plugins externes et de licences, Ultimate Multisite fournit une solution riche en fonctionnalités et comparable à celle de Wix, Squarespace, WordPress.com et autres.

### Considérations Architecturales {#architecture-considerations}

Bien que ce ne soit pas un guide complet, les éléments suivants devraient servir de guide pour le choix correct des technologies afin de supporter une installation Ultimate Multisite.

#### Hébergement Partagé vs. Dédié {#shared-vs-dedicated-hosting}

Malerezman, pa gen tout fournisseur hosting yo pa menm. kèk nan yo mete pratik ki sou densite sèvè ekstre. Les fournisseur ki gen pri ba anjeneral fè lajan yo lè yo maksimize densite sèvè a. Nan ka sa, enstalasyon Ultimate Multisite ou ka sèlman yon soti nan plizyè senk dosye sit sou menm sèvè a.

San pwoteksyon apwopriye ki genyen nan fournisseur la, sit yo sou yon sèvè ki pataje eksperyansye pwoblèm 'voisine briyan' (noisy neighbour). Sa vle di, yon sit sou menm sèvè a konsome anpil resous ki lòt sit yo dwe konpetisyon pou resous ki rete. Souvan sa parèt kòm sit ki dlo oswa ki pa reponn nan tan reyèl la.

Kòm yon fournisseur hosting w ap fè ou, kou ak effè yo pral vle di ke kliyan ou eksperyansye vitès ki mal, rang paj ki ba epi konvèsyon (bounce rates) ki wo souvan mennen nan pèdi kliyan yo paske yo chèche sèvis lòt kote.

An rezime, bon pa vle di chè.

Ultimate Multisite la koni li travay ak kèk fournisseur hosting ki byen epi li entegre byen ak anviwònman yo pou bay fonksyon tankou domain mapping ak SSL otomatik. Yo sa yo apresye pèfòmans e bay yon sèvis ki pi bon pase hosting ki pataje.

Pou yon lis fournisseur ki koresponn ak yo ak enstriksyon konplè pou chak, tanpri gade dokiman Compatible Providers la.

#### Konsiderasyon Pèfòmans {#performance-considerations}

Ultimate Multisite pa aplikasyon ki dlo, non, li rapid anpil. Sepandan, li pafè jan ak aplikasyon ak enfatyè k ap sèvi a epi li ka benefisye sèlman sa l gen aksè pou l itilize.

Panse sou sa: Ou se administrateur rezo Ultimate Multisite ki gen 100 sit. kèk nan sit sa yo ap mache byen e atire yon kantite vizitè sit chak jou.

Sa yon senaryo tankou sa a ta diferan sou yon pi piti nivo, di pa twa site soti nan yon site pou chwazi de chwazyè ou. Men, anvan lontan pwoblèm ki gen rapò ak gwo nivo yo ap parèt.

Si ou kite sit Ultimate Multisite la pou kont li san sipò, li pral responsab pou ranpli demann tout vizitè yo sou tout sit sa yo. Demann sa yo ka ye pou paj PHP dinamik oswa atif ki se stat tankou stylesheets, javascript o dosye medya. Si se yon sèl site oubyen senk dosye, travay sa yo vin repete, monoton ak gaspi. Li pa nesesè pou ou itilize pouvwa CPU ak memwa pou pwosesis yon dosye PHP lè rezilta a se menm enfòmasyon stat pou chak demann.

Menm jan an, yon sèl demann pou yon paj PHP oswa HTML pral jenere plizyè demann ki suiv li pou script yo, stylesheets yo, e dosye imaj yo. Demann sa yo dirèkteman reyalize sou sèvè Ultimate Multisite ou a.

Ou ka fasilman rezoud pwoblèm sa a lè ou monte (upgrade) sèvè a, men sa pa rezoud yon dezyèm pwoblèm - latans jeografik (geographic latencies). Sèlman plizyè sèvè nan plas diferan yo ka reyalize pwoblèm sa a byen.

Pou sa rezon an, pi gwo administrateur rezo itilize solisyon cache front-end ak rezo distribisyon kontni (CDN) pou ranpli demann pou paj statik yo. Ranpli demann sa yo epi sèvi atif anvan demann an rive sou sèvè a ede w pwodui resous pwosesis, elimine retard, evite monte ki pa nesesè, e maksimize envestisman teknolojik ou.

Ultimate Multisite gen ladan yon add-on Cloudflare sofistike k ap pèmèt administrateur rezo yo mete enstalasyon yo dèyè Cloudflare epi itilize non sèl kapasite cache li men tou hosting DNS, sertifikat SSL ak mekanis sekirite.

#### Backups (Kopi anvan) {#backups}

Ou ka mande 50 moun pou konsèy sou backups e resevwa 50 opinyon diferan sou estrateji backup. Repons la se: sa depann de ou.

Sa sa a ki pa nou pa diskite se ke backup obligat, epi li prèske imajine pa gen moun ki jere yo, sitou si ou gen yon sèvis ki jere bagay la. Konsekou, kliyan yo ap chèche administrateur rezo a pou bay epi jere sèvis sa a. Kisa ki kote administrateur rezo a ap chèche se yon lòt pwoblèm nèt.

Pou objektif seksyon sa a, nou pral aksepte ke backup se yon kopi moman an moman ki te genyen nan estati sistèm nan lè backup la te kòmanse. Senplike, pase kijan estati sistèm nan lè backup la pran li, estati sa a ap capture epi bloke nan backup la.

Avèk konprechisyon sa a, repons sou kijan pou w atvine backup yo ak sa ki pi bon pou anviwònman ou pral depann anpil de bezwen ou yo e kapasite pwovizè w pou satisfè bezwen sa yo. Sepandan, nan lòd plis opinyonèl rive nan ki gen mwens opinyon, opsyon ki anba la ta bay kèk gid.

#### Snapshots (Kopi moman) {#snapshots}

Snapshots se "silver bullets" pou backup paske yo fasil, senp (jiskaske ou vle restore), e yo "just work". Men li mande yon ti èd de pwovizè w epi sa a aplike reyalman si ou gen yon VPS (Virtual Private Server) oswa yon bagay ki sanble ak li. Plis pwovizè ki list nan dokiman 'Compatible Providers' nou an ofri backup ki pa bezwen okenn entèvansyon oswa konsiderasyon adisyonèl de administrateur rezo a.

Lè, lè sa ki fè diferans ant backup tradisyonèl ak snapshot la: backup tradisyonèl yo mete sou fayil ak baz done (database), pandan ke snapshot la ap pran tout disk la. Sa vle di pa sèlman done sit la k ap jwenn nan snapshot la, men tou sistèm operasyon an ak konfigirasyon li. Pou anpil moun, sa se yon avantaj klè paske ou ka kreye yon nouvo sistèm de snapshot la byen vit epi mete l an travay pou ranplase yon sistèm ki pa mache ankò. Men menm jan an, pwosesis retou a pou jwenn fayil yo sèlman mande ou konekte imaj snapshot la kòm disk nan yon sistèm ki deja egziste pou w ka aksede epi kopye fayil yo.

Snapshot yo ka gen yon kòt ajoute ak pwove hosting an, men se yon pwoteksyon kont aksidan.

#### Scripts Eksteryè (External Scripts) {#external-scripts}

Gen san okenn limit nan scripts eksteryè ak solisyon pou backup resous WordPress ak MySQL epi sa yo ta mache byen pou Ultimate Multisite paske li se yon plugin WordPress ki itilize sistèm fayil ak baz done WordPress la. Donk, yon solisyon ki ap backup sit WordPress la ta kouvri bezwen Ultimate Multisite a ase.

Nou pa ka rekòmande yon script sou lòt pase lòt, men konsèy jeneral nou se pou w fè plizyè test backup ak retou pou asire ke rezilta yo ap satisfè ou epi "asire ou" touye nan kontinwite evalye script la ak fonksyonalite li espesyalman kote gen yon kalite estrateji differential backup aplike.

Li enpòtan pou w konnen ke scripts sa yo, pandan yo ap mache, ap grandi chaj sistèm lan ki dwe konsidere.

#### Plugins {#plugins}

Gen pwoblèm pafè nan WordPress ki pa ka rezoud ak yon plugin epi si jere scripts eksteryè se pa bagay ou, men petèt yon plugin se opsyon pi bon an.

Malgre que les plugins vary nan opsyon ak fonksyon yo, yo fè menm bagay la: kopye fichye WordPress ak kontni baz done a. Apre sa, fonksyonalite yo diferan paske kèk plugins ka voye backup yo bay sèvis ki eksteryè (tankou Google Drive oswa Dropbox) oswa nan yon kalite sèvis stoke objè ki koresponn ak yo tankou S3, Wasabi oswa lòt. Yo ki gen plis fonksyon bay backup diferansyèl oswa yon estrateji pou backup sèlman done ki te chanje pou pwoteje kòs estoke eksteryè yo.

Lè ou ap chwazi plugin ou a, pran swen pou ou verifye li konpayi ak multisite. Ak pase natirèl fonksyon li pandan ke backup la ap mache, ou ka espere yon ti piki sou sèvè a jiskaske pwosesis la fini.

#### Domèn ak SSL {#domain-and-ssl-1}

Anpil bagay te diskite deja konsènan non domèn nan modèl _subdomain_ multisite. Yon solisyon ki prèske tout moun itilize pou administrateur rezo yo se fè yon wildcard DNS entry.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Tip DNS entry sa a ap rezoud _subdomain_ tankou ‘site1.domain.com’ ak ‘site2.domain.com’ nan yon adrès IP 1.2.3.4, sa ki sipòte Ultimate Multisite epi an plis WordPress Multisite itilize modèl _subdomain_.

Sa ka mache parfe pou HTTP paske nòtè (headers) HTTP la li soti nan yon host ki se soule, men rarèm ke sit entènèt yo si senp tankou sa kounye a kote tranzaksyon HTTPS ki sekirize anpil obligatwa.

Bonjou, gen fasil opsyon pou sertifikat SSL. Nan mod pa _subdirectory_ (sous-dossier), ou ka itilize yon sertifikat domèn regilye. Yo disponib fasil ak gratis soti nan pwove hosting ki ka itilize sèvis LetsEncrypt gratis oswa lòt sous. Sinon, yo disponib komèsyalman soti nan otorite yo si ou kapab jenere demann sertifikasyon an.

Pou mod _subdomain_ (sous-domèn), itilizasyon yon sertifikat SSL wildcard pral koresponn perfekt ak yon domèn wildcard epi li pèmèt sertifikat la vin otorize pou domèn prensipal la ak tout _subdomains_ san okenn konfigirasyon ekstra.

Sepandan, ou dwe note ke sertifikat SSL wildcard ka pa fonksyone ak sèvis tankou Cloudflare ankò ou nan yon plan enterprizi oswa si ou mete antre a DNS sèlman kote tout cache ak optimizasyon yo pèdi benefis yo.

Ultimate Multisite ki vini an (out-of-the-box) bay yon solisyon pou pwoblèm sa a epi li montre eksperyans nou la ak bezwen WordPress multisites. Kounye a, lè ou aktive add-on senp sa a, Ultimate Multisite pral itilize kredansyèl Cloudflare ou yo pou ajoute otomatikman entri DNS pou sit reswèt nan Cloudflare epi mete mod yo sou 'proxied'. Nan fason sa a, chak sous-sit reswèt rezo a, lè li kreye, ap gen tout pwoteksyon ak benefis Cloudflare la, ki gen ladan SSL.

Selon natirèl ak objektif enstalasyon Ultimate Multisite ou an, gen yon bezwen pou kliyan yo itilize domèn yo tèt yo. Nan ka a, administrateur rezo a responsab pou rezoud de pwoblèm: premye, alojman non domèn an epi deyèm, sertifikat SSL pou domèn sa a.

Pou anpil moun, itilizasyon Cloudflare se yon opsyon fasil. Kliyan yo jis bezwen mete domèn yo sou Cloudflare, dire yon CNAME pou domèn prensipal Ultimate Multisite a epi map domèn yo nan Ultimate Multisite la pou kòmanse benefisye de non domèn pèsonèl yo.

Lòte sa, ou bezwen chèche lòt solisyon ki ka sèvi, se poutèt sa Ultimate Multisite rekòmande yon lis Pwovizyon Konpatib (Compatible Providers). Sa paske pwosesis pou mete DNS ak SSL ka yon bagay ki pa senp. Sepandan, ak entegrasyon Ultimate Multisite avèk yo, konplike a anpeche epi pwojè a automate.

#### Plugins {#plugins-1}

Li trè posib ou pral bezwen plis plugins pou bay fonksyonalite pou kliyan ou oswa sit rezo ou. Tout plugin yo travay ak WordPress Multisite e Ultimate Multisite? Sa depann.

Pandans pi gwo plugin yo ka enstale nan yon WordPress Multisite, aktive epi lisans yo chanje selon kò kreyatè a.

Defi a se kijan lisans la aplike avèk kèk plugin ki mande lisans sou baz domèn (per-domain basis). Sa vle di pou kèk plugin, administrateur rezo a bezwen aktive lisans la manman pou chak plugin sou chak sit nouvo.

Donk pi bon bagay se tcheke ak kreyatè plugin an kijan plugin yo ap travay avèk yon WordPress Multisite e nenpòt kondisyon espesyal oswa pwosedi ki nesesè pou lisans li.
