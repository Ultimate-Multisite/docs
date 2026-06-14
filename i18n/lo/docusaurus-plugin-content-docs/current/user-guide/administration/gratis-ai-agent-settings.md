---
title: ການຕັ້ງຄ່າ AI Agent ຟຣີ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# การตั้งค่า AI Agent ฟรี

หน้า **Settings → Advanced** ใน Gratis AI Agent จะให้การตั้งค่าระดับผู้ดูแลระบบสำหรับการเชื่อมต่อส่วนหลัง (backend integrations) ที่เพิ่มเข้ามาในเวอร์ชัน v1.5.0 หน้านี้จะอธิบายเกี่ยวกับฟิลด์ **Feedback Endpoint** และรูปแบบที่คาดหวังไว้ครับ

## การเข้าถึงการตั้งค่า

1. ใน WordPress admin ให้ไปที่ **Gratis AI Agent → Settings**
2. คลิกแท็บ **Advanced**

## การกำหนดค่า Feedback Endpoint

feedback endpoint จะได้รับคำขอแบบ POST จาก AI agent ทุกครั้งที่มีผู้ใช้ส่งข้อเสนอแนะผ่านปุ่มยกนิ้วลง (thumbs-down button), แบนเนอร์ auto-prompt หรือคำสั่ง `/report-issue` ครับ

| ฟิลด์ | คำอธิบาย |
|---|---|
| **Feedback Endpoint URL** | คือ URL ที่จะรับการส่งข้อเสนอแนะในรูปแบบ HTTP POST พร้อมเนื้อหาเป็น JSON body |
| **Feedback API Key** | เป็น bearer token ที่ถูกส่งไปใน header `Authorization` ของทุกคำขอ feedback หาก endpoint ของคุณไม่ต้องการการยืนยันตัวตน (authentication) ให้ปล่อยว่างไว้ได้เลยครับ |

### รูปแบบ JSON Payload ที่คาดหวัง

