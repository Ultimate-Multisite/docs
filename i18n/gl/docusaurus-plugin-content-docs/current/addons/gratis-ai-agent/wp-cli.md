---
title: Referencia de WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referencia de WP-CLI

Gratis AI Agent inclúe unha familia de comandos `wp gratis-ai-agent` para facer benchmarking do axente, xestionar habilidades e consultar o estado do axente desde a liña de comandos. Todos os comandos requiren WP-CLI 2.0 ou superior.

## Instalación

Os comandos de WP-CLI rexístranse automaticamente cando o plugin está activo. Verifícao con:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Executa a suite de benchmarking de capacidades do axente: un conxunto de prompts complexos e de varios pasos que exercitan toda a superficie de habilidades. Usa isto para avaliar o rendemento do modelo, comparar provedores de IA ou validar paquetes de habilidades antes de despregalos en produción.

### Sinopse

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opcións

| Opción | Descrición |
|---|---|
| `--question=<id>` | Executa unha única pregunta de benchmark por ID en lugar da suite completa |
| `--provider=<provider>` | Sobrescribe o provedor de IA configurado para esta execución (p. ex. `anthropic`, `openai`) |
| `--model=<model>` | Sobrescribe o modelo configurado para esta execución (p. ex. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formato de saída: `table` (predeterminado), `json`, `csv` |
| `--save` | Garda os resultados do benchmark na base de datos para comparación histórica |

### Exemplos

Executa a suite completa de benchmark co provedor e modelo actuais:

```bash
wp gratis-ai-agent benchmark
```

Executa unha única pregunta (`q-restaurant-website`) e mostra a saída como JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Executa contra un modelo específico e garda os resultados:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Saída

O benchmark produce unha fila por pregunta coas seguintes columnas:

| Columna | Descrición |
|---|---|
| `ID` | Identificador da pregunta |
| `Description` | Resumo breve do escenario de benchmark |
| `Score` | Aprobado/suspenso ou puntuación numérica (0–100) |
| `Abilities Used` | Lista separada por comas das habilidades invocadas |
| `Tokens` | Total de tokens consumidos |
| `Duration` | Tempo transcorrido en segundos |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Preguntas de benchmark

A suite predeterminada inclúe:

| ID | Escenario |
|---|---|
| `q-portfolio-site` | Crea un CPT de Portfolio cunha taxonomía Project Category e rexistra un patrón de bloque |
| `q-restaurant-website` | Constrúe un sitio web completo de restaurante cun CPT de menú, formulario de reservas e navegación |
| `q-dark-mode-theme` | Aplica un preaxuste de deseño en modo escuro e inxecta cores de marca |
| `q-nav-builder` | Crea un menú de navegación principal de catro elementos cun despregable aniñado |
| `q-options-roundtrip` | Le, modifica e restaura un conxunto de opcións de WordPress |
| `q-ability-install` | Descobre e instala o paquete de habilidades máis axeitado para un caso de uso descrito |

Pódense rexistrar preguntas adicionais mediante o filtro `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Xestiona as habilidades instaladas e os paquetes de habilidades.

### `wp gratis-ai-agent abilities list`

Lista todas as habilidades rexistradas, a súa orixe (núcleo ou paquete) e o seu estado actual.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opcións**

| Opción | Descrición |
|---|---|
| `--format=<format>` | Formato de saída: `table` (predeterminado), `json`, `csv` |

**Saída de exemplo**

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

### `wp gratis-ai-agent abilities install`

Descarga e activa un paquete de habilidades desde o rexistro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentos**

| Argumento | Descrición |
|---|---|
| `<slug>` | Slug do plugin do paquete de habilidades, p. ex. `gratis-ai-agent-woocommerce` |

**Exemplo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Desactiva unha habilidade específica sen eliminar o paquete. Útil para restrinxir o alcance do axente nun sitio determinado.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Exemplo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Volve activar unha habilidade previamente desactivada.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Mostra a configuración actual do axente e o estado de conectividade.

```bash
wp gratis-ai-agent status
```

**Saída de exemplo**

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

## `wp gratis-ai-agent logs`

Mostra a actividade recente do axente desde o rexistro de depuración.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opcións**

| Opción | Descrición |
|---|---|
| `--last=<n>` | Mostra as últimas N entradas de rexistro. Predeterminado `50` |
| `--level=<level>` | Filtra por nivel: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtra por nome de habilidade |

**Exemplo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Restablece o estado do axente: limpa o CSS inxectado, elimina os CPTs e taxonomías rexistrados polo axente, restablece os estilos globais e baleira a caché de opcións do axente. Non elimina o plugin nin a súa configuración.

```bash
wp gratis-ai-agent reset [--yes]
```

Engade `--yes` para omitir a solicitude de confirmación.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Códigos de saída

Todos os comandos saen con `0` se teñen éxito. Códigos de saída distintos de cero:

| Código | Significado |
|---|---|
| `1` | Erro xeral (consulta a mensaxe de erro) |
| `2` | Fallo de conectividade do provedor |
| `3` | Habilidade non atopada |
| `4` | Pregunta de referencia non atopada |
