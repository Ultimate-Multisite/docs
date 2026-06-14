---
title: Хувийн төлбөрийг тохируулах
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Мануал төлбөр хийх (v2)

_**ЧАНЯАЛТЫН ТУСЛАХ: Энэ нийтлэл Ultimate Multisite 2.x хувилбарыг хэрэглэдэг.**_

Мануал төлбөр хийх гэдэг нь таны хэрэглэгчдэд **Stripe** эсвэл **PayPal** ашиглагдаагүй үед өөр төлбөрийн аргыг санал болгох арга юм. Энэ нь дамжуулалт (wire) эсвэл банкны шилжүүлэг, эсвэл таны хэрэглэгчдэд олддог бусад ямар ч төлбөр хийх аргыг ашиглах боломжийг олгодог.

## Мануал төлбөрийг идэвхжүүлэх

Мануал төлбөрийг тохируулах нь маш хялбар. Та зүгээр л "Payment gateways" дотор үүнийг идэвхжүүлээд, хэрэглэгч ямар төлбөр хийхийг заасан дэлгэрэнгүй заавар оруулна.

Эхлээд **Ultimate Multisite > Settings > Payments** руу орно. "Payment Gateways" доор байгаа **Manual**-ыг асааж (toggle on) үүсгэнэ. Та **Payment Instructions** хэсэг гарч ирнээр харах болно.

Энэ бокс дотор таны хэрэглэгч төлбөр хийхэд шаардлагатай мэдээллийг оруулна. Жишээлбэл, таны банкны дансны дэлгэрэнгүй мэдээлэл ба цахим шуудангийн хаягийг оруулаад, хэрэглэгч танд төлбөр хийсний баталгааг илгээх боломжтой болно.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Мануал gateway тохиргооны интерфейс:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Тохируулсны дараа зүгээр л **Save Settings**-ийг дарж хадгалаад дуусна. Хэрэглэгчид таны сүлжээнд бүртгэл хийх үед, тэдэнд худалдан алийг дуусгахын тулд таны зааврыг хүлээн авна гэсэн мессеж гарч ирнэ.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Түүнчлэн тэд **Thank You** хуудсанд төлбөр хийх заавруудыг хүлээн авна гэсэн мессежийг авна.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Мануал төлбөрийг баталгаажуулах

Хувийн төлбөрийг баталгаажуулахын тулд зүүн талын чиглэлд байгаа **Payments** (Төлбөр хийх) меню руу орно. Тэнд та өөрийн сүлжээний бүх төлбөрүүд болон тэдгээрийн дэлгэрэнгүй мэдээллийг, түүний **status** (статус)-ыг харах боломжтой. Хувийн төлбөр нь та өөрөө өөрчлөх хүртэл үргэлж **Pending** (Хүлээгдэж байна) статустай байдаг.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** (хэрэглэгчийн код)-ыг дарж төлбөрийн хуудас руу ороод, та хүлээгдэж буй төлбөрөөс хамаарах бүх дэлгэрэнгүй мэдээллийг, жишээлбэл reference ID, бүтээгдэхүүн, цагийн мөч зэрэгт хүрэх боломжтой.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Баруун багананд та төлбөрөөс хамаарах статусыг өөрчилж болно. Үүнийг **Completed** (Дууссан) болгоод, **Activate Membership** (Гишүүнчлэлийг идэвхжүүлэх) сонголтыг асаахад таны хэрэглэгчийн сайт ажиллана бөгөөд тэдгээрийн гишүүнчлэл идэвхтэй болно.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
