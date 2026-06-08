---
title: |-
  Loj 12: Tsim Baws

  Hmoob tsis muaj qhov tseeb loj rau txhua lub neej.
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Bài học thứ 12: Vận hành Kinh doanh

Một nền tảng không phải là một dự án bạn hoàn thành -- nó là một công việc kinh doanh bạn vận hành. Bài học này sẽ nói về các hoạt động hàng ngày để quản lý FitSite: hỗ trợ, thanh toán, bảo trì và giữ cho khách hàng vui vẻ.

## Ta đã dừng ở đâu

FitSite đã chạy rồi và khách hàng đang đăng ký. Bây giờ bạn cần phải vận hành nó một cách bền vững.

## Hoạt động Hàng ngày

### Giám sát (Monitoring)

Kiểm tra những điều này mỗi ngày (hoặc thiết lập cảnh báo):

- **Uptime**: Nền tảng có truy cập được không? Hãy dùng dịch vụ theo dõi thời gian hoạt động (uptime monitoring service).
- **Đăng ký mới**: Hôm nay có bao nhiêu khách hàng mới đăng ký?
- **Thanh toán thất bại**: Có lỗi thanh toán nào cần chú ý không?
- **Yêu cầu hỗ trợ**: Có câu hỏi nào của khách hàng chưa được trả lời không?

### Hỗ trợ Khách hàng (Customer Support)

Việc bạn tập trung vào một lĩnh vực cụ thể là một lợi thế ở đây. Vì tất cả khách hàng của bạn đều là các phòng tập thể dục, bạn sẽ thấy những câu hỏi giống nhau lặp đi lặp lại:

**Những câu hỏi thường gặp mà bạn sẽ nhận được:**

- "Làm sao tôi cập nhật lịch lớp học của mình?"
- "Tôi có thể thay đổi màu sắc trang web của tôi không?"
- "Làm thế nào để thêm huấn luyện viên mới vào trang web của tôi?"
- "Tên miền của tôi không hoạt động"
- "Làm thế nào để hủy/nâng cấp gói của tôi?"

Hãy xây dựng cơ sở kiến thức (đã bắt đầu ở Bài học 8) xung quanh những câu hỏi lặp đi lặp lại này. Mọi ticket hỗ trợ mà có thể trở thành một bài viết trong cơ sở kiến thức đều là tín hiệu để bạn viết bài đó.

### Các Cấp độ Hỗ trợ (Support Tiers)

Khi bạn phát triển, hãy cấu trúc việc hỗ trợ theo gói dịch vụ:

| Plan | Support Level | Response Time |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 hours |
| Growth | Email support | 24 hours |
| Pro | Priority email + onboarding call | 4 hours |

[Support Tickets addon](/addons/support-tickets) нь таны платформын доторх тусламжийн хүсэлтүүдийг удирдах боломжийг олгоно.

## Billing Operations (Төлбөрийн үйл ажиллагаа)

### Recurring Payments (Давталттай төлбөр хийх)

Ultimate Multisite нь таны төлбөрийн хаалтын систем (payment gateway)-ээр дамжуулан автоматаар давталттай төлбөрийг зохион байгуулдаг. Та дараах зүйлсийг хянах үүрэгтэй:

- **Failed payments** (Төлбөр амжилтгүй болсон): Хурдан дагаж үзээрэй. Ихэнх алдаа нь хугацаа дууссан карт байдаг, зориулалттай цуцлал биш юм.
- **Dunning** (Дахин оролцох/Хүсэлт давтах): Төвөгтэй дахин оролцох логикийг төлбөрийн хаалтын системээрээ тохируулна уу (Stripe энэ талд сайн ажилладаг).
- **Cancellation requests** (Цуцлалын хүсэлтүүд): Хэрэглэгчид яагаад гарахыг ойлгох хэрэгтэй. Бүх цуцлал нь өгөгдсөн мэдээлэл болно.

### Managing Memberships (Гишүүнчлэлийг удирдах)

Дараах зүйлсийг хийхийн тулд **Ultimate Multisite > Memberships** руу орно:

- Бүх идэвхтэй бүртгэлүүдийг харах
- Шинэ төлөв (upgrade) болон хуучин төлөвт (downgrade) өгөх хүсэлтийг зохицуулах
- Шаардлагатай үед буцаагдал (refund) хийх
- Туршилт дууссан хугацааг удирдах

