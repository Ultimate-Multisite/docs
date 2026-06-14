---
title: Mga Porma sa Pagkontak sa Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Mga Contact Form sa Site Builder

Ang Superdav AI Agent v1.10.0 naghatag og abilidad nga makakabalo maghimo og mga contact form direkta gikan sa chat interface gamit ang Site Builder agent. Kini nagtugot kanimo sa pagdugang og bug-os ug functional nga mga contact form sa bisan unsang page nga wala gyud mogawas sa chat.

## Panan-aw (Overview)

Ang abilidad sa contact form sa Site Builder (`create_contact_form`) awtomatikong makadiskubre sa imong gi-install nga form plugin ug maghimo og contact form gamit ang natural nga mga abilidad ni maong plugin. Ang mga suportadong form plugins naglakip na:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Ang assistant awtomatikong mopili sa labing maayo nga available nga form plugin sa imong site ug maghimo og contact form nga gipa-tailor para anang plugin.

## Paghimo og Contact Form

Aron makahimo og contact form gamit ang Site Builder:

1. Buksan ang chat panel sa **Gratis AI Agent** sa WordPress admin.
2. Lakip sa **Site Builder** agent pinaagi sa pag-click sa icon sa agent sa chat header.
3. Ilarawan ang contact form nga gusto nimong himuon. Pananglitan:

   > "Add a contact form sa Contact page nga adunay mga field para sa ngalan, email, mensahe, ug numero sa telepono."

   O basta:

   > "Create og contact form para sa Contact page."

4. Ang Site Builder maghimo sa contact form ug mobalik og shortcode nga andam na i-embed.

## Paggamit sa Nahimong Shortcode

Human ma-create sa Site Builder ang contact form, mobalik kini og shortcode (pananglitan, `[contact-form-7 id="123"]`). Mahimo nimo:

1. **I-embed kini sa usa ka page o post** — Kopyaha ang shortcode ug i-paste kini sa bisan unsang page o post gamit ang block editor o classic editor.
2. **Idagdag kini pinaagi sa Site Builder** — Pangutana sa Site Builder nga idugang ang form sa usa ka piho nga page:

   > "Add ang contact form sa Contact page."

3. **Gamiton kini sa template** — Kung komportable ka sa PHP, pwede nimo i-add ang shortcode sa theme template file.

## Pag-customize sa Contact Form

Pagkahuman nga himuon sa Site Builder ang contact form, pwede pa nimo kining mas i-customize:

### Paggamit pinaagi sa Chat Interface

Pangutana sa Site Builder nga usbon ang form:

> "Update the contact form para magdugang og subject field ug himoa nga required ang message field."

Usbon sa Site Builder ang form ug ibalik ang updated shortcode.

### Paggamit pinaagi sa Admin Interface sa Form Plugin

Pwede pud nimo i-customize ang form direkta sa settings sa imong form plugin:

1. Adto sa **Contact Form 7** (o sa imong gi-install nga form plugin) sa WordPress admin.
2. Pangitaa ang form nga gihimo sa Site Builder.
3. Usbon ang mga field sa form, validation rules, ug email notifications kung kinahanglan nimo.

## Mga Form Plugin ug Compatibility

Automated nga makuha sa Site Builder kung unsang form plugin ang gi-install sa imong site ug gamiton kini para himuon ang contact form. Kung daghan ang mga form plugin nga gi-install, ang Site Builder maghatag og prayoridad kanila niining order:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Kung wala pay niini nga mga plugin, rekomendasyon sa Site Builder mao ang pag-install ug usa pa sa dili pa himuon ang contact form.

## Email Notifications

Ang mga contact form nga gihimo sa Site Builder gi-configure na para magpadala og email notifications sa site administrator by default. Pwede nimo i-customize ang recipient email address ug ang notification message:

1. Adto sa admin interface sa imong form plugin.
2. Pangitaa ang form nga gihimo sa Site Builder.
3. Usbon ang mga settings sa email notification.

Para sa mas detalyadong instruksyon, magrefer sa documentation sa imong form plugin:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Mga Halimbawa sa Paggamit (Example Use Cases)

### Simple Contact Form

> "Pagbuhat og usa ka simple nga contact form nga adunay mga field para sa ngalan, email, ug mensahe."

### Multi-Step Form

> "Pagbuhat og contact form nga adunay unang lakang alang sa impormasyon sa kontak ug ikaduha nga lakang alang sa mensahe ug paboritong paagi sa pagkontak."

### Form with Conditional Logic

> "Pagbuhat og contact form nga magpakita og lain-laing mga field base sa pagpili sa tiggamit sa usa ka dropdown menu."

### Form with File Upload

> "Pagbuhat og contact form nga nagtugot sa mga tiggamit sa pag-upload og file o attachment."

:::note
Ang paghimo og contact form anaa na sa Superdav AI Agent v1.10.0 ug mas bag-o pa ni. Kinahanglan aktibo ang Site Builder agent aron mogamit kini nga abilidad.
:::
