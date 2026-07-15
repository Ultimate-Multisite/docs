---
title: Азырлы түшүнүктәрләр
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Базовые понятия

Новому пользователю WordPress Multisite и тому, кто только начинает пользоваться Ultimate Multisite, поначалу может быть много новых слов и фраз. Изучение их — важная задача, потому что вам нужно будет понять платформу и то, как она работает в целом.

В этой статье мы постараемся определить и объяснить некоторые ключевые понятия в WordPress. Некоторые из них более актуальны для пользователей, другие — для разработчиков, а третьи — для обоих.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** — это тип установки WordPress, который позволяет создавать и управлять сетью нескольких сайтов с одной панели управления WordPress (dashboard). Вы можете управлять всем: от количества сайтов и функций до тем и ролей пользователей. Можно управлять сотнями и тысячами сайтов.

## Сеть (Network) {#network}

В контексте WordPress мультисайт-сеть — это место, где несколько **подсайтов** можно управлять с одной панели управления. Хотя создание мультисайт-сети отличается у разных хостинг-провайдеров, конечный результат обычно заключается в нескольких дополнительных настройках в файле **wp-config.php**, чтобы сообщить WordPress, что он работает в этом специальном режиме.

Существует несколько явных различий между мультисайт-сетью и обычным (отдельно стоящим) установкой WordPress, которые мы кратко обсудим.

## База данных (Database) {#database}

База данных — это структурированный, организованный набор данных. В компьютерной терминологии база данных — это программное обеспечение, используемое для хранения и организации данных. Представьте ее как файловый шкаф, где вы храните данные в разных секциях под названием таблицы.

WordPress Multisite использует одну базу данных, и каждый подсайт получает свои собственные таблицы с префиксом `blog id`. Так что после установки сетевой установки и создания подсайта у вас должны быть такие таблицы:

_wp_1_options_ \- options table for first subsite

_wp_2_options_ \- options table for second subsite

## Хостинг провайдер (Hosting provider) {#hosting-provider}

Хостинг провайдер - это компания, которая позволяет бизнесу и частным лицам размещать свои сайты в Интернете. Услуги, которые предлагают хостинг-провайдеры, могут отличаться, но обычно включают дизайн сайта, место для хранения данных на сервере и подключение к Интернету.

## Домен (Domain) {#domain}

