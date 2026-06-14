---
title: Qhuas tsim phoj rau Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0-ന് ඔයාට මුලින්ම සකස් කරන වෙලාවට කස්ටම් බ්ලොක් තේම් එකක් හදන්න උදව් කරන **Theme Builder onboarding flow** එකක් හඳුන්වා දෙනවා. මේක කලින් තිබුණු Site Builder mode එක වෙනුවට, වඩාත් නම්‍යශීලී, agent එකෙන් උදව් ගන්න පුළුවන් ක්‍රමයක්.

## Theme Builder Onboarding Flow කියන්නේ මොකක්ද?

Theme Builder onboarding flow එක කියන්නේ අන්තර්ක්‍රියාකාරී setup wizard එකක්. ඒක කරන්නේ:

- නිර්මාණ තීරණ (වර්ණ, අකුරු වර්ග, layout) ගැන ඔයාව මඟ පෙන්වනවා
- ඔයාගේ වෙබ් අඩවියේ දෘශ්‍ය අනන්‍යතාවයේ කැමැත්ත ගන්න උදව් කරනවා
- ඔයාට අවශ්‍ය දේට ගැලපෙන කස්ටම් block theme එකක් හදනවා
- වැඩේ ඉවර වුණාම තේම් එක ස්වයංක්‍රීයව activate කරනවා

මේ flow එක පාලනය කරන්නේ **Setup Assistant agent** එකෙන්. ඒක ඔයාගෙන් පැහැදිලි කරන ප්‍රශ්න අහලා, ඔයාගේ theme එක ටිකෙන් ටික හදනවා.

## Theme Builder Onboarding පටන් ගන්න

### පළමු වතාවේ setup එක (First-Run Setup)

ඔයා Superdav AI Agent එක අලුත් WordPress installation එකක පටන් ගත්තම, ඔයාට මේ විදිහට පෙනෙයි:

```
Superdav AI Agent වෙත සාදරයෙන් පිළිගනිමු!

ඔබට මොනවද කරන්න ඕන?
1. කස්ටම් theme එකක් හදන්න (Theme Builder)
2. දැනට තියෙන theme එකක් පාවිච්චි කරන්න
3. දැන් setup එක මඟහරින්න
```

**"Build a custom theme"** කියන එක තෝරලා Theme Builder onboarding flow එකට යන්න.

### අතින් කරන activation එක (Manual Activation)

ඕනෑම වෙලාවක ඔයාට Theme Builder onboarding පටන් ගන්න පුළුවන් මේ විදිහට request කරලා:

```
"Start the Theme Builder onboarding"
```

හෝ

```
"Help me create a custom theme"
```

## Onboarding පියවර (The Onboarding Steps)

### පියවර 1: Mode තෝරා ගැනීම (Mode Selection)

Setup Assistant agent එක ඔයාගේ කැමැත්ත ගැන අහනවා:

```
ඔබේ theme එක හදන්න ඔබට කොහොමද ඕනේ?
- මඟ පෙන්වීම සහිතව (මට ප්‍රශ්න අහලා ඒක මම හදලා දෙන්නම්)
- අතින් කරන විදිහට (මට options පෙන්නලා ඔයා තීරණය කරන්න)
```

බොහෝ පරිශීලකයින්ට **Guided mode** එක නිර්දේශ කරනවා. agent එක ඔයාගේ ක්ෂේත්‍රය සහ ඉලක්ක අනුව design නිර්දේශ කරනවා.

### පියවර 2: වෙබ් අඩවියේ විස්තර (Site Specification)

ඔයාගෙන් ඔයාගේ වෙබ් අඩවිය ගැන ප්‍රශ්න අහනවා:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, etc. (Loj xim: Ứng dụng cho trang web: Mua bán hàng trực tuyến, blog, portfolio, SaaS, v.v.)
- **Target audience**: Who are your visitors? (Loj xim: Khán giả mục tiêu của bạn là ai?)
- **Brand colors**: Primary and secondary colors (or "I'm not sure") (Loj xim: Màu sắc thương hiệu: Màu chính và màu phụ (hoặc "Tôi chưa chắc"))
- **Tone**: Professional, creative, playful, minimal, etc. (Loj xim: Giọng văn: Chuyên nghiệp, sáng tạo, vui tươi, tối giản, v.v.)

