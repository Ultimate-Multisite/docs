---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite er ein WordPress Multisite plugin sem gjer at þú getur bjóða WaaS eða Websites as a Service fyrir viðskiptavini. Fyrir að vi dýpum inn og lærum hvernig Ultimate Multisite getur hjálpað þínu fyrirtæki og viðskiptavinum er nokkrar grunnkenntningar sem við þurfum að ná í.

## WordPress Multisite {#the-wordpress-multisite}

Mest af okkur eru okkur vitir um standardinn WordPress-innstallsinn. Eða þú ert að skapa hann með kontrollpanel þess þingsins þitt hefðarvinnuþjónustu eða, fyrir áhugaðeika, sett upp nýtt webbþjónustu og database, drá um kjarnstefnum og byrja innstallsferlið.

Þetta virkar fyrir milljónir WordPress-sæti allan heim, en frá sjónarstjörnu verkefndstéssins eða þjónustu erum að ræða möguleika fyrir fjölda sýnna í einingu. Þegar það kemur til að stjórna þessum sýtunum byrjar það átt að sýnast því þetta er ekki bara einn WordPress-siti eða jafnvel hundra með sjálfskiptum kontrollpanelinn. Ef þú ert ekki í stjórnunarferlið er þú að hita fyrir skammaður. Til að stjórna þá þarf það að vera ábyrgð og að nota aðstæðir, og þótt það sé yfirburðar verkfæri og plugin sem geta hjálpað við að einfalda stjórnun og leiðurstjórn WordPress-siti, því að viðskiptavinir halda ábyrgð á aðgangur getur lettlega verið sýnt.

Í kjarninn er WordPress með eigin möguleika sem heitir ‘Multisite’, sem spyrst upp að 2010 í samkvæmt lansun WordPress 3.0. Í þessu tímabil hefur það tekið fleiri uppáhald og breytingar til að koma nýjum möguleikum fram og styrkja öryggisendur.

Í ensku er einn WordPress multisite sem getur sést sem þetta: Ein háskóli heldur á einn innstæð WordPress, en hver fakultet heldur á sínu eiga WordPress-siti.

Til að bryta nedanð þetta áframum skoðum nokkrar grunnhugtök sem eru til staðar ekki bara í dokumentum Ultimate Multisite, heldur í heiminum WordPress.

### Netverkinn {#the-network}

Í WordPress er netverk (multisite network) það sem leysir því að fleiri subsíti geti verið stýrt úr einn dashboard. Þótt sköpun af netverki skilur sig eftir milli staðbundna hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá staðbundnum hjá sta

Við þessum sviði DNS er notkun _subdirectories_ eins og einfalt útsafn. Þar sem netstaðir eru bara barn af foreldra stigi, þarf aðeins einn doménnaeglingur að finnast fyrir hvernig á að nota aðaldomænin. Á _subdomains_ er útsafnið lítið flóknari og krefst eða sérstaka CNAME-eglingar fyrir hvert netstaðir eða einn villandi (*)-egling í DNS-skjalum.

Að öðrum sviði að skoða er SSL og útboð og notkun SSL-sertifika. Í _subdirectory_ uppsetningu getur einn domén-sertifíki notað fyrir netstaðir eru bara stígur af aðaldomænin. Því mun sertifíki fyrir domain.com mjög vel veita SSL fyrir https://domain.com/site1, https://domain.com/site2 og svo framan.

Í _subdomain_ uppsetningu er notkun villandi SSL-sertifikats eitt af algengustum valkostunum. Þetta sjaldgæti sertifíki veitir krypingu fyrir doméninn og þessar _subdomains_. Því mun villandi SSL-sertifíki veita krypingu fyrir https://site1.domain.com, https://site2.domain.com og https://domain.com sjálft.

Þótt öðrum valkostum séu til, eru þau oft lítið í kringum skipti og notkun og krefjast yfirburðar uppsetningar og skoðunar um viðeigunni.

#### Plugins og Themes {#subdomain-vs-subdirectory}

