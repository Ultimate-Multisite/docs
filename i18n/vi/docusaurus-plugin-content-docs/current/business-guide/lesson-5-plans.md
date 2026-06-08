---
title: 'Bài học 5: Thiết kế kế hoạch của bạn'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Bài 5: Thiết Kế Các Gói Dịch Vụ Của Bạn

Các cấp độ gói dịch vụ của bạn không chỉ là mức giá—chúng là sự phản ánh cách thức hoạt động thực tế của nhóm khách hàng mục tiêu của bạn. Trong bài học này, bạn sẽ thiết kế các cấp độ sản phẩm phù hợp với nhu cầu thực tế của các doanh nghiệp thể hình ở các giai đoạn khác nhau.

## Chúng Ta Đã Dừng Ở Đâu

FitSite đã có sẵn ba mẫu (Studio Essential, Gym Pro, Fitness Chain). Bây giờ chúng ta sẽ tạo các gói dịch vụ xác định những gì khách hàng được truy cập và những gì họ phải trả.

## Tư Duy Theo Phân Khúc Khách Hàng

Sai lầm mà hầu hết mọi người mắc phải là thiết kế các gói dịch vụ dựa trên các tính năng kỹ thuật (dung lượng lưu trữ, băng thông, số lượng trang). Khách hàng mục tiêu của bạn không suy nghĩ theo những thuật ngữ đó. Một chủ phòng gym nghĩ về những gì họ cần để vận hành doanh nghiệp của mình.

Đối với các studio thể hình, có ba phân khúc tự nhiên tồn tại:

| Phân khúc | Họ là ai | Họ cần gì |
|---------|-------------|----------------|
| **Huấn luyện viên cá nhân / studio nhỏ** | 1-3 nhân viên, một địa điểm, mới bắt đầu | Một trang web chuyên nghiệp, thông tin lớp học, form liên hệ |
| **Phòng gym đã thành lập** | 5-20 nhân viên, một địa điểm, đang phát triển | Tất cả những thứ trên cộng thêm đặt lịch, blog, thư viện ảnh, tên miền tùy chỉnh |
| **Chuỗi thể hình** | Nhiều địa điểm, thương hiệu đã thành lập | Tất cả những thứ trên cộng thêm đa trang (multi-site), trang địa điểm, danh bạ nhân viên |

Các gói dịch vụ của bạn nên được ánh xạ theo các phân khúc này, chứ không phải theo các bộ tính năng tùy ý.

## Tạo Các Gói Dịch Vụ FitSite

Điều hướng đến **Ultimate Multisite > Products > Add Product** cho từng gói dịch vụ.

### Gói 1: FitSite Starter -- $49/tháng

**Đối tượng mục tiêu**: Huấn luyện viên cá nhân và studio nhỏ

**Tab Mô tả (Description tab)**:
- Tên: FitSite Starter
- Mô tả: "Mọi thứ một huấn luyện viên cá nhân hoặc studio nhỏ cần để trông chuyên nghiệp trực tuyến."

**Tab Chung (General tab)**:
- Loại sản phẩm: Plan
- Vai trò khách hàng: Administrator

**Tab Mẫu Trang (Site Templates tab)**:
- Cho phép mẫu trang: Enabled
- Các mẫu có sẵn: Chỉ Studio Essential

**Giới hạn (Limitations)**:
- Trang web: 1
- Dung lượng đĩa: 1 GB
- Tên miền tùy chỉnh: Disabled (sử dụng `studioname.fitsite.com`)

**Tab Plugin (Plugins tab)**:
- Plugin form liên hệ: Force Activate
- Plugin SEO: Force Activate
- Plugin đặt lịch: Not Available (khuyến khích nâng cấp)

**Tab Chủ đề (Themes tab)**:
- Chủ đề bạn chọn: Force Activate
- Tất cả các chủ đề khác: Hidden

### Gói 2: FitSite Growth -- $99/tháng

**Đối tượng mục tiêu**: Các phòng gym lớn đã thành lập tại một địa điểm

**Tab Mô tả (Description tab)**:
- Tên: FitSite Growth
- Mô tả: "Dành cho các phòng gym đã thành lập, sẵn sàng phát triển sự hiện diện trực tuyến và thu hút thành viên mới."

**Tab Mẫu Trang (Site Templates tab)**:
- Các mẫu có sẵn: Studio Essential và Gym Pro

**Giới hạn (Limitations)**:
- Trang web: 1
- Dung lượng đĩa: 5 GB
- Tên miền tùy chỉnh: Enabled

