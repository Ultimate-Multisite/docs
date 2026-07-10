---
title: Integratio cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integratio cu cPanel {#cpanel-integration}

## Introducere {#overview}
cPanel este unul dintre cele mai populare panouri de control pentru găzduire web, utilizate de mulți furnizori de găzduire partajată și dedicată. Această integrare permite sincronizarea automată a domeniilor între Ultimate Multisite și cPanel, permițându-vă să adăugați automat aliasuri de domeniu și subdomain-uri în contul dumneavoastră cPanel.

## Funcții {#features}
- Crearea automată de addon domain în cPanel
- Crearea automată de subdomain în cPanel (pentru instalări multisite pentru subdomain)
- Ștergerea domeniului atunci când mapele sunt șterse

## Cerințe {#requirements}
Conștiințele următoare trebuie definite în fișierul dumneavoastră `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'numele_utilizator_cpanel');
define('WU_CPANEL_PASSWORD', 'parola_cpanel');
define('WU_CPANEL_HOST', 'hostul_cpanel');
```

Opțional, puteți defini și:

```php
define('WU_CPANEL_PORT', 2083); // Valoarea implicită este 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Valoarea implicită este /public_html
```

## Instrucțiuni de configurare {#setup-instructions}

### 1. Obțineți credențialele cPanel {#1-get-your-cpanel-credentials}

1. Obțineți numele de utilizator și parola cPanel de la furnizorul dumneavoastră de găzduire
2. Determinați hostul cPanel al dumneavoastră (de obicei `cpanel.yourdomain.com` sau `yourdomain.com:2083`)

### 2. Adăugați constante în wp-config.php {#2-add-constants-to-wp-configphp}

Adăugați următoarele constante în fișierul dumneavoastră `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'numele_utilizator_cpanel');
define('WU_CPANEL_PASSWORD', 'parola_cpanel');
define('WU_CPANEL_HOST', 'hostul_cpanel');
```

Opțional, puteți personaliza portul și directorul rădăcină:

```php
define('WU_CPANEL_PORT', 2083); // Schimbați dacă cPanel-ul dumneavoastră folosește un port diferit
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Schimbați dacă directorul rădăcină al documentelor este diferit
```

### 3. Activați integrarea {#3-enable-the-integration}

1. Ine admin WordPress, ad Ultimate Multisite > Settings (Impostare)
2. Naviga ad tab "Domain Mapping" (Mappatura Domani)
3. Scrolă in basso ad "Host Integrations" (Integrazioni Host)
4. Attiva integrazione cPanel
5. Cliccă su "Save Changes" (Salva Modifiche)

## Quid Facit {#how-it-works}

### Addon Domains (Domaine Aggiuntivi) {#addon-domains}

Quando un dominio viene mappato in Ultimate Multisite:

1. L'integrazione invia una richiesta all'API di cPanel per aggiungere il dominio come dominio aggiuntivo
2. Il dominio è configurato per puntare alla tua directory principale
3. Quando la mappatura del dominio viene rimossa, l'integrazione rimuoverà il dominio aggiuntivo da cPanel

### Subdomains (Sottodomini) {#subdomains}

Per le installazioni multisite con sottodomini, quando viene creato un nuovo sito:

1. L'integrazione estrae la parte del sottodominio dal dominio completo
2. Invia una richiesta all'API di cPanel per aggiungere il sottodominio
3. Il sottodominio è configurato per puntare alla tua directory principale

## Note Importanti {#important-notes}

- L'integrazione usa l'API2 di cPanel per comunicare con il tuo account cPanel
- Il tuo account cPanel deve avere i permessi per aggiungere domini aggiuntivi e sottodomini
- Alcuni fornitori di hosting potrebbero limitare il numero di domini aggiuntivi o sottodomini che puoi creare
- L'integrazione non gestisce la configurazione DNS; devi comunque puntare i tuoi domini all'indirizzo IP del tuo server

## Risoluzione Problemi (Troubleshooting) {#troubleshooting}

### Problemi di Connessione API {#api-connection-issues}
- Verifica che il nome utente e la password cPanel siano corretti
- Controlla che l'host cPanel sia corretto e accessibile
- Assicurati che il tuo account cPanel abbia i permessi necessari
- Prova a usare l'URL completo per l'host (ad esempio, `https://cpanel.yourdomain.com`)

### Dominio Non Aggiunto {#domain-not-added}
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già aggiunto a cPanel
- Assicurati che il tuo account cPanel non abbia raggiunto il limite per domini aggiuntivi o sottodomini

### Problematum Certificatus SSL {#ssl-certificate-issues}

- Integrare non habet potestatem emittendi certifica SSL.
- Tū debēs uti toola SSL/TLS ex cPanel vel feature AutoSSL ad emittendum certifica SSL pro domini tuos.
- Alternativam, potes servicem sicut Let's Encrypt cum AutoSSL ex cPanel uti.
