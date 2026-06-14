---
title: Gajiĝi monon
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Pago (v2)

_**IMPORTANTE NOTA: Ĉi tiu artikolo referas al Ultimate Multisite versio 2.x.**_

Ultimate Multisite havas integritan sistemon por aĉetantoj kaj fakturadon. Por nia fakturaj sistemoj funkcii, ni havin integritajn laŭdistojn de la plej komunitaj pagamentaj portoj uzataj en e-komerco. La defaultpagamentaj portoj en Ultimate Multisite estas _Stripe_, _PayPal_ kaj Manua Pagado. Vi ankaŭ povas uzi _WooCommerce_, _GoCardless_ kaj _Payfast_ por ricevi pagojn per instalado de iliaj respektivaj add-ons.

## Baza Rekonfigurado

Vi povas konfiguri ĉutakajn ĉi tiujn pagamentajn portojn sub la fakturaj ŝanĝoj de Ultimate Multisite. Vi povas trovi ilin per fari **Ultimate Multisite menu > Settings > Payments.**

![Pagita rekonfigurado en Ultimate Multisite montrante la panelon Pagoj](/img/config/payments-settings-page.png)

Anta ke vi montros vian pagamentan porton, kontrolu la bazajn pagamentajn ŝanĝojn, kiujn vi povas konfiguri:

**Force auto-rene** **w:** Tio sinigos, ke la pagado aŭtomate rekuros ĉiam al la finon de ĉiu fakturaj ciro, dependante de la frekvenco de fakturo, kiun uzanto elektis.

<!-- Screenshot unavailable: Togolo Force Auto-Renew sur la paĝo de Pagamentaj ŝanĝoj -->

Ultimate Multisite v2.13.0 kontrolas ĉu la aktiva portoj havas reusablajn renoviĝajn kredencojn antaŭ salvado de rekuranta aĉetanto kun aŭtomata renovigo aktivita. Renoviga kredenco povas esti portoj subskribcio, fakturaj akordo, salvita vault token, aŭ ekvivalentaj reusablaj pagamentaj metodoj. Se la portoj raportas, ke ne ekzistas uzebla kredenco, Ultimate Multisite salvas la aĉetanton sed desligas la aŭtomatan renovigon kaj registras la kondicion de mankanta-kredenco, por ke administratora aŭ suportflujo petu la klienton reautorizi pagadon antaŭ la data de renovigo.

Ci tio per eviti, ke membra neparaitre kiel aŭtomate renoviĝi, se la gateway nur povas kolekti pagoj unfoje. Gateway add-ons devas konfirmui ke checkout-oj rekurantaj konservas kredencian elementon reutilizablean, precipe kiam la gateway suportas bone unufojan kapĉon kaj vault/subskribecajn metodojn de pago.

**Permiti provi sen metodo de pago** **metodo:** Kun ĉi tiu opcio aktiva, via klient ne devas diri finvivej pri financaj informoj dum la registriĝo. Tio demandiĝos nur ĉiam, kiam la provizio finiĝas.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Deli fakturon sur konfirma pagon:** Ĉi tio donas al vi opcio, ĉu vi sendas fakturon post pago aŭ ne. Notu, uzantoj alcastas sin al siaj historio de pago sub sia dashboard de la subsite. Ĉi tiu opcio ne aplika al Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sistemo por numerado de fakturo:** Ĉi tio, vi povas elekti bone referenckodon de pago aŭ sekvencan numeran sistemon. Se vi elektas uzi referenckodon de pago por viaj fakturoj, vi ne bezonas konfigurui rien. Se vi elektas uzi sekvencan numeran sistemon, vi devas konfigurui la **sekva fakturoj numero** (Ĉi tiu numero wirdu uzata kiel la fakturoj numero por la sekva fakturo generita sur la sistemo. Ĝi plibendas per unu ĉiam, kiam nova fakturo estas kreita. Vi povas ŝanĝi ĝin kaj konservi ĝin por reaseti la sekvan numeron de fakturo al specifita valoro) kaj la **prefiko de fakturoj numero.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ĉu trovi la gateway'oj:

Vi povas konfiguri la pagamentajn gateway'ojn sur la sama paĝo (**Ultimate Multisite > Settings > Payments**). Tretaj al **aktiva pagamentaj gateway'oj**, vi bone vidos: _Stripe_, _Stripe_ Checkout, _PayPal_ kaj _Manual_.

