---
title: Caducidade da Membresía e Bloqueio do Sitio
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiración de Membresías y Bloqueo del Sitio

Este guía explica cómo Ultimate Multisite maneja la expiración de membresías, el fin de pruebas (trials) y el bloqueo del sitio en el frontend. Cubre todo el ciclo de vida de una membresía, desde activa hasta expirada, las configuraciones que controlan si los sitios se bloquean y qué revisar cuando los sitios siguen siendo accesibles después de que una membresía expira.

## Ciclo de Vida del Estado de la Membresía {#membership-status-lifecycle}

Cada membresía en Ultimate Multisite tiene uno de los siguientes estados:

:::note Las membresías gratuitas son de por vida
Las membresías gratuitas no caducan automáticamente. Ultimate Multisite las trata como acceso de por vida, por lo que no se incluyen en las comprobaciones de expiración a menos que un administrador cambie su estado o mueva al cliente a otro producto.
:::

| Estado | Significado |
|---|---|
| **Pending** (Pendiente) | A la espera del primer pago o verificación por correo electrónico |
| **Trialing** (En prueba) | Período de prueba activo, aún no se ha cobrado nada |
| **Active** (Activa) | Pagada y vigente |
| **On Hold** (En espera) | El pago de renovación está pendiente (se ha creado la factura, a la espera del pago) |
| **Expired** (Expirada) | Ha pasado la fecha de expiración y el período de gracia sin renovación |
| **Cancelled** (Cancelada) | Cancelada explícitamente por el cliente o el administrador |

### Cómo las Membresías Transicionan a Expiradas {#how-memberships-transition-to-expired}

