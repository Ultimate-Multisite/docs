---
title: Riferimento delle impostazioni
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Riferimento impostazioni

Questa pagina tiene traccia delle impostazioni che influenzano l’amministrazione quotidiana e le recenti modifiche di comportamento in Ultimate Multisite.

## Altre opzioni

L’area **Altre opzioni** appare sotto **Ultimate Multisite > Settings > Login & Registration**.

| Impostazione | Descrizione |
|---|---|
| **Enable Jumper** | Mostra lo strumento di navigazione rapida Jumper nell’area di amministrazione. Usalo per passare direttamente alle schermate di Ultimate Multisite, agli oggetti di rete e alle destinazioni di amministrazione supportate. Disabilitalo se non vuoi che questa scorciatoia sia visibile. |

## Segnalazione degli errori e telemetria

La precedente impostazione di consenso esplicito alla segnalazione degli errori è stata rimossa dalla pagina delle impostazioni. La telemetria anonima è disabilitata e non esiste alcun interruttore UI per abilitarla.

Se mantieni runbook interni o screenshot per la pagina delle impostazioni, rimuovi i riferimenti al vecchio campo di consenso esplicito alla segnalazione degli errori, così gli amministratori non cercheranno un’impostazione che non è più presente.

## Impostazioni Import/Export

La scheda delle impostazioni **Import/Export** descrive quali impostazioni controlla e collega direttamente a **Ultimate Multisite > Site Export** per gli archivi di sito e di rete. Usa la scheda delle impostazioni per la configurazione di import/export, usa **Tools > Export & Import** per il flusso di lavoro di esportazione/importazione del singolo sito e usa lo strumento Site Export quando hai bisogno di un archivio Network Export completo.

## Avviso sul saldo Domain Seller HostAfrica

Quando l’addon Domain Seller è connesso a HostAfrica, gli amministratori di rete ora vedono un avviso di saldo basso ignorabile quando il saldo dell’account rivenditore è troppo basso per un’elaborazione affidabile della registrazione o del rinnovo dei domini.

Tratta questo avviso come un avviso operativo: ricarica il saldo rivenditore HostAfrica prima di accettare altre registrazioni di domini a pagamento, poi torna alle impostazioni di Domain Seller o alla schermata di monitoraggio dei domini per confermare che registrazioni e rinnovi possano continuare normalmente.

## Impostazioni del connettore del provider AI

Le impostazioni del connettore del provider AI ora espongono solo i pool di Account OAuth supportati:

| Provider | Flusso di configurazione |
|---|---|
| **Anthropic Max** | Collega uno o più Account Anthropic Max con il pulsante OAuth. Usa il fallback OAuth manuale quando un browser in sandbox non può completare automaticamente il reindirizzamento. |
| **OpenAI ChatGPT/Codex** | Collega gli Account ChatGPT tramite lo stesso flusso di lavoro del pool OAuth. Le operazioni supportate dal connettore possono usare le chiamate allo strumento ChatGPT Codex dopo che l’Account è collegato. |
| **Google AI Pro** | Collega gli Account Google AI Pro tramite OAuth, poi aggiorna il connettore se l’elenco degli Account non si aggiorna immediatamente. |

Cursor Pro non è più un provider supportato. Rimuovi vecchi screenshot interni, runbook o passaggi di onboarding che menzionano campi di configurazione o percorsi del connettore di Cursor Pro.

Quando aggiungi o rimuovi Account provider, inserisci un indirizzo email valido per l’Account da aggiornare o eliminare e salva le impostazioni del provider prima di testare operazioni basate sul connettore.
