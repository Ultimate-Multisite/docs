---
title: |-
  Txhua qauv txais txais thiab txhua qauv txhawv

  Kev txais txais thiab txhawv site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Membership Expiration and Site Blocking {#membership-expiration-and-site-blocking}

Kuv ua le fa'amatalaga fa'amau o le Ultimate Multisite i le fa'amaonia o le membership expiration, trial endings, ma le site blocking o le frontend. O lona fa'amatalaga e fa'amalosia le fa'aopoopo o le membership uma o le active i le expired, o le mga setting e fa'amalosia lava o le mga site, ma o le mea e talano ai pe a ua mafa'aopoopo o le mga site i le fa'aopoopo pa ua mafa'aopoopo o le membership.

## Membership Status Lifecycle {#membership-status-lifecycle}

O le membership uma i Ultimate Multisite e fa'aopoopo i tasi o le suiga sau:

:::note Free memberships are lifetime
Free memberships do not expire automatically. Ultimate Multisite treats them as lifetime access, so they are not included in expiration checks unless an administrator changes their status or moves the customer to another product.
:::

| Status | Meaning |
|---|---|
| **Pending** | Awaiting first payment or email verification |
| **Trialing** | Active trial period, no payment collected yet |
| **Active** | Paid and current |
| **On Hold** | Renewal payment is pending (invoice created, awaiting payment) |
| **Expired** | Past the expiration date and grace period without renewal |
| **Cancelled** | Explicitly cancelled by the customer or admin |

### How Memberships Transition to Expired {#how-memberships-transition-to-expired}

Ultimate Multisite e fa'amalosia le background check **o le tasi i le tau** o le mga membership e talano ai o le mea e latou tatou fa'aopoopo o le expired. O le check lenei e fa'aaogaina o [Action Scheduler](https://actionscheduler.org/) (e le WP-Cron laʻi) ma e fa'amalosia i le scheduled action `wu_membership_check`.

O le expiration check e fa'aopoopo ai o se **grace period o 3 days** o le default. O le membership e fa'aopoopo ai o le status `expired` ae ua mafa'aopoopo o le 3 tasi i le tau ua fa'aopoopo o le `date_expiration`. O lenei mea e fa'amalosia ai o se taimi mo le mga customer e fa'amaonia o se late payment a fa'aopoopo o le status latou.

:::info
3-day expiration grace period (thang tshaw) нь доор дурдсан Frontend Block Grace Period setting-той ялгаатай юм. Expiration grace period нь **status** актив/on-hold-оос expired болж өөрчлөгдөх үеийг зохицуулдаг. Frontend block grace period нь status өөрчлөгдсөөс хойш **сайт хэр хаагдахыг** зохицуулдаг.
:::

#### Авто-салгагдах болон Авто-салгагдахгүй гишүүдийн хуваарь (Memberships) {#auto-renewing-vs-non-auto-renewing-memberships}

Энэ ялгаа нь expiration-ийн зан байдлыг ойлгоход чухал:

- **Авто-салгагдахгүй гишүүдийн хуваарь** (`auto_renew = false`): Чадварлаг cron job нь бүр бүтэн үйл явцыг (lifecycle) зохицуулдаг -- энэ нь шинээр сэлгээний төлбөрийг үүсгэж, гишүүний статусыг on-hold болгож, төлбөр ирэхгүй бол эцэст нь expired гэж тэмдэглэнэ.

- **Авто-салгагдах гишүүдийн хуваарь** (`auto_renew = true`): Cron expiration check нь **тэдгээрээ бүрэн алгасна**. Төлбөрийн хаалтын систем (Stripe, PayPal гэх мэт) нь subscription алдаатай эсвэл цуцлагдсан үед Ultimate Multisite-т webhook ашиглан мэдэгдэхийг хүлээдэг. Хэрэв webhook ирэхгүй бол -- endpoint буруу тохирсон, gateway ажиллахгүй байгаа, эсвэл системээ гадна цуцлагдсан subscription байвал -- expiration date өнгөрсөн ч гишүүний статус `active` байсаар үлддэг.

### Trial-ууд хэр дуусдаг вэ? {#how-trials-end}

Trial-ийн гишүүнчлэл нь trial period-оос дуусахад, систем дараах үйлдлүүдийг хийдэг:

1. Төлбөрийн бүрэн хэмжээтэй pending renewal payment (сэлгээний төлбөр) үүсгэдэг.
2. Гишүүний статусыг `trialing`-оос `on-hold` болгодог.
3. Хэрэглэгчдээ сэлгээний төлбөрийн мэдэгчилсэн email илгээдэг.

Энэ процесс нь ердийн expiration check-тэй ижил цагийн хуваарьтай ажилладаг ч, **зөвхөн авто-салгагдахгүй гишүүдийн хувьд**. Авто-салгагдах trial-ууд нь төлбөрийн хаалтын системээс trial-аас төлөгдсөн subscription руу шилжих үйлдлийг зохицуулдаг.

## Frontend Access-ийг Хүлээн Зөвшөөрөх (Block) {#block-frontend-access}

Default-a, tha membership chu khawm tsoom loss or goh on hold, **tshai wp-admin dashboard loi chawm**. Site public frontend chu thil raugjau rau visitors. To also block public access, chu yuam tsim **Block Frontend Access** setting.

### Configuring the Setting {#configuring-the-setting}

Ultimate Multisite > Settings > Memberships ruv chu, thiab enable **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Noj yuav tsim lub trang membership settings zoo li no:

![Membership settings full page](/img/config/settings-membership-full.png)

Txhua yam uas hloov txawm qhuas yog thiaj kawm yee hauv:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Master toggle. When enabled, blocks the public frontend of network sites when their membership is no longer active. | Off |
| **Frontend Block Grace Period** | Number of days to wait after the membership goes inactive before blocking. Set to `0` to block immediately. | 0 |
| **Frontend Block Page** | A page on the main site to redirect visitors to when a site is blocked. If not set, visitors see a generic "Site not available" message. | None |

### What Visitors See When a Site Is Blocked {#what-visitors-see-when-a-site-is-blocked}

Thaum frontend access chu hloov tsoom, visitors uas mus rau site yuav:

1. **Tsim thov** rau lub trang uas koj tsim hauv **Frontend Block Page** (tha koj tsim), lossis
2. **Muau ib yam lus tsis muaj**: "This site is not available at the moment." thiab muaj link mus rau login page rau site admin.

Site admins yuav muaj lub hanws tau -- login page yuav tsis hloov tsoom.

### What Gets Blocked and When {#what-gets-blocked-and-when}

Blocking behavior chu nyob hauv lub sijhawm membership status:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (see note below) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- blocked immediately |
| Pending | Not blocked via membership check | -- |

:::warning Trialing memberships are not blocked
Even if a trial period has ended, a membership with `trialing` status will **not** be blocked on the frontend. The trial must first transition to another status (typically `on-hold` via the cron job, then `expired` if unpaid). If you are seeing trialing memberships that have not transitioned, check the troubleshooting section below.
:::

:::note Cancelled memberships bypass the grace period
Cancelled memberships are always blocked once the expiration date has passed, regardless of whether Block Frontend Access is enabled. The Frontend Block Grace Period does **not** apply to cancelled memberships.
:::

## Troubleshooting: Sites Remaining Accessible After Expiration {#troubleshooting-sites-remaining-accessible-after-expiration}

If sites remain publicly accessible after a membership expires, work through these checks in order:

### 1. Verify the Block Frontend Access Setting Is Enabled {#1-verify-the-block-frontend-access-setting-is-enabled}

Go to **Ultimate Multisite > Settings > Memberships** and confirm the **Block Frontend Access** toggle is on. This setting is **off by default**, meaning only wp-admin is restricted when a membership becomes inactive.

### 2. Check the Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

ໃນໜ້າການຕັ້ງຄ່າດຽວກັນ, ກວດເບິ່ງຄ່າ **Frontend Block Grace Period** (ໄລຍະເວລາຜ່ອນຜັນຂອງ Frontend Block). ຖ້າຕັ້ງເປັນ 7 ວັນ ເປັນຕົ້ນ, frontend ຈະບໍ່ຖືກປິດຈົນກວ່າ 7 ວັນຫຼັງຈາກວັນໝົດອາຍຸຂອງການເປັນສະມາຊິກ -- ແມ່ນແຕ່ຖ້າສະຖານະສະມາຊິກນັ້ນເປັນ `expired` ແລ້ວກໍຕາມ.

ຕັ້ງຄ່າເປັນ `0` ຖ້າເຈົ້າຕ້ອງການໃຫ້ປິດທັນທີເມື່ອສະມາຊິກບໍ່ມີການເຄື່ອນໄຫວອີກ.

### 3. ກວດສອບວ່າສະຖານະສະມາຊິກໄດ້ປ່ຽນແປງແທ້ຫຼືບໍ່ {#3-confirm-the-membership-status-has-actually-changed}

ໄປທີ່ **Ultimate Multisite > Memberships** ແລະ ກວດເບິ່ງສະຖານະຂອງສະມາຊິກທີ່ຖືກກະທົບ. ຖ້າຫາກມັນຍັງສະແດງເປັນ `active` ເຖິງແມ່ນວ່າວັນໝົດອາຍຸຈະຜ່ານໄປແລ້ວ, ການປ່ຽນສະຖານະນັ້ນບໍ່ໄດ້ເກີດຂຶ້ນ. ສາເຫດທີ່ພົບເລື້ອຍ:

- **ສະມາຊິກກຳລັງຕໍ່ອາຍຸໂດຍອັດຕະໂນມັດ (auto-renew)**: ກວດເບິ່ງໃນຊ່ອງ `auto_renew` ຢູ່ໜ້າແກ້ໄຂສະມາຊິກ. ຖ້າ auto-renew ເປີດໃຊ້, cron job ໝົດອາຍຸຈະຂ້າມສະມາຊິກນີ້ -- ມັນຈະອີງໃສ່ payment gateway (Stripe, PayPal) ເພື່ອລາຍງານຄວາມລົ້ມເຫຼວ. ກວດເບິ່ງ dashboard ຂອງ gateway ຂອງເຈົ້າເພື່ອຢືນຢັນວ່າສະຖານະການສະໝັກແມ່ນກົງກັບສິ່ງທີ່ Ultimate Multisite ສະແດງຢູ່.

- **cron job ຍັງບໍ່ໄດ້ເຮັດວຽກ**: ເບິ່ງຂັ້ນຕອນຕໍ່ໄປ.

### 4. ກວດສອບວ່າ Action Scheduler ກຳລັງເຮັດວຽກຢູ່ບໍ່ {#4-verify-action-scheduler-is-running}

Ultimate Multisite ໃຊ້ Action Scheduler ສຳລັບ cron jobs ຂອງມັນ. ໄປທີ່ **Tools > Scheduled Actions** ໃນ network admin ແລະ ຊອກຫາ:

- **`wu_membership_check`** -- ອັນນີ້ຄວນຈະປາກົດເປັນການເຮັດວຽກຊ້ຳໆ ທຸກໆຊົ່ວໂມງ. ຖ້າຫາກມັນບໍ່ມີ, ການກວດສອບສະມາຊິກກໍບໍ່ໄດ້ຖືກຈັດຕັ້ງໃຫ້ເຮັດວຽກ.
- **`wu_async_mark_membership_as_expired`** -- ອັນນີ້ແມ່ນ task ແຕ່ລະອັນເພື່ອໝາຍວ່າສະມາຊິກໃດໜຶ່ງເປັນ `expired`. ຖ້າເຈົ້າເຫັນ action ທີ່ລົ້ມເຫຼວຢູ່ບ່ອນນີ້, ມັນອາດຈະມີຂໍ້ຄວາມຜິດພາດທີ່ອະທິບາຍວ່າເປັນຫຍັງ.

ຖ້າເຈົ້າເຫັນ action ທີ່ຄ້າງ ຫຼື ລົ້ມເຫຼວ, ເຈົ້າອາດจะมีບັນຫາ Action Scheduler. ສາເຫດທີ່ພົບເລື້ອຍ:

- **`DISABLE_WP_CRON` 设为 `true`** ใน `wp-config.php` โดยที่ไม่มีการแทนที่ cron ລະດັບລະບົບ
- **Traffic website thấp** -- WP-Cron ຈະເຮັດວຽກສະເພາະເວລາທີ່ມີຄົນເຂົ້າເບິ່ງເວັບໄຊເທົ່ານັ້ນ

ເພື່ອໃຫ້ການເຮັດວຽກຂອງ cron ເປັນໄປຢ່າງໜ້າເຊື່ອຖື, ຄວນຕັ້ງຄ່າ system cron job:

```bash
# ດຳເນີນການທຸກໆ 5 ນາທີຜ່ານ wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# ຫຼືຜ່ານ WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. ກວດສອບບັນຫາ Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

ຖ້າການສະໝັກເປັນແບບ auto-renew ແລະ ການສະໝັກຂອງ gateway ຖືກຍົກເລີກ ຫຼື ລົ້ມເຫຼວແລ້ວ, ແຕ່ Ultimate Multisite ຍັງສະແດງວ່າ `active`:

- **Stripe**: ໄປທີ່ Stripe Dashboard > Customers ແລະ ກວດສອບສະຖານະການສະໝັກ. ຈາກນັ້ນໃຫ້ຢືນຢັນວ່າ webhook endpoint ເປັນກິດຈະກໍາຢູ່ພາຍໃຕ້ Developers > Webhooks. Endpoint ນັ້ນຄວນຊີ້ໄປທີ່ເວັບໄຊຂອງທ່ານ ແລະ ສະແດງການສົ່ງຂໍ້ມູນທີ່ສຳເລັດ.
- **PayPal**: ກວດສອບສະຖານະການສະໝັກໃນບັນຊີທຸລະກິດ PayPal ຂອງທ່ານ ແລະ ຢືນຢັນການຈັດສົ່ງ IPN/webhook.

ຖ້າ gateway ສະແດງວ່າການສະໝັກຖືກຍົກເລີກ ແຕ່ Ultimate Multisite ບໍ່ໄດ້ສະແດງ, ຄໍາແນະນໍາ webhook ອາດຈະສູນຫາຍໄປ. ເຈົ້າສາມາດປ່ຽນສະຖານະການເປັນ member ດ້ວຍຕົນເອງໃນ **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. ກວດສອບໄລຍະເວລາຜ່ານຂອງ Expiration (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

ການກວດສອບ cron ມີໄລຍະເວລາຜ່ານຂອງມັນເອງ (ຄ່າເລີ່ມຕົ້ນ: 3 ວັນ) ກ່ອນທີ່ຈະໝາຍວ່າການສະໝັກນັ້ນໝົດອາຍຸ. ນີ້ແມ່ນແຕກຕ່າງຈາກໄລຍະເວລາຜ່ານຂອງ frontend block. ເວລາທັງໝົດກ່ອນທີ່ເວັບໄຊຈະຖືກປິດສາມາດເປັນ:

**Expiration grace period (3 ວັນ)** + **Frontend block grace period (ການຕັ້ງຄ່າຂອງເຈົ້າ)** = Total delay

### 7. ມື້ໝົດສະເໝີສະມາຊິກ (Manually Expire a Membership) {#7-manually-expire-a-membership}

ຖ້າເຈົ້າຕ້ອງການປິດໄຊທ໌ດ່ວນໂດຍບໍ່ຕ້ອງລໍຖ້າໃຫ້ cron cycle ເຮັດ, ເຈົ້າສາມາດປ່ຽນສະຖານະຂອງສະມາຊິກໄດ້ດ້ວຍຕົນເອງ:

1. ໄປທີ່ **Ultimate Multisite > Memberships**
2. ກົດໃສ່ສະມາຊິກທີ່ຕ້ອງການປິດ
3. ປ່ຽນສະຖານະເປັນ **Expired** (ໝົດອາຍຸ) ຫຼື **Cancelled** (ຍົກເລີກ)
4. ກົດ **Save**

ການປິດໄຊທ໌ທາງໜ້າ (frontend block) ຈະມີຜົນໃນການໂຫຼດໜ້າຕໍ່ໄປ (ຂຶ້ນກັບ Frontend Block Grace Period ສຳລັບສະມາຊິກທີ່ໝົດອາຍຸ, ຫຼື ທັນທີສຳລັບສະມາຊິກທີ່ຍົກເລີກ).

## ສະຫຼຸບ (Summary) {#summary}

ໄລຍະເວລາເຕັມຕັ້ງແຕ່ວັນໝົດອາຍຸຈົນເຖິງການປິດໄຊທ໌:

```text
date_expiration ຜ່ານໄປ
       |
       v
  [3-day cron grace period]     <-- ສະມາຊິກຍັງສະແດງວ່າ active/on-hold
       |
       v
  Cron ເຮັດໃຫ້ສະມາຊິກເປັນ "expired" (ໝົດອາຍຸ)
       |
       v
  [Frontend Block Grace Period]  <-- ຕັ້ງຄ່າໄວ້ໃນ Settings > Memberships
       |
       v
  ໄຊທ໌ທາງໜ້າຖືກປິດ
```

ສຳລັບສະມາຊິກທີ່ຍົກເລີກ, ຂັ້ນຕອນຈະສັ້ນກວ່າ:

```text
  Membership cancelled (ສະມາຊິກຖືກຍົກເລີກ)
       |
       v
  date_expiration ຜ່ານໄປ (ບໍ່ມີ grace period)
       |
       v
  ໄຊທ໌ທາງໜ້າຖືກປິດທັນທີ
```

## ເອກະສານອ້າງອີງສຳລັບນັກພັດທະນາ (Developer Reference) {#developer-reference}

Hooks ແລະ Filters ຂ້າງລຸ່ມນີ້ຈະຊ່ວຍໃຫ້ເຈົ້າສາມາດປັບປ່ຽນການເຮັດວຽກຂອງການໝົດອາຍຸ ແລະ ການປິດໄຊທ໌ໄດ້:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Membership-aaw (membership) chuu grace period days-aaw (days) nu filter. Membership-aaw (membership) khua thim (mark) expired aaw (days) loh, default: 3. |
| `wu_schedule_membership_check_interval` | Membership check-aaw (checks) chuu interval-aaw (interval) loh, default: 1 hour. |
| `wu_membership_renewal_days_before_expiring` | Renewal payment-aaw (payment) chuu membership expiration chuu days-aaw (days) loh, default: 3. |
| `wu_blocked_site_reactivation_url` | Site blocked chuu custom reactivation URL chuu provide loh when site aaw (site) block chuu. |
| `wu_membership_is_active` | Membership is active chuu check-aaw (check). |
| `wu_membership_expired_check_query_params` | Expired membership find chuu query parameters chuu filter loh. |
| `wu_membership_trial_check_query_params` | Expired trial find chuu query parameters chuu filter loh. |