Ultimate Multisite realiza una comprobación en segundo plano **cada hora** que busca membresías que deberían marcarse como expiradas. Esta comprobación utiliza [Action Scheduler](https://actionscheduler.org/) (no WP-Cron directamente) y se ejecuta como la acción programada `wu_membership_check`.

La comprobación de expiración tiene un **período de gracia incorporado de 3 días** por defecto. Una membresía no se marcará como `expired` hasta 3 días después de que pase su `date_expiration`. Esto da a los clientes tiempo para completar un pago atrasado antes de que cambie su estado.

:::info
O período de carência de expiraición de 3 días é separado da configuración do Período de Carência do Bloco Frontend descrita abaixo. O período de carência de expiraición controla quando o **estado muda** de ativo/em espera para expirado. O período de carência do bloco frontend controla quando o **site é bloqueado** depois de o estado já ter mudado.
:::

#### Membresías que se Renovan Automaticamente vs. Que Não se Renovan Automaticamente {#auto-renewing-vs-non-auto-renewing-memberships}

Esta distinción é crucial para entender o comportamento da expiraición:

- **Membresías que não se renovan automaticamente** (`auto_renew = false`): O cron job de hora maneña todo o ciclo de vida -- ele cria os pagamentos de renovação, transiciona a membresía para em espera e eventualmente marca como expirada se o pagamento não for recebido.

- **Membresías que se renovan automaticamente** (`auto_renew = true`): A verificação de expiraición do cron **ignora estas completamente**. Espera-se que o gateway de pagamento (Stripe, PayPal, etc.) notifique o Ultimate Multisite através de webhooks quando uma subscrição falha ou é cancelada. Se o webhook não for recebido -- devido a um endpoint mal configurado, uma interrupção no gateway, ou uma subscrição cancelada fora do sistema -- a membresía pode permanecer `active` indefinidamente mesmo depois da data de expiraición passar.

### Como Terminam os Testes (Trials) {#how-trials-end}

Quando o período de teste de uma membresía em teste termina, o sistema:

1. Cria um pagamento de renovação pendente com o valor total da subscrição
2. Transiciona o estado da membresía de `trialing` para `on-hold`
3. Envia um e-mail de notificação de pagamento de renovação ao cliente

Este processo executa no mesmo cronograma de hora que a verificação regular de expiraición, mas **somente para membros que não se renovam automaticamente**. Para testes com renovação automática, o gateway de pagamento lida com a transição do teste para a subscrição paga.

## Bloquear Acesso ao Frontend {#block-frontend-access}

Por defecto, cuando una membresía caduca o se pone en pausa, **solo se restringe el panel de administración wp-admin**. El frontend público del sitio sigue siendo accesible para los visitantes. Para bloquear también el acceso público, debes activar la configuración **Block Frontend Access** (Bloquear Acceso al Frontend).

### Configurando la Configuración {#configuring-the-setting}

Ve a **Ultimate Multisite > Settings > Memberships** y activa **Block Frontend Access**.

![Configuración de Block Frontend Access mostrando el interruptor activado, un período de gracia de 7 días y una selección de Página de Bloqueo del Frontend](/img/config/settings-membership-block-frontend.png)

Aquí tienes una vista completa de la página de configuración de membresía:

![Página completa de configuración de membresía](/img/config/settings-membership-full.png)

Tres configuraciones relacionadas controlan este comportamiento:

| Configuración | Descripción | Predeterminado |
|---|---|---|
| **Block Frontend Access** (Bloquear Acceso al Frontend) | Interruptor principal. Cuando está activado, bloquea el frontend público de los sitios de la red cuando su membresía ya no está activa. | Desactivado |
| **Frontend Block Grace Period** (Período de Gracia de Bloqueo del Frontend) | Número de días que se deben esperar después de que la membresía deje de estar activa antes de bloquear. Configúralo en `0` para bloquear inmediatamente. | 0 |
| **Frontend Block Page** (Página de Bloqueo del Frontend) | Una página en el sitio principal a la que se redirige a los visitantes cuando un sitio está bloqueado. Si no se establece, los visitantes ven un mensaje genérico de "Sitio no disponible" con un enlace a la página de inicio de sesión para el administrador del sitio. | Ninguna |

### Qué Ven los Visitantes Cuando un Sitio Está Bloqueado {#what-visitors-see-when-a-site-is-blocked}

Cuando se bloquea el acceso al frontend, los visitantes del sitio harán una de estas cosas:

1. **Serán redirigidos** a la página que seleccionaste en **Frontend Block Page** (si está configurada), o
2. **Verán un mensaje predeterminado**: "Este sitio no está disponible en este momento", con un enlace a la página de inicio de sesión para el administrador del sitio.

Los administradores del sitio aún pueden iniciar sesión; la página de inicio de sesión nunca se bloquea.

### Qué se Bloquea y Cuándo {#what-gets-blocked-and-when}

El comportamiento de bloqueo depende del estado de la membresía:

| Estatus de Membresía | ¿Bloqueado el Frontend? | ¿Periodo de Gracia Aplicado? |
|---|---|---|
| Activo | No | -- |
| Probando (Trialing) | **No** (ver nota abajo) | -- |
| En Espera (On Hold) | Considerado activo -- no bloqueado | -- |
| Expirado | **Sí**, si el Bloque Acceso Frontend está activado | Sí |
| Cancelado | **Sí**, siempre (independientemente de la configuración) | **No** -- bloqueado inmediatamente |
| Pendiente (Pending) | No bloqueado mediante la verificación de membresía | -- |

:::warning Las membresías en estado de prueba no se bloquean
Incluso si el período de prueba ha terminado, una membresía con el estado `trialing` **no** será bloqueada en el frontend. La prueba debe pasar primero a otro estado (típicamente `on-hold` mediante el cron job, y luego a `expired` si no se paga). Si ves membresías en prueba que no han cambiado de estado, revisa la sección de solución de problemas a continuación.
:::

:::note Las membresías canceladas ignoran el período de gracia
Las membresías canceladas siempre se bloquean una vez que ha pasado la fecha de expiración, independientemente de si el Bloque Acceso Frontend está activado. El Período de Gracia del Bloque Frontend **no** se aplica a las membresías canceladas.
:::

## Solución de Problemas: Sitios que Siguen Accesibles Después de la Expiración {#troubleshooting-sites-remaining-accessible-after-expiration}

Si los sitios siguen siendo accesibles públicamente después de que una membresía expira, sigue estos pasos en orden:

### 1. Verifica que la Configuración Bloquear Acceso Frontend esté Activada {#1-verify-the-block-frontend-access-setting-is-enabled}

Ve a **Ultimate Multisite > Settings > Memberships** y confirma que el interruptor **Block Frontend Access** esté activado. Esta configuración está **desactivada por defecto**, lo que significa que solo se restringe wp-admin cuando una membresía deja de estar activa.

### 2. Revisa el Período de Gracia del Bloque Frontend {#2-check-the-frontend-block-grace-period}

Na mesma páxina de configuración, verifica o valor **Frontend Block Grace Period**. Se este estiver configurado para 7 días, por exemplo, o frontend non será bloqueado ata 7 días após a data de expiraición da mensura -- incluso se o estado da mensura ya está `expired`.

Pon este valor en `0` se queres bloqueo inmediato después de que a mensura se torne inactiva.

### 3. Confirma que o Estado da Mensura Realmente Cambia {#3-confirm-the-membership-status-has-actually-changed}

Ve a **Ultimate Multisite > Memberships** e verifica o estado da mensura afectada. Se ainda mostra `active` despois de que a data de expiraición pasou, a transición do estado non se produciu. Causas comunes:

- **A mensura está a renovarse automáticamente**: Verifica o campo `auto_renew` na páxina de edición da mensura. Se a renovación automática está activada, o cron da expiraición salta esta mensura -- depende do *payment gateway* para informar do fallo. Verifica o teu *dashboard* do *gateway* (Stripe, PayPal) para confirmar que o estado da suscripción corresponde ao que mostra Ultimate Multisite.

- **O *cron job* non se está a executar**: Vê o próximo paso.

### 4. Verifica que Action Scheduler Está a Correr {#4-verify-action-scheduler-is-running}

Ultimate Multisite usa Action Scheduler para os seus *cron jobs*. Ve a **Tools > Scheduled Actions** no administrador da rede e busca:

- **`wu_membership_check`** -- Este debería aparecer como unha acción recurrente que se executa cada hora. Se non aparece, as comprobacións de mensura non están programadas.
- **`wu_async_mark_membership_as_expired`** -- Estas son tarefas individuais para marcar mensuras específicas como expiradas. Se ves accións fallidas aquí, poden conter mensaxes de erro que explican por que.

Se ves accións atoladas ou fallidas, podes ter un problema co Action Scheduler. Causas comunes:

- **`DISABLE_WP_CRON` está configurado como `true`** en `wp-config.php` sin una sustitución de cron a nivel del sistema
- **Bajo tráfico del sitio** -- WP-Cron só se ejecuta cuando alguien visita el sitio

Para asegurar que el cron funcione de manera fiable, configura un trabajo cron del sistema:

```bash
# Ejecutar cada 5 minutos vía wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# O vía WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Comprobar problemas con Webhooks de Gateway (Suscripciones que se renuevan automáticamente) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Si la membresía se está renovando automáticamente y la suscripción del gateway ha sido cancelada o ha fallado, pero Ultimate Multisite todavía muestra que está `active`:

- **Stripe**: Ve al Panel de Stripe > Clientes y comprueba el estado de la suscripción. Luego verifica que el endpoint del webhook esté activo en Desarrolladores > Webhooks. El endpoint debe apuntar a tu sitio y mostrar entregas exitosas.
- **PayPal**: Comprueba el estado de la suscripción en tu cuenta de negocio de PayPal y verifica la entrega de IPN/webhook.

Si el gateway muestra la suscripción como cancelada pero Ultimate Multisite no lo hace, es probable que se haya perdido la notificación del webhook. Puedes cambiar manualmente el estado de la membresía en **Ultimate Multisite > Memberships > [Editar Membresía]**.

### 6. Comprobar el Período de Gracia de Expiración (Nivel Cron) {#6-check-the-expiration-grace-period-cron-level}

La comprobación de cron tiene su propio período de gracia (por defecto: 3 días) antes de marcar una membresía como expirada. Esto es independiente del período de gracia del bloque frontend. El tiempo total antes de que un sitio sea bloqueado puede ser:

**Período de gracia de expiración (3 días)** + **Período de gracia del bloqueo frontend (tu configuración)** = Retraso total

Por exemplo, con as configuración predefinidas e um período de carência de 7 dias no frontend, pode demorar até 10 dias após a `date_expiration` para que o site seja realmente bloqueado.

### 7. Expirar uma Membrosia Manualmente {#7-manually-expire-a-membership}

Se precisar bloquear um site imediatamente sem esperar pelo ciclo do cron, pode alterar manualmente o estado da membresia:

1. Vá a **Ultimate Multisite > Memberships**
2. Clique na membresia afetada
3. Mude o status para **Expired** (Expirado) ou **Cancelled** (Cancelado)
4. Clique em **Save** (Guardar)

O bloqueio no frontend terá efeito no próximo carregamento da página (sujeito ao Período de Carência do Bloqueio Frontend para membresias expiradas, ou imediatamente para membros cancelados).

## Resumo {#summary}

A linha do tempo completa da data de expiração até ao bloqueio do site:

```text
date_expiration passa
       |
       v
  [Período de carência do cron de 3 dias] <-- a membresia ainda aparece como ativa/em espera
       |
       v
  O Cron marca a membresia como "expired" (expirada)
       |
       v
  [Período de Carência do Bloqueio Frontend] <-- configurado em Settings > Memberships
       |
       v
  O frontend do site é bloqueado
```

Para membros cancelados, o caminho é mais curto:

```text
  Membrosia cancelada
       |
       v
  date_expiration passa (sem período de carência)
       |
       v
  O frontend do site é bloqueado imediatamente
```

## Referência para Desenvolvedores {#developer-reference}

Os seguintes hooks e filters permitem-lhe personalizar o comportamento de expiração e bloqueio:

| Hook/Filtro | Descripción |
|---|---|
| `wu_membership_grace_period_days` | Filtra o número de días de período de gracia antes de marcar unha adhesión como caduca (padrón: 3) |
| `wu_schedule_membership_check_interval` | Filtra o intervalo entre as comprobacións da adhesión (padrón: 1 hora) |
| `wu_membership_renewal_days_before_expiring` | Filtra cuántos días antes da caducación para crear un pago de renovación (padrón: 3) |
| `wu_blocked_site_reactivation_url` | Filtra para proporcionar unha URL de reactivación personalizada cuando un sitio está bloqueado |
| `wu_membership_is_active` | Filtra se unha adhesión se considera activa |
| `wu_membership_expired_check_query_params` | Filtra os parámetros de consulta utilizados para encontrar adhesións caducadas |
| `wu_membership_trial_check_query_params` | Filtra os parámetros de consulta utilizados para encontrar pruebas caducadas |
