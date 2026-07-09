---
title: Site Builder Contact Forms
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktnye formy s Site Builderom {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 dodal funktsionalnost' sozdaniya kontaktnykh form pryamo iz chata, ispolzuya agent Site Builder. Eto pozvolyaet vam poluchit' funktsional'no rabotayushchiye kontaktnye formy na lyubuyu stranitsu, ne pokavayushsya iz chata.

## Obzor {#overview}

Funktsionalnost' kontaktnoy formy Site Builder (`create_contact_form`) avtomaticheski opredelyayet ustanovlennyy plugin dlya form i sozdayet kontaktnuyu formu, ispolzuya vstrechennyye funktsionalnosti etogo plugin-a. Podderzhivayemyye plugin-y dlya form vklyuchayut:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent avtomaticheski vybirayet luchshiy dostupnyy plugin dlya form na vashey stranitse i generiruyet kontaktnuyu formu, podgotovlennuyu spetsial'no dlya etogo plugin-a.

## Sozdaniye Kontaktnoy Formy {#creating-a-contact-form}

Chto by sozdat' kontaktnuyu formu s pomoshch'yu Site Builder-a:

1. Otkroyte chat-panel **Gratis AI Agent** v administratsii WordPress.
2. Perekhodite k agentu **Site Builder**, naznachiv klikom na ikonu agenta v zagolovke chata.
3. Opishchite kontaktnuyu formu, kotoruyu vy khotite sozdat'. Naprimer:

   > "Dopolnite' kontaktnoy formoy na stranitsu 'Kontakt' s polyam dlya imeni, elektronnoy pochty, soobshcheniya i telefona."

   Ili prosto:

   > "Sozdat' kontaktnuyu formu dlya stranitsy 'Kontakt'."

4. Site Builder sgeneriruyet kontaktnuyu formu i vveret shortcode, gotovyy k vlozheniyu.

## Ispol'zovaniye Sgenerirovannogo Shortcode {#using-the-generated-shortcode}

Posle togo, kak Site Builder sozdayet kontaktnuyu formu, on vveret shortcode (naprimer, `[contact-form-7 id="123"]`). Vy mozhete:

1. **Vlozheniye v stranitsu ili post** — Skopiruyte shortcode i vkleite yego v lyubuyu stranitsu ili post, ispolzuya block editor ili klassicheskiy redaktor.
2. **Dopolneniye cherez Site Builder** — Poprosite Site Builder avtomaticheski dobavit' formu na konkretnuyu stranitsu:

   > "Dobavit' kontaktnuyu formu na stranitsu 'Kontakt'."

3. **Ispol'zovaniye v shablone** — Yesli vy komfortno s PHP, vy mozhete dobavit' shortcode v fayl shablona teemy.

## Kadrirovka Kontaktnoy Formy {#customizing-the-contact-form}

Posle togo, kak Site Builder sozdayet kontaktnuyu formu, vy mozhete dal'she yeyo kadrirovat':

### Cherez Chat-interfeys {#via-the-chat-interface}

Poprosite Site Builder izmenit' formu:

> "Obnovit' kontaktnuyu formu, chtoby dobavit' pole 'Tema' i sdelat' pole 'Soobshcheniye' obyazatel'nym."

Site Builder obnovit formu i vveret obnovlennyy shortcode.

### Cherez Admin-interfeys Plugin-a dlya Form {#via-the-form-plugins-admin-interface}

Vy takzhe mozhete kadrirovat' formu pryamo v nastroykakh vashego plugin-a dlya form:

1. Pereydite v **Contact Form 7** (ili vashego ustanovlennogo plugin-a dlya form) v administratsii WordPress.
2. Naydite formu, sozdannuyu Site Builder-om.
3. Redaktirovayte pola formy, pravila validatsii i uvedomleniya na elektronnyuyu pochtu po nuzhdennosti.

## Plugin-y dlya Form i Kompatibilnost' {#form-plugins-and-compatibility}

Site Builder avtomaticheski opredelyayet, kakoy plugin dlya form ustanovlen na vashey stranitse, i ispol'zuyet yego dlya sozdaniya kontaktnoy formy. Yesli ustanovleno neskol'ko plugin-ov dlya form, Site Builder privodit yego v etom poryadke:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Yesli ne ustanovleno ni odin iz etikh plugin-ov, Site Builder predlozhit ustanovit' odin, prezhde chem sozdat' kontaktnuyu formu.

## Uvedomleniya na Elektronnyuyu Pochtu {#email-notifications}

Kontaktnye formy, sozdannye Site Builder-om, po ustroystvu nastroenyu na otpravleniye uvedomleniy na elektronnyuyu pochtu administratora stranitsy. Vy mozhete kadrirovat' adres poluchatelya i tekst uvedomleniya:

1. Pereydite v admin-interfeys vashego plugin-a dlya form.
2. Naydite formu, sozdannuyu Site Builder-om.
3. Redaktirovayte nastroyki uvedomleniy na elektronnyuyu pochtu.

Dlya podrobnykh instruktsiy svyashchayte s dokumentatsiey vashego plugin-a dlya form:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Primery Ispol'zovaniya {#example-use-cases}

### Prostaya Kontaktnaya Forma {#simple-contact-form}

> "Sozdat' prostuyu kontaktnuyu formu s polami dlya imeni, elektronnoy pochty i soobshcheniya."

### Forma s Nekotorymi Etapami {#multi-step-form}

> "Sozdat' kontaktnuyu formu s pervim etapom dlya kontaktnoy informatsii i vtorym etapom dlya soobshcheniya i predpochtennogo sposoba svyazi."

### Forma s Usloviyami Logiki {#form-with-conditional-logic}

> "Sozdat' kontaktnuyu formu, kotoraya pokazyvayet raznye pola v zavisimosti ot vybora pol'zovatelya v rozvypushchnom spiske."

### Forma s Polyucheniem Faila {#form-with-file-upload}

> "Sozdat' kontaktnuyu formu, kotoraya pozvolyayet pol'zovatelyam sdat' fayl ili prilozheniye."

:::note
Sozdaniye kontaktnykh form dostupno v Superdav AI Agent v1.10.0 i novyye. Dlya ispol'zovaniya etoy funktsionalnosti agent Site Builder dolzhen byt' aktivnym.
:::
