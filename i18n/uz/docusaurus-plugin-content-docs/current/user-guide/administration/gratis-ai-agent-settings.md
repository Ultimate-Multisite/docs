---
title: Gratis AI Agent Sozlamalari
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent sozlamalari

Gratis AI Agent ichidagi **Settings → Advanced** ekrani backend integratsiyalari uchun administrator darajasidagi konfiguratsiyani taqdim etadi. Bu sahifa feedback yo‘naltirish, qidiruv provayderi kalitlari, boshqariladigan Superdav xizmati sozlamasi, Google Calendar boshqaruvlari, TextBee SMS sozlamalari va butun tarmoq bo‘yicha feature flaglarni hujjatlashtiradi.

## Sozlamalarga kirish {#accessing-settings}

1. WordPress administratori bo‘limida **Gratis AI Agent → Settings** ga o‘ting.
2. **Advanced** yorlig‘ini bosing.

## Feedback endpoint konfiguratsiyasi {#feedback-endpoint-configuration}

Feedback endpoint AI agent foydalanuvchi thumbs-down tugmasi, auto-prompt banner yoki `/report-issue` buyrug‘i orqali feedback yuborganida POST so‘rovlarini qabul qiladi.

| Maydon | Tavsif |
|---|---|
| **Feedback Endpoint URL** | Feedback yuborishlarini JSON tanasi bilan HTTP POST so‘rovlari sifatida qabul qiladigan URL. |
| **Feedback API Key** | Har bir feedback so‘rovining `Authorization` headerida yuboriladigan bearer token. Agar endpoint autentifikatsiya talab qilmasa, bo‘sh qoldiring. |

### Kutiladigan JSON payload {#expected-json-payload}

Feedback endpoint kamida quyidagi maydonlarga ega JSON tanasini qabul qilishi kerak:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Payload ichida suhbat kontekstiga qarab qo‘shimcha maydonlar bo‘lishi mumkin.

### `triage_category` qiymatlari {#triagecategory-values}

AI triage qatlami payloadni yo‘naltirishdan oldin `triage_category` uchun quyidagi qiymatlardan birini belgilaydi:

| Qiymat | Ma’nosi |
|---|---|
| `factual_error` | Assistant noto‘g‘ri faktik ma’lumot berdi. |
| `unhelpful_answer` | Javob texnik jihatdan to‘g‘ri edi, lekin foydali emas edi. |
| `inappropriate_content` | Javobda foydalanuvchilarga ko‘rsatilmasligi kerak bo‘lgan kontent bor edi. |
| `other` | Feedback ma’lum toifaga mos kelmadi. |

### Autentifikatsiya {#authentication}

Agar endpoint autentifikatsiya talab qilsa, **Feedback API Key** maydonini bearer tokeningizga sozlang. Agent quyidagilarni yuboradi:

```
Authorization: Bearer <your-api-key>
```

Agar **Feedback API Key** maydoni bo‘sh bo‘lsa, `Authorization` header yuborilmaydi.

### Feedback yig‘ishni o‘chirish {#disabling-feedback-collection}

**Feedback Endpoint URL** va **Feedback API Key** maydonlarining ikkalasini ham bo‘sh qoldiring. Thumbs-down tugmasi va feedback UI foydalanuvchilarga ko‘rinishda qoladi, lekin yuborishlar hech qanday tashqi xizmatga yo‘naltirilmaydi.

## Brave Search API Key {#brave-search-api-key}

Shuningdek **Advanced** yorlig‘ida **Brave Search API Key** maydoni [Internet Search](../configuration/internet-search) imkoniyatini yoqadi.

| Maydon | Tavsif |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboarddan olingan API kalitingiz. AI assistantda internet qidiruvini yoqish uchun talab qilinadi. |

Maydon yorlig‘i Brave Search API ro‘yxatdan o‘tish sahifasiga bosiladigan havolani o‘z ichiga oladi. Internet qidiruvini o‘chirish uchun bo‘sh qoldiring.

Bu xususiyat bo‘yicha oxirgi foydalanuvchi hujjatlari uchun [Internet Search](../configuration/internet-search) ga qarang.

## Boshqariladigan Superdav xizmati {#managed-superdav-service}