This information is stored in your **site_brief** memory, which agents reference in future sessions. (Thông tin này được lưu trong bộ nhớ **site_brief** của bạn, mà các agent sẽ tham khảo trong các phiên làm việc sau.)

### Step 3: Design System Decisions (Bước 3: Quyết định Hệ thống Thiết kế)

The agent guides you through design token selections: (Agent sẽ hướng dẫn bạn chọn các design token:)

- **Typography**: Font family (serif, sans-serif, monospace) and size scale (Loj xim: Kiểu chữ: Gia đình font (serif, sans-serif, monospace) và thang kích thước)
- **Color palette**: Primary, secondary, accent, and neutral colors (Loj xim: Bảng màu: Màu chính, màu phụ, màu nhấn và màu trung tính)
- **Spacing**: Compact, normal, or spacious layouts (Loj xim: Khoảng cách: Bố cục nhỏ gọn, bình thường hoặc rộng rãi)
- **Motion**: Animations and transitions (if desired) (Loj xim: Chuyển động: Các hiệu ứng hoạt hình và chuyển cảnh (nếu bạn muốn))

### Step 4: Theme Generation (Bước 4: Tạo Theme)

The Setup Assistant agent scaffolds your custom block theme with: (Agent Trợ lý Thiết lập sẽ tạo khung cho theme khối tùy chỉnh của bạn với:)

- `theme.json` containing all your design tokens (`theme.json` chứa tất cả các design token của bạn)
- Block templates for common layouts (homepage, blog, contact) (Các mẫu khối cho các bố cục phổ biến (trang chủ, blog, liên hệ))
- Custom block styles matching your design system (Kiểu dáng khối tùy chỉnh khớp với hệ thống thiết kế của bạn)
- Theme metadata and WordPress support declarations (Siêu dữ liệu theme và khai báo hỗ trợ WordPress)

### Step 5: Activation and Verification (Bước 5: Kích hoạt và Xác minh)

The theme is automatically activated, and you'll see: (Theme sẽ tự động được kích hoạt, và bạn sẽ thấy:)

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

You can then visit your site to verify the theme is displaying correctly. (Sau đó, bạn có thể truy cập trang web của mình để kiểm tra xem theme đã hiển thị đúng chưa.)

## Site Specification and site_brief Memory (Thông số Trang web và Bộ nhớ site_brief)

During onboarding, the agent captures your site's specification in a **site_brief** memory category. This includes: (Trong quá trình thiết lập ban đầu, agent sẽ ghi lại thông số trang web của bạn trong danh mục bộ nhớ **site_brief**. Điều này bao gồm:)

- Site purpose and goals (Mục đích và mục tiêu của trang web)
- Target audience (Khán giả mục tiêu)
- Brand colors and tone (Màu sắc thương hiệu và giọng văn)
- Design preferences (Sở thích thiết kế)
- Content structure (Cấu trúc nội dung)

### Why site_brief Matters (Tại sao site_brief lại quan trọng)

In future sessions, agents reference your site_brief to: (Trong các phiên làm việc sau, agent sẽ tham khảo site_brief của bạn để:)

### ປົກຮັກສາຄວາມສອດຄ່ອງຂອງການອອກແບບໃນເວລາປ່ຽນແປງ

*   ສະເໜີຟີເຈີທີ່ສອດຄ່ອງກັບຈຸດປະສົງຂອງເວັບໄຊຂອງທ່ານ.
*   ໃຫ້ຄຳແນະນຳທີ່ເຂົ້າໃຈບໍລິບົດ (context-aware recommendations).
*   ຫຼີກລ່ຽງການຖາມຄຳຖາມການຕັ້ງຄ່າເລື້ອຍໆ.

### ການເບິ່ງສະຫຼຸບຂອງເວັບໄຊຂອງທ່ານ (Viewing Your site_brief)

ເຈົ້າສາມາດຖາມແອເຈन्टໄດ້ດັ່ງນີ້:

```
"Show me my site brief"
```

ຫຼື

```
"What do you know about my site?"
```

ແອເຈन्टຈະສະແດງຂໍ້ມູນສະເພາະຂອງການຕັ້ງຄ່າເວັບໄຊທີ່ຖືກເກັບໄວ້.

## ການປັບແຕ່ງຫຼັງຈາກເລີ່ມຕົ້ນ (Customizing After Onboarding)

ຫຼັງຈາກການສອນ Theme Builder ສໍາເລັດ, ເຈົ້າສາມາດ:

