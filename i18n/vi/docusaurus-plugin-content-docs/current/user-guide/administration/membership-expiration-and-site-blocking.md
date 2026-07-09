---
title: Hết hạn thành viên và chặn trang web
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Hết hạn Thành viên và Chặn Trang Web {#membership-expiration-and-site-blocking}

Hướng dẫn này giải thích cách Ultimate Multisite xử lý việc hết hạn thành viên, kết thúc thời gian dùng thử và chặn truy cập trang web ở frontend. Nó bao gồm toàn bộ vòng đời của một thành viên, từ trạng thái hoạt động đến hết hạn, các cài đặt kiểm soát việc có chặn trang web hay không, và những điều cần kiểm tra khi trang web vẫn truy cập được sau khi thành viên hết hạn.

## Vòng đời Trạng thái Thành viên {#membership-status-lifecycle}

Mọi thành viên trong Ultimate Multisite đều có một trong các trạng thái sau:

:::note Thành viên Miễn phí là trọn đời
Thành viên miễn phí sẽ không tự động hết hạn. Ultimate Multisite coi chúng là quyền truy cập trọn đời, vì vậy chúng sẽ không được tính trong các kiểm tra hết hạn trừ khi quản trị viên thay đổi trạng thái hoặc chuyển khách hàng sang sản phẩm khác.
:::

| Status | Ý nghĩa |
|---|---|
| **Pending** | Đang chờ thanh toán lần đầu hoặc xác minh email |
| **Trialing** | Thời gian dùng thử đang hoạt động, chưa thu phí |
| **Active** | Đã thanh toán và còn hiệu lực |
| **On Hold** | Đang chờ thanh toán gia hạn (hóa đơn đã tạo, chờ thanh toán) |
| **Expired** | Đã qua ngày hết hạn và thời gian ân hạn mà không gia hạn |
| **Cancelled** | Bị khách hàng hoặc quản trị viên hủy rõ ràng |

### Cách Thành viên Chuyển sang Trạng thái Hết hạn {#how-memberships-transition-to-expired}

Ultimate Multisite chạy một kiểm tra nền (background check) **mỗi giờ** để tìm các thành viên cần được đánh dấu là hết hạn. Kiểm tra này sử dụng [Action Scheduler](https://actionscheduler.org/) (không phải WP-Cron trực tiếp) và chạy dưới dạng hành động theo lịch `wu_membership_check`.

Kiểm tra hết hạn có **thời gian ân hạn tích hợp là 3 ngày** theo mặc định. Một thành viên sẽ không được đánh dấu là `expired` cho đến 3 ngày sau khi `date_expiration` của nó trôi qua. Điều này cho khách hàng thời gian để hoàn tất việc thanh toán trễ trước khi trạng thái của họ thay đổi.

:::info
Thời gian ân hạn hết hạn 3 ngày này là riêng biệt với cài đặt Thời gian ân hạn chặn Frontend (Frontend Block Grace Period) được mô tả bên dưới. Thời gian ân hạn hết hạn kiểm soát khi **trạng thái thay đổi** từ active/on-hold sang expired. Thời gian ân hạn chặn frontend kiểm soát khi **trang web bị chặn** sau khi trạng thái đã thay đổi.
:::

#### Thành viên Tự động Gia hạn và Không Tự động Gia hạn {#auto-renewing-vs-non-auto-renewing-memberships}

Sự khác biệt này rất quan trọng để hiểu hành vi hết hạn:

- **Thành viên không tự động gia hạn** (`auto_renew = false`): Công việc cron hàng giờ sẽ xử lý toàn bộ vòng đời — nó tạo các khoản thanh toán gia hạn, chuyển thành viên sang trạng thái on-hold, và cuối cùng đánh dấu là expired nếu không nhận được thanh toán.

- **Thành viên tự động gia hạn** (`auto_renew = true`): Kiểm tra hết hạn cron **sẽ bỏ qua những thành viên này**. Cổng thanh toán (Stripe, PayPal, v.v.) được kỳ vọng sẽ thông báo cho Ultimate Multisite qua webhooks khi đăng ký bị lỗi hoặc bị hủy. Nếu không nhận được webhook — do endpoint cấu hình sai, cổng thanh toán bị gián đoạn, hoặc đăng ký bị hủy bên ngoài hệ thống — thành viên có thể vẫn ở trạng thái `active` vô thời hạn ngay cả sau khi ngày hết hạn đã qua.

### Cách Thời gian Dùng thử Kết thúc {#how-trials-end}

Khi thời gian dùng thử của một thành viên kết thúc, hệ thống sẽ:

1. Tạo một khoản thanh toán gia hạn đang chờ xử lý với toàn bộ số tiền đăng ký.
2. Chuyển trạng thái thành viên từ `trialing` sang `on-hold`.
3. Gửi email thông báo thanh toán gia hạn cho khách hàng.

Quá trình này chạy theo lịch hàng giờ giống như kiểm tra hết hạn thông thường, nhưng **chỉ áp dụng cho các thành viên không tự động gia hạn**. Đối với các bản dùng thử tự động gia hạn, cổng thanh toán sẽ xử lý việc chuyển đổi từ dùng thử sang đăng ký trả phí.

## Chặn Truy cập Frontend {#block-frontend-access}

Theo mặc định, khi một thành viên hết hạn hoặc chuyển sang trạng thái on hold, **chỉ bảng điều khiển wp-admin bị hạn chế**. Frontend công cộng của trang web vẫn có thể truy cập được đối với khách truy cập. Để chặn truy cập công cộng, bạn phải bật cài đặt **Block Frontend Access**.

### Cấu hình Cài đặt {#configuring-the-setting}

Truy cập **Ultimate Multisite > Settings > Memberships** và bật **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Đây là chế độ xem đầy đủ của trang cài đặt thành viên:

![Membership settings full page](/img/config/settings-membership-full.png)

Ba cài đặt liên quan kiểm soát hành vi này:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Công tắc chính. Khi được bật, nó sẽ chặn frontend công cộng của các trang web mạng khi thành viên của chúng không còn hoạt động. | Off |
| **Frontend Block Grace Period** | Số ngày chờ sau khi thành viên không hoạt động trước khi chặn. Đặt là `0` để chặn ngay lập tức. | 0 |
| **Frontend Block Page** | Một trang trên trang web chính để chuyển hướng khách truy cập đến khi trang web bị chặn. Nếu không đặt, khách truy cập sẽ thấy thông báo chung "Site not available". | None |

### Khách Truy cập Thấy Gì Khi Trang Web Bị Chặn {#what-visitors-see-when-a-site-is-blocked}

Khi truy cập frontend bị chặn, khách truy cập vào trang web sẽ:

1. **Được chuyển hướng** đến trang bạn đã chọn trong **Frontend Block Page** (nếu được cấu hình), hoặc
2. **Thấy thông báo mặc định**: "This site is not available at the moment." kèm theo liên kết đến trang đăng nhập dành cho quản trị viên trang web.

Quản trị viên trang web vẫn có thể đăng nhập — trang đăng nhập không bao giờ bị chặn.

### Cái Gì Bị Chặn và Khi Nào {#what-gets-blocked-and-when}

Hành vi chặn phụ thuộc vào trạng thái thành viên:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Không | -- |
| Trialing | **Không** (xem ghi chú bên dưới) | -- |
| On Hold | Được coi là hoạt động -- không bị chặn | -- |
| Expired | **Có**, nếu Block Frontend Access được bật | Có |
| Cancelled | **Có**, luôn luôn (bất kể cài đặt nào) | **Không** -- bị chặn ngay lập tức |
| Pending | Không bị chặn qua kiểm tra thành viên | -- |

:::warning Thành viên dùng thử không bị chặn
Ngay cả khi thời gian dùng thử đã kết thúc, thành viên có trạng thái `trialing` sẽ **không** bị chặn trên frontend. Bản dùng thử phải chuyển sang trạng thái khác trước (thường là `on-hold` qua cron job, sau đó là `expired` nếu không thanh toán). Nếu bạn thấy các thành viên dùng thử chưa chuyển trạng thái, hãy kiểm tra phần khắc phục sự cố bên dưới.
:::

:::note Thành viên bị hủy bỏ bỏ qua thời gian ân hạn
Các thành viên bị hủy bỏ luôn bị chặn ngay sau khi ngày hết hạn trôi qua, bất kể Block Frontend Access có được bật hay không. Thời gian ân hạn chặn Frontend không áp dụng cho các thành viên bị hủy bỏ.
:::

## Khắc phục sự cố: Trang web vẫn truy cập được sau khi hết hạn {#troubleshooting-sites-remaining-accessible-after-expiration}

Nếu các trang web vẫn công khai truy cập được sau khi thành viên hết hạn, hãy thực hiện các bước kiểm tra sau theo thứ tự:

### 1. Xác minh Cài đặt Block Frontend Access đã được bật {#1-verify-the-block-frontend-access-setting-is-enabled}

Truy cập **Ultimate Multisite > Settings > Memberships** và xác nhận công tắc **Block Frontend Access** đã được bật. Cài đặt này **mặc định là tắt**, nghĩa là chỉ wp-admin bị hạn chế khi thành viên không hoạt động.

### 2. Kiểm tra Thời gian ân hạn chặn Frontend {#2-check-the-frontend-block-grace-period}

Trên cùng trang cài đặt, kiểm tra giá trị **Frontend Block Grace Period**. Nếu giá trị này được đặt là 7 ngày, ví dụ, frontend sẽ không bị chặn cho đến 7 ngày sau ngày hết hạn của thành viên — ngay cả khi trạng thái thành viên đã là `expired`.

Hãy đặt giá trị này là `0` nếu bạn muốn chặn ngay lập tức sau khi thành viên không hoạt động.

### 3. Xác nhận Trạng thái Thành viên đã Thực sự Thay đổi {#3-confirm-the-membership-status-has-actually-changed}

Truy cập **Ultimate Multisite > Memberships** và kiểm tra trạng thái của thành viên bị ảnh hưởng. Nếu nó vẫn hiển thị `active` mặc dù ngày hết hạn đã qua, nghĩa là quá trình chuyển trạng thái chưa xảy ra. Các nguyên nhân phổ biến:

- **Thành viên tự động gia hạn**: Kiểm tra trường `auto_renew` trên trang chỉnh sửa thành viên. Nếu tự động gia hạn được bật, cron hết hạn sẽ bỏ qua thành viên này — nó dựa vào cổng thanh toán để báo cáo việc thất bại. Kiểm tra dashboard cổng thanh toán của bạn (Stripe, PayPal) để xác nhận trạng thái đăng ký khớp với những gì Ultimate Multisite hiển thị.

- **Cron job chưa chạy**: Xem bước tiếp theo.

### 4. Xác minh Action Scheduler đang chạy {#4-verify-action-scheduler-is-running}

Ultimate Multisite sử dụng Action Scheduler cho các công việc cron của nó. Truy cập **Tools > Scheduled Actions** trong admin mạng và tìm kiếm:

- **`wu_membership_check`** — Hành động này nên xuất hiện dưới dạng hành động định kỳ chạy mỗi giờ. Nếu nó bị thiếu, các kiểm tra thành viên không được lên lịch.
- **`wu_async_mark_membership_as_expired`** — Đây là các tác vụ riêng lẻ để đánh dấu các thành viên là hết hạn. Nếu bạn thấy các hành động thất bại ở đây, chúng có thể chứa các thông báo lỗi giải thích lý do.

Nếu bạn thấy các hành động bị kẹt hoặc thất bại, bạn có thể gặp sự cố với Action Scheduler. Các nguyên nhân phổ biến:

- **`DISABLE_WP_CRON` được đặt là `true`** trong `wp-config.php` mà không có giải pháp thay thế cron cấp hệ thống
- **Lưu lượng truy cập trang web thấp** — WP-Cron chỉ chạy khi có người truy cập trang web

Để đảm bảo việc thực thi cron đáng tin cậy, hãy thiết lập một cron job cấp hệ thống:

```bash
# Chạy mỗi 5 phút qua wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Hoặc qua WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kiểm tra Sự cố Webhook Cổng Thanh toán (Thành viên Tự động Gia hạn) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Nếu thành viên tự động gia hạn và đăng ký cổng thanh toán đã bị hủy hoặc bị lỗi, nhưng Ultimate Multisite vẫn hiển thị nó là `active`:

- **Stripe**: Truy cập Stripe Dashboard > Customers và kiểm tra trạng thái đăng ký. Sau đó xác minh endpoint webhook đang hoạt động trong Developers > Webhooks. Endpoint nên trỏ đến trang web của bạn và hiển thị các lần giao hàng thành công.
- **PayPal**: Kiểm tra trạng thái đăng ký trong tài khoản kinh doanh PayPal của bạn và xác minh việc gửi IPN/webhook.

Nếu cổng thanh toán hiển thị đăng ký đã bị hủy nhưng Ultimate Multisite thì không, có thể thông báo webhook đã bị mất. Bạn có thể thay đổi thủ công trạng thái thành viên trong **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kiểm tra Thời gian ân hạn Hết hạn (Cấp Cron) {#6-check-the-expiration-grace-period-cron-level}

Kiểm tra cron có thời gian ân hạn riêng (mặc định: 3 ngày) trước khi đánh dấu thành viên là hết hạn. Điều này tách biệt với thời gian ân hạn chặn frontend. Tổng thời gian trước khi trang web bị chặn có thể là:

**Thời gian ân hạn hết hạn (3 ngày)** + **Thời gian ân hạn chặn frontend (cài đặt của bạn)** = Tổng độ trễ

Ví dụ, với cài đặt mặc định và thời gian ân hạn frontend là 7 ngày, có thể mất tới 10 ngày sau `date_expiration` trước khi trang web thực sự bị chặn.

### 7. Hủy Hạn Thành viên Thủ công {#7-manually-expire-a-membership}

Nếu bạn cần chặn trang web ngay lập tức mà không cần chờ chu kỳ cron, bạn có thể thay đổi thủ công trạng thái thành viên:

1. Truy cập **Ultimate Multisite > Memberships**
2. Nhấp vào thành viên bị ảnh hưởng
3. Thay đổi trạng thái thành **Expired** hoặc **Cancelled**
4. Nhấp **Save**

Việc chặn frontend sẽ có hiệu lực khi tải trang tiếp theo (tùy thuộc vào Thời gian ân hạn chặn Frontend đối với thành viên hết hạn, hoặc ngay lập tức đối với thành viên bị hủy bỏ).

## Tóm tắt {#summary}

Toàn bộ dòng thời gian từ ngày hết hạn đến khi trang web bị chặn:

```text
date_expiration trôi qua
       |
       v
  [Thời gian ân hạn cron 3 ngày]     <-- thành viên vẫn hiển thị là active/on-hold
       |
       v
  Cron đánh dấu thành viên là "expired"
       |
       v
  [Thời gian ân hạn chặn Frontend]  <-- được cấu hình trong Settings > Memberships
       |
       v
  Frontend của trang web bị chặn
```

Đối với thành viên bị hủy bỏ, quy trình ngắn hơn:

```text
  Thành viên bị hủy
       |
       v
  date_expiration trôi qua (không có thời gian ân hạn)
       |
       v
  Frontend của trang web bị chặn ngay lập tức
```

## Tài liệu dành cho Nhà phát triển {#developer-reference}

Các hook và filter sau cho phép bạn tùy chỉnh hành vi hết hạn và chặn:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Lọc số ngày thời gian ân hạn trước khi đánh dấu thành viên là hết hạn (mặc định: 3) |
| `wu_schedule_membership_check_interval` | Lọc khoảng thời gian giữa các lần kiểm tra thành viên (mặc định: 1 giờ) |
| `wu_membership_renewal_days_before_expiring` | Lọc số ngày trước khi hết hạn để tạo khoản thanh toán gia hạn (mặc định: 3) |
| `wu_blocked_site_reactivation_url` | Lọc để cung cấp URL kích hoạt tùy chỉnh khi trang web bị chặn |
| `wu_membership_is_active` | Lọc xem thành viên có được coi là hoạt động hay không |
| `wu_membership_expired_check_query_params` | Lọc các tham số truy vấn được sử dụng để tìm thành viên hết hạn |
| `wu_membership_trial_check_query_params` | Lọc các tham số truy vấn được sử dụng để tìm bản dùng thử hết hạn |
