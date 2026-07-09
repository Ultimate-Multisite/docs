---
title: Nəzarət Paneli İntegrasiyasını Artırmaq
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Control Panel İntegrasiyasını Gücləndirmək {#enhance-control-panel-integration}

## Ümumi Baxış {#overview}
Enhance, güclü hosting avtomatlaşdırma və idarəetmə imkanları təmin edən müasir bir Control Panel-dir. Bu inteqrasiya Ultimate Multisite ilə Enhance Control Panel arasında avtomatik domen sinxronizasiyası və SSL sertifikatları idarəetməsinə imkan verir.

**İlgili Diskussiya:** Təbii məsləhətlər və əlavə məlumat üçün [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) hissəsinə baxın.

## Xüsusiyyətlər {#features}
- Ultimate Multisite-da domenlər xəritələndikdə avtomatik domen sinxronizasiyası
- DNS həll olunduqda LetsEncrypt vasitəsilə avtomatik SSL sertifikatının təmin edilməsi
- Subdomain rejimində işləyən şəbəkələr üçün alt domen dəstəyi
- Xəritələr silindikdə domenlərin silinməsi
- API etibarlığını yoxlamaq üçün bağlantı testi

## Tələblər {#requirements}

### Sistem Tələbləri {#system-requirements}
- Enhance Control Panel-in quraşdırılmış və əlçatan olması
- WordPress Multisite quraşdırmasının Enhance serverində yerləşməsi və ya ona qoşulması
- Apache veb serveri (Enhance hazırda Apache konfiqurasiyalarını dəstəkləyir; LiteSpeed Enterprise az qiymətə mövcuddur)

### API Girişi {#api-access}
API tokenləri yaratmaq üçün Enhance Control Panel-ə administrator girişiniz olmalıdır.

## API Etibarlığınızı Almaq {#getting-your-api-credentials}

### 1. Bir API Tokeni Yaradın {#1-create-an-api-token}

1. Administrator kimi Enhance Control Panel-ə daxil olun
2. Naviqasiya menyusunda **Settings** (Parametrlər) düymasına klikləyin
3. **Access Tokens** (Giriş Tokenləri) hissəsinə keçin
4. **Create Token** (Token Yaradın) düymasına klikləyin
5. Tokenə təsviri bir ad verin (məsələn, "Ultimate Multisite Integration")
6. **System Administrator** (Sistem Administratoru) rolunu təyin edin
7. Bitmə tarixi üçün:
   - Tokenin heç vaxt bitməməsini istəyirsinizsə, boş buraxın
   - Və ya təhlükəsizlik məqsədləri üçün müəyyən bir bitmə tarixi təyin edin
8. **Create** (Yarat) düymasına klikləyin

Yaradıldıqdan sonra **Access Token** (Giriş Tokeni) və **Organization ID** (Təşkilat ID) göstəriləcək. Token yalnız bir dəfə göstəriləcəyi üçün **bunu dərhal saxlayın**.

### 2. Təşkilat ID-nizi (Organization ID) Alın {#2-get-your-organization-id}

Organization ID, "Org ID: {your_id}" etiketli mavi bir məlumat qutusunda Access Tokens səhifəsində göstərilir.

Organization ID aşağıdakı kimi bir UUID formatındadır: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Həmçinin bir müştərinin Organization ID-sini aşağıdakı yolla tapa bilərsiniz:
1. **Customers** (Müştərilər) səhifəsinə keçin
2. Müvafiq müştəri üçün **Manage customer** (Müştəriyə idarəet) düymasına klikləyin
3. URL-ə baxın - Organization ID, `/customers/` daxilindəki alfanumerik simvollardır.

### 3. Server ID-nizi (Server ID) Alın {#3-get-your-server-id}

Server ID-ni tapmaq üçün (domen əməliyyatları üçün tələb olunur):

1. Enhance Control Panel-də **Servers** (Serverlər) hissəsinə keçin
2. WordPress quraşdırmanızın işlədiyi serverə klikləyin
3. Server ID (UUID formatı) URL-də və ya server detallarında görünəcək
4. Alternativ olaraq, serverləri siyahılamaq üçün API-dən istifadə edə bilərsiniz:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID UUID formatını izləyir: `00000000-0000-0000-0000-000000000000`

### 4. API URL-inizi (API URL) Alın {#4-get-your-api-url}

API URL-iniz, `/api/` əlavə edilmiş Enhance Control Panel URL-inizdir:

```
https://your-enhance-panel.com/api/
```

**Vacib:** `/api/` yolu tələb olunur. Ümumi səhvlər bunlardır:
- Yalnız `/api/` olmadan domen istifadə etmək
- HTTPS əvəzinə HTTP istifadə etmək (Təhlükəsizlik üçün HTTPS tələb olunur)

## Konfiqurasiya {#configuration}

### Tələb Olunan Sabitlər (Constants) {#required-constants}

Aşağıdakı sabitlər dəyərlərini `wp-config.php` faylınıza əlavə edin:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### İntegrasiya Sihirli Qurğusundan (Integration Wizard) Qurmaq {#setup-via-integration-wizard}

1. WordPress admin panelinizdə **Ultimate Multisite** > **Settings** (Parametrlər) hissəsinə keçin
2. **Integrations** (İnteqrasiyalar) tabına keçin
3. **Enhance Control Panel Integration** (Enhance Control Panel İntegrasiyası) tapın və **Configuration** (Konfiqurasiya) düymasına klikləyin
4. Sihirli qurğu sizi qurulma prosesi boyunca yönləndirəcək:
   - **Addım 1:** Giriş və xüsusiyyətlərin ümumi baxışı
   - **Addım 2:** API etibarlığınızı daxil edin (Token, API URL, Server ID)
   - **Addım 3:** Bağlantını test edin
   - **Addım 4:** Nəzərdən keçirin və aktivləşdirin

Aşağıdakılardan birini seçə bilərsiniz:
- Sihirli qurğunun sabitlər dəyərlərini avtomatik olaraq `wp-config.php` faylınıza yerləşdirməsinə icazə vermək
- Və ya sabitlər təriflərini kopyalayıb əl ilə əlavə etmək

## Əlavə WordPress Konfiqurasiyası {#additional-wordpress-configuration}

Cəmiyyət rəylərinə əsasən ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), bu əlavə parametrləri konfiqurasiya etməyiniz lazım ola bilər:

