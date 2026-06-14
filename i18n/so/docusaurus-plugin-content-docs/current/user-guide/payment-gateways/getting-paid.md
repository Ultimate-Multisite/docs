---
title: Waxaan la helayaa lacagta
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Wax-ka Lacag (v2)

_**Fadlan Muhiim ah: Qoraalkan wuxuu la xiriira Ultimate Multisite nooca 2.x.**_

Ultimate Multisite waxay leedahay nidaam isbeddel iyo lacag bixinta oo ku dhex jira. Si nidaamkaaga lacag bixinta uu shaqeeyo, waxaan isku dhaafsiiyay hababka ugu caansan ee loo isticmaalo e-commerce. Hababka lacag bixinta ee default-ka Ultimate Multisite waa _Stripe_, _PayPal_, iyo Lacag Bixinta Qalbiga (Manual Payment). Waxaad sidoo kale isticmaali kartaa _WooCommerce_, _GoCardless_ iyo _Payfast_ adigoo ku soo dejinaya add-ons-yadeed.

## Dejitaanka Aasaasiga ah

Waxaad dejin kartaa mid kasta oo ka mid ah hababka lacag bixintaas iyadoo la isticmaalayo dejinta lacag bixinta ee Ultimate Multisite. Waxaad u heli kartaa adigoo awoodda ku socota **Ultimate Multisite menu > Settings > Payments.**

![Fax-ka dejinta lacag bixinta ee Ultimate Multisite oo muujinaya dashboard-ka Lacag Bixinta](/img/config/payments-settings-page.png)

Ka hor intaadan dejin habka lacag bixintaada, fadlan eeg dejinta aasaasiga ah ee aad dejin karto:

**Force auto-rene** **w:** Tani waxay hubinaysaa in lacag bixinta si toos ah ay dib u soo noqoto dhammaadka kila mar oo la xiriira inta lagu jiro habka lacag bixinta uu isticmaalay isticmaaluhu.

<!-- Screenshot unavailable: Dejitaanka Force Auto-Renew ee fax-ka dejinta lacag bixinta -->

Ultimate Multisite v2.13.0 wuxuu hubinayaa in habka la maray (active gateway) uu leeyahay wax dib u isticmaali karo oo cusub ka hor inta aan lagu kaydiyo isbeddel dib u soo noqonaya (recurring membership) oo leh auto-renewal oo la furay. Waxaa laga yaabaa in dib u isticmaalidkaas ay tahay ciyaarta habka lacag bixinta, heshiiska lacag bixinta, token-ka vault-ka la kaydiyay, ama habka lacag bixinta dib u isticmaali karo oo la mid ah. Haddii habka la maray uu sheego inuusan jirin wax loo isticmaali karo (no usable credential), Ultimate Multisite wuxuu kaydiyaa isbeddelkaas laakiin wuxuu ka hor-u qaadaa auto-renewal-ka wuxuuna diiwaangeliyay xaaladda "missing-credential" si maamulaha ama habka taageerada uu weydiiyo macmiilka inuu dib u ogolaado lacag bixinta ka hor taariikhda dib u soo noqoshada.

**Inaad u oggolaan karto trial-yada iyadoo aan la isticmaalin hab lacag ah:** **Habka lacagta:** Marka aad furto fursaddaasi, macaamiishaada ma baahnayn inay bixiya macluumaad maaliyadeed inta lagu jiro habka diiwaangelinta. Tani waxay u baahan tahay kaliya markii muddo trial-ka ay dhammaato.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**U dir furaashka marka lacagta la xaqiijiyo:** Tani waxay kuu siinaysaa fursad inaad go'aansato in la dirto furaash (invoice) ama aan la dirno ka dib markii lacagta la bixiyo. Xusuusnow in isticmaalayaashu ay heli karaan taariikhda lacagta la bixiyay iyadoo ay ku jiraan dashboard-ka subsite-ka (subsite dashboard). Tani ma awooddo Gateway-ga Muhiimka ah (Manual Gateway).

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Qaabdhismeedka lambarka furaashka:** Halkan, waxaad dooran kartaa mid ka mid ah koodka faahfaahin lacagta (payment reference code) ama qaab sequential (lambaro isku xiran). Haddii aad doorato inaad isticmaasho koodka faahfaahin lacagta ee furaashkaaga, ma baahnaysid inaad wax kale ku hagaajiso. Haddii aad doorato in aad isticmaasho qaab sequential, waxaad u baahan doontaa inaad hagaajiso **lambarka furaashka xiga** (Lambarkan ayaa loo isticmaali doonaa lambarka furaashka ee furaashka xigta oo ay soo saarto nidaamka. Wuxuu kordhayaa hal mar marka la abuuro furaashka cusub. Waxaad isbedeli kartaa oo aad kaydsato si aad u dib u noqoto lambarka furaashka sequential ee gaar ah) iyo **muhiimadda lambarka furaashka (invoice number prefix)**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Halka me kaalinta (gateways) aad ka heli kartaa:

Waxaad ku samayn kartaa gateway-yada lacagta (payment gateways) bogga isku midka ah (**Ultimate Multisite > Settings > Payments**). Hoose oo **active payment gateways** (gateway-yada lacagta hawlgalka ah) ka hoose, waxaad arki doontaa: _Stripe_, _Stripe_ Checkout, _PayPal_ iyo _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Waxaan kuu diyaariyay maqaal gaar ah oo ku saabsan gateway lacag kasta oo kaa caawin doona tallaabooyinka samaynta, kaasoo aad ka heli karto xiriirka hoose.

