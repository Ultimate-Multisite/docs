---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite na-plugin WordPress nke na-eme ka ị nwere ike ịdepụta WaaS (Websites as a Service) ma ọ bụ Websites kama A Service maka ndị khách. Ka anyị abụghị ịgwo n'obi na ịmụ ihe Ultimate Multisite ga-arị ịnweta ụlọ gị na ndị khách gị, onweghị ihe njikọ nke abụgbara dị mma nke a bụ ihe niile anyị ga-agbaje.

## WordPress Multisite {#the-wordpress-multisite}

Ọ nwere ike ịmara ọtụtụ anyị na-install WordPress standard (stock). Ị chụrụ ya eziokwu na control panel nke hosting provider gị, ma ọ bụ, maka ndị nwere ọchịchị, ị nwere ike ịset web server na database baru, download core files na comدأ ihe ịgba ọrụ.

Ọ dị mma maka millions of WordPress sites akụkọta ọtụtụ akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụkọta akụk

Ime n'ụm ihe ndị dị mba anyị gbanwe ihe a bụ ịhụ ụfọdụ terminoloji ọ bụla dị n'ime dokumentation Ultimate Multisite ma ọ bụ n'ime cộnguntiy WordPress.

### The Network (Ọnụlọ) {#the-network}

N'ime WordPress, multisite network bụ enyi ebe onye chụrụ subsites mgbe ọ nwere ike ịgwụmere site ọkụ (dashboard) Ọzọ. Ọ bụrụ na ịchịta multisite network dị iche iche n'ime ndị nwere ike ịnwụ, ọ bụ na ihe a na-eme dị iche iche n'ime hosting providers, onweghị ya anọchịrị, ọ bụ na ihe a na-eme dị iche iche n'ime wp-config.php file ka iji le WordPress ịmata na ọ na na-arụrụ n'ebe ahụ.

Nwere ike ịhụnanya ụfọdụ dị iche iche n'ime multisite network ma ọ bụ instalasiya WordPress standalone, nke anyị ga-eme ihe a dị n'ime.

#### Subdomain vs. Subdirectory (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Onye nkwado mgbe ị chọrọ bụkwa na instalasiya multisite ahụ ga-arụrụ na _subdirectories_ (subdirectories) ma ọ bụ _subdomains_ (subdomains). Ultimate Multisite na-agbanwe dị mma na obaaka ndị a, mana nwere ụfọdụ dị iche iche n'ime nkuchi anọchịrị n'ime architecture ahụ.

N'ime _subdirectory_ configuration, sites network ga-anọchitere anya path ọ bụ site na onye nwere domain ọkụ (main domain name). Ọ bụrụ na site network a a na-agbọ ‘site1’, ọ ga-anọchitere URL ọkụ ahụ dị ka https://domain.com/site1. N'ime _subdomain_ configuration, site network a ga-anọchitere _subdomain_ ọzọ mgbe ọ nwere domain ọkụ ahụ. Biko, site a na-agbọ ‘site1’ ga-anọchitere URL ọkụ ahụ dị ka https://site1.domain.com/.

Ọ bụrụ na obaaka ndị a bụ ihe ndị dị mma nke ọma, onye nwere ike ịnwụ _subdomains_ na-agbanwe dị iche iche ihe ndị dị mma, mana ọ ga-anọchitere ihe ndị ahụ na-eme ihe ma na-eme ihe n'ime architecture ahụ.

Na mitor DNS, việc dùng các _subdirectories_ (thư mục con) là một thử thách tương đối đơn giản. Vì các trang mạng chỉ đơn giản là các thư mục con của đường dẫn chính, bạn chỉ cần có một bản ghi tên miền duy nhất cho tên miền chính. Còn với các _subdomains_ (tên miền phụ), vấn đề hơi phức tạp hơn, đòi hỏi hoặc là một bản ghi CNAME riêng cho mỗi trang mạng hoặc là một bản ghi wildcard (*) trong các bản ghi DNS.

Một lĩnh vực cần xem xét thêm là về SSL và việc cấp phát cũng như sử dụng các chứng chỉ SSL. Trong cấu hình _subdirectory_, bạn có thể dùng một chứng chỉ tên miền duy nhất vì các trang mạng đơn giản là các đường dẫn của tên miền chính. Do đó, một chứng chỉ cho domain.com sẽ cung cấp SSL đầy đủ cho https://domain.com/site1, https://domain.com/site2 và cứ thế tiếp diễn.

Trong cấu hình _subdomain_, việc sử dụng chứng chỉ SSL wildcard là một trong những lựa chọn phổ biến nhất. Loại chứng chỉ SSL này cung cấp mã hóa cho tên miền và các _subdomains_ của nó. Vì vậy, chứng chỉ SSL wildcard sẽ cung cấp mã hóa cho https://site1.domain.com, https://site2.domain.com và chính https://domain.com.

