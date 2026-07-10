---
title: Əsas Konsepsiyalar
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Əsas Konsepsiyalar {#basic-concepts}

Yeni bir WordPress Multisite istifadəçisi və ya Ultimate Multisite-dan istifadə etməyə yeni başlayan bir şəxs üçün ilk növbədə öyrəniləcək çox sayda yeni söz və ifadə ola bilər. Onları öyrənmək vacib bir məsələdir, çünki platformanı və onun ümumilikdə necə işlədiyini anlamaq lazım gələcək.

Bu məqalədə biz WordPress-dəki bəzi əsas konsepsiyaları tərifləməyə və izah etməyə çalışacağıq. Bunlardan bəziləri istifadəçilər üçün, bəziləri isə developerlər üçün, bəziləri isə hər ikisi üçün daha vacibdir.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite**, bir WordPress quruluşudur ki, bu sayəsində siz tək bir WordPress dashboard-dan bir neçə veb saytdan ibarət bir şəbəkə yaratmağa və idarə etməyə imkan verir. Saytların sayı, xüsusiyyətləri, mövzuları (themes) və istifadəçi rolları daxil olmaqla hər şeyi idarə edə bilərsiniz. Yüzlərlə, hətta minlərlə saytı idarə etmək mümkündür.

## Network {#network}

WordPress baxımından, bir multisite network, bir neçə **subsite**-ın tək bir dashboard-dan idarə edilə biləcəyi yerdir. Multisite network yaratmaq hostinq provayderləri arasında fərqlənsə də, nəticə adətən WordPress-ə bu xüsusi rejimdə işlədiyini bildirmək üçün **wp-config.php** faylında bir neçə əlavə təlimat əlavə etmək olur.

Multisite network ilə müstəqil (stand-alone) WordPress quruluşu arasında qısa müzakirə edəcəyimiz bir sıra fərqliliklər var.

## Database {#database}

Database (Verilənlər bazası) strukturlaşdırılmış, təşkil olunmuş bir məlumat dəstidir. Kompüter terminologiyasında database, məlumat saxlamaq və təşkil etmək üçün istifadə olunan proqram təminatına işarə edir. Bunu, məlumatları "cədvəllər" (tables) adlanan müxtəlif bölmələrdə saxladığınız bir fayl şkabı kimi düşünün.

WordPress Multisite bir database istifadə edir və hər subsite özünəməxsus blog id-li cədvəllərinə malik olur. Beləliklə, bir network quruluşu qurduğunuzda və bir subsite yaratdığınızda, bu cədvəlləri görməlisiniz:

_wp_1_options_ \- birinci subsite üçün options cədvəli

_wp_2_options_ \- ikinci subsite üçün options cədvəli

## Hosting provider {#hosting-provider}

Hosting provider (Hostinq provayderi), bizneslərə və fərdlərə veb saytlarını World Wide Web vasiləsilə əlçatan etməyə imkan verən bir şirkətdir. Veb hostinq provayderləri tərəfindən təklif edilən xidmətlər dəyişə bilər, lakin adətən veb sayt dizaynı, hostda saxlama yeri və İnternetə qoşulma xidmətliklərini əhatə edir.

## Domain {#domain}

Domain adı, insanların saytınıza daxil olmaq üçün istifadə etdiyi ünvanıdır. Veb brauzerə saytınızı harada axtarmalı olduğunu bildirir. Bir küçə ünvanı kimi, domain də sizin veb saytınıza onlayn necə daxil olunduğunu göstərən yoldur. Və, mağazanızın önündəki bir nişanə bənzəyir. Əgər saytımıza daxil olmaq istəyirsinizsə, brauzerinizin ünvan çubuğuna veb ünvanımızı yazmalısınız ki, bu da [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _dır_ və [**ultimatemultisite.com**](http://ultimatemultisite.com) domain adıdır.

## Subdomain {#subdomain}

Subdomain, əsas domain altında olan bir veb sayt iyerarxiyası növüdür, lakin məzmunu təşkil etmək üçün qovluqlardan istifadə etmək əvəzinə, özünə aid bir veb saytı kimi görünür. O, [**https://site1.domain.com/**](https://site1.domain.com/) kimi təqdim edilir, burada _site1_ subdomain adıdır və [_domain.com_](http://domain.com) əsas domaindir.

## Subdirectory {#subdirectory}

Subdirectory (Alt qovluq), kök domain altında məzmunu təşkil etmək üçün qovluqlardan istifadə edən bir veb sayt iyerarxiyası növüdür. Subdirectory, subfolder-dan (alt qovluq) fərqlənmir və adları qarışdırıla bilər. O, [**https://domain.com/site1**](https://domain.com/site1) kimi təqdim edilir, burada _site1_ subdirectory adıdır və [_domain.com_](http://domain.com) əsas domaindir.

## Subsite {#subsite}

Subsite, Multisite network-da yaratdığınız uşaq saytıdır. O, WordPress Multisite quruluşunuz necə konfiqurasiya edildiyindən asılı olaraq **subdomain** və ya **subdirectory** ola bilər.

## Super Admin {#super-admin}

WordPress Super Admin, Multisite network-dakı bütün subsiteləri idarə etmək üçün tam imkanlara malik bir istifadəçi roludur. Multisite istifadəçiləri üçün bu, WordPress quruluşunuza verə biləcəyiniz **ən yüksək səviyyəli girişdir**.

## Plugin {#plugin}

Ümumiyyətlə, bir plugin, WordPress saytınıza əlavə funksionallıq əlavə edən bir kod dəstidir. Bu, giriş loqosunu dəyişmək qədər sadə və ya e-commerce funksionallığı əlavə etmək qədər mürəkkəb ola bilər. _Woocommerce və Contact Form_ plugin nümunələridir.

WordPress Multisite-da pluginlər yalnız Super Admin tərəfindən network admin dashboard-dan quraşdırıla bilər. Subsite Adminlər isə pluginləri yalnız öz subsite-ları daxilində aktiv və ya deaktiv edə bilərlər.

## Themes {#themes}

WordPress theme (Mövzu), saytın ümumi görünüşünü müəyyən edən bir fayl qrupudur (_qrafiklər, style sheet-lər və kod_). Font stilindən, səhifə yerləşdirməsinə, rənglərə və s. kimi bütün front-end stilizasiyalarını təmin edir.

Pluginlər kimi, WordPress Multisite-da mövzular yalnız Super Admin tərəfindən quraşdırıla və subsite adminləri tərəfindən subsite səviyyəsində aktivləşdirilə bilər.

## Site Template {#site-template}

**Site Template** (Sayt Şablonu), network-unuzda yeni saytlar yaratarkən əsas kimi istifadə edilə bilən bir şablon saytıdır.

Bu o deməkdir ki, siz bir baz saytı yarada, müxtəlif pluginləri aktiv edə, aktiv mövzunu təyin edə və istədiyiniz kimi fərdiləşdirə bilərsiniz. Sonra, müştəriniz yeni bir hesab yaratdıqda, içində heç bir məzmun olmayan default WordPress saytı əvəzinə, bütün fərdiləşdirmələr və məzmunlar artıq yerində olan baz saytınızın bir nüsxəsini alacaq.

## Domain Mapping {#domain-mapping}

WordPress ilə **Domain mapping** (Domain xəritələməsi), bir veb saytın ünvanı vasitəsilə istifadəçiləri düzgün hosta yönləndirmək yoludur. Bir WordPress Multisite-da subsitelər ya subdirectory və ya subdomain istifadə edərək yaradılır. Domain mapping nə edir? Subsite istifadəçilərinə sayt ünvanlarını daha peşəkar göstərmək üçün [**joesbikeshop.com**](http://joesbikeshop.com) kimi bir birinci səviyyəli domain (top-level domain) istifadə etməyə imkan verir.

## SSL {#ssl}

SSL **Secure Sockets Layer**-in qısaltmasıdır. Bu, bir veb saytının şəxsiyyətini təsdiq edən və şifrələnmiş bağlantı təmin edən rəqəmsal sertifikatedir. Bu gün o, İnternet bağlantısını təhlükəsiz saxlamaq və iki sistem arasında ötürülən hər hansı həssas məlumatı qorumaq üçün standart texnologiya kimi istifadə olunur, bu da cinayətkarların ötürülən hər hansı məlumatı, potensial şəxsi detalları daxil etdiyiniz məlumatları oxumasını və dəyişdirməsini əngəlləyir. Müasir brauzerlər SSL tələb edir ki, bu da veb sayt yaratmaq və idarə etmək zamanı vacib edir.

## Media {#media}

Media, bir veb saytını təşkil edən şəkillər, audio, video və digər fayllardır.

Network saytları bir WordPress Multisite-da tək bir database paylaşır, lakin media faylları üçün fayl sistemində ayrı yollar saxlayırlar.

Standart WordPress yeri (wp-content/uploads) qalır; lakin onun yolu network saytının unikal ID-sini əks etdirmək üçün dəyişdirilir. Nəticədə, network saytının media faylları wp-contents/uploads/site/[id] kimi görünür.

## Permalinks {#permalinks}

Permalinks, saytınız daxilindəki fərdi blog yazınızın və ya səhifənizin daimi URL-ləridir. Permalinks həmçinin **pretty links** (gözəl linklər) kimi də adlandırılır. Default olaraq, WordPress URL-ləri query string formatından istifadə edir ki, bu belə görünür:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite, WordPress Multisite quruluşları üçün hazırlanmış bir WordPress pluginidir və WordPress quruluşunuzu premium saytlar şəbəkəsinə — məsələn [WordPress.com](https://WordPress.com) kimi — çevirir; bu da müştərilərə aylıq, rüblük və ya illik ödənişlər yolu ilə saytlar yaratmağa imkan verir (pulsuz planlar yaratmaq da mümkündür).

## Checkout Form {#checkout-form}

Checkout Form, Ultimate Multisite qeydiyyatı vasitəsilə subsite, üzvlik və istifadəçi hesablarının yaradılmasını əhatə edən tək və ya çoxaddımlı bir sifariş formasıdır. O, istifadəçinin qeydiyyat prosesi zamanı təqdim etməli olduğu müxtəlif sahələr və ödəniş formalarından ibarətdir.

## Webhook {#webhook}

Webhook (həmçinin web callback və ya HTTP push API adlanır), bir tətbiqin digər tətbiqlərə real vaxt məlumatı vermə yoludur. Webhook, məlumatı baş verəndə digər tətbiqlərə çatdırır, yəni siz məlumatı dərhal alırsınız.

**Ultimate Multisite webhooks** sonsuz imkanlar açır və network adminlərinə bütün növ qəribə, lakin faydalı inteqrasiyalar etməyə imkan verir, xüsusilə ki, _Zapier və IFTTT_ kimi xidmətlərlə birlikdə istifadə edildikdə.

## Events {#events}

Bir Event (Hadisə), istifadəçi və ya başqa bir mənbənin hərəkəti nəticəsində baş verən bir hərəkətdir, məsələn, siçan klikləməsi. Ultimate Multisite bütün hadisələri və network-unuz daxilində baş verən logları qeyd edir. O, plan dəyişiklikləri kimi multisite-ınızda baş verən müxtəlif fəaliyyətləri izləyir.
