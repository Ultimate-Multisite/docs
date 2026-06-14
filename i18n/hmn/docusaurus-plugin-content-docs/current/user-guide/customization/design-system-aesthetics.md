---
title: Kev txoj tshiab design system aesthetics skill
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# ជំនាញ Aesthetics ຂອງ Design System

**Design System Aesthetics skill** គឺជាវិធីសាស្រ្តណែនាំដើម្បីកែលម្អរូបរាងនៃគេហទំព័ររបស់អ្នក។ វាជួយអ្នកក្នុងការសម្រេចចិត្តជាប់លាប់អំពី typography (ប្រភេទអក្សរ), color (ពណ៌), spacing (ចន្លោះ) និង motion tokens ដែលកំណត់ design system របស់អ្នក។

## Design System Aesthetics ជាអ្វី?

Design System Aesthetics គឺជាជំនាញដែលមានរចនាសម្ព័ន្ធ ដែលគ្របដណ្តប់លើ៖

- **Typography**: ប្រភេទ font, ទំហំ, កម្រិត (weights), និងកម្ពស់បន្ទាត់ (line heights)
- **Color**: ប៉ាលេពណ៌ចម្បង (primary), រួម (secondary), គូ (accent), និងពណ៌អព្យាក្រឹត (neutral palettes)
- **Spacing**: ការដាក់ padding, margin, និង scale នៃ gap (ចន្លោះ)
- **Borders**: Tokens សម្រាប់ radius (កោសិកា) និង width (ទទឹង)
- **Shadows**: Tokens សម្រាប់ elevation (កម្រិតលើ) និង depth (ជម្រៅ)
- **Motion**: ចលនា (animations) និងការផ្លាស់ប្តូរ (transitions)

ការសម្រេចចិត្តទាំងនេះត្រូវបានរក្សាទុកនៅក្នុងឯកសារ `theme.json` របស់ theme អ្នក ដែលបង្កើតជាប្រព័ន្ធរូបរាងដែលស៊ីគ្នា។

## ហេតុអ្វីបានជាត្រូវប្រើ Design System Aesthetics?

### ความสม่ำเสมอ (Consistency)

Design system ធានាថា៖

- អត្ថបទទាំងអស់ប្រើ scale typography ដូចគ្នា
- ពណ៌ត្រូវបានប្រើប្រាស់ជាប់លាប់ទូទាំងគេហទំព័ររបស់អ្នក
- ការដាក់ចន្លោះដើរតាមលំនាំដែលអាចព្យាករណ៍បាន
- ចលនាមានអារម្មណ៍រួបរួមគ្នា

### ប្រសិទ្ធភាព (Efficiency)

ជំនួសឱ្យការធ្វើការសម្រេចចិត្តផ្នែក design ម្ដងមួយទំព័រ អ្នកនឹង៖

- កំណត់ tokens នៅកន្លែងតែមួយ
- អនុវត្តវាគ្រប់ទីកន្លែង
- អាប់เดតទូទាំងគេហទំព័រដោយផ្លាស់ប្តូរតម្លៃតែមួយ

### ភាពបត់បែន (Flexibility)

អ្នកអាច៖

- កែសម្រួល design system ទាំងមូលបានយ៉ាងលឿន
- សាកល្បង aesthetics ផ្សេងៗគ្នា
- រក្សាភាពស៊ីសង្វាក់នៃម៉ាកយីហោ ខណៈពេលដែលកំពុងវិវត្តន៍

## ការបង្កឱ្យមាន Design System Aesthetics Skill

### ការបើកដំណើរការដោយដៃ (Manual Activation)

អ្នកអាចចាប់ផ្តើមជំនាញនេះបានគ្រប់ពេល៖

```
"Help me refine my design system"
```

ឬ

```
"Let's improve my site's aesthetics"
```

ឬ

```
"Guide me through design system decisions"
```

### ការផ្តល់យោបល់ដោយស្វ័យប្រវត្តិ (Automatic Suggestions)

Agents អាចនឹងណែនាំឱ្យប្រើ skill នៅពេលអ្នក៖

- សួរពីការផ្លាស់ប្តូរផ្នែក design
- ស្នើសុំការរចនាឡើងវិញបែប "modern" ឬ "professional"
- ចង់កែលម្អភាពស៊ីសង្វាក់នៃរូបរាង
- កំពុងត្រៀមខ្លួនដើម្បីដាក់ដំណើរការគេហទំព័ររបស់អ្នក

