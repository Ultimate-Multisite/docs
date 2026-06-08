---
title: Üzvlük Müddətinin Bitməsi və Saytın Bloklanması
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Üçüncü Tərəf Üçün Heyətlərin Bitməsi və Saytın Bloklanması

Bu bələdçi Ultimate Multisite-ın heyətlərin bitməsini, sınaq müddətlərinin sona çatmasını və frontend saytın bloklanmasını necə idarə etdiyini izah edir. Heyətlərin aktiv və bitmiş vəziyyətləri arasındakı dövrünü, saytların bloklanmasını idarə edən parametrləri və heyətlərin bitməsindən sonra saytların niyə hələ də əlçatan olduğunu yoxlamaq üçün nə etməli olduğunuzu əhatə edir.

## Heyət Statusunun Dövrü

Ultimate Multisite-da hər bir heyət aşağıdakı statuslardan birinə malikdir:

:::note Pulsuz heyətlər ömürlükdir
Pulsuz heyətlər avtomatik bitmir. Ultimate Multisite onları ömürlük giriş kimi qiymətləndirir, buna görə də administrator statusunu dəyişmədən və ya müştəridi başqa bir məhsula keçirmədən, onlar bitmə yoxlamalarına daxil edilmir.
:::

| Status | Mənası |
|---|---|
| **Pending** | İlk ödəniş və ya e-poçt təsdiqi gözlənilir |
| **Trialing** | Aktiv sınaq müddəti, hələ ödəniş yığılməyib |
| **Active** | Ödəniş edilmiş və cari |
| **On Hold** | Yeniləmə ödənişi gözlənilir (faktura yaradılıb, ödəniş gözlənilir) |
| **Expired** | Bitmə tarixindən və nəzakət müddətindən sonra yenilənmədən keçmiş |
| **Cancelled** | Müştəri və ya administrator tərəfindən açıq şəkildə ləğv edilmiş |

### Heyətlər Necə Bitmiş Statusuna Keçir

