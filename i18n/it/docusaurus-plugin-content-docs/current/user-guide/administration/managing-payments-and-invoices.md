---
title: Gestione dei pagamenti e delle fatture
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Gestione pagamenti e fatture

## Impostazioni pagamento

Prima di iniziare a ricevere pagamenti, dovrai configurare le impostazioni relative ai pagamenti. Vai su **Ultimate Multisite → Settings** e fai clic sulla scheda **Payment**.

![Scheda impostazioni pagamento](/img/admin/settings-payments-top.png)

### Opzioni generali di pagamento

Nelle impostazioni generali puoi configurare:

- **Currency** — La valuta predefinita utilizzata per le transazioni
- **Currency Position** — Dove appare il simbolo della valuta (prima/dopo l'importo)

![Impostazioni gateway di pagamento](/img/admin/settings-payments-options.png)

### Gateway di pagamento

Ultimate Multisite supporta più gateway di pagamento. Puoi abilitare e configurare ciascuno dalla scheda Impostazioni pagamento.

![Configurazione gateway di pagamento](/img/admin/settings-payments-gateways.png)

I gateway disponibili includono:

- **Stripe** — Pagamenti con carta di credito tramite Stripe
- **PayPal** — Pagamenti PayPal
- **Manual** — Per elaborazione di pagamenti offline o personalizzati

Ogni gateway ha la propria sezione di configurazione in cui inserisci le chiavi API e altre impostazioni.

![Impostazioni gateway aggiuntive](/img/admin/settings-payments-gateways-2.png)

### Modalità Sandbox

Puoi abilitare **Sandbox Mode** per testare l'integrazione dei pagamenti prima di andare in produzione. Quando la modalità sandbox è attiva, non verranno effettuati addebiti reali.

## Visualizzazione pagamenti

Vai alla pagina **Payments** sotto Ultimate Multisite per vedere tutte le transazioni nella tua rete.

![Elenco pagamenti](/img/admin/payments-list.png)

Puoi filtrare i pagamenti per stato (completati, in sospeso, falliti, rimborsati) e cercare transazioni specifiche.

Fai clic su un pagamento per vedere tutti i dettagli, inclusi gli articoli, l'abbonamento associato, le informazioni del cliente e i dati del gateway di pagamento.

## Fatture

Ultimate Multisite può generare automaticamente fatture per i pagamenti. Puoi personalizzare il modello di fattura e il formato di numerazione dalle impostazioni di pagamento.

Le opzioni di personalizzazione della fattura includono:

- **Company name and address** visualizzato sulle fatture
- **Invoice numbering** formato e sequenza
- **Logo** visualizzato nell'intestazione della fattura
- **Custom footer text** per termini, note o informazioni legali

Per personalizzare il modello di fattura, vai su **Ultimate Multisite → Settings → Payment** e cerca le impostazioni relative alle fatture.
