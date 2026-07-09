---
title: Ukuhlawulwa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ukuhlawulwa (v2) {#getting-paid-v2}

_**INQAKU ELIBALULEKILEYO: Eli nqaku libhekisa ku-Ultimate Multisite inguqulelo 2.x.**_

Ultimate Multisite inenkqubo eyakhelwe ngaphakathi yobulungu kunye nokubiza iintlawulo. Ukuze inkqubo yethu yokubiza iintlawulo isebenze, sidibanise amasango entlawulo aqhelekileyo asetyenziswa kurhwebo lwe-intanethi. Amasango entlawulo angagqibekanga kwi-Ultimate Multisite zezi _Stripe_ , _PayPal_ , kunye neNtlawulo Yesandla. Ungasebenzisa kwakhona _WooCommerce_ , _GoCardless_ kunye _Payfast_ ukufumana iintlawulo ngokufakela izongezo zazo ezifanelekileyo.

## Izicwangciso Ezisisiseko {#basic-settings}

Ungaqwalasela naliphi na kula masango entlawulo phantsi kwezicwangciso zentlawulo ze-Ultimate Multisite. Ungayifumana ngokuya ku-**Ultimate Multisite menu > Settings > Payments.**

![Iphepha lezicwangciso zeentlawulo kwi-Ultimate Multisite elibonisa iphaneli yeePayments](/img/config/payments-settings-page.png)

Ngaphambi kokuba usete isango lakho lentlawulo, nceda ujonge izicwangciso zentlawulo ezisisiseko onokuzicwangcisa:

**Nyanzelisa ukuvuselela ngokuzenzekelayo** **:** Oku kuya kuqinisekisa ukuba intlawulo iya kuphinda yenzeke ngokuzenzekelayo ekupheleni komjikelo ngamnye wokubiza iintlawulo, ngokuxhomekeke kubuninzi bokubiza iintlawulo obukhethwe ngumsebenzisi.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 ijonga ukuba isango elisebenzayo lineziqinisekiso zokuvuselela ezinokuphinda zisetyenziswe phambi kokugcina ubulungu obuphindaphindwayo obunokuvuselela ngokuzenzekelayo okuvuliweyo. Isiqinisekiso sokuvuselela sinokuba yirhumo lesango, isivumelwano sokubiza iintlawulo, ithokheni ye-vault egciniweyo, okanye indlela yentlawulo efanayo enokuphinda isetyenziswe. Ukuba isango lixela ukuba akukho siqinisekiso sisebenzisekayo sikhoyo, Ultimate Multisite igcina ubulungu kodwa icime ukuvuselela ngokuzenzekelayo ize irekhode imeko yesiqinisekiso esilahlekileyo ukuze umlawuli okanye inkqubo yenkxaso ikwazi ukucela umthengi ukuba aphinde agunyazise intlawulo phambi komhla wokuvuselela.

Oku kuthintela ubulungu ekubonakaleni ngathi buya kuzivuselela ngokuzenzekelayo xa isango linokuqokelela kuphela iintlawulo zexesha elinye. Izongezo zamasango kufuneka ziqinisekise ukuba ii-checkout eziphindaphindwayo zigcina isiqinisekiso esinokuphinda sisetyenziswe, ngakumbi xa isango lixhasa zombini ukubanjwa kwentlawulo yexesha elinye kunye neendlela zentlawulo ezigcinwe kwi-vault/zerhumo.

**Vumela izilingo ngaphandle kwendlela** **yentlawulo:** Xa olu khetho luvuliwe, umxhasi wakho akayi kufuneka ongeze naluphi na ulwazi lwezemali ngexesha lenkqubo yobhaliso. Oku kuya kufuneka kuphela xa ixesha lesilingo liphela.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Thumela i-invoice xa intlawulo iqinisekisiwe:** Oku kukunika ukhetho lokuba uthumele okanye ungathumeli i-invoice emva kwentlawulo. Qaphela ukuba abasebenzisi baya kuba nokufikelela kwimbali yabo yeentlawulo phantsi kwe-dashboard yesayithi yabo esezantsi. Olu khetho alusebenzi kwiSango Lesandla.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Iskimu sokunombola ii-invoice:** Apha, ungakhetha nokuba yikhowudi yesalathiso sentlawulo okanye iskimu senombolo elandelelanayo. Ukuba ukhetha ukusebenzisa ikhowudi yesalathiso sentlawulo kwii-invoice zakho, akukho nto kufuneka uyiqwalasele. Ukuba ukhetha ukusebenzisa iskimu senombolo elandelelanayo, kuya kufuneka uqwalasele **inombolo ye-invoice elandelayo** (Le nombolo iya kusetyenziswa njengenombolo ye-invoice ye-invoice elandelayo eveliswa kwinkqubo. Yonyuswa ngenye qho xa kusenziwa i-invoice entsha. Ungayitshintsha uze uyigcine ukuze usete ngokutsha inombolo elandelelanayo ye-invoice kwixabiso elithile) kunye **nesimaphambili senombolo ye-invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Apho ungafumana khona amasango: {#where-to-find-the-gateways}

Ungaseta amasango entlawulo kwiphepha elifanayo ( **Ultimate Multisite > Settings > Payments**). Kanye ngezantsi kwe-**active payment gateways** , uya kukwazi ukubona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ kunye _Manual_.

![Icandelo le-Active Payment Gateways elidwelisa i-Stripe, Stripe Checkout, PayPal kunye ne-Manual](/img/config/payments-active-gateways.png)

Sinenqaku elizinikeleyo ngesango ngalinye lentlawulo eliya kukukhokela kumanyathelo okulimisela, onokulifumana kumakhonkco angezantsi.

Ungajonga kwaye uhlele iinkcukacha zentlawulo:

![Ujongano lokuhlela intlawulo](/img/admin/payment-edit.png)

Nantsi imbono epheleleyo yephepha lokuhlela intlawulo:

![Ujongano olupheleleyo lokuhlela intlawulo](/img/admin/payment-edit-full.png)

Nantsi kwakhona imbono epheleleyo yezicwangciso zamasango entlawulo:

![Iphepha elipheleleyo lezicwangciso zamasango entlawulo](/img/config/settings-payments-gateways-full.png)

**Ukuseta isango le-Stripe**

**Ukuseta isango le-PayPal**** **

**Ukuseta iintlawulo zesandla**

Ngoku, ukuba ufuna ukusebenzisa _WooCommerce_ , _GoCardless_ okanye _Payfast_ njengesango lakho lentlawulo, kuya kufuneka **ufakele kwaye uqwalasele izongezo zazo**.

### Indlela yokufakela isongezo se-WooCommerce: {#how-to-install-the-woocommerce-add-on}

Siyaqonda ukuba _Stripe_ kunye _PayPal_ azifumaneki kwamanye amazwe, nto leyo ethintela okanye ephazamisa abasebenzisi be-Ultimate Multisite ekusebenziseni i-plugin yethu ngokusebenzayo. Ngoko senze isongezo sokudibanisa _WooCommerce,_ eyi-plugin yorhwebo lwe-intanethi ethandwa kakhulu. Abaphuhlisi kwihlabathi lonke benze izongezo zokudibanisa amasango entlawulo ahlukeneyo kuyo. Sisebenzise eli thuba ukwandisa amasango entlawulo onokuwasebenzisa nenkqubo yokubiza iintlawulo ye-Ultimate Multisite.

_**KUBALULEKILE:** Ultimate Multisite: WooCommerce Integration ifuna ukuba WooCommerce ivulwe ubuncinane kwisayithi yakho ephambili._

Okokuqala, nceda uye kwiphepha lezongezo. Ungalifumana ngokuya ku-**Ultimate Multisite > Settings**. Kufuneka ubone itheyibhile ye-**Add-ons**. Cofa ku-**Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Emva kokucofa ku-**Check our Add-ons** , uya kuthunyelwa kwiphepha lezongezo. Apha ungafumana zonke izongezo ze-Ultimate Multisite. Cofa kwisongelo se-**Ultimate Multisite: WooCommerce Integration**.

![Iphepha lezongezo elidwelisa izongezo ze-Ultimate Multisite kuquka WooCommerce Integration](/img/addons/addons-page.png)

Ifestile iya kuvela neenkcukacha zesongezo. Cofa nje ku-**Faka Ngoku**.

<!-- Umfanekiso-skrini awufumaneki: idiyalog yeenkcukacha zesongezo se-Ultimate Multisite WooCommerce Integration eneqhosha elithi Faka Ngoku -->

Emva kokuba ukufakwa kugqityiwe, uya kuthunyelwa kwiphepha lee-plugin. Apha, cofa nje ku-**Yenza Isebenze Kwinethiwekhi** kwaye isongezo se-WooCommerce siya kwenziwa sisebenze kwinethiwekhi yakho.

<!-- Umfanekiso-skrini awufumaneki: iphepha lee-plugin elinekhonkco elithi Yenza Isebenze Kwinethiwekhi lesongezo se-WooCommerce Integration -->

Emva kokusenza sisebenze, ukuba awukabinayo i-plugin ye-WooCommerce efakiweyo kwaye yenziwe yasebenza kwiwebhusayithi yakho, uya kufumana isikhumbuzo.

<!-- Umfanekiso-skrini awufumaneki: isaziso somlawuli esikhumbuza umlawuli ukuba afake aze enze isebenze i-plugin ye-WooCommerce -->

Ukufunda ngakumbi ngesongezo se-WooCommerce Integration, **cofa apha**.

### Indlela yokufaka isongezo se-GoCardless: {#how-to-install-the-gocardless-add-on}

Amanyathelo okufaka isongezo se-_GoCardless_ ayafana kakhulu nawesongezo se-_WooCommerce_. Nceda uye kwiphepha lezongezo uze ukhethe isongezo se-**Ultimate Multisite: GoCardless Gateway**.

<!-- Umfanekiso-skrini awufumaneki: iphepha lezongezo elinesongezo se-Ultimate Multisite GoCardless Gateway siphawuliwe -->

Ifestile yesongezo iya kuvela. Cofa ku-**Faka Ngoku**.

<!-- Umfanekiso-skrini awufumaneki: idiyalog yeenkcukacha zesongezo se-Ultimate Multisite GoCardless Gateway eneqhosha elithi Faka Ngoku -->

Emva kokuba ukufakwa kugqityiwe, uya kuthunyelwa kwiphepha lee-plugin. Apha, cofa nje ku-**Yenza Isebenze Kwinethiwekhi** kwaye isongezo se-_GoCardless_ siya kwenziwa sisebenze kwinethiwekhi yakho.

<!-- Umfanekiso-skrini awufumaneki: iphepha lee-plugin elinekhonkco elithi Yenza Isebenze Kwinethiwekhi lesongezo se-GoCardless Gateway -->

Ukuze ufunde indlela yokuqalisa ngesango le-_GoCardless_, **funda eli nqaku**.

### Indlela yokufaka isongezo se-Payfast: {#how-to-install-the-payfast-add-on}

Yiya kwiphepha lezongezo uze ukhethe isongezo se-**Ultimate Multisite: Payfast Gateway**.

<!-- Umfanekiso-skrini awufumaneki: iphepha lezongezo elinesongezo se-Ultimate Multisite Payfast Gateway siphawuliwe -->

Ifestile yesongezo iya kuvela. Cofa ku-**Faka Ngoku.**

<!-- Umfanekiso-skrini awufumaneki: idiyalog yeenkcukacha zesongezo se-Ultimate Multisite Payfast Gateway eneqhosha elithi Faka Ngoku -->

Emva kokuba ukufakwa kugqityiwe, uya kuthunyelwa kwiphepha lee-plugin. Apha, cofa nje ku-**Yenza Isebenze Kwinethiwekhi** kwaye isongezo se-_Payfast_ siya kwenziwa sisebenze kwinethiwekhi yakho.

<!-- Umfanekiso-skrini awufumaneki: iphepha lee-plugin elinekhonkco elithi Yenza Isebenze Kwinethiwekhi lesongezo se-Payfast Gateway -->
