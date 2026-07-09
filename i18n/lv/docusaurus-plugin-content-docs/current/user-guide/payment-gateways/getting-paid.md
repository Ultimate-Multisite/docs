---
title: Maksājumu saņemšana
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Maksājumu saņemšana (v2)

_**SVARĪGA PIEZĪME: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Ultimate Multisite ir iebūvēta dalības un norēķinu sistēma. Lai mūsu norēķinu sistēma darbotos, esam integrējuši visbiežāk e-komercijā izmantotās maksājumu vārtejas. Noklusējuma maksājumu vārtejas Ultimate Multisite ir _Stripe_ , _PayPal_ un manuālais maksājums. Varat arī izmantot _WooCommerce_ , _GoCardless_ un _Payfast_ maksājumu saņemšanai, instalējot to attiecīgos papildinājumus.

## Pamata iestatījumi

Jūs varat konfigurēt jebkuru no šīm maksājumu vārtejām Ultimate Multisite maksājumu iestatījumos. To varat atrast, dodoties uz **Ultimate Multisite menu > Settings > Payments.**

![Maksājumu iestatījumu lapa Ultimate Multisite, kurā redzams Payments panelis](/img/config/payments-settings-page.png)

Pirms iestatāt savu maksājumu vārteju, lūdzu, apskatiet pamata maksājumu iestatījumus, ko varat konfigurēt:

**Piespiest automātisko atjaunošan** **u:** Tas nodrošinās, ka maksājums automātiski atkārtosies katra norēķinu cikla beigās atkarībā no lietotāja izvēlētā norēķinu biežuma.

<!-- Ekrānuzņēmums nav pieejams: Force Auto-Renew pārslēga iestatījums Payments iestatījumu lapā -->

Ultimate Multisite v2.13.0 pārbauda, vai aktīvajai vārtejai ir atkārtoti izmantojami atjaunošanas akreditācijas dati, pirms tiek saglabāta periodiska dalība ar iespējotu automātisko atjaunošanu. Atjaunošanas akreditācijas dati var būt vārtejas abonements, norēķinu vienošanās, saglabāts vault token vai līdzvērtīga atkārtoti izmantojama maksājuma metode. Ja vārteja ziņo, ka nav izmantojamu akreditācijas datu, Ultimate Multisite saglabā dalību, bet izslēdz automātisko atjaunošanu un reģistrē trūkstošo akreditācijas datu stāvokli, lai administrators vai atbalsta process varētu lūgt klientam atkārtoti autorizēt maksājumu pirms atjaunošanas datuma.

Tas novērš situāciju, kurā dalība izskatās kā automātiski atjaunojama, ja vārteja var iekasēt tikai vienreizējus maksājumus. Vārteju papildinājumiem būtu jāapstiprina, ka periodiskie checkout saglabā atkārtoti izmantojamus akreditācijas datus, īpaši tad, ja vārteja atbalsta gan vienreizējas iekasēšanas, gan vault/subscription maksājumu režīmus.

**Atļaut izmēģinājumus bez maksājuma** **metodes:** Ja šī opcija ir iespējota, jūsu klientam reģistrācijas procesa laikā nebūs jāpievieno nekāda finanšu informācija. Tā būs nepieciešama tikai pēc izmēģinājuma perioda beigām.

<!-- Ekrānuzņēmums nav pieejams: Allow Trials Without Payment Method pārslēgs Payments iestatījumu lapā -->

**Sūtīt rēķinu pēc maksājuma apstiprināšanas:** Tas dod jums iespēju izvēlēties, vai sūtīt rēķinu pēc maksājuma. Ņemiet vērā, ka lietotājiem būs piekļuve savai maksājumu vēsturei viņu apakšvietnes dashboard. Šī opcija neattiecas uz manuālo vārteju.

<!-- Ekrānuzņēmums nav pieejams: Send Invoice on Payment Confirmation pārslēgs Payments iestatījumu lapā -->

