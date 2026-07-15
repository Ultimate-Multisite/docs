---
title: Cas ru thiab DNS ntawm Lub Neuv
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field and Customer DNS Management

## The Domain Selection checkout field {#the-domain-selection-checkout-field}

**Domain Selection** field нь баардны хэрэглэгчдэд өөрийн сайтын доменээ яаж авахыг сонгох боломжийг олгодогcheckout элемент юм. Домен борлуулахын тулд үүнийг аль ч checkout form-д нэмээрэй.

### Checkout form-д талбарыг нэмэх {#adding-the-field-to-a-checkout-form}

1. **Network Admin › Ultimate Multisite › Checkout Forms** руу орно.
2. Checkout form-ыг нээ거나 шинээр үүсгэ.
3. Checkout editor-т, **Add Field** гэж дарна.
4. Талбарын жагсаалтаас **Domain Selection**-ийг сонгоно.
5. Талбарын тохиргоог хийнэ (доор харна уу).
6. Формыг хадгална.

### Талбарын тохиргоо {#field-options}

**Domain modes** — Хэрэглэгч ямар табнуудыг харж байгааг сонгоно. Нэг режим нь бие даан идэвхтэй эсвэл идэвхгүй байх боломжтой:

| Mode | Яах вэ |
|---|---|
| **Subdomain** | Хэрэглэгч таны сүлжээнд үнэгүй subdomain ашиглана (жишээлбэл, `mysite.yournetwork.com`). Төлбөр шаардлагагүй. |
| **Register New Domain** | Хэрэглэгч шинэ домен хайж, таны тохируулсан провайдерийн дамжуулан бүртгүүлнэ. Үнийн тооцоонд тохирох доменийн бүтээгийг ашиглана. |
| **Existing Domain** | Хэрэглэгч өөрийн аль хэдийн эзэмшсэн домен дээр холбогдоно. Бүртгүүлэх төлбөр байхгүй. Домен нь тэдний сайтай автоматаар холбогдоно. |

**Default mode** — Бүх гурван режим идэвхтэй байвал аль таб эхлээд нээгдэнэ. Домен бүртгүүлэхийг сонголтгүй байлгахын тулд **Subdomain**-ээр тохируулж болно, эсвэл худалдан авалтыг уриалъя гэсэн үү **Register New Domain**-аар тохируулах боломжтой.

**Domain product** — Энэ талбарыг тухайн доменийн бүтээгтэй холбохыг сонголтгүй байвал, addon нь хэрэглэгч хайсан TLD (Top Level Domain) -д үндэслэн тохирох бүтээгийг автоматаар сонгоно.

### Registrant contact fields {#registrant-contact-fields}

Хэрэв хэрэглэгч **Register New Domain** табыг сонговол, checkout form нь registrantin холбоотой талбаруудыг дотор нэмнэ:

- Эхний нэр / Аakhnаа
- Email address
- Хаяг (1-р мөр, хот, мужийн/провинцийн нэр, postal code, улс)
- Утасны дугаар

எல்லா பதிவாளர்களுக்கும் இது தேவைப்படுவதுதான், மேலும் பதிவு API அழைப்பு செய்வதற்கு முன்பு இதைச் சரிபார்க்க வேண்டும். தொலைபேசி எண்கள் தானாகவே பதிவாளர்களால் எதிர்பார்க்கப்படும் `+CC.NNN` சர்வதேச வடிவத்திற்கு மாற்றப்படும்.

### தானாக உருவாக்கப்பட்ட தள முகவரி (Auto-generated site URL) {#auto-generated-site-url}

ஒரு வாடிக்கையாளர் பதிவு செய்யும்போது அல்லது ஒரு டொமைனை மேப் (map) செய்யும்போது, அந்தத் தள முகவரி (site URL) என்ற இடத்தில் தேர்ந்தெடுக்கப்பட்ட டொமைனிலிருந்து தானாகவே நிரப்பப்படும். வாடிக்கையாளர்களுக்கு தனி URL புலத்தை நிரப்ப வேண்டியதில்லை.

### தேடல் நடத்தை (Search behaviour) {#search-behaviour}

- நீங்கள் தட்டச்சு செய்யும் போது AJAX மூலம் டொமைன் கிடைக்கும் தன்மையை நிகழ்நேரத்தில் சரிபார்க்கிறது.
- விரும்பிய டொமைன் கிடைக்காதபோது மாற்று TLD (Top-Level Domain) பரிந்துரைகள் காட்டப்படும்.
- விலை நேரலையில் பெறப்பட்டு தெளிவாகக் காட்டப்படுகிறது (பதிவு விலை, புதுப்பித்தல் விலை, விருப்பமான WHOIS தனியுரிமை கட்டணம்).
- கூப்பன் குறியீடுகள் மற்ற எந்தப் பொருளுக்கும் உள்ளதைப் போலவே டொமைன் தயாரிப்புகளுக்கும் பொருந்தும்.

