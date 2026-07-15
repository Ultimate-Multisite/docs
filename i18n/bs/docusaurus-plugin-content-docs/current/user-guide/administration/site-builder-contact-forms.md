---
title: Kontakt forme za izgrađivač web stranica
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktni formulari sa Site Builderom

Superdav AI Agent v1.10.0 dodaje mogućnost kreiranja formulara za kontakt direktno iz chat interfejsa koristeći Site Builder agent. To vam omogućava da dodate potpuno funkcionalne kontakt formulare na bilo koju stranicu bez napuštanja chata.

## Pregled {#overview}

Mogućnost formulara za kontakt putem Site Builder-a (`create_contact_form`) automatski prepoznaje instalirani plugin za formulare i kreira kontakt formular koristeći ugrađene mogućnosti tog plugin-a. Podržani pluginovi za formulare uključuju:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent automatski bira najbolji dostupan plugin za formulare na vašoj stranici i generiše kontakt formular prilagođen tom pluginu.

## Kreiranje kontakt formulara {#creating-a-contact-form}

Da biste kreirali kontakt formular koristeći Site Builder:

1. Otvorite chat panel **Gratis AI Agent** u WordPress administraciji.
2. Prebacite se na **Site Builder** agent klikom na ikonu agenta u zaglavlju chata.
3. Opišite kontakt formular koji želite kreirati. Na primjer:

   > "Dodaj kontakt formular na stranicu 'Kontakt' sa poljima za ime, e-mail, poruku i broj telefona."

   Ili jednostavno:

   > "Kreiraj kontakt formular za stranicu 'Kontakt'."

4. Site Builder će generisati kontakt formular i vratiti shortcode spreman za ugradnju.

## Korištenje generisanog shortcode-a {#using-the-generated-shortcode}

Nakon što Site Builder kreira kontakt formular, on vraća shortcode (na primjer, `[contact-form-7 id="123"]`). Vi možete:

1. **Ugraditi ga na stranicu ili objavu** — Kopirajte shortcode i zalijepite ga u bilo koju stranicu ili objavu koristeći block editor ili klasični editor.
2. **Dodati ga putem Site Builder-a** — Zamolite Site Builder-a da automatski doda formular na određenu stranicu:

   > "Dodaj kontakt formular na stranicu 'Kontakt'."

3. **Upotrijebiti ga u šablonu** — Ako ste upoznati sa PHP-om, možete dodati shortcode u datoteku šablona teme.

## Prilagođavanje kontakt formulara {#customizing-the-contact-form}

Nakon što Site Builder kreira kontakt formular, možete ga dalje prilagoditi:

### Preko chat interfejsa {#via-the-chat-interface}

Zamolite Site Builder-a da modifikuje formular:

> "Ažuriraj kontakt formular da doda polje za temu i da učini polje za poruku obavezno."

Site Builder će ažurirati formular i vratiti ažurirani shortcode.

### Preko admin interfejsa plugin-a za formulare {#via-the-form-plugins-admin-interface}

Takođe možete prilagoditi formular direktno u postavkama vašeg plugin-a za formulare:

1. Idite na **Contact Form 7** (ili vaš instalirani plugin za formulare) u WordPress administraciji.
2. Pronađite formular koji je kreirao Site Builder.
3. Izmijenite polja formulara, pravila validacije i obavještenja putem e-pošte kako je potrebno.

## Pluginovi za formulare i kompatibilnost {#form-plugins-and-compatibility}

Site Builder automatski prepoznaje koji plugin za formulare je instaliran na vašoj stranici i koristi ga za kreiranje kontakt formulara. Ako je instalirano više pluginova za formulare, Site Builder ih daje prioritet u ovom redoslijedu:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ako nije instaliran nijedan od ovih pluginova, Site Builder će preporučiti instaliranje jednog prije kreiranja kontakt formulara.

## Obavještenja putem e-pošte {#email-notifications}

Kontakt formulari kreirani putem Site Builder-a podrazumevano su konfigurisani da šalju obavještenja putem e-pošte administratoru stranice. Možete prilagoditi e-mail adresu primaoca i poruku obavještenja:

1. Idite na admin interfejs vašeg plugin-a za formulare.
2. Pronađite formular koji je kreirao Site Builder.
3. Izmijenite postavke obavještenja putem e-pošte.

Za detaljna uputstva, pogledajte dokumentaciju vašeg plugin-a za formulare:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Primjeri upotrebe {#example-use-cases}

### Jednostavan kontakt formular {#simple-contact-form}

> "Kreiraj jednostavan kontakt formular sa poljima za ime, e-mail i poruku."

### Formular u više koraka {#multi-step-form}

> "Kreiraj kontakt formular sa prvim korakom za kontakt informacije i drugim korakom za poruku i željeni način kontakta."

### Formular sa uslovnom logikom {#form-with-conditional-logic}

> "Kreiraj kontakt formular koji prikazuje različita polja na osnovu izbora korisnika u padajućem izborniku."

### Formular sa otpremanjem datoteka {#form-with-file-upload}

> "Kreiraj kontakt formular koji korisnicima omogućava otpremanje datoteke ili priloga."

:::note
Kreiranje kontakt formulara dostupno je u Superdav AI Agent v1.10.0 i novijim verzijama. Za korištenje ove mogućnosti, Site Builder agent mora biti aktivan.
:::
