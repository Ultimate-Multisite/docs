---
title: Habka Diyaarinta
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Habka-bixitaanka (v2)

_**Fadlan la xusuuso: Qoraalkaasi wuxuu ka hadlayaa Ultimate Multisite nooca 2.x.**_

Dadku waxay ku gali karaan shabakadahaaga qaabab kala duwan. Waxay isticmaali karaan foomka diiwaangelintaada ama xiriir la la mid ah (shareable link) oo ujeeddo qorshe horey u dooran. Halkan waxaan kuu sheegi doonaa sida macmiilayaashaadu ay ku diiwaangeli karaan shabakadahaaga iyadoo la isticmaalayo widadka la heli karo iyo waxa ka dhasha markii ay diiwaangelisay shabakadahaaga.

## Isticmaalka Foomka Diiwaangelinta: {#using-the-registration-form}

Tani waa habka caadiga ah ee diiwaangelinta. Waxaad samaynaysaa bog diiwaangelin oo leh **checkout form** (foomka lacagta la bixiyo), waxaana halkan ay macmiilayaashu aadaan si ay diiwaangeliyaan shabakadahaaga oo ay ku kaysi qorshe. Waxaad leedahay boosyo diiwaangelin badan, kasta oo leh foomka diiwaangelinta kala duwan haddii aad rabto.

