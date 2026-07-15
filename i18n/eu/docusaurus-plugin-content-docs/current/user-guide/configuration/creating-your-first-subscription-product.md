---
title: Zerbitzazio produktuaren lehenak sortzea
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Itzurearen Lehen Abonazio Produkzioa (v2)

_**IMPORTANTE NOTA: Hau artikulu Ultimate Multisite 2.x bertsio erabiltzaileak dira. Bertsio 1.x erabiltzen ari zete,**_ **_hau artikuluari jartu_**.

Lan-partiaren aurkitzea eta potensial erabiltzaileei irudiak saldzea hasten duela, abonazio opsio askore baduzu behar da. Nola sortzen dira hauek? Zer beste produkzioak aipatzea posible da? Hau artikuluan produktu ezagutzeko behar dituzun guztia adierazpen nahi izango dugu.

## Produkzio Tipoa {#product-type}

Ultimate Multisite-arekin, klienten artean produktuak bi kategorian aipote ditu: **planak** eta **add-ons (Order Bump)**. Add-ons hauek bi tipu nahi du: **packages** eta **services**. Horren erkehiak eta espezialitateak ondoreko artikuluetan ikusten dugu.

  * **Planak**: Ultimate Multisite-aren espezial produkzioa da. Klientela plan bat hartzen dutenean, planare lotuta jakinarazteko da. Planak klientenari ziurtatzen du bat edo gehiago webguneak (planaren konfiguratura ezarritzen duen) eta produktu editzapen zeisten limitazioak ematen du.

  * **Packages**: Ultimate Multisite planaren funtzioak eragiten add-ons hauek dira. Horrek limitazioak aldatzen ditu edo klientenarekin bilatu planaren beste batzuk (plugins edo themes) jodezko ematen du. Adibidez, plan bat lekuan 1.000 bisita zuzena jakinarazte dezake eta package bat emateko gabe da, hori 10.000 lazen lekuan aukeratu ditzareke.

  * **Services**: Ultimate Multisite-aren funtzioak aldatzen ez duten add-ons hauek dira. Horrek planaren besteko eta klientela bereko espezialitateak dira. Adibidez, kliente bat plan bat hartuta salditu dezake eta beste service bat ere labaz, hori webgunearen diseinua egin dezake.

## Produkzio Barkapen (Managing Products) {#managing-products}

Adiou, oso gure...

Bestea ir **Products** tab-ek Ultimate Multisitean (Ultimate Multisite > Products) da planak inbidari du tradizioaren hostearen mugikorren.

Ultimate Multisitean Product tab-ek produktu edo serbisazio bat spesifikeko konstruktua eta limitazioak definitzen da. Hau hauek produktua edo serbisazio deskribapena, prezioa, nagoak eta permietua berekin eskaintzen dira.

Hau zehaztasunari lehen bidea izango da Ultimate Multisitean esentziazu behar duen importante zuri-zuri.

![Products list page](/img/config/products-list.png)

## Produkzioak jartzea (Adding Products) {#adding-products}

Plan bat, package bat edo serbizio bat produktu berri bat definitzeko lehen bidea da **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfaz-ek zuri-zuri bi zehaztasunari konponmentu egiten du. Ekinpearen parte batean, produktuaren definitzeko laguntzen duten tab bat da, eta beste partean, produktuaren base prezioa, aktibo eragiketako jartesa eta produktuaren imagena definitzeko zehaztasunak ezberdinetan dago.

![Product edit page overview](/img/config/product-edit-full.png)

### Deskribapena (Description) {#description}

Base produktu informazioak produktuaren emate eta deskribapen bat emanez definitzen da. Hau identifikadore hauek produktua informazioa behar duen jakin artean eragiten dira, gure plan eta prezioa aukeratzeko lekuetan, fakturak, upgrade-ek eta beste batzuk.

![Product description section](/img/config/product-description.png)

### Preziorako Uri (Pricing Type) {#pricing-type}

Interfazaren baitarpeko partean, base prezioa definitzen da.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisiteak preziorako uri bat ezberdinetan eskaintzen du. **paid** opsioak network administratorari produktuaren prezio eta fakturaren iraupenerako informazioa galdetzen dio.

