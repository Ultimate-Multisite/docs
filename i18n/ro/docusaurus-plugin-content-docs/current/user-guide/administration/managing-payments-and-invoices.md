---
title: Gestionarea plăților și facturilor
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Gestionarea plăților și a facturilor

## Setări de plată

Înainte de a începe să primești plăți, va trebui să configurezi setările legate de plăți. Navighează la **Ultimate Multisite → Settings** și dă clic pe tab-ul **Payment**.

![Tab-ul cu setările de plată](/img/admin/settings-payments-top.png)

### Opțiuni generale de plată

În setările generale poți configura:

- **Currency** — Moneda implicită folosită pentru tranzacții
- **Currency Position** — Unde apare simbolul monedei (înainte/după sumă)

![Setările gateway-ului de plată](/img/admin/settings-payments-options.png)

### Gateway-uri de plată

Ultimate Multisite suportă mai multe gateway-uri de plată. Poți activa și configura fiecare dintre ele din tab-ul de setări Payment.

![Configurarea gateway-ului de plată](/img/admin/settings-payments-gateways.png)

Gateway-urile disponibile includ:

- **Stripe** — Plăți cu cardul prin Stripe
- **PayPal** — Plăți prin PayPal
- **Manual** — Pentru procesarea plăților offline sau personalizate

Fiecare gateway are propria secțiune de configurare unde introduci cheile API și alte setări.

![Setări suplimentare pentru gateway](/img/admin/settings-payments-gateways-2.png)

### Modul Sandbox

Poți activa **Sandbox Mode** pentru a testa integrarea plăților înainte de a trece în producție. Când modul sandbox este activ, nu se vor efectua taxări reale.

## Vizualizarea plăților

Navighează la pagina **Payments** din Ultimate Multisite pentru a vedea toate tranzacțiile din rețeaua ta.

![Lista plăților](/img/admin/payments-list.png)

Poți filtra plățile după status (finalizate, în așteptare, eșuate, rambursate) și căuta tranzacții specifice.

Dă clic pe o plată pentru a vedea toate detaliile, inclusiv elementele facturate, abonamentul asociat, informațiile despre client și datele gateway-ului de plată.

## Facturi

Ultimate Multisite poate genera automat facturi pentru plăți. Poți personaliza șablonul facturii și formatul de numerotare din setările Payment.

Opțiunile de personalizare a facturilor includ:

- **Numele și adresa companiei** afișate pe facturi
- **Formatul de numerotare** a facturilor și secvența
- **Logo-ul** afișat în antetul facturii
- **Text personalizat în subsol** pentru termeni, note sau informații legale

Pentru a personaliza șablonul facturii, mergi la **Ultimate Multisite → Settings → Payment** și caută setările legate de facturi.