Það sem WordPress gefur þessum, tekur þessum einnig af, á enstaklega fyrir viðskiptavininn. Í stand-alone WordPress uppsetningu ef installandur staðsetningin notar ógóða plugin eða missar að halda uppfærð með því, er einingur ofri og skuldur þessar heildar áhættu sjálfur. Hins vegar, ef installandur notar ógóða plugin í multisite uppsetningu, skapar hann ofri fyrir hvert stað setningu í netinu.

Til þess vegna, þegar WordPress er sett upp sem multisite, fjarlægja það möguleika fyrir vísindamanna á síðunum að installa plugins og themes og breytir þetta möguleika í stað þess að flytja það til nýtt skipti „network administrator“ eða „super admin“. Þessi sérstaklega rétturinn getur þá bestemd hvaða vísindamenn á netnum geta sjá eða aðgangast plugin-menulinni í dashboard sinum, og ef það er svo, hvort þessar rétturinn ná til _aktivering_ eða _deaktivering_ plugins.

Til þess að þess hópinn sé network administratorinn ábyrgðinn fyrir installeringa af plugins og themes í netnum og delega réttunum til notkun þessum pluginum og themes á netnyslum. Vísindmenn á síðunum geta ekki installað plugins eða themes eða aðgangast plugins og themes sem eru ekki reiknað fyrir sína síðu.

#### Notendur og vísindmenn (Administrators) {#plugins-and-themes}

Í WordPress Multisite er allar netnyslum tengdar sömu databaseins og því share same users, roles and capabilities. Best hugmynd til að mynda það er að allir notendur séu litið sem litið meðlimur netnum og ekki sérstaklega síðu.

Gjöld þessar skilningur getur verið óþægilegt að láta notendur verða sköpt og til þess vegna fjarlægja WordPress Multisite þetta möguleika fyrir vísindmenn á síðunum og flytja það til network administratorinn. Til að gera þetta getur network administratorinn svo delega nauðsynleg rétturinn til site administratorinn til að láta hann skapa notendur reikninga fyrir eigin síðuna.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Til að uppreyna yfir árið, þótt notendur reikningarnir séu tengdar síðunni þeirra, eru þeir í raun tilneyst til netnum og þarf því að vera einstök fyrir alla netið. Gæti verið tilfelli þar sem notendurna nafn er ekki til viðskipta vegna þessarar orsaka.

Allt þótt ekki er alveg framand hugmynd í fyrirtelsysnum, er þessi einn kjelda fyrir notendurregistra og kennslustöðvar er oft líður óánlegur fyrir menn sem eru vana á stand-alone WordPress uppsetunum þar sem notendurstjórnun er aðeins enkleari.

#### Media {#users-and-administrators}

Þar sem netstaðir deila einu og sama database í WordPress Multisite, viðhalda þeir sérstökum leiðum á skrásemi (filesystem) fyrir myndasérstæður.

Standard WordPress staðið (wp-content/uploads) er eins og er; þó að leiðin sé breytt til að spjalla um einstakan ID netstaðsins. Á eftir vemist myndasérstæður fyrir netstað sem wp-contents/uploads/site/[id].

#### Permalinks {#media}

Við hefðum nefnt áður að það eru sérstakar góðar áhættur fyrir _subdomain_ en _subdirectory_ uppsetning og hér er leiðirnar.

Í _subdirectory_ uppsetningu verða hlutinn sem er aðalstað (fyrri staðið sem blir skráð þegar netið er uppset saman) og netstaðir sem eru subsíður, að vera með sama leið frá domænnanum. Þetta getur verið mögulegt fyrir mikið fjölda stöðuáætlum.

Fyrir bloggfærslur kemur einn nauðsynlegur /blog/ leið á aðalstað sem er sett í það til að koma í veg fyrir stöðuáætlun á netstaðirnum. Þetta þýðir að fínar permalinks eins og ‘Post name’ munu sýnast sem domain.name/blog/post-name/.

<!-- Skjupa ekki til staðar: Innstallsstati WordPress fyrir subdirectory uppsetning með /blog/ leiði -->

Í _subdomain_ uppsetningu er þessi aðgerð ekki nauðsynleg þar sem hvert netstað fær á nytu af fullkomnum domænnan skilningi og því þarf ekki að byggja á einum sama leið. Þeir viðhalda sérstök leiðir sjálfar eftir _subdomain_.

