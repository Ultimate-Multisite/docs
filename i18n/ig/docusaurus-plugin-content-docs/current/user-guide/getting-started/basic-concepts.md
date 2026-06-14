---
title: Ebe Ọrụ Ịhụnanya
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konsepts Cơ Bản

Cho người dùng WordPress Multisite mới và ai vừa bắt đầu dùng Ultimate Multisite, ban đầu có thể có rất nhiều từ ngữ và cụm từ mới để tiếp thu. Học chúng là một việc quan trọng vì bạn sẽ cần hiểu nền tảng này và cách nó hoạt động như một tổng thể.

Trong bài viết này, chúng ta sẽ cố gắng định nghĩa và giải thích một số khái niệm chính trong WordPress. Một số khái niệm này phù hợp hơn với người dùng, một số cho nhà phát triển, và một số cho cả hai.

## WordPress Multisite

**Multisite** của WordPress là một loại cài đặt WordPress cho phép bạn tạo và quản lý một mạng lưới nhiều trang web từ một bảng điều khiển (dashboard) WordPress duy nhất. Bạn có thể quản lý mọi thứ bao gồm số lượng trang web, tính năng, theme (giao diện), và vai trò người dùng. Có thể quản lý hàng trăm và hàng ngàn trang web.

## Mạng Lưới (Network)

Trong thuật ngữ của WordPress, mạng lưới multisite là nơi nhiều **subsite** có thể được quản lý từ một bảng điều khiển duy nhất. Mặc dù việc tạo mạng lưới multisite khác nhau giữa các nhà cung cấp dịch vụ lưu trữ (hosting), kết quả cuối cùng thường là một vài chỉ dẫn bổ sung trong tệp **wp-config.php** để cho WordPress biết rằng nó đang hoạt động ở chế độ cụ thể này.

Có một số khác biệt rõ rệt giữa mạng lưới multisite và cài đặt WordPress độc lập mà chúng ta sẽ thảo luận ngắn gọn.

## Cơ Sở Dữ Liệu (Database)

Cơ sở dữ liệu là một tập hợp dữ liệu có cấu trúc, được tổ chức. Trong thuật ngữ máy tính, cơ sở dữ liệu đề cập đến phần mềm được sử dụng để lưu trữ và sắp xếp dữ liệu. Hãy coi nó như một tủ hồ sơ nơi bạn lưu trữ dữ liệu trong các mục khác nhau gọi là bảng (tables).

WordPress Multisite sử dụng một cơ sở dữ liệu duy nhất và mỗi subsite sẽ có các bảng riêng với id blog nằm trong tiền tố (prefix), vì vậy một khi bạn cài đặt một mạng lưới, cơ sở dữ liệu của bạn và tạo một subsite, bạn sẽ có các bảng này:

_wp_1_options_ \- bảng tùy chọn cho trang con đầu tiên

_wp_2_options_ \- bảng tùy chọn cho trang con thứ hai

## Nhà cung cấp lưu trữ (Hosting provider)

Nhà cung cấp lưu trữ là một công ty giúp các doanh nghiệp và cá nhân đưa website của họ lên World Wide Web. Các dịch vụ mà nhà cung cấp web hosting cung cấp sẽ khác nhau nhưng thường bao gồm thiết kế website, không gian lưu trữ trên máy chủ và kết nối Internet.

## Tên miền (Domain)

