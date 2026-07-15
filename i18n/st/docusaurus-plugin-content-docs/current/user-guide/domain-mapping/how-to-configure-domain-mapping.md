---
title: Mokhoa oa ho Hlophisa Ho Bapisa Domain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Mokhoa oa ho Lokisa ho Hokahanya Domain (v2)

_**TEMOSO EA BOHLOKOA: Sengoloa sena se bua ka Ultimate Multisite mofuta oa 2.x.**_

E ’ngoe ea likarolo tse matla ka ho fetisisa tsa marang-rang a premium ke bokhoni ba ho fa bareki ba rona monyetla oa ho hokela domain ea boemo bo holimo ho libaka tsa bona. Qetellong, ke efe e shebahalang e le ea profeshenale haholoanyane: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) kapa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ke ka lebaka leo Ultimate Multisite e fanang ka tšobotsi eo e hahiloe ka hare, ntle le tlhoko ea ho sebelisa li-plugin tsa batho ba boraro.

## Ho hokahanya domain ke eng? {#whats-domain-mapping}

Joalokaha lebitso le bontša, ho hokahanya domain ke bokhoni bo fanoang ke Ultimate Multisite ba ho amohela kopo ea domain e ikhethileng le ho hokahanya kopo eo le sebaka se lumellanang le eona marang-rang se nang le domain eo e hokelletsoeng.

### Mokhoa oa ho lokisa ho hokahanya domain ho Ultimate Multisite Network ea hao {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Ho hokahanya domain ho hloka hore o etse litlhophiso tse itseng hore ho sebetse. Ka lehlohonolo, Ultimate Multisite e iketsetsa mosebetsi o boima bakeng sa hao hore o khone ho fihlela litlhoko habonolo.

Nakong ea ho kenya Ultimate Multisite, wizard e tla kopitsa le ho kenya **sunrise.php** foldareng e khethiloeng ka bo eona. **Wizard e ke ke ea o lumella ho tsoela pele ho fihlela mohato ona o phethiloe**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Sena se bolela hore hang ha wizard ea ho kenya Ultimate Multisite e qetile ho lokisa marang-rang a hao, o ka qala ho hokahanya domain e ikhethileng hang-hang.

Hlokomela hore ho hokahanya domain ho Ultimate Multisite ha ho qobelloe. O na le khetho ea ho sebelisa mosebetsi oa tlhaho oa WordPress Multisite oa ho hokahanya domain kapa tharollo efe kapa efe e ’ngoe ea ho hokahanya domain.

Haeba o hloka ho tima ho hokahanya domain ha Ultimate Multisite ho fa sebaka litharollo tse ling tsa ho hokahanya domain, o ka tima tšobotsi ena tlasa **Ultimate Multisite > Litlhophiso > Ho Hokahanya Domain**.

![Leqephe la litlhophiso tsa Ho Hokahanya Domain le bontšang ho fetisetsoa ha admin, molaetsa oa ho hokahanya le likhetho tsa DNS](/img/config/domain-mapping-settings.png)

Ka ho toba ka tlase ho khetho ena, o ka boela oa bona khetho ea **Qobella ho Fetisetsoa ha Admin**. Khetho ena e o lumella ho laola hore na bareki ba hao ba tla khona ho fihlella Dashboard ea bona ea admin ka bobeli domain ea bona e ikhethileng le subdomain kapa ho e ’ngoe feela ea tsona.

Haeba o khetha **Qobella ho fetisetsa ho domain e hokahantsoeng** , bareki ba hao ba tla khona feela ho fihlella Dashboard ea bona ea admin ho li-domain tsa bona tse ikhethileng.

Khetho ea **Qobella ho fetisetsa ho** **domain ea marang-rang** e tla etsa se fapaneng ka ho feletseng - bareki ba hao ba tla lumelloa feela ho fihlella li-Dashboard tsa bona ho subdomain ea bona, leha ba leka ho kena ka li-domain tsa bona tse ikhethileng.

’Me khetho ea **Lumella phihlello ho admin ka bobeli domain e hokahantsoeng le domain ea marang-rang** e ba lumella ho fihlella li-Dashboard tsa bona tsa admin ka bobeli ho subdomain le domain e ikhethileng.

