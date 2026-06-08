---
title: Configurazione e Configurazione del Provider
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Configurazione e Provider

Il plugin Domain Seller include un assistente di configurazione guidato che ti accompagnerà in ogni passaggio necessario. Questa pagina copre il flusso dell'assistente e come configurare o riconfigurare i provider in seguito.

## Requisiti

- **Multisite Ultimate** v2.4.12 o superiore, attivato a livello di network
- **PHP** 7.4+
- Credenziali API per almeno un registrar supportato

## Assistente di configurazione iniziale

L'assistente di configurazione si avvia automaticamente la prima volta che attivi il plugin a livello di network. È disponibile anche in qualsiasi momento da **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Passo 1 — Scegli un provider

Seleziona il registrar che desideri connettere. Opzioni supportate:

| Provider | Gestione DNS | Privacy WHOIS |
|---|---|---|
| OpenSRS | Sì | Sì |
| Namecheap | No | Sì (WhoisGuard, gratuito) |
| GoDaddy | No | No |
| ResellerClub | Sì | No |
| NameSilo | No | No |
| Enom | Sì | No |

### Passo 2 — Inserisci le credenziali

Ogni provider richiede campi di credenziali diversi:

**OpenSRS** — Nome utente e chiave privata (dal pannello di controllo Reseller OpenSRS)

**Namecheap** — Nome utente e chiave API (da Account › Tools › API Access)

**GoDaddy** — Chiave API e segreto (da developer.godaddy.com)

**ResellerClub** — ID Reseller e chiave API (dal pannello di controllo ResellerClub)

**NameSilo** — Chiave API (da namesilo.com › Account › API Manager)

**Enom** — ID Account e token API

Controlla **Sandbox mode** (modalità sandbox) quando disponibile per testare l'ambiente del provider prima di andare online.

### Passo 3 — Testa la connessione

Clicca su **Test Connection**. L'assistente invia una chiamata API leggera per verificare le credenziali e la connettività. Correggi eventuali problemi di credenziali prima di continuare.

### Passo 4 — Importa i TLD

Clicca su **Import TLDs** per recuperare tutti i TLD disponibili e i prezzi all'ingrosso dal provider connesso. Questo popola l'elenco TLD utilizzato dai prodotti di dominio. L'importazione può richiedere dai 30 ai 60 secondi per i provider con cataloghi TLD ampi.

I TLD vengono anche risincronizzati automaticamente una volta al giorno tramite un cron job programmato.

### Passo 5 — Crea un prodotto dominio

L'assistente crea un prodotto dominio predefinito "catch-all" con un margine del 10%. Puoi modificare immediatamente questo prodotto o saltare e creare i prodotti manualmente sotto **Ultimate Multisite › Products**.

Consulta [Domain Products and Pricing](./domain-products) per la guida completa alla configurazione dei prodotti.

---

## Riconfigurare un provider

Vai su **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o clicca su **Settings** nell'elenco dei plugin).

La pagina delle impostazioni contiene:

- **Enable domain selling** — attiva/disattiva l'intera funzionalità
- **Default provider** — il provider utilizzato per le ricerche di dominio e i nuovi prodotti
- **Max TLDs per search** — quanti TLD controllare quando un cliente effettua una ricerca; valori più alti mostrano più opzioni ma sono più lenti
- **Availability cache duration** — per quanto tempo memorizzare i risultati di disponibilità e prezzi; valori più bassi sono più accurati ma aumentano le chiamate API
- **Manage domain products** — collegamento rapido all'elenco dei prodotti
- **Configure providers** — apre l'Integration Wizard per aggiungere o riconfigurare i provider

### Aggiungere un secondo provider

Clicca su **Configure providers** ed esegui nuovamente l'assistente per il nuovo registrar. Puoi avere configurati più provider contemporaneamente. Assegna ogni prodotto dominio a un provider specifico, o lascialo su quello predefinito.

### Sincronizzare i TLD manualmente

Nella pagina delle impostazioni, clicca su **Sync TLDs** accanto a qualsiasi provider configurato per recuperare gli ultimi prezzi. Questo è utile dopo che un provider ha aggiornato i prezzi all'ingrosso o ha aggiunto nuovi TLD.

---

## Log

Ogni provider scrive nel proprio canale di log. I log sono visualizzabili sotto **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contenuti |
|---|---|
| `domain-seller-registration` | Tutti i tentativi di registrazione (successo e fallimento) |
| `domain-seller-renewal` | Risultati del job di rinnovo |
| `domain-seller-opensrs` | Attività API grezza di OpenSRS |
| `domain-seller-namecheap` | Attività API grezza di Namecheap |
| `domain-seller-godaddy` | Attività API grezza di GoDaddy |
| `domain-seller-resellerclub` | Attività API grezza di ResellerClub |
| `domain-seller-namesilo` | Attività API grezza di NameSilo |
| `domain-seller-enom` | Attività API grezza di Enom |
