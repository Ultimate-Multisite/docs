---
title: Urugero rw'Ubwumvikane bw'Uburyo bwo Gutegura Ubutaka
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Amakuru ya Formu za Kurwiza (Contact Forms) {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 yagira uburyo bwo gukora formu za kurwiza (contact forms) mu gihe cy'amaseke n'ubwujiza bw'umugambi w'ubwoko (Site Builder agent) mu chat interface. Ibi byagukora ubushobozi bwo gukoresha formu zikoreshwa neza ku rugero rwa page yose nta guhagarira mu chat.

## Uburyo Bwo Gukoresha (Overview) {#overview}

Ubushobozi bwo Site Builder ku formu za kurwiza (`create_contact_form`) bishobora gushobora kumenya plugin ya formu w'ubwoko ugiye mu site cyane kandi bikora formu ya kurwiza uburyo bw'umugambi w'ubwoko (plugin) yayo. Plugins zikoreshwa zikoreshwa ni:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Umuvugizi (assistant) uzakora uburyo bwo gukoresha plugin ya formu nziza cyane ku site yawe kandi uzakora formu ya kurwiza itandukanye na uko plugin yayo ikora.

## Gukora Formu ya Kurwiza {#creating-a-contact-form}

Kugira ngo ukore formu ya kurwiza uburyo bwo Site Builder:

1. Funga panel ya chat ya **Gratis AI Agent** mu WordPress admin.
2. Gukoresha umugambi w'ubwoko (Site Builder agent) uburyo bwo gukora, ubyumva ku icon y'agent muri header ya chat.
3. Murinda ibyo ushaka gukora formu ya kurwiza. Urugero:

   > "Add a contact form to the Contact page with fields for name, email, message, and phone number." (Koresha formu ya kurwiza ku page ya Contact n'ubwoko bwo gusobanura izina, email, uburyo, no numero ya telefone.)

   Cyangwa gukora gusa:

   > "Create a contact form for the Contact page." (Gukora formu ya kurwiza kuri page ya Contact.)

4. Site Builder uzakora formu ya kurwiza kandi uzagufasha shortcode y'ubwoko bwo gusobanura (shortcode) w'uko uza gushyira mu page.

## Gukoresha Shortcode Y'Ubujiza Bw'Ubwoko (Using the Generated Shortcode) {#using-the-generated-shortcode}

Nyuma yo gukora formu ya kurwiza, Site Builder uzagufasha shortcode y'ubwoko bwo gusobanura (shortcode) (urugero, `[contact-form-7 id="123"]`). Uza kuba ufite uburyo bwo:

1. **Gushyira mu page cyangwa post** — Gukoresha shortcode y'ubwoko bwo gusobanura (shortcode) kandi gushyira mu page cyangwa post yose uburyo bwo gukoresha block editor cyangwa classic editor.
2. **Gufasha ku bw'ubujiza bw'ubwoko** — Mugisha Site Builder kugira ngo yagufashe gushyira formu kuri page itandukanye mu buryo bukwirekera:

   > "Add the contact form to the Contact page." (Yagufashe gushyira formu ya kurwiza ku page ya Contact.)

3. **Gukoresha mu template** — Niba wumweze gukora PHP, uzaweza gukoresha shortcode muri file ya template y'umwezi (theme).

## Gukoresha umuganda w'Urugero (Contact Form) {#customizing-the-contact-form}

Nyuma yukoza Site Builder umuganda w'Urugero, uzafite uburyo bwo gukoresha mu buryo bw'ibindi:

### Bishingiye ku Chat Interface {#via-the-chat-interface}

Ndinga Site Builder ko yagire uburyo bwo gukora umuganda:

> "Gukoresha umuganda w'Urugero kugira ngo utera field ya ibyo ushaka (subject field) kandi ugire message field ikwiriye."

Site Builder uzakora umuganda kandi uzagukira shortcode y'umuganda ugiye.

### Bishingiye ku Admin Interface ya Form Plugin {#via-the-form-plugins-admin-interface}

Uzafite uburyo bwo gukoresha mu buryo bw'ibindi muri settings za form plugin yawe:

1. Gukora ku **Contact Form 7** (cyangwa form plugin y'umwezi wakoze) muri WordPress admin.
2. Gutera umuganda w'Urugero ugiye.
3. Gukoresha ibyo ushaka gukora umuganda, amakuru yo gukora (validation rules), kandi amakuru y'email cyangwa notification nk'uko ubikwiriye.

## Form Plugins n'Ubwumvikane (Compatibility) {#form-plugins-and-compatibility}

Site Builder ugiye gushobora kumenya form plugin y'umwezi wakoze muri site yawe kandi ugiye gukoresha ibyo kugira ngo umuganda w'Urugero utoretse. Niba hari form plugins nyinshi, Site Builder uzagira ubwumvikane mu buryo bwo gutera:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Niba nta hano zose za form plugins zishobora kugaragara, Site Builder uzakoresha gukorera gukoresha mbere y'umuganda w'Urugero kugira ngo utoretse.

## Amakuru ya Email (Email Notifications) {#email-notifications}

Umuganda w'Urugero ugiye gukora umakuru yo email ku admin ya site byo mu gihe cy'ibindi, mu gihe cy'ibindi. Uzafite uburyo bwo gukoresha email y'umukoresha kandi amakuru y'email nk'uko ubikwiriye:

1. Gukora muri admin interface ya form plugin yawe.
2. Gutera umuganda w'Urugero ugiye.
3. Gukoresha ibyo ushaka gukora amakuru yo email (email notification settings).

Kuri gukoresha inama zikomeye, ugukoresha documentation ya form plugin y'umwezi wakoze:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Uburyo mu Ikirimo y'Email (Example Use Cases) {#example-use-cases}

### Ikirimo y'Urugero rw'Ikirimo cy'Ubukoranyi (Simple Contact Form) {#simple-contact-form}

> "Gukora ukoranyi w'ikirimo cy'ubukoranyi ufite ubutumwa, email, n'ibyo ushaka kuvuga."

### Ikirimo Cy'Urugero rw'Icyemezo (Multi-Step Form) {#multi-step-form}

> "Gukora ukoranyi w'ikirimo ufite igice cy'ibanze cy'ubwujji bwo gukoresha, kandi uburyo buhuye mu gihe cy'ibindi."

### Ikirimo Ufite Uburyo Bwo Gukoresha (Form with Conditional Logic) {#form-with-conditional-logic}

> "Gukora ukoranyi w'ikirimo ufite ibintu bifite uburyo bwo gushobora guhuza, aho umuntu yashobora gukoresha igice cy'ibanze."

### Ikirimo Ufite Gukoresha Icyerekezo (Form with File Upload) {#form-with-file-upload}

> "Gukora ukoranyi w'ikirimo ufite uburyo bwo gusubiza cyangwa guhagarika ibintu bifite ubwoko bw'inyandiko."

:::note
Gukora ukoranyi w'ikirimo cy'ubukoranyi kigaragazwa mu Superdav AI Agent v1.10.0 na uburyo bwo gukoresha bwa Site Builder. Iyo uburyo bwo gukoresha bwa Site Builder bishobora kuba ari cyiza kugira ngo utere ukoreshe ubu buryo.
:::