**தேடல் பதிலளிப்பை சரிசெய்தல்:**

```php
// மெதுவான இணைப்புகளில் API அழைப்புகளைக் குறைக்க debounce தாமதத்தை (மில்லி விநாடிகளில்) அதிகரிக்கவும்
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // இயல்புநிலை: 500
});
```

**டொமைன் தேடல் படிவத்தில் தனிப்பயன் புலங்களைச் சேர்த்தல்:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'கூடுதல் குறிப்புகள்',
    ];
    return $fields;
});
```

---

## வாடிக்கையாளர் DNS மேலாண்மை (Customer DNS management) {#customer-dns-management}

வாடிக்கையாளர்கள் தங்கள் பதிவுசெய்யப்பட்ட டொமைன்களுக்கான DNS பதிவுகளை **My Account** பக்கத்தில், அவர்களின் டொமைனின் உள்ளீட்டின் கீழ் நிர்வகிக்க முடியும்.

### ஆதரிக்கப்படும் பதிவு வகைகள் (Supported record types) {#supported-record-types}

| வகை | பயன்பாடு |
|---|---|
| **A** | ஹோஸ்டை IPv4 முகவரியுடன் மேப் செய்தல் |
| **AAAA** | ஹோஸ்டை IPv6 முகவரியுடன் மேப் செய்தல் |
| **CNAME** | மற்றொரு ஹோஸ்ட்டுக்கு சுட்டிக்காட்டும் ஒரு மாற்று பெயரை உருவாக்குதல் (alias) |
| **MX** | மின்னஞ்சல் பரிமாற்ற சேவையகத்தை அமைத்தல் |
| **TXT** | SPF, DMARC, சரிபார்ப்பு அல்லது பிற உரை பதிவுகளைச் சேர்த்தல் |

### எந்த வழங்குநர்கள் DNS மேலாண்மையை ஆதரிக்கிறார்கள்? {#which-providers-support-dns-management}

ການຈັດການ DNS (ເພີ່ມ, ແກ້ໄຂ, ລຶບ record) 出来ますດ້ວຍ **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, ແລະ **Openprovider**។ ໂດເມນຂອງ **Hostinger** ສາມາດອັບເດດ name servers ຜ່ານ Domain Seller; DNS records ສຳລັບໂດເມນທີ່ຖືກໂຮງຮຽນແມ່ນຖືກຈັດການໂດຍ core Hostinger domain-mapping integration (ການເຊື່ອມຕໍ່). ໂດເມນ Namecheap, GoDaddy, ແລະ NameSilo ສະແດງສະຖານະ ແລະ ວັນໝົດອາຍຸ ແຕ່ DNS ຕ້ອງຖືກຈັດການໂດຍກົງໃນ control panel ຂອງ registrar ນັ້ນໆ.

### Default DNS records (DNS record ຕັ້ງຄ່າເລີ່ມຕົ້ນ) {#default-dns-records}

ເຈົ້າສາມາດຕັ້ງຄ່າ default DNS records ໄດ້ ເຊິ່ງຈະຖືກໃຊ້ໂດຍອັດຕະໂນມັດເມື່ອມີການລົງທະບຽນໂດເມນ. ໄປທີ່ **Settings › Domain Seller › Default DNS Records** (ການຕັ້ງຄ່າ > Domain Seller > Default DNS Records)។

Default record values ສາມາດຮອງຮັບ token ສອງຊະນິດ:

| Token | ປ່ຽນເປັນ |
|---|---|
| `{DOMAIN}` | ຊື່ໂດເມນທີ່ລົງທະບຽນ (ຕົວຢ່າງ: `example.com`) |
| `{SITE_URL}` | WordPress site URL ສຳລັບໄຊຂອງລູກຄ້າ |

**ຕົວຢ່າງ — ໃຫ້ apex domain ແລະ www ຊີ້ໄປຫາ server IP ຂອງເຈົ້າ:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: viewing and editing DNS (ຜູ້ບໍລິຫານ: ການເບິ່ງ ແລະ ແກ້ໄຂ DNS) {#admin-viewing-and-editing-dns}

Network admins ສາມາດເບິ່ງ ແລະ ແກ້ໄຂ DNS records ຂອງໂດເມນລູກຄ້າໃດໆ ໄດ້ ຜ່ານໜ້າ edit ຂອງໂດເມນໃນ **Network Admin › Ultimate Multisite › Domains** (ຜູ້ບໍລິຫານເຄືອຂ່າຍ > Ultimate Multisite > Domains)។
