---
title: Migliora l'integrazione del pannello di controllo
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## Panoramica
Enhance è un moderno pannello di controllo che fornisce potenti capacità di automazione e gestione dell'hosting. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e Enhance Control Panel.

**Discussione correlata:** Vedi [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) per suggerimenti della comunità e informazioni aggiuntive.

## Funzionalità
- Sincronizzazione automatica dei domini quando i domini sono mappati in Ultimate Multisite
- Provisioning automatico dei certificati SSL tramite LetsEncrypt quando il DNS si risolve
- Supporto dei sottodomini per le reti in modalità sottodominio
- Rimozione del dominio quando le mappature vengono eliminate
- Test di connessione per verificare le credenziali API

## Requisiti

### Requisiti di sistema
- Enhance Control Panel installato e accessibile
- Installazione WordPress Multisite ospitata su o connessa a un server Enhance
- Server web Apache (Enhance supporta attualmente configurazioni Apache; LiteSpeed Enterprise è disponibile a costo ridotto)

### Accesso API
Devi avere accesso amministratore al Enhance Control Panel per creare token API.

## Ottenere le tue credenziali API

### 1. Crea un token API

1. Accedi al tuo Enhance Control Panel come amministratore
2. Fai clic su **Settings** nel menu di navigazione
3. Vai su **Access Tokens**
4. Fai clic su **Create Token**
5. Assegna al token un nome descrittivo (ad es., "Ultimate Multisite Integration")
6. Assegna il ruolo **System Administrator**
7. Per la data di scadenza:
   - Lascia vuoto se vuoi che il token non scada mai
   - Oppure imposta una data di scadenza specifica per motivi di sicurezza
8. Fai clic su **Create**

Dopo la creazione, il tuo **Access Token** e **Organization ID** verranno visualizzati. **Salva questi immediatamente** poiché il token verrà mostrato solo una volta.

### 2. Ottieni il tuo Organization ID

L'Organization ID è visualizzato nella pagina Access Tokens in una casella informativa blu etichettata "Org ID: {your_id}".

L'Organization ID è un UUID formattato come: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Puoi anche trovare l'Organization ID di un cliente tramite:
1. Vai alla pagina **Customers**
2. Fai clic su **Manage customer** per il cliente pertinente
3. Guarda l'URL - l'Organization ID sono i caratteri alfanumerici dopo `/customers/`

### 3. Ottieni il tuo Server ID

Per trovare il tuo Server ID (necessario per le operazioni sui domini):

1. Nel Enhance Control Panel, vai su **Servers**
2. Fai clic sul server dove è in esecuzione la tua installazione WordPress
3. Il Server ID (formato UUID) sarà visibile nell'URL o nei dettagli del server
4. In alternativa, puoi usare l'API per elencare i server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Il Server ID segue il formato UUID: `00000000-0000-0000-0000-000000000000`

### 4. Ottieni il tuo API URL

Il tuo API URL è l'URL del tuo Enhance Control Panel con `/api/` aggiunto:

```
https://your-enhance-panel.com/api/
```

**Importante:** Il percorso `/api/` è richiesto. Errori comuni includono:
- Usare solo il dominio senza `/api/`
- Usare HTTP invece di HTTPS (HTTPS è richiesto per la sicurezza)

## Configurazione

### Costanti richieste

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Configurazione tramite Wizard di integrazione

1. Nel tuo admin WordPress, vai su **Ultimate Multisite** > **Settings**
2. Vai alla scheda **Integrations**
3. Trova **Enhance Control Panel Integration** e fai clic su **Configuration**
4. Il wizard ti guiderà attraverso la configurazione:
   - **Step 1:** Introduzione e panoramica delle funzionalità
   - **Step 2:** Inserisci le tue credenziali API (Token, API URL, Server ID)
   - **Step 3:** Testa la connessione
   - **Step 4:** Rivedi e attiva

Puoi scegliere di:
- Lasciare che il wizard inserisca le costanti nel tuo file `wp-config.php` automaticamente
- Copiare le definizioni delle costanti e aggiungerle manualmente

