---
title: Вайт байрлалын багцны холбоо мэдээллийн маягтууд
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Вэбсайт боловсруулагч (Site Builder) холбоо барих маягт

Superdav AI Agent v1.10.0-ийн хамт таны Site Builder агент ашиглан чат интерфейсээс шууд холбоо барих маягтуудыг үүсгэх боломжтой боллоо. Энэ нь чат руу орохгүйгээр ямар ч хуудас дээр бүрэн функцтэй холбоо барих маягтуудыг нэмэхийг зөвшөөрдөг.

## Ерөнхий өгүүлэл {#overview}

Site Builder-ийн холбоо барих маягт үүсгэх боломж (`create_contact_form`) таны суулгасан маягтын плагиныг автоматаар илрүүлж, тухайн плагины үндсэн чадварыг ашиглан холбоо барих маягийг үүсгэнэ. Дэмжих поддержид байгаа маягтуудын плагинууд нь:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Ассистент таны сайтын хамгийн тохиромжтой боломжит маягтыг сонгож, түүнд тохирсон холбоо барих маягийг үүсгэнэ.

## Холбоо барих маягт үүсгэх {#creating-a-contact-form}

Site Builder ашиглан холбоо барих маягт үүсгэхэд:

1. WordPress-ийн администратор дотор **Gratis AI Agent** чатын тавцанг нээてください.
2. Чат хэсгийн дээрх агент иконты дээр дарж **Site Builder** агент руу шилжинэ.
3. Үүсгэх гэж буй холбоо барих маягийг тайлбарлаарай. Жишээ нь:

   > "Contact page-д нэр, email, мессеж, утасны дугаар зэрэг талбаруудтай холбоо барих маягт нэмнэ."

   Эсвэл энгийнээр:

   > "Contact page-д зориулсан холбоо барих маягт үүсгэнэ."

4. Site Builder холбоо барих маягийг үүсгэж, татаж авах боломжтой (embed) код буцаадаг.

## Үүссэн шоркод ашиглах {#using-the-generated-shortcode}

Site Builder холбоо барих маягийг үүсгэсний дараа, тэрээр шоркод (жишээлбэл, `[contact-form-7 id="123"]`) буцаана. Та:

1. **Хуудас эсвэл нийтлэг дэвтэрт оруулж болно** — Шоркодыг хуулж аваад блок редактор (block editor) эсвэл классик редактороор ямар ч хуудас эсвэл нийтлэг дэвтэр дээр хийхэд зүгээр л үүсгэ.
2. **Site Builder-ийн замаар нэмж болно** — Site Builder-д тухайн маягийг тодорхой хуудас руу автоматаар нэмхийг хүснэ:

   > "Contact page-д холбоо барих маягийг нэмнэ."

3. **Түүнийг шаблон дотор ашиглах** — Хэрэв та PHP-тэй танил байвал энэ shortcode-ийг theme template файл руу нэмж болно.

## Contact Form-ыг тохируулах {#customizing-the-contact-form}

Site Builder contact form-ыг үүсгэсний дараа, та үүнийг цааш нь илүү тохируулж болно:

### Chat Interface ашиглан {#via-the-chat-interface}

Site Builder-т дараах байдлаар өөрчлөхийг хүсээр туйл:

> "Contact form-ыг сэдэв (subject) талбарын нэмэлт ба message талбарыг зайлшгүй шаардлагатай болгож шинэчил."

Site Builder нь формыг шинэчилж, шинэчлэгдсэн shortcode-ийг буцаах болно.

### Form Plugin-ийн Admin Interface ашиглан {#via-the-form-plugins-admin-interface}

Та form plugin-ийн тохиргоо дотор шууд формыг тохируулах боломжтой:

1. WordPress admin дээр **Contact Form 7** (эсвэл таны суулгасан form plugin) руу орно.
2. Site Builder-ээр үүсгэсэн формыг олно.
3. Шаардлагатай бол form field, validation rules болон email notification-ыг өөрчилн тохируулна.

## Form Plugins ба нийцэл {#form-plugins-and-compatibility}

Site Builder таны сайтод аль form plugin суулгагдсаныг автоматаар мэдэрч, contact form үүсгэхэд түүнийг ашигладаг. Хэрэв хэд хэдэн form plugin суулгагдсан бол Site Builder дараах дарааллаар тэдгээрийг өгөгдсөн:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Хэрэв эдгээр plugin-үүдийн аль нь ч суулгагдаагүй бол Site Builder contact form үүсгэхээс өмнө нэгийг суулгахыг зөвлөнө.

## Email Notifications {#email-notifications}

Site Builder-ээр үүсгэсэн contact forms анхдагч байдлаар site administrator руу email notification илгээхээр тохируулсан байдаг. Та хүлээн авагчийн email хаяг болон notification message-ийг өөрчилж болно:

1. Таны form plugin-ийн admin interface руу орно.
2. Site Builder-ээр үүсгэсэн формыг олно.
3. Email notification-ыг тохиргоо хийн өөрчлөлт хийнэ.

Дэлгэрэнгүй зааврын хувьд таны form plugin-ийн documentation руу хандана уу:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Жишээ хэрэглээний тохиолдлууд {#example-use-cases}

### Энгийн холбоо барих маягт (Simple Contact Form) {#simple-contact-form}

> "Нэр, цахим шуудан, мессеж талбаруудтай энгийн холбоо барих маягт үүсгээрэй."

### Олон алхамтай маягт (Multi-Step Form) {#multi-step-form}

> "Холбоо барих мэдээллийн эхний алхам болон мессеж, сонгосон холбоо барих арга зүйг тодорхойлох хоёр дахь алхамтай холбоо барих маягт үүсгээрэй."

### Урьдчилсан логиктой маягт (Form with Conditional Logic) {#form-with-conditional-logic}

> "Dropdown-ын сонголтын үндсэн дээр хэрэглэгчийн сонголтод тулгуурлан өөр талбарууд харагдах холбоо барих маягт үүсгээрэй."

### Файл оруулах маягт (Form with File Upload) {#form-with-file-upload}

> "Хэрэглэгчдэд файл эсвэл хавсаргалт оруулах боломжтой холбоо барих маягт үүсгээрэй."

:::note
Contact form-ийг Superdav AI Agent v1.10.0 болон түүнээс дээш хувилбарт үүсгэх боломжтой. Энэхүү чадварыг ашиглахын тулд Site Builder агент идэвхтэй байх шаардлагатай.
:::
