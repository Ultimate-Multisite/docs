---
title: WordPress Multisite yog dab tsi?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite ຫຍັງ?

WordPress ຂອງມັນມີຟີເຈີຊື່ວ່າ ‘Multisite’ (ເວັບໄຊທ໌ຫຼາຍໂຕ), ເຊິ່ງມີຕົ້ນກຳເນີດກັບປີ 2010 ເມື່ອ WordPress 3.0 ເລີ່ມອອກມາ. ນັ້ນຕັ້ງແຕ່Vendors ໄດ້ມີການປັບປຸງໃໝ່ໆເລື້ອຍໆເພື່ອເພີ່ມຟີເຈີໃໝ່ໆ ແລະ ເພີ່ມຄວາມປອດໄພໃຫ້ດີຂຶ້ນ.

ໂດຍເນື້ອໃນສັ້ນໆ, WordPress multisite ສາມາດຄິດໄດ້ແບບນີ້: ມະຫາວິທະຍາໄລໜຶ່ງຈັດການການຕິດຕັ້ງ WordPress ດຽວ, ແຕ່ແຕ່ລະຄະນະ (faculty) ກໍມີເວັບໄຊຂອງຕົນເອງທີ່ໃຊ້ WordPress.

##

## WordPress Multisite ແມ່ນຫຍັງແທ້?

Multisite ແມ່ນຟີເຈີໜຶ່ງຂອງ WordPress ທີ່ເຮັດໃຫ້ເວັບໄຊຫຼາຍໂຕສາມາດໃຊ້ການຕິດຕັ້ງ WordPress ດຽວກັນໄດ້. ເມື່ອເປີດໃຊ້ multisite, ເວັບໄຊ WordPress ຕົ້ນສະບັບຈະຖືກປ່ຽນແປງເພື່ອຮອງຮັບສິ່ງທີ່ເອີ້ນວ່າ **network of sites** (ເຄືອຂ່າຍຂອງເວັບໄຊທ໌).

ເຄືອຂ່າຍນີ້ຈະແບ່ງປັນລະບົບໄຟລ໌ (ໝາຍຄວາມວ່າ **plugins ແລະ themes ກໍໃຊ້ຮ່ວມກັນໄດ້ເລີຍ**), ຖານຂໍ້ມູນ, file core ຂອງ WordPress, wp-config.php, ແລະ ອື່ນໆ.

ໝາຍຄວາມວ່າ ການອັບເດດ WordPress, theme, ແລະ plugin ແມ່ນຕ້ອງເຮັດພຽງເທື່ອດຽວສຳລັບເວັບໄຊທ໌ທັງໝົດໃນເຄືອຂ່າຍຂອງທ່ານ ເພາະມັນໃຊ້ file ດຽວກັນຢູ່ໃນລະບົບໄຟລ໌.

ຄວາມເປັນຈິງນີ້ແມ່ນຂໍ້ໄດ້ປຽບຫຼັກຂອງ multisite, ເພາະມັນເຮັດໃຫ້ທ່ານສາມາດເພີ່ມຈຳນວນເວັບໄຊທ໌ທີ່ທ່ານເບິ່ງແຍງໄດ້ໂດຍບໍ່ຕ້ອງເພີ່ມຈຳນວນວຽກທີ່ຕ້ອງເຮັດເພື່ອຮັກສາເວັບໄຊຂອງລູກຄ້າ.

##

## Subdomain ຫຼື Subdirectory?

WordPress multisite ມີສອງໂໝດໃນການເຮັດວຽກ – ແລະ ທ່ານຕ້ອງເລືອກໜຶ່ງເມື່ອປ່ຽນການຕິດຕັ້ງ WordPress ປົກກະຕິຂອງທ່ານໃຫ້ເປັນ multisite:

**Subdomain:** ເຊັ່ນ: [site.domain.com](http://site.domain.com)

…ຫຼື

**Subdirectory:** ເຊັ່ນ: [yourdomain.com/site](http://yourdomain.com/site)

ທັງສອງໂໝດມີຂໍ້ດີ ແລະ ຂໍ້ເສຍທີ່ທ່ານຕ້ອງພິຈາລະນາເມື່ອຕັດສິນໃຈເລືອກວິທີໃດໜຶ່ງ.

Một điều quan trọng cần lưu ý là: sau khi bạn đã quyết định rồi thì việc thay đổi mạng từ subdirectory sang subdomain hoặc ngược lại sẽ rất khó – đặc biệt nếu bạn đã tạo được một vài trang web rồi.

Trước khi đưa ra quyết định đó, đây là một vài điểm bạn nên nhớ:

**Chế độ Subdirectory Mode (Subdirectory)** là chế độ dễ thiết lập và bảo trì nhất. Điều này xảy ra vì tất cả các trang web đều chỉ là những đường dẫn gắn vào tên miền chính thôi (ví dụ: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kết quả là, bạn chỉ cần **một chứng chỉ SSL** cho tên miền chính và nó sẽ bao phủ toàn bộ mạng của bạn.

Tuy nhiên, do cấu trúc URL của nó, Google và hầu hết các công cụ tìm kiếm khác sẽ coi tất cả các subsites trên mạng dựa trên subdirectory của bạn như một trang web khổng lồ duy nhất. Kết quả là, nội dung mà khách hàng cuối của bạn thêm vào các subsites có thể ảnh hưởng đến hiệu suất SEO của trang đích chính của bạn, ví dụ. Mức độ tác động này còn đang được tranh luận và có ý kiến cho rằng việc sắp xếp như vậy thậm chí có thể mang lại lợi ích cho hiệu suất SEO.

**Chế độ Subdomain Mode (Subdomain)** thì phức tạp hơn một chút để thiết lập, nhưng cấu trúc URL của nó (ví dụ: [subsite.yournetwork.com](http://subsite.yournetwork.com)) thường được coi là "chuyên nghiệp" hơn.

כאשר אתה thiết lập chế độ subdomain mode, một trong những thách thức chính là việc có SSL coverage (HTTPS) cho toàn bộ mạng. Điều này liên quan đến việc trình duyệt coi các subdomain là những thực thể bị cô lập. Kết quả là, bạn sẽ cần một chứng chỉ SSL khác nhau cho mỗi subdomain trên mạng của mình, hoặc một loại chứng chỉ đặc biệt gọi là **Wildcard SSL certificate**. Trong những năm gần đây, các nhà cung cấp dịch vụ lưu trữ và panel đang nâng cao khả năng cung cấp SSL, và một số bên còn cung cấp chứng chỉ wildcard chỉ bằng một cú nhấp chuột, thu hẹp khoảng cách giữa hai chế độ này về độ phức tạp khi thiết lập.

Trái ngược với chế độ subdirectory mode, các subsites trên mạng dựa trên subdomain được công cụ tìm kiếm coi là các trang web riêng biệt, điều này có nghĩa là nội dung có trên một subsite sẽ không ảnh hưởng đến hiệu suất SEO của các subsite khác chút nào.

## The Super Admin (Quản trị viên Siêu cấp)

Các cài đặt WordPress single-site cho phép bạn thêm số lượng người dùng không giới hạn và gán cho những người dùng đó các vai trò người dùng khác nhau với các quyền khác nhau.

Trong WordPress Multisite, một loại người dùng mới được mở khóa: **the super admin** – và một bảng quản trị (admin panel) mới được mở khóa: **the network admin panel**.

Như tên gọi của nó ám chỉ, siêu quản trị viên có những siêu năng lực đối với mạng, có khả năng quản lý tất cả các subsites, plugin, theme, mọi thứ!

Một khi bạn chuyển cài đặt WordPress single-site của mình thành multisite, người quản trị ban đầu của trang web đơn lẻ sẽ tự động được nâng cấp lên super admin.

Chỉ siêu quản trị viên mới có thể cài đặt hoặc gỡ bỏ plugin và theme từ network admin panel. Các admin subsite sau đó có thể chọn kích hoạt hoặc vô hiệu hóa các plugin hoặc theme đó, trừ khi siêu quản trị viên mạng kích hoạt một plugin nào đó, điều này sẽ buộc nó phải được kích hoạt cho tất cả các subsites mọi lúc.

_Note: 녯: 뫼​님​གྱི་​ኔ​ compromet​ནང་​མི་​ཞིག་​ལ་​འདྲ་བའི་ (network) འདྲ་བ་​དང་། ཁོང་​ལ་ super admin status བསྐྱེད་པ་ནི་ ཁོང་​ལ་ ཁྱིམ་ཚང་​တစ်ခုလုံး​ལ་ முழு control ཡོད་པར་བྱེད་ཀྱི་ཡོད། ຕົວຢ່າງအနေနဲ့ other super admins ཚོས་ ཁྱིམ་ཚང་​ရဲ့ super admin status བསླབ་ཐབས་ནས་ ཁོ་རང་གི་ network admin panel ནས་ ཁ་བཅད་ཆོག་པ་ལྟར་བྱེད་ཀྱི་ཡོད། Ultimate Multisite customer ཚོས་ additional super admins ཚོས་ ဘာတွေလုပ်ཆོག་လဲဆိုတာ granular control (細མའི་ control) ཐོབ་པའི་ཆེད་དུ་ support agents ཞེས་པའི་ add-on ཞིག་ཡོད་པ་རེད། ဒီadd-on ནི་ network 上 task ཚོ་བསྒྲུབ་ဖို့ လိုအပ်တဲ့ permission ཁོ་རང་གིས་ལག་ལེན་བྱེད་ཐရတဲ့ user གཞན་ཞིག་ (agent) བཟོ་ཐུབ།_

## subsites တွေကြား ဘာတွေ တူညီပြီး ဘာတွေ မတူညီဘူးလဲ

ကျွန်တော်တို့ အရင်က ပြောခဲ့သလိုပဲ၊ WordPress multisite ရဲ့ အဓိက အကျိုးအမြတ်တစ်ခုက subsites အားလုံးဟာ configuration တွေ၊ core files တွေ၊ themes တွေ၊ plugins တွေ၊ WordPress core files စတာတွေကို မျှဝေသုံးနေကြတာပဲ။

ဒါပေမဲ့ per-subsite အလိုက် သေသေချာချာ ခွဲခြားထားတဲ့ အစိတ်အပိုင်းတွေလည်း ရှိတယ်။

- ဥပမာအနေနဲ့ subsite တစ်ခုစီမှာ upload folder ကို သီးသန့်ရရှိပါတယ်။ ဒါကြောင့် တစ်ခုက subsite ရဲ့ user က လုပ်တဲ့ upload တွေကို နောက်တစ်ခုက subsite မှာ ဝင်ကြည့်လို့ မရတော့ဘူး။

- subsite တစ်ခုစီမှာ သူ့ရဲ့ admin panel ကို သီးသန့်ရှိပြီး super admin က network အတွက် active မလုပ်ထားရင် plugin တွေ ဒါမှမဟုတ် theme တွေကို activate/deactivate လုပ်နိုင်တယ်။

- database table အများစုကို subsite တစ်ခုချင်းစီအတွက် ဖန်တီးပေးတာဖြစ်လို့ posts, comments, pages, settings စတဲ့အရာတွေက subsite တစ်ခုချင်းစီအတွက် သတ်မှတ်ထားတာ ဖြစ်ပါတယ်။

## WordPress Multisite မှာ User management

WordPress multisite ရဲ့ နည်းနည်း delicate ဖြစ်တဲ့ အကြောင်းတစ်ခုက user management ပါပဲ။ WordPress user table ဟာ subsites အားလုံးကြားမှာ မျှဝေသုံးရတဲ့ အရာတွေထဲက တစ်ခုပါ။

ဒါကို ဘယ်လို build လုပ်ဖို့ စီစဉ်ထားလဲဆိုတာပေါ် မူတည်ပြီး ပြဿနာတချို့ ဖြစ်နိုင်တယ်။ အောက်က ဥပမာက အရေးကြီးဆုံး ပြဿနာတစ်ခုကို သဘောပေါက်စေဖို့ ကူညီပေးပါလိမ့်မယ်။

အောက်ပါ Scenario တစ်ခုကို စိတ်ကူးကြည့်ပါ-

Kuvau WordPress multisite network hais, thiab yuav muaj subsites txhua hnub rau lwm tus uas xav tau muaj e-commerce store.

Thaum koj tau tus khawv los—John—koj tsim ib qho site rau John hais rau hais thiaj muaj plugin txhua yam uas zoo, thiab tsim user rau John los yog heev yuav ua haujlwm rau nws store.

Tee sau, Alice los tham. Koj ua lews loj rau nws thiab nay muaj store hais rau koj network los.

John thiab Alice tseem muaj yog tus khawv uas koj tsim, tab sis lawv tsis paub txog hnub. Raws cia, heev tshaj yog, tha ib tus tsim siv website ntawm lub store ntawm tus khawv lwm tus, yuav tsis muaj qho kev tso cai ti neeg no yog muaj hais tias lub store no tau thov los ntawm lub network site txhua tus.

Ib hnub, John xav txhawb lub ntxiv tshiab thiab nws tau pom lub ntxiv zoo tshaj plaws hais Alice's store. Thaum nws xaya txhawb lub rooj, nws tau paub "email already in use" error message, uas zoo heev ti neeg no yog tus khawv 100% paub ti nws tseem tsis tau thov website ntawm Alice hais.

Ua li ib yam uas raug los yog John user tau hais rau lub network txhua tus. Thaum nws xaya tsim account rau checkout hais Alice's site, WordPress yuav paub ti muaj user loj nrog email pib ntxiv yim thiab choj error loss.

_Note: Koj raug paub ti ib yam no yuav zoo li cas heev tseg heev mus rau koj lub uas xav tau, yog hauv Ultimate Multisite muaj qho kev txiav tlay (option) uas tso cai txhawb lub kiểm tra tam sim no rau user loj nrog email pib ntxiv yim, uas choj tsim account ntau los ntawm ib tus email address. Txhua account yuav tau thov los ntawm ib subsites, ti neeg ua rau ris yog collision (collision) tsis muaj. Heej no, John yuav tsis paub error loss thiab nws yuav tso cai xaya lub ntxiv no hais tsis muaj loj.*

Qho kev txiav tlay no yog "Enable Multiple Accounts", uas yuav tso cai tau hais rau Ultimate Multisite → Settings → Login & Registration.

Even though user table chung, subsite admin loss or add users into subsites, and super admin loss or add users too, and they can even have different user roles on different subsites.

## Performance considerations

WordPress multisite chu si muag tshooj nrog site u laj. This chu test nuaj [WordPress.com](https://WordPress.com), Edublogs, thiab Campuspress yog multisite-based services, thiab txhua host yuav muaj hauv tus kaus site ntau.

Tsis tas ti ua ib lub WordPress multisite installation lwm qhov chaw u yuav muaj site ntau, tab sis heev, qhov u yuav ua tau zoo nuam yuav teeb meej tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg tseg