### ໃຊ້ທັກສະ Design System Aesthetics Skill

ຂໍໃຫ້ມີການປັບປຸງການອອກແບບ:

```
"Refine the typography to be more modern"
```

ຫຼື

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** ຈະຊ່ວຍແນະນຳເຈົ້າໃນການອັບເດດການອອກແບບທີ່ຕ້ອງການສະເພາະຈຸດ.

### ແກ້ໄຂ theme.json ໂດຍກົງ

ສຳລັບຜູ້ໃຊ້ຂັ້ນສູງ, ເຈົ້າສາມາດແກ້ໄຂ `/wp-content/themes/[theme-name]/theme.json` ເພື່ອປັບ:

*   color tokens (ສ່ວນຂອງລະຫັດສີ)
*   typography scales (ລະດັບຕົວອັກສອນ)
*   spacing values (ຄ່າໄລຍະຫ່າງ)
*   border and shadow definitions (ການກຳນົດຂອບ ແລະ ເງົາ)

### ສ້າງ Custom Block Templates

ໃຊ້ WordPress block editor ເພື່ອສ້າງ template ໃໝ່ໆ ສຳລັບ:

*   Homepage layouts (ຮູບແບບໜ້າຫຼັກ)
*   Blog post pages (ໜ້າບົດຄວາມ)
*   Product pages (ໜ້າຜະລິດຕະພັນ)
*   Contact forms (ຟອມຕິດຕໍ່)

## ການປຽບທຽບ: ເກົ່າ vs. ໃໝ່ໃນການສອນ (Comparison: Old vs. New Onboarding)

| ຄຸນສົມບັດ | Site Builder (ເກົ່າ) | Theme Builder (ໃໝ່) |
| :--- | :--- | :--- |
| ວິທີຕັ້ງຄ່າ | ແບບຟອມຕາມ Wizard | ການສົນທະນາທີ່ແອເຈन्टຊີ້ທາງ |
| ການສ້າງ Theme | Template ຈຳກັດ | Custom scaffolding (ໂຄງຮ່າງທີ່ປັບໄດ້) |
| Design tokens | ໃສ່ດ້ວຍຕົນເອງ | ການຕັດສິນໃຈທີ່ມີການຊີ້ນຳ |
| ຄວາມຍືດຫຍຸ່ນ | ທາງເລືອກທີ່ແນ່ນອນ | ສາມາດປັບປ່ຽນໄດ້ |
| ການອັບເດດໃນອະນາຄົດ | ບໍ່ມີການອ້າງອີງ | ເກັບໄວ້ໃນ site_brief |

## ການແກ້ໄຂບັນຫາ (Troubleshooting)

**ການສອນບໍ່ສໍາເລັດ**
*   ເລີ່ມຕົ້ນໃໝ່: "Start the Theme Builder onboarding"
*   ກວດສອບວ່າ WordPress installation ຂອງເຈົ້າອັບເດດແລ້ວຫຼືບໍ່
*   ຢືນຢັນວ່າ Setup Assistant agent ເປີດໃຊ້ງານຢູ່

**My site_brief tsis tau uiv** (My site brief is not being used)
- Kiểm tra xem agent có truy cập vào memory (bộ nhớ) không
- Hỏi agent "recall my site brief" (nhớ lại bản tóm tắt trang web của tôi)
- Kiểm tra xem bộ nhớ đã được bật trong cài đặt của bạn chưa

**Theme uaj tsis hual mai kuv xav** (The generated theme doesn't match my preferences)
- Sử dụng skill Design System Aesthetics để chỉnh sửa nó cho hợp ý hơn
- Hỏi agent "regenerate the theme with [specific changes]" (tạo lại theme với [những thay đổi cụ thể])
- Chỉnh sửa file theme.json trực tiếp để kiểm soát chính xác

## Các bước tiếp theo (Next Steps)

Sau khi hoàn thành việc onboarding Theme Builder:

1. **Kiểm tra trang web của bạn**: Truy cập vào trang web của bạn để xem theme mới như thế nào
2. **Chỉnh sửa thiết kế**: Dùng skill Design System Aesthetics để điều chỉnh những chỗ chưa ưng ý
3. **Thêm nội dung**: Bắt đầu xây dựng nội dung cho trang web của bạn
4. **Khám phá khả năng**: Học thêm về các khả năng khác của agent như scaffold-block-theme và activate-theme
