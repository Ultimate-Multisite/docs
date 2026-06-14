---
title: Nchegbu Membership na Nkwupụta Isite
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Fading Membership and Site Blocking

A guide this one explains how Ultimate Multisite handles when memberships end, trial periods finish, and how it blocks sites on the front end. We'll look at what happens to a membership from being active all the way to expired, the settings that decide if sites get blocked or not, and what you need to check if sites are still open even after a membership has ended.

## Sikilauwa Status Membership

Every membership in Ultimate Multisite will have one of these statuses:

:::note Free memberships na-imebe n'imebe
Free memberships no-o-emebe ma-a-ah. Ultimate Multisite na-emebe mọọr ha na-imebe na-imebe, so dem no-o-emebe ma-a-ah check expiration-na-imebe ka o-mụ na-imebe, ọ bụrụ na administrator na-eme ka status ha ma ọ bụ mekpụta ya n'imebe ọzọ.
:::

| Status | Ọ dị mma |
|---|---|
| **Pending** | Na-eme ka ị chọrọ ịkwado ọkọ mkpa na email verification |
| **Trialing** | Akụkọ trial na-eme, ma a na-eme ihe ọ bụla na-ahụrụ ọkọ ọzọ |
| **Active** | Na-eme na-eme na-eme na-eme na-eme |
| **On Hold** | Ọkọ nkwado renewal na-eme (invoice na-eme, na-eme ịkwado ọkọ) |
| **Expired** | Oge expiration na-eme ma grace period ahụ na-eme ọzọ ma ọ bụ renewal |
| **Cancelled** | Na-eme ka onye ahụ ma administrator na-eme ka onye ahụ |

### Ọ dị mma na Membershipes na-eme Expired

