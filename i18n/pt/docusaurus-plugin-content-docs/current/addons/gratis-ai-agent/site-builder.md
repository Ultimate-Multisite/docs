---
title: Orquestração do Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orquestração do Site Builder v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (introduzido no Gratis AI Agent v1.4.0) é o motor que impulsiona a criação de sites em múltiplos passos. Quando pede ao agente para "criar um site de restaurante" ou "criar um portefólio com um blog", o orquestrador divide esse objetivo de alto nível num **plano** estruturado, descobre os plugins necessários para o cumprir, executa cada passo em sequência, acompanha o progresso e recupera de erros autonomamente.

---

## Como Funciona {#how-it-works}

### 1. Geração do Plano {#1-plan-generation}

Quando o agente recebe uma instrução de criação de site, chama a capacidade `create_site_plan` para produzir um **plano de site** JSON. O plano descreve:

- **Objetivo** — o que o site final deve fazer
- **Fases** — grupos ordenados de passos (por exemplo, _Configuração_, _Tipos de Conteúdo_, _Design_, _Conteúdo_)
- **Passos** — chamadas de capacidades individuais dentro de cada fase
- **Requisitos de plugin** — plugins que devem estar ativos para que determinados passos sejam executados
- **Alternativas** — passos alternativos se um passo principal falhar

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

### 2. Descoberta de Plugins {#2-plugin-discovery}

Antes de a execução começar, o orquestrador analisa os `plugin_requirements` do plano e verifica quais plugins já estão ativos. Para plugins em falta, ele:

1. Pesquisa no registo através de `recommend_plugin` pela melhor correspondência
2. Pede ao agente para confirmar a recomendação
3. Aciona a instalação se aprovada (ou se a instalação automática estiver ativada nas definições)

Falhas na descoberta de plugins não são fatais — o orquestrador marca os passos afetados como `skipped` e continua com o resto do plano.

### 3. Execução do Plano {#3-plan-execution}

O orquestrador chama `execute_site_plan` com o ID do plano. A execução prossegue fase a fase, passo a passo:

- **Referências de passos** (prefixo `__ref:`) — os passos podem referenciar saídas de passos anteriores. No exemplo acima, `__ref:create_menu.menu_id` é resolvido para o `menu_id` devolvido pelo passo `create_menu`.
- **Passos paralelos** — passos dentro da mesma fase que não têm interdependências são despachados em simultâneo quando a flag `parallel` está definida.
- **Tempo limite do passo** — cada passo tem um tempo limite individual (predefinição: a definição `Ability Timeout`). Um passo que excede o tempo limite é marcado como `failed` e o plano continua.

### 4. Acompanhamento do Progresso {#4-progress-tracking}

Chame `get_plan_progress` a qualquer momento para verificar o estado da execução:

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

Utilizadores de WP-CLI podem monitorizar o progresso com:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperação de Erros {#5-error-recovery}

Quando um passo falha, o orquestrador verifica se existe um passo **alternativo** definido no plano:

- **Alternativa disponível** — o passo alternativo é tentado imediatamente. Se tiver sucesso, a execução continua. Se também falhar, o passo é marcado como `failed` e a execução continua com o passo seguinte.
- **Sem alternativa** — o passo é marcado como `failed`. Passos não críticos são ignorados; passos críticos (marcados como `required: true`) interrompem a fase atual e acionam uma tentativa de recuperação ao nível da fase.

O agente comunica todas as falhas no resumo final do plano e pode sugerir passos de correção manual para erros irrecuperáveis.

---

## Capacidades do Plano de Site {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Gera um plano de site estruturado a partir de uma descrição de objetivo em linguagem natural.

**Parâmetros**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Descrição em linguagem natural do site pretendido |
| `style` | string | No | Preferência de estilo visual: `minimal`, `bold`, `professional`, `playful`. Predefinição: o agente escolhe com base no objetivo |
| `plugins` | array | No | Slugs de plugins a incluir no plano. O orquestrador adiciona automaticamente os plugins necessários. |
| `dry_run` | boolean | No | Se `true`, devolve o JSON do plano sem o guardar nem executar. Predefinição `false` |

**Devolve** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Começa a executar um plano de site gerado anteriormente.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `plan_id` | string | Sim | ID do plano a executar |
| `auto_install_plugins` | boolean | Não | Se `true`, instala automaticamente os plugins necessários sem confirmação. Predefinição `false` |
| `max_retries` | integer | Não | Número de vezes para repetir uma etapa falhada antes de avançar. Predefinição `1` |

**Devolve** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Devolve o estado de execução atual de um plano de site.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `plan_id` | string | Sim | ID do plano a consultar |

**Devolve** o objeto de progresso descrito em [Acompanhamento de Progresso](#4-progress-tracking) acima.

---

### `handle_plan_error` {#handleplanerror}

Resolve manualmente uma etapa falhada e retoma a execução do plano a partir da etapa seguinte. Use isto quando a recuperação automática não tiver sido possível e quiser intervir.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `plan_id` | string | Sim | ID do plano |
| `step_id` | string | Sim | ID da etapa falhada |
| `resolution` | string | Sim | Um de `skip` (saltar e continuar), `retry` (repetir a etapa imediatamente) ou `mark_done` (tratar como concluída com sucesso sem executar novamente) |

**Devolve** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparar v1 e v2 {#comparing-v1-and-v2}

| Funcionalidade | v1 | v2 |
|---|---|---|
| Planos multifase | Não | Sim |
| Referências de saída de etapa (`__ref:`) | Não | Sim |
| Descoberta de plugins | Manual | Automática |
| API de acompanhamento de progresso | Não | Sim |
| Recuperação de erros | Falhar e parar | Alternativa + continuar |
| Execução paralela de etapas | Não | Sim (opt-in por fase) |
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

Executa um plano gerado anteriormente.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Mostra o progresso atual de um plano em execução ou concluído.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lista todos os planos de site (pendentes, em curso e concluídos).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Repõe um plano falhado para `pending` para que possa ser reexecutado desde o início.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
