---
title: Üyelik Süresi Dolması ve Site Engelleme
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Üyelik Süresi Dolması ve Site Engelleme

Bu rehber, Ultimate Multisite'ın üyelik süresi dolmasını, deneme süresi bitimini ve ön yüz (frontend) site engellemelerini nasıl yönettiğini açıklıyor. Bir üyeliğin aktif durumdan süresi dolmuş duruma geçiş yaşam döngüsünü, sitelerin engellenip engellenmeyeceğini kontrol eden ayarları ve bir üyelik süresi dolduktan sonra sitelerin neden hala erişilebilir kaldığını kontrol etmeniz gereken durumları ele alıyor.

## Üyelik Durum Yaşam Döngüsü

Ultimate Multisite'taki her üyelik aşağıdaki durumlardan birine sahiptir:

:::note Ücretsiz üyelikler ömür boyudur
Ücretsiz üyelikler otomatik olarak süresi dolmaz. Ultimate Multisite bunları ömür boyu erişim olarak kabul eder, bu nedenle bir yönetici durumu değiştirmediği veya müşteriyi başka bir ürüne taşımadığı sürece süresi dolma kontrollerine dahil edilmezler.
:::

| Durum | Anlamı |
|---|---|
| **Pending** | İlk ödemeyi veya e-posta doğrulamayı bekliyor |
| **Trialing** | Aktif deneme süresi, henüz ödeme alınmadı |
| **Active** | Ödenmiş ve güncel |
| **On Hold** | Yenileme ödemesi bekliyor (fatura oluşturuldu, ödeme bekleniyor) |
| **Expired** | Süresi dolma tarihini ve geçiş süresini yenileme yapılmadan geçti |
| **Cancelled** | Müşteri veya yönetici tarafından açıkça iptal edildi |

### Üyelikler Süresi Dolmuş Durumuna Nasıl Geçer

