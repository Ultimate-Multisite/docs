---
title: Quraşdırma və provayder konfiqurasiyası
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Quraşdırma və Provayder Konfiqurasiyası

Domain Seller əlavəsi sizi bütün tələb olunan addımlardan keçirən yönləndirilmiş quraşdırma sehrbazı ilə gəlir. Bu səhifə sehrbaz axınını və daha sonra provayderləri necə konfiqurasiya və ya yenidən konfiqurasiya etməyi əhatə edir.

## Tələblər {#requirements}

- **Multisite Ultimate** v2.4.12 və ya daha yüksək, şəbəkədə aktivləşdirilmiş
- **PHP** 7.4+
- Ən azı bir dəstəklənən qeydiyyatçı üçün API etimad məlumatları

## İlk işəsalma quraşdırma sehrbazı {#first-run-setup-wizard}

Quraşdırma sehrbazı plugin-i şəbəkədə ilk dəfə aktivləşdirdiyiniz zaman avtomatik olaraq işə düşür. O, həmçinin istənilən vaxt **Network Admin › Ultimate Multisite › Domain Seller Setup** bölməsindən əlçatandır.

### Addım 1 — Provayder seçin {#step-1--choose-a-provider}

Qoşmaq istədiyiniz qeydiyyatçını seçin. Dəstəklənən seçimlər:

| Provayder | DNS idarəetməsi | WHOIS məxfiliyi |
|---|---|---|
| OpenSRS | Bəli | Bəli |
| Namecheap | Xeyr | Bəli (WhoisGuard, pulsuz) |
| HostAfrica | Bəli | Bəli (ID qorunması) |
| Openprovider | Bəli | Bəli |
| Hostinger | Host edilmiş domenlər üçün əsas Hostinger domen xəritələməsi vasitəsilə | Bəli |
| GoDaddy | Xeyr | Xeyr |
| ResellerClub | Bəli | Xeyr |
| NameSilo | Xeyr | Xeyr |
| Enom | Bəli | Xeyr |

### Addım 2 — Etimad məlumatlarını daxil edin {#step-2--enter-credentials}

Hər provayderin fərqli etimad məlumatı sahələri var:

**OpenSRS** — İstifadəçi adı və şəxsi açar (OpenSRS Reseller Control Panel-dən)

**Namecheap** — İstifadəçi adı və API açarı (Account › Tools › API Access-dən)

**HostAfrica** — HostAfrica reseller modulundan Domains Reseller API endpoint-i və etimad məlumatları. Hazırda ayrıca sandbox endpoint sənədləşdirilməyib; canlı qeydiyyatları işə salmazdan əvvəl təhlükəsiz yalnız oxuma yoxlamaları ilə test edin.

**Openprovider** — API girişi aktivləşdirilmiş istifadəçi adı və parol. İstəyə bağlı sandbox rejimi Openprovider sandbox API-dən istifadə edir və istəyə bağlı standart müştəri handle-ı qeydiyyatlar üçün təkrar istifadə oluna bilər.

**Hostinger** — Əsas Hostinger inteqrasiyasından paylaşılan Hostinger hPanel API token-i. Eyni token əsas domen xəritələməsini və Domain Seller qeydiyyat əməliyyatlarını təmin edir.

**GoDaddy** — API açarı və sirr (developer.godaddy.com-dan)

**ResellerClub** — Reseller ID və API açarı (ResellerClub idarəetmə panelindən)

**NameSilo** — API açarı (namesilo.com › Account › API Manager-dən)

**Enom** — Account ID və API token-i

Canlı rejimə keçməzdən əvvəl provayderin test mühitinə qarşı test etmək üçün mövcud olan yerlərdə **Sandbox rejimi**ni işarələyin.

### Addım 3 — Bağlantını test edin {#step-3--test-the-connection}

**Test Connection** üzərinə klikləyin. Sehrbaz etimad məlumatlarını və bağlantını yoxlamaq üçün yüngül API çağırışı göndərir. Davam etməzdən əvvəl hər hansı etimad məlumatı problemini düzəldin.

### Addım 4 — TLD-ləri import edin {#step-4--import-tlds}

Qoşulmuş provayderdən bütün mövcud TLD-ləri və topdansatış qiymətlərini çəkmək üçün **Import TLDs** üzərinə klikləyin. Bu, domen məhsulları tərəfindən istifadə olunan TLD siyahısını doldurur. Böyük TLD kataloqları olan provayderlər üçün import 30–60 saniyə çəkə bilər.

TLD-lər həmçinin planlaşdırılmış cron işi vasitəsilə gündə bir dəfə avtomatik olaraq yenidən sinxronlaşdırılır.

### Addım 5 — Domen məhsulu yaradın {#step-5--create-a-domain-product}

Sehrbaz 10% marja ilə standart ümumi domen məhsulu yaradır. Bu məhsulu dərhal redaktə edə və ya ötürüb məhsulları **Ultimate Multisite › Products** altında əl ilə yarada bilərsiniz.

