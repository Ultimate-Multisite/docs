---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Mae Ultimate Multisite yn plugin WordPress Multisite sy'n gynnig i chi gynnig WaaS neu Gweithredinolau ar gyfer ystodau. Trước y byth i ddarganoch a ddysgu sut gallai Ultimate Multisite helpu eich busnes a'r cyddeeion, mae angen i niid gwneud ychwanegiadau cyning ti'n cael eu cyflwyno.

## WordPress Multisite {#the-wordpress-multisite}

Mae llawer oennenn yn ymwybodol â'r ffurf standard o WordPress. Gallwch ei creu drwy panel cyddefnyddio eich darparwr gweithredinol neu, neu, i'r ddynion uchel, gwneud server webl a database newydd, dod â'r ffeiliau canol ac ymladdio'r proses lladd.

Mae hyn yn gweithio ar gyfer milenni stytau WordPress yn y byd, ond o'r pethau o'r agensi neu darparwr gweithredinol, byddwn yn dysgu am ystoddiad.

Er bod mae'n synhronol i creu un stytod WordPress neu hyd yn oed un heol drwy panel cyddefnyddio awtomatig, bydd problemau yn dechrau dangos yn fuan pan fyddai'r rheoli'r stytau hyn. Os nad yw'n cael eu rheoli, mae chi'n taro'r cyfeiriad ar gyfer malware. Mae rheoli'n gweithred ystyr a resusiw, ac er y bydd y toolau a'r pluginau allan yn cael eu helpu i ddefnyddio'r rheoli a'r adrefnodiad o WordPress stytodau, mae'r fhat yn cael ei sicrwyll gan y cyddeeion sy'n cadw cyfaleithiadau gweithredinol.

Yn y core iddo, mae WordPress yn rhoi ffeithrin yn unig gyda'r enw 'Multisite', sydd yn ddefnyddio ei gynhyrchydd i'r 2010 wrth cyflwyniad WordPress 3.0. Er y cyfnod hwn, wedi cael amserau o redisiynau wedi eu cyflwyno i chynllun newyddion a sicrwyll diogelwch.

Yn y cyfathrebu, gallai'r multisite WordPress ei weld fel hyn: Mae uniwersitet yn cadw stytod WordPress unig ond mae pob fasnach yn cadw ei stytod WordPress ei hun.

I'n bydd ychwanegu'r ddefnyddiolau sydd ar gael yn yr unigoldeb.

### Y Cwmni (The Network) {#the-network}

Yn terms o WordPress, mae cwnniet cwmwd (multisite network) yn lle mae'r amlgenau subsaites gallai cael eu cyfathoghio o ddashboard unigoldeb. Er bod ychwanegu cwnniet cwmwd yn gwahaniaethol rhwng prifau gweithredol, mae anwy'r byddiad yn aml yn dod â chwaraeau ychwanegol yn fylch yn `wp-config.php` i ddweud i WordPress bod yn gweithio mewn modd honno.

Mae rhai diffygyniad ddefnyddiol rhwng cwnniet cwmwd a gyflwyniad WordPress unigoldeb sydd yn cael eu dysgu yn briodol, y byddwn yn ei ddefnyddio'n cyffredinol.

#### Subdomain vs. Subdirectory (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Un o'r penderfynion mwyaf cyntaf sydd eich bod eisiau gwneud yw arolu arol ydynt y bydd cwnniet cwmwd yn gweithio gyda _subdirectories_ neu _subdomains_. Mae Ultimate Multisite yn gweithio'n briodol gyda phrychiadau allan, ond mae rhai diffygyniad argynghorol rhwng y ddau ffurfau.

Yn ffurf **subdirectory**, mae cyflwyniad cwnnietau yn derbyn llwybr (path) yn seiliedig ar enw domain prif. Ar enllaert, bydd site cwnniet wedi'i ddefnyddio fel ‘site1’ gyda'i URL llawn fel `https://domain.com/site1`. Yn ffurf **subdomain**, bydd site cwnniet yn cael ei _subdomain_ ei hun a ddarganfod o enw domain prif. Fel hyn, bydd site wedi'i ddefnyddio fel ‘site1’ gyda'i URL llawn fel `https://site1.domain.com/`.

Er bod y ddau opsiynau yn cael eu cyflwyno'n briodol, mae defnyddio _subdomains_ yn rhoi rhywfaint o prifau, ond mae angen ei ddefnyddio gyda chwarae arol a planio mwy mewn argynghorol.

Yn straeon DNS, mae defnyddio _subdirectories_ yn cyflwyno tebyg bach. Fel bod y safleoedd cyd-llwybr yn ddynion o'r llwybr orffennol, mae angen i'r enw domaint un yn ddigwydd ar gyfer enw domaint cyflym. Ar _subdomains_, mae'r tebyg yn chymryd yn fwy hanfodol, gan angen either entry CNAME unigol ar gyfer pob safle cyd-llwybr neu entry wildcard (*) mewn recordau DNS.

Mae'r ardal o ddefnyddio hefyd yw SSL a'r cyflwyno a ddefnyddio certysau SSL. Mewn cyfathrebu _subdirectory_, gallai certysau domaint un cael eu defnyddio fel yr adeiladau cyd-llwybr yn ddynion o'r enw domaint cyflym. Felly, bydd certysau ar gyfer domain.com yn rhoi SSL yn ddigon i https://domain.com/site1, https://domain.com/site2 a chwarae.

