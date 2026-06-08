---
title: Expiração de Membro e Bloqueio do Site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiração de Membro e Bloqueio do Site

Este guia explica como o Ultimate Multisite lida com a expiração de membros, o término de testes e o bloqueio do frontend do site. Ele cobre o ciclo de vida de um membro, desde o ativo até o expirado, as configurações que controlam se os sites são bloqueados e o que verificar quando os sites permanecem acessíveis após a expiração de uma membresia.

## Ciclo de Vida do Status do Membro

Todo membro no Ultimate Multisite possui um dos seguintes status:

:::note Membrosias gratuitas são vitalícias
Membrosias gratuitas não expiram automaticamente. O Ultimate Multisite as trata como acesso vitalício, portanto, elas não são incluídas nas verificações de expiração, a menos que um administrador altere o status ou mova o cliente para outro produto.
:::

| Status | Significado |
|---|---|
| **Pending** | Aguardando o primeiro pagamento ou verificação por e-mail |
| **Trialing** | Período de teste ativo, sem cobrança de pagamento ainda |
| **Active** | Pago e atual |
| **On Hold** | Pagamento de renovação pendente (fatura criada, aguardando pagamento) |
| **Expired** | Passou da data de expiração e do período de carência sem renovação |
| **Cancelled** | Cancelado explicitamente pelo cliente ou administrador |

### Como as Membrosias Transicionam para Expirado