## គំរូការរចនា (The Design System Aesthetics Process)

### ជំហានទី ១៖ ពុម្ពអក្សរ (Typography)

កម្មវិធីនឹងសួរអំពីជម្រើសពុម្ពអក្សារបស់អ្នក៖

```
តើអ្នកចូលចិត្តស្ទីលពុម្ពអក្សារបស់អ្នកយ៉ាងម៉េចដែរ?
- Serif (បែបប្រពៃណី, ស្រស់ស្អាត)
- Sans-serif (បែបទំនើប, ស្អាត)
- Monospace (សម្រាប់ដាក់លេខកូដ ឬខ្លឹមសារបច្ចេកទេស)

សម្រាប់ពុម្ពអក្សរចំណងជើងរបស់អ្នក៖
- តើអ្នកចង់ប្រើពុម្ពអក្សរចំណងជើងដែលខុសពីធម្មតាទេ? ឬប្រើដូចអត្ថបទធម្មតាដែរឬទេ?
- ចំណូលចិត្ត៖ ក្រាស់, ស្រស់ស្អាត, លេងសើច, ឬតិចបំផុត (minimal)?

សម្រាប់ពុម្ពអក្សាបែបអត្ថបទធម្មតា (Body font)៖
- ការអានត្រូវតែងាយស្រួល។ តើអ្នកចូលចិត្ត៖
  - អក្សរធំជាងមុន, មានចន្លោះច្រើន
  - អក្សរតូច, ប្រសិទ្ធភាពខ្ពស់
  - ទំហំស្តង់ដារ
```

បន្ទាប់មក កម្មវិធីនឹងកំណត់ដូចខាងក្រោម៖

- **Heading font**: ពុម្ពអក្សរចម្បងសម្រាប់ចំណងជើង និងចំណងជើងផ្សេងៗ។
- **Body font**: ពុម្ពអក្សរសម្រាប់អត្ថបទធម្មតា និងខ្លឹមសារសំខាន់។
- **Monospace font**: ពុម្ពអក្សរសម្រាប់ដាក់លេខកូដ និងខ្លឹមសារបច្ចេកទេស។
- **Size scale**: ទំហំដែលបានកំណត់ទុកជាមុន (តូច, មូលដ្ឋាន, ធំ, XL ជាដើម)។
- **Weight scale**: កម្រិតក្រាស់នៃពុម្ពអក្សរ (ធម្មតា, មធ្យម, ក្រាស់ជាដើម)។
- **Line height**: ចន្លោះរវាងបន្ទាត់សម្រាប់ធ្វើឱ្យងាយស្រួលអាន។

### ជំហានទី ២៖ ប៉ាលីត្រពណ៌ (Color Palette)

```
តោះ! យើងមកកំណត់ប៉ាលីត្រពណ៌របស់អ្នកទាំងអស់គ្នា។

Primary color (ពណ៌ម៉ាករបស់អ្នក):
- បច្ចុប្បន្ន៖ [បង្ហាញពណ៌ដែលមានស្រាប់]
- ផ្លាស់ប្តូរទៅជា៖ [ឧបករណ៍ជ្រើសរើសពណ៌ ឬលេខ Hex code]

Secondary color (ពណ៌គាំទ្រ)៖
- បច្ចុប្បន្ន៖ [បង្ហាញពណ៌ដែលមានស្រាប់]
- ផ្លាស់ប្តូរទៅជា៖ [ឧបករណ៍ជ្រើសរើសពណ៌ ឬលេខ Hex code]

Accent color (សម្រាប់ធ្វើឲ្យលេចធ្លោ និង CTA - Call to Action)៖
- បច្ចុប្បន្ន៖ [បង្ហាញពណ៌ដែលមានស្រាប់]
- ផ្លាស់ប្តូរទៅជា៖ [ឧបករណ៍ជ្រើសរើសពណ៌ ឬលេខ Hex code]

Neutral palette (ពណ៌ប្រផេះសម្រាប់អត្ថបទ, បន្ទាត់ព្រំដែន និងផ្ទៃខាងក្រោយ)៖
- Light: [ពណ៌]
- Medium: [ពណ៌]
- Dark: [ពណ៌]
```

