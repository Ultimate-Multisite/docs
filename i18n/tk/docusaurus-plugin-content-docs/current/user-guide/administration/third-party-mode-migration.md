---
title: Üçünji Taraf Moduna Geçiş
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Üçüncü Taraf Moduna Geçiş {#third-party-mode-migration}

Superdav AI Agent v1.12.0, üçüncü taraf yeteneklerinin nasıl işlendiğini değiştirir. **Üçüncü taraf modu artık otomatik olarak varsayılan** durumdadır ve bu sayede WordPress 7.0+ üzerinde manuel yapılandırma yapmadan yerel WordPress Abilities API entegrasyonu etkinleştirilir.

## Neler Değişti? {#what-changed}

### v1.12.0 Öncesi {#before-v1120}

Üçüncü taraf yetenekleri manuel yapılandırma gerektiriyordu:

- "üçüncü taraf modu"nu açıkça etkinleştirmeniz gerekiyordu
- Yetenekler özel bir kayıt defterinden yükleniyordu
- WordPress Abilities API ile entegrasyon isteğe bağlıydı
- Eski mod varsayılan durumdu

### v1.12.0 Sonrası {#after-v1120}

Üçüncü taraf yetenekleri otomatik çalışır:

- Üçüncü taraf modu "auto" olarak varsayılır
- Yetenekler WordPress Abilities API ile yerel olarak entegre olur
- WordPress 7.0+ üzerinde manuel yapılandırmaya gerek yoktur
- Daha eski WordPress sürümleri için eski mod hala mevcuttur

## Kimler Etkileniyor? {#who-is-affected}

### Yeni Kurulumlar (WordPress 7.0+) {#new-installations-wordpress-70}

**Hiçbir işlem yapmanıza gerek yok.** Üçüncü taraf modu otomatik olarak "auto" olarak ayarlanmıştır ve yetenekler kutudan çıktığı gibi çalışır.

### Mevcut Kurulumlar {#existing-installations}

**Ayarlarınız korunur.** Eğer şunları kullanıyorsanız:

- **Eski mod**: Eski modda kalırsınız (değişiklik yok)
- **Manuel üçüncü taraf modu**: Manuel modda kalırsınız (değişiklik yok)
- **Auto modu**: Auto modda devam edersiniz (değişiklik yok)

### 7.0 Öncesi WordPress Sürümleri {#wordpress-versions-before-70}

**Eski mod hala mevcuttur.** Eğer WordPress 6.x veya daha eski bir sürüm kullanıyorsanız:

- Üçüncü taraf modu "legacy" olarak varsayılır
- İsterseniz üçüncü taraf modu manuel olarak etkinleştirebilirsiniz
- Yerel Abilities API'yi kullanmak için WordPress 7.0+ sürümüne yükseltin

## Modları Anlamak {#understanding-the-modes}

### Auto Modu (Yeni Varsayılan) {#auto-mode-new-default}

**Auto modu**, yerel WordPress Abilities API entegrasyonunu kullanır:

- Yetenekler WordPress hook'ları aracılığıyla kaydedilir
- WordPress 7.0+ Abilities API ile tam uyumluluk
- Üçüncü taraf yeteneklerinin otomatik keşfi
- Manuel yapılandırmaya gerek yoktur

**Nager ul ulan etmek üçin**: WordPress 7.0+ we üçün üçüncü tərəf qabiliyyətləri ilə

### Manual Rejim {#manual-mode}

**Manual rejim** açıq şəkildə konfiqurasiya tələb edir:

- Hansı üçüncü tərəf qabiliyyətlərini yükləməli olduğunuzu göstərir
- Test etmək və ya seçilmiş qabiliyyətləri yükləmək üçün faydalıdır
- Konfiqurasiya fayllarını redaktə etməyi tələb edir
- Daha çox nəzarət, lakin daha çox qurulma lazımdır

**Nager ul ulan etmek üçin**: Test etmək, seçilmiş qabiliyyətləri yükləmək və ya özünəməxsus konfiqurasiyalar üçün

### Legacy Rejim {#legacy-mode}

**Legacy rejim** köhnə üçüncü tərəf qabiliyyətlər sistemindən istifadə edir:

- Özünəməxsus qabiliyyət qeydiyyatı (WordPress Abilities API deyil)
- Köhnə WordPress versiyaları ilə uyğun gəlir
- Yerli WordPress inteqrasiyası yoxdur
- Köhnəlmişdir, lakin hələ də dəstəklənir

**Nager ul ulan etmek üçin**: WordPress 6.x və ya daha əvvəlki versiyalar üçün, və ya köhnə uyğunluq lazımdırsa

## Mövcud Rejimizi Yoxlamaq {#checking-your-current-mode}

### Admin Paneli vasitəsilə {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings**-ə gedin
2. **Third-Party Mode** ayarını axtarın
3. Mövcud rejim və onu dəyişmək üçün variantları görəcəksiniz

### Kod vasitəsilə {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', və ya 'legacy'
```

## Rejimizi Dəyişmək {#changing-your-mode}

### Auto Rejimə Keçmək {#switch-to-auto-mode}

Əgər WordPress 7.0+ versiyindəsinizsə və auto rejimindən istifadə etmək istəyirsinizsə:

1. **Superdav AI Agent** → **Settings**-ə gedin
2. **Third-Party Mode**-u tapın
3. **Auto (WordPress Abilities API)** seçin
4. **Save** düyməsini basın

Superdav AI Agent üçüncü tərəf qabiliyyətlərini avtomatik aşkar edib qeyd edəcək.

### Manual Rejimə Keçmək {#switch-to-manual-mode}

Hansı qabiliyyətlərin yüklənməsini əl ilə idarə etmək istəyirsinizsə:

1. **Superdav AI Agent** → **Settings**-ə gedin
2. **Third-Party Mode**-u tapın
3. **Manual** seçin
4. **Save** düyməsini basın
5. Hansı qabiliyyətlərin yüklənəcəyini göstərmək üçün konfiqurasiya faylınızı redaktə edin

### Legacy Rejimə Keçmək {#switch-to-legacy-mode}

Əgər köhnə uyğunluğa ehtiyacınız varsa:

1. **Superdav AI Agent**-e kiň → **Settings**
2. **Third-Party Mode**ni tapyň
3. **Legacy**ny saýlaň
4. **Save**a basyň

## Auto Mode-un Üstünlikleri {#benefits-of-auto-mode}

### Awtomatiki Tapylmak (Automatic Discovery) {#automatic-discovery}

Käbilikler awtomatik tapylýar şu ýerde:

- Joba edilen pluginler
- Aktiw tema
- Zynjyrlanmagy zerur edýän pluginler
- Drop-in pluginler

Manual goşmak gerekmi.

### Yerli Integrasiýa (Native Integration) {#native-integration}

Käbilikler WordPress Abilities API bilen baglanyşyklydyr:

- WordPress esasy bilen sazlaşyklydyr
- WordPress administratiýasyna işleýär
- Abilities API ulanýan beýle pluginler bilen sazlaşyklydyr
- WordPress ösüp gitende gelejekde hem işjeňdir

### Sederleşdirilen Dolandyryş (Simplified Management) {#simplified-management}

- Düzmek üçin konfigurasiýa fayllary ýok
- Manual ädimleri goşmak gerekmi
- Ability Visibility dolandyryşlary awtomatiki işleýär
- Administrator habarlary size sınıflandyrmaganäki ädimleri haber berýär

### Has Dolandyryş (Better Performance) {#better-performance}

- Käbilikler cachelenýär
- Talap edilende ýumşak ýüklenýär (Lazy-loaded)
- WordPress 7.0+ üçin optimallaşdyrylan

## Geçirilmegi Ýoly (Migration Path) {#migration-path}

### Eger Siz WordPress 6.x-de bolsaňyz {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ sanyna geçiň** (taýyn bolanda)
2. **Superdav AI Agentini v1.12.0+ sanyna güncelleň**
3. **Third-party mode-u Auto-a üýtgediň** (ihtiyaly; legacy mode halaýa işjeňdir)
4. Düzgün girizilmegi üpjün etmek üçin ability visibilityni gözden geçiriň

### Eger Siz WordPress 7.0+-de bolsaňyz {#if-youre-on-wordpress-70}

1. **Superdav AI Agentini v1.12.0+ sanyna güncelleň**
2. **Third-party mode-u Auto bilen goýulmagyny barlap görüň** (bu default ýagdaýda bolmaly)
3. Düzgün girizilmegi üpjün etmek üçin ability visibilityni gözden geçiriň
4. Käbilikleri işjeňdir endiklemek üçin third-party abilitiesni synaň

## Sorunlary Gözläp Çyrmak (Troubleshooting) {#troubleshooting}

### Auto mode-da käbilikler ýüklenip bilmez {#abilities-arent-loading-in-auto-mode}

- Siz WordPress 7.0+ sanynda bolmagyňyzy barlap görüň
- Third-party mode-u "Auto" bilen goýulmagyny barlap görüň
- Käbilikni berýän pluginin işjeňdir diýip barlap görüň
- Goşmak ýüklenmegi hatalary üçin WordPress error logsini barlap görüň

### Legacy mode-u saklamagy isledim {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode**-a gitdiň
- **Legacy**ny saýlaň
- **Save**a basyň
- Legacy mode halaýa işjeňdir

### Özel yeteneklerim görünmüyor {#my-custom-abilities-arent-showing}

- Onları WordPress hook'ları aracılığıyla kaydettiğinizden emin olun
- Yeteneklerin Abilities API'sini doğru uyguladığından emin olun
- WordPress hata kayıtlarını kontrol edin
- Kayıtlı tüm yetenekleri görmek için **Ability Visibility** yönetim sayfasını kullanın

### "Sınıflandırılmamış yetenek" uyarıları alıyorum {#im-getting-unclassified-ability-notices}

- Bu, yeni üçüncü taraf yetenekler için normaldir
- Yönetici bildiriminde bunları gözden geçirin ve sınıflandırın
- Sınıflandırma hakkında ayrıntılar için **Ability Visibility**'yi görün

## Geriye Uyumluluk {#backward-compatibility}

### Mevcut Yapılandırmalar {#existing-configurations}

Eğer mevcut üçüncü taraf yetenek yapılandırmalarınız varsa:

- **Legacy mode (Eski mod)**: Yapılandırmanız çalışmaya devam eder
- **Manual mode (Manuel mod)**: Yapılandırmanız çalışmaya devam eder
- **Auto mode (Otomatik mod)**: Yapılandırmanız göz ardı edilir (otomatik mod devreye girer)

Özel yapılandırmanızı korumak için Manuel veya Legacy modda kalın.

### Kaldırma Zaman Çizelgesi {#deprecation-timeline}

- **v1.12.0**: Legacy ve Manual modlar tam olarak destekleniyor
- **v1.13.0+**: Legacy mod kaldırma uyarıları gösterebilir
- **v2.0.0**: Legacy mod kaldırılabilir (Belirlenecek)

## En İyi Uygulamalar {#best-practices}

### Yeni Kurulumlar İçin {#for-new-installations}

- Auto modu kullanın (bu varsayılan ayardır)
- Superdav AI Agent'in yetenekleri otomatik olarak keşfetmesine izin verin
- Erişimi kontrol etmek için Ability Visibility'yi kullanın

### Mevcut Kurulumlar İçin {#for-existing-installations}

- Mümkün olduğunda WordPress 7.0+'a yükseltin
- Basitleştirilmiş yönetim için Auto moda geçin
- Ability Visibility kullanarak yetenekleri gözden geçirin ve sınıflandırın

### Özel Yetenekler İçin {#for-custom-abilities}

- Yetenekleri WordPress hook'ları aracılığıyla kaydedin (Abilities API)
- Özel yetenek kayıtlarından kaçının
- Auto modu ile WordPress 7.0+'da test edin

## Sonraki Adımlar {#next-steps}

1. **WordPress sürümünüzü kontrol edin**: Auto modu için 7.0+ olduğunuzdan emin olun.
2. **Üçüncü taraf modunuzu gözden geçirin**: Ayarlar'a gidin ve mevcut modunuzu kontrol edin.
3. **Gerekirse güncelleyin**: WordPress 7.0+ kullanıyorsanız Auto moda geçin.
4. **Yetenekleri sınıflandırın**: Sınıflandırılmamış herhangi bir yeteneği gözden geçirin ve sınıflandırın.
5. **Test edin**: Üçüncü taraf yeteneklerinizin doğru çalıştığını doğrulayın.

## İlgili Konular {#related-topics}

- **Yetenek Görünürlüğü (Ability Visibility)**: Hangi yeteneklerin nerede gösterileceğini kontrol edin.
- **WordPress Abilities API**: Yerel WordPress yetenek kaydı hakkında bilgi edinin.
- **Üçüncü Taraf Yetenek Geliştirme**: Auto modu ile çalışan yetenekler oluşturun.
