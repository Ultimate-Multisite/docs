---
title: WordPress Multisite-у как установить
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite ниң кулланылымы как? {#how-do-i-install-wordpress-multisite}

WordPress Multisite-ы белән берничә сайтты берничә установка (installation) дөреләргә мөмкин. Бу стандарт якын функция ди, әмма умолчанию актив булмаган.

:::tip
Ultimate Multisite-ta **[встроенный мастер настройки Мультисайта](./multisite-setup-wizard)** бар, который автоматизирует весь этот процесс. Если у вас установлен Ultimate Multisite, мы рекомендуем использовать именно этот мастер вместо того, чтобы следовать шагам в руководстве ниже.

# WordPress Documentation Translation {#add-a-trailing-slash-to-wp-admin}

## Getting Started with Ultimate Multisite {#common-problems}

Саламу! Бу документта Ultimate Multisite-уңаймалы (Ultimate Multisite) орасимен якчалаш барышын түшүндүрәбез. Бу система белән веб-сайтлар сетьюны (multisite) ясарга мөмкин булган мощный инструмент.

### 1. Установка (Installation) {#1-i-can-create-new-sites-but-they-are-not-accessible}

Уңаймалы систему икеге кадәр улап китә аласыз:

1. **WordPress** серверына администратор белән китерегез.
2. Уңаймалы орасиның дагы бирлеген файлны (обычно `wp-config.php` файлы) сайт юлларында урнаштырыгыз.
3. Сайтны икеге кадәр улап китергәндә, система сиздерне сугым белән китерергә мөмкин.

### 2. Уңаймалы Орасиның Азырлау (Setup of Ultimate Multisite)

Устаниудан соң, сикылдарны да настройкалыйбыз:

* **Сайтлар сетьюы:** Бу жердән сиздер сайтыгызны икеге кадәр улап китере аласыз.
* **Директориялар (Directories):** Сайтларның әлеуетләрен ясарга, директорияларны да соңарлыкка китергә мөмкин.

### 3. Динамик Контент (Dynamic Content)

Уңаймалы ораси белән сиздер контенты автоматлап ясагыз:

* **Пользовательские роли:** Сайтларда булган администраторлар, редакторлар һәм башка роллдарны да соңарлыкка китере аласыз.
* **Контент-типология (Content-types):** Контент типын өзлеми, икеге кадәр сайтта да аның ясалысын ясарга мөмкин.

### 4. Плагиндерне Исемлек (Plugin Management)

Плагиндерләрне ясау һәм укыйар булган система:

* **Плагин-директориясы:** Бу жердән сиздер стандартный WordPress плагиндарын да икеге кадәр сайтта ачып китере аласыз.
* **Конфигурация (Configuration):** Плагиндерләрне ясау вакытында укула булган параметрләр бар, дибы эзлекле.

### 5. Техник Проблемлар (Troubleshooting)

Бу жердән синең кагылган проблемларыны çözә аласыз:

* **Оширак:** Эгер сайт ачылмаса, `wp-config.php` файлындагы параметрләрне текшерегез.
* **Барабарылык:** Сайтларда контент ясау вакытында сыйныч кагылган утлы (conflicts) бар дип сугым китергә мөмкин. Буны плагиндерләрне бирле-бир улап китерергә кирәк.

---
*Бу документта сикылдарны да ясау ва алар белән иштә ясау турында детальләрен белемге калдырабыз.*

Ultimate Multisite ağ tipi bir eklenti olduğu için, bu eğitimde size WordPress Multisite'ı nasıl manuel olarak kuracağınızı ve ayarlayacağınızı öğreteceğim. Bu metin WPBeginner'ın [WordPress Multisite Ağı Nasıl Kurulur ve Ayarlanır](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) makalesine dayanmaktadır.

**Мултисайт (multisite) ağı құру алдында nəzərə almaq lazımdır:**

  * Сапаlı WordPress hosting alın! Şəbəkədə olan saytlar eyni server resurslarından istifadə edir.

Егер у вас всего пара сайтов с низким трафиком, вам, скорее всего, подойдет хостинг пошаре (shared hosting).

* Çoğunlukla **WordPress-i idare etdirilen hosting provayderleri** Multisite-i hazır olarak təklif edirler (onlar WordPress-i artıq aktiv və sizin üçün konfiqurasiya edilmiş şəkildə quraşdırırlar). Bu, WP Engine, Closte, Cloudways kimi yerlərdə baş verir. Hosting provayderiniz üçün bu halda olub-olmadığını bilmirsinizsə, bu tutorial-a davam etməzdən əvvəl onların dəstək xidməti ilə əlaqə saxlayın.

WordPress-иң орнатылуын һәм ФТП (FTP) белән файлларны өчрү турында да танышып калу яхшы.

**ЗЕРТЭКЛӘР:** Эгерде икенче WordPress сайтында мультисайт сетью кургап карыйсыз, анда төмэген утырмагыз:

WordPress sitenizin tam yedeğini oluşturun

Sitenizdeki tüm eklentileri devre dışı bırakmak için eklentiler sayfanıza gidin, toplu işlemlerden "Devre Dışı Bırak" seçeneğini seçin ve ardından "Uygula"ya tıklayın

<!-- Скриншот недоступен: страница плагинов WordPress с действием массовой деактивации -->

Мультисайт включить для начала нужно подключиться к вашему сайту через FTP-клиент или файловый менеджер cPanel и открыть файл wp-config.php для редактирования.

_Эх, всё, редактировать прекратите! Бахытлы блог!_

```php
define('WP_ALLOW_MULTISITE', true);
```

wp-config.php файлын серверге саклап, загрулаңыз.

Сайтınızda çoklu site özelliğini etkinleştirdikten sonra, şimdi ağınızı kurma zamanı geldi.

**Araçlar » Ağ Kurulumuna** gidin

<!-- Ekran görüntüsü mevcut değil: WordPress Araçları menüsünde Ağ Kurulumu seçeneği gösteriliyor -->

Сайтларыңыз üçün şəbəkədə hansı domen strukturasından istifadə edəcəyinizi WordPress-ə bildirməlisiniz: поддомены (subdomains) və ya подкаталоги (subdirectories).

Если вы поддомены использовать решили, вам нужно настройки DNS'inizi dəyişmək lazımdır və çoxəlgen şəbəkəniz üçün **wildcard subdomains**-i qurduğunuzdan əmin olun.

Сете настройкага кайтарып келиңиз, сеть өчен тагын名 (title) куйгыз һәм Сеть администратор эмейлындағы электрон почта адресе туры елек сибегез. Продолрми өчен _Install_ никөчтә пресс.

<!-- Скриншот недоступен: Страница настройки сети WordPress с полями для названия сети и адреса электронной почты администратора -->

Этот код от WordPress нужно добавить в ваш файл _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

WordPress tərəfindir, sizden _**.htaccess**_ faylınıza əlavə etməli olduğunuz bu kodu təqdim edir:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# wp-admin ünvanına son slash (/) əlavə etmək üçün

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP кліенторын və ya fayl menecerini (məsələn, cPanel istifadə edirsinizsə) istifadə edərək bu iki fayldakı kodu kopyalayıb yapışdırın.

Sonra WordPress saytınıza yenidən daxil olun ki, multisite şəbəkənizə çıxa biləsiniz.

Важно протестировать и убедиться, что вы можете создать субсайт на вашей установке WordPress Multisite перед тем, как устанавливать Ultimate Multisite.

Как создать субсайт:

  1. Откройте админ-панель ваших сайтов wp-admin

2. My Sites > Sites ( /wp-admin/network/sites.php ) жолуна keçиңiz.

3. Үстələrdäki "Add New" (Жаңысын қосу) düğmenі басыңыз.

4. Бардык бәллларни толурыгыз:

* Site Address — "www"-дан эч качан фойдаланыңыз.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Подкаталог: [вашдомен.ком/адрессайта](http://вашдомен.ком/адрессайта)

  * Название сайта — Название сайта, его можно изменить позже

  * Электронная почта администратора — Установить как первоначального администратора для подсайта

![WordPress Multisite'da yeni sayt formu](/img/admin/sites-list.png)

Alanları doldurduktan sonra "Site ekle" butonuna tıklayın. Yeni alt site oluşturulduğunda, alt sitenin düzgün çalıştığından emin olmak için ona erişin.

## Әдеттә булган мәсьәләләр:

### 1. Дөре сайтлар ясап чыгарам, әмма алар барыламый?

Хәзергесең субдомен (subdomain) танлыйсың, ул миңа да көп сайтлы (multisite) уңышлы исемнәләр өчен вайлд-субдомен (wildcard subdomain) дип дәрәҗәләрдән ясауны талап итә.

Бул үчүн, веб-сайтыңыздын хостинг ҳиссасининг бошқарув панеллик дашбордига киринг (масалан, сизнинг хостинг провайдерингизга қарай cPanel/Plesk/Direct Admin).

"Доменлар" (Domains) или "Поддомены" (Subdomains) seçeneğini bulun. Bazı kontrol panellerinde bu, "Домен yönetimi" (Domain administration) olarak etiketlenmiş olabilir.

Поддомен (subdomain) alanı için bir yıldız (*) girin. Ardından, bu alt alan adının hangi ana alan adına ekleneceğini seçmenizi isteyecektir.

Выбранного доменное имени корневой каталог автоматически определяется. Нажмите кнопку _Создать_ или _Сохранить_, чтобы добавить ваш поддомен с диким символом (wildcard subdomain). Запись должна выглядеть как “*.[mydomain.com](http://mydomain.com)”
