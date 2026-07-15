---
title: Scadenza dell'abbonamento e blocco del sito
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Scadenza dell'Abbonamento e Blocco del Sito

Questa guida spiega come Ultimate Multisite gestisce la scadenza degli abbonamenti, la fine dei periodi di prova e il blocco del sito sul frontend. Copre il ciclo di vita di un abbonamento, dallo stato attivo a quello scaduto, le impostazioni che controllano se i siti vengono bloccati e cosa controllare quando i siti rimangono accessibili dopo la scadenza di un abbonamento.

## Ciclo di Vita dello Stato dell'Abbonamento {#membership-status-lifecycle}

Ogni abbonamento in Ultimate Multisite ha uno di questi stati:

:::note Abbonamenti gratuiti sono a vita
Gli abbonamenti gratuiti non scadono automaticamente. Ultimate Multisite li considera un accesso a vita, quindi non sono inclusi nei controlli di scadenza a meno che un amministratore non ne cambi lo stato o non sposti il cliente su un altro prodotto.
:::

| Stato | Significato |
|---|---|
| **Pending** | In attesa del primo pagamento o della verifica via email |
| **Trialing** | Periodo di prova attivo, nessun pagamento ancora raccolto |
| **Active** | Pagato e corrente |
| **On Hold** | In attesa del pagamento del rinnovo (fattura creata, in attesa di pagamento) |
| **Expired** | Superato il periodo di scadenza e il periodo di grazia senza rinnovo |
| **Cancelled** | Cancellato esplicitamente dal cliente o dall'amministratore |

### Come gli Abbonamenti Passano a Scaduto {#how-memberships-transition-to-expired}

