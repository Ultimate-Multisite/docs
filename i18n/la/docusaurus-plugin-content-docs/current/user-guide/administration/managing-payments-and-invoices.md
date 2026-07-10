---
title: Administrare pagamenta et facturas
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Pagamentum et Facturae Administratio {#managing-payments-and-invoices}

## Configuratio Paymentium {#payment-settings}

Antequam incipias recipere pagamenta, necessuas sunt configurationes ad res paymentia. Ad **Ultimate Multisite → Settings** navigare et tabulam **Payment** cliquare debes.

![Tabula paymentis](/img/admin/settings-payments-top.png)

Hic est tota vista paginae setting paymentium:

![Plena pagina setting paymentium](/img/admin/settings-payments-full.png)

### Optiones Generalia Paymentiorum {#general-payment-options}

In optionibus generalibus possuris configurare:

- **Moneta** — Moneta default quae transactionibus usus est
- **Positio Monetaria** — Ubi symbol monetalis apparitur (ante/post quantitatem)

![Setting portarum paymentium](/img/admin/settings-payments-options.png)

### Portae Paymentiorum (Payment Gateways) {#payment-gateways}

Ultimate Multisite plures portas paymentiorum sustinet. Omnes eam activare et configurare possuris a tabula Payment.

![Configuration portarum paymentiorum](/img/admin/settings-payments-gateways.png)

Portae disponendi includunt:

- **Stripe** — Pagamenta per card via Stripe
- **PayPal** — Pagamenta PayPal
- **Manual** — Ad praecessum offline vel transactionem customem

Omnis porta suam sectionem configurationem habet ubi claves API et alia optiones inseres.

![Additiones setting portarum paymentiorum](/img/admin/settings-payments-gateways-2.png)

### Modus Sandbox (Sandbox Mode) {#sandbox-mode}

Possuris **Modum Sandbox** activare ut integration paymentium tuas testare antequam in vivo ire. Cum modus sandbox activus est, nulli reales onus factum erit.

## Spectaculum Paymentiorum {#viewing-payments}

Ad paginam **Payments** sub Ultimate Multisite navigare possuris ut omnes transactiones per network tuum videres.

![Lista paymentium](/img/admin/payments-list.png)

Paymentia filtere per status (completa, pendens, fallida, restituta) et transactiones specificas quaerere possuris.

Clicca in un pagamento uti ad videris omnia detiles, inclusa item, membrorum associatum, informationem clientis et data portalis debitum.

## Facturae (Invoices) {#invoices}

Ultimate Multisite potest automaticam facturas pro pagamentis generare. Formam templati facturarum et formatum numerationis possuris ex pengaturanibus Payment.

Opções ad personalizandum facturam includunt:

- **Nomen et adressa societatis** quae in facturis ostenduntur
- **Formatum et sequentiam numerationis facturarum**
- **Logo** quod in capite facturarum ostenditur
- **Textus pedis (footer) customis** ad termini, notae vel informationem iuridicam

Ad personalizandum templum facturarum, adveniae **Ultimate Multisite → Settings → Payment** et quaerere pengaturania ad facturas.
