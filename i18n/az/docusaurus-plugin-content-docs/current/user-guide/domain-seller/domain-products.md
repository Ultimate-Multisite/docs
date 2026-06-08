---
title: Domain Məhsulları və Qiymətləndirmə
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domen Məhsulları və Qiymətləndirmə

Domen məhsulları qiymətləndirməni, TLD-ləri, WHOIS məxfiliyətini və provayder seçimini idarə etməyiniz yoludur. Hər bir domen məhsulu, əlavə bir **Domain Settings** (Domen Ayarları) tabı olan standart bir Multisite Ultimate məhsuludur.

## Domen məhsulu yaratmaq

1. **Network Admin › Ultimate Multisite › Products** yoluna keçin
2. **Add New** (Yeni Əlavə Et) düyməsinə klikləyin
3. Məhsul növünü **Domain** (Domen) olaraq təyin edin
4. **Domain Settings** tabını konfiqurasiya edin (aşağıya baxın)
5. Yadda saxlayın

Domen məhsulları məhsul siyahısında bənövşəyi **Domain** nişanı ilə görünür və **Domain Products** (Domen Məhsulları) tabından istifadə edərək filtrelənməsi mümkündür.

## Domain settings tab (Domen Ayarları tabı)

### Provider (Provayder)

Bu məhsul üçün qeydiyyatı hansı rejiestrın (registrar) idarə etdiyini seçin. Default olaraq Domain Seller ayarlarında təyin edilmiş global **Default provider** (Default provayder) istifadə olunur.

### Supported TLDs (Dəstəklənən TLD-lər)

Bütün TLD-lərə tətbiq olunan və başqa bir məhsul tərəfindən uyğunlaşmayan bir **bütününü əhatə edən məhsul** yaratmaq üçün boş buraxın.

Yalnız həmin uzantılara tətbiq olunan bir **TLD-xüsusi məhsul** yaratmaq üçün vergüllə ayrılmış TLD-lər siyahısını daxil edin (məsələn, `.com, .net, .org`).

**Məhsulun necə uyğunlaşdığı:** Müştəri domen axtarışında olduqda, əlavə paket ən spesifik uyğunlaşan məhsulu seçir. TLD siyahısında `.com` olan bir məhsul, bütününü əhatə edən məhsula üstünlük təşkil edir. Əgər heç bir TLD-xüsusi məhsul uyğunlaşmırsa, bütününü əhatə edən məhsul istifadə olunur. Əgər heç bir məhsul yoxdursa, domen axtarışı göstərilmir.

### Markup type (Qiymət artırma növü)

Üç rejim, pəkdən alınan (wholesale) qiymətdən sizin ritel qiymətinizin necə hesablandığını idarə edir:

| Mode (Rejim) | How it works (Necə işləyir) |
|---|---|
| **Percentage** (Faiz) | Pəkdən alınan qiymətə faiz əlavə edir. 10 dollarlıq pəkdən alınan domenə 20% əlavə edərək 12 dollar alınır. |
| **Fixed markup** (Sabit əlavə qiymət) | Sabit dollar məbləği əlavə edir. 10 dollarlıq domenə 5 dollar əlavə edərək 15 dollar alınır. |
| **Fixed price** (Sabit qiymət) | Pəkdən alınan qiyməti tamamilə nəzərə almır. Daim daxil etdiyiniz məbləği tələb edir. |

### Introductory pricing (Təqdimat qiymətləndirməsi)

İndirimli ilk il qiyməti təklif etmək üçün aktivləşdirin. Normal **Renewal price** (Yeniləmə qiyməti) (2-ci il və sonrası) yanında ayrı bir **Introductory price** (Təqdimat qiyməti) (1-ci il qiyməti) təyin edin. Müştəri ödəniş zamanı hər iki qiymətin göstərildiyini görür, beləliklə yeniləmədə nə gözləməli olduğunu bilir.

### WHOIS privacy (WHOIS məxfiliyi)

Bu məhsul vasitəsilə qeydiyyatdan keçirilən domenlər üçün WHOIS məxfiliyi qorunması təklif edilmədiyini idarə edir.

| Setting (Ayarlar) | Behaviour (Davranış) |
|---|---|
| **Disabled** (İstifadə edilmir) | WHOIS məxfiliyi heç vaxt təklif edilmir və ya aktivləşdirilməz. |
| **Always Included** (Həmişə daxildir) | WHOIS məxfiliyi qeydiyyat zamanı pulsuz və avtomatik olaraq aktivləşdirilir. |
| **Customer Choice** (Müştəri seçimi) | Ödəniş zamanı bir qutucaq görünür. **Privacy price** (Məxfiliyət qiyməti) ni hər il üçün təyin edərək tələb edə bilərsiniz, və ya pulsuz təklif etmək üçün onu $0 olaraq boş buraxın. |

Namecheap üçün WHOIS məxfiliyi WhoisGuard-dan (həmişə pulsuzdur) istifadə edir. OpenSRS üçün isə OpenSRS məxfiliyi xidmətindən (pəkdən alınan qiymətə malik ola bilər) istifadə edir.

---

## TLD idxalı və sinxronizasiyası

Domen məhsulları, qoşulmuş provayderdən alınan real vaxtlı pəkdən alınan qiymətləndirməni göstərir. Bunun işləməsi üçün TLD-lər idxal edilməlidir.

- **Manual sync** (Əl ilə sinxronizasiya): Settings › Domain Seller › Sync TLDs (provayderə görə)
- **Automatic sync** (Avtomatik sinxronizasiya): Konfiqurasiya edilmiş bütün provayderlər üzrə gündəlik cədvəlləşdirilmiş cron işi vasitəsilə işləyir.

Sinxronizasiyadan sonra, istənilən domen məhsulunun Domain Settings tabına keçin və mövcud TLD-ləri onların cari pəkdən alınan qiymətləri ilə görmək üçün TLD seçici (picker) istifadə edin.

---

## Auto-renewal (Avtomatik yeniləmə)

Domen yeniləmələri müştərinin üzvlük statusuna bağlıdır:

- Üzvlük yeniləndikdə və domen bağlı olduqda, domen yeniləməsi avtomatik olaraq növbəyə alınır (queued).
- Yeniləmə cəhdləri müştərinin aktiv ödəniş qapısından istifadə edir.
- Başarısız yeniləmələr üsşünə artan gecikmə (exponential backoff) ilə avtomatik cəhd edilir.
- Uğurlu yeniləmələr, uğursuzluqlar və yaxınlaşan bitmə tarixləri üçün e-poçt bildirişləri göndərilir.

Domen dövrü hadisələri üçün e-poçt şablon ID-ləri:

| Event (Hadisə) | Template ID (Şablon ID) |
|---|---|
| Domain registered (Domen qeydiyyatdan keçdi) | `domain_registered` |
| Domain renewed (Domen yeniləndi) | `domain_renewed` |
| Renewal failed (Yeniləmə uğursuz oldu) | `domain_renewal_failed` |
| Domain expiring soon (Domen tezliklə bitir) | `domain_expiring_soon` |

---

## Admin: Manual domain registration (Admin: Əl ilə domen qeydiyyatı)

Müştəri ödəniş zamanı keçmədən onun adına domen qeydiyyatı keçirmək üçün:

1. **Network Admin › Ultimate Multisite › Register Domain** yoluna keçin
2. Müştəridən seçin və domen adını daxil edin
3. Qeydiyyat sahibi əlaqə detallarını (ad, ünvan, telefon) doldurun
4. **Register** (Qeydiyyatdan keçir) düyməsinə klikləyin

Domen qeydi yaradılır və müştərinin hesabına bağlanır.
