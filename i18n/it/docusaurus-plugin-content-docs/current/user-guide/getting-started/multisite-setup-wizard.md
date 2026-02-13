---
title: Wizard di configurazione Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Wizard di configurazione Multisite

Ultimate Multisite include un wizard integrato che converte automaticamente un'installazione standard di WordPress in una rete WordPress Multisite. Ciò elimina la necessità di modificare manualmente `wp-config.php` o eseguire comandi sul database.

:::tip
Se la tua installazione WordPress è già in esecuzione come rete Multisite, puoi saltare completamente questo passaggio. Il wizard appare solo quando Multisite non è ancora abilitato.
:::

## Quando appare il wizard?

Quando attivi Ultimate Multisite su un'installazione WordPress standard (non Multisite), il plugin rileva che Multisite non è abilitato e ti reindirizza automaticamente al Wizard di configurazione Multisite invece del wizard di configurazione regolare.

Puoi anche accedervi direttamente su **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prerequisiti

Prima di eseguire il wizard, assicurati che:

- Hai **accesso amministratore** alla tua installazione WordPress
- Il file `wp-config.php` del tuo server è **scrivibile** dal server web
- Hai un **backup recente** dei tuoi file e del database

:::warning
Il wizard modifica il tuo file `wp-config.php` e crea nuove tabelle del database. Crea sempre un backup prima di procedere.
:::

## Passo 1: Benvenuto

La prima schermata spiega cos'è WordPress Multisite e cosa farà il wizard:

- Abilitare la funzionalità Multisite nella tua configurazione WordPress
- Creare le tabelle del database di rete necessarie
- Aggiungere le costanti multisite richieste a `wp-config.php`
- Attivare in rete Ultimate Multisite su tutta la rete

![Wizard di configurazione Multisite - Passo di benvenuto](/img/installation/multisite-wizard/wizard-welcome.png)

Fai clic su **Continue** per procedere.

## Passo 2: Configurazione della rete

Questo passaggio ti chiede di configurare le impostazioni della tua rete.

### Struttura del sito

Scegli come saranno organizzati i siti della tua rete:

- **Sottodomini** (Consigliato) — I siti ottengono il proprio sottodominio, ad es. `site1.tuodominio.com`
- **Sottocartelle** — I siti vengono creati come percorsi, ad es. `tuodominio.com/site1`

:::note
Se scegli i sottodomini, dovrai configurare **DNS wildcard** e un **certificato SSL wildcard** per il tuo dominio. La maggior parte degli host WordPress gestiti lo gestisce automaticamente. Vedi [Ultimate Multisite 101](./ultimate-multisite-101) per un confronto dettagliato.
:::

### Titolo della rete

Inserisci un nome per la tua rete. Per impostazione predefinita è il titolo del tuo sito corrente con "Network" aggiunto. Puoi cambiarlo successivamente dalle impostazioni della rete.

### Email dell'amministratore della rete

L'indirizzo email utilizzato per le notifiche di amministrazione della rete. Per impostazione predefinita è l'indirizzo email dell'utente corrente.

![Wizard di configurazione Multisite - Configurazione della rete](/img/installation/multisite-wizard/wizard-network-configuration.png)

Dopo aver compilato i campi, fai clic su **Continue** per procedere.

## Passo 3: Installazione

Fai clic sul pulsante **Install** per iniziare. Il wizard esegue cinque passaggi automatizzati in sequenza, ognuno dei quali mostra il suo progresso in tempo reale:

![Wizard di configurazione Multisite - Installazione in attesa](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Passo | Descrizione |
|------|-------------|
| **Abilita Multisite** | Aggiunge la costante `WP_ALLOW_MULTISITE` a `wp-config.php` |
| **Crea Rete** | Crea le tabelle del database multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, ecc.) e le popola con la tua configurazione di rete |
| **Aggiorna Configurazione** | Aggiunge le ultime costanti multisite a `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, ecc.) |
| **Correggi Cookie** | Garantisce che l'URL del sito sia corretto nei metadati della rete per prevenire problemi di autenticazione dopo l'attivazione |
| **Attiva Plugin in Rete** | Attiva in rete Ultimate Multisite in modo che funzioni su tutta la rete |

Ogni passaggio visualizza uno di questi stati:

- **Pending** — In attesa di essere elaborato
- **Installing...** — In esecuzione
- **Success!** — Completato con successo
- **Error message** — Si è verificato un errore (il messaggio descriverà il problema)

Una volta che tutti i passaggi sono completati con successo, vedrai uno stato verde "Success!" per ogni elemento:

![Wizard di configurazione Multisite - Installazione completata](/img/installation/multisite-wizard/wizard-installation-complete.png)

Il wizard proseguirà quindi automaticamente alla schermata di completamento.

## Passo 4: Completato

Una volta completata l'installazione, vedrai un messaggio di successo che conferma che WordPress Multisite è stato abilitato.

![Wizard di configurazione Multisite - Configurazione completata](/img/installation/multisite-wizard/wizard-complete.png)

Ora puoi continuare con il wizard di configurazione Ultimate Multisite per configurare la tua piattaforma WaaS (dettagli aziendali, contenuti predefiniti, gateway di pagamento, ecc.).

:::note
Dopo che l'installazione multisite è completata, il tuo browser si reindirizzerà attraverso l'amministratore di rete appena abilitato. Potrebbe essere necessario accedere nuovamente poiché i cookie di autenticazione sono stati aggiornati per l'ambiente multisite.
:::

## Configurazione manuale di fallback

Se il wizard non può scrivere sul tuo file `wp-config.php` (a causa di permessi di file o restrizioni del server), mostrerà il codice esatto che devi aggiungere manualmente:

1. Le **costanti wp-config.php** che devono essere aggiunte sopra la riga `/* That's all, stop editing! */`
2. Le **regole di riscrittura .htaccess** appropriate per la struttura del sito scelta (sottodominio o sottocartella)

Dopo aver apportato le modifiche manuali, ricarica la pagina e il wizard rileverà che il multisite è ora attivo.

## Risoluzione dei problemi

### Il wizard indica che wp-config.php non è scrivibile

Il processo del tuo server web ha bisogno di permessi di scrittura sul file `wp-config.php`. Puoi:

- Cambiare temporaneamente i permessi del file in `644` o `666`
- Utilizzare le istruzioni di fallback per la configurazione manuale fornite dal wizard
- Chiedere assistenza al tuo provider di hosting

### I siti non sono accessibili dopo l'installazione (sottodomini)

Se hai scelto la struttura a sottodominio, devi configurare il **DNS wildcard** per il tuo dominio. Aggiungi un record DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Verifica con il tuo provider di hosting se non sei sicuro di come configurarlo.

### Problemi di autenticazione dopo l'installazione

Se sei disconnesso o riscontri errori di cookie dopo l'installazione multisite:

1. Cancella i cookie del browser per il sito
2. Accedi nuovamente su `tuodominio.com/wp-login.php`
3. Se il problema persiste, verifica che il tuo `wp-config.php` non abbia `COOKIE_DOMAIN` impostato su `false` — si tratta di un problema noto nelle installazioni multisite a sottodominio

### Un passaggio è fallito durante l'installazione

Se uno dei passaggi di installazione mostra un errore:

1. Annoti il messaggio di errore visualizzato
2. Torna al passaggio di configurazione e riprova
3. Se l'errore persiste, controlla il log degli errori PHP del tuo server per ulteriori dettagli
4. I passaggi già completati verranno saltati nelle esecuzioni successive (l'installer è idempotente)
