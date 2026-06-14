---
title: Ho na le ho tsoela le ho fana ka tšhobo le li-invoice
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ho Morero Le Tlhaloso Le Tlhaloso

## Setso Sa Tlhaloso

Go a tlo ka **Ultimate Multisite → Settings** le tla tsamaya ka tab ya **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Kea fa lefa la fanaeng tsa setso sa tlhaloso:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Boitshwaro Ba Tlhaloso Le Tlhaloso

Mo setso se fetang, u ka fana ka ho setse:

- **Currency** — Tlhaloso e fetang ebebe ea tsela eo ebebe ea tlhaloso.
- **Currency Position** — Kaiphihi le lina la tlhaloso le tla ba (ka pele/ka kgolo ha lefa).

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Tlhaloso Le Tlhaloso La Tlhaloso

Ultimate Multisite e tšoa le mekgwa e fapaneng tsa ditswalo tsa mokgwa o tsamaisang (multiple payment gateways). U ka ukhutafisa le u rata motho ka seka le seka ka tab ya Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mekgwa e tšoa e bontsha:

- **Stripe** — Ditswalo tsa card le Stripe
- **PayPal** — Ditswalo tsa PayPal
- **Manual** — Ho ditswalo tse di fapane (offline) kapa ho rata motho ka seka.

Ka mekgwa e tšoa, go na le seketso se se fapaneng se leng o tla ithuta API keys le setshwantsho se se fapaneng.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode (Mokgwa wa ho lula)

U ka ukhutafisa **Sandbox Mode** ho rata motho ka go ithuta ditswalo tsa motho lehle ha o tla fana ka tšoa e fapaneng. Ha Sandbox mode e le e tsamaile, ha ho tla fana ka tšoa e fapaneng.

## Ho bona Ditswalo tsa Motho (Viewing Payments)

Hloka ka **Payments** page ho Ultimate Multisite ho ba leboho bohle ba tšepetso tsa hau ka netefe ya hau.

![Payments list](/img/admin/payments-list.png)

U ka seleketsa tšepetso ka tsela (status) (e ne efe, e le teng, e ile e faka, e fetogela), le u ka hlalosa tšepetso e leng e leng.

Hloka ka tšepetso ho bona ditlhogo tsa yo o tla li-tšepetso tsa hae tse di fetang, di leboho tsa membership, litlhahlo tsa morao, le ditiro tsa payment gateway.

## Invoices (Litlhogo)

Ultimate Multisite e ka dira litlhogo tsa tšepetso ka tsela. U ka u rata template ya litlhogo le fōma ea ho numera ho fetoga ho setso sa Payments.

Tsebo ea ho rata litlhogo e na le:

Mofuta o leina la morao le lefatše ka invoices
Tsela ya ho fana ka sebopeo sa invoice (invoice numbering) le seqetshwe

**Logo** e lefatše ka sebopeo sa invoice (invoice header)
Lefutso la custom footer (custom footer text) le tsela ya ntlha, notes, kgolo ea litsela tsa ho ba le (legal information)

Ho fetola template ea invoice, a goba **Ultimate Multisite → Settings → Payment** le ho hlalosa sebopeo sa invoices.
