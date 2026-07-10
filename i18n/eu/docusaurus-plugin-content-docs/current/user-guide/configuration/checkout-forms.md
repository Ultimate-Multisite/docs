---
title: Formulariak
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms {#checkout-forms}

Checkout Forms hauek eta erabilera bat eraginkora eta fleksiboa da irudiak jarraitu zen new customer berekin konvertizatzeko aukera.

Ultimate Multisite 2.0-ek Checkout Form editor bat ematen du, aholi jakoki formak ezberdin dezisten ditu, askoki irudien, produkzioak jartzen dituz.

Hau testuinguruan, menuaren eskerre-barran (left side-bar) Checkout Forms menuku jarraitu.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Hau dauden lapian, formak guztiak zure eskatzen dituz ezartzen dira.

Lista-belauek **Status** osakoa barne ditu, nahiz eta formak guztiek irudiak jartzeko aukera dutelako jakin dezake:

| Status | Zaharra |
|---|---|
| **Active** | Formak erabiltzen daile dago hori bere shortcode edo registration lapia publikatu ditzake. |
| **Inactive** | Formak salduta dago baina deshabilitatuta dago. Horrek gaur egun erabiltzeko, eta hori jartzen duenean. |

Forma editatzeko, batez ere draft edo temporadako checkout formak zure live formak eta pareatu dutenean, status osakoa erabilizten dituz.

Beste bat lehenik sortu nahi duzu, lapia gaineko Add Checkout Form-i klik egin behar duzu.

Hau zehaztu behar dituen tresna bat gisa, bat hau irudiak jartzen dira:

Forma editorra!](/img/config/checkout-form-editor.png)

Lehenik sortzeko, hauek bat erabiliz ditzakezu: single step (bat-etapa), multi-step (askoki-etapiko) edo blank (ez-eragila). Horrek, Editorra jarraitu dituz.

**single step** edo **multi-step** bat lehenik sortu duzu, formak template batean **Template Selection** osakoa barne ditu orain. Osakoa da, hori zure customer-ek registration prosesaren aurreko site template bat ere irudi dezaten. Horra geratu ditzakezu, edo eratu ditzakezu, edo editorrak beste osakoko batez ere jarraitu duzu.

Alternatiboa, jo daude duzu ez dagoen forma hauek editatu edo duplikatzen ditzake, formaren amaitzen ondorenko opsioak klikizik aurkitu nahi du. Aitu, forma-ren shortcode kopatzea edo formaa buitzea (delete) funtsezko opsioak ere aurkitu nahi du.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor-aren Deskribapena {#checkout-form-editor-overview}

Checkout Form Editor-ek irregistro formak ezartzeko interfaz bat ematen du. Editor-aren eskaintza deskribapen batekin:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Forma Editatu {#editing-a-checkout-form}

Formak erabilera espezifikueko bizkarriak eta lekuak (fields) sortzen dituzte. Horren bitartean, irregistro forma bat egiteko jarduera egin dugu.

Checkout Form Editor-ra aurkitu ondoren, formai bat ematu (horrek aurreikusten barkontzeko erabiltzen da) eta slug bat ematu (shortcodeak sortzeko erabil da, adibidez).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formak bizkarriak eta lekuak (fields) sortuta dago. "Add New Checkout Step" klikizik leku berri bat beste ditzake.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal window-ren lehen taban, forma-ren bizkarria kontuan hartu. Id, amaierazpena eta deskribapena ematu. Horrek gure aurreikusten barkontzeko erabiltzen dira.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Gero, bizkaria erabiliz. "Always show" (Aurreratean erabiliz), "Only show for logged in users" (Erabiltza kontu duten erabiltzaileak dira) edo "Only show for guests" (Bisitarteak dira) hasiera ematu.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Ezkutuz, bizkaria estiloa konfigurați. Horrek opsional lekuak dira.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Arrez, gure lehen bizkarria lekuak (fields) ematu daiteke. Lehenik klikiz "Add New Field" eta zer tipu nahi duzu hori ematu.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Artean bideakari guztiak dira erabilizteko parametrak dituzte. Lehen eskaperaerako, "Username" (Erabiltzaile Nuan) leialdia ematen dugu.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Zer dauden eta leialdia behar duzu, ez duzu. Kontratuagatik produktuak iradokizteko, "Pricing Table" (Prezio Laguntza) leialdia erabilizte ziuratu. Zer template bat ere erabiltzea gustatzen dugu? Orri, "Template Selection" (Template Iradokizteko) leialdia gehitu. eta hori daze.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** checkout form bat ematen arte, username, emaila, password, site title (site titulu), site URL (site URL), order summary (ordena zerrenda), payment (pagoa) eta submit button (bidaukatu botoia) leialdia beharrezko dira._

Checkout form batean lan egiten duzenean, clientak formua ondo ikusten duen modu ikusteko Preview (Ikuspen) botoia erabiltu dezakezu. Eusmarki, jakin duen erabiltzaile bezala edo bisitari bezala ikustera aldatu dezakezu.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Aurrera, Advanced Options (Opsioak Advancedak) da, non "Thank You" (Eskerrik gogoratu) lapurikoaren mensajia konfigura dezakezu, konversioak egiaztatzeko snippetak gehitu dezakezu, checkout forman CSS osoa gehitu dezakezu edo bestelako etorkizunetan restrike egin dezakezu.

![Advanced Options](/img/config/checkout-form-advanced.png)

Leialdia eskatzen duzue, esquerdo kolona (kolona garrantzitsuak) da, edo formua permanente delatu dezakezu.

![Active toggle](/img/config/checkout-form-active.png)

Forma bat formaren boratzen, forma aksioetan (form actions) de delete opsionak klikatu:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Formaren save ez diste!

![Save button](/img/config/checkout-form-save.png)

Formaren shortcode aldatzeko, "Generate Shortcode" (Shortcode generatzea) klikatu eta modal finestraan erabilizko rezultatuak kopiatu duzu.

![Save button with shortcode](/img/config/checkout-form-save.png)

### The Pricing Table Field (Prezioaren taldea) {#the-pricing-table-field}

**Pricing Table** (Prezioaren taldea) lekuak produktu hauek checkout forman erakusten du, nahiz eta klientak plan bat ere elebide dezaten. Lege hau aldatzen duenean, opsio batzuk konfiguru dezakezu:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Hau da ere prezioaren taldea frontend (irudi-frontendu) registro forman onartzeko:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Produktuak): Indikatu duzu zein produktuak erakusten dituz eta horiek zer urtera dira.
  * **Force Different Durations** (Urte-erreguntzak eragatu): Horren ondorioz, aukera ematen diren prezioa ezinbesteko dela planaren orduan, produktu guztietan erakusten da. Horrek ez dagoenean (default), aukera ematen produktuak horren urtera ez dagoenean horretan gizitu dira.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Gizatu pre-elektuaren): Plan bat URL-tik (adibidez, `/register/premium`) elebide dela gizitu duenean prezioaren taldea.
  * **Pricing Table Template** (Prezioaren talde moldioa): Prezioaren taldeko visuelar moldioa aukeratu duzu (Simple List, Legacy, etc.).

