---
title: Siparişli Alan we Müşderi DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Alany we Müşteri DNS Yöretmesi {#checkout-field-and-customer-dns-management}

## Domain Seçimi checkout alanı {#the-domain-selection-checkout-field}

**Domain Seçimi** alanı, müşterilere sitenin domainini nasıl alacakları konusunda seçim imkanı tanıyan bir checkout elementidir. Domain satışı yapabilmek için bunu herhangi bir checkout formuna ekleyin.

### Alanı checkout formasına ekleme {#adding-the-field-to-a-checkout-form}

1. **Network Admin › Ultimate Multisite › Checkout Forms** bölümüne gidin
2. Bir checkout formu açın veya oluşturun
3. checkout editöründe, **Add Field** (Alan Ekle) butonuna tıklayın
4. alan listesinden **Domain Selection** (Domain Seçimi) seçeneğini seçin
5. Alan seçeneklerini yapılandırın (aşağıya bakın)
6. Formu kaydedin

### Alan seçenekleri {#field-options}

**Domain modları** — Müşterinin hangi sekmeleri göreceğini seçin. Her bir mod bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir:

| Mode | Bu näme edýär |
|---|---|
| **Subdomain** | Müşderi size degişli ulgamynda bedava subdomain (mysite.yournetwork.com ýaly) ulanýar. Pul tölemek gerekmi. |
| **Register New Domain** | Müşderi täze domain peselip, onu siziň görkezýän edarany arkaly reýistr eder. Narasyzlama (pricing) üçin dogry domain mahsuldaryny ulanýar. |
| **Existing Domain** | Müşderi özüki eýe bolan domaini eşleşdirýär. Reýistratsi ýokdur. Domain awtomatiki size degişli sahypa bilen eşleşdirilýär. |

**Default mode** — Üç modu hem işleýän wagty, haçan tab açylýar? Domain reýistratsyny iňlis (optional) saklamak üçin **Subdomain** bilen, ýa-da satyn alyşlary öndürmek üçin **Register New Domain** bilen goýalmagyň.

**Domain product** — Bu alanı belli bir domain mahsuluna opsional ýaly sabitleýärsiňiz. Saglaýan bolsa, addon adatywiýa ýaly, müşderini gözleýän TLD (Top-Level Domain) esaslaryna görä dogry mahsulaty saýlar.

### Registrant contact fields (Domainy goşandyryjy agza maglumatlary) {#registrant-contact-fields}

Müşderi **Register New Domain** tabyny saýladygynyňda, checkout formasy goşandyryjy agza maglumatlary ýanynda görkezýär:

- Ady / Soyady
- E-poçta adresi
- Manzil (1-nji sany, şäher, welaýat/provinsiýa, poçta kody, ýurt)
- Telefon nömrəsi

Bu maglumatlar ähli registratorlar tarapyndan zerurdyr we registrasiýa API çagyrylmagyndan öň barlanylýar. Telefon nömrెలeri registratorlar tarapyndan garaşylýan `+CC.NNN` halkara formatyna awtomatiki görnüş berilipdir.

### Auto-generated site URL (Awtomatiki döredilen sayt URL-i) {#auto-generated-site-url}

Müşteri qeydiyyatdan geçse ýa-da domeny maplaýan wagt, site URL alanı awtomatiki tanalýar we saýlan domanyň özünden dolýar. Müşderilere aýry URL alanı doldurmak gerek däldir.

### Sarap howpsazlygy (Search behaviour) {#search-behaviour}

- Domanyň bar bolmagy AJAX arkaly, müşderi ýazyp biljek wagtda gerdaşlykda barlanylýar
- Saýlan domanyň bar bolsa, başga bir TLD teklipleri görkezilýär
- Bahalar hyzmatda we belli bir görnüşde görkezilýär (qeydiyyat bahasy, serişdirmä bahasy, iňlisçe WHOIS gizlinligi üçin opsional bahasy)
- Kupon kodlary domanynyň ürünleri üçin başga bir produkt üçin ýaly işje tutýar

**Sarap howpsazlygyny dolandyrmak:**

```php
// Aýrydyk (milliseconds) beýleki API çagyrylmalaryny azaltmak üçin debounce geçgänini artdyr
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Alanad formasına custom fieldler ekleme:**

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

## Müşteri DNS dolandyryşyny (DNS management) {#customer-dns-management}

Müşrifler **My Account** saytyndan, olar dulan domainleri üçin DNS kayıtlarını özlenerlikde dolandyrabilirler.

### Durnaklanýan kayıt türleri {#supported-record-types}

| Tür | Ulanýan |
|---|---|
| **A** | Hostname-i IPv4 adresi bilen eşdeklendirmek |
| **AAAA** | Hostname-i IPv6 adresi bilen eşdeklendirmek |
| **CNAME** | Başga bir hostnamee işarýet edýän alias döretmek |
| **MX** | Posta alyş serverini sozlamak |
| **TXT** | SPF, DMARC, barlagçylyk ýa-da beýleki tekst kayıtlarını goşmak |

### DNS dolandyryşyny kimler goldawýar? {#which-providers-support-dns-management}

DNS dolandyrmak (kayıtları goşmak, üýtgetmek, silmek) **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** we **Openprovider** bilen mümkündür. **Hostinger** domenleri Domain Seller arkaly nameserversini güncellemekden bilersiňiz; hostalanan domenler üçin DNS kayıtları Hostinger domain-mapping integrasiýasy bilen dolandyrylýar. Namecheap, GoDaddy we NameSilo domenleri status we gowşamak wagty maglumatlaryny görkezýär, ýöne DNS goşmaçyň (registrar) öz kontrol panelinde jogapkärlikde dolandyrylmalydyr.

### Default DNS kayıtları {#default-dns-records}

Domen goşulanda awtomatiki goşulýan default DNS kayıtlarını özüňiz dürli görnüşde sozlap bilersiňiz. **Settings › Domain Seller › Default DNS Records** bilen girip bilerisiz.

Default kayıt agzalary iki görnüşdäki tokenlary goldaýar:

| Token | Replaced with |
|---|---|
| `{DOMAIN}` | Qeydiyyatdan geçirilmiş domen adı (örne-my `example.com`) |
| `{SITE_URL}` | Müşterinin saytı üçin WordPress sayt URL-i |

**Mysal — apex domenini we www'u server IP-sine işlemek:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS-i görme we redaktirmegi {#admin-viewing-and-editing-dns}

Network adminleri her bir müşteri domeniniň DNS kayıtlarını domenini redaktir etme səhime **Network Admin › Ultimate Multisite › Domains** bölüminden göräp we üýtgedip bilerler.
