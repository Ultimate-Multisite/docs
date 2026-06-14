---
title: Bepul AI Agent Sozlamalari
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Sozlamalari

Gratis AI Agent'dagi **Settings → Advanced** ekranida v1.5.0 versiyasidan boshlab kiritilgan backend integratsiyalari uchun administrator darajasidagi sozlamalar mavjud. Bu sahifa **Feedback Endpoint** maydonlarini va ularning kutubxona formatini hujjatlashtiradi.

## Sozlamalarga Kirish

1. WordPress admin panelida, **Gratis AI Agent → Settings** ga o'ting.
2. **Advanced** (Kengaytirilgan) yorlig'iga bosing.

## Feedback Endpoint Sozlamasi

Feedback endpointi foydalanuvchi "pastki ko'zi" tugmasi orqali, avtomatik prompt banneri orqali yoki `/report-issue` buyrug'i bilan fikr bildirganda AI agentidan POST so'rovlarini qabul qiladi.

| Maydon | Tavsif |
|---|---|
| **Feedback Endpoint URL** | Bu, HTTP POST so'rovlari orqali JSON tanasi bilan feedback yuborishni qabul qiladigan URL manzilidir. |
| **Feedback API Key** | Har bir feedback so'rovining `Authorization` sarlavchasida yuboriladigan bearer token. Agar sizning endpointingiz autentifikatsiyani talab qilmasa, uni bo'sh qoldiring. |

### Kutilayotgan JSON yuklamasi (Payload)

Sizning feedback endpointingiz quyidagi maydonlar bilan kamida bitta JSON tanasini qabul qilishi kerak:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Narx haqidagi javob noto'g'ri edi.",
  "triage_category": "factual_error"
}
```

Sohbat kontekstiga qarab, yuklamada qo'shimcha maydonlar mavjud bo'lishi mumkin.

### `triage_category` Qiymatlari

AI triyaj qatlami yuklamani oldindan yuborishdan oldin `triage_category` ga quyidagi qiymatlardan birini beradi:

| Qiymat | Ma'nosi |
|---|---|
| `factual_error` | Assistent noto'g'ri fakt ma'lumotini taqdim etdi. |
| `unhelpful_answer` | Javob texnik jihatdan to'g'ri bo'ldi, ammo foydali emas edi. |
| `inappropriate_content` | Javobda foydalanuvchilarga ko'rsatilmasligi kerak bo'lgan kontent mavjud edi. |
| `other` | Fikrlar ma'lum bir kategoriya bilan mos kelmadi. |

### Tasdiqlash (Authentication)

Agar sizning endpointingiz tasdiqlanishni talab qilsa, **Feedback API Key** maydonini o'z bearer tokeningiz bilan sozlang. Agent quyidagicha yuboradi:

```
Authorization: Bearer <your-api-key>
```

Agar **Feedback API Key** maydoni bo'sh bo'lsa, hech qanday `Authorization` sarlavhasi (header) yuborilmaydi.

### Feedback Yig'ishni O'chirish

**Feedback Endpoint URL** va **Feedback API Key** maydonlarini bo'sh qoldiring. O'ngcha (thumbs-down) tugmasi va fikr yozish interfeysi foydalanuvchilar uchun ko'rinib turadi, ammo submissionlar hech qanday tashqi xizmatga yo'naltirilmaydi.

## Brave Search API Key

Shuningdek, **Advanced** (Kengaytirilgan) tabda, **Brave Search API Key** maydoni [Internet Search](https://your-docs/configuration/internet-search) imkoniyatini faollashtiradi.

| Maydon | Tavsif |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard'idan olingan API kalitingiz. AI asistentda internet qidirishni faollashtirish uchun talab qilinadi. |

Maydon nomi Brave Search API ro'yxatdan olinish sahifasiga bevosita havolani o'z ichiga oladi. Internet qidirishni o'chirish uchun bo'sh qoldiring.

Bu funksiya haqida foydalanuvchi hujjatlari uchun [Internet Search](https://your-docs/configuration/internet-search) ni ko'ring.

## Feature Flags

v1.9.0 da kiritilgan **Settings → Feature Flags** (Sozlamalar → Funksional Belgilar) yorlig'i optional funksionalliklar uchun o'tish tugmalarini beradi. Har bir belgi tarmoq bo'ylab faollashtirilgan yoki o'chirilgan bo'ladi; hozircha bu yerda har bir sayt uchun qo'shimcha sozlash imkoniyati yo'q.

### Feature Flagsga Kirish

1. WordPress admin panelida **Gratis AI Agent → Settings** (Bebol AI Agent → Sozlamalar) ga o'ting.
2. **Feature Flags** (Funksional Belgilar) yorlig'iga bosing.

### Access Control Flags

| Flag | Default | Tavsif |
|---|---|---|
| **Administratorlarga Cheklash** | Off | Bu yoqilganida, faqat `administrator` roli mavjud bo'lgan foydalanuvchilar AI Agent chat panelini ochishi mumkin. Boshqa barcha rollar esa "Administrator bilan bog'lanish" xabari ko'radi. |
| **Tarmoq Administratorlariga Cheklash** | Off | Multisite tarmoqda yoqilganida, faqat Super Adminlar agentdan foydalanishi mumkin. Individual sayt administratorlari bloklanadi. Agar ikkalasi ham yoqilgan bo'lsa, bu sozlama "Administratorlarga cheklash" dan ustunlik qiladi. |
| **Abonentlarga Kirishga Ijoa Qilish** | Off | Bu yoqilganida, `subscriber` roli mavjud bo'lgan foydalanuvchilar chat interfeysidan foydalanishi mumkin, ammo ular faqat o'qish huquqlariga cheklangan (post yaratish yoki sozlamalarni o'zgartirish imkoniyati yo'q). |

| **A'zoblar Uchun O'chirishni Boshlash** | Off | Ultimate Multisite a'zo bo'lish holati bilan integratsiya qilinadi. Faqat faol a'zolikga ega bo'lmagan saytlar uchun chat yashiriladi. |

### Brendlash Bayroqlari

| Flag | Default | Tavsif |
|---|---|---|
| **"Powered by Gratis AI Agent" Footerni yashirish** | Off | Chat widget'ning pastki qismida ko'rsatiladigan brend belgisini olib tashlaydi. Oq-oq (white-label) loyihalar uchun tavsiya etiladi. |
| **Maxsus Agent nomi** | *(bo'sh)* | Chat sarlavhasi va admin menyusidagi standart "Gratis AI Agent" yozuvini o'zingizning mahsulot nomingiz bilan almashtiradi. Standartni ishlatmoqchi bo'lsang, bo'sh qoldiring. |
| **Agent tanlovchisini yashirish** | Off | Faollashtirilganida foydalanuvchilar beshta ichki agent orasida o'tishim mumkin bo'lmaydi. Joriy agent sozlamalar → Umumiy (Settings → General) da default sifatida belgilangan narsaga qotiriladi. |
| **Sayt ikonkasini chat avatar sifatida ishlatish** | Off | Chat widget sarlavhasidagi standart AI ikonkasini WordPress sayt ikonkasiga almashtiradi (Appearance → Customize → Site Identity da sozlanadi).

### O'zgarishlarni qo'llash

Har qanday bayroqni o'zgartirgandan so'ng **Settings-ni saqlash** tugmasini bosing. O'zgarishlar darhol kuchga kiradi — cache ni tozalash yoki pluginni qayta faollashtirish shart emas.
