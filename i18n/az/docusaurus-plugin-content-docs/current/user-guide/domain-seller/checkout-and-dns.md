---
title: Sifariş rəsmiləşdirmə sahəsi və Müştəri DNS-i
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Ödəniş sahəsi və müştəri DNS idarəetməsi {#checkout-field-and-customer-dns-management}

## Domen seçimi ödəniş sahəsi {#the-domain-selection-checkout-field}

**Domen seçimi** sahəsi müştərilərə saytlarının domenini necə əldə edəcəklərini seçmək imkanı verən ödəniş elementidir. Domen satışını aktivləşdirmək üçün onu istənilən ödəniş formasına əlavə edin.

### Sahəni ödəniş formasına əlavə etmək {#adding-the-field-to-a-checkout-form}

1. **Şəbəkə Admini › Ultimate Multisite › Ödəniş Formaları** bölməsinə keçin
2. Ödəniş formasını açın və ya yaradın
3. Ödəniş redaktorunda **Sahə əlavə et** düyməsinə klikləyin
4. Sahə siyahısından **Domen seçimi** seçin
5. Sahə seçimlərini konfiqurasiya edin (aşağıya baxın)
6. Formanı yadda saxlayın

### Sahə seçimləri {#field-options}

**Domen rejimləri** — Müştərinin hansı tabları görəcəyini seçin. Hər rejim müstəqil şəkildə aktiv və ya deaktiv edilə bilər:

| Rejim | Nə edir |
|---|---|
| **Subdomen** | Müştəri şəbəkənizdə pulsuz subdomendən istifadə edir (məs., `mysite.yournetwork.com`). Ödəniş tələb olunmur. |
| **Yeni domen qeydiyyatdan keçir** | Müştəri yeni domen axtarır və onu konfiqurasiya etdiyiniz provayder vasitəsilə qeydiyyatdan keçirir. Qiymətləndirmə üçün uyğun domen məhsulundan istifadə edir. |
| **Mövcud domen** | Müştəri artıq sahib olduğu domeni xəritələndirir. Qeydiyyat haqqı yoxdur. Domen avtomatik olaraq onun saytına xəritələndirilir. |

**Standart rejim** — Hər üç rejim aktiv olduqda, ilk hansı tabın açılacağını müəyyən edir. Domen qeydiyyatını istəyə bağlı saxlamaq üçün **Subdomen** seçin, satınalmaları təşviq etmək üçün isə **Yeni domen qeydiyyatdan keçir** seçin.

**Domen məhsulu** — İstəyə bağlı olaraq bu sahəni konkret domen məhsuluna bağlayın. Təyin edilməyibsə, addon müştərinin axtardığı TLD əsasında uyğun məhsulu avtomatik seçir.

### Qeydiyyatçı əlaqə sahələri {#registrant-contact-fields}

Müştəri **Yeni domen qeydiyyatdan keçir** tabını seçdikdə, ödəniş forması qeydiyyatçı əlaqə sahələrini eyni sətirdə əlavə edir:

- Ad / Soyad
- E-poçt ünvanı
- Ünvan (sətir 1, şəhər, ştat/vilayət, poçt indeksi, ölkə)
- Telefon nömrəsi

Bunlar bütün qeydiyyatçılar tərəfindən tələb olunur və qeydiyyat API çağırışı edilməzdən əvvəl yoxlanılır. Telefon nömrələri qeydiyyatçıların gözlədiyi `+CC.NNN` beynəlxalq formatına avtomatik formatlanır.

### Avtomatik yaradılan sayt URL-i {#auto-generated-site-url}

Müştəri domeni qeydiyyatdan keçirdikdə və ya xəritələndirdikdə, sayt URL sahəsi seçilmiş domen əsasında avtomatik doldurulur. Müştərilərin ayrıca URL sahəsini doldurmasına ehtiyac yoxdur.

### Axtarış davranışı {#search-behaviour}

- Domen əlçatanlığı müştəri yazdıqca AJAX ilə real vaxtda yoxlanılır
- Üstün tutulan domen əlçatan olmadıqda alternativ TLD təklifləri göstərilir
- Qiymətlər canlı şəkildə alınır və aydın göstərilir (qeydiyyat qiyməti, yeniləmə qiyməti, istəyə bağlı WHOIS məxfilik haqqı)
- Kupon kodları domen məhsullarına digər məhsullarla eyni şəkildə tətbiq olunur

**Axtarış cavab sürətinin tənzimlənməsi:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Domen axtarış formasına fərdi sahələr əlavə etmək:**

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

## Müştəri DNS idarəetməsi {#customer-dns-management}

Müştərilər qeydiyyatdan keçirdikləri domenlər üçün DNS qeydlərini **My Account** səhifəsindən, domenlərinin qeydi altında idarə edə bilərlər.

### Dəstəklənən qeyd növləri {#supported-record-types}

| Növ | İstifadə |
|---|---|
| **A** | Host adını IPv4 ünvanına xəritələndirir |
| **AAAA** | Host adını IPv6 ünvanına xəritələndirir |
| **CNAME** | Başqa host adına yönələn alias yaradır |
| **MX** | Poçt mübadiləsi serverini təyin edir |
| **TXT** | SPF, DMARC, doğrulama və ya digər mətn qeydləri əlavə edir |

### Hansı provayderlər DNS idarəetməsini dəstəkləyir? {#which-providers-support-dns-management}

DNS idarəetməsi (qeydləri əlavə etmək, redaktə etmək, silmək) **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** və **Openprovider** ilə əlçatandır. **Hostinger** domenləri Domain Seller vasitəsilə nameserver-ləri yeniləyə bilər; hostinq edilən domenlər üçün DNS qeydləri əsas Hostinger domen xəritələndirmə inteqrasiyası tərəfindən idarə olunur. Namecheap, GoDaddy və NameSilo domenləri status və bitmə tarixi məlumatlarını göstərir, lakin DNS birbaşa qeydiyyatçının idarə panelində idarə edilməlidir.

### Standart DNS qeydləri {#default-dns-records}

Domen qeydiyyatdan keçirildikdə avtomatik tətbiq olunan standart DNS qeydlərini konfiqurasiya edə bilərsiniz. **Parametrlər › Domain Seller › Standart DNS qeydləri** bölməsinə keçin.

Standart qeyd dəyərləri iki tokeni dəstəkləyir:

| Token | Bununla əvəz olunur |
|---|---|
| `{DOMAIN}` | Qeydiyyatdan keçirilmiş domen adı (məs., `example.com`) |
| `{SITE_URL}` | Müştərinin saytı üçün WordPress sayt URL-i |

**Nümunə — apex domenini və www-ni server IP-nizə yönəldin:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS-ə baxmaq və redaktə etmək {#admin-viewing-and-editing-dns}

Şəbəkə adminləri istənilən müştəri domeni üçün DNS qeydlərinə **Şəbəkə Admini › Ultimate Multisite › Domenlər** bölməsində domenin redaktə səhifəsindən baxa və onları redaktə edə bilərlər.
