---
title: Ubwumvikane bw'Urugero rwa Umuhanga
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Kỹ năng Nhạy cảm với Chủ đề {#theme-aware-skills}

Superdav AI Agent v1.10.0 mang theo bốn kỹ năng tích hợp mới tự động thích ứng với chủ đề WordPress bạn đang sử dụng. Những kỹ năng này cung cấp hướng dẫn và khả năng chuyên biệt được điều chỉnh theo kiến trúc và các tính năng của chủ đề đó.

## Kỹ năng Nhạy cảm với Chủ đề là gì? {#what-are-theme-aware-skills}

Kỹ năng nhạy cảm với chủ đề là những cơ sở kiến thức và bộ công cụ được cấu hình sẵn mà trợ lý AI sẽ tự động chọn dựa trên chủ đề WordPress đang hoạt động trên trang web của bạn. Khi bạn chuyển đổi chủ đề, các kỹ năng có sẵn của trợ lý sẽ tự động cập nhật — không cần cấu hình thủ công.

Mỗi kỹ năng bao gồm:

- **Tài liệu cụ thể cho chủ đề** — hướng dẫn cách sử dụng và tùy chỉnh chủ đề
- **Tham chiếu khối (Block) và mẫu (pattern)** — các khối, mẫu và tùy chọn thiết kế có sẵn
- **Ví dụ về tùy chỉnh** — các đoạn mã và mẫu cấu hình cho các tác vụ phổ biến
- **Các phương pháp thực hành tốt nhất** — các khuyến nghị về kiến trúc và quy trình làm việc của chủ đề

## Các Kỹ năng Nhạy cảm với Chủ đề Có Sẵn {#available-theme-aware-skills}

### Chủ đề Khối (Block Themes) {#block-themes}

**Áp dụng cho:** Các chủ đề sử dụng kiến trúc dựa trên khối WordPress (Full Site Editing).

Kỹ năng Block Themes cung cấp hướng dẫn về:

- Tạo và chỉnh sửa các mẫu (templates) bằng trình soạn thảo khối
- Làm việc với các mẫu khối (block patterns) và các khối có thể tái sử dụng
- Tùy chỉnh kiểu dáng toàn cục và cài đặt theme.json
- Sử dụng các khối chủ đề và biến thể của chúng
- Xây dựng các mẫu khối tùy chỉnh cho trang web của bạn

**Tự động kích hoạt khi:** Chủ đề đang hoạt động của bạn là một chủ đề khối (hỗ trợ tính năng `block-templates`).

### Chủ đề Cổ điển (Classic Themes) {#classic-themes}

**Áp dụng cho:** Các chủ đề WordPress truyền thống sử dụng các mẫu PHP và trình soạn thảo cổ điển.

Kỹ năng Classic Themes cung cấp hướng dẫn về:

Gukoresha n'ubwujega n'ubwujega mu PHP template files no hooks
Kugenzura umutandukiro w'umutema bishobora gukorwa ku Customizer
Gukoresha widget areas no sidebars
Gukorera CSS no uburyo bw'umutema (child theme development)
Kumenya ubwujega bw'umutema n'uburyo bw'umutema (template tags)

**Bishobora gukorwa mu gihe cyose:** Umutema wako wariwe ari umutema wa classic (non-block).

### Kadence Blocks {#kadence-blocks}

**Bishobora gukoreshwa kuri:** Sites zikoresha plugin ya Kadence Blocks kugira ngo zikoreshe uburyo bw'umutandukiro bishobora gukorwa n'amashobora (block-based design).

Ubwujega bw'Kadence Blocks bukurinda ku:

- Gukoresha ubushobozi bw'advanced blocks bwa Kadence (Hero, Testimonials, Pricing, n'ibindi)
- Gukoresha uburyo bwo gukoresha settings no options za blocks za Kadence no uburyo bwo gukorera responsive
- Gukora layouts zikoreshwa n'amashobora ya grid no container bwa Kadence
- Gutangira (Integrate) Kadence blocks na umutema wako
- Gukoresha design system no presets za Kadence

