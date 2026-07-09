---
title: Orquestração do Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (introduzido no Gratis AI Agent v1.4.0) é o motor que impulsiona a criação de sites em múltiplos passos. Quando você pede ao agente para "criar um site de restaurante" ou "montar um portfólio com blog", o orquestrador divide esse objetivo de alto nível em um **plano** estruturado, descobre os plugins necessários para cumpri-lo, executa cada passo em sequência, rastreia o progresso e se recupera de erros de forma autônoma.

---

## Como Funciona {#how-it-works}

### 1. Geração do Plano (Plan Generation) {#1-plan-generation}

Quando o agente recebe uma instrução de construção de site, ele chama a capacidade `create_site_plan` para produzir um **plano de site** em formato JSON. O plano descreve:

- **Goal** — o que o site finalizado deve fazer
- **Phases** — grupos ordenados de passos (ex: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — chamadas de capacidade individuais dentro de cada fase
- **Plugin requirements** — plugins que devem estar ativos para que certos passos sejam executados
- **Fallbacks** — passos alternativos caso um passo principal falhe

**Exemplo de plano (abreviado)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Descoberta de Plugins (Plugin Discovery) {#2-plugin-discovery}

Antes do início da execução, o orquestrador verifica os `plugin_requirements` do plano e checa quais plugins já estão ativos. Para plugins ausentes, ele:

1. Busca o registro via `recommend_plugin` para encontrar a melhor correspondência
2. Solicita ao agente que confirme a recomendação
3. Aciona a instalação se for aprovado (ou se a auto-instalação estiver ativada nas configurações)

Falhas na descoberta de plugins não são fatais — o orquestrador marca os passos afetados como `skipped` e continua com o restante do plano.

### 3. Execução do Plano (Plan Execution) {#3-plan-execution}

O orquestrador chama `execute_site_plan` com o ID do plano. A execução ocorre fase por fase, passo por passo:

- **Referências de passos** (`__ref:` prefixo) — os passos podem referenciar saídas de passos anteriores. No exemplo acima, `__ref:create_menu.menu_id` é resolvido para o `menu_id` retornado pelo passo `create_menu`.
- **Passos paralelos** — passos dentro da mesma fase que não têm interdependências são despachados concorrentemente quando a flag `parallel` é definida.
- **Timeout do passo** — cada passo tem um timeout individual (padrão: a configuração `Ability Timeout`). Um passo com timeout é marcado como `failed` e o plano continua.

### 4. Rastreamento de Progresso (Progress Tracking) {#4-progress-tracking}

Chame `get_plan_progress` a qualquer momento para verificar o status da execução:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Usuários WP-CLI podem monitorar o progresso com:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperação de Erros (Error Recovery) {#5-error-recovery}

Quando um passo falha, o orquestrador verifica se há um passo **fallback** definido no plano:

- **Fallback disponível** — o passo fallback é tentado imediatamente. Se for bem-sucedido, a execução continua. Se também falhar, o passo é marcado como `failed` e a execução continua com o próximo passo.
- **Sem fallback** — o passo é marcado como `failed`. Passos não críticos são pulados; passos críticos (marcados como `required: true`) interrompem a fase atual e acionam uma tentativa de recuperação no nível da fase.

O agente relata todas as falhas no resumo final do plano e pode sugerir etapas de remediação manual para erros irrecuperáveis.

---

## Abilities de Plano (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Gera um plano de site estruturado a partir de uma descrição de objetivo em linguagem natural.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Descrição em linguagem natural do site desejado |
| `style` | string | No | Preferência de estilo visual: `minimal`, `bold`, `professional`, `playful`. Padrão: o agente escolhe com base no objetivo |
| `plugins` | array | No | Slugs de plugins a serem incluídos no plano. O orquestrador adiciona plugins obrigatórios automaticamente. |
| `dry_run` | boolean | No | Se `true`, retorna o JSON do plano sem salvar ou executar. Padrão `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Inicia a execução de um plano de site previamente gerado.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID do plano a ser executado |
| `auto_install_plugins` | boolean | No | Se `true`, instala automaticamente os plugins necessários sem confirmação. Padrão `false` |
| `max_retries` | integer | No | Número de vezes para tentar novamente um passo falho antes de seguir em frente. Padrão `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Retorna o status de execução atual de um plano de site.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID do plano a ser consultado |

**Returns** o objeto de progresso descrito em [Progress Tracking](#4-progress-tracking) acima.

---

### `handle_plan_error` {#handleplanerror}

Resolve manualmente um passo falho e retoma a execução do plano a partir do próximo passo. Use isso quando a recuperação automática não foi possível e você deseja intervir.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID do plano |
| `step_id` | string | Yes | ID do passo falho |
| `resolution` | string | Yes | Um dos valores `skip` (pular e continuar), `retry` (tentar o passo imediatamente) ou `mark_done` (tratar como sucesso sem reexecutar) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparando v1 e v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Planos multifase | Não | Sim |
| Referências de saída de passos (`__ref:`) | Não | Sim |
| Descoberta de plugins | Manual | Automática |
| API de rastreamento de progresso | Não | Sim |
| Recuperação de erros | Falha e para | Fallback + continua |
| Execução de passos paralelos | Não | Sim (opcional por fase) |
| Comandos de plano WP-CLI | Não | Sim |
| Integração de benchmark | Não | Sim (`q-restaurant-website`) |

---

## Comandos de Plano WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Gera um plano de site a partir de uma descrição de objetivo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Executa um plano previamente gerado.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Mostra o progresso atual de um plano em execução ou concluído.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lista todos os planos de site (pendentes, em andamento e concluídos).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reseta um plano falho para `pending` para que possa ser reexecutado do início.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
