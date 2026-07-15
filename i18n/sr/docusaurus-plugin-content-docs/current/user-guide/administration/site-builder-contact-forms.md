---
title: Kontakt forme za izgradnju sajta
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontakt forme za izgradnju sajta

Superdav AI Agent v1.10.0 dodaje mogućnost kreiranja kontakt formulara direktno iz interfejsa chata pomoću Site Builder agenta. To vam omogućava da dodate potpuno funkcionalne kontakt forme na bilo koju stranicu bez napuštanja chata.

## Pregled {#overview}

Mogućnost kreiranja kontakt forma putem Site Buildera (`create_contact_form`) automatski prepoznaje vaš instaliran plugin za forme i kreira kontakt formu koriste nativne mogućnosti tog plugin-a. Podržani form pluginovi uključuju:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent će automatski odabrati najbolji dostupni form plugin na vašem sajtu i generisati kontakt formu prilagođenu tom pluginu.

## Kreiranje kontakt forme {#creating-a-contact-form}

Da biste kreirali kontakt formu pomoću Site Buildera:

1. Otvorite chat panel **Gratis AI Agent** u WordPress admin paneli.
2. Prebacite se na agent **Site Builder** klikom na ikonu agenta u zaglavlju chata.
3. Opisz kontakt formu koju želite kreirati. Na primer:

   > "Dodaj kontakt formu na Kontakt stranicu sa poljima za ime, e-mail, poruku i broj telefona."

   Ili jednostavno:

   > "Kreiraj kontakt formu za Kontakt stranicu."

4. Site Builder će generisati kontakt formu i vratiti shortcode spremni za ugradnju.

## Korišćenje generisanog shortcode-a {#using-the-generated-shortcode}

Nakon što Site Builder kreira kontakt formu, on vraća shortcode (na primer, `[contact-form-7 id="123"]`). Možete:

1. **Ugraditi ga na stranicu ili post** — Kopirajte shortcode i zalepite ga u bilo koju stranicu ili post koristeći block editor ili klasični editor.
2. **Dodati ga putem Site Buildera** — Zamolite Site Builder da automatski doda formu na određenu stranicu:

   > "Dodaj kontakt formu na Kontakt stranicu."

3. **Koristite ga šablon** — Ako ste upoznati sa PHP-om, možete dodati shortcode u fajl šablona teme.

## Prilagođavanje kontakt forme {#customizing-the-contact-form}

Nakon što Site Builder napravi kontakt formu, možete je dalje prilagoditi:

### Preko chata interfejsa {#via-the-chat-interface}

Pitajte Site Builder da modifikuje formu:

> "Ažuriraj kontakt formu tako da doda polje za naslov i učini polje poruke obavezanim."

Site Builder će ažurirati formu i vratiti ažurirani shortcode.

### Preko admin interfejsa dodatka za forme (Form Plugin's Admin Interface) {#via-the-form-plugins-admin-interface}

Možete prilagoditi formu direktno u podešavanjima vašeg dodatka za forme:

1. Idite na **Contact Form 7** (ili vaš instaliran dodatak za forme) u WordPress admin panelu.
2. Pronađite formu koju je napravio Site Builder.
3. Uredite polja forme, pravila validacije i e-mail obaveštenja kako god vam treba.

## Dodaci za forme i kompatibilnost {#form-plugins-and-compatibility}

Site Builder automatski prepoznaje koji dodatak za forme je instaliran na vašem sajtu i koristi ga za kreiranje kontakt forme. Ako je instalirano više dodataka za forme, Site Builder daje prioritet u ovoj sekvenci:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ako nijedan od ovih dodataka nije instaliran, Site Builder će preporučiti da ga instalirate pre nego što kreira kontakt formu.

## E-mail obaveštenja {#email-notifications}

Kontakt forme koje je kreirao Site Builder su podrazumevano podešene da šalju e-mail obaveštenja administratoru sajta. Možete prilagoditi e-mail adresu primaoca i poruku obaveštenja:

1. Idite na admin interfejs vašeg dodatka za forme.
2. Pronađite formu koju je kreirao Site Builder.
3. Uredite podešavanja e-mail obaveštenja.

Za detaljna uputstva, pogledajte dokumentaciju vašeg dodatka za forme:

- [Obaveštenja putem e-maila za Contact Form 7](https://contactform7.com/docs/)
- [Obaveštenja putem e-maila za WPForms](https://wpforms.com/docs/)
- [Obaveštenja putem e-maila za Fluent Forms](https://fluentforms.com/docs/)
- [Obaveštenja putem e-maila za Gravity Forms](https://docs.gravityforms.com/)

## Primeri upotrebe {#example-use-cases}

### Jednostavan kontakt formular {#simple-contact-form}

> "Kreirajte jednostavan kontakt formular sa poljima za ime, e-mail i poruku."

### Form sa više koraka {#multi-step-form}

> "Kreirajte kontakt formular sa prvim korakom za informacije o kontaktu i drugim korakom za poruku i preferirani način kontakta."

### Form sa uslovnom logikom {#form-with-conditional-logic}

> "Kreirajte kontakt formular koji prikazuje različita polja na osnovu izbora korisnika u padajućem meniju."

### Form sa uploadom datoteka {#form-with-file-upload}

> "Kreirajte kontakt formular koji omogućava korisnicima da učitaju datoteku ili prilog."

:::note
Kreiranje kontakt formulara je dostupno u Superdav AI Agent v1.10.0 i novijim verzijama. Agent Site Builder mora biti aktivan da bi se ova mogućnost mogla koristiti.
:::