### Prezio (Pricing) {#pricing}

Prezioa eragila componentu hori base produktuaren prezioa eta faktura egindako iraupena definitzen da.

![Pricing and save section](/img/config/product-pricing-save.png)

horrek, batezko prezioa $29.99 eta 1 luna konponduan hartzen duen konfiguratzean, lekuan $29.99 ezarri egiten da lekuan. Berria, $89.97 eta 3 bulan konponduan hartzen duenaren artean, hori guztiz karteratu egiten da lekuan.

### Billing Cycles (Konponduak) {#billing-cycles}

Billing Cycles (Konponduak) arlinguen konponduak zehazten du horrek aipoko konponduaren irrenditua eta gaur egun kontratu edo erreguntzak duen adierazpena ezagutzen da.

![Pricing and save section](/img/config/product-pricing-save.png)

Adibidez, $29.99 prezioan eta 1 luna konponduaren irrenditua eta 12 billing cycle (konponduak) duen produkto bat, hori produktua berri 12 alkartean lekuan $29.99 ezarri egiten da lekuan. Beste hain zuzen ere, erreguntzak $29.99 lekuan 12 alkartean fijo prezioa ematen du eta ondoren karteratu egiten denean.

### Trial Period (Probatura Aldia) {#trial-period}

Offer trial toggle (probatura aldia) aktiboa emateak administradore network-ari produktua erreguntzeko probatura alde bat zehazteko lehenen.

![Pricing and save section](/img/config/product-pricing-save.png)

Probatura aldiaren aurrera, klientak produktoaren erabilera libre izango dira eta probatura aldia amaitaildu ondoren karteratu ez da.

### Setup Fee (Konponbidea Lehenen) {#setup-fee}

Lehenen planan konponbidea lehenen aplikatu dezake.

![Pricing and save section](/img/config/product-pricing-save.png)

Hau da, klientak bere prezio planaren bestalde ezarri egiten duen konponbidea erantzuten du lehen karteratzean (prezio planaren beste alde).

### Active (Aktiboa) {#active}

Active toggle (aktibo aldia) ezinbesteko eskeritzeko produkto bat berri kontratuetan klientakengana aurkituta dagoela edo ez dagoela zehazteko eragiketa ematen du.

![Active toggle](/img/config/product-active.png)

Ez dago, non dago jakin behar duzu:

Honek planaren konfiguratzean toggle-a deshabilitatuta jartzea eragiketa da, eta horrek planaren deshabilitazioa eskatzen du, zehatzera iraupizun zuk ez du. **Planaren beste klanak jarraitu dira peletzeko** erabilera, zehatzera, leku berri bat edo planaren batzuk aldatuta jartira edo planari gabe izatean hurbiltzen dela.

### Imajenaren Produkzioa {#product-image}

**Upload Image** (Imajenarekin jarri) botoia administrazio-gikoki ematen du irudiak liburuan erabiliz eta produkzio imazkin aukeratu edo jarri dezake.

![Product image section](/img/config/product-image.png)

### Erabatzea {#delete}

**Delete Product** (Produktu Erabatzea) botoia produkzioa sistema gabein erabatzen du. Produkzioa publiko egin ondoren erabil da.

![Delete product section](/img/config/product-delete.png)

Beste erabatzeak ondorioz, produkzioa ez dago "trash" (erabatza) eta ez da. Hau da, erabatatu ondoren akzioa iraupizuna ez da.

### Produkzio Opzioak {#product-options}

Base-level produkzio informazioa definitu ondoren, **Product Options** (Produzio Opzioak) aukak administrazio-gikoki laguntzen du produkzioaren zehatzak atributuak lehiak definitzeko.

#### Generalia {#general}

**General** (Generalia) tab-a produkzioaren generaliak definatzen du eta horiek beste produkzio-spediko tab bat ez duten erabilera da.

![General tab](/img/config/product-general-tab.png)

Produzioa identifikatu duen **product slug** (produkzio slug-a) irudiak eta Ultimate Multisitearen beste lekuetan slugarekin identifikatzen den sluga definatzen du.

