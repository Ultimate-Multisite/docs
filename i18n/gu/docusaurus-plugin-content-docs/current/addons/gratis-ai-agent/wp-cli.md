---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI સંદર્ભ

Gratis AI Agent એ એજન્ટનું બેન્ચમાર્કિંગ કરવા, ક્ષમતાઓ (abilities)નું સંચાલન કરવા અને કમાન્ડ લાઇનમાંથી એજન્ટની સ્થિતિ (status)ની પૂછપરછ કરવા માટે `wp gratis-ai-agent` કમાન્ડ ફેમિલી પ્રદાન કરે છે. બધા કમાન્ડ્સને WP-CLI 2.0 અથવા તેનાથી ઉપરના વર્ઝનની જરૂર છે.

## ઇન્સ્ટોલેશન (Installation)

પ્લગઇન એક્ટિવ થતાં જ WP-CLI કમાન્ડ્સ આપોઆપ રજીસ્ટર થઈ જાય છે. નીચેના કમાન્ડથી ચકાસણી કરો:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

એજન્ટ ક્ષમતાઓ બેન્ચમાર્ક સ્યુટ (Agent Capabilities benchmark suite) ચલાવે છે — જે જટિલ, બહુ-પગલાંવાળા પ્રોમ્પ્ટ્સનો સમૂહ છે જે સંપૂર્ણ ક્ષમતાની રેન્જનું પરીક્ષણ કરે છે. આનો ઉપયોગ મોડેલની કામગીરીનું મૂલ્યાંકન કરવા, AI પ્રોવાઇડર્સની તુલના કરવા, અથવા પ્રોડક્શનમાં ડિપ્લોય કરતા પહેલા ક્ષમતા પેક્સને માન્ય કરવા માટે કરો.

### સંક્ષિપ્તમાં (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### વિકલ્પો (Options)

