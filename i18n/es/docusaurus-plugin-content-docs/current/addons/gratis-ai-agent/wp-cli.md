---
title: Referencia de WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referencia de WP-CLI {#wp-cli-reference}

Gratis AI Agent incluye la familia de comandos `wp gratis-ai-agent` para realizar evaluaciones de rendimiento del agente, gestionar habilidades y consultar el estado del agente desde la línea de comandos. Todos los comandos requieren WP-CLI 2.0 o superior.

## Instalación {#installation}

Los comandos de WP-CLI se registran automáticamente cuando el plugin está activo. Verifícalo con:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ejecuta el conjunto de pruebas de evaluación de capacidades del Agente (Agent Capabilities benchmark suite): un conjunto de prompts complejos y de múltiples pasos que ejercitan todo el rango de habilidades. Utiliza esto para evaluar el rendimiento del modelo, comparar proveedores de IA o validar paquetes de habilidades antes de implementarlo en producción.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opciones {#options}

| Opción | Descripción |
|---|---|
| `--question=<id>` | Ejecuta una única pregunta de evaluación por ID en lugar del conjunto completo |
| `--provider=<provider>` | Anula el proveedor de IA configurado para esta ejecución (ej. `anthropic`, `openai`) |
| `--model=<model>` | Anula el modelo configurado para esta ejecución (ej. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formato de salida: `table` (predeterminado), `json`, `csv` |
| `--save` | Guarda los resultados de la evaluación en la base de datos para comparación histórica |

### Ejemplos {#examples}

Ejecuta el conjunto completo de pruebas con el proveedor y el modelo actuales:

```bash
wp gratis-ai-agent benchmark
```

Ejecuta una única pregunta (`q-restaurant-website`) y la salida en formato JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Ejecuta contra un modelo específico y guarda los resultados:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Salida {#output}

La evaluación muestra una fila por cada pregunta con las siguientes columnas:

| Columna | Descripción |
|---|---|
| `ID` | Identificador de la pregunta |
| `Description` | Breve resumen del escenario de la evaluación |
| `Score` | Puntuación de aprobado/fallido o numérica (0–100) |
| `Abilities Used` | Lista separada por comas de las habilidades invocadas |
| `Tokens` | Tokens totales consumidos |
| `Duration` | Tiempo transcurrido en segundos |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Preguntas de Evaluación {#benchmark-questions}

El conjunto predeterminado incluye:

| ID | Escenario |
|---|---|
| `q-portfolio-site` | Crear un CPT de portafolio con una taxonomía de categoría de proyectos y registrar un patrón de bloque |
| `q-restaurant-website` | Construir un sitio web completo de restaurante con un CPT de menú, formulario de reserva y navegación |
| `q-dark-mode-theme` | Aplicar un preset de diseño en modo oscuro e inyectar colores de marca |
| `q-nav-builder` | Crear un menú de navegación principal de cuatro elementos con un menú desplegable anidado |
| `q-options-roundtrip` | Leer, modificar y restaurar un conjunto de opciones de WordPress |
| `q-ability-install` | Descubrir e instalar el paquete de habilidades más apropiado para un caso de uso descrito |

Se pueden registrar preguntas adicionales a través del filtro `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gestiona las habilidades instaladas y los paquetes de habilidades.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Lista todas las habilidades registradas, su fuente (núcleo o paquete) y su estado actual.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opciones**

| Opción | Descripción |
|---|---|
| `--format=<format>` | Formato de salida: `table` (predeterminado), `json`, `csv` |

**Salida de ejemplo**

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

Descarga y activa un paquete de habilidades desde el registro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentos**

| Argumento | Descripción |
|---|---|
| `<slug>` | Slug del plugin del paquete de habilidades, ej. `gratis-ai-agent-woocommerce` |

**Ejemplo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Deshabilita una habilidad específica sin eliminar el paquete. Útil para restringir el alcance del agente en un sitio determinado.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Ejemplo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Vuelve a habilitar una habilidad que fue deshabilitada previamente.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Muestra la configuración actual del agente y su estado de conectividad.

```bash
wp gratis-ai-agent status
```

**Salida de ejemplo**

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

Muestra la actividad reciente del agente del registro de depuración.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opciones**

| Opción | Descripción |
|---|---|
| `--last=<n>` | Muestra las últimas N entradas del registro. Predeterminado `50` |
| `--level=<level>` | Filtrar por nivel: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrar por nombre de la habilidad |

**Ejemplo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Restablece el estado del agente: limpia el CSS inyectado, elimina los CPTs y taxonomías registrados por el agente, restablece los estilos globales y vacía la caché de opciones del agente. No elimina el plugin ni su configuración.

```bash
wp gratis-ai-agent reset [--yes]
```

Añade `--yes` para saltarte la solicitud de confirmación.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Códigos de Salida {#exit-codes}

Todos los comandos salen con `0` en caso de éxito. Los códigos de salida distintos de cero significan:

| Código | Significado |
|---|---|
| `1` | Error general (ver el mensaje de error) |
| `2` | Fallo de conectividad del proveedor |
| `3` | Habilidad no encontrada |
| `4` | Pregunta de evaluación no encontrada |
