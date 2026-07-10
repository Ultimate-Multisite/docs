---
title: Forma Kontakt për Ndërtues Shtëpisë
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formularitë për Kontakt në Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 shton aftësinë të krijoni formularë kontaktje direkt nga interfejsi i bisedës duke përdorur agentin e Site Builder. Kjo ju lejon të shtoni formularë kontaktje plotësisht funksionalë në çdo faqe pa u larguar nga biseda.

## Përmbledhje {#overview}

Aftësia për krijimin e formularit të kontaktit në Site Builder (`create_contact_form`) automatikisht zbulon plugin-in që keni instaluar dhe krijon një formular kontaktje duke përdorur aftësitë natyrore të atij plugin. Pluginet e mbështetura janë:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistenti zgjedh automatikisht pluginin më të mirë të disponues në faquin tuaj dhe gjeneron një formular kontaktje i përshtatur për atë plugin.

## Krijimi i një Formularit të Kontaktit {#creating-a-contact-form}

Për të krijuar një formular kontaktje duke përdorur Site Builder:

1. Hapni panel bisedës **Gratis AI Agent** në adminin WordPress.
2. Shkoni te agenti **Site Builder** duke klikuar ikonen e agentit në kornizën e sipërme të bisedës.
3. Përshkruani formularin e kontaktit që dëshironi të krijoni. Për shembull:

   > "Shtoni një formular kontaktje në faqen Kontakt me fusha për emër, email, mesazh dhe numër telefon."

   Ose thjesht:

   > "Krijoni një formular kontaktje për faqen Kontakt."

4. Site Builder do të gjenerojë formularin e kontaktit dhe do të kthejë një shortcode (p.sh., `[contact-form-7 id="123"]`) gati për të vendosur.

## Përdorimi i Shortcode-it Gjeneruar {#using-the-generated-shortcode}

Pas kur Site Builder krijon formularin e kontaktit, ai kthen një shortcode (p.sh., `[contact-form-7 id="123"]`). Ju mund të:

1. **E vendosni në një faqe ose postim** — Kopjoni shortcode-in dhe ngjiteni atë në çdo faqe ose postim duke përdorur block editorin ose redaktuesin klasik.
2. **Të shtoni përmes Site Builder-it** — Kërkoni nga Site Builder të shtojë formularin në një faqe specifike automatikisht:

   > "Shtoni formularin e kontaktit në faqen Kontakt."

3. **Përdorni në një template** — Nëse jeni i sigurt me PHP, mund të shtoni shortcode-in në një skedar teme (theme template file).

## Personalizimi i Formës së Kontaktit {#customizing-the-contact-form}

Pas kur Site Builder krijon formën e kontaktit, ju mund ta personalizoni më tej:

### Përmes Interfejës së Chatit {#via-the-chat-interface}

Kërkoni nga Site Builder të modifikojë formën:

> "Përditësoni formën e kontaktit për të shtuar një fushë subjekt dhe bëni fushën e mesazhit të detyrueshme."

Site Builder do të përditësojë formën dhe do të kthejë shortcode-in e përditësuar.

### Përmes Interfejës Admin e Pluginit të Formës {#via-the-form-plugins-admin-interface}

Ju mund ta personalizoni direkt në cilësimet e pluginit tuaj të formës:

1. Shkoni te **Contact Form 7** (ose plugin-i i formës që keni instaluar) në adminin WordPress.
2. Gjeni formën e krijuar nga Site Builder.
3. Redaktoni fushat e formës, rregjet e validimit dhe njoftimet me email sipas nevojës.

## Pluginet e Formave dhe Kompatibiliteti {#form-plugins-and-compatibility}

Site Builder zbulon automatikisht cilin plugin i formës është instaluar në faqen tuaj dhe e përdor atë për të krijuar formën e kontaktit. Nëse janë instaluar disa pluginet e formave, Site Builder i jep prioritet kështu:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Nëse asnjë nga këto pluginet nuk është instaluar, Site Builder do të rekomandojë instalimin e një prej tyre para krijimit të formës së kontaktit.

## Njoftimet me Email {#email-notifications}

Forma e kontaktit e krijuar nga Site Builder janë konfiguruar për të dërguar njoftime me email te administrator i faqes në mënyrë paracaktuar. Ju mund ta personalizoni adresën e emailit të marrës dhe mesazhin e njoftimit:

1. Shkoni te interfeza admin e pluginit tuaj të formës.
2. Gjeni formën e krijuar nga Site Builder.
3. Redaktoni cilësimet e njoftimit me email.

Për udhizaime më të detajuara, referohuni dokumentacionit të pluginit tuaj të formës:

- [Notifikimet me Email për Contact Form 7](https://contactform7.com/docs/)
- [Notifikimet me Email për WPForms](https://wpforms.com/docs/)
- [Notifikimet me Email për Fluent Forms](https://fluentforms.com/docs/)
- [Notifikimet me Email për Gravity Forms](https://docs.gravityforms.com/)

## Shembuj Përdorimi {#example-use-cases}

### Formi i Thjeshtë i Kontaktit {#simple-contact-form}

> "Krijoni një formë kontakt të thjeshtë me fusha për emër, email dhe mesazh."

### Formë me Hapa {#multi-step-form}

> "Krijoni një formë kontakt me një hap të parë për informacionin e kontaktit dhe një hap të dytë për mesazhin dhe metodën e preferuar të kontaktimit."

### Formë me Logjik Kondicionale {#form-with-conditional-logic}

> "Krijoni një formë kontakt që tregon fusha të ndryshme bazuar në zgjedhjen e përdoruesit në një dropdown."

### Formë me Ngarkim File {#form-with-file-upload}

> "Krijoni një formë kontakt që lejon përdoruesve të ngarkojnë një skedar ose aneks."

:::note
Krijimi i formularit kontakt është i disponues në Superdav AI Agent v1.10.0 dhe më vonë. Agjenti i ndërtimit të faqes (Site Builder agent) duhet të jetë aktiv për të përdorur këtë aftësi.
:::
