---
title: Mga Form ng Contact sa Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms

Nagdaragdag ang Superdav AI Agent v1.10.0 ng kakayahang gumawa ng contact form nang direkta mula sa chat interface gamit ang Site Builder agent. Pinapayagan ka nitong magdagdag ng fully functional na contact form sa anumang page nang hindi umaalis sa chat.

## Overview {#overview}

Ang kakayahan ng Site Builder para sa contact form (`create_contact_form`) ay awtomatikong nakakakita ng form plugin na naka-install sa iyong site at gumagawa ng contact form gamit ang native capabilities ng plugin na iyon. Kasama sa mga sinusuportahang form plugins ang:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Awtomatikong pipiliin ng assistant ang pinakamahusay na available na form plugin sa iyong site at magge-generate ng contact form na akma sa plugin na iyon.

## Paglikha ng Contact Form {#creating-a-contact-form}

Upang makagawa ng contact form gamit ang Site Builder:

1. Buksan ang **Gratis AI Agent** chat panel sa WordPress admin.
2. Lumipat sa **Site Builder** agent sa pamamagitan ng pag-click sa agent icon sa chat header.
3. Ilarawan ang contact form na gusto mong gawin. Halimbawa:

   > "Magdagdag ng contact form sa Contact page na may mga field para sa pangalan, email, mensahe, at numero ng telepono."

   O simpleng:

   > "Gumawa ng contact form para sa Contact page."

4. Magge-generate ang Site Builder ng contact form at magbabalik ng shortcode na handa nang i-embed.

## Paggamit ng Generated Shortcode {#using-the-generated-shortcode}

Pagkatapos gumawa ng contact form ang Site Builder, magbabalik ito ng isang shortcode (halimbawa, `[contact-form-7 id="123"]`). Maaari mo itong:

1. **I-embed sa isang page o post** — Kopyahin ang shortcode at i-paste ito sa anumang page o post gamit ang block editor o classic editor.
2. **Idagdag sa pamamagitan ng Site Builder** — Hilingin sa Site Builder na idagdag ang form sa isang specific page nang awtomatiko:

   > "Idagdag ang contact form sa Contact page."

3. **Gamitin sa isang template** — Kung komportable ka sa PHP, maaari mong idagdag ang shortcode sa isang theme template file.

## Pag-customize ng Contact Form {#customizing-the-contact-form}

Pagkatapos gumawa ng contact form ang Site Builder, maaari mo itong i-customize pa:

### Sa pamamagitan ng Chat Interface {#via-the-chat-interface}

Hilingin sa Site Builder na baguhin ang form:

> "I-update ang contact form para magdagdag ng subject field at gawing required ang message field."

Iuuupdate ng Site Builder ang form at magbabalik ng updated shortcode.

### Sa pamamagitan ng Form Plugin's Admin Interface {#via-the-form-plugins-admin-interface}

Maaari mo ring i-customize ang form nang direkta sa settings ng iyong form plugin:

1. Pumunta sa **Contact Form 7** (o sa iyong naka-install na form plugin) sa WordPress admin.
2. Hanapin ang form na ginawa ng Site Builder.
3. I-edit ang mga form field, validation rules, at email notifications kung kinakailangan.

## Form Plugins at Compatibility {#form-plugins-and-compatibility}

Awtomatikong nakakakita ang Site Builder kung anong form plugin ang naka-install sa iyong site at ginagamit ito para gawin ang contact form. Kung mayroong maraming form plugins na naka-install, uunahin ng Site Builder ang mga ito sa pagkakasunud-sunod na ito:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Kung walang naka-install sa mga plugin na ito, magrerekomenda ang Site Builder na mag-install muna ng isa bago gumawa ng contact form.

## Email Notifications {#email-notifications}

Ang mga contact form na ginawa ng Site Builder ay naka-configure na magpadala ng email notifications sa site administrator by default. Maaari mong i-customize ang recipient email address at ang notification message:

1. Pumunta sa admin interface ng iyong form plugin.
2. Hanapin ang form na ginawa ng Site Builder.
3. I-edit ang email notification settings.

Para sa mas detalyadong instructions, tingnan ang dokumentasyon ng iyong form plugin:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases {#example-use-cases}

### Simple Contact Form {#simple-contact-form}

> "Gumawa ng simple contact form na may mga field para sa pangalan, email, at mensahe."

### Multi-Step Form {#multi-step-form}

> "Gumawa ng contact form na may unang step para sa contact information at pangalawang step para sa mensahe at preferred contact method."

### Form with Conditional Logic {#form-with-conditional-logic}

> "Gumawa ng contact form na nagpapakita ng iba't ibang fields batay sa pagpili ng user sa isang dropdown."

### Form with File Upload {#form-with-file-upload}

> "Gumawa ng contact form na nagpapahintulot sa mga user na mag-upload ng file o attachment."

:::note
Ang paggawa ng contact form ay available sa Superdav AI Agent v1.10.0 at mas bago. Kailangang active ang Site Builder agent para magamit ang kakayahang ito.
:::
