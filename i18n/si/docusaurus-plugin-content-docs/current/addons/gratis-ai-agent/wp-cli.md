---
title: WP-CLI යොමුව
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI යොමුව

Gratis AI Agent හි `wp gratis-ai-agent` විධාන පවුලක් ඇතුළත් වේ. ඒවා agent එක benchmark කිරීම, හැකියාවන් කළමනාකරණය කිරීම, සහ විධාන රේඛාවෙන් agent තත්ත්වය විමසීම සඳහාය. සියලු විධාන සඳහා WP-CLI 2.0 හෝ ඉහළ අනුවාදයක් අවශ්‍ය වේ.

## ස්ථාපනය {#installation}

plugin එක සක්‍රිය වූ විට WP-CLI විධාන ස්වයංක්‍රීයව ලියාපදිංචි වේ. මෙසේ සත්‍යාපනය කරන්න:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities benchmark කට්ටලය ධාවනය කරයි — සම්පූර්ණ හැකියා පරාසය පරීක්ෂා කරන සංකීර්ණ, බහු-පියවර prompts එකතුවකි. මොඩල් කාර්යසාධනය ඇගයීමට, AI සපයන්නන් සැසඳීමට, හෝ නිෂ්පාදන පරිසරයට යෙදීමට පෙර හැකියා pack වලංගු කිරීමට මෙය භාවිත කරන්න.

### සාරාංශය {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### විකල්ප {#options}