<!-- Skjupa ekki til staðar: Innstallsstati WordPress fyrir subdomain uppsetning -->

#### Staðfestar yfir (Static Pages) {#permalinks}

Í _subdirectory_ uppsetningu getur möguleiki fyrir nafnstrykkjum yfir á staðlaðar síður (static pages) verið stöðvað, þegar hlutfall er að því að hlutverk er eins og að hlutfall er að því að hlutverk eru í fyrsta síti og nýtingarnet.

Til að koma í veg fyrir þetta býður WordPress fram möguleika til að lista út sérstök nafn í nafnstrykkjum svo þeir ekki verið í samanburði við nafn staðlaðar síða á fyrsta síti. Almennlega er netverkstjórinn notaður til að skrifa inn grunnstaðir fyrir síðurnar á hlutverki.

<!-- Skjupa ekki til að sjá: WordPress netverk settningar sem sýna bannna nafn staðlaðar síða til að koma í veg fyrir samanburði -->

Í _subdomain_ uppsetningu er möguleiki fyrir nafnstrykkjum minnkað með _subdomain_-i, þar sem hún er einstök fyrir netverkssiti og ekki tengd á nannu við fyrsta siti.

### Registra sjónustu {#static-pages}

Í netverk settunum í WordPress Multisite eru fleiri nýjar möguleikar til að nota notendurinn til að skapa síti, sem leyfa nýjum og núverandi notendum að skapa síti.

<!-- Skjupa ekki til að sjá: WordPress Multisite netverk settningar sem sýna registrasjonar möguleika -->

Þegar notendakjölvar eru skapandi, eru þessar kjölvar gerðar á netverkstigi. Því í stað þess að tilheyra nánast einum sérstökum síti, tilheyra þeir netverkinu. Þetta hefur nokkrar sérstakar fyrirframhaldandi og ófyrirhaldandi áhrif.

Til að byrjun, sé það að þú hefur WordPress Multisite sem er í viðskiptum um fréttir og upplýsingar. Þú getur þá sett upp multisitet og svo skapa netverkssíti fyrir fjármál, tækni, menningu og övrantar áhugaverðir sviði með því að halda heilbrigðum kontrolli yfir pluginum og theme-jum. Hvert netverkssíti sjálft mun þá hafa langt meiri kontroll yfir hvernig það sé út og hvernig upplifun notandans er, en hvaða custom post types eða almennar post-kategoríer.

Til þess að nota multisitetinn þarf notandi að logga inn í netverkinn og endanlega að vera logga inn á hvert netverkssíti til að veita glímafærðar upplifun. Ef nýtt sviði þitt væri byggt á endurskoðun (subscription based), væri þetta lýðandi lausn og niðurstaða.

Ef þó var ætlanir og nauðsyn fyrir multisitetinn að vera að veita ólíka netverkssíti sem ekki hafa nánast nokkur tengsl við hverja annað, er það oft almennt í því að yfirburðar eða aðferðar pluginum séu nauðsynlegir til að bregðast með notandarhæfðir (user roles).

### Domen og SSL {#registration}

Látum finna um WordPress Multisite innreiðingu sem nær oft ekki í áhuga - Wordpress.com. Þetta er auðveldastasta dæmi um WordPress multisitet og sýnir það hvernig það getist verið mjög sérsniðið og formað til að uppfylla hvaða tilgangur.

Í dag á nútíma internetinu er notkun SSL (Secure Sockets Layer) nær almennt nauðsynleg, og netverkstjórfar WordPress multisitet eru í næra framtíðum fyrir þessar úthafn.

Í _subdomain_ uppsetningum eru síti sköpt á byggingu á grunndomenum. Því blir skráð síti sem heiti ‘site1’ sem ‘site1.domain.com’. Með notkun wildcard SSL sertifikatsins getur netverkstjórfar laustlega nýtt þetta úthafn og veita SSL kryptingar fyrir netverkinn.

WordPress Multisite hefur það með sér möguleika til að tengja netverkssíti við sérsniðna domænsna eða domænsna sem eru annar en grunndomæni netverketsins.

Fyrir netverkshustufólki er þetta enn einlega flóknari þegar kemur um uppsetning domænsna og útboð og viðhald SSL-tækja.

