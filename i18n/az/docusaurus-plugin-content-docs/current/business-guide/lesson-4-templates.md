---
title: 'Dərslik 4: Niş Şablonları Qurmaq'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Dərs 4: Niş Şablonları Yaratmaq

Şablonlar (Templates) niş dəyər təklifinizin əsasını təşkil edir. Əgər bir fitness studiyası sahibi qeydiyyatdan keçir və artıq sinif cədvəlləri, məşqçi profilləri və müvafiq şəkilləri olan bir fitness saytı kimi görünən bir sayt görürsə, boş bir parça qarşısında qalan şəxsdən daha çox qalacaq.

## Harada Qaldıq {#where-we-left-off}

Ultimate Multisite quraşdırılıb və konfiqurasiya edilmiş funksional bir FitSite şəbəkəmiz var. İndi isə FitSite-ı fitness biznesləri üçün xüsusi hazırlanmış kimi hiss etdirən şablonları yaradacağıq.

## Niş Şablonları Niyə Vacibdir {#why-niche-templates-matter}

Ümumi şablonlar müştərilərinizdən çətin işləri görməyə məcbur edir: hansı səhifələrə ehtiyac olduqlarını, hansı məzmun strukturasının işlədiyini və bunu öz sənayələri üçün necə düzgün göstərəcəklərini öyrənmək. Niş şablonları bu çətinliyi aradan qaldırır.

FitSite-a qeydiyyatdan keçən bir fitness studiyası sahibi aşağıdakıları görməlidir:

- Bir fitness studiyası saytı kimi görünən bir ana səhifə
- Siniflər, cədvəllər, məşqçilər və qiymətlər üçün artıq yaradılmış səhifələr
- Öz sənayəsinə uyğun şəkillər və yer tutucu məzmun
- Fitness üçün peşəkar və brendə uyğun gələn bir dizayn

Onlar öz detallarını doldururlar. Sıfırdan başlamırlar.

## Şablonlarınızı Planlaşdırmaq {#planning-your-templates}

Yaratmağa başlamazdan əvvəl, hansı şablonları təklif edəcəyinizə qərar verin. FitSite üçün üçü yaradacağıq:

### Şablon 1: Studio Əsasları (Studio Essential) {#template-1-studio-essential}

Kiçik studiyalar və şəxsi məşqçilər üçün.

- Hero şəkli, sinif vurğuları və hərəkətə keçmə çağırışı olan **Ana səhifə**
- Studio hekayəsi və missiyası olan **Haqqımızda** səhifəsi
- Cədvəl yerləşdirməsi olan **Siniflər** səhifəsi
- Profil kartları olan **Məşqçilər** səhifəsi
- Yer xəritəsi və forması olan **Əlaqə** səhifəsi
- Fitness üçün uyğun rəng sxemi ilə **Təmiz, müasir dizayn**

### Şablon 2: Gym Pro {#template-2-gym-pro}

Daha çox xidməti olan qurulmuş gimnaziya üçün.

- Studio Əsaslarıdakı hər şey, üstəlik:
- Qiymət cədvəli olan **Üçüncü şəxs (Membership)** səhifəsi
- Təsisat fotoşəkilləri üçün **Qalereya** səhifəsi
- Fitness məsləhətləri və xəbərləri üçün **Blog** bölməsi
- Ana səhifədə **Şəhadətlər** bölməsi
- **Daha görünən brendləşdirmə** seçimləri

### Şablon 3: Fitness Zənciri (Fitness Chain) {#template-3-fitness-chain}

Bir neçə yerləşməyə malik əməliyyatlar üçün.

- Gym Prodakı hər şey, üstəlik:
- Bir neçə təsisat siyahısı olan **Yerləşmələr** səhifəsi
- **Francaiz/yerləşmə** alt səhifə şablonu
- Yerə xas detallarla **Mərkəzləşdirilmiş brendləşdirmə**
- Yerləşmələr arasında **Personel kataloqu**

## Şablon Saytı Yaratmaq {#building-a-template-site}

Ultimate Multisite-da şablon, sadəcə olaraq yeni müştəri saytlarının necə görünməsini istədiyiniz şəkildə konfiqurasiya edilmiş bir WordPress saytıdır. Bunu necə etməyiniz aşağıdadır:

### Addım 1: Şablon Saytını Yaratmaq {#step-1-create-the-template-site}

