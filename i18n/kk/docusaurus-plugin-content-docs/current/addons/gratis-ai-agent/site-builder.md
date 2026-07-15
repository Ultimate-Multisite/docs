---
title: Сайт құрастырушы оркестрациясы v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Сайт құрастыруды үйлестіру v2

Сайт құрастыруды үйлестіру v2 (Gratis AI Agent v1.4.0 нұсқасында енгізілген) — көп қадамды веб-сайт жасауды іске қосатын қозғалтқыш. Агенттен "мейрамхана веб-сайтын құруды" немесе "блогы бар портфолио жасауды" сұрағанда, оркестратор бұл жоғары деңгейлі мақсатты құрылымдалған **жоспарға** бөледі, оны орындау үшін қажет плагиндерді анықтайды, әр қадамды ретімен орындайды, ілгерілеуді бақылайды және қателерден дербес қалпына келеді.

---

## Бұл қалай жұмыс істейді {#how-it-works}

### 1. Жоспар жасау {#1-plan-generation}

Агент сайт құру нұсқауын алған кезде, JSON **сайт жоспарын** жасау үшін `create_site_plan` мүмкіндігін шақырады. Жоспар мыналарды сипаттайды:

- **Мақсат** — дайын сайт не істеуі керек
- **Кезеңдер** — қадамдардың реттелген топтары (мысалы, _Баптау_, _Контент түрлері_, _Дизайн_, _Контент_)
- **Қадамдар** — әр кезең ішіндегі жеке мүмкіндік шақырулары
- **Плагин талаптары** — белгілі бір қадамдарды орындау үшін белсенді болуы тиіс плагиндер
- **Fallbacks** — негізгі қадам сәтсіз болса, балама қадамдар

**Мысал жоспар (қысқартылған)**

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

### 2. Плагиндерді анықтау {#2-plugin-discovery}

Орындау басталмас бұрын, оркестратор жоспардың `plugin_requirements` өрісін қарап шығып, қай плагиндердің әлдеқашан белсенді екенін тексереді. Жетіспейтін плагиндер үшін ол:

1. Ең жақсы сәйкесті табу үшін `recommend_plugin` арқылы тізілімнен іздейді
2. Агенттен ұсынысты растауды сұрайды
3. Мақұлданса (немесе баптауларда автоматты орнату қосулы болса), орнатуды іске қосады

Плагиндерді анықтау сәтсіздіктері жұмысқа қатерлі емес — оркестратор әсер еткен қадамдарды `skipped` деп белгілеп, жоспардың қалған бөлігімен жалғастырады.

### 3. Жоспарды орындау {#3-plan-execution}

Оркестратор жоспар ID арқылы `execute_site_plan` шақырады. Орындау кезең-кезеңімен, қадам-қадамымен жүреді:

- **Қадам сілтемелері** (`__ref:` префиксі) — қадамдар алдыңғы қадамдардың нәтижелеріне сілтеме жасай алады. Жоғарыдағы мысалда `__ref:create_menu.menu_id` мәні `create_menu` қадамы қайтарған `menu_id` мәніне шешіледі.
- **Параллель қадамдар** — бір кезең ішіндегі өзара тәуелділігі жоқ қадамдар `parallel` жалаушасы қойылғанда қатар жіберіледі.
- **Қадам тайм-ауты** — әр қадамның жеке тайм-ауты бар (әдепкі: `Ability Timeout` баптауы). Тайм-аутқа ұшыраған қадам `failed` деп белгіленеді де, жоспар жалғасады.

### 4. Ілгерілеуді бақылау {#4-progress-tracking}

Орындау күйін тексеру үшін кез келген уақытта `get_plan_progress` шақырыңыз:

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

