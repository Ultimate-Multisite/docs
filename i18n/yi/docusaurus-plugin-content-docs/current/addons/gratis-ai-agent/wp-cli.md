---
title: WP-CLI רעפֿערענץ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI רעפֿערענץ

Gratis AI Agent קומט מיט אַ `wp gratis-ai-agent` באַפֿעלן־משפּחה פֿאַר דורכפֿירן בענטשמאַרקס אויפֿן אַגענט, פֿאַרוואַלטן פֿעיִקייטן, און נאָכפֿרעגן אַגענט־סטאַטוס פֿון דער באַפֿעלן־שורה. אַלע באַפֿעלן דאַרפֿן WP-CLI 2.0 אָדער העכער.

## אינסטאַלירונג {#installation}

די WP-CLI באַפֿעלן ווערן רעגיסטרירט אויטאָמאַטיש ווען דער plugin איז אַקטיוו. באַשטעטיקט מיט:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

לויפֿט די אַגענט־פֿעיִקייטן בענטשמאַרק־סוויט — אַ זאַמלונג קאָמפּליצירטע, מאַלטי־שריט פּראָמפּטן וואָס פּרוּוון אויס דעם גאַנצן פֿעיִקייטן־אומפֿאַנג. ניצט דאָס צו אָפּשאַצן מאָדעל־פֿאָרשטעלונג, פֿאַרגלייכן AI־פּראָוויידערס, אָדער וואַלידירן פֿעיִקייטן־פּעקלעך איידער אַרויסשטעלן אין פּראָדוקציע.

### סינאָפּסיס {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### אָפּציעס {#options}

