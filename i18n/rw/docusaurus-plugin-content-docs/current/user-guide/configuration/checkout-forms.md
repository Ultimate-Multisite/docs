---
title: Urugero rw'Urugero rwa Gutera ku Ubwumvikane
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Fomu za Checkout

Fomu za Checkout ni uwezekano rahisi na wenye kubadilika wa kujaribu mbinu tofauti wakati unajaribu kuhamasisha wateja wapya.

Ultimate Multisite 2.0 inatoa mhariri wa Fomu ya Checkout unaokuruhusu kuunda idadi yoyote ya fomu unayotaka, na sehemu tofauti, bidhaa zinazotolewa, n.k.

Ili kufikia kipengele hiki, nenda kwenye menyu ya Checkout Forms, upande wa kushoto wa barua (side-bar).

![Checkout Forms list](/img/config/checkout-forms-list.png)

Kwenye ukurasa huu, unaweza kuona fomu zote za checkout ulizozifanya.

Meza ya orodha inajumuisha safu ya **Status** ili uweze kuthibitisha kama kila fomu iko tayari kwa wateja:

| Status | Maana |
|---|---|
| **Active** | Fomu inaweza kutumika mahali popote unapoichangia shortcode au ukurasa wa usajili. |
| **Inactive** | Fomu imehifadhiwa lakini imezimwa. Wateja hawawezi kukamilisha checkout nazo hadi utaiweze kuwasha tena. |

Tumia safu ya status kabla ya kuhariri mtiririko wa usajili unaofunguliwa kwa umma, hasa wakati unahifadhi fomu za checkout za rasimu au za msimu pamoja na fomu zako za moja kwa moja (live forms).

Ikiwa unataka kuunda mpya, bonyeza Add Checkout Form juu ya ukurasa.

Unaweza kuchagua mojawapo ya chaguo hizi tatu kama sehemu yako ya kuanzia: single step (hatua moja), multi-step (hatua nyingi), au blank (tupu). Kisha, bonyeza ili Kuenda kwenye Editor.

Unapochagua **single step** au **multi-step** kama sehemu yako ya kuanzia, mfumo wa fomu sasa unafanya muundo wa awali unajumuisha sehemu ya **Template Selection**. Sehemu hii inaruhusu wateja wako kuchagua template la tovuti wakati wa mchakato wa usajili. Unaweza kuacha hivyo kama ilivyo, kuiondoa, au kuiweka mahali tofauti kama sehemu nyingine yoyote kwenye editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Gusobanzi, ushaka gukora cyangwa gukoresha amashobora (forms) ugiye gutangira, uba mushobora gukora cyangwa gukopya amashobora yawe yakurikira ubwumvikane bwa mu cyongereza. Uba mushobora gukora cyangwa gukopya amashobora yawe yakurikira ubwumvikane bwa mu Kinyarwanda, kandi uzi ko ntabwo nshobora gukoresha ibindi byo.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Umuco w'Urugero rw'Urugero rwa Checkout Form

Urugero rw'Urugero rwa checkout form rugira uburyo bwo gukora amashobora yawe y'ubwoko bwose. Icyo ni umuco w'uburyo bwo gukoresha:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Gukora Checkout Form

Uba mushobora gukora amashobora ya checkout form mu byiciro bitandukanye. Mu gihe cyacu, twagira gukora amashobora y'ubwoko (registration form).

Nyuma yo gukoresha urugero rw'Urugero rwa Checkout Form, ugira gufata izina ku mushobora yawe (izina ryitwa mu gihe cyose bishobora gukoreshwa mu gutandukanya), kandi ugira slug (iki gice kigishamo cyo gukora shortcode, umubwoko).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Amashobora yitwa n'amashobora (forms) yari yifite ibyiciro n'ibyo (steps and fields). Uba mushobora gushyira ibyo by'uko cyiza mu gihe kigishamo kigishamo (step) uburyo bwo gukoresha "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Ku gihe cyo cyo mbere mu modal window, ugira gufata ubushobozi bw'ubwoko (content) bw'uko cyiza kigishamo kigishamo. Ufata ID, izina n'ibyo byo bifite uburyo bwo gukoresha mu gihe cyose.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Nyuma, ugira gufata ubwumvikane bw'uko kigishamo kigishamo. Uba mushobora gukoresha "Always show" (gukoreshwa mu gihe cyose), "Only show for logged in users" (gukoreshwa ku bashobora bafite aka kanya), cyangwa "Only show for guests" (gukoreshwa ku bashobora batabone).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Uburyo bwo gukoresha uburyo bw'uko kigishamo kigishamo. Ibi ni ibyo byo bifite ubwumvikane (optional fields).

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Ubu, ni igihe cyo gushyira amashobora mu gihe kigishamo kigishamo cyacu. Ufata "Add New Field" kandi ufata uburyo bwo section wifuza.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Iki cyo cyo gukoresha, byo gukoresha uburyo bwo gukora checkout form.

