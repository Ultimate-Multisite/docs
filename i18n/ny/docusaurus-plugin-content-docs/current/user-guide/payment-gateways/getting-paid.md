---
title: Kulipidwa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Kulipidwa (v2)

_**CHENJEZO LOFUNIKA: Nkhaniyi ikunena za Ultimate Multisite mtundu wa 2.x.**_

Ultimate Multisite ili ndi dongosolo la umembala ndi kulipiritsa lomangidwamo. Kuti dongosolo lathu la kulipiritsa ligwire ntchito, taphatikiza njira zolipirira zomwe zimagwiritsidwa ntchito kwambiri mu malonda a pa intaneti. Njira zolipirira zokhazikika mu Ultimate Multisite ndi _Stripe_ , _PayPal_ , ndi Kulipira Pamanja. Mungagwiritsenso ntchito _WooCommerce_ , _GoCardless_ ndi _Payfast_ kulandira zolipira mwa kukhazikitsa ma add-on awo oyenerera.

## Zokonda Zoyambira

Mungakonze iliyonse mwa njira zolipirira izi pansi pa zokonda zolipirira za Ultimate Multisite. Mungazipeze popita ku **Ultimate Multisite menu > Settings > Payments.**

![Tsamba la zokonda za Payments mu Ultimate Multisite likuwonetsa gulu la Payments](/img/config/payments-settings-page.png)

Musanakhazikitse njira yanu yolipirira, chonde yang’anani zokonda zolipirira zoyambira zomwe mungakonze:

**Kakamizani auto-rene** **w:** Izi zidzatsimikizira kuti kulipira kudzabwerezedwa zokha kumapeto kwa nthawi iliyonse yolipiritsa kutengera pafupipafupi kwa kulipiritsa komwe wogwiritsa ntchito wasankha.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 imayang’ana ngati gateway yomwe ikugwira ntchito ili ndi chizindikiro chobwerezanso chogwiritsidwanso ntchito musanasunge umembala wobwerezabwereza wokhala ndi auto-renewal yoyatsidwa. Chizindikiro chobwerezanso chingakhale subscription ya gateway, mgwirizano wolipiritsa, vault token yosungidwa, kapena njira yolipirira yofanana yomwe ingagwiritsidwenso ntchito. Ngati gateway ikunena kuti palibe chizindikiro chogwiritsidwa ntchito chomwe chilipo, Ultimate Multisite imasunga umembalawo koma imazimitsa auto-renewal ndipo imalemba mkhalidwe wa chizindikiro chosowa kuti woyang’anira kapena njira yothandizira athe kupempha kasitomala kuti avomerezenso kulipira tsiku lobwerezanso lisanafike.

Izi zimalepheretsa umembala kuwoneka ngati ukubwerezanso zokha pamene gateway ingathe kungotenga zolipira za nthawi imodzi. Ma add-on a gateway ayenera kutsimikizira kuti ma checkout obwerezabwereza amasunga chizindikiro chogwiritsidwanso ntchito, makamaka pamene gateway imathandiza onse kutenga kamodzi ndi njira zolipirira za vaulted/subscription.

**Lolani mayeso opanda payment** **method:** Ndi chisankhochi choyatsidwa, client wanu sadzafunika kuwonjezera zambiri zachuma pa nthawi yolembetsa. Izi zidzafunika pokhapokha nthawi yoyeserera itatha.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Tumizani invoice pa kutsimikizira kulipira:** Izi zimakupatsani chisankho ngati mutumiza invoice kapena ayi pambuyo pa kulipira. Dziwani kuti ogwiritsa ntchito adzakhala ndi mwayi woona mbiri yawo yolipira pansi pa dashboard ya subsite yawo. Chisankhochi sichikugwira ntchito pa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Dongosolo la manambala a invoice:** Apa, mungasankhe kaya code yolozera kulipira kapena dongosolo la manambala otsatizana. Ngati musankha kugwiritsa ntchito code yolozera kulipira pa ma invoice anu, simukufunika kukonza chilichonse. Ngati musankha kugwiritsa ntchito dongosolo la manambala otsatizana, mudzafunika kukonza **nambala ya invoice yotsatira** (Nambala iyi idzagwiritsidwa ntchito ngati nambala ya invoice ya invoice yotsatira yomwe idzapangidwe pa system. Imawonjezedwa ndi chimodzi nthawi iliyonse invoice yatsopano ikapangidwa. Mungaisinthe ndi kuisunga kuti mubwezeretse nambala yotsatizana ya invoice ku mtengo winawake) ndi **prefix ya nambala ya invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kumene mungapeze ma gateway:

Mungakhazikitse njira zolipirira patsamba lomwelo ( **Ultimate Multisite > Settings > Payments**). Pansi pomwe pa **ma gateway olipirira omwe akugwira ntchito** , mudzatha kuona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ndi _Manual_.

![Gawo la Active Payment Gateways likulemba Stripe, Stripe Checkout, PayPal ndi Manual](/img/config/payments-active-gateways.png)

Tili ndi nkhani yapadera ya njira iliyonse yolipirira yomwe idzakutsogolerani kudzera mu masitepe oyikhazikitsa omwe mungapeze pa maulalo ali pansipa.

Mungathe kuona ndi kusintha zambiri zolipira:

![Mawonekedwe osinthira kulipira](/img/admin/payment-edit.png)

Nayi mawonekedwe athunthu a tsamba losinthira kulipira:

![Mawonekedwe athunthu osinthira kulipira](/img/admin/payment-edit-full.png)

Nayi komanso mawonekedwe athunthu a zokonda za njira zolipirira:

![Tsamba lathunthu la zokonda za njira zolipirira](/img/config/settings-payments-gateways-full.png)

