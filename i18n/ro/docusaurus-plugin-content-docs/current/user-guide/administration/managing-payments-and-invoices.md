---
title: Gestionarea plăților și a facturilor
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gestionarea plăților și facturilor {#managing-payments-and-invoices}

## Setări pentru plăți {#payment-settings}

Înainte să începi să primești plăți, va trebui să configurezi setările legate de plăți. Navighează la **Ultimate Multisite → Settings** și fă clic pe fila **Payment**.

![Fila de setări pentru plăți](/img/admin/settings-payments-top.png)

Iată o vedere completă a paginii de setări pentru plăți:

![Pagina completă de setări pentru plăți](/img/admin/settings-payments-full.png)

### Opțiuni generale pentru plăți {#general-payment-options}

În setările generale poți configura:

- **Monedă** — Moneda implicită utilizată pentru tranzacții
- **Poziția monedei** — Unde apare simbolul monedei (înainte/după sumă)

![Setări pentru gateway-ul de plată](/img/admin/settings-payments-options.png)

### Gateway-uri de plată {#payment-gateways}

Ultimate Multisite acceptă mai multe gateway-uri de plată. Îl poți activa și configura pe fiecare din fila de setări Payment.

![Configurarea gateway-ului de plată](/img/admin/settings-payments-gateways.png)

Gateway-urile disponibile includ:

- **Stripe** — Plăți cu cardul de credit prin Stripe
- **PayPal** — Plăți PayPal
- **Manual** — Pentru procesarea offline sau personalizată a plăților

Fiecare gateway are propria secțiune de configurare, unde introduci cheile API și alte setări.

![Setări suplimentare pentru gateway](/img/admin/settings-payments-gateways-2.png)

### Mod Sandbox {#sandbox-mode}

Poți activa **Mod Sandbox** pentru a testa integrarea plăților înainte de lansare. Când modul sandbox este activ, nu se vor efectua debitări reale.

## Vizualizarea plăților {#viewing-payments}

Navighează la pagina **Payments** din Ultimate Multisite pentru a vedea toate tranzacțiile din întreaga ta rețea.

![Lista plăților](/img/admin/payments-list.png)

Poți filtra plățile după stare (finalizate, în așteptare, eșuate, rambursate) și poți căuta tranzacții specifice.

Fă clic pe o plată pentru a vedea detaliile complete ale acesteia, inclusiv elementele rând, abonamentul asociat, informațiile despre client și datele gateway-ului de plată.

## Facturi {#invoices}

Ultimate Multisite poate genera automat facturi pentru plăți. Poți personaliza șablonul facturii și formatul de numerotare din setările Payment.

Opțiunile de personalizare a facturilor includ:

- **Numele și adresa companiei** afișate pe facturi
- **Numerotarea facturilor** format și secvență
- **Logo** afișat în antetul facturii
- **Text personalizat în subsol** pentru termeni, note sau informații legale

Pentru a personaliza șablonul facturii, mergi la **Ultimate Multisite → Settings → Payment** și caută setările legate de facturi.