**Bishobora gukorwa mu gihe cyose:** Plugin ya Kadence Blocks yariwe kuri site yawe.

### Kadence Theme {#kadence-theme}

**Bishobora gukoreshwa kuri:** Sites zikoresha umutema wa Kadence kugira ngo zikoreshe uburyo bw'umutandukiro bishobora gukorwa n'amashobora (block-based design) no gukoresha.

Ubwujega bw'Kadence Theme bukurinda ku:

- Gukorera umutema wa Kadence bishobora gukorwa mu byereka by'global styles no theme.json
- Gukoresha amashobora (patterns) n'amashobora (templates) y'Kadence
- Gukoresha uburyo bwo gukoresha settings no options za umutema wa Kadence
- Gukora designs zikoreshwa n'uburyo bw'umutandukiro bwa design system bwa Kadence
- Gutangira (Integrate) Kadence na plugins n'ibindi by'umuntu bafite ubwujega

**Bishobora gukorwa mu gihe cyose:** Umutema wa Kadence wariwe ari umutema wako.

## Uburyo bw'Ubwujega Bw'Umwujega (How Skills Are Selected) {#how-skills-are-selected}

Assistant yagize uburyo bwo kumenya umutema wako wariwe n'ibindi by'umuntu bafite ubwujega kuri kila message. Hejuru, iyo ubu bwujega bukurinda ku umutema wako wariwe no plugins zawe zikoreshwa. Iyo hari ubwujega bushobora gukorwa mu gihe cyose, bitangira mu context ya assistant. Umatwe n'uburyo bwo gukoresha skills (skills) nta kumenya cyangwa gukoresha uburyo bwo gukoresha skills (skills) mu gihe cyose.

### Multiple Skills {#multiple-skills}

Niba hari uburyo bishobora kubyara ku rugero rwawe (urugero, niba ufite Kadence Blocks n'ibyo mu Theme yashobora gukoreshwa), umusanzwe ushaka uburyo bwose bwo gukoresha. Icyemezo cyangwa inama zikoreshwa zikoreshwa ku rugero rwawe.

### Gukoresha Themes (Ubwumvikane) {#switching-themes}

Iyo utangira gukora theme yashobora gukoreshwa, uburyo bwo gukoresha skills za assistant bizakomeza kubara mu gihe cy'ibindi byo bikurikira. Urugero:

1. Ugiye gukoresha theme ya blocks yakoresheje **Block Themes** skill.
2. Ugiye gukora theme ya classic (classic theme).
3. Mu gihe cy'ibindi byo bikurikira, **Classic Themes** skill izakomeza kubara, kandi **Block Themes** skill itabara.

## Gukoresha Skills Zikoresha Theme {#using-theme-aware-skills}

Kugira ngo uburyo bwo gukora ibyo wifuza mu chat interface, ugiye kuvuga iki cyangwa iki. Assistant izakoresha inama z'skill zikoreshwa ku rugero rwawe.

### Inama za Urugero (Example Prompts) {#example-prompts}

**Kuva ku Block Themes:**
> "Yitondera hero section yizwi n'ibyo mu gukoresha block patterns."

**Kuva ku Classic Themes:**
> "Yitondera widget area yisanzwe ku sidebar yashobora gukoreshwa child theme."

**Kuva ku Kadence Blocks:**
> "Yitondera testimonials section yizwi n'ibyo mu gukoresha Kadence Testimonials block."

**Kuva ku Kadence Theme:**
> "Yitondera uburyo bwo gukora header layout no gukoresha navigation menu styling."

Assistant izakubyara inama zikoreshwa theme kandi code examples zikoreshwa mu gihe cy'ibindi byo bikurikira.

:::note
Skills za gukoresha theme bizakomeza kubara mu Superdav AI Agent v1.10.0 no ku gihe cyiza cyane. Nta ngombwa gukora ibindi cyangwa gukorera ibindi.
:::