**Rēķinu numerācijas shēma:** Šeit varat izvēlēties vai nu maksājuma atsauces kodu, vai secīgu numerācijas shēmu. Ja izvēlaties rēķiniem izmantot maksājuma atsauces kodu, jums nekas nav jākonfigurē. Ja izvēlaties izmantot secīgu numerācijas shēmu, jums būs jākonfigurē **nākamais rēķina numurs** (šis numurs tiks izmantots kā rēķina numurs nākamajam sistēmā ģenerētajam rēķinam. Katru reizi, kad tiek izveidots jauns rēķins, tas tiek palielināts par vienu. Varat to mainīt un saglabāt, lai atiestatītu rēķinu secīgo numuru uz konkrētu vērtību) un **rēķina numura prefikss.**

<!-- Ekrānuzņēmums nav pieejams: Invoice numbering scheme nolaižamā izvēlne ar Payment Reference Code un Sequential Number opcijām -->

<!-- Ekrānuzņēmums nav pieejams: Next invoice number un invoice number prefix lauki, kas redzami, kad ir izvēlēts Sequential Number -->

## Kur atrast vārtejas:

Maksājumu vārtejas varat iestatīt tajā pašā lapā ( **Ultimate Multisite > Settings > Payments**). Tieši zem **aktīvās maksājumu vārtejas** jūs varēsiet redzēt: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ un _Manual_.

![Aktīvo maksājumu vārteju sadaļa, kurā uzskaitīti Stripe, Stripe Checkout, PayPal un Manual](/img/config/payments-active-gateways.png)

Mums ir atsevišķs raksts katrai maksājumu vārtejai, kas palīdzēs jums veikt tās iestatīšanas darbības; tos varat atrast zemāk esošajās saitēs.

Varat skatīt un rediģēt maksājumu informāciju:

![Maksājuma rediģēšanas saskarne](/img/admin/payment-edit.png)

Šeit ir pilns maksājuma rediģēšanas lapas skats:

![Pilna maksājuma rediģēšanas saskarne](/img/admin/payment-edit-full.png)

Šeit ir arī pilns maksājumu vārteju iestatījumu skats:

![Pilna maksājumu vārteju iestatījumu lapa](/img/config/settings-payments-gateways-full.png)

**Stripe vārtejas iestatīšana**

**PayPal vārtejas iestatīšana**** **

**Manuālo maksājumu iestatīšana**

Tagad, ja vēlaties izmantot _WooCommerce_ , _GoCardless_ vai _Payfast_ kā savu maksājumu vārteju, jums būs **jāinstalē un jākonfigurē to papildinājumi**.

### Kā instalēt WooCommerce papildinājumu:

Mēs saprotam, ka _Stripe_ un _PayPal_ dažās valstīs nav pieejami, kas ierobežo vai traucē Ultimate Multisite lietotājiem efektīvi izmantot mūsu plugin. Tāpēc mēs izveidojām papildinājumu, lai integrētu _WooCommerce,_ kas ir ļoti populārs e-komercijas plugin. Izstrādātāji visā pasaulē ir izveidojuši papildinājumus, lai tajā integrētu dažādas maksājumu vārtejas. Mēs izmantojām šo iespēju, lai paplašinātu maksājumu vārtejas, ko varat izmantot ar Ultimate Multisite norēķinu sistēmu.

_**SVARĪGI:** Ultimate Multisite: WooCommerce Integration prasa, lai WooCommerce būtu aktivizēts vismaz jūsu galvenajā vietnē._

Vispirms, lūdzu, dodieties uz papildinājumu lapu. To varat atrast, dodoties uz **Ultimate Multisite > Settings**. Jums vajadzētu redzēt **Add-ons** tabulu. Noklikšķiniet uz **Check our Add-ons**.

<!-- Ekrānuzņēmums nav pieejams: Add-ons tabula Ultimate Multisite Settings sānu joslā ar Check our Add-ons saiti -->

