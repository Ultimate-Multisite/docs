---
title: Skráningarpóstur
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms eru einfaldleg og nýttar hátt að prófa út ólíkar nálgunar þegar þú reynir að breyta nýjum viðskiptavinum.

Ultimate Multisite 2.0 býður upp umferðarformið (Checkout Form editor) sem leysir þér til að skapa hvaða form hvernig þú vilt, með öll mögulegar feldi, vörur og mikið meira.

Til að komast í þennan eiginleika, ferðu yfir menyann Checkout Forms á vinstri hleðingu.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Á þessum eins og þessum síðu geturð þú sjá allar checkout forms sem þú hefur.

Listan táknar **Status** stöðu, svo þú getur staðfest hvar hver form er nú til að nota fyrir viðskiptavini:

| Status | Meining |
|---|---|
| **Active** | Formið getur verið nota hvað sem það sé þegar þessnildar kódinn (shortcode) eða registration síða er skoða. |
| **Inactive** | Formið er farið í lagann en er afskipt. Viðskiptavinir geta ekki fullfærð checkout með því þar sem þú hefur ekki opnað það aftur. |

Brugðu status-stæðann áður en þú breytir alþjóðlega registration ferli, sérstaklega þegar þú heldur drafta eða sæsonleg checkout forms saman við líflegar forms.

Ef þú vilt skapa nýja, bara klikka á Add Checkout Form uppstofa á síðuna.

Þú getur valdið einn af þessum þremum valkóðum sem byrjunspunkt: single step (einnstigi), multi-step (fleiri stig) eða blank (tommt). Þá klikka á Go to the Editor til að fara í útreffaljandi.