WP-CLI пайдаланушылары ілгерілеуді былай бақылай алады:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Қатеден қалпына келу {#5-error-recovery}

Қадам сәтсіз болғанда, оркестратор жоспарда анықталған **fallback** қадамын тексереді:

- **Fallback қолжетімді** — fallback қадамы бірден орындалып көріледі. Егер ол сәтті болса, орындау жалғасады. Егер ол да сәтсіз болса, қадам `failed` деп белгіленіп, орындау келесі қадаммен жалғасады.
- **Fallback жоқ** — қадам `failed` деп белгіленеді. Маңызды емес қадамдар өткізіп жіберіледі; маңызды қадамдар (`required: true` деп белгіленген) ағымдағы кезеңді тоқтатып, кезең деңгейіндегі қалпына келтіру әрекетін іске қосады.

Агент барлық сәтсіздіктерді қорытынды жоспар түйіндемесінде хабарлайды және қалпына келмейтін қателер үшін қолмен түзету қадамдарын ұсынуы мүмкін.

---

## Сайт жоспары мүмкіндіктері {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Табиғи тілдегі мақсат сипаттамасынан құрылымдалған сайт жоспарын жасайды.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Қалаулы веб-сайттың табиғи тілдегі сипаттамасы |
| `style` | string | No | Көрнекі стиль таңдауы: `minimal`, `bold`, `professional`, `playful`. Әдепкі: агент мақсатқа қарай таңдайды |
| `plugins` | array | No | Жоспарға қосылатын плагин slug-тары. Оркестратор қажет плагиндерді автоматты түрде қосады. |
| `dry_run` | boolean | No | Егер `true` болса, жоспар JSON-ын сақтамай немесе орындамай қайтарады. Әдепкі `false` |

**Қайтарады** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Бұрын жасалған сайт жоспарын орындауды бастайды.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `plan_id` | string | Иә | Орындауға арналған жоспардың ID-і |
| `auto_install_plugins` | boolean | Жоқ | Егер `true` болса, қажетті plugin-дерді растаусыз автоматты түрде орнатады. Әдепкі мәні `false` |
| `max_retries` | integer | Жоқ | Келесіге өтпей тұрып, сәтсіз қадамды қайталап көру саны. Әдепкі мәні `1` |

**Қайтарады** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Сайт жоспарының ағымдағы орындалу күйін қайтарады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `plan_id` | string | Иә | Сұрауға арналған жоспар ID-і |

**Қайтарады** жоғарыдағы [Прогресті бақылау](#4-progress-tracking) бөлімінде сипатталған прогресс нысанын.

---

### `handle_plan_error` {#handleplanerror}

Сәтсіз қадамды қолмен шешеді және жоспардың орындалуын келесі қадамнан жалғастырады. Автоматты қалпына келтіру мүмкін болмағанда және өзіңіз араласқыңыз келгенде осыны пайдаланыңыз.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `plan_id` | string | Иә | Жоспар ID-і |
| `step_id` | string | Иә | Сәтсіз қадамның ID-і |
| `resolution` | string | Иә | `skip` (өткізіп жіберу және жалғастыру), `retry` (қадамды дереу қайталау) немесе `mark_done` (қайта іске қоспай, сәтті аяқталды деп санау) мәндерінің бірі |

**Қайтарады** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 және v2 салыстыру {#comparing-v1-and-v2}

| Мүмкіндік | v1 | v2 |
|---|---|---|
| Көп кезеңді жоспарлар | Жоқ | Иә |
| Қадам шығысына сілтемелер (`__ref:`) | Жоқ | Иә |
| Plugin табу | Қолмен | Автоматты |
| Прогресті бақылау API-і | Жоқ | Иә |
| Қатені қалпына келтіру | Сәтсіздік және тоқтау | Қосалқы нұсқа + жалғастыру |
| Қадамдарды параллель орындау | Жоқ | Иә (әр кезең үшін қосымша қосылады) |
| WP-CLI жоспар командалары | Жоқ | Иә |
| Benchmark интеграциясы | Жоқ | Иә (`q-restaurant-website`) |

---

## WP-CLI жоспар командалары {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Мақсат сипаттамасынан сайт жоспарын жасайды.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Бұрын жасалған жоспарды орындайды.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Орындалып жатқан немесе аяқталған жоспардың ағымдағы прогресін көрсетеді.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Барлық сайт жоспарларын тізімдейді (күтуде, орындалуда және аяқталған).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Сәтсіз жоспарды басынан қайта орындауға болатындай етіп `pending` күйіне қайтарады.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
