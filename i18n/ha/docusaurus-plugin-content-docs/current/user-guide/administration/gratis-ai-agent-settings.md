---
title: Wurin Samun AI Agent Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# تنظیمات رایگان عامل هوش مصنوعی (AI Agent)

صفحه **Settings → Advanced** در Gratis AI Agent امکان پیکربندی سطح مدیر را برای ادغام‌های بک‌اند که در نسخه v1.5.0 معرفی شده‌اند، فراهم می‌کند. این صفحه جزئیات فیلدهای **Feedback Endpoint** و فرمت مورد انتظار آن‌ها را توضیح می‌دهد.

## دسترسی به تنظیمات

۱. در پنل مدیریت وردپرس، به مسیر **Gratis AI Agent → Settings** بروید.
۲. روی تب **Advanced** کلیک کنید.

## پیکربندی نقطه پایان بازخورد (Feedback Endpoint)

نقطه پایان بازخورد درخواست‌های POST را از عامل هوش مصنوعی دریافت می‌کند هر زمان که کاربر از طریق دکمه لایک/لایک نکردن، بنر پیشنهاد خودکار یا دستور `/report-issue` بازخورد ارسال کند.

| فیلد | توضیحات |
|---|---|
| **Feedback Endpoint URL** | آدرس (URL) که درخواست‌های بازخورد را به عنوان درخواست‌های HTTP POST با بدنه JSON دریافت می‌کند. |
| **Feedback API Key** | یک توکن برنده (bearer token) که در هدر `Authorization` هر درخواست بازخورد ارسال می‌شود. اگر نقطه پایانی شما نیازی به احراز هویت ندارد، این فیلد را خالی بگذارید. |

### محموله JSON مورد انتظار (Expected JSON Payload)

نقطه پایان بازخورد شما باید یک بدنه JSON با حداقل فیلدهای زیر را بپذیرد:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

بسته به زمینه مکالمه، ممکن است فیلدهای دیگری نیز در محموله وجود داشته باشند.

### مقادیر `triage_category`

لایه طبقه‌بندی هوش مصنوعی یکی از مقادیر زیر را قبل از ارسال محموله به جلو به `triage_category` اختصاص می‌دهد:

| مقدار | معنی |
|---|---|
| `factual_error` | دستیار اطلاعات واقعی اشتباهی ارائه داده است. |
| `unhelpful_answer` | پاسخ از نظر فنی درست بوده اما مفید نبوده است. |
| `inappropriate_content` | پاسخ حاوی محتوایی بوده که نباید به کاربران نمایش داده شود. |
| `other` | بازخورد با هیچ دسته‌بندی شناخته‌شده‌ای مطابقت ندارد. |

### احراز هویت (Authentication)

Idan wajen yana buƙatar tabbatarwa (authentication), ka yi lura da aikin **Feedback API Key** sannan ka saka token ɗinka (bearer token) a shi. Wajen aiki yana aiko:

```
Authorization: Bearer <your-api-key>
```

Idan aikin **Feedback API Key** ya yi buɗaɗɗen, ba za a aiko wani `Authorization` header ba.

### Kawo Aiki da Samu Feedback (Disabling Feedback Collection)

Ka bar makonno na **Feedback Endpoint URL** da makonno na **Feedback API Key** suna buɗaɗɗen. Ma'aikatan da ke amfani da shi da kuma maƙonno na feedback yana bayyana ga masu amfani, amma ba za a tura su wani sabon wuri ba.

## Brave Search API Key

A cikin tab ɗin **Advanced**, makonno na **Brave Search API Key** tana ba damar [Internet Search](../configuration/internet-search).

| Makonno | Bayanin |
|---|---|
| **Brave Search API Key** | Wannan shine API key ɗinka daga dashboard ɗin Brave Search developer. Dole ka saka shi don ba damar neman wajen Intanet (internet search) a cikin asistan AI. |

Labarin makonno yana nuna wani link mai sauƙi zuwa hanyar shiga sabon bayanai na Brave Search API. Ka bar shi buɗaɗɗen idan kana so ka yi la'akari da neman wajen Intanet (internet search).

Ka gani [Internet Search](../configuration/internet-search) don karatu bayanan da suka dace ga masu amfani game da wannan ƙwarewa.

## Feature Flags

Wannan makonno ya shigo a cikin v1.9.0, tab ɗin **Settings → Feature Flags** tana ba ka damar canza (toggle switches) don ayyukan da ake buƙatar. Kowane flag yana ko an samar da shi ko kuma ba a samar da shi a duk wani wuri; a wannan lokacin ba za a iya canza shi ga kowane site ba.

### Samun Feature Flags

1. A cikin admin ɗin WordPress, ka je **Gratis AI Agent → Settings**.
2. Ka danna tab ɗin **Feature Flags**.

### Makonne na Tabbatarwa (Access Control Flags)

| ɗaukar | Default | Bayanai |
|---|---|---|
| **Bincike ga Administrators** | Off | Idan aka aiki, kawai masu amfani da girar `administrator` za su iya buɗe panel tattaunawar AI Agent. Duk wani girara ba za su gani saƙon "Tuntuɓi administrator ɗinku". |
| **Bincike ga Network Admins** | Off | Idan aka aiki a kan yanayin multisite, kawai Super Admins za su iya amfani da agent. Administrators site na musamman an hana su. Wannan yana da muhimmanci fi "Bincike ga Administrators" idan dukansu suka shiga. |
| **Ba a ba masu biyu damar amfani** | Off | Yayin da aka aiki, masu amfani da girar `subscriber` za su iya amfani da wajen tattaunawa amma an ba su ƙarfin karatu kawai (ba za su iya samarwa post ko canza ayyuka). |
| **Harshe ga waɗanda ba sun shiga** | Off | Yana haɗa da yanayin shiga Ultimate Multisite. Idan aka aiki, ana ɓata tattaunawa ga wuraren da ba su da shiga mai aiki. |

### Bayanai na Gani (Branding Flags)

| ɗaukar | Default | Bayanai |
|---|---|---|
| **Neman "Gratis AI Agent" Footer** | Off | Yana tura wannan lissafin gani da aka nuna a ƙasan wajen tattaunawa. An ba shi don samar da yanayin site (white-label). |
| **Sunan Agent na Musamman** | *(blank)* | Yana mayar da gurbin sunan "Gratis AI Agent" na asali a cikin babban sako na tattaunawa da menu na administrator da sunan kansa. Bari shi a matsayin ba shiga don amfani da na asali. |
| **Neman Wajen Zaɓar Agent** | Off | Idan aka aiki, masu amfani ba za su iya canza tsakanin waɗancin biyar agent-su da ake samu a cikin yanayin. Agent ɗin da ke aiki yana da tsakiya ga abin da aka sanya a matsayin na asali a Settings → General. |
| **Amfani da Hoto na Site a Matsayin Avatar** | Off | Yana mayar da gurbin ikon AI na asali a cikin babban sako na tattaunawa da ikon site na WordPress (wanda aka sanya a ƙasa Appearance → Customize → Site Identity). |

### Aiki da Canje-canje

Danna **Save Settings** bayan an canza kowane ɗaukar. Canje-canje suna fara aiki nan take — ba a buƙatar fusa cache ko sake aiki na plugin.