O Ultimate Multisite executa uma verificação em segundo plano **a cada hora** que procura por membrosias que devem ser marcadas como expiradas. Esta verificação usa [Action Scheduler](https://actionscheduler.org/) (e não o WP-Cron diretamente) e é executada como a ação agendada `wu_membership_check`.

A verificação de expiração possui um **período de carência embutido de 3 dias** por padrão. Uma membresia não será marcada como `expired` até 3 dias após a passagem de sua `date_expiration`. Isso dá tempo aos clientes para completar um pagamento atrasado antes que o status mude.

:::info
O período de carência de expiração de 3 dias é separado da configuração de Período de Carência de Bloqueio do Frontend, descrita abaixo. O período de carência de expiração controla quando o **status muda** de ativo/suspenso para expirado. O período de carência de bloqueio do frontend controla quando o **site é bloqueado** depois que o status já mudou.
:::

#### Membrosias de Renovação Automática vs. Não Automática

Esta distinção é crucial para entender o comportamento de expiração:

- **Membrosias não de renovação automática** (`auto_renew = false`): O job cron horário lida com o ciclo de vida completo — ele cria pagamentos de renovação, transiciona a membresia para suspenso e, eventualmente, a marca como expirada se o pagamento não for recebido.

- **Membrosias de renovação automática** (`auto_renew = true`): A verificação de expiração cron **ignora completamente estas**. Espera-se que o gateway de pagamento (Stripe, PayPal, etc.) notifique o Ultimate Multisite via webhooks quando uma assinatura falhar ou for cancelada. Se o webhook não for recebido — devido a um endpoint mal configurado, uma interrupção do gateway ou uma assinatura cancelada fora do sistema — a membresia pode permanecer `active` indefinidamente mesmo após a data de expiração.

### Como os Testes Terminam

Quando o período de teste de uma membresia termina, o sistema:

1. Cria um pagamento de renovação pendente com o valor total da assinatura
2. Transiciona o status da membresia de `trialing` para `on-hold`
3. Envia um e-mail de notificação de pagamento de renovação ao cliente

Este processo é executado no mesmo cron horário da verificação regular de expiração, mas **apenas para membrosias não de renovação automática**. Para testes de renovação automática, o gateway de pagamento cuida da transição de teste para assinatura paga.

## Bloquear Acesso ao Frontend

Por padrão, quando uma membresia expira ou fica suspensa, **apenas o painel wp-admin é restrito**. O frontend público do site permanece acessível aos visitantes. Para bloquear também o acesso público, você deve ativar a configuração **Block Frontend Access**.

### Configurando a Configuração

Vá para **Ultimate Multisite > Settings > Memberships** e ative **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Aqui está uma visão completa da página de configurações de membrosia:

![Membership settings full page](/img/config/settings-membership-full.png)

Três configurações relacionadas controlam este comportamento:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Chave principal. Quando ativada, bloqueia o frontend público dos sites da rede quando a membresia não está mais ativa. | Off |
| **Frontend Block Grace Period** | Número de dias para esperar após a membresia ficar inativa antes de bloquear. Defina como `0` para bloquear imediatamente. | 0 |
| **Frontend Block Page** | Uma página no site principal para redirecionar os visitantes quando um site é bloqueado. Se não for definida, os visitantes verão uma mensagem genérica de "Site não disponível". | None |

### O que os Visitantes Veem Quando um Site é Bloqueado

Quando o acesso ao frontend é bloqueado, os visitantes do site irão:

1. **Ser redirecionados** para a página que você selecionou em **Frontend Block Page** (se configurado), ou
2. **Ver uma mensagem padrão**: "Este site não está disponível no momento." com um link para a página de login do administrador do site.

Os administradores do site ainda podem fazer login — a página de login nunca é bloqueada.

### O que é Bloqueado e Quando

O comportamento de bloqueio depende do status da membresia:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Não | -- |
| Trialing | **Não** (veja nota abaixo) | -- |
| On Hold | Considerado ativo -- não bloqueado | -- |
| Expired | **Sim**, se Block Frontend Access estiver ativo | Sim |
| Cancelled | **Sim**, sempre (independentemente da configuração) | **Não** -- bloqueado imediatamente |
| Pending | Não bloqueado pela verificação de membresia | -- |

:::warning Membrosias em teste não são bloqueadas
Mesmo que um período de teste tenha terminado, uma membresia com status `trialing` **não** será bloqueada no frontend. O teste deve primeiro transicionar para outro status (tipicamente `on-hold` via job cron, e depois `expired` se não houver pagamento). Se você estiver vendo membrosias em teste que não transicionaram, verifique a seção de solução de problemas abaixo.
:::

:::note Membrosias canceladas ignoram o período de carência
Membrosias canceladas são sempre bloqueadas assim que a data de expiração passa, independentemente de o Block Frontend Access estar ativado. O Período de Carência de Bloqueio do Frontend **não** se aplica a membrosias canceladas.
:::

## Solução de Problemas: Sites Permanecendo Acessíveis Após a Expiração

Se os sites permanecerem publicamente acessíveis após a expiração de uma membresia, siga estas verificações em ordem:

### 1. Verifique se a Configuração Block Frontend Access Está Ativada

Vá para **Ultimate Multisite > Settings > Memberships** e confirme se o toggle **Block Frontend Access** está ligado. Esta configuração está **desativada por padrão**, o que significa que apenas o wp-admin é restrito quando uma membresia se torna inativa.

### 2. Verifique o Período de Carência de Bloqueio do Frontend

Na mesma página de configurações, verifique o valor de **Frontend Block Grace Period**. Se este estiver definido como 7 dias, por exemplo, o frontend não será bloqueado até 7 dias após a data de expiração da membresia — mesmo que o status da membresia já esteja `expired`.

Defina como `0` se você quiser o bloqueio imediato após a membresia se tornar inativa.

### 3. Confirme se o Status da Membresia Realmente Mudou

Vá para **Ultimate Multisite > Memberships** e verifique o status da membresia afetada. Se ainda mostrar `active` apesar de a data de expiração ter passado, a transição de status não ocorreu. Causas comuns:

- **A membresia é de renovação automática**: Verifique o campo `auto_renew` na página de edição da membresia. Se a renovação automática estiver ativada, o cron de expiração ignora esta membresia — ele depende do gateway de pagamento para reportar a falha. Verifique o painel do seu gateway (Stripe, PayPal) para confirmar se o status da assinatura corresponde ao que o Ultimate Multisite mostra.

- **O job cron não foi executado**: Veja o próximo passo.

### 4. Verifique se o Action Scheduler Está Funcionando

O Ultimate Multisite usa o Action Scheduler para seus jobs cron. Vá para **Tools > Scheduled Actions** no admin da rede e procure por:

- **`wu_membership_check`** — Este deve aparecer como uma ação recorrente rodando a cada hora. Se estiver faltando, as verificações de membresia não estão sendo agendadas.
- **`wu_async_mark_membership_as_expired`** — Estas são tarefas individuais para marcar membrosias específicas como expiradas. Se você vir ações falhas aqui, elas podem conter mensagens de erro explicando o motivo.

Se você vir ações travadas ou falhas, você pode ter um problema com o Action Scheduler. Causas comuns:

- **`DISABLE_WP_CRON` está definido como `true`** em `wp-config.php` sem uma substituição de cron em nível de sistema
- **Baixo tráfego no site** — O WP-Cron só é executado quando alguém visita o site

Para garantir uma execução cron confiável, configure um job cron de sistema:

```bash
# Executar a cada 5 minutos via wget
*/5 * * * * wget -q -O /dev/null "https://seu-url-da-rede.com/wp-cron.php?doing_wp_cron"

# Ou via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://seu-url-da-rede.com
```

### 5. Verifique Problemas de Webhook do Gateway (Membrosias de Renovação Automática)

Se a membresia for de renovação automática e a assinatura do gateway tiver sido cancelada ou falhada, mas o Ultimate Multisite ainda a mostrar como `active`:

- **Stripe**: Vá para o Painel do Stripe > Customers e verifique o status da assinatura. Em seguida, verifique se o endpoint de webhook está ativo em Developers > Webhooks. O endpoint deve apontar para o seu site e mostrar entregas bem-sucedidas.
- **PayPal**: Verifique o status da assinatura em sua conta comercial do PayPal e verifique a entrega IPN/webhook.

Se o gateway mostrar a assinatura como cancelada, mas o Ultimate Multisite não, é provável que a notificação webhook tenha sido perdida. Você pode alterar manualmente o status da membresia em **Ultimate Multisite > Memberships > [Editar Membresia]**.

### 6. Verifique o Período de Carência de Expiração (Nível Cron)

A verificação cron possui seu próprio período de carência (padrão: 3 dias) antes de marcar uma membresia como expirada. Isso é separado do período de carência de bloqueio do frontend. O tempo total antes que o site seja bloqueado pode ser:

**Período de carência de expiração (3 dias)** + **Período de carência de bloqueio do frontend (sua configuração)** = Atraso total

Por exemplo, com as configurações padrão e um período de carência de frontend de 7 dias, pode levar até 10 dias após a `date_expiration` para que o site seja realmente bloqueado.

### 7. Expirar uma Membresia Manualmente

Se você precisar bloquear um site imediatamente sem esperar pelo ciclo cron, você pode alterar manualmente o status da membresia:

1. Vá para **Ultimate Multisite > Memberships**
2. Clique na membresia afetada
3. Altere o status para **Expired** ou **Cancelled**
4. Clique em **Save**

O bloqueio do frontend entrará em vigor no próximo carregamento de página (sujeito ao Período de Carência de Bloqueio do Frontend para membrosias expiradas, ou imediatamente para membrosias canceladas).

## Resumo

O cronograma completo desde a data de expiração até o bloqueio do site:

```text
date_expiration passa
       |
       v
  [Período de carência cron de 3 dias]     <-- a membresia ainda mostra ativo/suspenso
       |
       v
  O Cron marca a membresia como "expired"
       |
       v
  [Período de Carência de Bloqueio do Frontend]  <-- configurado em Settings > Memberships
       |
       v
  O frontend do site é bloqueado
```

Para membrosias canceladas, o caminho é mais curto:

```text
  Membrosia cancelada
       |
       v
  date_expiration passa (sem período de carência)
       |
       v
  O frontend do site é bloqueado imediatamente
```

## Referência para Desenvolvedores

Os seguintes hooks e filtros permitem que você personalize o comportamento de expiração e bloqueio:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtra o número de dias de período de carência antes de marcar uma membresia como expirada (padrão: 3) |
| `wu_schedule_membership_check_interval` | Filtra o intervalo entre as verificações de membresia (padrão: 1 hora) |
| `wu_membership_renewal_days_before_expiring` | Filtra quantos dias antes da expiração criar um pagamento de renovação (padrão: 3) |
| `wu_blocked_site_reactivation_url` | Filtra para fornecer um URL de reativação personalizado quando um site é bloqueado |
| `wu_membership_is_active` | Filtra se uma membresia é considerada ativa |
| `wu_membership_expired_check_query_params` | Filtra os parâmetros de consulta usados para encontrar membrosias expiradas |
| `wu_membership_trial_check_query_params` | Filtra os parâmetros de consulta usados para encontrar testes expirados |
