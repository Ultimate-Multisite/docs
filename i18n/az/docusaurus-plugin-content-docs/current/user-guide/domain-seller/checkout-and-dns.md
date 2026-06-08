---
title: Ödəniş Sahəsi və Müştəri DNS-i
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Checkout Sahəsi və Müştəri DNS İdarəetməsi

## Domen Seçimi checkout sahəsi

**Domain Selection** sahəsi, müştərilərə sayt domenini necə əldə edəcəkləri barədə seçim imkanı verən bir checkout elementidir. Domen satma funksionallığını aktivləşdirmək üçün onu istənilən checkout formasına əlavə edin.

### Sahəni checkout formasına əlavə etmək

1. **Network Admin › Ultimate Multisite › Checkout Forms** yoluna keçin.
2. Bir checkout forması açın və ya yaradın.
3. Checkout redaktoru içində **Add Field** düymasına basın.
4. Sahələr siyahısından **Domain Selection** seçin.
5. Sahə parametrlərini təyin edin (aşağıya baxın).
6. Formanı yadda saxlayın.

### Sahə parametrləri

**Domain modes** — Müştərinin hansı tabları görəcəyini seçirsiniz. Hər bir rejim müstəqil şəkildə aktiv və ya deaktiv edilə bilər:

| Mode | Nə edir |
|---|---|
| **Subdomain** | Müştəri şəbəkənizdə pulsuz bir alt domen istifadə edir (məsələn, `mysite.yournetwork.com`). Ödəniş tələb edilmir. |
| **Register New Domain** | Müştəri yeni bir domen axtarır və onu təyin edilmiş provayderiniz vasitəsilə qeydiyyatdan keçirir. Qiymətləndirmə üçün uyğun gələn domen məhsulundan istifadə edir. |
| **Existing Domain** | Müştəri artıq sahib olduğu bir domeni əlaqələndirir. Qeydiyyat haqqı yoxdur. Domen avtomatik olaraq onun saytına əlaqələndirilir. |

**Default mode** — Üç rejim aktiv olduqda, hansı tab ilk açılacaq. Domen qeydiyyatını isteğe bağlı saxlamaq üçün **Subdomain** olaraq, və ya alış-verişi təşviq etmək üçün **Register New Domain** olaraq təyin edin.

**Domain product** — İsteğe bağlı olaraq bu sahəni müəyyən bir domen məhsuluna bağlayın. Təyin edilməsə də, addon müştərinin axtardığı TLD-yə əsaslanaraq uyğun gələn məhsulu avtomatik seçir.

### Registrant əlaqə sahələri

Müştəri **Register New Domain** tabını seçdikdə, checkout forması inline şəkildə registrant əlaqə sahələri əlavə edir:

- Ad / Soyad
- E-poçt ünvanı
- Ünvan (1-ci sətir, şəhər, vilayət/eyalet, poçt kodu, ölkə)
- Telefon nömrəsi

Bunlar bütün qeydiyyatçılar üçün vacibdir və qeydiyyat API çağırışı edilməzdən əvvəl yoxlanılır. Telefon nömrələri qeydiyyatçılar tərəfindən gözlənilən `+CC.NNN` beynəlxalq formatına avtomatik formatlanır.

### Avtomatik yaradılan sayt URL-i

Müştəri domen qeydiyyatdan keçirdikdə və ya onu əlaqələndirdikdə, sayt URL sahəsi seçilmiş domenə əsasən avtomatik doldurulur. Müştərilərin ayrıca bir URL sahəsi doldurmasına ehtiyacı yoxdur.

### Axtarış davranışı

- Müştəri yazarkən domen mövcudluğu AJAX ilə real vaxtda yoxlanılır.
- Təcihl edilmiş domen mövcud olmadıqda alternativ TLD təklifləri göstərilir.
- Qiymətlər canlı olaraq alınır və aydın şəkildə göstərilir (qeydiyyat qiyməti, yeniləmə qiyməti, isteğe bağlı WHOIS məxfiliyi haqqı).
- Kupon kodları domen məhsullarına hər hansı digər məhsul kimi tətbiq olunur.

**Axtarış cavabdehliyini tənzimləmək:**

```php
// API çağırışlarını ləng bağlantılarda azaltmaq üçün debounce gecikməsini (milisaniyə) artırın
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Domen axtarış formasına xüsusi sahələr əlavə etmək:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Müştəri DNS idarəetməsi

Müştərilər qeydiyyatdan keçirdikleri domenlər üçün DNS rekordlarını **My Account** səhifəsindən, domeninin girişində idarə edə bilərlər.

### Dəstəklənən rekord növləri

| Type | İstifadəsi |
|---|---|
| **A** | Hostname-i IPv4 ünvanına əlaqələndirir |
| **AAAA** | Hostname-i IPv6 ünvanına əlaqələndirir |
| **CNAME** | Başqa bir hostname-ə işarə edən bir alias yaradır |
| **MX** | Poçt mübadiləsi serverini təyin edir |
| **TXT** | SPF, DMARC, yoxlama və ya digər mətn rekordları əlavə edir |

### Hansı provayderlər DNS idarəetməsinə malikdir?

DNS idarəetməsi (rekord əlavə etmək, redaktə etmək, silmək) **OpenSRS**, **ResellerClub** və **Enom** ilə mövcuddur. Namecheap, GoDaddy və NameSilo domenləri status və bitmə tarixini göstərir, lakin DNS birbaşa qeydiyyatçının nəzarət panelində idarə edilməlidir.

### Default DNS rekordları

Domen qeydiyyatdan keçdikdə avtomatik tətbiq olunan default DNS rekordlarını təyin edə bilərsiniz. **Settings › Domain Seller › Default DNS Records** yoluna keçin.

Default rekord dəyərləri iki tokeni dəstəkləyir:

| Token | Nə ilə əvəz olunur |
|---|---|
| `{DOMAIN}` | Qeydiyyatdan keçmiş domen adı (məsələn, `example.com`) |
| `{SITE_URL}` | Müştərinin saytı üçün WordPress sayt URL-i |

**Nümunə — apex domen və www-ni server IP-nizə yönləndirmək:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS-i görmə və redaktə etmə

Network adminlər **Network Admin › Ultimate Multisite › Domains**-də domeninin redaktə səhifəsindən istənilən müştəri domeninin DNS rekordlarını görə və redaktə edə bilərlər.
