---
title: Ichki o‘rnatilgan agentlar
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ichki agentlar

Gratis AI Agent v1.9.0 beshta ichki agent bilan keladi; ularning har biri muayyan vositalar to‘plami, moslashtirilgan tizim prompti va shu sohadagi keng tarqalgan vazifalarga mos boshlang‘ich takliflar bilan oldindan sozlangan. Agentlar o‘rtasida almashish yordamchi nima qila olishini va qanday javob berishini o‘zgartiradi — siz tomondan hech qanday sozlashsiz. Superdav AI Agent v1.18.0 tegishli integratsiyalar sozlanganda bu ish jarayonlariga jadvaldan xabardor vositalar, eslatma yozuvlari, tasdiqlash darvozalari va SMS bildirishnomalarini qo‘shishi mumkin.

## Agent nima? {#what-is-an-agent}

Har bir agent quyidagilarni birlashtiruvchi nomlangan konfiguratsiya profilidir:

- **Vositalar** — agent chaqirishi mumkin bo‘lgan imkoniyatlar (masalan, Content Writer post yaratish imkoniyatlariga ega; Design Studio CSS va theme.json imkoniyatlariga ega)
- **Tizim prompti** — agentning ohangi, ustuvorliklari va cheklovlarini belgilaydigan ko‘rsatmalar
- **Takliflar** — tez boshlashingizga yordam berish uchun chat interfeysida ko‘rsatiladigan oldindan yozilgan promptlar

## Agent tanlagichiga kirish {#accessing-the-agent-picker}

1. WordPress admin yon panelida **Gratis AI Agent** panelini oching.
2. Chat sarlavhasining yuqori chap qismidagi **agent belgisini** bosing (belgi faol agentni aks ettirish uchun o‘zgaradi).
3. **Agent Picker** shakl-jadval ustki qatlami sifatida ochiladi. Har bir agent o‘z belgisi, nomi va bir qatorli tavsifi bilan ro‘yxatda ko‘rsatiladi.
4. Uni faollashtirish uchun agent qatorini bosing. Chat sarlavhasi darhol yangilanadi.

Suhbat o‘rtasida ham agentlarni almashtirishingiz mumkin — yangi agentning tizim prompti keyingi xabardan boshlab kuchga kiradi.

## Beshta ichki agent {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Diqqat markazi:** Postlar, sahifalar va aloqa formalarini yaratish hamda tahrirlash.

**Mavjud vositalar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integratsiyalari yoqilgan bo‘lsa, sozlangan kalendar konteksti, tasdiqlash darvozalari, eslatmalar va SMS bildirishnoma vositalari ham tasdiqlangan ish jarayonlari uchun mavjud bo‘lishi mumkin.

**Nimalarni yaxshi bajaradi:**
- Qisqa tavsif yoki reja asosida blog postlarini tayyorlash va nashr qilish
- Yangi sayt uchun landing sahifalar to‘plamlarini yaratish
- Aloqa va so‘rov formalarini qurish
- URL yoki qidiruv asosida postlarga asosiy rasmlarni o‘rnatish
- Sozlangan Google Calendar kontekstidan tadbir yakunidan keyingi xabarlarni tayyorlash, so‘ng bildirishnomalarni yuborishdan oldin tasdiqlash uchun pauza qilish

**Boshlang‘ich takliflar:**
- *WordPress multisite afzalliklari haqida 500 so‘zli blog posti yozing.*
- *About, Services va Contact sahifalarini yarating va ularni nashr qiling.*
- *Contact sahifasiga band qilish so‘rovi formasini qo‘shing.*
- *Ertangi sozlangan kalendar tadbiri ishtirokchilari uchun eslatma tayyorlang va uni yuborishdan oldin tasdiqlashni kuting.*

---

### Site Builder {#site-builder}

**Diqqat markazi:** Bitta prompt asosida boshidan oxirigacha veb-sayt yaratish.

**Mavjud vositalar:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 bilan administratorlar yoqqan joylarda sozlangan boshqariladigan xizmat, tasdiqlash, eslatma, kalendar va SMS vositalari mavjud bo‘lishi mumkin.

**Nimalarni yaxshi bajaradi:**
- Tavsiflangan biznes turi uchun ko‘p bosqichli sayt qurish rejasini yaratish
- Har bir bosqichni avtonom bajarish — tuzilma, kontent, navigatsiya, dizayn
- Reja o‘rtasidagi xatolardan qo‘lda aralashuv talab qilmasdan tiklanish
- Qurish jarayonining bir qismi sifatida tavsiya etilgan pluginlarni o‘rnatish
- Aloqa formalarini bevosita chat interfeysidan yaratish (Superdav AI Agent v1.10.0+)
- Tasdiqlash darvozalari va eslatma yozuvlari yoqilganda takroriy bildirishnomalarsiz ishga tushirish eslatmalari yoki ishtirokchilar bilan keyingi aloqani muvofiqlashtirish

