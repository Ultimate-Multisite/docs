---
title: Integrazione cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrazione cPanel

## Panoramica
cPanel è uno dei pannelli di controllo per l'hosting web più popolari utilizzati da molti provider di hosting condiviso e dedicato. Questa integrazione consente la sincronizzazione automatica dei domini tra Ultimate Multisite e cPanel, permettendoti di aggiungere automaticamente alias di dominio e sottodomini al tuo account cPanel.

## Funzionalità
- Creazione automatica di domini aggiuntivi in cPanel
- Creazione automatica di sottodomini in cPanel (per installazioni multisite con sottodominio)
- Rimozione del dominio quando le mappature vengono eliminate

## Requisiti
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opzionalmente, puoi anche definire:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Istruzioni di configurazione

### 1. Ottieni le tue credenziali cPanel

1. Ottieni il tuo nome utente e la tua password cPanel dal tuo provider di hosting
2. Determina l'host cPanel (di solito `cpanel.tuodominio.com` o `tuodominio.com:2083`)

### 2. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opzionalmente, puoi personalizzare la porta e la directory radice:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Abilita l'integrazione

1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Impostazioni
2. Vai alla scheda "Mappatura dominio"
3. Scorri verso il basso fino a "Integrazioni host"
4. Abilita l'integrazione cPanel
5. Fai clic su "Salva modifiche"

## Come funziona

### Domini aggiuntivi

Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione invia una richiesta all'API di cPanel per aggiungere il dominio come dominio aggiuntivo
2. Il dominio è configurato per puntare alla tua directory radice
3. Quando una mappatura di dominio viene rimossa, l'integrazione rimuoverà il dominio aggiuntivo da cPanel

### Sottodomini

Per le installazioni multisite con sottodominio, quando viene creato un nuovo sito:

1. L'integrazione estrae la parte del sottodominio dal dominio completo
2. Invia una richiesta all'API di cPanel per aggiungere il sottodominio
3. Il sottodominio è configurato per puntare alla tua directory radice

## Note importanti

- L'integrazione utilizza l'API2 di cPanel per comunicare con il tuo account cPanel
- Il tuo account cPanel deve avere i permessi per aggiungere domini aggiuntivi e sottodomini
- Alcuni provider di hosting possono limitare il numero di domini aggiuntivi o sottodomini che puoi creare
- L'integrazione non gestisce la configurazione DNS; devi comunque puntare i tuoi domini all'indirizzo IP del tuo server

## Risoluzione dei problemi

### Problemi di connessione API

- Verifica che il tuo nome utente e la tua password cPanel siano corretti
- Verifica che l'host cPanel sia corretto e accessibile
- Assicurati che il tuo account cPanel abbia i permessi necessari
- Prova a usare l'URL completo per l'host (ad es. `https://cpanel.tuodominio.com`)

### Dominio non aggiunto

- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a cPanel
- Assicurati che il tuo account cPanel non abbia raggiunto il limite per domini aggiuntivi o sottodomini

### Problemi con il certificato SSL

- L'integrazione non gestisce l'emissione del certificato SSL
- Dovrai utilizzare gli strumenti SSL/TLS di cPanel o la funzione AutoSSL per emettere certificati SSL per i tuoi domini
- In alternativa, puoi utilizzare un servizio come Let's Encrypt con AutoSSL di cPanel