Pēc noklikšķināšanas uz **Check our Add-ons** jūs tiksiet novirzīts uz papildinājumu lapu. Šeit varat atrast visus Ultimate Multisite papildinājumus. Noklikšķiniet uz **Ultimate Multisite: WooCommerce Integration** papildinājuma.

![Papildinājumu lapa, kurā uzskaitīti Ultimate Multisite papildinājumi, tostarp WooCommerce Integration](/img/addons/addons-page.png)

Tiks parādīts logs ar papildinājuma informāciju. Vienkārši noklikšķiniet uz **Instalēt tagad**.

<!-- Ekrānuzņēmums nav pieejams: Ultimate Multisite WooCommerce Integration papildinājuma informācijas dialogs ar pogu Instalēt tagad -->

Kad instalēšana būs pabeigta, jūs tiksiet novirzīts uz pluginu lapu. Šeit vienkārši noklikšķiniet uz **Aktivizēt tīklā**, un WooCommerce papildinājums tiks aktivizēts jūsu tīklā.

<!-- Ekrānuzņēmums nav pieejams: pluginu lapa ar saiti Aktivizēt tīklā WooCommerce Integration papildinājumam -->

Pēc tā aktivizēšanas, ja jūsu tīmekļa vietnē joprojām nav instalēts un aktivizēts WooCommerce plugins, jūs saņemsiet atgādinājumu.

<!-- Ekrānuzņēmums nav pieejams: administrēšanas paziņojums, kas atgādina administratoram instalēt un aktivizēt WooCommerce pluginu -->

Lai uzzinātu vairāk par WooCommerce Integration papildinājumu, **noklikšķiniet šeit**.

### Kā instalēt GoCardless papildinājumu:

Darbības, lai instalētu _GoCardless_ papildinājumu, ir gandrīz tādas pašas kā _WooCommerce_ papildinājumam. Lūdzu, dodieties uz papildinājumu lapu un atlasiet **Ultimate Multisite: GoCardless Gateway** papildinājumu.

<!-- Ekrānuzņēmums nav pieejams: papildinājumu lapa ar izceltu Ultimate Multisite GoCardless Gateway papildinājumu -->

Tiks parādīts papildinājuma logs. Noklikšķiniet uz **Instalēt tagad**.

<!-- Ekrānuzņēmums nav pieejams: Ultimate Multisite GoCardless Gateway papildinājuma informācijas dialogs ar pogu Instalēt tagad -->

Kad instalēšana būs pabeigta, jūs tiksiet novirzīts uz pluginu lapu. Šeit vienkārši noklikšķiniet uz **Aktivizēt tīklā**, un _GoCardless_ papildinājums tiks aktivizēts jūsu tīklā.

<!-- Ekrānuzņēmums nav pieejams: pluginu lapa ar saiti Aktivizēt tīklā GoCardless Gateway papildinājumam -->

Lai uzzinātu, kā sākt darbu ar _GoCardless_ vārteju, **izlasiet šo rakstu**.

### Kā instalēt Payfast papildinājumu:

Dodieties uz papildinājumu lapu un atlasiet **Ultimate Multisite: Payfast Gateway** papildinājumu.

<!-- Ekrānuzņēmums nav pieejams: papildinājumu lapa ar izceltu Ultimate Multisite Payfast Gateway papildinājumu -->

Tiks parādīts papildinājuma logs. Noklikšķiniet uz **Instalēt tagad.**

<!-- Ekrānuzņēmums nav pieejams: Ultimate Multisite Payfast Gateway papildinājuma informācijas dialogs ar pogu Instalēt tagad -->

Kad instalēšana būs pabeigta, jūs tiksiet novirzīts uz pluginu lapu. Šeit vienkārši noklikšķiniet uz **Aktivizēt tīklā**, un _Payfast_ papildinājums tiks aktivizēts jūsu tīklā.

<!-- Ekrānuzņēmums nav pieejams: pluginu lapa ar saiti Aktivizēt tīklā Payfast Gateway papildinājumam -->
