---
title: Pamamahala ng mga Pagbabayad at Invoice
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Pamamahala ng mga Bayad at Invoice

## Mga Setting ng Pagbabayad

Bago ka magsimulang tumanggap ng mga bayad, kailangan mong i-configure ang mga setting na may kinalaman sa pagbabayad. Pumunta sa **Ultimate Multisite → Settings** at i-click ang **Payment** tab.

![Payment settings tab](/img/admin/settings-payments-top.png)

### Pangkalahatang Mga Opsyon sa Pagbabayad

Sa pangkalahatang mga setting, maaari mong i-configure ang:

- **Currency** — Ang default na currency na ginagamit sa mga transaksyon
- **Currency Position** — Kung saan lalabas ang currency symbol (bago/pagkatapos ng halaga)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Mga Payment Gateway

Sinusuportahan ng Ultimate Multisite ang maraming payment gateway. Maaari mong i-enable at i-configure ang bawat isa mula sa Payment settings tab.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Kasama sa mga available na gateway ang:

- **Stripe** — Mga pagbabayad gamit ang credit card sa pamamagitan ng Stripe
- **PayPal** — Mga pagbabayad sa PayPal
- **Manual** — Para sa offline o custom na pagproseso ng bayad

Ang bawat gateway ay may sariling configuration section kung saan mo ilalagay ang mga API key at iba pang mga setting.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

Maaari mong i-enable ang **Sandbox Mode** para subukan ang iyong payment integration bago ito gawing live. Kapag aktibo ang sandbox mode, walang totoong singil na gagawin.

## Pagtingin sa mga Bayad

Pumunta sa **Payments** page sa ilalim ng Ultimate Multisite para makita ang lahat ng transaksyon sa iyong network.

![Payments list](/img/admin/payments-list.png)

Maaari mong i-filter ang mga bayad ayon sa status (completed, pending, failed, refunded) at maghanap ng mga partikular na transaksyon.

I-click ang isang bayad para makita ang buong detalye nito kasama ang mga line item, kaugnay na membership, impormasyon ng customer, at data ng payment gateway.

## Mga Invoice

Awtomatikong makakagawa ng mga invoice ang Ultimate Multisite para sa mga bayad. Maaari mong i-customize ang invoice template at format ng pagnunumero mula sa Payment settings.

Kasama sa mga opsyon sa pag-customize ng invoice ang:

- **Pangalan at address ng kumpanya** na ipinapakita sa mga invoice
- **Format at sequence ng pagnunumero ng invoice**
- **Logo** na ipinapakita sa header ng invoice
- **Custom na footer text** para sa mga tuntunin, tala, o legal na impormasyon

Para i-customize ang invoice template, pumunta sa **Ultimate Multisite → Settings → Payment** at hanapin ang mga setting na may kinalaman sa invoice.
