---
title: CyberPanel İntegrasiyası
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel İntegrasiyası

Bu bələdçi, Ultimate Multisite CyberPanel inteqrasiyasını necə quracağınızı izah edir ki, şəbəkənizdəki xəritələnmiş domenlər CyberPanel-də virtual host kimi avtomatik əlavə olunsun (və çıxarılsın), həmçinin istəyə bağlı Let's Encrypt vasitəsilə avtomatik SSL təminatı ilə.

## Nə Edir

- Ultimate Multisite-də bir domen xəritələnəndə, inteqrasiya CyberPanel API-ni çağıraraq həmin domen üçün bir virtual host yaradır.
- Domen xəritələnməsi silindikdə, inteqrasiya müvafiq virtual hostu silmək üçün API-ni çağırır.
- Avtomatik SSL aktivləşdirildikdə, inteqrasiya virtual host yaradıldıqdan dərhal sonra Let's Encrypt sertifikatının verilməsini təmin edir.
- İsteğe bağlı olaraq, Domen Xəritələmə (Domain Mapping) ayarlarınızdakı "Auto-create www subdomain" (www alt domenini avtomatik yarat) parametrinə əsasən `www.` aliasını əlavə edir/silir.

## Tələblər

- İşləyən bir CyberPanel nümunəsi (v2.3 və ya daha yeni tövsiyə olunur) və bu nümunə WordPress serverinizdən əlçatan olmalıdır.
- CyberPanel-də artıq WordPress şəbəkə kökünüzü xidmət edən mövcud bir sayt olmalıdır. İntegrasiya yeni virtual hostları bu serverə qoşur.
- CyberPanel API girişinin aktivləşdirilməsi. Autentifikasiya CyberPanel admin istifadəçi adı və şifrəsindən istifadə edir.
- Xəritələnmiş domenlər üçün DNS record-larınız, avtomatik SSL etibarlı sertifikat verə bilməsi üçün əvvəlcədən serverinizin IP ünvaninə işarə etməlidir.

## Tələb Olunan Kodlar

`wp-config.php` faylınızda aşağıdakı sabitlər təyin edilməlidir:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

İsteğe bağlı olaraq, aşağıdakıları da təyin edə bilərsiniz:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domen yaradıldıqdan sonra Let's Encrypt SSL verilməsi
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikatı əlaqə üçün istifadə olunur
```

## Qurma Təlimatları

### 1. CyberPanel API-ni Aktivləşdirin

1. CyberPanel dashboard-una administrator kimi daxil olun.
2. **Security** > **SSL** bölməsinə keçin və SSL-in öz CyberPanel interfeysində aktiv olduğundan əmin olun (təhlükəsiz API çağırışları üçün tələb olunur).
3. CyberPanel API-si default olaraq `https://your-server-ip:8090/api/` ünvanında mövcuddur. Aktivləşdirmək üçün əlavə addımlar lazım deyil — admin istifadəçiləri üçün default olaraq aktivdir.

### 2. wp-config.php-yə Sabitlər Əlavə Edin

Aşağıdakı sabitləri `wp-config.php` faylınızın `/* That's all, stop editing! */` xəttindən əvvəl əlavə edin:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Avtomatik SSL-i aktivləşdirmək üçün (tövsiyə olunur):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. İntegrasiyanı Aktivləşdirin

1. WordPress şəbəkə administratorunuzda **Ultimate Multisite** > **Settings** (Ayarlar) bölməsinə keçin.
2. **Domain Mapping** (Domen Xəritələmə) tabına keçin.
3. **Host Integrations** (Host İntegrasiyaları) hissəsinə aşağı sürüşün.
4. **CyberPanel** inteqrasiyasını aktivləşdirin.
5. **Save Changes** (Dəyişiklikləri Saxla) düyməsinə basın.

### 4. Bağlantını Yoxlayın

