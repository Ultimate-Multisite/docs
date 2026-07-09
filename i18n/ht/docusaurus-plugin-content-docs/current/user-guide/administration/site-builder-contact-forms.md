---
title: Fòm Kontak Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Fòms Kontak Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 ajoute la kapasite de kreye fòm kontak dirèkt nan entèfas chat la itilize agent Site Builder. Sa pèmèt ou ajoute fòm kontak ki fonksyone byen sou nenpòt paj san ou pa kite chat la.

## Aperçu {#overview}

Kapasite fòm kontak Site Builder (`create_contact_form`) otomatikman detekte plugin fòm ou genyen epi kreye yon fòm kontak itilize kapasite natif plugin la. Plugin fòm ki sipòte yo gen ladan:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistan an otomatikman chwazi pi bon plugin fòm ki disponib sou sit ou a epi li jenere yon fòm kontak ki adapte pou sa plugin la.

## Kreye Yon Fòm Kontak {#creating-a-contact-form}

Pou kreye yon fòm kontak itilize Site Builder:

1. Louvri panèl chat **Gratis AI Agent** nan admin WordPress la.
2. Chanje sou agent **Site Builder** lè ou klike sou ikon agent nan tèt chat la.
3. Dekri fòm kontak ou vle kreye a. Pa egzanp:

   > "Ajoute yon fòm kontak sou paj Kontak ak chot pou non, imèl, mesaj, e nimewo telefòn."

   Oswa senpman:

   > "Kreye yon fòm kontak pou paj Kontak."

4. Site Builder la pral jenere fòm kontak a epi li tounen yon shortcode ki pare pou mete l anba (embed).

## Itilize Shortcode Jenere a {#using-the-generated-shortcode}

ApSite Builder kreye fòm kontak a, li tounen yon shortcode (pa egzanp, `[contact-form-7 id="123"]`). Ou ka:

1. **Mete l sou yon paj oswa post** — Kopye shortcode a epi kole l nan nenpòt paj oswa post ki itilize block editor la oswa klasik editor la.
2. **Ajoute li atravè Site Builder la** — Mande Site Builder la ajoute fòm nan yon paj espesifik otomatikman:

   > "Ajoute fòm kontak a sou paj Kontak."

3. **Sè li itilize nan yon template** — Si ou konfòtab ak PHP, ou ka ajoute shortcode a nan yon fichye template thèm ou an.

## Kòmanize Fòm Kontak la {#customizing-the-contact-form}

Malgre Site Builder la kreye fòm kontak a, ou ka kòmanize l pi l:

### Fò Mid Chat Interface la {#via-the-chat-interface}

Mandate Site Builder la modifye fòm la:

> "Met kontak fòm nan pou ajoute yon chat sujet (subject field) epi fè chat mesaj la obligatwa."

Site Builder la ap mete ajou sou fòm lan epi li pral retounen ak shortcode ki te mete ajou a.

### Fò Mid Admin Interface plaj Plugin Fòm la {#via-the-form-plugins-admin-interface}

Ou ka kòmanize fòm nan dirèkteman nan tout konfigirasyon plugin fòm ou an:

1. Ale nan **Contact Form 7** (oswa plugin fòm ou ki enstale) nan admin WordPress la.
2. Jwenn fòm ki te kreye pa Site Builder la.
3. Edite chak chat fòm, règ validasyon, ak notifikasyon imèl yo jan ou bezwen.

## Plugin Fòm ak Konpatibilite {#form-plugins-and-compatibility}

Site Builder la otomatikman detekte ki plugin fòm ki enstale sou sit ou an epi li itilize l pou kreye fòm kontak a. Si gen plizyè plugin fòm enstale, Site Builder la ap bay priyorite yo nan lòd sa a:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Si okenn nan plugin sa yo pa enstale, Site Builder la pral rekòmande pou ou enstale youn an anvan li kreye fòm kontak a.

## Notifikasyon Imèl {#email-notifications}

Fòm kontak ki te kreye pa Site Builder la konfigire pou voye notifikasyon imèl bay administrateur sit la pa default. Ou ka kòmanize adrès imèl reseptè ak mesaj notifikasyon an:

1. Ale nan admin interface plugin fòm ou a.
2. Jwenn fòm ki te kreye pa Site Builder la.
3. Edite konfigirasyon notifikasyon imèl yo.

Pou enstriksyon detaye, referans dokiman plugin fòm ou a:

- [Notifikasyon Email pou Contact Form 7](https://contactform7.com/docs/)
- [Notifikasyon Email WPForms](https://wpforms.com/docs/)
- [Notifikasyon Email Fluent Forms](https://fluentforms.com/docs/)
- [Notifikasyon Email Gravity Forms](https://docs.gravityforms.com/)

## Egzanp Itilizasyon {#example-use-cases}

### Contact Form Senp {#simple-contact-form}

> "Kreye yon contact form senp ki gen chèf non, email, ak mesaj."

### Form Ki Anpil Etap {#multi-step-form}

> "Kreye yon contact form ki gen yon etap premye pou enfòmasyon kontak epi yon etap de pou mesaj la ak metòd kontak pèfò."

### Form Ak Lojik Kondisyonèl {#form-with-conditional-logic}

> "Kreye yon contact form ki montre diferan chèf selon chwazi itilizat la nan yon dropdown."

### Form Ak Lòt Chèf Fichye (File Upload) {#form-with-file-upload}

> "Kreye yon contact form ki pèmèt itilizat yo telechaje yon fichye oswa yon atachman."

:::note
Kreyasyon contact form disponib nan Superdav AI Agent v1.10.0 ak pi gwo vèsyon an. Site Builder agent la dwe aktif pou w ka itilize kapasite sa a.
:::