Iki gice cy'umwihariko, twagize "Username" field.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Ushobora gushyira uburyo bwo gukoresha cyangwa uburyo bwo gukoresha cyo gukoresha. Uko ushaka guhuza ibyo uzi, uburyo bwo gukoresha Pricing Table field. He uzi ko ushaka ko abakoresha wako bashobora gushyira template, ushaka guhuza Template Selection field. Nko hari ibindi byo.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Urugero:** username, email, password, site title, site URL, order summary, payment, n'ibyo bishobora gukoresha ni ibyo byiza kandi bifite ubwako kugira ngo utoretse checkout form._

Iyo ugiye gukora checkout form yawe, ushaka gukoresha Preview button kugira ngo umenye ko abakoresha wako bashobora kubona form. Ushobora guhuza hagati y'ubwumvikane bwo umuntu wari wako cyangwa umuntu wari wari wako.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Uburyo bwo gukoresha, ku Advanced Options ushaka guhuza uburyo bwo kuvuga kuri "Thank You" page, gushyira snippets kugira ngo utoretse conversions, gushyira CSS cy'umwihariko ku checkout form yawe cyangwa kwizera ibi mu mahanga.

![Advanced Options](/img/config/checkout-form-advanced.png)

Ushobora kandi guhuza cyangwa guhagarara checkout form yawe uburyo bwo gukoresha ubwako bishobora gukoreshwa ku column ya mbere, cyangwa ugahagarara mu buryo bw'umwihariko ibyo.

![Active toggle](/img/config/checkout-form-active.png)

Kugera umuhoraho (form) kugabanya, gukoresha uburyo bwo gufata (delete option) mu buryo bwo gukora umuhoraho:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Nta wumva kwigira ngo umuhoraho wanyu!

![Save button](/img/config/checkout-form-save.png)

Kugera ku muryango wa shortcode (shortcode) w'umuhoraho, gukoresha uburyo bwo gufata (click to Generate Shortcode) kandi ugutegura uburyo y'ibyo utagira mu modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Uburyo bw'Icyemezo cy'Urufi (The Pricing Table Field)

Icyemezo cy'Pricing Table' kigisha ibintu byawe binyuze mu uhoraho rwo gukora umuhoraho kugira ngo abakoresha bashobore kubona ubushobozi bw'ibyo abakoresha bashobora gutera. Iyo utagira uburyo bwo gufata (edit) icyemezo cyangwa se, ushobora gukora ibintu byinshi:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Iki ni uburyo muho umuhoraho w'ibyo bishobora kubona ku rwego rwa mbere (frontend registration form):

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Ufata ibintu byawe bashobora kubona kandi uburyo bwo babone mu gukoresha umuhoraho.
  * **Force Different Durations**: Iyo ugiye gukora (enabled), ibintu byose bigisha n'ibyo bitewe n'uko bifite ubushobozi bw'amashyirahamwe (price variation) ku gihe cyo ushyize mu gutegura. Iyo utagira uburyo bwo gufata (disabled - default), ibintu byawe bigisha n'ibyo bitewe n'uko bifite ubushobozi bw'amashyirahamwe ku gihe cyo ushyize.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Iyo ugiye gukora (hide), icyemezo cy'Pricing Table' kigisha iyo umusaruro w'ibintu yashobaye gutegwa binyuze mu URL (urugero: `/register/premium`).
  * **Pricing Table Template**: Ufata uburyo bw'ubwoko (visual template) bwo Pricing Table (Simple List, Legacy, n'ibindi).

Iyo utagira ibintu byawe bashobora kubona mu Pricing Table mbere y'umuhoraho kugira ngo umuhoraho ufungura ibintu bikorwa ku gihe cyo gukemura ibyemezo by'umuhoraho bwo uko ibintu byashoboka gutera. Ufata uburyo bwo gufata (warning) kugira ngo utagire icyemezo cyangwa se, ugenda gukora ibintu byo kubyara mu gihe cyo gukoresha umuhoraho w'umuhoraho w'ibyo bishoboka gutera.

