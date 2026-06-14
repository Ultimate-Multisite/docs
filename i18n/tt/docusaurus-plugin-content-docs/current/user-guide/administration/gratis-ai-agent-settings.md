---
title: Бесплатный настройки ИИ-агента
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Ayarları

Gratis AI Agent't'teki **Ayarlar → Gelişmiş** ekranı, v1.5.0 sürümünde tanıtılan arka uç entegrasyonları için yönetici düzeyinde yapılandırma sağlar. Bu sayfa **Geri Bildirim Uç Noktası (Feedback Endpoint)** alanlarını ve beklenen formatını belgeler.

## Ayarlara Erişim

1. WordPress yönetim panelinde, **Gratis AI Agent → Ayarlar** bölümüne gidin.
2. **Gelişmiş (Advanced)** sekmesine tıklayın.

## Geri Bildirim Uç Noktası Yapılandırması

Geri bildirim uç noktası, bir kullanıcı başparmak aşağı düğmesi aracılığıyla geri bildirim gönderdiğinde, otomatik istem panosu (auto-prompt banner) veya `/report-issue` komutu ile geldiğinde AI agent'tan POST isteklerini alır.

| Улты | Описание |
|---|---|
| **Feedback Endpoint URL** | Это URL, куда приходят отзывы в виде HTTP POST запросов с JSON телом. |
| **Feedback API Key** | Токен типа bearer, который отправляется в заголовке `Authorization` каждого запроса на отзыв. Если ваш эндпоинт не требует аутентификации, оставьте его пустым. |

### Ожидаемая JSON-нагрузка (Payload)

Ваш эндпоинт для отзывов должен принимать JSON тело с как минимум следующими полями:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Ответ был неверным относительно ценообразования.",
  "triage_category": "factual_error"
}
```

В зависимости от контекста диалога в нагрузке могут присутствовать дополнительные поля.

### Значения `triage_category`

AI триаж (triage) katagoriya uchun payload'ni yuborishdan oldin quyidagi qiymatlardan birini `triage_category`-ga beradi:

| Qiymat | Ma'nosi |
|---|---|
| `factual_error` | Assistent noto'g'ri fakt ma'lumotini taqdim etdi. |
| `unhelpful_answer` | Javob texnik jihatdan to'g'ri bo'ldi, lekin foydali emas edi. |
| `inappropriate_content` | Javobda foydalanuvchilarga ko'rsatilmasligi kerak bo'lgan kontent mavjud edi. |
| `other` | Fikr-mulohaza ma'lum bir kategoriya bilan mos kelmadi. |

### Tasdiqlash (Authentication)

Agar sizning endpointingiz tasdiqlanishni talab qilsa, **Feedback API Key** maydonini o'z bearer tokeningiz bilan sozlang. Agent quyidagicha yuboradi:

```
Authorization: Bearer <your-api-key>
```

Agar **Feedback API Key** maydoni bo'sh bo'lsa, hech qanday `Authorization` sarlavhasi (header) yuborilmaydi.

### Feedback Yig'ishni O'chirish

**Feedback Endpoint URL** и **Feedback API Key** полей оставьте пустыми. Кнопка "палец вниз" и интерфейс обратной связи остаются видимыми для пользователей, но отправки не перенаправляются ни в какой внешний сервис.

## Brave Search API Key

Также на вкладке **Advanced** поле **Brave Search API Key** позволяет включить возможность [Internet Search](../configuration/internet-search).

| Поле | Описание |
|---|---|
| **Brave Search API Key** | Ваш API ключ из панели разработчика Brave Search. Требуется для включения поиска в интернете в AI-ассистенте. |

Название поля содержит кликабельную ссылку на страницу регистрации Brave Search API. Оставьте пустым, чтобы отключить поиск в интернете.

См. [Internet Search](../configuration/internet-search) для документации конечного пользователя по этой функции.

## Feature Flags

v1.9.0 sürümünde tanıtılan **Settings → Feature Flags** sekmesi, isteğe bağlı funksiyalar için açma/kapama düğmeleri (toggle switches) içerir. Her bir bayrak ağ genelinde ya etkinleştirilir ya da devre dışı bırakılır; şu an için site bazında bu ayarı geçersiz kılmak mümkün değildir.

### Feature Flags'a Erişim

1. WordPress admin panelinde **Gratis AI Agent → Settings** yolunu izleyin.
2. **Feature Flags** sekmesine tıklayın.

### Access Control Flags

| Flag | Default | Описание |
|---|---|---|
| **Restrict to Administrators** | Выкл. | Если включено, только пользователи с ролью `administrator` могут открыть панель чата AI Agent. Все остальные роли увидят сообщение «Свяжитесь с администратором». |
| **Restrict to Network Admins** | Выкл. | При включении в сети мультисайтов только Суперадминистраторы могут использовать агента. Администраторы отдельных сайтов заблокированы. Это имеет приоритет над настройкой «Ограничить доступ для администраторов», если оба параметра включены. |
| **Allow Subscriber Access** | Выкл. | Если включено, пользователи с ролью `subscriber` могут использовать интерфейс чата, но их возможности ограничены только чтением (нет создания постов или изменения настроек). |

| **Non-members üçün deaktivasiya etmək** | Off | Ultimate Multisite üyelik statusu ilə inteqrasiya olunur. Bu seçki aktiv olduqda, aktiv üyelik olmayan saytlarda çat (chat) gizlənir. |

### Brendin İşaretləri (Branding Flags)

| Flag | Default | Description |
|---|---|---|
| **"Powered by Gratis AI Agent" Футеруны Сүрү** | Выкл. | Это убирает строку с указанием бренда, которая показывается внизу чат-виджета. Рекомендуется для развертываний под собственным брендом (white-label). |
| **Наимэ Частичного Агента** | *(пусто)* | Заменяет стандартную надпись "Gratis AI Agent" в заголовке чата и меню администратора на ваше собственное название продукта. Оставьте пустым, чтобы использовать стандартное имя. |
| **Скрыть Выбор Агента** | Выкл. | Когда включено, пользователи не смогут переключаться между пятью встроенными агентами. Текущий агент будет зафиксирован на том, который настроен по умолчанию в Настройках → Общие (Settings → General). |
| **Использовать Иконку Сайта как Аватар Чата** | Выкл. | Заменяет стандартную иконку ИИ в заголовке чат-виджета на иконку вашего сайта WordPress (настраивается в Внешний вид → Настроить → Идентичность сайта). |

### Изменений Uygulama

Hangi bayrağı (flag) dəyişdikdан sonra **Settings-i Kaydet** düğmenine basın. Dəyişikliklər dərhal işə düşür — öncə cache boşaltmaq və ya plugin-i yenidən aktivləşdirmək lazım degeniz yoxdur.
