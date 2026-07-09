---
title: Nola konfiguratu domeinu-mapaketa
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Nola konfiguratu Domain Mapping (v2)

_**OHAR GARRANTZITSUA: Artikulu honek Ultimate Multisite 2.x bertsioari egiten dio erreferentzia.**_

Premium sare baten ezaugarri indartsuenetako bat gure bezeroei beren guneei goi-mailako domeinu bat eransteko aukera eskaintzea da. Azken finean, zer da profesionalagoa dirudiena: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) edo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Horregatik Ultimate Multisite-k ezaugarri hori integratuta eskaintzen du, hirugarrenen plugin-ak erabili beharrik gabe.

## Zer da domain mapping?

Izenak iradokitzen duen bezala, domain mapping Ultimate Multisite-k eskaintzen duen gaitasuna da domeinu pertsonalizatu baterako eskaera bat jasotzeko eta eskaera hori sareko dagokion gunera mapatzeko, domeinu jakin hori erantsita duena.

### Nola konfiguratu domain mapping zure Ultimate Multisite Sarean

Domain mapping-ek zure aldetik konfigurazio pixka bat behar du funtzionatzeko. Zorionez, Ultimate Multisite-k lan zaila automatizatzen du zuretzat, eskakizunak erraz bete ditzazun.

Ultimate Multisite instalazioan zehar, morroiak automatikoki kopiatuko eta instalatuko du **sunrise.php** izendatutako karpetan. **Morroiak ez dizu aurrera egiten utziko urrats hau osatu arte**.

<!-- Pantaila-argazkia ez dago erabilgarri: Ultimate Multisite instalazio-morroia sunrise.php urratsarekin -->

Horrek esan nahi du Ultimate Multisite instalazio-morroiak zure sarea konfiguratzen amaitu ondoren, berehala has zaitezkeela domeinu pertsonalizatua mapatzen.

Kontuan izan Ultimate Multisite-n domain mapping ez dela derrigorrezkoa. WordPress Multisite-ren jatorrizko domain mapping funtzioa edo beste edozein domain mapping soluzio erabiltzeko aukera duzu.

Beste domain mapping soluzioei bidea emateko Ultimate Multisite domain mapping desgaitu behar baduzu, ezaugarri hau desgaitu dezakezu **Ultimate Multisite > Settings > Domain Mapping** atalean.

![Domain Mapping ezarpenen orria admin birbideratzea, mapping mezua eta DNS aukerak erakutsiz](/img/config/domain-mapping-settings.png)

Aukera honen azpian, **Force Admin Redirect** aukera ere ikus dezakezu. Aukera honek kontrolatzeko aukera ematen dizu zure bezeroek beren admin dashboard-era beren domeinu pertsonalizatuan eta azpidomeinuan sartzeko aukera izango duten, edo horietako batean bakarrik.

**Force redirect to mapped domain** hautatzen baduzu, zure bezeroek beren admin dashboard-era beren domeinu pertsonalizatuetan bakarrik sartu ahal izango dute.

**Force redirect to** **network domain** aukerak guztiz kontrakoa egingo du: zure bezeroei beren dashboard-etara beren azpidomeinuan bakarrik sartzea baimenduko zaie, beren domeinu pertsonalizatuetan saioa hasten saiatzen badira ere.

Eta **Allow access to the admin by both mapped domain domain and network domain** aukerak aukera ematen die beren admin dashboard-etara bai azpidomeinuan bai domeinu pertsonalizatuan sartzeko.

![Admin Redirect goitibeherakoa zabalduta, hiru birbideratze-aukerak erakutsiz](/img/config/domain-mapping-redirect-options.png)

Domeinu pertsonalizatu bat mapatzeko bi modu daude. Lehena domeinu-izena zure sareko admin dashboard-etik mapatzea da, super admin gisa, eta bigarrena azpiguneko admin dashboard-aren bidez, account orriaren azpian.

Baina domeinu pertsonalizatua zure sareko azpiguneetako batera mapatzen hasi aurretik, ziurtatu beharko duzu domeinu-izenaren **DNS settings** behar bezala konfiguratuta daudela.

###

### Domeinuaren DNS ezarpenak behar bezala konfiguratuta daudela ziurtatzea

Mapping batek funtzionatzeko, mapatu nahi duzun domeinua zure Sarearen IP helbidera seinalatzen ari dela ziurtatu behar duzu. Kontuan izan Sarearen IP helbidea behar duzula —Ultimate Multisite instalatuta dagoen domeinuaren IP helbidea—, ez mapatu nahi duzun domeinu pertsonalizatuaren IP helbidea. Domeinu jakin baten IP helbidea bilatzeko, adibidez, [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) erabiltzera joatea gomendatzen dugu.