Produktua Pricing Table-era ez hasi duen lekuan formak horren produktua orokizten behar dituzten lekuak sartu duenean, editorra aurrepen bat ematen du. Publiko edo aldatuetan save egin baino lehen, beharrezko leku hau hasterako produktuaren lekuak ez dagoela eratu dezakezu.

### Periodo Alegiaren (Toggle) Ez Aurretzea {#adding-a-period-selection-toggle}

Produktuak dauden [Price Variations](creating-your-first-subscription-product#price-variations) konfiguratuta dut (adibidez, mensual eta anual prezioak), checkout form-eko **Period Selection** (Periodo Alegiaren) leku bat ezartu dituz. Leeku hau toggle batekin erakusten da irudiari erabiltzaileei bildu periodoak handi edo txiki间 (billing periods) hasterri eta prezioaren taldea bere horretan dinamiak update egiten du.

#### Irudi 1: Produktuakarekin Prezio Variazioak Konfiguratu {#step-1-set-up-price-variations-on-your-products}

Periodo Alegiaren leku ezartzea baino lehen, produktuak parezioa prezio variazioak konfiguratuta dutela seguruatu behar duzu. **Ultimate Multisite > Products**-era jarraitu, produktua editatu eta **Price Variations** (Prezio Variazioak) tab-era aurkitu, eta alternatibo periodoak hasterri (adibidez, Anual txiki prezioarekin).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Irudi 2: Periodo Alegiaren Leeku Checkout Form-eko Ezartzea {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms**-era jarraitu eta checkout form-a editatu.

2. **Pricing Table** (Prezioaren Taldea) lekuan dagoen step-era jarraitu eta **Add new Field** (Leeku berria hasi) klikatu.

3. Leeku eragiketa (field type selection dialog)-ean, **Period Select** (Periodo Alegiaren Alegatu) klikatu.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Periodoak konfiguratatu. Leeku baten eskaintzeko:
   * **Duration**: Numeroa (adibidez, `1`)
   * **Duration unit**: Periodoaren tipoa (Egunak, Semana, Bulanak edo Anualak)
   * **Label**: Testuak erabiltzaileei erakusten dituz (adibidez. "Mensual", "Anual")

5. Leeku hasierri (**+ Add Option**) klikatu periodo eskaintzak gehiago hasi dezakezu. Aia hauek produktuakarekin konfiguratuta duten prezio variazioekin onartu behar dira.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. **Period Selector Template** (Periodo Alegiaren Modelua) aukeratu (Clean da default-a, eta hori CSS dezaltelako simple estilatu leku bat ematen du).

7. Kliku **Save Field**.

#### Irrenda 3: Egiarenak Prezioaren Laguntzailean Oinarritzen {#step-3-position-the-field-above-the-pricing-table}

Guztundia erabiltzaileari laguntzeko, asegatz daude "Period Selection" (Aldi-erren Alegia) lehiakoa prezioaren laguntzailea aurretik eratu behar duzu checkout-en irrendarrian. Lehiakoe irekitzeko modu formaturian ezartzen dituztezu. Hau funtsezkoa da, nahiz eta erabiltzaileak lehenik aldiaren alegia aldatu, horrek prezioak ikusten dute.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### On Frontend (Irrendarrian) Zerren Moduarekin {#how-it-works-on-the-frontend}

Konfiguratu gtainaren ondoren, erabiltzaileak irregistro lapurialdi zezkera bisitatzen duela, periodoa aukeratzeko lehiakoa prezioaren laguntzailearen üstoan ikusten dute. Berria aldiaren alegia klikatzen duenean:

  * Prezioaren laguntzailea aurkitutako periodoko prezioak erakusteko instantan aldatzen da (lapurialdi berri ez da beharrezkoa).
  * Lehiakoe prezioaren laguntzailearen "Force Different Durations" (Aldiaren Erdiffaz Formatu) deshabilitatuta dagoenean, aukeratutako periodoko prezio erdiffaz ez duten produktuak horretan gizituta egon daitezke.
  * Lehiakoe prezioaren laguntzailearen "Force Different Durations" habilitatuta dagoenean, aukeratutako periodoko erdiffaz ez dutelako produktuak ere erakusten dira (horrek bere prezioa erakusten du).

#### URL-ek Erratzen Prezioaren Alegia {#pre-selecting-a-billing-period-via-url}

URL-ek arren produktu eta aldiaren alegia aurretik aukeratu ditzake. Ultimate Multisite hauek URL-ek hauek suportatzen dute:

  * `/register/premium` — "Premium" produktua lehenik aukeratzen du
  * `/register/premium/12` — Produktua eta 12-gainko aldiaren erdiffaz aurretik aukeratzen du
  * `/register/premium/1/year` — 1-gainko aldiaren erdiffaz produktua lehenik aukeratzen du

### Lehiakoe Aukeratzeko Laguntzailearen (Template Selection Field) {#the-template-selection-field}

Lehiakoe Aukeratzeko laguntzailearenak erabiltzaileei checkout-ean web-sailen modelua (template) aukeratzeko aukera ematen dio. Ultimate Multisite v2.6.1-an gisa, hori orduan "single step" eta "multi-step" checkout form template hauek ezarrituta dagoena da.

#### Laguntzailearen Manualen Aditura {#adding-the-field-manually}

(Esku-ezpenak edo manualen adituen testu hau aipatzen du)

Forma erabiltzen du v2.6.1-ren antes edo bat moldeak (template) batzuk gabe hasiturik:

1. **Ultimate Multisite > Checkout Forms** funtziara jarri eta checkout form-ak aldatu.
2. Saila da, sitearen datuak eramaten diren lekuan, **Add new Field** (Lehenago irudi gehiago) klikatu.
3. Lehenago irudien tipoa dialogu-an, **Template Selection** (Moldeak aukeratu) aldatu.
4. Lehenago irudia konfigura:
   - **Label** — Kliakumeak moldearen gridaren üstoan ikusten duen tituluak (adibidez, "Site moldua aukeratu").
   - **Required** — Kliakumeak aurrera egin baino lehen molde bat aukeratu behar duen.

#### Ondo jakinarazteko {#how-it-works}

Kliakume bat checkout-alde molde bat aukartzen duenean, Ultimate Multisite irudi berri sitea ematean (provisioning) erabiltzen du. Ekin dituzten moldeak daude zure **Site Templates** listatik (**Ultimate Multisite > Site Templates**). Kliakumeak erabilera daingo dituzten moldeak jarduera honetan erakusten dira.

### Checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 checkout formaren **Site URL** lekuan konfiguratutako domain-ak network base domains (base domainak) gisa tratatzen dira. Kliakumeak bat edo gehiago saltu domainak, gure `example.com` eta `sites.example.com` bezala, erabiltzen siteak sortzeko aukera dutenean, lekuaren available-domain konfiguratura ezarri duzu.

Saltu checkout formaren base domains per-site custom domain mappingak (per-site-ko custom domainak) gisa tratatzen dira. Kliakume bat dauekin bat base domain batean subdirectory sitea sortzen duenean, Ultimate Multisite mapeatutako domainizia emateko record bat ez da sortzen, eta horrek saltu hostea berro egonbatze site-ekari (sibling sites) erabiliko duen. Saltu hostea berro checkout formaren base erabiltzen dituzten beste site-ekari jasotzeko aukera dutela jarraitzen du.

Per-customer mapeatutako hosteak, adibidez `customer-example.com` bezala, custom domainak jasotzen duzu. Saltu registration hosteak (base domains) jasotzen duzu beste site-ekari erabiliko dituztenak.

#### Lehenago irudien hartzea {#removing-the-field}

Ez dago: Ez emisten leku-templateak (site templates) eta formularioaren iraditzen zein erantzuten dena. Zaharliaren artean, erabiltzaileak **Ultimate Multisite > Settings > Site Templates**-eko bat dauden default template-a hartuko dira.
