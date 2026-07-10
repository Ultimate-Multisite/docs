---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Կայքի կառուցման կազմակերպում v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2-ը (ներկայացվել է Gratis AI Agent v1.4.0-ում) շարժիչն է, որը ապահովում է բազմաքայլ կայքերի ստեղծումը։ Երբ դուք agent-ին խնդրում եք «կառուցել ռեստորանի կայք» կամ «ստեղծել պորտֆոլիո՝ բլոգով», orchestrator-ը այդ բարձր մակարդակի նպատակը բաժանում է կառուցվածքային **պլանի**, հայտնաբերում է այն plugin-ները, որոնք անհրաժեշտ են այն իրականացնելու համար, հերթականությամբ կատարում է յուրաքանչյուր քայլը, հետևում է առաջընթացին և ինքնավար կերպով վերականգնվում է սխալներից։

---

## Ինչպես է այն աշխատում {#how-it-works}

### 1. Պլանի ստեղծում {#1-plan-generation}

Երբ agent-ը ստանում է կայք կառուցելու հրահանգ, այն կանչում է `create_site_plan` կարողությունը՝ JSON **կայքի պլան** ստեղծելու համար։ Պլանը նկարագրում է՝

- **Նպատակ** — ինչ պետք է անի ավարտված կայքը
- **Փուլեր** — քայլերի կարգավորված խմբեր (օր.՝ _Կարգավորում_, _Բովանդակության տեսակներ_, _Դիզայն_, _Բովանդակություն_)
- **Քայլեր** — յուրաքանչյուր փուլի ներսում առանձին կարողությունների կանչեր
- **Plugin-ի պահանջներ** — plugin-ներ, որոնք պետք է ակտիվ լինեն, որպեսզի որոշակի քայլեր գործարկվեն
- **Պահուստային տարբերակներ** — այլընտրանքային քայլեր, եթե հիմնական քայլը ձախողվի

**Պլանի օրինակ (կրճատված)**

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

### 2. Plugin-ների հայտնաբերում {#2-plugin-discovery}

Մինչ կատարումը սկսելը, orchestrator-ը սկանավորում է պլանի `plugin_requirements`-ը և ստուգում, թե որ plugin-ներն են արդեն ակտիվ։ Բացակայող plugin-ների համար այն՝

1. Որոնում է ռեեստրում `recommend_plugin`-ի միջոցով՝ լավագույն համընկնումը գտնելու համար
2. Հուշում է agent-ին հաստատել առաջարկությունը
3. Գործարկում է տեղադրումը, եթե հաստատվել է (կամ եթե կարգավորումներում միացված է ավտոմատ տեղադրումը)

Plugin-ների հայտնաբերման ձախողումները ճակատագրական չեն — orchestrator-ը ազդված քայլերը նշում է որպես `skipped` և շարունակում է պլանի մնացած մասը։

### 3. Պլանի կատարում {#3-plan-execution}

Orchestrator-ը կանչում է `execute_site_plan`-ը՝ պլանի ID-ով։ Կատարումը ընթանում է փուլ առ փուլ, քայլ առ քայլ՝

- **Քայլերի հղումներ** (`__ref:` նախածանց) — քայլերը կարող են հղում անել նախորդ քայլերի ելքերին։ Վերևի օրինակում `__ref:create_menu.menu_id`-ը վերածվում է այն `menu_id`-ին, որը վերադարձվել է `create_menu` քայլի կողմից։
- **Զուգահեռ քայլեր** — նույն փուլի ներսում գտնվող քայլերը, որոնք փոխադարձ կախվածություններ չունեն, ուղարկվում են միաժամանակ, երբ սահմանված է `parallel` դրոշակը։
- **Քայլի ժամանակի սահմանափակում** — յուրաքանչյուր քայլ ունի անհատական ժամանակի սահմանափակում (լռելյայն՝ `Ability Timeout` կարգավորումը)։ Ժամանակը սպառված քայլը նշվում է որպես `failed`, և պլանը շարունակվում է։

### 4. Առաջընթացի հետևում {#4-progress-tracking}

Կանչեք `get_plan_progress`-ը ցանկացած պահի՝ կատարման կարգավիճակը ստուգելու համար՝

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