Ultimate Multisite esegue un controllo in background **ogni ora** per cercare abbonamenti che dovrebbero essere contrassegnati come scaduti. Questo controllo utilizza [Action Scheduler](https://actionscheduler.org/) (non WP-Cron direttamente) ed è eseguito come azione pianificata `wu_membership_check`.

Il controllo di scadenza ha un **periodo di grazia integrato di 3 giorni** di default. Un abbonamento non verrà contrassegnato come `expired` finché non sono trascorsi 3 giorni dalla sua `date_expiration`. Questo dà ai clienti il tempo di effettuare un pagamento in ritardo prima che lo stato venga modificato.

:::info
Il periodo di grazia di scadenza di 3 giorni è separato dall'impostazione "Frontend Block Grace Period" descritta di seguito. Il periodo di grazia di scadenza controlla quando lo **stato cambia** da attivo/in sospeso a scaduto. Il periodo di grazia di blocco del frontend controlla quando il **sito viene bloccato** dopo che lo stato è già cambiato.
:::

#### Abbonamenti con Rinnovo Automatico vs. Senza Rinnovo Automatico {#auto-renewing-vs-non-auto-renewing-memberships}

Questa distinzione è fondamentale per comprendere il comportamento di scadenza:

- **Abbonamenti senza rinnovo automatico** (`auto_renew = false`): Il cron job orario gestisce l'intero ciclo di vita: crea i pagamenti di rinnovo, passa l'abbonamento a `on-hold` e, infine, lo contrassegna come scaduto se non viene ricevuto alcun pagamento.

- **Abbonamenti con rinnovo automatico** (`auto_renew = true`): Il controllo di scadenza cron **salta completamente questi abbonamenti**. Ci si aspetta che il gateway di pagamento (Stripe, PayPal, ecc.) notifichi Ultimate Multisite tramite webhook quando un abbonamento fallisce o viene cancellato. Se il webhook non viene ricevuto — a causa di un endpoint mal configurato, un'interruzione del gateway o un abbonamento cancellato al di fuori del sistema — l'abbonamento potrebbe rimanere `active` indefinitamente anche dopo la data di scadenza.

### Come Terminano i Periodi di Prova {#how-trials-end}

Quando il periodo di prova di un abbonamento in `trialing` termina, il sistema:

1. Crea un pagamento di rinnovo in sospeso con l'importo completo dell'abbonamento.
2. Passa lo stato dell'abbonamento da `trialing` a `on-hold`.
3. Invia un'email di notifica di pagamento di rinnovo al cliente.

Questo processo viene eseguito sullo stesso programma orario del controllo di scadenza regolare, ma **solo per gli abbonamenti senza rinnovo automatico**. Per i periodi di prova con rinnovo automatico, è il gateway di pagamento a gestire il passaggio da prova ad abbonamento a pagamento.

## Blocco dell'Accesso al Frontend {#block-frontend-access}

Di default, quando un abbonamento scade o passa in sospeso, **viene ristretto solo il dashboard wp-admin**. Il frontend pubblico del sito rimane accessibile ai visitatori. Per bloccare anche l'accesso pubblico, è necessario abilitare l'impostazione **Block Frontend Access**.

### Configurazione dell'Impostazione {#configuring-the-setting}

Vai su **Ultimate Multisite > Settings > Memberships** e abilita **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Ecco una visualizzazione completa della pagina delle impostazioni degli abbonamenti:

![Membership settings full page](/img/config/settings-membership-full.png)

Tre impostazioni correlate controllano questo comportamento:

| Impostazione | Descrizione | Default |
|---|---|---|
| **Block Frontend Access** | Interruttore principale. Quando abilitato, blocca il frontend pubblico dei siti di rete quando il loro abbonamento non è più attivo. | Off |
| **Frontend Block Grace Period** | Numero di giorni da attendere dopo che l'abbonamento diventa inattivo prima di bloccare. Imposta su `0` per bloccare immediatamente. | 0 |
| **Frontend Block Page** | Una pagina sul sito principale a cui reindirizzare i visitatori quando un sito è bloccato. Se non impostata, i visitatori vedono un messaggio generico "Site not available". | None |

### Cosa Vedono i Visitatori Quando un Sito è Bloccato {#what-visitors-see-when-a-site-is-blocked}

Quando l'accesso al frontend è bloccato, i visitatori del sito verranno:

1. **Reindirizzati** alla pagina selezionata in **Frontend Block Page** (se configurato), oppure
2. **Vedranno un messaggio predefinito**: "This site is not available at the moment." con un link alla pagina di accesso per l'amministratore del sito.

Gli amministratori del sito possono comunque accedere — la pagina di accesso non viene mai bloccata.

### Cosa Viene Bloccato e Quando {#what-gets-blocked-and-when}

Il comportamento di blocco dipende dallo stato dell'abbonamento:

| Stato dell'Abbonamento | Bloccato sul Frontend? | Periodo di Grazia Applicato? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (vedi nota sotto) | -- |
| On Hold | Considerato attivo -- non bloccato | -- |
| Expired | **Sì**, se Block Frontend Access è attivo | Sì |
| Cancelled | **Sì**, sempre (indipendentemente dall'impostazione) | **No** -- bloccato immediatamente |
| Pending | Non bloccato tramite controllo abbonamento | -- |

:::warning Gli abbonamenti in prova non vengono bloccati
Anche se il periodo di prova è terminato, un abbonamento con stato `trialing` **non** verrà bloccato sul frontend. Il periodo di prova deve prima passare a un altro stato (tipicamente `on-hold` tramite il cron job, quindi `expired` se non pagato). Se stai vedendo abbonamenti in prova che non sono passati stato, controlla la sezione di risoluzione dei problemi qui sotto.
:::

:::note Gli abbonamenti cancellati bypassano il periodo di grazia
Gli abbonamenti cancellati vengono sempre bloccati una volta superata la data di scadenza, indipendentemente dal fatto che Block Frontend Access sia abilitato. Il Frontend Block Grace Period **non** si applica agli abbonamenti cancellati.
:::

## Risoluzione dei Problemi: Siti che Rimangono Accessibili Dopo la Scadenza {#troubleshooting-sites-remaining-accessible-after-expiration}

Se i siti rimangono pubblicamente accessibili dopo la scadenza di un abbonamento, esegui questi controlli in ordine:

### 1. Verifica che l'Impostazione Block Frontend Access Sia Abilitata {#1-verify-the-block-frontend-access-setting-is-enabled}

Vai su **Ultimate Multisite > Settings > Memberships** e conferma che l'interruttore **Block Frontend Access** sia attivo. Questa impostazione è **disabilitata di default**, il che significa che solo wp-admin viene ristretto quando un abbonamento diventa inattivo.

### 2. Controlla il Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Nella stessa pagina delle impostazioni, controlla il valore di **Frontend Block Grace Period**. Se è impostato su 7 giorni, ad esempio, il frontend non verrà bloccato fino a 7 giorni dopo la data di scadenza dell'abbonamento — anche se lo stato dell'abbonamento è già `expired`.

Impostalo su `0` se desideri un blocco immediato dopo che l'abbonamento diventa inattivo.

### 3. Conferma che lo Stato dell'Abbonamento Sia Effettivamente Cambiato {#3-confirm-the-membership-status-has-actually-changed}

Vai su **Ultimate Multisite > Memberships** e controlla lo stato dell'abbonamento interessato. Se mostra ancora `active` nonostante sia passata la data di scadenza, il passaggio di stato non è avvenuto. Cause comuni:

- **L'abbonamento ha rinnovo automatico**: Controlla il campo `auto_renew` sulla pagina di modifica dell'abbonamento. Se il rinnovo automatico è abilitato, il cron di scadenza salta questo abbonamento — si affida al gateway di pagamento per segnalare il fallimento. Controlla il tuo dashboard del gateway (Stripe, PayPal) per confermare che lo stato dell'abbonamento corrisponda a quello mostrato da Ultimate Multisite.

- **Il cron job non è stato eseguito**: Vedi il passo successivo.

### 4. Verifica che Action Scheduler Stia Funzionando {#4-verify-action-scheduler-is-running}

Ultimate Multisite utilizza Action Scheduler per i suoi cron job. Vai su **Tools > Scheduled Actions** nell'admin di rete e cerca:

- **`wu_membership_check`** — Questo dovrebbe apparire come un'azione ricorrente che viene eseguita ogni ora. Se manca, i controlli degli abbonamenti non vengono programmati.
- **`wu_async_mark_membership_as_expired`** — Queste sono attività individuali per contrassegnare specifici abbonamenti come scaduti. Se vedi azioni fallite qui, potrebbero contenere messaggi di errore che spiegano il motivo.

Se vedi azioni bloccate o fallite, potresti avere un problema con Action Scheduler. Cause comuni:

- **`DISABLE_WP_CRON` è impostato su `true`** in `wp-config.php` senza un sostituto cron a livello di sistema
- **Basso traffico sul sito** — WP-Cron viene eseguito solo quando qualcuno visita il sito

Per garantire un'esecuzione cron affidabile, imposta un cron job di sistema:

```bash
# Esegui ogni 5 minuti tramite wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Oppure tramite WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Controlla i Problemi con i Webhook del Gateway (Abbonamenti con Rinnovo Automatico) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Se l'abbonamento è con rinnovo automatico e l'abbonamento del gateway è stato cancellato o ha fallito, ma Ultimate Multisite lo mostra ancora come `active`:

- **Stripe**: Vai al Dashboard di Stripe > Customers e controlla lo stato dell'abbonamento. Quindi verifica che l'endpoint webhook sia attivo sotto Developers > Webhooks. L'endpoint dovrebbe puntare al tuo sito e mostrare consegne riuscite.
- **PayPal**: Controlla lo stato dell'abbonamento nel tuo account aziendale PayPal e verifica la consegna IPN/webhook.

Se il gateway mostra l'abbonamento come cancellato ma Ultimate Multisite no, è probabile che la notifica webhook sia andata persa. Puoi cambiare manualmente lo stato dell'abbonamento in **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Controlla il Periodo di Grazia di Scadenza (Livello Cron) {#6-check-the-expiration-grace-period-cron-level}

Il controllo cron ha il proprio periodo di grazia (di default: 3 giorni) prima di contrassegnare un abbonamento come scaduto. Questo è separato dal periodo di grazia di blocco del frontend. Il tempo totale prima che un sito venga bloccato può essere:

**Periodo di grazia di scadenza (3 giorni)** + **Periodo di grazia di blocco del frontend (la tua impostazione)** = Ritardo totale

Ad esempio, con le impostazioni predefinite e un periodo di grazia di frontend di 7 giorni, potrebbe volerci fino a 10 giorni dopo la `date_expiration` prima che il sito venga effettivamente bloccato.

### 7. Scaducare Manualmente un Abbonamento {#7-manually-expire-a-membership}

Se devi bloccare immediatamente un sito senza aspettare il ciclo cron, puoi cambiare manualmente lo stato dell'abbonamento:

1. Vai su **Ultimate Multisite > Memberships**
2. Clicca sull'abbonamento interessato
3. Cambia lo stato in **Expired** o **Cancelled**
4. Clicca **Save**

Il blocco del frontend avrà effetto al prossimo caricamento della pagina (soggetto al Frontend Block Grace Period per gli abbonamenti scaduti, o immediatamente per quelli cancellati).

## Riepilogo {#summary}

La cronologia completa dalla data di scadenza al blocco del sito:

```text
date_expiration passa
       |
       v
  [Periodo di grazia cron di 3 giorni]     <-- l'abbonamento mostra ancora attivo/in sospeso
       |
       v
  Il cron contrassegna l'abbonamento come "expired"
       |
       v
  [Periodo di grazia di blocco del frontend]  <-- configurato in Settings > Memberships
       |
       v
  Il frontend del sito viene bloccato
```

Per gli abbonamenti cancellati, il percorso è più breve:

```text
  Abbonamento cancellato
       |
       v
  date_expiration passa (nessun periodo di grazia)
       |
       v
  Il frontend del sito viene bloccato immediatamente
```

## Riferimento per Sviluppatori {#developer-reference}

I seguenti hook e filtri ti consentono di personalizzare il comportamento di scadenza e blocco:

| Hook/Filter | Descrizione |
|---|---|
| `wu_membership_grace_period_days` | Filtra il numero di giorni di periodo di grazia prima di contrassegnare un abbonamento come scaduto (default: 3) |
| `wu_schedule_membership_check_interval` | Filtra l'intervallo tra i controlli degli abbonamenti (default: 1 ora) |
| `wu_membership_renewal_days_before_expiring` | Filtra quanti giorni prima della scadenza creare un pagamento di rinnovo (default: 3) |
| `wu_blocked_site_reactivation_url` | Filtra per fornire un URL di riattivazione personalizzato quando un sito è bloccato |
| `wu_membership_is_active` | Filtra se un abbonamento è considerato attivo |
| `wu_membership_expired_check_query_params` | Filtra i parametri di query utilizzati per trovare abbonamenti scaduti |
| `wu_membership_trial_check_query_params` | Filtra i parametri di query utilizzati per trovare prove scadute |