**Tab Plugin (Plugins tab)**:
- Tất cả những thứ trong Starter, cộng thêm:
- Plugin đặt lịch: Force Activate
- Plugin thư viện ảnh: Force Activate
- Chức năng blog: Available

**Tab Nâng cấp & Hạ cấp (Up & Downgrades tab)**:
- Nhóm gói dịch vụ: FitSite Plans
- Thứ tự sản phẩm: 2

### Gói 3: FitSite Pro -- $199/tháng

**Đối tượng mục tiêu**: Chuỗi thể hình nhiều địa điểm

**Tab Mô tả (Description tab)**:
- Tên: FitSite Pro
- Mô tả: "Nền tảng hoàn chỉnh dành cho các thương hiệu thể hình có nhiều địa điểm."

**Tab Mẫu Trang (Site Templates tab)**:
- Các mẫu có sẵn: Cả ba mẫu

**Giới hạn (Limitations)**:
- Trang web: 5 (một cho mỗi địa điểm)
- Dung lượng đĩa: 20 GB
- Tên miền tùy chỉnh: Enabled

**Tab Plugin (Plugins tab)**:
- Tất cả những thứ trong Growth, cộng thêm:
- Tất cả các plugin cao cấp: Force Activate

**Tab Nâng cấp & Hạ cấp (Up & Downgrades tab)**:
- Nhóm gói dịch vụ: FitSite Plans
- Thứ tự sản phẩm: 3

## Thiết Lập Nhóm Gói Dịch Vụ (Plan Group)

Nhóm gói dịch vụ đảm bảo rằng khách hàng chỉ có thể nâng cấp hoặc hạ cấp trong phạm vi các gói dịch vụ FitSite. Trên tab **Nâng cấp & Hạ cấp** của mỗi gói dịch vụ:

1. Đặt **Nhóm gói dịch vụ (Plan Group)** là "FitSite Plans" cho cả ba gói.
2. Đặt **Thứ tự sản phẩm (Product Order)** là 1 (Starter), 2 (Growth), 3 (Pro).

Điều này tạo ra một lộ trình nâng cấp rõ ràng: Starter → Growth → Pro.

## Thêm Sản Phẩm Bổ Sung Khi Thanh Toán (Order Bumps)

Order bumps là các sản phẩm add-on được cung cấp trong quá trình thanh toán. Đối với FitSite, bạn nên xem xét:

- **Gói Lưu Trữ Bổ Sung** ($19/tháng) -- thêm 5 GB dung lượng đĩa
- **Hỗ Trợ Ưu Tiên** ($29/tháng) -- thời gian phản hồi nhanh hơn
- **Trang Web Bổ Sung** ($39/tháng) -- dành cho khách hàng cần nhiều trang web hơn mức gói dịch vụ cho phép

Hãy tạo chúng dưới dạng sản phẩm loại **Package** trong Ultimate Multisite và liên kết chúng với các gói dịch vụ tương ứng.

## Tại Sao Cấu Trúc Này Hiệu Quả

- **Starter** loại bỏ rào cản gia nhập -- giá thấp, dịch vụ đơn giản, giúp huấn luyện viên lên mạng nhanh chóng
- **Growth** bổ sung các tính năng mà phòng gym thực sự yêu cầu -- đặt lịch, thư viện ảnh, tên miền tùy chỉnh
- **Pro** phục vụ phân khúc giá trị cao cần hỗ trợ nhiều địa điểm
- **Order bumps** cho phép khách hàng tùy chỉnh mà không làm phức tạp các gói dịch vụ cốt lõi
- **Lộ trình nâng cấp rõ ràng** nghĩa là khách hàng sẽ phát triển cùng bạn thay vì rời đi

## Mạng Lưới FitSite Cho Đến Nay

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Những Gì Chúng Ta Đã Xây Trong Bài Học Này

- **Ba cấp độ gói dịch vụ** được ánh xạ theo các phân khúc kinh doanh thể hình thực tế
- **Kiểm soát tính năng (Feature gating)** bằng cách sử dụng các điều khiển plugin và mẫu của Ultimate Multisite
- **Một nhóm gói dịch vụ** với lộ trình nâng cấp rõ ràng
- **Các sản phẩm bổ sung khi thanh toán (Order bump products)** để tăng doanh thu
- **Cấu trúc giá** dựa trên giá trị khách hàng, chứ không phải thông số kỹ thuật

---

**Tiếp theo:** [Bài 6: Trải Nghiệm Đăng Ký](lesson-6-checkout) -- chúng ta sẽ xây dựng một quy trình thanh toán chuyển đổi chủ sở hữu studio thể hình thành khách hàng trả phí.