Tên miền là địa chỉ mà mọi người dùng để truy cập trang web của bạn. Nó cho trình duyệt biết nơi tìm trang web của bạn. Giống như địa chỉ đường vậy, tên miền là cách mọi người truy cập website của bạn trực tuyến. Và, giống như việc có một biển hiệu trước cửa hàng của bạn. Nếu bạn muốn truy cập website của chúng tôi, bạn sẽ phải gõ địa chỉ web của chúng tôi vào thanh địa chỉ của trình duyệt, đó là [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, nơi [**ultimatemultisite.com**](http://ultimatemultisite.com) là tên miền.

## Tên miền phụ (Subdomain)

Tên miền phụ là một loại cấu trúc website dưới tên miền chính, nhưng thay vì dùng thư mục để sắp xếp nội dung trên một trang web, nó giống như có một website riêng của nó. Nó được trình bày dưới dạng [**https://site1.domain.com/**](https://site1.domain.com/) trong đó _site1_ là tên tên miền phụ và [_domain.com_](http://domain.com) là tên miền chính.

## Thư mục con (Subdirectory)

Thư mục con là một loại cấu trúc website dưới tên miền gốc sử dụng các thư mục để sắp xếp nội dung trên một trang web. Một thư mục con giống như một thư mục con và tên có thể được dùng thay thế cho nhau. Nó được trình bày dưới dạng [**https://domain.com/site1**](https://domain.com/site1) trong đó _site1_ là tên thư mục con và [_domain.com_](http://domain.com) là tên miền chính.

## Trang con (Subsite)

Subsite na bụ subsite ị chụrụ ọkụ (network) Multisite. Ọ nwere ike ịbụ **subdomain** ma ọ bụ **subdirectory** ọ bụ ihe ọ bụ a na-configure WordPress Multisite site-onye.

## Super Admin

WordPress Super Admin bụ user role nke nwere iji nwere mmadụ dị ukwụ (full capabilities) ịgwara subsite ọ bụla ọkụ Multisite. Ka ọ bụrụ ndị nkuzi Multisite, ọ bụ **akụkọ akụkọ (highest level of access)** ị ga-anọchịrị na WordPress installation-onye gị.

## Plugin

Nchebe, plugin bụ set code nke na-agbanwe ihe nchekwa dị ukwụ (extra functionality) na site WordPress-onye gị. Ọ nwere ike ịbụ ihe dị nchebe ma ọ bụ ihe dị nchebe dị ka ịgba logo login ma ọ bụ ihe dị nchebe dị ka ịgba e-commerce functionality. _Woocommerce and Contact Form_ bụ ihe ndị a bụ plugin.

Na WordPress Multisite, plugins ga-anọchịrị na-install karịghị anyị gị dashboard admin nke network site-onye Super Admin. Ndị Subsite Admins ga-anọchịrị ịgbanwe (activate) ma ọ bụ agha (deactivate) plugins n'ime subsite ha.

## Themes

WordPress theme bụ ihe dị ka set file (_graphics, style sheets, na code_) nke na-agbanwe ihe dị ọnụro site-onye ahụ. Ọ na-agbanwe mmadụ dị ukwụ (front-end stylings) dị ka font styling, layout page, ajụwa, na ihe ndị ọzọ.

Ọ dị kama dị ka plugins, themes na WordPress Multisite ga-anọchịrị na-install karịghị anyị gị Super Admin ma nwere ike ịgbanwe (activate) n'ime subsite level na mpaghara subsite admins.

## Site Template

**Site Template** bụ site boilerplate nke a dị mma ịcha maka site ọhụrụ na network-onye gị.

Ọ na-eme ka ị ga-anọchịrị site base, ịgbanwe plugins dị iche iche, ịset theme dị nwere (active theme), ma ịgba ọkụ (customize) ọ na-akụkọ gị ọ bụla ihe ị chụrụ. Ka ọ bụ, mgbe customer gị na-chụrụ account ọhụrụ, ebe ọ ga-anọchịrị site WordPress default nke na-enwe ihe dị mma n'ime ya, ha ga-anọchịrị copy site base gị na-eme ka mmadụ dị ukwụ (customizations) na ihe ndị a bụ ihe dị mma anọchịrị na-akụkọ.

## Domain Mapping

**Domain mapping** na WordPress bụ ọrịa dị ka ịgba nchek ndị nkuzi (users) nufia server ya to, dum n'ụzọ ọkụkọ binye abụọ. Na WordPress Multisite, subsites ndị a na-akwụsịrị na-agbanwe na subdirectory ma ọ bụ subdomain. Domain mapping bụ ihe na-eme ka ndị nkuzi nke subsite na-agba nufia domain top-level dị ka [**joesbikeshop.com**](http://joesbikeshop.com) ịkwado aka site ha, ka ịdị mma koko n'ụzọ ọgwụ.

## SSL

SSL bụ **Secure Sockets Layer**. Ọ bụ sertifikat dijital na-akwado aka ihe nwere website ahụ ma na-eme ka akụkọ (connection) ahụ dị mma. Na ụbọchị ndị a, ọ na-agbanwe na-agbanwe na teknolojia standard ịkwadoaka akụkọ internet ma na-agba nchek data dị mkpa na-akpọta n'etiti anyị abụọ, na-eme ka okwukwu ndị na-adịghị mma ka na-akwado aka ma na-arụma ihe ọ bụla na-akpọta, onye na-agbanwe dị mkpa. Modern browsers na-enwe SSL, nke na-eme ka ọ dị mkpa n'ime ịkwadoaka site website ma na-arụma ya.

## Media

Media bụ images, audio, video, na ihe ndị ọzọ na-eme ka website ahụ.

Network sites na-agba database Ọkụkọ (database) Ọkụkọ (WordPress Multisite), ha na-akpọta nchek (paths) dị iche iche na filesystem na-akwadoaka media files.

Location standard WordPress (wp-content/uploads) na-enwe; ihe ọ bụ, path ahụ na-agbanwe ka ịkwado aka ID subsite network site ahụ. Nche gị, media files nke network site na-eme ka wp-contents/uploads/site/[id].

## Permalinks

Permalinks bụ URL ndị dị n'aka site blog ma page ọ bụla nke ị na-akwụsịrị ya n'ime site ha. Permalinks na-enweghị na-agbanwe na **pretty links**. By default, URLs WordPress na-agbanwe na format query string na-eme ka:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite na plugin WordPress, nke a bụ ihe nwere die WordPress Multisite installs, na-agbanwe instalasiya WordPress tusi na ọkụkọ dị mma nke sites – kama [WordPress.com](https://WordPress.com) – na-eme ka ndị biara site chụkọ via fees ndị bụ mọny ma ọ bụ quarterly ma ọ bụ yearly (ị ga-akwere ịrụ Free plans).

## Checkout Form

Checkout Form bụ ihe nwere die form order ọkụkọ dị Ọkụkụ ma ọ bụ multi-step na-agba ịrụ subsite, membership, na user accounts dwara Ultimate Multisite registration. Na-eme ka ọ nwere fields dị iche iche na payment forms na ndị user ga-akwere ọ maliri mgbe ọrụ sign-up.

## Webhook

Webhook (a na-eji web callback ma ọ bụ HTTP push API) bụ ọsọ ọkụkọ na-eme ka app ọzọ chụkọ nkwado real-time. Webhook na-agbanwe data nara ndị app ọzọ mgbe ọ dị, ọ na-eme ka ị chere data hemen.

**Ultimate Multisite webhooks** na-eme ka ihe ọ bụla na-akụkọ, na-eme ka network admins chụkọ ịrụ ọrụ dị Ọkụkụ ma nwere ike ịrụ integrations dị mma, karịsịrị karịsịrị ma ọ bụ mgbe a na-agbanwe na services dị ka _Zapier_ na IFTTT_.

## Events

Event bụ ihe ọrụ na-eme mgbe ọrụ user ma ọ bụ source ọrụ ọzọ, kama vile mouse click. Ultimate Multisite na-eme aka na nwere record nke onye ọrụ na logs ndị na-eme mgbe ọ dị n'ime network tusi gị. Na-akụkọ ihe dị iche iche na-eme mgbe ọrụ n'ime multisite tusi gị, kama vile ịgba maara plan.