Ultimate Multisite, süresi dolması gereken üyelikleri arayan bir arka plan kontrolünü **her saat başı** çalıştırır. Bu kontrol, [Action Scheduler](https://actionscheduler.org/) kullanır (doğrudan WP-Cron değil) ve `wu_membership_check` adlı planlanmış bir eylem olarak çalışır.

Süre dolma kontrolünün varsayılan olarak **3 günlük yerleşik bir geçiş süresi** vardır. Bir üyelik, `date_expiration` tarihinden 3 gün geçmeden `expired` olarak işaretlenmeyecektir. Bu, müşterilere durumları değişmeden önce geç ödeme yapmaları için zaman tanır.

:::info
3 günlük süresi dolma geçiş süresi, aşağıda açıklanan Ön Yüz Engelleme Geçiş Süresi ayarından ayrıdır. Süresi dolma geçiş süresi, **durumun** aktif/askıda durumdan süresi dolmuş duruma ne zaman değişeceğini kontrol eder. Ön yüz engelleme geçiş süresi ise, durum zaten değişmiş olsa bile **sitenin** ne zaman engelleneceğini kontrol eder.
:::

#### Otomatik Yenilenen ve Otomatik Yenilenmeyen Üyelikler

Bu ayrım, süresi dolma davranışını anlamak için kritik öneme sahiptir:

- **Otomatik yenilenmeyen üyelikler** (`auto_renew = false`): Saatlik cron işi tüm yaşam döngüsünü yönetir; yenileme ödemeleri oluşturur, üyeliği askıya alır ve ödeme alınmazsa sonunda süresi dolmuş olarak işaretler.

- **Otomatik yenilenen üyelikler** (`auto_renew = true`): Cron süresi dolma kontrolü **bunları tamamen atlar**. Ödeme ağ geçidi (Stripe, PayPal vb.), bir abonelik başarısız olduğunda veya iptal edildiğinde Ultimate Multisite'a webhook aracılığıyla bildirim göndermesi beklenir. Webhook alınmazsa (yanlış yapılandırılmış bir uç nokta, ağ geçidi kesintisi veya sistem dışında iptal edilmiş bir abonelik nedeniyle), üyelik süresi dolma tarihini geçmesine rağmen sonsuza kadar `active` kalabilir.

### Deneme Süreleri Nasıl Biter

Bir deneme süresi üyeliğinin deneme süresi sona erdiğinde, sistem:

1. Tam abonelik tutarıyla bekleyen bir yenileme ödemesi oluşturur
2. Üyelik durumunu `trialing`'den `on-hold`'a geçirir
3. Müşteriye bir yenileme ödemesi bildirim e-postası gönderir

Bu süreç, düzenli süresi dolma kontrolüyle aynı saatlik programda çalışır, ancak **yalnızca otomatik yenilenmeyen üyelikler** için geçerlidir. Otomatik yenilenen denemeler için, ödeme ağ geçidi denemeden ücretli aboneliğe geçişi yönetir.

## Ön Yüz Erişimi Engelleme

Varsayılan olarak, bir üyelik süresi dolduğunda veya askıya alındığında, **yalnızca wp-admin kontrol paneli kısıtlanır**. Sitenin genel ön yüzü ziyaretçilere açık kalır. Genel erişimi de engellemek için **Ön Yüz Erişimi Engelleme** ayarını etkinleştirmeniz gerekir.

### Ayarı Yapılandırma

**Ultimate Multisite > Ayarlar > Üyelikler** sayfasına gidin ve **Ön Yüz Erişimi Engelleme**'yi etkinleştirin.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

İşte üyelik ayarlar sayfasının tam görünümü:

![Membership settings full page](/img/config/settings-membership-full.png)

Bu davranışı kontrol eden üç ilgili ayar bulunmaktadır:

| Ayar | Açıklama | Varsayılan |
|---|---|---|
| **Block Frontend Access** | Ana anahtar. Etkinleştirildiğinde, üyelikleri artık aktif olmayan ağ sitelerinin genel ön yüzünü engeller. | Kapalı |
| **Frontend Block Grace Period** | Üyelik pasif hale geldikten sonra engellemeden önce bekleyeceğiniz gün sayısı. Hemen engellemek için `0` olarak ayarlayın. | 0 |
| **Frontend Block Page** | Bir site engellendiğinde ziyaretçileri yönlendireceğiniz ana sitedeki bir sayfa. Ayarlanmazsa, ziyaretçiler genel bir "Site şu anda kullanılamıyor" mesajı görür. | Yok |

### Site Engellendiğinde Ziyaretçiler Ne Görür?

Ön yüz erişimi engellendiğinde, siteye gelen ziyaretçiler ya:

1. **Yönlendirilir**: **Ön Yüz Engelleme Sayfası**'nda seçtiğiniz sayfaya (yapılandırılmışsa), ya da
2. **Varsayılan bir mesaj görürler**: Site yöneticisi için giriş sayfasına bağlantıyla birlikte: "Bu site şu anda kullanılamıyor."

Site yöneticileri hala giriş yapabilir; giriş sayfası asla engellenmez.

### Ne Engellenir ve Ne Zaman

Engelleme davranışı üyelik durumuna bağlıdır:

| Üyelik Durumu | Ön Yüz Engellenir mi? | Geçiş Süresi Uygulanır mı? |
|---|---|---|
| Active | Hayır | -- |
| Trialing | **Hayır** (aşağıdaki notu görün) | -- |
| On Hold | Aktif kabul edilir -- engellenmez | -- |
| Expired | **Evet**, Ön Yüz Erişimi Engelleme açıksa | Evet |
| Cancelled | **Evet**, her zaman (ayardan bağımsız) | **Hayır** -- hemen engellenir |
| Pending | Üyelik kontrolü yoluyla engellenmez | -- |

:::warning Deneme süresi üyeliikleri engellenmez
Bir deneme süresi sona ermiş olsa bile, `trialing` durumundaki bir üyelik ön yüzde **engellenmeyecektir**. Deneme süresinin önce başka bir duruma (genellikle cron işi yoluyla `on-hold`, ardından ödenmemişse `expired`) geçmesi gerekir. Deneme süresi geçmesine rağmen durum değiştirmemiş üyelikler görüyorsanız, aşağıdaki sorun giderme bölümünü kontrol edin.
:::

:::note İptal edilmiş üyelikler geçiş süresini atlar
İptal edilmiş üyelikler, Ön Yüz Erişimi Engelleme etkinleştirilmiş olsa bile, süresi dolma tarihi geçtikten sonra her zaman engellenir. Ön Yüz Engelleme Geçiş Süresi, iptal edilmiş üyeliklere uygulanmaz.
:::

## Sorun Giderme: Süresi Dolmasına Rağmen Siteler Neden Erişilebilir Kalıyor

Bir üyelik süresi dolduktan sonra siteler hala genel kullanıma açık kalıyorsa, aşağıdaki kontrolleri sırayla yapın:

### 1. Ön Yüz Erişimi Engelleme Ayarının Etkin Olduğunu Doğrulayın

**Ultimate Multisite > Ayarlar > Üyelikler** sayfasına gidin ve **Ön Yüz Erişimi Engelleme** anahtarının açık olduğundan emin olun. Bu ayar **varsayılan olarak kapalıdır**, bu da bir üyelik pasif hale geldiğinde yalnızca wp-admin'in kısıtlandığı anlamına gelir.

### 2. Ön Yüz Engelleme Geçiş Süresini Kontrol Edin

Aynı ayarlar sayfasında **Ön Yüz Engelleme Geçiş Süresi** değerini kontrol edin. Örneğin, bu 7 gün olarak ayarlanmışsa, üyelik durumu zaten `expired` olsa bile, ön yüz 7 gün geçene kadar engellenmeyecektir.

Üyelik pasif hale geldikten sonra hemen engellemek istiyorsanız bunu `0` olarak ayarlayın.

### 3. Üyelik Durumunun Gerçekten Değiştiğini Onaylayın

**Ultimate Multisite > Üyelikler** sayfasına gidin ve etkilenen üyeliğin durumunu kontrol edin. Süresi dolma tarihi geçmiş olmasına rağmen hala `active` görünüyorsa, durum geçişi gerçekleşmemiştir. Yaygın nedenler:

- **Üyelik otomatik yenileniyor**: Üyelik düzenleme sayfasındaki `auto_renew` alanını kontrol edin. Otomatik yenileme etkinse, süresi dolma cron'u bu üyeliği atlar -- başarısızlığı bildirmek için ödeme ağ geçidine güvenilir. Abonelik durumunun Ultimate Multisite'ta gösterilenle eşleşip eşleşmediğini doğrulamak için ağ geçidi kontrol panelinizi (Stripe, PayPal) kontrol edin.

- **Cron işi çalışmamış olabilir**: Bir sonraki adıma bakın.

### 4. Action Scheduler'ın Çalıştığını Doğrulayın

Ultimate Multisite, cron işleri için Action Scheduler kullanır. Ağ yöneticisindeki **Araçlar > Planlanmış Eylemler** bölümüne gidin ve şunları arayın:

- **`wu_membership_check`** -- Bu, her saat çalışan tekrarlayan bir eylem olarak görünmelidir. Eksikse, üyelik kontrolleri planlanmıyordur.
- **`wu_async_mark_membership_as_expired`** -- Bunlar belirli üyelikleri süresi dolmuş olarak işaretlemek için bireysel görevlerdir. Burada başarısız eylemler görüyorsanız, nedenini açıklayan hata mesajları içerebilirler.

Takılı kalmış veya başarısız eylemler görüyorsanız, bir Action Scheduler sorununuz olabilir. Yaygın nedenler:

- `wp-config.php` dosyasında `DISABLE_WP_CRON`'un `true` olarak ayarlanması ve sistem düzeyinde bir cron yerine geçirilmemesi
- **Düşük site trafiği** -- WP-Cron yalnızca biri siteyi ziyaret ettiğinde çalışır

Güvenilir cron çalıştırmasını sağlamak için bir sistem cron işi kurun:

```bash
# wget ile her 5 dakikada bir çalıştırın
*/5 * * * * wget -q -O /dev/null "https://sizin-ağ-adresiniz.com/wp-cron.php?doing_wp_cron"

# Veya WP-CLI ile
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://sizin-ağ-adresiniz.com
```

### 5. Ağ Geçidi Webhook Sorunlarını Kontrol Edin (Otomatik Yenilenen Üyelikler)

Üyelik otomatik yenileniyorsa ve ağ geçidi aboneliği iptal edilmiş veya başarısız olmuşsa, ancak Ultimate Multisite hala onu `active` olarak gösteriyorsa:

- **Stripe**: Stripe Kontrol Paneli > Müşteriler'e gidin ve abonelik durumunu kontrol edin. Ardından Geliştiriciler > Webhook altında webhook uç noktasının etkin olup olmadığını doğrulayın. Uç nokta sitenize işaret etmeli ve başarılı teslimatları göstermelidir.
- **PayPal**: PayPal iş hesabınızda abonelik durumunu kontrol edin ve IPN/webhook teslimatını doğrulayın.

Ağ geçidi aboneliği iptal edilmiş olarak gösteriyorsa ancak Ultimate Multisite göstermiyorsa, webhook bildirimi muhtemelen kaybolmuştur. Üyelik durumunu **Ultimate Multisite > Üyelikler > [Üyeliği Düzenle]** üzerinden manuel olarak değiştirebilirsiniz.

### 6. Süresi Dolma Geçiş Süresini Kontrol Edin (Cron Seviyesi)

Cron kontrolünün kendi geçiş süresi vardır (varsayılan: 3 gün) ve bu, ön yüz engelleme geçiş süresinden ayrıdır. Bir sitenin engellenmesine kadar geçen toplam süre şunlardan oluşabilir:

**Süresi Dolma Geçiş Süresi (3 gün)** + **Ön Yüz Engelleme Geçiş Süresi (ayarı)** = Toplam gecikme

Örneğin, varsayılan ayarlar ve 7 günlük bir ön yüz geçiş süresi ile, site aslında engellenmeden önce `date_expiration` tarihinden 10 güne kadar sürebilir.

### 7. Bir Üyeliği Manuel Olarak Süresi Dolmuş Yapın

Cron döngeresini beklemeden bir siteyi hemen engellemeniz gerekirse, üyelik durumunu manuel olarak değiştirebilirsiniz:

1. **Ultimate Multisite > Üyelikler** sayfasına gidin
2. Etkilenen üyeliğe tıklayın
3. Durumu **Expired** (Süresi Dolmuş) veya **Cancelled** (İptal Edilmiş) olarak değiştirin
4. **Kaydet**'e tıklayın

Ön yüz engellemesi bir sonraki sayfa yüklemesinde geçerli olacaktır (süresi dolmuş üyelikler için Ön Yüz Engelleme Geçiş Süresine, iptal edilmiş üyelikler için ise hemen uygulanır).

## Özet

Süre dolma tarihinden site engellenmesine kadar geçen tam zaman çizelgesi:

```text
date_expiration geçer
       |
       v
  [3 günlük cron geçiş süresi]     <-- üyelik hala aktif/askıda görünüyor
       |
       v
  Cron üyeliği "süresi dolmuş" olarak işaretler
       |
       v
  [Ön Yüz Engelleme Geçiş Süresi]  <-- Ayarlar > Üyelikler'de yapılandırılır
       |
       v
  Site ön yüzü engellenir
```

İptal edilmiş üyelikler için yol daha kısadır:

```text
  Üyelik iptal edildi
       |
       v
  date_expiration geçer (geçiş süresi yok)
       |
       v
  Site ön yüzü hemen engellenir
```

## Geliştirici Referansı

Aşağıdaki hook'lar ve filtreler, süresi dolma ve engelleme davranışını özelleştirmenize olanak tanır:

| Hook/Filter | Açıklama |
|---|---|
| `wu_membership_grace_period_days` | Bir üyeliğin süresi dolmadan önce geçiş süresi günlerini filtreler (varsayılan: 3) |
| `wu_schedule_membership_check_interval` | Üyelik kontrolleri arasındaki aralığı filtreler (varsayılan: 1 saat) |
| `wu_membership_renewal_days_before_expiring` | Yenileme ödemesi oluşturulması için süresi dolmaya ne kadar gün kala filtreler (varsayılan: 3) |
| `wu_blocked_site_reactivation_url` | Bir site engellendiğinde özel bir yeniden etkinleştirme URL'si sağlamak için filtreler |
| `wu_membership_is_active` | Bir üyeliğin aktif kabul edilip edilmeyeceğini filtreler |
| `wu_membership_expired_check_query_params` | Süresi dolmuş üyelikleri bulmak için kullanılan sorgu parametrelerini filtreler |
| `wu_membership_trial_check_query_params` | Süresi dolmuş denemeleri bulmak için kullanılan sorgu parametrelerini filtreler |