## Configurazione aggiuntiva di WordPress

In base al feedback della comunità ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), potresti aver bisogno di configurare queste impostazioni aggiuntive:

### Configurazione .htaccess

Se riscontri problemi con il mapping dei domini:
1. Elimina il file `.htaccess` originale di Enhance
2. Sostituiscilo con il file `.htaccess` standard di WordPress Multisite

### Costanti Cookie

Aggiungi queste costanti a `wp-config.php` per garantire un corretto trattamento dei cookie tra domini mappati:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Come funziona

### Quando un dominio è mappato

1. Un utente mappa un dominio personalizzato in Ultimate Multisite (o viene creato un nuovo sito in modalità sottodominio)
2. L'integrazione invia una richiesta POST all'API di Enhance: `/servers/{server_id}/domains`
3. Enhance aggiunge il dominio alla configurazione del tuo server
4. Quando il DNS si risolve sul tuo server, Enhance provisiona automaticamente un certificato SSL tramite LetsEncrypt
5. Il dominio diventa attivo con HTTPS

### Quando un dominio è rimosso

1. Una mappatura di dominio viene eliminata in Ultimate Multisite
2. L'integrazione interroga Enhance per trovare l'ID del dominio
3. Viene inviata una richiesta DELETE a: `/servers/{server_id}/domains/{domain_id}`
4. Enhance rimuove il dominio dalla configurazione del tuo server

### Controllo DNS e SSL

Ultimate Multisite include un controllo DNS e SSL integrato:
- Puoi configurare l'intervallo di controllo nelle **Domain Mapping Settings** (predefinito: 300 secondi/5 minuti)
- Il sistema verificherà la propagazione DNS prima di marcare un dominio come attivo
- La validità del certificato SSL viene verificata automaticamente
- Enhance gestisce la provisioning SSL automaticamente, quindi la configurazione manuale SSL non è necessaria

## Verifica della configurazione

### Testa la connessione

1. Nel wizard di integrazione, usa il passaggio **Test Connection**
2. Il plugin tenterà di elencare i domini sul tuo server
3. Un messaggio di successo conferma:
   - Le credenziali API sono corrette
   - L'API URL è accessibile
   - Il Server ID è valido
   - Le autorizzazioni sono impostate correttamente

### Dopo aver mappato un dominio

1. Mappa un dominio di prova in Ultimate Multisite
2. Controlla i log di Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifica nel Enhance Control Panel che il dominio è stato aggiunto:
   - Vai su **Servers** > **Your Server** > **Domains**
   - Il nuovo dominio dovrebbe apparire nella lista
4. Una volta che il DNS si è propagato, verifica che SSL sia provisionato automaticamente

## Risoluzione dei problemi

### Problemi di connessione API

**Errore: "Failed to connect to Enhance API"**
- Verifica che `WU_ENHANCE_API_URL` includa `/api/` alla fine
- Assicurati di usare HTTPS, non HTTP
- Verifica che il pannello Enhance sia accessibile dal tuo server WordPress
- Verifica che non ci siano regole firewall che bloccano la connessione

**Errore: "Enhance API Token not found"**
- Assicurati che `WU_ENHANCE_API_TOKEN` sia definito in `wp-config.php`
- Verifica che il token non sia stato eliminato o scaduto in Enhance
- Controlla eventuali errori di battitura nel valore del token

**Errore: "Server ID is not configured"**
- Verifica che `WU_ENHANCE_SERVER_ID` sia definito in `wp-config.php`
- Assicurati che il Server ID sia un formato UUID valido
- Conferma che il server esista nel tuo pannello Enhance

### Dominio non aggiunto

**Controlla i log:**
1. Vai su **Ultimate Multisite** > **Logs**
2. Filtra per **integration-enhance**
3. Cerca messaggi di errore che indicano il problema

