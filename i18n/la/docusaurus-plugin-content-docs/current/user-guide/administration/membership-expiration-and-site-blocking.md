---
title: Expiratio Memoris et Bloqueus Situs
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiratio Membrum et Bloccium Situs

Hoc opus te docet quomodo Ultimate Multisite maneat expirationes membrorum, finitiones probationum et blocationem sitorum in frontend. Hoc dicit omnia de vita membrorum a activa ad expiratum, de statibus quae sita bloccanda regunt, et quod debet examinari cum sita manent accessibilia post expiration membrorum.

## Vita Status Membrorum

Omnis membrum in Ultimate Multisite habet unum ex sequendis status:

:::note Membra gratuita sunt aeterna
Membra gratuata non expirant automatico. Ultimate Multisite eos tractat ut accessus aeternus, ita quod non includuntur in verificis expirationibus nisi administrator status eorum mutet aut clientem ad productum aliud transferat.
:::

| Status | Significatio |
|---|---|
| **Pending** | Expectans primam pagationem vel verificationem epistulae |
| **Trialing** | Period probationis activus, nullo a quo ancora est collecta |
| **Active** | Pagatum et actu |
| **On Hold** | Pagamentum renovandi expectatur (factura creatum, expectans pagamentum) |
| **Expired** | Passavit die expirationis et periodi concessae sine renovatio |
| **Cancelled** | Explicite cancellatus a cliente vel admin |

### Quomodo Membra Transiuntur in Expired