Domeinua behar bezala mapatzeko, **A RECORD** bat gehitu behar duzu zure **DNS** konfigurazioan **IP helbide** horretara seinalatuz. DNS kudeaketa asko aldatzen da domeinu-erregistratzaile batetik bestera, baina horri buruzko tutorial ugari dago online, " _Creating A Record on XXXX_ " bilatzen baduzu, non XXXX zure domeinu-erregistratzailea den (adib.: " _Creating A Record on_ _GoDaddy_ ").

Hau funtzionarazteko arazoak badituzu, **jarri harremanetan zure domeinu-erregistratzailearen laguntzarekin** eta zati honetan lagundu ahal izango dizute.

Zure bezeroei beren domeinuak mapatzen uzteko asmoa baduzu, zati honetako lana beraiek egin beharko dute. Bideratu itzazu beren erregistratzailearen laguntza-sistemara A Record sortu ezin badute.

### Domeinu-izen pertsonalizatua Super Admin gisa mapatzea

Zure sarean super admin gisa saioa hasita zaudenean, erraz gehitu eta kudea ditzakezu domeinu-izen pertsonalizatuak **Ultimate Multisite > Domains** atalera joanda.

![Domains zerrenda-orria Ultimate Multisite-n](/img/admin/domains-list.png)

Orri honen azpian, goiko **Add Domain** botoian klik egin dezakezu, eta horrek leiho modal bat irekiko du. Bertan **custom domain name** ezarri eta bete dezakezu, domeinu-izen pertsonalizatua aplikatu nahi diozun **azpigunea** aukeratu, eta **primary domain** izen gisa ezarri nahi duzun ala ez erabaki dezakezu (kontuan izan **domeinu-izen anitz azpigune bakar batera** mapa ditzakezula).

![Add Domain modala domeinu-izenarekin, gune-hautatzailearekin eta primary domain txandakatzailearekin](/img/admin/domain-add-modal.png)

Informazio guztia sartu ondoren, behealdeko **Add Existing Domain** botoian klik egin dezakezu.

Honek domeinu pertsonalizatuaren DNS informazioa egiaztatzeko eta eskuratzeko prozesua hasiko du. Orriaren behealdean erregistro bat ere ikusiko duzu, martxan dagoen prozesuari jarraipena egin diezaiokezun. Prozesu honek minutu batzuk behar izan ditzake osatzeko.

Ultimate Multisite v2.13.0-k barneko domeinu-erregistroa ere automatikoki sortzen du gune berri bat gune bakoitzeko domeinu gisa tratatu behar den ostalari batean sortzen denean. Ostalaria sarearen domeinu nagusia bada, edo **Gunearen URLa** eremu batean konfiguratuta dauden ordainketa-inprimaki partekatuen oinarrizko domeinuetako bat bada, automatikoki mapatutako domeinu-erregistroa saltatu egiten da, partekatutako oinarrizko domeinu hori erabiltzen duen gune guztientzat erabilgarri gera dadin.

Bezero batek Domain Seller v1.3.0 edo berriago baten bidez domeinu berri bat erregistratzen duenean, Ultimate Multisite-k automatikoki mapatzen du erregistratutako domeinua bezeroaren sareko gunera lehenespenez. Administratzaileek ez dute jada mapatutako domeinu-erregistro bereizi bat gehitu behar erregistro arrakastatsu baten ondoren, salbu eta domeinu nagusiaren bandera, aktibazio-egoera edo SSL kudeaketa bezalako aukerak doitu nahi badituzte.

**Etapa** edo egoera **DNS egiaztatzen** izatetik **Prest** izatera aldatu beharko litzateke, dena behar bezala konfiguratuta badago.

<!-- Pantaila-argazkia ez dago erabilgarri: Domeinuen zerrendan Checking DNS etapa erakusten duen domeinu-errenkada -->

<!-- Pantaila-argazkia ez dago erabilgarri: Ready etapa egoera-adierazle berdearekin erakusten duen domeinu-errenkada -->

Domeinu-izenaren gainean klik egiten baduzu, haren barruan aukera batzuk ikusi ahal izango dituzu. Ikus ditzagun azkar:

![Domeinuaren xehetasun-orria etapa, gunea, aktiboa, nagusia eta SSL txandakatzaileekin](/img/admin/domain-edit.png)

**Etapa:** Hau da domeinua dagoen etapa. Domeinua lehen aldiz gehitzen duzunean, ziurrenik **DNS egiaztatzen** etapan egongo da. Prozesuak DNS sarrerak egiaztatuko ditu eta zuzenak direla baieztatuko du. Ondoren, domeinua **SSL egiaztatzen** etapan jarriko da. Ultimate Multisite-k domeinuak SSL duen ala ez egiaztatuko du eta zure domeinua **Prest** edo **Prest (SSL gabe)** gisa sailkatuko du.

**Gunea:** Domeinu honekin lotuta dagoen azpidomeinua. Mapatutako domeinuak gune zehatz honen edukia erakutsiko du.

**Aktiboa:** Aukera hau aktibatu edo desaktibatu dezakezu domeinua gaitzeko edo desgaitzeko.

