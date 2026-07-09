---
title: Uburyo bwo gukora Site Specification
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Kỹ năng Xác định Yêu cầu Trang web (Site Specification Skill) {#site-specification-skill}

Kỹ năng **Site Specification** là một cách tiếp cận có cấu trúc để ghi lại các mục tiêu, đối tượng và bản sắc thương hiệu của trang web của bạn. Thông tin này được lưu trữ trong bộ nhớ **site_brief** của bạn, mà các agent sẽ tham khảo qua các phiên làm việc để cung cấp sự hỗ trợ nhất quán và hiểu ngữ cảnh.

## Site Specification là gì? {#what-is-site-specification}

Site Specification là quá trình ghi lại những điều sau:

- **Mục đích trang web (Site purpose)**: Trang web của bạn làm gì và tại sao nó tồn tại
- **Đối tượng mục tiêu (Target audience)**: Ai truy cập trang web của bạn và họ cần gì
- **Bản sắc thương hiệu (Brand identity)**: Màu sắc, giọng điệu và phong cách hình ảnh của bạn
- **Mục tiêu kinh doanh (Business goals)**: Thành công trông như thế nào đối với trang web của bạn
- **Cấu trúc nội dung (Content structure)**: Trang web của bạn được tổ chức như thế nào

Việc xác định này sẽ trở thành **site_brief** của bạn, một bộ nhớ bền vững mà các agent sử dụng để hiểu ngữ cảnh của trang web.

## Tại sao nên sử dụng Site Specification? {#why-use-site-specification}

### Tính nhất quán qua các phiên làm việc (Consistency Across Sessions) {#consistency-across-sessions}

Nếu không có site_brief, bạn sẽ phải giải thích lại mục đích trang web của mình mỗi khi bắt đầu một phiên mới. Với nó, các agent ngay lập tức hiểu:

- Mục tiêu và đối tượng của trang web bạn
- Màu sắc và giọng điệu thương hiệu của bạn
- Cấu trúc nội dung của bạn
- Các mục tiêu kinh doanh của bạn

### Đề xuất tốt hơn (Better Recommendations) {#better-recommendations}

Các agent sử dụng site_brief của bạn để:

- Gợi ý các tính năng phù hợp với mục đích trang web của bạn
- Đề xuất cấu trúc nội dung khớp với mục tiêu của bạn
- Đề xuất thiết kế nhất quán với thương hiệu của bạn
- Tránh đề xuất các tính năng không tương thích

### Bắt đầu nhanh hơn (Faster Onboarding) {#faster-onboarding}

Các agent mới (hoặc agent trong các phiên làm việc mới) có thể nhanh chóng nắm bắt được thông tin bằng cách đọc site_brief của bạn thay vì phải hỏi những câu hỏi làm rõ.

## Khởi tạo Site Specification {#initiating-site-specification}

### Trong quá trình hướng dẫn Theme Builder (During Theme Builder Onboarding) {#during-theme-builder-onboarding}

Kỹ năng Site Specification được tự động khởi tạo trong luồng **Theme Builder onboarding flow**. Agent Trợ lý Thiết lập (Setup Assistant agent) sẽ đặt câu hỏi và xây dựng site_brief của bạn.

### Khởi tạo thủ công (Manual Initiation) {#manual-initiation}

Woweza Site Specification w'igice:

```
"Tugereye uburyo bwo site yanjye"
```

cyangwa

```
"Yaba nshobora gukora sit brief"
```

## Uburyo bwo Gukora Site Specification {#the-site-specification-process}

### Icyemezo 1: Uburyo bwo Site (Site Purpose) {#step-1-site-purpose}

Umuvugizi utangira ubu:

```
Uburyo bwo site yawe ni iki?
- E-commerce store
- Blog cyangwa sit y'ubwumvikane (content site)
- Portfolio cyangwa gukoresha ibyo wifuza (showcase)
- SaaS application
- Igihugu cyangwa forum
- Hari ikindi: [gukwibuka]
```

Ushobora gukoresha uburyo cyangwa gukwibuka uburyo bwo site yawe.

### Icyemezo 2: Abantu Bakoresha (Target Audience) {#step-2-target-audience}

```
Abantu bakoresha bwa mbere ni yabo?
- Abakoresha / umuntu wese
- Abantu b'ubucuruzi
- Abatema / abagize uburyo bwo gukora ibintu (technical users)
- Abanyeshuri / abashobora gukora ibintu (educators)
- Hari ikindi: [gukwibuka]

Icyemezo cyabo cy'ubwoko bw'ibyo bashaka?
```

### Icyemezo 3: Ubwoko bwo Brand (Brand Identity) {#step-3-brand-identity}

```
Uburyo bwo brand yawe ni iki?
- Uburyo bwo mbere: [color picker cyangwa hex code]
- Uburyo bwo kabiri: [color picker cyangwa hex code]
- Uburyo bwo gukoresha (Accent color): [ikindi cyo gukwibuka]

Ushobora kuvuga uburyo bwo brand yawe ni iki?
- Professional / corporate
- Kreatif / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Icyemezo 4: Intego za Byishobora (Business Goals) {#step-4-business-goals}

```
Uburyo bwo site yanjye ni iki cyo gushobora kwibuka?
- Gukoresha abantu bashaka ibyo (leads)
- Gutangira ibintu (sell products)
- Gutangira umuryango (build community)
- Kwibuka amakuru (share knowledge)
- Gutera uburyo bwo gukora ibintu (establish authority)
- Hari ikindi: [gukwibuka]

Icyemezo cyacu cy'ubwoko bw'ibyo bashaka ni iki?
- Icyemezo (Revenue)
- Uburyo bwo abantu bakoresha (User engagement)
- Ubushobozi bwa amakuru (Content reach)
- Gukora ibintu (Conversions)
- Hari ikindi
```

### Icyemezo 5: Uburyo bwo Gukoresha Inyandiko (Content Structure) {#step-5-content-structure}

```
Inyandiko zawe zishobora gukoreshwa mu buryo banga?
- Flat (inshingano ryose ririmo mu gihe cyose)
- Hierarchical (categories n'ubwoko bw'ibyo mu gihe cyose)
- Chronological (mu buryo bwo blog)
- Product-based (mu catalog)
- Hari ikindi: [gukwibuka]

Uburyo bwo gukoresha ibintu by'inyandiko ni iki?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Hari ikindi
```

## Icyemezo cy'Site_brief yawe (Your site_brief Memory) {#your-sitebrief-memory}

Nyuma yo gukemura Site Specification, uburyo bwo kwibuka bwawe bishobora gukoreshwa nk'**site_brief** mu memory yawe yanjye. Iki ni rekodi ishyirwaho ikoranabuhinduzi (structured record) ikurikirana n'ibyo:

## Kuva Ubwumwebwe n'Ubwumwebwe Wowe (site_brief) {#viewing-and-updating-your-sitebrief}

### Kubona Ubwumwebwe Wowe (View Your site_brief) {#view-your-sitebrief}

Muvugura umuntu w'ubwumwebwe (agent):

```
"Show me my site brief"
```

cyangwa

```
"What do you know about my site?"
```

Umuntu w'ubwumwebwe uzakubwira uburyo wowe wari wuriye.

### Gutera Ubwumwebwe Wowe (Update Your site_brief) {#update-your-sitebrief}

Niba umuganda wowe ugiye mu gihe cyiza, uza kuba ufite ubushobozi bwo gutera ubwumwebwe:

```
"Update my site brief: we're now targeting B2B customers"
```

cyangwa

```
"Refresh my site specification"
```

Ibi bituma umuganda w'Ubwumwebwe Wowe yoroshye cyane n'ubwumwebwe uyu, mu gihe cyiza.

## Uburyo Umuganda Wowe Ufite Icyemezo (How Agents Use site_brief) {#how-agents-use-sitebrief}

### Icyemezo Cy'Ubunyabwera (Design Recommendations) {#design-recommendations}

Iyo usaba uburyo bwo gukoresha umwebwe, umuganda wowe ufungura ubwumwebwe wowe:

```
Wowe: "Redesign my homepage"
Umuganda: "Kugira ngo umwebwe wowe ubanze mu gihe cyiza, ugiye ku bakazi bafite 25-45 y'umwaka kandi ufite uburyo bw'artisanal. Azakora uburyo bwo gukoresha ubushobozi bwa jewelry yawe n'uburyo bw'ubwujyu."
```

### Icyemezo Cy'Inzira (Feature Suggestions) {#feature-suggestions}

Umuganda wowe ufite cyemezo cyangwa inama zikwiye n'ibyo ugiye mu gihe cyiza:

```
Wowe: "What features should I add?"
Umuganda: "Kuri duka rya e-commerce ryari ryitonderwa ku kwirinda abakoresha, nshobora kugira inama zikwiye: loyalty program, customer reviews, email newsletter, kandi inama za mahere."
```

### Ubwumwebwe bw'Ubwumwebwe (Content Structure) {#content-structure}

Umuganda wowe ufungura ubwumwebwe bwo gukoresha umwanya mu gutera ubwumwebwe:

Uyu: "Ndashobya nshobora kurinda blog yorera?"
Agent: "Kuko wamukoresha product catalog na blog, nshobora kukwibanda ibintu byo blog ku buryo bwo product category kandi ukora 'styling guides' zishobora kwerekana ibintu byo product byo mu gihe runaka."

## Uburyo bwiza (Best Practices) {#best-practices}

### Kurera ku gitiye {#be-specific}
Ntabwo ugukoresha "abantu benshi", ubufasha kumenya abantu bwawe:

- ✓ "Abafuranyi babiri ku gishumi, bashobora kubyara mu fashion y'ubwujgwa"
- ✗ "Bose"

### Kurera ku gitiye {#update-regularly}
Ntabwo ugukoresha site_brief yawe kugira ngo umuzure uburera:

- Iyo utera ubushobozi bwawe ku muntu w'ibindi
- Iyo utagira ibintu byo product byshya
- Iyo uburyo bw'ubwujgwa bwawe bukurera
- Iyo ibyo ukeneye mu gikorwa cy'ubucuruzi bikomeye

### Gukoresha ibi cyemezo byo kubyara {#use-consistent-terminology}
Gukoresha amagambo menshi mu gihe runaka:

- ✓ Umuze "sustainable jewelry" (ntabwo "eco-friendly jewelry" ntabwo "green products")
- ✓ Kurera umuntu w'ibindi mu buryo bwiza

### Gukoresha uburyo bwa gikorwa {#include-context}
Kugira ibyo byo mbere, ugomba kubyara ibintu bitanga umuzure w'ubwujgwa:

- "Turi twemerera abantu babiri ku gishumi, bashobora kubyara mu fashion y'ubwujgwa"
- "Abantu bwawe barashobora kwiga cyane kandi bakwiriye uburyo bw'ubwujgwa bukurera"
- "Turi twemerera umuzure w'ubucuruzi, ntabwo twishobora gukoresha ibintu byo kubyara ku muntu."

## Uburyo bwo guhuza na Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

Uburyo bwa Site Specification bugaragazwa mu **Theme Builder onboarding flow**. Iyo utamukorera uburyo, site_brief yawe igaragara neza n'ibintu wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari

**Ndashaka kubonana kuri site\_brief yuguhereye**
- Angiramo agenti: "Clear my site brief and start fresh" (Gusubura site brief yawe kandi twitangira mu buryo bushya)
- Nyabwire Site Specification cyane

**Igihe agenti igira uburyo bwo gukora ibyo bitanga byatandukanye n'ibyo yashobora kuba ari sita brief yawe**
- Angiramo agenti ko "review my site brief" (Gushyira mu mategeko site brief yawe)
- Urugura site\_brief yawe niba yari yagizeye (if it's outdated)
- Ufite uburyo bwo gukoresha ibindi by'ubwitonzi mu gihe cyo gutangira

## Icyiza cyo gukora ibyo bitangwa {#troubleshooting}

Nyuma yo gukora Site Specification yawe:

1. **Gukoresha Theme Builder**: Gukora theme y'ibyo wifuza (custom theme) itandukanye n'iyo site brief yawe
2. **Gusubura Uburyo bwo gukoresha (Refine Design)**: Gukoresha skill ya Design System Aesthetics kugira ngo ukurinda ibyo bitangwa mu buryo bwiza cyane
3. **Gutera Inshingano za Content**: Angiramo agenti ko yugire uburyo bwo gutera inyandiko (content structure recommendations)
4. **Gukora Icyiciro (Build Features)**: Angiramo ibyiciro byerekana n'ibyo mwumva mu gihe cyo gukora ibyo mwumva mu byerekeje

**Uburyo bwo gukoresha amagambo y'ubwitonzi:**
- **Site brief**: Icyemezo cyangwa inama zikoreshwa mu gutangira umuntu wumva.
- **Agenti**: Umuntu cyangwa ishusho itanga ubufasha.
- **Theme Builder**: Uburyo bwo gukora theme y'ibyo mwumva (custom theme).
- **Design System Aesthetics skill**: Icyemezo cyangwa uburyo bwo gukoresha ubwitonzi mu gutera umuntu wumva mu buryo bwiza.
