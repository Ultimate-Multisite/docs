---
title: Kỹ năng nhận diện chủ đề
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Kỹ Năng Theo Chủ Đề (Theme-Aware Skills)

Superdav AI Agent v1.10.0 đã tích hợp bốn kỹ năng sẵn có mới, có khả năng nhận diện chủ đề (theme-aware), giúp tự động thích ứng với chủ đề WordPress bạn đang sử dụng. Các kỹ năng này cung cấp hướng dẫn và khả năng chuyên biệt, được thiết kế riêng cho kiến trúc và tính năng của chủ đề bạn đang dùng.

## Kỹ Năng Theo Chủ Đề Là Gì? {#what-are-theme-aware-skills}

Kỹ năng theo chủ đề là các bộ kiến thức và bộ công cụ được thiết lập sẵn. Trợ lý AI sẽ tự động chọn các kỹ năng này dựa trên chủ đề WordPress hiện đang hoạt động trên trang web của bạn. Khi bạn chuyển đổi chủ đề, các kỹ năng mà trợ lý có thể sử dụng sẽ tự động cập nhật — bạn không cần phải cấu hình thủ công.

Mỗi kỹ năng bao gồm:

- **Tài liệu dành riêng cho chủ đề** — Hướng dẫn về cách sử dụng và tùy chỉnh chủ đề.
- **Tham chiếu khối và mẫu (Block and pattern references)** — Các khối, mẫu và tùy chọn thiết kế có sẵn.
- **Ví dụ tùy chỉnh** — Các đoạn mã (code snippets) và mẫu cấu hình cho các tác vụ phổ biến.
- **Thực hành tốt nhất (Best practices)** — Các khuyến nghị về kiến trúc và quy trình làm việc của chủ đề.

## Các Kỹ Năng Theo Chủ Đề Hiện Có {#available-theme-aware-skills}

### Block Themes (Chủ đề Khối) {#block-themes}

**Áp dụng cho:** Các chủ đề sử dụng kiến trúc dựa trên khối của WordPress (Full Site Editing).

Kỹ năng Block Themes cung cấp hướng dẫn về:

- Cách tạo và chỉnh sửa template bằng trình soạn thảo khối (block editor).
- Làm việc với các mẫu khối (block patterns) và các khối tái sử dụng (reusable blocks).
- Tùy chỉnh các kiểu dáng toàn cục (global styles) và cài đặt theme.json.
- Sử dụng các khối chủ đề (theme blocks) và các biến thể của chúng.
- Xây dựng các mẫu khối tùy chỉnh cho trang web của bạn.

**Tự động kích hoạt khi:** Chủ đề đang hoạt động của bạn là một chủ đề khối (hỗ trợ tính năng `block-templates`).

### Classic Themes (Chủ đề Cổ điển) {#classic-themes}

**Áp dụng cho:** Các chủ đề WordPress truyền thống sử dụng template PHP và trình soạn thảo cổ điển.

Kỹ năng Classic Themes cung cấp hướng dẫn về:

- Làm việc với các tệp template PHP và các hook.
- Tùy chỉnh giao diện chủ đề thông qua Customizer.
- Sử dụng các khu vực widget (widget areas) và sidebar.
- Sửa đổi CSS và phát triển chủ đề con (child theme).
- Hiểu về hệ thống phân cấp chủ đề và các thẻ template.

**Tự động kích hoạt khi:** Chủ đề đang hoạt động của bạn là một chủ đề cổ điển (không phải chủ đề khối).

### Kadence Blocks {#kadence-blocks}

**Áp dụng cho:** Các trang web sử dụng plugin Kadence Blocks để thiết kế nâng cao dựa trên khối.

Kỹ năng Kadence Blocks cung cấp hướng dẫn về:

