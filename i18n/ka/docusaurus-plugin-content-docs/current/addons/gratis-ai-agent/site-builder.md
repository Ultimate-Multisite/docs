---
title: საიტის შემქმნელის ორკესტრაცია v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# საიტის შემქმნელის ორკესტრაცია v2 {#site-builder-orchestration-v2}

საიტის შემქმნელის ორკესტრაცია v2 (წარდგენილია Gratis AI Agent v1.4.0-ში) არის ძრავა, რომელიც მრავალსაფეხურიან ვებსაიტის შექმნას უზრუნველყოფს. როდესაც აგენტს სთხოვთ „ააგე რესტორნის ვებსაიტი“ ან „შექმენი პორტფოლიო ბლოგით“, ორკესტრატორი ამ მაღალი დონის მიზანს სტრუქტურირებულ **გეგმად** შლის, აღმოაჩენს მის შესასრულებლად საჭირო plugin-ებს, თითოეულ ნაბიჯს მიმდევრობით ასრულებს, პროგრესს აკონტროლებს და შეცდომებიდან ავტონომიურად აღდგება.

---

## როგორ მუშაობს {#how-it-works}

### 1. გეგმის გენერირება {#1-plan-generation}

როდესაც აგენტი საიტის შექმნის ინსტრუქციას იღებს, ის იძახებს `create_site_plan` შესაძლებლობას JSON **საიტის გეგმის** შესაქმნელად. გეგმა აღწერს:

- **მიზანი** — რა უნდა გააკეთოს დასრულებულმა საიტმა
- **ფაზები** — ნაბიჯების მოწესრიგებული ჯგუფები (მაგ. _გამართვა_, _კონტენტის ტიპები_, _დიზაინი_, _კონტენტი_)
- **ნაბიჯები** — ინდივიდუალური შესაძლებლობის გამოძახებები თითოეულ ფაზაში
- **Plugin-ის მოთხოვნები** — plugin-ები, რომლებიც გარკვეული ნაბიჯების გასაშვებად აქტიური უნდა იყოს
- **სარეზერვო ვარიანტები** — ალტერნატიული ნაბიჯები, თუ ძირითადი ნაბიჯი ვერ შესრულდა

**გეგმის მაგალითი (შემოკლებული)**

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

### 2. Plugin-ების აღმოჩენა {#2-plugin-discovery}

შესრულების დაწყებამდე, ორკესტრატორი ამოწმებს გეგმის `plugin_requirements`-ს და ადგენს, რომელი plugin-ებია უკვე აქტიური. გამოტოვებული plugin-ებისთვის ის:

1. ეძებს რეესტრში `recommend_plugin`-ის მეშვეობით საუკეთესო დამთხვევას
2. აგენტს სთხოვს რეკომენდაციის დადასტურებას
3. იწვევს ინსტალაციას, თუ დამტკიცდა (ან თუ პარამეტრებში ავტოინსტალაცია ჩართულია)

Plugin-ების აღმოჩენის წარუმატებლობა ფატალური არ არის — ორკესტრატორი დაზიანებულ ნაბიჯებს აღნიშნავს როგორც `skipped` და გეგმის დანარჩენი ნაწილით აგრძელებს.

### 3. გეგმის შესრულება {#3-plan-execution}

ორკესტრატორი გეგმის ID-ით იძახებს `execute_site_plan`-ს. შესრულება მიმდინარეობს ფაზიდან ფაზამდე, ნაბიჯიდან ნაბიჯამდე:

- **ნაბიჯების მითითებები** (`__ref:` პრეფიქსი) — ნაბიჯებს შეუძლიათ წინა ნაბიჯების შედეგებზე მითითება. ზემოთ მოცემულ მაგალითში, `__ref:create_menu.menu_id` გადაიჭრება როგორც `menu_id`, რომელიც `create_menu` ნაბიჯმა დააბრუნა.
- **პარალელური ნაბიჯები** — იმავე ფაზაში არსებული ნაბიჯები, რომლებსაც ერთმანეთზე დამოკიდებულებები არ აქვთ, ერთდროულად იგზავნება, როდესაც `parallel` ალამი დაყენებულია.
- **ნაბიჯის დროის ლიმიტი** — თითოეულ ნაბიჯს ინდივიდუალური დროის ლიმიტი აქვს (ნაგულისხმევად: `Ability Timeout` პარამეტრი). დროის ლიმიტით შეწყვეტილი ნაბიჯი აღინიშნება როგორც `failed` და გეგმა გრძელდება.

### 4. პროგრესის თვალყურის დევნება {#4-progress-tracking}

შესრულების სტატუსის შესამოწმებლად ნებისმიერ დროს გამოიძახეთ `get_plan_progress`:

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

