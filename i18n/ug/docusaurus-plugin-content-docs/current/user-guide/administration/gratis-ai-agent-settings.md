---
title: Муттасил मल्टी-сайт учун тегирсиз зертхана sozlamaları
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Ayarları

Gratis AI Agent'taki **Ayarlar → Gelişmiş** ekranı, v1.5.0 sürümünden itibaren eklenen arka uç entegrasyonları için yönetici düzeyinde ayar yapmanızı sağlar. Bu sayfa, **Feedback Endpoint** alanlarını ve beklenen formatlarını anlatıyor.

## Ayarlara Erişim

1. WordPress yönetim panelinde, **Gratis AI Agent → Ayarlar** kısmına gidin.
2. **Gelişmiş (Advanced)** sekmesine tıklayın.

## Feedback Endpoint Yapılandırması

Feedback endpoint'i, bir kullanıcı başparmak aşağı butonu, otomatik ipucu bandı veya `/report-issue` komutu aracılığıyla geri bildirim gönderdiğinde AI agent'ten gelen POST isteklerini alır.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Bu, HTTP POST so'rovlari va JSON tanasi bilan ma'lumotlarni qabul qiladigan URL. |
| **Feedback API Key** | Har bir feedback so'rovi uchun `Authorization` sarlavchasida yuboriladigan bearer token. Agar sizning endpointingiz autentifikatsiya talab qilmasa, uni bo'sh qoldiring. |

### Kutilayotgan JSON Yuklanishi (Payload)

Sizning feedback endpointingiz kamida quyidagi maydonlarni o'z ichiga olgan JSON tanasini qabul qilishi kerak:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Narx haqidagi javob noto'g'ri edi.",
  "triage_category": "factual_error"
}
```

Sohbat kontekstiga qarab, yuklanishda qo'shimcha maydonlar bo'lishi mumkin.

### `triage_category` Qiymatlari

AI ترياج (triage) طبقه پيچيده، قبل از ارسال داده‌ها به جلو، یکی از مقادیر زیر را به فیلد `triage_category` اختصاص می‌دهد:

| مقدار | معنی |
|---|---|
| `factual_error` | دستیار اطلاعات واقعی اشتباهی ارائه کرده است. |
| `unhelpful_answer` | پاسخ از نظر فنی درست بوده اما مفید نبوده است. |
| `inappropriate_content` | پاسخ حاوی محتوایی بوده که نباید به کاربران نشان داده شود. |
| `other` | بازخورد با هیچ یک از دسته‌بندی‌های شناخته شده مطابقت ندارد. |

### احراز هویت (Authentication)

اگر نقطه پایانی (endpoint) شما نیاز به احراز هویت دارد، فیلد **Feedback API Key** را با توکن بردار (bearer token) خود تنظیم کنید. عامل (agent) این موارد را ارسال می‌کند:

```
Authorization: Bearer <your-api-key>
```

اگر فیلد **Feedback API Key** خالی باشد، هیچ هدر `Authorization` ارسال نمی‌شود.

### غیرفعال کردن جمع‌آوری بازخورد (Disabling Feedback Collection)

**Feedback Endpoint URL** و **Feedback API Key** فیلدlerini boş bırakın. 엄지 aşağı butonu ve geri bildirim arayüzü kullanıcılar için قابل مشاهده kalır, ancak gönderilen veriler herhangi bir خارجی سرویسe yönlendirilmez.

## Brave Search API Key

Ayrıca **Advanced** تب (tab) üzerinde, **Brave Search API Key** فیلdi [Internet Search](../configuration/internet-search) özelliğini etkinleştirir.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard'unuzdan aldığınız API anahtarıdır. AI asistanında internet araması özelliğini etkinleştirmek için gereklidir. |

Bu فیلdin etiketi، Brave Search API kayıt sayfasına tıklanabilir bir لینک içerir. این را خالی bırakmak، اینترنت جستجو özelliğini devre dışı bırakır.

این ویژگی در end-user (کاربر نهایی) راهنمایی برای [Internet Search](../configuration/internet-search) را ببینید.

## Feature Flags

v1.9.0'da kiritilen **Settings → Feature Flags** (Ayarlar → Özellik Bayrakları) sekmesi, isteğe bağlı funksiyalar için anahtarlar (toggle switches) sağlar. Her bayrak ya ağ genelinde etkinleştirilir ya da devre dışı bırakılır; şu an için site bazında bir geçersiz kılma (override) özelliği yok.

### Feature Flags'a Erişim

1. WordPress admin panelinde, **Gratis AI Agent → Settings** (Ücretsiz Yapay Zeka Ajanı → Ayarlar) bölümüne gidin.
2. **Feature Flags** (Özellik Bayrakları) sekmesine tıklayın.

### Access Control Flags (Erişim Kontrol Bayrakları)

| Flag | Default | Tavsif |
|---|---|---|
| **Restrict to Administrators** | Off | Bu seçeneq açylsa, faqat `administrator` rolündeki kullanıcılar AI Agent chat panelini açabilir. Boshqa roller "Administratorınızla iletişime geçin" mesajını görürler. |
| **Restrict to Network Admins** | Off | Multisite ağda bu açılsaydı, faqat Super Adminlər agenti istifadə edə bilərdi. Fərdi sayt administratorları bloklanır. Hər ikisi açıq olsa belə, "Restrict to Administrators"dən daha üstünlük tələb olunur. |
| **Allow Subscriber Access** | Off | Bu seçeneq açylsa, `subscriber` rolündəki kullanıcılar chat interfeysindən istifadə edə bilər, lakin onlar yalnız oxuma imkanlarına məhdudlaşırlar (post yaratmaq və ya ayarları dəyişmək mümkün deyil). |

| **عضو olmayanlar için devre dışı bırakın** | Ықбат (Off) | Ultimate Multisite üелік ҳолати билан интеграцияланади. Қудам олиб ташлаш тилга актив уюшмаси бўлмаган сайтлар учун яширилади. |

### Бренд белгилари

| Flag | Default | Tavsif |
|---|---|---|
| **"Powered by Gratis AI Agent" Footer-ni Yashirmoq** | Off | Chat widget'in pastida ko'rsatilgan brend ma'lumotini olib tashlaydi. Oq-oq (white-label) loyihalar uchun tavsiya etiladi. |
| **Maxsus Agent Nomi** | *(bo'sh)* | Chat sarlavhasi va admin menyusidagi standart "Gratis AI Agent" yozuvini o'zingizning mahsulot nomingiz bilan almashtiradi. Standartni ishlatmoqchi bo'lsang, bo'sh qoldiring. |
| **Agent Tanlovchisini Yashirmoq** | Off | Faollashtirilganida foydalanuvchilar beshta ichki agent orasida o'tishim mumkin bo'lmaydi. Hozirgi agent sozlamalar → Umumiy (Settings → General) da default sifatida belgilangan narsaga qotiriladi. |
| **Sayt Ikonini Chat Avatari Sifatida Ishlatmoq** | Off | Chat widget'ining sarlavhasiidagi standart AI ikonini WordPress sayti ikonasi bilan almashtiradi (Bu sozlamani ko'rinish → O'zgartirish (Appearance → Customize) → Sayt Identiteti (Site Identity) da belgilaysiz). |

### Өзгәрmelerни таطبيق

Қай бир флагды (flag) ойнатқандан кейин **Settings-ni сақлаңыз** (Save Settings). Өзгәрмелер дереу ишлай башлана — кэш тазалаш ёки плагинини қайта ишга тушириш шарт эмас.
