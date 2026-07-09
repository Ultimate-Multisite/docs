---
title: WordPress Multisite nədir?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite Nedir? {#what-is-wordpress-multisite}

WordPress'in əsasında "Multisite" adlı bir funksiya var ki, bu funksiyanın kökleri 2010-cu ildə WordPress 3.0 başladığı zaman başlanıb. Ondan sonra yeni funksiyalar əlavə etmək və təhlükəsizliyi artırmaq məqsədi daşıyan bir neçə dəfə yenilənmişdir.

Əsas məğdəni izah etsək, WordPress multisite-ı belə düşünülə bilər: Bir Universitet tək bir WordPress quraşdırılması saxlayır, lakin hər fakültə özünün ayrı WordPress saytını idarə edir.

##

## WordPress Multisite Əslində Nədir? {#what-exactly-is-wordpress-multisite}

Multisite, birdən çox saytın tək bir WordPress quraşdırılmasını paylaşmasına imkan verən WordPress funksiyasıdır. Multisite aktiv olduqda, orijinal WordPress saytı adətən **sayt şəbəkəsi** (network of sites) kimi tanınan şeyə dəstək vermək üçün dəyişdirilir.

Bu şəbəkə fayl sistemini (yəni **pluginlər və temalar da paylaşılır**), verilənlər bazasını, WordPress əsas fayllarını, wp-config.php və s. paylaşır.

Bu o deməkdir ki, saytlarınızın bütün şəbəkəsi üçün WordPress, tema və plugin yeniləmələri yalnız bir dəfə aparılmalıdır, çünki onlar fayl sistemində eyni faylları paylaşırlar.

Multisite-ın əsas üstünlüklərindən biri budur ki, müştəri saytlarınızı idarə etmək üçün yerinə yetirməli olduğunuz tapşırıq sayı sabit qalarkən idarə etdiyiniz sayt sayını artırmanı imkan verir.

##

## Subdomain Yoxsa Subdirectory? {#subdomain-or-subdirectory}

WordPress multisite-ı işlətməyin iki rejimi var – və adi WordPress quraşdırmasını multisite-a çevirərkən birini seçməlisiniz:

**Subdomain:** məsələn: [site.domain.com](http://site.domain.com)

…və ya

**Subdirectory:** məsələn: [yourdomain.com/site](http://yourdomain.com/site)

Hər iki rejimdə bu qərarı verməzdən əvvəl nəzərə almalı olduğunuz üstünlükləri və çatışmazlıqları var.

Bir şey çok önemli: karar verdikten sonra ağınızı alt dizinden (subdirectory) alt alan adına (subdomain) veya tam tersine değiştirmek gerçekten zor olur – özellikle de zaten birkaç site oluşturmuşsanız.

Bu kararı vermeden önce göz önünde bulundurmanız gereken birkaç nokta var:

**Alt Dizin Modu (Subdirectory Mode)** kurulum ve bakım açısından en kolay moddur. Bunun nedeni, tüm sitelerin ana alan adına sadece yollar olarak bağlı olmasıdır (örneğin [yourdomain.com/subsite](http://yourdomain.com/subsite)). Sonuç olarak, ana alan adı için **tek bir SSL sertifikasına** ihtiyacınız olur ve bu tüm ağı kapsar.

Aynı zamanda, URL yapısı nedeniyle Google ve çoğu diğer arama motoru alt dizin tabanlı ağınızdaki tüm alt siteleri tek devasa site olarak görecektir. Sonuç olarak, son kullanıcılarınız tarafından alt sitelere eklenen içerik, örneğin açılış sayfanızın SEO performansını etkileyebilir. Etki seviyesi tartışmalıdır ve böyle bir düzenlemenin SEO performansı için faydalı olabileceği argümanları da mevcuttur.

**Alt Alan Adı Modu (Subdomain Mode)** kurulumu biraz daha karmaşıktır, ancak URL yapısı (örneğin [subsite.yournetwork.com](http://subsite.yournetwork.com)) genellikle "daha profesyonel" görünür.

Поддомен режимі — це одна з головних проблем при налаштуванні: покриття SSL (HTTPS) для всієї мережі. Це пов'язано з тим, що браузери розглядають піддомени як ізольовані сутності. Як наслідок, вам знадобиться окремий SSL-сертифікат для кожного піддомену у вашій мережі або спеціальний тип сертифіката, який називається **Wildcard SSL certificate** (Сертифікат Wildcard SSL). Останніми роками хостинг-провайдери та панелі покращують своє наповнення SSL, і деякі пропонують wildcard сертифікати одним кліком, що закриває розрив між цими двома режимами з точки зору складності налаштування.

На відміну від режиму піддиректорій (subdirectory mode), пошукові системи вважають сайти на піддоменах окремими вебсайтами, що означає, що контент, присутній на одному підсайті, абсолютно не впливає на SEO-продуктивність інших підсайтів.

## Суперадміністратор (The Super Admin) {#the-super-admin}

У встановлення WordPress з одним сайтом ви можете додавати необмежену кількість користувачів і надавати цим користувачам різні ролі та права доступу.

У WordPress Multisite відкривається новий тип користувача: **суперадміністратор** – і нова панель адміністрування: **панель адміністратора мережі (network admin panel)**.

Як назва свідчить, суперадміністратор має надзвичайні права на всю мережу, здатний керувати всіма її підсайтами, плагінами, темами — усе!

Щойно ви перетворите своє встановлення WordPress з одним сайтом на мультисайт, оригінальний адміністратор єдиного сайту автоматично підвищується до суперадміністратора.

Плагіни та теми можуть бути встановлені або видалені лише через панель адміністратора мережі суперадміністраторами. Адміністратори підсайтів потім можуть обирати активувати або деактивувати ці плагіни чи теми, якщо суперадміністратор мережі не активує певний плагін, що змушує його бути активним для всіх підсайтів постійно.

_Примечание: как вы видите, приглашение кого-то в вашу сеть и предоставление ему статуса суперадминистратора дает этому пользователю полный контроль над вашей сетью. Например, другие суперадминистраторы могут даже убрать ваш статус суперадминистратора, фактически заблокировав вас от панели администратора вашей собственной сети. Чтобы позволить клиентам Ultimate Multisite иметь детальный контроль над тем, что могут делать дополнительные суперадминистраторы, у нас есть дополнение под названием Support Agents (Агенты поддержки). Это дополнение позволяет создать еще один тип пользователя – агента – с только теми разрешениями, которые ему могут понадобиться для выполнения задач в сети._

## Что общее между сайтами и чем нет {#what-is-shared-among-subsites-and-what-is-not}

Как мы уже говорили, одно из ключевых преимуществ WordPress multisite заключается в том, что все подсайты делят одни и те же настройки, основные файлы, темы, плагины, файлы ядра WordPress и т.д.

Однако есть элементы, которые хорошо ограничены на уровне каждого подсайта.

- Например, у каждого подсайта своя папка для загрузок (uploads folder). В результате загрузки, сделанные пользователями одного конкретного подсайта, недоступны на другом подсайте.

- У каждого подсайта есть своя выделенная панель администратора и он может активировать или деактивировать плагины или темы, если они не были активированы в сети суперадминистратором.

- Большинство таблиц базы данных создаются для каждого подсайта, что означает, что записи (posts), комментарии, страницы, настройки и многое другое ограничены конкретным подсайтом.

## Управление пользователями в WordPress Multisite {#user-management-on-wordpress-multisite}

Одной деликатной темой в WordPress multisite является управление пользователями. Таблица пользователей WordPress — одна из немногих, которая делится между всеми подсайтами.

Это устройство может вызвать некоторые проблемы в зависимости от того, что вы планируете строить с вашей сетью. Пример ниже поможет проиллюстрировать самую насущную проблему.

Представьте следующий сценарий:

Вы создаете сеть WordPress multisite и начинаете предлагать субсайты по ежемесячной подписке людям, которые хотят иметь интернет-магазин.

У вас появляется первый платящий клиент – Джон. Вы создаете для Джона сайт в вашей сети, устанавливаете все необходимые плагины, а затем создаете пользователя для Джона, чтобы он мог управлять своим магазином.

Затем приходит второй клиент – Алиса. Вы делаете то же самое для нее, и у нее теперь тоже есть магазин в вашей сети.

Джон и Алиса — оба ваших клиента, но они друг друга не знают. Что еще важнее, если один из них заходит на сайт другого магазина, нет никакого способа узнать, что этот магазин размещен в той же сети сайтов.

Однажды Джону нужно купить новую пару туфель, и он находит их идеальные в магазине Алисы. Когда он пытается завершить покупку, ему выдается сообщение об ошибке «почта уже занята», что странно, потому что Джон на 100% уверен, что это первый раз, когда он заходил на сайт Алисы.

Что здесь произошло, так это то, что пользователь Джона используется во всей сети, поэтому когда он пытается создать учетную запись для оформления заказа на сайте Алисы, WordPress обнаруживает, что пользователь с таким же адресом электронной почты уже существует, и выдает ошибку.

_Примечание: Мы понимаем, насколько это может быть плохо в зависимости от вашего сценария использования, поэтому Ultimate Multisite имеет опцию, которая обходит обычные проверки на существующего пользователя, позволяя создавать несколько учетных записей с одним и тем же адресом электронной почты. Каждая учетная запись привязана к субсайту, поэтому риск конфликта сводится к минимуму. В приведенном выше примере Джон не получит сообщение об ошибке и сможет купить эти туфли без проблем. Эта опция называется Enable Multiple Accounts (Включить несколько учетных записей) и может быть активирована в Ultimate Multisite → Settings → Login & Registration._

Hatta foydalanıcılar jadvalı paylaşılsalar da, subsite administratorları və ya super admin tərəfindən bu foydalanıcılar subsite-lara əlavə edilə və çıxarılə bilər, həmçinin onlar fərqli subsite-larda fərqli istifadəçi rollarına malik ola bilərlər.

## Performans nəzərdən keçirmələr {#performance-considerations}

WordPress multisite, dəstəkləyə biləcəyi saytların miqdarı baxımından həqiqətən güclüdür. Bunu [WordPress.com](https://WordPress.com), Edublogs və Campuspress kimi platformaların hamısının multisite əsaslı olduğunu və hər birinin minlərlə saytı dəstəklədiyini bilmək olar.

Teorik olaraq, bir WordPress multisite quraşdırılması üzərində nə qədər sayt host edə biləcəyiniz üçün heç bir maksimum sayt sayı yoxdur, lakin praktikada siz rahat işlədə biləcəyiniz saytların sayı bir neçə fərqli amillərdən asılı olaraq çox dəyişə bilər: saytların nə qədər dinamik olması, subsite-lara hansı pluginlərin mövcud olması və s.

Qayda olaraq, şəbəkəniz nə qədər sadədirsə, o qədər yaxşıdır. Məzmunun həqiqətən dinamik olmadığı saytlərə (bu onları aqressiv caching strategiyaları üçün əla kandidatlar edir) üstünlük vermək və plugin stakını mümkün olan ən yüngül halda saxlamaq (aktiv plugin sayı nə qədər azdırsa o qədər yaxşıdır), host edə biləcəyiniz subsite sayını kəskin şəkildə artıracaq.

Ən yaxşısı odur ki, hər şey WordPress olduğu üçün, performans artırmaq üçün artıq bildiyiniz və sevdiyiniz eyni alətlər multisite şəbəkəsi üçün də işləyəcək.

Multisitenin əsas çatışmazlığı verilənlər bazasıdır, lakin digər hər şey düzgün qurulsa, onunla narahat olmaq üçün iki min saytdan çox sayta çatmaq lazım ola bilər. Hələ o zaman (məsələn, verilənlər bazası sharding həlləri kimi) tədricən əlavə edilə bilən həllər var.