Mặc dù có những lựa chọn khác, nhưng chúng thường bị giới hạn về phạm vi và ứng dụng và đòi hỏi thêm cấu hình cũng như cân nhắc về sự phù hợp của chúng.

#### Plugins và Themes {#plugins-and-themes}

WordPress mang lại điều gì thì nó cũng lấy đi cả, ít nhất là từ góc độ khách hàng. Trong một cài đặt WordPress độc lập, nếu quản trị viên trang web cài một plugin xấu hoặc không cập nhật bản cài đặt của họ, thì nạn nhân duy nhất và tổn thất duy nhất của hành động này chính là bản thân họ. Tuy nhiên, khi một quản trị viên trang web cài một plugin xấu trên một cài đặt multisite, nó sẽ tạo ra nạn nhân cho mọi trang được cài đặt trong mạng lưới đó.

Bởi vì lý do này, khi bạn cấu hình nó như một WordPress multisite, nó sẽ loại bỏ khả năng của quản trị viên trang web để cài đặt plugin và theme, thay vào đó chuyển khả năng này sang vai trò quản trị viên mạng (network administrator) hoặc 'super admin' mới được tạo. Vai trò đặc quyền này sau đó có thể quyết định xem có cho phép quản trị viên các trang mạng nhìn thấy hoặc truy cập menu plugin trong dashboard của họ hay không, và nếu có thì liệu các quyền đó có mở rộng đến việc _kích hoạt_ hay _tắt_ plugin hay không.

Ở mức độ này, quản trị viên mạng chịu trách nhiệm cài đặt plugin và theme vào mạng và ủy quyền cho phép sử dụng các plugin và theme đó trên các trang mạng. Quản trị viên trang web không thể cài đặt plugin và theme hoặc truy cập các plugin và theme không được gán cho trang của họ.

#### Người dùng và Quản trị viên {#users-and-administrators}

Trong một WordPress Multisite, tất cả các trang mạng đều chia sẻ cùng một cơ sở dữ liệu và do đó chia sẻ cùng một người dùng, vai trò và khả năng (roles and capabilities). Cách dễ hiểu nhất để hình dung điều này là tất cả người dùng đều là thành viên của mạng chứ không phải của một trang cụ thể nào.

Với sự hiểu biết này, việc cho phép tạo người dùng có thể không mong muốn vì lý do đó WordPress Multisite loại bỏ khả năng này khỏi quản trị viên trang web và chuyển nó sang vai trò của quản trị viên mạng. Ngược lại, quản trị viên mạng có thể ủy quyền các đặc quyền cần thiết cho một quản trị viên trang web để họ có thể tạo tài khoản người dùng cho trang của riêng họ.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Nhắc lại điều trên, mặc dù các tài khoản người dùng dường như liên quan đến trang mà chúng đang ở, thực tế chúng được phân bổ cho mạng và do đó phải là duy nhất trên toàn mạng. Có những trường hợp tên người dùng không thể đăng ký do lý do này.

Makaa, iji bụ na ọ bụ ebe ọ bụla n'ụzọ ọrụ enterprise systems, a dị mma ịghọta ihe ọ bụ na ebe ọnụ ọ bụla ịregistre ndị ama (user registration) na akaụkọ ọrịre (authentication). Na ọ bụ na WordPress standalone installations (nke a ịdị mma ịgwara admin user), ihe a dị mma ịghọta.

#### Media {#media}

Ndeewo, ebe sites ndị nwere network site na-agba database ọkụ ọkụ (single database) na WordPress Multisite, ha na-aga okwu (separate paths) n'filesystem (file system) maka media files.

Ebe kawaida a WordPress (wp-content/uploads) na-enwe; ihe a bụ; ọ bụ na ebe ya na-agba ịdị dị ka ID ọkụ ọkụ (unique ID) nke network site ahụ. Maka nke ahụ, media files maka network site na-aga wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Anyị gosi ya mgbe ọ bụla na ebe _subdomain_ dị mma dị ka _subdirectory_ configuration, ma a jiri ihe ndị a: paths.

N'ụzọ _subdirectory_, site ọkụ (site) ọkụ ahụ (site ọkụ ọkụ ọkụ ahụ nke a bụ site ọkụ ọkụ ọkụ ọkụ ọkụ ahụ nke a bụ site ọkụ ọkụ ọkụ ọkụ ọkụ ahụ nke a bụ site ọkụ ọkụ ọkụ ọkụ ọkụ ahụ ahụ na-agba ebe dị sama na-akpọ (share the same path) na-aga n'ụzọ dị ka domain name. Ihe a na-eme na-enwe ike ịdị mma nke ukwuu nke clashes (clashes).