| אָפּציע | באַשרײַבונג |
|---|---|
| `--question=<id>` | לויף איין בענטשמאַרק־פֿראַגע לויט ID אַנשטאָט דער גאַנצער סוויט |
| `--provider=<provider>` | איבערשרײַב דעם קאָנפֿיגורירטן AI־פּראָוויידער פֿאַר דעם לויף (למשל `anthropic`, `openai`) |
| `--model=<model>` | איבערשרײַב דעם קאָנפֿיגורירטן מאָדעל פֿאַר דעם לויף (למשל `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | אַרויסגאַנג־פֿאָרמאַט: `table` (פעליקייַט), `json`, `csv` |
| `--save` | היט די בענטשמאַרק־רעזולטאַטן אין דער דאַטאַבאַזע פֿאַר היסטאָרישן פֿאַרגלײַך |

### בײַשפּילן {#examples}

לויף די גאַנצע בענטשמאַרק־סוויט מיטן איצטיקן פּראָוויידער און מאָדעל:

```bash
wp gratis-ai-agent benchmark
```

לויף איין פֿראַגע (`q-restaurant-website`) און גיב אַרויס ווי JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

לויף קעגן אַ ספּעציפֿישן מאָדעל און היט רעזולטאַטן:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### אַרויסגאַנג {#output}

דער בענטשמאַרק גיט אַרויס איין ריי פּער פֿראַגע מיט די ווײַטערדיקע זיילן:

| זייל | באַשרײַבונג |
|---|---|
| `ID` | פֿראַגע־אידענטיפֿיקאַטאָר |
| `Description` | קורצע קיצער פֿון דעם בענטשמאַרק־סצענאַר |
| `Score` | דורכגאַנג/דורכפֿאַל אָדער נומערישער ציון (0–100) |
| `Abilities Used` | מיט קאָמעס אָפּגעטיילטע רשימה פֿון אויפֿגערופֿענע פֿעיִקייטן |
| `Tokens` | גאַנץ צאָל געניצטע טאָקענס |
| `Duration` | וואַנט־זייגער צײַט אין סעקונדעס |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### בענטשמאַרק־פֿראַגעס {#benchmark-questions}

די פעליקייַט־סוויט נעמט אַרײַן:

| ID | סצענאַר |
|---|---|
| `q-portfolio-site` | שאַף אַ פּאָרטפֿאָליאָ CPT מיט אַ פּראָיעקט־קאַטעגאָריע טאַקסאָנאָמיע און רעגיסטריר אַ בלאָק־מוסטער |
| `q-restaurant-website` | בוי אַ גאַנצע רעסטאָראַן־וועבזײַט מיט אַ מעניו CPT, בוקינג־פֿאָרעם, און נאַוויגאַציע |
| `q-dark-mode-theme` | לייג אָן אַ טונקל־מאָדוס פּלאַן־פּרעסעט און שפּריץ אַרײַן בראַנד־קאָלירן |
| `q-nav-builder` | שאַף אַ פיר־אײַטעמדיקע הויפּט־נאַוויגאַציע־מעניו מיט אַ פֿאַרנעסטיקן אַראָפּפֿאַל |
| `q-options-roundtrip` | ליין, ענדער, און שטעל צוריק אַ זאַמלונג WordPress אָפּציעס |
| `q-ability-install` | אַנטדעק און אינסטאַליר דעם מערסט פּאַסיקן פֿעיִקייטן־פּעקל פֿאַר אַ באַשריבן ניצונג־פֿאַל |

נאָך פֿראַגעס קענען ווערן רעגיסטרירט דורך דעם `gratis_ai_agent_benchmark_questions` פֿילטער.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

פֿאַרוואַלט אינסטאַלירטע פֿעיִקייטן און פֿעיִקייטן־פּעקלעך.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

ווײַזט אַלע רעגיסטרירטע פֿעיִקייטן, זייער מקור (קערן אָדער פּעקל), און זייער איצטיקן סטאַטוס.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**אָפּציעס**

| אָפּציע | באַשרײַבונג |
|---|---|
| `--format=<format>` | אַרויסגאַנג־פֿאָרמאַט: `table` (פעליקייַט), `json`, `csv` |

**בײַשפּיל־אַרויסגאַנג**

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

לאָדט אַראָפּ און אַקטיוויזירט אַ פֿעיִקייטן־פּעקל פֿון דעם רעגיסטרי.

```bash
wp gratis-ai-agent abilities install <slug>
```

**אַרגומענטן**

| אַרגומענט | באַשרײַבונג |
|---|---|
| `<slug>` | Plugin־שלאָג פֿון דעם פֿעיִקייטן־פּעקל, למשל `gratis-ai-agent-woocommerce` |

**בײַשפּיל**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

דיסייבלט אַ ספּעציפֿישע פֿעיִקייט אָן צו באַזײַטיקן דעם פּעקל. נוצלעך פֿאַר באַגרענעצן דעם אַגענטס אומפֿאַנג אויף אַ געוויסער וועבזײַט.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**בײַשפּיל**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

אַקטיוויזירט ווידער אַ פֿריִער דיסייבלטע פֿעיִקייט.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

ווײַזט די איצטיקע אַגענט־קאָנפֿיגוראַציע און פֿאַרבינדונג־סטאַטוס.

```bash
wp gratis-ai-agent status
```

**בײַשפּיל־אַרויסגאַנג**

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

ווײַזט לעצטע אַגענט־אַקטיוויטעט פֿון דעם דעבאַג־לאָג.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**אָפּציעס**

| אָפּציע | באַשרײַבונג |
|---|---|
| `--last=<n>` | ווײַז די לעצטע N לאָג־אײַנטראָגן. פעליקייַט `50` |
| `--level=<level>` | פֿילטריר לויט מדרגה: `info`, `warning`, `error` |
| `--ability=<ability>` | פֿילטריר לויט פֿעיִקייט־נאָמען |

**בײַשפּיל**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

שטעלט צוריק אַגענט־צושטאַנד: רייניקט אויס אַרײַנגעשפּריצטן CSS, באַזײַטיקט אַגענט־רעגיסטרירטע CPTs און טאַקסאָנאָמיעס, שטעלט צוריק גלאבאַלע סטילן, און ליידיקט דעם אַגענטס אָפּציעס־קאַש. באַזײַטיקט נישט דעם plugin אָדער זײַנע סעטינגס.

```bash
wp gratis-ai-agent reset [--yes]
```

לייג צו `--yes` צו איבערשפּרינגען דעם באַשטעטיקונג־פּראָמפּט.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## אַרויסגאַנג־קאָדן {#exit-codes}

אַלע באַפֿעלן גייען אַרויס מיט `0` בײַ הצלחה. נישט־נול אַרויסגאַנג־קאָדן:

| קאָד | באַדײַטונג |
|---|---|
| `1` | אַלגעמיינער פֿעלער (זע פֿעלער־מעלדונג) |
| `2` | פּראָוויידער־פֿאַרבינדונג דורכפֿאַל |
| `3` | פֿעיִקייט נישט געפֿונען |
| `4` | בענטשמאַרק־פֿראַגע נישט געפֿונען |
