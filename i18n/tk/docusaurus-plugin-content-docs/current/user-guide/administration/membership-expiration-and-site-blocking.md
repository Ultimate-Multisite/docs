---
title: Üylygyň Siziň we Saytynyň Bloklanmagy
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Üylygyň Siziň Site-iňizi Bloklanmagy we Aýrylmagy {#membership-expiration-and-site-blocking}

Bu guralda Ultimate Multisite-y üye bolanlaryň yşaýaýyşyny, synanyş wagtyny we önümçü site-leri bloklamagy nädip dolandyrýandygyny düşündirip berýär. Üye bolmagyň jikme-jik döwrüni (faizdan ýaşyllykdan aýrylmaga çenli), site-ler bloklanmaly we bloklanmasa, we üye bolmagyň aýrylmagyndan soň hem site-ler nädip girip biljekdigini kontrol etmeli zatlary bu guralda görkezilendir.

## Üye Bolmagyň Durum Döwrüni {#membership-status-lifecycle}

Ultimate Multisite-däki her bir üye bolmagy aşakdaky durumlardan birine eýe bolupdir:

:::note Bepul üyelikler ömür boyu
Bepul üyelikler awtomatiki ýagdaýdan aýrylmaz. Ultimate Multisite olary ömür boyu girip bilmek hasaplanýar, şonuň üçin administrator olaryň durumasyny üýtgetmese we müşderini başga önümçüye geçirmese, olar aýrylmagy barlagyna däl-de goýulmaz.
:::

| Status | Manysy |
|---|---|
| **Pending** | Ilki tölenmaýa ýa-da e-poçta barlagyny garaşýar |
| **Trialing** | Aktiw syn wezipesi, halaýy ötekşi tölenmäni bilemok |
| **Active** | Ötenden we häzirki wagtda bolan |
| **On Hold** | Täzelenme tölemesi garaşýar (hasap döredildi, tölenmesini garaşýar) |
| **Expired** | Täzelenme wagty we görnüşi geçdi, täzelenme etmändir |
| **Cancelled** | Müşderi ýa-da administrator tarapyndan açıq red edilipdir |

### Üylyklaryň Täzelenmäden Expired-e Geçmegi {#how-memberships-transition-to-expired}

Ultimate Multisite her sagatda barlag edýär we täzelenmesi garaşýan üyeçlikleri tapyp, olary expired (geçdi) hasaplanmagyny gözleýär. Bu barlag [Action Scheduler](https://actionscheduler.org/) (dogrysa WP-Cron däl) bilen we `wu_membership_check` sanly hili işi bilen amala aşyrylýar.

Sürişi barlamakda standart olarky, **3 günluk iňsiz (grace period) var**. Bir üye unvanı `date_expiration` geçip geçenden 3 günden sonra "expired" (süriklendi) görülür. Bu, iňsiz ötekishden önce müşderilere geç ödenme bermek üçin wagt berýär.

:::info
3 günluk sürişlik iňsizdi, aşakda düşündiriljek Frontend Block Grace Period tassyklanmasyndan aýra durýar. Sürişlik iňsizdi **unvan howpsuzdan/aktifden** "expired" (süriklendi) ýa-da başga bir duruma geçip biljek wagtyny kesgitleýär. Frontend block iňsizdi, unvan özüni üýtgedikten soň **sayt bloklanmagy** kesgitleýär.
:::

#### Avtomatiki Yenilený we Avtomatiki Yenilenme Olmadyk Üyelikler {#auto-renewing-vs-non-auto-renewing-memberships}

Bu aýratynlyk sürişlik howpsuzlygy düşnük üçin örän möhümdir:

- **Otavazlanma olamyny awtomatiki yenilendirmeyen** (`auto_renew = false`): Saatlik cron işi toly döwurini hal edendir -- o yenilenme tölatlaryny döredýär, otavazlanmayı "on-hold" (durmakda) ýagdaýyna geçdirýär we töleg kabul edilmese, soňra onu ägirtirip aşyryp biljekdigini görkezýär.

- **Awtomatiki yenilendirilýän otavazlanmalar** (`auto_renew = true`): Cronyn aşyp gitmekden tapawutly barlag **bu ýollary toly geçdirýär**. Töleg portalyny (Stripe, PayPal we ş.m.) abonementi tapylmazdan ýa-da ýapylyp bilende Ultimate Multisite-y webhooks arkaly habar bermelidir. Eger webhook gelmese -- bu, netji kesgitlenip biljek bir ulanç bilen, portalyn işlemekde kynçylyk bilen ýa-da sistemden daşary ýapylyp biljek abonementi ýapyklandyranda bolup bilerdir -- otavazlanma möhletini geçse hem onu "active" (işleýän) hasap edip bilner.

### Otavazlanmalar nädip agyrylýar {#how-trials-end}

Otavazlanma döwurini geçiren bir otavazlanma olamynyň, sistem:

1. Tam abonement miwesi bilen toly abonement meýilini saklaýan dowamly döwülme tölegini döredýär.
2. Üylygy statusyny `trialing` (deneme) ýagdaýından `on-hold` (durdyrylan) ýagdaýyna geçirilýär.
3. Möllükçilikde töleg meýilini müşderi bilen habarlaşdyrmak üçin e-poçta göndermäge çeker.

Bu proses normal gaýtadan işjeňlik barlagy bilen birme-bir sagatly tertibe görä işleýär, ýöne **diňe awtomatiki gaýtadan işjeňlik bermeyen üylykler üçin**. Awtomatiki gaýtadan işjeňlik berilýän denemeler üçin töleg portal (payment gateway) denemeden toplanan abonement bilen öwrenişi hal aşyrmaga çeker.

## Blok Frontend Access (Önünji Bölüm Ýylyp Bilmek) {#block-frontend-access}

Default (başlangyç) ýagdaýda, üylyk miwesi bitip biler ýa-da durdyrylar wagtda, **diňe wp-admin dashboardi chekleneýär**. Sahanyň umumy önümiji bölegi (frontend) wizitatorlary üçin halaýar. Umumy erişimi hem bloklamak isleseňiz, **Block Frontend Access** gurşawyny işjeňleşdirmeli we bermeli.

### Gurşawy Gurlamak {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** bölümini açyp, **Block Frontend Access** (Ön uçdan erişimi bloklamak) seçenegini işe qoşun.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Bu üyeçlik sozlamalarynyň doly görnüşi aşakdaky resursda tapyp bilersiňiz:

![Membership settings full page](/img/config/settings-membership-full.png)

Bu hereketden üç bagly sozlama barlap bilersiňiz:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Ana açma düğümü (toggle). Bu açıksa, üye olunan sitelerden üyeliği artıq aktiv olmadıganda caryahat (frontend) qoyulur. | Off |
| **Frontend Block Grace Period** | Üyeliq deaktiv olundan sonra bloklamadan önce gözlemlemek üçin gün sany. Hemen bloklamak üçin `0` deýip goýdurarsyň. | 0 |
| **Frontend Block Page** | Site bloklandygynda zyyaratlary yöneltmek üçin esas saytda bir sahypa. Goýulmasa, zyyaratlar umumy "Site bar" mesajyny görerler. | None |

### Site Bloklandygynda Zyyaratlar Näme Görýärler {#what-visitors-see-when-a-site-is-blocked}

Frontend erişimi bloklandyrylsa, siteye giden zyyaratlar ya:

1. **Frontend Block Page**-de saýlanýan sahaya ýerlendiriliň, ýa-da
2. **Default mesage görkezilýär**: "Bu sayt şu wagtda bar bolmady." diýip we sayt administratiwesi üçin giriş sahhasyna link berilýär.

Sayt administratorlary girizip biljekdir -- giriş sahasy hiç haçak bloklanmaz.

### Näme Bloklanýar we Ne Wagtda {#what-gets-blocked-and-when}

Bloklanma howpsuzlygy üje (membership) dowamlylygyna baglydyr:

| Üje Durmagy | Frontend Bloklanýar? | Ýumşak döwür berilýär? |
|---|---|---|
| Active (Aktiw) | Ýok | -- |
| Trialing (Sazlama) | **Ýok** (aşağıdaki notu göräýin) | -- |
| On Hold (Gözegjeledilýär) | Aktiw hasaplanýar -- bloklanmaz | -- |
| Expired (Daşary çykarylmagy) | **Ha**, eger "Block Frontend Access" işi öňe goýulsa | Ha |
| Cancelled (Aýyrlanmadyk) | **Ha**, her wagt (setlige baglydyr) | **Ýok** -- hemen bloklanýar |
| Pending (Gözegjeledilýär) | Üje barlagy arkaly bloklanmaz | -- |

:::warning Trialing üslümleri bloklanmaz
Trial (deneme) süresi bitse-de, `trialing` statusuna duýulýan üslüm (membership) frontendde **bloklanmaz**. Deneme süresinden soň, bu üslüm ilki bilen başga bir statuda geçmelidir (genellikle cron işi arkaly `on-hold`a, soňra pul tölenmese `expired`a). Eger siz geçip biljek deneme üslümlerini görýän bolsaňyz we olar geçip gitmedik bolsa, aşakdaky soraglar bölmesinden kontrol ediň.
:::

:::note Alnyp berilipdir (Cancelled) üslümler sürişme döwründen başga dowam edýär
Alnyp berilipdir (Cancelled) üslümler, Block Frontend Access işi baýlanýan bolsa-da, sanyň bitiriş sanawyny geçip gitse her wagt bloklanýar. Frontend Block Grace Period alnyp berilipdir (cancelled) üslümlerine **törmez**.
:::

## Soraglar bölmesi: Sürişme döwründen soň site halaýan ýaly bolmagy {#troubleshooting-sites-remaining-accessible-after-expiration}

Eger üyeliği sonu geldikten soň site halka elýeterli bolup bilse, bu barlaglary şu görkeziji tertipde geçiriň:

### 1. Blok Önüni Elýeterlik (Block Frontend Access) Düşündirişini Barlap Geçiň {#1-verify-the-block-frontend-access-setting-is-enabled}

**Ultimate Multisite > Settings > Memberships** bölümini açyň we **Block Frontend Access** düğümini ýapyklandyryp biljekdigini anyklaň. Bu dürli tertipde **default (başlangyç) hallarynda "off" (ýapyk)** bolup durýar, diýmekdir, üyelik işjeňleşen wagtda diňe wp-admin elýeterli biler.

### 2. Önüni Bloklamagyň Önüni Barlap Geçiň (Frontend Block Grace Period) {#2-check-the-frontend-block-grace-period}

Aynı tertipde **Frontend Block Grace Period** (Önüni Bloklamagyň Önüni) derejesini kontrol ediň. Eger bu 7 gün hökmünde setir edilse, mysal üçin, üyelik sonu gelenden soň 7 gün geçip-geçende önüni bloklanmaz – üzeň üyelik statusy hali `expired` (sona ermiş) bolmasa hem.

Eger üyelik işjeňleşen wagtda hemen bloklamagy isleseň, bu derejini `0` bilen setir ediň.

### 3. Üylygy Status Hakykatda Değişdi Dipler Teyin Edin {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** bölümini açyp, etirgen üye (membership) statusunu kontrol edin. Eğer son süresi geçse-de o hala `active` görse, bu demetlik durumun değişmedi demektir. Yaygın sebäpler şulardyr:

- **Üye avtomatik yenileniyor**: Üye düzenleme sayfasındakydan `auto_renew` alanını kontrol edin. Avtomatik yenileme açıksa, son kullanma tarihi cron işi bu üyeyi atlar -- o, ödeme geçidi (payment gateway) hatayı bildirmesine güvenir. Ultimate Multisite'ın gösterdiği durumla abonelik durumunun eşleşip eşleşmediğini teyit etmek için geçidin paneline (Stripe, PayPal) bakın.

- **Cron işi çalışmamış**: Eger bu sorunu görmek isleseňiz, lejinizi okaly.

### 4. Action Scheduler'ın Çalışıp Çalışmadığını Doğrulayın {#4-verify-action-scheduler-is-running}

Ultimate Multisite cron işleri için Action Scheduler'ı kullanır. Ağ admin panelinde **Tools > Scheduled Actions** (Araçlar > Planlanmış Eylemler) bölümüne gidin ve şunları arayın:

- **`wu_membership_check`** -- Bu, her saatte çalışan tekrarlayan bir eylem olarak görünmelidir. Eğer bu yoksa, üyelik kontrolleri planlanmıyor demektir.
- **`wu_async_mark_membership_as_expired`** -- Bunlar belirli üyelikleri süresi dolmuş olarak işaretlemek için tek tek görevlerdir. Burada başarısız olan eylemleri görürseniz, neden hata verdiğini açıklayan mesajlar içerebilirler.

Takılı kalmış veya başarısız olmuş eylemler görüyorsanız, Action Scheduler ile ilgili bir sorun olabilir. Yaygın nedenler şunlardır:

- `wp-config.php` dosyasında sistem düzeyinde cron ikamesi olmadan **`DISABLE_WP_CRON`** değeri `true` olarak ayarlanmış olması
- Düşük site trafiği -- WP-Cron yalnızca biri siteyi ziyaret ettiğinde çalışır

Cron işlerini diýip reliable (yagana) ýerine ýetirmek üçin sistem cron işini sozlaň:

```bash
# Her 5 minutda wget arkaly işi çykaryň
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ýa-da WP-CLI arkaly
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gateway Webhook Soraglaryny Barlamak (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Eger üje (membership) awtomatiki täzelenip barsa we gateway subskribi ýa-da işi kesilip gitse, ýöne Ultimate Multisite onu `active` (işde bolan) görkezýän bolsa:

- **Stripe**: Stripe Dashboard'a gidiň > Customers bölümine girip subskripsiýa dowamlylygyny kontrol ediň. Soňra Developers > Webhooks boýunça webhook endpointi işjeňdirmi diýip barlap görüň. Endpoint siziň saytınıza ýol beren we ägirtelendirmeler (successful deliveries) görkezmeli bolmaly.
- **PayPal**: PayPal biznes hasabynda subskripsiýa dowamlylygyny kontrol ediň we IPN/webhook habarçylygyny barlap görüň.

Eger gateway subskripsiýany "cancelled" (durduldy) diýse, ýöne Ultimate Multisite bu zat bar bolsa, webhook habarçylagy ýitirilip biler. Siz **Ultimate Multisite > Memberships > [Edit Membership]** boýunça üjeňlik statusyny käbir wagtda özüňiz üýtgedip bilersiňiz.

### 6. Siziň Ýatlaýan Wekilçiligini (Cron Seviyesinde) Barlap Gör {#6-check-the-expiration-grace-period-cron-level}


Cron kontrolüň özü bir "grace period" (default: 3 gün) barada we üyeçligi ýerimleşdirip bilmezlik üçin ulanýar. Bu, frontend blokynyň grace period-den aýrylan zatdyr. Sahany bloklamak üçin umumy wagt şu görä bolup biler:

**Süriş (Expiration grace period) (3 gün)** + **Frontend blokynyň grace periodi (sizi sozlamagyňyz)** = Umumy geçikme

Mesele, default sozlamalar bilen we 7 günüň frontend grace periodi bilen, sahypa hakykatdan bloklanmazdan `date_expiration` bilen bilelikde maksimum 10 güne çenli wagt geçip biljekdir.

### 7. Üyeçligi Manual ýaly Ýerimleşdirmek (Manually Expire a Membership) {#7-manually-expire-a-membership}

Cron döwrüni garaşyp durmadyk we sahypany hemen bloklamak isleseňiz, üyeçlik statusyny manual ýaly üýtgedip bilersiňiz:

1. **Ultimate Multisite > Memberships** bilen giripki
2. Täsirli üyeçligi üstüniň (affected membership) üstüne basyň
3. Statusy **Expired** (Üyeçildi) ýa-da **Cancelled** (Aýyryltdy) diji üýtgediň
4. **Save** (Sazlap) diji basyň

Frontend blocku geçiş sayfasında (next page load) işe başlar (süresi dolmuş üyelikler için Frontend Block Grace Period'a tabi veya iptal edilmiş üyelikler için hemen).

## Özet {#summary}

Süresi dolma tarihinden site engellenmesine kadar tam zaman çizelgesi:

```text
date_expiration geçer
       |
       v
  [3 günlük cron grace period]     <-- üyelik hala aktif/beklemede görünür
       |
       v
  Cron üyeliği "süresi dolmuş" olarak işaretler
       |
       v
  [Frontend Block Grace Period]  <-- Ayarlar > Memberships'te yapılandırılmıştır
       |
       v
  Site ön yüzü engellenir
```

İptal edilmiş üyelikler için yol daha kısadır:

```text
  Üyelik iptal edildi
       |
       v
  date_expiration geçer (grace period yok)
       |
       v
  Site ön yüzü hemen engellenir
```

## Geliştirici Referansı {#developer-reference}

Bu hooklar we filterler size sonlanma we bloklama işlerini özüňize görä üýtgetmek üçin mümkinçilik berýär:

| Hook/Filter | Taryhnamasy |
|---|---|
| `wu_membership_grace_period_days` | Üylygyň sonu gelýän wagtyndan öň, üyeçligi ýerine ýetmek üçin berilýän wagty (grace period) üýtgetmek üçin filterlemek (default: 3 gün) |
| `wu_schedule_membership_check_interval` | Üyeçlik barlaglarynyň aralygyndaky wagty üýtgetmek üçin filterlemek (default: 1 sagat) |
| `wu_membership_renewal_days_before_expiring` | Üylygyň sonu gelýän wagtyndan näçe gün öňde täzelenme tölegini döretmek üçin üýtgetmek üçin filterlemek (default: 3 gün) |
| `wu_blocked_site_reactivation_url` | Bir sayt bloklandygynda özüni işjeňleşdirmek üçin hasaplaýan custom URL berip bilmek üçin filterlemek |
| `wu_membership_is_active` | Üyeçlik işjeň miňdirmi, ýa-da dälmi diýen sorag üçin filterlemek |
| `wu_membership_expired_check_query_params` | Sonlanýan üyeçlikleri tapmak üçin ulanylýan query parametrlaryny (soraglary) filterlemek |

| `wu_membership_trial_check_query_params` | Sizin trial (deneme) süresi bitip bittiğinde ulanylan sorğu parametrelerini filtrläň |