- Cách sử dụng thư viện khối nâng cao của Kadence (Hero, Testimonials, Pricing, v.v.).
- Cấu hình cài đặt khối và các tùy chọn responsive của Kadence.
- Xây dựng bố cục tùy chỉnh bằng các khối grid và container của Kadence.
- Tích hợp các khối Kadence với chủ đề của bạn.
- Tận dụng hệ thống thiết kế và các preset của Kadence.

**Tự động kích hoạt khi:** Plugin Kadence Blocks đang hoạt động trên trang web của bạn.

### Kadence Theme {#kadence-theme}

**Áp dụng cho:** Các trang web sử dụng chủ đề Kadence để thiết kế và tùy chỉnh dựa trên khối.

Kỹ năng Kadence Theme cung cấp hướng dẫn về:

- Tùy chỉnh chủ đề Kadence thông qua global styles và theme.json.
- Sử dụng các mẫu khối và template tích hợp sẵn của Kadence.
- Cấu hình cài đặt và tùy chọn của chủ đề Kadence.
- Xây dựng các thiết kế tùy chỉnh bằng hệ thống thiết kế của Kadence.
- Tích hợp Kadence với các plugin và công cụ phổ biến.

**Tự động kích hoạt khi:** Chủ đề Kadence là chủ đề đang hoạt động của bạn.

## Kỹ Năng Được Chọn Như Thế Nào? {#how-skills-are-selected}

Trợ lý sẽ tự động phát hiện chủ đề đang hoạt động và các plugin đã cài đặt trên mỗi tin nhắn. Nếu có kỹ năng theo chủ đề phù hợp, nó sẽ được tải vào ngữ cảnh của trợ lý một cách tự động. Bạn không cần phải bật hay chuyển đổi kỹ năng thủ công.

### Nhiều Kỹ Năng {#multiple-skills}

Nếu nhiều kỹ năng áp dụng cho trang web của bạn (ví dụ: bạn vừa kích hoạt Kadence Blocks vừa kích hoạt Kadence Theme), trợ lý sẽ truy cập vào tất cả các kỹ năng áp dụng và có thể tham khảo hướng dẫn từ từng kỹ năng.

### Chuyển Đổi Chủ Đề {#switching-themes}

Khi bạn thay đổi chủ đề đang hoạt động, các kỹ năng có sẵn của trợ lý sẽ tự động cập nhật ở tin nhắn tiếp theo. Ví dụ:

1. Bạn đang sử dụng một chủ đề khối với kỹ năng **Block Themes** đang hoạt động.
2. Bạn chuyển sang một chủ đề cổ điển.
3. Ở tin nhắn tiếp theo, kỹ năng **Classic Themes** sẽ tự động được tải, và kỹ năng **Block Themes** sẽ không còn khả dụng nữa.

## Cách Sử Dụng Kỹ Năng Theo Chủ Đề {#using-theme-aware-skills}

Để tận dụng một kỹ năng theo chủ đề, bạn chỉ cần mô tả những gì bạn muốn làm trong giao diện trò chuyện. Trợ lý sẽ tự động tham chiếu đến hướng dẫn của kỹ năng phù hợp.

### Các Lời Nhắc Mẫu (Example Prompts) {#example-prompts}

**Đối với Block Themes:**
> "Tạo một phần hero với hình nền và văn bản căn giữa bằng các mẫu khối."

**Đối với Classic Themes:**
> "Thêm một khu vực widget tùy chỉnh vào sidebar bằng chủ đề con."

**Đối với Kadence Blocks:**
> "Xây dựng một phần testimonials bằng khối Testimonials của Kadence."

**Đối với Kadence Theme:**
> "Tùy chỉnh bố cục header và kiểu dáng menu điều hướng."

Trợ lý sẽ cung cấp hướng dẫn và ví dụ mã cụ thể cho chủ đề và plugin đang hoạt động của bạn.

:::note
Các kỹ năng theo chủ đề tự động có sẵn trong Superdav AI Agent v1.10.0 trở lên. Không yêu cầu thiết lập hoặc cấu hình bổ sung.
:::
