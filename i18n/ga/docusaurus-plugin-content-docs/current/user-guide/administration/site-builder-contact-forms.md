---
title: Formais contact na Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Fóramháil Formanna Contact (Contact Forms)

Is é Superdav AI Agent v1.10.0 le cur áimeacht a chur i bhfeicim a dhéanamh ar fómarmanna contact go díreach ó chaint a bheith ag úsáid an Site Builder agent. Is féidir leis seo a chur i bhfeicim fómarmanna contact go léir le chéile ar aon lúsach without imnídhe ó chaint.

## Oibríochta (Overview) {#overview}

Tá cur áimeacht formanna contact na Site Builder (`create_contact_form`) ag dacadh go léir an plugin fómarmanna atá agat agus ag teacht ar fómarmán contact a chur i bhfeicim ag úsáid cur áimeacht sin. Tá plugin fómarmanna a chothromú leat:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Bíonn an cur áimeacht ag iarraidh an plugin fómarmanna is fearr atá ar do site chun fómarmán contact a chur i bhfeicim a shonraithe ar sin.

## Creacht Fómarmán Contact (Creating a Contact Form) {#creating-a-contact-form}

Leat a creacht fómarmán contact ag úsáid an Site Builder:

1. Lán an panel chaint **Gratis AI Agent** i WordPress admin.
2. Déan go dtí cur áimeacht **Site Builder** ar bheith a chur ar an icon agent i bhfathracha chaint.
3. Déan díriú ar fómarmán contact atá agat a creacht. Mar shampla:

   > "Add a contact form to the Contact page with fields for name, email, message, and phone number." (Add fómarmán contact ar an lúsach Contact le fáilíon chun ainm, email, meán agus núm phóna).

   Mar shampla eile:

   > "Create a contact form for the Contact page." (Creacht fómarmán contact ar an lúsach Contact).

4. Beidh an Site Builder ag teacht ar fómarmán contact agus beidh sé ready le shortcode chun é a chomhcheangail.

## Usáid Shortcode a Chreachtaithe (Using the Generated Shortcode) {#using-the-generated-shortcode}

Tar éis a chur i bhfeicim an Site Builder fómarmán contact, beidh sé ag teacht ar shortcode (mar shampla, `[contact-form-7 id="123"]`). Is féidir leat:

1. **A chomhcheangail é i lúsach nó post** — Clionaigh an shortcode agus cúpla fáil go dtí aon lúsach nó post ag úsáid an block editor nó an classic editor.
2. **A chur ar fáil é trí Site Builder** — Cuir cur áimeacht a chur ar fáil fómarmán sin ar lúsach a bhfuil sé ag teacht ar fáil:

   > "Add the contact form to the Contact page." (Add an fómarmán contact ar an lúsach Contact).

3. **Níl an t-aistriú i template** — Má tá tú ag fáilte le PHP, is féidir leat cur an shortcode seo i file templete deánach (theme template).

## Déanadh ar Fóram Contact {#customizing-the-contact-form}

Tar éis lá a chur an Site Builder an fóram contact, is féidir leat é sin a chruinneadh níos mó:

### Trá Chat Interface {#via-the-chat-interface}

Céad míle fáilte ar an Site Builder chun an fóram a athrú:

> "Athraigh an fóram contact chun feadreachas (subject field) a chur i bhfeidhm agus an meán (message field) a bheith ag tairbheall."

Beidh an Site Builder ag athrú an fóram agus beidh sé ag teacht ar an shortcode athrú.

### Trá Admin Interface an Plugin Fóram {#via-the-form-plugins-admin-interface}

Is féidir leat hefyd an fóram a chruinneadh go díreach i gcur na stóirítear (settings) an plugin fóram atá agat:

1. Déan cur isteach **Contact Form 7** (nó an plugin fóram atá agat) i admin WordPress.
2. Déan cur isteach an fóram a chur in iúl ag an Site Builder.
3. Athrúchais an fáilíocht, riolacha tairbhealla (validation rules), agus na iontaí email mar chéile.

## Plugins Fóram agus Comhionrú {#form-plugins-and-compatibility}

Bíonn an Site Builder ag déanamh díriú ar an plugin fóram atá agat ar an site agus a úsáideann é sin chun an fóram contact a chur in iúl. Má tá duine mór de plugin fóram, beidh an Site Builder ag cur iarracht ar na sonraí seo:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Má bhí aon cheann de na pluginne seo ag tairbheall, beidh an Site Builder ag cur iarracht chun é sin a chur in iúl prima chun an fóram contact a chur in iúl.

## Iontaí Email {#email-notifications}

Bíonn fóram contact a chur in iúl a chur ar an site leat ag iontaí email go dtí an chuid de-fháil. Is féidir leat an iontaí email a athrú agus an meán iontaíochta a athrú:

1. Déan cur isteach an admin interface an plugin fóram atá agat.
2. Déan cur isteach an fóram a chur in iúl ag an Site Builder.
3. Athrúchais na iontaí email.

For cur isteach iarrachtaí bunaithe, déan cur isteach ar an documentation an plugin fóram atá agat:

- [Notification Email Notifications for Contact Form 7](https://contactform7.com/docs/)
- [Notification Email Notifications for WPForms](https://wpforms.com/docs/)
- [Notification Email Notifications for Fluent Forms](https://fluentforms.com/docs/)
- [Notification Email Notifications for Gravity Forms](https://docs.gravityforms.com/)

## Eagraísa Uimhreacha (Example Use Cases) {#example-use-cases}

### Form Contact Simple {#simple-contact-form}

> "Creoi form contact simple le feidheana nam, email agus meán."

### Form Multi-Step {#multi-step-form}

> "Creoi form contact le chuid chéim ar an chéad chun féachanaimn contact a bheith agat agus chéim de dhá chun an meán agus miontún contact a bheith agat."

### Form le Logic Conditional {#form-with-conditional-logic}

> "Creoi form contact a thaispeáin feidheanaimn ag curtha ar fáil ar athrú mar a bhfáthfaidh an chuid is déanach i gcurtha inbhileán."

### Form le Clios File Upload {#form-with-file-upload}

> "Creoi form contact a ghlúite do chuid atá ag curtha file nó teachtaire."

:::note
Tá fáil ar na form contact ag curtha ar fáil i Superdav AI Agent v1.10.0 agus níos fear gré. Is féidir an agent Site Builder a bheith agat chun an obair seo a úsáid.
:::
