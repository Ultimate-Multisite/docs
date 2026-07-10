---
title: Ude na Ihegbu Ọkụ na Ihegbu Ọkụ
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Iye Ọrụ Imebe na Invoisi {#managing-payments-and-invoices}

## Asetara Ịgba Imebe {#payment-settings}

Ma ọ bụrụ na ị chọrọ ịbịa imebe, ị ga-adị mma ịse settings ndị a. Mene **Ultimate Multisite → Settings** gaa, ka tap akụkọ **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Nke a bụ ihe niile nke adịghị anyị na akụkọ setting imebe:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Ịgba Imebe Na-agwalụ {#general-payment-options}

Na settings ọ bụla, ị ga-adị mma ịse ihe ndị a:

- **Currency** — Currency ọ bụla na-agwalụ maka transactions
- **Currency Position** — Ụwa currency ahụ echegbu n'aka (oma/ọcha) nke akụkọ

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite na-agwalụ ihe imebe ọtụtụ. Ị ga-adị mma ịchegbu na-agwalụ ya na ịse ya ma ọ bụ na akụkọ Payment settings tab.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Ihe imebe ndị a na-anọrụ na:

- **Stripe** — Imebe credit card via Stripe
- **PayPal** — Imebe PayPal
- **Manual** — N'ime offline ma ọ bụ ịgba imebe ọkụkọ

Chii imebe na-anọrụ nwere akụkọ configuration ya ọbụrụ, onye ga-adị mma ịse API keys na ihe ndị ọzọ.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Ị ga-adị mma ịchegbu **Sandbox Mode** maka ịkpọ imebe gị ma ọ bụrụ na ị chọrọ ịprofa ihe imebe ahụ ma ọ bụrụ na ị nwere ike ịgba ya live. Mgbarịta sandbox mode, a ga-eghị anyị eme ndepụ ọ bụla.

## Ịgba Imebe {#viewing-payments}

Gaa n'akụkọ **Payments** nke Ultimate Multisite maka ị chọpụta imebe ọ bụla na ọkụkọ gị.

![Payments list](/img/admin/payments-list.png)

Ị ga-adị mma ịchegbu imebe dịka status (completed, pending, failed, refunded) ma ị chọpụta imebe ndị dị n'aka.

Bata n'ikpa iji ịhụ ma ọ bụ ihe niile nke eziokwu ahụ, onye a na-akọwa, nkọwa aka, na data gateway ịkwado.

## Invoices (Eziokwu Aka) {#invoices}

Ultimate Multisite ga-anọchịrị ịchebe invoice (eziokwu aka) ọ bụrụ na e ji iji ịkwado ihe nwere ike ịchekwa. Ọ dị m gị ịkwado template invoice na format ịchekwa a metụtara na Payment settings.

Ihe ndị ga-anọchịrị ịkwado invoice include:

- **Nwanyị aka na ama** nke e ji iji ịchebe ọ bụrụ na invoice
- **Format na ihe nwere ike ịchekwa invoice** na ihe dị n'ụlọ (sequence)
- **Logo** ga-anọchịrị na enyemọrọ invoice
- **Text footer metụtara gị** nke ihe ndị a, nkọwa aka, ma ọ bụ ihe juridical

Iji ịkwado template invoice, jikọpụta **Ultimate Multisite → Settings → Payment** ma jikọpụta settings ndị na-akọwa invoice.