feedback endpoint ของคุณจะต้องรับ JSON body ที่มีฟิลด์อย่างน้อยดังต่อไปนี้:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "คำตอบไม่ถูกต้องเกี่ยวกับราคา",
  "triage_category": "factual_error"
}
```

อาจมีฟิลด์เพิ่มเติมใน payload ขึ้นอยู่กับบริบทของการสนทนาครับ

### ค่าของ `triage_category`

เลเยอร์การคัดแยก (triage layer) ของ AI จะกำหนดค่าใดค่าหนึ่งต่อไปนี้ให้กับ `triage_category` ก่อนที่จะส่ง payload ต่อไป:

| ค่า | ความหมาย |
|---|---|
| `factual_error` | ผู้ช่วยให้ข้อมูลข้อเท็จจริงที่ไม่ถูกต้อง |
| `unhelpful_answer` | คำตอบนั้นถูกต้องในทางเทคนิคแต่ไม่เป็นประโยชน์ |
| `inappropriate_content` | คำตอบมีเนื้อหาที่ไม่ควรแสดงให้ผู้ใช้เห็น |
| `other` | ข้อเสนอแนะไม่ตรงกับหมวดหมู่ที่รู้จัก |

### การยืนยันตัวตน (Authentication)

ຖ້າ endpoint ຂອງທ່ານຕ້ອງການການຢັ້ງຢືນ (authentication), ໃຫ້ຕັ້ງຄ່າຊ່ອງ **Feedback API Key** ເປັນ bearer token ຂອງທ່ານ. agent ຈະສົ່ງ:

```
Authorization: Bearer <your-api-key>
```

ຖ້າຊ່ອງ **Feedback API Key** ຫວ່າງ, ຈະບໍ່ມີ header `Authorization` ສົ່ງໄປ.

### ການປິດການເກັບ Feedback

ໃຫ້ປະໄວ້ທັງຊ່ອງ **Feedback Endpoint URL** ແລະ **Feedback API Key** ຫວ່າງ. ປຸ່ມ thumbs-down ແລະ UI feedback ຍັງເຫັນໄດ້ກັບຜູ້ໃຊ້, ແຕ່ການສົ່ງຂໍ້ມູນຈະບໍ່ຖືກສົ່ງຕໍ່ໄປຫາບໍລິການພາຍນອກໃດໆ.

## Brave Search API Key

ໃນ tab **Advanced** ນັ້ນ, ຊ່ອງ **Brave Search API Key** ກໍເຮັດໃຫ້ຄວາມສາມາດໃນການຄົ້ນຫາອິນເຕີເນັດ [Internet Search](../configuration/internet-search) ເປີດໃຊ້ໄດ້.

| Field | Description |
|---|---|
| **Brave Search API Key** | API key ຂອງທ່ານຈາກ developer dashboard ຂອງ Brave Search. ຈຳເປັນຕ້ອງມີເພື່ອເປີດໃຊ້ການຄົ້ນຫາອິນເຕີເນັດໃນ AI assistant. |

ປ້າຍຊື່ຊ່ອງນີ້ມີ link ສາມາດກົດເຂົ້າໄປໄດ້ສູ່ໜ້າລົງທະບຽນ Brave Search API. ຖ້າປະໄວ້ຫວ່າງ ເພື່ອປິດການຄົ້ນຫາອິນເຕີເນັດ.

ເບິ່ງ [Internet Search](../configuration/internet-search) ເພື່ອຂໍ້ມູນຂອງຜູ້ໃຊ້ກ່ຽວກັບຟີເຈີນີ້.

## Feature Flags

ຖືກເພີ່ມເຂົ້າມາໃນ v1.9.0 ນີ້, tab **Settings → Feature Flags** ຈະມີປຸ່ມ toggle ສຳລັບການເຮັດວຽກທາງເລືອກ. ແຕ່ລະ flag ຈະເປີດໃຊ້ ຫຼື ปิดໃຊ້ທົ່ວເຄືອຂ່າຍ; ຕອນນີ້ຍັງບໍ່ມີການປິດແບບສະເພາະ site ເລີຍ.

### ການເຂົ້າເຖິງ Feature Flags

1. ໃນ WordPress admin, ໄປທີ່ **Gratis AI Agent → Settings**.
2. ກົດ tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Mô tả |
|---|---|---|
| **Hạn chế cho Quản trị viên** | Tắt | Khi bật, chỉ những người dùng có vai trò `administrator` mới có thể mở bảng trò chuyện của AI Agent. Các vai trò khác sẽ thấy thông báo "Liên hệ với quản trị viên của bạn". |
| **Hạn chế cho Quản trị viên mạng** | Tắt | Khi được bật trên mạng đa trang (multisite), chỉ Siêu Quản trị viên mới có thể sử dụng agent. Quản trị viên trang cá nhân sẽ bị chặn. Nó sẽ ưu tiên hơn "Hạn chế cho Quản trị viên" nếu cả hai đều được bật. |
| **Cho phép Người đăng ký truy cập** | Tắt | Khi bật, người dùng có vai trò `subscriber` có thể sử dụng giao diện trò chuyện nhưng chỉ giới hạn ở khả năng đọc (không tạo bài viết hoặc thay đổi cài đặt). |
| **Tắt cho Người không phải thành viên** | Tắt | Tích hợp với trạng thái thành viên của Ultimate Multisite. Khi được bật, cửa sổ trò chuyện sẽ bị ẩn đối với các trang không có tư cách thành viên đang hoạt động. |

### Cờ Thương hiệu (Branding Flags)

| Flag | Default | Mô tả |
|---|---|---|
| **Ẩn chân trang "Được cung cấp bởi AI Agent miễn phí"** | Tắt | Loại bỏ dòng ghi nhận thương hiệu được hiển thị ở cuối widget trò chuyện. Khuyến nghị cho các triển khai nhãn trắng (white-label). |
| **Tên Agent tùy chỉnh** | *(trống)* | Thay thế nhãn mặc định "Gratis AI Agent" trong tiêu đề trò chuyện và menu quản trị bằng tên sản phẩm của bạn. Để trống để sử dụng mặc định. |
| **Ẩn Bộ chọn Agent** | Tắt | Khi được bật, người dùng không thể chuyển đổi giữa năm agent tích hợp sẵn. Agent hiện tại sẽ được cố định theo cấu hình mặc định trong Cài đặt → Chung (Settings → General). |
| **Sử dụng Biểu tượng Trang web làm Ảnh đại diện Trò chuyện** | Tắt | Thay thế biểu tượng AI mặc định trong tiêu đề widget trò chuyện bằng biểu tượng trang web WordPress (được thiết lập trong Appearance → Customize → Site Identity). |

### Áp dụng Thay đổi

Nhấn **Lưu Cài đặt** sau khi chuyển đổi bất kỳ cờ nào. Các thay đổi có hiệu lực ngay lập tức — không cần xóa cache hay kích hoạt lại plugin.
