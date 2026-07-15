---
title: Pagdumala sa mga Bayad ug Invoice
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Pagdumala og Bayad ug Invoice

## Mga Setting sa Bayad {#payment-settings}

Sa dili pa magsugod ka makadawat og bayad, kinahanglan nimo i-configure ang mga setting nga may kalabotan sa bayad. Mag-navigate sa **Ultimate Multisite → Settings** ug i-click ang tab nga **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Ania ang tibuok tan-aw sa pahina sa payment settings:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Kinatibuk-ang Mga Opsyon sa Bayad {#general-payment-options}

Sa general settings, mahimo nimong i-configure ang mga mosunod:

- **Currency** — Ang default nga kwarta nga gigamit para sa mga transaksyon
- **Currency Position** — Asa moabot ang simbolo sa kwarta (sa una/pagkahuman sa kantidad)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Mga Payment Gateway {#payment-gateways}

Ang Ultimate Multisite nagsuporta og daghang payment gateways. Mahimo nimong i-enable ug i-configure ang matag usa gikan sa tab sa Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Ang mga available nga gateways naglakip na:

- **Stripe** — Credit card payments pinaagi sa Stripe
- **PayPal** — PayPal payments
- **Manual** — Para sa offline o custom payment processing

Matag gateway adunay kaugalingong seksyon sa configuration diin mohatag og API keys ug uban pang mga setting.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Mahimo nimong i-enable ang **Sandbox Mode** aron masulayan ang imong payment integration sa dili pa kini magpadayon (go live). Kung aktibo ang sandbox mode, walay tinuod nga bayad ang himuon.

## Pagsusi sa mga Bayad {#viewing-payments}

Mag-navigate sa pahina sa **Payments** ubos sa Ultimate Multisite aron makita ang tanang transaksyon sa imong network.

![Payments list](/img/admin/payments-list.png)

Mahimo nimong i-filter ang mga bayad base sa status (completed, pending, failed, refunded) ug magsearch para sa mga piho nga transaksyon.

Pindota ang usa ka bayad aron makita ang tanang detalye niini, lakip na ang mga item sa order, konektado nga membership, impormasyon sa customer, ug data sa payment gateway.

## Invoices {#invoices}

Ang Ultimate Multisite makahimo og invoices (bayad) awtomatiko para sa mga bayad. Mahimo nimo i-customize ang invoice template ug porma sa pagnumero gikan sa Payment settings.

Ang mga opsyon sa pag-customize sa invoice naglakip na:

- **Ngalan ug address sa kompanya** nga ipakita sa invoices
- Porma sa **pagnumero sa invoice** ug ang sunod nga numero
- **Logo** nga ipakita sa ulo sa invoice
- **Custom footer text** para sa mga termino, nota, o legal nga impormasyon

Aron i-customize ang invoice template, adto sa **Ultimate Multisite → Settings → Payment** ug pangitaa ang mga setting nga may kalabotan sa invoice.
