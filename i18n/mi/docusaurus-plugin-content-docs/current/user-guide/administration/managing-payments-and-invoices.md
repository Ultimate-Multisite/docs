---
title: Kaitiakitanga o ngā raupare me ngā invoice
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Whakawhanaungatanga me Pākehā (Managing Payments and Invoices) {#managing-payments-and-invoices}

## Whakawhanaunga o Ngā Rautaki Rautaki (Payment Settings) {#payment-settings}

Iha reira i te whaiārahi i pēke, ka tino kitea ana i roto i te whakarite ngā rautaki pai. Pāinga ki **Ultimate Multisite → Settings** ā, he rā i te **Payment** (Pākehā).

![Payment settings tab](/img/admin/settings-payments-top.png)

He whakaahua mō te whānui o te puta mai o ngā rautaki pai:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Rautaki Pēke Whānui (General Payment Options) {#general-payment-options}

I ngā rautaki pai, ka taea e koe te whakarite i:

- **Currency** — Te currency (pēke) pēnei i te whaiaro whakamahinga mō ngā pēke.
- **Currency Position** — Ko te wāpeha o te symbol o te currency (i muri/i whakawero i te whakahaupū).

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Ngā Pākehā Pēke (Payment Gateways) {#payment-gateways}

He tino whaiaro ana ko Ultimate Multisite e whakamohoho ngā pēke pai mō te pēke. Ka taea e koe te whakahou me te whakarite i kāore he mea i tēnei rā i te rautaki pai.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Ngā pākehā pai e rite ana:

- **Stripe** — Pēke o credit card mō Stripe
- **PayPal** — Pēke o PayPal
- **Manual** — Mō te whakatau pēke i runga i te offline (kua whakatika) ahau.

Kaori i roto i ngā pākehā pai ko he wāhi whakarite tino whakamahi ana ko he API keys me ngā rautaki hou.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Mode Sandbox (Sandbox Mode) {#sandbox-mode}

Ka taea e koe te whakahou i **Sandbox Mode** mō te whakamārama i tō pēke pai mō te whakamātautanga i roto i te wā o te whakatika. I roto i te wā o te sandbox mode, kāore he pēke tino i te whakamahinga.

## Whakawātea Ngā Pēke (Viewing Payments) {#viewing-payments}

Pāinga ki te puta mai o ngā pēke i runga i Ultimate Multisite mō te kite i ngā pēke katoa i roto i tō whānau.

![Payments list](/img/admin/payments-list.png)

Ka taea e koe te whakahoki i ngā pēke i runga i te status (whakawhanaungatanga, kua whakatika, pēke, whakaora) me te whakatū i pēke tino i roto i ngā pēke.

Whakatipu i te whakaaheke (payment) ki te whakaahua katoa o ia, ahakoaho ana i ngā whakamahi (line items), te mihi (membership) e whai ana, te mōhaka (customer information), me ngā whakaaturanga o te gateway o te paitanga (payment gateway data).

## Invoices (Mōhaka/Whakaaheke) {#invoices}

He taea ai i Ultimate Multisite te whakaratake invoice automatically mo ngā whakamahi. He taea ai koe te whakatika te template o te invoice me te format o te numbering (whakawāhi) anō ana i ngā settings o te Payment.

He option mō te whakatika te invoice template:

- **Nama o te whānau me te wāhi** e whakawhiti atu ana i ngā invoices
- **Format o te numbering o te invoice** me te urupurau (sequence)
- **Logo** e whakawhiti atu ana i te header o te invoice
- **Wāhi footer mō te whakamahi (Custom footer text)** mō ngā tino whaiaro, ngā whakamārama, ahau ngā whakamārama, me ngā whakaahuatanga reo (legal information)

Mō te whakatika te template o te invoice, pahi ki **Ultimate Multisite → Settings → Payment** ā, he whakawhiti atu i ngā settings e pai ana ki te invoice.