WP-CLI მომხმარებლებს პროგრესის მონიტორინგი შეუძლიათ შემდეგით:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. შეცდომების აღდგენა {#5-error-recovery}

როდესაც ნაბიჯი ვერ სრულდება, ორკესტრატორი ამოწმებს, განსაზღვრულია თუ არა გეგმაში **სარეზერვო** ნაბიჯი:

- **სარეზერვო ვარიანტი ხელმისაწვდომია** — სარეზერვო ნაბიჯი დაუყოვნებლივ სცდება. თუ წარმატებით შესრულდა, შესრულება გრძელდება. თუ ისიც ვერ შესრულდა, ნაბიჯი აღინიშნება როგორც `failed` და შესრულება შემდეგ ნაბიჯზე გადადის.
- **სარეზერვო ვარიანტი არ არის** — ნაბიჯი აღინიშნება როგორც `failed`. არაკრიტიკული ნაბიჯები გამოტოვებულია; კრიტიკული ნაბიჯები (მონიშნული `required: true`-ით) აჩერებს მიმდინარე ფაზას და იწვევს ფაზის დონის აღდგენის მცდელობას.

აგენტი საბოლოო გეგმის შეჯამებაში ყველა წარუმატებლობას აცნობებს და გამოუსწორებელი შეცდომებისთვის შეიძლება ხელით გამოსწორების ნაბიჯები შემოგთავაზოთ.

---

## საიტის გეგმის შესაძლებლობები {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

ბუნებრივი ენის მიზნის აღწერიდან აგენერირებს სტრუქტურირებულ საიტის გეგმას.

**პარამეტრები**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | სასურველი ვებსაიტის ბუნებრივი ენის აღწერა |
| `style` | string | No | ვიზუალური სტილის უპირატესობა: `minimal`, `bold`, `professional`, `playful`. ნაგულისხმევად: აგენტი მიზნის მიხედვით ირჩევს |
| `plugins` | array | No | გეგმაში შესატანი plugin-ის slug-ები. ორკესტრატორი საჭირო plugin-ებს ავტომატურად ამატებს. |
| `dry_run` | boolean | No | თუ `true`, აბრუნებს გეგმის JSON-ს მისი შენახვის ან შესრულების გარეშე. ნაგულისხმევი `false` |

**აბრუნებს** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

იწყებს ადრე გენერირებული საიტის გეგმის შესრულებას.

**პარამეტრები**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | შესასრულებელი გეგმის ID |
| `auto_install_plugins` | boolean | No | თუ `true` არის, საჭირო plugin-ებს ავტომატურად აყენებს დადასტურების გარეშე. ნაგულისხმევი `false` |
| `max_retries` | integer | No | წარუმატებელი ნაბიჯის ხელახლა ცდის რაოდენობა გაგრძელებამდე. ნაგულისხმევი `1` |

**აბრუნებს** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

აბრუნებს საიტის გეგმის მიმდინარე შესრულების სტატუსს.

**პარამეტრები**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | გამოსაკითხი გეგმის ID |

**აბრუნებს** ზემოთ, [პროგრესის თვალყურის დევნებაში](#4-progress-tracking) აღწერილ პროგრესის ობიექტს.

---

### `handle_plan_error` {#handleplanerror}

ხელით აგვარებს წარუმატებელ ნაბიჯს და გეგმის შესრულებას შემდეგი ნაბიჯიდან განაახლებს. გამოიყენეთ ეს, როდესაც ავტომატური აღდგენა შესაძლებელი არ იყო და ჩარევა გსურთ.

**პარამეტრები**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | გეგმის ID |
| `step_id` | string | Yes | წარუმატებელი ნაბიჯის ID |
| `resolution` | string | Yes | ერთ-ერთი: `skip` (გამოტოვება და გაგრძელება), `retry` (ნაბიჯის დაუყოვნებლივ ხელახლა ცდა), ან `mark_done` (წარმატებულად ჩათვლა ხელახლა გაშვების გარეშე) |

**აბრუნებს** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1-ისა და v2-ის შედარება {#comparing-v1-and-v2}

| ფუნქცია | v1 | v2 |
|---|---|---|
| მრავალფაზიანი გეგმები | არა | კი |
| ნაბიჯის შედეგის მითითებები (`__ref:`) | არა | კი |
| Plugin-ის აღმოჩენა | ხელით | ავტომატურად |
| პროგრესის თვალყურის დევნების API | არა | კი |
| შეცდომის აღდგენა | წარუმატებლობა და შეჩერება | ალტერნატიული გზა + გაგრძელება |
| პარალელური ნაბიჯების შესრულება | არა | კი (თითოეულ ფაზაზე ჩართვით) |
| WP-CLI გეგმის ბრძანებები | არა | კი |
| ბენჩმარკის ინტეგრაცია | არა | კი (`q-restaurant-website`) |

---

## WP-CLI გეგმის ბრძანებები {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

მიზნის აღწერიდან ქმნის საიტის გეგმას.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

ასრულებს ადრე გენერირებულ გეგმას.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

აჩვენებს მიმდინარე პროგრესს შესრულებადი ან დასრულებული გეგმისთვის.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

ჩამოთვლის ყველა საიტის გეგმას (მომლოდინე, მიმდინარე და დასრულებული).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

წარუმატებელ გეგმას აბრუნებს `pending` მდგომარეობაში, რათა ის თავიდან შესრულდეს.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
