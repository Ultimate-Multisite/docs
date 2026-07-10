---
title: O‘zgarishlar jurnali
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# O‘zgarishlar jurnali {#changelog}

## 1.9.0 — 2026-04-28 da chiqarilgan {#190--released-on-2026-04-28}

### Yangi {#new}

- **`create_contact_form` qobiliyati** — faol forma pluginidan (Contact Form 7, WPForms, Fluent Forms yoki Gravity Forms) foydalanib aloqa formasini yaratadi va istalgan post yoki sahifaga joylashtirishga tayyor shortcode qaytaradi.
- **`set_featured_image` qobiliyati** — mavjud Media Library attachment ID yoki masofaviy URL orqali post yoki sahifaga featured image tayinlaydi; URL berilganda rasmni avtomatik import qiladi.
- **`batch_create_posts` qobiliyati** — bitta qobiliyat chaqiruvida bir nechta post yaratadi. `create_post` bilan bir xil parametrlarni qo‘llab-quvvatlaydi, har bir post bo‘yicha muvaffaqiyat/muvaffaqiyatsizlikni xabar qiladi va ixtiyoriy `stop_on_error` rejimiga ega.
- **`page_template` parametri** — `create_post` va `update_post` ga qo‘shildi. Yaratish yoki yangilash vaqtida PHP sahifa shabloni faylini (masalan, `page-full-width.php`) tayinlaydi. Theme standartiga qaytarish uchun `update_post` ga bo‘sh satr yuboring.
- **Client tomonidagi skrinshot qobiliyatlari** — `capture_screenshot`, `compare_screenshots` va `review_page_design`. Server tomonidagi headless brauzer orqali jonli sahifalarning to‘liq yoki viewport skrinshotlarini oling, ikki skrinshotni farqlang va tartib, tipografiya, rang hamda accessibility bo‘yicha AI tomonidan yaratilgan dizayn sharhini oling.
- **Beshta ichki agent** — Content Writer, Site Builder, Design Studio, Plugin Manager va Support Assistant. Har bir agent maxsus vositalar to‘plami, moslashtirilgan system prompt va boshlang‘ich takliflarga ega. Chat sarlavhasidagi yangi **Agent Picker** orqali almashtirish mumkin. [Ichki agentlar](../../user-guide/configuration/built-in-agents) bo‘limiga qarang.
- **Feature flags** — kirish nazorati togglelari (administratorlar bilan cheklash, network adminlar bilan cheklash, subscriber kirishi, a’zo bo‘lmaganlar uchun o‘chirish) va branding opsiyalari (footer attributionni yashirish, maxsus agent nomi, agent pickerni yashirish, chat avatari sifatida site icon ishlatish) bilan yangi **Settings → Feature Flags** tab. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) bo‘limiga qarang.
- **Oxirgi sessiyani tiklash** — chat paneli endi sahifa yuklanganda va widget ochilganda eng so‘nggi suhbatni avtomatik qayta yuklaydi, shuning uchun sahifalar bo‘ylab o‘tishda kontekst hech qachon yo‘qolmaydi.
- **Plugin amallari havolalari** — Settings va Abilities Registry uchun tezkor havolalar endi WordPress **Plugins → Installed Plugins** ekranida plugin tavsifi ostida ko‘rinadi.

### Yaxshilangan {#improved}

- **Rasm manbasini qayta urinish** — agent endi yuklab olish muvaffaqiyatsiz bo‘lganda AI tomonidan yaratilgan rasmga o‘tishdan oldin barcha sozlangan bepul rasm manbalarini qayta sinab ko‘radi.
- **Model ma’lumot paneli** — chat sarlavhasida doimo ko‘rinadi; endi birinchi xabardan keyin yashirilmaydi.
- **Avto-scroll xatti-harakati** — foydalanuvchi o‘qish uchun yuqoriga aylantirganda auto-scroll pauza qiladi; suzuvchi **Pastga aylantirish** tugmasi paydo bo‘ladi va foydalanuvchi eng so‘nggi xabarga yetganda avtomatik yopiladi.
- **Agent Picker UI** — har bir agent uchun ikonkalari bo‘lgan form-table overlay sifatida qayta loyihalandi, bu agentlarni bir qarashda aniqlash va almashtirishni osonlashtiradi.
- **Lazy-loaded JS chunks** — chat widgetining dastlabki JavaScript bundle’i endi lazy-loaded chunksga bo‘lingan, bu dastlabki bundle hajmlarini 75–90% ga kamaytiradi.
- **Chat widget qayta dizayni** — oldingi maxsus avatar o‘rnini yagona AI ikonka egallaydi; ichki agent tizimi bilan izchil.
- **URL linkification** — system xabarlari va xato xabari pufakchalarida ko‘rinadigan URLlar endi bosiladigan havolalar sifatida ko‘rsatiladi.

### Tuzatilgan {#fixed}

