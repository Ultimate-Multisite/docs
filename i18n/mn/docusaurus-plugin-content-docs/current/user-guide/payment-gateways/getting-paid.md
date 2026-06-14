---
title: Төлбөр авах
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Төлбөр хийх (v2)

_**МЭЦЭЛТЭГ: Энэ нийтлэл Ultimate Multisite 2.x хувилбарыг хэрэглэдэг.**_

Ultimate Multisite-д гишүүнчлэл ба төлбөрийн систем нь дотор бэхлэгдсэн байдаг. Бидний төлбөр хийх систем ажиллахын тулд э-коммерц дээр хамгийн түгээмэл хэрэглэгддэг төлбөрийн хаалтуудыг нэгтгэсэн. Ultimate Multisite-ийн анхны төлбөрийн хаалтууд бол _Stripe_, _PayPal_ ба Мачнун төлбөр юм. Та мөн өөрийн тусгай add-on-ыг суулгаснаар _WooCommerce_, _GoCardless_ болон _Payfast_-ийг ашиглаж төлбөр авч болно.

## Үндсэн тохиргоо

Та эдгээр төлбөрийн хаалтуудын аль нэгийг Ultimate Multisite-ийн төлбөрийн тохиргоо дотор тохируулах боломжтой. Та **Ultimate Multisite menu > Settings > Payments** руу очих замаар үүнийг олж болно.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Төлбөрийн хаалтыг тохируулахаас өмнө, та тохируулж болох үндсэн төлбөрийн тохиргоог харвал:

**Force auto-rene** **w:** Энэ нь хэрэв хэрэглэгч сонгосон төлбөр хийх давтамжийн дагуу бүртгэл бүрийн төгсгөлд төлбөр автоматаар давтагдахыг баталгаажуулна.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 нь идэвхтэй хаалтны хувьд давтагдаж болох шинэчлэлийн баримт (renewal credential) байгаа эсэхийг шалгадаг бөгөөд автоматаар сэргээлт хийгдсэн гишүүнчлэлийг хадгалахдаа энэ нь хэрэглэгдэх боломжтой шинэчлэлийн баримт, төлбөрийн гэрээ, хадгалагдан байгаа vault token эсвэл түүнтэй ижил төстэй давтагдаж болох төлбөр хийх аргыг шалгадаг. Хэрэв хаалтны талд ашиглах боломжтой баримт байхгүй гэсэн мэдээлэл өгвөл, Ultimate Multisite гишүүнчлэлийг хадгална ч автоматаар сэргээлт хийхийг унтрааж, алдаатай баримтын төлөвийг бүртгэнэ. Ингэснээр администратор эсвэл дэмжийн систем нь шинэчлэлийн огнооос өмнө хэрэглэгчээ төлбөрөө дахин зөвшөөрүүлэхийг хүсэх боломжтой болно.

Энэ нь гэрээнүүд зөвхөн нэг удаагийн төлбөр хийх боломжтой үед гишүүнчлэл автоматаар шинэчлэгдэхийг хасна. Gateway add-ons нь давтагдах төлбөр хийх үед дахин ашиглах зөвшөөрөгдсөн мэдээллийг хадгалах ёстой, ялангуяа gateway нь нэг удаагийн төлбөр хийх болон хадгалсан/хувийн төлбөр хийх (vaulted/subscription) хоёуланг нь дэмждэг үед.