| વિકલ્પ (Option) | વર્ણન (Description) |
|---|---|
| `--question=<id>` | સંપૂર્ણ સ્યુટને બદલે ID દ્વારા એક જ બેન્ચમાર્ક પ્રશ્ન ચલાવો |
| `--provider=<provider>` | આ રન માટે કન્ફિગર કરેલ AI પ્રોવાઇડરને ઓવરરાઇડ કરો (દા.ત. `anthropic`, `openai`) |
| `--model=<model>` | આ રન માટે કન્ફિગર કરેલ મોડેલને ઓવરરાઇડ કરો (દા.ત. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | આઉટપુટ ફોર્મેટ: `table` (ડિફોલ્ટ), `json`, `csv` |
| `--save` | ઐતિહાસિક સરખામણી માટે બેન્ચમાર્ક પરિણામોને ડેટાબેઝમાં સેવ કરો |

### ઉદાહરણો (Examples)

વર્તમાન પ્રોવાઇડર અને મોડેલ સાથે સંપૂર્ણ બેન્ચમાર્ક સ્યુટ ચલાવો:

```bash
wp gratis-ai-agent benchmark
```

એક જ પ્રશ્ન (`q-restaurant-website`) ચલાવો અને JSON તરીકે આઉટપુટ કરો:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ચોક્કસ મોડેલ સામે ચલાવો અને પરિણામો સેવ કરો:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### આઉટપુટ (Output)

બેન્ચમાર્ક દરેક પ્રશ્ન માટે એક રો (row) આ કૉલમ્સ સાથે આઉટપુટ કરે છે:

| કૉલમ (Column) | વર્ણન (Description) |
|---|---|
| `ID` | પ્રશ્ન ઓળખકર્તા (Question identifier) |
| `Description` | બેન્ચમાર્ક દૃશ્યનો ટૂંકો સારાંશ |
| `Score` | પાસ/ફેલ અથવા સંખ્યાત્મક સ્કોર (0–100) |
| `Abilities Used` | ઉપયોગમાં લેવાયેલી ક્ષમતાઓ (comma-separated list) |
| `Tokens` | વપરાયેલા કુલ ટોકન્સ |
| `Duration` | સેકન્ડમાં વોલ-ક્લોક સમય |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### બેન્ચમાર્ક પ્રશ્નો (Benchmark Questions)

ડિફોલ્ટ સ્યુટમાં શામેલ છે:

| ID | દૃશ્ય (Scenario) |
|---|---|
| `q-portfolio-site` | પ્રોજેક્ટ કેટેગરી ટેક્સોનોમી સાથે પોર્ટફોલિયો CPT બનાવો અને બ્લોક પેટર્ન રજીસ્ટર કરો |
| `q-restaurant-website` | મેનુ CPT, બુકિંગ ફોર્મ અને નેવિગેશન સાથે સંપૂર્ણ રેસ્ટોરન્ટ વેબસાઇટ બનાવો |
| `q-dark-mode-theme` | ડાર્ક-મોડ ડિઝાઇન પ્રીસેટ લાગુ કરો અને બ્રાન્ડ કલર્સ ઇન્જેક્ટ કરો |
| `q-nav-builder` | નેસ્ટેડ ડ્રોપડાઉન સાથે ચાર-આઇટમનું પ્રાથમિક નેવિગેશન મેનુ બનાવો |
| `q-options-roundtrip` | WordPress વિકલ્પોના સેટને વાંચો, સુધારો અને પુનઃસ્થાપિત કરો |
| `q-ability-install` | વર્ણવેલ ઉપયોગના કિસ્સા માટે સૌથી યોગ્ય ક્ષમતા પેક શોધો અને ઇન્સ્ટોલ કરો |

વધારાના પ્રશ્નો `gratis_ai_agent_benchmark_questions` ફિલ્ટર દ્વારા રજીસ્ટર કરી શકાય છે.

---

## `wp gratis-ai-agent abilities`

ઇન્સ્ટોલ કરેલી ક્ષમતાઓ (abilities) અને ક્ષમતા પેક્સનું સંચાલન કરે છે.

### `wp gratis-ai-agent abilities list`

રજીસ્ટર થયેલી તમામ ક્ષમતાઓ, તેમના સ્ત્રોત (core અથવા pack), અને તેમની વર્તમાન સ્થિતિની યાદી આપે છે.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**વિકલ્પો (Options)**

| વિકલ્પ (Option) | વર્ણન (Description) |
|---|---|
| `--format=<format>` | આઉટપુટ ફોર્મેટ: `table` (ડિફોલ્ટ), `json`, `csv` |

**ઉદાહરણ આઉટપુટ (Example output)**

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

રેજિસ્ટ્રીમાંથી એક ક્ષમતા પેક ડાઉનલોડ કરે છે અને એક્ટિવેટ કરે છે.

```bash
wp gratis-ai-agent abilities install <slug>
```

**આર્ગ્યુમેન્ટ્સ (Arguments)**

| આર્ગ્યુમેન્ટ (Argument) | વર્ણન (Description) |
|---|---|
| `<slug>` | ક્ષમતા પેકનો પ્લગઇન સ્લગ, દા.ત. `gratis-ai-agent-woocommerce` |

**ઉદાહરણ (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

પેકને દૂર કર્યા વિના ચોક્કસ ક્ષમતાને ડિસેબલ કરે છે. આ કોઈ ચોક્કસ સાઇટ પર એજન્ટના સ્કોપને મર્યાદિત કરવા માટે ઉપયોગી છે.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ઉદાહરણ (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

પહેલા ડિસેબલ થયેલી ક્ષમતાને ફરીથી એનેબલ કરે છે.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

વર્તમાન એજન્ટ કન્ફિગરેશન અને કનેક્ટિવિટી સ્ટેટસ દર્શાવે છે.

```bash
wp gratis-ai-agent status
```

**ઉદાહરણ આઉટપુટ (Example output)**

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

ડીબગ લોગમાંથી તાજેતરની એજન્ટ પ્રવૃત્તિ દર્શાવે છે.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**વિકલ્પો (Options)**

| વિકલ્પ (Option) | વર્ણન (Description) |
|---|---|
| `--last=<n>` | છેલ્લા N લોગ એન્ટ્રીઓ બતાવો. ડિફોલ્ટ `50` |
| `--level=<level>` | લેવલ દ્વારા ફિલ્ટર કરો: `info`, `warning`, `error` |
| `--ability=<ability>` | ક્ષમતાના નામ દ્વારા ફિલ્ટર કરો |

**ઉદાહરણ (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

એજન્ટની સ્થિતિને રીસેટ કરે છે: ઇન્જેક્ટ કરેલ CSS સાફ કરે છે, એજન્ટ-રજીસ્ટર્ડ CPTs અને ટેક્સોનોમીને દૂર કરે છે, ગ્લોબલ સ્ટાઇલને રીસેટ કરે છે, અને એજન્ટના વિકલ્પો કેશને ખાલી કરે છે. તે પ્લગઇન અથવા તેની સેટિંગ્સને દૂર કરતું નથી.

```bash
wp gratis-ai-agent reset [--yes]
```

કોન્ફર્મેશન પ્રોમ્પ્ટને છોડવા માટે `--yes` ઉમેરો.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

બધા કમાન્ડ્સ સફળતા પર `0` એક્ઝિટ કરે છે. નોન-ઝીરો એક્ઝિટ કોડ્સ:

| કોડ (Code) | અર્થ (Meaning) |
|---|---|
| `1` | સામાન્ય ભૂલ (error message જુઓ) |
| `2` | પ્રોવાઇડર કનેક્ટિવિટી નિષ્ફળતા |
| `3` | ક્ષમતા મળી નથી (Ability not found) |
| `4` | બેન્ચમાર્ક પ્રશ્ન મળી નથી (Benchmark question not found) |