**Cause comuni:**
- Formato nome dominio non valido
- Il dominio esiste già in Enhance
- Permessi API insufficienti (assicurati che il token abbia il ruolo System Administrator)
- Il Server ID non corrisponde al server effettivo in Enhance

### Problemi di certificato SSL

**SSL non provisionato:**
- Verifica che il DNS punti all'indirizzo IP del tuo server
- Verifica che il dominio si risolva correttamente: `nslookup yourdomain.com`
- Enhance richiede che il DNS si risolva prima di poter provisionare SSL
- La provisioning SSL di solito richiede 5-10 minuti dopo la propagazione DNS
- Controlla i log del Enhance Control Panel per errori specifici SSL

**Risoluzione manuale SSL in Enhance:**
1. Vai su **Servers** > **Your Server** > **Domains**
2. Trova il tuo dominio e verifica lo stato SSL
3. Puoi triggerare manualmente la provisioning SSL se necessario

### Intervallo di controllo DNS

Se i domini o i certificati SSL richiedono troppo tempo per attivarsi:
1. Vai su **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Trova l'impostazione **DNS Check Interval**
3. Regola dal valore predefinito di 300 secondi a un valore inferiore (minimo: 10 secondi)
4. **Nota:** Intervalli più bassi significano controlli più frequenti ma carico server più alto

### Errori di autenticazione

**Errori HTTP 401/403:**
- Rigenera il tuo token API in Enhance
- Verifica che il token abbia il ruolo **System Administrator**
- Verifica che il token non sia scaduto
- Assicurati di usare l'Organization ID corretto (anche se di solito non è richiesto nell'URL)

### Analisi dei log

Abilita il logging dettagliato:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Quindi controlla i log in:
- Log di Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Log di debug WordPress: `wp-content/debug.log`
- Log del pannello Enhance: disponibili nell'interfaccia admin di Enhance

## Riferimento API

### Autenticazione
Tutte le richieste API utilizzano l'autenticazione Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint comuni utilizzati

**Elenco server:**
```
GET /servers
```

**Elenco domini su un server:**
```
GET /servers/{server_id}/domains
```

**Aggiungi un dominio:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Elimina un dominio:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentazione API completa
Documentazione API completa: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Migliori pratiche

### Sicurezza
- **Non mai committare token API al controllo versione**
- Conserva i token in `wp-config.php` che dovrebbe essere escluso da Git
- Usa token con permessi appropriati (System Administrator per integrazione completa)
- Imposta date di scadenza token per ambienti di produzione
- Ruota i token periodicamente

### Prestazioni
- Usa l'intervallo di controllo DNS predefinito (300 secondi) per evitare chiamate API eccessive
- Monitora le risorse del server Enhance quando esegui operazioni di dominio su larga scala
- Considera di stagliare le aggiunte di dominio se mappi molti domini contemporaneamente

### Monitoraggio
- Controlla regolarmente i log di Ultimate Multisite per errori di integrazione
- Imposta monitoraggio per aggiunte di dominio fallite
- Verifica che i certificati SSL vengano provisionati correttamente
- Tieni d'occhio la capacità del server Enhance e i limiti di dominio

## Risorse aggiuntive

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Vedi la pagina wiki "How to Configure Domain Mapping v2"

## Supporto

Se riscontri problemi:
1. Controlla la sezione Risoluzione dei problemi sopra
2. Rivedi i log di Ultimate Multisite
3. Consulta le [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contatta il supporto Enhance per problemi specifici del pannello
5. Crea una nuova discussione con log di errore dettagliati per l'assistenza della comunità

## Note

- Questa integrazione gestisce solo alias di dominio; Enhance gestisce SSL automaticamente
- L'integrazione supporta sia mappature di dominio personalizzate che siti basati su sottodominio
- La creazione automatica di sottodominio www può essere configurata nelle impostazioni di mappatura dominio
- Enhance supporta attualmente configurazioni Apache (LiteSpeed Enterprise disponibile)
- La rimozione del dominio da Ultimate Multisite rimuoverà il dominio da Enhance ma potrebbe non eliminare immediatamente i certificati SSL associati