Ultimate Multisite facit verificandum in background **quaque horam** quod quaerit membrum quae debet ostenditur ut expiratum. Hoc verificatio usus facit [Action Scheduler](https://actionscheduler.org/) (non WP-Cron directum) et currit ut actio schedulata `wu_membership_check`.

Verificatio expirationis habet **periodum concessae inbuiltum de 3 diebus** per default. Membrum non erit marcatum ut `expired` donec 3 dies postquam `date_expiration` eius transit. Hoc datibus clienti tempus ad completum pagamentum praebet antequam status eius mutetur.

:::info
Il periodo di grazia di scadenza di 3 giorni è separato dalle impostazioni del Periodo di Grazia del Blocco Frontend descritte di seguito. Il periodo di grazia di scadenza controlla quando lo **stato cambia** da attivo/in sospeso a scaduto. Il periodo di grazia del blocco frontend controlla quando il **sito viene bloccato** dopo che lo stato è già cambiato.
:::

#### Abbonamenti con Rinnovo Automatico vs. Senza Rinnovo Automatico

Questa distinzione è fondamentale per capire il comportamento della scadenza:

- **Abbonamenti senza rinnovo automatico** (`auto_renew = false`): Il cron job orario gestisce l'intero ciclo di vita -- crea i pagamenti di rinnovo, passa l'abbonamento in stato "in sospeso" e infine lo segna come scaduto se il pagamento non viene ricevuto.

- **Abbonamenti con rinnovo automatico** (`auto_renew = true`): Il controllo delle scadenze del cron job **salta completamente questi**. Si prevede che il gateway di pagamento (Stripe, PayPal, ecc.) notifichi Ultimate Multisite tramite webhook quando un abbonamento fallisce o viene cancellato. Se non viene ricevuto il webhook -- a causa di un endpoint configurato male, di un'interruzione del gateway o di una cancellazione dell'abbonamento al di fuori del sistema -- l'abbonamento potrebbe rimanere `active` indefinitamente anche dopo la data di scadenza.

### Come Terminano le Prove Gratuite (Trials)

Quando il periodo di prova di un abbonamento in fase di prova termina, il sistema:

1. Crea un pagamento di rinnovo in sospeso con l'importo dell'abbonamento completo
2. Passa lo stato dell'abbonamento da `trialing` a `on-hold`
3. Invia una email di notifica del pagamento di rinnovo al cliente

Questo processo si esegue sullo stesso orario orario del controllo regolare della scadenza, ma **solo per gli abbonamenti senza rinnovo automatico**. Per i periodi di prova con rinnovo automatico, il gateway di pagamento gestisce la transizione dalla prova all'abbonamento a pagamento.

## Bloccare l'Accesso Frontend

Per default, quando un'iscrizione scade o viene messa in pausa, **viene ristretto solo il dashboard wp-admin**. Il frontend pubblico del sito rimane accessibile ai visitatori. Per bloccare anche l'accesso pubblico, devi attivare l'impostazione **Block Frontend Access** (Blocca accesso frontend).

### Configurare l'Impostazione

Vai su **Ultimate Multisite > Settings > Memberships** e attiva **Block Frontend Access**.

![Impostazioni Block Frontend Access che mostrano l'interruttore attivo, un periodo di grazia di 7 giorni e la selezione di una Pagina di Blocco Frontend](/img/config/settings-membership-block-frontend.png)

Ecco una visuale completa della pagina delle impostazioni dell'iscrizione:

![Pagina completa delle impostazioni dell'iscrizione](/img/config/settings-membership-full.png)

Tre impostazioni correlate controllano questo comportamento:

| Impostazione | Descrizione | Predefinito |
|---|---|---|
| **Block Frontend Access** | Interruttore principale. Quando attivato, blocca il frontend pubblico dei siti della rete quando la loro iscrizione non è più attiva. | Spento (Off) |
| **Frontend Block Grace Period** | Numero di giorni da attendere dopo che l'iscrizione diventa inattiva prima del blocco. Imposta a `0` per bloccare immediatamente. | 0 |
| **Frontend Block Page** | Una pagina sul sito principale dove reindirizzare i visitatori quando un sito viene bloccato. Se non impostata, i visitatori vedono un messaggio generico "Sito non disponibile al momento" con un link alla pagina di accesso per l'amministratore del sito. | Nessuna (None) |

### Cosa Vedono i Visitatori Quando un Sito è Bloccato

Quando l'accesso al frontend viene bloccato, i visitatori del sito faranno una delle seguenti cose:

1. **Verranno reindirizzati** alla pagina che hai selezionato in **Frontend Block Page** (se configurata), oppure
2. **Vedranno un messaggio predefinito**: "Questo sito non è disponibile al momento" con un link alla pagina di accesso per l'amministratore del sito.

Gli amministratori del sito possono comunque accedere -- la pagina di accesso non viene mai bloccata.

### Cosa Viene Bloccato e Quando

Il comportamento di blocco dipende dallo stato dell'iscrizione:

| Status Membrum | Frontend Bloqueado? | Período de Graça Aplicado? |
|---|---|---|
| Ativo | No | -- |
| Testando | **No** (ver nota abaixo) | -- |
| Em Espera | Considerado ativo -- não bloqueado | -- |
| Expirado | **Sim**, se Bloquear Acesso Frontend estiver ligado | Sim |
| Cancelado | **Sim**, sempre (independentemente da configuração) | **Não** -- bloqueado imediatamente |
| Pendente | Não bloqueado pela verificação de membresia | -- |

:::warning Membros em período de teste não são bloqueados
Mesmo que o período de teste tenha terminado, uma membresia com status `trialing` **não** será bloqueada no frontend. O teste deve primeiro mudar para outro status (tipicamente `on-hold` via job cron, depois `expired` se não houver pagamento). Se você estiver vendo membros em período de teste que não mudaram de status, verifique a seção de solução de problemas abaixo.
:::

:::note Membros cancelados ignoram o período de graça
Membros cancelados são sempre bloqueados assim que a data de expiração passa, independentemente de o Bloquear Acesso Frontend estar ativado. O Período de Graça do Bloco Frontend **não** se aplica a membros cancelados.
:::

## Solução de Problemas: Sites Permanecendo Acessíveis Após Expiração

Se os sites permanecerem acessíveis publicamente após o vencimento da membresia, siga estas verificações nesta ordem:

### 1. Verifique se a Configuração Bloquear Acesso Frontend Está Ativada

Vá em **Ultimate Multisite > Settings > Memberships** e confirme se o interruptor **Block Frontend Access** está ligado. Esta configuração está **desligada por padrão**, o que significa que apenas o wp-admin é restrito quando uma membresia fica inativa.

### 2. Verifique o Período de Graça do Bloco Frontend

In eadem pagina de réglages, vérifie la valeur **Frontend Block Grace Period**. Si esta está configurada en 7 días, por ejemplo, el frontend no se bloqueará hasta 7 días después de la fecha de expiración de la membresía, incluso si el estado de la membresía ya es `expired`.

Establece esto en `0` si deseas un bloqueo inmediato después de que la membresía se vuelva inactiva.

### 3. Confirma que el Estado de la Membresía Ha Cambiado Realmente

Ve a **Ultimate Multisite > Memberships** y comprueba el estado de la membresía afectada. Si todavía muestra `active` a pesar de que la fecha de expiración ha pasado, la transición de estado no se ha producido. Causas comunes:

- **La membresía se está renovando automáticamente**: Revisa el campo `auto_renew` en la página de edición de la membresía. Si la renovación automática está activada, el cron de expiración omite esta membresía; depende de que la pasarela de pago informe del fallo. Comprueba tu panel de control de la pasarela (Stripe, PayPal) para confirmar que el estado de suscripción coincide con lo que muestra Ultimate Multisite.

- **El trabajo cron no se ha ejecutado**: Consulta el siguiente paso.

### 4. Verifica que Action Scheduler Esté Funcionando

Ultimate Multisite utiliza Action Scheduler para sus trabajos cron. Ve a **Tools > Scheduled Actions** en la administración de red y busca:

- **`wu_membership_check`** -- Este debería aparecer como un trabajo recurrente que se ejecuta cada hora. Si falta, las comprobaciones de membresía no se están programando.
- **`wu_async_mark_membership_as_expired`** -- Estas son tareas individuales para marcar membresías específicas como expiradas. Si ves acciones fallidas aquí, pueden contener mensajes de error que explican por qué ocurrió el fallo.

Si ves trabajos atascados o fallidos, es posible que tengas un problema con Action Scheduler. Causas comunes:

- **`DISABLE_WP_CRON` est est to `true`** in `wp-config.php` sine substitutum cron de nivel systematis
- **Traffic siti minimus** -- WP-Cron solum currit cum aliquis visitat situm

Adhibere executionem cronem fidem, configura job cron systematis:

```bash
# Curre quomque 5 minutas via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Aut via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Verifica Problemas Webhook Gateway (Abonamenta Auto-renovantes)

Si abonamentum est auto-renovans et subscription gateway cancellata est aut non habet successum, sed Ultimate Multisite id ostendit semper `active`:

- **Stripe**: Ipse ad Dashboard Stripe > Customers adde et status subscription verifica. Deinde verifica endpoint webhook activum sub Developers > Webhooks. Endpoint debet indicare situm tuum et ostendere delivery successiva.
- **PayPal**: Status subscription in account business PayPal verificae et IPN/webhook delivery verifica.

Si gateway abonamentum cancellatum ostendit sed Ultimate Multisite non ostendit, notificatio webhook probabilemente perduta est. Status membership manuque in **Ultimate Multisite > Memberships > [Edit Membership]** mutare potes.

### 6. Verifica Periodum Gratiarum Expirationis (Nivel Cron)

Verificatio cronis habet suum periodum gratiarum (default: 3 dies) antequam membership ut expiratum ostendatur. Hoc est separate a periodu gratiarum blocui frontend. Tempus totalis antequam situm obstrangetur potest esse:

**Periodum gratiarum expirationis (3 dies)** + **Periodum gratiarum blocui frontend (setting tuum)** = Delatus Totalis

Exemplum, cum statibus defaultis et periodo concessorio de septem dies pro front-end, potest esse usque ad decem dies post `date_expiration` antequam situs in re vero obstite.

### 7. Expirare Membro Manualiter

Si necesse sit situs immeditate obstite sine attesa cycli cron, status membrorum manuque mutare potes:

1. Ir ad **Ultimate Multisite > Memberships**
2. Fac ut in membrum affectatum cliquas
3. Status mutare in **Expired** vel **Cancelled**
4. Clipe **Save**

Bloc de front-end effectus habet post proximo carregatione paginae (subjecto periodi concessorio blocui front-end ad membrorum expiratorum, vel immeditate ad membrorum cancellatorum).

## Summa

Tempus completum a die expirationis ad obstatio situs:

```text
date_expiration transire
       |
       v
  [periodus concessorius cron de 3 dies]     <-- membrum adhuc ostenditur ut activum/in suspensione
       |
       v
  Cron membrum in "expired" ponit
       |
       v
  [periodus concessorius blocui front-end]  <-- configuratus in Settings > Memberships
       |
       v
  Front-end situs obstatum est
```

Ad membrorum cancellatorum, via brevius est:

```text
  Membrum cancellatum
       |
       v
  date_expiration transire (sine periodu concessorio)
       |
       v
  Front-end situs immeditate obstatum est
```

## Referentia Developerum

Hae hooks et filters sequentes tibi permittunt moduram expirationem et blocui comportamentum:

| Hook/Filtro | Descripcio |
|---|---|
| `wu_membership_grace_period_days` | Filtra la cantidad de días de período de gracia antes de marcar una membresía como expirada (valor por defecto: 3) |
| `wu_schedule_membership_check_interval` | Filtra el intervalo entre las comprobaciones de membresía (valor por defecto: 1 hora) |
| `wu_membership_renewal_days_before_expiring` | Filtra cuántos días antes de la expiración se debe crear un pago de renovación (valor por defecto: 3) |
| `wu_blocked_site_reactivation_url` | Filtra para proporcionar una URL de reactivación personalizada cuando un sitio está bloqueado |
| `wu_membership_is_active` | Filtra si una membresía se considera activa |
| `wu_membership_expired_check_query_params` | Filtra los parámetros de consulta utilizados para encontrar membresías expiradas |
| `wu_membership_trial_check_query_params` | Filtra los parámetros de consulta utilizados para encontrar pruebas (trials) expiradas |
