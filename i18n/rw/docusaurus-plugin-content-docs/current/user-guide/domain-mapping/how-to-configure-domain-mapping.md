---
title: Uko washyiraho Domain Mapping
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Uko Wagena Domain Mapping (v2)

_**ICYITONDERWA CY’INGENZI: Iyi ngingo ivuga kuri Ultimate Multisite verisiyo 2.x.**_

Kimwe mu biranga bikomeye cyane network yo ku rwego rwo hejuru ni ubushobozi bwo guha abakiriya bacu amahirwe yo komeka domain yo ku rwego rwo hejuru ku mbuga zabo. None se, ni iki kigaragara nk’icy’umwuga kurushaho: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) cyangwa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ni yo mpamvu Ultimate Multisite itanga icyo kiranga kirimo imbere, bitagusabye gukoresha plugins z’abandi bantu.

## Domain mapping ni iki? {#whats-domain-mapping}

Nk’uko izina ribivuga, domain mapping ni ubushobozi butangwa na Ultimate Multisite bwo kwakira icyifuzo cya domain yihariye no guhuza icyo cyifuzo n’urubuga rubihuye muri network, rufite iyo domain yihariye yometseho.

### Uko washyiraho domain mapping kuri Network yawe ya Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping isaba ko ugira ibyo ushyiraho kugira ngo ikore. Igishimishije, Ultimate Multisite igukorera imirimo ikomeye mu buryo bwikora kugira ngo ubashe kuzuza ibisabwa byoroshye.

Mu gihe cyo kwinjiza Ultimate Multisite, wizard izahita ikoporora kandi ishyire **sunrise.php** mu bubiko bwagenewe. **Wizard ntizakwemerera gukomeza kugeza iyi ntambwe irangiye**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ibi bivuze ko igihe wizard yo kwinjiza Ultimate Multisite imaze kurangiza gushyiraho network yawe, ushobora gutangira guhita uhuza domain yihariye.

Menya ko domain mapping muri Ultimate Multisite atari itegeko. Ufite amahitamo yo gukoresha imikorere kavukire ya WordPress Multisite ya domain mapping cyangwa ikindi gisubizo icyo ari cyo cyose cya domain mapping.

Niba ukeneye guhagarika Ultimate Multisite domain mapping kugira ngo uhe umwanya ibindi bisubizo bya domain mapping, ushobora guhagarika iki kiranga munsi ya **Ultimate Multisite > Settings > Domain Mapping**.

![Ipaji y’amagenamiterere ya Domain Mapping yerekana admin redirect, ubutumwa bwa mapping n’amahitamo ya DNS](/img/config/domain-mapping-settings.png)

Ako kanya munsi y’iri hitamo, ushobora no kubona ihitamo **Force Admin Redirect**. Iri hitamo rigufasha kugenzura niba abakiriya bawe bazashobora kugera kuri admin dashboard yabo haba kuri domain yabo yihariye no kuri subdomain, cyangwa kuri kimwe muri byo gusa.

Nuhitamo **Force redirect to mapped domain** , abakiriya bawe bazashobora kugera kuri admin dashboard yabo gusa kuri domains zabo zihariye.

Ihitamo **Force redirect to** **network domain** rizakora ibinyuranye neza - abakiriya bawe bazemererwa kugera kuri dashboards zabo gusa kuri subdomain yabo, nubwo baba bagerageza kwinjira kuri domains zabo zihariye.

Kandi ihitamo **Allow access to the admin by both mapped domain domain and network domain** ribemerera kugera kuri admin dashboards zabo haba kuri subdomain no kuri domain yihariye.

![Admin Redirect dropdown yafunguwe yerekana amahitamo atatu ya redirect](/img/config/domain-mapping-redirect-options.png)

Hari uburyo bubiri bwo guhuza domain yihariye. Uburyo bwa mbere ni uguhuza izina rya domain uhereye kuri network admin dashboard yawe uri super adminand ubwa kabiri ni unyuze kuri subsite admin dashboard munsi ya paji ya account.

Ariko mbere yo gutangira guhuza domain yihariye na kimwe mu mbuga nto zo muri network yawe, uzakenera kumenya neza ko **DNS settings** z’izina rya domain zagenwe neza.

###

