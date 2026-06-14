---
title: Nkwado Site Specification Skill
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Niche Kỹ năng Thông số Trang Web (Site Specification Skill)

Kỹ năng **Thông số Trang Web** là cách có cấu trúc để ghi lại mục tiêu của trang web bạn, đối tượng người dùng và bản sắc thương hiệu của nó. Thông tin này được lưu trong bộ nhớ **site_brief** của bạn, mà các agent sẽ tham khảo qua các phiên làm việc để cung cấp sự hỗ trợ nhất quán và hiểu ngữ cảnh.

## Thông số Trang Web là gì?

Thông số Trang Web là quá trình ghi lại những điều sau:

- **Mục đích trang web (Site purpose)**: Trang web của bạn làm gì và tại sao nó tồn tại
- **Đối tượng mục tiêu (Target audience)**: Ai ghé thăm trang web của bạn và họ cần gì
- **Bản sắc thương hiệu (Brand identity)**: Màu sắc, giọng văn và phong cách hình ảnh của bạn
- **Mục tiêu kinh doanh (Business goals)**: Thành công trông như thế nào đối với trang web của bạn
- **Cấu trúc nội dung (Content structure)**: Trang web của bạn được tổ chức như thế nào

Thông số này sẽ trở thành **site_brief** của bạn, một bộ nhớ bền vững mà các agent dùng để hiểu ngữ cảnh của trang web bạn.

## Tại sao nên sử dụng Thông số Trang Web?

### Tính nhất quán qua các phiên làm việc (Consistency Across Sessions)

Nếu không có site_brief, bạn sẽ phải giải thích lại mục đích trang web của mình mỗi khi bắt đầu một phiên mới. Với nó, các agent sẽ hiểu ngay lập tức:

- Mục tiêu và đối tượng của trang web bạn
- Màu sắc và giọng văn thương hiệu của bạn
- Cấu trúc nội dung của bạn
- Các mục tiêu kinh doanh của bạn

### Đề xuất tốt hơn (Better Recommendations)

Các agent sử dụng site_brief của bạn để:

- Gợi ý các tính năng phù hợp với mục đích trang web của bạn
- Đề xuất cấu trúc nội dung khớp với mục tiêu của bạn
- Đề xuất thiết kế nhất quán với thương hiệu của bạn
- Tránh đề xuất các tính năng không tương thích

### Tiếp nhận nhanh hơn (Faster Onboarding)

Các agent mới (hoặc agent trong các phiên làm việc mới) có thể nhanh chóng nắm bắt được thông tin bằng cách đọc site_brief của bạn thay vì phải hỏi những câu hỏi làm rõ.

## Khởi tạo Thông số Trang Web

### Trong quá trình tiếp nhận Theme Builder (During Theme Builder Onboarding)

Kỹ năng Thông số Trang Web sẽ tự động được khởi tạo trong **luồng tiếp nhận Theme Builder**. Agent Trợ lý Thiết lập (Setup Assistant agent) sẽ hỏi các câu hỏi và xây dựng site_brief của bạn.

### Khởi tạo thủ công (Manual Initiation)

Maka nwere ike ịbegwe Site Specification anyị anyị:

```
"Ka anyị adị mme specification site m"
```

na

```
"Bata m ịrụ site brief"
```

## Nkwado Site Specification

### Ìgbè 1: Ihe Ama Site (Site Purpose)

Agent-ah akanị:

```
Ihe ama primary site gị bụ?
- E-commerce store
- Blog ma site nchịkọta ihe
- Portfolio ma showcase
- SaaS application
- Community ma forum
- Other: [nri]
```

Ị chụrụ category ma ị chụrụ ihe ama gị.

### Ìgbè 2: Onye Nwanyị/Onye Nwa (Target Audience)

```
Onye nwanyị/onye nwa primary gị bụ?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [nri]

Ihe dị mma nke ha bụ?
```

### Ìgbè 3: Ọdụ Brand (Brand Identity)

