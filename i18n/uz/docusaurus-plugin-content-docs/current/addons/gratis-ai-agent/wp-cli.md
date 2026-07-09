---
title: WP-CLI ma’lumotnomasi
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ma’lumotnomasi

Gratis AI Agent agentni benchmark qilish, qobiliyatlarni boshqarish va agent holatini buyruq qatoridan so‘rash uchun `wp gratis-ai-agent` buyruqlar oilasi bilan birga keladi. Barcha buyruqlar WP-CLI 2.0 yoki undan yuqori versiyani talab qiladi.

## O‘rnatish

WP-CLI buyruqlari plugin faol bo‘lganda avtomatik ro‘yxatdan o‘tkaziladi. Quyidagicha tekshiring:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Agent Capabilities benchmark to‘plamini ishga tushiradi — bu to‘liq qobiliyat yuzasini sinovdan o‘tkazadigan murakkab, ko‘p bosqichli promptlar to‘plami. Bundan model unumdorligini baholash, AI provayderlarini solishtirish yoki qobiliyat paketlarini production muhitiga joylashdan oldin tasdiqlash uchun foydalaning.

### Sinopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Variantlar

| Variant | Tavsif |
|---|---|
| `--question=<id>` | To‘liq to‘plam o‘rniga ID bo‘yicha bitta benchmark savolini ishga tushiring |
| `--provider=<provider>` | Ushbu ishga tushirish uchun sozlangan AI provayderini almashtiring (masalan, `anthropic`, `openai`) |
| `--model=<model>` | Ushbu ishga tushirish uchun sozlangan modelni almashtiring (masalan, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Chiqish formati: `table` (standart), `json`, `csv` |
| `--save` | Tarixiy solishtirish uchun benchmark natijalarini ma’lumotlar bazasiga saqlang |

### Misollar

To‘liq benchmark to‘plamini joriy provayder va model bilan ishga tushiring:

```bash
wp gratis-ai-agent benchmark
```

Bitta savolni (`q-restaurant-website`) ishga tushiring va JSON sifatida chiqaring:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Muayyan modelga qarshi ishga tushiring va natijalarni saqlang:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Chiqish

Benchmark har bir savol uchun quyidagi ustunlar bilan bitta qator chiqaradi:

| Ustun | Tavsif |
|---|---|
| `ID` | Savol identifikatori |
| `Description` | Benchmark ssenariysining qisqa xulosasi |
| `Score` | O‘tdi/o‘tmadi yoki raqamli ball (0–100) |
| `Abilities Used` | Chaqirilgan qobiliyatlarning vergul bilan ajratilgan ro‘yxati |
| `Tokens` | Sarflangan jami tokenlar |
| `Duration` | Sekundlardagi real vaqt davomiyligi |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark savollari

Standart to‘plam quyidagilarni o‘z ichiga oladi:

| ID | Ssenariy |
|---|---|
| `q-portfolio-site` | Project Category taksonomiyasi bilan Portfolio CPT yarating va block pattern ro‘yxatdan o‘tkazing |
| `q-restaurant-website` | Menyu CPT, bron qilish formasi va navigatsiya bilan to‘liq restoran veb-saytini yarating |
| `q-dark-mode-theme` | Dark-mode dizayn presetini qo‘llang va brend ranglarini kiriting |
| `q-nav-builder` | Ichma-ich dropdown bilan to‘rt elementli asosiy navigatsiya menyusini yarating |
| `q-options-roundtrip` | WordPress sozlamalari to‘plamini o‘qing, o‘zgartiring va tiklang |
| `q-ability-install` | Tavsiflangan foydalanish holati uchun eng mos qobiliyat paketini toping va o‘rnating |

Qo‘shimcha savollar `gratis_ai_agent_benchmark_questions` filtri orqali ro‘yxatdan o‘tkazilishi mumkin.

---

## `wp gratis-ai-agent abilities`

O‘rnatilgan qobiliyatlar va qobiliyat paketlarini boshqaradi.

### `wp gratis-ai-agent abilities list`

Barcha ro‘yxatdan o‘tgan qobiliyatlarni, ularning manbasini (yadro yoki paket) va joriy holatini ro‘yxatlaydi.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Variantlar**

| Variant | Tavsif |
|---|---|
| `--format=<format>` | Chiqish formati: `table` (standart), `json`, `csv` |

**Namuna chiqish**

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

Registry’dan qobiliyat paketini yuklab oladi va faollashtiradi.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentlar**

| Argument | Tavsif |
|---|---|
| `<slug>` | Qobiliyat paketining plugin slugi, masalan `gratis-ai-agent-woocommerce` |

**Misol**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Paketni olib tashlamasdan muayyan qobiliyatni o‘chiradi. Berilgan saytda agent doirasini cheklash uchun foydali.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Misol**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Avval o‘chirilgan qobiliyatni qayta yoqadi.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Joriy agent konfiguratsiyasi va ulanish holatini ko‘rsatadi.

```bash
wp gratis-ai-agent status
```

**Namuna chiqish**

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

Debug log’dan agentning so‘nggi faoliyatini ko‘rsatadi.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Variantlar**

| Variant | Tavsif |
|---|---|
| `--last=<n>` | Oxirgi N ta jurnal yozuvlarini ko‘rsatish. Standart `50` |
| `--level=<level>` | Daraja bo‘yicha filtrlash: `info`, `warning`, `error` |
| `--ability=<ability>` | Ability nomi bo‘yicha filtrlash |

**Misol**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Agent holatini tiklaydi: kiritilgan CSS’ni tozalaydi, agent ro‘yxatdan o‘tkazgan CPT va taksonomiyalarni olib tashlaydi, global uslublarni tiklaydi va agentning options keshini bo‘shatadi. Plugin yoki uning sozlamalarini olib tashlamaydi.

```bash
wp gratis-ai-agent reset [--yes]
```

Tasdiqlash so‘rovini o‘tkazib yuborish uchun `--yes` qo‘shing.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Chiqish kodlari

Barcha buyruqlar muvaffaqiyatli bajarilganda `0` bilan chiqadi. Nol bo‘lmagan chiqish kodlari:

| Kod | Ma’nosi |
|---|---|
| `1` | Umumiy xato (xato xabariga qarang) |
| `2` | Provayder ulanishidagi nosozlik |
| `3` | Ability topilmadi |
| `4` | Benchmark savoli topilmadi |
