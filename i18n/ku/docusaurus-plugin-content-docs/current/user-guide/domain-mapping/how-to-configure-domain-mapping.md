---
title: Nexşandina Domainê Çawa Saz Bikin
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Çawa Domain Mapping (v2) Veavakirin {#how-to-configure-domain-mapping-v2}

_**TÊBÎNIYA GIRÎNG: Ev gotar li ser Ultimate Multisite guhertoya 2.x e.**_

Yek ji taybetmendiyên herî bihêz ên toreke premium ew e ku em dikarin ji xerîdarên xwe re şansê bidin ku domaineke asta jor bi malperên xwe ve girê bidin. Axir, kîjan profesyoneltir xuya dike: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) an [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ji ber vê yekê Ultimate Multisite ev taybetmendî di nav xwe de pêşkêş dike, bêyî ku hewcedariya pluginên aliyê sêyem hebe.

## Domain mapping çi ye? {#whats-domain-mapping}

Wekî ku navê wê jî dibêje, domain mapping şiyana ku Ultimate Multisite pêşkêş dike ye: daxwazek ji bo domaineke taybet bistîne û wê daxwazê bi malpera têkildar a di torê de, ku ew domaina taybet pê ve girêdayî ye, ve girê bide.

### Çawa domain mapping li ser Tora xwe ya Ultimate Multisite saz bikin {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Ji bo ku domain mapping bixebite, divê hûn hin mîhengan bikin. Xweşbextane, Ultimate Multisite karê giran ji bo we otomatîk dike, da ku hûn bi hêsanî daxwazan bicîh bînin.

Di dema sazkirina Ultimate Multisite de, rêber dê **sunrise.php** otomatîk kopî bike û li peldanka diyarkirî saz bike. **Rêber dê nehiêle hûn berdewam bikin heta ev gav temam bibe**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ev tê wateya ku piştî ku rêberê sazkirina Ultimate Multisite sazkirina tora we temam kir, hûn dikarin yekser dest bi girêdana domaina taybet bikin.

Bihînin bîra xwe ku domain mapping di Ultimate Multisite de ne mecbûrî ye. Hûn dikarin fonksiyona xwezayî ya domain mapping a WordPress Multisite an jî çareseriyeke din a domain mapping bikar bînin.

Ger hewce be hûn domain mapping a Ultimate Multisite neçalak bikin da ku cih bidin çareseriyên din ên domain mapping, hûn dikarin vê taybetmendiyê li bin **Ultimate Multisite > Mîheng > Domain Mapping** neçalak bikin.

![Rûpela mîhengên Domain Mapping ku vegerandina admin, peyama mapping û vebijarkên DNS nîşan dide](/img/config/domain-mapping-settings.png)

Rast li bin vê vebijarkê, hûn dikarin vebijarka **Zor bike Vegerandina Admin** jî bibînin. Ev vebijark dihêle hûn kontrol bikin ka xerîdarên we dikarin hem li ser domaina xwe ya taybet hem jî li ser subdomainê bigihîjin admin dashboarda xwe, an tenê li yek ji wan.

Ger hûn **Zor bike vegerandin bo domaina girêdayî** hilbijêrin, xerîdarên we dê tenê li ser domainên xwe yên taybet bikarin bigihîjin admin dashboarda xwe.

Vebijarka **Zor bike vegerandin bo** **domaina torê** bi temamî berevajî vê dike - xerîdarên we dê tenê li ser subdomaina xwe destûr hebin bigihîjin dashboardên xwe, her çend hewl bidin li ser domainên xwe yên taybet têkevin jî.

Û vebijarka **Destûr bide gihîştina adminê hem bi domaina girêdayî hem jî bi domaina torê** dihêle ew hem li ser subdomainê hem jî li ser domaina taybet bigihîjin admin dashboardên xwe.

![Dropdowna Vegerandina Admin ya vekirî ku sê vebijarkên vegerandinê nîşan dide](/img/config/domain-mapping-redirect-options.png)

Du rê hene ji bo girêdana domaineke taybet. Ya yekem ew e ku hûn wekî super admin ji network admin dashboarda xwe navê domainê girê bidin, û ya duyem jî bi rêya subsite admin dashboard di bin rûpela hesabê de ye.

Lê berî ku hûn dest bi girêdana domaina taybet bi yek ji binmalperên di tora xwe de bikin, divê piştrast bikin ku **mîhengên DNS** ên navê domainê rast veavakirî ne.

###

### Piştrastkirin ku mîhengên DNS ên domainê rast veavakirî ne {#making-sure-the-domain-dns-settings-are-properly-configured}

Ji bo ku girêdan bixebite, divê hûn piştrast bikin ku domaina ku hûn dixwazin girê bidin ber bi IP addressa Tora we ve nîşan dide. Bihînin bîra xwe ku hûn hewceyî IP addressa Torê ne - IP addressa domaina ku Ultimate Multisite lê saz bûye - ne IP addressa domaina taybet ku hûn dixwazin girê bidin. Ji bo lêgerîna IP addressa domaineke taybet, em pêşniyar dikin ku wekî mînak biçin [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Ji bo ku domainê rast girê bidin, divê hûn di veavakirina **DNS** a xwe de **A RECORD** zêde bikin ku ber bi wê **IP address** ve nîşan bide. Rêvebirina DNS di navbera tomarvanên domainên cuda de gelek diguhere, lê heke hûn li ser " _Creating A Record on XXXX_ " bigerin, ku XXXX tomarvana domaina we ye (mînak: " _Creating A Record on_ _GoDaddy_ "), gelek fêrkarî li ser înternetê hene.

Ger hûn di xebitandina vê de zehmetî bibînin, **bi piştgiriya tomarvana domaina xwe re têkilî daynin** û ew dikarin di vê beşê de alîkariya we bikin.

Ger hûn plan dikin ku destûr bidin xerîdarên xwe domainên xwe bixwe girê bidin, ew ê vê beşê bixwe bikin. Ger nikaribin A Record biafirînin, wan ber bi pergala piştgiriya tomarvana wan ve rêberî bikin.

### Girêdana navê domaina taybet wekî Super Admin {#mapping-custom-domain-name-as-super-admin}

Dema ku hûn li ser tora xwe wekî super admin têketî ne, hûn dikarin bi hêsanî navên domainên taybet zêde bikin û rêve bibin bi çûna bin **Ultimate Multisite > Domain**.

![Rûpela lîsteya Domainan di Ultimate Multisite de](/img/admin/domains-list.png)

Di bin vê rûpelê de, hûn dikarin li jorê li bişkoka **Domain Zêde Bike** bikirtînin û ev dê paceyeke modal veke ku tê de hûn dikarin **navê domaina taybet**, **binmalpera** ku hûn dixwazin navê domaina taybet li ser wê bisepînin, saz bikin û tijî bikin, û biryar bidin ka hûn dixwazin wê wekî navê **domaina sereke** saz bikin an na (bihînin bîra xwe ku hûn dikarin **çend navên domainan bi yek binmalperê ve girê bidin**).

![Modala Zêdekirina Domainê bi navê domainê, hilbijêra malperê û toggle ya domaina sereke](/img/admin/domain-add-modal.png)

Piştî ku hemû agahî têxin, paşê hûn dikarin li jêrê li bişkoka **Domaina Heyî Zêde Bike** bikirtînin.

Ev dê pêvajoya piştrastkirin û anîna agahiyên DNS ên domaina taybet dest pê bike. Hûn dê li jêrê rûpelê jî logek bibînin da ku pêvajoya ku derbas dibe bişopînin. Ev pêvajo dikare çend xulekên dirêj bike.

Ultimate Multisite v2.13.0 herwiha tomara domaina hundirîn bixweber diafirîne dema ku malperek nû li ser hostekê tê afirandin ku divê wek domaina taybet a her malperê were hesibandin. Heke host domaina sereke ya torê be, an yek ji domainên bingehîn ên hevpar ên forma checkout ku li ser qada **Site URL** hatine mîhengkirin be, tomara mapped-domain a bixweber tê derbas kirin da ku ew domaina bingehîn a hevpar ji bo her malpera ku wê bi kar tîne berdest bimîne.

Dema xerîdarek domaina nû bi Domain Seller v1.3.0 an nûtir re tomar dike, Ultimate Multisite bi awayê standard domaina tomarkirî bi malpera torê ya xerîdar ve map dike. Rêveber êdî ne hewce ne piştî tomarkirineke serketî tomareke mapped-domain a cuda zêde bikin, heta ku nexwazin vebijêrkên wek ala domaina sereke, rewşa çalakbûnê, an birêvebirina SSL biguherînin.

**Qonax** an rewş divê ji **Kontrola DNS** bibe **Amade** heke her tişt rast hatibe sazkirin.

<!-- Wêne berdest nîne: Rêza domainê ku qonaxa Kontrola DNS di lîsteya domainan de nîşan dide -->

<!-- Wêne berdest nîne: Rêza domainê ku qonaxa Amade bi nîşankera rewşa kesk nîşan dide -->

Heke hûn li ser navê domainê bikirtînin, hûn ê karibin çend vebijêrkên di hundirê wê de bibînin. Werin bi kurtî li wan binêrin:

![Rûpela hûrgiliyên domainê bi guherkerên qonax, malper, çalak, sereke û SSL](/img/admin/domain-edit.png)

**Qonax:** Ev qonaxa ku domain tê de ye. Dema hûn cara yekem domainê zêde dikin, ew ê îhtîmal bi qonaxa **Kontrola DNS** be. Pêvajo dê ketinên DNS kontrol bike û piştrast bike ku ew rast in. Paşê, domain dê bikeve qonaxa **Kontrola SSL**. Ultimate Multisite dê kontrol bike ka domain SSL heye an na û domaina we wek **Amade** an **Amade (bê SSL)** kategorîze bike.

**Malper:** Subdomaina ku bi vê domainê ve girêdayî ye. Domaina mapkirî dê naveroka vê malpera taybet nîşan bide.

**Çalak:** Hûn dikarin vê vebijêrkê vekin an bigirin da ku domainê çalak an neçalak bikin.

**Domaina sereke ye?:** Xerîdarên we dikarin ji bo her malperê zêdetir ji yek domaina mapkirî hebin. Vê vebijêrkê bi kar bînin da ku hilbijêrin gelo ev domaina sereke ya malpera taybet e an na.

**Ewledar e?:** Her çiqas Ultimate Multisite berî çalakkirinê kontrol dike ka domain sertîfîkaya SSL heye an na, hûn dikarin bi destan hilbijêrin ku domain bi sertîfîkaya SSL an bê sertîfîkaya SSL were barkirin. Bala xwe bidin ku heke malper sertîfîkaya SSL tune be û hûn hewl bidin wê bi zorê bi SSL bar bikin, dibe ku xeletiyan bide we.

### Mapkirina navê domaina taybet wek bikarhênerê subsite {#mapping-custom-domain-name-as-subsite-user}

Rêveberên subsite jî dikarin ji dashboarda rêveberiya subsite ya xwe navên domainên taybet map bikin.

Pêşî, divê hûn piştrast bikin ku vê vebijêrkê di bin mîhengên **Mapkirina domainê** de çalak dikin. Wêneya jêrîn bibînin.

<!-- Wêne berdest nîne: Mîhengên Mapkirina domainê ku dihêle bikarhênerên subsite bi guherkera Customer DNS Management domainan map bikin -->

Hûn dikarin vê vebijêrkê herwiha di asta **Plan** de an di vebijêrkên berhemê de li ser **Ultimate Multisite > Berhem** saz an mîheng bikin.

![Beşa Domainên Taybet li ser rûpela sererastkirina berhemê](/img/config/product-custom-domains.png)

Dema yek ji wan vebijêrkan çalak be û bikarhênerê subsite destûr hebe navên domainên taybet map bike, divê bikarhênerê subsite li bin rûpela **Account** metaboxek bi navê **Domain** bibîne.

<!-- Wêne berdest nîne: Metaboxa Domain li ser rûpela Account a subsite bi bişkoka Zêdekirina Domainê -->

Bikarhêner dikare li bişkoka **Zêdekirina Domainê** bikirtîne û ew ê paceyeke modal bi çend rêwerzan veke.

<!-- Wêne berdest nîne: Modala Zêdekirina Domainê ku rêwerzên DNS A-record ji bo bikarhênerên subsite nîşan dide -->

Paşê bikarhêner dikare li **Gava Piştre** bikirtîne û berdewam bike da ku navê domaina taybet zêde bike. Ew dikarin herwiha hilbijêrin ka ev dê domaina sereke be an na.

<!-- Wêne berdest nîne: Forma Zêdekirina Domainê bi qada navê domaina taybet û guherkera domaina sereke -->

<!-- Wêne berdest nîne: Gava piştrastkirina Zêdekirina Domainê ku erêkirina DNS dest pê dike -->

Kirtandina li ser **Zêdekirina Domainê** dê pêvajoya erêkirin û anîna agahiyên DNS ên domaina taybet dest pê bike.

### Derbarê Hevdemkirina Domainê {#about-domain-syncing}

Hevdemkirina Domainê pêvajoyek e ku Ultimate Multisite navê domaina taybet wek domaina add-on li hesabê hosting a we zêde dike **da ku mapkirina domainê bixebite**.

Hevdemkirina domainê bixweber çêdibe heke dabînkerê hosting a we bi taybetmendiya mapkirina domainê ya Ultimate Multisite re yekgirtin hebe. Niha, van dabînkerên hosting hene: _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ û _Cpanel._

Dema yekgirtina dabînkerê host çalak be, Ultimate Multisite dikare herwiha erka afirandina DNS ya aliyê dabînkerê an afirandina subdomainê ji bo malperên nû hatine afirandin bike nav rêzê. Heke tu yekgirtin li benda wê erkê nebe, karê paşxaneyê tê derbas kirin da ku ketinên rêzê yên bê bandor neyên afirandin. Kontrolên DNS û SSL ji bo domainên mapkirî bi pêvajoya asayî ya qonaxên domainê berdewam dikin.

Hûn ê hewce bikin vê yekgirtinê di mîhengên Ultimate Multisite de li bin tab-a **Yekgirtin** çalak bikin.

![Tab-a Yekgirtinan di mîhengên Ultimate Multisite de ku dabînkerên hosting nîşan dide](/img/config/integrations-tab.png)

<!-- Wêne berdest nîne: Girêdanên Veavakirina dabînkerê hosting li ser tab-a mîhengên Yekgirtinan -->

_Bala xwe bidin ku heke dabînkerê hosting a we ne yek ji wan dabînkerên li jor hatine gotin be, **hûn ê hewce bikin navê domainê bi destan hevdem bikin an li hesabê hosting a xwe zêde bikin**._