Maka posts, /blog/ path dị mma na-agba site ọkụ ọkụ ọkụ ahụ na-aga ihe ndị a na-eme ka ‘Post name’ bụ domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

N'ụzọ _subdomain_ configuration, ihe a dị mma ịdị dị na-akpọ (this action) onye ahụ na-enwe ike ịnweta domain (domain separation) nke ọma ma n'akaa ya bụ na ha na-aga ebe dị iche iche (distinct paths) site na-agba subdomain ha.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

Na konfiguracja _subdirectory_ (podkatalog), ryzyko kolizji nazw się rozciąga na statyczne strony jako główna strona, ponieważ strony sieciowe i główne udostępniają ten sam ścieżkę.

Aby temu zapobiec, WordPress daje sposób na zablokowanie pewnych nazw stron, aby nie kolidowały one z nazwami pierwszej strony. Zazwyczaj administrator sieci wpisuje podstawowe ścieżki stron głównej strony.

<!-- Zdjęcie niedostępne: ustawienia sieciowego WordPress pokazujące zablokowane nazwy stron w celu zapobiegania konfliktom -->

W konfiguracji _subdomain_ (poddomen), możliwość kolizji nazw jest łagodzona przez _subdomain_, ponieważ jest on unikalny dla strony sieciowej i nie ma żadnego związku ze stroną główną.

### Rejestracja użytkowników {#registration}

W ustawieniach sieciowych WordPress Multisite dostępne są kilka nowych opcji rejestracji użytkowników, które pozwalają zarówno nowym, jak i istniejącym użytkownikom na tworzenie stron.

<!-- Zdjęcie niedostępne: ustawienia sieciowe WordPress Multisite pokazujące opcje rejestracji -->

W przeciwieństwie do samodzielnych instalacji WordPressa, strony sieciowe nie zachowują znajomych opcji pozwalających na rejestrację użytkowników lub przypisanie tych rejestracji do ról.

<!-- Zdjęcie niedostępne: ustawienia rejestracji użytkownika dla samodzielnej strony WordPress pokazujące ograniczone opcje -->

Kiedy tworzone są konta użytkowników, te konta są generowane na poziomie sieci. Zamiast należeć do jakiejś konkretnej strony, należą one do całej sieci. Ma to pewne charakterystyczne zalety i wady.

Nói cách khác, giả sử WordPress Multisite của bạn làm về tin tức và thông tin. Bạn sẽ thiết lập multisite đó rồi tạo các trang mạng (network sites) cho tài chính, công nghệ, giải trí và các lĩnh vực quan tâm khác trong khi vẫn giữ quyền kiểm soát tổng thể đối với các plugin và theme. Mỗi trang mạng này sẽ có mức độ kiểm soát lớn hơn nhiều về giao diện và trải nghiệm người dùng của trang mạng đó so với các custom post types hay danh mục bài viết thông thường.

Đến mức đó, khi người dùng đăng nhập, họ đăng nhập vào mạng và cuối cùng cũng được đăng nhập vào từng trang mạng để mang lại trải nghiệm liền mạch. Nếu trang web mới của bạn dựa trên mô hình đăng ký (subscription), đây sẽ là giải pháp và kết quả lý tưởng.

Tuy nhiên, nếu mục đích và bản chất dự định của multisite là cung cấp các trang mạng không liên quan đến nhau thì hầu như luôn cần có các plugin bên ngoài hoặc bổ sung để thao tác với vai trò người dùng (user roles).

### Tên miền và SSL {#domain-and-ssl}

Hãy nói về một cài đặt WordPress Multisite mà gần như chúng ta bỏ qua – đó là Wordpress.com. Đây là ví dụ toàn diện nhất về wordpress multisite và cho thấy khả năng tùy chỉnh cũng như định hình của nó để hoàn thành mục đích.

Ngày nay trên internet hiện đại, việc sử dụng SSL gần như là bắt buộc và các quản trị viên mạng (network administrators) của WordPress multisite sớm phải đối mặt với những thách thức này.

Trong cấu hình _subdomain_, các trang được tạo dựa trên tên miền gốc (root domain name). Do đó, một trang được dán nhãn là ‘site1’ sẽ được tạo thành ‘site1.domain.com’. Bằng cách sử dụng chứng chỉ SSL wildcard, quản trị viên mạng có thể giải quyết thành công thách thức này và cung cấp khả năng mã hóa SSL cho toàn bộ mạng.

WordPress Multisite ndụ (Multisite) na-eme ihe n'ụdị domain mapping function nke na-agbanwe site ndị ọrụ dị iche iche na-asụgharị na domain names ọhụrụ ma ọ bụ domain names dị iche iche dị ka domain root na-akọwa.

