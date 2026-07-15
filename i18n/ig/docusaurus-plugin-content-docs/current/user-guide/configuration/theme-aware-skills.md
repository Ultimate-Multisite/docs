---
title: Nkwado-ara Ọrụ
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Kỹ năng Nhạy cảm với Chủ đề

Superdav AI Agent v1.10.0 mang đến bốn kỹ năng tích hợp mới tự động thích ứng với chủ đề WordPress bạn đang dùng. Những kỹ năng này cung cấp hướng dẫn và khả năng chuyên biệt được thiết kế riêng cho cấu trúc và các tính năng của chủ đề đó.

## Kỹ năng Nhạy cảm với Chủ đề là gì? {#what-are-theme-aware-skills}

Kỹ năng nhạy cảm với chủ đề là những bộ kiến thức và bộ công cụ đã được cài đặt sẵn mà trợ lý AI sẽ tự động chọn dựa trên chủ đề WordPress đang hoạt động trên trang web của bạn. Khi bạn chuyển đổi chủ đề, các kỹ năng có sẵn của trợ lý sẽ tự động cập nhật — không cần cấu hình thủ công gì cả.

Mỗi kỹ năng bao gồm:

- **Tài liệu cụ thể cho chủ đề** — hướng dẫn cách sử dụng và tùy chỉnh chủ đề
- **Tham chiếu khối (Block) và mẫu (pattern)** — các khối, mẫu và tùy chọn thiết kế có sẵn
- **Ví dụ về tùy chỉnh** — các đoạn mã và mẫu cấu hình cho các tác vụ phổ biến
- **Thực hành tốt nhất** — các đề xuất về kiến trúc và quy trình làm việc của chủ đề

## Các Kỹ năng Nhạy cảm với Chủ đề Có Sẵn {#available-theme-aware-skills}

### Chủ đề Khối (Block Themes) {#block-themes}

**Áp dụng cho:** Những chủ đề sử dụng kiến trúc dựa trên khối của WordPress (Full Site Editing).

Kỹ năng Block Themes cung cấp hướng dẫn về:

- Tạo và chỉnh sửa các template bằng trình soạn thảo khối
- Làm việc với các block pattern và các block có thể tái sử dụng
- Tùy chỉnh kiểu dáng toàn cục và cài đặt theme.json
- Sử dụng các theme blocks và biến thể (variations)
- Xây dựng các block pattern tùy chỉnh cho trang web của bạn

**Tự động kích hoạt khi:** Chủ đề đang hoạt động của bạn là một chủ đề khối (hỗ trợ tính năng `block-templates`).

### Chủ đề Cổ điển (Classic Themes) {#classic-themes}

**Áp dụng cho:** Các chủ đề WordPress truyền thống sử dụng template PHP và trình soạn thảo cổ điển.

Kỹ năng Classic Themes cung cấp hướng dẫn về:

**Kaçọrịta na PHP template files na hooks**
**Customizing appearance of theme via Customizer**
**Using widget areas and sidebars**
**Modifying CSS na child theme development**
**Understanding theme hierarchy na template tags**

**Automatically activated when:** Theme active của bạn là một theme classic (không phải block).

### Kadence Blocks {#kadence-blocks}

**Áp dụng cho:** Các trang web sử dụng plugin Kadence Blocks để thiết kế nâng cao dựa trên block.

Kỹ năng Kadence Blocks sẽ hướng dẫn bạn về:

- Cách sử dụng thư viện block nâng cao của Kadence (Hero, Testimonials, Pricing, v.v.)
- Cấu hình cài đặt block Kadence và các tùy chọn responsive.
- Xây dựng bố cục tùy chỉnh với các block grid và container của Kadence.
- Tích hợp các block Kadence với theme của bạn.
- Sử dụng hệ thống thiết kế và các preset của Kadence.

**Automatically activated when:** Plugin Kadence Blocks đang hoạt động trên trang web của bạn.

### Kadence Theme {#kadence-theme}

**Áp dụng cho:** Các trang web sử dụng theme Kadence để thiết kế và tùy chỉnh dựa trên block.

Kỹ năng Kadence Theme sẽ hướng dẫn bạn về:

- Cách tùy chỉnh theme Kadence thông qua global styles và theme.json.
- Sử dụng các mẫu (patterns) và template tích hợp sẵn của Kadence.
- Cấu hình cài đặt và tùy chọn theme Kadence.
- Xây dựng thiết kế tùy chỉnh với hệ thống thiết kế của Kadence.
- Tích hợp Kadence với các plugin và công cụ phổ biến khác.

**Automatically activated when:** Theme Kadence là theme đang hoạt động của bạn.

## Cách Chọn Kỹ Năng (Skills) {#how-skills-are-selected}

Trợ lý sẽ tự động phát hiện theme đang hoạt động và các plugin đã cài đặt trên mỗi tin nhắn của bạn. Nếu có một kỹ năng tương thích với theme phù hợp, nó sẽ được tải vào ngữ cảnh của trợ lý một cách tự động. Bạn không cần phải bật hoặc chuyển đổi kỹ năng thủ công.

### Nhiều Kỹ Năng {#multiple-skills}

Se ọ bụrụ na ọkụkọ ọrụ (skills) dị ukwuu n'ụlọ gị (ngw dị, ọ bụrụ na ị nwere Kadence Blocks na Kadence Theme), asụsụ ahụ ga-akụzi ike n'ime olu skills onye ahụ, ọ ga-akụzi ike n'ime ihe ndị ọzọ.

### Ịtụrụ Tema (Switching Themes) {#switching-themes}

Ọ bụrụ na ị chọrọ ịgbagba tema tupu, asụsụ onye ahụ ga-akụzi ike skills dị m n'ime akụkọ ọrụ a na mesaj ndị ọzọ. Ọ bụ ihe atọ:

1. Ị nwere theme nke block (block theme) na olu skills **Block Themes** dị ike.
2. ị chọrọ ịgbagba tema classic.
3. N'ime mesaj tupu, olu skills **Classic Themes** ga-akụzi ike automatically, ma olu skills **Block Themes** ga-abụghị anọ n'ime akụkọ ọrụ ahụ.

## Ịchọta Olụ Skills Ndị Na-agba Tema (Using Theme-Aware Skills) {#using-theme-aware-skills}

Ọ bụrụ na ị chọrọ ka asụsụ onye ahụ gbanwe ihe, ị chọrọ karị ị chụkọ ihe ị chọrọ n'ime chat interface. Asụsụ onye ahụ ga-akụzi ike reference guidance nke olu skills ọ bụla dị m n'ime akụkọ ọrụ ahụ automatically.

### Ọzọmụ Ihe (Example Prompts) {#example-prompts}

**N'ime Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**N'ime Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**N'ime Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**N'ime Kadence Theme:**
> "Customize the header layout and navigation menu styling."

Asụsụ onye ahụ ga-akọ ihe nwere tema ahụ na plugins ndị ị nwere, ma ọ bụ code examples dị m n'ime akụkọ ọrụ ahụ.

:::note
Olu skills ndị na-agba tema ga-abụghị anọ automatically n'ime Superdav AI Agent v1.10.0 na ụka ọzọ. Ọ dịghị ihe ọ bụla ị chọrọ ka anyị ṣe banyere (setup) ma ọ bụ configuration.
:::