Ayarlar alətində yerləşən daxili bağlantı testindən istifadə edin:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** yolunu izləyin.
2. **Test Connection** (Bağlantını Yoxla) düyməsinə basın.
3. Uğur mesajı, plugin-in CyberPanel API-sinə çatdığını və düzgün autentifikasiya etdiyini təsdiqləyir.

## Necə İşləyir

### Domen Xəritələmə (Domain Mapping)

Ultimate Multisite-də bir domen xəritələndikdə:

1. İntegrasiya CyberPanel hostunuzdakı `/api/createWebsite` ünvanına bir `POST` sorğusu göndərir.
2. CyberPanel konfiqurasiya edilmiş paket altında domen üçün yeni bir virtual host yaradır.
3. Məzmun kökü (document root) WordPress şəbəkə kökünüzün kataloguna işarə etmək üçün təyin edilir.
4. Domen xəritələnməsi silindikdə, inteqrasiya virtual hostu təmizləmək üçün `/api/deleteWebsite` ünvanını çağırır.

### Avtomatik SSL (Auto-SSL)

`WU_CYBERPANEL_AUTO_SSL` `true` olduqda:

1. Virtual host yaradıldıqdan sonra, inteqrasiya domen üçün `/api/issueSSL` ünvanını çağırır.
2. CyberPanel ACME HTTP-01 challenge istifadə edərək Let's Encrypt sertifikatını sorğulayır.
3. Sertifikat CyberPanel tərəfindən müddəti bitməzdən əvvəl avtomatik yenilənir.

> **Vacib:** Let's Encrypt domenini təsdiqləyə bilməsi üçün DNS-in serverinizin IP ünvaninə tam yayılması (propagate) vacibdir. Əgər SSL verilməsi xəritələnmədən dərhal sonra uğursuz olursa, DNS yayılmasını gözləyin və SSL-i CyberPanel dashboard-unda **SSL** > **Manage SSL** altında yenidən aktivləşdirin.

### www Alt Domeni

Əgər Domen Xəritələmə ayarlarınızda **Auto-create www subdomain** aktivdirsə, inteqrasiya həmçinin `www.<domen>` üçün bir virtual host aliası yaradır və avtomatik SSL aktiv olduqda, həm apex, həm də www variantlarını əhatə edən sertifikat verir.

### E-poçt Yönləndiriciləri (Email Forwarders)

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) eklentisi aktiv olduqda, CyberPanel müştərilər üçün e-poçt yönləndiriciləri də təmin edə bilər. Yönləndiricilər mesajları tam poçt qutusu yaratmadan, bir domen ünvanından başqa bir qutunuza yönləndirir. Bu, `info@customer-domain.test` və ya `support@customer-domain.test` kimi aliaslar üçün faydalıdır.

Müştərilər üçün yönləndiriciləri aktivləşdirməzdən əvvəl:

1. Yuxarıdakı CyberPanel sabitlərinin konfiqurasiya edildiyinə və bağlantı testinin uğurlu olduğuna əmin olun.
2. Emails eklentisi ayarlarında CyberPanel e-poçt provayderini aktivləşdirin.
3. Yönləndirici yaradılmadan əvvəl müştəri domeninin CyberPanel-də mövcud olduğundan əmin olun.
4. Test yönləndiricisi yaradın və xüsusiyyəti istehsal planlarında təklif etməzdən əvvəl onun vasitəsilə bir mesaj göndərin.

Yönləndirici yaratmaq uğursuz olursa, əvvəlcə Ultimate Multisite aktivlik loglarını yoxlayın, sonra CyberPanel-də mənbə domeninin mövcudluğunu və API istifadəçisinin e-poçt idarəetmə icazələrinə malik olub-olmadığını təsdiqləyin.

## Konfiqurasiya Referansı

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | CyberPanel nümunənizin portu daxil olmaqla tam URL-i, məs.: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin istifadəçi adı |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin şifrəsi |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Yeni virtual hostlara təyin ediləcək CyberPanel hosting paketi |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Domen yaradıldıqdan sonra Let's Encrypt SSL sertifikatının verilməsi |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Yeni virtual hostlar üçün PHP versiyası (CyberPanel-də quraşdırılmış versiya ilə uyğun olmalıdır) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL sertifikatı qeydiyyatı üçün əlaqə e-poçtu |

