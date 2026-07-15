---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introducerer **Plugin Builder & Sandbox Systemet**, som lader AI-assistenten generere, aktivere og administrere WordPress plugins på dit netværk – alt gennem et sikkert, isoleret sandbox miljø.

## Oversigt {#overview}

Plugin Builder gør det muligt for AI-assistenten at skrive specialbyggede WordPress plugins som svar på naturligt sproglige anmodninger. Genererede plugins valideres, gemmes og aktiveres inde i et sandbox lag, før de overhovedet påvirker funktionaliteten på en live side.

Brugsscenarier inkluderer:

- Generering af lette hjælpeplugins uden udviklerinddragelse.
- Prototyping af funktioner, der kræver WordPress hooks eller custom post types.
- Oprettelse af kortlivede automatisering scripts til batch-operationer.

## Generering af en Plugin via AI {#generating-a-plugin-via-ai}

For at generere en plugin skal du åbne Gratis AI Agent chatgrænsefladen og beskrive, hvad du har brug for. For eksempel:

> "Opret en plugin, der tilføjer en custom admin notice på dashboardet."

AI'en vil:

1. Produce plugin PHP kode ved hjælp af struktureret kode-generering.
2. Validere outputtet for syntaksfejl og usikre mønstre.
3. Gemme den genererede plugin i sandbox store.
4. Returnere en bekræftelse med plugin slug'en og en **Activate in Sandbox** knap.

Du kan finjustere resultatet ved at følge op i samme samtale tråd, før du aktiverer.

## Sandbox Aktivering {#sandbox-activation}

Aktivering af en genereret plugin i sandboksen er forskellig fra aktivering på det live netværk. Sandboksen:

- Kører plugin'et i et isoleret WordPress miljø (wp-env).
- Fanger eventuelle PHP fejl, advarsler eller hook konflikter.
- Rapporterer resultatet af aktiveringen tilbage i chatgrænsefladen.

For at aktivere en plugin i sandboksen skal du klikke på knappen **Activate in Sandbox** i AI'ens svar, eller bruge kommandoen:

```
/activate-plugin <plugin-slug>
```

En statusbeskeden bekræfter, om aktiveringen er lykkedes eller fejlede. Ved fejl vises fejlloggen i chattråden.

## Administrering af genererede plugins {#managing-generated-plugins}

Genererede plugins findes under **Gratis AI Agent → Plugin Builder → Manage Plugins**. Fra denne skærm kan du:

| Handling | Beskrivelse |
|---|---|
| **Se kildekode** | Gennemgå hele plugin PHP-koden. |
| **Genaktiver i sandbox** | Genkør aktiveringschecket i sandboksen. |
| **Installer på netværket** | Udrul plugin'et til dit live multisite (kræver manuel bekræftelse). |
| **Opdater** | Giv en ny version via AI'en, der erstatter den eksisterende kode. |
| **Slet** | Fjern plugin'et fra sandboksen. Deaktiver det først på alle sider. |

:::warning
**Installer på netværket** udruller det genererede plugin til dit live WordPress multisite. Gennemgå plugin-koden, før du fortsætter. Gratis AI Agent vil bede om bekræftelse, før en live-installation fuldføres.
:::

## Installation af et genereret plugin på netværket {#installing-a-generated-plugin-on-the-network}

Når du er tilfreds med et plugin i sandboksen, kan du installere det på det live netværk:

1. Gå til **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik på **Install on Network** ved siden af det plugin, du vil udrulle.
3. Bekræft dialogen. Plugin'et installeres i `wp-content/plugins/` og aktiveres på netværket.

Alternativt kan du bruge slash-kommandoen i chatgrænsefladen:

```
/install-plugin <plugin-slug>
```

## Plugin opdateringer {#plugin-updates}

For at opdatere et genereret plugin, beskriv ændringen til AI-assistenten i en ny samtale:

> "Opdater dashboard-notice plugin'et så det kun viser meddelelsen til administratorer."

AI'en genererer en ny version, som vises i sandboksen sammen med den nuværende version. Du gennemgår diff'en og bekræfter før opdateringen påføres.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder bruger en integreret **HookScanner** til at analysere de hooks og filters, der er registreret af hver genereret plugin. Outputtet fra HookScanner vises i chatresponsen og inkluderer:

- Handlingshooks (registreret med `add_action` kald).
- Filterhooks (registreret med `add_filter` kald).
- Eventuelle hooks fundet i plugin-afhængigheder (mapper som `vendor/` og `node_modules/` ignoreres).

Dette hjælper dig med at forstå en plugins adfærd, før du aktiverer den.

## Sikkerhedsovervejelser {#security-considerations}

- Genererede plugins gemmes separat fra manuelt installerede plugins og er ikke tilgængelige via standard WordPress plugin management-skærmen, medmindre du eksplicit installerer dem på netværket.
- Sandboksen bruger sti-validering for at forhindre katalogtraversering, når man skriver plugin-filer.
- Plugins med farlige funktionskald (f.eks. `eval`, `exec`, `system`) markeres under valideringen og vil ikke blive aktiveret.
