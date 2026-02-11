---
title: Integrazione del Pannello di Controllo Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrazione del pannello di controllo Hestia

Questa guida spiega come configurare l'integrazione Hestia di Ultimate Multisite in modo che i domini mappati nella tua rete vengano aggiunti (e rimossi) automaticamente come alias di dominio Web in Hestia.

- Riferimento CLI di Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Documentazione ufficiale REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Cosa fa
- Quando un dominio è mappato in Ultimate Multisite, l'integrazione chiama l'API di Hestia per eseguire:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Quando un mapping di dominio viene rimosso, esegue:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Aggiunge/rimuove opzionalmente l'alias `www.` a seconda dell'impostazione “Auto-create www subdomain” nelle impostazioni di Domain Mapping.

## Prerequisiti
- Un dominio Web Hestia esistente che punta già alla tua installazione WordPress. L'integrazione aggiungerà gli alias a questo dominio di base.
- Accesso API di Hestia abilitato. Puoi autenticarti usando una password o un hash/token API.

Vedi la documentazione REST API di Hestia per abilitare l'accesso API e i dettagli di autenticazione:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configurazione (Wizard → Integrations → Hestia)
Fornisci i seguenti valori:

- `WU_HESTIA_API_URL` (obbligatorio)
  - L'endpoint API di base, tipicamente `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obbligatorio)
  - Utente Hestia usato per i comandi API (spesso `admin`).
- `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` (almeno uno)
  - Scegli un metodo di autenticazione: password o hash/token API.
- `WU_HESTIA_ACCOUNT` (obbligatorio)
  - L'account (proprietario) del dominio Web in Hestia; questo è il primo argomento per la CLI.
- `WU_HESTIA_WEB_DOMAIN` (obbligatorio)
  - Il dominio Web Hestia esistente che serve il tuo WordPress (gli alias verranno aggiunti qui).
- `WU_HESTIA_RESTART` (opzionale; default `yes`)
  - Se riavviare/ricaricare i servizi dopo le modifiche degli alias.

Puoi lasciare che lo wizard inserisca queste costanti in `wp-config.php`, o definirle manualmente.

## Verifica della configurazione
- Nella fase “Testing” dello wizard, il plugin chiama `v-list-web-domains <WU_HESTIA_ACCOUNT> json` tramite l'API. Una risposta di successo conferma la connettività e l'autenticazione.
- Dopo aver mappato un dominio, controlla in Hestia: Web > il dominio di base > Aliases. Dovresti vedere l'alias nuovo aggiunto.

## Note e suggerimenti
- Assicurati che `WU_HESTIA_WEB_DOMAIN` esista già e sia di proprietà di `WU_HESTIA_ACCOUNT`.
- Se è richiesto SSL, gestisci i certificati in Hestia. Questa integrazione gestisce solo gli alias.
- Il plugin può anche aggiungere/rimuovere `www.<domain>` a seconda dell'impostazione “www subdomain” di Domain Mapping.

## Esempio di chiamata API (cURL)
Di seguito un esempio concettuale (adatta al tuo ambiente). Riferisciti alla documentazione ufficiale per i parametri esatti.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Per la cancellazione, usa `cmd=v-delete-web-domain-alias` e gli stessi argomenti.

## Risoluzione dei problemi
- Errore HTTP dall'API: verifica che `WU_HESTIA_API_URL` sia raggiungibile e includa `/api`.
- Errori di autenticazione: conferma `WU_HESTIA_API_USER` e `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH`.
- “Missing account/base domain” nei log: assicurati che `WU_HESTIA_ACCOUNT` e `WU_HESTIA_WEB_DOMAIN` siano impostati e validi in Hestia.

## Riferimenti
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