**Domeinu nagusia da?:** Zure bezeroek gune bakoitzerako mapatutako domeinu bat baino gehiago izan ditzakete. Erabili aukera hau gune zehatz honetarako domeinu nagusia den ala ez hautatzeko.

**Segurua da?:** Ultimate Multisite-k domeinuak SSL ziurtagiria duen ala ez egiaztatzen badu ere gaitu aurretik, eskuz hauta dezakezu domeinua SSL ziurtagiriarekin edo gabe kargatzea. Kontuan izan webguneak SSL ziurtagiririk ez badu eta SSL bidez kargatzera behartzen saiatzen bazara, erroreak eman ditzakeela.

### Domeinu-izen pertsonalizatua mapatzea azpiguneko erabiltzaile gisa

Azpiguneko administratzaileek ere domeinu-izen pertsonalizatuak mapa ditzakete beren azpiguneko administrazio-Dashboardetik.

Lehenik, ziurtatu behar duzu aukera hau gaitzen duzula **Domeinu-mapaketa** ezarpenetan. Ikusi beheko pantaila-argazkia.

<!-- Pantaila-argazkia ez dago erabilgarri: Azpiguneko erabiltzaileei Customer DNS Management txandakatzailearen bidez domeinuak mapatzen uzten dieten domeinu-mapaketaren ezarpenak -->

Aukera hau **Plana** mailan edo produktu-aukeretan ere ezarri edo konfiguratu dezakezu hemen: **Ultimate Multisite > Produktuak**.

![Domeinu pertsonalizatuen atala produktua editatzeko orrian](/img/config/product-custom-domains.png)

Aukera horietako edozein gaituta dagoenean eta azpiguneko erabiltzaile bati domeinu-izen pertsonalizatuak mapatzea baimentzen zaionean, azpiguneko erabiltzaileak **Domains** izeneko metabox bat ikusi beharko luke **Account** orrian.

<!-- Pantaila-argazkia ez dago erabilgarri: Domains metaboxa azpiguneko Account orrian Add Domain botoiarekin -->

Erabiltzaileak **Add Domain** botoian klik egin dezake, eta jarraibide batzuk dituen leiho modal bat irekiko da.

<!-- Pantaila-argazkia ez dago erabilgarri: Add Domain modala, azpiguneko erabiltzaileentzako DNS A-record jarraibideak erakutsiz -->

Ondoren, erabiltzaileak **Next Step** sakatu eta domeinu-izen pertsonalizatua gehitzen jarrai dezake. Domeinu nagusia izango den ala ez ere aukera dezake.

<!-- Pantaila-argazkia ez dago erabilgarri: Add Domain inprimakia domeinu-izen pertsonalizatuaren eremuarekin eta domeinu nagusiaren txandakatzailearekin -->

<!-- Pantaila-argazkia ez dago erabilgarri: DNS egiaztapena abiarazten duen Add Domain berrespen-urratsa -->

**Add Domain** sakatzeak domeinu pertsonalizatuaren DNS informazioa egiaztatzeko eta eskuratzeko prozesua hasiko du.

### Domeinuen sinkronizazioari buruz

Domeinuen sinkronizazioa prozesu bat da, non Ultimate Multisite-k domeinu-izen pertsonalizatua zure ostalaritza-kontura gehitzen duen gehigarri-domeinu gisa, **domeinu-mapaketak funtziona dezan**.

Domeinu-sinkronizazioa automatikoki gertatzen da zure ostalaritza-hornitzaileak Ultimate Multisite domeinu-mapaketaren funtzioarekin integrazioa badu. Gaur egun, ostalaritza-hornitzaile hauek dira _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ eta _Cpanel._

Ostalari-hornitzailearen integrazio bat aktibo dagoenean, Ultimate Multisite-k hornitzailearen aldeko DNS edo azpidomeinu-sorreraren zeregina ere ilaran jar dezake sortu berri diren guneetarako. Integraziorik ez badago zeregin hori entzuten, atzeko planoko lana saltatu egiten da no-op ilara-sarrerak saihesteko. Mapatutako domeinuen DNS eta SSL egiaztapenek domeinu-etapen prozesu arruntaren bidez exekutatzen jarraitzen dute.

Integrazio hau Ultimate Multisite ezarpenetan aktibatu beharko duzu, **Integrazioa** fitxan.

![Integrazioak fitxa Ultimate Multisite ezarpenetan, ostalaritza-hornitzaileak erakutsiz](/img/config/integrations-tab.png)

<!-- Pantaila-argazkia ez dago erabilgarri: Ostalaritza-hornitzaileen konfigurazio-estekak Integrazioak ezarpenen fitxan -->

_Kontuan izan zure ostalaritza-hornitzailea goian aipatutako hornitzaile horietako bat ez bada, **domeinu-izena eskuz sinkronizatu edo gehitu beharko duzula** zure ostalaritza-kontuan._
