---
title: Kedu ihe na ịle n'ụzọdụ mape domain?
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Naa Maakaị Domain Mapping (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến phiên bản Ultimate Multisite 2.x.**_

Một trong những tính năng mạnh mẽ nhất của một mạng lưới cao cấp là khả năng cho khách hàng của chúng ta cơ hội gắn tên miền cấp cao (top-level domain) vào các trang web của họ. Sau cùng, cái nào trông chuyên nghiệp hơn: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) hay [_**joesbikeshop.com**_](http://joesbikeshop.com)? Đó là lý do tại sao Ultimate Multisite cung cấp tính năng đó sẵn có, mà không cần phải dùng đến các plugin của bên thứ ba.

## Domain mapping là gì?

Như tên nó gợi ý, domain mapping là khả năng mà Ultimate Multisite mang lại để nhận yêu cầu về một tên miền tùy chỉnh và ánh xạ yêu cầu đó tới trang web tương ứng trong mạng lưới với tên miền cụ thể đó được gắn vào.

### Cách thiết lập domain mapping trên Mạng Ultimate Multisite của bạn

Domain mapping cần có một vài cài đặt từ phía bạn để hoạt động. May mắn thay, Ultimate Multisite tự động hóa công việc vất vả cho bạn để bạn có thể dễ dàng đáp ứng các yêu cầu.

Trong quá trình cài đặt Ultimate Multisite, wizard sẽ tự động sao chép và cài đặt **sunrise.php** vào thư mục được chỉ định. **Wizard sẽ không cho phép bạn tiếp tục cho đến khi bước này hoàn tất**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Điều này có nghĩa là một khi wizard cài đặt Ultimate Multisite đã hoàn tất thiết lập mạng của bạn, bạn có thể bắt đầu ánh xạ tên miền tùy chỉnh ngay lập tức.

Lưu ý rằng domain mapping trong Ultimate Multisite không bắt buộc. Bạn có lựa chọn sử dụng chức năng domain mapping gốc của WordPress Multisite hoặc bất kỳ giải pháp domain mapping nào khác.

Ọ bụrụ na ị chọrọ ka ịdisa (disable) domain mapping nke Ultimate Multisite anọchịrị maka ịkwado ụzọ ndị ọzọ, ị nwere ike ịdisa akụrie a ọkụkọ **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

N'ime akụrie a, ị Ọ nwere ike ịhụ akụrie **Force Admin Redirect**. Akụrie a na-agbanwe gị ka ị chọrọ ka ndị ọrụ gị nwere ike ịnwassị dashboard admin ha n'aka domain custom ha na subdomain ma ọ bụ karị n'aka ha anọchitere anya.

Ọ bụrụ na ị chọrọ **Force redirect to mapped domain**, ndị ọrụ gị ga-anọchitere anya dashboard admin ha n'aka domain custom ha karị nwere ike, ma ọ bụ site a.

Akụrie **Force redirect to** **network domain** ga-agbanwe ihe dị iche iche - ndị ọrụ gị ga-anọchitere anya dashboard ha n'aka subdomain ha, ọbụghị na ha chọrọ ịlog in n'aka domain custom ha.

Ma akụrie **Allow access to the admin by both mapped domain domain and network domain** ga-agbanwe ka ndị ọrụ gị nwere ike ịnwassị dashboard admin ha n'aka subdomain ma ọ bụ site a.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Nwere mgbe dị mbụ ga ịkwado domain custom. Mgbanwe onye ọzọ bụ ịkwado tên domain ahụ n'aka dashboard admin network gị kama super admin ma onye ọzọ bụ dwupụ onye admin subsite anaa n'aka account page.

Ma ọ bụrụ na ị chọrọ ka ị chọrọ ịkwado domain custom ahụ n'ime subsites ha n'aka network gị, ị ga-anọchitere anya ka **DNS settings** tên domain ahụ dị mma.

###

### Ka ọ dị mma DNS settings tên domain ahụ



Para mapeamento funcione, bạn cần đảm bảo rằng tên miền mà bạn định ánh xạ đang trỏ về địa chỉ IP của Mạng (Network) của bạn. Lưu ý là bạn cần địa chỉ IP của Mạng - tức là địa chỉ IP của tên miền nơi Ultimate Multisite được cài đặt - chứ không phải địa chỉ IP của tên miền tùy chỉnh mà bạn muốn ánh xạ. Để tìm địa chỉ IP của một tên miền cụ thể, chúng tôi đề nghị bạn truy cập [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), ví dụ như vậy.

Để ánh xạ tên miền chính xác, bạn cần thêm một **A RECORD** vào cấu hình **DNS** của mình trỏ đến địa chỉ IP đó. Việc quản lý DNS khác nhau rất nhiều giữa các nhà đăng ký tên miền khác nhau, nhưng có rất nhiều hướng dẫn trực tuyến bao quát điều đó nếu bạn tìm kiếm " _Creating A Record on XXXX_ " trong đó XXXX là nhà đăng ký tên miền của bạn (ví dụ: " _Creating A Record on_ _GoDaddy_ ").

Nếu bạn gặp khó khăn khi làm cho việc này hoạt động, **hãy liên hệ với bộ phận hỗ trợ của nhà đăng ký tên miền** và họ sẽ giúp bạn phần này.

Nếu bạn dự định cho phép khách hàng tự ánh xạ tên miền của họ, họ sẽ phải tự thực hiện công việc này. Hãy hướng dẫn họ đến hệ thống hỗ trợ của nhà đăng ký nếu họ không thể tạo A Record.

### Ánh xạ tên miền tùy chỉnh làm Super Admin

Khi bạn đăng nhập với tư cách super admin trên mạng của mình, bạn có thể dễ dàng thêm và quản lý các tên miền tùy chỉnh bằng cách vào mục **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

N'aka trang này, bạn có thể nhấn nút **Add Domain** ở trên cùng và nó sẽ mở ra một cửa sổ modal nơi bạn có thể thiết lập và điền vào **custom domain name** (tên miền tùy chỉnh), **the subsite** (tiểu trang) mà bạn muốn áp dụng tên miền tùy chỉnh đó, và quyết định xem bạn có muốn đặt nó làm **primary domain** (miền chính) hay không (lưu ý là bạn có thể ánh xạ **multiple domain names to one subsite** - nhiều tên miền vào một tiểu trang).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Sau khi điền tất cả thông tin, bạn có thể nhấn nút **Add Existing Domain** ở phía dưới.

Điều này sẽ bắt đầu quá trình kiểm tra và lấy thông tin DNS của tên miền tùy chỉnh đó. Bạn cũng sẽ thấy một log ở cuối trang để theo dõi quy trình nó đang thực hiện. Quá trình này có thể mất vài phút để hoàn tất.

Ultimate Multisite v2.13.0 cũng tự động tạo bản ghi tên miền nội bộ khi một trang web mới được tạo trên máy chủ mà lẽ ra phải được coi là tên miền cho từng trang (per-site domain). Nếu máy chủ đó là tên miền chính của mạng, hoặc một trong các tên miền cơ sở biểu mẫu thanh toán được cấu hình trong trường **Site URL**, thì bản ghi tên miền ánh xạ tự động sẽ bị bỏ qua để tên miền cơ sở dùng chung vẫn luôn sẵn sàng cho mọi trang web sử dụng nó.

Trạng thái **Stage** (Giai đoạn) hoặc trạng thái sẽ thay đổi từ **Checking DNS** (Đang kiểm tra DNS) sang **Ready** (Sẵn sàng) nếu mọi thứ được thiết lập đúng cách.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Nếu bạn nhấp vào tên miền, bạn sẽ có thể xem một vài tùy chọn bên trong nó. Hãy cùng xem nhanh chúng nhé:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Hii na mme stage na domain e nọ. Mgbarị ị chụ domain ah, ọ ga-adị na ọ nọ na stage **Checking DNS**. Nchekwa ah ga-chụ entries DNS ma ọ bụ iji gba ihe ndị ah dị mma. Ndị ah ga-chụ, domain ah ga-adị na stage **Checking SSL**. Ultimate Multisite ga-chụ ma domain ah nwere SSL ma ọ bụ la, ma ọ bụ ga-categorize domain ah na **Ready** ma ọ bụ **Ready (without SSL)**.

**Site:** Subdomain ah dị na aka domain a. Domain ah a map pannara ga-gbanwe ihe ndị a site ah ga-adị.

**Active:** Ị ga-abụghị option a on ma off maka ịgba anọ ma ọ bụ abụghị domain ah.

**Is Primary Domain?:** Ọ bụrụ na ndị bi ọrụ gị nwere domain map pannara dị ukwụ dị ukwụ na-akụkọ site ah. Jiri option a maka ị chụ ọ bụ na domain ah bụ primary domain nke site ah ahanyụ.

**Is Secure?:** Ọ bụ ebe a Ultimate Multisite ga-chụ ma domain ah nwere SSL certificate ma ọ bụ la karịrị gba anọ, on ga-abụghị ya, ị ga-abụghị ya na-load domain ah ma ọ bụ la. Kedu ihe mere na website ah dịghị SSL certificate ma ị chọrọ ka ị force load ya na SSL, ọ ga-anọchi gị errors.

### Mapping custom domain name as Subsite user

Ndị aka site (Subsite administrators) gị nwere ike ịgba custom domain names ji dashboard admin subsite ah dị.

Ma ọ bụ, ị ga-gba ihe a onwe ya n'ime settings **Domain mapping**. Chere screenshot a agoo.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Ị chụ ma ị na-set ma ị na-configure option a n'ime level **Plan** ma ọ bụ product options n'ime **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

When any of those options are enabled and a subsite user is allowed to map custom domain names, the subsite user should see a metabox under the **Account** page called **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

The user can click the **Add Domain** button and it will bring up a modal window with some instructions.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

The user can then click **Next Step** and proceed to add the custom domain name. They can also choose if this will be the primary domain or not.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Click to **Add Domain** will start the process of verifying and fetching the DNS information of the custom domain.

### About Domain Syncing

Domain Syncing na bụ proces na Ultimate Multisite ji adda oname custom domain name n'aka hosting account your as an add-on domain **for the domain mapping to work**.

Domain syncing automatically happens if your hosting provider has integration with the Ultimate Multisite domain mapping feature. Currently, these hosting providers are _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ and _Cpanel._

When a host-provider integration is active, Ultimate Multisite can also enqueue the provider-side DNS or subdomain creation task for newly created sites. If no integration is listening for that task, the background job is skipped to avoid no-op queue entries. DNS and SSL checks for mapped domains continue to run through the normal domain-stage process.

Ka ị chọrọ ịgbanwe akụkọ a na settings nke Ultimate Multisite ọkwa **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Bara ị maara na ọ bụrụ na hosting provider ha bụghị ihe ndị a a gbarwerupụta above, **ịde ya ọ dị mma ka ị sync (gbanwe) domain name ahụ ma ọ bụ jiji ya** n'account hosting-ahụ._
