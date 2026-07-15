---
title: Maniĝo de Pagoj kaj Fakturaj
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Pagamentoj kaj Fakturoj Administrado

## Pagamentaj Rekonfiguradoj {#payment-settings}

Intervendi antaŭ tio, kiel vi komencas ricevi pagamentojn, vi bezonas konfiguri la pagament-relacionajn rekonfiguradojn. Navigu al **Ultimate Multisite → Settings** kaj kliku sur la tabon **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Jen kompleta vido de la paĝo de pagamentaj rekonfiguradoj:

![Payment settings full page](/img/admin/settings-payments-full.png)

### ĝenerala Pagamentaj Opcioj {#general-payment-options}

En la ĝeneraj rekonfiguradoj vi povas konfiguri:

- **Currency** — La defaulta monedaro, kiu estas uzata por transakciojn
- **Currency Position** — Ĉiː ĵus la loko de la simbolon de la monedaro (antaŭ/post la monton)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Pagamentaj Portoj (Payment Gateways) {#payment-gateways}

Ultimate Multisite suportas plurajn pagamentajn portojn. Vi povas aktivi kaj rekonfigurigi ĉion el ĉi tiu tabo de Pagamentaj rekonfiguradoj.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Laŭlistaj portoj inkluzivas:

- **Stripe** — Kreditaj kartaj pagamentoj per Stripe
- **PayPal** — PayPal pagamentoj
- **Manual** — Por ne-online aŭ personala pagamentaj procesoj

Chakla portoj havas sian propran sekcion de rekonfigurado, kie vi enteras API-chiavoj kaj aliajn rekonfiguradojn.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Modo (Sandbox Mode) {#sandbox-mode}

Vi povas aktivi **Sandbox Mode** por testare vian pagamentan integriĝon antaŭ ol vi komencas operi en la reala mondo. Kiam sandbox modo estas aktiva, neniu realaj fakturoj sera fariĝos.

## Pagado de Pagamentoj {#viewing-payments}

Navigu al la paĝo **Payments** sub Ultimate Multisite por vidi ĉiuj transakciojn sur via reron.

![Payments list](/img/admin/payments-list.png)

Vi povas filtri pagamentojn per staton (kompletita, pendanta, neokita, reklamita) kaj cherado por specifaj transakcioj.

Klicu sur la pago por detaloj ĝia plene informojn inkluzivaj liniojn de artikolo, asociitan membrespon, informojn pri la klastro kaj datumstaton de la pagamenta portanto.

## Fakturoj (Invoices) {#invoices}

Ultimate Multisite povas aŭtomate generi fakturojn por pagamentoj. Vi povas personaligi la faktura mallapon kaj numeradon de la formato el la ŝanĝaj datumoj de Pagamento (Payment settings).

Opciónoj por personaligi la faktura mallapon inkluzivas:

- **Nomo kaj adreso de la kompanio** prezentata sur fakturoj
- **Formato kaj sekvenco de numerado de la fakturo**
- **Logo** prezentata sur la ĉefparto de la fakturo
- **Personalia teksto por la piedro** por termino, notoj aŭ juridaj informoj

Por personaligi la faktura mallapon, diru **Ultimate Multisite → Settings → Payment** kaj rigardu la datumojn rilata al la fakturo.
