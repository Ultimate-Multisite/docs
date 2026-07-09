---
title: Fassarar Bayanai na Haɗin Gida
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Forms da Gudanar Wurin Gidaite (Site Builder) {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 ya ƙara damar gina wajen samun saƙo (contact forms) kai tsaye daga cikin interface na tattaunawa ta amfani da Site Builder agent. Wannan yana ba ka damar ƙara wajen samun saƙo masu aiki kai tsaye a kowane shafi ba tare da tafiya daga tattaunawa ba.

## Bayani (Overview) {#overview}

Damar gina wajen samun saƙo na Site Builder (`create_contact_form`) tana samar da nauyi plugin ɗin wajen samun saƙo da kake amfani da shi kuma tana ƙirayar wajen samun saƙo ta amfani da ikon asali (native capabilities) na wannan plugin ɗin. Plugin-plugin da aka tallata sun haɗa da:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Mai taimako yana zaɓar mafi kyawun plugin na wajen samun saƙo da ke tare da kai a kan shafin ka kuma yana samar da wajen samun saƙo mai dacewa da wannan plugin ɗin.

## Gudanar Wajen Samun Saƙo (Creating a Contact Form) {#creating-a-contact-form}

Don gina wajen samun saƙo ta amfani da Site Builder:

1. Bincika panel na tattaunawar **Gratis AI Agent** a cikin WordPress admin.
2. Yi sakamakon tafiya zuwa agent na **Site Builder** ta hanyar danna alamar agent a cikin sashi na tattaunawa (chat header).
3. Bayyana wajen samun saƙo da kake so ka gina. Misali:

   > "Ƙara wajen samun saƙo zuwa shafin Contact tare da ayyuka don sunan, imel, saƙo, da lambar waya."

   Ko kawai:

   > "Gina wajen samun saƙo ga shafin Contact."

4. Site Builder zai samar da wajen samun saƙo kuma ya bawa maka shortcode (wanda za a iya saka shi).

## Amfani da Shortcode da Aka Gina {#using-the-generated-shortcode}

Bayan Site Builder ya ƙirayar wajen samun saƙo, zai ba ka shortcode (misali, `[contact-form-7 id="123"]`). Za ka iya:

1. **Saka shi a shafi ko post** — Ka ɗaukar shortcode kuma ka saka shi a kowane shafi ko post ta amfani da block editor ko classic editor.
2. **Ƙara shi ta hanyar Site Builder** — Ka tambaye Site Builder ya ƙara wajen samun saƙo zuwa wani shafi na musamman kai tsaye:

   > "Ka ƙara wajen samun saƙo zuwa shafin Contact."

3. **Amfai am wani template** — Idan kana da jin PHP, za ka iya ƙara shortcode zuwa fayil ɗin template na theme.

## Gyara Bayanai na Wurin Tattalin Arziki (Contact Form) {#customizing-the-contact-form}

Bayan Site Builder ya ƙirƙira bayanan arziki, za ka iya gyara shi daban:

### Ta hanyar Wajen Tattaunawa (Chat Interface) {#via-the-chat-interface}

Ka tambaye Site Builder ya canza bayanan arziki:

> "Ƙara bayanan arziki don ƙara wani makonno na bayani da kuma sa makonno na saƙo ya zama mai buƙata."

Site Builder zai gyara bayanan arziki kuma ya sake bincike shortcode ɗin da aka gyara.

### Ta hanyar Wajen Gudanarwa (Admin Interface) na Plugin na Bayanai Arziki {#via-the-form-plugins-admin-interface}

Za ka iya gyara bayanan arziki kai tsaye a cikin siffofin plugin na bayanai arziki:

1. Ka je **Contact Form 7** (ko plugin na bayanai arziki da kake da shi) a cikin WordPress admin.
2. Ka nemo bayanan arziki da Site Builder ya ƙirƙira.
3. Ka gyara makonno na bayani, ka gyara ƙa'idodin tabbatarwa (validation rules), da kuma saƙonnin email kamar yadda ake bukata.

## Plugins na Bayanai Arziki da Haɗi Kai (Compatibility) {#form-plugins-and-compatibility}

Site Builder yana gano ne ba wane plugin na bayanai arziki kake da shi a kan site ɗinka kuma yana amfani da shi don ƙirƙirar bayanan arziki. Idan akwai nauyi na plugins na bayanai arziki, Site Builder zai samar da su wannan tsari:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Idan ba a saka duk waɗannan plugins ba, Site Builder zai ba ka shawarar saka wani kafin ƙirƙirar bayanan arziki.

## Saƙonnin Email (Email Notifications) {#email-notifications}

Bayanan arziki da Site Builder ya ƙirƙira an shirya su don aiko saƙon email ga mai gudanarwa na site a matsayin asali. Za ka iya gyara wajen email ɗin alamar shiga waɗannan bayanan da aka rubuta:

1. Ka je wajen gudanarwar admin na plugin na bayanai arziki.
2. Ka nemo bayanan arziki da Site Builder ya ƙirƙira.
3. Ka gyara siffofin saƙon email.

Don manhajar tallafi, ka duba dokumenta na plugin na bayanai arziki:

- [Email Notifications for Contact Form 7](https://contactform7.com/docs/)
- [Email Notifications for WPForms](https://wpforms.com/docs/)
- [Email Notifications for Fluent Forms](https://fluentforms.com/docs/)
- [Email Notifications for Gravity Forms](https://docs.gravityforms.com/)

## Amaliyaninai Amali (Example Use Cases) {#example-use-cases}

### Fom Ƙaro Mai Sauƙi (Simple Contact Form) {#simple-contact-form}

> "Ƙirƙiro wani fomu mai sauƙi don samun sunan, imel, da saƙo."

### Fomu Mai Matakai Da Yawa (Multi-Step Form) {#multi-step-form}

> "Ƙirƙiro wani fomu na tuntuwa wanda yana da mataki na farko don bayanan addini da mataki na biyu don saƙo da hanyar da suka fi so don samun saƙo."

### Fomu Mai Magana Ta Shafi Tunani (Form with Conditional Logic) {#form-with-conditional-logic}

> "Ƙirƙiro wani fomu mai nuna fildشون daban-daban dangane da zaɓin kai tsaye a cikin dropdown menu."

### Fomu Mai Haɗa File (Form with File Upload) {#form-with-file-upload}

> "Ƙirƙiro wani fomu na samun sunan wanda ke ba masu amfani damar shigar wani file ko ƙarin bayani."

:::note
Ƙirƙirar fomu mai karo tana da sauƙi a Superdav AI Agent v1.10.0 da ya farawa. Dole ne agent na Site Builder ya kasance aiki don amfani da wannan ikon.
:::
