---
title: Mavandzo ekutanga kuita contact forms
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Contact Forms dzine

Superdav AI Agent v1.10.0 inogona kuita kuti uingane contact forms zvakadzama kubva munzira yakaita chat interface cheSite Builder agent. Izvi zvinokubvira kuti uingane contact forms dzakadzama panyapiro dzinobva munzira yakaita chat.

## Kuratidza (Overview) {#overview}

Kufungwa kwe Site Builder contact form ability (`create_contact_form`) kunobata zvinhu zvako zvinowanikwa zveplugin uye kunokura contact form nekubatsira kubva mupfungwa ya plugin yayo. Plugins dzakakubvira ndizivita:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistant inogona kutaura plugin yakasiyana yakapfura panyapiro yako uye inokura contact form inogadzirwa nekubatsira kubva mupfungwa ya plugin yayo.

## Kuratidza Contact Form {#creating-a-contact-form}

Kuti uingane contact form neSite Builder:

1. Fungisa chat panel ye **Gratis AI Agent** mu WordPress admin.
2. Gita kuSite Builder agent nekubata icon ye agent munzira yakaita header.
3. Tsvaka (describe) contact form inotipa kuti uingane. Sei:

   > "Add a contact form kune Contact page nefields dzinogona kubva nemaoko, email, message, uye phone number."

   Noda:

   > "Create a contact form kune Contact page."

4. Site Builder inogadzira contact form uye inoreva shortcode inogona kuingana (embed).

## Kuratidza Shortcode Inogadzirwa {#using-the-generated-shortcode}

Apana Site Builder inogadzira contact form, inoreva shortcode (sei, `[contact-form-7 id="123"]`). Unogona:

1. **Kuinganisa panyapiro kana post** — Kuratidza shortcode uye kuingisa mu page kana post sei neblock editor kana classic editor.
2. **Kutanga kubva Site Builder** — Tsvaka Site Builder kuti inenge inokura form kune page yakasiyana:

   > "Add the contact form kune Contact page."

3. **Ganya i template** — Kana uri munenge nePHP unenge wazvo, unogona kuita shortcode i theme template file.

## Kuva Formu (Contact Form) {#customizing-the-contact-form}

Panguva Site Builder inenge yakanaka formu ya contact, unogona kuitira zvinhu uye kunge kuva nekuti:

### Kuburikidza neChat Interface {#via-the-chat-interface}

Tsvaka Site Builder kuti areshe formu:

> "Update the contact form kuti uonge subject field uye ushure message field iwe rine chakanangwa (required)."

Site Builder idzivirira formu uye inarudzirira shortcode yakare.

### Kuburikidza neAdmin Interface ya Form Plugin {#via-the-form-plugins-admin-interface}

Unogona kuitira formsi nekuti unogona kuita zvinhu zvakare mu settings ya form plugin yako:

1. Enda ku **Contact Form 7** (kana form plugin yako inenge yakaitwa) mu WordPress admin.
2. Tsvaka formu yakaitwa neSite Builder.
3. Shandisa formsi, validation rules, uye email notifications zvakare zvako.

## Form Plugins uye Compatibility {#form-plugins-and-compatibility}

Site Builder inenge inobona nekuti upi form plugin inenge yakaitwa pa site yako uye inoshandisa iye kuti itore formu ya contact. Kana kuva plugins pane, Site Builder inoshandisa izvi zvinotevera:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Kana pane zvinhu izvi pane, Site Builder inoda kuti uingine iwe utore (install) munhu panguva kuita formu ya contact.

## Email Notifications {#email-notifications}

Contact forms dzakaitwa neSite Builder dzinogona kuitira email notifications ku administrator we site nekuti ndiyo nzira yakare. Unogona kuva nesimba kana recipient email address uye notification message:

1. Enda mu admin interface ya form plugin yako.
2. Tsvaka formu yakaitwa neSite Builder.
3. Shandisa settings dze email notification.

Kuti uone zvinhu zvinotevera, shandisa documentation ya form plugin yako:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Mifaniso za Fana {#example-use-cases}

### Fomulari Rino Rino (Simple Contact Form) {#simple-contact-form}

> "Tsangira fomulari rino rino nekuva, email, uye chirevo."

### Fomulari NeMiti Yechipfundo (Multi-Step Form) {#multi-step-form}

> "Tsangira fomulari rino rino nechimwe chii chaunyangana kune maererano ekutenderwa nekutenderwa kwemiti yechipfundo."

### Fomulari NeChii Chiri Kuti Chirevo (Form with Conditional Logic) {#form-with-conditional-logic}

> "Tsangira fomulari rino rino chii chinotora maererano akasiita kune chii chinotora mune dropdown."

### Fomulari NeKutora File (Form with File Upload) {#form-with-file-upload}

> "Tsangira fomulari rino rino kunoita kuti vanhu vone kuita upload kwefile kana attachment."

:::note
Kutanga fomulari rino kune Superdav AI Agent v1.10.0 nepaure. Site Builder agent inofanira kuva yakati kuti ubatane iwe.
:::