Þegar þú valdið **single step** eða **multi-step** sem byrjunspunkt, kemur formaturnir nú með **Template Selection** feldið í staðinn. Þetta feldi leysir þér til að viðskiptavinir geta valið sína vísitalm (site template) á meðan þeir eru í ferli registration. Þú getur lautið það eins og þú vilt, fjarlægja það eða breyta staðsetningu þess eins og öll annað feldi í útreffaljandi.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Eftir hver semurinn geturðu breyta eða upplýpa formum sem þú hefur að búa á með því að klikka á valkostninga undir nafni þeirra. Þar finnurðu einnig valkostningar til að kopya kortshorð (shortcode) formans eða slette formann.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Översiktur yfir chekout form editor {#checkout-form-editor-overview}

Chekout form editor býður upp umfólugt mynd fyrir byggingu skráningarforma þina. Hér er översiktur yfir hlutverki editorinn:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Breyta chekout formi {#editing-a-checkout-form}

Þú getur skráð chekout formum fyrir annarra tilganga. Í þessu dæli verður við skráningarframleiðslu.

Eftir að komið í chekout form editor, gefðu forminn nafn (sem notarð til innri vörunar) og slug (sem notarð til að skapa kortshorð, t.d.).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formar eru byggðar úr skrefum og feltum. Þú getur lagt nýtt skref með því að klikka á Add New Checkout Step (Laga nýtt chekout skref).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Á fyrstu tabinn í modalu vindauði, fylli inn innihaldi skrefið formans þíns. Gefðu þess ID, nafn og skýring. Þessi hlutir eru aðeins notað innri vörunar.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Næst, setðu sýnarlög skrefið. Þú getur velja milli "Always show" (Sjá alltaf), "Only show for logged in users" (Sjá aðeins fyrir innbyggðar notendur) eða "Only show for guests" (Sjá aðeins fyrir gjestar).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Lokað, regluleggu skreflið stíl. Þetta eru valkostningar sem ekki eru nauðsynleg.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

En nú er tími til að bæta felta í fyrstu skrefi okkar. Klikka bara á Add New Field (Laga nýtt felt) og veldu hvarð þú vilt valdið af hluta sem þú vilt.

![Steg í skjölum með feltum til betalingsskjalasjóðs](/img/config/checkout-form-step-with-fields.png)

Hvert felt hefur annarar þættir sem verður fylgt. Til þess fyrsta skrefinu veljum við "Username" (Notkunannafn) felt.

<!-- Screenshot unavailable: Vali feltgögnstíps í dráttastöðu -->

![Stillingar fyrir innihald Username felts](/img/config/checkout-form-username-content.png)

![Stillingar fyrir sýnUsername felts](/img/config/checkout-form-username-visibility.png)

![Stillingar fyrir stíl Username felts](/img/config/checkout-form-username-style.png)

Þú getur lagt í það hversu margar skref og felt sem þér þarf. Til að sýna hugbúnaðinn þina fyrir viðskiptavili til að velja eitthva, notaðu Pricing Table (Príslista) feltið. Ef þú vilt leita þínum viðskiptavinum að vali skjal sem þeir vilja nota, bætu í Template Selection (Vali skjalans) felt. Og svo framundan.

![Dráttastöðu til að bæta nýjum felti](/img/config/checkout-form-add-field-dialog.png)

_**Athugi:** username, email, password, site title (nám staðnum), site URL (staðarúrsla), order summary (samantekt á bestellu), payment (betalingsskjal) og submit button (sýn nútíma knappa) eru nauðsynleg felta til að skapa betalingsskjal._

Þegar þú ert að vinnu á betalingsskjalinu þínu, geturðu alltaf notað Preview (Fyrirspuna) knappann til að sjá hvernig viðskiptavinir skilja skjalinu. Þú getur einnig breytt milli sýn sem núverandi notandinn eða gjöfandi.

![Knapp fyrir fyrfrspuna betalingsskjalins](/img/config/checkout-form-preview-button.png)

![Modal fyrir fyrfrspuna betalingsskjalins](/img/config/checkout-form-preview-modal.png)

Lokað með Advanced Options (Áframhaldandi valdi) geturðu hannað texta fyrir "Thank You" (Takk fyrir) sínar síðu, bæta snippet-sögnum til að fylgjast með breytingum (conversions), bæta sérstök CSS í betalingsskjalinu þínu eða hætta það að sérstektum löndum.

![Advanced Options](/img/config/checkout-form-advanced.png)

Þú getur einnig mannvætt sem innleiðir (enable) eða afskipt sem innleidir (disable) betalingsskjalinn þinn með því að skipta þessum valdi á hönnunni til höndar, eða sletteftur varðeigandi skjalinu.

![Aktíva svit](/img/config/checkout-form-active.png)

Til að sýna úrformið, klikkaðu á valkominni "Delete" í formumálsstefnum:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Gleymdu ekki að hefja að lagast úrformið!

![Save button](/img/config/checkout-form-save.png)

Til að fá kortlið þitt úrformið, klikkaðu á "Generate Shortcode" og kopystu niðurstöðuna sem sýnist í modalvinnu.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Felt fyrir verðlistann {#the-pricing-table-field}

Feltinu **Pricing Table** (Verðlistinn) sýnir hugbúnaðarþjónustuna þína á úrformi, svo að viðskiptavinir geti valdið plan. Þegar þú breytist í þessu felti geturðu sett upp fleiri möguleika:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Hér er hvernig verðlistinn sýnist á frumformni skráningarsíðunni:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Verð): Veldu hvort þú vilt sýna hvern verð og hvern fyrirhuga þeirra í röð.
  * **Force Different Durations** (Forþróun á ólíkum tíma): Þegar þetta er sett upp, sýnist allar verð og fyrirhuga án þess að það sé tengt við samræmið verðfara fyrir núverandi reikningstíma. Þegar þetta er afskipt (default), eru verð og fyrirhuga sem ekki hafa ólíka verðfara fyrir valdið tíma, hýðin.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Hýða þegar plan er jákvætt valdið): Hýð verðlistann þegar plan er alveg sést á URL-inni (t.d. `/register/premium`).
  * **Pricing Table Template** (Formúlaverðlistartemplate): Veldu hvern viskjaverðlistartemplate fyrir verðlistann (Simple List, Legacy, osafn).

Ef þú hefur lagt við verð og fyrirhuga í Verðlistann áður en formið hefur innihaldið felta sem eru nauðsynleg til að fullfða úrformi þess verðsins, sýnir vinnuverkið nú varningu. Notaðu varninguna til að bæta við nauðsynlegt felta fyrir útbreiðslu eða lagast breytingar fyrir live skráningarsíðu.

### Að viðbót þriðja valandi skráningu {#adding-a-period-selection-toggle}

Ef þú hefur sett upp [Price Variations](creating-your-first-subscription-product#price-variations) á vörum þínum (t.d. mánuðar og ársprísa), geturðu bætt **Period Selection** (Vali skráningarsímska) í skjama kaupum þínum viðskiptavina. Þessi hluti sýnir einn toggle sem leyfir viðskiptavinum að skila betaldar á milli skráningarsímska, og príslista uppfærst dynamikkt í rauntime.

#### Stig 1: Sett upp Price Variations á vörum þínum {#step-1-set-up-price-variations-on-your-products}

Fyrir að bæta Period Selection hluti í skjama kaupum, verðu viss um að vörum þínum sé sett upp Price Variations. Gangi yfir í **Ultimate Multisite > Products**, breyt vöru og fer til tabinn **Price Variations** til að bæta meðferðar skráningarsímska (t.d. Árskur á verndla á verndla prís).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Stig 2: Bættu Period Selection hluti í skjama kaupum viðskiptavina {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Gangi yfir í **Ultimate Multisite > Checkout Forms** og breyt skjama kaupum þínum.

2. Skoli niður til skrefi sem heldur á hluta **Pricing Table** (Príslista) og klikka á **Add new Field** (Bæta nýtt hluti).

3. Í valmyndinni fyrir öflugan hlutaöflun, klikka á **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Sett upp skráningarsímska valkostana. Hvert val þarf:
   * **Duration** (Léganir): Númer (t.d. `1`)
   * **Duration unit** (Eining léganarinnar): Typpi skráningarsímska (Dag, Viku, Mánuð eða Ár)
   * **Label** (Miðlun): Text sem viðskiptavinir sjá (t.d. "Mánuðar", "Ársprís")

5. Klikka á **+ Add Option** (Bæta valkost) til að bæta fleiri skráningarsímska valkostana í lista. Þessi valkostir verða að passa við Price Variations sem þú sett upp á vörum þínum.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Veldu **Period Selector Template** (Clean er standardur, sem sýnir einfalt stýrande val fyrir CSS).

7. Klikk á **Save Field**.

#### Átgáfn 3: Hættu feltinn ofan bảngar fyrir verðlaun (Pricing Table) {#step-3-position-the-field-above-the-pricing-table}

Til bestu notkunarfyrirtækisins þitt er nauðsynlegt að felta feltinn Period Selection ofan Pricing Table feltins í skrefinu á kassa. Þú getur dragga felta til að breyta röðinni í útbúnaði formans fyrir kassa (checkout form editor). Þannar háttum vel sér við að viðskiptavinir fyrst velja reikningstíma og þá sjá verð fyrir þennan tíma.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Hvernig það virkar á front endi (Frontend) {#how-it-works-on-the-frontend}

Eftir að þú hefur sett upp þetta, sjá viðskiptavinir sem komast yfir skráningasíðuna þína tímavalshættu (period selector) ofan verðlabla. Þegar þeir klikka á annar reikningstíma:

  * Verður verðlabla strax uppfærð til að sýna verði fyrir valdið tíma (þarf ekki endurskráningu yfir síðuna).
  * Ef **Force Different Durations** er afskipt (disabled) á felti Pricing Table, verða vörur sem ekki hafa verðar breyting fyrir valdið tíma að vera hýsandi.
  * Ef **Force Different Durations** er aktívi (enabled), verður allir vörur sýnilegar sjá varð þau ekki hafið breyting fyrir valdið tíma (þau sýna því skilvirkni sína verð).

#### Fyrstvalinn val reikningstímas með URL-i {#pre-selecting-a-billing-period-via-url}

Þú getur einnig forstalla vöru og reikningstíma í gegnum URL. Ultimate Multisite stendur fyrir þessum URL-skjaldi:

  * `/register/premium` — Forstallar aðeins "Premium" vöru
  * `/register/premium/12` — Forstallar vöru og 12-mána tíma
  * `/register/premium/1/year` — Forstallar vöru með 1-íla tíma

### Feltur vala mallar (Template Selection Field) {#the-template-selection-field}

Feltinn **Template Selection** leyfir viðskiptavinum að velja síðu-mall fyrir kassa. Það er nú í standardhættu í **single step** og **multi-step** checkout form templates sem eru sett í Ultimate Multisite v2.6.1.

#### Að bæta felti manueel (Adding the field manually) {#adding-the-field-manually}

Ef þú ert að vinnja með form sem var sniðið fyrir v2.6.1 eða byrjaðu frá blankri skeymi:

1. Gangi í **Ultimate Multisite > Checkout Forms** og breytilekju þann checkout form.
2. Í skrefinu þar sem er safnaðar eru upplýsingar um síðuna, klikka á **Add new Field**.
3. Veldu **Template Selection** úr vali fyrir öflumögnun eða öflumögnun (field type dialog).
4. Stilla formann:
   - **Label** — Heitið sem viðskiptavinir sjá yfir gríð til temblótum (t.d. "Veldu símtiltembla").
   - **Required** — Það hvort þurfa viðskiptavinir að velja tembla áður en þeir fari aftur.

#### Hvernig þetta virkar {#how-it-works}

Þegar viðskiptavinur velur tembla á meðan hann er í ferli uppsetningar sínu, notar Ultimate Multisite það til uppsetningar nýr síðunnar hans. Temblurnar sem sýnast koma frá lista **Site Templates** þínum (**Ultimate Multisite > Site Templates**). Innur temblar eru markmiðarðar fyrir viðskiptavini.

### Checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 hugsar á domænar sem eru sniðin í **Site URL** skými þessar formans sem nýtingar netverkssíða (network base domains). Notaðu stillingar fyrir tilfelli meðskiptavina vilja að þeir skapa síður undir einu eða fleiri samaðar skráningadomænar, eins og `example.com` og `sites.example.com`.

Sjálfvirkir base domains fyrir checkout-form eru ekki hugsa á sem sniðin domænu fyrir hverja síðuna. Þegar viðskiptavinur skapar undirskými síða á einum af þessum base domainum, hugsar Ultimate Multisite ekki upp skráningadomænna skráningarekdóma sem myndi gera sama netverkssíðu til að tildila bara þann eina síðuna. Sama netverkssíða er framkvæmt fyrir samræmi síður sem nota sama base domain fyrir checkout form.

Halddu sniðin domænar fyrir sniðin hostar fyrir hverja viðskiptavin, eins og `customer-example.com`. Halddu base domains fyrir samræmi skráningadomænu sem mikið síður geta notið.

#### Fjara skýmið {#removing-the-field}

(Lækna skýmið)

Ef þú hefur ekki tilboðuð vísvaldir staðlaformateins (site templates), fjarlægðu fältið Template Selection úr skjalsins þinn. Klientir fær þá það formatins sem er settur sem vísvaldi staðlaformateinn undir **Ultimate Multisite > Settings > Site Templates**.