![Dropdown ea Ho Fetisetsoa ha Admin e atolositsoeng e bontšang likhetho tse tharo tsa ho fetisetsa](/img/config/domain-mapping-redirect-options.png)

Ho na le litsela tse peli tsa ho hokahanya domain e ikhethileng. Ea pele ke ka ho hokahanya lebitso la domain ho tsoa ho Dashboard ea admin ea marang-rang a hao joaloka super admin ’me ea bobeli ke ka Dashboard ea admin ea subsite tlasa leqephe la Account.

Empa pele o qala ho hokahanya domain e ikhethileng ho e ’ngoe ea li-subsite marang-rang a hao, o tla hloka ho netefatsa hore **litlhophiso tsa DNS** tsa lebitso la domain li hlophisitsoe hantle.

###

### Ho netefatsa hore litlhophiso tsa DNS tsa domain li hlophisitsoe hantle {#making-sure-the-domain-dns-settings-are-properly-configured}

Hore ho hokahanya ho sebetse, o hloka ho netefatsa hore domain eo o rerang ho e hokahanya e supa ho IP address ea Network ea hao. Hlokomela hore o hloka IP address ea Network - IP address ea domain moo Ultimate Multisite e kentsoeng teng - eseng IP address ea domain e ikhethileng eo o batlang ho e hokahanya. Ho batla IP address ea domain e itseng, re sisinya hore o ee ho [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), mohlala.

Ho hokahanya domain ka nepo, o hloka ho eketsa **A RECORD** ho tlhophiso ea hao ea **DNS** e supang ho **IP address** eo. Taolo ea DNS e fapana haholo pakeng tsa barekisi ba fapaneng ba li-domain, empa ho na le lithuto tse ngata inthaneteng tse buang ka seo haeba o batla " _Ho Etsa A Record ho XXXX_ " moo XXXX e leng morekisi oa hao oa domain (mohl.: " _Ho Etsa A Record ho_ _GoDaddy_ ").

Haeba o iphumana o e-na le bothata ba ho etsa hore sena se sebetse, **ikopanye le tšehetso ea morekisi oa hao oa domain** ’me ba tla khona ho o thusa ka karolo ena.

Haeba o rera ho lumella bareki ba hao ho hokahanya li-domain tsa bona, ba tla tlameha ho iketsetsa mosebetsi karolong ena. Ba lebise tsamaisong ea tšehetso ea morekisi oa bona haeba ba iphumana ba sa khone ho theha A Record.

### Ho hokahanya lebitso la domain e ikhethileng joaloka Super Admin {#mapping-custom-domain-name-as-super-admin}

Ha o kene joaloka super admin marang-rang a hao, o ka eketsa le ho laola mabitso a li-domain tse ikhethileng habonolo ka ho ea tlasa **Ultimate Multisite > Li-domain**.

![Leqephe la lenane la li-Domain ho Ultimate Multisite](/img/admin/domains-list.png)

Tlas’a leqephe lena, o ka tobetsa konopo ea **Eketsa Domain** holimo ’me sena se tla hlahisa fensetere ea modal moo o ka behang le ho tlatsa **lebitso la domain e ikhethileng** , **subsite** eo o lakatsang ho kenya lebitso la domain e ikhethileng ho eona, le ho etsa qeto ea hore na o batla ho e beha e le **lebitso la domain ea mantlha** kapa che (hlokomela hore o ka hokahanya **mabitso a mangata a li-domain ho subsite e le ’ngoe**).

![Modal ea Eketsa Domain e nang le lebitso la domain, sekhethi sa sebaka le toggle ea domain ea mantlha](/img/admin/domain-add-modal.png)

Ka mor’a ho kenya tlhaiso-leseling eohle, o ka tobetsa konopo ea **Eketsa Domain e Teng** ka tlase.

Sena se tla qala tšebetso ea ho netefatsa le ho lata tlhaiso-leseling ea DNS ea domain e ikhethileng. O tla boela o bone log ka tlase ho leqephe hore o latele tšebetso eo e ntseng e feta ho eona. Tšebetso ena e ka nka metsotso e seng mekae ho phetheha.