Superdav AI Agent v1.18.0 qo‘llab-quvvatlanadigan saytlar uchun boshqariladigan Superdav xizmati endpointlarini va avtomatik ulanish tayyorlashni qo‘shadi. Saytingiz qo‘lda sozlangan xizmat endpointi o‘rniga hosting qilingan provayderga ulanishi kerak bo‘lsa, ushbu boshqaruvlardan foydalaning.

| Maydon | Tavsif |
|---|---|
| **Managed Superdav Service** | Qo‘llab-quvvatlanadigan saytlar uchun hosting qilingan Superdav xizmati ulanishini yoqadi. |
| **Provision Connection** | Avtomatik endpoint va hisob ma’lumotlarini tayyorlashni boshlaydi. Sayt boshqariladigan provayderdan foydalanishi kerakligini tasdiqlagandan keyin bundan foydalaning. |
| **Service Endpoint / Connection Status** | Tayyorlashdan keyin joriy endpoint yoki ulanish holatini ko‘rsatadi. |

Tayyorlashdan keyin sozlamalarni saqlang va boshqariladigan xizmat workflowlariga tayanishdan oldin ulanish holatini tekshiring. Agar tayyorlash muvaffaqiyatsiz bo‘lsa, ko‘rsatilgan qayta urinish bo‘yicha yo‘riqnomani ko‘rib chiqing va sayt hosting qilingan provayderdan foydalanish ruxsatiga ega ekanini tasdiqlang.

## Google Calendar konfiguratsiyasi {#google-calendar-configuration}

Superdav AI Agent v1.18.0 kalendar xususiyatlari yoqilganda, agent sozlangan kalendarlar va tadbir tafsilotlarini o‘qiy oladi. Kalendar vositalari o‘qishga yo‘naltirilgan va jadvaldan xabardor eslatmalar, ishtirokchilar bilan keyingi aloqa va kontakt moslashtirish uchun foydalidir.

| Maydon | Tavsif |
|---|---|
| **Google Calendar Credentials** | Kalendar ma’lumotlarini o‘qish uchun talab qilinadigan hisob ma’lumotlari yoki token ulanishini saqlaydi. |
| **Calendar Selection** | Agent qaysi sozlangan kalendarlarni tekshirishi mumkinligini cheklaydi. |
| **Calendar Connection Status** | Joriy hisob ma’lumotlari kalendarlar va tadbirlarni o‘qiy olishini tasdiqlaydi. |

Kalendar hisob ma’lumotlarini agentga kerak bo‘lgan kalendarlar bilan cheklang. Agar holat muddati tugagan tokenni ko‘rsatsa, qayta ulang yoki hisob ma’lumotlarini almashtiring.

## TextBee SMS bildirishnomalari {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 sozlangan bildirishnoma workflowlari uchun SMS provayder sifatida TextBee ni qo‘shadi. SMS bildirishnomalari nozik yoki foydalanuvchiga ko‘rinadigan xabarlar uchun inson tasdiqlash darvozalari bilan birga ishlatilishi kerak.

| Maydon | Tavsif |
|---|---|
| **TextBee API Key** | TextBee SMS provayderiga so‘rovlarni autentifikatsiya qiladi. |
| **TextBee Device / Sender** | Provayder talab qilganda, chiquvchi xabarlar uchun ishlatiladigan TextBee jo‘natuvchisi yoki qurilmasini tanlaydi. |
| **SMS Notifications Enabled** | Tasdiqlangan workflowlarga matnli xabar bildirishnomalarini yuborishga ruxsat beradi. SMS yuborishlarning oldini olish uchun o‘chirilgan holda qoldiring. |

Sinov xabarini faqat administratorga tegishli raqamga yuboring, keyin rejalashtirilgan yoki ishtirokchilarga ko‘rinadigan eslatmalarni yoqishdan oldin approval-gate xatti-harakatini tasdiqlang.

## Feature Flags {#feature-flags}

v1.9.0 da ham joriy qilingan **Settings → Feature Flags** yorlig‘i ixtiyoriy funksionallik uchun toggle switchlarni taqdim etadi. Har bir flag butun tarmoq bo‘yicha yoqilgan yoki o‘chirilgan bo‘ladi; hozircha har bir sayt uchun alohida override yo‘q.

### Feature Flags ga kirish {#accessing-feature-flags}

1. WordPress administratori bo‘limida **Gratis AI Agent → Settings** ga o‘ting.
2. **Feature Flags** yorlig‘ini bosing.

### Kirishni boshqarish flaglari {#access-control-flags}