Mewn cyfathrebu _subdomain_, mae defnyddio certysau SSL wildcard yn un o'r opsiynau cyffredinolest. Mae'r mathwedd SSL hwn yn rhoi gyfreithiad ar gyfer domain a'i _subdomains_. Felly, bydd certysau SSL wildcard yn rhoi gyfreithiad ar gyfer https://site1.domain.com, https://site2.domain.com a HTTPS i domain.com ei hun hefyd.

Er bod ychwanegau eraill sydd, mae'r hyn yw'r hanesol ac y ddefnyddio yn cael eu hanesol yn aml. Mae'r hyn yn rhoi angen cyflwyno a chymryd ychwanegiadau ar gyfer ei ddioddef.

#### Plugins a Theming {#plugins-and-themes}

Beth mae WordPress yn rhoi i'w gael hefyd, felly o'r ochr y cytuned. Yn ddeall WordPress unigol, os mae'r gynllunwrth safle yn lenhangu plugin dda neu nid yw'n gwarchu ei gyflwyniad yn llawn, mae'r unigol victim a chwarae o'r gweithredol hwn yw ei hun. Fodd bynnag, os mae'r gynllunwrth safle yn lenhangu plugin dda ar gyfer cyfathrebu multisite, mae'n creu victim o bob safle a ddarlledu mewn cyd-llwybr.

Ar gyfer hynny, pan fydd wedi'i cyflwyno fel WordPress multisite, mae WordPress yn tystyr y gallu i ddyfynwyr y safleoedd (site administrators) dod o hyd i gael pluginau a thymau (themes), ac yn lle hynny mae'r gallu hwn yn cael ei gyflwyno i rôl newydd aelodwr cyd-gynhadledig neu 'super admin'. Gall y rôl priwilegiadwy hwn amser yn gwneud penderfynu olygu iddyfynwyr y safleoedd cyd-gynhadledig gweld neu cyffredin y menu pluginau yn eu dashboard, ac os oes, arolio hon i'r _cyflwyno_ neu _deffroi_ pluginau.

I'r gyfeiriad hwn, mae'r aelodwr cyd-gynhadledig yn gyfrifol am y cyflwyno pluginau a thymau i'r cyd-gynhadledig ac yn ddelio prifysgolion i'w gael eu defnyddio ar y safleoedd cyd-gynhadledig. Nid gall dddyfynwyr y safleoedd cyflwyno pluginau a thymau neu cyffredin pluginau a thymau nad yw cael eu cyflwyno i'u safle.

#### Bwyliau a Aelodwyr (Users and Administrators) {#users-and-administrators}

Yn WordPress Multisite, mae pob safle cyd-gynhadledig yn rhannu'r dbatws (database) felly sydd yn rhannu'r bwyllau (users), rôlau (roles) a galluau (capabilities). Mae'r ffordd mwyaf cywir i'n meddwl hwn yn bod y bywllau pob un yn aelod o'r cyd-gynhadledig ac nid safle penodol.

Gan ddefnyddio hyn, gallai fod yn anghymhelu i'w gael y bywllau i cael eu creu, ac felly mae WordPress Multisite yn tystyr y gallu hwn o'r dddyfynwyr y safleoedd cyd-gynhadledig ac yn ei gyflwyno i'r aelodwr cyd-gynhadledig. Yn y cyflym, gall y aelodwr cyd-gynhadledig ddelio prifysgolion sydd angen i dddyfynwyr y safleoedd i gael eu creu bywllau ar gyfer eu safle.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Gan allu'r cyflwyno'r meddwl isention yn ôl, er bod y bywllau yn dangos fel yn cysylltiedig â'r safle sydd yn ei gael, mae hi'n cael eu cyflwyno i'r cyd-gynhadledig ac felly rhaid iddynt yn unig arall arall ar y cyd-gynhadledig. Gall bydd ystodau lle mae gennych chi anghyffredin am y bywllau nad oes unrhyw unig i cael eu cyfeiriad oherwydd hyn.

Er ei ffurfennol concept yn systemau enterprise, mae hyn y cyfieithiad ar gyfer y cyflwyniad o benau. Mae'r cyflenwiol hwn o benau a chwarae (user registration and authentication) yn cael ei ddefnyddio yn anodd i bobl sydd yn cyfarwydd â WordPress installaeth unig, lle mae gynllunio benau yn fwy ddefnyddiol.

#### Media {#media}

Pan mae safleoedd cyd-gynllunio (network sites) yn rhannu database unig mewn WordPress Multisite, mae nhw'n cadw llwybrau (paths) cyffredinol ar y filesystem i ffiliad media.

Mae lleoliad standard WordPress (wp-content/uploads) yn parhau; ond mae ei lwybr yn cael ei newid i ddefnyddio ID unig o'r safleoedd cyd-gynllunio. Fel yma, mae fyliau media ar gyfer safle cyd-gynllunio yn dangos fel wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Rydyn ni wedi cyfeirio at ychwanegau ddefnyddiol o _subdomain_ yn ôl _subdirectory_, ac mae hynny yma: fyliau.

 mewn cyflenwiol _subdirectory_, rhaid i'r safle canlynol (y safle gyntaf a gael ei creu pan fydd y cyd-gynllunio wedi'i sefydlu) a'r subsaites cyd-gynllunio rhannu y fyllyw yn ôl enw domaint. Mae hyn yn cael ei ddefnyddio i'r amserau llawer o chwilio.