Бүх дэлгэрэнгүй мэдээллийн тухай [Managing Memberships](/user-guide/administration/managing-memberships)-ийг үзнэ үү.

### Invoicing (Тооцоо гаргах)

Бүх төлбөрийн хувьд тохирох байдлаар тооцоо гаргаж байгаа эсэхийг шалгана уу. Хэрэглэгчдэд бизнесийн зардлыг тайлагнах зорилгоор тооцоо хэрэгтэй байж болно. [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices)-ийг үзнэ үү.

## Platform Maintenance (Платформыг хадгалах)

### WordPress and Plugin Updates (WordPress болон Плагины шинэчлэлт)

Сүлжээний администратор гэдэг нь дараах зүйлсээ хариуцдаг:

- **WordPress core updates**: ຢ່າລືມທົດສອບໃນເວັບໄຊສະຕິງ (staging site) ກ່ອນທີ່ຈະເອົາໄປໃຊ້ກັບ production
- **Plugin updates**: ເວລາຄືກັນ -- ທົດສອບກ່ອນ, ແລ້ວຈຶ່ງເອົາມາໃຊ້ທົ່ວເຄືອຂ່າຍ
- **Theme updates**: ກວດສອບວ່າ template ຍັງເບິ່ງຖືກຕ້ອງຫຼັງຈາກອັບເດດ theme ແລ້ວບໍ່
- **Ultimate Multisite updates**: ອ່ານ changelog ແລະ ທົດສອບກ່ອນທີ່ຈະອັບເດດ

:::warning ຫ້າມອັບເດດໃນ production ໂດຍບໍ່ທົດສອບ
ການອັບເດດທີ່ຜິດພາດຈະສົ່ງຜົນກະທົບຕໍ່ເວັບໄຊຂອງລູກຄ້າທຸກຄົນໃນເຄືອຂ່າຍຂອງທ່ານ. ຄວນທົດສອບການອັບເດດໃສ່ສະບຽບ (staging copy) ຂອງເຄືອຂ່າຍທ່ານກ່ອນສະເໝີ.
:::

### ຄວາມປອດໄພ (Security)

- ຮັກສາ software ທຸກຢ່າງໃຫ້ເປັນເວລາຍັງດີ
- ໃຊ້ password ແຂງ ແລະ two-factor authentication ສຳລັບ admin accounts
- ສັງເກດການເຄື່ອນໄຫວທີ່ໜ້າສົງໄສ
- ມີແຜນຮັບມືກັບເຫດການດ້ານຄວາມປອດໄພ

### ປະສິດທິພາບ (Performance)

ເມື່ອເຄືອຂ່າຍຂອງທ່ານເຕີບໂຕ, ຄວນຕິດຕາມ:

- **ເວລາໂຫຼດໜ້າ (Page load times)**: ເວັບໄຊຂອງລູກຄ້າໄວບໍ່?
- **ການໃຊ້ຊັບພະຍາກອນຂອງ Server**: CPU, memory, disk space
- **ປະສິດທິພາບຂອງ Database**: ເຄືອຂ່າຍໃຫຍ່ຕ້ອງການການປັບປຸງ database ໃຫ້ດີຂຶ້ນຕາມເວລາ

ຄວນພິຈາລະນາຕິດຕັ້ງ caching (page cache, object cache) ແລະ CDN ຖ້າທ່ານຍັງບໍ່ໄດ້ເຮັດ. [Cloudflare integration](/user-guide/host-integrations/cloudflare) ຊ່ວຍຈັດການສ່ວນໃຫຍ່ຂອງເລື່ອງນີ້ໃຫ້ທ່ານແລ້ວ.

## ການຄຸ້ມຄອງວົງຈອນຊີວິດລູກຄ້າ (Customer Lifecycle Management)

### ຫຼຸດອັດຕາການລາອອກ (Reducing Churn)

Churn ແມ່ນເປີເຊັນຂອງລູກຄ້າທີ່ຍົກເລີກການສະໝັກໃນແຕ່ລະເດືອນ. ສຳລັບທຸລະກິດການສະໝັກໃຊ້, ການຫຼຸດ churn ກໍສຳຄັນເທົ່າກັບການຫາລູກຄ້າໃໝ່.

**ສາເຫດທົ່ວໄປທີ່ເຮັດໃຫ້ລູກຄ້າ fitness studio ຍົກເລີກການສະໝັກ:**

