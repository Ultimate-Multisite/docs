---
title: Cyfrannu y peidiadau a'r ffurfau cyflwyno
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Cyflenion y Mae'r Płatheirau a'r Ffyrddiadau

## Cyddefnyddio'r Setiau Płatheirau

Yn Ofal i ddeall y cyflenwiad o płatheirau, byddwch yn angen i sicr y setiau sy'n gysylltiedig â'r płatheirau. Mawrch i **Ultimate Multisite → Settings** a chwilio ar y tab **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Dyma'r gweld cyfan o'r dudalen setiau płatheirau:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opsiadau Płatheirau Cyffredinol

Yn setiau cyffredinol gallwch chi ddefnyddio a chynllunio:

- **Currency** — Y cyfrifol (currency) sy'n cael ei ddefnyddio ar gyfer y trafnidiaethau
- **Currency Position** — Lle mae symbol y cyfrifol yn dangos (o flaen/ar ôl y amlwg)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Płatheirau Płatheirau

Mae Ultimate Multisite yn chymryd gyda phatheirau płatheirau amserol. Gallwch chi gael eu chynllunio a chynllunio un o'u cyflenwiadau o'r tab Setiau Płatheirau.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mae phatheirau sydd ar gael yn cynnwys:

- **Stripe** — Płatheirau cartref gyda Stripe
- **PayPal** — Płatheirau PayPal
- **Manual** — Ar gyfer trafnidiaethau płatheirau olygu neu ddefnyddiol

Mae pob phatheir yn cael ei setiad cyflenwiol ei hun lle mae'n rhoi API keys a setiau eraill.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Mod Cynllunio (Sandbox Mode)

Gallwch chi gael **Sandbox Mode** yn gweithredol i gwneud gwyliau'r chynllunio eich płatheirau cyn mynd i weithredol. Pan yw Sandbox Mode yn weithredol, bydd ychwanegau trafnidiaethol (charges) yn cael eu gwneud.

## Gweld Płatheirau

Mawrch i'r dudalen **Payments** o dan Ultimate Multisite i weld pob trafnidiaeth arall ar gyfer eich rheol.

![Payments list](/img/admin/payments-list.png)

Gallwch chi gwneud cyflenwiad y płatheirau gan ddefnyddio statws (completed, pending, failed, refunded) a chwilio am trafnidiaethau penodol.

Cliciwch ar ffurf y peidiad i gweld ei ddiweddion cyfan gan gynnwys yr adranau, y cyfrifau aysgrol, wybodaeth y gartref, a data'r gwyddu peidiad.

## Cyfrifau (Invoices)

Gall Ultimate Multisite cynrychioli cyfrifau yn awtomatig ar gyfer peidiadau. Gallwch gwahddeddu'r model cyfrifau a ffurf cymeriad o'r amgylchedd Peidiad (Payment settings).

Mae opsiynau cymeriad y cyfrifau yn cynnwys:

- **Enw a adres y cwmni** a ddefnyddir ar y cyfrifau
- **Ffurf cymeriad a gyfedd** a'r cyfansawdd
- **Logo** a ddefnyddir ar yr enw y cyfrifau
- **Text ffurf olaf (footer text) cyflog)** ar gyfer termau, nodau, neu wybodaeth diogelwch

I gwahddeddu'r model cyfrifau, mynd i **Ultimate Multisite → Settings → Payment** a chwilio am y setegau sy'n gysylltiedig â'r cyfrifau.
