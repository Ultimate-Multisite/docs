---
title: O‘zgarishlar jurnali
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# O‘zgarishlar jurnali

## 1.18.0 — 2026-06-29 da chiqarildi {#1180--released-on-2026-06-29}

### Yangi {#new}

- **Google Calendar vositalari** — jadvaldan xabardor avtomatlashtirishlar uchun sozlangan kalendarlar va tadbirlarni o‘qing
- **Kontaktlarni moslashtirish va ishtirokchi yordamchilari** — kalendar ishtirokchilarini site foydalanuvchilari va kontaktlari bilan moslang
- **Inson tasdiqlash darvozalari va eslatma yozuvlari** — ko‘rib chiqish uchun avtomatlashtirishlarni pauza qiling va takroriy bildirishnomalarning oldini oling
- **TextBee SMS provayderi** — sozlangan matnli xabar bildirishnomalarini TextBee orqali yuboring
- **Kengaytirilgan hamroh paket** — WordPress.org buildidan alohida tarqatiladigan ishonchli dasturchi uchun fayl tizimi, ma’lumotlar bazasi, WP-CLI, REST dispetcheri, plugin yaratuvchi, git snapshot, foydalanuvchi boshqaruvi va benchmark vositalarini qo‘shing

### Yaxshilandi {#improved}

- **Boshqariladigan Superdav xizmatini sozlash** — qo‘llab-quvvatlanadigan sitelar uchun joylashtirilgan xizmat endpointlari va avtomatik ulanish ta’minotini qo‘shing
- **Relizni paketlash** — alohida core va Advanced ZIPlarni yarating, ikkalasini ham GitHub’da e’lon qiling va WordPress.org’ga faqat core paketni yuboring

### Tuzatildi {#fixed}

- **AI so‘rovi ishonchliligi** — model tanlash, so‘rov timeoutlari, standart sozlash modeli, reasoning-text bilan ishlash va noto‘g‘ri tool chaqiruvlari uchun qayta urinish ko‘rsatmalarini yaxshilang
- **Kalendar va eslatmalarni mustahkamlash** — Google Calendar tokenlari va eslatmalar deduplikatsiyasini kuchaytiring
- **Onboarding va tasdiqlashni davom ettirish** — frontend onboarding ishga tushirishlari va tasdiqlangan qobiliyatni davom ettirishni tuzating
- **WordPress.org paketlash ko‘rigi muammolari** — core reliz uchun paketlash ko‘rigi fikr-mulohazalarini hal qiling

## 1.16.0 — 2026-05-20 da chiqarildi {#1160--released-on-2026-05-20}

### Yangi {#new-1}

- **Logo SVG yaratish qobiliyati** — Theme Builder endi namespace uchun xavfsiz sanitizatsiya bilan maxsus logo SVGlarini yaratishi va joylashtirishi mumkin
- **Aniqlash intervyusida surat yuklash** — Theme Builder aniqlash intervyusi endi boyroq dizayn konteksti uchun surat yuklash bosqichini o‘z ichiga oladi
- **Palitra kontrastini tekshirish qobiliyati** — theme’ga qo‘llashdan oldin rang juftliklarini WCAG muvofiqligi bo‘yicha tekshiring
- **Mehmondo‘stlik menyulari** — Theme Builder endi mehmondo‘stlik bizneslari uchun tuzilmali ovqat va ichimlik menyu sahifalarini yaratishi mumkin
- **Desktop va mobil preview renderlash** — dizayn yo‘nalishini tanlash vaqtida dizayningizni desktop va mobil qurilmalarda preview qiling
- **Navigatsiya yorlig‘i parametri** — Menu yaratish qobiliyati endi sahifa sarlavhasidan alohida `navigation_label` ni qo‘llab-quvvatlaydi
- **Tier 1 tool mavjudligi** — sd-ai-agent/site-scrape endi Theme Builder’da standart bo‘yicha mavjud Tier 1 tool hisoblanadi

### Tuzatildi {#fixed-1}

- **AI Client keshi** — endi so‘rovlararo barqarorlik uchun transientlar bilan qo‘llab-quvvatlanadi, uzoq davom etadigan agent vazifalarida ma’lumot yo‘qolishining oldini oladi
- **Plugin qatori amal havolalari** — aniqlik uchun tuzatildi va qayta nomlandi

## 1.10.0 — 2026-05-05 da chiqarildi {#1100--released-on-2026-05-05}

### Yangi {#new-2}

- **Tavily internet qidiruvi** — Brave Search bilan bir qatorda boyroq internet qidiruv natijalari uchun Tavily’ni qidiruv provayderi sifatida qo‘shing
- **Theme’dan xabardor ichki ko‘nikmalar** — Block Themes, Classic Themes, Kadence Blocks va Kadence Theme ko‘nikma qo‘llanmalari endi plugin bilan birga keladi
- **Site yaratuvchi kontakt forma qobiliyati** — chat interfeysidan to‘g‘ridan-to‘g‘ri istalgan sahifaga kontakt forma qo‘shing

### Yaxshilandi {#improved-1}

- **WooCommerce integratsiyasi qayta tuzildi** — endi yaxshiroq ishonchlilik va moslik uchun native WooCommerce APIlaridan foydalanadi
- **Provayderlar ro‘yxati avtomatik yangilanadi** — har qanday plugin faollashtirilganda yoki o‘chirilganda

### Tuzatildi {#fixed-2}

- **navigate-to qobiliyati** — ayrim admin sahifalarda cheksiz qayta yuklanish sikli tuzatildi
- **list-posts qobiliyati** — endi kategoriya va teg nomlarini sluglarga to‘g‘ri aniqlaydi
- **WP-CLI buyruqlari** — oldingi refaktordan keyin yo‘qolgan namespace aliaslari tiklandi
- **Tadbir avtomatlashtirish** — avtomatlashtirish jadvallari hali yaratilmagan sitelarni muammosiz boshqaradi
- **memory-save qobiliyati** — endi tizim yo‘riqnomasini yaratuvchida to‘g‘ri namespace prefiksidan foydalanadi
- **Skalyar tool natijalari** — endi AI’ga qaytarilishidan oldin to‘g‘ri o‘raladi
- **Foydalanish statistikasi** — endi eski versiyalardan yangilashda legacy qobiliyat kaliti formatini to‘g‘ri boshqaradi