**Төлбөртэй байхгүй туршилт хийхийг зөвшөөрөх** **аргачлал:** Энэ сонголтыг идэвхжүүлэхэд таны клиент бүртгэлт үйл явцад ямар ч санхүүгийн мэдээлэл оруулах шаардлагагүй болно. Энэ нь туршилтын хугацаа дууссаны дараа л шаардлагатай болно.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Төлбөр баталгаажуулсны дараа инвойс илгээх:** Энэ нь танд төлбөр хийсний дараа инвойс илгээх эсэхийг сонгох боломжийг олгодог. Хэрэв хэрэглэгчээ өөрийн дэдсайт (subsite) дээрх dashboard-оор төлбөрийн түүхийг харах боломжтой гэдгийг анхаарна уу. Энэ сонголт нь Manual Gateway-д хамаарахгүй.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Инвойсын дугаарлах схемийн арга:** Энд та төлбөрийн дугаарлалын код эсвэл дараалсан дугаарлах системээ сонгож болно. Хэрэв инвойстэй холбоотой төлбөр дугаарлалын кодыг ашиглахыг сонговол ямар ч тохиргоо хийх шаардлагагүй. Хэрэв дараалсан дугаарлах системийг сонговол та **дараагийн инвойсын дугаарыг** (Энэ дугаарыг системээр үүсэх дараагийн инвойстэй холбоотой дугаар болгоно. Шинэ инвойс бүр үүсэхэд нэгээр нэмэгддэг. Та үүнийг өөрчилж, инвойсын дараалсан дугаарыг тодорхой утга руу буцаахын тулд хадгалах боломжтой) болон **инвойсын дугаарлалын урьдчилсан хэсгийг** (invoice number prefix) тохируулах шаардлагатай.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Дараалсан төлбөрийн дугаар болон төлбөрийн дугаар урьдчилсан хэсгүүдийг Sequential Number сонгоход харуулав -->

## Гейтвэй (gateways)-г хаана олох вэ:

Та төлбөрийн гейтвэйг ижил хуудсан дээр тохируулж болно (**Ultimate Multisite > Settings > Payments**). **Active payment gateways**-ийн доор таны дараах зүйлсийг харах боломжтой: _Stripe_, _Stripe_ Checkout, _PayPal_ ба _Manual_.

![Stripe, Stripe Checkout, PayPal ба Manual-ыг жагсаалтлах Active Payment Gateways хэсэг](/img/config/payments-active-gateways.png)

Бид төлбөрийн гейтвэй тус бүрт зориулсан тусгай нийтлэлтэй (article) байгаа бөгөөд тэнд таны тохируулгын алхмыг зааж өгнө. Эдгээрийг доорх холбоосуудаас олж болно.

Төлбөрийн дэлгэрэнгүй мэдээллийг харах, өөрчлөх боломжтой:

![Төлбөрийн өөрчлөлтийн интерфейс](/img/admin/payment-edit.png)

Энд төлбөрийн өөрчлөлтийн хуудсан бүр дэлгэрэнгүй харагдахыг үзнэ:

![Төлбөрийн өөрчлөлтийн бүр интерфейс](/img/admin/payment-edit-full.png)

Мөн төлбөрийн гейтвэйний тохируулгын бүр дэлгэрэнгүй харагдахыг үзнэ:

![Төлбөрийн гейтвэйний тохируулгын бүр хуудас](/img/config/settings-payments-gateways-full.png)

**Stripe гейтвэйг тохируулах**

**PayPal гейтвэйг тохируулах**** **

**Анхны төлбөрийг (manual payments) тохируулах**

Одоо, хэрэв та _WooCommerce_, _GoCardless_ эсвэл _Payfast_-ыг өөрийн төлбөрийн гейтвэй болгон ашиглахыг хүсвэл, та тэдгээрийн **add-on-уудыг (extensions) суулгаж, тохируулна** уу.

### WooCommerce add-on-ыг хэрхэн суулгах вэ:

Бид _Stripe_ болон _PayPal_-ийг зарим улсдаа ашиглахад хязгаарлалттай байдаг бөгөөд энэ нь Ultimate Multisite ашигчдыг бидний плагиныг үр дүнтэй ашиглахаас хойшлуулдаг гэдгийг ойлгож байна. Тиймээс бид маш алдартай эдийн засгийн худалдааны (e-commerce) плагин болох _WooCommerce_-тэй холбогдох add-on-ыг бүтээсэн. Дэлхийн хөгжүүлэгчид өөр өөр төлбөрийн гейтвэйг нэвтрүүлэх add-on-уудыг үүсгэдэг. Бид үүнийг ашиглан Ultimate Multisite төлбөрийн системтэй таарах боломжтой гейтвэйг өргөтгөсөн юм.

**ЧИТАХААЙ:** Ultimate Multisite: WooCommerce-ийн интеграц хийхийн тулд таны үндсэн сайт дээр WooCommerce-ийг хамгийн багадаа идэвхжүүлсэн байх шаардлагатай.

