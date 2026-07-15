---
title: Kontakt obrasci za web stranice
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontakt obrasca za web stranicu

Superdav AI Agent v1.10.0 dodaje mogućnost kreiranja kontakt formulara direktno iz chat sučelja pomoću Site Builder agenta. To vam omogućuje da dodate potpuno funkcionalne kontakt forme na bilo koju stranicu bez napuštanja chata.

## Pregled {#overview}

Mogućnost kreiranja kontakt formulara putem Site Buildera (`create_contact_form`) automatski prepoznaje vaš instalirani plugin za forme i kreira kontakt formular koriste nativne mogućnosti tog plugin-a. Podržani form pluginovi uključuju:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent će automatski odabrati najbolji dostupni form plugin na vašem sajtu i generirati kontakt formular prilagođen tom pluginu.

## Kreiranje kontakt formulara {#creating-a-contact-form}

Da biste kreirali kontakt formular koristeći Site Builder:

1. Otvorite chat panel **Gratis AI Agent** u WordPress adminu.
2. Prebacite se na agent **Site Builder** klikom na ikonu agenta u zaglavlju chata.
3. Opisz kontakt formular koji želite kreirati. Na primjer:

   > "Dodaj kontakt formular na Stranicu za kontakt s poljima za ime, e-mail, poruku i broj telefona."

   Ili jednostavno:

   > "Kreiraj kontakt formular za Stranicu za kontakt."

4. Site Builder će generirati kontakt formular i vratiti shortcode spremni za ugradnju.

## Korištenje generiranog shortcodea {#using-the-generated-shortcode}

Nakon što Site Builder kreira kontakt formular, on vraća shortcode (na primjer, `[contact-form-7 id="123"]`). Možete:

1. **Ugraditi ga na stranicu ili objavu** — Kopirajte shortcode i zalijepite ga u bilo koju stranicu ili objavu koristeći block editor ili klasični editor.
2. **Dodati ga putem Site Buildera** — Zamolite Site Builder da automatski doda formular na određenu stranicu:

   > "Dodaj kontakt formular na Stranicu za kontakt."

3. **Koristite ga šablona** — Ako ste sgodni na PHP-u, možete dodati shortcode u datoteku tematskog šablona.

## Prilagođavanje kontakt forme {#customizing-the-contact-form}

Nakon što Site Builder napravi kontakt formu, možete je dalje prilagoditi:

### Kroz chat sučelje {#via-the-chat-interface}

Pitajte Site Builder da izmijeni formu:

> "Ažuriraj kontakt formu da doda polje za naslov i učini polje poruke obavezujućim."

Site Builder će ažurirati formu i vratiti ažurirani shortcode.

### Kroz admin sučelje dodatka za formu (Form Plugin) {#via-the-form-plugins-admin-interface}

Možete prilagoditi formu direktno u postavkama vašeg dodatka za formu:

1. Idite na **Contact Form 7** (ili vaš instalirani dodatak za formu) u WordPress adminu.
2. Pronađite formu koju je napravio Site Builder.
3. Uredite polja forme, pravila validacije i e-mail obavijesti kako god je potrebno.

## Dodaci za forme i kompatibilnost {#form-plugins-and-compatibility}

Site Builder automatski prepoznaje koji dodatak za formu je instaliran na vašem sajtu i koristi ga za kreiranje kontakt forme. Ako je instalirano više dodataka za forme, Site Builder im daje prioritet u sljedećem redoslijedu:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ako nijedan od ovih dodataka nije instaliran, Site Builder će preporučiti da ga instalirate prije kreiranja kontakt forme.

## E-mail obavijesti {#email-notifications}

Kontakt forme koje je napravio Site Builder su po defaultu konfigurirane za slanje e-mail obavijesti administratori sajta. Možete prilagoditi e-mail adresu primaoca i poruku obavijesti:

1. Idite na admin sučelje vašeg dodatka za formu.
2. Pronađite formu koju je napravio Site Builder.
3. Uredite postavke e-mail obavijesti.

Za detaljna uputstva, pogledajte dokumentaciju vašeg dodatka za formu:

- [Obavijesti putem e-maila za Contact Form 7](https://contactform7.com/docs/)
- [Obavijesti putem e-maila za WPForms](https://wpforms.com/docs/)
- [Obavijesti putem e-maila za Fluent Forms](https://fluentforms.com/docs/)
- [Obavijesti putem e-maila za Gravity Forms](https://docs.gravityforms.com/)

## Primjeri upotrebe {#example-use-cases}

### Jednostavni kontakt formular {#simple-contact-form}

> "Kreirajte jednostavan kontakt formular s poljima za ime, e-mail i poruku."

### Form s više koraka {#multi-step-form}

> "Kreirajte kontakt formular s prvim korakom za informacije o kontaktu i drugim korakom za poruku i preferirani način kontakta."

### Form s uslovnom logikom {#form-with-conditional-logic}

> "Kreirajte kontakt formular koji prikazuje različita polja ovisno o izboru korisnika u padajućem meniju."

### Form s uploadom datoteka {#form-with-file-upload}

> "Kreirajte kontakt formular koji omogućuje korisnicima da otporuče datoteku ili prilog."

:::note
Kreiranje kontakt formulara je dostupno u Superdav AI Agent v1.10.0 i novijim verzijama. Agent Site Builder mora biti aktivan kako bi se ova mogućnost koristila.
:::
