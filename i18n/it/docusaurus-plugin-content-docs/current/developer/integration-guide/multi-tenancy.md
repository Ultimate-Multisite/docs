---
title: Integrazione multi-tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrazione Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 modifica diversi punti di integrazione per tenant sovrani, verifica della migrazione e automazione del ciclo di vita dei tenant.

## Flusso di bootstrap del tenant {#tenant-bootstrap-flow}

Le integrazioni che creano o modificano tenant dovrebbero seguire questo ordine:

1. Risolvere il record del registro tenant e il modello di isolamento.
2. Creare o verificare il writer del database del tenant.
3. Eseguire il bootstrap dello schema del tenant.
4. Effettuare il provisioning degli utenti del tenant.
5. Registrare il routing del tenant e i percorsi del filesystem.
6. Eseguire la verifica della migrazione prima di esporre il tenant.

Non presumere che un tenant sovrano possa riutilizzare la connessione al database di rete. Usa il registro tenant e le astrazioni writer fornite dall'addon.

## Hook SSO e REST {#sso-and-rest-hooks}

L'autologin stateless del tenant usa token di breve durata con una claim di scopo, protezione JTI contro il replay, un limite di scadenza e vincolo dell'origine. Le integrazioni che aggiungono pulsanti di login o link di gestione remota dovrebbero generare visite al tenant tramite il flusso SSO supportato invece di costruire direttamente URL di login del tenant.

Gli eventi di audit API lato rete e i riepiloghi giornalieri sono disponibili per i gateway dei tenant sovrani. Usa quei log durante il debug di sistemi esterni che chiamano gli endpoint del ciclo di vita dei tenant.

## URL delle azioni cliente sovrane {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 instrada le azioni cliente dei tenant sovrani di nuovo al sito principale per i flussi di Account, checkout, fatturazione, fattura, sito, cambio template e domain-mapping. Le integrazioni che renderizzano link di gestione lato tenant dovrebbero indirizzare quelle azioni al pannello cliente del sito principale e includere una destinazione di ritorno validata quando l'utente dovrebbe poter tornare al tenant dopo aver completato l'azione.

Usa il wrapper SSO core per i link di gestione cross-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

L'URL generato rimane filtrabile tramite `wu_sso_url`, che riceve l'URL SSO, l'utente corrente, l'ID del sito di destinazione e il contesto di redirect. Gli addon possono usare quel filtro per aggiungere contesto specifico del provider o per sostituire l'URL del broker preservando la validazione dei token di Ultimate Multisite.

Non duplicare lo stato di membership, fattura, indirizzo di fatturazione, template o gestione dominio all'interno del tenant sovrano. Considera la dashboard del tenant come il launcher e il pannello cliente del sito principale come il sistema di riferimento per le azioni gestite.

## Verifica della migrazione {#migration-verification}

Dopo che una migrazione o un'integrazione del ciclo di vita modifica i dati del tenant, esegui i gate di verifica:

- `wp tenant verify-no-legacy --site=<site-id>` conferma che il tenant non dipende più da percorsi legacy lato rete.
- `wp tenant verify-sovereign-push --site=<site-id>` conferma che i job di push sovrani possono essere elaborati e svuotati.

Le integrazioni dovrebbero considerare una verifica fallita come un blocco del deployment ed evitare di contrassegnare un tenant come live finché l'errore non viene risolto.

## Eliminazione del tenant {#tenant-deletion}

I flussi di eliminazione dovrebbero chiamare il percorso di teardown dell'addon in modo che le credenziali del database del tenant vengano ripulite. Le integrazioni esterne possono rimuovere le risorse del provider dopo il completamento del teardown, ma non dovrebbero eliminare database o cartelle dell'host mentre la verifica o i job di push asincroni sono ancora in esecuzione.

## Router database deprecato {#deprecated-database-router}

Il `Database_Router` legacy è stato sostituito da uno stub di deprecazione. Le nuove integrazioni dovrebbero risolvere i tenant tramite il router del sito corrente e le API del registro tenant invece di dipendere dalla vecchia classe router.