Доменное имя - это адрес, который люди используют, чтобы зайти на ваш сайт. Оно говорит веб-браузеру, где искать ваш сайт. Как почтовый адрес, домен — это то, как люди посещают ваш сайт в сети. И это похоже на вывеску перед вашим магазином. Если вы хотите посетить наш сайт, вам нужно ввести наш веб-адрес в адресную строку вашего браузера, которая выглядит так: [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, где [**ultimatemultisite.com**](http://ultimatemultisite.com) — это доменное имя.

## Субдомен (Subdomain) {#subdomain}

Субдомен - это тип иерархии сайтов под основным доменом, но вместо использования папок для организации контента на сайте, он как бы получает свой собственный сайт. Он выглядит так: [**https://site1.domain.com/**](https://site1.domain.com/), где _site1_ — это имя субдомена, а [_domain.com_](http://domain.com) — основной домен.

## Поддиректория (Subdirectory) {#subdirectory}

Поддиректория - это тип иерархии сайтов под корневым доменом, который использует папки для организации контента на сайте. Поддиректория такая же, как подпапка, и имена можно использовать взаимозаменяемо. Она выглядит так: [**https://domain.com/site1**](https://domain.com/site1), где _site1_ — это имя поддиректории, а [_domain.com_](http://domain.com) — основной домен.

## Подсайт (Subsite) {#subsite}

Подсайт — это дочерний сайт, который вы создаете в сети Multisite. Он может быть либо **поддоменом**, либо **подкаталогом**, в зависимости от того, как настроена ваша установка WordPress Multisite.

## Супер администратор (Super Admin) {#super-admin}

Супер администратор WordPress — это роль пользователя с полными возможностями для управления всеми подсайтами в сети Multisite. Для пользователей Multisite это **самый высокий уровень доступа**, который вы можете предоставить своей установке WordPress.

## Плагин (Plugin) {#plugin}

В общем, плагин — это набор кода, который добавляет дополнительную функциональность вашему сайту WordPress. Это может быть что-то простое, как смена логотипа входа, или сложное, например, добавление функций электронной коммерции. _Woocommerce и Contact Form_ — примеры плагинов.

В WordPress Multisite плагины можно устанавливать только из административной панели сети от Супер администратора. Администраторы подсайтов могут активировать и деактивировать плагины только в рамках своего подсайта.

## Темы (Themes) {#themes}

Тема WordPress — это группа файлов (_графика, стилей и кода_), которая определяет общий вид сайта. Она предоставляет все стили для фронтенда, такие как стилизация шрифтов, макет страницы, цвета и т. д.

Как и с плагинами, темы в WordPress Multisite можно устанавливать только Супер администратору, а активировать на уровне подсайта — администратора подсайта.

## Шаблон сайта (Site Template) {#site-template}

**Шаблон сайта** — это шаблон сайта, который можно использовать как основу при создании новых сайтов в вашей сети.

Это значит, что вы можете создать базовый сайт, активировать разные плагины, установить активную тему и настроить его так, как вам нужно. Затем, когда ваш клиент создает новую учетную запись, вместо стандартного сайта WordPress без какого-либо значимого контента внутри, он получит копию вашего базового сайта со всеми настройками и содержимым уже на месте.

## Сопоставление доменов (Domain Mapping) {#domain-mapping}

WordPress ile alan adı eşleştirme (Domain mapping), kullanıcıları bir web sitesinin adresini kullanarak doğru ana sunucuya yönlendirmenin bir yoludur. WordPress Multisite'ta alt siteleri ya bir alt dizin (subdirectory) ya da bir alt alan adı (subdomain) kullanarak oluşturulur. Alan adı eşleştirmesi ise, alt site kullanıcılarının sitelerinin adresini daha profesyonel göstermeleri için [**joesbikeshop.com**](http://joesbikeshop.com) gibi üst düzey bir alan adını kullanmalarına olanak tanır.

## SSL {#ssl}

SSL, **Secure Sockets Layer** anlamına gelir. Bu, bir web sitesinin kimliğini doğrulayan ve şifreli bağlantıyı sağlayan dijital bir sertifikadır. Günümüzde internet bağlantısını güvende tutmak ve iki sistem arasında gönderilen hassas verileri korumak için standart teknoloji olarak kullanılıyor. Bu sayede suçluların potansiyel kişisel bilgiler dahil transfer edilen bilgileri okumasını veya değiştirmesini engelleriz. Modern tarayıcılar SSL gerektirir, bu da bir web sitesi oluşturmak ve çalıştırmak için onu zorunlu kılar.

## Medya (Media) {#media}

Medya, bir web sitesini oluşturan resimler, sesler, videolar ve diğer dosyalardır.

Ağ siteleri WordPress Multisite'ta tek bir veritabanını paylaşır; medya dosyaları için dosya sisteminde ayrı yollar (paths) tutarlar. Standart WordPress konumu (wp-content/uploads) aynı kalır; ancak yolu ağ sitesinin benzersiz kimliğini yansıtacak şekilde değiştirilir. Sonuç olarak, bir ağ sitesine ait medya dosyaları wp-contents/uploads/site/[id] şeklinde görünür.

## Permalinks {#permalinks}

Permalinks, sitenizdeki bireysel blog yazınızın veya sayfanızın kalıcı URL'leridir. Permalinks aynı zamanda **güzel bağlantılar (pretty links)** olarak da adlandırılır. Varsayılan olarak WordPress URL'leri şuna benzeyen sorgu dizesi formatını kullanır:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite WordPress плагиныdır ve WordPress Multisite kurulumları için yapılmıştır. Bu plugin, WordPress kurulumunuzu [WordPress.com](https://WordPress.com) gibi premium bir site ağına dönüştürerek müşterilerin aylık, üç aylık veya yıllık ücretlerle (ücretsiz planlar da oluşturabilirsiniz) siteler oluşturmasına olanak tanır.

## Checkout Form (Ödeme Formu) {#checkout-form}

Checkout Form, Ultimate Multisite kaydı aracılığıyla alt site, üyelik ve kullanıcı hesaplarının oluşturulmasını içeren tek veya çok adımlı bir sipariş formudur. Kullanıcının kayıt işlemi sırasında doldurması gereken farklı alanlar ve ödeme formları içerir.

## Webhook (Web Kancası) {#webhook}

Webhook (buna web geri çağrısı veya HTTP push API da denir), bir uygulamanın diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Bir webhook, veriyi anlık olarak diğer uygulamalara iletir, yani veriye hemen ulaşırsınız.

**Ultimate Multisite webhooks**, ağ yöneticilerinin Zapier ve IFTTT gibi servislerle birlikte kullanıldığında tüm çılgın ama faydalı entegrasyonları yapmasına olanak tanıyan sonsuz olasılıklar açar.

## Events (Olaylar) {#events}

Event, bir kullanıcının veya başka bir kaynağın eylemi sonucu meydana gelen bir harekettir, örneğin fare tıklaması gibi. Ultimate Multisite, tüm ağınız içinde gerçekleşen tüm olayların ve logların kaydını tutar. Plan değişiklikleri gibi multisite'inizde olan farklı aktiviteleri takip eder.