![Aktiva Pagamentaj Gateway'oj sekcio listanta Stripe, Stripe Checkout, PayPal kaj Manual](/img/config/payments-active-gateways.png)

Ni havas apartan artikolon por ĉiu pagamentaj gateway, kiu guidos vin per la paŝojn de tiu konfigura, kiun vi povas trovi sur la linkoj al unu supermeso.

Vi povas vidi kaj modifi pagamentajn detalojn:

![Pagamento modifigo interfaço](/img/admin/payment-edit.png)

Jen kompleta vidigo de la paĝo de modifigo de pagamento:

![Kompleta interfaço de modifigo de pagamento](/img/admin/payment-edit-full.png)

Jen ankaŭ kompleta vidigo de la ŝanĝoj de pagamentaj gateway'oj:

![Kompleta paĝo de ŝanĝoj de pagamentaj gateway'oj](/img/config/settings-payments-gateways-full.png)

**Konfiguri la Stripe gateway**

**Konfiguri la PayPal gateway**** **

**Konfiguri manualajn pagamentojn**

Sekure, se vi volas uzi _WooCommerce_, _GoCardless_ aŭ _Payfast_ kiel vian pagamentaj gateway'oj, vi bezonas **instali kaj konfiguri iliajn add-on'oj**.

### Kiel instali la WooCommerce add-on:

Ni komprenas, ke _Stripe_ kaj _PayPal_ ne estas disponibile en certaj paŝoj kiuj limigas aŭ obstaklas Ultimate Multisite uzantojn efike uzi nian pluginon. Tial ni kreis add-on'on por integri _WooCommerce_, kiu estas tre populara e-komerco plugino. Programistoj ĉie sur la mondo kreis add-on'ojn por integri diversajn pagamentajn gateway'ojn al ĝi. Ni uzas tijn kapablon por elstendi la pagamentajn gateway'ojn, kiujn vi povas uzi kun la fakturaj sistemoj de Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce-integation bezorgt dat WooCommerce op minimaal geactiveerd moet zijn op uw hoofdsite._

Ga eerst naar de add-ons pagina. U kunt deze vinden door naar **Ultimate Multisite > Settings** te gaan. U zou de tabel met de **Add-ons** moeten zien. Klik op **Check our Add-ons**.

<!-- Screenshot unavailable: Tabel met add-ons in de Ultimate Multisite Instellingen zijbalk met de link Check our Add-ons -->

Nadat u op **Check our Add-ons** heeft geklikt, wordt u doorgestuurd naar de add-ons pagina. Hier kunt u alle Ultimate Multisite add-ons vinden. Klik op het add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons pagina met een lijst van Ultimate Multisite add-ons inclusief WooCommerce Integration](/img/addons/addons-page.png)

Er verschijnt een venster met de details van het add-on. Klik gewoon op **Install Now**.

<!-- Screenshot unavailable: Dialoogvenster met details van het Ultimate Multisite WooCommerce Integration add-on en de Install Now knop -->

Nadat de installatie is voltooid, wordt u doorgestuurd naar de plugins pagina. Klik hier gewoon op **Network Activate** en het WooCommerce add-on wordt geactiveerd op uw netwerk.

<!-- Screenshot unavailable: Plugins pagina met de Network Activate link voor het WooCommerce Integration add-on -->

Nadat u dit heeft geactiveerd, ontvangt u een herinnering als u nog steeds geen WooCommerce plugin heeft geïnstalleerd en geactiveerd op uw website.

<!-- Screenshot unavailable: Admin melding die de beheerder herinnert om de WooCommerce plugin te installeren en te activeren -->

Om meer te lezen over het WooCommerce Integration add-on, **klik hier**.

### Hoe u het GoCardless add-on installeert:

La paŝoj por instali la add-on _GoCardless_ estas prate la same por la _WooCommerce_ add-on. Altiĝu al la paĝo de add-on'oj kaj selektu la add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

La finestra de la add-on moviĝos. Kliku sur **Install Now** (Instali nun).

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Post kiam instalado finas, vi estus redirekti al la paĝo de plugin'oj. Tial, kliku simple sur **Network Activate** (Aktiveti reton). La _GoCardless_ add-on estu aktiva sur via retono.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Por lerni, kiel komenci kun la _GoCardless_ gateway, **lea ĉi ti artikolon**.

### Kiel instali la Payfast add-on:

Altiĝu al la paĝo de add-on'oj kaj selektu la add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

La finestra de la add-on moviĝos. Kliku sur **Install Now** (Instali nun).

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Post kiam instalado finas, vi estus redirekti al la paĝo de plugin'oj. Tial, kliku simple sur **Network Activate** (Aktiveti reton), kaj la _Payfast_ add-on estu aktiva sur via retono.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
