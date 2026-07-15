---
title: Siti ehitija kontaktiformid
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Veebilund kontaktformid

Superdav AI Agent v1.10.0 annab võimaluse luua kontaktforme otse chatti interface'i abil Site Builder agentiga. See võimalus võimaldab lisada täielikult toimivaid kontaktforme igale lehel ilma chatti lahkumata.

## Üldine ülevaade {#overview}

Site Builder kontaktformi loomise võime (`create_contact_form`) tuvastab automaatselt teie installitud forma plugin'i ja luu kontaktformi selle pluginil olevaid funktsioone kasutades. Toetatud forma pluginid on:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistent valib automaatselt teie sitesil parema saadaval olevat forma pluginit ja genereerib sellele sobiva kontaktformi.

## Kontaktformi loomine {#creating-a-contact-form}

Kontaktformi luomiseks Site Builderiga:

1. Avage **Gratis AI Agent** chatti paneel WordPress administratiivis juuril.
2. Liiga **Site Builder** agentile klikkides chatti ülekirjaga oleva agentikoonile.
3. Kirjuta välja kontaktformi, mida soovite luua. Näiteks:

   > "Lisa kontaktformi Contact lehele nime-, e-posti, sõnumi ja telefoninumbri väljadega."

   Või lihtsalt:

   > "Luu kontaktformi Contact lehel."

4. Site Builder genereerib kontaktformi ja annab tagasi lühikese kodu (shortcode), mida saab sisestada.

## Genereeritud koodi kasutamine {#using-the-generated-shortcode}

Kui Site Builder luub kontaktformi, annab see tagasi lühikese koodi (nt `[contact-form-7 id="123"]`). Saate:

1. **Sisestada selle lehele või sisse** — Kopya ja liiga lühike kood igale lehel või postile blokki redaktoriga või klassilise redaktoriga.
2. **Lisa selle Site Builderi abil** — Paluta Site Builderit, et lisa forma automaatselt konkreetsele lehele:

   > "Lisa kontaktformi Contact lehele."

3. **Käita seda šabloni** — Kui olete mugavates PHP-ga, saate ühtlustatud shortcode lisada teema šablonikust.

## Kontaktvormi kohandamine {#customizing-the-contact-form}

Pärast Site Builderi loomist kontaktvormi saate seda edasi kohandada:

### Chat-interfaalsiooni abil {#via-the-chat-interface}

Palge Site Builderit muudatama vormi:

> "Päivita kontaktvormi, et lisata teema valik ja teha sõnumukirja pakutamiseks nõudlikuks."

Site Builder paistab vormi ja tagasi annab uuendatud shortcode.

### Väljaoperaatorite administraatori interfaalsiooni abil {#via-the-form-plugins-admin-interface}

Saate ka vormi kohandada otse oma vormi pluginil olevates seadistustes:

1. Minenda WordPressi administratiorile **Contact Form 7** (või teie asitud vormi plugin) jaotustesse.
2. Leida Site Builderi loomise vorm.
3. Muuta vormi valikuid, valideerimise reegleid ja e-posti teavitusi vajadusel.

## Vormi pluginid ja compatibiliteet {#form-plugins-and-compatibility}

Site Builder tuvastab automaatselt, milline vormi plugin on teie sitesil asitud, ja kasutab seda kontaktvormi loomiseks. Kui asitud mitu vormi pluginit, Site Builder prioriseerib neid järgmisel järjekorras:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Kui et ühtest sellest pluginidest ei ole asitud, soovitat Site Builder installida ühe enne kontaktvormi loomist.

## E-posti teavitused {#email-notifications}

Site Builderi loomiset kontaktvormid on konfiguratsioonilt määratud saama e-posti teavitusi sitesi administraatorile oletuks. Saate kohandada vastavat e-posti aadressi ja teavitusjuhtise sõnumit:

1. Minenda oma vormi pluginil olevates administratiorite interfaalsjoni.
2. Leida Site Builderi loomise vorm.
3. Muuta e-posti teavituse seadistusi.

Detailsete juhiste jaoks viidake oma vormi pluginil oleva dokumentatsioonile:

- [Contact Form 7 E-posti teavitsemised](https://contactform7.com/docs/)
- [WPForms E-posti teavitsemised](https://wpforms.com/docs/)
- [Fluent Forms E-posti teavitsemised](https://fluentforms.com/docs/)
- [Gravity Forms E-posti teavitsemised](https://docs.gravityforms.com/)

## Näide kasutusejuhtisid {#example-use-cases}

### Väsimine kontaktvormi {#simple-contact-form}

> "Loo lihtne kontaktvorm, kus on nimekirjale, e-posti ja sõnumikvad."

### Mitapoolne formaar {#multi-step-form}

> "Loo kontaktvorm, millel on esimene samm kontaktinfo jaoks ja teine samm sõnumi ja lemmikühendusmeetodi jaoks."

### Formaar konditsiooniga loogika {#form-with-conditional-logic}

> "Loo kontaktvorm, mis näitab erinevaid valikuid sõltuvalt kasutaja valikust drop-down'ist."

### File uploadiga formaar {#form-with-file-upload}

> "Loo kontaktvorm, millel kasutajad saavad laadida faili või liitet."

:::note
Kontaktvormi loomine on võimalik Superdav AI Agent v1.10.0 ja hilisemates versioonides. Sissejuhtis (Site Builder) agent peab olema aktiivne selle funktsiooni kasutamiseks.
:::
