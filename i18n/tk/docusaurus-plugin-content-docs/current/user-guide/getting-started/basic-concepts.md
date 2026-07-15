---
title: Temel Konseptler
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Temel Konsepsiyalar

Yeni bir WordPress Multisite (Çoklu Site) kullanıcıysanız ve Ultimate Multisite'ı yeni kullanmaya başladıysanız, başta öğrenmeniz gereken birçok yeni kelime ve ifade olabilir. Bunları öğrenmek önemli çünkü platformu ve onun nasıl çalıştığını bütün olarak anlamanız gerekecek.

Bu makalede, WordPress'teki bazı temel kavramları tanımlamaya ve açıklamaya çalışacağız. Bazıları kullanıcılar için daha alakalıdır, bazıları geliştiriciler için, bazıları ise her ikisi için de geçerlidir.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite**, tek bir WordPress paneli (dashboard) üzerinden birden fazla web sitesi ağı oluşturmanıza ve yönetmenize olanak tanıyan bir WordPress kurulum türüdür. Site sayısının yanı sıra özellikler, temalar ve kullanıcı rolleri dahil her şeyi yönetebilirsiniz. Yüzlerce ve binlerce siteyi yönetmek mümkündür.

## Ağ (Network) {#network}

WordPress açısından, multisite ağı tek bir panelden birden fazla **alt siteyi** yönetebileceğiniz yerdir. Multisite ağı oluşturma şekli hosting sağlayıcılara göre değişse de, sonuç genellikle WordPress'e bu özel modda çalıştığını bildirmek için **wp-config.php** dosyasında birkaç ek talimat demektir.

Multisite ağını bağımsız bir WordPress kurulumundan ayıran birtakım belirgin farklılıklar vardır ve bunları kısaca tartışacağız.

## Veritabanı (Database) {#database}

Veritabanı, yapılandırılmış, düzenlenmiş veri setidir. Bilgisayar terminolojisinde veritabanı, verileri saklamak ve organize etmek için kullanılan yazılıma atıfta bulunur. Bunu, farklı bölümlere sahip tablolar halinde veriyi sakladığınız bir dosya dolabı gibi düşünebilirsiniz.

WordPress Multisite tek bir veritabanı kullanır ve her alt site kendi tablolarına blog kimliği (blog id) ön eki olarak alır; bu yüzden bir ağ kurulumu kurup bir alt site oluşturduğunuzda, aşağıdaki tablolara sahip olmalısınız:

_wp_1_options_ \- ilkinji alt site üçin options tablosy

_wp_2_options_ \- ikinji alt site üçin options tablosy

## Hosting sağlayıcısı {#hosting-provider}

Hosting sağlayıcı, biznesler we şahslara olaryny web saytlarını World Wide Web arkaly bermek üçin mümkinlik yaratan kompaniya. Web hosting sağlayıcıları teklip edýän hyzmatlar dürli bolup biler, ýöne adatda olarynda web saytyny taslamagy, hostda saklamak üçin ýerlik, we Internet bilen baglanyşyk barada gürrüň berilýär.

## Domain {#domain}