Ọ bụ ihe dị n'ụlọ ndụ (network administrators) na-eme ihe dị n'ụdị domain configuration ma ọ bụ na-eme ka SSL certificates ndị a na-agbanwe na-aga.

N'ụzọ ahụ, ọbụghị WordPress Multisite na-eme ihe dị ka ịkwado [www.anotherdomain.com](http://www.anotherdomain.com) na-asụgharị na ‘site1’, onye ndụ (network administrator) na-agba mma na-eme DNS entries ma ọ bụ na-eme SSL certificates.

## Ultimate Multisite {#ultimate-multisite}

Ọ bụrụ na ị chọrọ ịghọta ọnụ dị n'etiti WordPress installation dị ka site-alone na Multisite installation, chogo ị chọpụta na Ultimate Multisite bụ ihe a na-eme ihe dị mma maka ịnwass Website as a Service (WaaS). Ọ dị ka Wix.com, Squarespace, WordPress.com ma ọ bụ ịnwass service gị die.

N'ụzọ ahụ, Ultimate Multisite na-agbanwe WordPress Multisite, onye na-eme ihe n'ụzọ nke na-eme ihe ndị a na-eme ihe dị ka ịgba mma na-eme ihe ndị dị iche iche na-eme ka ọ dịka ịnwass site.

N'ịkpọ ahụ, anyị ga-eme ihe ndị dị mkpa ma ọ bụ ihe ndị dị nwere ike ịghọta maka ịnwass ihe ndị a.

### Use Cases (Ihe Ndị A na-eme Ihe) {#introduction}

#### Case 1: An Agency (Ofa) {#use-cases}

N'ụzọ ahụ, ihe ndị dị mma nke agency ga-anọ na-eme website ndị e ji design na-eme ihe dị ka hosting ma marketing dịka ọrụ ndị ọzọ.

Para các agency, Ultimate Multisite mang lại một giá trị vô cùng tuyệt vời nhờ khả năng lưu trữ và quản lý nhiều website trên một nền tảng duy nhất. Đặc biệt hơn nữa đối với những agency đã chuẩn hóa thiết kế của mình dựa trên các theme cụ thể như GeneratePress, Astra, OceanWP hay các theme khác, họ có thể tận dụng khả năng của Ultimate Multisite để tự động kích hoạt các theme này cho mỗi site mới.

Tương tự như sự phong phú về các ưu đãi giá plugin phổ biến và được agency ưa chuộng, việc sử dụng Ultimate Multisite cho phép các agency tận dụng những khoản đầu tư hiện có bằng cách cung cấp một nền tảng chung để cài đặt, bảo trì và sử dụng các plugin.

Rất có thể, việc cấu hình sẽ là điều mà mọi người mong muốn, và may mắn thay, Ultimate Multisite giúp việc ánh xạ tên miền (domain mapping) và chứng chỉ SSL trở nên cực kỳ dễ dàng với các tích hợp của nó cho một số nhà cung cấp hosting phổ biến cũng như các dịch vụ như Cloudflare và cPanel.

Vì vậy, bằng cách tận dụng một trong những nhà cung cấp này hoặc đặt Ultimate Multisite phía sau Cloudflare, các khía cạnh như quản lý tên miền và chứng chỉ SSL trở nên khá đơn giản.

Những agency thích giữ quyền kiểm soát chặt chẽ đối với việc tạo site sẽ đánh giá cao sự dễ dàng mà họ có thể tạo site và liên kết các site với khách hàng cũng như các gói dịch vụ thông qua giao diện được tinh gọn của Ultimate Multisite.

![Giao diện quản lý site của Ultimate Multisite](/img/admin/sites-list.png)

Việc kiểm soát chặt chẽ đối với plugin và theme được duy trì trên cơ sở từng sản phẩm thông qua các giao diện trực quan của Ultimate Multisite, cho phép bạn bật hoặc ẩn chúng cũng như trạng thái kích hoạt khi khởi tạo cho một site mới.

![Giao diện giới hạn plugin sản phẩm](/img/config/product-plugins.png)

Themes nwere ike functionality, na-eme choa particular themes beere activate or hide am on site creation.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies ga-agba peace of mind na Ultimate Multisite na-eme allow them do what they do best - design exceptional web sites.

#### Case 2: Niche Provider {#case-1-an-agency}

Ebe nwere ihe ọkụ dị nke ọma na na-eme iyi. Na ọtụtụ ndị especialista, ihe a na-eme na ịrụ ihe ọchịrị na-akpọta aka ihe ọkụrị ọ bụ.

