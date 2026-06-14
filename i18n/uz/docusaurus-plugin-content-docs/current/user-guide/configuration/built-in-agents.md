---
title: Ichkaridagi Agentlar
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# O'rnatilgan Agentlar

Gratis AI Agent v1.9.0 beshta o'rnatilgan agent bilan keladi, har biri aniq vazifalarga qaratilgan vositalar to'plami, moslashtirilgan tizim prompti va ushbu sohadagi keng tarqalgan vazifalar uchun tayyorlanish takliflari bilan oldindan sozlab berilgan. Agentlar orasida o'tish yordamchi dasturiy ta'minot konfiguratsiyasiz, lekin bu sizning asistent qanday harakat qilishini va qanday javob berishini o'zgartiradi.

## Agent nima?

Har bir agent — quyidagilarni birlashtirgan nomlangan sozlash profili:

- **Vositalar (Tools)** — agentga ishlatishga ruxsat berilgan imkoniyatlar (masalan, Kontent yozuvchisi post yaratish imkoniyatiga ega; Dizayn Studiyasi CSS va theme.json imkoniyatlariga ega).
- **Tizim prompti (System prompt)** — agentning ohangini, ustuvorliklarini va cheklovlarini belgilovchi ko'rsatmalar.
- **Takliflar (Suggestions)** — tez boshlashga yordam beradigan chat interfeysida ko'rsatiladigan oldindan yozilgan promptlar.

## Agent tanlovchidan foydalanish

1. WordPress admin panelining yon menyusidagi **Gratis AI Agent** paneli oching.
2. Chat sarlavhasi bo'ylab chap burchakdagi **agent ikonkasiga** bosing (ikon faol agentni aks ettiruvchi holatga o'zgaradi).
3. **Agent tanlovchisi (Agent Picker)** form-jadval qoplamasi sifatida ochiladi. Har bir agent uning ikonkasi, nomi va bir qatorli tavsifi bilan ro'yxatdan o'tadi.
4. Faollashtirish uchun agent qatoriga bosing. Chat sarlavhasi darhol yangilanadi.

Siz ham suhbat davomida agentlarni almashtirishingiz mumkin — yangi agentning tizim prompti keyingi xabarning ta'sirida ishga tushadi.

## Beshta o'rnatilgan agentlar

### Kontent yozuvchisi (Content Writer)

**E'tibor:** Postlar, sahifalar va aloqa shakllarini yaratish va tahrirlash.

**Mavjud vositalar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Nima qila oladi yaxshi:**
- Qisqacha ma'lumot yoki reja asosida blog postlarini tayyorlash va nashr etish
- Yangi sayt uchun landing page'lar to'plarini yaratish
- Kontakt va so'rov (enquiry) formlarini qurish

**Boshlanish takliflari:**
- *WordPress multisite foydalar haqida 500 so'zlik blog post yozing.*
- *About, Xizmatlar va Kontakt sahifasini yarating va nashr eting.*
- *Kontakt sahifasiga booking so'rovi formini qo'shing.*

---

### Site Builder (Sayt Quruvchi)

**E'tibor:** Bitta buyruq asosida butunlay sayt yaratish.

**Qo'llaniladigan vositalar:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Nima qila oladi yaxshi:**
- Tasvirlangan biznes turi uchun ko'p bosqichli sayt qurish rejasini yaratish
- Har bir bosqichni mustaqil ravishda bajarish — tuzilma, kontent, navigatsiya, dizayn
- Reja jarayonida qo'lda aralashish talab qilmayshdan xatoliklardan voz kechish
- Qurilish jarayonining bir qismi sifatida tavsiya etilgan pluginlarni o'rnatish
- Chat interfeysidan to'g'ridan-to'g'ri kontakt formlarini yaratish (Superdav AI Agent v1.10.0+)

