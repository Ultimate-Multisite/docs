---
title: Интернет-поиск
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Интернет Поиск {#internet-search}

Gratis AI Agent v1.5.0 добавляет возможность **Интернет Поиска**, которая позволяет ИИ-помощнику получать самую свежую информацию из сети во время разговора. Это работает на основе [Brave Search API](https://brave.com/search/api/) или [Tavily API](https://tavily.com/).

## Как это работает {#how-it-works}

Когда интернет поиск включен, помощник может автоматически запросить у вашего настроенного поискового провайдера информацию, когда поймет, что вопрос требует актуальной или внешней информации — например, свежих новостей, текущих цен или документации, которая могла измениться с момента обучения модели.

Результаты извлекаются в режиме реального времени и добавляются в контекст помощника перед тем, как он сгенерирует ответ. Помощник сообщает, когда он использовал результаты поиска для ответа на вопрос.

## Включение Интернет Поиска {#enabling-internet-search}

Для интернет-поиска вам понадобится API-ключ от выбранного поискового провайдера. Чтобы настроить его:

1. Перейдите в **Gratis AI Agent → Settings → Advanced**.
2. Найдите выпадающее меню **Internet Search Provider** и выберите либо **Brave Search**, либо **Tavily**.
3. Введите свой API-ключ в соответствующее поле. Ссылки для регистрации отображаются рядом с каждым полем.
4. Нажмите **Save Settings** (Сохранить настройки).

Как только ключ сохранен, возможность Интернет Поиска автоматически становится доступной помощнику.

## Brave Search {#brave-search}

### Получение API-ключа Brave Search {#obtaining-a-brave-search-api-key}

1. Перейдите на [страницу Brave Search API](https://brave.com/search/api/).
2. Зарегистрируйтесь для получения плана. Доступна бесплатная версия с лимитом запросов в месяц.
3. Скопируйте свой API-ключ из панели разработчика Brave Search.
4. Вставьте его в поле **Brave Search API Key** в настройках Gratis AI Agent.

### Лимиты использования {#usage-limits}

Использование Brave Search üzerinden yapılan sorgu sayısına göre ücretlendirilir. Bir aramayı tetikleyen her yapay zeka yanıtı bir sorgu olarak sayılır. Beklenmedik ücretlerden kaçınmak için kullanımınızı [Brave Search developer dashboard](https://brave.com/search/api/) adresinden takip edin.

## Tavily {#tavily}

Superdav AI Agent v1.10.0, daha zengin arama sonuçları ve gelişmiş araştırma yetenekleri sunan bir alternatif internet arama sağlayıcısı olarak **Tavily**'yi ekler.

### Tavily API Anahtarı Alma {#obtaining-a-tavily-api-key}

1. [Tavily API sayfasını](https://tavily.com/) ziyaret edin.
2. Bir hesap oluşturun. Aylık istek limiti olan ücretsiz bir katman mevcuttur.
3. API anahtarınızı Tavily dashboard'undan kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Tavily API Key** alanına yapıştırın.

### Kullanım Limitleri {#usage-limits-1}

Kullanım, yapılan API çağrı sayısına göre Tavily tarafından ücretlendirilir. Bir aramayı tetikleyen her yapay zeka yanıtı bir çağrı olarak sayılır. Beklenmedik ücretlerden kaçınmak için kullanımınızı [Tavily dashboard](https://tavily.com/) adresinden takip edin.

## İnternet Aramasını Devre Dışı Bırakma {#disabling-internet-search}

API anahtarını aktif arama sağlayıcısı alanından kaldırın ve kaydedin. Bu, asistan tarafından İnternet Arama özelliğinin sunulmayacağı anlamına gelir.

:::note
İnternet araması, asistan bir cevap üretmeden önce arama sonuçlarını beklemesi gerektiği için yanıtlara gecikme (latency) ekler. Zaman açısından hassas kullanım durumları için gerçek zamanlı aramanın gerekli olup olmadığını veya asistanın yerleşik bilgisinin yeterli olup olmadığını düşünün.
:::
