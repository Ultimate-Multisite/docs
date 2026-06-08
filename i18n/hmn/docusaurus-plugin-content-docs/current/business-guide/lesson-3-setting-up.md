---
title: 'Loj 3: Tsim Phiaj Txog Lub Kev Muaj Ntsuam'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: ការតំឡើងបណ្តាញរបស់អ្នក (Setting Up Your Network)

ដល់ពេលចាប់ផ្តើមបង្កើតហើយ។ ក្នុងមេរៀននេះ អ្នកនឹងដំឡើង Ultimate Multisite ហើយរៀបចំមូលដ្ឋានគ្រឹះនៃបណ្តាញ FitSite។ ការសម្រេចចិត្តគ្រប់យ៉ាងនៅទីនេះគឺគិតទៅលើផ្នែកហាត់ប្រាណ (fitness niche) ជាចម្បង។

## យើងបានឈប់ត្រឹមណា? (Where We Left Off)

យើងបានជ្រើសរើសស្ទូឌីយ៍ហាត់ប្រាណជាផ្នែករបស់យើង ហើយបានផ្ទៀងផ្ទាត់ឱកាសនោះហើយ។ ឥឡូវនេះ យើងនឹងបំប្លែងគំនិតនោះទៅជាវេទិកាដែលដំណើរការបាន។

## ការជ្រើសរើស Hosting (Choosing Your Hosting)

ជម្រើស hosting របស់អ្នកសំខាន់ជាងសម្រាប់ platform ដែលមាន niche ច្រើនជាង website តែមួយ។ អ្នកមិនត្រឹមតែ host website មួយទេ — អ្នកកំពុង host បណ្តាញមួយដែលអាចរីកធំទៅជា websites ជាច្រើន ឬរយផ្សេងទៀត។

### អ្វីដែលត្រូវមើល (What to Look For)

- **WordPress Multisite support**: Hosting មិនមែនទាំងអស់គាំទ្រ multisite បានល្អទេ។
- **Wildcard SSL**: វាចាំបាច់សម្រាប់បណ្តាញដែលប្រើ subdomain។
- **Scalable resources**: អ្នកត្រូវការទំហំគ្រប់គ្រាន់ដើម្បីរីកចម្រើនដោយមិនបាច់ផ្លាស់ប្តូរ (migrate)។
- **Ultimate Multisite integration**: ការបង្រួមស្វ័យប្រវត្តិសម្រាប់ការបំប្លែងឈ្មោះដែន (domain mapping) និង SSL សន្សំសំចៃការងារប្រតិបត្តិការយ៉ាងច្រើន។

### វិធីសាស្រ្តដែលបានណែនាំ (Recommended Approach)

ជ្រើសរើស host ពីបញ្ជី [Compatible Providers](/user-guide/host-integrations/closte)។ ពួកវាត្រូវបានសាកល្បងជាមួយ Ultimate Multisite ហើយផ្តល់នូវការបង្រួមដែលអ្នកត្រូវការសម្រាប់ការបំប្លែងឈ្មោះដែន និងស្វ័យប្រវត្តិកម្ម SSL។

សម្រាប់ FitSite យើងនឹងប្រើការកំណត់ subdomain។ មានន័យថា website របស់អតិថិជននឹងបង្ហាញជាដំបូងថា `studioname.fitsite.com` មុនពេលពួកគេអាចភ្ជាប់ឈ្មោះដែនផ្ទាល់ខ្លួនបាន (optionally map their own domain)។

## ការដំឡើង WordPress Multisite (Installing WordPress Multisite)

ប្រសិនបើអ្នកមិនទាន់មានការដំឡើង WordPress Multisite នៅឡើយទេ៖

1. ติดตั้ง WordPress บน hosting provider ຂອງທ່ານ
2. ຕາມ [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) guide ຕາມ
3. ເລືອກການຕັ້ງຄ່າ **subdomain** ເມື່ອມັນຖາມ

