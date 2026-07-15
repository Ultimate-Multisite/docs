---
title: Maareynta Lacagta iyo Faahfaahinta
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Maareyntaalka Lacagta iyo Faqrinta

## Dejinta Dejinta Lacagta (Payment Settings) {#payment-settings}

Lacagta qaadista bilaabidda ka hor intaadan bilowdo in aad lacago hesho, waxaad u baahan tahay inaad dejiso dejimaha la xiriira lacagta. Tag **Ultimate Multisite → Settings** oo guji tab-ka **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Halkan waa aragti dhammaystiran oo ah bogga dejinta lacagta:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Doorashooyinka Guud ee Lacagta (General Payment Options) {#general-payment-options}

Dejinta guudka, waxaad dejin kartaa:

- **Currency** — Lacagta asalka ah ee loo isticmaalo macaamilada
- **Currency Position** — Xagee lagu soo bandhigo calaamadda lacagta (ka hor/ka dib qaddarka)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Weedhaha Lacagta (Payment Gateways) {#payment-gateways}

Ultimate Multisite wuxuu taageera weydiimo lacag ah oo badan. Waxaad furtaa oo dejisaa kasta oo ka mid ah tabka Dejinta Lacagta.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Weedhaha la heli karo waxaa ka mid ah:

- **Stripe** — Lacag bixinta kartida (credit card payments) iyadoo la isticmaalayo Stripe
- **PayPal** — Lacag bixinta PayPal
- **Manual** — Waxaa loo isticmaalaa macaamilka aan online ah ama qaab gaar ah oo lacagta lagu maamulo

Kasta oo weydiimo (gateway) ay leeyihiin qayb dejin la xiriira oo aad ku dhex galayso API keys iyo dejin kale.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Mode Sandbox (Sandbox Mode) {#sandbox-mode}

Waxaad furtaa **Sandbox Mode** si aad u baaritaan karto isdhexgalka lacagtaada ka hor intaadan bilaabin shaqada dhabta ah. Marka sandbox mode uu socdo, ma lahaan doono lacago dhab ah oo la qaado.

## Aragtida Lacagta (Viewing Payments) {#viewing-payments}

Tag bogga **Payments** ee hoos ka ah Ultimate Multisite si aad u aragto dhammaan macaamilada ee shabakadahaaga.

![Payments list](/img/admin/payments-list.png)

Waxaad kala qaadi kartaa lacagta iyadoo la isticmaalayo xaaladda (completed, pending, failed, refunded) oo aad raadin karto macaamil gaar ah.

Marka aad koobka lacagta ka riixdo si aad u aragto dhammaan faahfaahinta oo ay ku jiraan qaybaha alaabta (line items), xiriirka socda (membership), macluumaadka macaamiisha, iyo macluumaadka habka lacagta la qaadayo (payment gateway data).

## Invoices (Fakiro Lacagta) {#invoices}

Ultimate Multisite waxay si toos ah u samayn kartaa faahfaahinta lacagta (invoices) ee lacagta la bixiyo. Waxaad ku hagaajin kartaa qaabka faahfaahinta iyo habka tartanka (numbering format) laga isticmaalo iyadoo la adeegsanayo settings-ka Lacagta (Payment settings).

Waxyaabaha aad samayn karto si aad u hagaajiso qaabka faahfaahinta waxaa ka mid ah:

- **Magaca iyo ciidda shirkadda** ee ku soo bandhigay faahfaahinta lacagta
- **Qaab tartanka (numbering format)** iyo sida ay u socoto
- **Logo** ee lagu soo bandhigo madaxa faahfaahinta lacagta
- **Qoraalka hoose (footer text) oo gaar ah** oo ku saabsan shuruudaha, qoraallada muhiimka ah, ama macluumaadka sharciyeed

Si aad u hagaajiso qaabka faahfaahinta lacagta, tag **Ultimate Multisite → Settings → Payment** oo raadi settings-ka la xiriira faahfaahinta lacagta.