Bogga caadiga ah ee diiwaangelinta waa [_**yourdomain.com/register**_](http://yourdomain.com/register), laakiin waxaad beddeli kartaa tani markii aad isticmaalayso **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Marka isticmaaluhu gaaro bogga diiwaangelintaada (badankood waxay ku riixaan badhka **Sign in** ama **Buy now**), waxay arki doonaan foomka diiwaangelintaada.

![Foomka diiwaangelinta oo la soo bandhigay bogga diiwaangelinta](/img/frontend/registration-form.png)

Halkan waa tusaale oo ku saabsan foomka checkout sida uu u muuqdo frontend-ka:

![Foomka diiwaangelinta ee checkout-ka frontend-ka](/img/config/checkout-frontend-registration.png)

Waxay kaliya inay qabtaan dhammaan qaybaha waajib ah - email, username, password, iwm... - waxayna bixiyaan lacagta qorshaha ama waxay xaqiiji karaan ciwaanka email-kooda haddii ay diiwaangeliyaan qorshe bilaash ah ama qorshe la bixiyo oo leh muddo is-dhaaf ah (trial period) iyadoo aan la baahnayn macluumaadka lacagta.

Marka lagu soo bandhigo bogga "Thank you" (Mahadsanid), waxay arki doonaan fariin si loo sheego haddii ay u baahan yihiin inay xaqiijiyaan ciwaanka email-kooda ama haddii website-ka laga bilaabayo isticmaalka oo uu horey u fuliyay.

![Boggaanka runta ka dib oo la diiwaangeliyay](/img/frontend/registration-thank-you.png)

Haddii loo baahdo in la xaqiijiyo emailka, waxay u baahan yihiin inay aadaan borotii emailkooda oo ay gujiyaan xiriirka xaqiijinta (verification link). Website-kaas uma shaqayn doono haddii emailkaas aan la xaqiijin.

Haddii ay diiwaangelisay qorshe lacag ah ama xaqiijinta emailku aysan ahayn wax waajib ah ee shabakadahaaga, waxay website-kooda si degdeg ah u shaqaysaa ka dib markii la dhammaystiray lacag bixinta (checkout) waxayna arki doonaan xiriir lagu galo dashboard-kooda.

![Website oo la shidid oo leh xiriir lagu galo dashboard](/img/frontend/site-activated.png)

## Isticmaalka Xiriir La Waraabiddo (Shareable Link): {#using-a-shareable-link}

Habka diiwaangelinta ee loo isticmaalo xiriir la waraabiddo waa mid la mid ah foomka diiwaangelinta, waxa kaliya ka duwan in isticmaalaya xiriir la waraabiddo, macaamiishaada waxay heli karaan qalab ama template website oo horey u dooran (pre-selected) foomka lacag bixinta (isagoo istaagaya qaybta "Pre-selecting products and templates via URL parameters") ama waxaa lagu daray code coupon (isagoo istaagaya qaybta "Using URL Parameters").

Habka diiwaangelinta wuu ahaan doonaa mid la mid ah: waxay u baahan yihiin inay buuxiya magacooda, username-kooda, email-kooda, magaca iyo cinwaanka website-ka, iwm... laakiin qorshaha ama template-ka website-ka ayaa horey u dooran (pre-selected) si ay kuu diyaarsan yihiin.

### Diyaarinta Lacag Bixinta Adiga Ku Maamula: {#registering-using-manual-payments}

Haddii aadan rabin inaad isticmaasho PayPal, Stripe ama barnaamij kale oo lacag bixinta ee Ultimate Multisite ama isku-dhafka ay leeyihiin, waxaad isticmaali kartaa lacag bixinta adiga ku maamula macaamiishaada. Sidaas darteed, waxaad u samayn kartaa invoice (fariin lacag bixin) si ay bixiyaan iyadoo la adeegsan yahay processor-ka lacag bixinta aad dooratay ka dib markii ay diiwaangelisay shabakadahaaga.

Habka diiwaangelinta wuu ahaan doonaa mid si sax ah oo la mid ah kan kor ku xusan, laakiin bogga diiwaangelinta macaamiishaadu waxay arki doonaan farriin sheegaysa in ay helayaan email leh tilmaamo dheeri ah oo dhammaystiraya lacag bixinta.

![Sooqa cash message during registration](/img/frontend/registration-manual-notice.png)

Markabka iyo marka ay ku dhammaystiraan diiwaangelinta, waxay arki doonaan tilmaamaha lacagta aad qorsheysay (sidoo kale waxay heli doonaan email).

![Tilmaamaha lacagta ee muuqda ka dib diiwaangelinta](/img/frontend/registration-payment-instructions.png)

Tilmaamaha lacagta waxaa la beddeli karaa **Ultimate Multisite > Settings > Payments**-ka adiga oo fulinaya badhanka (toggle) ee **Manual** (Lacagta gacanta):

![Badhanka lacagta gacanta iyo meesha tilmaamaha lacagta](/img/config/manual-gateway-settings.png)

Marka macaamiishaagu ay dhammaystiraan lacagta gacanta waxayna kuu soo dirayaan xaqiijinta, waxaad u baahan tahay inaad **si gacanta u xaqiijiso lacagta** si aad u furto xubnaha macaamiisha iyo website-ka.

Si aad u sameyso, tag **Ultimate Multisite > Payments** oo raadi lacagta macaamiisha. Waa inay weli muujisaa xaaladda **Pending** (Wixii la sugayo).

![Liiska lacagta oo leh lacag gacanta la sugaya](/img/admin/payments-list.png)

Riix lambarka lacagta, waxaadna samayn kartaa in aad ka beddesho xaaladdu **Completed** (Dhammaystiran).

![Bogga faahfaahinta lacagta](/img/admin/payment-edit.png)

![Beddelidda xaaladda lacagta oo ah Completed](/img/admin/payment-status-completed.png)

Marka aad ka beddesho xaaladdu **Completed**, waxaad arki doontaa farriin "Activate membership" (Fur xubnaha). Badhankaas u samayso **on** si aad u furto xubnaha iyo website-ka la xiriira macaamiishaas. Markaas, riix si aad u **Save Payment** (Wax-soo-qaad Lacagta).

![Badhanka furista xubnaha iyo Save Payment](/img/admin/payment-activate-membership.png)

Macaamiishaadu hadda waxay heli doonaan dashboard-ka iyo dhammaan muuqaallada ay ku qeyb yihiin.
