---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 introduserer **Plugin Builder & Sandbox System**, som lar AI-assistenten generere, aktivere og administrere WordPress-plugins på nettverket ditt – alt gjennom et trygt, isolert sandbox-miljø.

## Oversikt {#overview}

Plugin Builder gjør det mulig for AI-assistenten å skrive tilpassede WordPress-plugins basert på naturlig språk. Genererte plugins blir validert, lagret og aktivert inne i et sandbox-lag før de noen gang påvirker live-funksjonaliteten.

Bruksområder inkluderer:

- Generering av lette utility-plugins uten utviklerinvolvering.
- Prototyping av funksjoner som krever WordPress hooks eller custom post types.
- Opprettelse av kortvarige automatiseringsskript for batch-operasjoner.

## Generere et Plugin via AI {#generating-a-plugin-via-ai}

For å generere et plugin, åpne chatgrensesnittet til Gratis AI Agent og beskriv hva du trenger. For eksempel:

> "Lag et plugin som legger til en tilpasset admin-varsel på dashboardet."

AI-en vil:

1. Produsere plugin PHP-kode ved hjelp av strukturert kodegenerering.
2. Validere outputen for syntaksfeil og usikre mønstre.
3. Lagre det genererte pluginet i sandbox-lageret.
4. Returnere en bekreftelse med plugin-sluggen og en **Activate in Sandbox**-knapp.

Du kan forbedre resultatet ved å følge opp i samme samtale-tråd før du aktiverer det.

## Sandbox-aktivering {#sandbox-activation}

Å aktivere et generert plugin i sandbox er forskjellig fra å aktivere det på det live nettverket. Sandbox-miljøet:

- Kjør pluginet i et isolert WordPress-miljø (wp-env).
- Fanger opp eventuelle PHP-feil, advarsler eller hook-konflikter.
- Rapporterer aktiveringsresultatet tilbake i chat-grensesnittet.

For å aktivere et plugin i sandbox, klikk på **Activate in Sandbox**-knappen i AI-chat-svaret, eller bruk slash-kommandoen:

```
/activate-plugin <plugin-slug>
```

En statusmelding bekrefter om aktiveringen var vellykket eller mislykket. Ved feil vises feilloggen i chat-tråden.

## Administrere Genererte Plugins {#managing-generated-plugins}

Genererte plugins er listet under **Gratis AI Agent → Plugin Builder → Manage Plugins**. Fra denne skjermen kan du:

| Handling | Beskrivelse |
|---|---|
| **View source** | Gjennomgå hele plugin PHP-koden. |
| **Re-activate in sandbox** | Kjør sandbox-aktiveringssjekken på nytt. |
| **Install on network** | Utplassere pluginet til det live nettverket (krever manuell bekreftelse). |
| **Update** | Gi en ny versjon via AI-en, som erstatter eksisterende kode. |
| **Delete** | Fjerne pluginet fra sandbox-lageret. Deaktiverer det fra alle nettsteder først. |

:::warning
**Install on network** utplasserer det genererte pluginet til ditt live WordPress multisite. Gjennomgå plugin-koden før du fortsetter. Gratis AI Agent vil be om bekreftelse før den fullfører en live-installasjon.
:::

## Installere et Generert Plugin på Nettverket {#installing-a-generated-plugin-on-the-network}

Når du er fornøyd med et plugin i sandbox, kan du installere det på det live nettverket:

1. Gå til **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klikk på **Install on Network** ved siden av pluginet du vil utplassere.
3. Bekreft dialogboksen. Pluginet installeres i `wp-content/plugins/` og aktiveres på nettverksnivå.

Alternativt, bruk slash-kommandoen i chat-grensesnittet:

```
/install-plugin <plugin-slug>
```

## Plugin Oppdateringer {#plugin-updates}

For å oppdatere et generert plugin, beskriv endringen for AI-assistenten i en ny samtale:

> "Oppdater dashboard-notice pluginet slik at kun administratorer ser varselet."

AI-en genererer en ny versjon, som vises i sandbox sammen med den nåværende versjonen. Du gjennomgår differansen (diff) og bekrefter før oppdateringen blir anvendt.

## HookScanner Integrasjon {#hookscanner-integration}

Plugin Builder bruker en integrert **HookScanner** for å analysere hooks og filtre som registreres av hvert generert plugin. HookScanner-output vises i chat-svaret og inkluderer:

- Action hooks som er registrert (`add_action` kall).
- Filter hooks som er registrert (`add_filter` kall).
- Alle hooks funnet i plugin-avhengigheter (hopper over `vendor/` og `node_modules/` kataloger).

Dette hjelper deg å forstå et plugins atferd før du aktiverer det.

## Sikkerhetshensyn {#security-considerations}

- Genererte plugins lagres separat fra manuelt installerte plugins og er ikke tilgjengelige via standard WordPress plugin-administrasjonsskjerm før du eksplisitt installerer dem på nettverket.
- Sandbox-miljøet bruker path validation for å forhindre directory traversal når det skriver plugin-filer.
- Plugins med farlige funksjonskall (f.eks. `eval`, `exec`, `system`) blir flagget under valideringen og vil ikke bli aktivert.
