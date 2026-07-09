---
title: Itentzakoa
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**NOTIZIA: Ez artikulu Ultimate Multisite bertsio 2.x-era referentzia egiten du. Bertsio 1.x erabiltzen ari zete,**_ **horri artikuluak egiaitu.**_

Ultimate Multisite eredu txikia network bat emateko objetivoa da, gure kliante-ek website hauek sortzen duen prozesu guztiak posiblean automatikatu eta bere irteesan eta aukerak emate. Horrek erabiliziek ezaugarri bildu behar den aurrera egiteko bat eraginkora da Ultimate Multisite Site Templates funtzionalitatea erabiltzea.

## Zer da Site Template? {#what-is-a-site-template}

Euskal izenaren ondorioz, Site Template hau da boilerplate website bat, zein irudiak network-ek new websites sortzen duen base gisa erabilira da.

Hau hasterako esan nahi du: base website bat ezartu, plugin bereziak aktibatu, tema bat aktibatu eta jakinarazten edo zerbait aldatzeko. Horrek ondoren, kliante bat new account sortzen duenean, ezberdina content ez duten default WordPress websitea ez aurkituko dute; baita base website-aren kopia bat aurkituko dute, guztizko aldatuetan eta kontentuak irakurri eta gehiago daude.

Horrek amaigindunak da, baina new site template batean nola sortzen dut? Ez dago eredu txiki dena.

## New Site Template sortzea eta aldatzea {#creating-and-editing-a-new-site-template}