កម្មវិធីនឹងបង្កើតប៉ាលីត្រពេញលេញ រួមមាន៖

- ពណ៌ចម្បង (Primary), ពណ៌បន្ទាប់បន្សំ (secondary), និងពណ៌សម្រាប់ធ្វើឲ្យលេចធ្លោ (accent colors)។
- ពណ៌ប្រផេះសម្រាប់ប្រើជាពណ៌អព្យាក្រឹត (light, medium, dark)។
- ពណ៌ដែលមានន័យ (semantic colors) ដូចជា៖ សញ្ញាជោគជ័យ (success), ការព្រមាន (warning), និងកំហុស (error)។
- រូបរាងពេលដាក់ម៉ៅ (hover state) និងពេលចុច (active state)។

### ជំហានទី ៣៖ ចន្លោះ (Spacing)

**Step 1: How much breathing room do you want?**

Spacing scale preference (Làm sao bạn muốn khoảng cách):
- Compact (nhỏ gọn, layout hiệu quả)
- Normal (khoảng cách cân bằng)
- Spacious (rộng rãi, nhiều khoảng trắng)

Điều này ảnh hưởng đến:
- Padding bên trong các nút và card
- Margin giữa các phần
- Khoảng trống giữa các mục trên grid

Agent sẽ định nghĩa các token về khoảng cách như sau:

