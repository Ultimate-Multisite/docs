---
title: Чек-آوت قىلىش فیلدى ۋە مى้ําل DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Сапоқ (Checkout) Sahasi va Muxlis DNS Boshqaruvi

## Domen Tanlash sahası

**Domain Seçimi** alanı, müşterilere sitelerinin alan adını nasıl alacaklarına dair bir seçim yapma imkanı veren bir ödeme (checkout) öğesidir. Alan adı satışı yapabilmek için bunu herhangi bir ödeme formuna ekleyebilirsiniz.

### Alanı ödeme formuna ekleme

1. **Network Admin › Ultimate Multisite › Checkout Forms** بويزىڭ.
2. Checkout formni açing yoki yaratıng.
3. Checkout editorida, **Add Field** (Alan qo'shish) tugmasini bosing.
4. Alan ro'yxatidan **Domain Selection** (Doimn nom tanlash) ni tanlang.
5. Alan sozlamalarini konfiguratsiya qiling (quyida ko'ring).

٦. Форму сақлаңыз

### Уч элементлар (Field options)

**Домен режимleri (Domain modes)** — Müşterinin hangi sekmeleri göreceğini seçin. Her bir mod bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir:

| Режим | Эмне ишлайди? |
|---|---|
| **Поддомен** | Миёзи муштарият сизнинг шабахаринда бепул поддомендан фойдаланади (масалан, `mysite.yournetwork.com`). Тўлов керак эмас. |

| **New Domain Kayd Etmek** | Müşteri yeni bir alan adı (domain) arar ve onu sizin yapılandırdığınız sağlayıcı aracılığıyla kaydeder. Fiyatlandırma için eşleşen alan adı ürününü kullanır. |

| **Mevcut Alan Adı** | Müşteri halihazırda sahip olduğu bir alan adını haritalandırır. Kayıt ücreti yoktur. Alan adı otomatik olarak sitelerine bağlanır (haritalanır). |

**Default mod** — Üç mod hamda qoyilsa, qaysı tab avval açiladi? Domeni ro'yxatdan o'tkazishni ixtiyoriy qilish uchun **Subdomain** ga sozlang yoki xarid qilishni rag'batlantirish uchun **Register New Domain** ga sozlang.

**دومين منتج (Domain product)** — Булман، бу да ميدни белгиланган دومين продуктега тақдим этиш мумкин. Агар белгиланмаса, аддон автоматик равишда мижоз қидирган TLD асосида мос келадиган продуктни танлайди.

### Регистратор контакт маълумотлари (Registrant contact fields)

Müşteri **Yeni Alan Adı Kaydetme** sekmesini seçtiğinde, ödeme formu kayıtlı kişi iletişim bilgilerini yan yana ekler:

- İsim / Soyisim
- E-posta adresi
- Adres (1. satır, şehir, eyalet/bölge, posta kodu, ülke)
- Telefon numarası

هذە تجميعلار بجميع ريجيسترارلار تالاب قىلىدۇ ۋە ريجيسترatsiya API чаلىنى ئۆتۈنچە تالاب قىلىدۇ. โทรفوْمات رقملار ريجيسترارلارنىڭ تالاب قىلغان خاليقەتكەن $+CC.NNN$ نونتال خاليقەتكەن ئۆتۈنچە شێكللەنچى.

### ئۆتۈنچە يېڭى تالاب URL

Müşteri rolat oluşturduğında və ya domen əlavə etməsində sayt URL sahəsi seçilmiş domen dənindən avtomatik doldurulır. Müşterilər ayrıca bir URL sahəsini doldurmağa ehtiyac duymazlar.

### Axtarış davranışı

Müşteri domen yazarken anlık olarak AJAX ile kontrol edilir. Tercih edilen alan adı müsait değilse alternatif TLD (üst düzey alan adı) önerileri gösterilir.

*Narxiyning narxi haqiqatida olinadi va aniq ko'rsatiladi (ro'yxatdan olinish narxi, yangilash narxi, ixtiyoriy WHOIS maxfiylik to'lovi).*

**Kupon kodlari domen mahsulotlariga boshqa har qanday mahsulotlar kabi qo'llaniladi.**

**Qidiruv tezligini sozlash:**

// API çağırışlarını yavaş bağlantılarda azaltmak için debounce gecikmesini (milisaniye) artırma
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});

**Alan adı arama formuna özel alanlar ekleme:**

`add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'إضافة یادداشت‌ها', // Additional notes
    ];
    return $fields;
});

## Миشتەر DNS тартибини басقалма (Customer DNS Management)

Миشتەرлер ўзлари тіркелген домендеріне тиісті DNS жазуларын **My Account** бетінен, доменінің кірісі астында басқара алады.

### Қолдау берілетін жазу түрлері (Supported record types)

| Tür | Kullanım Amacı |
|---|---|
| **A** | Host adını IPv4 adresine eşleştirme |
| **AAAA** | Host adını IPv6 adresine eşleştirme |
| **CNAME** | Başka bir host adına işaret eden takma ad (alias) oluşturma |
| **MX** | E-posta değişim sunucusunu ayarlama |

| **TXT** | SPF، DMARC، تایید (verification) ياتيديك، أو غيرها ديال نصوص (text records) |

### قاينا (providers) DNS إدارة (management) ديدى داورجان؟

DNS yönetimi (kayıt ekleme, düzenleme, silme) **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** ve **Openprovider** ile mevcuttur. **Hostinger** alan adları için isim sunucularını Alan Adı Satıcısı (Domain Seller) aracılığıyla güncelleyebilirsiniz; barındırılan alan adlarının DNS kayıtları ise çekirdek Hostinger alan adı eşleştirme entegrasyonu tarafından yönetilir. Namecheap, GoDaddy ve NameSilo alan adları durum ve son kullanma tarihi bilgilerini gösterse de, DNS'in doğrudan kayıt kuruluşunun kontrol panelinde yönetilmesi gerekir.

### Default DNS kayıtları

Bir alan adı kaydedildiğinde otomatik olarak uygulanan varsayılan DNS kayıtlarını ayarlayabilirsiniz. **Ayarlar › Alan Adı Satıcısı › Varsayılan DNS Kayıtları** yoluna gidin.

Varsayılan kayıt değerleri iki tür tokeni destekler:

| Token | Yerine Koyulgan Şey |
|---|---|
| `{DOMAIN}` | Qeydiyyatdan geçen domen adı (masalan, `example.com`) |
| `{SITE_URL}` | Müşterinin WordPress saytining URL'si |

**Misal — apex domenini va www'yu server IP'nize yönlendirin:**

نوع: A
نام: {DOMAIN}
مقدار: 203.0.113.10

نوع: CNAME
نام: www.{DOMAIN}
مقدار: {DOMAIN}

### ادمین: DNS گۆڕی و تادیبی (viewing and editing DNS)

عنصر ağı yöneticileri, alan adının düzenleme sayfasından **Network Admin › Ultimate Multisite › Domains** (Ağ Yöneticisi › Ultimate Çoklu Site › Alan Adları) bölümünden herhangi bir müşteri alan adı için DNS kayıtlarını görüntüleyebilir ve düzenleyebilirler.