**Boshlanish takliflari:**
- *Galereya post turi, booking sahifasi va kontakt formasi bilan rasmlar portfoliyasi saytini quring.*
- *Onlayn menyu, faollik va jadvallarni booking so'rovi formasi bilan restoran sayti yarating.*
- *Xizmat sahifalari, portfoli asoslari va blog bilan freelance maslahat beruvchi saytni sozlang.*
- *Site builder yordamida Kontakt sahifasiga kontakt formasi qo'shing.*

---

### Design Studio (Dizayn Studiyasi)

**E'tibor:** Vizual ko'zkorlik — ranglar, tipografiya, CSS va bloklar.

**Mavjud vositalar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nima uchun yaxshi:**
- Nomlangan tema presetlarini (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) qo'llash.
- Tema.json orqali global tipografiya va rang palitrasi sozlamalarini aniqlash.
- Brendga xos o'zgartirishlar uchun maxsus CSS injeksiya qilish.
- Sahifaning skrinshotini olish va dizayn muammolarini ko'rib chiqish.

**Boshlanish takliflari:**
- *Warm-editorial presetini qo'llang va keyin asosiy rangni #2d6a4f qilib belgilang.*
- *Homepage skrinshotini oling va nima yaxshilash kerakligini ayting.*
- *To'liq kenglikdagi fon rasmi va markazlashgan sarlavhaga ega qayta ishlatiladigan hero blok patternini yarating.*

---

### Plugin Manager (Plaginlar menejeri)

**E'tibor:** WordPress plaginlarini topish, o'rnatish va boshqarish.

**Mavjud vositalar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nima uchun yaxshi:**
- Tasvirlangan vaziyat uchun eng mos plaginni tavsiya qilish.
- Ro'yxatdan (registry) imkoniyat paketlarini o'rnatish.
- Mavjud imkoniyat katalogini kategori bo'yicha ko'rib chiqish.

**Boshlanish takliflari:**
- *Aboji ro'yxati uchun eng yaxshi plagin qaysi?*
- *WooCommerce imkoniyat paketini o'rnating.*
- *Mavjud barcha e-commerce imkoniyat paketlarini ko'rsating.*

---

### Support Assistant (Texnik yordamchi)

**E'tibor:** Sayt kontenti, sozlamalari va WordPress konfiguratsiyasi haqidagi savollarga javob berish.

**Mavjud vositalar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nima uchun u yaxshi ishlaydi:**
- Joriy sayt sozlamalarini va variantlarini tekshirish
- Saytdagi post turlari, taksonomiyalar va menyular qanday konfiguratsiya qilinganligini tushuntirish
- Jonli qiymatlarni o'qib, "bu sozlama nima qiladi?" degan savollarga javob berish
- O'zgarishlar kiritishdan oldin o'qiladigan diagnostika qatlami sifatida xizmat qilish

**Boshlanish takliflari:**
- *Bu saytda hozir qaysi pluginlar va sozlamalar faol?*
- *Saytdagi barcha qayd etilgan (registered) post turlarini ro'yxatlang.*
- *Qanday navigatsiya menyulari mavjud va ular qayerga taqsimlangan?*

---

## Agentlarni sozlash

Har bir ichki agentni `gratis_ai_agent_agents` filtri orqali kengaytirish yoki almashtirish mumkin.

### Mavjud agentga maxsus tizim prompt qo'shish

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Yangi agentni ro'yxatdan o'tkazish

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Post va sahifalarni qidiruv tizimlari uchun optimallashtiradi.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Siz SEO mutaxassisisiz. Kalit so'zlar optimallashtirish, meta tavsiflari va tuzilgan ma'lumotlarga e'tibor qiling.',
        'suggestions'   => [
            'Bosh sahifa sarlavhasi va meta tavsifini ko\'rib chiqing.',
            'Eng so'nggi beshta post uchun sarlavha teglarini yaxshilashni taklif qiling.',
        ],
    ];
    return $agents;
} );
```

Yangi agent filtrlash ishga tushgandan darhol Agent Picker'da paydo bo'ladi.

### O'rnatilgan agentni olib tashlash

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
