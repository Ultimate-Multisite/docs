---
title: WP-CLI տեղեկատու
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI տեղեկատու {#wp-cli-reference}

Gratis AI Agent-ը տրամադրում է `wp gratis-ai-agent` հրամանների ընտանիք՝ գործակալը բենչմարկ անելու, կարողությունները կառավարելու և հրամանային տողից գործակալի կարգավիճակը հարցնելու համար։ Բոլոր հրամանները պահանջում են WP-CLI 2.0 կամ ավելի բարձր։

## Տեղադրում {#installation}

WP-CLI հրամանները գրանցվում են ինքնաբար, երբ plugin-ը ակտիվ է։ Ստուգեք՝

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Գործարկում է գործակալի կարողությունների բենչմարկերի հավաքածուն՝ բարդ, բազմաքայլ հուշումների շարք, որը փորձարկում է կարողությունների ամբողջ մակերեսը։ Օգտագործեք սա մոդելի կատարողականը գնահատելու, AI մատակարարներին համեմատելու կամ կարողությունների փաթեթները production-ում ներդնելուց առաջ վավերացնելու համար։

### Համառոտ նկարագրություն {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Ընտրանքներ {#options}

| Ընտրանք | Նկարագրություն |
|---|---|
| `--question=<id>` | Գործարկել մեկ բենչմարկ հարց՝ ըստ ID-ի, ամբողջ հավաքածուի փոխարեն |
| `--provider=<provider>` | Վերագրել այս գործարկման համար կազմաձևված AI մատակարարին (օր.՝ `anthropic`, `openai`) |
| `--model=<model>` | Վերագրել այս գործարկման համար կազմաձևված մոդելը (օր.՝ `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ելքի ձևաչափ՝ `table` (լռելյայն), `json`, `csv` |
| `--save` | Պահպանել բենչմարկի արդյունքները տվյալների բազայում՝ պատմական համեմատության համար |

### Օրինակներ {#examples}

Գործարկել ամբողջ բենչմարկերի հավաքածուն ընթացիկ մատակարարով և մոդելով՝

```bash
wp gratis-ai-agent benchmark
```

Գործարկել մեկ հարց (`q-restaurant-website`) և ելքը տալ JSON ձևաչափով՝

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Գործարկել կոնկրետ մոդելի դեմ և պահպանել արդյունքները՝

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Ելք {#output}

Բենչմարկը յուրաքանչյուր հարցի համար արտածում է մեկ տող՝ հետևյալ սյունակներով՝

| Սյունակ | Նկարագրություն |
|---|---|
| `ID` | Հարցի նույնացուցիչ |
| `Description` | Բենչմարկի սցենարի կարճ ամփոփում |
| `Score` | Անցավ/չանցավ կամ թվային գնահատական (0–100) |
| `Abilities Used` | Կանչված կարողությունների՝ ստորակետերով բաժանված ցանկ |
| `Tokens` | Օգտագործված token-ների ընդհանուր քանակ |
| `Duration` | Իրական ժամանակը վայրկյաններով |

```
ID                       Նկարագրություն                     Գնահատական  Օգտագործված կարողություններ   Token-ներ  Տևողություն
q-portfolio-site         Ստեղծել պորտֆոլիոյի CPT՝ պիտակներով 100         register_post_type, reg...     4821       18.3s
q-restaurant-website     Կառուցել ամբողջական ռեստորանի կայք  92          create_site_plan, execut...    12430      54.1s
q-dark-mode-theme        Կիրառել մուգ թեմայի նախակազմ        100         apply_theme_json_preset        986        4.2s
...
```

### Բենչմարկի հարցեր {#benchmark-questions}

Լռելյայն հավաքածուն ներառում է՝

| ID | Սցենար |
|---|---|
| `q-portfolio-site` | Ստեղծել Portfolio CPT՝ Project Category դասակարգմամբ և գրանցել բլոկի pattern |
| `q-restaurant-website` | Կառուցել ամբողջական ռեստորանի կայք՝ մենյուի CPT-ով, ամրագրման ձևով և նավիգացիայով |
| `q-dark-mode-theme` | Կիրառել մուգ ռեժիմի դիզայնի նախակազմ և ներարկել բրենդային գույներ |
| `q-nav-builder` | Ստեղծել չորս տարրից բաղկացած հիմնական նավիգացիոն մենյու՝ ներդրված բացվող ցանկով |
| `q-options-roundtrip` | Կարդալ, փոփոխել և վերականգնել WordPress ընտրանքների հավաքածու |
| `q-ability-install` | Հայտնաբերել և տեղադրել նկարագրված օգտագործման դեպքի համար ամենահարմար կարողությունների փաթեթը |

Լրացուցիչ հարցերը կարելի է գրանցել `gratis_ai_agent_benchmark_questions` filter-ի միջոցով։

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Կառավարում է տեղադրված կարողությունները և կարողությունների փաթեթները։

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Ցուցադրում է բոլոր գրանցված կարողությունները, դրանց աղբյուրը (միջուկ կամ փաթեթ) և ընթացիկ կարգավիճակը։

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Ընտրանքներ**

| Ընտրանք | Նկարագրություն |
|---|---|
| `--format=<format>` | Ելքի ձևաչափ՝ `table` (լռելյայն), `json`, `csv` |

**Ելքի օրինակ**

```
Կարողություն              Աղբյուր                         Կարգավիճակ
register_post_type        gratis-ai-agent (միջուկ)         ակտիվ
list_post_types           gratis-ai-agent (միջուկ)         ակտիվ
delete_post_type          gratis-ai-agent (միջուկ)         ակտիվ
register_taxonomy         gratis-ai-agent (միջուկ)         ակտիվ
inject_custom_css         gratis-ai-agent (միջուկ)         ակտիվ
apply_theme_json_preset   gratis-ai-agent (միջուկ)         ակտիվ
create_product            gratis-ai-agent-woocommerce      ակտիվ
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Ներբեռնում և ակտիվացնում է կարողությունների փաթեթը registry-ից։

```bash
wp gratis-ai-agent abilities install <slug>
```

**Արգումենտներ**

| Արգումենտ | Նկարագրություն |
|---|---|
| `<slug>` | Կարողությունների փաթեթի plugin slug-ը, օր.՝ `gratis-ai-agent-woocommerce` |

**Օրինակ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Անջատում է կոնկրետ կարողություն՝ առանց փաթեթը հեռացնելու։ Օգտակար է տվյալ կայքում գործակալի շրջանակը սահմանափակելու համար։

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Օրինակ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Կրկին միացնում է նախկինում անջատված կարողությունը։

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ցուցադրում է գործակալի ընթացիկ կազմաձևը և կապակցման կարգավիճակը։

```bash
wp gratis-ai-agent status
```

**Ելքի օրինակ**

```
Plugin-ի տարբերակ:        1.4.0
AI մատակարար:             Anthropic
Մոդել:                    claude-sonnet-4-6
Մատակարարի կարգավիճակ:    Միացված
Բեռնված կարողություններ:  24
Բենչմարկի արդյունքներ:    3 պահպանված գործարկում (վերջինը՝ 2026-04-15)
Ընտրանքների արգելացանկ:   18 գրառում
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Ցուցադրում է debug log-ից գործակալի վերջին ակտիվությունը։

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Ընտրանքներ**

| Տարբերակ | Նկարագրություն |
|---|---|
| `--last=<n>` | Ցույց տալ վերջին N մատյանի գրառումները։ Լռելյայն՝ `50` |
| `--level=<level>` | Զտել ըստ մակարդակի՝ `info`, `warning`, `error` |
| `--ability=<ability>` | Զտել ըստ կարողության անվան |

**Օրինակ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Վերակայում է գործակալի վիճակը՝ մաքրում է ներարկված CSS-ը, հեռացնում է գործակալի գրանցած CPT-ներն ու տաքսոնոմիաները, վերակայում է գլոբալ ոճերը և դատարկում է գործակալի ընտրանքների քեշը։ Չի հեռացնում plugin-ը կամ դրա կարգավորումները։

```bash
wp gratis-ai-agent reset [--yes]
```

Ավելացրեք `--yes`՝ հաստատման հուշումը բաց թողնելու համար։

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Ելքի կոդեր {#exit-codes}

Բոլոր հրամանները հաջողության դեպքում ավարտվում են `0` կոդով։ Ոչ զրոյական ելքի կոդեր՝

| Կոդ | Նշանակություն |
|---|---|
| `1` | Ընդհանուր սխալ (տե՛ս սխալի հաղորդագրությունը) |
| `2` | Մատակարարի կապի խափանում |
| `3` | Կարողությունը չի գտնվել |
| `4` | Benchmark-ի հարցը չի գտնվել |
