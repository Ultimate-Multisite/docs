---
title: Kỹ năng Đặc tả Trang web
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Thiết lập thông số trang web

**Kỹ năng Thiết lập thông số trang web** là một phương pháp có cấu trúc để ghi lại các mục tiêu, đối tượng và nhận diện thương hiệu của trang web bạn. Thông tin này được lưu trữ trong bộ nhớ **site_brief** của bạn, nơi các agent (trợ lý AI) tham chiếu qua các phiên làm việc để cung cấp sự hỗ trợ nhất quán và nhận biết ngữ cảnh.

## Thiết lập thông số trang web là gì? {#what-is-site-specification}

Thiết lập thông số trang web là quá trình tài liệu hóa các yếu tố sau:

- **Mục đích trang web**: Trang web của bạn làm gì và tại sao nó tồn tại
- **Đối tượng mục tiêu**: Ai truy cập trang web của bạn và họ cần gì
- **Nhận diện thương hiệu**: Màu sắc, giọng điệu và phong cách trực quan của bạn
- **Mục tiêu kinh doanh**: Thành công trông như thế nào đối với trang web của bạn
- **Cấu trúc nội dung**: Trang web của bạn được tổ chức như thế nào

Thông số này sẽ trở thành **site_brief** của bạn, một bộ nhớ bền vững mà các agent sử dụng để hiểu ngữ cảnh của trang web bạn.

## Tại sao nên sử dụng Thiết lập thông số trang web? {#why-use-site-specification}

### Tính nhất quán qua các phiên làm việc {#consistency-across-sessions}

Nếu không có site_brief, bạn sẽ phải giải thích lại mục đích của trang web mỗi khi bắt đầu một phiên làm việc mới. Với nó, các agent sẽ ngay lập tức hiểu:

- Mục tiêu và đối tượng của trang web bạn
- Màu sắc và giọng điệu thương hiệu của bạn
- Cấu trúc nội dung của bạn
- Các mục tiêu kinh doanh của bạn

### Đề xuất tốt hơn {#better-recommendations}

Các agent sử dụng site_brief của bạn để:

- Đề xuất các tính năng phù hợp với mục đích của trang web
- Giới thiệu cấu trúc nội dung phù hợp với mục tiêu của bạn
- Đề xuất thiết kế nhất quán với thương hiệu của bạn
- Tránh đề xuất các tính năng không tương thích

### Bắt kịp công việc nhanh hơn {#faster-onboarding}

Các agent mới (hoặc agent trong các phiên làm việc mới) có thể nhanh chóng nắm bắt thông tin bằng cách đọc site_brief của bạn thay vì phải hỏi các câu hỏi làm rõ.

## Khởi tạo Thiết lập thông số trang web {#initiating-site-specification}

### Trong quá trình thiết lập Theme Builder {#during-theme-builder-onboarding}

Kỹ năng Thiết lập thông số trang web được tự động khởi tạo trong **quy trình thiết lập Theme Builder**. Agent Setup Assistant sẽ đặt câu hỏi và xây dựng site_brief của bạn.

### Khởi tạo thủ công {#manual-initiation}

Bạn có thể bắt đầu Thiết lập thông số trang web bất cứ lúc nào:

```
"Let's define my site specification"
```

hoặc

```
"Help me create a site brief"
```

## Quy trình Thiết lập thông số trang web {#the-site-specification-process}

### Bước 1: Mục đích trang web {#step-1-site-purpose}

Agent sẽ hỏi:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Bạn có thể chọn một danh mục hoặc mô tả mục đích của riêng mình.

### Bước 2: Đối tượng mục tiêu {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Bước 3: Nhận diện thương hiệu {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Bước 4: Mục tiêu kinh doanh {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Bước 5: Cấu trúc nội dung {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Bộ nhớ site_brief của bạn {#your-sitebrief-memory}

