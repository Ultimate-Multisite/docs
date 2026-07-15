---
title: Internet Qidiruvi
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Qidiruvi

Gratis AI Agent v1.5.0 ning yangi funksiyasi bo'lgan **Internet Qidiruvi** (Internet Search) qo'shildi. Bu orqali sun'iy yordamchi suhbat davomida veb-saytlardan eng yangi ma'lumotlarni olish imkonini beradi. Bu [Brave Search API](https://brave.com/search/api/) yoki [Tavily API](https://tavily.com) orqali ishlaydi.

## Qanday Ishlaydi {#how-it-works}

Internet qidiruvi yoqilganida, yordamchi model savolga hozirgi yoki tashqi ma'lumot kerakligini aniqlaganida siz sozlagan qidiruv provayderiga avtomatik so'rov yuboradi — masalan, yangi xabarlar, jonli narxlar yoki modelning o'qitish tugash sanasidan beri o'zgargan hujjatlar.

Natijalar real vaqtda olib olinadi va javobni yaratishdan oldin yordamchining kontekstiga kiritiladi. Yordamchi savolga javob berish uchun qidiruv natijalaridan foydalanganini ko'rsatadi.

## Internet Qidiruvni Faollashtirish {#enabling-internet-search}

Internet qidiruvi uchun tanlagan qidiruv provayderidan API kaliti kerak bo'ladi. Uni sozlash uchun:

1. **Gratis AI Agent → Settings → Advanced** (Sozlamalar → Kengaytirilgan) ga o'ting.
2. **Internet Search Provider** (Internet Qidiruv Provayderi) tushuvchan menyusini toping va **Brave Search** yoki **Tavily** ni tanlang.
3. API kalitingizni tegishli maydonga kiriting. Har bir maydon yonida ro'yxatdan olinish (sign-up) havolalari ko'rsatiladi.
4. **Save Settings** (Sozlamalarni Saqlash) tugmasini bosing.

Kalit saqlanganidan so'ng, Internet Qidiruvi imkoniyati avtomatik ravishda yordamchiga mavjud bo'ladi.

## Brave Search {#brave-search}

### Brave Search API Kaliti Olish {#obtaining-a-brave-search-api-key}

1. [Brave Search API sahifasiga](https://brave.com/search/api/) tashrif buyuring.
2. Reja uchun ro'yxatdan oling. Oylik so'rov cheklovi bilan bepul daraja mavjud.
3. Brave Search developer dashboardidan API kalitingizni nusxalang.
4. Uni Gratis AI Agent sozlamalaridagi **Brave Search API Key** maydoniga joylang.

### Foydalanish Cheklovlari {#usage-limits}

Использование оплачивается Brave Search-ом на основе количества выполненных запросов. Каждый ответ ИИ, который инициирует поиск, считается одним запросом. Неожиданные списания избежать для мониторинга вашего использования в [панели разработчика Brave Search](https://brave.com/search/api/).

## Tavily {#tavily}

Superdav AI Agent v1.10.0 добавляет **Tavily** как альтернативный провайдер интернет-поиска, предлагая более богатые результаты поиска и расширенные возможности для исследований.

### Получение API-ключа Tavily {#obtaining-a-tavily-api-key}

1. Перейдите на [страницу API Tavily](https://tavily.com/).
2. Зарегистрируйтесь. Доступен бесплатный уровень с лимитом запросов в месяц.
3. Скопируйте свой API-ключ из панели управления Tavily.
4. Вставьте его в поле **Tavily API Key** в настройках Gratis AI Agent.

### Лимиты использования {#usage-limits-1}

Использование оплачивается Tavily на основе количества выполненных вызовов API. Каждый ответ ИИ, который инициирует поиск, считается одним вызовом. Следите за своим использованием в [панели управления Tavily](https://tavily.com/), чтобы избежать неожиданных списаний.

## Отключение интернет-поиска {#disabling-internet-search}

Удалите API-ключ из поля активного провайдера поиска и сохраните изменения. Возможность поиска в интернете больше не будет предлагаться ассистенту.

:::note
Поиск в интернете добавляет задержку ответам, потому что ассистент должен дождаться результатов поиска перед генерацией ответа. Для задач, требующих высокой оперативности, рассмотрите, нужна ли поиск в реальном времени или достаточно встроенных знаний ассистента.
:::
