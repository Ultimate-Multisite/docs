---
title: Ordainketak jasotzea
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ordaintzea (v2) {#getting-paid-v2}

_**OHAR GARRANTZITSUA: artikulu honek Ultimate Multisite 2.x bertsioari egiten dio erreferentzia.**_

Ultimate Multisite-k kidego- eta fakturazio-sistema integratua du. Gure fakturazio-sistemak funtziona dezan, e-commerce-n erabiltzen diren ordainketa-pasabide ohikoenak integratu ditugu. Ultimate Multisite-ren ordainketa-pasabide lehenetsiak _Stripe_ , _PayPal_ , eta Eskuzko ordainketa dira. _WooCommerce_ , _GoCardless_ eta _Payfast_ ere erabil ditzakezu ordainketak jasotzeko, dagozkien add-onak instalatuta.

## Oinarrizko ezarpenak {#basic-settings}

Ordainketa-pasabide horietako edozein konfigura dezakezu Ultimate Multisite-ren ordainketa-ezarpenetan. Hemen aurki dezakezu: **Ultimate Multisite menua > Ezarpenak > Ordainketak.**

![Ultimate Multisite-ko ordainketa-ezarpenen orria, Ordainketak panela erakutsiz](/img/config/payments-settings-page.png)

Zure ordainketa-pasabidea konfiguratu aurretik, begiratu konfigura ditzakezun oinarrizko ordainketa-ezarpenak:

**Behartu berritze automatiko** **a:** Honek ziurtatuko du ordainketa automatikoki errepikatuko dela fakturazio-ziklo bakoitzaren amaieran, erabiltzaileak hautatutako fakturazio-maiztasunaren arabera.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0-k egiaztatzen du pasabide aktiboak berritzeko berrerabil daitekeen kredentzial bat duen, berritze automatikoa gaituta duen kidego errepikakor bat gorde aurretik. Berritze-kredentziala pasabide-harpidetza bat, fakturazio-akordio bat, gordetako vault token bat edo berrerabil daitekeen ordainketa-metodo baliokide bat izan daiteke. Pasabideak erabil daitekeen kredentzialik ez dagoela jakinarazten badu, Ultimate Multisite-k kidegoa gordetzen du, baina berritze automatikoa desaktibatzen du eta falta den kredentzialaren egoera erregistratzen du, administratzaile batek edo laguntza-fluxu batek bezeroari ordainketa berriro baimentzeko eska diezaioten berritze-data baino lehen.

Honek saihesten du kidego bat automatikoki berrituko dela ematea, pasabideak ordainketa bakarrak soilik kobratu ditzakeenean. Pasabide add-on-ek baieztatu beharko lukete checkout errepikakorrek berrerabil daitekeen kredentzial bat gordetzen dutela, bereziki pasabideak bai ordainketa bakarreko kobrantza bai vault/subscription ordainketa-moduak onartzen dituenean.

**Baimendu probaldiak ordainketa-** **metodorik gabe:** Aukera hau gaituta badago, zure bezeroak ez du finantza-informaziorik gehitu beharko erregistro-prozesuan. Hori probaldia amaitzen denean bakarrik eskatuko da.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Bidali faktura ordainketa baieztatzean:** Honek aukera ematen dizu ordainketaren ondoren faktura bidali nahi duzun ala ez erabakitzeko. Kontuan izan erabiltzaileek beren ordainketa-historiarako sarbidea izango dutela beren azpiguneko dashboard-ean. Aukera hau ez zaio aplikatzen Eskuzko pasabideari.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fakturen zenbakitze-eskema:** Hemen, ordainketa-erreferentzia kode bat edo zenbaki sekuentzialen eskema bat hauta dezakezu. Zure fakturetarako ordainketa-erreferentzia kode bat erabiltzea aukeratzen baduzu, ez duzu ezer konfiguratu behar. Zenbaki sekuentzialen eskema bat erabiltzea aukeratzen baduzu, **hurrengo faktura-zenbakia** konfiguratu beharko duzu (zenbaki hau sisteman sortuko den hurrengo fakturaren faktura-zenbaki gisa erabiliko da. Faktura berri bat sortzen den bakoitzean bat gehitzen zaio. Alda eta gorde dezakezu fakturen zenbaki sekuentziala balio zehatz batera berrezartzeko) eta **faktura-zenbakiaren aurrizkia.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Non aurkitu pasabideak: {#where-to-find-the-gateways}

Ordainketa-pasabideak orri berean konfigura ditzakezu ( **Ultimate Multisite > Ezarpenak > Ordainketak**). **ordainketa-pasabide aktiboak** atalaren azpian, hauek ikusiko dituzu: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ eta _Eskuzkoa_.

![Ordainketa-pasabide aktiboen atala, Stripe, Stripe Checkout, PayPal eta Eskuzkoa zerrendatuta](/img/config/payments-active-gateways.png)

Ordainketa-pasabide bakoitzerako artikulu espezifiko bat dugu, konfiguratzeko urratsetan gidatuko zaituena; beheko esteketan aurki dezakezu.

Ordainketa-xehetasunak ikusi eta edita ditzakezu:

![Ordainketa editatzeko interfazea](/img/admin/payment-edit.png)

Hona hemen ordainketa editatzeko orriaren ikuspegi osoa:

![Ordainketa editatzeko interfaze osoa](/img/admin/payment-edit-full.png)

Hona hemen ordainketa-pasabideen ezarpenen ikuspegi osoa ere:

![Ordainketa-pasabideen ezarpenen orri osoa](/img/config/settings-payments-gateways-full.png)

**Stripe pasabidea konfiguratzea**

**PayPal pasabidea konfiguratzea**** **

**Eskuzko ordainketak konfiguratzea**

Orain, _WooCommerce_ , _GoCardless_ edo _Payfast_ zure ordainketa-pasabide gisa erabili nahi badituzu, **haien add-onak instalatu eta konfiguratu** beharko dituzu.

### Nola instalatu WooCommerce add-ona: {#how-to-install-the-woocommerce-add-on}

Ulertzen dugu _Stripe_ eta _PayPal_ ez daudela eskuragarri herrialde batzuetan, eta horrek Ultimate Multisite-ren erabiltzaileek gure plugina modu eraginkorrean erabiltzea mugatzen edo oztopatzen du. Horregatik, _WooCommerce_ integratzeko add-on bat sortu genuen, e-commerce plugin oso ezaguna baita. Mundu osoko garatzaileek add-onak sortu dituzte ordainketa-pasabide desberdinak harekin integratzeko. Horri etekina atera genion Ultimate Multisite-ren fakturazio-sistemarekin erabil ditzakezun ordainketa-pasabideak zabaltzeko.

_**GARRANTZITSUA:** Ultimate Multisite: WooCommerce Integration-ek WooCommerce gutxienez zure gune nagusian aktibatuta egotea eskatzen du._

Lehenik, joan add-onen orrira. Hemen aurki dezakezu: **Ultimate Multisite > Ezarpenak**. **Add-ons** taula ikusi beharko zenuke. Egin klik **Ikusi gure Add-onak** aukeran.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Ikusi gure Add-onak** aukeran klik egin ondoren, add-onen orrira birbideratuko zaituzte. Hemen Ultimate Multisite-ren add-on guztiak aurki ditzakezu. Egin klik **Ultimate Multisite: WooCommerce Integration** add-onean.

![Add-onen orria, Ultimate Multisite-ren add-onak zerrendatuta, WooCommerce Integration barne](/img/addons/addons-page.png)

Leiho bat agertuko da gehigarriaren xehetasunekin. Egin klik **Instalatu orain** botoian.

<!-- Pantaila-argazkia ez dago eskuragarri: Ultimate Multisite WooCommerce Integration gehigarriaren xehetasunen elkarrizketa-koadroa, Instalatu orain botoiarekin -->

Instalazioa amaitu ondoren, pluginen orrira birbideratuko zaituzte. Hemen, egin klik **Sarean aktibatu** aukeran, eta WooCommerce gehigarria zure sarean aktibatuko da.

<!-- Pantaila-argazkia ez dago eskuragarri: Pluginen orria, WooCommerce Integration gehigarriarentzako Sarean aktibatu estekarekin -->

Aktibatu ondoren, oraindik WooCommerce plugina zure webgunean instalatuta eta aktibatuta ez baduzu, oroigarri bat jasoko duzu.

<!-- Pantaila-argazkia ez dago eskuragarri: Administratzaileari WooCommerce plugina instalatu eta aktibatzeko gogorarazten dion administrazio-oharra -->

WooCommerce Integration gehigarriari buruz gehiago irakurtzeko, **egin klik hemen**.

### Nola instalatu GoCardless gehigarria: {#how-to-install-the-gocardless-add-on}

_GoCardless_ gehigarria instalatzeko urratsak _WooCommerce_ gehigarriaren ia berdinak dira. Joan gehigarrien orrira eta hautatu **Ultimate Multisite: GoCardless Gateway** gehigarria.

<!-- Pantaila-argazkia ez dago eskuragarri: Gehigarrien orria, Ultimate Multisite GoCardless Gateway gehigarria nabarmenduta -->

Gehigarriaren leihoa agertuko da. Egin klik **Instalatu orain** botoian.

<!-- Pantaila-argazkia ez dago eskuragarri: Ultimate Multisite GoCardless Gateway gehigarriaren xehetasunen elkarrizketa-koadroa, Instalatu orain botoiarekin -->

Instalazioa amaitu ondoren, pluginen orrira birbideratuko zaituzte. Hemen, egin klik **Sarean aktibatu** aukeran, eta _GoCardless_ gehigarria zure sarean aktibatuko da.

<!-- Pantaila-argazkia ez dago eskuragarri: Pluginen orria, GoCardless Gateway gehigarriarentzako Sarean aktibatu estekarekin -->

_GoCardless_ gateway-arekin nola hasi ikasteko, **irakurri artikulu hau**.

### Nola instalatu Payfast gehigarria: {#how-to-install-the-payfast-add-on}

Joan gehigarrien orrira eta hautatu **Ultimate Multisite: Payfast Gateway** gehigarria.

<!-- Pantaila-argazkia ez dago eskuragarri: Gehigarrien orria, Ultimate Multisite Payfast Gateway gehigarria nabarmenduta -->

Gehigarriaren leihoa agertuko da. Egin klik **Instalatu orain.**

<!-- Pantaila-argazkia ez dago eskuragarri: Ultimate Multisite Payfast Gateway gehigarriaren xehetasunen elkarrizketa-koadroa, Instalatu orain botoiarekin -->

Instalazioa amaitu ondoren, pluginen orrira birbideratuko zaituzte. Hemen, egin klik **Sarean aktibatu** aukeran, eta _Payfast_ gehigarria zure sarean aktibatuko da.

<!-- Pantaila-argazkia ez dago eskuragarri: Pluginen orria, Payfast Gateway gehigarriarentzako Sarean aktibatu estekarekin -->