Sau khi hoàn thành Thiết lập thông số trang web, thông tin của bạn sẽ được lưu dưới dạng **site_brief** trong bộ nhớ agent. Đây là một bản ghi có cấu trúc chứa:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Xem và Cập nhật site_brief của bạn {#viewing-and-updating-your-sitebrief}

### Xem site_brief của bạn {#view-your-sitebrief}

Hãy hỏi agent:

```
"Show me my site brief"
```

hoặc

```
"What do you know about my site?"
```

Agent sẽ hiển thị thông số đã lưu của bạn.

### Cập nhật site_brief của bạn {#update-your-sitebrief}

Nếu trang web của bạn phát triển, bạn có thể cập nhật nó:

```
"Update my site brief: we're now targeting B2B customers"
```

hoặc

```
"Refresh my site specification"
```

Thao tác này sẽ chạy lại kỹ năng Thiết lập thông số trang web với thông tin hiện có của bạn làm điểm khởi đầu.

## Agent sử dụng site_brief như thế nào {#how-agents-use-sitebrief}

### Đề xuất thiết kế {#design-recommendations}

Khi bạn yêu cầu thay đổi thiết kế, các agent sẽ tham chiếu site_brief của bạn:

```
Bạn: "Redesign my homepage"
Agent: "Dựa trên site brief của bạn, bạn đang nhắm đến phụ nữ từ 25-45 tuổi
với giọng điệu ấm áp, thủ công. Tôi sẽ tạo một thiết kế nhấn mạnh
vào đồ trang sức thủ công và các giá trị bền vững của bạn."
```

### Gợi ý tính năng {#feature-suggestions}

Các agent đề xuất các tính năng phù hợp với mục tiêu của bạn:

```
Bạn: "Tôi nên thêm những tính năng nào?"
Agent: "Đối với một cửa hàng thương mại điện tử tập trung vào lòng trung thành của khách hàng,
tôi khuyên bạn nên có: chương trình khách hàng thân thiết, đánh giá của khách hàng, bản tin qua email,
và đề xuất sản phẩm."
```

### Cấu trúc nội dung {#content-structure}

Các agent đề xuất tổ chức nội dung dựa trên cấu trúc của bạn:

```
Bạn: "Tôi nên tổ chức blog của mình như thế nào?"
Agent: "Vì bạn sử dụng danh mục sản phẩm kèm blog, tôi đề xuất
tổ chức các bài viết theo danh mục sản phẩm và tạo 'hướng dẫn phối đồ'
trưng bày nhiều sản phẩm cùng nhau."
```

## Các phương pháp hay nhất {#best-practices}

### Cụ thể hóa {#be-specific}

Thay vì "đối tượng chung," hãy mô tả đối tượng thực tế của bạn:

- ✓ "Phụ nữ từ 25-45 tuổi, quan tâm đến thời trang bền vững"
- ✗ "Mọi người"

### Cập nhật thường xuyên {#update-regularly}

Khi trang web của bạn phát triển, hãy cập nhật site_brief:

- Khi bạn chuyển hướng sang đối tượng mới
- Khi bạn thêm dòng sản phẩm mới
- Khi nhận diện thương hiệu của bạn thay đổi
- Khi mục tiêu kinh doanh của bạn thay đổi

### Sử dụng thuật ngữ nhất quán {#use-consistent-terminology}

Sử dụng các thuật ngữ giống nhau qua các phiên làm việc:

- ✓ Luôn nói "trang sức bền vững" (chứ không phải "trang sức thân thiện môi trường" và "sản phẩm xanh")
- ✓ Luôn đề cập đến đối tượng của bạn theo cùng một cách

### Bao gồm ngữ cảnh {#include-context}

Cung cấp bối cảnh giúp các agent hiểu các quyết định của bạn:

- "Chúng tôi đang nhắm mục tiêu đến các chuyên gia coi trọng chất lượng hơn giá cả"
- "Đối tượng của chúng tôi am hiểu công nghệ và mong đợi thiết kế hiện đại"
- "Chúng tôi là một startup tự tài trợ, vì vậy chúng tôi cần các giải pháp tiết kiệm chi phí"

## Mối quan hệ với Quy trình thiết lập Theme Builder {#relationship-to-theme-builder-onboarding}

Kỹ năng Thiết lập thông số trang web được tích hợp vào **quy trình thiết lập Theme Builder**. Khi bạn hoàn thành quy trình thiết lập, site_brief của bạn sẽ được tự động tạo với thông tin bạn đã cung cấp.

Bạn cũng có thể chạy Thiết lập thông số trang web độc lập nếu bạn muốn:

- Tinh chỉnh thông số sau khi thiết lập ban đầu
- Cập nhật site_brief khi trang web của bạn phát triển
- Tạo một thông số chi tiết trước khi bắt đầu Theme Builder

## Khắc phục sự cố {#troubleshooting}

**site_brief của tôi không được sử dụng**
- Xác nhận rằng agent có quyền truy cập vào bộ nhớ
- Yêu cầu agent "nhắc lại site brief của tôi"
- Kiểm tra xem bộ nhớ đã được bật trong cài đặt của bạn chưa

**Tôi muốn bắt đầu lại với một site_brief mới**
- Yêu cầu agent: "Clear my site brief and start fresh"
- Sau đó chạy lại Thiết lập thông số trang web

**Agent đưa ra các đề xuất không khớp với site_brief của tôi**
- Yêu cầu agent "review my site brief"
- Cập nhật site_brief của bạn nếu nó đã lỗi thời
- Cung cấp thêm ngữ cảnh trong các yêu cầu của bạn

## Các bước tiếp theo {#next-steps}

Sau khi xác định thông số trang web của bạn:

1. **Sử dụng Theme Builder**: Tạo một theme tùy chỉnh dựa trên site_brief của bạn
2. **Tinh chỉnh thiết kế**: Sử dụng Design System Aesthetics skill cho công việc thiết kế chi tiết
3. **Lên kế hoạch nội dung**: Yêu cầu agent các đề xuất cấu trúc nội dung
4. **Xây dựng tính năng**: Yêu cầu các tính năng phù hợp với mục tiêu kinh doanh của bạn