Til þess að WordPress Multisite sýn [www.anotherdomain.com](http://www.anotherdomain.com) sem „site1“ er mögulegt, er netverkshustufólki eftir með því að sjálfum styðja yfir DNS-skráningu og framkvæmd SSL-tækja.

## Ultimate Multisite {#domain-and-ssl}

Þegar það er skilið skilningur um þá aðeins betur á milli stand-alone WordPress uppsetningar og Multisite uppsetningar, verðum við að sjá hvernig Ultimate Multisite er lykilvopnum til að veita Websites as a Service (WaaS).

### Innleiðing {#ultimate-multisite}

Ultimate Multisite er þitt "Swiss Army knife" þegar kemur um sköpunir Websites as a Service (WaaS). Hugsa um Wix.com, Squarespace, WordPress.com og svo hugsa um eigin þjónustu.

Undir hlutunum notar Ultimate Multisite WordPress Multisite en á hátt sem laður upp all mögulega úrbyrgingar netverkshustufólks hafa með multisite uppsetningum, en er einnig auðar fjölda möguleika til að stöðva.

Í eftirfylgjum sjáum við nokkrar almenn möguleika og þær hugmyndir sem eru nauðsynlegar til að stöðva þeim möguleikum.

### Möguleikar {#introduction}

#### Tilfæld 1: Táknstofa {#use-cases}

Almennt liggur hlutverk ákerða verkefna í sköpunum netverskuðra síða með því að viðeigandi þættir eins og hostingu eða markaðssetning eru listuð sem viðbótar þjónustur.

Fyrir tölvustofnunarstofa (agencies) býður Ultimate Multisite ótrúlega verðmæti í færni að hosta og stjórna fleiri vefsíður á einum kerfi. Þetta er enn meira mikilvægt fyrir fyrirtæki sem notar sama hlutfall á hlutum eins og GeneratePress, Astra, OceanWP eflar Ultimate Multisite möguleika til að sjálfskipta aktiva þessum themi fyrir hvert nýtt vefsíða.

Sjafnlega með fjölda tilboða fyrir fyrirtækjastjórn (agency pricing) á almennum og populárlegum pluginum, gerir nota Ultimate Multisite fyrirtækjum kleift að nota það sem þeir hafa byggt upp með því að veita sama kerfi sem pluginum geta verið sett í, viðhalda og nota.

Það er líkamaðlegt að notkun uppsetningar (configuration) sé önnur ábyrgð, og hjá Ultimate Multisite gerir það að vera ótrúlega einfalt að leggja upp setningu fyrir domænsmyndun (domain mapping) og SSL-tækifæri með samstarfsemi þeirra við fleiri populárar hostara eins og Cloudflare og cPanel.

Því með því að nota einn af þessum vörum eða með því að leggja Ultimate Multisite bak Cloudflare, verða þættir eins og stjórnun domæna og SSL-tækifæri að vera mjög einfaldar.

Fyrirtæki sem vill hafa stæðan kontroll yfir sköpun vefsíða sjá áhuga í því hversu einfalt þeir geta skapa vefsíður og tengja vefsíðum við viðskiptavini og plan með einföldum greinandi myndinni Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stæða kontroll yfir pluginum og themi viðhaldið er á vörubúnaði (per-product basis) með intuitíva greinandi myndum Ultimate Multisite sem leyfa að pluginum og themum vera til fari eða hýra fram eins og þeir eru aktivað fyrir nýja vefsíðu.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temir eru tengd við þessum er að þema veita mjög símilíklegar möguleika, sem leyfa sérstök þema að vera aktiva eða hýra á síðuna í miðlun ábyrgðarferli.

![Product theme limitations interface](/img/config/product-themes.png)

Samþættingar (Agencies) finna rofni með Ultimate Multisite sem leyfir þeim að gera það sem þeir eru best til - að tengja framúrskarandi vefsíður.

#### Tilfæld 2: Niche Veðandi {#case-1-an-agency}

Er gott orðgildi sem segir, „gerðu eitthvað og gerðu það vel“. Fyrir mörgum sérfræðingum þýðir þetta að skapa vöru eða þjónustu á kringum einn hlutkeyfisíðu.

Komað þú er sérfræðingur í golfa sem tengir vefsíður til klúbana, eða gafil í esports gamer sem tengir vefsíður til clánna? Eða persónni sem tengir bestillingarveita við matvældarstjórn?

Af mörgum ástæðum vilja þú veita þjónustu byggð á sama fjarskiptal og plattforma. Gæti það verið að þú hafi sniðið eða tekið í hlut til sérstök pluginar sem veita nauðsynlegri möguleika, eða gæti það verið að brúkildar bestu skýrslur fyrir fjölda bréðjum krefjast einhverrar eins konar standarda nálgunar í hvernig á að gera design.

Eitt af nýskönum möguleikum Ultimate Multisite er notkun template sites (mallvefsíða). Template site er það sem er sett upp og aktivað þema, nauðsynleg pluginar eru sett upp og aktivaðir, og dæmi um post eða síður eru sköpt. Þegar viðskiptavinur skapar nýja síðu á grundvelli template siteins, eru innihaldi og settir template siteins kopya y nýsköptri síðuna.

Fyrir fjölda veðenda sérsniðna síða og þjónustu gerir þetta ómælt möguleika í að skráttast skapa síðu sem er klára til notkun með sérsniðnum pluginum og designi. Viðskiptavinur þarf að veita mínst mögulegan innlit til að fullfilla þjónustuna.

Á hættum þarfir getur bæði _subdirectory_ eða _subdomain_ uppsetningar passa, sem í þessu tilfelli væri val á arkitektúrinn milli einfalds SSL-tækja fyrir _subdirectories_ eða villkóðu-SSL-tækja fyrir _subdomains_.

#### Tilfæld 3: WordPress Web Hosting {#case-2-niche-provider}

Það eru óteljandi möguleikar til að hosta WordPress síti, en sjaldan er það eins einfalt og að veita netveitspláss viðskiptavinum með forhæft settri mynd af WordPress. Þetta er því vegna þess að fleiri ákvörðunir og hugmyndir þurfa að samastast til að veita meningfullan þjónustu.

Ultimate Multisite er sterk í þessum sviði með því að veita heildarlega skýrla lausn fyrir hostingu WordPress síta. Í lausninn eru kjarnavirkjar sem veita mögulega þjónustur viðskiptavina, fjármagnstækju, checkout-form, álagningaútval og viðskiptavinaáfundun.

Mikið af nauðsynlegum vinnu til að rétt installa, uppsetja og viðhalda WordPress Multisite er frelst með Ultimate Multisite í þeim háttum að netverkstjórfar þurfa að skoða aðeins þá þætti sem tengist þjónustu eða nítandi þeirra niðurstöndunar, eins og vörudil, prís og þjónustuútval.

Fyrir þróunarframkvæmdum sem vilja tengjast Ultimate Multisite býður lausninn einnig heildarlega RESTful API og Webhooks fyrir áminningar um hendingar.

Á meðan manntengingu við óteljandi yfirburðar plugin og lísunir, veitir Ultimate Multisite það að það er mögulegt og samanberandi lausn til Wix, Squarespace, WordPress.com og övrum.

### Arkitektúrleg hugmyndir {#case-3-wordpress-web-hosting}

Þótt ekki sé þetta heildarleiðbeining, gætu eftirfarandi punktar verið leiðbeining fyrir rétta val á tækni til að stuðla í uppsetningu Ultimate Multisite.

#### Samskiða vs. Skiljun (Shared vs. Dedicated Hosting) {#architecture-considerations}

Ó engarðar ekki allir vefsveitsvirkjendur eru jafnvel, og nokkönnu virka þeirra yfir ekstremna server-densitet. Lágkostleg veitsvirkjendur skila oft fjármagn með því að ná maxima á server-densitet. Sem það er, getur þín Ultimate Multisite innreiðing bara vera einn af fleiri hundruðum vísnum á sama serveri.

Á meðan þú hefur ekki viðeigandi öryggisforræði frá veitsvirkjendinum, upplifa vísar á sama serveri „stökvað nánastnægra nánastnánna“ (noisy neighbour) því að einn vísur á sama serveri tekur svo mikið fjölda nákvæmða sem öðrum vísunum er nauðsynlegt að kynna sig eftir því sem er eftir. Oft sýnist þetta eins og vísar sem eru óhjákæmnlega langsame eða ekki svara á annarsíðu í tíma.

Þú sjálfur veitsvirkjendur er áhrif á flókið mun það að því að þín viðskiptavinir upplifa óþægilega hraða, lítil staðsetning á netinu og hár færslustöðu, sem oft leiðir til þess að þeir leita eftir þjónustu annars.

Kortast er ekki gott.

Ultimate Multisite er þekkt fyrir að virka með fleiri góðum veitsvirkjendum og samþættast vel í umhverfi þeirra til að veita mögulega eins og domænsmyndun og sjálfsvæll (SSL). Þessi veitsvirkjendur fylgja áhrifum á framkvæmd og veita hærri stöðu þjónustu en sama server.

Fyrir lista yveitsvirkjenda sem eru viðeigandi og fullkomnum leiðbeiningum fyrir hverja, skoða skjalann um Compatible Providers.

#### Áhrif á framkvæmd {#shared-vs-dedicated-hosting}

Ultimate Multisite er ekki óhjákæmnlega langsam upplýsingarþjónusta; það er í raun mjög hraðt. Það virkar þó bara eins gott sem grunnþjónustan og innri kerfi, og getur nota aðeins það sem það hefur aðgang til.

Hugsa þér þetta: Þú ert nýtingarstjórnann fyrir Ultimate Multisite innreiðingu með 100 vísunum. Nokkari þeirra virka vel og tengja sér fjölda netu-vísnum hverju dag.

Þessi fyrirbærið er annleitt á lítilli hátt, sýnt í einu til fem vefsstökum, en fyrir lengra þróun skal það verið sýnt.

Ef einingur Ultimate Multisite vafnlaust er fórn, mun það vera að halda ábyrgð fyrir alla viðskiptavina á stökum. Þessar skynslur gætu verið fyrir dynamikkar PHP-sider eða staðlegar hlutverk eins og stylesheet, javascript eða myndafild. Öll þessar uppgåtur verða að vera uppreflandi, monotón og óvenjulega ákostnaðar þegar það er einn vafur eða hundruð. Þetta er ekki nauðsynlegt að nota CPU-kraft og minni til að beita við PHP-fíli þegar útburði er sama staðleg upplýsing fyrir alla skynslur.

Sjafnlega, ein hönnunarferli fyrir PHP eða HTML sida skapar á meðal fleiri eftirskynslu fyrir skript, stylesheet og myndafild. Þessar skynslur eru beint miðnaðar við vafurinn þinn Ultimate Multisite server.

Með einfaldri hámarkun getur einn þetta hugmynd leitað lausn með uppgrunnu serveri, en það lösgildir ekki sekundar fyrirbæri – geofysiskar fyrirframhaldandi (geographic latencies). Innan fleiri servera á fleiri staðum getur manns sem er rétt að komast í raunleg lausn við þetta.

Til þess vegna nota flest netverkstjórnendur framkvæmdar fyrir forritning (front-end caching) og nýtingarnet (CDN) til að uppfylla skynslur fyrir staðlegar sider. Uppfylling þessar skynslur og að gefa út hlutverk áður en skynslan náðist serverinn sparar vinnuáhrif, fjölstyrkir ekki dýrðarferli, undanmerkar ónefndar uppgrunnu og ná tilstæðum þróunarmöguleikum.

Ultimate Multisite felur í sér sofistíka Cloudflare add-on sem gerir netverkstjórnendum mögulegt að setja inn uppsetningu sína bak við Cloudflare og nota ekki bara hlutverfi þess til að safna upplýsingum (caching) heldur einnig DNS hostingu, SSL-tækifæri og öryggisforritningar.

#### Bakkstuðningur (Backups) {#performance-considerations}

Ef þú mætir 50 fólki fyrir ráðgjöf um bakktstuðning og færst 50 ólíka hugmyndir um bakktstuðningstífa. Svarist er: það kemur af því hvaða tilfærsla þú ert að tala um.

Það sem ekki er viðeigandi er að upplýsingar eru nauðsynlegir fyrir uppfærslur, og að þetta er næst ótrúlega ótrulegt að þessir uppfærslur séu ekki stýrt af viðvegara, sérstaklega einhver sem býður fram stýrtan þjónustu. Fáðst það að viðskiptavinir sjá í netviðarstjórnann til að veita og stýra þessari þjónustu. Hver netviðarstjórnandi er sjálf einn algjörlega annleiki vanda.

Til þess að þessar hluti séu skýr, skiljum við að uppfærslu er hugmynd um tilvarðarupptöku kerfisástands á þeim tíma sem uppfærslan byrjar. Einfalt sagt: hvaða tilstand kerfis hefur á sama tíma sem uppfærslun byrjar, er fanga og lokað í uppfærslunni.

Með þessum skilningi mun svari um hvernig uppfærslur verða og hvað er best fyrir umhverfi þitt lítið bara hingað og þá á hætti á því að koma fram eftir þörfum þínum og farið til viðeigandi fjarskiptastjórnanda. Hins vegar, í röð frá mest opinberum til least opinberum mögulegum valdi eru eftirfarandi valkostir góðar leiðbeiningar.

#### Snapshots (Skýr) {#backups}

Snapshots eru gullfyrir uppfærslur því þeir eru einfald, ekki flóknir (þegar þú vilt að nota þær til að viðgera) og "virkja sig sjálfur". Það krefst þó nokkrar hjálp frá fjarskiptastjórnandinn og er aðeins mjög skýr fyrir VPS (Virtual Private Server) eða það sem er eins og það. Fáðst einöld framlagi í okkar dokumentum um "Compatible Providers" býður upp á uppfærslur sem krefjast ekki endurskoða eða aðra aðgerða frá netviðarstjórnandann.

Hvar tradin backupirnar sýða á lausnir og databasar, sýðst einn snapshotur hefur átt á heildar skráa diskins. Þetta þýðir að ekki er bara data síðunar heimsítarinnar fanga í snapshot, heldur einnig kerfið og uppsetningu. Fyrir mörgum er þetta sérstakt fjárhagslegt áhuga, þar sem nýtt kerfi getur verið skipt á næstum strax úr snapshot og sett upp til að erstatta óstöðugt kerfi. Á sama hátt þarf aðgerðin fyrir að fá aftur skráir að bara við að setja snapshot myndina sem disk í núverandi innsetningu svo að skráin geti verið að accessa og kopya.

Snapshotur gæti átt við sér viðbótkostnað með staðveisstjónustufara, en það er vörður gegn ógnunum.

#### Útveitirskript {#snapshots}
Það sjaldast er ekki eini skrá og lausnir út fyrir útliti til að backupa WordPress og MySQL orkustöðvar, og þetta gæti verið mjög góð lausn fyrir Ultimate Multisite sem er WordPress plugin sem notar WordPress skrássystem og database. Því er lausn sem backupar WordPress síðunir viðeigandi fyrir þörfurnar Ultimate Multisite.

Við getum ekki reyna að ráða einu skript yfir annar, en algeng ráðunni er að gera fleiri testar á backup og aftursetning til að tryggja að niðurstaðirnar séu líka það sem við viljum og að „vera viss um það“ með stöðugri eftirliti yfir skriptinu og þessar skilvirkni sérstaklega þar sem einir form af differential backup strategy er nýtt.

Það er vært að merkt að þessar skript, en þegar þeir eru í gangi, munu hafa áhrif á kerfið og það þarf að reikna með því.

#### Plugins {#external-scripts}
Er næst ekki eini það sem getist lausa í WordPress með plugin, og ef þú ert ekki tónninn fyrir yfirveitan skripta, er plugin sérstaklega næst best möguleg val.

Þrátt fyrir að plugins verði í því að hafa ólíkt valkostlög og eiginleika, gerast þeir oft sama verkefni: að skapa upphafnar kopíun af WordPress-fileum og databaseinn. Þó að það er sem alltaf. Þá eru möguleikaliðin annars, þar sem nokkönnu plugins geta send til viðbótum (backups) yfir á yfirborðsveita eins og Google Drive eða Dropbox, eða í öðrum samræmdum gögnumlegum vörumhaldsteymi eins og S3, Wasabi efl. Þegar plugins eru nánast fullkomnar, býður þeir fram þá fersku uppfærslu (differential backups) eða einhver stefnu til að uppfærast bara á gögnum sem hefur breytt sig, til að spara kostnað á yfirborðsveita.

Þegar þú ert að velja plugin, verðu athugasemdir um að hann sé multisite aware (þar sem hann er viðeigandi fyrir multisite). Í þessum samhengi þegar uppfærslan fer á gang, gætirð fyrir tímabundiðum skipti á serverinn þar til ferlið hefur verið fullført.

#### Domænr og SSL {#plugins}

Mikið er jákvætt sem jákvætt um domænsna í multisite _subdomain_ möguleika. Ein nær almenn lausn fyrir netverkstjórnendur er að nota wildcard DNS entries (wildcard-domænsskráningar).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Þessi innburður í DNS mun nota _subdomains_ eins og ‘site1.domain.com’ og ‘site2.domain.com’ til að leysa þær á IP-heiti 1.2.3.4, sem stendur fyrir Ultimate Multisite og er mjög mikilvægt fyrir WordPress Multisite með _subdomain_ möguleika.

Þetta getur virka alveg vel fyrir HTTP, þar sem tölvun er leist í HTTP headers, en sjaldan er netkurinn svo einfaldur í dag að tryggt HTTPS-tök eru nauðsynlegir.

Það er hjálftur að það eru einföld möguleikar fyrir SSL-certifikat. Í _subdirectory_ modumi getur notað almenn domén-certifikat. Þessi eru aðgengileg og frelendar frá хоstefara sem gæti nota frekari LetsEncrypt þjónustu eða annar kjelda. Að annars eru þær kommersiallega til við hlutina frá heilumstjórnendum ef þú getur skráð upp certifikat-skráningartilboð (certificate signing request).

Í _subdomain_ modumi passar notkun wildcard SSL-certifikats yfir perfekt við wildcard domén og leyfir certifikatið að vera auknað fyrir hlutina með ræðum og allar _subdomains_ án þess að þarf sérstaka uppsetning.

Það er þó nauðsynlegt að merka, að wildcard SSL-certifikat gætu ekki virka við þjónustur eins og Cloudflare nema þú séðir á fyrirtærisplan eða sett entryinn í DNS only (DNS aðeins), sem þá er all sama skráning og stjórnun á því að koma fram.

Out-of-the-box Ultimate Multisite býður upp lausn fyrir þennan vanda með því að sýna breiðan erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erfitt erf

Fyrir mörgum er einfaldt mögulegt að nota Cloudflare. Klientinn þurfir bara að setja domænn sitt á Cloudflare, stjórna CNAME til hlutvirkurs domænsins fyrir Ultimate Multisite og mappa domænn sitt í Ultimate Multisite til að byrja nýta sér eigin doménnafturnar.

Utan þetta þarf að leita eftir aldinum leiðum sem er það sem afleiðir því að Ultimate Multisite reynist að ráða lista viðkomandi vinnuþjónustuleiðum (Compatible Providers). Þetta er því vegna að ferli uppsetningar DNS og SSL getur verið ekki einfalt. Hins vegar, með samstarfi Ultimate Multisite hefur það með þessum vinnuþjónustuleiðum verið myndi einfaldlega fjarlægt og er ferlið er sjálft sjálfsvinnandi.

#### Plugins {#domain-and-ssl-1}

Það er mjög mögulegt að þú þarft yfir viðbót plugins til að veita vinnu fyrir viðskiptavini eða netstaðir. Verka allir plugins með WordPress Multisite og Ultimate Multisite? Þetta kemur í ljós.

Þótt flestir plugins séu mögulegt að installa í WordPress Multisite, er aktivering og lísing (licensing) ólíkt fyrir hverja vinnuþjónustuleið.

Útilandi er það hvernig lísing er nýtt við nokkrar plugins sem krefjast lísings á grundvelli einstaklingsdomænsins. Þetta þýðir að fyrir nokkur plugins þarf netstaðarstjórnari að mannvæga lísinginn fyrir hverja plugin á hvert nýtt stað.

Því er mögulegt best að skoða með vinnuþjónustuleiðann um hvernig pluginurinn hans verkið í WordPress Multisite og hvaða sérstök kröfur eða ferli eru nauðsynleg fyrir lísing þessar.