- Òa tsis pa thav txhob ti ua li cas los ntawm platform → tsim khoom onboarding zoo dua
- Cov cov ntawv tsoom tsis muaj kuvv ti tsis zoo rau hauv qhov no → tsim khoom template zoo dua
- Cov neeg tsis pa pa ti muaj utlaw (value) → tsim khoom features lossis qhia txog utlaw
- Cov neeg tsis pa pa cov ntaub ntawv uas tsim dom tsis zoo dua → tsim khoom niche value (utlaw uas koj ua tau)

### Kev tsim kom muaj upgrading (Encouraging Upgrades)

Cov neeg hauv Starter uas tsim dom tsi zoo yuav tsum tsim kom muaj upgrading:

- Tha ti lawv pa mus txog qhov chaw (limits) ntawm plan (sites, storage), tsim prompts kom lawv xav ua upgrading
- Tso emails uas tso cai rau cov features ntawm Growth plan uas lawv yuav pom zoo
- Tso txhua yam uas cov neeg hauv Growth/Pro customers tsim dom tau

### Kev tsim kom muaj Win-Back Campaigns (Win-Back Campaigns)

Tha ti cov neeg tso cai (cancel):

1. Suav ti lawv xav pa li cas (exit survey lossis email)
2. Tsim txom qhia rau lawv rov los (return discount) (30-60 hnub hauv tshiab tha lawv tso cai)

## Kev ua haujlwm rhe tshiab hauv hawm (Weekly and Monthly Routines)

### Rhe tshiab (Weekly)

- Tom qab cov neeg tsim dom tshiab thiab tso cai
- Tsim cov lus phoj rau txhua ticket support uas tseem thov muaj
- Tom qab kuvv ntawm platform thiab ti lawv ua tau (uptime)
- Tom qab cov kev peem tsis zoo

### Rhe tshiab hauv booj yeej (Monthly)

- Tsim cov metrics tseem ceeb (MRR, churn, new customers, upgrades)
- Ua WordPress thiab plugin updates (tha ti lawv ua tau hauv staging test)
- Tom qab thiab ua kom zoo rau knowledge base pib los ntawm cov patterns uas tsim dom support
- Tso newsletter lossis update rau cov neeg (cov features tshiab, tips, xev txog fitness industry)

### Rhe tshiab hauv qey (Quarterly)

- ဈေးနှုန်းတွေကို ပြိုင်ဘက်တွေနဲ့ ဖောက်သည်တွေရဲ့ မှတ်ချက်တွေနဲ့ တိုက်ဆိုင်စစ်ဆေးပါ
- Template ဒီဇိုင်းတွေကို အကဲဖြတ်ပါ -- ပြောင်းလဲဖို့ လိုအပ်လား။
- Hosting စွမ်းဆောင်ရည်ကို အကဲဖြတ်ပါ -- ချဲ့ထွင်ဖို့ လိုအပ်လား။
- Activation data (အသုံးပြုမှု အချက်အလက်) ကို အခြေခံပြီး Onboarding ကို ပြန်သုံးသပ်ပြီး တိုးတက်အောင် လုပ်ပါ

## ဒီသင်ခန်းစာမှာ ဘာတွေ လုပ်ခဲ့ကြလဲ

- uptime၊ signups၊ payments နဲ့ support တွေကို နေ့စဉ် စောင့်ကြည့်တဲ့ routine များ
- Plan အမျိုးအစားနဲ့ ကိုက်ညီတဲ့ tiered support structure (အဆင့်လိုက် ပံ့ပိုးမှုပုံစံ)
- dunning နဲ့ cancellation တွေကို အပါအဝင် Billing operations (ငွေတောင်းခံခြင်း လုပ်ငန်းဆောင်ရွက်မှုများ)
- update၊ security နဲ့ performance အတွက် Maintenance procedures (ထိန်းသိမ်းရေး လုပ်ထုံးလုပ်နည်းများ)
- fitness niche (လေ့ကျင့်ခန်းဆိုင်ရာ နယ်ပယ်) အတွက် သီးသန့် Churn reduction strategies (ဖောက်သည်တွေ ထွက်ခွာတာ လျှော့ချမယ့် မဟာဗျူဟာများ)
- Weekly, monthly, and quarterly operational routines များ
