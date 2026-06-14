---
title: Ҳамаҷонибаи Ҷойгиррории Агенти Безоштрафӣ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Нарӯи Истилоҳотҳои AI Agent Бепул

Экран **Settings → Advanced** дар Gratis AI Agent имконият медиҳад, ки барои тартиб додани пайвастшавӣ (integrations) ба корпӯйҳо, ки дар версияи v1.5.0 оварда шудаанд, аз ҷониби администратор истифода шавад. Ин саҳифа мазмун **Feedback Endpoint** ва формати интизоришудаи онро тасвир мекунад.

## Дастрасӣ ба Нарӯи Истилоҳот (Feedback Endpoint)

1. Дар администри WordPress, ба **Gratis AI Agent → Settings** равед.
2. Ба табби **Advanced** клик кунед.

## Тарзисозии Feedback Endpoint

Нарӯи истилоҳот (feedback endpoint) ҳадафи гирифтани лоиҳаҳои POST аз ҷониби AI agent аст, ҳар вақте ки корбар тавзеъи фидбэк-ро тавассути тугмаи "thumbs-down", банер автоматикӣ ё командаи `/report-issue` пешниҳод мекунад.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Адреси (URL), куда приходят отзывы в виде HTTP POST запросов с телом в формате JSON. |
| **Feedback API Key** | Токен типа bearer, который отправляется в заголовке `Authorization` каждого запроса на отзыв. Оставляйте пустым, если ваш эндпоинт не требует аутентификации. |

### Ожидаемая структура JSON-запроса (Payload)

