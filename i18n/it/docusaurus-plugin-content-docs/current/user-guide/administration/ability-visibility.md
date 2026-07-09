---
title: Visibilità delle capacità
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilità delle Abilità {#ability-visibility}

Superdav AI Agent v1.12.0 introduce i controlli di **Visibilità delle Abilità** (Ability Visibility) che regolano quali ambienti espongono ciascuna abilità. Questo permette agli amministratori di definire con precisione quali capacità dell'agente sono disponibili tramite REST API, server MCP, integrazioni WooCommerce e altre interfacce.

## Cos'è la Visibilità delle Abilità? {#what-is-ability-visibility}

La Visibilità delle Abilità è un sistema di permessi che controlla:

- **Quali abilità** sono disponibili per gli agenti
- **Dove sono esposte** (REST API, MCP, WooCommerce, ecc.)
- **Chi può accedervi** (tramite liste consentiti dei partner)
- **Come sono classificate** (riconosciute o non classificate)

Ogni abilità ha un livello di visibilità che ne determina la disponibilità in diversi ambienti.

## Livelli di Visibilità {#visibility-levels}

### Pubblica (Public) {#public}

Le **abilità pubbliche** sono disponibili ovunque:

- Endpoint REST API
- Server MCP
- Integrazioni WooCommerce
- Interfacce chat
- Tutti i ruoli utente (con i permessi appropriati)

Esempio: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interna (Internal) {#internal}

Le **abilità interne** sono disponibili solo all'interno della tua installazione WordPress:

- Interfacce chat
- Pannelli di amministrazione
- Solo per utenti loggati
- Non sono esposte tramite REST API o integrazioni esterne

Esempio: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

Le **abilità partner** sono disponibili solo per i partner inseriti nella lista consentiti:

- Richiede l'inserimento esplicito nella lista consentiti dei partner
- Disponibile tramite REST API con credenziali di partner
- Disponibile tramite MCP con autenticazione di partner
- Non disponibile per gli utenti normali

Esempio: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabilitata (Disabled) {#disabled}

Le **abilità disabilitate** non sono disponibili da nessuna parte:

- Non sono esposte tramite alcun ambiente
- Non sono disponibili in chat
- Non sono disponibili nei pannelli di amministrazione
- Utile per abilità deprecate o sperimentali

## Gestione della Visibilità delle Abilità {#managing-ability-visibility}

### Accesso alle Impostazioni di Visibilità delle Abilità {#accessing-ability-visibility-settings}

1. Vai su **Amministrazione WordPress** → **Superdav AI Agent** → **Impostazioni**
2. Clicca sulla scheda **Abilità** (Abilities)
3. Vedrai un elenco di tutte le abilità installate con i rispettivi livelli di visibilità

### Visualizzazione dei Dettagli dell'Abilità {#viewing-ability-details}

Clicca su un'abilità per vedere:

- **Nome**: L'identificatore dell'abilità
- **Descrizione**: Cosa fa l'abilità
- **Visibilità attuale**: Pubblica, Interna, Partner o Disabilitata
- **Lista consentiti dei partner**: Quali partner possono accedere (se visibilità Partner)
- **Ultimo aggiornamento**: Quando è stata modificata l'ultima volta la visibilità
- **Stato**: Riconosciuta o Non classificata

### Modifica dei Livelli di Visibilità {#changing-visibility-levels}

Per cambiare la visibilità di un'abilità:

1. Clicca sull'abilità nell'elenco
2. Seleziona un nuovo livello di visibilità dal menu a discesa
3. Se selezioni "Partner", aggiungi gli identificatori dei partner alla lista consentiti
4. Clicca su **Salva**

Esempio:

```
Abilità: bulk-import-users
Visibilità attuale: Pubblica
Cambiare in: Partner
Lista consentiti dei partner: partner-123, partner-456
```

### Operazioni di Gruppo {#bulk-operations}

Per cambiare la visibilità di più abilità:

1. Spunta le caselle accanto alle abilità
2. Seleziona un nuovo livello di visibilità dal menu a discesa delle azioni di gruppo
3. Clicca su **Applica**

## Lista Consentiti dei Partner {#partner-allow-list}

La **lista consentiti dei partner** controlla quali partner esterni possono accedere alle abilità di livello Partner.

### Aggiungere Partner {#adding-partners}

1. Vai su **Superdav AI Agent** → **Impostazioni** → **Partner**
2. Clicca su **Aggiungi Partner**
3. Inserisci l'identificatore del partner (solitamente una chiave API o un ID organizzativo)
4. Opzionalmente aggiungi un nome e una descrizione del partner
5. Clicca su **Salva**

### Assegnare Abilità ai Partner {#assigning-abilities-to-partners}

Dopo aver aggiunto un partner:

1. Vai sulla scheda **Abilità** (Abilities)
2. Trova un'abilità con visibilità Partner
3. Clicca per modificare
4. Nella sezione "Lista consentiti dei partner", spunta le caselle per i partner che dovrebbero avere accesso
5. Clicca su **Salva**

### Revocare l'Accesso del Partner {#revoking-partner-access}

Per rimuovere l'accesso di un partner:

1. Modifica l'abilità
2. Deseleziona la casella del partner nella lista consentiti
3. Clicca su **Salva**

Il partner perderà immediatamente l'accesso a quell'abilità.

## Abilità Non Classificate {#unclassified-abilities}

Quando installi un'abilità di terze parti che Superdav AI Agent non riconosce, viene contrassegnata come **Non classificata** (Unclassified).

### Avviso Amministratore per Abilità Non Classificate {#admin-notice-for-unclassified-abilities}

Vedrai un avviso amministratore:

```
⚠️ Rilevate Abilità Non Classificate

Le seguenti abilità sono state installate ma non sono riconosciute:
- custom-import-tool
- external-api-wrapper

Queste abilità potrebbero presentare rischi di sicurezza o di compatibilità.
Si prega di rivederle e classificarle.

[Rivedi Abilità] [Ignora]
```

### Revisione delle Abilità Non Classificate {#reviewing-unclassified-abilities}

1. Clicca su **Rivedi Abilità** (Review Abilities) nell'avviso
2. Per ogni abilità non classificata, vedrai:
   - Nome e descrizione dell'abilità
   - Fonte (quale plugin/add-on l'ha installata)
   - Livello di visibilità suggerito
   - Valutazione di sicurezza

3. Scegli un livello di visibilità:
   - **Pubblica**: Si ha fiducia nell'abilità; esporla ovunque
   - **Interna**: Limitare all'uso interno
   - **Partner**: Limitare a partner specifici
   - **Disabilitata**: Non utilizzare questa abilità

4. Clicca su **Classifica** (Classify) per salvare la tua decisione

### Perché Classificare le Abilità Non Classificate? {#why-classify-unclassified-abilities}

Classificare le abilità:

- **Migliora la sicurezza**: Approvando esplicitamente ciò che viene esposto
- **Previene incidenti**: Le abilità non classificate sono disabilitate di default
- **Abilita funzionalità**: Una volta classificate, le abilità diventano disponibili
- **Documenta le decisioni**: Le tue scelte vengono registrate a scopo di audit

## Visibilità in Diversi Ambienti {#visibility-in-different-surfaces}

### REST API {#rest-api}

Le **abilità pubbliche** sono disponibili tramite endpoint REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Le **abilità interne e partner** non sono disponibili tramite REST API.

### Server MCP {#mcp-servers}

Le **abilità pubbliche** sono disponibili tramite MCP:

```
Server MCP: Superdav AI Agent
Abilità disponibili:
- scaffold-block-theme
- activate-theme
- send-email
```

Le **abilità interne** non sono esposte tramite MCP.

Le **abilità partner** sono disponibili solo con credenziali di partner.

### Integrazione WooCommerce {#woocommerce-integration}

Le **abilità pubbliche** relative a WooCommerce sono disponibili:

- Gestione prodotti
- Elaborazione ordini
- Comunicazione con i clienti

Le **abilità interne** non sono esposte a WooCommerce.

### Interfaccia Chat {#chat-interface}

**Tutte le abilità** (Pubbliche, Interne, Partner) sono disponibili in chat, a seconda dei permessi dell'utente:

- Gli amministratori vedono tutte le abilità
- Gli utenti normali vedono solo le abilità Pubbliche
- I partner vedono abilità Pubbliche + Partner (se inseriti nella lista consentiti)

## Best Practice di Sicurezza {#security-best-practices}

### Principio del Minimo Privilegio {#principle-of-least-privilege}

- Imposta le abilità con la visibilità più restrittiva che ne permetta comunque l'uso
- Usa la visibilità Partner per operazioni sensibili
- Disabilita le abilità che non usi

### Audit Regolari {#regular-audits}

- Rivedi la visibilità delle abilità mensilmente
- Controlla la presenza di abilità non classificate
- Rimuovi l'accesso per i partner inutilizzati

### Logging e Monitoraggio {#logging-and-monitoring}

- Monitora quali abilità vengono utilizzate di più
- Traccia i modelli di accesso dei partner
- Ricevi avvisi su utilizzi anomali delle abilità

### Abilità di Terze Parti {#third-party-abilities}

- Rivedi le abilità di terze parti prima di attivarle
- Classificale esplicitamente
- Inizia con visibilità Interna o Partner
- Promuovi a Pubblica solo dopo un'accurata verifica

## Risoluzione dei Problemi {#troubleshooting}

**Un'abilità non appare nell'elenco**
- Verifica che l'abilità sia installata e attiva
- Controlla che il plugin/add-on sia abilitato
- Aggiorna la pagina

**Non riesco a cambiare la visibilità di un'abilità**
- Verifica di avere i permessi di amministratore
- Controlla che l'abilità non sia bloccata da un plugin
- Prova a disabilitare i plugin in conflitto

**Un partner non può accedere a un'abilità**
- Verifica che il partner sia nella lista consentiti
- Controlla che la visibilità dell'abilità sia impostata su Partner
- Conferma che le credenziali del partner siano corrette
- Controlla i log API per errori di autenticazione

**Le abilità non classificate continuano ad apparire**
- Rivedile e classificali nell'avviso amministratore
- Controlla che la tua classificazione sia stata salvata
- Verifica che il plugin che fornisce l'abilità sia aggiornato

## Migrazione dalla Modalità Legacy {#migration-from-legacy-mode}

Se stai aggiornando da una versione precedente di Superdav AI Agent:

- Tutte le abilità esistenti vengono automaticamente classificate come Pubbliche
- Rivedi e regola la visibilità se necessario
- Nessuna azione richiesta a meno che tu non voglia limitare l'accesso

Consulta **Migrazione Modalità Terze Parti** per maggiori dettagli sulla transizione all'integrazione nativa Abilities API.

## Prossimi Passi {#next-steps}

Dopo aver configurato la visibilità delle abilità:

1. **Rivedi le tue abilità**: Esegui un audit di tutte le abilità installate
2. **Classifica le abilità non classificate**: Rispondi agli avvisi amministrativi
3. **Configura i partner**: Aggiungi i partner se utilizzi la visibilità Partner
4. **Monitora l'utilizzo**: Tieni traccia delle abilità più utilizzate
5. **Documenta le decisioni**: Tieni nota del motivo per cui hai scelto ogni livello di visibilità