| Bayroq | Standart | Tavsif |
|---|---|---|
| **Administratorlar bilan cheklash** | O‘chiq | Yoqilganda, faqat `administrator` roli bo‘lgan foydalanuvchilar AI Agent chat panelini ochishi mumkin. Boshqa barcha rollar o‘rniga "Administratoringiz bilan bog‘laning" xabarini ko‘radi. |
| **Network Admins bilan cheklash** | O‘chiq | Multisite tarmog‘ida yoqilganda, agentdan faqat Super Admins foydalanishi mumkin. Alohida site administratorlari bloklanadi. Ikkalasi ham yoqilgan bo‘lsa, "Administratorlar bilan cheklash"dan ustun turadi. |
| **Subscriber kirishiga ruxsat berish** | O‘chiq | Yoqilganda, `subscriber` roli bo‘lgan foydalanuvchilar chat interfeysidan foydalanishi mumkin, lekin faqat o‘qish imkoniyatlari bilan cheklanadi (post yaratish yoki sozlamalarni o‘zgartirish yo‘q). |
| **A’zo bo‘lmaganlar uchun o‘chirish** | O‘chiq | Ultimate Multisite a’zolik holati bilan integratsiyalashadi. Yoqilganda, faol a’zolikka ega bo‘lmagan saytlar uchun chat yashiriladi. |

### Brending bayroqlari {#branding-flags}

| Bayroq | Standart | Tavsif |
|---|---|---|
| **"Powered by Gratis AI Agent" futerini yashirish** | O‘chiq | Chat vidjetining pastki qismida ko‘rsatiladigan brending atributsiya qatorini olib tashlaydi. White-label joriy etishlar uchun tavsiya etiladi. |
| **Maxsus Agent nomi** | *(bo‘sh)* | Chat sarlavhasi va admin menyusidagi standart "Gratis AI Agent" yorlig‘ini o‘zingizning mahsulot nomingiz bilan almashtiradi. Standartdan foydalanish uchun bo‘sh qoldiring. |
| **Agent tanlagichini yashirish** | O‘chiq | Yoqilganda, foydalanuvchilar beshta ichki agent o‘rtasida almasha olmaydi. Joriy agent Settings → General bo‘limida standart sifatida sozlangan qiymatga mahkamlanadi. |
| **Chat avatari sifatida Site Icon’dan foydalanish** | O‘chiq | Chat vidjeti sarlavhasidagi standart AI ikonkasini WordPress sayt ikonkasiga almashtiradi (Appearance → Customize → Site Identity ostida sozlanadi). |

### Avtomatlashtirish xavfsizligi bayroqlari {#automation-safety-flags}

Superdav AI Agent v1.18.0 xavfsizroq avtomatlashtirish ishga tushirishlari uchun inson tasdig‘i eshiklari va eslatma yozuvlarini taqdim etadi. Bu boshqaruvlar o‘rnatilgan paketga qarab feature flags yoki kengaytirilgan avtomatlashtirish sozlamalarida paydo bo‘lishi mumkin.

| Bayroq | Standart | Tavsif |
|---|---|---|
| **Inson tasdig‘ini talab qilish** | Tavsiya etiladi: yoqilgan | Vakolatli foydalanuvchi taklif qilingan amalni ko‘rib chiqib tasdiqlamaguncha, sezgir avtomatlashtirishlarni pauzaga qo‘yadi. |
| **Eslatmalarni deduplikatsiya qilish** | Yoqilgan | Qayta urinishlar yoki rejalashtirilgan ishga tushirishlar takroriy bildirishnomalarni yubormasligi uchun yuborilgan eslatmalarni qayd qiladi. |
| **Taqvim vositalarini yoqish** | Sozlanmaguncha o‘chiq | Agentga sozlangan Google taqvimlari va tadbirlarini o‘qishga ruxsat beradi. |
| **SMS bildirishnomalarini yoqish** | Sozlanmaguncha o‘chiq | Hisob ma’lumotlari saqlangandan keyin tasdiqlangan ish jarayonlariga TextBee SMS bildirishnomalarini yuborishga ruxsat beradi. |

### O‘zgarishlarni qo‘llash {#applying-changes}

Istalgan bayroqni almashtirgandan keyin **Save Settings** tugmasini bosing. O‘zgarishlar darhol kuchga kiradi — cache tozalash yoki pluginni qayta faollashtirish talab qilinmaydi.
