---
title: Expiració de membresia i blocatge de site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiració de membresia i blocatge del lloc web {#membership-expiration-and-site-blocking}

Aquesta guia explica com Ultimate Multisite gestiona l'expiració de membresdies, la finalització de proves i el blocatge del lloc web al frontend. Cobre el cicle vital d'una membresia, des de activa fins a expirada, les configuracions que controlen si els llocs es bloquegen i què compro quan els llocs encara són accessibles després que una membresia ha expirat.

## Cicle vital de l'estat de la membresia {#membership-status-lifecycle}

Toda membresia a Ultimate Multisite té un dels següents status:

:::note Membresdies gratuïtes són de vida
Les membresdies gratuïtes no caducen automàticament. Ultimate Multisite les considera accés de vida, per tant, no s'inclouen en les verificacions d'expiració a menys que un administrador canvi el seu estat o estigui el client en un altre producte.
:::

| Estat | Significat |
|---|---|
| **Pending** | Esperant el primer pagament o la verificació per correu electrònic |
| **Trialing** | Període de prova actiu, encara no s'ha recollat pagament |
| **Active** | Pagat i actualitzat |
| **On Hold** | Pendent de pagament de renovació (factura creada, esperant pagament) |
| **Expired** | Passat la data d'expiració i el període de gràcia sense renovació |
| **Cancelled** | Cancel·lat explícitament pel client o l'administrador |

### Com transiciona les membresdies a "Expired" {#how-memberships-transition-to-expired}

Ultimate Multisite executa una verificació de fons **cada hora** que busca membresdies que haurien de marcarse com a expirades. Aquesta verificació utilitza [Action Scheduler](https://actionscheduler.org/) (no WP-Cron directament) i s'executa com a acció programada `wu_membership_check`.

La verificació d'expiració té un **període de gràcia integrat de 3 dies** per defecte. Una membresia no es marcarà com a `expired` fins a 3 dies després que passi la seva `date_expiration`. Això dona als clients temps per completar un pagament tardà que canvi el seu estat.

:::info
El període de gràcia d'expiració de 3 dies és separat del paramètre de Període de Gràcia de Blocatge del Frontend descrit a continuació. El període de gràcia d'expiració controla quan el **status canvia** de actiu/en suspens a expirat. El període de gràcia de blocatge del frontend controla quan el **lloc web es bloqueja** després que el status ja ha canviat.
:::

#### Membresdies amb renovació automàtica vs. sense renovació automàtica {#auto-renewing-vs-non-auto-renewing-memberships}

Aquesta distinció és crucial per entendre el comportament d'expiració:

- **Membresdies sense renovació automàtica** (`auto_renew = false`): El cron job horari gestiona tot el cicle vital: crea pagaments de renovació, transiciona la membresia a "on-hold" i, finalment, la marca com a expirada si no es reposta el pagament.

- **Membresdies amb renovació automàtica** (`auto_renew = true`): La verificació d'expiració del cron **les ignora totalment**. Es espera que la passarela de pagament (Stripe, PayPal, etc.) notifiqui a Ultimate Multisite mitjançant webhooks quan una subscripció falla o es cancela. Si no es rep el webhook —a causa d'un punt final mal configurat, una interrupció de la passarela o una subscripció cancel·lada fora del sistema—, la membresia pot mantenir-se `active` indefinidament encara després que passi la data d'expiració.

### Com acaben les proves {#how-trials-end}

Quan el període de prova d'una membresia acaba, el sistema:

1. Crea un pagament de renovació pendent amb el quantitat total de la subscripció
2. Transiciona l'estat de la membresia de `trialing` a `on-hold`
3. Envía un correu electrònic de notificació de pagament de renovació al client

Aquest procés s'executa en el mateix horari que la verificació regular d'expiració, però **només per a membresdies sense renovació automàtica**. Per les proves amb renovació automàtica, la passarela de pagament gestiona la transició de prova a subscripció pagada.

## Blocatge del Frontend {#block-frontend-access}

Per defecte, quan una membresia caduca o passa a "on hold", **només el dashboard wp-admin està restringit**. El frontend públic del lloc web es manté accessible als visitants. Per blocar també l'accés públic, has de habilitar la configuració **Block Frontend Access**.

### Configuració del paramètre {#configuring-the-setting}

Navega a **Ultimate Multisite > Settings > Memberships** i activa **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Aquí teniu una vista completa de la pàgina de configuració de membresdies:

![Membership settings full page](/img/config/settings-membership-full.png)

Tres configuracions relacionades controlen aquest comportament:

| Setting | Descripció | Default |
|---|---|---|
| **Block Frontend Access** | Interruptor principal. Quan està habilitat, bloqueja el frontend públic dels llocs de la xarxa quan la seva membresia ja no és activa. | Off |
| **Frontend Block Grace Period** | Nombre de dies per esperar després que la membresia no estigui activa abans de blocar. Estableix a `0` per blocar immediatament. | 0 |
| **Frontend Block Page** | Una pàgina al lloc web principal per redirigir els visitants quan un lloc està bloquejat. Si no es configura, els visitants veuen un missatge genèric de "Site not available". | None |

### Què veuen els visitants quan un lloc està bloquejat {#what-visitors-see-when-a-site-is-blocked}

Quan l'accés al frontend està bloquejat, els visitants del lloc web o bé:

1. **Són rediriguts** a la pàgina que has seleccionat a **Frontend Block Page** (si està configurat), o
2. **Veuen un missatge predeterminat**: "This site is not available at the moment." amb un enllaç a la pàgina de login per a l'administrador del lloc.

Els administradors de lloc encara poden iniciar sessió; la pàgina de login mai està bloquejada.

### Què es bloqueja i quan {#what-gets-blocked-and-when}

El comportament de blocatge depèn de l'estat de la membresia:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (veure nota a continuació) | -- |
| On Hold | Considerat actiu -- no està bloquejat | -- |
| Expired | **Sí**, si Block Frontend Access està actiu | Sí |
| Cancelled | **Sí**, sempre (independents de la configuració) | **No** -- bloquejat immediatament |
| Pending | No està bloquejat mitjançant la verificació de membresia | -- |

:::warning Les membresdies en prova no estan bloquejades
Qui vulgui que un període de prova hagi acabat, una membresia amb estat `trialing` **no** s'haurà de blocat al frontend. La prova ha de transicionar primer a un altre estat (normalment `on-hold` mitjançant el cron job, i després `expired` si no es paga). Si veus membresdies en prova que no han transicionat, comprova la secció de resolució de problemes a continuació.
:::

:::note Les membresdies cancel·lades ignoren el període de gràcia
Les membresdies cancel·lades sempre es bloquegen una vegada que ha passat la data d'expiració, independentment de si Block Frontend Access està habilitat. El Frontend Block Grace Period **no** s'aplica a les membresdies cancel·lades.
:::

## Resolució de problemes: Llocs que es mantenen accessibles després de l'expiració {#troubleshooting-sites-remaining-accessible-after-expiration}

Si els llocs es mantenen públicament accessibles després que una membresia caduca, segueix aquestes verificacions en ordre:

### 1. Verifica que la configuració Block Frontend Access estigui habilitada {#1-verify-the-block-frontend-access-setting-is-enabled}

Va a **Ultimate Multisite > Settings > Memberships** i confirma que l'interruptor **Block Frontend Access** està actiu. Aquesta configuració està **deshabilitada per defecte**, cosa que significa que només wp-admin està restringit quan una membresia no està activa.

### 2. Comprova el Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

A la mateixa pàgina de configuració, comprova el valor de **Frontend Block Grace Period**. Si està configurat a 7 dies, per exemple, el frontend no s'haurà de blocat fins a 7 dies després de la data d'expiració de la membresia —fins i tot si l'estat de la membresia ja és `expired`.

Estableix-ho a `0` si vols un blocatge immediat després que la membresia no estigui activa.

### 3. Confirma que l'estat de la membresia ha canviat realment {#3-confirm-the-membership-status-has-actually-changed}

Va a **Ultimate Multisite > Memberships** i comprova l'estat de la membresia afectada. Si encara mostra `active` malgrat que ha passat la data d'expiració, la transició d'estat no s'ha produït. Causes comunes:

- **La membresia té renovació automàtica**: Comprova el camp `auto_renew` a la pàgina d'edició de la membresia. Si la renovació automàtica està habilitada, el cron d'expiració ignora aquesta membresia —depèn de la passarela de pagament per reportar la fallida. Comprova el dashboard de la passarela (Stripe, PayPal) per confirmar que l'estat de la subscripció coincideix amb el que mostra Ultimate Multisite.

- **El cron job no ha s'executat**: Veure el pas següent.

### 4. Verifica que Action Scheduler estigui executant {#4-verify-action-scheduler-is-running}

Ultimate Multisite utilitza Action Scheduler per als seus cron jobs. Va a **Tools > Scheduled Actions** a l'administració de la xarxa i busca:

- **`wu_membership_check`** — Ha de apareixer com a acció recurrent que s'executa cada hora. Si falta, les verificacions de membresia no estan programades.
- **`wu_async_mark_membership_as_expired`** — Aquestes són tasques individuals per marcar membresdies específiques com a expirades. Si veus accions fallides aquí, poden contenir missatges d'error que expliquen per què.

Si veus accions atascades o fallides, pot haver-hi un problema amb Action Scheduler. Causes comunes:

- **`DISABLE_WP_CRON` està configurat a `true`** a `wp-config.php` sense un substitut de cron a nivell de sistema
- **Baix trànsit del lloc web** — WP-Cron només s'executa quan algú visita el lloc web

Per assegurar una execució fiable del cron, configura un cron de sistema:

```bash
# Executar cada 5 minuts mitjançant wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# O mitjançant WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Comprova problemes amb els webhooks de la passarela (Membresdies amb renovació automàtica) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Si la membresia té renovació automàtica i la subscripció de la passarela s'ha cancel·lat o ha fallat, però Ultimate Multisite encara mostra que està `active`:

- **Stripe**: Va al Stripe Dashboard > Customers i comprova l'estat de la subscripció. Després verifica que el punt final del webhook sigui actiu a Developers > Webhooks. El punt final ha de puntar al teu lloc web i mostrar lliurances exitoses.
- **PayPal**: Comprova l'estat de la subscripció a la teva compte empresarial de PayPal i verifica la lliurança IPN/webhook.

Si la passarela mostra la subscripció com a cancel·lada però Ultimate Multisite no, és probable que el webhook de notificació s'hagi perdut. Pots canviar manualment l'estat de la membresia a **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Comprova el període de gràcia d'expiració (Nivell del Cron) {#6-check-the-expiration-grace-period-cron-level}

El cron té el seu propi període de gràcia (defecto: 3 dies) abans de marcar una membresia com a expirada. Això és separat del període de gràcia de blocatge del frontend. El temps total abans que un lloc es bloquegi pot ser:

**Període de gràcia d'expiració (3 dies)** + **Període de gràcia de blocatge del frontend (la teva configuració)** = Retord total

Per exemple, amb la configuració per defecte i un període de gràcia de frontend de 7 dies, poden passar fins a 10 dies després de la `date_expiration` abans que el lloc es bloquegi realment.

### 7. Expirar manualment una membresia {#7-manually-expire-a-membership}

Si necessites blocar un lloc immediatament sense esperar el cicle del cron, pots canviar manualment l'estat de la membresia:

1. Va a **Ultimate Multisite > Memberships**
2. Fai clic a la membresia afectada
3. Canvia l'estat a **Expired** o **Cancelled**
4. Fai clic a **Save**

El blocatge del frontend entrarà en vigor al càrrega de la pàgina següent (subjecte al Període de Gràcia de Blocatge del Frontend per a membresdies expirades, o immediatament per a membresdies cancel·lades).

## Resum {#summary}

La cronologia completa des de la data d'expiració fins al blocatge del lloc:

```text
date_expiration passa
       |
       v
  [Període de gràcia del cron de 3 dies]     <-- la membresia encara mostra actiu/on-hold
       |
       v
  El cron marca la membresia com a "expired"
       |
       v
  [Període de gràcia de blocatge del Frontend]  <-- configurat a Settings > Memberships
       |
       v
  El frontend del lloc es bloqueja
```

Per a les membresdies cancel·lades, el camí és més curt:

```text
  Membresia cancel·lada
       |
       v
  date_expiration passa (sense període de gràcia)
       |
       v
  El frontend del lloc es bloqueja immediatament
```

## Referència per a desenvolupadors {#developer-reference}

Els seguents hooks i filtres et permeten personalitzar el comportament d'expiració i blocatge:

| Hook/Filter | Descripció |
|---|---|
| `wu_membership_grace_period_days` | Filtra el nombre de dies de període de gràcia abans de marcar una membresia com a expirada (defecto: 3) |
| `wu_schedule_membership_check_interval` | Filtra l'interval entre verificacions de membresia (defecto: 1 hora) |
| `wu_membership_renewal_days_before_expiring` | Filtra quant de dies abans de l'expiració per crear un pagament de renovació (defecto: 3) |
| `wu_blocked_site_reactivation_url` | Filtra per proporcionar una URL de reactivació personalitzada quan un lloc està bloquejat |
| `wu_membership_is_active` | Filtra si una membresia es considera activa |
| `wu_membership_expired_check_query_params` | Filtra els paràmetres de consulta utilitzats per trobar membresdies expirades |
| `wu_membership_trial_check_query_params` | Filtra els paràmetres de consulta utilitzats per trobar proves expirades |