Ultimate Multisite na-eme check background **every hour** na-eme na-eme na-eme na-eme membershipes na-imebe ọ bụrụ na ọ ga-eme ka expired. Check a na-eme ihe na [Action Scheduler](https://actionscheduler.org/) (no-o WP-Cron ma ọ bụ direct). Na-eme check expiration na-eme **built-in grace period na-eme 3 days** by default. Membership ahụ na-eme ka `expired` ma ọ bụrụ na 3 days na-eme onye date_expiration ya na-eme. Oge a na-eme anọchịrị na-imebe ma ọ bụrụ na ịkwado ọkọ mkpa na-eme before status ha ma berubah.

:::info
Mepụ 3-dịkal grace period (thời gian cho phép hết hạn) na-enweghị dị n'imepụ Grace Period Block Frontend setting a na-ata akụkọ a. Mepụ grace period na-enweghị ihe na-eme ka **status ya na-abanye** na-enweghị active/on-hold na-expired. Mepụ grace period frontend block na-enweghị ihe na-eme ka **site na-abanye** onwe ya n'imepụ status na-abanye.
:::

#### Membership Na-enye Auto-Renewing vs. Non-Auto-Renewing

Ihe a na-enweghị dị mkpa maka ịmekọta ike na-eme ka membership na-abanye:

- **Non-auto-renewing memberships** (`auto_renew = false`): Cron job na-oraa na-enye ihe na-eme ka ọ na-eme toàn lifecycle -- ọ na-eme iji nkwado na-enweghị, ọ na-eme membership ya na-abanye (on-hold), na-ata ya na-expired ma ọ bụrụ na a na-enye nkwado.

- **Auto-renewing memberships** (`auto_renew = true`): Cron expiration check na-agbanyụ ihe ndị a na-enweghị na-eme ka ọ na-eme. Payment gateway (Stripe, PayPal, na ya) na-enweghị ihe na-eme ka ọ na-enye nchịkọta Ultimate Multisite via webhooks ma ọ bụrụ na subscription na-abanye ma ọ bụ na-agbanyụ. Ma ọ bụrụ na webhook ahụ na-enweghị, -- ọ na-eme membership ya na-active a dị ukwuu ma ọ bụrụ na ụbọchị hếtapụdị (expiration date) na-abanye.

### Ọ dị ka ịgba Trial Na-agbanyụ

Mgbe mepụ trial period membership na-abanye na-eme, system na-eme ihe ndị a:

1. Na-eme iji nkwado na-enweghị (pending renewal payment) na-enye nkwado subscription na-akụkọ ya.
2. Na-eme status membership ya na-abanye (trialing) na-abanye (on-hold).
3. Na-enye email notification na-enye nkwado na-enweghị (renewal payment notification email) na-agbanyụ.

Ihe a na-eme na-ahụkọ dị na-ahụkọ ọha (hourly schedule) na-eme ka ihe ndị a, ma **na-enweghị ihe na-eme ka membership na-abanye auto-renewing**. Na-akụkọ trial na-abanye auto-renewing, payment gateway na-enye ihe na-eme ka ọ na-eme transition na-agbanyụ n'ime trial na subscription na-enye nkwado.

## Agbanyụ Access Frontend

By default, an when a membership expires or goes on hold, **only the wp-admin dashboard is restricted**. The site's public frontend remains accessible to visitors. To also block public access, you must enable the **Block Frontend Access** setting.

### Configuring the Setting

Go to **Ultimate Multisite > Settings > Memberships** and turn on **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Here is a full view of the membership settings page:

![Membership settings full page](/img/config/settings-membership-full.png)

There are three related settings that control this behavior:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Master toggle. When turned on, it blocks the public frontend of network sites when their membership is no longer active. | Off |
| **Frontend Block Grace Period** | Number of days to wait after the membership becomes inactive before blocking. Set this to `0` if you want to block immediately. | 0 |
| **Frontend Block Page** | A page on your main site that visitors will be sent to when a site is blocked. If you don't set one, visitors will see a general message saying "Site not available" with a link to the login page for the site admin. | None |

### What Visitors See When a Site Is Blocked

When frontend access is blocked, visitors to the site will either:

1. **Be redirected** to the page you chose in **Frontend Block Page** (if it's set up), or
2. **See a default message**: "This site is not available at the moment." with a link to the login page for the site admin.

Site admins can still log in -- the login page is never blocked.

### What Gets Blocked and When

The blocking behavior depends on the membership status:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (see note below) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- blocked immediately |
| Pending | Not blocked via membership check | -- |

:::warning Membership-a-trialing are not blocked
Ndeewo, kahit na ki ngelebe ya trial period, membership weke status `trialing` haina go block am frontend. Trial must first move to another status (usually `on-hold` through the cron job, then `expired` if unpaid). If you see trialing memberships that no move, check the troubleshooting section below.
:::

:::note Membership cancelled bypass grace period
Membership weke cancelled bypass grace period. Cancelled memberships always blocked once expiration date pass, regardless of whether Block Frontend Access on. The Frontend Block Grace Period no apply to cancelled memberships.
:::

## Troubleshooting: Sites Remaining Accessible After Expiration

If sites still accessible public after membership expire, work through these checks in order:

### 1. Verify the Block Frontend Access Setting Is Enabled

Go to **Ultimate Multisite > Settings > Memberships** and confirm the **Block Frontend Access** toggle is on. This setting is **off by default**, meaning only wp-admin restricted when a membership become inactive.

### 2. Check the Frontend Block Grace Period

Na trang cài đặt đó, kiểm tra giá trị **Frontend Block Grace Period**. Kalau cái này được đặt là 7 ngày chẳng hạn, frontend sẽ không bị chặn cho đến 7 ngày sau ngày hết hạn của membership -- ngay cả khi trạng thái membership đã là `expired` rồi.

Đặt nó thành `0` nếu bạn muốn chặn ngay lập tức sau khi membership ngừng hoạt động.

### 3. Xác nhận Trạng thái Membership Đã Thay đổi Thật Sự

Vào **Ultimate Multisite > Memberships** và kiểm tra trạng thái của membership bị ảnh hưởng. Nếu nó vẫn hiển thị `active` mặc dù ngày hết hạn đã qua, thì việc chuyển đổi trạng thái chưa xảy ra. Các nguyên nhân phổ biến:

- **Membership đang tự gia hạn**: Kiểm tra trường `auto_renew` trên trang chỉnh sửa membership. Nếu auto-renew được bật, cron job hết hạn sẽ bỏ qua membership này -- nó phụ thuộc vào cổng thanh toán để báo cáo lỗi. Kiểm tra dashboard của cổng bạn (Stripe, PayPal) để xác nhận trạng thái đăng ký có khớp với những gì Ultimate Multisite hiển thị không.

- **Cron job chưa chạy**: Xem bước tiếp theo.

### 4. Xác minh Action Scheduler Đang Chạy

Ultimate Multisite sử dụng Action Scheduler cho các cron job của nó. Vào **Tools > Scheduled Actions** trong admin mạng và tìm:

- **`wu_membership_check`** -- Cái này phải xuất hiện như một hành động lặp lại chạy mỗi giờ. Nếu nó bị thiếu, việc kiểm tra membership sẽ không được lên lịch.
- **`wu_async_mark_membership_as_expired`** -- Đây là các tác vụ riêng lẻ để đánh dấu các membership cụ thể là đã hết hạn. Nếu bạn thấy các hành động thất bại ở đây, chúng có thể chứa thông báo lỗi giải thích lý do tại sao.

Nếu bạn thấy các hành động bị kẹt hoặc thất bại, có thể bạn đang gặp vấn đề với Action Scheduler. Các nguyên nhân phổ biến:

- **`DISABLE_WP_CRON` set to `true`** in `wp-config.php` without a system-level cron replacement
- **Traffic site low** -- WP-Cron chỉ chạy khi có người truy cập vào trang web

Para đảm bảo cron chạy ổn định, hãy thiết lập một công việc cron hệ thống:

```bash
# Chạy mỗi 5 phút qua wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Hoặc qua WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kiểm tra sự cố Webhook của Gateway (Gia hạn thành viên tự động)

Nếu gói thành viên đang tự động gia hạn và đăng ký gateway đã bị hủy hoặc thất bại, nhưng Ultimate Multisite vẫn hiển thị là `active` (hoạt động):

- **Stripe**: Vào Stripe Dashboard > Customers để kiểm tra trạng thái đăng ký. Sau đó xác minh điểm cuối webhook (webhook endpoint) có hoạt động dưới mục Developers > Webhooks không. Điểm cuối này phải trỏ về trang web của bạn và hiển thị các lần giao hàng thành công.
- **PayPal**: Kiểm tra trạng thái đăng ký trong tài khoản kinh doanh PayPal của bạn và xác nhận việc gửi IPN/webhook.

Nếu gateway hiển thị đăng ký đã bị hủy nhưng Ultimate Multisite thì không, có thể thông báo webhook đã bị mất. Bạn có thể tự thay đổi trạng thái thành viên trong **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kiểm tra Thời gian Chờ Hết hạn (Cấp độ Cron)

Kiểm tra cron có một khoảng thời gian chờ riêng (mặc định: 3 ngày) trước khi đánh dấu một gói thành viên là đã hết hạn. Điều này tách biệt với khoảng thời gian chờ chặn ở giao diện người dùng (frontend block grace period). Tổng thời gian trước khi trang web bị chặn có thể là:

**Thời gian chờ hết hạn (3 ngày)** + **Khoảng thời gian chờ chặn giao diện người dùng (cài đặt của bạn)** = Độ trễ tổng cộng

Nyesal, na ma ọ bụ ihe dị n'ụta. Na ọkọ dị ọkwa a dị 7 ụbwat (grace period) na frontend, ị ga-anọ mdi 10 ụbwat ka oge `date_expiration` ji site ahụ aka anọrọ.

### 7. Jiji Membership Manually Expire

Ọ bụrụ na ị chọrọ ịgba site ahụ aka hemen n'aka ọkwa cron, ị ga-anọ mdi iji gbachị status membership ahụ:

1. Mene **Ultimate Multisite > Memberships**
2. Click (kpọ) na membership ahụ dị n'aka
3. Change status ahụ na **Expired** (Aka anọrọ) ma ọ bụ **Cancelled** (Gbachị)
4. Click **Save**

Frontend block ahụ ga-anọ mdi mgbe ị chọpụta akụkọ a (na ọ bụrụ na membership ahụ bụ "expired", ọ ga-anọ mdi grace period frontend, ma ọ bụ mgbe ọ bụrụ na ya bụ "cancelled", ọ ga-anọ mdi anọrọ).

## Summary

Oge ọ bụla n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụlọ n'ụl

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtre số ngày ân hạn trước khi đánh dấu tư cách thành viên là hết hạn (mặc định: 3) |
| `wu_schedule_membership_check_interval` | Filtre khoảng thời gian giữa các lần kiểm tra tư cách thành viên (mặc định: 1 giờ) |
| `wu_membership_renewal_days_before_expiring` | Filtre số ngày trước khi hết hạn để tạo thanh toán gia hạn (mặc định: 3) |
| `wu_blocked_site_reactivation_url` | Filtre để cung cấp một URL kích hoạt tùy chỉnh khi một trang bị chặn |
| `wu_membership_is_active` | Filtre xem tư cách thành viên có được coi là đang hoạt động hay không |
| `wu_membership_expired_check_query_params` | Filtre các tham số truy vấn được sử dụng để tìm kiếm các tư cách thành viên đã hết hạn |
| `wu_membership_trial_check_query_params` | Filtre các tham số truy vấn được sử dụng để tìm kiếm các bản dùng thử đã hết hạn |
