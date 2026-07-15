---
title: Sayt Quril Kontakt Formlari
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# سايت ساز إخلاص نماشات (Site Builder Contact Forms)

Superdav AI Agent v1.10.0، سايت ساز نماشات (Site Builder agent) ئامێرەکە بەکارهێنانی چات پۆلێس (chat interface) لە ڕێگەی خودی دەستکاری سایتەوە دەبێت بۆ دروستکردنی فۆرمەکانی پەیوەندی (contact forms). ئەمەش وەک ئەوەیە کە فۆرمە تەواو کارکردنەکان بەبێ ئەوەی لە چاتەکە دەرچیت، دەتوانیت زیاد بکەیتە هەر پەڕەیەکی سایتێک.

## گشتی (Overview) {#overview}

قابلیتی دروستکردنی فۆرم پەیوەندی یاری سايت ساز (Site Builder contact form ability) (`create_contact_form`) بە شێوەیەکی ئۆتۆماتیک پلاتفۆرمی فۆرمەکەت کە دامەزرێنراوە دەدۆزێتەوە و فۆرمێکی پەیوەندی دروست دەکات بە تایبەتمەندییەکانی ئەو پلاتفۆرمەی فۆرمەکە. پلاتفۆرمە فۆرمەکان کە پشتگیریکردارن ئەمانەن:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

دستیارەکە بە شێوەیەکی ئۆتۆماتیک باشترین پلاتفۆرمی فۆرم لەسەر سایتەکەت دەبنەدی و فۆرمێکی پەیوەندی دروست دەکات کە تایبەت بێت بەو پلاتفۆرمەی فۆرمەکە.

## دروستکردنی فۆرم پەیوەندی (Creating a Contact Form) {#creating-a-contact-form}

بۆ دروستکردنی فۆرم پەیوەندی بە بەکارهێنانی سايت ساز (Site Builder):

1. لە ئامێرەی چات **Gratis AI Agent** لە پۆلێس مدیریی WordPressەوە کراوە.
2. بۆ ئەوەی بگۆڕیت بۆ یاری سايت ساز (Site Builder)، دەتوانیت بەپێی ئایکۆنی یاریەکە لە سەردارچوونی چاتەکەدا هەڵبژاردن بکەیت.
3. ئەو فۆرم پەیوەندەی کە دەتەوێت دروست بکەیت، وەسفی بکەیت. بۆ نموونە:

   > "فۆرمێکی پەیوەندی زیاد بکە بە پەڕەی Contact لەگەڵ خانەکانی ناوی، ئیمێل، پەیام و ژمارەی تەلەفۆن."

   یان سادە بڵێیت:

   > "فۆرم پەیوەندی بۆ پەڕەی Contact دروست بکە."

4. سايت ساز (Site Builder) فۆرم پەیوەندییەکە دروست دەکات و کۆدێکی کورت (shortcode) دەدات کە ئامادەیە بۆ زیادکردن.

## بەکارهێنانی کۆدێکی کورت دروستکراو (Using the Generated Shortcode) {#using-the-generated-shortcode}

پاش ئەوەی سايت ساز فۆرم پەیوەندییەکە دروست بکات، ئەو کۆدەی کورت دەداتەوە (بۆ نموونە، `[contact-form-7 id="123"]`). دەتوانیت:

1. **لە پەڕەیەکی یان پۆستێکدا زیاد بکەیت** — کۆدێکی کورتەکە دەربکێشە و لە هەر پەڕەیەکی یان پۆستێکدا بەکاری بهێنە بە بەکارهێنانی block editor یان classic editor.
2. **بە ڕێگەی سايت سازەوە زیاد بکەیت** — داوا بکە لە سايت ساز بۆ ئەوەی فۆرمەکە ئۆتۆماتیک لەسەر پەڕەیەکی دیاریکراو زیاد بکات:

   > "فۆرم پەیوەندییەکە لەسەر پەڕەی Contact زیاد بکە."

٣. **Template-de istafide** — PHP bilen rahat bolsaňsa, bu shortcode-i tema şablon fayluna goşyp bilersiňiz.

## Kontakt Formyny Özelleşdirmek {#customizing-the-contact-form}

Site Builder kontakt formany döredenden soň, ony has gowy özelleşdire bilersiňiz:

### Chat Arayüzü Arqali {#via-the-chat-interface}

Site Builder-e formany üýtgetmek üçin soraýa bilersiňiz:

> "Kontakt formany mowzuk (subject) alanı goşmak we mesaj alanı mütlək (required) etmegi soraýa."

Site Builder formany üýtgedip, üýtgedilen shortcode-i geri berer.

### Form Pluginini Admin Arayüzü Arqali {#via-the-form-plugins-admin-interface}

Formany dogrysa öz form plugininiň sozlamalarından hem özelleşdire bilersiňiz:

1. WordPress admininde **Contact Form 7** (ýa-da ýüklendiğiniz form pluginini) açyň.
2. Site Builder-i döredilen formany tapyň.
3. Gerek bolsa, form alanlaryny, barlaglama kurallaryny we elektron bildirişleri üýtgedip bilersiňiz.

## Form Pluginleri we Birlilik {#form-plugins-and-compatibility}

Site Builder siziň saytınızda nähili form pluginini ýüklendiğini awtomatiki tanap we kontakt formany döretmek üçin ony ulanyp bilýär. Eger birnäçe form pluginleri ýüklense, Site Builder olary şu görkezijde has öndüripli bolar:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Bu pluginlerden heç biri ýüklü däl bolsa, Site Builder kontakt formany döretmekden önce birini ýüklämegi maslahat berer.

## Elektron Bildirişler (Email Notifications) {#email-notifications}

Site Builder-i döredilen kontakt formalary awtomatiki bilen sayt administratoruna elektron bildiriş göndermegi görkezýär. Siz aljyma (recipient) elektron adyny we bildiriş mesagenizi özelleşdire bilersiňiz:

1. Form plugininiň admin arayüzüne gidiň.
2. Site Builder-i döredilen formany tapyň.
3. Elektron bildiriş sozlamalaryny üýtgedip bilersiňiz.

Detallar üçin, form plugininiň dokumentasiýasyna müraciň:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Misalə İstifadə Nümunələri (Example Use Cases) {#example-use-cases}

### Sadəd Kontakt Formu (Simple Contact Form) {#simple-contact-form}

> "Ad, email və mesaj sahələrini olan sadə bir kontakt formu yaradın."

### Çox Addımlı Form (Multi-Step Form) {#multi-step-form}

> "Kontakt məlumatları üçün birinci addım və mesajla/tövsiyə olunan əlaqə üsul üçün ikinci addım olan bir kontakt formu yaradın."

### Şərtli Məntiq Olunan Form (Form with Conditional Logic) {#form-with-conditional-logic}

> "Dropdown-da istifadəçinin seçimine əsasən fərqli sahələri göstərən bir kontakt formu yaradın."

### Fayl Yükləməli Form (Form with File Upload) {#form-with-file-upload}

> "İstifadəçilərə fayl və ya əlavə yükləməsinin icazə olunduğu bir kontakt formu yaradın."

:::note
Kontakt formu yaratmaq Superdav AI Agent v1.10.0 və daha yeni versiyalarda mümkündür. Bu funksiyanı istifadə etmək üçün Site Builder agentinin aktiv olması lazımdır.
:::