| විකල්පය | විස්තරය |
|---|---|
| `--question=<id>` | සම්පූර්ණ කට්ටලය වෙනුවට ID අනුව එක් benchmark ප්‍රශ්නයක් ධාවනය කරන්න |
| `--provider=<provider>` | මෙම ධාවනය සඳහා සකසා ඇති AI සපයන්නා අභිබවා යන්න (උදා. `anthropic`, `openai`) |
| `--model=<model>` | මෙම ධාවනය සඳහා සකසා ඇති මොඩල් එක අභිබවා යන්න (උදා. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | ප්‍රතිදාන ආකෘතිය: `table` (පෙරනිමි), `json`, `csv` |
| `--save` | ඉතිහාසමය සැසඳීම සඳහා benchmark ප්‍රතිඵල database එකට සුරකින්න |

### උදාහරණ {#examples}

වත්මන් සපයන්නා සහ මොඩල් එක සමඟ සම්පූර්ණ benchmark කට්ටලය ධාවනය කරන්න:

```bash
wp gratis-ai-agent benchmark
```

එක් ප්‍රශ්නයක් (`q-restaurant-website`) ධාවනය කර JSON ලෙස ප්‍රතිදානය කරන්න:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

නිශ්චිත මොඩල් එකකට එරෙහිව ධාවනය කර ප්‍රතිඵල සුරකින්න:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### ප්‍රතිදානය {#output}

benchmark එක පහත තීරු සමඟ එක් ප්‍රශ්නයකට එක් පේළියක් ප්‍රතිදානය කරයි:

| තීරුව | විස්තරය |
|---|---|
| `ID` | ප්‍රශ්න හැඳුනුම්කාරකය |
| `Description` | benchmark සිද්ධි තත්ත්වයේ කෙටි සාරාංශය |
| `Score` | සමත්/අසමත් හෝ සංඛ්‍යාත්මක ලකුණ (0–100) |
| `Abilities Used` | කැඳවූ හැකියාවන්ගේ කොමා-වෙන්කළ ලැයිස්තුව |
| `Tokens` | පරිභෝජනය කළ මුළු tokens ගණන |
| `Duration` | තත්පර වලින් wall-clock කාලය |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark ප්‍රශ්න {#benchmark-questions}

පෙරනිමි කට්ටලයට ඇතුළත් වන්නේ:

| ID | සිද්ධි තත්ත්වය |
|---|---|
| `q-portfolio-site` | Project Category taxonomy එකක් සමඟ Portfolio CPT එකක් සාදා block pattern එකක් ලියාපදිංචි කරන්න |
| `q-restaurant-website` | menu CPT එකක්, booking form එකක්, සහ navigation සමඟ සම්පූර්ණ restaurant website එකක් ගොඩනඟන්න |
| `q-dark-mode-theme` | dark-mode සැලසුම් preset එකක් යොදා brand වර්ණ ඇතුළත් කරන්න |
| `q-nav-builder` | nested dropdown එකක් සහිත අයිතම හතරක primary navigation menu එකක් සාදන්න |
| `q-options-roundtrip` | WordPress options කට්ටලයක් කියවා, වෙනස් කර, නැවත ප්‍රතිස්ථාපනය කරන්න |
| `q-ability-install` | විස්තර කළ භාවිත අවස්ථාවකට වඩාත් සුදුසු හැකියා pack එක සොයා ස්ථාපනය කරන්න |

අමතර ප්‍රශ්න `gratis_ai_agent_benchmark_questions` filter හරහා ලියාපදිංචි කළ හැක.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ස්ථාපිත හැකියාවන් සහ හැකියා pack කළමනාකරණය කරයි.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

ලියාපදිංචි සියලු හැකියාවන්, ඒවායේ මූලාශ්‍රය (core හෝ pack), සහ වත්මන් තත්ත්වය ලැයිස්තුගත කරයි.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**විකල්ප**

| විකල්පය | විස්තරය |
|---|---|
| `--format=<format>` | ප්‍රතිදාන ආකෘතිය: `table` (පෙරනිමි), `json`, `csv` |

**උදාහරණ ප්‍රතිදානය**

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

registry එකෙන් හැකියා pack එකක් බාගත කර සක්‍රිය කරයි.

```bash
wp gratis-ai-agent abilities install <slug>
```

**තර්ක**

| තර්කය | විස්තරය |
|---|---|
| `<slug>` | හැකියා pack එකේ Plugin slug, උදා. `gratis-ai-agent-woocommerce` |

**උදාහරණය**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

pack එක ඉවත් නොකර නිශ්චිත හැකියාවක් අක්‍රිය කරයි. ලබා දී ඇති අඩවියක agent පරාසය සීමා කිරීමට ප්‍රයෝජනවත් වේ.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**උදාහරණය**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

පෙර අක්‍රිය කළ හැකියාවක් නැවත සක්‍රිය කරයි.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

වත්මන් agent වින්‍යාසය සහ සම්බන්ධතා තත්ත්වය පෙන්වයි.

```bash
wp gratis-ai-agent status
```

**උදාහරණ ප්‍රතිදානය**

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

debug log එකෙන් නවතම agent ක්‍රියාකාරකම් පෙන්වයි.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**විකල්ප**

| විකල්පය | විස්තරය |
|---|---|
| `--last=<n>` | අවසන් N ලොග් ඇතුළත් කිරීම් පෙන්වයි. පෙරනිමිය `50` |
| `--level=<level>` | මට්ටම අනුව පෙරන්න: `info`, `warning`, `error` |
| `--ability=<ability>` | හැකියාවේ නාමය අනුව පෙරන්න |

**උදාහරණය**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

agent තත්ත්වය යළි සකසයි: ඇතුළත් කළ CSS හිස් කරයි, agent-ලියාපදිංචි කළ CPTs සහ taxonomies ඉවත් කරයි, ගෝලීය styles යළි සකසයි, සහ agent හි options cache හිස් කරයි. plugin හෝ එහි settings ඉවත් නොකරයි.

```bash
wp gratis-ai-agent reset [--yes]
```

තහවුරු කිරීමේ prompt මඟහැරීමට `--yes` එකතු කරන්න.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## පිටවීමේ කේත {#exit-codes}

සියලු commands සාර්ථක වූ විට `0` ලෙස පිටවෙයි. ශූන්‍ය නොවන පිටවීමේ කේත:

| කේතය | අර්ථය |
|---|---|
| `1` | සාමාන්‍ය දෝෂය (දෝෂ පණිවිඩය බලන්න) |
| `2` | Provider සම්බන්ධතා අසාර්ථක වීම |
| `3` | හැකියාව හමු නොවීය |
| `4` | Benchmark ප්‍රශ්නය හමු නොවීය |
