---
title: Nkwado Ụlọ na Ịgba Ọnụiị
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produk TLDs na Domene na Giá

Produk Domain na cách bạn kiểm soát giá, các loại TLD (Top-Level Domains), quyền riêng tư WHOIS, và việc chọn nhà cung cấp dịch vụ. Mỗi sản phẩm Domain đều là một sản phẩm Ultimate Multisite tiêu chuẩn với một tab **Domain Settings** thêm vào.

## Tạo sản phẩm domain

1. Đi đến **Network Admin › Ultimate Multisite › Products**
2. Nhấn **Add New** (Thêm mới)
3. Đặt loại sản phẩm thành **Domain**
4. Cấu hình tab **Domain Settings** (xem bên dưới)
5. Lưu

Các sản phẩm Domain sẽ xuất hiện với huy hiệu màu tím **Domain** trong danh sách sản phẩm và bạn có thể lọc chúng bằng tab **Domain Products**.

## Tab cài đặt domain

### Nhà cung cấp dịch vụ (Provider)

Chọn nhà đăng ký nào sẽ xử lý việc đăng ký cho sản phẩm này. Mặc định là **Default provider** toàn cầu được thiết lập trong cài đặt Domain Seller.

### Các TLD được hỗ trợ (Supported TLDs)

Để trống để tạo một **catch-all product** (sản phẩm bao quát) áp dụng cho tất cả các TLD không khớp với sản phẩm nào khác.

Nhập danh sách các TLD cách nhau bằng dấu phẩy (ví dụ: `.com, .net, .org`) để tạo một **TLD-specific product** (sản phẩm cụ thể theo TLD) chỉ áp dụng cho các phần mở rộng đó.

**Cách hoạt động của việc khớp sản phẩm:** Khi khách hàng tìm kiếm một domain, addon sẽ chọn sản phẩm khớp cụ thể nhất. Một sản phẩm có `.com` trong danh sách TLD của nó sẽ được ưu tiên hơn so với sản phẩm bao quát. Nếu không có sản phẩm cụ thể theo TLD nào khớp, thì sản phẩm bao quát sẽ được sử dụng. Nếu không có sản phẩm nào tồn tại, tìm kiếm domain sẽ không hiển thị.

### Loại đánh giá (Markup type)

Ba chế độ kiểm soát cách giá bán lẻ của bạn được tính từ chi phí bán buôn:

| Chế độ | Cách hoạt động |
|---|---|
| **Percentage** (Phần trăm) | Cộng thêm một phần trăm vào chi phí bán buôn. Một mức tăng giá 20% trên domain bán buôn $10 sẽ có giá là $12. |
| **Fixed markup** (Đánh giá cố định) | Cộng thêm một số tiền cố định bằng đô la. Một mức tăng giá $5 trên domain $10 sẽ có giá là $15. |
| **Fixed price** (Giá cố định) | Hoàn toàn bỏ qua chi phí bán buôn. Luôn tính theo số tiền bạn nhập vào. |

### Giá giới thiệu (Introductory pricing)

Maka ịgbanwe nkwado mfunwu ọlaị. Rịka **Introductory price** (nkwado nke na ọdịsanyụ 1) a dị n'ụlọ ọjọọ a n'ụlọ, karịta **Renewal price** (nkwado ọdịsanyụ 2+). Ọ bụrụ na ndị nkuzi na-agba obere ikiwa a dị n'ụlọ checkout, ha ga-enwe ike ịhụ obere ahụ mgbe ọdịsanyụ ọzọ.

### WHOIS privacy

Naa ihe na-akọwa ọ bụrụ na e ji nkwado WHOIS privacy anọchara maka domain ndị dị n'ụlọ a nwere.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS privacy ahụ anyị ga-anọchara ma ọ bụ anọchara. |
| **Always Included** | WHOIS privacy ahụ ga-anọchara mgbe ịregistre mgbe ọ bụla ma ọ bụ anọchara nkwado. |
| **Customer Choice** | Oge a na-akọwa mgbe checkout. Rịka **Privacy price** ga-enwe ike ịkwado per year, ma ọ bụ gba ya dị ka $0 iji ịnweta ya dị mazi. |

Maka Namecheap, WHOIS privacy na-agbanwe WhoisGuard (dị mazi mgbe ọ bụla). Maka OpenSRS, ọ na-agbanwe openSRS privacy service (ọ ga-anọchara n'ụlọ ahụ mgbe ịgba nkwado).

---

## TLD import and sync

Nkwado domain ndị a na-agba obere nkwado mfunwu dị n'ụlọ nke a na-akwụsị nkwado ọzọ dị ka onye na-agbanwe. Iji ịrụ ihe a, TLDs (Top-Level Domains) ga-anọchara.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Na-akwụsị mgbe ọ bụla mgbe ọjọọ mgbe ọ na-agbanwe, mgbe ọ dị n'ụlọ ahụ.

Ọ bụrụ na ị na-agbanwe, jiji tab "Domain Settings" nke domain ọzọ anyị ga-enwe ike iji oge TLD picker iji ịhụ TLDs ndị dị n'ụlọ mgbe ọ dị n'ụlọ ahụ.

---

## Auto-renewal

Nkwado domain na-agbanwe na-agba obere nkwado nkuzi:

- Mgbe membership na-agbanwe ma domain na-agbanwe, nkwado domain a ga-anọchara mgbe ọ dị n'ụlọ.
- Nkwado na-agbanwe na-agbanwe na-agba obere payment gateway nke nkuzi ahụ na-akwụsị.
- Nkwado ndị na-agbanwe na-agbanwe ga-anọchara mgbe ọ dị n'ụlọ ma ọ bụ anọchara ya mgbe ọ dị mazi (exponential backoff).
- Email notifications ga-anọchara mgbe a na-agbanwe na-agbanwe, na-agbanwe na-agbanwe mgbe ọ dị mazi.

Email template IDs maka ihe ndị na-agbanwe domain:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Registration domain manual (Admin: Manual domain registration)

Na i mere nwere ịsị domain na aka customer mà dem ha kwesịrị checkout:

1. Mene **Network Admin › Ultimate Multisite › Register Domain**
2. Chụk customer ah ma jikọpọ tên domain
3. Jikọpụta ihe ndị a nke na-akọwa (ọchị, alaka, telefoni)
4. Kværi **Register**

Ihe nwere record domain ah na-agbanwe ma na-link eke aka customer ah.
