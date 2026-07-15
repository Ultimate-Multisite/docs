---
title: 'Loj 7: Tsim Hau Nta Qhov Zoo'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesson 7: Làm Cho Nó Trở Thành Của Bạn

Khách hàng của bạn không bao giờ nên cảm thấy như họ đang dùng "một cái plugin WordPress nào đó." Họ nên cảm thấy như họ đang dùng FitSite -- một nền tảng được xây dựng riêng cho ngành nghề của họ. Bài học này sẽ nói về việc xây dựng thương hiệu (branding), white-labeling, và làm cho nền tảng này giống như một sản phẩm thực sự.

## Chúng Ta Đã Để Lại Ở Đâu {#where-we-left-off}

FitSite đã có luồng thanh toán hoạt động rồi, giúp chủ studio thể hình đi từ chọn gói đến có trang web trực tuyến. Bây giờ chúng ta sẽ làm cho toàn bộ trải nghiệm đó cảm giác như một sản phẩm gắn kết và có thương hiệu riêng.

## Tên Miền Nền Tảng Của Bạn {#your-platform-domain}

Nền tảng của thương hiệu bạn chính là tên miền (domain). Đối với FitSite:

- **Tên miền chính**: `fitsite.com` (trang tiếp thị và gốc mạng lưới của bạn)
- **Trang web khách hàng**: `studioname.fitsite.com` (các subdomain)
- **Tên miền tùy chỉnh**: Khách hàng ở gói Growth và Pro có thể tự ánh xạ tên miền của họ

### Thiết Lập Tên Miền Của Bạn {#setting-up-your-domain}

1. Đăng ký tên miền nền tảng của bạn
2. Trỏ nó đến nhà cung cấp dịch vụ lưu trữ (hosting) của bạn
3. Cấu hình DNS wildcard (`*.fitsite.com`) cho các subdomain của khách hàng
4. Đảm bảo SSL wildcard được kích hoạt

Xem [Cách Cấu Hình Ánh Xạ Tên Miền](/user-guide/domain-mapping/how-to-configure-domain-mapping) để biết hướng dẫn chi tiết.

## White-Labeling Trải Nghiệm Admin {#white-labeling-the-admin-experience}

Khi chủ studio thể hình đăng nhập vào bảng điều khiển (dashboard) trang web của họ, họ nên thấy thương hiệu của bạn, chứ không phải thương hiệu WordPress hay Ultimate Multisite.

### Trang Đăng Nhập Tùy Chỉnh {#custom-login-page}

Tùy chỉnh trang đăng nhập WordPress để hiển thị:

- Logo FitSite của bạn
- Hình ảnh nền phù hợp với thể hình
- Màu sắc thương hiệu của bạn

### Thương Hiệu Bảng Điều Khiển (Dashboard Branding) {#dashboard-branding}

Khuav tiv neejm [Admin Page Creator](/addons/admin-page-creator) addon lossis CSS custom los:

- Thaw logo WordPress nu logo FitSite tawm
- Customize admin color scheme tawm brand tawm
- Add custom dashboard widget tawm fitness-specific quick links thiab help resources

### Custom Admin Pages {#custom-admin-pages}

Tsis txhob txhob tsim admin pages txawm uas muaj haujl tau ua haujl rau cov neeg uas yog studio owners:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

Yu ua li no, yu tsis txhob txhob tsim cov ntaub ntawv uas muaj haujl tau ua haujl rau cov neeg uas yog studio owners: Yu ua li no, yu tsis txhob txhob tsim cov ntaub ntawv uas muaj haujl tau ua haujl rau cov neeg uas yog studio owners.

### Branding Your Communications {#branding-your-communications}

Txhua email, invoice, thiab notification yuav tsim nyomas tawm brand koj.

### System Emails {#system-emails}

Navigete rau **Ultimate Multisite > Settings > Emails** thiab customize system emails txhua yam:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Siv brand colors thiab logo tawm
- **Language**: Fitness-specific txawm mus

Key emails uas yuav tsim nyomas tawm:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### Invoices {#invoices}

Customize invoice templates tiv thaum:

- ຕາໂລໂກ້ ແລະ ສີຂອງຍີ່ຫໍ້ FitSite ຂອງທ່ານ
- ລາຍລະອຽດທຸລະກິດຂອງທ່ານ
- ຊື່ຜະລິດຕະພັນສະເພາະດ້ານຟິດເນສ (ບໍ່ແມ່ນ ID ແຜນການທົ່ວໄປ)

## ເວັບໄຊທີ່面向ລູກຄ້າ (The Customer-Facing Site) {#the-customer-facing-site}

