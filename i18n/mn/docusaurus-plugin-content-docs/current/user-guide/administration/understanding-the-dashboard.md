---
title: Дашбордыг ойлгох
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Дашбордыг ойлгох {#understanding-the-ultimate-multisite-dashboard}

Ultimate Multisite-и илүү дэвшилтэт тохиргоонууд болон Ultimate Multisite-и ажиллагааны талбаруудыг гүнзгий судалсаасаа, дараа нь дашбордыг харж үзье.

WordPress-ийн олон plugin-тэй ижил төстэй байдлаар, Ultimate Multisite нь **Ultimate Multisite** гэсэн нэртэй сүлжээний түвшний (network-level) меню нэрийг үүсгэдэг бөгөөд доор хэд хэдэн дэд-меню элементүүд байна.

## Сүлжээний Дашбордын Виджетүүд {#network-dashboard-widgets}

Ultimate Multisite нь сүлжээний түвшний дашбордонд хэд хэдэн ашигтай виджетүүдийг оруулдаг. Энэхүү дашбордыг **My Sites → Network Admin → Dashboard**-т очиж харах боломжтой. Эдгээр виджетүүд сүлжээний администраторын хувьд мэдээлэл, ердийн үйлдлүүдэд хялбар хандах боломжийг олгох зорилгоор бүтээгдсэн.

![Ultimate Multisite виджеттэй Сүлжээний Дашборд](/img/admin/network-dashboard-full.png)

### Эхний алхам {#first-steps}

![Эхний Алхам виджет](/img/admin/network-dashboard-first-steps.png)

Энэхүү виджет нь Ultimate Multisite-ийн шинэчлэлт дээр гарч ирж, сүлжээний администраторт төлбөрийн аргыг тохируулах болон туршилтын данс үүсгэх зэрэг нэмэлт ажлуудыг гүйцэтгэхийг сануулдаг.

### Хураангуй {#summary}

![Хураангуй виджет](/img/admin/network-dashboard-summary.png)

Хураангуй (Summary) виджет нь өдрийн бүртгэл хийсэн хэрэглэгчдийн тоо болон тэдний орлогоос харьцуулсан мэдээллийг илэрхийлдэг. MRR (Monthly Recurring Revenue) нь орлого оруулах гишүүнтэй хэрэглэгчдийн нийт төлөвлөгөөний орлогыг зааж өгдөг.

### Үйл ажиллагааны урсгал (Activity Stream) {#activity-stream}

![Үйл Ажиллагааны Урсгал виджет](/img/admin/network-dashboard-activity-stream.png)

Энэхүү виджет нь Ultimate Multisite дээр болсон үйл явдлуудыг тайлбарладаг. Үйл явдлууд нь бүртгэл хийх, цуцлах, сайт үүсгэх, устгах болон бусад үйл ажиллагаанууд байна.

Илүү дэлгэрэнгүй тайлбарыг dokumentation-ын Events хэсгээс үзнэ үү.

### Одоогийн байдал (Right Now) {#right-now}

![Одоогийн Байдал виджет](/img/admin/network-dashboard-right-now.png)

Энэхүү utility widget нь сүлжээний хэрэглэгчид болон сайтуудын товч хураан дүгнэлтийг харуулдаг. Дээд талын хялбарчилсан товчлуур нь шинэ сайт эсвэл хэрэглэгчийг нэг дор үүсгэхэд ашигтай байдаг.

### Мэдээ ба Хэлэлцүүлэг (News and Discussions) {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Энэхүү widget нь Ultimate Multisite-ийн хамгийн сүүлийн мэдээллийг авч, харуулдаг. Шинэчилсэн зүйлс, чухал алдаанууд болон аюулгүй байдлын заавал хийгдсэн засваруудын талаарх мэдээллийг энэ widget-ийг анхаарч үзээрэй.

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

Сүлжээний түвшний dashboard нь сүлжээний ерөнхий мэдээллийг харуулдаг бол, Ultimate Multisite dashboard (Ultimate Multisite менюгийн хамгийн дээд түвшинд байрладаг) нь тухайн үйлчилгээний талаарх мэдээллийг харуулдаг.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Сарын Давталттай Орлого (Monthly Recurring Revenue Growth) {#monthly-recurring-revenue-growth}

MRR (Сарын давталттай орлого)-ийн график нь 12 сарын календарь хугацааны туршид орлогын сарын дүнгийн дэлгэрэнгүй мэдээллийг харуулдаг.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Шинэ орлого нь цэнхэр өнгөөр, цуцлалт (cancellations) нь улаан өнгөөр илэрхийлэгддэг.

### Огнооны Хүрээ (Date-range Support) {#date-range-support}

Хэрэглэгч болон идэвхтэй байдлын тооноос хамааруулан статистик нь хэт их байж болно. Dashboard-д суурилуулсан огнооны хүрээ нь сүлжээний администратор руу зөвхөн шаардлагатай мэдээлэл болон цагийн хугацааны үеийн талаар анхаарах боломжийг олгодог.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Огнооны хүрээ нь доорх widget-уудад харагдаж буй мэдээлэл, өөрөөр хэлбэл орлого, шинэ гишүүнчлэлт, улс бүрийн бүртгэл, анги (form)-аар бүртгүүлсэн байгууллагын тоо болон хамгийн их зочилсон сайтуудын мэдээллийг хянадаг.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
**Most Visited Sites** widget ажиллахын тулд **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**-д очиж зочиллоо (visit counting)-г идэвхжүүлээрэй.
:::
