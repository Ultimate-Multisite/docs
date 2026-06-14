---
title: Касса Учур и Клиентский DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Alanı ve Müşteri DNS Yönetimi

## Alan Seçim Checkout alanı

**Alan Seçimi** alanı, müşterilere sitelerinin alan adını nasıl alacaklarına dair bir seçim sunan bir checkout öğesidir. Alan satışı yapabilmek için bunu herhangi bir checkout formuna ekleyin.

### Alanı checkout formuna ekleme

1. **Network Admin › Ultimate Multisite › Checkout Forms** yoluna gidin
2. Bir checkout formu açın veya oluşturun
3. Checkout düzenleyicisinde **Add Field** (Alan Ekle) butonuna tıklayın
4. Alan listesinden **Domain Selection** (Alan Seçimi) seçeneğini seçin
5. Alan seçeneklerini yapılandırın (aşağıya bakın)
6. Formu kaydedin

### Alan seçenekleri

**Domain modları** — Müşterinin hangi sekmeleri göreceğini seçin. Her mod bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir:

| Mod | Ne yapar? |
|---|---|
| **Subdomain** (Alt alan adı) | Müşteri ağınızda ücretsiz bir alt alan adı kullanır (örneğin, `mysite.yournetwork.com`). Ödeme gerekmez. |
| **Register New Domain** (Yeni Alan Adı Kaydet) | Müşteri yeni bir alan adı arar ve bunu yapılandırdığınız sağlayıcı aracılığıyla kaydeder. Fiyatlandırma için eşleşen alan adı ürününü kullanır. |
| **Existing Domain** (Mevcut Alan Adı) | Müşteri zaten sahip olduğu bir alanı eşleştirir. Kayıt ücreti yoktur. Alan otomatik olarak sitelerine bağlanır. |

**Varsayılan mod** — Üç mod da etkinleştirildiğinde, hangi sekmenin önce açılacağını belirleyin. Alan kaydını isteğe bağlı tutmak için **Subdomain** olarak ayarlayın veya satın alımları teşvik etmek için **Register New Domain** olarak ayarlayın.

**Alan ürünü** — Bu alanı belirli bir alan adı ürününe bağlamak isteyebilirsiniz. Ayarlanmazsa, eklenti müşterinin aradığı TLD'ye (üst düzey alan adına) göre eşleşen ürünü otomatik olarak seçer.

### Kayıt bilgileri alanları

Bir müşteri **Register New Domain** (Yeni Alan Adı Kaydet) sekmesini seçtiğinde, checkout formu kayıt bilgilerini satır içinde ekler:

- Ad / Soyad
- E-posta adresi
- Adres (satır 1, şehir, eyalet/bölge, posta kodu, ülke)
- Telefon numarası

Все это требуется всеми регистраторами и проверяется перед тем, как будет сделан вызов API регистрации. Номера телефонов автоматически форматируются в международный формат `+CC.NNN`, который ожидают регистраторы.

### Автоматически сгенерированная URL сайта

Когда клиент регистрируется или привязывает домен, поле URL сайта автоматически заполняется выбранным доменом. Клиентам не нужно заполнять отдельное поле URL.

### Поведение поиска

- Доступность домена проверяется в реальном времени с помощью AJAX по мере ввода клиента текста
- Предлагаются альтернативные TLD (домены верхнего уровня), когда предпочтительный домен недоступен
- Цены подгружаются в режиме реального времени и отображаются четко (цена регистрации, цена продления, необязательная плата за конфиденциальность WHOIS)
- Коды купонов применяются к продуктам домена так же, как и к любому другому продукту

**Настройка отзывчивости поиска:**

```php
// Увеличить задержку дебаунса (в миллисекундах), чтобы уменьшить количество вызовов API при медленных соединениях
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // по умолчанию: 500
});
```

**Добавление пользовательских полей в форму поиска домена:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Дополнительные примечания',
    ];
    return $fields;
});
```

---

## Управление DNS клиентами

Клиенты могут управлять записями DNS для своих зарегистрированных доменов на странице **Мой аккаунт**, в разделе, относящемся к их домену.

### Поддерживаемые типы записей

| Тип | Использование |
|---|---|
| **A** | Сопоставление имени хоста с IPv4-адресом |
| **AAAA** | Сопоставление имени хоста с IPv6-адресом |
| **CNAME** | Создание псевдонима, указывающего на другое имя хоста |
| **MX** | Установка сервера почтового обмена |
| **TXT** | Добавление записей SPF, DMARC, верификации или других текстовых записей |

### Какие провайдеры поддерживают управление DNS?

DNS yönetimi (kayıtları ekleme, düzenleme, silme) **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** ve **Openprovider** ile mevcuttur. **Hostinger** alan adları isim sunucularını Alan Satıcısı (Domain Seller) aracılığıyla güncelleyebilir; barındırılan alan adlarının DNS kayıtları ise çekirdek Hostinger alan eşleştirme entegrasyonu tarafından yönetilir. Namecheap, GoDaddy ve NameSilo alan adları durum ve son kullanma tarihi bilgilerini gösterse de, DNS'in doğrudan kayıt kuruluşunun kontrol panelinde yönetilmesi gerekir.

### Varsayılan DNS kayıtları

Bir alan adı kaydedildiğinde otomatik olarak uygulanan varsayılan DNS kayıtlarını yapılandırabilirsiniz. **Ayarlar › Domain Seller › Default DNS Records** yolunu izleyin.

Varsayılan kayıt değerleri iki tür token'u destekler:

| Token | Yerine Geçen Değer |
|---|---|
| `{DOMAIN}` | Kayıtlı alan adı (örneğin, `example.com`) |
| `{SITE_URL}` | Müşterinin sitesi için WordPress sitesi URL'si |

**Örnek — apex alan adını ve www'yu sunucu IP adresinize yönlendirme:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Yönetici: DNS görüntüleme ve düzenleme

Ağ yöneticileri, herhangi bir müşteri alan adının DNS kayıtlarını **Network Admin › Ultimate Multisite › Domains** içindeki alanın düzenleme sayfasından görüntüleyebilir ve düzenleyebilirler.