Tam məhsul konfiqurasiyası bələdçisi üçün [Domen Məhsulları və Qiymətləndirmə](./domain-products) bölməsinə baxın.

---

## Provayderin yenidən konfiqurasiyası {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller** bölməsinə keçin (və ya plugin siyahısında **Settings** üzərinə klikləyin).

Parametrlər səhifəsində bunlar var:

- **Domen satışını aktivləşdirin** — bütün funksiyanı aktiv/deaktiv edin
- **Standart provayder** — domen axtarışları və yeni məhsullar üçün istifadə olunan provayder
- **Hər axtarış üçün maksimum TLD sayı** — müştəri axtarış etdikdə neçə TLD yoxlanılacaq; daha yüksək dəyərlər daha çox seçim göstərir, lakin daha yavaşdır
- **Mövcudluq keşinin müddəti** — mövcudluq və qiymətləndirmə nəticələrinin nə qədər müddət keşdə saxlanılacağı; daha aşağı dəyərlər daha dəqiqdir, lakin API çağırışlarını artırır
- **Domen məhsullarını idarə edin** — Products siyahısına sürətli keçid
- **Provayderləri konfiqurasiya edin** — provayderləri əlavə etmək və ya yenidən konfiqurasiya etmək üçün Integration Wizard-ı açır

### İkinci provayderin əlavə edilməsi {#adding-a-second-provider}

**Configure providers** üzərinə klikləyin və yeni qeydiyyatçı üçün sehrbazı yenidən işə salın. Eyni vaxtda birdən çox provayder konfiqurasiya edə bilərsiniz. Hər domen məhsulunu konkret provayderə təyin edin və ya standartda saxlayın.

### TLD-lərin əl ilə sinxronlaşdırılması {#syncing-tlds-manually}

Parametrlər səhifəsində ən son qiymətləri çəkmək üçün hər hansı konfiqurasiya edilmiş provayderin yanında **Sync TLDs** üzərinə klikləyin. Bu, provayder topdansatış qiymətlərini yenilədikdən və ya yeni TLD-lər əlavə etdikdən sonra faydalıdır.

---

## Loglar {#logs}

Hər provayder öz log kanalına yazır. Loglara **Network Admin › Ultimate Multisite › Logs** altında baxmaq olar:

| Log kanalı | Məzmun |
|---|---|
| `domain-seller-registration` | Bütün qeydiyyat cəhdləri (uğurlu və uğursuz) |
| `domain-seller-renewal` | Yeniləmə işi nəticələri |
| `domain-seller-opensrs` | Xam OpenSRS API fəaliyyəti |
| `domain-seller-namecheap` | Xam Namecheap API fəaliyyəti |
| `domain-seller-hostafrica` | Xam HostAfrica API fəaliyyəti |
| `domain-seller-openprovider` | Xam Openprovider API fəaliyyəti |
| `domain-seller-hostinger` | Xam Hostinger API fəaliyyəti |
| `domain-seller-godaddy` | Xam GoDaddy API fəaliyyəti |
| `domain-seller-resellerclub` | Xam ResellerClub API fəaliyyəti |
| `domain-seller-namesilo` | Xam NameSilo API fəaliyyəti |
| `domain-seller-enom` | Xam Enom API fəaliyyəti |

---

## Provayder imkanları qeydləri {#provider-capability-notes}

Hər qeydiyyatçı API eyni əməliyyatları təqdim etmir. Əlavə dəstəklənməyən əməliyyatları səssiz uğursuzluq əvəzinə aydın admin yönümlü xətalarla göstərir.

- **HostAfrica** ən geniş canlı reseller iş axınını dəstəkləyir; buraya axtarış, TLD/qiymət sinxronizasiyası, qeydiyyat, yeniləmə, transfer, nameserver yeniləmələri, DNS qeydləri, EPP kodları, registrar kilidi və ID qorunması daxildir.
- **Openprovider** reseller qiymətli TLD sinxronizasiyasını, qeydiyyatı, yeniləməni, transferləri, nameserver yeniləmələrini, DNS zonalarını, EPP kodlarını, registrar kilidini və WHOIS məxfiliyini dəstəkləyir. O, addon-un avtomatik yenilədiyi qısamüddətli bearer token ilə autentifikasiya edir.
- **Hostinger** paylaşılan hPanel API token vasitəsilə mövcudluq axtarışını, qeydiyyatı, portfolio axtarışını, nameserver yeniləmələrini, registrar kilidini və WHOIS məxfiliyini dəstəkləyir. Hostinger-in ictimai Domains API-si reseller/topdansatış qiymətlərini, daxil olan transferi, açıq yeniləməni və ya EPP kodunun əldə edilməsini təqdim etmir; yeniləmələr yalnız avtomatik yenilənir.
