---
title: Kontaktformulär för webbplatsbyggare
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformulär i Site Builder

Superdav AI Agent v1.10.0 lägger till funktionen att skapa kontaktformulär direkt från chattgränssnittet med hjälp av Site Builder-agenten. Detta gör att du kan lägga till fullt fungerande kontaktformulär på vilken sida som helst utan att behöva lämna chatten.

## Översikt {#overview}

Funktionen för kontaktformulär i Site Builder (`create_contact_form`) upptäcker automatiskt det formplugin du har installerat och skapar ett kontaktformulär med hjälp av det plugins inbyggda funktioner. Stödde formplugins inkluderar:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistenten väljer automatiskt det bästa tillgängliga formpluginet på din webbplats och genererar ett kontaktformulär som är anpassat för just det pluginet.

## Skapa ett kontaktformulär {#creating-a-contact-form}

För att skapa ett kontaktformulär med hjälp av Site Builder:

1. Öppna chatpanelen för **Gratis AI Agent** i WordPress-administratören.
2. Byt till **Site Builder**-agenten genom att klicka på agentikonen i chattens rubrik.
3. Beskriv det kontaktformulär du vill skapa. Till exempel:

   > "Lägg till ett kontaktformulär på kontaktsidan med fält för namn, e-post, meddelande och telefonnummer."

   Eller enkelt:

   > "Skapa ett kontaktformulär för kontaktsidan."

4. Site Builder kommer att generera kontaktformuläret och returnera en shortcode som är redo att bäddas in.

## Använda den genererade shortcoden {#using-the-generated-shortcode}

Efter att Site Builder har skapat kontaktformuläret returnerar den en shortcode (till exempel, `[contact-form-7 id="123"]`). Du kan:

1. **Bädda in det på en sida eller ett inlägg** — Kopiera shortcoden och klistra in den i vilken sida eller ett inlägg som helst med hjälp av blockredigeraren eller den klassiska redigeraren.
2. **Lägga till det via Site Builder** — Be Site Builder att lägga till formuläret på en specifik sida automatiskt:

   > "Lägg till kontaktformuläret på kontaktsidan."

3. **Använda det i en mall** — Om du är bekväm med PHP kan du lägga till shortcoden i en mallfil för ditt tema.

## Anpassa kontaktformuläret {#customizing-the-contact-form}

Efter att Site Builder har skapat kontaktformuläret kan du anpassa det ytterligare:

### Via chattgränssnittet {#via-the-chat-interface}

Be Site Builder att modifiera formuläret:

> "Uppdatera kontaktformuläret för att lägga till ett ämnesfält och göra meddelandefältet obligatoriskt."

Site Builder kommer att uppdatera formuläret och returnera den uppdaterade shortcoden.

### Via formpluginets administrationsgränssnitt {#via-the-form-plugins-admin-interface}

Du kan också anpassa formuläret direkt i dina formplugins inställningar:

1. Gå till **Contact Form 7** (eller ditt installerade formplugin) i WordPress-administratören.
2. Hitta formuläret som skapades av Site Builder.
3. Redigera fälten, valideringsreglerna och e-postaviseringarna efter behov.

## Formplugins och kompatibilitet {#form-plugins-and-compatibility}

Site Builder upptäcker automatiskt vilket formplugin som är installerat på din webbplats och använder det för att skapa kontaktformuläret. Om flera formplugins är installerade prioriterar Site Builder dem i följande ordning:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Om något av dessa plugins inte är installerat rekommenderar Site Builder att du installerar ett innan du skapar kontaktformuläret.

## E-postaviseringar {#email-notifications}

Kontaktformulär som skapas av Site Builder är konfigurerade att skicka e-postaviseringar till webbplatsadministratören som standard. Du kan anpassa mottagarens e-postadress och meddelandetext:

1. Gå till ditt formplugins administrationsgränssnitt.
2. Hitta formuläret som skapades av Site Builder.
3. Redigera inställningarna för e-postaviseringar.

För detaljerade instruktioner, hänvisa till din formplugins dokumentation:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Exempel på användningsfall {#example-use-cases}

### Enkelt kontaktformulär {#simple-contact-form}

> "Skapa ett enkelt kontaktformulär med fält för namn, e-post och meddelande."

### Flerstegsformulär {#multi-step-form}

> "Skapa ett kontaktformulär med ett första steg för kontaktinformation och ett andra steg för meddelandet och föredragen kontaktmetod."

### Formulär med villkorlig logik {#form-with-conditional-logic}

> "Skapa ett kontaktformulär som visar olika fält baserat på användarens val i en rullgardinsmeny."

### Formulär med filuppladdning {#form-with-file-upload}

> "Skapa ett kontaktformulär som låter användare ladda upp en fil eller ett bifogat dokument."

:::note
Skapandet av kontaktformulär är tillgängligt i Superdav AI Agent v1.10.0 och senare. Site Builder-agenten måste vara aktiv för att använda denna funktion.
:::