Ultimate Multisite, heyətlərin bitməsi lazım olanlarını axtaran bir arxa plan yoxlamasını **hər saat** yerinə yetirir. Bu yoxlama [Action Scheduler](https://actionscheduler.org/) (birbaşa WP-Cron deyil) istifadə edir və `wu_membership_check` adlı zamanlanmış bir aksiyon kimi işləyir.

Bitmə yoxlaması default olaraq **3 günlük daxili nəzakət müddətinə** malikdir. Heyət, `date_expiration` tarixindən 3 gün sonra `expired` kimi işarələnə bilməz. Bu, müştərilərə statusları dəyişməzdən əvvəl gecikmiş ödəniş etmək üçün vaxt verir.

:::info
3 günlük bitmə nəzakət müddəti, aşağıda təsvir edilən Frontend Block Grace Period (Frontend Bloklanma Nəzakət Müddəti) parametrlərindən ayrıdır. Bitmə nəzakət müddəti, statusun aktiv/on-hold-dan expired-ə **dəyişdiyini** idarə edir. Frontend blok nəzakət müddəti isə status artıq dəyişdikdən sonra **saytın bloklanmasını** idarə edir.
:::

#### Avtomatik Yenilənən və Avtomatik Yenilənməyən Heyətlər

Bu fərq, bitmə davranışını anlamaq üçün kritikdir:

- **Avtomatik yenilənməyən heyətlər** (`auto_renew = false`): Saatlıq cron işi bütün dövrü idarə edir -- yeniləmə ödənişləri yaradır, heyəti on-hold statusuna keçir və ödəniş alınmasa nəhayət onu expired kimi işarələyir.

- **Avtomatik yenilənən heyətlər** (`auto_renew = true`): Cron bitmə yoxlaması **onları tamamilə atlayır**. Ödəniş qapısı (Stripe, PayPal və s.) abunəlik uğradığı və ya ləğv edildiyi zaman Ultimate Multisite-a webhook vasitəsilə bildiriş verməlidir. Əgər webhook alınmazsa -- yanlış konfiqurasiya edilmiş bir endpoint, qapı çökməsi və ya sistem xaricində ləğv edilmiş bir abunəlik səbəbindən -- heyət bitmə tarixi keçsə belə `active` qalaraq qalabilir.

### Sınaq Müddətləri Necə Bitir

Bir sınaq heyətinin sınaq müddəti bitdikdə, sistem:

1. Tam abunəlik məbləği ilə gözlənilən bir yeniləmə ödənişi yaradır.
2. Heyət statusunu `trialing`-dən `on-hold`-a keçir.
3. Müştəriyə yeniləmə ödənişi bildiriş e-poçtu göndərir.

Bu proses, adi bitmə yoxlaması ilə eyni saatlıq cədvəldə işləyir, lakin **yalnız avtomatik yenilənməyən heyətlər üçün**. Avtomatik yenilənən sınaqlar üçün isə ödəniş qapısı sınaqdan ödənişli abunəliyə keçidi idarə edir.

## Frontend Girişinin Bloklanması

Default olaraq, bir heyət bitdikdə və ya on-hold-a keçdikdə, **yalnız wp-admin dashboard məhdudlaşdırılır**. Saytın ictimai frontend hissəsi ziyarətçilər üçün əlçatan qalır. İctimai girişi də bloklamaq üçün **Block Frontend Access** parametrinə işarə verməlisiniz.

### Parametrin Konfiqurasiyası

**Ultimate Multisite > Settings > Memberships** səhifəsinə keçin və **Block Frontend Access**-i aktiv edin.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Heyət parametrlərinin tam görünüşü budur:

![Membership settings full page](/img/config/settings-membership-full.png)

Bu davranışı idarə edən üç əlaqəli parametr var:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Əsas düymə. Aktiv edildikdə, heyət artıq aktiv olmadıqda şəbəkə saytlarının ictimai frontend hissəsini bloklayır. | Off |
| **Frontend Block Grace Period** | Heyət inaktiv olduqdan sonra bloklanmadan əvvəl gözləniləcək gün sayı. Dərhal bloklamaq üçün `0` təyin edin. | 0 |
| **Frontend Block Page** | Sayt bloklandıqda ziyarətçiləri yönləndiriləcək əsas saytdakı bir səhifə. Təyin edilməsə, ziyarətçilər ümumi "Site not available" (Sayt mövcud deyil) mesajını görürlər. | None |

### Sayt Bloklandığı Zaman Ziyarətçilər Nə Görürlər

Frontend girişinin bloklanması zamanı, sayta gələn ziyarətçilər ya:

1. **Frontend Block Page**-də seçdiyiniz səhifəyə **yönləndirilir** (konfiqurasiya edildisə), və ya
2. **Default bir mesaj görürlər**: "This site is not available at the moment." (Bu sayt hazırda mövcud deyil.) və sayt administratoru üçün giriş səhifəsinə keçid linki.

Sayt administratorları yenə də daxil ola bilərlər -- giriş səhifəsi heç vaxt bloklanmır.

### Nə Bloklanır və Nə Vaxt

Bloklama davranışı heyət statusundan asılıdır:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (aşağıdakı qeydə baxın) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- dərhal bloklanır |
| Pending | Not blocked via membership check | -- |

:::warning Trialing heyətlər bloklanmır
Sınaq müddəti bitmiş olsa belə, `trialing` statuslu heyət frontend-də **bloklanmayacaq**. Sınaq əvvəlcə başqa bir statusa (adətən cron işi vasitəsilə `on-hold`, sonra ödəniş edilmədiyi halda `expired`) keçməlidir. Əgər sınaq heyətləri keçid etməyibsə görünürsə, aşağıdakı problem-solving hissəsinə baxın.
:::

:::note Ləğv edilmiş heyətlər nəzakət müddətini atlayır
Ləğv edilmiş heyətlər, Block Frontend Access aktiv olub-olmaması barədə qərarsız olaraq, bitmə tarixi keçdikdən sonra həmişə bloklanır. Frontend Block Grace Period, ləğv edilmiş heyətlərə tətbiq edilmir.
:::

## Problem-Solving: Bitmə Sonra Saytların Əlçatan Qalması

Heyətlər bitdikdən sonra saytlar ictimaiyyətə açıq qalırsa, bu yoxlamaları ardıcıl olaraq yerinə yetirin:

### 1. Block Frontend Access Parametrinin Aktiv Olduğunu Yoxlayın

**Ultimate Multisite > Settings > Memberships**-ə gedin və **Block Frontend Access** düyməsinin aktiv olduğundan əmin olun. Bu parametr **default olaraq bağlıdır**, yəni heyət inaktiv olduqda yalnız wp-admin məhdudlaşır.

### 2. Frontend Block Grace Period-i Yoxlayın

Eyni parametrlər səhifəsində **Frontend Block Grace Period** dəyərinə baxın. Əgər bu 7 günə təyin edilibsə, heyət statusu artıq `expired` olsa belə, frontend 7 gün sonra bloklanacaq.

Heyət inaktiv olduqdan sonra dərhal bloklamaq istəyirsinizsə, bunu `0` olaraq təyin edin.

### 3. Heyət Statusunun Əslində Dəyişdiyini Təsdiqləyin

**Ultimate Multisite > Memberships**-ə gedin və təsirlənən heyətin statusuna baxın. Əgər bitmə tarixi keçməsinə baxmayaraq hələ də `active` göstərirsə, status keçidi baş verməyib. Ümumi səbəblər:

- **Heyət avtomatik yenilənir**: Heyət redaktə səhifəsindəki `auto_renew` sahəsinə baxın. Əgər avtomatik yeniləmə aktivdirsə, bitmə cron-u bu heyəti atlayır -- o, uğursuzluğu bildirmək üçün ödəniş qapısına güvənir. Ultimate Multisite-ın göstərdiyi ilə abunəlik statusunun uyğunluğunu təsdiqləmək üçün qapı panelinizə (Stripe, PayPal) baxın.

- **Cron işi işləməyib**: Növbəti addıma baxın.

### 4. Action Scheduler-in İşlədiyini Yoxlayın

Ultimate Multisite cron işləri üçün Action Scheduler-dən istifadə edir. Şəbəkə administratorunda **Tools > Scheduled Actions**-a gedin və aşağıdakıları axtarın:

- **`wu_membership_check`** -- Bu, hər saat işləyən təkrarlanan bir aksiyon kimi görünməlidir. Əgər yoxdursa, heyət yoxlamaları cədvəlləşdirilməyir.
- **`wu_async_mark_membership_as_expired`** -- Bunlar müəyyən heyətləri bitmiş kimi işarələmək üçün fərdi tapşırıqlardır. Əgər burada uğursuz aksiyonlar görürsünüzsə, səbəbi izah edən xəta mesajları ola bilər.

Əgər dayanıb və ya uğursuz aksiyonlar görürsünüzsə, Action Scheduler ilə bağlı bir problem ola bilər. Ümumi səbəblər:

- `wp-config.php` faylında **`DISABLE_WP_CRON`** `true` olaraq təyin edilib və sistem səviyyəli cron əvəzinə yoxdur.
- **Sayt trafikinin aşağı olması** -- WP-Cron yalnız kiminsə saytə gəldiyi zaman işləyir.

Etibarlı cron icrası təmin etmək üçün sistem cron işi qurulmalıdır:

```bash
# wget vasitəsilə hər 5 dəqiqə
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Və ya WP-CLI vasitəsilə
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Qapı Webhook Problemlərinə Baxın (Avtomatik Yenilənən Heyətlər)

Əgər heyət avtomatik yenilənirsə və qapı abunəliyi ləğv edilib və ya uğursuz olub, lakin Ultimate Multisite hələ də onu `active` göstərir:

- **Stripe**: Stripe Dashboard > Customers-a gedin və abunəlik statusunu yoxlayın. Sonra Developers > Webhooks altında webhook endpoint-inin aktiv olduğundan əmin olun. Endpoint saytınıza işarə etməli və uğurlu çatdırılmaları göstərməlidir.
- **PayPal**: PayPal biznes hesabınızda abunəlik statusunu yoxlayın və IPN/webhook çatdırılmasını təsdiqləyin.

Əgər qapı abunəliyi ləğv edir, lakin Ultimate Multisite etmirsə, webhook bildirişi yəqin ki, itib. Heyət statusunu **Ultimate Multisite > Memberships > [Edit Membership]**-də əl ilə dəyişə bilərsiniz.

### 6. Bitmə Nəzakət Müddətinə Baxın (Cron Səviyyəsi)

Cron yoxlamasının öz nəzakət müddəti var (default: 3 gün) heyəti bitmiş kimi işarələməzdən əvvəl. Bu, frontend blok nəzakət müddətindən ayrıdır. Saytın bloklanmasına qədər ümumi vaxt ola bilər:

**Bitmə nəzakət müddəti (3 gün)** + **Frontend blok nəzakət müddəti (sizin parametriniz)** = Ümumi gecikmə

Məsələn, default parametrlər və 7 günlük frontend nəzakət müddəti ilə, saytın faktiki bloklanmasına qədər `date_expiration`-dan 10 günə qədər vaxt keçə bilər.

### 7. Heyəti Əl ilə Bitirmək

Cron dövrünü gözləmədən saytı dərhal bloklamaq lazım gəlsə, heyət statusunu əl ilə dəyişə bilərsiniz:

1. **Ultimate Multisite > Memberships**-ə gedin
2. Təsirlənən heyətə klikləyin
3. Statusu **Expired** (Bitmiş) və ya **Cancelled** (Ləğv edilmiş) olaraq dəyişin
4. **Save** (Yadda saxla) düyməsinə basın

Frontend blok növbəti səhifə yüklənməsində təsir göstərəcək (bitmiş heyətlər üçün Frontend Block Grace Period-ə, və ya ləğv edilmiş heyətlər üçün dərhal təsir göstərir).

## Xülasə

Bitmə tarixindən sayt bloklanmasına qədər tam zaman xətti:

```text
date_expiration keçir
       |
       v
  [3 günlük cron nəzakət müddəti]     <-- heyət hələ də active/on-hold kimi görünür
       |
       v
  Cron heyəti "expired" kimi işarələyir
       |
       v
  [Frontend Block Grace Period]  <-- Settings > Memberships-də konfiqurasiya olunur
       |
       v
  Sayt frontend-i bloklanır
```

Ləğv edilmiş heyətlər üçün yol daha qısa vədir:

```text
  Heyət ləğv edildi
       |
       v
  date_expiration keçir (nəzakət müddəti yoxdur)
       |
       v
  Sayt frontend-i dərhal bloklanır
```

## Developer Referansı

Aşağıdakı hook və filterlər bitmə və bloklanma davranışını fərdiləşdirməyinizə imkan verir:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Heyəti bitmiş kimi işarələməzdən əvvəl nəzakət müddəti günlərini filterləyir (default: 3) |
| `wu_schedule_membership_check_interval` | Heyət yoxlamaları arasındakı intervalı filterləyir (default: 1 saat) |
| `wu_membership_renewal_days_before_expiring` | Yeniləmə ödənişi yaratmaq üçün bitməyə nə qədər gün qaldığını filterləyir (default: 3) |
| `wu_blocked_site_reactivation_url` | Sayt bloklandığı zaman fərdiləşdirilmiş bir reaktivasiya URL-i təmin etmək üçün |
| `w` |