**Kukhazikitsa gateway ya Stripe**

**Kukhazikitsa gateway ya PayPal**** **

**Kukhazikitsa zolipira pamanja**

Tsopano, ngati mukufuna kugwiritsa ntchito _WooCommerce_ , _GoCardless_ kapena _Payfast_ ngati njira yanu yolipirira, mudzafunika **kukhazikitsa ndi kukonza ma add-on awo**.

### Momwe mungakhazikitsire add-on ya WooCommerce:

Tikudziwa kuti _Stripe_ ndi _PayPal_ sizipezeka m'mayiko ena, zomwe zimachepetsa kapena kulepheretsa ogwiritsa ntchito Ultimate Multisite kugwiritsa ntchito plugin yathu bwino. Choncho tinapanga add-on yophatikiza _WooCommerce,_ yomwe ndi plugin yotchuka kwambiri ya malonda a pa intaneti. Opanga mapulogalamu padziko lonse adapanga ma add-on kuti aphatikize njira zolipirira zosiyanasiyana ku iyo. Tinagwiritsa ntchito mwayi uwu kuti tiwonjezere njira zolipirira zomwe mungagwiritse ntchito ndi dongosolo lolipiritsa la Ultimate Multisite.

_**CHOFUNIKA:** Ultimate Multisite: WooCommerce Integration imafuna kuti WooCommerce ikhale yoyatsidwa osachepera pa site yanu yayikulu._

Choyamba, chonde pitani ku tsamba la ma add-on. Mungalipeze popita ku **Ultimate Multisite > Settings**. Muyenera kuona tebulo la **Add-ons**. Dinani pa **Onani ma Add-ons athu**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Mukadina pa **Onani ma Add-ons athu** , mudzatumizidwa ku tsamba la ma add-on. Apa mungapeze ma add-on onse a Ultimate Multisite. Dinani pa add-on ya **Ultimate Multisite: WooCommerce Integration**.

![Tsamba la ma add-on likulemba ma add-on a Ultimate Multisite kuphatikizapo WooCommerce Integration](/img/addons/addons-page.png)

Zenera lidzatuluka ndi tsatanetsatane wa chowonjezera. Ingodinani **Ikani Tsopano**.

<!-- Chithunzi sichikupezeka: bokosi la tsatanetsatane wa chowonjezera cha Ultimate Multisite WooCommerce Integration chokhala ndi batani la Ikani Tsopano -->

Kuyika kukatha, mudzatumizidwa ku tsamba la mapulagini. Apa, ingodinani **Yatsani pa Network** ndipo chowonjezera cha WooCommerce chidzatsegulidwa pa netiweki yanu.

<!-- Chithunzi sichikupezeka: tsamba la mapulagini lokhala ndi ulalo wa Yatsani pa Network wa chowonjezera cha WooCommerce Integration -->

Mukachiyatsa, ngati mulibebe pulagini ya WooCommerce yoyikidwa ndi kuyatsidwa pa webusaiti yanu, mudzalandira chikumbutso.

<!-- Chithunzi sichikupezeka: chidziwitso cha admin chokumbutsa woyang'anira kuti ayike ndi kuyatsa pulagini ya WooCommerce -->

Kuti muwerenge zambiri za chowonjezera cha WooCommerce Integration, **dinani apa**.

### Momwe mungayikire chowonjezera cha GoCardless:

Masitepe oyikira chowonjezera cha _GoCardless_ ndi ofanana kwambiri ndi a chowonjezera cha _WooCommerce_. Chonde pitani ku tsamba la zowonjezera ndipo sankhani chowonjezera cha **Ultimate Multisite: GoCardless Gateway**.

<!-- Chithunzi sichikupezeka: tsamba la zowonjezera lokhala ndi chowonjezera cha Ultimate Multisite GoCardless Gateway chosonyezedwa -->

Zenera la chowonjezera lidzatuluka. Dinani **Ikani Tsopano**.

<!-- Chithunzi sichikupezeka: bokosi la tsatanetsatane wa chowonjezera cha Ultimate Multisite GoCardless Gateway chokhala ndi batani la Ikani Tsopano -->

Kuyika kukatha, mudzatumizidwa ku tsamba la mapulagini. Apa, ingodinani **Yatsani pa Network** ndipo chowonjezera cha _GoCardless_ chidzatsegulidwa pa netiweki yanu.

<!-- Chithunzi sichikupezeka: tsamba la mapulagini lokhala ndi ulalo wa Yatsani pa Network wa chowonjezera cha GoCardless Gateway -->

Kuti mudziwe momwe mungayambire kugwiritsa ntchito chipata cha _GoCardless_, **werengani nkhaniyi**.

### Momwe mungayikire chowonjezera cha Payfast:

Pitani ku tsamba la zowonjezera ndipo sankhani chowonjezera cha **Ultimate Multisite: Payfast Gateway**.

<!-- Chithunzi sichikupezeka: tsamba la zowonjezera lokhala ndi chowonjezera cha Ultimate Multisite Payfast Gateway chosonyezedwa -->

Zenera la chowonjezera lidzatuluka. Dinani **Ikani Tsopano.**

<!-- Chithunzi sichikupezeka: bokosi la tsatanetsatane wa chowonjezera cha Ultimate Multisite Payfast Gateway chokhala ndi batani la Ikani Tsopano -->

Kuyika kukatha, mudzatumizidwa ku tsamba la mapulagini. Apa, ingodinani **Yatsani pa Network** ndipo chowonjezera cha _Payfast_ chidzatsegulidwa pa netiweki yanu.

<!-- Chithunzi sichikupezeka: tsamba la mapulagini lokhala ndi ulalo wa Yatsani pa Network wa chowonjezera cha Payfast Gateway -->