Nke a na-eme na ị bụ onye nwere ike ịgba ọsọ na-akpọta akwụkwọ ka ị bụ onye nwere ike ịgba ọsọ esports na-akpọta akwụkwọ ka ị bụ onye nwere ike ịgba ọsọ booking service na-akpọta aka restaurant?

Na ihe ọtụtụ ihe, ị ga-agba services based on common framework and platform. Ọ ga-anọ na ị bụ onye na-eme or invest in bespoke plugins to provide the required functionality, ma ọ bụrụ na industry best practices na-adị mma, ọ ga-anọ na akụkọ dị n'ime approach standardized na design.

Ihe ọchịrị nke Ultimate Multisite bụ na ị chọrọ template sites. Template site na-eme ihe onye theem (theme) na-install and activate, necessary plugins install and activate, and sample posts or pages create. Mgbe customer na-agba new site based upon template, contents and settings of template na-copy to newly created site.

Na-eme ihe a na-eme advantage unparalleled na ability to instantly create a site ready to go with custom plugins and design for provider of niche sites and services. Customer ga-anọ na ị provide the most minimal input to complete the service.

Ndeewo, na-akụkọ ihe ndị a bụ ihe ọ bụla ị chọrọ. Ọ bụ ihe dị mma nwere ike ịdị _subdirectory_ ma _subdomain_, ọ bụrụ na ị chọrọ ihe ahụ, ma ọ bụrụ na ị chọrọ ihe ahụ, ọ bụrụ na ị chọrọ ihe ahụ, ma ọ bụrụ na ị chọrọ ihe ahụ. Ọ bụrụ na ị chọrọ ihe ahụ, architecture choices ga-anọ mma n'ime SSL certificate simple fɛ _subdirectories_ ma wildcard SSL certificate fɛ _subdomains_.

#### Case 3: WordPress Web Hosting {#case-2-niche-provider}

Nwere ọtụtụ ihe dị n'ime cara ịkwado WordPress sites, ma ọ bụ na-akwado site ahụ gị na ebe a na-eme. Na-akwado nke a bụ ihe dị mma nwere ike ịdị simple na ịkwado web space gị na customer na-eme version WordPress ya na-eme. Ọ bụrụ na nke ahụ, ọ bụ na ọtụtụ ihe maara na-eme ga-anọ n'ime ịnweta ihe ndị a na-eme ka ịkwado ihe dị mma.

Ultimate Multisite na-akwado ihe a na-eme na-eme solution turnkey (solution na-eme) nke hosting WordPress sites. Nchegbu na solution ahụ bụ ihe ndị dị n'ime core mechanisms na-eme subscription services, payment collection, checkout forms, discount vouchers na customer communications.

Ọtụtụ akụkọ ndị dị mma na-eme ga-anọ n'ime ịnweta, ịse, ma aji WordPress Multisite na-akwado na Ultimate Multisite na-eme ka network administrators chọrọ ịghọta ihe ndị ahụ na-eme ka ọ bụ ihe na-eme ya service ahụ ma niche ahụ dị ka product tiers, pricing na service offers.

Ọ bụrụ na developers na-eme ga-anọ n'ime Ultimate Multisite, solution a na-akwado RESTful API na Webhooks fɛ event notification.

Ma ọ bụ na ị chọrọ reliance na ọtụtụ external plugins na licenses, Ultimate Multisite na-akwado solution rich feature and comparable na Wix, Squarespace, WordPress.com na ndị ọzọ.

### Architecture Considerations {#case-3-wordpress-web-hosting}

Ọ bụrụ na nke a bụ ihe dị mma na-eme ga-anọ n'ime ịchochere technologies na-eme ka ịkwado Ultimate Multisite installation.

#### Shared vs. Dedicated Hosting {#architecture-considerations}

Mụn, ọ bụla hosting provider na-enweghị dị sama, ma ụfọ nọ na-agbaje server density dị nri-ụzọ. Hosting ndị ebe-nri-ụzọ (low-cost providers) ga-enwe agbanwe n'ime ịkwado server density. Oge a bụ, installation Ultimate Multisite ha ga-enwe ihe ọ bụla Ọ bụ ụka n'ime ọtụtụ site ndị dị n'ime server ebe ahụ.

Ma ọ bụrụ na provider ahụ ma na-eme ihe ndị a dị mma, site ndị dị n'ime server chungị (shared server) ga-enwe problema ‘noisy neighbour’. Ọ bụ ihe a na-eme site dị n'ime server ebe ahụ na-agbanwe ihe ọ bụla resources dị n'ime ya, nke na-eme site ndị ọzọ ga-agbanwe n'ime resources ndị dị m n'ime. Nchekwa a chọrọ ịbụ site dị n'ime slow ma maara ịgba ọsọ n'ime oge ọ bụla.

