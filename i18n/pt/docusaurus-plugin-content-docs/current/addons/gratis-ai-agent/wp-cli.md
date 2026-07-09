---
title: Referência do WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referência WP-CLI {#wp-cli-reference}

Gratis AI Agent inclui uma família de comandos `wp gratis-ai-agent` para fazer benchmark do agente, gerir capacidades e consultar o estado do agente a partir da linha de comandos. Todos os comandos requerem WP-CLI 2.0 ou superior.

## Instalação {#installation}

Os comandos WP-CLI são registados automaticamente quando o plugin está ativo. Verifique com:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Executa a suite de benchmark Agent Capabilities — um conjunto de prompts complexos e com múltiplos passos que exercitam toda a superfície de capacidades. Use isto para avaliar o desempenho do modelo, comparar fornecedores de AI ou validar pacotes de capacidades antes de implementar em produção.

### Sinopse {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opções {#options}

| Opção | Descrição |
|---|---|
| `--question=<id>` | Executar uma única pergunta de benchmark por ID em vez da suite completa |
| `--provider=<provider>` | Substituir o fornecedor de AI configurado para esta execução (por exemplo, `anthropic`, `openai`) |
| `--model=<model>` | Substituir o modelo configurado para esta execução (por exemplo, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formato de saída: `table` (predefinido), `json`, `csv` |
| `--save` | Guardar os resultados do benchmark na base de dados para comparação histórica |

### Exemplos {#examples}

Executar a suite completa de benchmark com o fornecedor e o modelo atuais:

```bash
wp gratis-ai-agent benchmark
```

Executar uma única pergunta (`q-restaurant-website`) e produzir a saída como JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Executar contra um modelo específico e guardar os resultados:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Saída {#output}

O benchmark produz uma linha por pergunta com as seguintes colunas:

| Coluna | Descrição |
|---|---|
| `ID` | Identificador da pergunta |
| `Description` | Resumo breve do cenário de benchmark |
| `Score` | Aprovação/reprovação ou pontuação numérica (0–100) |
| `Abilities Used` | Lista separada por vírgulas das capacidades invocadas |
| `Tokens` | Total de tokens consumidos |
| `Duration` | Tempo decorrido em segundos |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Perguntas de Benchmark {#benchmark-questions}

A suite predefinida inclui:

| ID | Cenário |
|---|---|
| `q-portfolio-site` | Criar um CPT de Portefólio com uma taxonomia de Categoria de Projeto e registar um padrão de bloco |
| `q-restaurant-website` | Criar um site completo de restaurante com um CPT de menu, formulário de reserva e navegação |
| `q-dark-mode-theme` | Aplicar uma predefinição de design em modo escuro e injetar cores da marca |
| `q-nav-builder` | Criar um menu de navegação principal com quatro itens e um dropdown aninhado |
| `q-options-roundtrip` | Ler, modificar e restaurar um conjunto de opções do WordPress |
| `q-ability-install` | Descobrir e instalar o pacote de capacidades mais adequado para um caso de uso descrito |

Perguntas adicionais podem ser registadas através do filtro `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gere capacidades e pacotes de capacidades instalados.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Lista todas as capacidades registadas, a respetiva origem (núcleo ou pacote) e o estado atual.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opções**

| Opção | Descrição |
|---|---|
| `--format=<format>` | Formato de saída: `table` (predefinido), `json`, `csv` |

**Exemplo de saída**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Descarrega e ativa um pacote de capacidades a partir do registo.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentos**

| Argumento | Descrição |
|---|---|
| `<slug>` | Slug do plugin do pacote de capacidades, por exemplo `gratis-ai-agent-woocommerce` |

**Exemplo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Desativa uma capacidade específica sem remover o pacote. Útil para restringir o âmbito do agente num determinado site.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Exemplo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Reativa uma capacidade anteriormente desativada.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Apresenta a configuração atual do agente e o estado de conectividade.

```bash
wp gratis-ai-agent status
```

**Exemplo de saída**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Apresenta a atividade recente do agente a partir do log de depuração.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opções**

| Opção | Descrição |
|---|---|
| `--last=<n>` | Mostra as últimas N entradas de log. Predefinição `50` |
| `--level=<level>` | Filtra por nível: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtra por nome de ability |

**Exemplo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Repõe o estado do agente: limpa o CSS injetado, remove os CPTs e as taxonomias registados pelo agente, repõe os estilos globais e esvazia a cache de opções do agente. Não remove o plugin nem as suas definições.

```bash
wp gratis-ai-agent reset [--yes]
```

Adiciona `--yes` para ignorar o pedido de confirmação.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Códigos de Saída {#exit-codes}

Todos os comandos saem com `0` em caso de sucesso. Códigos de saída diferentes de zero:

| Código | Significado |
|---|---|
| `1` | Erro geral (ver mensagem de erro) |
| `2` | Falha de conectividade do fornecedor |
| `3` | Ability não encontrada |
| `4` | Pergunta de benchmark não encontrada |
