---
title: Fomba Fifandraisana ho an'ny Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Fomba Fanaovana Form Contact ao an-tserasera (Site Builder)

Ny Superdav AI Agent v1.10.0 dia manampy ny fahaizana mamorona form contact mivantana avy amin'ny chat interface iantsoana ny Site Builder agent. Izany dia ahafahanao manampy form contact tena miasa amin'ny pejy rehetra tsy mila miala amin'ny chat.

## Famarahabana (Overview)

Ny fahaizana mamorona form contact an'ny Site Builder (`create_contact_form`) dia mahita ho azy ny plugin form izay apetrakao ary mamorona form contact mampiasa ny fahaiza-manao voajanahary an'io plugin io. Ireto misy ireo plugin form azo antoky:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Ny ason'ny assistant dia safidy ho plugin form tsara indrindra eo amin'ny tranonkalanao ary mamorona form contact mifanaraka amin'io plugin io.

## Famoronana Form Contact

Mba hamoronana form contact amin'ny alalan'ny Site Builder:

1. Afaka ny **Gratis AI Agent** chat panel ao amin'ny WordPress admin.
2. Mifidiana ny agent **Site Builder** amin'ny alalan ny tsindrim-peo eo amin'ny header an'ny chat mba hisafidianana azy.
3. Azo atao ny mamaritra ny form contact tianao hatao. Ohatra:

   > "Ampidiro form contact ao amin'ny pejy Contact misy champs ho an'ny anarana, email, hafatra ary laharana."

   Na tsotra fotsiny dia:

   > "Mamorona form contact ho an'ny pejy Contact."

4. Ny Site Builder dia hamorona ny form contact ary hamerina shortcode (ohatra, `[contact-form-7 id="123"]`) vonona hampidirina.

## Fampiasana ny Shortcode Namboarina

Rehefa namorona ny form contact ny Site Builder, dia hamerina shortcode iray izy (ohatra, `[contact-form-7 id="123"]`). Afaka:

1. **Ampidirina ao amin'ny pejy na post** — Apetraho an-tsipika ilay shortcode ary apetaho ao amin'ny pejy na post rehetra ianao amin'ny alalan ny block editor na ny classic editor.
2. **Ampidirina amin'ny alalan ny Site Builder** — Mangataka ny Site Builder mba hampidirana ilay form ao anaty pejy manokana ho azy:

   > "Ampidiro ny form contact ao amin'ny pejy Contact."

3. **Ampiasao azy ao template** — Raha mahay amin'ny PHP ianao, afaka manampy ny shortcode eo amin'ny rakitra template an'ny theme ianao.

## Fanovana ny Contact Form (Fomba Fandefasana Hafatra)

Aorian'ny famoronana ny contact form avy amin'ny Site Builder dia afaka manova azy bebe kokoa ianao:

### Amin'ny alalan'ny Chat Interface

Manao fangatahana ny Site Builder mba hanovana ny form:

> "Ampidiro fanazavana (subject field) ao amin'ny contact form ary ataovy voatery ny fampahafantarana hafatra."

Ny Site Builder dia hanova ny form ary hamerina ny shortcode vaovao.

### Amin'ny alalan'ny Admin Interface an'ny Form Plugin

Afaka manova mivantana ny form ao amin'ny fandaharana (settings) an'ny form plugin anao ianao:

1. Mandehana any amin'ny **Contact Form 7** (na ny form plugin nampiasainao) ao amin'ny WordPress admin.
2. Mitadiava ny form noforonina tamin'ny alalan'ny Site Builder.
3. Manova ireo lafiny an'ny form, ny fitsipika fanamarinana (validation rules), ary ny fampahafantarana an-mail.

## Form Plugins sy Fahaizana Mampiasa azy (Compatibility)

Ny Site Builder dia mahafantatra ho azy hoe inona no form plugin napetraka eo amin'ny tranonkala anao ary mampiasa izany mba hamoronana ny contact form. Raha misy form plugin maromaro napetraka, dia alefa avy amin'ity lamaso ity ny Site Builder:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Raha tsy misy ao amin'ireo plugin ireo dia hanoro hevitra ny Site Builder mba hampidirana iray alohan'ny famoronana ny contact form.

## Fampahafantarana An-mail (Email Notifications)

Ny contact forms noforonina tamin'ny alalan'ny Site Builder dia voalamina mialoha mba handefasana fampahafantarana an-mail ho an'ny administrator an'ny tranonkala. Afaka manova ny adiresy an-mail sy ny hafatra fampahafantarana ianao:

1. Mandehana any amin'ny admin interface an'ny form plugin anao.
2. Mitadiava ny form noforonina tamin'ny alalan'ny Site Builder.
3. Manova ny fandrindrana (settings) an'ny fampahafantarana an-mail.

Ho fanazavana lalindalina, jereo ny dokumentation an'ny form plugin anao:

- [Fampitana Email Notifications an Contact Form 7](https://contactform7.com/docs/)
- [Fampitana Email Notifications an WPForms](https://wpforms.com/docs/)
- [Fampitana Email Notifications an Fluent Forms](https://fluentforms.com/docs/)
- [Fampitana Email Notifications an Gravity Forms](https://docs.gravityforms.com/)

## Ohatra Fandram-pahalalanao (Example Use Cases)

### Fampitana Contact Form Tsotra (Simple Contact Form)

> "Atao fampitana contact form tsotra misy champs ho anarana, email ary hafatra."

### Fampitana Form Amin'ny Dingana Maromaro (Multi-Step Form)

> "Atao contact form izay manana dingana voalohany ho an'ny fampahalalana momba ny fifandraisana ary dingana faharoa ho an'ny hafatra sy ny fomba fifandraisana tianao."

### Fampitana Form Amin'ny Fandikana Miankina (Form with Conditional Logic)

> "Atao contact form izay mampiseho champs hafa arakaraka safidin'ny mpampiasa ao amin'ny dropdown."

### Fampitana Form Amin'ny Fametrahana Raikitra (Form with File Upload)

> "Atao contact form ahafahan'ny mpampiasa mametraka raikitra na attachment."

:::note
Miankina amin'ny Superdav AI Agent v1.10.0 sy aorian'izany ny famoronana contact form. Mila mavitrika ny Site Builder agent mba hampiasana ity fahaizana ity.
:::