Waxaad arki kartaa waxyaabaha faahfaahanka lacagta (payment details) oo aad hagaajin kartaa:

![Payment edit interface](/img/admin/payment-edit.png)

Halkan waa aragti dhammaystiran ee bogga hagaajinta lacagta:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Waxa kale oo halkan waxaa ku jira aragti dhammaystiran oo ku saabsan settings-ka payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Samaynta Stripe gateway-ga**

**Samaynta PayPal gateway-ga**** **

**Samaynta lacagta aan la siin (manual payments)**

Hadda, haddii aad rabto inaad isticmaasho _WooCommerce_, _GoCardless_ ama _Payfast_ sidii gateway-kaaga lacagta, waxaad u baahan doontaa inaad **samayso oo aad hagaajiso add-ons (add-ons) ee ay leeyihiin**.

### Sida loo samaynayo WooCommerce add-on-ka:

Waxaan fahannaa in _Stripe_ iyo _PayPal_ aan la heli karin qaar ka mid ah wadamada, taasoo xaddidan ama adag u ahay isticmaalayaasha Ultimate Multisite inay si hufan u isticmaalaan plugin-keena. Sidaas darteed waxaan samaynay add-on oo isku dhafan _WooCommerce_, kaas oo ah plugin e-commerce oo aad loo jecel yahay. Waxaa ay horumariyeyaasha dunida abuureen add-ons si ay ula jaanqaadaan gateway-yada lacagta kala duwan ee la isticmaalo. Waxaan ka faa'iideystay arrintan si aan u ballaarinno gateway-yada lacagta aad isticmaali karto nidaamka bixinta (billing system) ee Ultimate Multisite.

**MUHIIMAD:** Ultimate Multisite-ka isku-dhaafidda (Integration) siinayaa waxay u baahan tahay in WooCommerce uu ugu horreeyo (activated) website-kaaga oo dhan.

Marka hore, fadlan tag bogga add-ons-ka (add-ons page). Waxaad ka heli kartaa iyadoo aad tagaysid **Ultimate Multisite > Settings**. Waxaad arki doontaa miiska Add-ons-ka. Guji **Check our Add-ons** (Hubi Add-ons-keena).

<!-- Screenshot unavailable: Miiska add-ons-ka ee Ultimate Multisite Settings sidebar-ka oo leh xiriirka Check our Add-ons -->

Marka aad gujiso **Check our Add-ons**, waxaad la wareegi doontaa bogga add-ons-ka. Halkan waxaad ka heli kartaa dhammaan add-ons-ka Ultimate Multisite. Guji add-on-ka **Ultimate Multisite: WooCommerce Integration**.

![Bogga add-ons-ka oo muujinaya add-ons-ka Ultimate Multisite oo ay ku jirto WooCommerce Integration](/img/addons/addons-page.png)

Waxaa soo muuqan doonaya daaqad (window) oo leh faahfaahinta add-on-ka. Si kastaba ha ahaatee, guji **Install Now** (Ortaalka Hadda).

<!-- Screenshot unavailable: Faahfaahinta add-on-ka Ultimate Multisite WooCommerce Integration ee leh badhka Install Now -->

Marka la dhammeeyo installation-ka, waxaad la wareegi doontaa bogga plugins-ka (plugins page). Halkan, si fudud guji **Network Activate** (Hubi Shirkadda). Add-on-ka WooCommerce wuxuu dibadda ka shaqeyn doonaa shirkaddaada.

<!-- Screenshot unavailable: Bogga plugins-ka oo leh xiriirka Network Activate ee add-on-ka WooCommerce Integration -->

Marka la hubiyo, haddii aad weli aysan haysan plugin-ka WooCommerce oo la hubiyay website-kaaga, waxaad heli doontaa xusuusin (reminder).

<!-- Screenshot unavailable: Xusuusin Admin-ka oo dibadda saaraya administrator-ka inuu installayo oo uu hubiyo plugin-ka WooCommerce -->

Si aad si fiican u akhristo add-on-ka WooCommerce Integration, **guji halkan**.

### Sida loo installo add-on-ka GoCardless:

Tallaabada lagu rakibo add-on-ka _GoCardless_ waa mid la mid ah sida loo rakibo add-on-ka _WooCommerce_. Tag bogga add-ons (add-ons page) oo dooro **Ultimate Multisite: GoCardless Gateway** add-on-ka.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Fadlan riix **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Marka la dhammeeyo rakibidda, waxaad la wareegi doontaa bogga plugins (plugins page). Halkaas, kaliya riix **Network Activate** oo _GoCardless_ add-on-ka ayaa dib loo fulinaya shirkaddaada (network).

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Si aad u barato sida loo bilaabo isticmaalka _GoCardless_ gateway, **akiinka qoraalkan**.

### Sida loo rakibo add-on-ka Payfast:

Tag bogga add-ons (add-ons page) oo dooro **Ultimate Multisite: Payfast Gateway** add-on-ka.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Fadlan riix **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Marka la dhammeeyo rakibidda, waxaad la wareegi doontaa bogga plugins (plugins page). Halkaas, kaliya riix **Network Activate** oo _Payfast_ add-on-ka ayaa dib loo fulinaya shirkaddaada (network).
