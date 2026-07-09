---
title: Kubhadharwa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Kubhadharwa (v2) {#getting-paid-v2}

_**CHERECHEDZO CHINOKOSHA: Chinyorwa ichi chinoreva Ultimate Multisite version 2.x.**_

Ultimate Multisite ine membership nehurongwa hwekubhadharisa hwakavakirwa mukati. Kuti hurongwa hwedu hwekubhadharisa hushande, takabatanidza payment gateways anonyanya kushandiswa mu e-commerce. Payment gateways ekutanga muUltimate Multisite ndi _Stripe_ , _PayPal_ , uye Manual Payment. Unogonawo kushandisa _WooCommerce_ , _GoCardless_ ne _Payfast_ kugamuchira mubhadharo nekuiisa ma-add-ons awo akakodzera.

## Zvirongwa Zvekutanga {#basic-settings}

Unogona kugadzirisa chero eaya payment gateways pasi pezvirongwa zvekubhadhara zveUltimate Multisite. Unogona kuzviwana nekuenda ku **Ultimate Multisite menu > Settings > Payments.**

![Peji rezvirongwa zvePayments muUltimate Multisite richiratidza panel yePayments](/img/config/payments-settings-page.png)

Usati wagadzira payment gateway yako, tapota tarisa zvirongwa zvekubhadhara zvekutanga zvaunogona kugadzirisa:

**Manikidza auto-kuvandudz** **wa:** Izvi zvichava nechokwadi chekuti mubhadharo uchadzokororwa otomatiki pakupera kwe billing cycle yega yega zvichienderana ne billing frequency yakasarudzwa nemushandisi.

<!-- Screenshot haisi kuwanikwa: Chigadziriso cheForce Auto-Renew toggle papeji rezvirongwa zvePayments -->

Ultimate Multisite v2.13.0 inoongorora kana gateway riri kushanda riine renewal credential inogona kushandiswazve isati yachengeta recurring membership ine auto-renewal yakabatidzwa. Renewal credential inogona kuva gateway subscription, billing agreement, saved vault token, kana nzira yekubhadhara yakaenzana inogona kushandiswazve. Kana gateway ikataura kuti hapana credential inoshandisika iripo, Ultimate Multisite inochengeta membership asi inodzima auto-renewal uye inonyora mamiriro ekushayikwa kwecredential kuitira kuti administrator kana support flow ikumbire customer kuti abvumidze mubhadharo zvakare zuva rekuvandudza risati rasvika.

Izvi zvinodzivirira membership kuti isaratidzike sekunge iri auto-renew apo gateway ichingokwanisa kuunganidza mubhadharo wenguva imwe chete. Gateway add-ons dzinofanira kusimbisa kuti recurring checkouts dzinochengeta credential inogona kushandiswazve, kunyanya kana gateway ichitsigira zvose one-time capture nemamode ekubhadhara e vaulted/subscription.

**Bvumira trials pasina payment** **method:** Kana option iyi yakabatidzwa, client wako haafaniri kuwedzera ruzivo rwemari panguva yekunyoresa. Izvi zvichangodiwa chete kana nguva ye trial yapera.

<!-- Screenshot haisi kuwanikwa: Allow Trials Without Payment Method toggle papeji rezvirongwa zvePayments -->

**Tumira invoice pakusimbiswa kwemubhadharo:** Izvi zvinokupa option yekuti utumire kana kusatumira invoice mushure mekubhadhara. Cherechedza kuti vashandisi vachawana payment history yavo pasi pe subsite dashboard yavo. Option iyi haishandi kuManual Gateway.

<!-- Screenshot haisi kuwanikwa: Send Invoice on Payment Confirmation toggle papeji rezvirongwa zvePayments -->

**Hurongwa hwenhamba dzeinvoice:** Pano, unogona kusarudza payment reference code kana sequential number scheme. Kana ukasarudza kushandisa payment reference code kuma invoice ako, haufaniri kugadzirisa chero chinhu. Kana ukasarudza kushandisa sequential number scheme, uchafanira kugadzirisa **next invoice number** (Nhamba iyi ichashandiswa se invoice number ye invoice inotevera inogadzirwa muhurongwa. Inowedzerwa neimwe nguva dzose painogadzirwa invoice itsva. Unogona kuichinja woichengeta kuti udzorere invoice sequential number kune value yakatarwa) uye **invoice number prefix.**

<!-- Screenshot haisi kuwanikwa: Invoice numbering scheme dropdown ine Payment Reference Code neSequential Number options -->

<!-- Screenshot haisi kuwanikwa: Next invoice number neinvoice number prefix fields zvinoratidzwa kana Sequential Number yasarudzwa -->

## Kwaunowana gateways: {#where-to-find-the-gateways}

Unogona kugadzira payment gateways papeji rimwe chete ( **Ultimate Multisite > Settings > Payments**). Pasi chaipo pe **active payment gateways** , uchakwanisa kuona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ uye _Manual_.

![Chikamu cheActive Payment Gateways chichiratidza Stripe, Stripe Checkout, PayPal neManual](/img/config/payments-active-gateways.png)

Tine chinyorwa chakatsaurirwa payment gateway yega yega chichakutungamirira mumatanho ekuchigadzira chaunogona kuwana pama link ari pazasi.

Unogona kuona nekugadzirisa payment details:

![Interface yekugadzirisa mubhadharo](/img/admin/payment-edit.png)

Heino tarisiro yakazara yepeji rekugadzirisa mubhadharo:

![Interface yakazara yekugadzirisa mubhadharo](/img/admin/payment-edit-full.png)

Heino zvakare tarisiro yakazara yezvirongwa zvepayment gateways:

![Peji yakazara yezvirongwa zvepayment gateways](/img/config/settings-payments-gateways-full.png)

**Kugadzira Stripe gateway**

**Kugadzira PayPal gateway**** **

**Kugadzira manual payments**

Zvino, kana uchida kushandisa _WooCommerce_ , _GoCardless_ kana _Payfast_ se payment gateway yako, uchafanira **kuisa nekugadzirisa ma-add-ons awo**.

### Maitiro ekuisa WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Tinonzwisisa kuti _Stripe_ ne _PayPal_ hazviwanikwi mune dzimwe nyika izvo zvinoderedza kana kutadzisa vashandisi veUltimate Multisite kushandisa plugin yedu zvinobudirira. Saka takagadzira add-on yekubatanidza _WooCommerce,_ inova plugin ye e-commerce inozivikanwa zvikuru. Developers pasi rose vakagadzira add-ons dzekubatanidza payment gateways dzakasiyana kwairi. Takashandisa mukana uyu kuwedzera payment gateways aunogona kushandisa nehurongwa hwekubhadharisa hweUltimate Multisite.

_**CHINOKOSHA:** Ultimate Multisite: WooCommerce Integration inoda kuti WooCommerce ive activated kanenge pa main site yako._

Kutanga, tapota enda kupeji re add-ons. Unogona kuriwana nekuenda ku **Ultimate Multisite > Settings**. Unofanira kuona tafura ye **Add-ons**. Dzvanya pa **Check our Add-ons**.

<!-- Screenshot haisi kuwanikwa: Tafura yeAdd-ons paUltimate Multisite Settings sidebar ine link yeCheck our Add-ons -->

Mushure mekudzvanya pa **Check our Add-ons** , uchaendeswa kupeji re add-ons. Pano unogona kuwana maadd-ons ese eUltimate Multisite. Dzvanya pa **Ultimate Multisite: WooCommerce Integration** add-on.

![Peji reAdd-ons richiratidza Ultimate Multisite add-ons kusanganisira WooCommerce Integration](/img/addons/addons-page.png)

Hwindo richabuda rine ruzivo rwewedzero. Ingodzvanya pa **Isa Izvozvi**.

<!-- Mufananidzo hausi kuwanikwa: dialog yeruzivo rwewedzero yeUltimate Multisite WooCommerce Integration ine bhatani reIsa Izvozvi -->

Kana kuiswa kwapera, uchaendeswa kupeji rezvinowedzerwa. Pano, ingodzvanya pa **Activate paNetiweki** uye wedzero yeWooCommerce ichashandiswa panetiweki yako.

<!-- Mufananidzo hausi kuwanikwa: Peji rezvinowedzerwa rine chinongedzo cheActivate paNetiweki chewedzero yeWooCommerce Integration -->

Mushure mekuishandisa, kana usati wava neWooCommerce chinowedzerwa chakaiswa uye chaitwa pawebhusaiti yako, uchagamuchira chiyeuchidzo.

<!-- Mufananidzo hausi kuwanikwa: Chiziviso cheAdmin chinoyeuchidza mutungamiriri kuisa nekushandisa WooCommerce chinowedzerwa -->

Kuti uverenge zvimwe nezvewedzero yeWooCommerce Integration, **dzvanya pano**.

### Maitiro ekuisa wedzero yeGoCardless: {#how-to-install-the-gocardless-add-on}

Matanho ekuisa wedzero ye_GoCardless_ akafanana chaizvo needzero ye_WooCommerce_. Ndapota enda kupeji rezvinowedzerwa wosarudza wedzero ye **Ultimate Multisite: GoCardless Gateway**.

<!-- Mufananidzo hausi kuwanikwa: Peji rezvinowedzerwa rine wedzero yeUltimate Multisite GoCardless Gateway yakaratidzwa -->

Hwindo rewedzero richabuda. Dzvanya pa **Isa Izvozvi**.

<!-- Mufananidzo hausi kuwanikwa: dialog yeruzivo rwewedzero yeUltimate Multisite GoCardless Gateway ine bhatani reIsa Izvozvi -->

Kana kuiswa kwapera, uchaendeswa kupeji rezvinowedzerwa. Pano, ingodzvanya pa **Activate paNetiweki** uye wedzero ye_GoCardless_ ichashandiswa panetiweki yako.

<!-- Mufananidzo hausi kuwanikwa: Peji rezvinowedzerwa rine chinongedzo cheActivate paNetiweki chewedzero yeGoCardless Gateway -->

Kuti udzidze matangiro ekushandisa gateway ye_GoCardless_, **verenga chinyorwa ichi**.

### Maitiro ekuisa wedzero yePayfast: {#how-to-install-the-payfast-add-on}

Enda kupeji rezvinowedzerwa wosarudza wedzero ye **Ultimate Multisite: Payfast Gateway**.

<!-- Mufananidzo hausi kuwanikwa: Peji rezvinowedzerwa rine wedzero yeUltimate Multisite Payfast Gateway yakaratidzwa -->

Hwindo rewedzero richabuda. Dzvanya pa **Isa Izvozvi.**

<!-- Mufananidzo hausi kuwanikwa: dialog yeruzivo rwewedzero yeUltimate Multisite Payfast Gateway ine bhatani reIsa Izvozvi -->

Kana kuiswa kwapera, uchaendeswa kupeji rezvinowedzerwa. Pano, ingodzvanya pa **Activate paNetiweki** uye wedzero ye_Payfast_ ichashandiswa panetiweki yako.

<!-- Mufananidzo hausi kuwanikwa: Peji rezvinowedzerwa rine chinongedzo cheActivate paNetiweki chewedzero yePayfast Gateway -->
