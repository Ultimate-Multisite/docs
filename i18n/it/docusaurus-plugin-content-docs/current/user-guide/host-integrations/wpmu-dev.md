---
title: WPMU DEV Integrazione
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrazione WPMU DEV

## Panoramica
WPMU DEV è una piattaforma WordPress completa che offre hosting, plugin e servizi per siti WordPress. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e l'hosting WPMU DEV.

## Funzionalità
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL
- Tentativi di verifica dei certificati SSL estesi

## Requisiti
L'integrazione rileva automaticamente se stai ospitando su WPMU DEV e utilizza l'API integrata. Non è necessaria alcuna configurazione aggiuntiva se stai ospitando su WPMU DEV.

L'integrazione verifica la presenza della costante `WPMUDEV_HOSTING_SITE_ID`, che viene definita automaticamente quando si ospita su WPMU DEV.

## Istruzioni di configurazione

### 1. Verifica l'hosting WPMU DEV

Se stai ospitando su WPMU DEV, le costanti necessarie dovrebbero già essere definite. Verifica che:

1. La costante `WPMUDEV_HOSTING_SITE_ID` sia definita nel tuo ambiente
2. Tu abbia un abbonamento attivo a WPMU DEV con accesso all'API

### 2. Abilita l'integrazione

1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Impostazioni
2. Naviga nella scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione WPMU DEV
5. Fai clic su "Salva modifiche"

## Come funziona

### Sincronizzazione dei domini

Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione utilizza l'API WPMU DEV per aggiungere il dominio al tuo account di hosting
2. Aggiunge anche automaticamente la versione www del dominio
3. WPMU DEV gestisce la configurazione del dominio e l'emissione del certificato SSL

### Gestione dei certificati SSL

L'integrazione è configurata per aumentare il numero di tentativi di verifica dei certificati SSL per l'hosting WPMU DEV, poiché può richiedere del tempo per l'emissione e l'installazione dei certificati SSL. Per impostazione predefinita, tenterà fino a 10 volte per la verifica del certificato SSL, rispetto ai 5 tentativi standard.

## Note importanti

### Rimozione del dominio

Attualmente, l'API WPMU DEV non fornisce un modo per rimuovere i domini. Quando una mappatura di dominio viene rimossa in Ultimate Multisite, il dominio rimarrà nel tuo account di hosting WPMU DEV. Dovrai rimuoverlo manualmente dalla dashboard di hosting WPMU DEV se necessario.

### Autenticazione API

L'integrazione utilizza la chiave API WPMU DEV che è memorizzata nel tuo database WordPress come opzione `wpmudev_apikey`. Questa viene impostata automaticamente quando colleghi il tuo sito a WPMU DEV.

## Risoluzione dei problemi

### Problemi di connessione API
- Verifica che il tuo sito sia correttamente collegato a WPMU DEV
- Controlla che l'opzione `wpmudev_apikey` sia impostata nel tuo database WordPress
- Assicurati che il tuo abbonamento WPMU DEV sia attivo

### Problemi con i certificati SSL
- WPMU DEV può impiegare del tempo per emettere i certificati SSL (di solito 5-15 minuti)
- L'integrazione è configurata per verificare fino a 10 volte i certificati SSL
- Se i certificati SSL non vengono ancora emessi dopo più tentativi, contatta il supporto WPMU DEV

### Dominio non aggiunto
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a WPMU DEV
- Assicurati che il tuo piano di hosting WPMU DEV supporti il numero di domini che stai aggiungendo
