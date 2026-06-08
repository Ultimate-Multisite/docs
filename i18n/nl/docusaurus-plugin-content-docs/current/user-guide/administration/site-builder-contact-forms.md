---
title: Site Builder Contactformulieren
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Contactformulieren met de Site Builder

Superdav AI Agent v1.10.0 voegt de mogelijkheid toe om contactformulieren rechtstreeks vanuit de chatinterface te maken met behulp van de Site Builder agent. Hiermee kunt u volledig functionele contactformulieren aan elke pagina toevoegen zonder de chat te verlaten.

## Overzicht

De functionaliteit voor contactformulieren van de Site Builder (`create_contact_form`) detecteert automatisch uw geïnstalleerde formulierplugin en maakt een contactformulier aan met behulp van de ingebouwde mogelijkheden van die plugin. Ondersteunde formulierplugins zijn onder andere:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

De assistent selecteert automatisch de beste beschikbare formulierplugin op uw site en genereert een contactformulier dat is afgestemd op die plugin.

## Een Contactformulier Aanmaken

Om een contactformulier te maken met behulp van de Site Builder:

1. Open het chatpaneel van de **Gratis AI Agent** in het WordPress-admin.
2. Schakel over naar de **Site Builder** agent door op het agenticoon in de chatheader te klikken.
3. Beschrijf het contactformulier dat u wilt aanmaken. Bijvoorbeeld:

   > "Voeg een contactformulier toe aan de Contactpagina met velden voor naam, e-mail, bericht en telefoonnummer."

   Of simpelweg:

   > "Maak een contactformulier voor de Contactpagina."

4. De Site Builder genereert het contactformulier en geeft een shortcode terug die klaar is om ingebed te worden.

## Het Gebruikte Shortcode

Nadat de Site Builder het contactformulier heeft aangemaakt, geeft deze een shortcode terug (bijvoorbeeld, `[contact-form-7 id="123"]`). U kunt:

1. **Het inbedden in een pagina of bericht** — Kopieer de shortcode en plak deze in elke pagina of elk bericht met behulp van de block editor of de klassieke editor.
2. **Het toevoegen via de Site Builder** — Vraag de Site Builder om het formulier automatisch toe te voegen aan een specifieke pagina:

   > "Voeg het contactformulier toe aan de Contactpagina."

3. **Het gebruiken in een template** — Als u bekend bent met PHP, kunt u de shortcode toevoegen aan een thema templatebestand.

## Het Aanpassen van het Contactformulier

Nadat de Site Builder het contactformulier heeft aangemaakt, kunt u dit verder aanpassen:

### Via de Chatinterface

Vraag de Site Builder om het formulier aan te passen:

> "Pas het contactformulier aan door een onderwerpveld toe te voegen en het berichtveld verplicht te maken."

De Site Builder werkt het formulier bij en geeft de bijgewerkte shortcode terug.

### Via de Admininterface van de Formulierplugin

U kunt het formulier ook direct aanpassen in de instellingen van uw formulierplugin:

1. Ga naar **Contact Form 7** (of uw geïnstalleerde formulierplugin) in het WordPress-admin.
2. Zoek het formulier dat door de Site Builder is aangemaakt.
3. Pas de velden, validatieregels en e-mailmeldingen aan zoals nodig.

## Formulierplugins en Compatibiliteit

De Site Builder detecteert automatisch welke formulierplugin op uw site is geïnstalleerd en gebruikt deze om het contactformulier te creëren. Als er meerdere formulierplugins zijn geïnstalleerd, geeft de Site Builder de volgende prioriteit:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Als geen van deze plugins is geïnstalleerd, beveelt de Site Builder aan om er eerst één te installeren voordat het contactformulier wordt aangemaakt.

## E-mailmeldingen

Contactformulieren die door de Site Builder worden aangemaakt, zijn standaard ingesteld om e-mailmeldingen te sturen naar de sitebeheerder. U kunt het e-mailadres van de ontvanger en de meldingstekst aanpassen:

1. Ga naar de admininterface van uw formulierplugin.
2. Zoek het formulier dat door de Site Builder is aangemaakt.
3. Pas de e-mailmeldingsinstellingen aan.

Voor gedetailleerde instructies verwijst u naar de documentatie van uw formulierplugin:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Voorbeelden van Gebruiksscenario's

### Simpel Contactformulier

> "Maak een eenvoudig contactformulier met velden voor naam, e-mail en bericht."

### Meerstappenformulier

> "Maak een contactformulier met een eerste stap voor contactgegevens en een tweede stap voor het bericht en de gewenste contactmethode."

### Formulier met Conditionele Logica

> "Maak een contactformulier dat verschillende velden weergeeft op basis van de selectie van de gebruiker in een dropdown."

### Formulier met Bestandsupload

> "Maak een contactformulier dat gebruikers in staat stelt een bestand of bijlage te uploaden."

:::note
Het aanmaken van contactformulieren is beschikbaar in Superdav AI Agent v1.10.0 en later. De Site Builder agent moet actief zijn om deze functionaliteit te gebruiken.
:::
