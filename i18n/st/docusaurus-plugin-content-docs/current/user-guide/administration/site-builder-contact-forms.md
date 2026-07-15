---
title: Tšhobo tsa ho fana ka lefa la site
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Forms ho Hoho (Contact Forms)

Superdav AI Agent v1.10.0 e ntlha le fa motho ea ho fetola forms ho hoho (contact forms) ka tsela e ntle ka chat interface ka ho sebelisa Site Builder agent. Sena se etsa hore u ka feta forms ho hoho e fanaang ka page efe ka ho tsamaea ka chat.

## Leano (Overview) {#overview}

Lebaka la ho fetola contact form le Site Builder (`create_contact_form`) le tla bona automatically plugin ea form e ntse e nts'a le e fetola contact form ka ho sebelisa bohloko ba plugin. Plugins ea form e tsebahalang e hloeketsang ke:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistant o tla seba automatically plugin ea form e fanaang ka site ea hau le e fetola contact form e fetang ka ho sebelisa plugin ea hau.

## Ho Fetola Contact Form {#creating-a-contact-form}

Ho fetola contact form ka ho sebelisa Site Builder:

1. Abala panel ea chat ea **Gratis AI Agent** sa WordPress admin.
2. Seba ka agent ea **Site Builder** ka ho tsamaea le icon ea agent sa header ea chat.
3. Rereka contact form e tsoalo le e fetang. Ho na le sehlopha, re:

   > "Fetola contact form ka Contact page le mehlopha ea lemoho, email, message, le ntlha."

   Melelo a fapaneng:

   > "Fetola contact form ka Contact page."

4. Site Builder o tla fetola contact form le ho ipa shortcode e fetang e ntse e fetang ka ho sebelisa.

## Ho Seba Shortcode E Fetang {#using-the-generated-shortcode}

Ha Site Builder e fetole contact form, e tla ipa shortcode (re 'contact-form-7 id="123"' sehlopha). U ka:

1. **Ho ipa page kapa post** — Kopanya shortcode le ipa ho anya page kapa post ka ho sebelisa block editor kapa classic editor.
2. **Ho ipa ka ho sebelisa Site Builder** — Rereka Site Builder ho fetola form ea page e fetang ka ho tsamaea:

   > "Fetola contact form ka Contact page."

3. **Use it in template** — Ha u le fa PHP a u le fihlelo, u ka u fana shortcode e lefa fa file template ea theme.

## Ho hoholo le Form (Contact Form) {#customizing-the-contact-form}

Ha u leba Site Builder a fetola form ea contact, u ka u fetola haholo:

### Ka Baile Chat Interface {#via-the-chat-interface}

U be u fana Site Builder ea u fetolea form:

> "Fetola form ea contact e le fa subject field le feta message field e le ya nang le nang."

Site Builder o tla fetola form ea u fetoloe a re.

### Ka Baile Admin Interface ea Form Plugin {#via-the-form-plugins-admin-interface}

U ka u fetola form ka lona ka ho setso ea form plugin ea hau:

1. Laela **Contact Form 7** (le le form plugin ea hau e lehlile) ka WordPress admin.
2. Ha u leba form ea Site Builder a fetoloe.
3. Fetola fields ea form, rules ea validation, le email notifications ka u hloka.

## Form Plugins le Ho Baile (Compatibility) {#form-plugins-and-compatibility}

Site Builder o tla hlalosa ka ho tseba hore na form plugin e lehlile ea hau e lehlile ka site ea hau le eona e u fana contact form. Ha u le ba form plugins tse fapaneng, Site Builder o tla ba le bohlokoa ka lona:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ha ho leba form plugins tse anyane, Site Builder o tla ba le bohlokoa ka lona:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ha ho leba form plugins tse anyane, Site Builder o tla u fana ho fetola e le ya nang ha u fetole a contact form.

## Email Notifications {#email-notifications}

Contact forms tse fetoloe ke Site Builder di setsoe ho feta email notifications sa admin ea site ka ho ba le bohlokoa. U ka u fetola email address ea mofuta le message ea notification:

1. Laela admin interface ea form plugin ea hau.
2. Ha u leba form ea Site Builder a fetoloe.
3. Fetola setso sa email notifications.

Ho ba le tsela e fetang, u ka u fana ho leba documentation ea form plugin ea hau:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Litl Ubat (Example Use Cases) {#example-use-cases}

### Contact Form Simple {#simple-contact-form}

> "Hlola le fomu ya kontak simple le na fields aena le email le message."

### Fomu Leho (Multi-Step Form) {#multi-step-form}

> "Tlaola fomu ya kontak le step ya lehle ho information ya kontak le step ya dua le preferred contact method."

### Fomu Le Ho Lihlobo (Form with Conditional Logic) {#form-with-conditional-logic}

> "Tlaola fomu ya kontak le e tla bona fields e fapaneni ka lehllo la user a fetang sa dropdown."

### Fomu Le File Upload {#form-with-file-upload}

> "Tlaola fomu ya kontak le e tla tsoela users ho u-upload file le attachment."

:::note
Ho laola contact form e na le Superdav AI Agent v1.10.0 le lefetso. Site Builder agent eba le fetoga ho u u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-u-
