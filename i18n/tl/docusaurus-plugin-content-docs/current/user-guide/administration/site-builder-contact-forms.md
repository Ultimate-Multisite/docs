---
title: Mga Contact Form ng Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Mga Contact Form sa Site Builder {#site-builder-contact-forms}

Ang Superdav AI Agent v1.10.0 ay nagdagdag ng kakayahang gumawa ng mga contact form nang direkta mula sa chat interface gamit ang Site Builder agent. Dahil dito, maaari kang magdagdag ng mga kumpletong functional na contact form sa anumang pahina nang hindi umaalis sa chat.

## Pangkalahatang-ideya (Overview) {#overview}

Ang kakayahan sa paggawa ng contact form ng Site Builder (`create_contact_form`) ay awtomatikong nakakakita ng iyong naka-install na form plugin at gumagawa ng contact form gamit ang mga native capabilities ng plugin na iyon. Ang mga sinusuportang form plugin ay kinabibilangan ng:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Awtomatikong pipiliin ng assistant ang pinakamahusay na available na form plugin sa iyong site at gagawa ng contact form na akma sa plugin na iyon.

## Paggawa ng Contact Form {#creating-a-contact-form}

Para gumawa ng contact form gamit ang Site Builder:

1. Buksan ang chat panel ng **Gratis AI Agent** sa WordPress admin.
2. Lumipat sa **Site Builder** agent sa pamamagitan ng pag-click sa icon ng agent sa chat header.
3. Ilarawan ang contact form na gusto mong gawin. Halimbawa:

   > "Magdagdag ng contact form sa Contact page na may mga field para sa pangalan, email, mensahe, at numero ng telepono."

   O simpleng:

   > "Gumawa ng contact form para sa Contact page."

4. Ang Site Builder ay gagawa ng contact form at magbabalik ng isang shortcode na handa nang i-embed.

## Paggamit ng Nabuo na Shortcode {#using-the-generated-shortcode}

Pagkatapos gawin ng Site Builder ang contact form, ibabalik nito ang isang shortcode (halimbawa, `[contact-form-7 id="123"]`). Maaari mong:

1. **I-embed ito sa isang page o post** — Kopyahin ang shortcode at i-paste ito sa anumang page o post gamit ang block editor o classic editor.
2. **Idagdag ito sa pamamagitan ng Site Builder** — Ipaalam sa Site Builder na idagdag ang form sa isang partikular na pahina nang awtomatiko:

   > "Magdagdag ng contact form sa Contact page."

3. **Gamitin ito sa isang template** — Kung komportable ka sa PHP, maaari mong idagdag ang shortcode sa theme template file mo.

## Pag-customize ng Contact Form {#customizing-the-contact-form}

Pagkatapos gumawa ng contact form ng Site Builder, pwede mo pa itong i-customize:

### Sa pamamagitan ng Chat Interface {#via-the-chat-interface}

Humingi sa Site Builder na baguhin ang form:

> "I-update ang contact form para magdagdag ng subject field at gawing required ang message field."

Aayusin ng Site Builder ang form at ibabalik ang updated shortcode.

### Sa pamamagitan ng Admin Interface ng Form Plugin {#via-the-form-plugins-admin-interface}

Pwede mo ring i-customize nang direkta sa settings ng iyong form plugin:

1. Pumunta sa **Contact Form 7** (o sa installed mong form plugin) sa WordPress admin.
2. Hanapin ang form na ginawa ng Site Builder.
3. I-edit ang mga field ng form, validation rules, at email notifications ayon sa kailangan mo.

## Mga Form Plugin at Compatibility {#form-plugins-and-compatibility}

Awtomatikong natutukoy ng Site Builder kung anong form plugin ang naka-install sa iyong site at ginagamit ito para gumawa ng contact form. Kung mayroong maraming form plugin na naka-install, bibigyan ng prayoridad ng Site Builder sila sa ganitong pagkakasunod:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Kung wala sa mga plugin na ito ang naka-install, irerekomenda ng Site Builder na mag-install muna bago gumawa ng contact form.

## Email Notifications {#email-notifications}

Ang mga contact form na ginawa ng Site Builder ay naka-configure nang default para magpadala ng email notification sa site administrator. Pwede mong i-customize ang recipient email address at mensahe ng notification:

1. Pumunta sa admin interface ng iyong form plugin.
2. Hanapin ang form na ginawa ng Site Builder.
3. I-edit ang mga setting ng email notification.

Para sa mas detalyadong impormasyon, tingnan ang documentation ng iyong form plugin:

- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Mga Halimbawa ng Paggamit (Example Use Cases) {#example-use-cases}

### Simpleng Contact Form {#simple-contact-form}

> "Gumawa ng simpleng contact form na may mga field para sa pangalan, email, at mensahe."

### Multi-Step Form {#multi-step-form}

> "Gumawa ng contact form na may unang hakbang para sa impormasyon ng kontak at ikalawang hakbang para sa mensahe at gustong paraan ng pakikipag-ugnayan."

### Form na may Conditional Logic {#form-with-conditional-logic}

> "Gumawa ng contact form na nagpapakita ng iba't ibang fields batay sa pagpili ng user sa isang dropdown menu."

### Form na may File Upload {#form-with-file-upload}

> "Gumawa ng contact form na nagpapahintulot sa mga user na mag-upload ng file o attachment."

:::note
Ang paggawa ng contact form ay available sa Superdav AI Agent v1.10.0 at mas bago nito. Kailangang aktibo ang Site Builder agent para gamitin ang kakayahang ito.
:::