Ваш конечный пункт для обратной связи должен принимать тело в формате JSON с как минимум следующими полями:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Ответ был неверным относительно ценообразования.",
  "triage_category": "factual_error"
}
```

В зависимости от контекста диалога в полезной нагрузке могут присутствовать дополнительные поля.

### Значения `triage_category`

Laya-i tahlili AI (AI triage layer) yek az qadamlari zireyi ro dar `triage_category` qiymat yeki az inyo beram va ba'd az payload bakhshid:

| Qiymat | Ma'no |
|---|---|
| `factual_error` | Assistent ma'lumot-e haqiqati no-dor beradi. |
| `unhelpful_answer` | Javob texnik ji jihat to'g'ri bo'ldi, ammo foydali emas edi. |
| `inappropriate_content` | Javobda foydalanuvchilarga ko'rsatilmasligi kerak bo'lgan kontent mavjud edi. |
| `other` | Fikr-mulohaza ma'lum bir kategoriya bilan mos kelmadi. |

### Tasdiqlash (Authentication)

Agar sizning endpointingiz tasdiqlanishni talab qilsa, **Feedback API Key** maydonini olingan token bilan sozlang. Agent quyidagicha yuboradi:

```
Authorization: Bearer <your-api-key>
```

Agar **Feedback API Key** maydoni bo'sh bo'lsa, hech qanday `Authorization` sarlavhasi (header) yuborilmaydi.

### Feedback Yig'ishni O'chirish

URL-и **Feedback Endpoint** ва **Feedback API Key** را خالي بگذارید. دکمه‌ای که نشان دهنده نظر منفی است و رابط کاربری فیدبک برای کاربران قابل مشاهده باقی می‌ماند، اما ارسال‌ها به هیچ سرویس خارجی منتقل نمی‌شوند.

## Brave Search API Key

هم در تب **Advanced**, فیلد **Brave Search API Key** امکان استفاده از قابلیت جستجوی اینترنت [Internet Search](../configuration/internet-search) را فراهم می‌کند.

| Field | Description |
|---|---|
| **Brave Search API Key** | کلید API شما از داشبورد توسعه‌دهندگان Brave Search. برای فعال کردن جستجوی اینترنت در دستیار هوش مصنوعی مورد نیاز است. |

برچسب فیلد شامل لینکی قابل کلیک به صفحه ثبت‌نام API Brave Search است. اگر خالی بگذارید، جستجوی اینترنت غیرفعال می‌شود.

برای مستندات کاربران نهایی در مورد این ویژگی به [Internet Search](../configuration/internet-search) مراجعه کنید.

## Feature Flags

Ҳатто дар версияи v1.9.0 ҳам мавҷуд омада шуд табби «Settings → Feature Flags», ки барои функсионалиятҳои ибораварии тугмаҳои вклю/off (toggle switches) дорад. Ҳар як флаг либос дар тамоми шабака фаъол ё беҳам тоифест; ҳоло имконияти тағйир додани онҳо ба ҳар як сайт мавҷуд нест.

### Дастрасӣ ба Feature Flags

1. Дар администри WordPress, ба **Gratis AI Agent → Settings** равед.
2. Ба табии «Feature Flags» клик кунед.

### Флагҳои Назорати Дастрасӣ

| Flag | Default | Тавсиф |
|---|---|---|
| **Restrict to Administrators** | Off | Ҳангори фаъол бошад, фақат корбародониҳое, ки намуди роле `administrator` доранд, метавонанд панелҳои чати AI Agent-ро оғоз кунанд. Бошқа ролерга "Имрӯз бо администратор тамос гиред" мегӯянот пешниҳод карда мешавад. |
| **Restrict to Network Admins** | Off | Ҳангори дар шабакаҳои муташкил (multisite) фаъол бошад, фақат Super Admin-ҳо метавонанд аз агент истифода баранд. Администраторҳои сайтҳои алоҳида бартарӣ мешаванд. Агар ҳарду ҳама фаъол бошанд, ин параметр "Restrict to Administrators"-ро ба даст меорад. |
| **Allow Subscriber Access** | Off | Ҳангори фаъол бошад, корбародониҳое, ки намуди роле `subscriber` доранд, метавонанд интерфейси чат-ро истифода баранд, аммо онҳо танҳо барои хондаи маълумот (read-only) маҳдуд мешаванд (создани пост ё тағйир додани калитуби идоракунӣ имкон надорад). |

| **Барномасозӣ барои набоядсонҳо** | Оффер | Интегратсия ба статуси узият (membership) дар Ultimate Multisite. Вақте ки ин корро фаъол мекунед, чат барои сайтуути онҳое, ки узияти фаоли надоранд, пӯшида мешавад. |

### Длаи бренд (Branding Flags)

| Flag | Default | Тавсиф |
|---|---|---|
| **Сардоштани фурӯши "Powered by Gratis AI Agent"** | Off | Ин қатори логотипиро аз пайтеки чат-вижет дар паёло бартараф мекунад. Он барои татбиқи мустақилли (white-label) пайваст аст. |
| **Номи Агенти Хосиятӣ** | *(холи)* | Номи "Gratis AI Agent" -ро дар сардори чат ва менюи администратор бо номи маҳсулоти худ ҷойгир мекунад. Агар холи гузоред, аз тавсия додани стандартӣ истифода мешавад. |
| **Сардоштани танзимоти Агент** | Off | Вақте ки ин корро фаъол мекунед, корбарон наметавонанд байни панҷ агенти сохтшуда тағйир диҳанд. Агенти ҳозира ба он чизе муқаррар мешавад, ки дар Settings → General (Танзимот → Умумият) ҳамчун стандартӣ гузошта шудааст. |
| **Истифодаи иконҳои сайт барои аватар чат** | Off | Иконҳои сохтшудаи AI-ро дар сардори чат-вижет аз иконҳои сайт (ки дар Appearance → Customize → Site Identity тартиб дода шудааст) ҷойгир мекунад.

### Барои татбиқи тағйирот

Баъди ба ҷои додани ҳар як дараҷа (flag) дар сабки **Save Settings**, тағйирот фавран амал мекунанд — лозим нест, ки кэшро тоза кунед ё плагинро аз нав фаъол намоед.
