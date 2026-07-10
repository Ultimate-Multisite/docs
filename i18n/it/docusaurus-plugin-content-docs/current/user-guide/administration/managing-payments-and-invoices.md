---
title: Gestione di pagamenti e fatture
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gestione di pagamenti e fatture {#managing-payments-and-invoices}

## Impostazioni di pagamento {#payment-settings}

Prima di iniziare a ricevere pagamenti, dovrai configurare le impostazioni relative ai pagamenti. Vai su **Ultimate Multisite → Settings** e fai clic sulla scheda **Payment**.

![Scheda impostazioni di pagamento](/img/admin/settings-payments-top.png)

Ecco una vista completa della pagina delle impostazioni di pagamento:

![Pagina completa delle impostazioni di pagamento](/img/admin/settings-payments-full.png)

### Opzioni generali di pagamento {#general-payment-options}

Nelle impostazioni generali puoi configurare:

- **Valuta** — La valuta predefinita utilizzata per le transazioni
- **Posizione della valuta** — Dove appare il simbolo della valuta (prima/dopo l'importo)

![Impostazioni del gateway di pagamento](/img/admin/settings-payments-options.png)

### Gateway di pagamento {#payment-gateways}

Ultimate Multisite supporta più gateway di pagamento. Puoi abilitare e configurare ciascuno dalla scheda delle impostazioni Payment.

![Configurazione del gateway di pagamento](/img/admin/settings-payments-gateways.png)

I gateway disponibili includono:

- **Stripe** — Pagamenti con carta di credito tramite Stripe
- **PayPal** — Pagamenti PayPal
- **Manual** — Per l'elaborazione di pagamenti offline o personalizzata

Ogni gateway ha la propria sezione di configurazione in cui inserisci chiavi API e altre impostazioni.

![Impostazioni aggiuntive del gateway](/img/admin/settings-payments-gateways-2.png)

### Modalità Sandbox {#sandbox-mode}

Puoi abilitare la **Modalità Sandbox** per testare la tua integrazione di pagamento prima di andare online. Quando la modalità sandbox è attiva, non verrà effettuato alcun addebito reale.

## Visualizzazione dei pagamenti {#viewing-payments}

Vai alla pagina **Payments** sotto Ultimate Multisite per vedere tutte le transazioni nella tua rete.

![Elenco dei pagamenti](/img/admin/payments-list.png)

Puoi filtrare i pagamenti per stato (completato, in sospeso, non riuscito, rimborsato) e cercare transazioni specifiche.

Fai clic su un pagamento per vedere tutti i suoi dettagli, inclusi gli elementi della riga, l'abbonamento associato, le informazioni del cliente e i dati del gateway di pagamento.

## Fatture {#invoices}

Ultimate Multisite può generare automaticamente fatture per i pagamenti. Puoi personalizzare il modello della fattura e il formato della numerazione dalle impostazioni Payment.

Le opzioni di personalizzazione della fattura includono:

- **Nome e indirizzo dell'azienda** visualizzati sulle fatture
- **Numerazione della fattura** formato e sequenza
- **Logo** visualizzato nell'intestazione della fattura
- **Testo personalizzato del piè di pagina** per termini, note o informazioni legali

Per personalizzare il modello della fattura, vai su **Ultimate Multisite → Settings → Payment** e cerca le impostazioni relative alla fattura.
