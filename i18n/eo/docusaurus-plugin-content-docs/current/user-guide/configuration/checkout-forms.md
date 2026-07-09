---
title: Formuloj de pagado
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms {#checkout-forms}

Checkout Forms estas facila kaj fleksabla maniero eksperimenti por diversaj approcioj pri provi konverti novajn klientojn.

Ultimate Multisite 2.0 ofers editoron de Checkout Formoj, kiu pervascastas al vi krei iluant quantas formojn vi volas, kun diversaj laĉoj, produktaj ofertoj kaj aliaj.

Por akcesi ĉi tiun funkcion, diru al menuko Checkout Forms, sur la malvalba-baro de sinulo.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Sur ĉi tiu paĝo vi povas vidi ĉiujn checkout formojn, kiujn vi havas.

La tabulo de listo inkluzas kolomon **Status**, por ke vi povas konfirmi ĉu ĉiu formo estas nun disponabla por klientoj:

| Status | Signifo |
|---|---|
| **Active** | La formo povas esti uzata ĉie, kie ĝia shortcode aŭ registriĝo-paĝo estas publikita. |
| **Inactive** | La formo estas salvita sed desabilitita. Klientoj ne povas fari checkout kun ĝi ĝis kiam vi reenableinfas ĝin. |

Uzu la statuskolomon antaŭ editi publikan registriĝajn flocon, precipe kiam vi konservas draft aŭ sezona checkout formojn apud viaj vivaj formoj.

Se vi volas krei novan, simple kliku Add Checkout Form sur la superulo de la paĝo.

Vi povas selekti unu el ĉi tiuj tri opcionoj kiel vian komencon: un stepa, multstepa aŭ blanka. Tiam, kliku por Ir al Editoro.

Kiam vi elektas **single step** aŭ **multi-step** kiel vian komencon, la formataj mallongaj nun inkluzas la laĉon **Template Selection** per default. Ĉi tiu laĉo pervascastas al viaj klientoj elekti site-mallon dum la registriĝo-proceso. Vi povas lasci minion, forigi ĝin aŭ repositioni ĝin kiel aliajn laĉojn en la editoro.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ, vi povas modifi aŭ dupliki la formojn, kiujn vi 이미 havas, klakindante la opciojn sub sia nomo. Tial vi ankaŭ trovos opciojn kopii la kouta kodon (shortcode) de la formo aŭ dili ĝin.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Supervizo de redaktoro de checkout formo {#checkout-form-editor-overview}

La redaktoro de checkout formo provizas komprenan interfacon por konstrui vian registriĝformojn. Tial vi havas sovran vizion de la layout de la redaktoro:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Modifado de checkout formo {#editing-a-checkout-form}

Vi povas krei checkout formojn por diversaj caŭzoj. En ĉi tiu ekzemplo ni laboros kun registriĝoformo.

Post navigado al redaktoro de checkout formo, donu vian formon nomon (ki uzus nur por interna referenco) kaj slugon (ki uzas por krei shortcodes, paŭze).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formoj estas kompostita el paŝoj kaj laĉoj (fields). Vi povas aĉi novan paŝon klakindante "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Sur la unua tab de la modala finestra, plenigu la encon de vian formo's paŝo. Donu al ĝi ID, nomon kaj deskripcon. Ti ĉi elementoj uzas ĉefe intern.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Tiam, estatu la vidibiliton de la paŝo. Vi povas esti entre "Spermi ĉiam", "Spermi nur por logitaj uzantoj" aŭ "Spermi nur por invitatoj".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Finala, konfiguru la stilon de la paŝo. Ti estas opcionalaj laĉoj.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Nove, vi povas aĉi laĉojn al nia unua paŝo. Simple klaknu por "Add New Field" kaj selekti la tipon sekcion, kiun vi volas.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Chakli ĉiu campo havas malsamajn parametro, kiujn vi devas plenigi. Por ĉi tiu unua intrado, ni selektos la "Username" (Nomuzisto) kampan.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Vi povas aĉi iluant cuánt stepojn kaj kampan vi bezonas. Por montri viajn produktojn por klientoj elekti unu, uzu la campo "Pricing Table" (Preco Tablo). Se vi volas permi al viaj klientoj elteni templan, aldonu la campo "Template Selection" (Selelekto de Tempon). Kaj similaj.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Notado:** username, emailo, password, site titolo, site URLo, order summary (Ordino Rezumo), payment (Pagamento) kaj submit button (Submit Button) estas obligaj kampoj por krei checkout formon._

Dum vi laboras al via checkout formo, vi ĉiam povas uzi la Preview (Previdado) butonon por vidi, kiel viaj klientoj vidos la formon. Vi ankaŭ povas alterni inter "view as an existing user" (vidi kiel ekzista uzanto) kaj "visitor" (vizito).

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Finala, sur Advanced Options (Avancaj Opcioj) vi povas konfiguri la mesaĝon por la "Thank You" (Dankon Vi) paĝo, aĉi fragmentojn por sekci conversionajn datumojn, aĉi customan CSS al via checkout formo aŭ restri ĝin al certaj landoj.

![Advanced Options](/img/config/checkout-form-advanced.png)

Vi ankaŭ povas manuele aktivi aŭ desaktivigi vian checkout formon per togglo ĉi ti opciojn en la destra kolono, aŭ permanentigamente dili la formon.

![Active toggle](/img/config/checkout-form-active.png)

Por ke ŝanĝi formulon, klikuante sur la opcio de "delete" (elimini) en la akcio de la formulo:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ne forgi savi vian checkout form!

![Save button](/img/config/checkout-form-save.png)

Por akcesi vian form's shortcode, klikuante sur "Generate Shortcode" (Generi Shortcode) kaj kopii la rezulton, ki estas shown en la modalaj finestra.

![Save button with shortcode](/img/config/checkout-form-save.png)

### La Campo de Tablo de Precoj {#the-pricing-table-field}

La campo **Pricing Table** (Tablo de Precoj) montras vian produktojn sur la checkout form por ke klientoj kapabos elteni planon. Kiam vi modigas ti ĉi kampan, vi povas konfiguri plurajn opciojn:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Jen kiel la tablo de precoj aparas sur la frontend registriĝo formo:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Produktoj): Selekti, kiuj produktoj montri kaj la ordon, en kiu ili aparas.
  * **Force Different Durations** (Forci Diversajn Durojn): Kiam ĝi estas aktiva, ĉiuj produktoj montriĝas neŭdepende de tio, ĉu ili havas korespondantajn variaĵojn de preco por la nun selektitan fakturaj periodon. Kiam ĝi estas deaktivita (default), produktoj sen variaĵo por la selektitan periodo estas malaperceptaj.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Malaperpiĝi kiam Ante-selekti): Malaperpiĝas la tablo de precoj, kiam plan estas déjà selekti per URL (ekz., `/register/premium`).
  * **Pricing Table Template** (Template de Tablo de Precoj): Elekti la vizualan template'on por la tablo de precoj (Simple List, Legacy, etc.).

Se vi aldonas produkton al la Pricing Table antaŭ ol la formo inkluzas la kampojn necesajn por kompleti ti produkto's checkout fluo, la editora nun montris avizadon. Uzdu ti avizadon por aĉeti la mantranĉitan necesan kampan antaŭ publikigi aŭ savi ŝanĝojn por viva registriĝo formo.

### Доdaŭrigi la Periodan Selektadon Toggle {#adding-a-period-selection-toggle}

Se vi havas konfiguriĝit [Price Variations](creating-your-first-subscription-product#price-variations) sur viajuntaj (ekz. mensala kaj anualaj kondicioj), vi povas diri **Periodan Selektadon** (Period Selection) la viajn checkout formo. Ĉi tiu campo prezentas togglon, kiu permesas klientojn ŝanĝi inter pagamentajn periodojn, kaj la ceno-tablo ĝisdatigas dinamike en reala tempo.

#### Paŝto 1: Konfiguri Price Variations sur Viajuntaj {#step-1-set-up-price-variations-on-your-products}

Anta da diri Periodan Selektadon campo, certigu, ke viajuntaj havas konfiguriĝitajn price variations. Aliri **Ultimate Multisite > Products**, editi produkton kaj navigi al la tabelo **Price Variations** por aĉeti alternativo pagamentajn periodojn (ekz. Anual per malpli ceno).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Paŝto 2: Adoji la Periodan Selektadon Field al Viajuntaj Checkout Formo {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Aliri **Ultimate Multisite > Checkout Forms** kaj editi vian checkout formon.

2. Scrollu nedon al la paŝto, kiu konenigas vian **Pricing Table** field, kaj kliku sur **Add new Field**.

3. En la dialoga finestra selekto de tipon campo, kliku sur **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfiguri periodajn opciojn. Ĉiu opcio bezonas:
   * **Duration**: La nulo (ekz. `1`)
   * **Duration unit**: La tipo de periodo (Diaj, Semaj, Mensaj aŭ Anualaj)
   * **Label**: La teksto, kiun klientoj vidos (ekz. "Mensala", "Anual")

5. Kliku sur **+ Add Option** por aĉeti pli da periodaj elecoj. Ĉi tiuj opcioj devas korespondi la price variations, kiujn vi konfiguriĝis sur viajuntaj.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Elektu **Period Selector Template** (Clean estas la defaulto, kiu rendonas simple stilitan selektadon respondan por personaligita CSS).

7. Klik **Save Field**.

#### Paŝto 3: Pozicionu la Campo Super la Tablo de Precojoj {#step-3-position-the-field-above-the-pricing-table}

Por la plej bona uzanto-eksprienco, certiguu, ke la campo Selekto de Periodo aparas **ante** la campo Tablo de Precojoj en via paŝto de checkout. Vi povas tiri la campojn por reordoni ilin en la redaktoro de la forma de checkout. Tiel, la klientoj malkreskas un periodon de fakturigo kaj tiam vidas precojn por tiu periodo.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Kiel Ĝi Funkcias Sur La Frontend {#how-it-works-on-the-frontend}

Unfojita, klientoj kiuj vizitas via vian registriĝa paĝo vidos la selektanton de periodo super la tablo de precojoj. Kiam ili klikas al diversan periodon de fakturigo:

  * La tablo de precojoj ĝis instante aktualizas por montri precojn por la selektita periodo (ne bezonas reŝarĝi la paĝon).
  * Se **Force Different Durations** estas desabilitita sur la campo Tablo de Precojoj, produktaj sen variaco de preco por la selektita periodo estu malparolita.
  * Se **Force Different Durations** estas aktiva, ĉiuj produktaj restas vidaj kiel ili ne havas vario por la selektita periodo (il montros sian defaultan precon).

#### Pra-selektiun de Periodo de Fakturigo per URL {#pre-selecting-a-billing-period-via-url}

Vi ankaŭ povas pra-selekti produkton kaj periodon de fakturigo per la URL. Ultimate Multisite subtenas ĉi tiuj URL-patron:

  * `/register/premium` — Pra-selektas nur la produkton "Premium"
  * `/register/premium/12` — Pra-selektas la produkton kaj 12-monan duran
  * `/register/premium/1/year` — Pra-selektas la produkton kun 1-jara duro

### La Campo Selekto de Modeloj (Template Selection Field) {#the-template-selection-field}

La campo **Template Selection** permesas klientojn elekti modelon de sitio dum checkout. Ili estas nun inkluzita per default en la formoj de checkout "single step" kaj "multi-step" en Ultimate Multisite v2.6.1.

#### La aldonado de la campo manuele {#adding-the-field-manually}

Se vi travail kun formulon, ki estis kreita antaŭ v2.6.1, aŭ komencas de blanka mallapo:

1. Altiĝu al **Ultimate Multisite > Checkout Forms** kaj editu sian checkout-formulon.
2. En la paŝo, kie estas kolektita informo pri la sita, kliku sur **Add new Field** (Adu novan plipunon).
3. Selekton **Template Selection** (Selelekto de mallapo) el la dialoga tabor de tipon plipunon.
4. Konfiguru la plipunon:
   - **Label** — La titolo, kiun klientoj vidas super la mallapo gridon (ekz., "Elektu sita mallapon").
   - **Required** (Obligobligita) — Se klientoj devas selekti mallapon antaŭe procedi.

#### Kiel ĝi funkcias {#how-it-works}

Kiam klientas elektas mallapon dum checkouto, Ultimate Multisite uzas ĝin pri la provizio de sia nova sita. La mallapoj, kiuj estas montritaj, venas el viaj **Site Templates** listo (**Ultimate Multisite > Site Templates**). Nur mallapoj, kiuj estas marķitaj kiel disponibile por klientoj, aparas ĉi tie.

### Checkout-form bazaj domenoj {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 traktas domenojn konfigiritajn en la lajnlaj lajnlaj **Site URL** plipunoj kiel retoj bazaj domenoj (network base domains). Uzdu la disponiblajn domeno-parametroj de la plipro, kiam vi volas, ke klientoj kreu sita sub unu el pluraj partaj registriĝemaj domenoj, kiel `example.com` kaj `sites.example.com`.

Partaj checkout-form bazaj domenoj ne traktas kiel domeno-mapado per-sita (per-site custom domain mappings). Kiam klientas kreas subdirektan siton sur unu el tiuj bazaj, Ultimate Multisite ne kreas registron de mapita-domeno, kiu farus la partaj hosto alteni nur tiu una sita. La partaja hosto restas disponibile por sibling sitoj kiuj uzas la same checkout-form bazon.

Maltu domajn kaj custom domenojn por per-kliento mapitaj hostoj, kiel `customer-example.com`. Maltu checkout-form bazaj domenojn por partaj registriĝemaj hostoj, kiujn multaj sitoj povas uzi.

#### Eliminado de la plipro {#removing-the-field}

Se vi ne ofersas sitioj modeloj (site templates), forcas la kampo Selekto de Modeloj (Template Selection) el de via formo. La klientoj riceverá la default modelo ki estas konfigurita sub **Ultimate Multisite > Settings > Site Templates**.