Ultimate Multisite produkzioen artean Plan, Package eta Service gisa batzuk eskaintzen du. **Product Options** tab-ek produkzioaren bidez zehatzatu dituen espezifikazioari denez dinamikoki aukeratu dira.

**Customer Role** (Rolare Customerra) iraupizunaa espezifikatzen du horrek sitea sortu den bitartean customerra ematen duen rolaren. Okeran, gure administrazio-gikoketara, Ultimate Multisite default edo Administrator izango da. Ultimate Multisite default roleak **Ultimate Multisite > Settings > Login & Registration** (Ultimate Multisite > Aitzakia > Erregistro eta Logi-a) aipatzen da.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Uparretxpenak eta Behera (Up & Downgrades) {#up--downgrades}

Hau tab-a iragatu egiten du customer bat bere maila (tier) arloaren belerri guztietan aurkitzen dituen ustezpen eta behera (upgrade and downgrade) bideak.

Hau konseptua begiratu nahi duzu, adibidez, Ultimate Multisite instalazio bat oso espezialista (niche) izan daiteke eta bere customer-ekari irudi management soluzioak ematen duen. Hau treski hau (Basic, Plus, eta Premium) definizio dira eta lehen partean (horrek arau plugin-ek aktibatu dezakeko instruktioak bitartean) lehen parte bakoitzarekin plugin-ek aktibatu dira.

Ultimate Multisite instalazioa biznearen webguneak edo eCommerce webguneak ere serbizio egiten duen iragatik, hauek mailak instalatutako eta aktibatu dituen plugin-ezinbeharrak ondo saldunea behar izan dezatat.

Hau erabiliz, eLearning customer-ek eCommerce plan-ek joan dira ez da desiragarri eta problemaa izan daiteke, karena hauek, prezioak eta limitazioak ez duenez, inguruko ez duzun.

Ondorekin, customer-en bidearen murrizketa eta eskabideak prevenitzera, administralari (network administrator) plan group bat definizatu dezake eta hori grupuan belerri mailak zehazteko lehiak.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Plan group bat definitzeko, **plan group** listan aurkitu maitasuneko mailak zehaztezu. **Product order** da, plan-ek nola sortu eta iragatu dira, lehenarenetik hautatuz.

Ultimate Multisite-ek **order bump** funtzioa ere hartzen du, non espezialista produkzio eta serbisioen erabilera mailak zehazteko lehiak aukeratu daiteke. Hau customer-ek iragatik beste elementuak gisa ematen dira, zehaztea checkoutan edo upgradean plan-eken beste elementuak gehiago ezartzeko.

#### Prezioaren Erabiltzaileak (Price Variations) {#price-variations}

Price variationak ez dule network administratorari erabil daurera honearen arabera beste prezioaiko lehenengoak (tiers) ezaratu. Hauko konfiguratzea gabe, product berri bat bere prezioarekin teklatzea posible da. Adibidez, $29.99/langileprezioan produktua ezaratu eta urteko opsioa $249.99-le eskaintzea.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Prezioaiko lehenengoak ezaratzeko, **Enable Price Variations** (Prezioaiko lehenengoak aktiboa) toggle-a aktibo egin eta **Add new Price Variation** (Beste prezioaiko lehenengia gehitu) botoia klikatu.

![Product price variations](/img/config/product-price-variations.png)

Lehenengo bat gehitzeko, lehenengoaren durtzen jakinai, periodoa eta prezioa ezaratu behar duzu. Beste lehenengiak gehiago botoia berri klikiztenin gehitu dezakezu.

Adibidez, base produktua prezioa $29.99/langileprezioa dela, hauek gehitu dezakezu:

  * **3 Langileprezio** $79.99-le (langileprezioaren gehiago txiki eskaintza)
  * **1 Urte** $249.99-le (urteko betetzeko handi eskaintza)

:::tip Frontend-ean Billing Period Togglea eragitzeko

Prezioaiko lehenengoak sajaina frontend checkout-an toggle edo switch bat ez du. Klientzak billing period hauek (adibidez, Langileprezio / Urteko) artean jarraitzea, checkout formaren parte batean **Period Selection** (Periodoa irudi) field bat gehitu behar duzu. Oinarriko instruktioak "Checkout Forms: Adding a Period Selection Toggle"-an eratu.
:::

#### Taxak {#taxes}

**Taxes** (Taxak) tab-a Ultimate Multisite > Settings > Taxes-ean ezarritutako tax konfiguratueri eta, garrantzitsuen, definitutako tax rate-ekarekin jotasun du. Taxak aktiboa eta aplikatibo tax rate-ek ezaratzeko dokumentazioa "Ultimate Multisite: Settings"-an eratu.

![Taxes tab](/img/config/product-taxes.png)

Ez dago irudiak:

Naharrak, Ultimate Multisite > Settings > Manage Tax Rates-ean tax rate lokal bat 7.25% definizioa egin dugu, eta hori California (United States of America) sortzen dituzten kliunturirekin aplikatzen da.

Tax ratea **Ultimate Multisite > Settings > Manage Tax Rates**-an definitu gtainaren ondoren, produktu maila ere irudi ez daitezkeen.

![Taxes tab](/img/config/product-taxes.png)

Produktua taxable (taxa sortzen dituen) bat dela erakusteko, **Is Taxable** toggle-a aktibo egin eta Tax Category dropdown-etik aplikatiboa tax ratea irudi ez daitezkeen.

#### Site Templates {#site-templates}

Espeziatik, site templates hauek WordPress webgune guztiek dira, eta horiek kliunturren sitean abonazioaren lehenarenan klona dira.

![Site Templates tab](/img/config/product-site-templates.png)

Network administratorra template sitea normal WordPress site bat gisa sortu eta konfiguratzen da, tema, pluginak eta kontentua aktibo eta konfiguratatu dituzten. Template sitea kliunturirekin pertsona erantzun baten klona da.

Hau tab-ek network administratorari irudi ez daitezkeen template hauek berezko abonazio berriaren bitartean zehazteko emateke du. Plan hau erabiltzeko, **Allow Site Templates** toggle-a aktibo egiteko beharrezkoa da.

**Allow Site Templates** deshabilitatuta dagoenean, planaren kliunturak template hauek ere ez dute auker dezake, baino ere checkout form bat, linka irudi edo URL parameter bat erabiliz ere template hauek erabilera emateko konditionazioa izan gabe. Ultimate Multisite-ek orduan, erabilera emateko aukera dituzten entrada punturik arteko fallback chain batekin hori limitazioa apmentzen du: planaren konfiguratura bat da lehenagatik ikustea, gaur ondoren checkout form template konfigurazioak, eta gaur ondoren pre-selektatutako edo URL-ek emateko template hauek. Horrek planaren limitazioak ondo egonbatzen du eta ez duten produktuetan template hauek erabilera emateko ez dagoela ikusten ez daitezkeen.

**site template selection mode**-ek abonazio prosesaren bitartean site templates hauek berezko ereduak zehazten du.

Ezau **D** **default** (defaulta) aukera handiaren formularen irraldirpen seguito da ezarri da. Hau, irralditzaileak checkout prosesuaren template selekzio urteraurtu edo etapua definizatu dut eta hori template-ekin definidatuta dago, hau aukera hauek checkout etapuan eskuratu diren direktaibideak onartuko da.

**A** **Assign Site Template** (Site Template asignatu) ezarritzea espezifikatu templatearen selekzioa zorroatzen du. Horrek, checkout prosesuaren template-selektazio etap hauek eliminatzen dira.

Eskutza, **C** **Choose Available Site Templates** (Datu templateak aukeratu) checkout etapuan espezifikatu templateak aurreikusten ditu hau aukera handiaren templateak aukeratutako templateekin onartuko da. Kontsumitorari selekzioa laguntzeko aukera bat ere definidatuta dago.

Ezau, irralditzaileak checkout etap hauek template-selektazioa egin dezatatuz itxarri nahi du, ' _default_ ' aukera handiaren configurazioa onartuko da. Alternatiboz, template-selektazioa eliminatzeko eta planaren aukerak bizitzari pasatzen duen selekzioa delegatzeko, ' _assign new template_ ' edo ' _choose available site templates_ ' aukereak garrantzitsuak izan daitezke.

#### Sites (Siteak) {#sites}

**Sites** tab-a Ultimate Multisite-ren irralditzearen funtzioaren parte bat da.

![Sites tab](/img/config/product-sites.png)

Hau aukera handiaren betetzeko, kontsumitorari bere membentziarean ezrulearen maximum kopurua siteak espezifikatzen du.

Irralditzea aktiboa egiteko, **limit sites** (site limitak) togglea aktibo eta **site allowance** (site aukera) lekuan maksimum site kopurua espezifikatu behar da.

#### Visits (Bizitzak) {#visits}

**Visits** tab-a Ultimate Multisite-ren irralditzearen sistemaaren lehen parte bat da. Hau aukera handiaren kontsumitorari bere site-ra unikailak bizitzak kontuatzeko eta ondorioz, horiek limitatzea (throttling) ematen du.

![Visits tab](/img/config/product-visits.png)

Marketing perspektibaren, administraulak le hau konfiguratazioa erabiltzeko modua da, eta horrek irizpiak erregiariak plan bat upgrade egin dezaten iradokizun batez. Horrek network administratorari ere sistema resourgia artean mantentzeko, siti-ek garrantzitsuak aukera ezberdinetan iritsiaintzen edo prevenitzen laguntzen du.

Hau funtazioa erabilira, **limit unique visits** toggia aktibo estadoan ipotzatzen eta **unique visits quota** lekuan unikailariak maximumko kopurua aipatzea da.

Hau limitaren aurre eginduta, Ultimate Multisite-ak iradokizun bat emateaintzain ez du, baina limitak gehiago izan ditelako informazioa erakusten du.

#### Users (Erabiltzaileak) {#users}

Ultimate Multisite-aren 'Users' limitazioak network administratorari lekuak sortzeko eta pertsonalak asignatzeko aukera duen erabiltzaileko kopurriak limitatzea gautela.

![Users tab](/img/config/product-users.png)

Limitazio funtazioa aktiboa egiteko, **limit user** toggia hakutuz aurrera ipotzatzen eta hakutzeko.

Arrako, limitatzea eskatzen duen lekuari, aipoteak ondoan dagoen toggle-a aktibo estadoan ipotzatze eta aukera duen maximumko üstoa aipatzea da.

#### Post Types (Post Uriak) {#post-types}

**Post Types** tab-ek network administratorari WordPress-eko post uriak eragina limitatzea leku du.

![Post Types tab](/img/config/product-post-types.png)

WordPress-en konstruktazioa honegatik, posts eta post uriak bere funtzionalitatearen garrantzitsu parte bat da, eta horrek Ultimate Multisite-aren limitazio sistema designatu da network administratorari limitak ezarritan eta mantentzen lagutzeko.

Hau limitazio subsistema aktiboa egiteko, **limit post types** toggia hakutuz aurrera ipotzatzen eta hakutzeko.

Hurre, le post type bat limitatzen du, hori ondoan jarri behar da, aurrera puxikizten eta aukera duen maksimuma hautatu behar da.

#### Disk Space (Espazio diskoaren) {#disk-space}

**Disk Space** tab-ek administurak network-eko jarduergileei irudiak erabiliko espazioa batzuk limitatzea posible da.

![Disk Space tab](/img/config/product-disk-space.png)

Normalan, WordPress multisite batean core file-ak guztietan saltzen dira eta media file-ek eta upload-ezpenak dira, horiek dira hauek eta limitazioak erabiliko direla.

Diskoaren erabilera limitatzea aktiboa egiteko, **limit disk size per site** toggle-a aurrera puxikizten eta aktibo egindako bidea emanez.

Horren ondoren, megabyte-ekaz maksimuma üstia hautatu behar da **disk space allowance** lekuan.

#### Custom Domain (Domaine osoa) {#custom-domain}

Hau opsioa ondoan jarri hokizten du, hori plan batean ezarritako custom domainak aukera egin dezake.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes (Tema) {#themes}

Produktuen opsioetan dagoen **Themes** tab-ek administurari ematen dio network-eko jarduergilei customer-ek aukeratzeko tema batzuk erabilera emate eta, opzioa du, tema batzuen eragiketa bidez fordatzea.

![Themes tab](/img/config/product-themes.png)

_**Nota: Customer-ek tema batzuk erabilera ematuko da network-eko jarduergilearen ondorioz.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Visibility** opsioak, hori customer-ek bere sitean **Appearance > Themes** tab-a ikusten duen bitartean tema bat zenbait edo ez dagoela definitzen du. Horrek **Hidden** (Gizatuta) lekuan emateak tema bat ikuspenetik erkatzen du eta horrek aukera egin eta aktiboa egitearen hobetzea murriztatzen du.

![Themes tab](/img/config/product-themes.png)

**Behavior** selekzioak, network-eko jarduergileari ematen dio customer-ek bere sitea sortzen bitartean tema bat zenbait edo ez dagoela definitzeko aukera.

Ez dagoen testuingilean (A Available) tema hori erabiltzaileari bereziki aktibatzeko aukera ematen da. Kontstuari (Not Available) testuingilearen eskatzen dio, eta **Force Activate** opsioak tema hori aldatzen du eta site-a sortzeko defaulta daidetu du.

#### Plugins {#plugins}

Ultimate Multisite-an Themes tab-aren besteak beste, administralari (network administrator) eskatzen dio plugin-ek erabilera edo modu jakin batzuk erabiltzeko kontstuari, eta leku berri site bat sortzen duenean modu jakin batzuk.

![Plugins tab](/img/config/product-plugins.png)

**Visibility** menukoa (drop-down) eskatzen dio plugin-ek erabilera edo horretatik gizatuta jakin batzuk izango dira kontstuari, eta sitean plugin-menuaren opsioa bidez ikusten denean.

Administralariak plugin-ek moduan da modu jartzeko **behavior** menukoa (drop-down) arloak erabiliz plugin-ek berriren moduarekin manipulatzea ereiteke.

![Plugins tab](/img/config/product-plugins.png)

**Default** aukera eskatzen dio kontstuari aleatu duen site template-an jakin batzuk plugin-ek estadoa (modu). Hau da, templatearen beldurak aktibatuak plugin-ek site kontstuarekin klonatuenean ere aktibatuak geratzen dira.

**Force Activate** aukera eskatzen dio plugin-ek aktibo modu sortzeko, eta **Force Inactivate** aukera eskatzen dio plugin-ek inaktibo modu sortzeko. Horren guztia bereziki kontstuari WordPress Plugins menukoa bidez aldatu dezatatuz.

Ez dago **Force Activate & Lock** (Fuerza Aktivitate eta Bloqueo) aukera handia, baina ez du eskatzen pluginaren eragilaia aldatu dezaten. Hau da, Force Activate eta Lock aukera bat pluginaren aktibo eragila gaindituz eta erabiltzaileari deaktibatu dezatatut ezten du. Berria, **Force Inactivate & Lock** (Fuerza Deaktivitate eta Bloqueo) aukera handia da, den pluginaren deaktibo eragila gaindituz eta erabiltzailei aktibatu dezatatut ezten du.

Administratora-network-ek Force Activate & Lock eta Force Inactivate & Lock aukerak site template-ekin berain ikusitzea garrantzitsua izan daiteke, pluginak eta template-nko plugin eragilaia hauek aukeratzen direla eragiten dezaten.

#### Reset Limitazioak {#reset-limitations}

**Reset Limitations** (Limitazioak Urratsa) tab-a produktuan definitutako guztietako custom limitazioak berri egiten du. Limitazioak berri egiteko, **reset limitations** (limitazioak berri egiteko) botoia klikatu behar duzu.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Aksionaren bidez konfirmatzeko, hakemailearen **confirm reset** (berri egitea konfirmatu) toggle-a kanan partean aktibo eragila jarri eta **reset limitations** (limitazioak berri egiteko) botoia klikatu behar duzu.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Produktu Editatzea, Duplikatzea edo Erabatzea {#edit-duplicate-or-delete-product}

Produktuak editatuta, duplikatuta edo erabatuta daiteke **Ultimate Multisite > Products** (Ultimate Multisite > Produktuak)-era aurkituz eta dagoen produktua nazioa jarri behar duzu.

![Product hover actions](/img/config/product-hover-actions.png)
