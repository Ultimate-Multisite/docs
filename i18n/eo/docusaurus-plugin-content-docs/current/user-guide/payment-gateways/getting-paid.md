---
title: Ricevado de pagoj
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ricevi pagon (v2) {#getting-paid-v2}

_**GRAVA NOTO: Ĉi tiu artikolo rilatas al Ultimate Multisite versio 2.x.**_

Ultimate Multisite havas enkonstruitan membrecan kaj fakturan sistemon. Por ke nia faktura sistemo funkciu, ni integris la plej oftajn pagajn enirejojn uzatajn en reta komerco. La defaŭltaj pagaj enirejoj en Ultimate Multisite estas _Stripe_ , _PayPal_ , kaj Mana Pago. Vi ankaŭ povas uzi _WooCommerce_ , _GoCardless_ kaj _Payfast_ por ricevi pagojn instalante iliajn respektivajn aldonaĵojn.

## Bazaj Agordoj {#basic-settings}

Vi povas agordi iun ajn el ĉi tiuj pagaj enirejoj sub la pagaj agordoj de Ultimate Multisite. Vi povas trovi ĝin irante al **Ultimate Multisite menuo > Agordoj > Pagoj.**

![Paĝo de pagaj agordoj en Ultimate Multisite montranta la panelon Pagoj](/img/config/payments-settings-page.png)

Antaŭ ol vi agordas vian pagan enirejon, bonvolu rigardi la bazajn pagajn agordojn, kiujn vi povas agordi:

**Devigi aŭtomatan renovig** **on:** Ĉi tio certigos, ke la pago aŭtomate ripetiĝos je la fino de ĉiu faktura ciklo depende de la faktura ofteco elektita de la uzanto.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontrolas ĉu la aktiva enirejo havas reuzeblan renovigan akreditaĵon antaŭ ol konservi ripetiĝantan membrecon kun aŭtomata renovigo ebligita. Renoviga akreditaĵo povas esti enireja abono, faktura interkonsento, konservita vault token, aŭ ekvivalenta reuzebla pagmetodo. Se la enirejo raportas, ke neniu uzebla akreditaĵo ekzistas, Ultimate Multisite konservas la membrecon sed malŝaltas aŭtomatan renovigon kaj registras la staton de mankanta akreditaĵo, por ke administranto aŭ subtena fluo povu peti al la kliento re-rajtigi pagon antaŭ la renoviga dato.

Ĉi tio malhelpas membrecon ŝajni aŭtomate renoviĝi kiam la enirejo povas kolekti nur unufojajn pagojn. Enirejaj aldonaĵoj devus konfirmi, ke ripetiĝantaj checkout konservas reuzeblan akreditaĵon, precipe kiam la enirejo subtenas kaj unufojan kaptadon kaj vaulted/abonajn pagajn reĝimojn.

**Permesi provperiodojn sen pag** **metodo:** Kun ĉi tiu opcio ebligita, via kliento ne devos aldoni ajnan financan informon dum la registra procezo. Ĉi tio estos postulata nur post kiam la provperiodo eksvalidiĝos.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Sendi fakturon ĉe paga konfirmo:** Ĉi tio donas al vi opcion ĉu sendi aŭ ne sendi fakturon post pago. Notu, ke uzantoj havos aliron al sia paghistorio sub sia subreteja Dashboard. Ĉi tiu opcio ne aplikiĝas al la Mana Enirejo.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Faktura numerada skemo:** Ĉi tie, vi povas elekti aŭ pagan referencan kodon aŭ sinsekvan numeran skemon. Se vi elektas uzi pagan referencan kodon por viaj fakturoj, vi ne bezonas agordi ion ajn. Se vi elektas uzi sinsekvan numeran skemon, vi devos agordi la **sekvan fakturan numeron** (Ĉi tiu numero estos uzata kiel la faktura numero por la sekva fakturo generita en la sistemo. Ĝi estas pliigita je unu ĉiufoje kiam nova fakturo estas kreita. Vi povas ŝanĝi ĝin kaj konservi ĝin por restarigi la sinsekvan fakturan numeron al specifa valoro) kaj la **fakturan numeran prefikson.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kie trovi la enirejojn: {#where-to-find-the-gateways}

Vi povas agordi la pagajn enirejojn sur la sama paĝo ( **Ultimate Multisite > Agordoj > Pagoj**). Tuj sub **aktivaj pagaj enirejoj** , vi povos vidi: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ kaj _Mana_.

![Sekcio Aktivaj Pagaj Enirejoj listiganta Stripe, Stripe Checkout, PayPal kaj Mana](/img/config/payments-active-gateways.png)

Ni havas dediĉitan artikolon por ĉiu paga enirejo, kiu gvidos vin tra la paŝoj por agordi ĝin, kiujn vi povas trovi ĉe la subaj ligiloj.

Vi povas vidi kaj redakti pagajn detalojn:

![Paga redakta interfaco](/img/admin/payment-edit.png)

Jen plena vido de la paga redakta paĝo:

![Plena paga redakta interfaco](/img/admin/payment-edit-full.png)

Jen ankaŭ plena vido de la agordoj de pagaj enirejoj:

![Plena paĝo de agordoj de pagaj enirejoj](/img/config/settings-payments-gateways-full.png)

**Agordi la Stripe-enirejon**

**Agordi la PayPal-enirejon**** **

**Agordi manajn pagojn**

Nun, se vi volas uzi _WooCommerce_ , _GoCardless_ aŭ _Payfast_ kiel vian pagan enirejon, vi devos **instali kaj agordi iliajn aldonaĵojn**.

### Kiel instali la WooCommerce-aldonaĵon: {#how-to-install-the-woocommerce-add-on}

Ni komprenas, ke _Stripe_ kaj _PayPal_ ne disponeblas en kelkaj landoj, kio limigas aŭ malhelpas uzantojn de Ultimate Multisite efike uzi nian plugin. Do ni kreis aldonaĵon por integri _WooCommerce,_ kiu estas tre populara reta-komerca plugin. Programistoj tra la mondo kreis aldonaĵojn por integri malsamajn pagajn enirejojn al ĝi. Ni profitis tion por etendi la pagajn enirejojn, kiujn vi povas uzi kun la faktura sistemo de Ultimate Multisite.

_**GRAVA:** Ultimate Multisite: WooCommerce Integration postulas ke WooCommerce estu aktivigita almenaŭ en via ĉefa retejo._

Unue, bonvolu iri al la paĝo de aldonaĵoj. Vi povas trovi ĝin irante al **Ultimate Multisite > Agordoj**. Vi devus vidi la tabelon **Aldonaĵoj**. Alklaku **Kontrolu niajn Aldonaĵojn**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Post alklako al **Kontrolu niajn Aldonaĵojn** , vi estos redirektita al la paĝo de aldonaĵoj. Ĉi tie vi povas trovi ĉiujn aldonaĵojn de Ultimate Multisite. Alklaku la aldonaĵon **Ultimate Multisite: WooCommerce Integration**.

![Paĝo de aldonaĵoj listiganta aldonaĵojn de Ultimate Multisite inkluzive de WooCommerce Integration](/img/addons/addons-page.png)

Fenestro aperos kun la detaloj de la aldonaĵo. Simple alklaku **Install Now**.

<!-- Ekrankopio neatingebla: dialogo pri detaloj de la aldonaĵo Ultimate Multisite WooCommerce Integration kun butono Install Now -->

Post kiam la instalado finiĝos, vi estos redirektita al la paĝo de kromprogramoj. Ĉi tie, simple alklaku **Network Activate** kaj la WooCommerce-aldonaĵo estos aktivigita en via reto.

<!-- Ekrankopio neatingebla: paĝo de kromprogramoj kun la ligilo Network Activate por la aldonaĵo WooCommerce Integration -->

Post ĝia aktivigo, se vi ankoraŭ ne havas la WooCommerce-kromprogramon instalitan kaj aktivigitan en via retejo, vi ricevos memorigilon.

<!-- Ekrankopio neatingebla: administra avizo memoriganta la administranton instali kaj aktivigi la WooCommerce-kromprogramon -->

Por legi pli pri la aldonaĵo WooCommerce Integration, **alklaku ĉi tie**.

### Kiel instali la aldonaĵon GoCardless: {#how-to-install-the-gocardless-add-on}

La paŝoj por instali la aldonaĵon _GoCardless_ estas preskaŭ la samaj kiel por la aldonaĵo _WooCommerce_. Bonvolu iri al la paĝo de aldonaĵoj kaj elekti la aldonaĵon **Ultimate Multisite: GoCardless Gateway**.

<!-- Ekrankopio neatingebla: paĝo de aldonaĵoj kun la aldonaĵo Ultimate Multisite GoCardless Gateway emfazita -->

La fenestro de la aldonaĵo aperos. Alklaku **Install Now**.

<!-- Ekrankopio neatingebla: dialogo pri detaloj de la aldonaĵo Ultimate Multisite GoCardless Gateway kun butono Install Now -->

Post kiam la instalado finiĝos, vi estos redirektita al la paĝo de kromprogramoj. Ĉi tie, simple alklaku **Network Activate** kaj la aldonaĵo _GoCardless_ estos aktivigita en via reto.

<!-- Ekrankopio neatingebla: paĝo de kromprogramoj kun la ligilo Network Activate por la aldonaĵo GoCardless Gateway -->

Por lerni kiel komenci uzi la pordejon _GoCardless_, **legu ĉi tiun artikolon**.

### Kiel instali la aldonaĵon Payfast: {#how-to-install-the-payfast-add-on}

Iru al la paĝo de aldonaĵoj kaj elektu la aldonaĵon **Ultimate Multisite: Payfast Gateway**.

<!-- Ekrankopio neatingebla: paĝo de aldonaĵoj kun la aldonaĵo Ultimate Multisite Payfast Gateway emfazita -->

La fenestro de la aldonaĵo aperos. Alklaku **Install Now.**

<!-- Ekrankopio neatingebla: dialogo pri detaloj de la aldonaĵo Ultimate Multisite Payfast Gateway kun butono Install Now -->

Post kiam la instalado finiĝos, vi estos redirektita al la paĝo de kromprogramoj. Ĉi tie, simple alklaku **Network Activate** kaj la aldonaĵo _Payfast_ estos aktivigita en via reto.

<!-- Ekrankopio neatingebla: paĝo de kromprogramoj kun la ligilo Network Activate por la aldonaĵo Payfast Gateway -->
