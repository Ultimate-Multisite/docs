---
title: Kontaktformularer til sidebygger
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformularer i Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 tilføjer muligheden for at oprette kontaktformularer direkte fra chatgrænsefladen ved hjælp af Site Builder agenten. Dette giver dig mulighed for at tilføje fuldt funktionelle kontaktformularer til enhver side uden at skulle forlade chatten.

## Oversigt {#overview}

Site Builders evne til at oprette kontaktformularer (`create_contact_form`) genkender automatisk dit installerede formularplugin og opretter en kontaktformular ved hjælp af dette plugins indbyggede funktioner. Understøttede formularplugins inkluderer:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistenten vælger automatisk det bedste tilgængelige formularplugin på din side og genererer en kontaktformular, der er skræddersyet til dette plugin.

## Oprettelse af en Kontaktformular {#creating-a-contact-form}

For at oprette en kontaktformular ved hjælp af Site Builder:

1. Åbn chatpanelet for **Gratis AI Agent** i WordPress-administrationen.
2. Skift til **Site Builder agenten** ved at klikke på agentikonet i chatheaderen.
3. Beskriv den kontaktformular, du ønsker at oprette. For eksempel:

   > "Tilføj en kontaktformular til Kontakt-siden med felter til navn, e-mail, besked og telefonnummer."

   Eller blot:

   > "Opret en kontaktformular til Kontakt-siden."

4. Site Builder vil generere kontaktformulareren og returnere et shortcode klar til indlejring.

## Brug af den Genererede Shortcode {#using-the-generated-shortcode}

Når Site Builder har oprettet kontaktformulareren, returnerer den et shortcode (f.eks. `[contact-form-7 id="123"]`). Du kan:

1. **Indlejre den i en side eller opslag** — Kopier shortcoded og indsæt det i enhver side eller opslag ved hjælp af blokredigereren eller klassisk redigeringsværktøj.
2. **Tilføje den via Site Builder** — Bed Site Builder om automatisk at tilføje formularen til en specifik side:

   > "Tilføj kontaktformulareren til Kontakt-siden."

3. **Brug den i en template** — Hvis du er komfortabel med PHP, kan du tilføje shortcode-et til en tema-templatefil.

## Tilpasning af kontaktseddelen {#customizing-the-contact-form}

Når Site Builder har oprettet kontaktseddelen, kan du tilpasse den yderligere:

### Via Chat-grænsefladen {#via-the-chat-interface}

Bed Site Builder om at ændre formularen:

> "Opdater kontaktseddelen til at tilføje et emnelinje-felt og gøre meddelelsesfeltet obligatorisk."

Site Builder vil opdatere formularen og returnere den opdaterede shortcode.

### Via din form plugins admin-grænseflade {#via-the-form-plugins-admin-interface}

Du kan også tilpasse formularen direkte i indstillingerne for din form plugin:

1. Gå til **Contact Form 7** (eller din installerede form plugin) i WordPress admin.
2. Find den formular, som Site Builder har oprettet.
3. Rediger felterne i formularen, valideringsreglerne og e-mail-notifikationerne efter behov.

## Form plugins og kompatibilitet {#form-plugins-and-compatibility}

Site Builder genkender automatisk, hvilken form plugin der er installeret på din side, og bruger den til at oprette kontaktseddelen. Hvis der er flere form plugins installeret, prioriterer Site Builder dem i denne rækkefølge:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Hvis ingen af disse plugins er installeret, vil Site Builder anbefale at installere en før oprettelsen af kontaktseddelen.

## E-mail notifikationer {#email-notifications}

Kontaktsedler skabt af Site Builder er som standard konfigureret til at sende e-mail-notifikationer til sidens administrator. Du kan tilpasse modtagerens e-mailadresse og notifikationsbeskeden:

1. Gå til din form plugins admin-grænseflade.
2. Find den formular, som Site Builder har oprettet.
3. Rediger indstillingerne for e-mail-notifikationer.

For detaljerede instruktioner henviser du til din form plugins dokumentation:

- [Kontaktform 7 E-mail notifikationer](https://contactform7.com/docs/)
- [WPForms E-mail notifikationer](https://wpforms.com/docs/)
- [Fluent Forms E-mail notifikationer](https://fluentforms.com/docs/)
- [Gravity Forms E-mail notifikationer](https://docs.gravityforms.com/)

## Eksempler på brug {#example-use-cases}

### Simpelt kontaktformular {#simple-contact-form}

> "Opret en simpel kontaktformular med felter til navn, e-mail og besked."

### Flertrinsformular {#multi-step-form}

> "Opret en kontaktformular med et første trin til kontaktoplysninger og et andet trin til besked og foretrukken kontaktmetode."

### Form med betinget logik {#form-with-conditional-logic}

> "Opret en kontaktformular, der viser forskellige felter baseret på brugerens valg i en dropdown-menu."

### Form med filupload {#form-with-file-upload}

> "Opret en kontaktformular, hvor brugere kan uploade en fil eller et vedhæftet dokument."

:::note
Oprettelse af kontaktformularer er tilgængelig i Superdav AI Agent v1.10.0 og senere versioner. Site Builder agent skal være aktiv for at bruge denne funktion.
:::