Domain adı – adamlar sahypaňyza gitmek üçin ulanylýan adresi. Ol web brauzerine sahypanyzy nire tapmaly görkezýär. Ýol adresinden has howa ýaly, domain olaryň web saytına onla gitmegi üpjün edýän usuldyr. We, dükkan öňünde işareti bolmagy ýaly. Bizim sahypamıza gitmek isleseňiz, brauzerinizde sahypanyz üçin web adresi ýazmaly bolarsyň we bu [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) diýipdir, burada [**ultimatemultisite.com**](http://ultimatemultisite.com) domain adydyr.

## Subdomain {#subdomain}

Subdomain – esasy domainiň aşagynda web sayty hiyerarhi üçin bir görnüşdir, ýöne sahypanyň maglumatlaryny kataloglamak üçin folderlerden ulanyp bilmek yerine, ol özüni başga bir web sayty hökmünde görkezýär. Ol [**https://site1.domain.com/**](https://site1.domain.com/) diýlip görkezilýär, burada _site1_ subdomain ady we [_domain.com_](http://domain.com) esasy domaindir.

## Subdirectory {#subdirectory}

Subdirectory – kök domaini aşagynda web sayty hiyerarhi üçin folderlerden ulanyp sahypanyň maglumatlaryny kataloglamak üçin bir görnüşdir. Subdirectory bu subfolder bilen deňdir we adlary bir-birinden peýdalanyp bilner. Ol [**https://domain.com/site1**](https://domain.com/site1) diýlip görkezilýär, burada _site1_ subdirectory ady we [_domain.com_](http://domain.com) esasy domaindir.

## Subsite {#subsite}

Subsite bu Multisite ağında döredilen bir alt sitedir. Bu, WordPress Multisite kurulumunuzun nasıl yapılandırıldığına bağlı olarak ya bir **alt alan adı (subdomain)** ya da bir **alt dizin (subdirectory)** olabilir.

## Super Admin {#super-admin}

WordPress Super Admin, Multisite ağındaki tüm alt sitelerini yönetmek için tam yetkilere sahip olan bir kullanıcı rolüdür. Multisite kullanıcıları için bu, WordPress kurulumunuza sağlayabileceğiniz **en yüksek erişim seviyesidir**.

## Plugin {#plugin}

Genel olarak, bir plugin, WordPress sitenize ek işlevsellik katan kod setidir. Bu, giriş logosunu değiştirmek kadar basit veya e-ticaret işlevselliği eklemek kadar karmaşık olabilir. _Woocommerce ve Contact Form_ birer plugin örneğidir.

WordPress Multisite'ta, pluginler yalnızca Super Admin tarafından ağ yöneticisi paneli üzerinden kurulabilir. Alt site yöneticileri sadece kendi alt siteleri içinde pluginleri etkinleştirebilir veya devre dışı bırakabilir.

## Themes {#themes}

Bir WordPress tema, sitenin genel görünümünü belirleyen bir dosya grubu (_grafikler, stil sayfaları ve kod_) demektir. Yazı tipi stili, sayfa düzeni, renkler gibi tüm ön yüz (front-end) stillemelerini sağlar.

Pluginler gibi, WordPress Multisite'taki temalar yalnızca Super Admin tarafından kurulabilir ve alt site yöneticileri tarafından kendi alt siteleri düzeyinde etkinleştirilebilir.

## Site Template {#site-template}

**Site Template**, ağınızda yeni siteler oluştururken temel olarak kullanılabilecek bir şablon sitedir (boilerplate site).

Bu, temel bir site oluşturabileceğiniz, farklı pluginleri etkinleştirebileceğiniz, aktif bir tema ayarlayabileceğiniz ve istediğiniz gibi özelleştirebileceğiniz anlamına gelir. Daha sonra müşteriniz yeni bir hesap oluşturduğunda, içinde anlamlı içerik olmayan varsayılan bir WordPress sitesi yerine, tüm özelleştirmeler ve içerikler zaten yerinde olan temel sitenizin bir kopyasını alır.

## Domain Mapping {#domain-mapping}

WordPress bilen domain mapping, kullanıcıları bir web saytının adresini arkasından doğru hosta yönlendirmegiň usulydyr. WordPress Multisite-da alt siteller (subsites) subdirektori ýa-da subdomain arkaly döredilýär. Domain mapping bolsa subsite kullanıcılaryna öz sitlerini has amatly görkezmek üçin [**joesbikeshop.com**](http://joesbikeshop.com) ýaly üst səviýli domainden (top-level domain) ulanyp bilmegi mümkinçiligi berýär.

## SSL {#ssl}

SSL diji **Secure Sockets Layer** bilen açylýar. Bu web saytynyň adyny dogruly görkezýän dijital sertifikatdyr we şifrylenmeden geçýan gatnaşyklary işleýär. Häzirki wagtda ol internet gatnaşyklaryny howpsuz saklamak we iki ulgam arasynda geçirilýän her bir hili maglumatlary, şol hem potentsial şahsy maglumatlary, ýokary derejede goramak üçin standart tehnologiýa hökmünde ulanylýar. Modern brauzerlar SSL-i talap edýär we bu web saytyny döretmek we işletdirmek üçin zerurdyr.

## Media {#media}

Media bolsa bir web saytyny döredýän suratlar, audio, video we beýleki fayllardyr.

Network sitleri WordPress Multisite-da birleşen sanly bazany (single database) paylaýar we media fayllary üçin dosya ulgamynda aýryp saklanýan ýollary saklaýarlar.

Standart WordPress ulgamy (wp-content/uploads) üýtgedilip bilmez; eýsem, ol ýol network sitiniň özünlik ID-sini görkezmek üçin üýtgedilýär. Netijede, network siti üçin media fayllary wp-contents/uploads/site/[id] ýaly görünýär.

## Permalinks {#permalinks}

Permalinks bu sizden bir blog postynda ýa-da saytdan tapawutlanýan dowamly URL-lerdir. Permalinks başgaça **pretty links** diýlip hem atlandyrylýar. Default görkezijide, WordPress URL-leri şu görnüşde görünýän query string formatyny ulanyp bilýär:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite bu WordPress pluginidir, o WordPress Multisite quraşdyrmalar üçin döredilip, sizi premium saytlar şəbəkəsi kimi – [WordPress.com](https://WordPress.com) kimi – çevirir; bu da müştərilere aylıq, üç aylıq və ya illik ödənişlərlə saytlar yaratma imkanı verir (siz həmçinin Pulsuz planlar yarada bilərsiniz).

## Checkout Formu {#checkout-form}

Checkout Formu – Ultimate Multisite qeydiyyatı vasitəsilə subsite, üzvlük və istifadəçi hesabları yaratmalyk bir tək və ya çox mərhələli sifariş formasıdır. Bu, istifadəçinin qeydiyyat prosesi zamanı təqdim etməli olduğu müxtəlif sahələr və ödəniş formalarından ibarətdir.

## Webhook {#webhook}

Webhook (bunu həm web callback, həm HTTP push API kimi də adlandırırlar) – bir proqramın digər proqramlara real vaxt məlumat vermək üçün istifadə etdiyi yoldur. Webhook, məlumatları baş verdiyi anda digər proqramlara çatdırır, bu o deməkdir ki, siz dərhal məlumat əldə edirsiniz.

**Ultimate Multisite webhooks** sonsuz imkanlar açır və şəbəkə administratorlarının bütün növ qeyri-adi amma faydalı inteqrasiyaları etməsinə imkan verir, xüsusilə Zapier və IFTTT kimi xidmətlərlə birlikdə istifadə edildikdə.

## Events (Hadisələr) {#events}

Event – istifadəçi və ya başqa bir mənbənin hərəkətinin nəticəsində baş verən əməldir, məsələn, siçan kliklənməsi kimi. Ultimate Multisite bütün şəbəkənizdə baş verən bütün hadisələrin və logların qeydini saxlayır. O, plan dəyişikliyi kimi multisite-inizdə baş verən müxtəlif fəaliyyətləri izləyir.