WP-CLI օգտվողները կարող են հետևել առաջընթացին՝

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Սխալներից վերականգնում {#5-error-recovery}

Երբ քայլը ձախողվում է, orchestrator-ը ստուգում է՝ արդյոք պլանում սահմանված է **պահուստային** քայլ՝

- **Պահուստային տարբերակը հասանելի է** — պահուստային քայլը փորձարկվում է անմիջապես։ Եթե այն հաջողվում է, կատարումը շարունակվում է։ Եթե այն նույնպես ձախողվում է, քայլը նշվում է որպես `failed`, և կատարումը շարունակվում է հաջորդ քայլով։
- **Պահուստային տարբերակ չկա** — քայլը նշվում է որպես `failed`։ Ոչ կրիտիկական քայլերը բաց են թողնվում, իսկ կրիտիկական քայլերը (նշված `required: true`) դադարեցնում են ընթացիկ փուլը և գործարկում են փուլի մակարդակի վերականգնման փորձ։

Agent-ը վերջնական պլանի ամփոփագրում հայտնում է բոլոր ձախողումների մասին և կարող է առաջարկել ձեռքով շտկման քայլեր՝ չվերականգնվող սխալների համար։

---

## Կայքի պլանի կարողություններ {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Բնական լեզվով նպատակի նկարագրությունից ստեղծում է կառուցվածքային կայքի պլան։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `goal` | string | Այո | Ցանկալի կայքի բնական լեզվով նկարագրություն |
| `style` | string | Ոչ | Տեսողական ոճի նախապատվություն՝ `minimal`, `bold`, `professional`, `playful`։ Լռելյայն՝ agent-ը ընտրում է՝ նպատակի հիման վրա |
| `plugins` | array | Ոչ | Plugin-ի slug-ներ՝ պլանում ներառելու համար։ Orchestrator-ը պահանջվող plugin-ները ավելացնում է ավտոմատ։ |
| `dry_run` | boolean | Ոչ | Եթե `true` է, վերադարձնում է պլանի JSON-ը՝ առանց այն պահպանելու կամ կատարելու։ Լռելյայն՝ `false` |

**Վերադարձնում է** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Սկսում է նախկինում ստեղծված կայքի պլանի կատարումը։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `plan_id` | string | Այո | Կատարման ենթակա պլանի ID |
| `auto_install_plugins` | boolean | Ոչ | Եթե `true` է, ավտոմատ տեղադրում է պահանջվող plugin-ները՝ առանց հաստատման։ Լռելյայն՝ `false` |
| `max_retries` | integer | Ոչ | Ձախողված քայլը կրկնելու փորձերի քանակը՝ նախքան շարունակելը։ Լռելյայն՝ `1` |

**Վերադարձնում է** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Վերադարձնում է կայքի պլանի ընթացիկ կատարման կարգավիճակը։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `plan_id` | string | Այո | Հարցման ենթակա պլանի ID |

**Վերադարձնում է** վերևում [Առաջընթացի հետևում](#4-progress-tracking)-ում նկարագրված առաջընթացի օբյեկտը։

---

### `handle_plan_error` {#handleplanerror}

Ձեռքով լուծում է ձախողված քայլը և վերսկսում պլանի կատարումը հաջորդ քայլից։ Օգտագործեք սա, երբ ավտոմատ վերականգնումը հնարավոր չէր, և ցանկանում եք միջամտել։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `plan_id` | string | Այո | Պլանի ID |
| `step_id` | string | Այո | Ձախողված քայլի ID |
| `resolution` | string | Այո | `skip` (բաց թողնել և շարունակել), `retry` (անմիջապես կրկնել քայլը), կամ `mark_done` (համարել հաջողված՝ առանց կրկին գործարկելու) տարբերակներից մեկը |

**Վերադարձնում է** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1-ի և v2-ի համեմատություն {#comparing-v1-and-v2}

| Հատկություն | v1 | v2 |
|---|---|---|
| Բազմափուլ պլաններ | Ոչ | Այո |
| Քայլերի ելքային հղումներ (`__ref:`) | Ոչ | Այո |
| Plugin-ների հայտնաբերում | Ձեռքով | Ավտոմատ |
| Առաջընթացի հետևման API | Ոչ | Այո |
| Սխալների վերականգնում | Ձախողվել և կանգ առնել | Պահուստային տարբերակ + շարունակել |
| Քայլերի զուգահեռ կատարում | Ոչ | Այո (միացվում է ըստ փուլի) |
| WP-CLI պլանի հրամաններ | Ոչ | Այո |
| Benchmark ինտեգրում | Ոչ | Այո (`q-restaurant-website`) |

---

## WP-CLI պլանի հրամաններ {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Նպատակի նկարագրությունից գեներացնում է կայքի պլան։

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Կատարում է նախկինում գեներացված պլանը։

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Ցույց է տալիս կատարվող կամ ավարտված պլանի ընթացիկ առաջընթացը։

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ցուցակագրում է կայքի բոլոր պլանները (սպասող, ընթացքի մեջ և ավարտված)։

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Վերակայում է ձախողված պլանը՝ դարձնելով `pending`, որպեսզի այն հնարավոր լինի կրկին կատարել սկզբից։

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