ໂດເມນຫຼັກຂອງເຈົ້າ (`fitsite.com`) ຕ້ອງມີເວັບໄຊເພື່ອໂຄສະນາ ແລະ ຂາຍແພລັດຟອມນີ້. ນີ້ແມ່ນສ່ວນທີ່ແຕກຕ່າງຈາກການບໍລິຫານເຄືອຂ່າຍ Ultimate Multisite -- ມັນແມ່ນໜ້າຕາຂອງທຸລະກິດເຈົ້າຕໍ່ສັງຄົມ.

ໜ້າຫຼັກ:

- **Homepage**: ສະແດງໃຫ້ເຫັນຢ່າງຊັດເຈນວ່າ FitSite ມີປະໂຫຍດແນວໃດກັບທຸລະກິດຟິດເນສ
- **Features**: FitSite ເຮັດຫຍັງໄດ້ແດ່, ອະທິບາຍໃນພາສາຂອງການອອກກຳລັງກາຍ
- **Pricing**: ແຜນသုံးຢ່າງຂອງເຈົ້າພ້ອມປຽບທຽບຄຸນສົມບັດສະເພາະສຳລັບແຕ່ລະຊັ້ນ
- **Examples**: ສະແດງຕົວຢ່າງເວັບໄຊທີ່ຖືກສ້າງຂຶ້ນດ້ວຍແພລັດຟອມນີ້
- **Sign Up**: ລິ້ງໄປຫາແບບຟອມຈ່າຍເງິນຂອງເຈົ້າ

:::tip ເວັບໄຊການຕະຫຼາດຂອງເຈົ້າສາມາດເປັນເວັບໄຊໃນເຄືອຂ່າຍໄດ້ (Your Marketing Site Can Be a Network Site)
ສ້າງເວັບໄຊການຕະຫຼາດຂອງເຈົ້າໃຫ້ເປັນເວັບໄຊໜຶ່ງພາຍໃນເຄືອຂ່າຍຂອງເຈົ້າເອງ. ອັນນີ້ຈະເຮັດໃຫ້ເຈົ້າສາມາດຈັດການມັນຈາກ dashboard ດຽວກັນ ແລະ ສະແດງຄວາມສາມາດຂອງແພລັດຟອມຂອງເຈົ້າໄດ້ຢ່າງຊັດເຈນ.
:::

## ໂດເມນສະເພາະສຳລັບລູກຄ້າ (Custom Domain for Customers) {#custom-domain-for-customers}

ສຳລັບລູກຄ້າທີ່ໃຊ້ແຜນທີ່ມີການໃສ່ໂດເມນສະເພາະ, ໃຫ້ບັນທຶກຂັ້ນຕອນຢ່າງຊັດເຈນ:

1. ລູກຄ້າລົງທະບຽນ ຫຼື ໂອນໂດເມນຂອງເຂົາເຈົ້າໄປຫາຜູ້ຈັດການໂດເມນ (registrar)
2. ລູກຄ້າອັບເດດ DNS ເພື່ອໃຫ້ມັນຊີ້ໄປທີ່ແພລັດຟອມຂອງເຈົ້າ (ໃຫ້ຂໍ້ມູນ record ທີ່ຖືກຕ້ອງທຸກຢ່າງ)
3. Ultimate Multisite ຈະເປັນຜູ້ຈັດການການຈັບຄູ່ໂດເມນ ແລະ SSL

ສ້າງບົດຄວາມຊ່ວຍເຫຼືອ ຫຼື ເຂົ້າໃນ knowledge base ສໍາລັບຂັ້ນຕອນນີ້ໂດຍສະເພາະ, ຂຽນມາໃຫ້ເຈົ້າຂອງສະຕູຟິດເນສທີ່ບໍ່ມີຄວາມຮູ້ດ້ານເຕັກນິກ.

## ເຄືອຂ່າຍ FitSite ຈົນຮອດປັດຈຸບັນ (The FitSite Network So Far) {#the-fitsite-network-so-far}

FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)

## ང་ཚོས་འདིར་བྱས་པ་རེད། (What We Built This Lesson) {#what-we-built-this-lesson}

- **Platform domain thiab DNS** rau khoom uas muaj branding zoo li hnub hauv txhua yam
- **Admin dashboard uas ua rau tsis muaj logo** (white-labeled admin) uas muaj FitSite branding hauv txhua yam
- **Khuab nyob hauv kev sib tx hòa** -- emails, invoices, thiab notifications txhua tus muaj branding zoo li hnub
- **Marketing site** uas tiv thaiv FitSite rau tias uas ua studio fitness muaj

---

**Tsis tas los:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) -- peb tsim kev txaus rau kev sib nrhiav tus neeg tshiab mus ua neej uas zoo siab thiab ua haujlwm.