Site Templates hauek network-ek normal websites bat dira. New template bat sortzeko, simplementi **Network Admin > Ultimate Multisite > Sites > Add Site** funtziokoan jarraitu.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Hau irudiak emateko modal window batekin aukeratu da, zein **Site title (Titulua), Site Domain/path (Domainia/bidea) eta Site type (Site tipoa)** gertu behar du. **Site Type** lehen menuko lapurtuaren ondorioz, **Site Template**-a irudi ezartu behar duzu *.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Erekariak emateko kontentua eratu eta template batean zerbait hasterako deskribapena ematea ere ezaritu dezakezu:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Formaren apurte, ikuzteko **Copy Site** (Site kopioatu) lehen dezakekin. Horrek funtsezkoa da, beste site template bat basan lehen puntagarri gisa erabiltzen duzun erregi eta ez dago guztiz irudi bat laguntzeko, horrela testierak egindako itzultzea onartuko dugu.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Templatearen kontuintazioa {#customizing-the-contents-of-a-site-template}

Site template bat erregi nahi duzu? Berria sitiatu, testierak (posts), lapenak (pages) ezartu, pluginak aktibatu edo tema (theme) aldatu dezakezu. Bestatik, Customizerra joan eta guztiz aukera hauek aldatu dezakezu.

![Site template edit interface](/img/config/site-template-edit.png)

Horren datuak kopiatzen dira, erabiltzaile bat Site Template hori basan berria site bat erregitu duenean.

### Opciones advancedak (Advanced Options) {#advanced-options}

Ez jakin dugu kodifikazio batzuk? Horrek gure Search and Replace API-a erabiliziek, berria sitiatuaren datuak automatikoki aldatzeko aukera dut. Horren aldeko, "About" laperean inperazioa aldatzea edo Contact laperean emaila aldatzea bezala da, oso lana egiten du.

### Site Templateak erabiliziek (Using Site Templates) {#using-site-templates}

Ok, asko site template batzuk ezartu duzu, diseinazio eta tema (themes) onditu berekin. Orain, horiek network-an zer egin dezakezu?

Ezin daiteko, orain bi aukera dut:

  * Un Site Template bat zehatz Plan guztietan (Plans) ezartzea.

**OR**

  * Klientzak berria erregitu den bitartean site templateak berehala aukeratu dezaten.

#### Modu 1: Site Template ezartzea {#mode-1-assign-site-template}

Hau moduaren, clientak ez duzun leku template bat ematen dutenean, baina siz handiagoen Plan baten artean zehaztu behar duzu zerbait template bat erabiltzea.

Horren bitartean, **Ultimate Multisite > Products > Edit** funtziara joan behar duzu.

![Edit product to assign site template](/img/config/product-site-templates.png)

Hau daite duzu **Edit Product** lapera. **Product Options** (Produktako Opsioak) zehaztasunaren ondorioz, **Site template** (Template webuaren) tab-a aurkitu eta lehen menuko lapera (drop-down field) batetik **Assign Site Template** (Site template ematzea) opszioa desebutatu. Horrek site template hauek disponibleak listan jarri du eta produktu bati dedikazioa duen template bat ere usteleko bilatzen duzu.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modu 2: Site Template Bat Erabatu {#mode-2-choose-available-site-template}

Hau moduaren ondorioz, clientak kontu laitzen duen prozesuan erabaki bat ematen duzu. Produktu zehaztasunetan (product settings) zehaztu duzun template hauek batetik erabil dezatat. Irabazten dituzke produktu zehatzat erabiliko template-ak ezarritzea. Horrek, produktu bati template-ak garrantzitsuak eta funtzioak onartzeko, espezialitateko batekin erabiltzea ideal da.

Produktua **Edit Product** (Produktu Editatuaren) lapianan. **Product Options** (Produktu Opzioak) seksioan, **Site template** (Web-platentia) tab-a aurkitu eta drop-down lekuan **Choose Available Site Template** (Datu Eguna Site Platentia Hobitzeko) opszioa desebutatu. Horrek site platentia guztietaren listak erabilizko da eta benetan erabiltzen nahi duzu site platentian aipatzea posible izango da. Horrek egin dezakezu hori bere **Behavior** (Eskupazioa): **Available** (Aipatuta) diren, site platentia listan sartu nahi duzu; **Not Available** (Ez Aipatuta) diren, site platentia opszio gisa ez erakusten nahi duzu; eta **Pre-selected** (Aur Pre-selekto) diren, listatu site platentia bat defaulta aukeratu jakin nahi duzu.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on the Checkout form (Checkout formularioan site platentia aukera) {#default-mode-site-template-selection-on-the-checkout-form}

Gaur egun, registration (registratzeko prozesuaren) guztietako site platentiak aipatuta jakin nahi duzu, edo produktu guztietan site platentia emateko edo espezifikatzeko ez dutela ez duzu. Horrek egin dezakezu **Checkout Form** (Checkout Formua) lekuan site platentia aukera egitea. Horrek egin dezakezu **Ultimate Multisite > Checkout Forms** (Ultimate Multisite > Checkout Formak) lailana joan eta konfiguratzea nahi duzu formularioaren ondoreko **Edit** (Editatu) klikuatu.

Horrek **Edit Checkout Form** (Checkout Formua Editatu) lapia aurkituko da. **Template Selection** (Platentia Aukera) lekuan aukera egitea eta horretan **Edit** (Editatu) klikuatu.

Modal buketa bat erakusten da. **Template Sites** (Platentia Lehean) lekuan, registration (registratzeko prozesuaren) guztietako site platentiak aipatuta jakin nahi duzu horiek aukera egitea eta listatzeko. Hieraurean emateko site platentiak erabiltzailek zein produktu ere aukeratu dutelako garrantzitsu ez du.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Frontend (web-frontendan), kliantzak checkout (pagintian txartzea) prozesuaren aurreko site platentia aukera egitea eta bere leku berriarekin diseinu hasiera aipatzea posible izango da.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Saila-modelo (Site Template) Opzioak {#site-template-options}

Ultimate Multisite sailketa funktionen da dago, zein iraupizkoan onartu edo ez onartu dezakezu ditu Ultimate Multisite sailketa eskaintzen diren kontsekuentziaren ondorioz.

![Saila-modelo opzioak Ultimate Multisite sailketa eskaintzen diren kontsekuentziaren konfiguratzean](/img/config/settings-sites-templates-section.png)

#### Sailketa Aldatzeko Onartzea (Allow Template Switching) {#allow-template-switching}

Hau opsioa onartzea, client-ek kontu eta sailketa sortutakoan, inscrepszio prosesoaren aurrean aukeratutako sailketu aldatzeko aukera izango da. Horrek client-en parte batetik garrantzitsu da, koska horrek geroago jakiteko iragatik, jendeak bere aukeraren ez izan zen beste beharrakari eta erabilgarri dela bide onartzea leku ematen du.

#### Erabiltzeko Sailketak Kontu Bilduen Bizitzeko Onartzea (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Subsite kontsenzian jendeak bere sailketa sortzeko eta diseinatzeko ez dute guztiz ezarritzen, baina hori daiteke klona izate eta network-an beste subsite bat sortutakoan Sailketak eskaintzen diren sailketu bat gisa erabilera. Hau opsioak ematen du horrek konponbidearen espezifikazioa ematea.

#### Sailketa Duplikatzean Media Kopiatzea (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Hau opsioa kontzatzea, template sailketan uloratu media-k sortutako sailketa berri sortutako sailketa zuzenean kopiatzen da. Hau lekuen guztietan onartu dezake duzu.

#### **Sailketak Erresortzailurik Indikatzeko Ez Onartzea (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Hau artikuluaren ondorioz ezagututako sailketak boilerplate bat dela, baina network-aren parte da, zeitu indizazioa bilatzen duen irudiari leku dago. Hau opsioak ematen du Sailketak horretatik gizotzeko aukera, gaur egun indizazioa bilatzen duen irudien erresortzailu dezake.

## Sailketak Auto-bildu eta Erresortzailua (auto search-and-replace) Bidez Pre-populating {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite-aren batzaren osoa da irtaileak (registration form) arlingabean testu, kolor eta aukera egin behar diren lekuak gehiago ezarritzea. Horrek datua hartuta gabeuta duenean, denbora eratu dituen web template-en bestelako parteetan kontuentua aurretik emateko irudiari jartzen dugu. Horrek, leku berri web sailkioa publiko egiten diren bitartean, Ultimate Multisite-ak horiek placeholder-ek (lekuak) erabat datuaren eskatutako informazioarekin aldatzen dira.

Adibidez, irtailearen aurretik emateko datuaren bizitza-erlingabearen taldearen naizlearen izen hartu eta automatikoki taldearen izena web sailkaioaren lapurraldean (home page) jarri nahi duzu. Template-en home lapuraldean, lekuak gehiago emate behar duzu, hanesan hainbat irudiari (placeholder-ek doble curly braces edo {{placeholder_name}} arraldia ondoren emate behar dira).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Horren ondorioz, hori datua hartzeko ekuipotarearen (checkout form) irlingabean pareko leku bat gehiago emate dugu. Template aukeratzeko ereditzen dituen berrek ekuipotarearen redaktoraren beste parteetan ezarritu lekuak jarri nahi duzu:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Datuaren taldearen irtailean hori datua hartuko da irlingabean.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite-ak horiek placeholder-ek erabat datuaren taldearen emateko datuarekin automatikoki aldatzen dira.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "placeholder-ek ematuta template" problemetua iradokizuna {#solving-the-template-full-of-placeholders-problem}

Hau guztia ondo da, baina ez du garrantzia problema bat erakusten dugu: denbora ahal egon dituen web template-ek - zehatz lekuak hartzen dituztenak - placeholder-ek oso ezdu eta garrantzi eta ez dio.

Horren irizketa egin dezakezu, placeholder-ek artean falsoak (fake values) emateko opszioa ematen dugu, eta horiek erabiltzen dugu template-etan jakinarazpenak bilatzeko eta hasierako testu hauek erabat egiteko, erabiltzaileak bisitatzen ari den testuetan.

Template placeholder editorra erabiliz piztu behar duzu **Ultimate Multisite > Settings > Sites** luzean, eta ondoren, sidebar-ean, **Edit Placeholders** linkera klik egin behar duzu.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Horrek sizkuntza editorraren artean aurkituko duzu, horretan placeholder-ek eta horiek erabiliko testuak (content) gehituko daiteke.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