```
Nke a bụ ajụjụ nkwado brand gị?
- Primary color: [color picker ma hex code]
- Secondary color: [color picker ma hex code]
- Accent color: [optional]

Kedu ka ị chụrụ tone brand gị?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Ìgbè 4: Ọdụ Byee (Business Goals)

```
Nke a bụ ihe ọchiche ịbụ maka site gị?
- Generate leads (Chọpụta ndị nwere ike ịrụ ihe)
- Sell products (Jiji ihe)
- Build community (Rụma mmadụ)
- Share knowledge (Nkwado ihe)
- Establish authority (Rụma ọchịchị)
- Other: [nri]

Ihe metric primary gị bụ?
- Revenue (Ndu nkwado)
- User engagement (Nkwado mmadụ)
- Content reach (Nkwado ihe nwere ike ịgụ)
- Conversions (Ịrụ ihe)
- Other
```

### Ìgbè 5: Ọrụ Ihe (Content Structure)

```
Kedu ka ọrụ gị dị?
- Flat (ihi ihe niile na mmiri dị sama)
- Hierarchical (categories ma subcategories)
- Chronological (style blog)
- Product-based (catalog)
- Other: [nri]

Ihe a bụọrụ ị chọrọ gị?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Memory site_brief Gị

Akpọrọ Site Specification, ihe nwere gị na-eme ka **site_brief** na memory agent gị. Ito bụ aka nchịkọta dị mma na nwere:

## Nhìn và Cập nhật tóm tắt trang web của bạn (site_brief)

### Xem tóm tắt trang web của bạn (View Your site_brief)

Hãy hỏi trợ lý này:

```
"Cho tôi xem tóm tắt trang web của tôi"
```

hoặc

```
"Bạn biết gì về trang web của tôi?"
```

Trợ lý sẽ hiển thị thông tin bạn đã lưu.

### Cập nhật tóm tắt trang web của bạn (Update Your site_brief)

Nếu trang web của bạn thay đổi, bạn có thể cập nhật nó:

```
"Cập nhật tóm tắt trang web của tôi: bây giờ chúng ta nhắm đến khách hàng B2B"
```

hoặc

```
"Làm mới thông số kỹ thuật trang web của tôi"
```

Việc này sẽ chạy lại kỹ năng Site Specification với thông tin hiện có của bạn làm điểm khởi đầu.

## Trợ lý sử dụng tóm tắt trang web (site_brief) như thế nào

### Đề xuất thiết kế (Design Recommendations)

Khi bạn yêu cầu thay đổi về thiết kế, trợ lý sẽ tham khảo tóm tắt trang web của bạn:

```
Bạn: "Thiết kế lại trang chủ của tôi"
Trợ lý: "Dựa trên tóm tắt trang web của bạn, bạn đang nhắm đến phụ nữ từ 25-45 tuổi
với giọng văn ấm áp, thủ công mỹ nghệ. Tôi sẽ tạo một thiết kế nhấn mạnh
trang sức làm bằng tay và các giá trị bền vững của bạn."
```

### Đề xuất tính năng (Feature Suggestions)

Trợ lý đề xuất các tính năng phù hợp với mục tiêu của bạn:

```
Bạn: "Tôi nên thêm những tính năng nào?"
Trợ lý: "Đối với một cửa hàng thương mại điện tử tập trung vào lòng trung thành của khách hàng,
tôi đề xuất: chương trình khách hàng thân thiết, đánh giá của khách hàng, bản tin email,
và gợi ý sản phẩm."
```

### Cấu trúc nội dung (Content Structure)

Trợ lý đề xuất cách sắp xếp nội dung dựa trên cấu trúc của bạn:

Kamarị: "Ndeewo, unu gara blog m? / How should I organize my blog?"
Agent: "Ma da ị chọrọ nwere catalog nke na-akwụkwọ (product catalog) na blog, m ga-eme ka ị gbara ọkụlọ ndị a n'ụmọdụ produkto (product category) ma ị chọrọ 'styling guides' nke na-agwụ akụkọ ahụ nke na-agwụ produkto anọ anọ."

## Ịgba Nkwado Ndị Mba Ọ bụrụ Na-eme (Best Practices)

### Ịgụ Akụkọ Ahụ (Be Specific)

