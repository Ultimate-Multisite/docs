---
title: Quraşdırma və Provider Konfiqurasiyası
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Qurulum və Provider Konfiqurasiyası

Domain Seller eklentisi, tələb olunan hər addımı sizinlə birlikdə keçən bir təlimat (wizard) ilə gəlir. Bu səhifə wizard-ın iş axınını və daha sonra provider-ları necə konfiqurasiya etməyi və ya yenidən konfiqurasiya etməyi əhatə edir.

## Tələblər

- **Multisite Ultimate** v2.4.12 və ya daha yuxarı, network-aktivasiya edilmiş
- **PHP** 7.4+
- Ən azı bir dəstəyi göstərilən registrar üçün API credentials

## İlk dəfə qurulum wizard-ı

Qurulum wizard-ı eklentini ilk dəfə network-aktivasiya etdiyiniz zaman avtomatik işə düşür. Həmçinin, istənilən vaxt **Network Admin › Ultimate Multisite › Domain Seller Setup** yerindən də əlçatandır.

### Addım 1 — Bir provider seçin

Bağlanmaq istədiyiniz registrar-ı seçin. Dəstəklənən variantlar:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Bəli | Bəli |
| Namecheap | Xeyr | Bəli (WhoisGuard, pulsuz) |
| GoDaddy | Xeyr | Xeyr |
| ResellerClub | Bəli | Xeyr |
| NameSilo | Xeyr | Xeyr |
| Enom | Bəli | Xeyr |

### Addım 2 — Credentials-ları daxil edin

Hər provider fərqli credential sahələrinə malikdir:

**OpenSRS** — İstifadəçi adı və private key (OpenSRS Reseller Control Panel-dən)

**Namecheap** — İstifadəçi adı və API key (Account › Tools › API Access-dən)

**GoDaddy** — API key və secret (developer.godaddy.com-dan)

**ResellerClub** — Reseller ID və API key (ResellerClub control panel-dən)

**NameSilo** — API key (namesilo.com › Account › API Manager-dən)

**Enom** — Account ID və API token

Canlı istifadəyə keçməzdən əvvəl test etmək üçün mümkün olan yerlərdə **Sandbox mode**-u yoxlayın.

### Addım 3 — Bağlantını test edin

**Test Connection** düyməsinə basın. Wizard, credentials və bağlantı yoxlaması üçün yüngül bir API çağırışı göndərir. Davam etməzdən əvvəl hər hansı credential problemlərini aradan qaldırın.

### Addım 4 — TLD-ləri idxal edin

Dəstəklənən provider-dan bütün mövcud TLD-ləri və wholesale qiymətləndirməni çəkmək üçün **Import TLDs** düyməsinə basın. Bu, domain məhsulları tərəfindən istifadə edilən TLD siyahısını doldurur. Bu idxal, böyük TLD kataloqu olan provider-lar üçün 30–60 saniyə çəkə bilər.

TLD-lər həmçinin gündə bir dəfə planlaşdırılmış cron job vasitəsilə avtomatik sinxronlaşdırılır.

### Addım 5 — Bir domain məhsulu yaradın

Wizard, 10% markup ilə standart bir "catch-all" domain məhsulu yaradır. Bu məhsulu dərhal redaktə edə və ya keçərək **Ultimate Multisite › Products** altında məhsulları əl ilə yarada bilərsiniz.

Tam məhsul konfiqurasiyası təlimatı üçün [Domain Products and Pricing](./domain-products) səhifəsinə baxın.

---

## Provider-ı Yenidən Konfiqurasiya Etmək

**Network Admin › Ultimate Multisite › Settings › Domain Seller** səhifəsinə keçin (və ya eklenti siyahısında **Settings** düyməsinə basın).

Bu ayarlar səhifəsi aşağıdakıları ehtiva edir:

- **Enable domain selling** — bütün funksiyanı yandır/söndür
- **Default provider** — domain axtarışları və yeni məhsullar üçün istifadə edilən provider
- **Max TLDs per search** — müştəri axtarış etdikdə neçə TLD yoxlanılacağını müəyyən edir; yüksək dəyərlər daha çox seçim göstərir, lakin daha yavaşdır
- **Availability cache duration** — mövcudluq və qiymətləndirmə nəticələrinin nə qədər müddətə cache ediləcəyini müəyyən edir; aşağı dəyərlər daha dəqiqdir, lakin API çağırışlarını artırır
- **Manage domain products** — Products siyahısına sürətli keçid
- **Configure providers** — provider-lar əlavə etmək və ya yenidən konfiqurasiya etmək üçün Integration Wizard-ı açır

### İkinci bir provider əlavə etmək

**Configure providers** düyməsinə basın və yeni registrar üçün wizard-ı yenidən işlədin. Eyni vaxtda bir neçə provider konfiqurasiya edə bilərsiniz. Hər domain məhsulunu müəyyən bir provider-a təyin edin və ya default-da saxlayın.

### TLD-ləri əl ilə sinxronlaşdırmaq

Ayarlar səhifəsində, hər hansı konfiqurasiya edilmiş provider-ın yanında **Sync TLDs** düyməsinə basın ki, ən son qiymətləndirməni çəkin. Bu, bir provider wholesale qiymətləndirməni yenilədikdə və ya yeni TLD-lər əlavə etdikdə faydalıdır.

---

## Logs (Qeydlər)

Hər bir provider öz log kanalına yazır. Loglar **Network Admin › Ultimate Multisite › Logs** altında görünür:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Bütün qeydiyyat cəhdləri (uğurlu və uğursuz) |
| `domain-seller-renewal` | Yeniləmə işi nəticələri |
| `domain-seller-opensrs` | Xam OpenSRS API fəaliyyəti |
| `domain-seller-namecheap` | Xam Namecheap API fəaliyyəti |
| `domain-seller-godaddy` | Xam GoDaddy API fəaliyyəti |
| `domain-seller-resellerclub` | Xam ResellerClub API fəaliyyəti |
| `domain-seller-namesilo` | Xam NameSilo API fəaliyyəti |
| `domain-seller-enom` | Xam Enom API fəaliyyəti |
