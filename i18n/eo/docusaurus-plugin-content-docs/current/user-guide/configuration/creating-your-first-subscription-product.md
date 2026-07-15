---
title: Krei Mempon Vian Unan Subskriban Produkton
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Kreiere sian Unvenan Abonament Produk (v2)

_**IMPORTANTE NOTA: Ĉi tiu artikolo estas nur por uzantoj de Ultimate Multisite versio 2.x. Se vi uzas version 1.x,**_ **_**vidu ĉi tiun artikolon**_**.

Por komenci fari labori vian reton kaj komenci vendi vian servojn al potencialaj uzantoj, vi bezonas diversajn abonamentajn opciojn. Kiel vi kreis ĉi tiuj produktojn? Kio tipo de produktoj vi povas oferi? En ĉi tiu artikolo ni neniam porfari ĉion, kion vi bezonas scii pri produktoj.

## Tipo de Produkto {#product-type}

Con Ultimate Multisite vi povas oferi du kategoriojn de produktoj al viaj klientoj: **planoj** kaj **add-ons (Order Bump)**. Add-ons povas esti dividita en du tipoj: **paketoj** kaj **servoj**. Ni vidos iliajn diferenco kaj specialajn karakterizojn pli malante.

  * **Planoj** : la fundamenta produkto de Ultimate Multisite. Via klient povas havi membrajon, se ĝi estas alvokita al planon. La plano donas viaj klientojn unu aŭ plurajn sitojn (ĝi dependas de la konfiguracio de via plano) kun la limigoj, kiujn vi stabiĝas sur via produkta edito-paĝo.

  * **Paketoj** : add-ons, kiuj impactas direkte sur la funkciojn de planoj de Ultimate Multisite. Ili ŝanĝas limigojn aŭ aĉetas novajn resursojn, pluginojn aŭ temojn al la originala plano, kiun via klient aĉetis. Ekzemple, bazala plano povus permi 1 000 vizitoj per monato kaj vi povas fari disponabla paketon, kiu plenumi ĉi tiun nuberon ĝis 10 000.

  * **Servoj:** add-ons, kiuj ne ŝanĝas la funkciojn de Ultimate Multisite. Ili estas taskoj, kiujn vi faros por via klient alkompare kun la plano, kiun ili aĉetis. Ekzemple, via klient povus aĉeti planon, kiu permesas unan siton kaj ankaŭ pagui por pliita servon, kiu faros ĉi tiun dizajnon de la sito.

## Administri Produktojn {#managing-products}

Pekado, por multe persone la tab **Products** en Ultimate Multisite **(Ultimate Multisite > Products)** povas esti ekvivalentaj planoj en tradiciaj alojamentoj.

En Ultimate Multisite la tab Products definas la konstruon kaj limitajn kondiĉojn, kiuj aplika al specifita produkto aŭ serva. Tiu konstruo ekstendiĝas al deskribono de produkto aŭ servo, preco, akizoj (taxes) kaj permesoj.