1. Network administratorunuzda **Sites > Add New** (Saytlar > Yeni Əlavə Et) yerinə keçin.
2. `template-studio-essential` adlı bir sayt yaradın.
3. Bu sayt sizin işləyən parçasınız (canvas) olacaq.

### Addım 2: Mövzunu (Theme) Quraşdırıb Konfiqurasiya Etmək {#step-2-install-and-configure-the-theme}

Şablon saytının panelinə keçin və:

1. Fitness bizneslərinə uyğun bir mövzu aktivləşdirin.
2. Mövzu parametrlərini, rəngləri və tipoqrafiyanı konfiqurasiya edin.
3. Fitness üçün uyğun naviqasiya ilə başlıq və ayaq hissəsini qurun.

:::tip Mövzu Seçimi
Fitness üçün yaxşı görünəcək, lakin müştərilərinizə idarə edə bilməyəcəyi qədər mürəkkəb olmayan bir mövzu seçin. Astra, GeneratePress və ya Kadence kimi mövzular yaxşı işləyir, çünki onlar yüngüldür, özənləşdirilə bilər və yaxşı dəstəklənirlər.
:::

### Addım 3: Səhifələri Yaratmaq {#step-3-create-the-pages}

Hər səhifəni aşağıdakılarla qurun:

- Fitness üçün təbii oxunan **yer tutucu məzmun** ("Welcome to [Studio Name]" yox, "Lorem ipsum")
- Fitness fəaliyyətini göstərən pulsuz stok foto saytlarından **yer tutucu şəkillər**
- Səhifə qurucusu və ya blok redaktoru vasitəsilə **funksional yerləşdirmələr**

Yer tutucu məzmunu mümkün qədər təlim məqsədli edin. Ümumi doldurucu mətn əvəzinə, aşağıdakı kimi məzmun yazın: "Bura studionuzun qısa təsvirini və nəyin onu xüsusi etdiyini yerləşdirin. Təlim fəlsəfəniz, təcrübə illəriniz və ya müştərilərin nə gözləyə biləcəyi haqqında məlumat verin."

### Addım 4: Pluginləri Konfiqurasiya Etmək {#step-4-configure-plugins}

Fitness studiyalarına lazım olan pluginləri quraşdırın və aktivləşdirin:

- Bir kitab və ya cədvəlləşdirmə plugin-i (plan səviyyənizə uyğun olarsa)
- Bir əlaqə forması plugin-i
- Bir SEO plugin-i (fitness ilə bağlı standart parametrlərlə ön-konfiqurasiya edilmiş)

### Addım 5: Şablon kimi İşarələmək {#step-5-mark-as-template}

1. **Ultimate Multisite > Sites** (Ultimate Multisite > Saytlar) yerinə keçin.
2. Şablon saytını redaktə edin.
3. **Site Template** (Sayt Şablonu) düyməsini aktivləşdirin.

Bu prosesi təklif etmək istədiyiniz hər şablon üçün təkrarlayın.

## Şablon Keyfiyyət Yoxlaması {#template-quality-checklist}

Bir şablonu əlçatan etməzdən əvvəl, aşağıdakıları yoxlayın:

- [ ] Bütün səhifələr düzgün yüklənir və peşəkar görünür
- [ ] Yer tutucu məzmun faydalı və nişə xasdır
- [ ] Şəkillər müvafiq və düzgün lisenziyalıdır
- [ ] Mobil cavabdehlik bütün səhifələrdə işləyir
- [ ] Naviqasiya məntiqli və tamdır
- [ ] Əlaqə formaları işləyir
- [ ] Pozulmuş link və ya itirilmiş resurs yoxdur
- [ ] Səhifə yüklənmə sürəti qəbul ediləndir

## FitSite Şebəkəsi İndi {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Bu Dərsdə Nə Yığdıq {#what-we-built-this-lesson}

- Müxtəlif fitness biznes ölçüləri üçün nəzərdə tutulmuş **üç niş şablonu**
- Platformanı məqsədyönlü hazırlanmış kimi edən **fitness üçün uyğun məzmun və şəkillər**
- Müştəriləri özənləşdirməyə yönləndirən **təlim məqsədli yer tutucu məzmun**
- Şablonların istehsalə hazır olduğundan əmin edən **keyfiyyət yoxlama siyahısı**

---

**Növbəti:** [Lesson 5: Designing Your Plans](lesson-5-plans) — fitness bizneslərinin necə işlədiyinə uyğun məhsul səviyyələri yaradacağıq.
