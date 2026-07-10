---
title: Ngā whakamāhi o te Whakahaere Wāhi
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Forms Whakaaro Aotūroa (Site Builder) {#site-builder-contact-forms}

Ko Superdav AI Agent v1.10.0 e whāinga te mahi toi o te whakamaoritanga o ngā tōkanga whakapā (contact forms) i runga i te chat interface, ka whakamahi ai te Site Builder agent. Ko te mea he tino pai, e hoki ahau ki te chat hei whero i ngā forms Whakaaro Aotūroa (contact forms) mō ahau.

## Whakawātea (Overview) {#overview}

Ko te mahi o te form Whakaaro Aotūroa (`create_contact_form`) e whakamahi ana i te AI, e whai ake i te plugin form mo ahau, ka whakamaoritanga ana ko e whero te contact form mā te kaha o tēnei plugin. Ko ngā plugins form e whakamahia ana he:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Ko te assistant e whai ake i te plugin form mō ahau, ka whakamaoritanga ana ko e whero te contact form mā tēnei plugin.

## Whakapehe I te Contact Form {#creating-a-contact-form}

Mā te whakamahi i te Site Builder, he mea nui ki te whakamaoritanga o te contact form:

1. Whakarongo i te panel chat **Gratis AI Agent** i WordPress admin.
2. Whakaahua ki te agent **Site Builder** e ngā icon o te header o te chat.
3. Aroha ahau i te contact form mo te whakamaoritanga. Hei mōhiamo, he pēpi:

   > "Whakahaere contact form ki te Contact page me ngā fields mo ingoa, email, message, me phone number."

   Hei takiwai:

   > "Whakahaere contact form mo te Contact page."

4. Ko te Site Builder e whakamaoritanga ana ko e whero te contact form me te tino tika (shortcode) hei whero i te ihi.

## Whakarite I te Shortcode Whakaaro Aotūroa (Using the Generated Shortcode) {#using-the-generated-shortcode}

I raro i te whakamaoritanga o te Site Builder, he whakaputanga tēnei shortcode (hei mōhiamo, `[contact-form-7 id="123"]`). Ko koe e taea ai:

1. **Whakarite i a ia i page pei i post** — Kopiko te shortcode me whero i te page pei i post mā te block editor he pēpi te editor classic.
2. **Whakahaere i a ia via te Site Builder** — Aroha ahau i te Site Builder mo te whakamaoritanga o te form ki te page-a-tū:

   > "Whakahaere contact form ki te Contact page."

3. **Rauhia i ai te template** — Ko koe mōhio ki PHP? Ko koe e taea te whāinga (add) te shortcode ki te file o te theme template.

## Whakamahi i te Contact Form {#customizing-the-contact-form}

Iha i te Site Builder, ka taea e koe te whakamaoritanga atu i te contact form:

### Via the Chat Interface {#via-the-chat-interface}

Whakawatea i te Site Builder kia whakawātea te form:

> "Update the contact form to add a subject field and make the message field required." (Whakaaro ki te whakahou i te contact form kia whero te field o te subject me te whero te message field).

Ka whakahou te Site Builder te form ā, ka puta mai te shortcode pēnei.

### Via the Form Plugin's Admin Interface {#via-the-form-plugins-admin-interface}

Ko koe e taea te whakamaoritanga atu i te form i runga i te whakaritenga (settings) o te form plugin mo te form ahino:

1. Pāinga ki **Contact Form 7** (arau te form plugin ahino) i te WordPress admin.
2. Pēhea koe e whakaputa te form e whakatō mai e te Site Builder.
3. Whakamaoritanga i ngā field o te form, ngā rules o te validation, me ngā email notifications pēnei i te mea e tika ana.

## Form Plugins me Compatibility {#form-plugins-and-compatibility}

Ko te Site Builder e whai ake (detect) i te form plugin ahino i runga i tō site ā, ka whakamahi ai i te mea ahino ki te whakamaoritanga o te contact form. Ko te mea, he tino nui ko te prioritisation (prioritise) o ngā form plugin ahino i roto i te rārangi pēnei:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ko te mea, he tino whai whakaaro e te Site Builder ki te whakamahi i tēnei me te whakaputa i te form ahino mōna i roto i te rārangi pēnei.

## Email Notifications {#email-notifications}

Ko ngā contact forms e whakawātea mai e te Site Builder e whakatika ana (configured) kia tino whero email notifications ki te site administrator e te default. Ko koe e taea te whakarite i te email recipient address me te message notification:

1. Pāinga ki te admin interface o tō form plugin ahino.
2. Whakawatea i te form e whakaputa mai e te Site Builder.
3. Whakamaoritanga i ngā settings o te email notification.

Mō whakamāramatanga mō ngā whakataunga tino whai, pēhea koe e taea te whakatika i te documentation o tō form plugin ahino:

- [Pātai Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Mahi Whakawhanaungatanga (Example Use Cases) {#example-use-cases}

### Pātai Form Simple {#simple-contact-form}

> "Tohu form simple e whai ana ki te whānau, email, me te pūrongo."

### Tohu Form Multi-Step {#multi-step-form}

> "Tohu form e whai ana ki te whai whakamahinga, i roto i te tūhuratanga wāhi tūiti mō mōhio kāhui me te tūhuratanga wāhi tūiti mō te pūrongo me te onua whai tika."

### Tohu Form me Whakawhitiwhiti (Form with Conditional Logic) {#form-with-conditional-logic}

> "Tohu form e whakaatu i ngā tūhuratanga kaha based ki te whiriwhiri o te mea whakamahia i roto i dropdown."

### Tohu Form me Whakawhiti File Upload {#form-with-file-upload}

> "Tohu form e tino pai ana ki te whai whakaputa file (file) me te attachment."

:::note
He aha, he taea te whakamaoritanga o te tohu form i Superdav AI Agent v1.10.0 me te ora. Me whakamahia te Site Builder agent kia tika i te mahi tēnei.
:::