- Đơn vị cơ bản (thường là 4px hoặc 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Các giá trị cụ thể cho padding, margin, gap

### Step 4: Borders and Shadows (Đường viền và Bóng đổ)

```
Chiều sâu hình ảnh và định nghĩa:

Border radius preference (Ưu tiên bán kính bo góc):
- Sharp (không bo tròn)
- Subtle (bo góc nhỏ)
- Rounded (bo góc vừa)
- Very rounded (bo góc lớn)

Shadow depth (Độ sâu bóng đổ):
- Flat (không có bóng đổ)
- Subtle (bóng đổ nhẹ)
- Pronounced (bóng đổ mạnh)
```

Agent sẽ tạo ra:

- Border radius tokens (cho nút, card, input)
- Shadow tokens cho các mức độ nâng cao (elevation levels)
- Border width tokens

### Step 5: Motion and Animation (Chuyển động và Hoạt ảnh)

```
Trang web của bạn nên cảm thấy thế nào khi tương tác?

Animation preference (Ưu tiên hoạt ảnh):
- Minimal (không có hoạt ảnh)
- Subtle (chuyển tiếp nhẹ nhàng)
- Playful (hoạt ảnh dễ nhận thấy)

Specific animations (Các hoạt ảnh cụ thể):
- Page transitions (Chuyển trang): fade, slide, hay không?
- Button hover (Khi di chuột qua nút): scale, đổi màu, hay cả hai?
- Loading states (Trạng thái tải): spinner, skeleton, hay thanh tiến trình?
```

Agent sẽ định nghĩa:

- Transition durations (Thời gian chuyển tiếp) (nhanh, bình thường, chậm)
- Easing functions (Hàm làm mượt chuyển động) (ease-in, ease-out, ease-in-out)
- Animation keyframes cho các tương tác phổ biến

## Áp dụng Thẩm mỹ Hệ thống Thiết kế (Applying Design System Aesthetics)

### Automatic Application (Áp dụng Tự động)

Sau khi bạn hoàn thành kỹ năng này, agent sẽ:

1. Cập nhật `theme.json` của theme với tất cả các tokens
2. Áp dụng hệ thống thiết kế vào theme đang hoạt động của bạn
3. Tạo lại các style block để khớp với hệ thống mới
4. Kích hoạt theme đã được cập nhật

### Manual Application (Áp dụng Thủ công)

Bạn cũng có thể chỉnh sửa trực tiếp `theme.json`:

## Kuj Tshawm Su Design System (Viewing Your Design System)

### Kuj Tshawm Su Agent (Ask the Agent)

```
"Show me my design system"
```

or

```
"What are my current design tokens?"
```

Agent yu yuj tshawm (display) typography, colors, spacing, thiab muab cov token lwm yam.

### Tshawm theme.json (View theme.json)

Tso `/wp-content/themes/[theme-name]/theme.json` mus ua text editor los tshawm cov token raw.

## Ua Txhawb Cov Design System (Updating Your Design System)

### Ua Txhawb Tsis Tsoom (Quick Updates)

Kuv yu avv txhua yam uav xav txhua yam:

```
"Make the primary color darker"
```

or

```
"Increase the spacing scale by 20%"
```

or

```
"Change the heading font to a serif"
```

### Ua Tshawm Cov Design System Tam Pov (Full Redesign)

Tsim cov skill Design System Aesthetics los txhawb:

```
"Let's redesign my entire design system"
```

Yu yuav mus tshawm cov lus qhia txhua yam yeej, tsis txhob tsoom rau cov khoom uas uav tshawm txog.

### Ua Txhawb Cov Design System Tsis Tsoom (Partial Updates)

Ua txhawb cov ntsiab lus uas uav xav txhua yam:

```
"Just update the color palette, keep everything else"
```

## Kev Tshawm Cov Design System Tsis Tsoom (Design System Best Practices)

### Kev Tsim Cov Tsim (Consistency)

- Siv cov token uas sib kao nhau heev.
- Tsis tsim lwm yam uas tsis muaj ib lub sijhawm los yog ib lub qho.
- Siv cov token los tsoom tsis tsoom cov sival (hardcoding values).

### Kev Tsim Cov Ntxiv (Naming)

Siv cov lus uas thov tsis tsoom thiab muaj ntsiab lus:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Kev Tsim Cov Sib Muaj (Scalability)

### Tài liệu hướng dẫn

Tài liệu hóa hệ thống thiết kế của bạn:

- Tại sao bạn chọn những màu cụ thể đó
- Khi nào nên dùng từng token (mã màu)
- Những trường hợp ngoại lệ và các vấn đề cần xử lý đặc biệt

## Các Mẫu Thiết Kế Hệ Thống Chung

### Tối Giản Hiện Đại (Modern Minimalist)

- Kiểu chữ không chân (Sans-serif) như Inter, Helvetica.
- Bảng màu giới hạn (2-3 màu).
- Khoảng cách rộng rãi.
- Bóng đổ tinh tế.
- Các hoạt ảnh mượt mà, nhanh chóng.

### Ấm Áp và Thân Thiện (Warm and Friendly)

- Kết hợp giữa kiểu chữ có chân (serif) và không chân (sans-serif).
- Bảng màu ấm áp (cam, xám ấm).
- Góc bo tròn.
- Bóng đổ mềm mại.
- Các hoạt ảnh vui tươi.

### Chuyên Nghiệp Doanh Nghiệp (Professional Corporate)

- Kiểu chữ không chân sạch sẽ (Roboto, Open Sans).
- Bảng màu trung tính với một màu nhấn.
- Khoảng cách được cấu trúc rõ ràng.
- Bóng đổ tối thiểu.
- Các chuyển tiếp tinh tế.

### Sáng Tạo và Mạnh Mẽ (Creative and Bold)

- Kiểu chữ độc đáo.
- Bảng màu đậm nét.
- Khoảng cách đa dạng.
- Bóng đổ mạnh mẽ.
- Các hoạt ảnh dễ nhận thấy.

## Khắc Phục Sự Cố (Troubleshooting)

**Thiết kế hệ thống của tôi không hiển thị thay đổi**
- Xóa bộ nhớ đệm (cache) trình duyệt của bạn.
- Xây dựng lại trang web nếu bạn đang dùng static generator.
- Kiểm tra xem file theme.json có phải là JSON hợp lệ không.
- Xác minh rằng theme đó đang được kích hoạt.

**Màu sắc trông khác nhau trên các trang khác nhau**
- Kiểm tra xem có xung đột CSS nào trong các plugin không.
- Xác minh tất cả các trang đều sử dụng cùng một theme.
- Xóa bất kỳ plugin cache nào.

**Tôi muốn quay lại hệ thống thiết kế trước đó**
- Hỏi agent: "Show me my design system history" (Cho tôi xem lịch sử hệ thống thiết kế của tôi).
- Chỉnh sửa thủ công file theme.json về các giá trị cũ.
- Chạy lại skill với các lựa chọn khác.

## Các Bước Tiếp Theo (Next Steps)

Sau khi xác định xong hệ thống thiết kế của bạn:

1. **Kiij tsoom koj:** Tsoom koj tham los tseg txawm txog desain tshiab
2. **Txhawm tsoom ntxiv:** Pa ua kev hloov tswv hauv tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv tsis txhob tsim tswv t
