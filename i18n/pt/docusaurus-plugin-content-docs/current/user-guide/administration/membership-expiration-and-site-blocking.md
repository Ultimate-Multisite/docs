---
title: Expiração de Membros e Bloqueio de Sites
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiração de Membrosia e Bloqueio do Site {#membership-expiration-and-site-blocking}

Este guia explica como o Ultimate Multisite lida com a expiração de membros, o término de testes (trials) e o bloqueio do site no frontend. Ele cobre todo o ciclo de vida de uma membresia, desde ativa até expirada, as configurações que controlam se os sites são bloqueados e o que verificar quando os sites permanecem acessíveis após a expiração da membresia.

## Ciclo de Vida do Status da Membresia {#membership-status-lifecycle}

Toda membresia no Ultimate Multisite tem um dos seguintes status:

:::note Membrosias gratuitas são por tempo indeterminado
Membrosias gratuitas não expiram automaticamente. O Ultimate Multisite as trata como acesso vitalício, portanto, elas não estão incluídas nas verificações de expiração a menos que um administrador mude o status delas ou mova o cliente para outro produto.
:::

| Status | Significado |
|---|---|
| **Pending** (Pendente) | Aguardando primeiro pagamento ou verificação por e-mail |
| **Trialing** (Em Teste) | Período de teste ativo, nenhum pagamento coletado ainda |
| **Active** (Ativo) | Pago e atual |
| **On Hold** (Em Espera) | Pagamento de renovação pendente (fatura criada, aguardando pagamento) |
| **Expired** (Expirado) | Passou a data de expiração e o período de carência sem renovação |
| **Cancelled** (Cancelado) | Cancelado explicitamente pelo cliente ou administrador |

### Como as Membrosias Transicionam para Expiradas {#how-memberships-transition-to-expired}

O Ultimate Multisite realiza uma verificação em segundo plano **a cada hora** que procura por membros que devem ser marcados como expirados. Esta verificação usa o [Action Scheduler](https://actionscheduler.org/) (não diretamente o WP-Cron) e é executada como a ação agendada `wu_membership_check`.

A verificação de expiração tem um **período de carência embutido de 3 dias** por padrão. Uma membresia só será marcada como `expired` após 3 dias decorridos após a passagem da data `date_expiration`. Isso dá tempo aos clientes para finalizar um pagamento atrasado antes que o status deles mude.

:::info
O período de carência de expiração de 3 dias é separado da configuração do Período de Carência do Bloco Frontend descrita abaixo. O período de carência de expiração controla quando o **status muda** de ativo/em espera para expirado. O período de carência do bloco frontend controla quando o **site é bloqueado** depois que o status já mudou.
:::

#### Assinaturas com Renovação Automática vs. Sem Renovação Automática {#auto-renewing-vs-non-auto-renewing-memberships}

Essa distinção é fundamental para entender o comportamento da expiração:

- **Assinaturas sem renovação automática** (`auto_renew = false`): O job cron a cada hora gerencia todo o ciclo de vida -- ele cria os pagamentos de renovação, transiciona a assinatura para em espera e, eventualmente, marca como expirada se o pagamento não for recebido.

- **Assinaturas com renovação automática** (`auto_renew = true`): A verificação de expiração do cron **ignora tudo isso**. Espera-se que o gateway de pagamento (Stripe, PayPal, etc.) notifique o Ultimate Multisite via webhooks quando uma assinatura falhar ou for cancelada. Se o webhook não for recebido -- devido a um endpoint mal configurado, queda no gateway ou cancelamento da assinatura fora do sistema -- a assinatura pode permanecer `active` indefinidamente mesmo depois da data de expiração ter passado.

### Como os Testes (Trials) Terminam {#how-trials-end}

Quando o período de teste de uma assinatura trialing termina, o sistema:

1. Cria um pagamento de renovação pendente com o valor total da assinatura
2. Transiciona o status da assinatura de `trialing` para `on-hold`
3. Envia um e-mail de notificação de pagamento de renovação ao cliente

Este processo roda no mesmo cronograma horário que a verificação de expiração regular, mas **somente para assinaturas sem renovação automática**. Para testes com renovação automática, o gateway de pagamento cuida da transição do teste para a assinatura paga.

## Bloquear Acesso ao Frontend {#block-frontend-access}

Por padrão, quando uma assinatura expira ou é colocada em espera, **apenas o painel do wp-admin é restrito**. O frontend público do site continua acessível aos visitantes. Para bloquear também o acesso público, você deve ativar a configuração **Block Frontend Access** (Bloquear Acesso ao Frontend).

### Configurando a Configuração {#configuring-the-setting}

Navegue até **Ultimate Multisite > Settings > Memberships** e ative **Block Frontend Access**.

![Configurações de Block Frontend Access mostrando o toggle ativado, um período de carência de 7 dias e uma seleção de Página de Bloqueio do Frontend](/img/config/settings-membership-block-frontend.png)

Aqui está uma visualização completa da página de configurações de membros:

![Página completa das configurações de membros](/img/config/settings-membership-full.png)

Três configurações relacionadas controlam esse comportamento:

| Configuração | Descrição | Padrão |
|---|---|---|
| **Block Frontend Access** (Bloquear Acesso ao Frontend) | O interruptor mestre. Quando ativado, bloqueia o frontend público dos sites da rede quando a assinatura deles não está mais ativa. | Desligado |
| **Frontend Block Grace Period** (Período de Carência do Bloqueio do Frontend) | Número de dias para esperar após a inatividade da assinatura antes de bloquear. Defina como `0` para bloquear imediatamente. | 0 |
| **Frontend Block Page** (Página de Bloqueio do Frontend) | Uma página no site principal para redirecionar os visitantes quando um site for bloqueado. Se não for definida, os visitantes verão uma mensagem genérica de "Site indisponível no momento". | Nenhum |

### O Que os Visitantes Vão Ver Quando um Site For Bloqueado {#what-visitors-see-when-a-site-is-blocked}

Quando o acesso ao frontend é bloqueado, os visitantes do site farão uma das seguintes coisas:

1. **Serão redirecionados** para a página que você selecionou em **Frontend Block Page** (se configurada), ou
2. **Verão uma mensagem padrão**: "Este site não está disponível no momento", com um link para a página de login do administrador do site.

Os administradores do site ainda podem fazer login -- a página de login nunca é bloqueada.

### O Que É Bloqueado e Quando {#what-gets-blocked-and-when}

O comportamento de bloqueio depende do status da assinatura:

| Status da Assinatura | Bloco Frontend Bloqueado? | Período de Carência Aplicado? |
|---|---|---|
| Ativo | Não | -- |
| Testando (Trialing) | **Não** (veja a nota abaixo) | -- |
| Em Espera (On Hold) | Considerado ativo -- não bloqueado | -- |
| Expirado | **Sim**, se o Bloqueio de Acesso Frontend estiver ativado | Sim |
| Cancelado | **Sim**, sempre (independentemente da configuração) | **Não** -- bloqueado imediatamente |
| Pendente | Não bloqueado pela verificação de assinatura | -- |

:::warning Assinaturas em período de teste não são bloqueadas
Mesmo que o período de teste tenha terminado, uma assinatura com status `trialing` **não** será bloqueada no frontend. O teste deve primeiro mudar para outro status (tipicamente `on-hold` via job cron, depois `expired` se não houver pagamento). Se você estiver vendo assinaturas em período de teste que não mudaram de status, verifique a seção de solução de problemas abaixo.
:::

:::note Assinaturas canceladas ignoram o período de carência
Assinaturas canceladas são sempre bloqueadas assim que a data de expiração passa, independentemente de o Bloqueio de Acesso Frontend estar habilitado. O Período de Carência do Bloco Frontend **não** se aplica a assinaturas canceladas.
:::

## Solução de Problemas: Sites Permanecendo Acessíveis Após a Expiração {#troubleshooting-sites-remaining-accessible-after-expiration}

Se os sites permanecerem publicamente acessíveis após o vencimento da assinatura, siga estas verificações na ordem:

### 1. Verifique se a Configuração Bloquear Acesso Frontend Está Ativada {#1-verify-the-block-frontend-access-setting-is-enabled}

Vá em **Ultimate Multisite > Settings > Memberships** e confirme se o botão de alternância (toggle) **Block Frontend Access** está ligado. Esta configuração vem **desativada por padrão**, o que significa que apenas o wp-admin é restrito quando uma assinatura fica inativa.

### 2. Verifique o Período de Carência do Bloco Frontend {#2-check-the-frontend-block-grace-period}

Na mesma página de configurações, verifique o valor **Frontend Block Grace Period**. Se este estiver definido para 7 dias, por exemplo, o frontend não será bloqueado até 7 dias após a data de expiração da assinatura — mesmo que o status da assinatura já esteja como `expired`.

Defina-o para `0` se quiser um bloqueio imediato após a inatividade da assinatura.

### 3. Confirme se o Status da Assinatura Realmente Mudou {#3-confirm-the-membership-status-has-actually-changed}

Vá em **Ultimate Multisite > Memberships** e verifique o status da assinatura afetada. Se ainda mostrar `active` mesmo depois que a data de expiração passou, a transição de status não ocorreu. Causas comuns:

- **A assinatura está sendo renovada automaticamente**: Verifique o campo `auto_renew` na página de edição da assinatura. Se a renovação automática estiver ativada, o cron do vencimento ignora esta assinatura — ela depende do gateway de pagamento para relatar a falha. Verifique o seu painel do gateway (Stripe, PayPal) para confirmar se o status da assinatura corresponde ao que o Ultimate Multisite mostra.

- **O job do cron não foi executado**: Veja o próximo passo.

### 4. Verifique se o Action Scheduler Está Rodando {#4-verify-action-scheduler-is-running}

O Ultimate Multisite usa o Action Scheduler para seus jobs de cron. Vá em **Tools > Scheduled Actions** no admin da rede e procure por:

- **`wu_membership_check`** -- Este deve aparecer como uma ação recorrente rodando a cada hora. Se estiver faltando, as verificações de assinatura não estão sendo agendadas.
- **`wu_async_mark_membership_as_expired`** -- Estas são tarefas individuais para marcar assinaturas específicas como expiradas. Se você vir ações falhadas aqui, elas podem conter mensagens de erro explicando o porquê.

Se você vir ações travadas ou falhas, pode haver um problema no Action Scheduler. Causas comuns:

- **`DISABLE_WP_CRON` está definido como `true`** no arquivo `wp-config.php` sem uma substituição de cron em nível do sistema
- **Baixo tráfego no site** -- O WP-Cron só roda quando alguém visita o site

Para garantir que o cron funcione de forma confiável, configure um job de cron do sistema:

```bash
# Executar a cada 5 minutos via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ou via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Verifique Problemas com Webhook do Gateway (Assinaturas Auto-Renováveis) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Se a assinatura estiver se renovando automaticamente e a assinatura do gateway tiver sido cancelada ou falhou, mas o Ultimate Multisite ainda mostrar como `ativo`:

- **Stripe**: Vá para o Painel do Stripe > Clientes e verifique o status da assinatura. Em seguida, verifique se o endpoint do webhook está ativo em Desenvolvedores > Webhooks. O endpoint deve apontar para o seu site e mostrar entregas bem-sucedidas.
- **PayPal**: Verifique o status da assinatura na sua conta de negócios do PayPal e confirme a entrega do IPN/webhook.

Se o gateway mostrar a assinatura como cancelada, mas o Ultimate Multisite não, é provável que a notificação do webhook tenha sido perdida. Você pode alterar manualmente o status da associação em **Ultimate Multisite > Memberships > [Editar Associação]**.

### 6. Verifique o Período de Carência de Expiração (Nível do Cron) {#6-check-the-expiration-grace-period-cron-level}

A verificação do cron tem seu próprio período de carência (padrão: 3 dias) antes de marcar uma associação como expirada. Isso é separado do período de carência do bloco frontend. O tempo total antes que um site seja bloqueado pode ser:

**Período de carência de expiração (3 dias)** + **Período de carência do bloco frontend (sua configuração)** = Atraso Total

Por exemplo, com as configurações padrão e um período de carência de 7 dias no frontend, pode levar até 10 dias após a `date_expiration` para que o site seja realmente bloqueado.

### 7. Expirar uma Assinatura Manualmente {#7-manually-expire-a-membership}

Se você precisar bloquear um site imediatamente sem esperar pelo ciclo do cron, pode alterar manualmente o status da assinatura:

1. Vá para **Ultimate Multisite > Memberships**
2. Clique na assinatura afetada
3. Mude o status para **Expired** (Expirado) ou **Cancelled** (Cancelado)
4. Clique em **Save** (Salvar)

O bloqueio no frontend terá efeito no próximo carregamento da página (sujeito ao Período de Carência do Bloqueio Frontend para assinaturas expiradas, ou imediatamente para assinaturas canceladas).

## Resumo {#summary}

A linha do tempo completa da data de expiração até o bloqueio do site:

```text
date_expiration passa
       |
       v
  [Período de carência do cron de 3 dias]     <-- a assinatura ainda aparece como ativa/em espera
       |
       v
  O Cron marca a assinatura como "expired" (expirada)
       |
       v
  [Período de Carência do Bloqueio Frontend]  <-- configurado em Settings > Memberships
       |
       v
  O frontend do site é bloqueado
```

Para assinaturas canceladas, o caminho é mais curto:

```text
  Assinatura cancelada
       |
       v
  date_expiration passa (sem período de carência)
       |
       v
  O frontend do site é bloqueado imediatamente
```

## Referência para Desenvolvedores {#developer-reference}

Os seguintes hooks e filters permitem que você personalize o comportamento de expiração e bloqueio:

| Hook/Filtro | Descrição |
|---|---|
| `wu_membership_grace_period_days` | Filtra o número de dias de período de carência antes de marcar uma assinatura como expirada (padrão: 3) |
| `wu_schedule_membership_check_interval` | Filtra o intervalo entre as verificações de assinatura (padrão: 1 hora) |
| `wu_membership_renewal_days_before_expiring` | Filtra quantos dias antes da expiração criar um pagamento de renovação (padrão: 3) |
| `wu_blocked_site_reactivation_url` | Filtra para fornecer uma URL de reativação personalizada quando um site for bloqueado |
| `wu_membership_is_active` | Filtra se uma assinatura é considerada ativa |
| `wu_membership_expired_check_query_params` | Filtra os parâmetros da consulta usados para encontrar assinaturas expiradas |
| `wu_membership_trial_check_query_params` | Filtra os parâmetros da consulta usados para encontrar testes expirados |
