---
title: Formuloj de kontakto por Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformular für die Website-Erstellung

Superdav AI Agent v1.10.0 fügt die Möglichkeit hinzu, Kontaktformulare direkt aus der Chat-Oberfläche mithilfe des Site Builder agents zu erstellen. Dadurch können Sie voll funktionsfähige Kontaktformulare auf jede Seite hinzufügen, ohne den Chat verlassen zu müssen.

## Überblick

Die Fähigkeit zum Erstellen von Kontaktformularen mit dem Site Builder (`create_contact_form`) erkennt automatisch Ihr installiertes Formular-Plugin und erstellt ein Kontaktformular unter Verwendung der nativen Funktionen dieses Plugins. Unterstützte Formular-Plugins sind:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Der Assistent wählt automatisch das am besten verfügbare Formular-Plugin auf Ihrer Seite aus und generiert ein Kontaktformular, das speziell auf dieses Plugin zugeschnitten ist.

## Erstellen eines Kontaktformulars

Um mit dem Site Builder ein Kontaktformular zu erstellen:

1. Öffnen Sie das Chat-Panel des **Gratis AI Agent** im WordPress-Admin.
2. Wechseln Sie zum **Site Builder** agent, indem Sie auf das Agenten-Symbol in der Chat-Kopfzeile klicken.
3. Beschreiben Sie das Kontaktformular, das Sie erstellen möchten. Zum Beispiel:

   > "Füge ein Kontaktformular zur Seite 'Kontakt' mit Feldern für Namen, E-Mail, Nachricht und Telefonnummer hinzu."

   Oder einfach:

   > "Erstelle ein Kontaktformular für die Seite 'Kontakt'."

4. Der Site Builder generiert das Kontaktformular und gibt einen Shortcode zurück, der bereit ist zum Einbetten.

## Verwendung des generierten Shortcodes

Nachdem der Site Builder das Kontaktformular erstellt hat, gibt er einen Shortcode (zum Beispiel `[contact-form-7 id="123"]`) zurück. Sie können:

1. **Es in eine Seite oder einen Beitrag einbetten** — Kopieren Sie den Shortcode und fügen Sie ihn in jede Seite oder jeden Beitrag mithilfe des Blockeditors oder des klassischen Editors ein.
2. **Es über den Site Builder hinzufügen** — Bitten Sie den Site Builder, das Formular automatisch zu einer bestimmten Seite hinzuzufügen:

   > "Füge das Kontaktformular zur Seite 'Kontakt' hinzu."

3. **Uzuvu it en šablone** — Je komfortabils PHP-je, povas pridėti shortcode'on temo šablono failui.

## Kontaktų formos personalizavimas

Po to, kai Site Builder sukuria kontaktinę formą, jūs ją galite daliau personalizuoti:

### Per čatą interfeicą

Pagalbos Site Builderi pakeisti formą:

> "Atnaujinkite kontaktinę formą, kad pridėtumėte pavadinimo lauką ir padarytumėte pranešimo lauką privalomu."

Site Builder atnaujina formą ir grąžina naują atnaujintą shortcode.

### Per formos plugino administravimo interfeicą

Jūs galite taip pat tiesiogiai personalizuoti formą savo formos plugino nustatymuose:

1. Eikite į **Contact Form 7** (arba jūsų įdėtas formos pluginas) WordPress adminui.
2. Raskykite tą formą, kurą sukurė Site Builderis.
3. Redaguokite laukus, patikrinimo taisykles ir el. pranešimų nustatymus, jei reikia.

## Formos pluginai ir supraveikojimas

Site Builder automatizuotai atpažįsta, kuris formos pluginas įdėtas jūsų svetainėje, ir naudoja jį kontaktinės formos sukurti. Jei įdėta daugiau nei vienas formos pluginas, Site Builder priorizuojasi šiuose nurodytais tvarkyje:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jei nė vienas iš šių pluginų nėra įdėtas, Site Builder siūlys įdėti vieną prieš sukurti kontaktinę formą.

## El. pranešimai

Site Builderis sukurtos kontaktinės formos nustatytos automatiškai siuntoti el. pranešimus svetainės administratorui. Jūs galite personalizuoti gauti el. pašto adresą ir pranešimo mesges.

1. Eikite į savo formos plugino administravimo interfeicą.
2. Raskykite tą formą, kurą sukurė Site Builderis.
3. Redaguokite nustatyjus el. pranešimų pranešimą.

Daugiau informacijos bagi, perskaitykite savo formos plugino dokumentaciją:

- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Ekzemploj uzvilo

### Simple Kontaktform

> "Kriju senpuran kontaktformon kun imi, emailo kaj mesaĝa kampojn."

### Multstep Formo

> "Kriju kontaktformon kun unua paŝo por informoj pri kontakte, kaj dua paŝo por mesaĝo kaj preferita kontakto metodo."

### Formo kun Kondiciaj Logiko

> "Kriju kontaktformon, kiu montras malsamajn kampojn bazitajn sur la elektado de la uzanto en drop-down."

### Formo kun Arkivo Uzfako

> "Kriju kontaktformon, kiu permesas uzantoj uploadi filon aŭ atachadon."

:::note
La kreo de kontaktformoj estas disponabla en Superdav AI Agent v1.10.0 kaj pli malalta. La Site Builder agenta devas esti aktiva por uzi ĉi tijn abiliteco.
:::
