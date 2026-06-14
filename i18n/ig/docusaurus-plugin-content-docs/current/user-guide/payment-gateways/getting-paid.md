---
title: Nkwado
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Ndem Vị (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Ultimate Multisite có hệ thống thành viên và thanh toán tích hợp sẵn. Để hệ thống thanh toán của chúng tôi hoạt động, chúng tôi đã tích hợp các cổng thanh toán phổ biến nhất được sử dụng trong thương mại điện tử. Các cổng thanh toán mặc định trong Ultimate Multisite là _Stripe_, _PayPal_ và Thanh toán Thủ công (Manual Payment). Bạn cũng có thể sử dụng _WooCommerce_, _GoCardless_ và _Payfast_ để nhận thanh toán bằng cách cài đặt các add-on tương ứng của chúng.

## Cài Đặt Cơ Bản

Bạn có thể cấu hình bất kỳ cổng thanh toán nào trong phần cài đặt thanh toán của Ultimate Multisite. Bạn có thể tìm nó bằng cách vào **Ultimate Multisite menu > Settings > Payments.**

![Trang cài đặt thanh toán trong Ultimate Multisite hiển thị bảng Thanh toán](/img/config/payments-settings-page.png)

Trước khi bạn thiết lập cổng thanh toán của mình, vui lòng xem qua các cài đặt thanh toán cơ bản mà bạn có thể cấu hình:

**Force auto-rene** **w:** Điều này sẽ đảm bảo rằng khoản thanh toán sẽ tự động lặp lại vào cuối mỗi chu kỳ thanh toán tùy thuộc vào tần suất thanh toán mà người dùng đã chọn.

<!-- Screenshot unavailable: Cài đặt chuyển đổi Force Auto-Renew trên trang cài đặt Thanh toán -->

Ultimate Multisite v2.13.0 kiểm tra xem cổng đang hoạt động có thông tin gia hạn có thể tái sử dụng hay không trước khi lưu một tư cách thành viên định kỳ với tính năng tự động gia hạn được bật. Thông tin gia hạn có thể là đăng ký cổng, thỏa thuận thanh toán, mã kho (vault token) đã lưu hoặc phương thức thanh toán có thể tái sử dụng tương đương. Nếu cổng báo rằng không có thông tin nào có thể sử dụng được, Ultimate Multisite sẽ lưu tư cách thành viên nhưng tắt tính năng tự động gia hạn và ghi lại trạng thái thiếu thông tin đó để quản trị viên hoặc luồng hỗ trợ có thể yêu cầu khách hàng ủy quyền thanh toán lại trước ngày gia hạn.

Ime nwere ike ịgba ọrụ:

Nke a na-eme ihe bụ nsogbu ọ bụla membership ahụ na-agba ọsọ auto-renew (auto-renew) mgbe gateway ahụ na-akọwa ọchịchị ọzọ (one-time payments) anọ. Gateway add-ons ga-alụso ihe a na-eme ka checkout ndị nwere ọsọ dịu (recurring checkouts) na-agbanye credential ọzọ, karịsịrị karịa mgbe gateway ahụ na-akọwa ọsọ dịu (one-time capture) na ụdị ịkwado/subscription payment modes.

**Allow trials without payment** **method:** Ma ị chọrọ ihe a, client ha ga-alụso ihe ọ bụla financial information mgbe registration process ahụ. Oge a ga-anọchịrị karịa mgbe oge trial ahụ na-abụ.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send invoice on payment confirmation:** Ihe a na-eme ka ị nwere ike ịkpọ invoice (invoice) ọzọ mgbe aka anọpụta payment ahụ. Kedu ihe bụ, ndị nkuzi ga-anọchịrị karịa access ebe payment history ha mgbe dashboard subsite ha. Option a bụ ihe na-eme ka oge a na-abụ na Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** Ma ọ bụ, ị ga-alụso code reference payment (payment reference code) ma ọ bụ sequential number scheme. Ma ị chọrọ ka ị na-agba code reference payment mgbe ị na-agbanye invoice ha, ị chọrọ ịgbanwe ihe ọ bụla. Ma ị chọrọ ka ị na-agbanye sequential number scheme, ị ga-alụso **next invoice number** (Ihe a bụ ihe ga-anọchịrị karịa invoice number ha mgbe ahụ na-abụ n'ime system ahụ. Oge a ga-anọchịrị karịa ọkụ mgbe invoice ọhụrụ na-agbanye. Ọ ga-anọchịrị karịa ọkụ mgbe invoice ọhụrụ na-agbanye. ị ga-alụso ihe a ma chọrọ ka ị gbanwe ya ma nwere ike ịgbanwe ha mgbe ị chọrọ ka oge sequential number invoice ahụ na-abụ na ihe dị mma) na **invoice number prefix**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ọdịcha na-eme gateway-ah:

Ka ị nweghị setup payment gateways na ọpụrụedụ ( **Ultimate Multisite > Settings > Payments**). A na-eme anọ n'ụlọ ahụ, a ga-anọ n'ụlọ **active payment gateways**, ka ị chọrọ: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ na _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Anyị na-eme oge dị n'ụlọ ọrụ ọ bụla (dedicated article) maka chaque payment gateway ahụ nke ga-anọ n'aka ị chọrọ, a na-eme anọ n'akụkọ ndị a.

Ka ị chọpụta na akaike payment details:

![Payment edit interface](/img/admin/payment-edit.png)

Ebe a na-eme ihe dị kaaka nke akụkọ edit payment ahụ:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ebe a na-eme ihe dịkaaka nke settings payment gateways ahụ kอด:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Setting up Stripe gateway**

**Setting up PayPal gateway**** **

**Setting up manual payments**

Ọ bụrụ na ị chọrọ ka ị ri dị _WooCommerce_ , _GoCardless_ ma ọ bụ _Payfast_ dịkaaka payment gateway ahụ, ị ga-anọ n'ị **install na configure add-ons ha**.

### Ọ dịkaaka install WooCommerce add-on:

Anyị na-eme ka _Stripe_ na _PayPal_ dịghị anọ n'ihi ndụ iwu kacha mma ndị Ultimate Multisite users na ịrụ ọrụ plugin anyị. Ka ọ bụrụ na anyị na-eme add-on maka integrat WooCommerce, nke bụ plugin e-commerce dị çokha. Developers dị n'ụlọ ahụ na ọkụkọ dị iche iche anọrọ maka integrat different payment gateways na ya. Anyị na-eme ihe a maka ịnweta payment gateways ị ga-anọ na Ultimate Multisite billing system.

_**IMPORTANT:** Ultimate Multisite: Integracja WooCommerce kræví, aby WooCommerce bylo aktivováno na minimálně na vašem hlavním sítí._

Nejprve přejděte na stránku s rozšířeními (add-ons). Najdete ji, když přejdete do **Ultimate Multisite > Settings**. Uvidíte tabulku **Add-ons** (Rozšíření). Klikněte na **Check our Add-ons** (Zkontrolujte naše rozšíření).

<!-- Screenshot unavailable: Tabulka add-ons v pravém sloupci nastavení Ultimate Multisite s linkem Check our Add-ons -->

Po kliknutí na **Check our Add-ons**, budete přesměrováni na stránku s rozšířeními. Zde najdete všechny rozšíření Ultimate Multisite. Klikněte na rozšíření **Ultimate Multisite: WooCommerce Integration**.

![Stránka add-ons se seznamem rozšíření Ultimate Multisite včetně WooCommerce Integration](/img/addons/addons-page.png)

Otevře se okno s detaily o rozšíření. Stačí kliknout na **Install Now** (Nainstalovat nyní).

<!-- Screenshot unavailable: Dialog s detaily rozšíření Ultimate Multisite WooCommerce Integration s tlačítkem Install Now -->

Po dokončení instalace budete přesměrováni na stránku s pluginy. Zde stačí kliknout na **Network Activate** (Aktivovat v síti), a rozšíření WooCommerce se aktivuje na vaší síti.

<!-- Screenshot unavailable: Stránka pluginů se linkem Network Activate pro rozšíření WooCommerce Integration -->

Po aktivaci, pokud máte stále nainstalovaný a aktivovaný plugin WooCommerce na vašem webu, obdržíte připomínku.

<!-- Screenshot unavailable: Administrativní upozornění, které administrátora připomíná nainstalovat a aktivovat plugin WooCommerce -->

Pro více informací o rozšíření WooCommerce Integration, **klikněte zde**.

### Jak nainstalovat rozšíření GoCardless:

Các bước để cài đặt add-on _GoCardless_ gần như giống hệt như add-on _WooCommerce_. Hãy vào trang add-ons và chọn add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Trang add-ons với add-on Ultimate Multisite GoCardless Gateway được tô sáng -->

Cửa sổ add-on sẽ hiện ra. Nhấn vào **Install Now** (Cài đặt Ngay).

<!-- Screenshot unavailable: Hộp thoại chi tiết add-on Ultimate Multisite GoCardless Gateway với nút Install Now -->

Sau khi cài đặt xong, bạn sẽ được chuyển hướng đến trang plugins. Ở đó, chỉ cần nhấn vào **Network Activate** (Kích hoạt Mạng) và add-on _GoCardless_ sẽ được kích hoạt trên mạng của bạn.

<!-- Screenshot unavailable: Trang plugins với liên kết Network Activate cho add-on GoCardless Gateway -->

Để biết cách bắt đầu sử dụng gateway _GoCardless_, **đọc bài viết này**.

### Cách cài đặt add-on Payfast:

Vào trang add-ons và chọn add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Trang add-ons với add-on Ultimate Multisite Payfast Gateway được tô sáng -->

Cửa sổ add-on sẽ hiện ra. Nhấn vào **Install Now** (Cài đặt Ngay).

<!-- Screenshot unavailable: Hộp thoại chi tiết add-on Ultimate Multisite Payfast Gateway với nút Install Now -->

Sau khi cài đặt xong, bạn sẽ được chuyển hướng đến trang plugins. Ở đó, chỉ cần nhấn vào **Network Activate** (Kích hoạt Mạng) và add-on _Payfast_ sẽ được kích hoạt trên mạng của bạn.

<!-- Screenshot unavailable: Trang plugins với liên kết Network Activate cho add-on Payfast Gateway -->
