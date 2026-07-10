---
title: Pirkuma formātāri
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms {#checkout-forms}

Checkout Forms ir viegls un labāma veids eksperimentēt ar dažādām pieejām metodēm, mēģinot konvertēt jaunas klientus.

Ultimate Multisite 2.0 piedāvā Checkout Form editoru, kas ļauj izveidot cik vēlme vēlaties formus, ar dažādiem laukiem, piedāvātajiem produktiem un tā, kas citi.

Lai piekļūtu šim funkcionālai, pārvietojies uz Checkout Forms menī, left side-barā.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Šajā lapā redziet visus savus checkout formus.

Liste tabula ietver **Status** stundu, lai jūs varētu apstiprināt, vai katrs forms pašlaik ir pieejams klientiem:

| Status | Nozīme |
|---|---|
| **Active** | Formu var izmantot jebkurā vietā, kur tas ir publicēts savas shortcode vai reģistrācijas lapā. |
| **Inactive** | Formu ir saglabāts, bet tā ir neaktivizēta. Klientiem nav iespējams pabeigt checkout ar to, līdz jūs to vēlreiz aktivizējat. |

Izmantojiet statusa stundu pirms rediģējat publisko reģistrācijas plūsmu, īpaši, ja jums saglabātie projekti vai sezonas checkout formus kopā ar saviem dzīvi formus.

Ja vēlaties izveidot jaunu, vienkārši noklikšķiniet uz "Add Checkout Form" lapas augšpusē.

Jūs varat izvēlēties viens no šiem trim variantu kā sākotnējais punkts: single step (vienkārša solis), multi-step (daudzsolis) vai blanka. Tad noklikšķiniet, lai pāriet uz Editoru.

Ja jūs izvēlaties **single step** vai **multi-step** kā sākotnējo punktu, formāts tagad ietver defaultu lauku **Template Selection**. Šis lauks ļauj klientiem izvēlēties vietnes šablonu reģistrācijas laikā. Jūs varat to atstāt, izņemt vai pārliecināt to pozīciju kā jebkuru citu lauku editorā.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatīvi, jūs varat rediģēt vai duplikat savus jau ievērotos formularus, noklikšķinot uz opcijām, kas atrodas viņu nosaukuma zem. Tur jums būs arī opcijas kopēt formārs šortkodi vai izslēgt formu.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor ievades pārskats {#checkout-form-editor-overview}

Checkout form editor nodrošina vispārīgu interfeisu, lai būtu varētu veikt jūsu reģistrācijas formularus. Šeit ir redzams editora plāns:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout form rediģēšana {#editing-a-checkout-form}

Jūs varat izveidot checkout formus dažādiem mērķiem. Šajā piemēra mēs strādāsim ar reģistrācijas formu.

Pēc navigācijas uz checkout form editoru, sniedz savam formai nosaukumu (kas tiks lietots tikai iekšējai referancē) un slug (lietu šortkodiem, piemēram).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formulari ir sastāv no soļiem un laukiem. Jūs varat pievienot jaunu soļu noklikšķinot uz "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modalā loga pirmajā posmā aizpildiet jūsu formāras soļas saturu. Sniedz tālnum, nosaukumu un aprakstu. Šie elementi galvenokārt lietojami iekšpusē.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Tālāk noteikiet soļas redzamību. Jūs varat izvēlēties starp "Vispirms parāda", "Parāda tikai ienākotajiem lietotājiem" vai "Parāda tikai viesiem".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Visbeidzot konfiguriet soļas stilu. Šie ir valksti opcijas.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Tagad ir laiks pievienot laukus mūsu pirmajam soļam. Vienkārši noklikšķiniet uz "Add New Field" un izvēlieties, kāda sadaļas veidu vēlaties.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Kat katrā laukums ir ar dažādām parametrami, kas jāievada. Šajā pirmajā ieejā mēs izvēlamies "Username" laukumus.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Jūs varat pievienot cik vēl ir laukus un solis, kas jums nepieciešams. Lai parādītu savus produktus klientiem, lai viņi izvēloties vienu no tiem, izmantojiet "Pricing Table" lauku. Ja vēlaties ļaut saviem klientiem izvēlēties šabli, pievienojiet "Template Selection" lauku un tā tams. Un tas vēl jārāda.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Piezīme:** username, email, password, site title, site URL, order summary, payment un submit pogas ir obligāti jāievada checkout formai._

Kamēr strādājat ar savu checkout formu, jūs vienmēr varat izmantot "Preview" pogu, lai redzētu, kā klientiem parādīsies forma. Jūs varat arī mainīt skatuvošanu starp eksistējām lietotājiem un apmeklētājiem.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Visbeidzami, "Advanced Options" (Iepriekšējie opcijas) sadaļā jūs varat konfigurēt ziņojumu "Thank You" lapai, pievienot skriptus konversiju izsekošanai, pievienot custom CSS savai checkout formai vai ierobežot to noteiktu valstu.

![Advanced Options](/img/config/checkout-form-advanced.png)

Jūs varat arī manuāli iestatīt vai desactivēt savu checkout formu, izmantojot šo opciju labajā kolonnā, vai nomainīt formi pastāvīgi.

![Active toggle](/img/config/checkout-form-active.png)

Lai izslēgt formu, klikšķiniet uz slēgšanas opciju (delete option) formu darbībās:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Neatkarīgi, atcerieties saglabāt savu slēgšanas formu!

![Save button](/img/config/checkout-form-save.png)

Lai saņemtu jūsu formai īsvada (shortcode), klikšķiniet uz "Generate Shortcode" un kopējiet rezultātu, kas redzams modalā logā.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Ceny tabulas lauks {#the-pricing-table-field}

Laiks **Pricing Table** (Ceny tabula) attēlo jūsu produktus slēgšanas formā, lai klientiem varētu izvēlēties plānu. Kad rediģējat šo lauku, jūs varat konfigurēt vairākas opcijas:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Šeit ir, kā ceno tabula parādās frontend reģistrācijas formā:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Produkti): Izvēlieties, kurus produktus izskatīt un kā sarunā tie parādīsies.
  * **Force Different Durations** (Izvēlēties dažādas ilgtspējības): Kad tas ir ieslēgts, visi produkti tiek redzami, neatkarīgi no tā, vai viņiem ir atbilstoša cenas variācija pašreiz izvēlētā faktūras periodam. Kad tas ir izslēgts (default), produkti bez variācijas izvēlētā periodam tiek slēgti.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Slēgt, kad jau ir iepriekš izvēlēts): Slēg viscenas tabulu, ja plāns jau ir izvēlēts ar URL (piemēram: `/register/premium`).
  * **Pricing Table Template** (Cenas tabulas šablons): Izvēlieties vizuālo šablonu cenas tabula (Simple List, Legacy, etc.).

Ja jūs pievienojat produktu Cenas tabulā pirms formai iekļauti nepieciešamos laukus, kas ir nepieciešami tās produktas slēgšanas plāna pabeigšanai, redaktors tagad parāda brīdinājumu. Izmantojiet šo brīdinājumu, lai pievienotu trūkstošo nepieciešamo lauku pirms publicēšanas vai saglabāšanas izmaiņām dzīvās reģistrācijas formai.

### Pievienojot Periodu izvēles reguli {#adding-a-period-selection-toggle}

Ja Jūs konfigurējāt [Cenu variācijas](creating-your-first-subscription-product#price-variations) savos produktos (piemēram, mēnesīgu un gadu cenas), Jūs varat pievienot **Periodu izvēles** lauku savam kasina formai. Šis lauks parāda toggle, kas ļauj klientiem mainīt starpos cenošanos, un cenas tabula dinamiski atjaunojas reālla laikā.

#### 1. Konfiguriēt Cenu variācijas produktos {#step-1-set-up-price-variations-on-your-products}

Pirms pievienojat Periodu izvēles lauku, pārliecinieties, ka jūsu produktos ir konfiguriotas ceno variācijas. Pāmeklējieties uz **Ultimate Multisite > Products**, rediģējiet produktu un navigējiet uz tabula **Price Variations**, lai pievienotu alternatīvas ceno periodes (piemēram, Gadu cena ar atlaides).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### 2. Pievienot Periodu izvēles lauku kasina formai {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Pāmeklējieties uz **Ultimate Multisite > Checkout Forms** un rediģējiet savu kasinas formu.

2. Pāmeklējieties līdz apakšdaļai, kur ir staps ar jūsu **Pricing Table** lauku un noklikšķiniet uz **Add new Field**.

3. Laikveida izvēles dialoga laikā noklikšķiniet uz **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfiguriējiet periodu opcijas. Katras opcijai nepieciešams:
   * **Duration** (Ilgsmiņa): Skaitlis (piemēram, `1`)
   * **Duration unit** (Ilgsmiņas vienība): Perioda veids (Dienas, Nedeles, Mēneši vai Gadi)
   * **Label** (Labetārs): Teksts, ko klientam redz (piemēram, "Mēnesīgs", "Gadu")

5. Nospiediet **+ Add Option**, lai pievienotu vairāk periodu izvēles. Šie opcijas jāatstāj atbilstošas ceno variācijai, ko Jūs konfiguriējāt savos produktos.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Izvēlieties **Period Selector Template** (Clean ir defaultais, kas izveido vienkāršu stilizētu izvēles lauku, kas gatavs custom CSS lietošanai).

7. Nospieciet **Save Field**.

#### 3. Paziņojiet laiku formu virs cenrēšanas tabulas {#step-3-position-the-field-above-the-pricing-table}

Lai nodrošinātu labāko lietotāja pieredzi, pārliecinieties, ka Laika izvēles lauka parādās **pirms** Cenrēšanas tabulas lauka jūsu kasina solījumā. Jūs varat izplūst laukus, lai mainītu viņu secību checkout form editorā. Šāda veids ļauj klientiem pirms izvēlēties fakturēšanas periodu redzēt cenām šim periodam.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Kā tas darbojas frontendā {#how-it-works-on-the-frontend}

Kad to konfiguriējat, klienti, kas apmeklē jūsu reģistrācijas lapu, redzēs periodizators virs cenrēšanas tabulas. Kad vi klikšķina uz citu fakturēšanas periodu:

  * Cenrēšanas tabula automātiski atjaunās un parāda cenas izvēlētā periodam (nepieciešama apmeklēšana).
  * Ja **Force Different Durations** ir desactivēts Cenrēšanas tabulas laukā, produkti bez cenām variācijas izvēlētā perioda laikā būs slēgti.
  * Ja **Force Different Durations** ir aktivizēts, visi produkti paliek redzami, pat ja tiem nav variācijas šim periodam (tie parādīs savas defaultas cenas).

#### Pre-selekcija fakturēšanas perioda ar URL adresi {#pre-selecting-a-billing-period-via-url}

Jūs varat arī pre-selektēt produktu un fakturēšanas periodu caur URL adresi. Ultimate Multisite atbalsta šādas URL shēmas:

  * `/register/premium` — Pre-selekcē tikai "Premium" produktu
  * `/register/premium/12` — Pre-selekcē produktu un 12 mēnešu ilgus periodu
  * `/register/premium/1/year` — Pre-selekcē produktu ar 1 gada ilgu periodu

### Šablessas izvēles lauks {#the-template-selection-field}

**Šablessas izvēles** lauks ļauj klientiem izvēlēties vietnes šabli checkout laikā. Tas tagad ir ietverts pēc defaulta **vienkāršajā solījumā** un **draudsolījumos** (multi-step) checkout form templates, kas pievienoti Ultimate Multisite v2.6.1.

#### Manas manuāli pievienošanas {#adding-the-field-manually}

Ja, ja, vai jūs strādā ar formulē, kas tika izveidots pirms v2.6.1, vai sākot no tukšas šablona:

1. Dodieties uz **Ultimate Multisite > Checkout Forms** un rediģējiet savu checkout formu.
2. Šajā solī, kur tiek savāti iegūti vietnes detaļas, noklikšķiniet uz **Pievienot jaunu lauku**.
3. No lauka tipa dialoga izvēlieties **Šablona izvēle** (Template Selection).
4. Konfiguriējiet lauku:
   - **Label** — Tituls, ko klienti redz vispārē šablonu grīzā (piemēram, "Izvēlies vietnes šablonu").
   - **Required** — Vai klientiem ir jāizvēlas šablons pirms turpinās.

#### Kā tas darbojas {#how-it-works}

Kad klienti izvēlas šablonu checkout laikā, Ultimate Multisite to izmanto savā vietnes izveidē. Šie redzamie šabloni atsaucas uz jūsu **Site Templates** sarakstu (**Ultimate Multisite > Site Templates**). Šeit parādās tikai tie šabloni, kas ir pieejami klientiem.

### Checkout-form bazas domēni (Checkout-form base domains) {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 uzskata checkout formā konfiguriētos domānu laukus **Site URL** par tīkla bazas domāniem (network base domains). Izmantojiet lauka pieejamo domānu iestatījumus, ja vēlaties, lai klienti izveidotu vietnes vienā vai vairākajās dalīto reģistrācijas domānos, piemēram `example.com` un `sites.example.com`.

Dalītie checkout-form bazas domēni ne tiek uzskatiți kā vietnieciskus custom domain mappingu. Kad klients izveido subdirektori vietni vienā no tiem bazos, Ultimate Multisite nesveido mape, kas padarītu dalīto hosti pilnīgi tās vienai vietnei. Dalītais hostis paliek pieejams citiem vietnēm, kas izmanto to pašu checkout formā bazas.

Saglabājiet custom domānu vietnieciskus mape klientiem, piemēram `customer-example.com`. Saglabājiet checkout formā bazas domānu dalīti reģistrācijas hostiem, ko vairākas vietnes var izmantot.

#### Lauka atņemšana {#removing-the-field}

Ja jūs nepiešķiriet vietnes šabli, atņemiet Šablu izvēles lauku no savas formē. Tad klienti saņems to shabli, kas ir konfiguriēts kā defaultšablis **Ultimate Multisite > Settings > Site Templates**.