- **Qobiliyatlarni topish osonligi** — barcha qobiliyatlar agentning vositalar ro‘yxatida ishonchli ko‘rinishi uchun tavsiflar, system prompt havolalari va namespace mosligi tuzatildi.
- **Providers cache** — providerlar endi version counter orqali butun site bo‘yicha cache qilinadi, bu multisite tarmoqlarida eskirgan-provider muammolarining oldini oladi.
- **`ability_invalid_output`** — 12 ta qobiliyat handleri bo‘ylab hal qilindi; barchasi to‘g‘ri tuzilgan JSON javoblarini qaytaradi.
- **`pending_client_tool_calls` pipeline** — client tomonidagi tool chaqiruvlari to‘g‘ri yakunlanishi va natijalarni modelga qaytarishi uchun boshidan oxirigacha ulandi.
- **Tarix drawer** — qaytarib bo‘lmaydigan o‘zgarishlar revert ro‘yxatidan chiqarib tashlandi; **To‘liq tarixni ko‘rish** havolasi endi to‘g‘ri ishlaydi.
- **O‘zgarishlar/revert tizimi** — beshta alohida xato tuzatildi va yangi admin interfeysi ostida birlashtirildi.
- **Save Settings toast** — **Save Settings** bosilgandan keyin snackbar bildirishnomasi endi ishonchli ko‘rinadi.
- **Trash kontekst menyusi** — elementlarni trash ko‘rinishidan chiqmasdan butunlay o‘chirish uchun **Butunlay o‘chirish** opsiyasi qo‘shildi.
- **Tahrirlash va qayta yuborish** — edit ikonkasi bosilganda endi thread ichidagi barcha xabarlar emas, faqat bosilgan xabar tahrirlash rejimiga o‘tadi.
- **Chat layout balandligi** — sahifa ustida plugin tomonidan kiritilgan kontent (admin notices, bannerlar) paydo bo‘lganda chat paneli balandligini moslashtiradi, input maydonining ekrandan tashqariga surilib ketishining oldini oladi.

---

## 1.4.0 — 2026-04-09 da chiqarilgan {#140--released-on-2026-04-09}

### Yangi {#new-1}

- **WP-CLI benchmark buyrug‘i** (`wp gratis-ai-agent benchmark`) — CI pipeline’lari va modelni baholash ish jarayonlari uchun Agent imkoniyatlari v1 benchmark to‘plamini buyruq qatoridan ishga tushiradi. Har bir savol bo‘yicha ishga tushirish, provayder/modelni qayta belgilash hamda JSON/CSV chiqishini qo‘llab-quvvatlaydi.
- **Agent imkoniyatlari v1 benchmark to‘plami** — to‘liq qobiliyatlar doirasini sinovdan o‘tkazadigan, baholash hamda token/davomiylik hisobotlari bilan murakkab, ko‘p bosqichli promptlarning tuzilgan to‘plami.
- **Maxsus yozuv turi qobiliyatlari** — `register_post_type`, `list_post_types`, `delete_post_type`. Ro‘yxatdan o‘tkazishlar qayta ishga tushirishlardan keyin ham options jadvali orqali saqlanib qoladi.
- **Maxsus taksonomiya qobiliyatlari** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ixtiyoriy rewrite slug’lari bilan iyerarxik va yassi taksonomiyalarni qo‘llab-quvvatlaydi.
- **Dizayn tizimi qobiliyatlari** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Beshta saralangan presetni o‘z ichiga oladi: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles qobiliyatlari** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. theme.json qiymatlarini WordPress Global Styles API orqali o‘qiydi va yozadi.
- **Navigatsiya menyusini boshqarish qobiliyati** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ichma-ich menyular va theme joylashuvini tayinlashni qo‘llab-quvvatlaydi.
- **Options boshqaruvi qobiliyati** — `get_option`, `set_option`, `delete_option`, `list_options`. Muhim WordPress options’larini o‘zgartirishdan himoya qiluvchi ichki xavfsizlik blok ro‘yxatini o‘z ichiga oladi.
- **O‘rnatiladigan qobiliyatlar reyestri** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugin’lari sifatida tarqatiladigan qobiliyat paketlarini toping va faollashtiring.
- **Site Builder orkestratsiyasi v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plugin aniqlash, bosqich chiqishi havolalari, progress kuzatuvi va avtonom xatoni tiklash bilan ko‘p fazali site qurish rejalari.
- **Restoran website benchmark savoli** (`q-restaurant-website`) — CPT ro‘yxatdan o‘tkazish, dizayn tizimi, navigatsiya va plugin aniqlashni qamrab oluvchi boshidan oxirigacha test.
- **AI provayder connector plugin’lari** tezroq lokal ishlab chiqish sozlamalari uchun WordPress Playground blueprint’lariga qo‘shildi.

### Yaxshilandi {#improved-1}

- README AI provayder connector hujjatlari va sozlash yo‘riqnomalari bilan yangilandi.

### Tuzatildi {#fixed-1}

- `main` branch’dagi 25 ta PHPUnit test muvaffaqiyatsizligi hal qilindi.
- `blueprint.json` ichidagi GitHub releases URL formati tuzatildi.
- Eski ID’lar bilan to‘qnashuvlarning oldini olish uchun vazifa ID’lari qayta raqamlandi.

---

## 1.3.x {#13x}

_Oldingi release qaydlari plugin repository’sida saqlanadi._