Ultimate Multisite v2.13.0 e boetse e iketsetsa rekoto ya domaine ya ka hare ka bo yona ha saete e ntjha e bopjwa ho moamoheli ya lokelang ho tshwarwa e le domaine ya saete ka nngwe. Haeba moamoheli e le domaine ya mantlha ya netweke, kapa e nngwe ya di-domaine tsa motheo tsa foromo ya checkout tse arolelanwang tse hlophisitsweng lebaleng la **Site URL**, rekoto ya domaine e mapilweng ka bo yona e a tlolwa hore domaine ya motheo e arolelanwang e dule e fumaneha ho saete e nngwe le e nngwe e e sebedisang.

Ha moreki a ngodisa domaine e ntjha ka Domain Seller v1.3.0 kapa e ntjha ho feta, Ultimate Multisite ka bo yona e mapa domaine e ngodisitsweng ho saete ya netweke ya moreki ka kamehla. Batsamaisi ha ba sa hloka ho kenya rekoto e arohaneng ya domaine e mapilweng ka mora ngodiso e atlehileng ntle le haeba ba batla ho fetola dikgetho tse kang letshwao la domaine ya mantlha, boemo ba ho kenya tshebetsong, kapa tshwaro ya SSL.

**Stage** kapa boemo bo lokela ho fetoha ho tloha ho **Checking DNS** ho ya ho **Ready** haeba tsohle di hlophisitswe hantle.

<!-- Senepe sa skrini ha se fumanehe: Mola wa domaine o bontshang mokgahlelo wa Checking DNS lenaneng la di-domaine -->

<!-- Senepe sa skrini ha se fumanehe: Mola wa domaine o bontshang mokgahlelo wa Ready ka sesupo sa boemo se setala -->

Haeba o tobetsa lebitso la domaine, o tla kgona ho bona dikgetho tse ding ka hare ho yona. Ha re di shebeng kapele:

![Leqephe la dintlha tsa domaine le nang le mokgahlelo, saete, dikonopo tsa ho bulela/kuzima active, primary le SSL](/img/admin/domain-edit.png)

**Stage:** Ona ke mokgahlelo oo domaine e leng ho ona. Ha o qala ho kenya domaine, mohlomong e tla ba mokgahlelong wa **Checking DNS**. Tshebetso e tla hlahloba dikeno tsa DNS mme e netefatse hore di nepahetse. Jwale, domaine e tla behwa mokgahlelong wa **Checking SSL**. Ultimate Multisite e tla hlahloba hore na domaine e na le SSL kapa tjhe mme e tla arola domaine ya hao e le **Ready** kapa **Ready (without SSL)**.

**Site:** Subdomain e amanang le domaine ena. Domaine e mapilweng e tla bontsha dikahare tsa saete ena e itseng.

**Active:** O ka bulela kapa wa tima kgetho ena ho kenya domaine tshebetsong kapa ho e ntsha tshebetsong.

**Is Primary Domain?:** Bareki ba hao ba ka ba le domaine e fetang e le nngwe e mapilweng bakeng sa saete ka nngwe. Sebedisa kgetho ena ho kgetha hore na ena ke domaine ya mantlha bakeng sa saete e itseng.

**Is Secure?:** Le hoja Ultimate Multisite e hlahloba hore na domaine e na le setifikeiti sa SSL kapa tjhe pele e e kgontsha, o ka kgetha ka letsoho ho kenya domaine ka setifikeiti sa SSL kapa ntle le sona. Hlokomela hore haeba webosaete e se na setifikeiti sa SSL mme o leka ho e qobella ho laiswa ka SSL, e ka o fa diphoso.

### Ho mapa lebitso la domaine le ikgethetseng jwaloka mosebedisi wa subsite {#mapping-custom-domain-name-as-subsite-user}

Batsamaisi ba subsite le bona ba ka mapa mabitso a di-domaine tse ikgethetseng ho tswa ho dashboard ya tsamaiso ya subsite ya bona.

