---
title: Sayt Quruvchi Kontakt Formlari
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Sayt Quruvchi Kontakt Formlari

Superdav AI Agent v1.10.0 sizga chat interfeysidan Site Builder agenti yordamida kontakt formlarini bevosita yaratish imkonini beradi. Bu sizga chatdan chiqmasdan har qanday sahifaga to'liq funksional kontakt formalar qo'shishingizni ta'minlaydi.

## Umumiy ko'rinish {#overview}

Site Builder kontakt formasi yaratish imkoniyati (`create_contact_form`) o'rnatilgan form pluginingizni avtomatik aniqlaydi va ushbu pluginning mahalliy imkoniyatlaridan foydalanib kontakt formasi yaratadi. Qo'llab-quvvatlanadigan form pluginlari quyidagilardan iborat:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistent sizning saytingiz uchun eng mos keladigan mavjud form pluginini avtomatik tanlaydi va ushbu pluginga moslashtirilgan kontakt formani yaratadi.

## Kontakt Formasi Yaratish {#creating-a-contact-form}

Site Builder yordamida kontakt formasi yaratish uchun:

1. WordPress admin panelidagi **Gratis AI Agent** chat paneli oching.
2. Chat sarlavhasi ichidagi agent ikoniga bosib, **Site Builder** agentiga o'ting.
3. Yaratmoqchi bo'lgan kontakt formani tasvirlang. Masalan:

   > "Kontakt sahifasiga ism, elektron pochta, xabar va telefon raqamlari uchun maydonlar bilan kontakt formasi qo'shing."

   Yoki oddiygina:

   > "Kontakt sahifasi uchun kontakt formasi yarating."

4. Site Builder kontakt formani yaratadi va joylashtirishga tayyor qisqa kodni (shortcode) qaytaradi.

## Yaratilgan Qisqa Koddan Foydalanish {#using-the-generated-shortcode}

Site Builder kontakt formani yaratganidan so'ng, u qisqa kodni (masalan, `[contact-form-7 id="123"]`) qaytaradi. Siz quyidagilarni qilishingiz mumkin:

1. **Sahifaga yoki postga joylashtirish** — Qisqa kodni nusxalang va bloklar muharriri yoki klassik muharrir orqali istalgan sahifa yoki postga changlang.
2. **Site Builder orqali qo'shish** — Site Builder dan formani aniq sahifaga avtomatik qo'shishni so'rashingiz mumkin:

   > "Kontakt formani Kontakt sahifasiga qo'shing."

3. **Шаблонda ishlatish** — Agar siz PHP bilan tanish bo‘lsangiz, qisqa kodni tema shablon faylida qo‘shishingiz mumkin.

## Kontakt formini sozlash {#customizing-the-contact-form}

Site Builder kontakt formini yaratganidan so‘ng, uni yanada o‘zgartirishingiz mumkin:

### Chat interfeysi orqali {#via-the-chat-interface}

Site Builder'dan formni o‘zgartirish so‘rashingiz mumkin:

> "Kontakt formini mavzu maydoni qo‘shish va xabar maydonini majburiy qilish uchun yangilang."

Site Builder formni yangilaydi va yangilangan qisqa kodni qaytaradi.

### Form pluginining admin interfeysi orqali {#via-the-form-plugins-admin-interface}

Formni to‘g‘ridan-to‘g‘ri o‘zingizning form pluginingiz sozlamalaridan ham sozlash mumkin:

1. WordPress adminida **Contact Form 7** (yoki o‘rnatilgan form pluginingiz) ga kiring.
2. Site Builder tomonidan yaratilgan formni toping.
3. Kerak bo‘lgan joylarda form maydonlarini, tekshirish qoidalarini va elektron pochta xabarlarini tahrirlang.

## Form pluginlari va moslik {#form-plugins-and-compatibility}

Site Builder sizning saytingizda qaysi form pluginining o‘rnatilganligini avtomatik aniqlaydi va kontakt formini yaratish uchun undan foydalanadi. Agar bir nechta form pluginlar o‘rnatilgan bo‘lsa, Site Builder ularni quyidagi tartibda ustuvor qiladi:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Agar bu pluginlardan hech biri o‘rnatilmagan bo‘lsa, Site Builder kontakt formini yaratishdan oldin bittasini o‘rnatishni tavsiya qiladi.

## Elektron xabarlar {#email-notifications}

Site Builder tomonidan yaratilgan kontakt formlari ko‘rsatkich sifatida sayt administratoriga elektron xabar yuborish uchun sozlanadi. Siz qabul qiluvchi elektron pochta manzili va xabar matnini o‘zgartirishingiz mumkin:

1. Form pluginingizning admin interfeysiga kiring.
2. Site Builder tomonidan yaratilgan formni toping.
3. Elektron xabar sozlamalarini tahrirlang.

Batafsil ko‘rsatmalar uchun form pluginingizning hujjatlariga murojaat qiling:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Misollar (Misolish) Namunalari {#example-use-cases}

### Oddiy Kontakt Formi {#simple-contact-form}

> "Ism, elektron pochta va xabar maydonlari bilan oddiy kontakt formini yarating."

### Ko'p bosqichli Form {#multi-step-form}

> "Kontakt ma'lumotlari uchun birinchi bosqich va xabar hamda afzal aloqa usuli uchun ikkinchi bosqichga ega bo'lgan kontakt formini yarating."

### Shartli mantiq bilan Form {#form-with-conditional-logic}

> "Dropdown menyuda foydalanuvchining tanloviga qarab turli maydonlarni ko'rsatadigan kontakt formini yarating."

### Fayl yuklash bilan Form {#form-with-file-upload}

> "Foydalanuvchilarga faylni yoki ilovani yuklashga imkon beradigan kontakt formini yarating."

:::note
Kontakt formini yaratish Superdav AI Agent v1.10.0 va undan keyingi versiyalarda mavjud. Bu imkoniyatdan foydalanish uchun Sayt Quruvchi (Site Builder) agenti faol bo'lishi kerak.
