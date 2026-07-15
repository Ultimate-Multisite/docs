---
title: Fomu za Mawasiliano za Jengo la Tovuti
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Contact Forms za Site Builder

Superdav AI Agent v1.10.0 imeongeza uwezo wa kuunda fomu za mawasiliano moja kwa moja kutoka kwenye chat interface kwa kutumia Site Builder agent. Hii inakuwezesha kuongeza fomu za mawasiliano zenye utendaji kamili kwenye ukurasa wowote bila kuondoka kwenye chat.

## Muhtasari {#overview}

Uwezo wa fomu za mawasiliano za Site Builder (`create_contact_form`) unabaini kiotomatiki plugin yako ya fomu iliyoanzishwa na kuunda fomu za mawasiliano kwa kutumia uwezo wa asili wa plugin hiyo. Plugin za fomu zinazodukungishwa ni pamoja na:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Msaidizi anachagua kiotomatiki plugin bora ya fomu iliyopo kwenye tovuti yako na kuunda fomu ya mawasiliano iliyoundwa mahsusi kwa ajili ya plugin hiyo.

## Kuunda Fomu ya Mawasiliano {#creating-a-contact-form}

Ili uunde fomu ya mawasiliano kwa kutumia Site Builder:

1. Fungua panel ya chat ya **Gratis AI Agent** kwenye WordPress admin.
2. Badilisha kwa **Site Builder** agent kwa kubonyeza icon ya agent kwenye kichwa cha chat.
3. Eleza fomu ya mawasiliano unayotaka kuunda. Kwa mfano:

   > "Ongeza fomu ya mawasiliano kwenye ukurasa wa Contact yenye sehemu za jina, barua pepe, ujumbe, na namba ya simu."

   Au kwa urahisi:

   > "Tengeneza fomu ya mawasiliano kwa ajili ya ukurasa wa Contact."

4. Site Builder atatengeneza fomu ya mawasiliano na kurudisha shortcode tayari ya kuingizwa.

## Kutumia Shortcode Iliyotengenezwa {#using-the-generated-shortcode}

Baada ya Site Builder kuunda fomu ya mawasiliano, inarudisha shortcode (kwa mfano, `[contact-form-7 id="123"]`). Unaweza:

1. **Kuifunganisha kwenye ukurasa au post** — Nakili shortcode na ubandike kwenye ukurasa au post yoyote kwa kutumia block editor au classic editor.
2. **Kuiongeza kupitia Site Builder** — Muombe Site Builder aongeze fomu kwenye ukurasa maalum kiotomatiki:

   > "Ongeza fomu ya mawasiliano kwenye ukurasa wa Contact."

3. **Kuitumia kwenye template** — Ikiwa unafahamu PHP, unaweza kuongeza shortcode kwenye faili ya template ya theme.

## Kubadilisha Fomu ya Mawasiliano {#customizing-the-contact-form}

Baada ya Site Builder kuunda fomu ya mawasiliano, unaweza kuibadilisha zaidi:

### Kupitia Chat Interface {#via-the-chat-interface}

Muombe Site Builder kubadilisha fomu:

> "Sasisha fomu ya mawasiliano ili kuongeza sehemu ya mada (subject) na kufanya sehemu ya ujumbe iwe lazima kujazwa."

Site Builder atasasisha fomu na kurudisha shortcode iliyosasishwa.

### Kupitia Admin Interface ya Plugin ya Fomu {#via-the-form-plugins-admin-interface}

Unaweza pia kubadilisha fomu moja kwa moja kwenye mipangilio ya plugin yako ya fomu:

1. Nenda kwenye **Contact Form 7** (au plugin yako ya fomu iliyoanzishwa) kwenye WordPress admin.
2. Tafuta fomu iliyotengenezwa na Site Builder.
3. Hariri sehemu za fomu, sheria za uhalali (validation rules), na arifa za barua pepe kama inavyohitajika.

## Plugin za Fomu na Upatanisho {#form-plugins-and-compatibility}

Site Builder inabaini kiotomatiki ni plugin gani ya fomu iliyoanzishwa kwenye tovuti yako na inatumia hiyo kuunda fomu ya mawasiliano. Ikiwa kuna plugin nyingi za fomu zimeanzishwa, Site Builder zinazotanguliza kwa mpangilio huu:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ikiwa hakuna ya plugin hizi zimeanzishwa, Site Builder itapendekeza kuweka moja kabla ya kuunda fomu ya mawasiliano.

## Arifa za Barua Pepe {#email-notifications}

Fomu za mawasiliano zilizoundwa na Site Builder zimepangishwa kutuma arifa za barua pepe kwa msimamizi wa tovuti kwa msingi. Unaweza kubadilisha anwani ya barua pepe inayopokea na ujumbe wa arifa:

1. Nenda kwenye admin interface ya plugin yako ya fomu.
2. Tafuta fomu iliyotengenezwa na Site Builder.
3. Hariri mipangilio ya arifa za barua pepe.

Kwa maelekezo ya kina, rejelea waraka wa plugin yako ya fomu:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Mifano ya Matumizi {#example-use-cases}

### Fomu Rahisi ya Mawasiliano {#simple-contact-form}

> "Tengeneza fomu rahisi ya mawasiliano yenye sehemu za jina, barua pepe, na ujumbe."

### Fomu ya Hatua Nyingi (Multi-Step Form) {#multi-step-form}

> "Tengeneza fomu ya mawasiliano yenye hatua ya kwanza kwa taarifa za mawasiliano na hatua ya pili kwa ujumbe na njia anayopendelea ya mawasiliano."

### Fomu yenye Mantiki ya Masharti (Conditional Logic) {#form-with-conditional-logic}

> "Tengeneza fomu ya mawasiliano ambayo inaonyesha sehemu tofauti kulingana na uchaguzi wa mtumiaji kwenye orodha (dropdown)."

### Fomu yenye Kupakia Faili {#form-with-file-upload}

> "Tengeneza fomu ya mawasiliano ambayo inaruhusu watumiaji kupakia faili au kiambatisho."

:::note
Kuunda fomu ya mawasiliano kunaapatikana katika Superdav AI Agent v1.10.0 na zaidi. Site Builder agent lazima iwe hai kutumia uwezo huu.
:::