Ọ bụ nsogbu ịgba nkwado "nwere onye ọ bụla," ma jere ịgba nkwado nke onye ị chọrọ:

- ✓ "Nwanyị ndị nwere ọmụmụ 25-45, na-agba nkwanye ùgwù (sustainable fashion)"
- ✗ "Onye ọ bụla"

### Ịgụ Akwụkwọ Ndị Mma (Update Regularly)

Ma na-agbata site gị, ị chọrọ ịgụ akwụkwọ `site_brief` gị:

- Mgbe ị chọrọ ịgba onye ọhụrụ
- Mgbe ị nwere ụdị produkto ọhụrụ
- Mgbe ị chọrọ ịgba akaebe (brand identity) gị
- Mgbe ị chọrọ ịgbara ihe ndị dị mma na ebe a ị nwere

### Ịgụ Nkwado Ndị Na-agba (Use Consistent Terminology)

Jere nkwado ndị ọzọ nke ọ bụ na-eme ka ị gbara nkwado ndị ọzọ na-enwe ike ịghọta gị:

- ✓ Jere "sustainable jewelry" karịghị ịgụ "eco-friendly jewelry" ma "green products"
- ✓ Jere onye ị chọrọ na-eme ka ị gbara nkwado ahụ na-enwe ike ịghọta gị.

### Ịgba Nkwado Ahụ (Include Context)

Gụ akụkọ ahụ nke na-agbata ihe ndị dị mma maka ndị mmadụ ga-eme ka ebe a ị chọrọ:

- "Anyị na-eji onye ọrụ ndị na-enwe ike ịhụnanya ihe dị mma karịghị ịdị mma n'ịkọwa"
- "Onye ị chọrọ na-enwe ike ịgụ ihe nwere modern design"
- "Anyị bụ startup nke a na-eme ka anyị na-eji ihe ndị dị mma maka ebe a anyị nwere ọkụkọ (cost-effective solutions)"

## Ọzọ na Onweghị Nwere Theme Builder (Relationship to Theme Builder Onboarding)

Skill Site Specification na-agbata n'ụzọ na **Theme Builder onboarding flow**. Mgbe ị chọrọ ịgụ onboarding, site_brief gị ga-eme ka ọ bụ akụkọ ahụ nke ị chọrọ.

Ị chụrụ onweghị Site Specification ma ọ bụrụ na ị chọrọ:

- Ịgba nkwado gị n'ụzọ dị mma ụfọdụ mgbe ị na-eme setup ọkụkọ ahụ
- Ịgụ site_brief gị mgbe site gị na-agbata ihe ndị dị mma

## Ọnweghị Nwere Ihe Ndị Mba Ọ Na-eme (Troubleshooting)

**Site_brief m na-enweghị ọrụ**
- Jere ka onye ahụ nwere eziokwu (memory)
- Biko ka onye ahụ gbara "recall my site brief"
- Jere ka memory na-agbata n'ụzọ dị mma n'ụzọ ị chọrọ

**M muốn bắt đầu lại với một site\_brief mới**
- Hỏi agent: "Xóa site brief của tôi và bắt đầu lại"
- Sau đó chạy Site Specification lại

**Agent đang đưa ra các đề xuất không khớp với site\_brief của tôi**
- Yêu cầu agent: "Xem lại site brief của tôi"
- Cập nhật site\_brief của bạn nếu nó đã lỗi thời
- Cung cấp thêm thông tin chi tiết trong các yêu cầu của bạn

## Các bước tiếp theo

Sau khi xác định rõ thông số kỹ thuật (site specification) của bạn:

1. **Sử dụng Theme Builder**: Tạo một theme tùy chỉnh dựa trên site\_brief của bạn
2. **Tinh chỉnh Thiết kế**: Sử dụng kỹ năng Design System Aesthetics để làm việc thiết kế chi tiết
3. **Lên kế hoạch Nội dung**: Hỏi các agent về đề xuất cấu trúc nội dung
4. **Xây dựng Tính năng**: Yêu cầu các tính năng phù hợp với mục tiêu kinh doanh của bạn