Pele, o hloka ho netefatsa hore o kgontsha kgetho ena tlasa disetting tsa **Domain mapping**. Sheba senepe sa skrini se ka tlase.

<!-- Senepe sa skrini ha se fumanehe: Disetting tsa Domain mapping tse dumellang basebedisi ba subsite ho mapa di-domaine ka konopo ya Customer DNS Management -->

O ka boela wa seta kapa wa hlophisa kgetho ena tlasa boemo ba **Plan** kapa dikgetho tsa sehlahiswa ho **Ultimate Multisite > Products**.

![Karolo ya Custom Domains leqepheng la ho fetola sehlahiswa](/img/config/product-custom-domains.png)

Ha efe kapa efe ya dikgetho tseo e kgontshitswe mme mosebedisi wa subsite a dumelletswe ho mapa mabitso a di-domaine tse ikgethetseng, mosebedisi wa subsite o lokela ho bona metabox tlasa leqephe la **Account** e bitswang **Domains**.

<!-- Senepe sa skrini ha se fumanehe: Metabox ya Domains leqepheng la Account la subsite e nang le konopo ya Add Domain -->

Mosebedisi a ka tobetsa konopo ya **Add Domain** mme e tla hlahisa fensetere ya modal e nang le ditaelo tse ding.

<!-- Senepe sa skrini ha se fumanehe: Modal ya Add Domain e bontshang ditaelo tsa DNS A-record bakeng sa basebedisi ba subsite -->

Mosebedisi a ka tobetsa **Next Step** mme a tswele pele ho kenya lebitso la domaine le ikgethetseng. Ba ka boela ba kgetha hore na ena e tla ba domaine ya mantlha kapa tjhe.

<!-- Senepe sa skrini ha se fumanehe: Foromo ya Add Domain e nang le lebala la lebitso la domaine le ikgethetseng le konopo ya domaine ya mantlha -->

<!-- Senepe sa skrini ha se fumanehe: Mohato wa netefatso wa Add Domain o qalang netefatso ya DNS -->

Ho tobetsa **Add Domain** ho tla qala tshebetso ya ho netefatsa le ho lata tlhahisoleseding ya DNS ya domaine e ikgethetseng.

### Mabapi le ho Sync di-Domaine {#about-domain-syncing}

Ho Sync di-Domaine ke tshebetso moo Ultimate Multisite e kenyang lebitso la domaine le ikgethetseng akhaonteng ya hao ya hosting jwaloka domaine ya tlatsetso **hore domain mapping e sebetse**.

Ho sync domaine ho etsahala ka bo hona haeba mofani wa hao wa hosting a na le kopanyo le karolo ya domain mapping ya Ultimate Multisite. Hajoale, bafani bana ba hosting ke _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ le _Cpanel._

Ha kopanyo ya mofani wa hosting e le tshebetsong, Ultimate Multisite e ka boela ya kenya moleng mosebetsi wa DNS kapa wa ho bopa subdomain ka lehlakoreng la mofani bakeng sa disaete tse sa tswa bopjwa. Haeba ho se na kopanyo e mametseng mosebetsi oo, mosebetsi wa ka morao o a tlolwa ho qoba dikeno tsa mola tse sa etseng letho. Diteko tsa DNS le SSL bakeng sa di-domaine tse mapilweng di tswela pele ho sebetsa ka tshebetso e tlwaelehileng ya mokgahlelo wa domaine.

O tla hloka ho kenya kopanyo ena tshebetsong ho disetting tsa Ultimate Multisite tlasa tab ya **Integration**.

![Tab ya Integrations disetting tsa Ultimate Multisite e bontshang bafani ba hosting](/img/config/integrations-tab.png)

<!-- Senepe sa skrini ha se fumanehe: Dihokelo tsa Configuration tsa mofani wa hosting tabeng ya disetting tsa Integrations -->

_Hlokomela hore haeba mofani wa hao wa hosting e se e mong wa bafani bao ba boletsweng ka hodimo,**o tla hloka ho sync kapa ho kenya lebitso la domaine ka letsoho** akhaonteng ya hao ya hosting._