### Kugera U Gutera Icyemezo cyo Gukoresha Period Selection Toggle

Iyo wumva [Price Variations](creating-your-first-subscription-product#price-variations) ku nshingiro ry'ibintu byawe (urugero, uburyo bwo gukoresha imyaka n'imyaka y'amashuri), ushobora gushyira **Period Selection** cyangwa ishyirwaho mu gihe cyo gutera umukono w'ubwumvikane (checkout form). Icyemezo cyo gukoresha igice kishobora abakoresha bafite uburyo bw'ibyo baboneho kugira ngo bashobore guhindura imyaka y'ibyo baboneho, kandi ishyirwaho ry'ibintu byawe (pricing table) cyagira uburyo bwo gukunda mu gihe cyose.

#### Icyemezo 1: Gukoresha Price Variations ku Bintu Byawe

Mbere yo gushyira Period Selection, ushobora kumenya ko ibintu byawe (products) yashobora gukoresha Price Variations. So mu **Ultimate Multisite > Products**, gukoresha uburyo bwo gukoresha umuntu w'ibintu byawe, kandi ugenda ku tab ya **Price Variations** kugira ngo ushyire imyaka y'ibyo baboneho (urugero, imyaka n'imyaka y'amashuri y'ubwumvikane).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Icyemezo 2: Gushyira Period Selection mu Checkout Form Yawe

1. So mu **Ultimate Multisite > Checkout Forms** kandi gukoresha uburyo bwo gukoresha umuntu w'ibintu byawe (edit your checkout form).

2. Genda ku gihe cyo kumenya ko hari ishyirwaho ry'Icyemezo cyo Gutera Umukono W'ubwumvikane (**Pricing Table** field) kandi ugukoresha **Add new Field**.

3. Mu dialog showing field type selection, gukoresha **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Gukoresha uburyo bwo gutera imyaka y'ibyo baboneho (Configure the period options). Icyemezo cyose cyashobora gukoresha:
   * **Duration**: Icyemezo cyo mu gihe (urugero, `1`)
   * **Duration unit**: Uburyo bwo mu gihe (Days, Weeks, Months, cyangwa Years)
   * **Label**: Inyandiko abakoresha baboneho (urugero, "Monthly", "Annual")

5. Gukoresha **+ Add Option** kugira ngo ushyire imyaka y'ibyo baboneho (add more period choices). Icyemezo cyose cyashobora gukoresha mu buryo bwo gukoresha Price Variations wariweye ku intuwa byawe.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Gukoresha **Period Selector Template** (Clean ni uburyo bw'ubwumvikane, kandi bishobora gukoresha selector yisanzwe itandukanye n'ibyo mu CSS).

7. Click **Save Field**.

#### Igice 3: Hagarweye Icyo Cyangwa Icyo Cyiza ku Rutonde Rwo Ubwujobozi (Pricing Table)

Kugira ngo umuntu atangira neza, kugira ngo igice cyo Gukoresha Icyiciro cy'Period Selection kigire **mu gihe cyo gukoresha** Pricing Table, ugomba kwihangira. Ufite uburyo bwo gukora ibyo igice cyangwa ugaragaza mu form ya checkout editor. Ibi bikorwa kugira ngo abakoresha bashobore gukoresha umwujiza (billing period) mbere yemeza ubunyangamugayo bw'ibyo bishobora kuboneka.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Uburyo Bwo Gukorwa ku Frontend (Urugero Rw'Abakoresha)

Icyiza cyane, abakoresha bashobora kubona period selector mu gihe cyo gukoresha ubuzima bwo kwandikira kuri registration page yawe. Iyo bafite uburyo bwo gukoresha umwujiza (billing period) w'ibindi:

  * Pricing table igaragara mu gihe cyo gukoresha umwujiza (period) kuko nta kuboneka mu gihe cyo kwandikira cyangwa gukora page y'ibindi.
  * Niba **Force Different Durations** itaboneka kuri Pricing Table, ibintu by'ibindi bishobora kuba bifite ubwujiza bw'umwujiza (variation) mu gihe cyo gukoresha umwujiza (period), ibyo byaba bifite uburyo bwo kuboneka.
  * Niba **Force Different Durations** itaboneka, ibintu byose bigaragara kandi ntabwo bifite ubwujiza bw'umwujiza (variation) mu gihe cyo gukoresha umwujiza (period), biboneka uburyo bwa mbere.

#### Gukoresha Umwujiza (Billing Period) Mu URL

Ufite uburyo bwo gukoresha ibintu by'ibindi kandi mu URL. Ultimate Multisite yishobora kubona uburyo bwo gukorera:

  * `/register/premium` — Ibi bikorwa kugira ngo umuntu atangire "Premium" product gusa.
  * `/register/premium/12` — Ibi bikorwa kugira ngo umuntu atangire ibintu by'ibindi kandi n'umwujiza (duration) mu mwaka wa 12.
  * `/register/premium/1/year` — Ibi bikorwa kugira ngo umuntu atangire product na umwujiza (duration) w'umwaka 1.

### Igice cyo Gukoresha Template (Template Selection Field)

Igice cyo **Template Selection** kigaragaza abakoresha bashobora gukoresha template ya site mu gihe cyo gukoresha ubuzima bwo kwandikira. Icyo cyangwa igice cyo gukoresha template cyari cyiza, cyaboneka mu gihe cyo gukoresha ubuzima bwo kwandikira (single step) n'ubuzima bwo gukoresha ubuzima bwo kwandikira (multi-step) byihangiraho mu Ultimate Multisite v2.6.1.

#### Gukoresha Igice Cyangwa Gukorera Mu Gitonde

(Urugero w'ibyo bishobora kuba bifite uburyo bwo gukorera igice cyo Template Selection)

Iyo wumva n'ubwujuzi w'ibanga (form) yashyirwe mbere ya v2.6.1, cyangwa yashyirwe ku template runaka:

1. Tuma **Ultimate Multisite > Checkout Forms** kandi ugira uburyo bwo gukoresha checkout form yawe.
2. Mu igice cyo gutanga ibyemezo by'ubwoko bw'ibanga (site details), kira **Add new Field**.
3. Icyemeza **Template Selection** mu dialogu y'ibanga (field type).
4. Gukoresha ibi:
   - **Label** — Ubutumwa rwa mbere abakoresha babona ku grid ya template (urugero: "Shyira uburyo bwo site").
   - **Required** — Icyemezo cy'uko abakoresha bashobora gukoresha template mbere y'uko bashobora kwiga.

#### Uburyo bwo gukora iki

Iyo umukoresha atanga template mu gihe cyo gukora checkout, Ultimate Multisite igaragaza uburyo bw'ibintu byo gukoreshwa mu gihe cyo gutanga site yashya yawe. Icyemezo cyo template byarimo ku gukoreshwa bishobora ku gukoresha mu rurimi rw'Site Templates (Ultimate Multisite > Site Templates). Gusa template zishobora gukoreshwa n'abakoresha zishobora kubona hano.

### Icyemezo cyo checkout-form base domains

Ultimate Multisite v2.13.0 igaragaza ibi byo gukoreshwa mu gihe cyo gutanga site **Site URL** cyangwa ibyo bishyirwe ku checkout form nk'ibanga ry'ubwoko bw'ubwoko (network base domains). Gukoresha uburyo bwo gukoresha ibi byo domain zishobora kubona iyo uvuga wifuza abakoresha bashobora gukora sites mu gihe cyo gutanga ibyo byo registration by'umuryango n'ibindi, nk'ibyo `example.com` kandi `sites.example.com`.

Icyemezo cyo checkout-form base domains sitari igaragaza uburyo bwo gukoresha domain zishobora kubona mu gihe cyo gutanga site runaka (per-site custom domain mappings). Iyo umukoresha yugira site mu gihe cyo gutanga ibi byo base, Ultimate Multisite sitari igaragaza record ry'domain yashyirwe ku host wose uburyo bwo gukoreshwa. Host yose (shared host) itarimo kuba ihinduwe kandi itarimo kubaho abandi sites bashobora gukoresha checkout form base yashyirwe.

Gukoresha domain zishobora kubona mu gihe cyo gutanga site runaka, nk'ibyo `customer-example.com`. Gukoresha ibi byo checkout-form base domains sitari igaragaza host zishobora gukoreshwa mu gihe cyo gutanga sites nyinshi.

#### Guhagarira ibi (Removing the field)

Ntabwo wumukoresha uburyo bwo gukoresha site templates (template), ushaka ugire umugambi wa "Template Selection" mu form yawe. Abantu bazakurikiza template yose itangwa mu gihe cy'Ultimate Multisite > Settings > Site Templates.