Эхлээд, add-ons (дополнинууд) хуудас руу орно уу. Та **Ultimate Multisite > Settings**-ээр орж олох боломжтой. Тэнд таны **Add-ons** хүснэгтийг харах болно. **Check our Add-ons** гэсэн хэсгийг дарна уу.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar дээрх Add-ons хүснэгт ба Check our Add-ons холбоотой зураг -->

**Check our Add-ons**-ийг дарсны дараа та add-ons хуудас руу шилжих болно. Энд Ultimate Multisite-ийн бүх add-on-уудыг олох боломжтой. **Ultimate Multisite: WooCommerce Integration** гэсэн add-on-ыг сонгоод дарна уу.

![WooCommerce Integration-ийг багтаасан Ultimate Multisite add-ons хуудасны зураг](/img/addons/addons-page.png)

Add-on-ын дэлгэрэнгүй мэдээлэлтэй цонх гарч ирнэ. Зөвхөн **Install Now** (Одоо суулгах) гэсэн товчийг дарна уу.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on-ын Install Now товчны дэлгэрэнгүй диалог зураг -->

Суулгалт дууссаны дараа та plugins (плагинууд) хуудас руу шилжих болно. Энд зөвхөн **Network Activate** (Сүлжээнд идэвхжүүлэх)-ийг дарвал WooCommerce add-on нь таны сүлжээнд идэвхжсэн байна.

<!-- Screenshot unavailable: WooCommerce Integration add-on-ын Network Activate холбоотой плагинууд хуудасны зураг -->

Идэвхжүүлсний дараа, таны вэбсайт дээр WooCommerce plugin суулгагдаад идэвхжсэн эсэхийг шалгахгүй бол дуудлага (reminder) ирнэ.

<!-- Screenshot unavailable: Админ мэдэгдэл: WooCommerce plugin-ыг суулгаж, идэвхжүүлэхийг администратор руу санасуулах зураг -->

WooCommerce Integration add-on-оор илүү дэлгэрэнгүй мэдээлэл авахыг **энд дарна уу**.

### GoCardless add-on-ыг хэрхэн суулгах вэ:

_GoCardless_ add-on-ы суулгах алхмууд нь _WooCommerce_ add-on-той бараг ижил байна. Add-ons хуудас руу орж **Ultimate Multisite: GoCardless Gateway** add-on-ыг сонгоорой.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on-ын тохиргооны хуудас дээрх Add-ons page -->

Add-on-ын цонх гарч ирнэ. **Install Now** (Одоо суулгах) гэсэн хэсэг дээр дарна уу.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on-ын тохиргооны диалог, Install Now товчлуур харагдаж байна -->

Суулгалт дууссаны дараа та plugin-ийн хуудас руу чиглэгдэх болно. Энд зүгээр л **Network Activate** (Сүлжээг идэвхжүүлэх)-д дарвал _GoCardless_ add-on нь таны сүлжээнд идэвхжигдэнэ.

<!-- Screenshot unavailable: GoCardless Gateway add-on-ын Network Activate холбоотой Plugins page -->

_GoCardless_ gateway-г хэрхэн ашиглаж эхлэхийг мэдэхийн тулд **энэ нийтлэлээ уншиж үзээрэй**.

### Payfast add-on-ыг суулгах заавар:

Add-ons хуудас руу орж **Ultimate Multisite: Payfast Gateway** add-on-ыг сонгоорой.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on-ын тохиргооны хуудас дээрх Add-ons page -->

Add-on-ын цонх гарч ирнэ. **Install Now** (Одоо суулгах)-д дарна уу.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on-ын тохиргооны диалог, Install Now товчлуур харагдаж байна -->

Суулгалт дууссаны дараа та plugin-ийн хуудас руу чиглэгдэх болно. Энд зүгээр л **Network Activate** (Сүлжээг идэвхжүүлэх)-д дарвал _Payfast_ add-on нь таны сүлжээнд идэвхжигдэнэ.

<!-- Screenshot unavailable: Payfast Gateway add-on-ын Network Activate холбоотой Plugins page -->