Ọ bụrụ na ị bụ provider web hosting, ihe ndị a ga-eme ka ndị kháchu gị na-enwe ike dị ụtọ, page rank dị ala ma bounce rates dị ala, nke na-eme ka ha chọrọ services ndị ọzọ.

Ọ bụ ihe a na-eme: ebe-nri-ụzọ (cheap) ma ọ bụla na-eme ihe dị mma.

Ultimate Multisite ga-enwe ike ịrụrụ na ụfọdụ hosting provider dị mma ma na-agbanwe n'ime anọọ ya nke ọma, nke na-eme ka ha chọrọ ihe ndị a dị ka domain mapping ma automatic SSL. Hosting providers ndị a na-eji agbanwe n'ime performance ma na-enwe service dị ala dị n'ime shared hosting.

Ọ bụrụ na ị chọrọ oge ọ bụla maka hosting provider dị mma ma set-up instructions dị completeness, jiji check documentation nke Compatible Providers.

#### Performance Considerations {#shared-vs-dedicated-hosting}

Ultimate Multisite bụ application dị slow, ma ọ bụghị, ọ dị ụtọ nkwado. Mana, ọ ga-eme ihe dị mma anọ n'ime application na infrastructure ahụ ma ọ ga-enwe ike ịrụrụ ihe ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ bụla ọ

Nghiên cứu tình huống này sẽ khác nếu xét ở quy mô nhỏ hơn, ví dụ một đến năm trang web, nhưng trước khi lâu dài các vấn đề về quy mô trở nên rõ ràng.

Nếu không được theo dõi, trang Ultimate Multisite duy nhất sẽ chịu trách nhiệm đáp ứng yêu cầu của tất cả khách truy cập vào các trang web đó. Những yêu cầu này có thể là cho các trang PHP động hoặc tài sản tĩnh như stylesheets, javascript hoặc tệp media. Dù là một hay một trăm trang web, những công việc này trở nên lặp đi lặp lại, đơn điệu và lãng phí. Không cần thiết phải sử dụng sức mạnh CPU và bộ nhớ để xử lý một tệp PHP khi đầu ra là thông tin tĩnh giống nhau cho mọi yêu cầu.

Tương tự như vậy, một yêu cầu về trang PHP hoặc HTML sẽ tạo ra nhiều yêu cầu tiếp theo cho các tập lệnh (scripts), stylesheets và tệp hình ảnh. Những yêu cầu này được nhắm mục tiêu trực tiếp đến máy chủ Ultimate Multisite của bạn.

Có thể dễ dàng giải quyết vấn đề này bằng cách nâng cấp máy chủ, nhưng điều đó không khắc phục được một vấn đề thứ yếu - độ trễ địa lý (geographic latencies). Chỉ có nhiều máy chủ ở nhiều địa điểm mới có thể giải quyết vấn đề này một cách thích hợp.

Vì lý do này, hầu hết các quản trị viên mạng sử dụng các giải pháp bộ nhớ đệm phía trước (front-end caching solutions) và mạng phân phối nội dung (CDN) để đáp ứng các yêu cầu về các trang tĩnh. Việc đáp ứng những yêu cầu này và phục vụ tài sản trước khi yêu cầu đến máy chủ sẽ tiết kiệm tài nguyên xử lý, loại bỏ sự chậm trễ, tránh nâng cấp không cần thiết và tối đa hóa đầu tư công nghệ.

Ultimate Multisite bao gồm một add-on Cloudflare tinh vi cho phép các quản trị viên mạng đặt cài đặt của họ phía sau Cloudflare và tận dụng không chỉ khả năng bộ nhớ đệm mà còn là lưu trữ DNS, chứng chỉ SSL và các cơ chế bảo mật khác.

#### Sao lưu (Backups) {#performance-considerations}

Bạn có thể hỏi 50 người về lời khuyên về sao lưu và nhận được 50 ý kiến khác nhau về các chiến lược sao lưu. Câu trả lời là, nó phụ thuộc vào bạn.

Ndemarai ihe ọ bụla ma ọ bụ nwere mme, na backup ndị a ga-anọrọ, ma na-abụghị ihe dị mkpa na provider (nhà cung cấp dịch vụ) nke gụnyere ihe ndị a, ma ọ bụrụ na obodo ahụ na-anọchi usoro ditenye. Maka nke a, ndị khách nwere ike ịhụ network administrator don baa site na ịnweta na iji nyere na iji nyere ihe a. Ọ bụ onye network administrator ga-anọrọ bụ ihe ọzọ.