Ar gyfer postau, mae fyllyw /blog/ cyflenwiol wedi'i ychwanegu i'r safle canlynol i ddarganfod clos gyda safleoedd cyd-gynllunio. Mae hyn yn ei golygu bod permalinks iawn yn ddefnyddiol fel ‘Enw Post’ yn cael ei dangos fel domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

 mewn cyflenwiol _subdomain_, nid yw'r gweithgaredd hwn yn hanfodol oherwydd mae pob safle cyd-gynllunio yn cael ei benigolion domaint cyflym ac dim ond mae angen eu cyfieithu ar y fyllyw unig. Ar y lleoliad, mae nhw'n cadw eu llwybrau distinct arolwg yn seiliedig ar eu _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

Yn _cynnig_ configuration, mae'r potential i gynnwys enwio cyflwrddion statol yn gyffredinol gyda'r pethau arall fel y safon cyntaf a'r safon cyd-gynlluniau.

I'r ddefnyddio hyn i lawer yma, mae WordPress yn rhoi ffordd i gael ei ddefnyddio i gwblhau rhai enwau safon i ddarganfod nad fyddant yn cyffredinol â'r enwau y safon gyntaf. Olygu, bydd y cyfarwyddwr cyd-gynlluniau yn rhoi'r llwybrau gorth (root paths) o'r pethau y safon gyntaf.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Yn _cynnig_ subdomain, mae'r phosibl i gynnwys enwau yn cael eu cyffredinol wedi'i ddeall gan y _subdomain_, felly mae'n unigol i'r safon cyd-gynlluniau ac nid yw'n gysylltiedig â'r safon gyntaf mewn unrhyw ffordd.

### Cyflwyniad (Registration) {#registration}

Yn ystod y setegau cyd-gynlluniau WordPress Multisite mae nifer o opsiyn cyflwyniad newydd yn cael eu cyflwyno, gan gael y byddau newydd a'r byddau sydd i'w brofi creu safon.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Fel ydynt yn gyferol â chwarae WordPress yn unigol, nid yw safon cyd-gynlluniau yn cadw'r opsiynau cyfarwydd i gael y byddau arosau neu ddelio'r byddau hyn i rôlion.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Pan cael bydd byddau bydd eu cyfathogh, mae'r byddau hyn yn cael eu cyflwyno ar lefel y cyd-gynlluniau. Fel hyn, yn lle dod yn rhywunol i unrhyw safon penodol, mae'n dod yn rhywunol i'r cyd-gynlluniau. Mae hyn gyda chwaraeau a chwaraeau ddiweddarol.

Mae'n ddefnyddi'r WordPress Multisite yn gweithredol mewn news a wybodaeth fel مثال. Byddwch yn sefydlu'r multisite ac ymlaen, byddwch yn creu safonau cyd-gynllun (network sites) ar gyfer cyfathrebu, techenoleg, entyn, a chyflwyniadau eraill gyda chofal arall, gan sicr y byddwch yn dal cyddefnyddio'r pluginau a'r themau yn llwyr. Mae safon cyd-gynllun hwnnw yn cael ei gael ei addefnyddio'n ddiogelach i'r amrywiaeth o ffurfion a chwaraeho'r cyflym a chwaraeho'r benodol o'r safon cyd-gynllun ychwanegol fel post types neu categoriau post.

Yn ystod hyn, pan mae dyn yn cyflwyno, mae hi'n cyflwyno i'r cyd-gynllun ac yn ddiwethaf yn cael eu cyflwyno i'i safon cyd-gynllun hefyd i roi gyflwyniad llwyr. Os oedd eich safon newydd yn canolbwyntio ar y cyflwyniad, byddai hyn yn cael ei fod yn ateb iddo.

Fodd bynnag, os oedd natur a gweithredol y multisite yn cynnig safonau cyd-gynllun sydd â chofal arall heb unrhyw cysylltiad gyda'i gilydd, mae anwy'r cyfathrebu neu'r pluginau addysgol yn cael eu gwneud i'r rôlau o'r benwerth.

### Domen a SSL {#domain-and-ssl}

Fe wylio am y safon WordPress Multisite sy'n dod yn llwyr yn cael ei golli ar ôl-yn-gweithredol – Wordpress.com. Mae hyn yn ddefnyddio'r multisite mwyaf cyffredinol o WordPress ac mae'n dangos ei gallu cael ei addefynnu a chwaraeho'n gyflym i fod yn llwybr am y gweithredol.

Yn ystod y dyddiau hyn ar y cyfrifennol modern, mae defnyddio SSL yn hanfodol a'r gyn-archwizwyr o multisite WordPress yn cael eu cyflwyno â'r teithio hyn.

 mewn cyfathrebu _subdomain_, cael safonau ar adeilad ymlaen ar gyfer enw domen gynnwys. Fel hyn, bydd safon a ddarlledu 'site1' yn cael ei creu fel 'site1.domain.com'. Gan ddefnyddio cert SSL cyflwyniad (wildcard), gall anwy'r gyn-archwizwyr o multisite sicr y teithio hwn ac rhoi fäithau cyflwyniad SSL ar gyfer y cyd-gynllun.

