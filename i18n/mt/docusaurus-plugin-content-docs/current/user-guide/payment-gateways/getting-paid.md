---
title: Titħallas
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Kif Titħallas (v2)

_**NOTA IMPORTANTI: Dan l-artiklu jirreferi għal Ultimate Multisite verżjoni 2.x.**_

Ultimate Multisite għandu sistema integrata ta' sħubija u fatturazzjoni. Biex is-sistema ta' fatturazzjoni tagħna taħdem, integrajna l-aktar gateways tal-ħlas komuni użati fil-kummerċ elettroniku. Il-gateways tal-ħlas predefiniti f'Ultimate Multisite huma _Stripe_ , _PayPal_ , u Ħlas Manwali. Tista' wkoll tuża _WooCommerce_ , _GoCardless_ u _Payfast_ biex tirċievi ħlasijiet billi tinstalla l-add-ons rispettivi tagħhom.

## Settings Bażiċi

Tista' tikkonfigura kwalunkwe minn dawn il-gateways tal-ħlas taħt is-settings tal-ħlas ta' Ultimate Multisite. Tista' ssibu billi tmur għal **Ultimate Multisite menu > Settings > Payments.**

![Paġna tas-settings tal-Ħlasijiet f'Ultimate Multisite li turi l-pannell tal-Ħlasijiet](/img/config/payments-settings-page.png)

Qabel ma tissettja l-gateway tal-ħlas tiegħek, jekk jogħġbok agħti ħarsa lejn is-settings bażiċi tal-ħlas li tista' tikkonfigura:

**Ġiegħel tiġdid awtomatiku** **:** Dan jiżgura li l-ħlas jirrikorri awtomatikament fi tmiem kull ċiklu ta' fatturazzjoni skont il-frekwenza tal-fatturazzjoni li għażel l-utent.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 jiċċekkja jekk il-gateway attiv għandux kredenzjali ta' tiġdid li tista' terġa' tintuża qabel ma jsalva sħubija rikorrenti bit-tiġdid awtomatiku attivat. Kredenzjali ta' tiġdid tista' tkun abbonament tal-gateway, ftehim ta' fatturazzjoni, token tal-vault issejvjat, jew metodu ta' ħlas ekwivalenti li jista' jerġa' jintuża. Jekk il-gateway jirrapporta li ma teżistix kredenzjali li tista' tintuża, Ultimate Multisite jsalva s-sħubija iżda jitfi t-tiġdid awtomatiku u jirreġistra l-istat tal-kredenzjali nieqsa sabiex amministratur jew proċess ta' appoġġ ikun jista' jitlob lill-klijent jawtorizza mill-ġdid il-ħlas qabel id-data tat-tiġdid.

Dan jipprevjeni sħubija milli tidher li se tiġġedded awtomatikament meta l-gateway jista' jiġbor biss ħlasijiet ta' darba. Add-ons tal-gateway għandhom jikkonfermaw li checkouts rikorrenti jaħżnu kredenzjali li tista' terġa' tintuża, speċjalment meta l-gateway jappoġġja kemm qbid ta' darba kif ukoll modi ta' ħlas vaulted/abbonament.

**Ħalli provi mingħajr metodu ta' ħlas** **:** B'din l-għażla attivata, il-klijent tiegħek ma jkollux għalfejn iżid xi informazzjoni finanzjarja waqt il-proċess ta' reġistrazzjoni. Dan ikun meħtieġ biss ladarba jiskadi l-perjodu ta' prova.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ibgħat fattura mal-konferma tal-ħlas:** Dan jagħtik għażla jekk tibgħatx fattura wara l-ħlas jew le. Innota li l-utenti jkollhom aċċess għall-istorja tal-ħlasijiet tagħhom taħt id-dashboard tas-subsite tagħhom. Din l-għażla ma tapplikax għall-Gateway Manwali.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema tan-numerazzjoni tal-fatturi:** Hawnhekk, tista' tagħżel jew kodiċi ta' referenza tal-ħlas jew skema ta' numru sekwenzjali. Jekk tagħżel li tuża kodiċi ta' referenza tal-ħlas għall-fatturi tiegħek, m'għandek bżonn tikkonfigura xejn. Jekk tagħżel li tuża skema ta' numru sekwenzjali, ikollok bżonn tikkonfigura n-**numru tal-fattura li jmiss** (Dan in-numru se jintuża bħala n-numru tal-fattura għall-fattura li jmiss iġġenerata fis-sistema. Jiżdied b'wieħed kull darba li tinħoloq fattura ġdida. Tista' tbiddlu u ssalvah biex tirrisettja n-numru sekwenzjali tal-fattura għal valur speċifiku) u l-**prefiss tan-numru tal-fattura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Fejn issib il-gateways:

Tista' tissettja l-gateways tal-ħlas fl-istess paġna ( **Ultimate Multisite > Settings > Payments**). Eżatt taħt **gateways tal-ħlas attivi** , tkun tista' tara: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ u _Manual_.

![Taqsima tal-Gateways tal-Ħlas Attivi li telenka Stripe, Stripe Checkout, PayPal u Manual](/img/config/payments-active-gateways.png)

Għandna artiklu ddedikat għal kull gateway tal-ħlas li jiggwidak permezz tal-passi biex tissettjah, li tista' ssibu fil-links hawn taħt.

Tista' tara u teditja d-dettalji tal-ħlas:

![Interfaċċa tal-editjar tal-ħlas](/img/admin/payment-edit.png)

Hawnhekk hawn dehra sħiħa tal-paġna tal-editjar tal-ħlas:

![Interfaċċa sħiħa tal-editjar tal-ħlas](/img/admin/payment-edit-full.png)

Hawnhekk hemm ukoll dehra sħiħa tas-settings tal-gateways tal-ħlas:

![Paġna sħiħa tas-settings tal-gateways tal-ħlas](/img/config/settings-payments-gateways-full.png)

**Kif tissettja l-gateway ta' Stripe**

**Kif tissettja l-gateway ta' PayPal**** **

**Kif tissettja ħlasijiet manwali**

Issa, jekk trid tuża _WooCommerce_ , _GoCardless_ jew _Payfast_ bħala l-gateway tal-ħlas tiegħek, ikollok bżonn **tinstalla u tikkonfigura l-add-ons tagħhom**.

### Kif tinstalla l-add-on ta' WooCommerce:

Nifhmu li _Stripe_ u _PayPal_ mhumiex disponibbli f'xi pajjiżi, li jillimita jew ixekkel lill-utenti ta' Ultimate Multisite milli jużaw il-plugin tagħna b'mod effettiv. Għalhekk ħloqna add-on biex nintegraw _WooCommerce,_ li huwa plugin tal-kummerċ elettroniku popolari ħafna. Żviluppaturi madwar id-dinja ħolqu add-ons biex jintegraw gateways tal-ħlas differenti miegħu. Ħadna vantaġġ minn dan biex nespandu l-gateways tal-ħlas li tista' tuża mas-sistema ta' fatturazzjoni ta' Ultimate Multisite.

_**IMPORTANTI:** Ultimate Multisite: WooCommerce Integration jeħtieġ li WooCommerce jkun attivat mill-inqas fuq is-sit ewlieni tiegħek._

L-ewwel, jekk jogħġbok mur fil-paġna tal-add-ons. Tista' ssibha billi tmur għal **Ultimate Multisite > Settings**. Għandek tara t-tabella **Add-ons**. Ikklikkja fuq **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Wara li tikklikkja fuq **Check our Add-ons** , tiġi ridirezzjonat lejn il-paġna tal-add-ons. Hawnhekk tista' ssib l-add-ons kollha ta' Ultimate Multisite. Ikklikkja fuq l-add-on **Ultimate Multisite: WooCommerce Integration**.

![Paġna tal-add-ons li telenka l-add-ons ta' Ultimate Multisite inkluż WooCommerce Integration](/img/addons/addons-page.png)

Tidher tieqa bid-dettalji tal-estensjoni. Sempliċement ikklikkja fuq **Installa Issa**.

<!-- Screenshot mhux disponibbli: djalogu bid-dettalji tal-estensjoni ta' integrazzjoni Ultimate Multisite WooCommerce bil-buttuna Installa Issa -->

Wara li l-installazzjoni tkun lesta, tiġi ridirezzjonat lejn il-paġna tal-plugins. Hawnhekk, sempliċement ikklikkja fuq **Attiva fuq in-Network** u l-estensjoni ta' WooCommerce tiġi attivata fuq in-network tiegħek.

<!-- Screenshot mhux disponibbli: Paġna tal-plugins bil-link Attiva fuq in-Network għall-estensjoni ta' integrazzjoni WooCommerce -->

Wara li tattivaha, jekk għad m’għandekx il-plugin WooCommerce installat u attivat fuq is-sit web tiegħek, tirċievi tfakkira.

<!-- Screenshot mhux disponibbli: Avviż tal-amministratur li jfakkar lill-amministratur biex jinstalla u jattiva l-plugin WooCommerce -->

Biex taqra aktar dwar l-estensjoni ta' integrazzjoni WooCommerce, **ikklikkja hawn**.

### Kif tinstalla l-estensjoni GoCardless:

Il-passi biex tinstalla l-estensjoni _GoCardless_ huma kważi l-istess bħal tal-estensjoni _WooCommerce_. Jekk jogħġbok mur fil-paġna tal-estensjonijiet u agħżel l-estensjoni **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot mhux disponibbli: Paġna tal-estensjonijiet bl-estensjoni Ultimate Multisite GoCardless Gateway enfasizzata -->

It-tieqa tal-estensjoni tidher. Ikklikkja fuq **Installa Issa**.

<!-- Screenshot mhux disponibbli: djalogu bid-dettalji tal-estensjoni Ultimate Multisite GoCardless Gateway bil-buttuna Installa Issa -->

Wara li l-installazzjoni tkun lesta, tiġi ridirezzjonat lejn il-paġna tal-plugins. Hawnhekk, sempliċement ikklikkja fuq **Attiva fuq in-Network** u l-estensjoni _GoCardless_ tiġi attivata fuq in-network tiegħek.

<!-- Screenshot mhux disponibbli: Paġna tal-plugins bil-link Attiva fuq in-Network għall-estensjoni GoCardless Gateway -->

Biex titgħallem kif tibda bil-gateway _GoCardless_, **aqra dan l-artiklu**.

### Kif tinstalla l-estensjoni Payfast:

Mur fil-paġna tal-estensjonijiet u agħżel l-estensjoni **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot mhux disponibbli: Paġna tal-estensjonijiet bl-estensjoni Ultimate Multisite Payfast Gateway enfasizzata -->

It-tieqa tal-estensjoni tidher. Ikklikkja fuq **Installa Issa.**

<!-- Screenshot mhux disponibbli: djalogu bid-dettalji tal-estensjoni Ultimate Multisite Payfast Gateway bil-buttuna Installa Issa -->

Wara li l-installazzjoni tkun lesta, tiġi ridirezzjonat lejn il-paġna tal-plugins. Hawnhekk, sempliċement ikklikkja fuq **Attiva fuq in-Network** u l-estensjoni _Payfast_ tiġi attivata fuq in-network tiegħek.

<!-- Screenshot mhux disponibbli: Paġna tal-plugins bil-link Attiva fuq in-Network għall-estensjoni Payfast Gateway -->