## Vacib Qeydlər

- CyberPanel-in API-si sessiya əsaslı token autentifikasiyası istifadə edir. İntegrasiya hər API çağırışında token əldə etməni avtomatik həyata keçirir.
- CyberPanel admin hesabınızın sayt yaratmaq və silmək icazələrinə malik olması vacibdir.
- CyberPanel default olaraq `8090` portunda işləyir. Əgər serverinizdə firewall varsa, bu portun WordPress tətbiq serverindən əlçatan olduğundan əmin olun.
- İntegrasiya DNS record-larını idarə etmir. Domeni Ultimate Multisite-də xəritələmədən əvvəl domen DNS-ini serverinizin IP ünvaninə yönləndirməlisiniz.
- OpenLiteSpeed (OLS) istifadə edirsinizsə, virtual host dəyişikliklərindən sonra yumşaq yenidən başlatma (graceful restart) avtomatik olaraq tətiklənir. Əl ilə müdaxilə tələb olunmur.

## Problemlərin Həlli

### API Bağlantısı Rədd Edildi (API Connection Refused)

- Server firewall-unuzda `8090` portunun açıq olduğundan əmin olun.
- `WU_CYBERPANEL_HOST` dəyərinin düzgün protokolu (`https://`) və portu ehtiva etdiyini təsdiqləyin.
- CyberPanel SSL sertifikatınızın etibarlı olduğundan əmin olun; öz-imzalı sertifikatlar TLS yoxlaması uğursuzluğuna səbəb ola bilər. `WU_CYBERPANEL_VERIFY_SSL` dəyərini yalnız etibarlı özəl şəbəkə mühitlərində `false` olaraq təyin edin.

### Autentifikasiya Xətaları (Authentication Errors)

- `WU_CYBERPANEL_USERNAME` və `WU_CYBERPANEL_PASSWORD` dəyərlərinin düzgün olduğundan CyberPanel-ə birbaşa daxil olaraq təsdiqləyin.
- CyberPanel, təkrarlanan uğursuz daxil olma cəhdlərindən sonra hesabları kilidləyir. Kilidlər baş verərsə, CyberPanel-də **Security** > **Brute Force Monitor** bölməsini yoxlayın.

### Domen Yaratılmadı (Domain Not Created)

- API xəta mesajları üçün Ultimate Multisite aktivlik loglarını (**Ultimate Multisite** > **Activity Logs**) yoxlayın.
- `WU_CYBERPANEL_PACKAGE` sabitində təyin edilmiş paket CyberPanel-də mövcuddurmu? (**Packages** > **List Packages**) yoxlayın.
- Domenin CyberPanel-də artıq sayt kimi qeyd olunmadığından əmin olun — dublikat sayt yaratmaq xətaya səbəb olur.

### SSL Sertifikatı Verilmədi (SSL Certificate Not Issued)

- DNS-in tam yayılmasına (propagate) təsdiq edin: `dig +short your-domain.com` serverinizin IP ünvanını qaytarmalıdır.
- Let's Encrypt limitlər tətbiq edir. Əgər son vaxtlar eyni domen üçün bir neçə sertifikat verilsə, yenidən cəhd etməzdən əvvəl gözləyin.
- Sertifikat verilməsi uğursuzluğu haqqında detallar üçün **Logs** > **Error Logs** altında CyberPanel SSL loglarını yoxlayın.
- Alternativ olaraq, SSL-i CyberPanel-dən əl ilə verə bilərsiniz: **SSL** > **Manage SSL** > domen seçin > **Issue SSL**.

## Referanslar

- CyberPanel API Dokumentasiyası: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL İdarəetməsi: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Limitləri: https://letsencrypt.org/docs/rate-limits/
