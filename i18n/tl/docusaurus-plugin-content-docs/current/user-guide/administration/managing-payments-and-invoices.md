---
title: Pamamahala ng mga Bayad at Invoice
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Pamamahala ng mga Bayad at Invoice

## Mga Setting ng Pagbabayad

Bago ka magsimulang tumanggap ng bayad, kailangan mong i-configure ang mga setting na may kaugnayan sa pagbabayad. Pumunta sa **Ultimate Multisite → Settings** at i-click ang tab na **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Narito ang buong tingin ng pahina ng payment settings:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Pangkalahatang Opsyong Pagbabayad

Sa mga pangkalahatang setting, maaari mong i-configure ang mga sumusunod:

- **Currency** — Ang default na pera na ginagamit para sa mga transaksyon
- **Currency Position** — Kung saan lalabas ang simbolo ng pera (bago/pagkatapos ng halaga)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Mga Payment Gateway

Suporta ng Ultimate Multisite ang maraming payment gateway. Maaari mong i-enable at i-configure ang bawat isa mula sa tab na Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Ang mga available na gateway ay kinabibilangan ng:

- **Stripe** — Credit card payments gamit ang Stripe
- **PayPal** — PayPal payments
- **Manual** — Para sa offline o custom payment processing

Bawat gateway ay may sariling seksyon para sa configuration kung saan mo ilalagay ang API keys at iba pang settings.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

Maaari mong i-enable ang **Sandbox Mode** para subukan ang iyong payment integration bago ito ilabas sa live environment. Kapag aktibo ang sandbox mode, walang totoong bayad na gagawin.

## Pagtingin ng mga Bayad

Pumunta sa pahinang **Payments** sa ilalim ng Ultimate Multisite para makita ang lahat ng transaksyon sa buong network mo.

![Payments list](/img/admin/payments-list.png)

Maaari mong i-filter ang mga bayad base sa status (completed, pending, failed, refunded) at maghanap ng mga partikular na transaksyon.

I-click ang isang bayad para makita ang lahat ng detalye nito kabilang ang mga item, kaugnay na membership, impormasyon ng customer, at data ng payment gateway.

## Invoices

Awtomatikong gagawa ng Ultimate Multisite ng mga invoice para sa mga bayad. Maaari mong i-customize ang template ng invoice at ang format ng pagbibilang mula sa Payment settings.

Ang mga opsyon sa pag-customize ng invoice ay kinabibilangan ng:

- Pangalan ng kumpanya at address na ipinapakita sa mga invoice
- Format at pagkakasunod-sunod ng pagbibigay numero sa invoice
- Logo na ipinapakita sa header ng invoice
- Custom footer text para sa mga termino, nota, o impormasyong legal

Para i-customize ang template ng invoice, pumunta ka sa **Ultimate Multisite → Settings → Payment** at hanapin ang mga setting na may kaugnayan sa invoice.
