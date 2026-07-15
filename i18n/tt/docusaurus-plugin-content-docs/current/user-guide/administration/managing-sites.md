---
title: Сайтин Управление
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Сайтларды Управление (Managing Sites)

Сайтлар (или подсайты) ваш WaaS бизнесаin əsasını təşkil edir. Ultimate Multisite-da 3 növ sayt var:

- **Müştəri sahibliyi ilə** — Müəyyən müştərilərə aid olan saytlar
- **Sayt Şablonları (Site Templates)** — Müştərilərin başlanğıc nöqtəsi kimi seçə biləcəyi əvvəlcədən təyin edilmiş saytlar
- **Əsas Sayt (Main Site)** — Sizin əsas şəbəkə saytınız

## Saytları Görmək (Viewing Sites) {#viewing-sites}

Şəbəkəndəki bütün altsaytları görmək üçün **Ultimate Multisite → Sites** bölməsinə keçin. Hər sayt növü ilə işarələnir və siz onları Bütün Saytlar, Müştəri Sahibliyi, Şablonlar və Vəzifədə (Pending) olaraq filtrləyə bilərsiniz.

![Sites list page](/img/admin/sites-list.png)

## Yeni Sayt Əlavə Etmək (Adding a New Site) {#adding-a-new-site}

Yeni bir sayt yaratmaq üçün **Add Site** düyməsini basın. Siz aşağıdakıları təmin etməlisiniz:

- **Site Title** — Нового сайта adı
- **Site URL** — Сайтın alan adı/yolu
- **Site Type** — Bu bir müşteri sitesi mi, şablon mu yoksa normal site mi olduğunu belirtir.

**Copy Site** seçeneği, mevcut bir site şablonuna dayanarak yeni bir site oluşturmanıza olanak tanır. Etkinleştirildiğinde, başlangıç noktası olarak hangi şablonu kullanacağınızı seçebilirsiniz. Medya dosyalarını dahil etmek için **Copy Media on Duplication**'ın etkin olduğundan emin olun.

## Mevcut Bir Siteyi Yönetme {#managing-an-existing-site}

Herhangi bir siteye tıklayarak **Manage** (Yönet) butonuna basarsanız, **Edit Site** (Siteyi Düzenle) sayfasına gidersiniz. Burada şunları bulabilirsiniz:

### Temel Bilgiler {#basic-information}

Sitenin adı, türü, site ID'si ve açıklaması. Ayrıca eşlenmiş alan adı, ilişkili üyelik bilgileri ve siteyi sahip olan müşteri hesabı da burada görünür.

### Site Seçenekleri {#site-options}

Sitenin yeteneklerini ve sınırlarını yapılandırın:

- **Посещение лимиты (Visit limits)** — Максимальное количество посещений сайта.
- **Лимиты для учетных записей пользователей (User account limits)** — Лимиты для каждого типа роли пользователя.
- **Дисковое пространство (Disk space)** — Квота на хранение данных для сайта.
- **Пользовательский домен (Custom domain)** — Включение сопоставления домена для этого сайта.
- **Видимость плагинов и тем (Plugin and theme visibility)** — Управление тем, какие плагины и темы видны, скрыты или предварительно активированы.

По умолчанию сайты следуют лимитам, установленным на уровне членства. Установка лимитов на уровне самого сайта отменяет настройки членства.

### Связи (Associations) {#associations}

Под настройками сайта вы найдете информацию о:

- **Сопоставленных доменах (Mapped domains)**, связанных с сайтом
- **Членстве (Membership)**, к которому принадлежит сайт
- **Клиентском аккаунте (Customer account)**, связанном с сайтом

### Правая боковая панель (Right Sidebar) {#right-sidebar}

С правой стороны вы можете:

* Сайты включение/выключение тумблер кнопкамен сделать можно.*
* Сайтын типын değiştirebilirsiniz veya sahibi başka birine atayabilirsiniz.*
* Bir web sitesi resmi/küçük resmini ayarlayın (site şablonları için ön yüzde gösterilir).*
* Siteyi kalıcı olarak silebilirsiniz.*

:::warning
Bir siteyi silmek geri alınamaz. Site ve tüm içeriği kalıcı olarak kaldırılacaktır.
:::
