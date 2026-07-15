---
title: Formau cysylltiad y gweithredwr lleoliad
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Ffurfyn Formau Cysylltiad Ar Gweithredol

Mae Superdav AI Agent v1.10.0 yn rhoi'r gallu gwneud formau cysylltiad yn uniongyrchol o'r cyfnod chat gan y Site Builder agent. Mae hyn yn rhoi'r gallu i chi drosgl y formau cysylltiad llawn ffurfiol ar unrhyw pein heb gadael y chat.

## Oglwyddiad {#overview}

Mae gallu gwneud formau cysylltiad gan y Site Builder (`create_contact_form`) yn gweld'r plugin ffurfiau sydd wedi'i chwarae a creu form cysylltiad gan ddefnyddio'r galluau naturiol o'r plugin hwn. Mae pluginau ffurfiadau sydd wedi'u chwanegu yn:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Mae'r asiantwr yn dewis y plugin ffurfiau mwyaf cyfathoghol ar eich site a gennych yn gyfrifol form cysylltiad wedi'i gynhyrchu i gyd-fynd â'r plugin hwn.

## Creu Form Cysylltiad {#creating-a-contact-form}

I creu form cysylltiad gan y Site Builder:

1. Agor y panel chat **Gratis AI Agent** yn admin WordPress.
2. Trosgl i'r agent **Site Builder** gan clisi'r icon y agent yn y cyfeiriad chat.
3. Disgrifwch y form cysylltiad syedig eich bod eisiau creu. Ar unigol, felly:

   > "Ymddangos form cysylltiad ar y pein Contact gyda ffurfau i enw, e-bost, seilied, a rhif ffôn."

    neu symudwch yn unig:

   > "Creu form cysylltiad ar gyfer y pein Contact."

4. Bydd y Site Builder yn gynhyrchu'r form cysylltiad ac yn dod â shortcode (sy'n ddefnyddio, `[contact-form-7 id="123"]`) i'w gael ei chwarae.

## Defnyddio'r Shortcode Gyfathoghliwyd {#using-the-generated-shortcode}

Ar ôl y Site Builder creu'r form cysylltiad, mae'n dod â shortcode (felun, `[contact-form-7 id="123"]`). Gallwch:

1. **Gysylltu'n dros pein neu post** — Copi'r shortcode a gosgi'n dros unrhyw pein neu post gan ddefnyddio'r block editor neu'r redyt clasu.
2. **Ymddangos yma drwy'r Site Builder** — Aiwch y Site Builder i drosgl y form i pein penodol yn awyr:

   > "Ymddangos y form cysylltiad ar y pein Contact."

3. **Defnyddiwch yn template** — Os ydych chi sicr gyda PHP, gallwch yshortcode ychwanegu i fylfach template o'r theme.

## Customu'r Ffurf Gysylltiadwy (Contact Form) {#customizing-the-contact-form}

Ar ôl i'r Site Builder creu'r ffurf gysylltiadwy, gallwch ei gwahddusio'n fwy:

### Trwy'r Cyfweli Chat (Chat Interface) {#via-the-chat-interface}

Gofyn i'r Site Builder roi newidi ar y ffurf:

> "Mynedi'r ffurf gysylltiadwy i drosglwyddo field cyflwyniad a gwneud y field mesgar yn hanfodol."

Bydd y Site Builder yn newid y ffurf ac yn dod â'r shortcode wedi'i newid yn ôl.

### Trwy'r Cyfweli Admin o'r Plugin Ffurf (Form Plugin's Admin Interface) {#via-the-form-plugins-admin-interface}

Gallwch hefyd gwahddusio'r ffurf yn uniongyrchol mewn setegau y plugin ffurf eich site:

1. Ymddangos i **Contact Form 7** (neu'r plugin ffurf sydd wedi'i chwarae) yn admin WordPress.
2. Gwelfwch y ffurf a creuwyd gan y Site Builder.
3. Redigwch y fieldau y ffurf, rheolau cyflwyniad (validation rules), a gairiadau e-bost.

## Pluginau Ffurf a Cyflawniad (Compatibility) {#form-plugins-and-compatibility}

Mae'r Site Builder yn gweld yn awtomatig beth yw plugin ffurf sydd wedi'i chwarae ar eich site ac mae'n defnyddio'r hyn i creu'r ffurf gysylltiadwy. Os oes ychwanegau (multiple form plugins) wedi'u chwarae, mae'r Site Builder yn rhoi prioriad iddo yn y cyflwyniad hwn:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Os nid oes unrhyw un o'r pluginau hyn wedi'u chwarae, bydd y Site Builder yn cynrychioli i'w chwarae cyn creu'r ffurf gysylltiadwy.

## Gairiadau E-bost (Email Notifications) {#email-notifications}

Mae ffurfau gysylltiadwy a creuwyd gan y Site Builder wedi'i setegio i anfon gairiadau e-bost i'r admin y site yn ddefnyddiol yn ddefnyddiol. Gallwch gwahddusio'r adran e-bost gyfrifol ac y message gairiadau:

1. Ymddangos i'r cyfweli admin o'r plugin ffurf eich site.
2. Gwelfwch y ffurf a creuwyd gan y Site Builder.
3. Redigwch setegau gairiadau e-bost.

Ar gyfer cyfarwyddiadau cyffredinol, gweld eich documentasiad y plugin ffurf eich site:

- [Notifys E-bostrefi Contact Form 7](https://contactform7.com/docs/)
- [Notifys E-bostrefi WPForms](https://wpforms.com/docs/)
- [Notifys E-bostrefi Fluent Forms](https://fluentforms.com/docs/)
- [Notifys E-bostrefi Gravity Forms](https://docs.gravityforms.com/)

## Eglampauadau Prif {#example-use-cases}

### Fom Contact Siffraniadwy {#simple-contact-form}

> "Creu fom contact sifraniadwy gyda fyliau enw, e-bostrefi a message."

### Fom Llawer-Steddiadwy {#multi-step-form}

> "Creu fom contact gyda stadau cyntaf ar gyfer wybodaeth contact ac stad twyddol ar gyfer y message a ffordd contact sydd yn cael ei ddefnyddio."

### Fom gyda Logica Cynllunol {#form-with-conditional-logic}

> "Creu fom contact sy'n dangos fyliau gwahanol yn seiliedig ar y wybodaeth a'r benodol ydyn nhw wedi'i dewis mewn dropdown."

### Fom gyda Chysylltu Fyliau {#form-with-file-upload}

> "Creu fom contact sy'n sylw i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'r benodol i'
