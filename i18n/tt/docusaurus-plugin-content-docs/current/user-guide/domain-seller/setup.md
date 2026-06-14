---
title: Настройка и конфигурация поставщика
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Домен Продавец: Настройка и Конфигурация Провайдера

Дополнение Domain Seller поставляется с управляющим мастером настройки, который проведет вас через каждый необходимый шаг. Эта страница описывает процесс работы мастера и то, как настраивать или перенастраивать провайдеров после этого.

## Требования

- **Multisite Ultimate** v2.4.12 или выше, активированный по сети
- **PHP** 7.4+
- API учетные данные для хотя бы одного поддерживаемого регистратора

## Мастер настройки при первом запуске

Мастер настройки запускается автоматически в первый раз, когда вы активируете плагин по сети. Он также доступен в любое время через **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Шаг 1 — Выберите провайдера

Выберите регистратора, с которым вы хотите подключиться. Поддерживаемые варианты:

| Провайдер | Управление DNS | Конфиденциальность WHOIS |
|---|---|---|
| OpenSRS | Да | Да |
| Namecheap | Нет | Да (WhoisGuard, бесплатно) |
| HostAfrica | Да | Да (Защита ID) |
| Openprovider | Да | Да |
| Hostinger | Через сопоставление домена хостинга Hostinger для хостинговых доменов | Да |
| GoDaddy | Нет | Нет |
| ResellerClub | Да | Нет |
| NameSilo | Нет | Нет |
| Enom | Да | Нет |

### Шаг 2 — Введите учетные данные

У каждого провайдера разные поля для ввода данных:

**OpenSRS** — Имя пользователя и приватный ключ (из Панели управления Reseller Control Panel OpenSRS)

**Namecheap** — Имя пользователя и API ключ (из Account › Tools › API Access)

**HostAfrica** — Конечная точка API Reseller Domains и учетные данные от модуля реселлера HostAfrica. Отдельная песочница пока не документирована; тестируйте безопасными операциями только для чтения перед запуском реальных регистраций.

**Openprovider** — Имя пользователя и пароль с включенным доступом к API. Опциональный режим песочницы использует sandbox API Openprovider, а опциональный пароль клиента может быть использован повторно для регистраций.

**Hostinger** — Core Hostinger entegrasyonundan gelen paylaşımlı Hostinger hPanel API token'ı. Aynı token, ana alan adı eşleştirmesi ve Alan Adı Satıcısı kayıt işlemleri için kullanılır.

