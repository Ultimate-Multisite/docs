---
title: Expiración de membresía y bloqueo de sitio
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiración de Membresía y Bloqueo del Sitio

Esta guía explica cómo Ultimate Multisite maneja la expiración de membresías, el final de las pruebas gratuitas y el bloqueo del sitio en el frontend. Cubre el ciclo de vida de una membresía, desde activa hasta expirada, la configuración que controla si los sitios se bloquean y qué verificar cuando los sitios siguen siendo accesibles después de que expira una membresía.

## Ciclo de Vida del Estado de la Membresía {#membership-status-lifecycle}

Toda membresía en Ultimate Multisite tiene uno de los siguientes estados:

:::note Las membresías gratuitas son de por vida
Las membresías gratuitas no caducan automáticamente. Ultimate Multisite las trata como acceso de por vida, por lo que no se incluyen en las verificaciones de expiración a menos que un administrador cambie su estado o mueva al cliente a otro producto.
:::

| Status | Significado |
|---|---|
| **Pending** | Esperando el primer pago o la verificación por correo electrónico |
| **Trialing** | Período de prueba activo, aún no se ha cobrado ningún pago |
| **Active** | Pagado y vigente |
| **On Hold** | Pendiente de pago de renovación (factura creada, pendiente de pago) |
| **Expired** | Pasó la fecha de expiración y el período de gracia sin renovación |
| **Cancelled** | Cancelado explícitamente por el cliente o el administrador |

### Cómo Transicionan las Membresías a Expirado {#how-memberships-transition-to-expired}

