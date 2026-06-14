---
title: Miðlar fyrir vísarformir á síti-byggingu
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformirnar byggjast

Superdav AI Agent v1.10.0 leggur við möguleika að skapa kontaktformir beint úr chat-skynjunni með Site Builder agentinni. Þetta gerir þér kleift að bæta fully vinnandi kontaktformum í hvaða síðu sem þú vilst án þess að koma út úr chatinu.

## Áhersla

Möguleiki að skapa kontaktformir með Site Builder (`create_contact_form`) þekkir sjálft inn hvar þú hefur nýtt form plugin og skapar kontaktform fyrir notkun þess orðna möguleika. Stöðugt stöðuð form plugins eru:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Hjálparinn velur sjálf best tilstaða form plugin á síðunni þinni og skapar kontaktform sem er sérsniðið að þessum plugin.

## Skapandi kontaktform

Til að skapa kontaktform með Site Builder:

1. Opna chat-panel **Gratis AI Agent** í WordPress admin.
2. Skiftu yfir á agentann **Site Builder** með því að klikka á agentaríkið í huppnum fyrir chat.
3. Skrifa það sem kontaktforminn er sem þú vilt skapa. Til dæmis:

   > "Bæta kontaktform í Contact page með felta fyrir nafn, tölvuinn og texta."

   Eða einfaldlega:

   > "Skapa kontaktform fyrir Contact page."

4. Site Builder mun skapa kontaktforminn og svara með kortlið (shortcode) sem er klár til að innleiða.

## Notkun á kortliði

Eftir að Site Builder hafi skafið kontaktforminn, svara hann með kortliði (t.d., `[contact-form-7 id="123"]`). Þú getur:

1. **Innleiða það í síðu eða post** — Kopla kortliði og setu það í hvaða síðu eða post sem þú vilt nota með block editor eða klassíka editor.
2. **Bæta það við með Site Builder-inn** — Spyr Site Builder að bæta forminu á sérstaklega síðu sjálf:

   > "Bæta kontaktforminn í Contact page."

3. **Brug það í template** — Ef þú ert hönnuð með PHP, geturðu bætt kortkortinu við temaplað.

## Innstillingar á tengslufjöldum (Contact Form)

Eftir að Site Builder hefur skipt tengslufjöldum upp, geturðu það innreiðilefnið lengra breytt:

### Gjennom chat-stöðuinn (Chat Interface)

Spyr Site Builder um að breyta fjöldanum:

> "Breytingu tengslufjöldann til að bæta við fält fyrir hugmynd og gjera textafeltið nauðsynlegt."

Site Builder mun breyta fjöldanum og svara með uppfærðum kortkortinu.

### Gjennom stjórnarpól (Admin Interface) á fjöldun-þróunarþróunni þinni (Form Plugin)

Þú getur bráðinn breytt fjöldann beint í innstillingum fjöldun-þróunarþróunni þinni:

1. Gangi yfir **Contact Form 7** (eða þennan sem er sett upp) í WordPress admin.
2. Finndu fjöldann sem Site Builder hefur skipt upp.
3. Breytingu fältin, valídanreglur og tölvupóstiöflustillingar eins og þú þarft.

## Fjöldun-þróunarþróunir og samræmi (Compatibility)

Site Builder finnur sjálf hvaða fjöldun-þróunarþróun er sett upp á síðuna þinni og notar hana til að skipta tengslufjöldum upp. Ef fleiri fjöldun-þróunarþróunir eru sett upp, prioriserar Site Builder þær í þessu fyrirkomulagi:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ef enginn af þessum þróununum er sett upp, mun Site Builder ráða að setja upp einn áður en hann skiptir tengslufjöldum upp.

## Tölvupóstiöflustillingar (Email Notifications)

Tengslufjöld sem Site Builder hefur skipt upp eru innstilla til að sendast tölvupóstiöflustillingar til síðustjórnans á síðuna af raunni. Þú getur breytt viðtaliöflustillingar og textaöflustillingar:

1. Gangi yfir stjórnarpól fjöldun-þróunarþróunni þinni.
2. Finndu fjöldann sem Site Builder hefur skipt upp.
3. Breytingu tölvupóstiöflustillingum eins og þú þarft.

Fyrir nánari leiðbeiningar, skoða dokumentation fjöldun-þróunarþróunni þinn:

- [Tilkynningarskjöðun fyrir Contact Form 7](https://contactform7.com/docs/)
- [Tilkynningar í WPForms](https://wpforms.com/docs/)
- [Tilkynningar í Fluent Forms](https://fluentforms.com/docs/)
- [Tilkynningar í Gravity Forms](https://docs.gravityforms.com/)

## Dæmi um notkun

### Einfaldur tilkynningarskjöðun

> "Skapa einfalt tilkynningarskjöðun með fólksnafn, tölvuinn og texta."

### Flurstegs skjöðun

> "Skapa tilkynningarskjöðun sem hefur fyrsta skrefið fyrir upplýsingar um tengilblöndun og sekunda skrefið fyrir textann og nauðsynlegri tengilblöndun."

### Skjöðun með villandi logikku

> "Skapa tilkynningarskjöðun sem sýnir ólíka feldi eftir valum notandans í dropdowni."

### Skjöðun með laðningu skjalas

> "Skapa tilkynningarskjöðun sem leyfir notendum að laða upp skjal eða viðbót."

:::note
Skapara tilkynningarskjöðunar er aðgengst í Superdav AI Agent v1.10.0 og hærri. Skapa síðubyggingann (Site Builder agent) verður þarf á hjá til að nota þessi möguleika.
:::
