---
title: Mawuwo kwa Site Builder Contact Forms
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Forms za Kufotera kwa Tovuti (Site Builder)

Superdav AI Agent v1.10.0 imezidiza uwezo wa kutengeneza forms za kufotera kupitia chat interface kwa kutumia Site Builder agent. Iziipanga kuti mupate forms za kufotera zenye utendaji wote kwenye ipanyiko lolote bila kuondoka kwenye chat.

## Ufafanuzi (Overview)

Uwezo wa form ya Site Builder (`create_contact_form`) unajua kiotomatiki plugin yako ya form iliyosakinika na inatengeneza form ya kufotera kwa kutumia uwezo wa asili wa hiyo plugin. Plugins za form zinazosaidika ni:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Msaidizi (assistant) utachagua kiplugin bora kilichopo kwenye tovuti yako na kutengeneza form ya kufotera inayofaa kwa hiyo plugin.

## Kutengeneza Form ya Kufotera

Ili kutengeneza form ya kufotera kwa kutumia Site Builder:

1. Fungua panel ya chat ya **Gratis AI Agent** kwenye WordPress admin.
2. Badilisha kwenda agent ya **Site Builder** kwa kukumbuka icon ya agent kwenye kichwa cha chat.
3. Eleza form ya kufotera unayotaka kutengeneza. Kwa mfano:

   > "Ongeza form ya kufotera kwenye ukurasa wa Contact na sehemu za jina, barua pepe, ujumbe, na namba ya simu."

   Au rahisi tu:

   > "Tengeneza form ya kufotera kwa ajili ya ukurasa wa Contact."

4. Site Builder itatengeneza form ya kufotera na kurudisha shortcode inayojali kuwekwa (ready to embed).

## Kutumia Shortcode Iliyotengenezwa

Baada ya Site Builder kutengeneza form ya kufotera, inarudisha shortcode (kama vile, `[contact-form-7 id="123"]`). Unaweza:

1. **Kuifunga kwenye ukurasa au post** — Nakili shortcode na iweke kwenye ukurasa au post lolote kwa kutumia block editor au classic editor.
2. **Kuitumia kupitia Site Builder** — Mwambie Site Builder kuongeza form hiyo kwenye ukurasa maalum kiotomatiki:

   > "Ongeza form ya kufotera kwenye ukurasa wa Contact."

3. **Genda ku yomwe** — Ngati muli ndi kukhulupirira PHP, muli ndi ulemu woshipera shortcode ku file la template la theme.

## Kufotokozera Contact Form

Poyesa Site Builder kuti ikukwaniritseni contact form, muli ndi ulemu woshipera kwambiri:

### Mwachidulembedwa (Via the Chat Interface)

Makhulupirira Site Builder kuti awupatsire form:

> "Update contact form kuti upatsire subject field ndikufotokozera message field kuti ikhale yomwe yofunika."

Site Builder idzupatsa form ndikadza shortcode yomwe imaperekedwa.

### Mwachidulembedwa (Via the Form Plugin's Admin Interface)

Muli ndi ulemu woshipera m'malo woperekedwa wa form plugin wanu:

1. Tiyeni ku **Contact Form 7** (kapena form plugin yomwe muli ndiwo) m'WordPress admin.
2. Kuti mupatsire form yomwe Site Builder imaperekera.
3. Upatsire mapulogalamu a form, zifukwa za kuyesa (validation rules), ndikufotokozera email monga momwe muli ndiwo.

## Form Plugins ndi Kukhulupirira (Compatibility)

Site Builder imapereka kwawo kuti ikudziwe form plugin yomwe imuli m'site wanu ndipo imaperekera kuti iye. Ngati pali form plugins pa nthawi yomwe zambiri, Site Builder idzakhulupirira m'malo ochepa:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ngati pali form plugins onse osalimbikira, Site Builder idzakumbutsa kuti muwone kuperekera mwamaka poyesa contact form.

## Email Notifications

Contact forms zomwe Site Builder imaperekera zimaperekedwa kuti zifotokozere email notifications kwa administrator wa site monga momwe muli ndiwo. Muli ndi ulemu woshipera m'malo woperekedwa wa email ndikufotokozera message ya notification:

1. Tiyeni ku admin interface ya form plugin yanu.
2. Kuti mupatsire form yomwe Site Builder imaperekera.
3. Upatsire mapulogalamu a email notifications.

Poyesa zambiri, muli ndi ulemu woshipera wa documentation ya form plugin yanu:

- [Kufuta za Barua za Barua](https://contactform7.com/docs/)
- [Kufuta Barua za WPForms](https://wpforms.com/docs/)
- [Kufuta Barua za Fluent Forms](https://fluentforms.com/docs/)
- [Kufuta Barua za Gravity Forms](https://docs.gravityforms.com/)

## Mifano ya Matumizi

### Fomu Rahisi ya Mawasiliano

> "Fanya fomu rahisi ya mawasiliano yenye sehemu za jina, barua pepe, na ujumbe."

### Fomu ya Hatua Nyingi (Multi-Step Form)

> "Fanya fomu ya mawasiliano yenye hatua ya kwanza kwa taarifa za mawasiliano na hatua ya pili kwa ujumbe na njia iliyopendeza ya kuwasiliana."

### Fomu yenye Mantiki ya Kufanya Vifaa (Conditional Logic)

> "Fanya fomu ya mawasiliano inayonyesha sehemu tofauti kulingana na uchaguzi wa mtumiaji kwenye dropdown."

### Fomu yenye Kuweka Faili (File Upload)

> "Fanya fomu ya mawasiliano inayoamuru watumiaji kuweka faili au kiambatisho."

:::note
Uundaji wa fomu za mawasiliano unaweza kufanywa katika Superdav AI Agent v1.10.0 na baadaye. Agent ya Site Builder lazima iwe active ili kutumia uwezo huu.
:::