Mae WordPress Multisite yn cynnwys ffurf mapiad domena sy'n sylw'r adeiladu siatol ar gyfer y cyfathrebu siatol (network sites) gyda domena custom neu domena yn rhyfedd â'r domena gorthol y rheiniant.

Ar gyfer ddefnyddwyr rheiniant, mae hyn yn cyflwyno llawer o chymdeithas arall yn anoddol bothor mewn cyfathrebu domena fel hefyd yn cyflwyno a chynllunio certyddion SSL.

I'r gradd hwnnw, er bod WordPress Multisite yn rhoi ffordd i'w gael [www.anotherdomain.com](http://www.anotherdomain.com) wedi'i mapi ar ‘site1’, mae'r rheiniant siatol yn cael ei ddefnyddio gyda'r chwilio o gyfathrebu DNS allan a'r cyflwyniad certyddion SSL.

## Ultimate Multisite {#ultimate-multisite}

Gan fod y gwahaniaethau rhwng seiliedig WordPress (stand-alone) a seiliedig Multisite wedi'u gael, fe wylio sut mae Ultimate Multisite yn cael ei ddefnyddio fel y arweinydd mwyaf i rhoi Gwefan fel Gwasanaeth (Website as a Service - WaaS).

### Cyflwyniad {#introduction}

Mae Ultimate Multisite yn eich cyd-gofal Swiss Army pan fyddwch yn creu Gwefan fel Gwasanaeth (WaaS). Meddwch am Wix.com, Squarespace, WordPress.com ac ynddo meddwch am gael eich gwasanaeth eich hun.

Ond yn ystafell, mae Ultimate Multisite'n defnyddio WordPress Multisite ond yn ei wneud mewn ffordd sy'n rhoi'r chwilio o chyngeddiadau sy'n cael eu cyflwyno gan ddefnyddwyr rheiniant gyda seiliedig multisite, ac yn gwella'r galluolion i gael ychwanegau am ychwanegau amlafwch.

Yn y cyfnodau canlynol byddwn yn gwylio rhai chymdeithas a chynlluniau sydd angen i gyflwyno'r chyfathrebu hyn.

### Chymdeithas {#use-cases}

#### Cas 1: Cynlluniau (An Agency) {#case-1-an-agency}

Yn y cyffredinol, mae'r galluon canol o'r cynlluniau yn dod yn gysylltiedig â chyd-gofal siatol gyda phrydion fel eu cyfathrebu neu ei marketing yn cael eu listri fel gwasanaeth addlaw.

Ar gyfarpenion, mae Ultimate Multisite yn cynnig gwerth gorau mewn fyddu a rheoli wefanau aml ar un ffurf. Mae hyn yn ddefnyddiol iawn i'r agensi sydd yn standardu eu dyluniadau ar thymau penodol fel GeneratePress, Astra, OceanWP neu eraill gallai ei ddefnyddio y gallu Ultimate Multisite i chynllunio'r thymau hyn yn awtomatig ar gyfer pob wefan newydd.

Fel hynny gyda'r amgylchedd mawr o gynnigau ar gyfer prifau agensi i pluginau cyffredinol a cyffredinol, mae defnyddio Ultimate Multisite yn sylweddol i'r agensi'n gallu ddefnyddio ystoddiadau sydd ar gael gan gyflwyno ffurf cyffredinol o lle sy gallai'r pluginau cael eu chwarae, ei sicrhau a'u defnyddio.

Mae'r defnyddio cyflwyniad (configuration) yn dymunol iawn ac mae Ultimate Multisite yn ei wneud yn rhy gymryd i gynllunio mapio domenaidd a certau SSL gyda'i chynlluniau gyda chyfathriadau gweithredol am ychwanegau fel Cloudflare a cPanel.

Felly, gan ddefnyddio un o'r chyflwyniadau hyn neu gan leoli Ultimate Multisite yn ôl Cloudflare mae asgyniadau fel rheoli domenaid a certau SSL yn rhy gymryd.

Mae agensi sydd yn gosod arall i sicrhau cyd-derbyniad tywyll ar gyfer creu wefanau yn gogledig y fwy gymryd y gallai eu gwneud wefanau ac ei sicrhau'r wefanau gyda chwaraeon a planiau trwy'r ffurf cyffredinol o Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Mae cyd-derbyniad tywyll ar gyfer pluginau a thymau yn cael ei sicrhau ar gael ar gyfer pob produsg trwy'r ffurf cyffredinol o Ultimate Multisite, gan gael y gallai'r pluginau a'r thymau cael eu cyflwyno neu gwahanu fel hefyd y status chwarae wrth ei sicrhau ar gyfer wefan newydd.

![Product plugin limitations interface](/img/config/product-plugins.png)

Mae'r thema'n rhoi ffurfynau tebygol yn cyflwyno ffurfynau tebygol o ddifrif, gan gael ystyried neu ddefnyddio thema'n cael ei gyflwyno ar y safle.

![Product theme limitations interface](/img/config/product-themes.png)

Bydd y gweithredwyr yn cael gwthnos gyda Ultimate Multisite gan ei allu gwneud hyn yr oeddent yn ddaest - ddefnyddio thema'n cael eu cyflwyno ar y safle.

#### Cas 2: Cyflennydd Niche (Niche Provider) {#case-2-niche-provider}

Mae gennyrdd iawn sydd yn ddyddiad hwn sydd yn dweud, “gwneud un neu gwneid ei dda”. Ar gyfer llawer o specialisau, mae hyn yn ei golygu i creu produsg neu weithredol ar ystod un iddoedd canol.

Efallai ydych chi'n golliad golf iawn sydd yn chynllun safleoedd ar gyfer clwbau neu gallwch fod yn gêm esports iawn sydd yn rhoi safleoedd ar gyfer clanau. Efallai ydych chi'n ddefnyddio weithredol cyflwyno gwasanaeth rhaglenni i wresgyniadau?

Am llawer o rheswm byddwch chi eisiau rhoi gwasanaethau yn seiliedig ar ffurfyn neu platform. Gallai fod eich bod wedi ddefnyddio neu ystyried pluginau bygyr yn cael eu cyflwyno ffurfyn sydd angen i'r ffurfyn a oes angen, neu gallai fod best practysau'r dyngwlad yn bwriadu rhywun ffurfyn estynol ar gyfer ddefnydd.

Un o'r ffurfynion nysuol o Ultimate Multisite yw defnyddio template sites (safleoedd model). Mae safle model yn un lle mae thema wedi cael ei chwarae a gyflwyno, pluginau angen wedi'u chwarae a gyflwyno, ac ystafellau neu argyngau samla wedi'u creu. Pan creu cydig newydd ar adalaith safle model, mae'r cynnwys a'r setegau o'r safle model yn cael eu copio i'r safle newydd a chreudiwyd.

Ar gyfer rhoi gwasanaethau safleoedd neu weithredol niche, mae hyn yn rhoi cyfathryd yn dda yn gallu creu safle yn barod i gweithio gyda pluginau a ddefnyddnogaeth arall. Mae angen i'r cydig rhoi ystafell input befurfynol i gwblhau'r gwasanaeth.

Depend yn y haneseddau sy angennychu, gallai'r ffurfau _subdirectory_ neu _subdomain_ bydd yn hanfodol, ac yn y bynnag, bydd y dechrau argyngolygu yn cael ei gwneud rhwng certyf. SSL simple ar gyfer _subdirectories_ neu certyf. SSL cyflwrdd (wildcard) ar gyfer _subdomains_.

#### Cas 3: Gweithrediad Web WordPress {#case-3-wordpress-web-hosting}

Mae y maeau llawer o ffordd i gweithredu safleoedd WordPress, ond yn rhy ddigon iddo fod yn einfal iawn i rhoi safle web i'r cydweithredwr gyda ffurf WordPress wedi'i chwarae. Mae hynny oherwydd bod angen i'r destunion a'r mynediadau ychwanegu i'r gilydd i ddod yn unigol i rhoi weithrediad sydd â golybus.

Mae Ultimate Multisite yn ddefnyddiol mewn ffordd hwn gan roi cydweithrediad cyflwrdd (turnkey solution) am y gweithredu safleoedd WordPress. Mae'n cael ei gynnwys y mecanwaith hanfodol i rhoi weithrediadau cyflwrdd, cyfathrebu peidiad, ffurfau cheddawch, voucherau ddisgyblion a chymdeithas gyda'r cydweithredwyr.

Mae llawer o'r gwaith hanfodol sydd angen i gyflwyno, cyflwyno a chynllunio WordPress Multisite yn cael ei gynllunio gan Ultimate Multisite i'r gradd y mae angen i'r gweithredwyr cydweithredol i ddefnyddio, fel pethau sydd â'u gwasanaeth neu'r niche, fel cyfderau pethau, prifyniadau a chyflwyno.

Ar gyfer y dewelwyr sydd yn dymuno â Ultimate Multisite, mae'r cydweithrediad hefyd yn cynnig API RESTful cyflwrddol a Webhooks ar gyfer cyflwyniad digwyddiadau.

Tan fod yn cyfyngu i llawer o pluginau ac certyfion allanol, mae Ultimate Multisite yn rhoi ddefnyddio sydd yn gyflwrdd (feature rich) a chwarae yn unigol â'r ffurf Wix, Squarespace, WordPress.com a eraill.

### Mynegiadau argyngolygu {#architecture-considerations}

Er ei fod nid cyfarwyddyd cyflwrddol, bydd y pethau canlynol yn gynnig gyfarwyddyd i'r dechrau'r wybilydd o ddefnyddio technolegau i chynllunio installiad Ultimate Multisite.

#### Gweithrediad Cynfrifol vs. Gweithrediad Cyflwrdd (Shared vs. Dedicated Hosting) {#shared-vs-dedicated-hosting}

Mae'n ddigon na pob ychwanegwyr gweithredol yn unig, ac mae rhai yn gwneud gweithredoedd ar gyfer serverau yn rhy ddwfn. Mae gan ychwanegwyr sydd â chynllun bach yn cyflwyno cyflymion drwy ddefnyddio ddwfn serverau. Fel hyn, gall eich ychwanegiad Ultimate Multisite fod yn un o'r chyfathreduau amserol ar yr un server.

Tan oes sicrwydd pwysig o'r chynllunwyr, mae ychwanegiad ar server cyffredinol yn cael ei ddatblygu'n "cyflwr gweithredol" (noisy neighbour). Mae hyn yn ei fod yn un site ar yr un server sy'n defnyddio tystiolaeth mawr o resurs i'r chyfathredu gyda'r resurs a oes ar gael ychwanegiadau eraill. Oed yn aml yn dangos yn sites sydd yn ddwfn neu nid yn cael eu cyflwyno mewn amser.

Fel chynllunwr o'r chynllunwyr web hosting, bydd y effaith ar gyfer eich cleientau yn golygu bod nhw yn cael eu cyflymion ddrwg, ranolau llawn a cyflwyniadau uchel, gan angen i'u cleientau dod â'r serfys i'r lle iawn.

Yn cyffredinol, mae bach nid yw'n golygu bsol.

Mae Ultimate Multisite yn cael ei adnabod ei fod yn gweithio gyda nifer o chynllunwyr hosting dda ac yn ychwanegol yn dda â'u drafod i gyflwyno fynonau fel mapiad ddaen (domain mapping) a SSL awtomatig. Mae'r chynllunwyr hyn yn gwerthfawrodd perfformiad ac yn rhoi serfys o gradd uchel na server cyffredinol.

Ar gyfer llyfrgell o chynllunwyr cyfathredu a gyfarwyddiadau llawn i gyd-fyndol ar ei gael, gwchwch drwy'r drafod ychwanegiadau Cyfathredu (Compatible Providers).

#### Cynllunio Perfformiad {#performance-considerations}

Mae Ultimate Multisite nid yn ddefnyddiad bach, ond mae'n cyflym yn rhyfeddol. Fodd bynnag, mae'n gweithio fel dda fel ychwanegiad a'r drafod sydd o'r chynlluniau ac infrastructure, ac gallai ei ddefnyddio dim ond hyn sydd â'i cyffredinol.

Meddych chi: Mae'ch yn gynllunwr cyd-fyndol ar gyfer ychwanegiad Ultimate Multisite gyda 100 site. Mae rhai o'r siteau hyn yn gweithio'n dda ac yn cael nifer o gyfarfodwyr web yr un dydd.

Mae'r sefyllfaeth hwn fydd yn gwrthiant ar ddeall bach o weithgareddau, fel un i pynllaw o chwarae un i pynllaw o pynllaw, ond ar ôl rhy fel problemau o ffordd.

Pan nid yw'r sefyllfaeth un Ultimate Multisite yn cael ei gwylio, bydd y weithredwr unig yn gyfrifol am gyflwyno'r caisau o bob cyfarfodol i'r safleoedd. Gallai'r caisau hyn fod arpeiliaid PHP dynamig neu aset statach fel stylesheet, javascript neu fyliau media. Arol y safleoedd un neu un heol, bydd y gwaith hyn yn ddaethol, monotonorol a ddwfn. Nid yw'n angen i'r pwysau CPU a'r memori procesio'r fflaen PHP pan fydd y output yn feddwl statach am y cyfarfodol.

Fel hyn, mae un cais ar gyfer pflaen PHP neu HTML yn creu caisau nesafol am scriptiau, stylesheet a fyliau olygu. Mae'r caisau hyn yn cael eu targedig yn uniongyrchol i'r server Ultimate Multisite eich.

Gallai'n ddefnyddio'r sefyllfaeth hwn yn llai ei ddefnyddio gan gael ei chwarae, ond nid yw'n gwella problem arall - y ddiffygau geografig (geographic latencies). Gallai'r serverau aml yn cael eu defnyddio gyda chyflwyniadau cyflym o'r ffwrdd (front-end caching solutions) a rheolau dystrygi cynnwys (CDN) i gyflwyno'r caisau arpeiliaid statach. Mae'r gyflwyniad hwn a chwarae'r aset cyn y cyfarfod yn gwella rwsau procesio, yn tynnu ddelio, yn osgoi ddiffygau angen a'r gael ychwanegau technolegol yn gyffredinol.

Mae Ultimate Multisite yn cynnwys add-on Cloudflare sydd yn ddefnyddiol i'r rheolwr serverau i leoli eu cyflwyniadau yn ôl Cloudflare ac i ddefnyddio nid yn unig ei fadaisau caching, ond hefyd y gael ychwanegau DNS hosting, certydd SSL a mecanwaith diogelwch.

#### Backups {#backups}

Gallai'r chwarae 50 pobl am cyfateleʊ ar backups ac cael 50 ddyniad cyffredinol ar y strategaethau back up. Ymateb yw: mae'n dipynol.

Mae'r hyn sy nid yw'n ddrwg y mae cyflenwiadau (backups) yn angen, ac fod yn rhy ddigon i'r sylwio ei gael eu cyfathrebu gan ychwanegwyr, yn enwedig un sy cynnig serchion cael eu cyfathrebu, yn ddiweddarach, mae cydweithwyr bydd yn chwilio i'r adeiladu cyd-llwybr (network administrator) i rhoi a gael y serchion hyn. Pwy yw'r adeiladu cyd-llwybr sy'n cael ei chwilio? Mae hyn yn problem yn ddiweddarach.

Ar gyfer y rheol hwn, byddwn yn cytuno bod cyfathrebu (backup) yn cop o statws y system ar amser y cafodd y cyfathrebu ei gynnig. Yn einfed yn einfed, beth yw statws y system ar amser y cyfathrebu mae'r statws hwn yn cael ei gael a'i gael yn ddefnyddiol yn y cyfathrebu.

 gyda'r meddyliau hyn, bydd y ateb am beth yw ffurfio'r cyfathrebu a beth yw'r iawnoror i eich dyfodol yn cyflwyno'r serchion ac y mae'n dda ar gyfer eich dyfodol yn cyffredin yn bennaf ar eich rheiddio a'r gallu gael ystyr hyn. ond, o'r ffurfiau sydd yn ddefnyddiolestrach i'r ddifrifu, bydd y opsiynau isod ymlaen yn rhoi rhywfaint o gyfarwyddiadau.

#### Snapshots (Cyflenwiadau) {#snapshots}

Mae snapshots yn "silver bullets" i'r cyfathrebu oherwydd ei fod yn einfedol, nid yn cael eu hanfodio (hyd yn oed os ydych chi eisiau gael ychwanegiad), ac mae hi'n "yn gweithio" yn unig. ond mae angen i'r chydweithredwr eich help, ac mae'n cyflwyno'r pethau hyn yn bennaf os oes gennych VPS (Virtual Private Server) neu rhywbeth sydd yn cyfathrebu â hynny. Mae sawl ychwanegwyr a ddefnyddir mewn ddogfen y "Compatible Providers" yn cynnig cyfathrebu sy'n angen i ddifrifu neu chwilio gan y adeiladu cyd-llwybr.

Pobethau'r barchnadau traddionol yn tynal y cyfathrebu a ddatblygiadau, mae snapshot yn tynal i'r disgyblhau cyfan. Mae hynny'n golygu nad yw data'r safle yn cael ei cyfathru mewn snapshot ond hefyd y system operandi a'r cynnigiadau. Ar gyfer llawer iddo yw'r astudiaeth hwn yn ffurfyn ddefnyddiol, gan gallai'n cyflwyno system newydd yn llwyr yn gyflym o snapshot ac ei gael yn gweithredol i ddod yn lle'r instance sydd mewn anhygo. Yn y cyfathrebu hefyd, mae'r proses ailgofio i ddeall y ffeiliau yn hanfodol i chwarae'r image snapshot fel disgyblhau i'r instance sydd ar gael felly gallai'r ffeiliau cael eu cyffredin a chopytu.

Gall snapshotau dod â chystalau ychwanegol gyda'r cyfathrebuwr hosting, ond mae'n fod yn polisi diogelwch yn erbyn anghytuntiau.

#### Scriptau Extern {#external-scripts}

Mae'n dyfarnio dim ond scriptau a chyflwyniadau extern i farchnad WordPress a resurau MySQL, ac bydd hynny'n gweithio'n dda ar gyfer Ultimate Multisite gan fod yn plugin WordPress sy'n defnyddio y filesystem a'r database o WordPress. Fel gael ei ddefnyddio snapshotau safle WordPress byddai'n gwriadu'r angenau Ultimate Multisite'n ddigonol.

Ni gallwn ni allu cyflwyno unrhyw script yn fwy na chwarae arall, ond mae'r cyngor am ychwanegol yn cael ei gyflwyno i chwarae gwahanol o gwyliau ailgofio a ddatblygiad i sicr bod y canlyniadau yn dymunol ac i 'bydd sicr bydd sicr' gan ddarganfod y script a'i ffurfyn yn dilynol.

Rhaid gynnwys ei fod y scriptau hyn, wrth eu chwarae, yn llwybr y cefnogaeth system sydd i'w gwahanu.

#### Plugins {#plugins}

Mae dim ond problem yn WordPress sydd wedi'i ail yn cael ei ddefnyddio gyda plugin ac os nid yw'r rheoli scriptau extern yn eich hoffter, gall yr unigol plugin fod yn opsiwn sydd arall.

Mae'r pluginau yn gwahaniaethu mewn opsiynau a ffeithiau, ond mae'n cyflawni'r un ffurf ystodlaethol: i gyfnewid y fyliau o WordPress a'r databiau. Ar ôl hyn, mae ffeithiau'n gwahaniaethol fel yr holl pluginau gallu dod â'r backupau i weithgareddau allanolol fel Google Drive neu Dropbox neu i rhywun serbu storio olygu cyfathoghlydol fel S3, Wasabi neu eraill. Mae'r pluginau sydd yn ffurfiol yn rhoi backupau diffrenneol neu rhywun strategaid i backupu dim ond data wedi'i newid i sicrhau costau storio allanolol.

Pan mae eich plugin yn cael ei ddefnyddio, gwneudai gofyn i chi gweld i sicr ydynt yn gwrthosi'r multisite. Oherwydd natur ei ffurf gweithredu, gallwch anghofio chwarae amserol ar y server wrth y cyfnod backup yn cael ei gyflawni wedi'i gwblhau.

#### Domain a SSL {#domain-and-ssl-1}

Mae llawer wedi siarad am enw domainau mewn modd _subdomain_ multisite. Mae'r ateb allanolol i gweithredwyr cyd-gynlluniau ar gyfer hyn yn cael ei ddefnyddio cyfathoghlyd DNS wildcards (wildcard DNS entries).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Mae'r mathau DNS hyn yn llwybr y _subdomains_ fel ‘site1.domain.com’ a ‘site2.domain.com’ i'r adran IP 1.2.3.4, gan gyfathoghio Ultimate Multisite a WordPress Multisite mwy, gan ddefnyddio modd _subdomain_.

Gall hyn gweithio'n fawr am HTTP oherwydd bod y host target yn cael ei derbyn o headerau HTTP, ond mae'r wefan yn rhy simple yr adran hwn i ddyddiad hyn, lle mae cyfathregau HTTPS diogel yn angen.

Mae'n ddrwg gennych ychwanegau einfailol ar gyfer cyfyrchu SSL. Yn ffurf _subdirectory_ (subdirectory) gallai'r certfeydd domain cyffredinol defnyddio. Mae’r certfeydd hyn ar gael yn llai a yn rhydd o ddefnyddio gan ychwanegwyr gweithredoedd sydd wedi defnyddio'r serchfeydd LetsEncrypt neu ffurf arall. Yn ychwaneg, mae'n cael eu cyflwyno ar gyferol gan ychwanegwyr commercially os oes gennych gallwch ddefnyddio'r certfeydd cyfleuster (certificate signing request).

Ar ffurf _subdomain_ (subdomain) yn defnyddio certfeydd cyfleuster (wildcard SSL certificate) bydd yn cyd-fynd yn perfformio gyda domain cyfleuster ac yn sylw'r certfeydd i fod yn ddefnyddiol ar gyfer y domain gorth (root domain) a'r holl _subdomains_ heb ffurf cyflwyno anghyffurfio.

Fodd bynnag, rhaid i gydnabod bod certfeydd cyfleuster SSL gallai nid yn weithio gyda serchion fel Cloudflare heb fod ar plan enterprise neu ddefnyddio'r gyfeiriad i DNS dim ond yn y cyflwyno lle mae holl cache a optimiadau wedi'i gael.

Mae Ultimate Multisite sydd o ddefnyddio'r problem hwn yn rhoi ei ddefnyddio'r profiad amrywiol gyda'r angenau WordPress multisites. Bydd ychwanegau einfailol hwn yn gwneud i Ultimate Multisite defnyddio'r cyfathrebu Cloudflare eich credentials i drosglwyddo (add) entry DNS ar gyfer sites network mewn Cloudflare ac i setio eu ffurf i 'proxied'. Yn y ffordd hwn, bydd pob site subsite network, pan cael ei creu, gyda'r gorau a prifau Cloudflare yn llawn gan SSL.

Ar gyfer y natur a gweithredol o eich cyflwyniad Ultimate Multisite gallai fod angen i ddynion defnyddio eu domaina eu hunain. Yn y bynnag, mae'r gyn-archwizair network yn cael ei chwarae i ddefnyddio'r pethau dyddiant: un, y gweithredol o'r enw domain a ddau, a dros, certfeydd SSL ar gyfer y domain.

Ar gyfer y cytundebau, mae defnyddio Cloudflare yn opsiwn dda. Mae angen i'r cyddeewr rhoi ei domain ar Cloudflare, nodi CNAME i'r domain cyntaf (root domain) o Ultimate Multisite a mapi ei domain mewn Ultimate Multisite i entyn y ffurf ei enw domain newydd yn dechrau cael gron.

Ar ôl hynny, mae angen gael ysgolion allweddol sydd wedi'u chwilio, y gallai fod ebyd y prosess o sethedig DNS a SSL yn rhyfedd. Fodd bynnag, gyda'r cyfathri Ultimate Multisite â'r sgilau hyn, mae'r amgylchedd yn cael ei ddefnyddio ac mae'r gweithrediad yn cael ei awtomatgyrchu.

#### Plugins {#plugins-1}

Mae'n rhyfeddol fod angen rhai pluginau ychwanegol i rhoi ffurf ystyr i eich cyddeewyr neu weithgareddion. Allwch ddefnyddio pob plugin gyda WordPress Multisite a Ultimate Multisite? Mae hyn yn cyflwyno'r amser.

Er bod belaw pob plugin allweddol mewn WordPress Multisite, mae ei chwaraeon a'r licensau yn மாறுo o gweithredwr i gweithredwr.

Mae'r angen yn dod yn cael ei ddefnyddio gyda rhai pluginau sydd angen licens ar gael ar gael ar gael y domain. Mae hyn yn ei fod yn ei fod mae angen i'r gweithredwr weithgareddol gwneud y chwaraeon licens ar gael ar gael eu plugin ar y site newydd.

Felly, gallai fod yn dda gweld â'r gweithredwr plugin ar gyfer sut bydd ei plugin yn gweithio gyda WordPress Multisite a unrhyw amgylchedd special neu weithrediadau angen i licensio'r ei wneud.
