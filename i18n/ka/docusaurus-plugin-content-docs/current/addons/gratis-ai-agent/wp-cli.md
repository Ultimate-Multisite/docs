---
title: WP-CLI ცნობარი
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ცნობარი

Gratis AI Agent მოყვება `wp gratis-ai-agent` ბრძანებების ოჯახი აგენტის ბენჩმარკინგისთვის, შესაძლებლობების მართვისთვის და ბრძანების ხაზიდან აგენტის სტატუსის გამოსაკითხად. ყველა ბრძანებას სჭირდება WP-CLI 2.0 ან უფრო ახალი.

## ინსტალაცია

WP-CLI ბრძანებები ავტომატურად რეგისტრირდება, როცა plugin აქტიურია. გადაამოწმეთ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

უშვებს Agent Capabilities ბენჩმარკების ნაკრებს — რთული, მრავალსაფეხურიანი prompt-ების ერთობლიობას, რომლებიც ამოწმებს შესაძლებლობების სრულ არეალს. გამოიყენეთ ეს მოდელის წარმადობის შესაფასებლად, AI პროვაიდერების შესადარებლად ან შესაძლებლობების პაკეტების production-ში გაშვებამდე დასადასტურებლად.

### სინოფსისი

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### პარამეტრები

| Option | აღწერა |
|---|---|
| `--question=<id>` | სრული ნაკრების ნაცვლად გაუშვით ერთი ბენჩმარკ-კითხვა ID-ის მიხედვით |
| `--provider=<provider>` | ამ გაშვებისთვის გადააწერეთ კონფიგურირებული AI პროვაიდერი (მაგ. `anthropic`, `openai`) |
| `--model=<model>` | ამ გაშვებისთვის გადააწერეთ კონფიგურირებული მოდელი (მაგ. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | გამოტანის ფორმატი: `table` (ნაგულისხმევი), `json`, `csv` |
| `--save` | შეინახეთ ბენჩმარკის შედეგები მონაცემთა ბაზაში ისტორიული შედარებისთვის |

### მაგალითები

გაუშვით სრული ბენჩმარკების ნაკრები მიმდინარე პროვაიდერითა და მოდელით:

```bash
wp gratis-ai-agent benchmark
```

გაუშვით ერთი კითხვა (`q-restaurant-website`) და გამოიტანეთ JSON-ად:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

გაუშვით კონკრეტული მოდელის წინააღმდეგ და შეინახეთ შედეგები:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### გამოტანა

ბენჩმარკი თითო კითხვაზე გამოიტანს ერთ სტრიქონს შემდეგი სვეტებით:

| სვეტი | აღწერა |
|---|---|
| `ID` | კითხვის იდენტიფიკატორი |
| `Description` | ბენჩმარკ-სცენარის მოკლე შეჯამება |
| `Score` | გავიდა/ვერ გავიდა ან რიცხვითი ქულა (0–100) |
| `Abilities Used` | გამოძახებული შესაძლებლობების მძიმით გამოყოფილი სია |
| `Tokens` | ჯამურად მოხმარებული ტოკენები |
| `Duration` | რეალური დრო წამებში |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### ბენჩმარკ-კითხვები

ნაგულისხმევი ნაკრები მოიცავს:

| ID | სცენარი |
|---|---|
| `q-portfolio-site` | შექმენით Portfolio CPT Project Category ტაქსონომიით და დაარეგისტრირეთ ბლოკის პატერნი |
| `q-restaurant-website` | ააგეთ სრული რესტორნის ვებსაიტი მენიუს CPT-ით, დაჯავშნის ფორმით და ნავიგაციით |
| `q-dark-mode-theme` | გამოიყენეთ dark-mode დიზაინის preset და ჩასვით ბრენდის ფერები |
| `q-nav-builder` | შექმენით ოთხპუნქტიანი მთავარი ნავიგაციის მენიუ ჩადგმული ჩამოსაშლელი მენიუთი |
| `q-options-roundtrip` | წაიკითხეთ, შეცვალეთ და აღადგინეთ WordPress-ის პარამეტრების ნაკრები |
| `q-ability-install` | აღმოაჩინეთ და დააინსტალირეთ ყველაზე შესაფერისი შესაძლებლობების პაკეტი აღწერილი გამოყენების შემთხვევისთვის |

დამატებითი კითხვების რეგისტრაცია შესაძლებელია `gratis_ai_agent_benchmark_questions` filter-ის მეშვეობით.

---

## `wp gratis-ai-agent abilities`

მართავს დაინსტალირებულ შესაძლებლობებსა და შესაძლებლობების პაკეტებს.

### `wp gratis-ai-agent abilities list`

აჩვენებს ყველა რეგისტრირებულ შესაძლებლობას, მათ წყაროს (ბირთვი ან პაკეტი) და მიმდინარე სტატუსს.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**პარამეტრები**

| Option | აღწერა |
|---|---|
| `--format=<format>` | გამოტანის ფორმატი: `table` (ნაგულისხმევი), `json`, `csv` |

**გამოტანის მაგალითი**

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

ჩამოტვირთავს და ააქტიურებს შესაძლებლობების პაკეტს registry-დან.

```bash
wp gratis-ai-agent abilities install <slug>
```

**არგუმენტები**

| Argument | აღწერა |
|---|---|
| `<slug>` | შესაძლებლობების პაკეტის plugin slug, მაგ. `gratis-ai-agent-woocommerce` |

**მაგალითი**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

გამორთავს კონკრეტულ შესაძლებლობას პაკეტის წაშლის გარეშე. სასარგებლოა მოცემულ საიტზე აგენტის მოქმედების არეალის შესაზღუდად.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**მაგალითი**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

ხელახლა ააქტიურებს ადრე გამორთულ შესაძლებლობას.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

აჩვენებს აგენტის მიმდინარე კონფიგურაციას და კავშირის სტატუსს.

```bash
wp gratis-ai-agent status
```

**გამოტანის მაგალითი**

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

აჩვენებს აგენტის ბოლო აქტივობას debug log-იდან.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**პარამეტრები**

| პარამეტრი | აღწერა |
|---|---|
| `--last=<n>` | აჩვენებს ბოლო N ჟურნალის ჩანაწერს. ნაგულისხმევი `50` |
| `--level=<level>` | ფილტრაცია დონის მიხედვით: `info`, `warning`, `error` |
| `--ability=<ability>` | ფილტრაცია ability-ის სახელის მიხედვით |

**მაგალითი**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

აღადგენს agent-ის მდგომარეობას: ასუფთავებს ინიექტირებულ CSS-ს, შლის agent-ის მიერ რეგისტრირებულ CPT-ებსა და ტაქსონომიებს, აღადგენს გლობალურ სტილებს და ცარიელებს agent-ის პარამეტრების ქეშს. არ შლის plugin-ს ან მის პარამეტრებს.

```bash
wp gratis-ai-agent reset [--yes]
```

დაამატეთ `--yes`, რათა გამოტოვოთ დადასტურების მოთხოვნა.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## გასვლის კოდები

ყველა ბრძანება წარმატების შემთხვევაში აბრუნებს `0`-ს. არანულოვანი გასვლის კოდები:

| კოდი | მნიშვნელობა |
|---|---|
| `1` | ზოგადი შეცდომა (იხილეთ შეცდომის შეტყობინება) |
| `2` | Provider-თან კავშირის შეფერხება |
| `3` | Ability ვერ მოიძებნა |
| `4` | Benchmark-ის კითხვა ვერ მოიძებნა |