Ultimate Multisite ejecuta una verificación en segundo plano **cada hora** que busca membresías que deben marcarse como expiradas. Esta verificación utiliza [Action Scheduler](https://actionscheduler.org/) (no WP-Cron directamente) y se ejecuta como la acción programada `wu_membership_check`.

La verificación de expiración tiene un **período de gracia incorporado de 3 días** por defecto. Una membresía no se marcará como `expired` hasta 3 días después de que pase su `date_expiration`. Esto da tiempo a los clientes para completar un pago atrasado antes de que cambie su estado.

:::info
El período de gracia de expiración de 3 días es independiente de la configuración de Período de Gracia de Bloqueo del Frontend que se describe a continuación. El período de gracia de expiración controla cuándo **cambia el estado** de activo/en espera a expirado. El período de gracia de bloqueo del frontend controla cuándo **se bloquea el sitio** después de que el estado ya ha cambiado.
:::

#### Membresías de Renovación Automática vs. No Automática {#auto-renewing-vs-non-auto-renewing-memberships}

Esta distinción es fundamental para entender el comportamiento de la expiración:

- **Membresías sin renovación automática** (`auto_renew = false`): El cron job horario maneja todo el ciclo de vida: crea pagos de renovación, transiciona la membresía a `on-hold` y, finalmente, la marca como expirada si no se recibe el pago.

- **Membresías con renovación automática** (`auto_renew = true`): La verificación de expiración cron **las omite por completo**. Se espera que la pasarela de pago (Stripe, PayPal, etc.) notifique a Ultimate Multisite a través de webhooks cuando una suscripción falle o se cancele. Si no se recibe el webhook —debido a un endpoint mal configurado, una interrupción de la pasarela o una suscripción cancelada fuera del sistema—, la membresía puede permanecer `active` indefinidamente incluso después de que pase la fecha de expiración.

### Cómo Terminan las Pruebas Gratuitas (Trials) {#how-trials-end}

Cuando el período de prueba de una membresía termina, el sistema:

1. Crea un pago de renovación pendiente con el monto total de la suscripción.
2. Transiciona el estado de la membresía de `trialing` a `on-hold`.
3. Envía un correo electrónico de notificación de pago de renovación al cliente.

Este proceso se ejecuta en el mismo horario que la verificación de expiración regular, pero **solo para membresías sin renovación automática**. Para las pruebas con renovación automática, la pasarela de pago maneja la transición de prueba a suscripción pagada.

## Bloqueo del Acceso al Frontend {#block-frontend-access}

Por defecto, cuando una membresía expira o pasa a estar en espera, **solo se restringe el dashboard de wp-admin**. El frontend público del sitio sigue siendo accesible para los visitantes. Para bloquear también el acceso público, debes habilitar la configuración de **Block Frontend Access**.

### Configuración de la Opción {#configuring-the-setting}

Ve a **Ultimate Multisite > Settings > Memberships** y activa **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Aquí tienes una vista completa de la página de configuración de membresías:

![Membership settings full page](/img/config/settings-membership-full.png)

Tres configuraciones relacionadas controlan este comportamiento:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Interruptor principal. Cuando está activado, bloquea el frontend público de los sitios de la red cuando su membresía ya no está activa. | Off |
| **Frontend Block Grace Period** | Número de días para esperar después de que la membresía quede inactiva antes de bloquear. Establece en `0` para bloquear inmediatamente. | 0 |
| **Frontend Block Page** | Una página en el sitio principal a la que se redirigirá a los visitantes cuando un sitio esté bloqueado. Si no se establece, los visitantes verán un mensaje genérico de "Site not available". | None |

### Lo que Ven los Visitantes Cuando un Sitio Está Bloqueado {#what-visitors-see-when-a-site-is-blocked}

Cuando el acceso al frontend está bloqueado, los visitantes del sitio:

1. **Serán redirigidos** a la página que seleccionaste en **Frontend Block Page** (si está configurado), o
2. **Verán un mensaje predeterminado**: "This site is not available at the moment." con un enlace a la página de inicio de sesión para el administrador del sitio.

Los administradores del sitio aún pueden iniciar sesión; la página de inicio de sesión nunca se bloquea.

### Qué y Cuándo se Bloquea {#what-gets-blocked-and-when}

El comportamiento de bloqueo depende del estado de la membresía:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (ver nota abajo) | -- |
| On Hold | Considerado activo -- no bloqueado | -- |
| Expired | **Sí**, si Block Frontend Access está activado | Sí |
| Cancelled | **Sí**, siempre (independientemente de la configuración) | **No** -- bloqueado inmediatamente |
| Pending | No bloqueado mediante la verificación de membresía | -- |

:::warning Las membresías en prueba (Trialing) no se bloquean
Incluso si ha terminado un período de prueba, una membresía con estado `trialing` **no** se bloqueará en el frontend. La prueba debe pasar primero a otro estado (típicamente `on-hold` mediante el cron job, y luego `expired` si no se paga). Si ves membresías en prueba que no han cambiado de estado, revisa la sección de solución de problemas a continuación.
:::

:::note Las membresías canceladas ignoran el período de gracia
Las membresías canceladas siempre se bloquean una vez que ha pasado la fecha de expiración, independientemente de si Block Frontend Access está activado. El Frontend Block Grace Period **no** se aplica a las membresías canceladas.
:::

## Solución de Problemas: Sitios que Permanecen Accesibles Después de la Expiración {#troubleshooting-sites-remaining-accessible-after-expiration}

Si los sitios siguen siendo accesibles públicamente después de que expira una membresía, revisa estos puntos en orden:

### 1. Verificar que la Configuración Block Frontend Access Esté Activada {#1-verify-the-block-frontend-access-setting-is-enabled}

Ve a **Ultimate Multisite > Settings > Memberships** y confirma que el interruptor **Block Frontend Access** esté activado. Esta configuración está **desactivada por defecto**, lo que significa que solo wp-admin se restringe cuando una membresía deja de estar activa.

### 2. Revisar el Período de Gracia de Bloqueo del Frontend {#2-check-the-frontend-block-grace-period}

En la misma página de configuración, revisa el valor de **Frontend Block Grace Period**. Si está establecido en 7 días, por ejemplo, el frontend no se bloqueará hasta 7 días después de la fecha de expiración de la membresía, incluso si el estado de la membresía ya es `expired`.

Establécelo en `0` si deseas un bloqueo inmediato después de que la membresía quede inactiva.

### 3. Confirmar que el Estado de la Membresía Ha Cambiado Realmente {#3-confirm-the-membership-status-has-actually-changed}

Ve a **Ultimate Multisite > Memberships** y revisa el estado de la membresía afectada. Si todavía muestra `active` a pesar de que ha pasado la fecha de expiración, la transición de estado no ha ocurrido. Causas comunes:

- **La membresía tiene renovación automática**: Revisa el campo `auto_renew` en la página de edición de la membresía. Si la renovación automática está activada, el cron de expiración omite esta membresía; depende de la pasarela de pago para reportar el fallo. Revisa el dashboard de tu pasarela (Stripe, PayPal) para confirmar que el estado de la suscripción coincide con lo que muestra Ultimate Multisite.

- **El cron job no se ha ejecutado**: Consulta el siguiente paso.

### 4. Verificar que Action Scheduler Esté Funcionando {#4-verify-action-scheduler-is-running}

Ultimate Multisite utiliza Action Scheduler para sus cron jobs. Ve a **Tools > Scheduled Actions** en el admin de la red y busca:

- **`wu_membership_check`** -- Esto debe aparecer como una acción recurrente que se ejecuta cada hora. Si falta, las verificaciones de membresía no se están programando.
- **`wu_async_mark_membership_as_expired`** -- Estas son tareas individuales para marcar membresías específicas como expiradas. Si ves acciones fallidas aquí, pueden contener mensajes de error explicando por qué.

Si ves acciones atascadas o fallidas, puede que tengas un problema con Action Scheduler. Causas comunes:

- **`DISABLE_WP_CRON` está establecido en `true`** en `wp-config.php` sin un reemplazo cron a nivel de sistema
- **Bajo tráfico del sitio** -- WP-Cron solo se ejecuta cuando alguien visita el sitio

Para asegurar una ejecución cron fiable, configura un cron job de sistema:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Revisar Problemas con Webhooks de la Pasarela (Membresías con Renovación Automática) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Si la membresía tiene renovación automática y la suscripción de la pasarela ha sido cancelada o ha fallado, pero Ultimate Multisite todavía la muestra como `active`:

- **Stripe**: Ve al Dashboard de Stripe > Customers y revisa el estado de la suscripción. Luego verifica que el endpoint de webhook esté activo en Developers > Webhooks. El endpoint debe apuntar a tu sitio y mostrar entregas exitosas.
- **PayPal**: Revisa el estado de la suscripción en tu cuenta de negocios de PayPal y verifica la entrega de IPN/webhook.

Si la pasarela muestra la suscripción como cancelada, pero Ultimate Multisite no lo hace, es probable que la notificación webhook se haya perdido. Puedes cambiar manualmente el estado de la membresía en **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Revisar el Período de Gracia de Expiración (Nivel Cron) {#6-check-the-expiration-grace-period-cron-level}

La verificación cron tiene su propio período de gracia (por defecto: 3 días) antes de marcar una membresía como expirada. Esto es independiente del período de gracia de bloqueo del frontend. El tiempo total antes de que se bloquee un sitio puede ser:

**Período de gracia de expiración (3 días)** + **Período de gracia de bloqueo del frontend (tu configuración)** = Retraso total

Por ejemplo, con la configuración predeterminada y un período de gracia de frontend de 7 días, podría tardar hasta 10 días después de la `date_expiration` antes de que el sitio esté realmente bloqueado.

### 7. Expirar una Membresía Manualmente {#7-manually-expire-a-membership}

Si necesitas bloquear un sitio inmediatamente sin esperar el ciclo cron, puedes cambiar manualmente el estado de la membresía:

1. Ve a **Ultimate Multisite > Memberships**
2. Haz clic en la membresía afectada
3. Cambia el estado a **Expired** o **Cancelled**
4. Haz clic en **Save**

El bloqueo del frontend entrará en vigor en la próxima carga de página (sujeto al Período de Gracia de Bloqueo del Frontend para membresías expiradas, o inmediatamente para membresías canceladas).

## Resumen {#summary}

La línea de tiempo completa desde la fecha de expiración hasta el bloqueo del sitio:

```text
date_expiration pasa
       |
       v
  [Período de gracia cron de 3 días]     <-- la membresía todavía muestra activo/en espera
       |
       v
  Cron marca la membresía como "expired"
       |
       v
  [Período de gracia de bloqueo del Frontend]  <-- configurado en Settings > Memberships
       |
       v
  El frontend del sitio está bloqueado
```

Para las membresías canceladas, la ruta es más corta:

```text
  Membresía cancelada
       |
       v
  date_expiration pasa (sin período de gracia)
       |
       v
  El frontend del sitio está bloqueado inmediatamente
```

## Referencia para Desarrolladores {#developer-reference}

Los siguientes hooks y filtros te permiten personalizar el comportamiento de expiración y bloqueo:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtra el número de días del período de gracia antes de marcar una membresía como expirada (por defecto: 3) |
| `wu_schedule_membership_check_interval` | Filtra el intervalo entre verificaciones de membresía (por defecto: 1 hora) |
| `wu_membership_renewal_days_before_expiring` | Filtra cuántos días antes de la expiración crear un pago de renovación (por defecto: 3) |
| `wu_blocked_site_reactivation_url` | Filtra para proporcionar una URL de reactivación personalizada cuando un sitio está bloqueado |
| `wu_membership_is_active` | Filtra si una membresía se considera activa |
| `wu_membership_expired_check_query_params` | Filtra los parámetros de consulta utilizados para encontrar membresías expiradas |
| `wu_membership_trial_check_query_params` | Filtra los parámetros de consulta utilizados para encontrar pruebas expiradas |
