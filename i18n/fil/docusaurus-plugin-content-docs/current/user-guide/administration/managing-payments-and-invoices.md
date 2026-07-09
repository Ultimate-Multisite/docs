---
title: Pamamahala ng mga Pagbabayad at Invoice
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Pamamahala ng mga Pagbabayad at Invoice

## Mga Setting ng Pagbabayad

Bago ka magsimulang tumanggap ng mga pagbabayad, kailangan mong i-configure ang mga setting na may kaugnayan sa pagbabayad. Pumunta sa **Ultimate Multisite → Mga Setting** at i-click ang tab na **Payment**.

![Tab ng mga setting ng pagbabayad](/img/admin/settings-payments-top.png)

Narito ang buong view ng pahina ng mga setting ng pagbabayad:

![Buong pahina ng mga setting ng pagbabayad](/img/admin/settings-payments-full.png)

### Mga Pangkalahatang Opsyon sa Pagbabayad

Sa mga pangkalahatang setting maaari mong i-configure ang:

- **Currency** — Ang default na currency na ginagamit para sa mga transaksyon
- **Currency Position** — Kung saan lumalabas ang simbolo ng currency (bago/pagkatapos ng halaga)

![Mga setting ng gateway ng pagbabayad](/img/admin/settings-payments-options.png)

### Mga Gateway ng Pagbabayad

Sinusuportahan ng Ultimate Multisite ang maraming gateway ng pagbabayad. Maaari mong paganahin at i-configure ang bawat isa mula sa tab ng mga setting ng Payment.

![Configuration ng gateway ng pagbabayad](/img/admin/settings-payments-gateways.png)

Kabilang sa mga available na gateway ang:

- **Stripe** — Mga pagbabayad gamit ang credit card sa pamamagitan ng Stripe
- **PayPal** — Mga pagbabayad sa PayPal
- **Manual** — Para sa offline o custom na pagproseso ng pagbabayad

Bawat gateway ay may sarili nitong seksyon ng configuration kung saan mo inilalagay ang mga API key at iba pang setting.

![Karagdagang mga setting ng gateway](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

Maaari mong paganahin ang **Sandbox Mode** upang subukan ang iyong integration ng pagbabayad bago ito gawing live. Kapag aktibo ang sandbox mode, walang tunay na singil na gagawin.

## Pagtingin sa mga Pagbabayad

Pumunta sa pahinang **Payments** sa ilalim ng Ultimate Multisite upang makita ang lahat ng transaksyon sa iyong network.

![Listahan ng mga pagbabayad](/img/admin/payments-list.png)

Maaari mong i-filter ang mga pagbabayad ayon sa status (nakumpleto, nakabinbin, nabigo, na-refund) at maghanap ng mga partikular na transaksyon.

I-click ang isang pagbabayad upang makita ang buong detalye nito kabilang ang mga line item, kaugnay na membership, impormasyon ng customer, at data ng gateway ng pagbabayad.

## Mga Invoice

Maaaring awtomatikong gumawa ang Ultimate Multisite ng mga invoice para sa mga pagbabayad. Maaari mong i-customize ang template ng invoice at format ng pagnunumero mula sa mga setting ng Payment.

Kabilang sa mga opsyon sa pag-customize ng invoice ang:

- **Pangalan at address ng kompanya** na ipinapakita sa mga invoice
- **Pagnunumero ng invoice** na format at pagkakasunod-sunod
- **Logo** na ipinapakita sa header ng invoice
- **Custom na text sa footer** para sa mga tuntunin, tala, o legal na impormasyon

Upang i-customize ang template ng invoice, pumunta sa **Ultimate Multisite → Mga Setting → Payment** at hanapin ang mga setting na may kaugnayan sa invoice.
