---
title: Integrazione CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrazione CyberPanel {#cyberpanel-integration}

Questa guida spiega come configurare l'integrazione Ultimate Multisite con CyberPanel in modo che i domini mappati nella tua rete vengano aggiunti (e rimossi) automaticamente come virtual host in CyberPanel, con la possibilità di provisioning auto-SSL tramite Let's Encrypt.

## Cos'è {#what-it-does}

- Quando un dominio viene mappato in Ultimate Multisite, l'integrazione chiama l'API di CyberPanel per creare un virtual host per quel dominio.
- Quando la mappatura di un dominio viene rimossa, l'integrazione chiama l'API per eliminare il virtual host corrispondente.
- Quando l'auto-SSL è abilitato, l'integrazione attiva l'emissione del certificato Let's Encrypt immediatamente dopo la creazione del virtual host.
- Aggiunge/rimuove opzionalmente l'alias `www.` a seconda della tua impostazione "Auto-create www subdomain" nelle impostazioni di Mappatura Dominio.

## Prerequisiti {#prerequisites}

- Un'istanza CyberPanel funzionante (consigliato v2.3 o successivo) raggiungibile dal tuo server WordPress.
- Un sito web esistente in CyberPanel che serve già la root della tua rete WordPress. L'integrazione attaccherà i nuovi virtual host a questo server.
- Accesso all'API di CyberPanel abilitato. L'autenticazione utilizza il nome utente e la password dell'amministratore di CyberPanel.
- I record DNS per i domini mappati devono già puntare all'indirizzo IP del tuo server prima che l'auto-SSL possa emettere un certificato valido.

## Requisiti {#requirements}

Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opzionalmente, puoi definire anche:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — emette SSL Let's Encrypt dopo la creazione del dominio
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Utilizzato per il contatto del certificato SSL
```

## Istruzioni di Configurazione {#setup-instructions}

### 1. Abilitare l'API di CyberPanel {#1-enable-the-cyberpanel-api}

1. Accedi al tuo dashboard CyberPanel come amministratore.
2. Vai su **Security** > **SSL** e conferma che SSL sia attivo sull'interfaccia CyberPanel stessa (necessario per chiamate API sicure).
3. L'API di CyberPanel è disponibile di default all'indirizzo `https://your-server-ip:8090/api/`. Non sono necessari passaggi aggiuntivi per abilitarla: è attiva di default per gli utenti amministrativi.

### 2. Aggiungere le Costanti a wp-config.php {#2-add-constants-to-wp-configphp}

Aggiungi le seguenti costanti al tuo file `wp-config.php` prima della riga `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Per abilitare l'auto-SSL (consigliato):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Abilitare l'Integrazione {#3-enable-the-integration}

1. Nelle impostazioni di amministrazione della tua rete WordPress, vai su **Ultimate Multisite** > **Settings**.
2. Naviga alla scheda **Domain Mapping**.
3. Scorri fino a **Host Integrations**.
4. Abilita l'integrazione **CyberPanel**.
5. Clicca su **Save Changes**.

### 4. Verificare la Connettività {#4-verify-connectivity}

Utilizza il test di connessione integrato nel wizard delle impostazioni:

1. Vai su **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Clicca su **Test Connection**.
3. Un messaggio di successo conferma che il plugin può raggiungere l'API di CyberPanel e autenticarsi correttamente.

## Come Funziona {#how-it-works}

### Mappatura Dominio {#domain-mapping}

Quando un dominio viene mappato in Ultimate Multisite:

1. L'integrazione invia una richiesta `POST` a `/api/createWebsite` sul tuo host CyberPanel.
2. CyberPanel crea un nuovo virtual host per il dominio all'interno del pacchetto configurato.
3. La root del documento viene impostata per puntare alla directory root della tua rete WordPress.
4. Quando la mappatura del dominio viene rimossa, l'integrazione chiama `/api/deleteWebsite` per pulire il virtual host.

### Auto-SSL {#auto-ssl}

Quando `WU_CYBERPANEL_AUTO_SSL` è `true`:

1. Dopo la creazione del virtual host, l'integrazione chiama `/api/issueSSL` per il dominio.
2. CyberPanel richiede un certificato Let's Encrypt utilizzando la challenge ACME HTTP-01.
3. Il certificato viene rinnovato automaticamente da CyberPanel prima della scadenza.

> **Importante:** I DNS devono essere completamente propagati all'indirizzo IP del tuo server prima che Let's Encrypt possa convalidare il dominio. Se l'emissione SSL fallisce immediatamente dopo la mappatura, attendi la propagazione dei DNS e riattiva l'SSL dal dashboard CyberPanel sotto **SSL** > **Manage SSL**.

### Sottodominio www {#www-subdomain}

Se **Auto-create www subdomain** è abilitato nelle impostazioni di Mappatura Dominio, l'integrazione crea anche un alias virtual host per `www.<dominio>` e, quando l'auto-SSL è attivo, emette un certificato che copre sia la variante apex che quella www.

### Trasferimento Email (Email Forwarders) {#email-forwarders}

Quando l'addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) è attivo, CyberPanel può anche fornire inoltratori email per i clienti. Gli inoltratori reindirizzano i messaggi da un indirizzo di dominio a una casella di posta diversa senza creare una casella di posta completa, il che è utile per alias come `info@customer-domain.test` o `support@customer-domain.test`.

Prima di abilitare gli inoltratori per i clienti:

1. Conferma che le costanti CyberPanel sopra siano configurate e che il test di connessione abbia successo.
2. Abilita il provider email CyberPanel nelle impostazioni dell'addon Emails.
3. Conferma che il dominio del cliente esista già in CyberPanel prima di creare l'inoltratore.
4. Crea un inoltratore di prova e invia un messaggio attraverso di esso prima di offrire la funzione sui piani di produzione.

Se la creazione dell'inoltratore fallisce, controlla prima i log di attività di Ultimate Multisite, quindi conferma in CyberPanel che il dominio sorgente esista e che l'utente API abbia i permessi di gestione email.

## Riferimento di Configurazione {#configuration-reference}

| Costante | Richiesto | Default | Descrizione |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Sì | — | URL completo dell'istanza CyberPanel, incluso il port, es. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Sì | — | Nome utente amministratore di CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Sì | — | Password amministratore di CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Sì | `Default` | Pacchetto di hosting CyberPanel da assegnare ai nuovi virtual host |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Emette un certificato SSL Let's Encrypt dopo la creazione del dominio |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Versione PHP per i nuovi virtual host (deve corrispondere a una versione installata in CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Email di contatto per l'iscrizione del certificato SSL |

## Note Importanti {#important-notes}

- L'API di CyberPanel utilizza l'autenticazione con token basata su sessione. L'integrazione gestisce l'acquisizione del token automaticamente ad ogni chiamata API.
- Il tuo account amministratore CyberPanel deve avere i permessi per creare ed eliminare siti web.
- CyberPanel funziona di default sulla porta `8090`. Se il tuo server utilizza un firewall, assicurati che questa porta sia accessibile dal server applicativo WordPress.
- L'integrazione non gestisce i record DNS. Devi puntare i DNS del dominio all'indirizzo IP del tuo server prima di mappare il dominio in Ultimate Multisite.
- Se utilizzi OpenLiteSpeed (OLS), viene attivato automaticamente un riavvio controllato dopo le modifiche ai virtual host. Non è necessaria alcuna intervento manuale.

## Risoluzione dei Problemi {#troubleshooting}

### Connessione API Rifiutata {#api-connection-refused}

- Verifica che la porta `8090` sia aperta nel firewall del tuo server.
- Conferma che il valore `WU_CYBERPANEL_HOST` includa il protocollo corretto (`https://`) e la porta.
- Controlla che il tuo certificato SSL CyberPanel sia valido; i certificati self-signed possono causare errori di verifica TLS. Imposta `WU_CYBERPANEL_VERIFY_SSL` su `false` solo in ambienti di rete privati fidati.

### Errori di Autenticazione {#authentication-errors}

- Conferma che `WU_CYBERPANEL_USERNAME` e `WU_CYBERPANEL_PASSWORD` siano corretti accedendo a CyberPanel direttamente.
- CyberPanel blocca gli account dopo ripetuti tentativi di accesso falliti. Controlla **Security** > **Brute Force Monitor** in CyberPanel se si verificano blocchi.

### Dominio Non Creato {#domain-not-created}

- Controlla i log di attività di Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) per messaggi di errore API.
- Verifica che il pacchetto definito in `WU_CYBERPANEL_PACKAGE` esista in CyberPanel (**Packages** > **List Packages**).
- Assicurati che il dominio non sia già registrato come sito web in CyberPanel: la creazione di un sito duplicato restituisce un errore.

### Certificato SSL Non Emesso {#ssl-certificate-not-issued}

- Conferma che i DNS siano completamente propagati: `dig +short your-domain.com` dovrebbe restituire l'IP del tuo server.
- Let's Encrypt impone limiti di frequenza. Se hai emesso diversi certificati per lo stesso dominio di recente, attendi prima di riprovare.
- Controlla i log SSL di CyberPanel sotto **Logs** > **Error Logs** per dettagli sui fallimenti di emissione del certificato.
- Come soluzione alternativa, puoi emettere SSL manualmente da CyberPanel: **SSL** > **Manage SSL** > seleziona il dominio > **Issue SSL**.

## Riferimenti {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
