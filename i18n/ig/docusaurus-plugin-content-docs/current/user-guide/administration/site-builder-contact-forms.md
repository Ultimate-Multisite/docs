---
title: Ndu Nkwado Site Builder Contact Forms
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Forms Kontakt Website

Superdav AI Agent v1.10.0 nwere ike ị chụm forms kontakt direktu na chat interface eziro Site Builder agent. Oge a ji ị chụm forms kontakt nke dị mma na ndale anyị anọ site ma ọ bụ anọ.

## Overview {#overview}

Ihe ị chụm contact form Site Builder (`create_contact_form`) ji otomatik nwere ike ịhụ plugin form ị nwere na-adịsite na-adịsite, maara ya contact form ji ihe plugin ahụ na-eme. Ihe a doro anyị bụ:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistant ahụ ji otomatik chụm plugin form mgbe ọ dị mma na site ị nwere ma ji eme contact form nke dị mma na-adịsite na-adịsite.

## Creating a Contact Form {#creating-a-contact-form}

Ọ bụrụ na ị chụm contact form ji Site Builder:

1. Open panel chat **Gratis AI Agent** na WordPress admin.
2. Switch zu **Site Builder** agent maara ya icon na header chat.
3. Describe contact form ị chọrọ ị chụm. Ọ bụrụ na ọ bụ:

   > "Add a contact form to the Contact page with fields for name, email, message, and phone number." (Chụm contact form na Contact page maara ndị dị ka name, email, message, na phone number.)

   Ma ọ bụ ihe dị mma:

   > "Create a contact form for the Contact page." (Chụm contact form maka Contact page.)

4. Site Builder ji eme contact form ma hụrụ shortcode nke siapụ ya embed.

## Using the Generated Shortcode {#using-the-generated-shortcode}

Ọ bụrụ na Site Builder ji eme contact form, ọ ga-eme shortcode (ọchịrị, `[contact-form-7 id="123"]`). Ị ga-anọchịrị:

1. **Embed ya na page ma ọ bụ post** — Copy shortcode ahụ ma paste ya na ndale anyị anọ site ma ọ bụ post ji block editor ma ọ bụ classic editor.
2. **Add ya dwara Site Builder** — Ji Site Builder ị chọrọ ị chụm form na page dị mma:

   > "Add the contact form to the Contact page." (Chụm contact form na Contact page.)

3. **Use nó na template** — Ka ọ bụrụ ị chụrụ PHP, ị nwere ike ịcha shortcode ahụ n'ime file template theme.

## Ịchara Contact Form-ah {#customizing-the-contact-form}

Ọ bụrụ na Site Builder ya bụ contact form ahụ, ị nwere ike ịchara ya nke warụ:

### Baka Chat Interface {#via-the-chat-interface}

Kọwa Site Builder ahụ ka ọ gbachara form ahụ:

> "Update the contact form to add a subject field and make the message field required." (Chara contact form ahụ ka ị chọpụta field subject na kọwa field message ahụ dịkwa dị.)

Site Builder ahụ ga-agbanye form ahụ ma gbanwe shortcode ahụ nkea anyị.

### Baka Admin Interface Plugin Form Ahụ {#via-the-form-plugins-admin-interface}

Ị nwere ike ịchara form ahụ dirine n'ime settings plugin form ahụ:

1. Mene **Contact Form 7** (na plugin form ahụ ị nwere) n'WordPress admin.
2. Le ka form ahụ Site Builder ya bụ.
3. Gbanwe fields form, validation rules, na email notifications dịka ọ dị.

## Plugin Form Ahụ na Compatibility {#form-plugins-and-compatibility}

Site Builder ahụ ga-achie automatically onye plugin form ahụ nwere n'site ị chọpụta ya ma jiri ya ịchara contact form ahụ. Ọ bụrụ na ị nwere multiple form plugins, Site Builder ahụ ga-prioritize ha n'ime ọkụmọọ ndị a:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ọ bụrụ na ọ bụla plugin ndị a dịghị nwere, Site Builder ahụ ga-rekomend na ị chọpụta ọ bụla ha ọzọ ma ọ bụrụ na ị gbanwe contact form ahụ.

## Email Notifications {#email-notifications}

Contact forms ndị Site Builder ya bụ configured ịgba email notifications gaa site administrator by default. Ị nwere ike ịchara recipient email address na notification message:

1. Mene admin interface plugin form ahụ.
2. Le ka form ahụ Site Builder ya bụ.
3. Gbanwe settings email notification.

Ọ bụrụ na ị chọrọ mmeghị ọkụmọọ dị n'ime, jere documentation plugin form ahụ:

- [Notifikasyon Email Notifications Contact Form 7](https://contactform7.com/docs/)
- [Notifikasyon Email Notifications WPForms](https://wpforms.com/docs/)
- [Notifikasyon Email Notifications Fluent Forms](https://fluentforms.com/docs/)
- [Notifikasyon Email Notifications Gravity Forms](https://docs.gravityforms.com/)

## Ụdụ Uzoofia (Example Use Cases) {#example-use-cases}

### Contact Form Simple {#simple-contact-form}

> "Kụziri contact form simple na fields name, email, na message."

### Form Multi-Step {#multi-step-form}

> "Kụziri contact form na step ọzọ ọzọ: step ọzọ na information contact na step ọzọ na message na cara contact preferred."

### Form Na Logic Conditional {#form-with-conditional-logic}

> "Kụziri contact form na nwere fields dị iche iche dựaa selection user na dropdown."

### Form Na File Upload {#form-with-file-upload}

> "Kụziri contact form na cho users nwere ike upload file ma attachment."

:::note
Kụziri contact form available na Superdav AI Agent v1.10.0 na ọgụrụ ọ bụla ọzọ. Site Builder agent ji dị ọnụ ahụ iji ịnwale ihe a.
:::