### .htaccess Konfiqurasiyası {#htaccess-configuration}

Domen xəritələməsi ilə bağlı problemlər yaşasanız:
1. Orijinal Enhance `.htaccess` faylını silin
2. Yerində standart WordPress Multisite `.htaccess` faylını əvəz edin

### Cookie Sabitlər (Constants) {#cookie-constants}

Xəritələnmiş domenlər arasında düzgün cookie idarəetməsinə nail olmaq üçün bu sabitlər dəyərlərini `wp-config.php` faylınıza əlavə edin:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Necə İşləyir {#how-it-works}

### Bir Domen Xəritələndikdə {#when-a-domain-is-mapped}

1. İstifadəçi Ultimate Multisite-da özəl bir domen xəritələyir (və ya yeni sayt alt domen rejimində yaradılır)
2. İntegrasiya Enhance-in API-sinə bir POST sorğusu göndərir: `/servers/{server_id}/domains`
3. Enhance domenə server konfiqurasiyanıza əlavə edir
4. DNS serverinizə həll olunduqda, Enhance avtomatik olaraq LetsEncrypt vasitəsilə bir SSL sertifikatı təmin edir
5. Domen HTTPS ilə aktiv olur

### Bir Domen Silindikdə {#when-a-domain-is-removed}

1. Ultimate Multisite-da domen xəritəsi silinir
2. İntegrasiya domen ID-sini tapmaq üçün Enhance-ə sorğu göndərir
3. Aşağıdakı ünvanlara bir DELETE sorğusu göndərilir: `/servers/{server_id}/domains/{domain_id}`
4. Enhance domenə server konfiqurasiyanızdan silir

### DNS və SSL Yoxlaması {#dns-and-ssl-checking}

Ultimate Multisite daxili DNS və SSL yoxlaması təmin edir:
- Yoxlama intervalını **Domain Mapping Settings** (Domen Xəritələmə Parametrləri) hissəsində konfiqurasiya edə bilərsiniz (default: 300 saniyə/5 dəqiqə)
- Sistem, domen aktiv hesab edilməzdən əvvəl DNS yayılmasını yoxlayacaq
- SSL sertifikatının etibarlılığı avtomatik yoxlanılır
- Enhance SSL təminatını avtomatik idarə etdiyi üçün əl ilə SSL konfiqurasiyası tələb olunmur

## Qurulmanı Yoxlamaq {#verifying-setup}

### Bağlantını Test Edin {#test-the-connection}

1. İntegrasiya Sihirli Qurğusunda **Test Connection** (Bağlantını Test Et) addımından istifadə edin
2. Plugin serverinizdəki domenləri siyahılamaya cəhd edəcək
3. Uğur mesajı təsdiqləyir:
   - API etibarlığı doğrudur
   - API URL-i əlçatandır
   - Server ID etibarlıdır
   - İcazələr düzgün təyin edilib

### Bir Domen Xəritələndikdən Sonra {#after-mapping-a-domain}

1. Ultimate Multisite-da test domeni xəritələyin
2. Ultimate Multisite loglarına baxın (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel-də domen əlavə edildiyini yoxlayın:
   - **Servers** > **Your Server** > **Domains** (Domenlər) hissəsinə keçin
   - Yeni domen siyahıda görünməlidir
4. DNS yayılmasından sonra, SSL-in avtomatik təmin edildiyini yoxlayın

## Problemlərin Həlli (Troubleshooting) {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}

**Xəta: "Failed to connect to Enhance API"** (Enhance API-ə qoşulmaq mümkün olmadı)
- `WU_ENHANCE_API_URL`-in sonunda `/api/` ehtiva etdiyinə əmin olun
- HTTPS istifadə etdiyinizə, HTTP deyil, əmin olun
- Enhance panelinin WordPress serverinizdən əlçatan olduğundan əmin olun
- Bağlantını bloklayan firewall qaydaları olub-olmadığını yoxlayın

**Xəta: "Enhance API Token not found"** (Enhance API Token tapılmadı)
- `WU_ENHANCE_API_TOKEN`-in `wp-config.php`-də təyin edildiyinə əmin olun
- Enhance-də tokenin silinmədiyinə və ya bitmədiyinə əmin olun
- Token dəyərində yazım səhvləri yoxlayın

**Xəta: "Server ID is not configured"** (Server ID konfiqurasiya edilməyib)
- `WU_ENHANCE_SERVER_ID`-nin `wp-config.php`-də təyin edildiyinə əmin olun
- Server ID-nin etibarlı bir UUID formatında olduğundan əmin olun
- Serverin Enhance panelinizdə mövcud olduğunu təsdiqləyin

### Domen Əlavə Olmadı {#domain-not-added}

**Loglara baxın:**
1. **Ultimate Multisite** > **Logs** (Loglar) hissəsinə keçin
2. **integration-enhance** ilə filtrləyin
3. Problemi göstərən xəta mesajları axtarın

**Ümumi səbəblər:**
- Domen adının yanlış formatda olması
- Domenin Enhance-də artıq mövcud olması
- Yetkilərin çatışmazlığı (tokenin System Administrator roluna malik olduğundan əmin olun)
- Server ID-nin Enhance-dəki faktiki serverlə uyğun olmaması

### SSL Sertifikatı Problemləri {#ssl-certificate-issues}

**SSL təmin edilmir:**
- DNS-in serverinizin IP ünvanına işarə etdiyinə əmin olun
- Domenin düzgün həll olub-olmadığını yoxlayın: `nslookup yourdomain.com`
- Enhance, SSL təmin edə bilməzdən əvvəl DNS-in həll olunmasını tələb edir
- SSL təminatı adətən DNS yayılmasından sonra 5-10 dəqiqə çəkir
- SSL-ə xas xətalar üçün Enhance Control Panel loglarına baxın

**Enhance-də Əl ilə SSL Problemlərin Həlli:**
1. **Servers** > **Your Server** > **Domains** hissəsinə keçin
2. Domeninizi tapın və SSL status-unu yoxlayın
3. Lazım olarsa, SSL təminatını əl ilə işə sala bilərsiniz

### DNS Yoxlama İntervali {#dns-check-interval}

Domenlər və ya SSL sertifikatları aktivləşməkdə çox vaxt sərf edirsə:
1. **Ultimate Multisite** > **Settings** (Parametrlər) > **Domain Mapping** (Domen Xəritələmə) hissəsinə keçin
2. **DNS Check Interval** (DNS Yoxlama İntervali) parametrinə baxın
3. Default 300 saniyədən daha aşağı bir dəyərə (minimum: 10 saniyə) tənzimləyin
4. **Qeyd:** Aşağı interval daha tez-tez yoxlama o deməkdir, lakin server yüklüyünü artırır

### Autentifikasiya Xətaları {#authentication-errors}

**HTTP 401/403 xətaları:**
- Enhance-də API tokeninizi yeniləyin
- Tokenin **System Administrator** roluna malik olduğundan əmin olun
- Tokenin bitmədiyini yoxlayın
- Düzgün Organization ID-dən istifadə etdiyinizə əmin olun (baxmayaraq ki, adətən URL-də tələb olunmur)

### Log Analizi {#log-analysis}

Ətraflı loglama aktivləşdirin:
```php
// Daha yaxşı debug üçün wp-config.php-yə əlavə edin
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Sonra loglara baxın:
- Ultimate Multisite logları: **Ultimate Multisite** > **Logs**
- WordPress debug logu: `wp-content/debug.log`
- Enhance panel logları: Enhance-in admin interfeysində mövcuddur

## API Referansı {#api-reference}

### Autentifikasiya {#authentication}
Bütün API sorğuları Bearer token autentifikasiyasından istifadə edir:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### İstifadə Edilən Ümumi Endpoinqlər (Endpoints) {#common-endpoints-used}

**Serverləri Siyahılamaq:**
```
GET /servers
```

**Serverdəki Domenləri Siyahılamaq:**
```
GET /servers/{server_id}/domains
```

**Domen Əlavə Etmək:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domen Silmək:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Tam API Dokumentasiyası {#full-api-documentation}
Tam API dokumentasiyası: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Ən Yaxşı Təcrübələr (Best Practices) {#best-practices}

### Təhlükəsizlik {#security}
- **API tokenlərini heç vaxt versiya nəzarətinə commit etməyin**
- Tokenləri `wp-config.php`-də saxlayın və bu fayl Git-dən istisna edilməlidir
- Uyğun icazələrə malik tokenlərdən istifadə edin (tam inteqrasiya üçün System Administrator)
- İstehsal mühitləri üçün token bitmə tarixləri təyin edin
- Tokenləri müntəzəm olaraq dəyişdirin (Rotate)

### Performans {#performance}
- Aşırı API çağırışlarından yayınmaq üçün default DNS yoxlama intervalından (300 saniyə) istifadə edin
- Böyük miqyaslı domen əməliyyatları zamanı Enhance server resurslarını izləyin
- Bir anda çox domen xəritələyirsinizsə, domen əlavələrini ardıcıl etməyi düşünün

### Monitorinq {#monitoring}
- İntegrasiya xətaları üçün Ultimate Multisite loglarını mütəmadi olaraq yoxlayın
- Domen əlavə edilməməsi halları üçün monitorinq qurun
- SSL sertifikatlarının düzgün təmin edildiyini yoxlayın
- Enhance server tutumunu və domen limitlərini nəzərdən keçirin

## Əlavə Resurslar {#additional-resources}

- **Enhance Rəsmi Dokumentasiyası:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokumentasiyası:** [https://apidocs.enhance.com](https://api.example.com)
- **Müəyyən edən:**

## Nəticə {#support}

Bu təlimat, təhlükəsiz və effektiv bir şəkildə işləmək üçün vacibdir. Əgər hər hansı bir sualınız varsa, bizə müraciət etməkdən çəkinməyin.