Maka ihe dị ka nke a, anyị ga-anọchị na backup bụ sao nwere ihe dịka wakati (point-in-time copy) nke omụmọdụ system ahụ n'ime akụkọ okwu backup ahụ abụghị. Ihe dị ka ọ bụ, ihe omụmọdụ system ahụ bụ n'ime akụkọ okwu backup ahụ ga-anọchị na iji nyere na iji nyere ihe a.

Ma anyị ga-anọchị na ịnweta ihe ndị a na ndụ ahụ, ma ọ bụ ihe mgbe ọ dị mma maka omụmọdụ anọchi gị ga-anọchị na ihe ndị a na nkọwa nwere ike ịbata na ihe ndị a na iji nyere. Ọ bụrụ na anyị ga-anọchị na ndụ ahụ, ọ bụ ihe dị mma maka omụmọdụ anọchi gị ga-anọchị na ihe ndị a na nkọwa nwere ike ịbata na ihe ndị a na iji nyere. Ọ bụrụ na anyị ga-anọchị na ndụ ahụ, ọ bụ ihe dị mma maka omụmọdụ anọchi gị ga-anọchị na ihe ndị a na nkọwa nwere ike ịbata na ihe ndị a na iji nyere.

#### Snapshots (Ihe Nkwupụta) {#backups}

Snapshots bụ ihe dịka sao nwere mme backup because they are easy, uncomplicated (until you want to restore) and ‘just work’. Ọ ga-anọchi ụfọdụ aiuto n'ime provider gị ma ọ bụrụ na ị nwere VPS (Virtual Private Server) ma ọ bụ ihe dị ka ọ bụ. Ihe ndị dị iche iche ndị a nwere n'ime dokumentation 'Compatible Providers' anyị ga-anọchị nyere backup ndị ahụ na-anọchi mme ọzọ ma ọ bụ ịgbagba na network administrator.

Backup truyền thống nhắm vào các file và database, còn snapshot thì nhắm vào toàn bộ ổ đĩa. Điều này có nghĩa là không chỉ dữ liệu của trang web được ghi lại trong snapshot mà cả hệ điều hành và cấu hình nữa. Đối với nhiều người, đây là một lợi thế rõ ràng vì bạn có thể tạo một hệ thống mới gần như ngay lập tức từ snapshot và đưa nó vào hoạt động để thay thế một hệ thống đang gặp sự cố. Tương tự, quy trình khôi phục để lấy lại các file chỉ cần gắn hình ảnh snapshot làm ổ đĩa vào một instance hiện có để các file có thể được truy cập và sao chép.

Snapshot có thể phát sinh chi phí bổ sung với nhà cung cấp dịch vụ lưu trữ nhưng nó giống như một chính sách bảo hiểm chống lại những sự cố không mong muốn.

#### External Scripts (Các Script Bên Ngoài) {#snapshots}

Có vẻ như không thiếu các script và giải pháp bên ngoài để backup tài nguyên WordPress và MySQL, và chúng sẽ hoạt động tốt cho Ultimate Multisite vì đây là một plugin WordPress sử dụng hệ thống file và database của WordPress. Vì vậy, một giải pháp sao lưu các trang web WordPress sẽ đáp ứng được nhu cầu của Ultimate Multisite.

Chúng tôi không thể đề xuất script này hơn script khác, nhưng lời khuyên chung của chúng tôi là hãy chạy nhiều bài kiểm tra backup và khôi phục để đảm bảo kết quả như mong muốn và 'chắc chắn là chắc chắn' bằng cách liên tục đánh giá script và chức năng của nó, đặc biệt là ở những nơi áp dụng một hình thức chiến lược backup chênh lệch (differential backup strategy).

Cần lưu ý rằng trong quá trình chạy các script này, chúng sẽ làm tăng tải hệ thống, điều này cần được tính đến.

#### Plugins (Các Plugin) {#external-scripts}

Hầu như không có vấn đề gì trong WordPress mà không thể giải quyết bằng một plugin và nếu việc quản lý các script bên ngoài không phải là sở trường của bạn thì có lẽ plugin là lựa chọn tốt tiếp theo.

Plugins ọ bụla na-enwe ike ịchekwa na oge na ihe ndị ọrụ, mana ha dị ka ihe dị ka ọ bụrụ ihe dị iche iche ma ọ bụ ihe dị ka ọ bụrụ ihe dị ka ọ bụrụ ihe dịka ọ bụrụ ihe. Ihe a bụ ịkọwa nkwado WordPress files na database contents. Ndịta dị ka plugins ndị ọzọ, ebe ha dị ka ha na-enwe ike ịnweta backups si services ndị ọzọ dị ka Google Drive ma ọ bụ Dropbox, ma ọ bụ si service object storage dịka S3, Wasabi ma ọ bụ ndị ọzọ dịka ahụ. Plugins ndị a dị nwere ike ịnweta differential backups ma ọ bụ ihe dị ka strategy ịnweta data nkea anaghị anyere nkwado external storage costs.

