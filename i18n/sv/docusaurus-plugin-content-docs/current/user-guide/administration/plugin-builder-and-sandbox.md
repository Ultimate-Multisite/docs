---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 introducerar **Plugin Builder & Sandbox System**, som låter AI-assistenten generera, aktivera och hantera WordPress plugins på ditt nätverk – allt via en säker, isolerad sandbox-miljö.

## Översikt {#overview}

Plugin Builder gör det möjligt för AI-assistenten att skriva anpassade WordPress plugins baserat på naturligt språk. De genererade pluginsen valideras, lagras och aktiveras i ett sandbox-lager innan de någonsin påverkar live-sidans funktionalitet.

Användningsområden inkluderar:

- Att generera lätta utility-plugins utan utvecklarinblandning.
- Att prototypa funktioner som kräver WordPress hooks eller custom post types.
- Att skapa kortlivade automatiseringsskript för batch-operationer.

## Generera ett Plugin via AI {#generating-a-plugin-via-ai}

För att generera ett plugin, öppna chatgränssnittet för Gratis AI Agent och beskriv vad du behöver. Till exempel:

> "Skapa ett plugin som lägger till ett anpassat admin-meddelande på dashboarden."

AI:n kommer att:

1. Producera plugin-PHP-koden med hjälp av strukturerad kodgenerering.
2. Validera outputen för syntaxfel och osäkra mönster.
3. Spara det genererade pluginet i sandbox-lagret.
4. Returnera en bekräftelse med plugin-sluggen och en **Activate in Sandbox**-knapp.

Du kan förfina resultatet genom att följa upp i samma konversationstråd innan du aktiverar det.

## Sandbox-aktivering {#sandbox-activation}

Att aktivera ett genererat plugin i sandboxen skiljer sig från att aktivera det på det live nätverket. Sandboxen:

- Kör pluginet i en isolerad WordPress-miljö (wp-env).
- Fångar alla PHP-fel, varningar eller hook-konflikter.
- Rapporterar aktiveringsresultatet tillbaka i chatgränssnittet.

För att aktivera ett plugin i sandboxen, klicka på knappen **Activate in Sandbox** i AI-chatsvaret, eller använd slash-kommandot:

```
/activate-plugin <plugin-slug>
```

Ett statusmeddelande bekräftar om aktiveringen lyckades eller misslyckades. Vid misslyckande visas felloggen i chattråden.

## Hantera Genererade Plugins {#managing-generated-plugins}

Genererade plugins listas under **Gratis AI Agent → Plugin Builder → Manage Plugins**. Från denna skärm kan du:

| Åtgärd | Beskrivning |
|---|---|
| **View source** | Granska hela plugin-PHP-koden. |
| **Re-activate in sandbox** | Kör sandbox-aktiveringskontrollen igen. |
| **Install on network** | Utplanta pluginet till det live nätverket (kräver manuell bekräftelse). |
| **Update** | Tillhandahålla en ny version via AI:n, vilket ersätter befintlig kod. |
| **Delete** | Ta bort pluginet från sandbox-lagret. Avaktiverar det från alla sidor först. |

:::warning
**Install on network** utplånar det genererade pluginet till ditt live WordPress multisite. Granska plugin-koden innan du går vidare. Gratis AI Agent kommer att be om bekräftelse innan en live-installation slutförs.
:::

## Installera ett Genererat Plugin på Nätverket {#installing-a-generated-plugin-on-the-network}

När du är nöjd med ett plugin i sandboxen, kan du installera det på det live nätverket:

1. Gå till **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klicka på **Install on Network** bredvid det plugin du vill utplanta.
3. Bekräfta dialogrutan. Pluginet installeras i `wp-content/plugins/` och aktiveras på nätverksnivå.

Alternativt, använd slash-kommandot i chatgränssnittet:

```
/install-plugin <plugin-slug>
```

## Pluginuppdateringar {#plugin-updates}

För att uppdatera ett genererat plugin, beskriv ändringen för AI-assistenten i ett nytt samtal:

> "Uppdatera dashboard-notice-pluginet så att meddelandet endast visas för administratörer."

AI:n genererar en ny version, som dyker upp i sandboxen bredvid den nuvarande versionen. Du granskar diffen och bekräftar innan uppdateringen tillämpas.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder använder en integrerad **HookScanner** för att analysera hooks och filters som registreras av varje genererat plugin. HookScanner-output visas i chatsvaret och inkluderar:

- Action hooks som är registrerade (`add_action` anrop).
- Filter hooks som är registrerade (`add_filter` anrop).
- Alla hooks som hittas i pluginberoenden (hoppar över katalogerna `vendor/` och `node_modules/`).

Detta hjälper dig att förstå ett plugins beteende innan du aktiverar det.

## Säkerhetsöverväganden {#security-considerations}

- Genererade plugins lagras separat från manuellt installerade plugins och är inte tillgängliga via standard WordPress plugin management screen förrän du explicit installerar dem på nätverket.
- Sandboxen använder path validation för att förhindra directory traversal när den skriver plugin-filer.
- Plugins med farliga funktionsanrop (t.ex. `eval`, `exec`, `system`) flaggas under valideringen och kommer inte att aktiveras.