Tiu seksio helbus vin kompreni ĉi tiun esencian fondanton de Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Adojado de Produktoj {#adding-products}

Ĉu tio estas planaro, paketo aŭ servo, kiu estas la eniranto por definado de nova articulo, fariĝas per **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

La interfaco plenigas du predominantaj sekcioj. En la malparolo estas pluraj tabuloj kiuj helpas pri la definado de la produkto, kaj en la malparolo estas malsamaj sekcioj por defini la bazan preconcaŭon de la produkto, ĝia aktiva estado kaj produkta imago.

![Product edit page overview](/img/config/product-edit-full.png)

### Deskribono {#description}

La bazaj informoj pri la produkto povas esti definita per provizi nomon kaj deskribon de la produkto. Ĉi ti identigantoj estas prezentitaj ĉie kie la informoj pri la produkto estas necesaj, kiel selekto de planoj kaj precoj, fakturoj, updatoj, kaj similaj.

![Product description section](/img/config/product-description.png)

### Tipado de Preco (Pricing Type) {#pricing-type}

En la malparolo de la interfaco, la bazan preconcaŭon povas esti definita.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite subtenas tri malsamajn tipojn de preconcaŭoj. La **paid** (paga) opcio perfarĝas la administratoron de la retoj pri informoj pri la preco kaj fakturaj frekvencoj de la produkto.

### Preco (Pricing) {#pricing}

La preco-komponto definas la bazan preconcaŭon de la produkto kaj la faktura intervalo.

![Pricing and save section](/img/config/product-pricing-save.png)

tial exemple prizo de $29.99 kun konfiguracio de 1 morto billus $29.99 ĉiu monato. Simile, prizo de $89.97 kun konfiguracio de 3 montoj billus ti monton ĉiu kvartalo.

### Billaj Cikloj {#billing-cycles}

La seksa "Billing Cycles" (Billaj Cikloj) spesifigas la frekecon de la mena perioda fakturigo kaj ĝia interreta komprenas ofte kontraktojn aŭ fixajn terminojn.

![Pricing and save section](/img/config/product-pricing-save.png)

Por ekzemplo, prizo de produkto de $29.99 kun intervalo de 1 morto kaj 12 billaj cikloj billus $29.99 per monato por la produkto sur la sekvaj 12 montoj. Al alia vorto, tia konfiguracio establas fixan prix terminon de $29.99 per monato por 12 montojn kaj ti celas fakturi.

### Prova Periodo {#trial-period}

La aktiva togglo "offer trial" (provo periodo) permesas al la administratoro de la retoj definigi prov periodon por la produkto.

![Pricing and save section](/img/config/product-pricing-save.png)

Durante la provo periodo, klientoj estas libere uzebli la produkton kaj ne wird fakturitaj ĝis kiam la provo periodo finas.

### Monti Fee (Setup Fee) {#setup-fee}

Vi ankaŭ povas apliki monton de monti fee al via plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Tio signifas, ke via klientu pagus uzan eksteran monton sur la unua fakturo (al aldono al la prix plan) kiu korespondas al la fee, kiun vi definis en ĉi tiu seksa.

### Aktiva {#active}

La aktiva togglo "Active" (Aktiva) efektiv definas ĉu la produkto estas disponabla por klientoj por nova registriĝoj.

![Active toggle](/img/config/product-active.png)

Se ekzistantaj klientoj ĉi tiu planon, lajtere la togon al neaktiva (disabled) staton, efektyve grandfatrojn la planon, eliminante ĝin el futur registroj. **Ekzistantaj klientoj sur la planon continuos esti fakturi** ĝis ili transitiĝas al nova plano aŭ estas forigita el la planon.

### Imago de Produkto {#product-image}

La butono **Upload Image** permesas al la administratoro de la retoj uzi la media bibliotekon por selekti aŭ pliigi imagon de produkto.

![Product image section](/img/config/product-image.png)

### Delekti {#delete}

La butono **Delete Product** delektiĝas la produkton el la sistemo. Ĝi aperas, kiam la produkto estas publikigita.

![Delete product section](/img/config/product-delete.png)

La diferenco de aliaj delektioj estas, ke la produkto ne estas plibordita en iu "laverna" (trash) estado. Tial, ĉiam post delektiĝi la akcio estas irreversibla.

### Produktoj Opcioj {#product-options}

Kiam la bazala informo pri la produkto estas definita, la opcioj de la produkto helpas al la administratoro de la retoj pli da defini la specifajn atributojn de la produkto.

####Ĝenerala

La tabelo **General** definas la ĝeneralan atributojn de la produkto, kiuj ne aplika al iu ajn de la aliaj produkto-specifikaj tabuloj.

![General tab](/img/config/product-general-tab.png)

La autoeksplajnaj **product slug** definas la slugon, per kiu la produkto estas identigita en URL-oj kaj aliaj partoj de Ultimate Multisite.

Ultimate Multisite suportas plurajn tipojn de produktoj: Plan, Package kaj Service. La tabuloj **Product Options** estas dinamike ajustitaj dependante de la tipon produkto, kiun vi spesifigas.

La **Customer Role** specifikas la rolon, kiun klientaj estas atribuitita, kiam la sitio estas kreita. Tipike por plej multaj administratoroj de la retoj, tio estos la defaulto de Ultimate Multisite aŭ Administratoro. La defaulta rolo de Ultimate Multisite povas esti setita en **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Aufwärts- und Abwärtswechsel (Up & Downgrades) {#general}

Diesen Tab definiere die Möglichkeiten für Kunden, auf eine höhere oder niedrigere Stufe innerhalb ihres spezifischen Plans zu wechseln.

Um dieses Konzept zu verstehen, stellen Sie sich ein Beispiel vor, bei dem eine spezialisierte Ultimate Multisite Installation Lernmanagementlösungen an ihre Kunden anbietet. Um diese drei Pläne (Basic, Plus und Premium) zu erreichen, werden für jeden Plan spezifische Plugins aktiviert (siehe später in diesem Abschnitt für Anweisungen zur Aktivierung von Plugins).

Wenn die Ultimate Multisite Installation auch Geschäftswebsites oder eCommerce-Websites bedient, können diese Pläne möglicherweise andere Plugins erfordern, die installiert und aktiviert werden müssen.

In diesem Zusammenhang wäre es unerwünscht und problematisch, eLearning-Kunden den Wechsel zu eCommerce-Plänen zu erlauben, da diese Pläne, Preise und Einschränkungen möglicherweise nicht passend sind.

Um den Weg des Kunden einzuschränken und Vorfälle zu verhindern, kann der Netzwerkadministrator eine Planengruppe definieren und innerhalb dieser Gruppe festlegen, auf welche Pläne der Kunde wechseln kann.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Um eine Planengruppe zu definieren, geben Sie die kompatiblen Pläne in der Liste **plan group** an. Die **product order** bestimmt, wie die Pläne von niedrig bis hoch geordnet und angezeigt werden.

Ultimate Multisite enthält auch eine Funktion namens **order bump**, mit der je nach Bedarf Zusatzprodukte und -dienstleistungen zu Plänen hinzugefügt werden können. Diese werden dem Kunden als zusätzliche Artikel angeboten, die beim Bezahlvorgang oder während eines Upgrades zu den Plänen hinzugefügt werden können.

#### Preisvarianten (Price Variations) {#up--downgrades}

La variajoj de preco permet administratoro de la reto la especifi periodaj estas alternativojn preco dependante de la duraĵo. Ĉi tiu konfigurita permesas oferi mensia, kvartala, anualan aŭ alia bonaj periodajn fakturajn periodojn por la sama produkto. Ekzemple, vi povas konfiguri produkton al $29.99/monda kun diskontita anualan opcio al $249.99/jarejo.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Por stabiligi variajn precojn, meti la ŝtatecon **Enable Price Variations** al aktiva kaj kliki sur la butonon **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Por intri la variajon, meti la duraĵon, periodon kaj precon de la variaĵo. Pliaj variajoj povas esti intrit per klikado sur la butonon plue.

Ekzemple, se via baza produkta peco estas $29.99 pro mondo, vi povus aĉoti:

  * **3 Mondoj** al $79.99 (malgranda diskonto super mensa)
  * **1 Jaro** al $249.99 (signifa diskonto por anualan akiradon)

:::tip Montri Toggle de Fakturaj Periodoj sur la Frontend

Variajoj de preco al 혼e ne aĉas toggle aŭ ŝtatecon al la frontend checkout. Por permespli klientojn ŝanĝi inter fakturajn periodojn (ekz., Mensa / Anual), vi bezonas aĉi **Period Selection** filmon al via checkout formo. Vidu [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) por paŝaj instruoj.
:::

#### Taksaj Ratej {#price-variations}

La tabulo **Taxes** korespondistas la taksa konfiguraciojn spesifike definita en **Ultimate Multisite > Settings > Taxes** kaj pli specifike en la taksa ratoj definita. Por aktivi taksojn kaj defini aplikajn taksa ratojn, vidu la dokumentadon al **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

En anta ek anta, ni definisita una lokalaj akta de taks 7.25% ki aplike alium en California (Stati Uniti d'America).

Anfwa la taks rate estas definita en **Ultimate Multisite > Settings > Manage Tax Rates**, ĝi estas elektable en la nivelo de produkto.

![Taxes tab](/img/config/product-taxes.png)

Por indiki ke produkto estas taxebla, meti la interŝaltilojn **Is Taxable** al aktiva kaj selekti la aplikan taks rate el la nedropu "Tax Category".

#### Site Templates {#taxes}

En esence, site templates estas kompleta WordPress-vobozoj kiuj estas klonita al la sito de la klienton en la komenco de tiu subskribeco.

![Site Templates tab](/img/config/product-site-templates.png)

La retoj administrator kreas kaj konfigurigas la template sito kiel regularan WordPress-siton kun aktiva kaj konfigura kaj temoj, pluginoj kaj enhavo. La template sito estas klonita verbatim al la klienton.

Tiu tabelo permesas al la retoj administrator spesifi la vivon de site templates pri nova subskribeco. Por uzi site templates por ĉi tiu planaro, meti la interŝaltilojn **Allow Site Templates** al aktiva estado.

Kiam **Allow Site Templates** estas desaktiva, klientoj sur la planaro ne povas elekti templates, eĉ se formulo de checkout, parta linko aŭ URL-parametro bone farus templates disponibile. Ultimate Multisite nun forcastas ĉi tiilan liman per alternacia ĉenon inter la disponiblej entruntoj: planaj ŝanĝoj estas kontrolita unue, tiel kaj formulaj ŝanĝoj de templatej, kaj poste preselebataj aŭ URL-providencaj templatej. Tio sekurigas la limitojn de la planaro konsistentan kaj impedigas, ke templatej aparas por produktoj, kiuj ne devas ilin oferi.

La **site template selection mode** definas la vivon de site templates dum la subskribecproceso.

La valora **D** **Default** sekvig la paŝojn en la formulo de checkout. Se se la administrator de la retoj ha definita paŝton de selekto de templat en la procezo de checkout kaj tiu paŝto estas definita kun templatoj, ĉi tiu valoro respektas la direktojn, kiuj estis establitaj en tiu paŝto de checkout.

La spesifo de **A** **Assign Site Template** forcigas selekton de la spesifa templat. Konsekvence, ĉirkaŭiaj paŝtoj de selekto de templat en la procezo de checkout estas foritaj el.

Umfate, **C** **Choose Available Site Templates** supravidas la templatojn specifikajn en la paŝto de checkout kun templatoj selektitaj en ĉi tiu valoro. Pre-selektita templat ankaŭ povas esti definita por helpi la klienton en selekto.

Umfate, se la administrator de la retoj volas, ke selekto de templat okru en paŝtoj de checkout, la valoro ' _default_ ' suffiĉos. Alternativo por eliri kaj blokui selekton de templat kaj delegi la selekton al la ŝanĝoj de la planaj parametroj povas esti desirinda la opcio ' _assign new template_ ' aŭ ' _choose available site templates_ '.

#### Sites (Sitoj) {#site-templates}

La tabelo **Sites** estas parto de la funkcio limitajneco de Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Tiu valoro spesifigas la maksiman nanceron de sitoj, kiujn klient povas krei sub siaj membrajoj.

Por aktivi la limiton, mettu la interŝaltilon **limit sites** al ĝia aktiva estado kaj specifi la maksiman nanceron de sitoj en la kampo **site allowance**.

#### Visits (Vizitoj) {#sites}

La tabelo **Visits** estas pli parta de la sistemaj limitajneco de Ultimate Multisite. Ĉi tiu valoro permesas kontadon kaj sekvencan limigadon de unika vizitaroj al klientaj sitoj.

![Visits tab](/img/config/product-visits.png)

Dank marketeolo perspektivo, adminoj de reto povas uzi ĉi ti konfiguracion kiel maniero kuraĝi klientojn plenumi ilian planon, ĉamblas limoj atingitaj. Ĉi tiu konfiguracio ankaŭ povas helpi la adminadon de la reto kontroli kaj preveni trogranda trafikon al sitioj por konservi sistemajn resursajn.

Por uzi ĉi ti karakon, meti la interŝaltilon **limit unique visits** en aktiva stat kaj spesifi la maksimuman nancojn de unika vizito en la kampo **unique visits quota**.

Kiam ĉi tiu limoj atingita, Ultimate Multisite ne servos pli la klientaj sitiojn, sed alda mesaĝon indiki, ke limoj estis superitaj.

#### Uzantoj (Users) {#visits}

La limoj de 'Users' de Ultimate Multisite permesas al adminadon de la reto meti limojn sur la nancojn de uzantoj, kiuj povas esti kreitaj kaj asigneditaj roloj.

![Users tab](/img/config/product-users.png)

Por aktivi la karakon de limoj, meti la interŝaltilon **limit user** en aktiva stat per glita ĝin al la destra.

Nekon, por ĉiu rolo ki devas esti limitita, meti la interŝaltilon apud itan en aktiva stat kaj definas la maksimuman superlimon en la apropriata kampo.

#### Post Tipoj (Post Types) {#users}

La tabulo **Post Types** permesas al adminadon de la reto meti granulajn limojn sur la vasta rilaton de post tipoj en WordPress.

![Post Types tab](/img/config/product-post-types.png)

Pro la konstrua metodo de WordPress, postoj kaj post tipoj estas grava komponanto de ĝia bazaj funkcio, kaj tial la sistema de limoj de Ultimate Multisite estas dezaina por helpi la adminadon de la reto en etablari kaj konservi limojn.

Por aktivi ĉi ti subsystemon de limoj, meti la interŝaltilon **limit post types** en aktiva stat per glita ĝin al la destra.

Nächst, für jeden Post Type, der begrenzt werden soll, schalten Sie ihn ein, indem Sie ihn nach rechts ziehen und geben Sie die maximale Obergrenze im entsprechenden Feld an.

#### Disk-Speicherplatz (Disk Space) {#post-types}

Der Tab **Disk Space** ermöglicht es Netzwerkadministratoren, den von Kunden verbrauchten Speicher zu beschränken.

![Disk Space tab](/img/config/product-disk-space.png)

Typischerweise werden in einem WordPress Multisite die Kerndateien zwischen allen Seiten geteilt und einzelne Verzeichnisse für Medien-Dateien und Uploads erstellt, auf die diese Einstellungen und Einschränkungen anwenden.

Um die Festplattennutzung zu begrenzen, stellen Sie den Schalter **limit disk size per site** durch Ziehen nach rechts in seinen aktiven Zustand.

Geben Sie dann die maximale Obergrenze in Megabyte im Feld **disk space allowance** an.

#### Benutzerdefinierte Domain (Custom Domain) {#disk-space}

Indem Sie diese Option aktivieren, können Sie für diesen Plan spezifisch benutzerdefinierte Domains erlauben.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes {#custom-domain}

Der Tab **Themes** innerhalb der Produktoptionen ermöglicht es dem Netzwerkadministrator, Themes Kunden zur Auswahl zur Verfügung zu stellen und optional den Zustand des Themes festzulegen.

![Themes tab](/img/config/product-themes.png)

_**Notita: Damit Themes für d'kunden verfügbar sind, muss sie vom netzwerkadministrator durch das Netzwerk aktiviert werden.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Die Option **visibility** definiert, ob dieses Theme sichtbar ist oder nicht, wenn der Kunde seinen Tab **Appearance > Themes** uf seiner Site ansieht. Wenn Sie diese Option uf **Hidden** (Versteckt) stelle, wird das Theme aus dem Sichtfeld entfernt und somit die Möglichkeit zur Auswahl und Aktivierung eingeschränkt.

![Themes tab](/img/config/product-themes.png)

Die Auswahl **behavior** erlaubt es dem Netzwerkadministrator, den Zustand des Themes festzulegen, sobald die Kundeseite erstellt wird.

Na la **Aktivajble** (Available) kondiĉo temo estas disponabla por la klientoj por mem aktivi. Kontraŭe, la kondiĉo **Ne Disponabla** (Not Available) eliminas la kapablon de la klientoj aktivi la temon. La lasta opcio, **Forci Aktivi** (Force Activate), forcas la selekton kaj aktivaĵon de la temo, tiel fixante ĝin kiel default pri la kreo de la sitio.

#### Plugins {#themes}

Simile al la tabelo Temoj (Themes), Ultimate Multisite per la administratoro de la retoj permesas definigi la vidancon de pluginoj por klientoj kaj ilian staton pri la kreo de nova sitio.

![Plugins tab](/img/config/product-plugins.png)

La menuko "vidibiliteco" (visibility) permesas al la plugino esti aŭ vidbla aŭ malvidbla por la klientoj, kiam oni vidas ĝin sur ilia sito per la opcio de la menuko Plugins.

La administratoro de la retoj povas plie manipuli la komporton de pluginoj per uzado de la opcioj en la menuko "kompato" (behavior).

![Plugins tab](/img/config/product-plugins.png)

La selekto **Default** respektas la staton de la plugino, kiun definita en la mallabro de la sitio tempon, elektita de la klientoj. Tiel pluginoj, kiuj estas aktivaĵaj dentro la tempon, restu aktivaĵaj, kiam la tempo klonetas al la sita de la klientoj.

**Forci Aktivi** (Force Activate) placi la pluginon en aktiva staton pri la kreo de la sitio kaj kontraste **Forci Deaktivi** (Force Inactivate) deaktivas la pluginon pri la kreo de la sitio. En ambaŭ ĉi tiuj circumstancoj, la staton de la plugino povas esti manuveble alterita de la klientoj per sia menuko Plugins de WordPress.

La konfiguracio **Force Activate & Lock** funkcionas la maniero similare, sed impedas ke el stato de la plugin sea modifike pa la kliento. Thence, una konfiguracio de Force Activate and Lock forse la plugin en su estado aktivaj y impede ke la kliento la desaktive. Simileman, la konfiguracio **Force Inactivate & Lock** forse la plugin a su estado inaktivaj y impede al uzanto aktivaj la plugin.

El administradur de la reto (network administrator) puede volopi consideri las configuracio Force Activate & Lock kaj Force Inactivate & Lock kun site templates kiel plugins, kaj los statoj de la plugin dentro de los templates povas esti influedati per ĉi ti konfiguracioj se ili estas elektitaj.

#### Limitaĵoj de Reset {#plugins}

La tabulo **Reset Limitations** redefinis ĉiuj personalaj limitoj definitaj sur la produkto. Por redefiniti limitojn kliku sur la butono **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Por konfirmi la agadon glita la interŝaltilon **confirm reset** al sia aktiva estado de la destra kaj kliku sur la butono **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Modifi, Duplika aŭ Delekti Produkton {#reset-limitations}

Eksistantaj produktoj povas esti modifitita, duplikita aŭ delete per navigado al **Ultimate Multisite > Products** kaj glita sur la namenton de la eksistanta produkto.

![Product hover actions](/img/config/product-hover-actions.png)