### Kwemeza ko DNS settings za domain zagenwe neza {#making-sure-the-domain-dns-settings-are-properly-configured}

Kugira ngo guhuza bikore, ukeneye kumenya neza ko domain uteganya guhuza yerekeza kuri IP address ya Network yawe. Menya ko ukeneye Network IP address - IP address ya domain aho Ultimate Multisite yinjijwe - si IP address ya domain yihariye ushaka guhuza. Kugira ngo ushake IP address ya domain runaka, turasaba kujya kuri [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), urugero.

Kugira ngo uhuze domain neza, ukeneye kongera **A RECORD** ku igenamiterere ryawe rya **DNS** ryerekeza kuri iyo **IP address**. Gucunga DNS biratandukanye cyane hagati y’abandikisha domains batandukanye, ariko hari inyigisho nyinshi kuri murandasi zibisobanura niba ushakishije " _Creating A Record on XXXX_ " aho XXXX ari umwandikishaji wa domain wawe (urug.: " _Creating A Record on_ _GoDaddy_ ").

Nusanga ufite ikibazo cyo gutuma ibi bikora, **hamagara ubufasha bw’umwandikishaji wa domain wawe** kandi bazashobora kugufasha kuri iki gice.

Niba uteganya kwemerera abakiriya bawe guhuza domains zabo bwite, bazagomba gukora umurimo wo kuri iki gice ubwabo. Berekeze kuri sisitemu y’ubufasha y’umwandikishaji wabo niba basanze badashoboye gukora A Record.

### Guhuza izina rya domain yihariye nka Super Admin {#mapping-custom-domain-name-as-super-admin}

Iyo winjiye nka super admin kuri network yawe, ushobora kongera no gucunga amazina ya domains zihariye byoroshye ujya munsi ya **Ultimate Multisite > Domains**.

![Ipaji y’urutonde rwa Domains muri Ultimate Multisite](/img/admin/domains-list.png)

Munsi y’iyi paji, ushobora gukanda kuri buto ya **Add Domain** iri hejuru, maze ibi bikazana idirishya rya modal aho ushobora gushyiraho no kuzuza **izina rya domain yihariye** , **urubuga ruto** wifuza gushyiriraho izina rya domain yihariye, no gufata icyemezo niba ushaka kuyishyiraho nk’izina rya **primary domain** cyangwa oya (menya ko ushobora guhuza **amazina ya domains menshi ku rubuga ruto rumwe**).

![Modal ya Add Domain ifite izina rya domain, ihitamo ry’urubuga na toggle ya primary domain](/img/admin/domain-add-modal.png)

Nyuma yo gushyiramo amakuru yose, ushobora gukanda buto ya **Add Existing Domain** iri hasi.

Ibi bizatangiza inzira yo kugenzura no kuzana amakuru ya DNS ya domain yihariye. Uzabona kandi log iri hasi ya paji kugira ngo ukurikirane inzira iri kunyuramo. Iyi nzira ishobora gufata iminota mike kugira ngo irangire.

Ultimate Multisite v2.13.0 na yo ikora mu buryo bwikora inyandiko y’imbere ya domain igihe site nshya ikozwe kuri host igomba gufatwa nka domain yihariye kuri buri site. Niba host ari domain nyamukuru ya network, cyangwa imwe muri shared checkout-form base domains zashyizweho kuri field ya **Site URL**, inyandiko ya mapped-domain ikorwa mu buryo bwikora irasimbukwa kugira ngo iyo shared base domain ikomeze kuboneka kuri buri site iyikoresha.

Iyo umukiriya yiyandikishirije domain nshya binyuze muri Domain Seller v1.3.0 cyangwa nshya kurushaho, Ultimate Multisite ihita ihuza domain yiyandikishijwe na network site y’umukiriya ku buryo busanzwe. Abayobozi ntibagikeneye kongeraho inyandiko ya mapped-domain itandukanye nyuma yo kwiyandikisha neza, keretse bashaka guhindura amahitamo nk’ibendera rya primary-domain, uko activation ihagaze, cyangwa imikorere ya SSL.

**Stage** cyangwa status bigomba guhinduka biva kuri **Checking DNS** bikajya kuri **Ready** niba byose byashyizweho neza.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Nukanda ku izina rya domain, uzashobora kubona amahitamo amwe n’amwe imbere yayo. Reka tuyarebereho vuba:

