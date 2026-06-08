---
title: Integrazione Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integrazione Hostinger (hPanel)

## Panoramica

Hostinger è un popolare provider di hosting web con un pannello di controllo moderno chiamato hPanel. L'integrazione Ultimate Multisite Hostinger abilita la sincronizzazione automatica dei domini tra Ultimate Multisite e hPanel di Hostinger, permettendoti di gestire automaticamente i mappaggi dei domini e i sottodomini direttamente dal tuo admin di WordPress.

## Funzionalità

- Creazione automatica di domini aggiuntivi (addon domain) in hPanel
- Creazione automatica di sottodomini in hPanel (per installazioni multisite con sottodomini)
- Rimozione del dominio quando i mappaggi vengono eliminati
- Integrazione fluida con l'API di gestione domini di hPanel

## Requisiti

Per utilizzare l'integrazione Hostinger, hai bisogno di:

1. Un account Hostinger con accesso a hPanel
2. Un token API da Hostinger
3. Le seguenti costanti definite nel tuo file `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opzionalmente, puoi anche definire:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API predefinito
```

## Istruzioni di configurazione

### 1. Genera il tuo token API di Hostinger

1. Accedi al tuo account Hostinger e apri hPanel
2. Vai su **Impostazioni account** → **Token API**
3. Clicca su **Crea nuovo token**
4. Assegna un nome descrittivo al tuo token (es. "Ultimate Multisite")
5. Seleziona i permessi necessari:
   - Gestione domini
   - Gestione sottodomini
6. Copia il token generato e conservalo in modo sicuro

### 2. Trova il tuo ID account

1. In hPanel, vai su **Impostazioni account** → **Informazioni account**
2. Il tuo ID account è visualizzato su questa pagina
3. Copia e salva questo ID per il passaggio successivo

### 3. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Se il tuo account Hostinger utilizza un endpoint API diverso, puoi personalizzarlo:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Abilita l'integrazione

1. Nell'admin di WordPress, vai su **Ultimate Multisite > Impostazioni**
2. Naviga alla scheda **Mappaggio domini**
3. Scorri fino a **Integrazioni host**
4. Abilita l'integrazione **Hostinger (hPanel)**
5. Clicca su **Salva modifiche**

## Come funziona

### Domini aggiuntivi (Addon Domains)

Quando mappi un dominio in Ultimate Multisite:

1. L'integrazione invia una richiesta all'API di Hostinger per aggiungere il dominio come dominio aggiuntivo.
2. Il dominio viene configurato per puntare alla tua directory principale.
3. Quando un mappaggio dominio viene rimosso, l'integrazione rimuove automaticamente il dominio aggiuntivo da hPanel.

### Sottodomini

Per le installazioni multisite con sottodomini, quando viene creato un nuovo sito:

1. L'integrazione estrae la parte del sottodominio dal dominio completo.
2. Invia una richiesta all'API di Hostinger per aggiungere il sottodominio.
3. Il sottodominio viene configurato per puntare alla tua directory principale.

## Note importanti

- L'integrazione utilizza l'API REST di Hostinger per comunicare con il tuo account.
- Il tuo token API deve avere i permessi necessari per la gestione di domini e sottodomini.
- L'integrazione non gestisce la configurazione DNS; i domini devono già puntare al tuo account Hostinger.
- Le richieste API vengono effettuate in modo sicuro tramite HTTPS.
- Mantieni il tuo token API sicuro e non condividerlo mai pubblicamente.

## Risoluzione dei problemi

### Problemi di connessione API

- Verifica che il tuo token API sia corretto e non sia scaduto.
- Controlla che l'ID account sia corretto.
- Assicurati che il tuo token API abbia i permessi necessari per la gestione dei domini.
- Verifica che il tuo account Hostinger sia attivo e in regola.

### Dominio non aggiunto

- Controlla i log di Ultimate Multisite per eventuali messaggi di errore.
- Verifica che il dominio non sia già stato aggiunto al tuo account Hostinger.
- Assicurati che il tuo account Hostinger non abbia raggiunto il limite di domini aggiuntivi.
- Conferma che il dominio punti correttamente ai tuoi nameserver Hostinger.

### Problemi con i certificati SSL

- L'integrazione non gestisce l'emissione dei certificati SSL.
- Hostinger fornisce tipicamente certificati SSL gratuiti tramite AutoSSL.
- Puoi gestire i certificati SSL direttamente in hPanel sotto **SSL/TLS**.
- In alternativa, utilizza Let's Encrypt con la funzione AutoSSL di Hostinger.

## Supporto

Per ulteriore assistenza sull'integrazione Hostinger, si prega di consultare:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
