---
title: Configurazione iniziale e configurazione del provider
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: configurazione iniziale e configurazione dei provider {#domain-seller-setup-and-provider-configuration}

L'addon Domain Seller include una procedura guidata di configurazione che ti accompagna in ogni passaggio richiesto. Questa pagina copre il flusso della procedura guidata e come configurare o riconfigurare i provider in seguito.

## Requisiti {#requirements}

- **Multisite Ultimate** v2.4.12 o superiore, attivato a livello di network
- **PHP** 7.4+
- Credenziali API per almeno un registrar supportato

## Procedura guidata di configurazione al primo avvio {#first-run-setup-wizard}

La procedura guidata di configurazione si avvia automaticamente la prima volta che attivi il plugin a livello di network. È anche disponibile in qualsiasi momento da **Network Admin › Ultimate Multisite › Configurazione Domain Seller**.

### Passaggio 1 — Scegli un provider {#step-1--choose-a-provider}

Seleziona il registrar che desideri connettere. Opzioni supportate:

| Provider | Gestione DNS | Privacy WHOIS |
|---|---|---|
| OpenSRS | Sì | Sì |
| Namecheap | No | Sì (WhoisGuard, gratis) |
| HostAfrica | Sì | Sì (protezione ID) |
| Openprovider | Sì | Sì |
| Hostinger | Tramite il mapping dei domini core Hostinger per i domini ospitati | Sì |
| GoDaddy | No | No |
| ResellerClub | Sì | No |
| NameSilo | No | No |
| Enom | Sì | No |

### Passaggio 2 — Inserisci le credenziali {#step-2--enter-credentials}

Ogni provider ha campi credenziali diversi:

**OpenSRS** — Nome utente e chiave privata (dal OpenSRS Reseller Control Panel)

**Namecheap** — Nome utente e chiave API (da Account › Strumenti › Accesso API)

**HostAfrica** — Endpoint API Domains Reseller e credenziali dal modulo reseller HostAfrica. Al momento non è documentato alcun endpoint sandbox separato; esegui test con controlli sicuri di sola lettura prima di effettuare registrazioni live.

**Openprovider** — Nome utente e password con accesso API abilitato. La modalità sandbox opzionale usa la API sandbox di Openprovider, e un handle cliente predefinito opzionale può essere riutilizzato per le registrazioni.

**Hostinger** — Il token API hPanel condiviso di Hostinger dall'integrazione core Hostinger. Lo stesso token alimenta il mapping dei domini core e le operazioni di registrazione di Domain Seller.

**GoDaddy** — Chiave API e secret (da developer.godaddy.com)

**ResellerClub** — ID reseller e chiave API (dal pannello di controllo ResellerClub)

**NameSilo** — Chiave API (da namesilo.com › Account › API Manager)

**Enom** — ID Account e token API

Seleziona **Modalità sandbox** dove disponibile per testare con l'ambiente di prova del provider prima di andare live.

### Passaggio 3 — Testa la connessione {#step-3--test-the-connection}

Fai clic su **Test Connection**. La procedura guidata invia una chiamata API leggera per verificare credenziali e connettività. Risolvi eventuali problemi con le credenziali prima di continuare.

### Passaggio 4 — Importa i TLD {#step-4--import-tlds}

Fai clic su **Import TLDs** per recuperare tutti i TLD disponibili e i prezzi wholesale dal provider connesso. Questo popola l'elenco dei TLD usato dai prodotti dominio. L'importazione può richiedere 30–60 secondi per i provider con cataloghi TLD di grandi dimensioni.

I TLD vengono inoltre risincronizzati automaticamente una volta al giorno tramite un cron job pianificato.

### Passaggio 5 — Crea un prodotto dominio {#step-5--create-a-domain-product}

La procedura guidata crea un prodotto dominio predefinito catch-all con un markup del 10%. Puoi modificare questo prodotto immediatamente oppure saltare il passaggio e creare prodotti manualmente in **Ultimate Multisite › Prodotti**.

Consulta [Prodotti dominio e prezzi](./domain-products) per la guida completa alla configurazione del prodotto.

---

## Riconfigurazione di un provider {#reconfiguring-a-provider}

Vai a **Network Admin › Ultimate Multisite › Impostazioni › Domain Seller** (oppure fai clic su **Impostazioni** nell'elenco dei plugin).

La pagina delle impostazioni contiene:

- **Abilita vendita di domini** — attiva/disattiva l'intera funzionalità
- **Provider predefinito** — il provider usato per le ricerche di domini e i nuovi prodotti
- **TLD massimi per ricerca** — quanti TLD controllare quando un cliente effettua una ricerca; valori più alti mostrano più opzioni ma sono più lenti
- **Durata cache disponibilità** — per quanto tempo memorizzare nella cache i risultati di disponibilità e prezzi; valori più bassi sono più accurati ma aumentano le chiamate API
- **Gestisci prodotti dominio** — link rapido all'elenco Prodotti
- **Configura provider** — apre l'Integration Wizard per aggiungere o riconfigurare i provider

### Aggiungere un secondo provider {#adding-a-second-provider}

Fai clic su **Configura provider** ed esegui nuovamente la procedura guidata per il nuovo registrar. Puoi avere più provider configurati contemporaneamente. Assegna ogni prodotto dominio a un provider specifico, oppure lascialo su quello predefinito.

### Sincronizzazione manuale dei TLD {#syncing-tlds-manually}

Nella pagina delle impostazioni, fai clic su **Sync TLDs** accanto a qualsiasi provider configurato per recuperare i prezzi più recenti. Questo è utile dopo che un provider aggiorna i prezzi wholesale o aggiunge nuovi TLD.

---

## Log {#logs}

Ogni provider scrive nel proprio canale di log. I log sono visualizzabili in **Network Admin › Ultimate Multisite › Logs**:

| Canale di log | Contenuti |
|---|---|
| `domain-seller-registration` | Tutti i tentativi di registrazione (riusciti e non riusciti) |
| `domain-seller-renewal` | Risultati del job di rinnovo |
| `domain-seller-opensrs` | Attività API OpenSRS grezza |
| `domain-seller-namecheap` | Attività API Namecheap grezza |
| `domain-seller-hostafrica` | Attività API HostAfrica grezza |
| `domain-seller-openprovider` | Attività API Openprovider grezza |
| `domain-seller-hostinger` | Attività API Hostinger grezza |
| `domain-seller-godaddy` | Attività API GoDaddy grezza |
| `domain-seller-resellerclub` | Attività API ResellerClub grezza |
| `domain-seller-namesilo` | Attività API NameSilo grezza |
| `domain-seller-enom` | Attività API Enom grezza |

---

## Note sulle funzionalità dei provider {#provider-capability-notes}

Non tutte le API dei registrar espongono le stesse operazioni. L'addon mostra le operazioni non supportate con errori chiari rivolti agli amministratori, invece di fallire silenziosamente.

- **HostAfrica** supporta il flusso di lavoro live per rivenditori più ampio, inclusi ricerca, sincronizzazione TLD/prezzi, registrazione, rinnovo, trasferimento, aggiornamenti dei nameserver, record DNS, codici EPP, blocco del registrar e protezione ID.
- **Openprovider** supporta la sincronizzazione TLD con prezzi da rivenditore, registrazione, rinnovo, trasferimenti, aggiornamenti dei nameserver, zone DNS, codici EPP, blocco del registrar e privacy WHOIS. Si autentica con un bearer token di breve durata che l'addon aggiorna automaticamente.
- **Hostinger** supporta ricerca disponibilità, registrazione, ricerca nel portfolio, aggiornamenti dei nameserver, blocco del registrar e privacy WHOIS tramite il token API hPanel condiviso. L'API pubblica Domains di Hostinger non espone prezzi da rivenditore/all'ingrosso, trasferimento in entrata, rinnovo esplicito o recupero del codice EPP; i rinnovi sono solo con rinnovo automatico.