Ihe ị chọrọ plugin, ị ga-akpọta ịche na ọ dị mma na-enwe ike ịgụ akụkọ multisite (multisite aware). Da ọrụ ha, mgbe backup na-ejikọ, ị ga-anọ nkwado dịka ọ bụrụ ihe dị ka onye ahụ anaghị anyere.

#### Domain and SSL {#plugins}

Ọ dị nwere ike ịkọwa ihe malaya ma ọ bụ domain names na mode _subdomain_ multisite. Ihe a dị ka ihe dị ka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka ọ bụrụ ihe dịka

Mkpụta, e nwere mme nwere ozi dị mbanye maka SSL certificates. Na modii _subdirectory_ mode, ị ga rụma certificate domain ọ bụla nwere ike iji. Ọ nwere ike ịnwụrụ na-akụkọ ndị nwere ike ịrụ (hosting providers) ndị nwere ike iji LetsEncrypt service ọzọ ma ọ bụ nchịkọta ọzọ. Ma ọ bụ, ha nwere ike ịbụ nwere ike ịrụ certificate signing request (CSR) ma ọ bụ nwere ike ịbụ nwere ike ịrụ ha na-akụkọ ndị a na-agbanwe.

Na modii _subdomain_ mode, iji wildcard SSL certificate ga-enwe ike ịgba ọkụ mma na wildcard domain ma ga-gbanwe certificate ahụ bụ ihe dị mbanye (authoritative) maka root domain ma ọ bụ subdomains ọzọ anọ n'ime ọkụkọ ọ bụla ma ọ bụ ewu anyị.

Ma, ị chọrọ ịmata na wildcard SSL certificates ga-enwe ike ịrụ na services dị ka Cloudflare ma ọ bụrụ na ị na enterprise plan ma ị gbanwe entry ahụ chekọta DNS nakanọ, nke a bụrụ na onye ọ bụla caching na optimization ga-anọ.

Ultimate Multisite na-akụkọ (out-of-the-box) na-enwe iheala maka ndụmọdụ a ma ọ bụ ihe ị chọrọ iji Ultimate Multisite, nke na-agbanwe nwere ike ịrụ certificate domain ọzọ. Na oge ahụ, onye akaike (network administrator) ga-anọ na ịgba iki ihe: Ọrụ hosting domain name ma certificate SSL maka domain ahụ.

Manya ndị ọzọ, na-eji Cloudflare bụ oparịta dị mbanye. Ọkọngi na-eme ka domain ha n'Cloudflare, gụny CNAME sí root domain nke Ultimate Multisite ma map their domain n'Ultimate Multisite iji abụghị ịnwale site ha n'ime ịga n'ịjụ n'aka domain custom ha.

N'ụzọ ọzọ, ọ dị m nwere ihe ndị ọzọ dị m nwere ike ịhụ, nke bụrụ ihe kedu ka Ultimate Multisite na-anọcha oparịta Provider ndị dị mbanye Compatible Providers. Ọ bụ onye na-eme ka ihe a bụ na-eji DNS na SSL bụ ihe dị n'aka ọrụ dị mkpa. Mana, ma ọ bụ na-akara Ultimate Multisite na-anọcha ndị a providers ahụ, ihe dị mkpa ahụ na-abụghị dị, ma ọ bụ na-eme ka ihe a na-agba mma site na-abụghị dị, ma ọ bụ na-eme ka ihe a na-agba mma.

#### Plugins {#domain-and-ssl-1}

Ọ dị nwere ike ịbụrịka ịchukwu plugins ndị ọzọ iji gbanwe ihe ha maka ndị khách ha ma sites network. Ọ bụrụ na olany all plugins na-eji WordPress Multisite na Ultimate Multisite? Naa, ọ bụ ihe na-eme ka ọ dị.

Maka ọ bụ na ọtụtụ plugins na-agbaje n'WordPress Multisite, onye chọrọ ịgbaje (activation) na licensing na-abụghị dị na-enyi ahụ.

Ihe mkpa bụ na ọ dị m nwere ike ịhụ ka ihe a na-eji licensing naaka ụba ndị plugins na-agbaje na-akara site ọhụrụ. A na-eme ka, maka ọnọdụ Ọrụ (network administrator) ọ dị m nwere ike ịgbaje license ha ọ bụla plugin na-enyi ọhụrụ.

Biko na-eme ka ị chọpụta na-eji author plugin ahụ ka ihe a ga-agba mma na-eji WordPress Multisite ma ọ bụ ihe ndị dị mkpa na-abịa maka licensing ha.