**GoDaddy** — API anahtarı ve gizli anahtar (developer.godaddy.com'dan)

**ResellerClub** — Reseller ID ve API anahtarı (ResellerClub kontrol panelinden)

**NameSilo** — API anahtarı (namesilo.com › Account › API Manager'dan)

**Enom** — Hesap ID ve API token'ı

Canlıya geçmeden önce sağlayıcının test ortamına karşı test yapmak için mevcutsa **Sandbox modunu** kontrol edin.

### Adım 3 — Bağlantıyı test etme

**Test Connection**'a tıklayın. Sihirbaz, kimlik bilgilerini ve bağlantıyı doğrulamak için hafif bir API çağrısı gönderir. Devam etmeden önce herhangi bir kimlik bilgisi sorununu düzeltin.

### Adım 4 — TLD'leri içe aktarma

Bağlı sağlayıcıdan tüm mevcut TLD'leri ve toptan fiyatlandırmayı çekmek için **Import TLDs**'e tıklayın. Bu, alan adı ürünlerinde kullanılan TLD listesini doldurur. Büyük TLD kataloglarına sahip sağlayıcılar için içe aktarma 30–60 saniye sürebilir.

TLD'ler ayrıca günlük bir zamanlanmış cron işi aracılığıyla otomatik olarak bir kez senkronize edilir.

### Adım 5 — Bir alan adı ürünü oluşturma

Sihirbaz, %10 kar marjıyla varsayılan bir genel (catch-all) alan adı ürünü oluşturur. Bu ürünü hemen düzenleyebilir veya **Ultimate Multisite › Products** altında manuel olarak atlayıp ürünler oluşturabilirsiniz.

Tam ürün yapılandırma kılavuzu için [Domain Products and Pricing](./domain-products)'e bakın.

---

## Bir sağlayıcıyı yeniden yapılandırma

**Network Admin › Ultimate Multisite › Settings › Domain Seller**'a gidin (veya eklenti listesindeki **Settings**'e tıklayın).

Ayarlar sayfası şunları içerir:

- **Домен продажу включить** — весь этот функционал можно включать или выключать по переключателю.
- **По умолчанию провайдер** — это тот провайдер, который используется для поиска доменов и новых продуктов.
- **Максимум TLD на поиск** — сколько доменных расширений (TLD) проверять, когда клиент что-то ищет; чем больше значение, тем больше вариантов вы увидите, но поиск будет работать медленнее.
- **Длительность кэша доступности** — как долго сохранять в кэше результаты проверки доступности и цен; меньшие значения дают более точные данные, но увеличивают количество запросов к API.
- **Управление доменными продуктами** — быстрая ссылка на список продуктов.
- **Настройка провайдеров** — открывает Мастер интеграции для добавления или изменения настроек провайдеров.

### Добавление второго провайдера

Нажмите **Настроить провайдеров** и запустите мастер снова для нового регистратора. Вы можете настроить несколько провайдеров одновременно. Назначьте каждый доменный продукт конкретному провайдеру или оставьте его по умолчанию.

### Ручная синхронизация TLD

На странице настроек нажмите **Синхронизировать TLD** рядом с любым настроенным провайдером, чтобы получить самые свежие цены. Это полезно после того, как провайдер обновит оптовые цены или добавит новые доменные расширения (TLD).

---

## Логи

Каждый провайдер пишет в свой собственный канал логов. Логи можно просмотреть в разделе **Network Admin › Ultimate Multisite › Logs**:

| Лог канал | Содержимое |
|---|---|
| `domain-seller-registration` | Все попытки регистрации (успешные и неудачные) |
| `domain-seller-renewal` | Результаты задания на продление |
| `domain-seller-opensrs` | Сырая активность API OpenSRS |
| `domain-seller-namecheap` | Сырая активность API Namecheap |
| `domain-seller-hostafrica` | Сырая активность API HostAfrica |
| `domain-seller-openprovider` | Сырая активность API Openprovider |
| `domain-seller-hostinger` | Сырая активность API Hostinger |
| `domain-seller-godaddy` | Сырая активность API GoDaddy |
| `domain-seller-resellerclub` | Сырая активность API ResellerClub |
| `domain-seller-namesilo` | Сырая активность API NameSilo |
| `domain-seller-enom` | Сырая активность API Enom |

---

## Примечания о возможностях провайдеров

Не все API регистраторов предоставляют одни и те же операции. Дополнение показывает неподдерживаемые операции с понятными ошибками для администратора, вместо того чтобы молча завершаться неудачей.

- **HostAfrica** поддерживает самый широкий рабочий процесс реселлера в реальном времени, включая поиск, синхронизацию TLD/цены, регистрацию, продление, перенос, обновление имен серверов, DNS-записи, коды EPP, блокировку регистратора и защиту ID.
- **Openprovider** поддерживает синхронизацию TLD по цене реселлера, регистрацию, продление, переносы, обновление имен серверов, DNS-зоны, коды EPP, блокировку регистратора и конфиденциальность WHOIS. Он аутентифицируется с кратковременным токеном bearer, который дополнение обновляет автоматически.
- **Hostinger** поддерживает поиск доступности, регистрацию, поиск портфолио, обновление имен серверов, блокировку регистратора и конфиденциальность WHOIS через общий токен API hPanel. Публичный API доменов Hostinger не предоставляет информацию о ценах для реселлеров/оптовых покупателей, входящий перенос, явное продление или получение кода EPP; продления происходят только автоматически.