![Paji y’ibisobanuro bya domain iriho stage, site, active, primary na SSL toggles](/img/admin/domain-edit.png)

**Stage:** Iki ni icyiciro domain irimo. Iyo ubanje kongeraho domain, birashoboka ko izaba iri kuri **Checking DNS** stage. Uburyo buzagenzura DNS entries kandi bwemeze ko ari byo. Hanyuma, domain izashyirwa kuri **Checking SSL** stage. Ultimate Multisite izagenzura niba domain ifite SSL cyangwa itayifite, maze ishyire domain yawe mu cyiciro cya **Ready** cyangwa **Ready (without SSL)**.

**Site:** Subdomain ihujwe n’iyi domain. Mapped domain izerekana ibiri muri iyi site yihariye.

**Active:** Ushobora gufungura cyangwa gufunga iri hitamo kugira ngo ukoreshe cyangwa uhagarike domain.

**Is Primary Domain?:** Abakiriya bawe bashobora kugira mapped domain zirenze imwe kuri buri site. Koresha iri hitamo guhitamo niba iyi ari primary domain kuri site yihariye.

**Is Secure?:** Nubwo Ultimate Multisite igenzura niba domain ifite SSL certificate cyangwa itayifite mbere yo kuyikoresha, ushobora guhitamo intoki gufungura domain ifite cyangwa idafite SSL certificate. Menya ko niba website idafite SSL certificate kandi ukagerageza kuyihatira gufunguka ukoresheje SSL, ishobora kuguha amakosa.

### Guhuza izina rya custom domain nka Subsite user {#mapping-custom-domain-name-as-subsite-user}

Abayobozi ba subsite na bo bashobora guhuza amazina ya custom domain bavuye muri admin dashboard ya subsite yabo.

Mbere na mbere, ugomba kwemeza ko wafunguye iri hitamo munsi ya settings za **Domain mapping**. Reba screenshot iri hasi.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Ushobora kandi gushyiraho cyangwa kugena iri hitamo munsi y’urwego rwa **Plan** cyangwa amahitamo ya product kuri **Ultimate Multisite > Products**.

![Igice cya Custom Domains kuri paji yo guhindura product](/img/config/product-custom-domains.png)

Iyo ayo mahitamo ayo ari yo yose yafunguwe kandi subsite user yemerewe guhuza amazina ya custom domain, subsite user agomba kubona metabox munsi ya paji ya **Account** yitwa **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

User ashobora gukanda buto ya **Add Domain** maze ikazana modal window irimo amabwiriza amwe n’amwe.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

User ashobora noneho gukanda **Next Step** agakomeza kongeramo izina rya custom domain. Bashobora kandi guhitamo niba iyi izaba primary domain cyangwa itazaba yo.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Gukanda kuri **Add Domain** bizatangiza uburyo bwo kugenzura no kuzana amakuru ya DNS ya custom domain.

### Ibyerekeye Domain Syncing {#about-domain-syncing}

Domain Syncing ni uburyo Ultimate Multisite yongeramo izina rya custom domain muri hosting account yawe nka add-on domain **kugira ngo domain mapping ikore**.

Domain syncing iba mu buryo bwikora niba hosting provider wawe afite integration n’imikorere ya domain mapping ya Ultimate Multisite. Kugeza ubu, aba hosting providers ni _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ na _Cpanel._

Iyo integration ya host-provider iri gukora, Ultimate Multisite ishobora no gushyira ku murongo provider-side DNS cyangwa igikorwa cyo gukora subdomain ku ma site mashya yakozwe. Niba nta integration iri kumva icyo gikorwa, background job irasimbukwa kugira ngo hirindwe queue entries zidafite icyo zikora. Igenzura rya DNS na SSL kuri mapped domains rikomeza gukorwa binyuze mu buryo busanzwe bwa domain-stage.

Uzakenera gufungura iyi integration muri settings za Ultimate Multisite munsi ya tab ya **Integration**.

![Tab ya Integrations muri settings za Ultimate Multisite yerekana hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Zirikana ko niba hosting provider wawe atari umwe muri abo providers bavuzwe haruguru,**uzakenera gukora sync cyangwa kongeramo izina rya domain intoki** muri hosting account yawe._