**Boshlang‘ich takliflar:**
- *Galereya post turi, band qilish sahifasi va aloqa formasi bilan fotografiya portfolio sayti quring.*
- *Onlayn menyu, ish vaqtlari va stol band qilish so‘rovi formasi bilan restoran veb-sayti yarating.*
- *Xizmat sahifalari, portfolio bo‘limi va blog bilan frilanser konsalting sayti sozlang.*
- *Sayt quruvchisi yordamida Contact sahifasiga aloqa formasi qo‘shing.*
- *Saytni ishga tushirish cheklisti tasdiqlangandan so‘ng, sozlangan manfaatdor tomon kontaktiga SMS eslatma yuboring.*

---

### Design Studio {#design-studio}

**Diqqat markazi:** Vizual moslashtirish — ranglar, tipografiya, CSS va blok andozalari.

**Mavjud vositalar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nimalarni yaxshi bajaradi:**
- Nomlangan theme presetlarini qo‘llash (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json orqali global tipografiya va rang palitralarini nozik sozlash
- Brendga xos ustuvor o‘zgartirishlar uchun maxsus CSS kiritish
- Sahifaning skrinshotini olish va uni dizayn muammolari bo‘yicha ko‘rib chiqish

**Boshlang‘ich takliflar:**
- *warm-editorial presetini qo‘llang, so‘ng asosiy rangni #2d6a4f ga o‘rnating.*
- *Bosh sahifaning skrinshotini oling va nimalarni yaxshilashingizni ayting.*
- *To‘liq kenglikdagi fon rasmi va markazlashtirilgan sarlavhaga ega qayta ishlatiladigan hero blok andozasini yarating.*

### Plugin Manager {#plugin-manager}

**Diqqat markazi:** WordPress pluginlarini topish, o‘rnatish va boshqarish.

**Mavjud vositalar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nimalarni yaxshi bajaradi:**
- Tavsiflangan foydalanish holati uchun eng yaxshi pluginni tavsiya qilish
- Registrdan imkoniyat paketlarini o‘rnatish
- Mavjud imkoniyatlar katalogini kategoriya bo‘yicha ko‘rib chiqish

**Boshlang‘ich takliflar:**
- *A’zolik katalogi uchun eng yaxshi plugin qaysi?*
- *WooCommerce imkoniyatlar paketini o‘rnating.*
- *Barcha mavjud ecommerce imkoniyat paketlarini ko‘rsating.*

---

### Support Assistant {#support-assistant}

**Diqqat markazi:** Sayt kontenti, sozlamalari va WordPress konfiguratsiyasi haqidagi savollarga javob berish.

**Mavjud vositalar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nimalarni yaxshi bajaradi:**
- Joriy sayt sozlamalari va parametrlarini qidirish
- Saytda qaysi post turlari, taksonomiyalar va menyular sozlanganini tushuntirish
- Jonli qiymatlarni o‘qish orqali “bu sozlama nima qiladi?” savollariga javob berish
- O‘zgartirishlar kiritishdan oldin faqat o‘qish uchun diagnostika qatlami sifatida xizmat qilish

**Boshlang‘ich takliflar:**
- *Hozir bu saytda qaysi pluginlar va sozlamalar faol?*
- *Bu saytda ro‘yxatdan o‘tkazilgan barcha maxsus post turlarini sanab bering.*
- *Qanday navigatsiya menyulari mavjud va ular qayerga tayinlangan?*

---

## Superdav avtomatlashtirish integratsiyalari {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 integratsiyalari sozlanganda, ichki agentlar jadvaldan xabardor xavfsizroq avtomatlashtirish ish jarayonlarida qatnasha oladi:

- **Google Calendar o‘qish vositalari** agentlarga keyingi ishni tayyorlashdan oldin sozlangan kalendarlar va tadbirlarni tekshirish imkonini beradi.
- **Kontakt va ishtirokchi moslashtirish** tadbir ishtirokchilarini WordPress foydalanuvchilari yoki ma’lum kontaktlar bilan moslashga yordam beradi.
- **Inson tasdiqlash darvozalari** vakolatli foydalanuvchi ularni ko‘rib chiqib tasdiqlamaguncha nozik amallarni to‘xtatib turadi.
- **Eslatma yozuvlari** rejalashtirilgan vazifalar qayta urinilganda yoki takrorlanganda takroriy bildirishnomalarning oldini oladi.
- **TextBee SMS bildirishnomalari** faqat SMS hisob ma’lumotlari va ish jarayoni ruxsatlari yoqilganda sozlangan matnli xabarlarni yuboradi.

Tavsiya etilgan ish jarayoni: agentdan xabar yoki amalni tayyorlashni so‘rang, tasdiqlash so‘rovini ko‘rib chiqing, keyin tasdiqlangan amalni davom ettirishga ruxsat bering. Takrorlanuvchi eslatmalar uchun eslatma deduplikatsiyasini yoqilgan holda saqlang, shunda bir xil tadbir yoki kontaktga qayta-qayta xabar berilmaydi.

---

## Agentlarni moslashtirish {#customising-agents}

Har bir ichki agent `gratis_ai_agent_agents` filtri orqali kengaytirilishi yoki almashtirilishi mumkin.

### Mavjud agentga maxsus tizim promptini qo‘shish {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Yangi agentni ro‘yxatdan o‘tkazish {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Yangi agent filtr ishga tushgandan so‘ng darhol Agent tanlagichda paydo bo‘ladi.

### Ichki agentni olib tashlash {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