:::tip ເປັນຫຍັງຕ້ອງໃຊ້ Subdomains?
Subdomains ຈະເຮັດໃຫ້ແຕ່ລະໄຊທ໌ຂອງລູກຄ້າມີທີ່ຢູ່ສະເພາະຂອງຕົນເອງ (`studio.fitsite.com`) ແທນທີ່ຈະເປັນ path (`fitsite.com/studio`). ອັນນີ້ແມ່ນເປັນມືອາຊີບກວ່າສຳລັບລູກຄ້າຂອງທ່ານ ແລະ ຫຼີກລ່ຽງການຊ້ຳຊ້ອນຂອງ permalink. ເບິ່ງ [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ເພື່ອປຽບທຽບຢ່າງລະອຽດ.
:::

## ການຕິດຕັ້ງ Ultimate Multisite

ໃຫ້ເຮັດຕາມ [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) guide ເພື່ອ:

1. ອັບໂຫຼດ ແລະ ຕັ້ງຄ່າ plugin ທົ່ວເຄືອຂ່າຍ
2. ດໍາເນີນການ [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

ໃນລະຫວ່າງ setup wizard, ໃຫ້ຈື່ໄວ້ກ່ຽວກັບ niche FitSite:

- **Currency**: ຕັ້ງຄ່າເປັນສະກຸນເງິນທີ່ລູກຄ້າ studio fit ຂອງທ່ານໃຊ້
- **Company name**: "FitSite" (ຫຼື ຊື່ຍີ່ຫໍ້ທີ່ທ່ານເລືອກ)
- **Company logo**: ອັບໂຫຼດ logo ຂອງຍີ່ຫໍ້ທ່ານ -- ອັນນີ້ຈະສະແດງຢູ່ໃນໃບເກັບເງິນ ແລະ email

## ການຕັ້ງຄ່າສຳລັບ Niche ສາຂາການອອກກຳລັງກາຍ (Fitness)

ເມື່ອຕິດຕັ້ງ Ultimate Multisite ແລ້ວ, ໃຫ້ເຮັດທາງເລືອກການຕັ້ງຄ່າສະເພາະ niche ນີ້:

### General Settings

ໄປທີ່ **Ultimate Multisite > Settings** ແລະ ຕັ້ງຄ່າສິ່ງເຫຼົ່ານີ້:

- **Site name**: FitSite
- **Default role**: Administrator -- fitness studio owners need full control of their site content
- **Registration**: Enable user registration so studio owners can sign up themselves

### Email Configuration

Email ຂອງ hệ thống của bạn nên nói ngôn ngữ phù hợp với lĩnh vực kinh doanh của bạn. Hãy vào **Ultimate Multisite > Settings > Emails** và tùy chỉnh:

- Thay thế câu chung chung như "trang web mới của bạn" bằng những thông điệp cụ thể về fitness (thể hình).
- Ví dụ chủ đề chào mừng: "Trang web studio fitness của bạn đã sẵn sàng"
- Ví dụ nội dung chào mừng: Nhắc đến studio, các lớp học và cách bắt đầu với trang web fitness của họ.

Chúng tôi sẽ tinh chỉnh những điều này hơn trong Bài học 8 (Customer Onboarding), nhưng việc đặt giọng văn ngay bây giờ sẽ đảm bảo rằng ngay cả những đăng ký thử nghiệm ban đầu cũng cảm thấy phù hợp với lĩnh vực cụ thể đó.

### Domain Configuration

Nếu bạn đang dùng nhà cung cấp hosting tương thích, hãy cấu hình ánh xạ tên miền ngay bây giờ:

1. Vào **Ultimate Multisite > Settings > Domain Mapping**
2. Làm theo hướng dẫn tích hợp cho host cụ thể của bạn
3. Kiểm tra xem các subsites mới có tự động nhận được SSL không

Điều này đảm bảo rằng khi chúng ta bắt đầu tạo template và trang thử nghiệm trong bài học tiếp theo, mọi thứ sẽ hoạt động trơn tru từ đầu đến cuối.

## Mạng lưới FitSite cho đến nay

Cuối bài học này, đây là những gì bạn đã có:

FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)

## ᱱᱚᱣᱟ ບົດຮຽນໂດຍພວກເຮົາ ສ້າງສັນຫຍັງໄປ?

- **WordPress Multisite** ທີ່ເຮັດວຽກໄດ້ໃນ mode subdomain
- **Ultimate Multisite** ຕິດຕັ້ງ ແລະ ຕັ້ງຄ່າແລ້ວ, ໃສ່ຊື່ FitSite ເປັນ Brading
- **Hosting ແລະ SSL** ຈັດຕັ້ງໄວ້ສຳລັບເຄືອຂ່າຍທີ່ກຳລັງເຕີບໂຕ
- **Domain mapping** ຖືກຕັ້ງຄ່າໃຫ້ກັບ hosting provider ຂອງເຈົ້າ
- **Email tone** ທີ່ເໝາະສົມກັບ niche (ຄວາມຊ່ຽວຊານ) ໄດ້ຖືກສ້າງຕັ້ງໄວ້ແຕ່ມື້ທຳອິດ

---

**ຕໍ່ໄປ:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- ເຮົາຈະສ້າງ site templates ທີ່ເຈົ້າຂອງສະຕູຟFitnes ສາມາດນຳໃຊ້ໄດ້ແທ້ໆ.
