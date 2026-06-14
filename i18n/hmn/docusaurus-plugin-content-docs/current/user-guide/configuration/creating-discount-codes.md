---
title: Tsim khoom cod discount
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Discount Code Tạo (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Với Ultimate Multisite, bạn có thể tạo các mã giảm giá để tặng khách hàng của mình chiết khấu cho gói đăng ký của họ. Và việc tạo chúng rất dễ!

## Tạo và Chỉnh sửa Mã Giảm Giá

Để tạo hoặc chỉnh sửa một mã giảm giá, hãy vào **Ultimate Multisite > Discount Codes**.

![Danh sách mã giảm giá — trạng thái trống trước khi có bất kỳ mã nào tồn tại](/img/config/discount-codes-empty.png)

Ở đó bạn sẽ thấy danh sách các mã giảm giá mà bạn đã tạo.

Bạn có thể nhấp vào **Add Discount Code** (Thêm Mã Giảm Giá) để tạo một coupon mới hoặc bạn có thể chỉnh sửa những cái bạn đã có bằng cách di chuột qua chúng và nhấp vào **Edit** (Chỉnh sửa).

![Danh sách mã giảm giá với các hành động di chuột hiển thị liên kết Edit và Delete](/img/config/discount-codes-list-hover.png)

![Nút Thêm Mã Giảm Giá trên thanh tiêu đề trang](/img/config/discount-codes-add-button.png)

Bạn sẽ được chuyển đến trang nơi bạn tạo hoặc chỉnh sửa mã coupon của mình. Trong ví dụ này, chúng ta sẽ tạo một cái mới.

![Trang chỉnh sửa mã giảm giá với tất cả các phần hiển thị](/img/config/discount-code-edit.png)

Hãy cùng xem những cài đặt có sẵn ở đây nhé:

**Enter Discount Code (Nhập Mã Giảm Giá):** Đây chỉ là tên của mã giảm giá của bạn thôi. Đây không phải là mã mà khách hàng của bạn sẽ cần dùng trên biểu mẫu thanh toán.

**Description (Mô tả):** Ở đây, bạn có thể mô tả ngắn gọn coupon này dành cho cái gì.

![Các trường tên và mô tả mã giảm giá ở đầu trang chỉnh sửa](/img/config/discount-code-description.png)

Bạn cũng có thể xem mã giảm giá là đang hoạt động (active) hay không hoạt động (inactive):

![Trạng thái hoạt động của mã giảm giá](/img/config/discount-code-active.png)

**Coupon code (Mã coupon):** Đây là nơi bạn định nghĩa mã mà khách hàng sẽ cần nhập trong quá trình thanh toán.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** ຢູ່ đây, ທ່ານສາມາດຕັ້ງໄດ້ວ່າ coupon code ນີ້ຈະໃຫ້ສ່ວນຫຼຸດເປັນ **ເປີເຊັນ (%)** ຫຼື **ຈຳນວນເງິນທີ່ແນ່ນອນ** ເທົ່ານັ້ນ.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**ໃຊ້ກັບການຕໍ່ອາຍຸ (Apply to renewals):** ຖ້າທ່ານປິດ (toggle off) ທາງເລືອກນີ້, coupon code ນີ້ຈະຖືກນຳໃຊ້ໄດ້ສະເພາະໃນ **ການຈ່າຍເງິນຄັ້ງທຳອິດ**. ການຈ່າຍເງິນທີ່ເຫຼືອທັງໝົດຈະບໍ່ມີສ່ວນຫຼຸດ. ຖ້າທ່ານເປີດ (toggle on) ທາງເລືອກນີ້, coupon code ນີ້ຈະໃຊ້ໄດ້ກັບການຈ່າຍເງິນໃນອະນາຄົດທັງໝົດ.

**ສ່ວນຫຼຸດສຳລັບຄ່າຕັ້ງຄ່າ (Setup fee discount):** ຖ້າທ່ານປິດ (toggle off) ທາງເລືອກນີ້, coupon code ນີ້ **ຈະບໍ່ໃຫ້ສ່ວນຫຼຸດໃດໆສຳລັບຄ່າຕັ້ງຄ່າ (setup fee)** ຂອງການສັ່ງຊື້. ຖ້າທ່ານເປີດ (toggle on) ທາງເລືອກນີ້, ທ່ານສາມາດກຳນົດໄດ້ວ່າ coupon code ນີ້ຈະໃຊ້ສ່ວນຫຼຸດເທົ່າໃດ (ເປັນເປີເຊັນ ຫຼື ຈຳນວນເງິນທີ່ແນ່ນອນ) ສຳລັບຄ່າຕັ້ງຄ່າຂອງແຜນການຂອງທ່ານ.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**ສະຖານະເປີດໃຊ້ (Active):** ເປີດ ຫຼື ປິດ coupon code ນີ້ດ້ວຍຕົນເອງ.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

ພາຍໃຕ້ **Advanced Options**, ພວກເຮົາມີການຕັ້ງຄ່າຕໍ່ໄປນີ້:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**ຈຳກັດການໃຊ້ (Limit uses):**

  * **Uses:** ຢູ່ບ່ອນນີ້, ທ່ານສາມາດເຫັນໄດ້ວ່າ coupon code ນີ້ຖືກນຳໃຊ້ໄປແລ້ວເທົ່າໃດ.

  * **Max uses:** ອັນນີ້ຈະຈຳກັດວ່າຜູ້ໃຊ້ສາມາດໃຊ້ coupon code ນີ້ໄດ້ບໍ່ໃຫ້ເກີນເທົ່າໃດຄັ້ງ. ເຊັ່ນ, ຖ້າທ່ານຕັ້ງເປັນ 10, coupon ນັ້ນອາດຈະໃຊ້ໄດ້ພຽງ 10 ຄັ້ງເທົ່ານັ້ນ. ຫຼັງຈາກທີ່ຈຳນວນນີ້ໝົດແລ້ວ, coupon code ນີ້ຈະບໍ່ສາມາດໃຊ້ໄດ້ອີກ.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** ᱱᱚᱣᱟ နေရာནས་ ᱪᱮᱛᱟᱱ ᱨᱮᱭᱟᱜ coupon ᱨᱮ <em>start date</em> (ເລີ່ມຕົ້ນ ᱞᱟᱹᱜᱤᱫ) དང་ կամ *expiration date* (վերջին օր) ထည့်ելու ընտրություն կունենաք։

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** եթե **Select products**-ը 켜시면, သင့်ရဲ့ product အားလုံးကို သင် မြင်ရပါလိမ့်မယ်။ ဒီ coupon code ကို ဘယ် product က လက်ခံနိုင်မလဲဆိုတာ ကိုယ်တိုင် ရွေးချယ်နိုင်ပါတယ် (on/off လုပ်ပြီး)။ ဒီမှာ off လုပ်ထားတဲ့ product တွေက သင့် customer တွေက ဒီ coupon code ကို သူတို့အတွက် သုံးကြည့်ရင် ဘာမှ ပြောင်းလဲမှု မရှိပါဘူး။

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

ဒီရွေးချယ်စရာအားလုံးကို စီစဉ်ပြီးသွားရင် **Save Discount Code** ကို နှိပ်လိုက်ပါ။ သင့် coupon ကို သိမ်းပြီးပြီ၊ အဆင်ပြေပါပြီ။

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

သင့် coupon ဟာ သင့် list ထဲမှာ ရှိနေပါပြီ၊ အဲဒီကနေ နှိပ်ပြီး **edit** (ပြင်ရန်) ဒါမှမဟုတ် **delete** (ဖျက်ရန်) လုပ်နိုင်ပါတယ်။

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### URL Parameters အသုံးပြုခြင်း:

သင့်ရဲ့ pricing table တွေကို စိတ်ကြိုက်ပြင်ချင်တယ်၊ သင့် website အတွက် လှပတဲ့ coupon code page တစ်ခု တည်ဆောက်ချင်တယ်၊ နောက်ပြီး checkout form ကို discount code နဲ့ အလိုအလျောက် ပေးချေမှု လုပ်ချင်ရင် URL parameters တွေကနေ လုပ်လို့ရပါတယ်။

ပထမဆုံးအနေနဲ့ သင့်ရဲ့ plan အတွက် shareable link (မျှဝေနိုင်တဲ့ လင့်ခ်) ကို ရဖို့ လိုအပ်ပါတယ်။ ဒါကို လုပ်ဖို့အတွက် **Ultimate Multisite > Products** ကိုသွားပြီး plan တစ်ခုကို ရွေးချယ်ပါ။

**Click to Copy Shareable Link** ခလုတ်ကို နှိပ်လိုက်ပါ။ ဒါက ဒီ specific plan အတွက် shareable link ကို ပေးပါလိမ့်မယ်။ ကျွန်တော်တို့ရဲ့ အခြေအနေမှာ ပေးထားတဲ့ shareable link က [_**mynetworkdomain.com/register/premium/**_ ဖြစ်ပါတယ်_._

![Product page with shareable link button](/img/config/products-list.png)

Nrhiav kom yuav tuaj txhua coupon code rau plan no, tsis txhob nrhiav siv parameter **?discount_code=XXX** ha URL. Co **XXX** yog coupon code chuum.

Ha feem zoo ntawm peb thiaj ua thiaj siv coupon code **50OFF** rau yam uas no.

URL rau plan no thiab yuav siv coupon code 50OFF yuav muaj lub hanws: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.
