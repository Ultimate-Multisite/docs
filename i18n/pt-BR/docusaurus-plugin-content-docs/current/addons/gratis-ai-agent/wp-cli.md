---
title: Referência WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referência WP-CLI

O Gratis AI Agent inclui a família de comandos `wp gratis-ai-agent` para realizar testes de capacidade do agente, gerenciar habilidades e consultar o status do agente a partir da linha de comando. Todos os comandos exigem WP-CLI 2.0 ou superior.

## Instalação {#installation}

Os comandos WP-CLI são registrados automaticamente quando o plugin está ativo. Verifique com:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Executa o conjunto de testes de capacidade do Agente — um conjunto de prompts complexos e de várias etapas que testam todas as funcionalidades disponíveis. Use isso para avaliar o desempenho do modelo, comparar provedores de IA ou validar pacotes de habilidades antes de implantar em produção.

### Sinopse {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opções {#options}

| Opção | Descrição |
|---|---|
| `--question=<id>` | Executa uma única questão de teste por ID, em vez do conjunto completo |
| `--provider=<provider>` | Substitui o provedor de IA configurado para esta execução (ex: `anthropic`, `openai`) |
| `--model=<model>` | Substitui o modelo configurado para esta execução (ex: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formato de saída: `table` (padrão), `json`, `csv` |
| `--save` | Salva os resultados do teste de capacidade no banco de dados para comparação histórica |

### Exemplos {#examples}

Executa o conjunto completo de testes de capacidade com o provedor e modelo atuais:

```bash
wp gratis-ai-agent benchmark
```

Executa uma única questão (`q-restaurant-website`) e exibe como JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Executa contra um modelo específico e salva os resultados:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Saída {#output}

O teste de capacidade exibe uma linha por questão com as seguintes colunas:

| Coluna | Descrição |
|---|---|
| `ID` | Identificador da questão |
| `Description` | Breve resumo do cenário de teste |
| `Score` | Pontuação de sucesso/falha ou numérica (0–100) |
| `Abilities Used` | Lista separada por vírgulas de habilidades invocadas |
| `Tokens` | Total de tokens consumidos |
| `Duration` | Tempo decorrido em segundos |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Questões de Teste de Capacidade {#benchmark-questions}

O conjunto padrão inclui:

| ID | Cenário |
|---|---|
| `q-portfolio-site` | Criar um CPT de Portfólio com uma taxonomia de Categoria de Projeto e registrar um padrão de bloco |
| `q-restaurant-website` | Construir um site completo de restaurante com um CPT de menu, formulário de reserva e navegação |
| `q-dark-mode-theme` | Aplicar um preset de design em modo escuro e injetar cores da marca |
| `q-nav-builder` | Criar um menu de navegação primário de quatro itens com um dropdown aninhado |
| `q-options-roundtrip` | Ler, modificar e restaurar um conjunto de opções do WordPress |
| `q-ability-install` | Descobrir e instalar o pacote de habilidades mais apropriado para um caso de uso descrito |

Questões adicionais podem ser registradas via filtro `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gerencia as habilidades e os pacotes de habilidades instalados.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Lista todas as habilidades registradas, sua origem (core ou pacote) e seu status atual.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opções**

| Opção | Descrição |
|---|---|
| `--format=<format>` | Formato de saída: `table` (padrão), `json`, `csv` |

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

Baixa e ativa um pacote de habilidades do registro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentos**

| Argumento | Descrição |
|---|---|
| `<slug>` | Slug do plugin do pacote de habilidades, ex: `gratis-ai-agent-woocommerce` |

**Exemplo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Desativa uma habilidade específica sem remover o pacote. Útil para restringir o escopo do agente em um determinado site.

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

Reativa uma habilidade que foi desativada anteriormente.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Exibe a configuração atual do agente e o status de conectividade.

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

Exibe atividades recentes do agente do log de depuração.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opções**

| Opção | Descrição |
|---|---|
| `--last=<n>` | Exibe os últimos N registros de log. Padrão `50` |
| `--level=<level>` | Filtrar por nível: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrar por nome da habilidade |

**Exemplo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Restaura o estado do agente: limpa CSS injetado, remove CPTs e taxonomias registrados pelo agente, redefine estilos globais e esvazia o cache de opções do agente. Não remove o plugin nem suas configurações.

```bash
wp gratis-ai-agent reset [--yes]
```

Adicione `--yes` para pular o prompt de confirmação.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Códigos de Saída {#exit-codes}

Todos os comandos saem com `0` em caso de sucesso. Códigos de saída não zero:

| Código | Significado |
|---|---|
| `1` | Erro geral (consulte a mensagem de erro) |
| `2` | Falha de conectividade do provedor |
| `3` | Habilidade não encontrada |
| `4` | Questão de teste de capacidade não encontrada |
