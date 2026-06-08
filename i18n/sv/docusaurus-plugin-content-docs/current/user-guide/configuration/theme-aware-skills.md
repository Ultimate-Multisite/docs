---
title: Temabevigande färdigheter
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Temabevigade färdigheter

Superdav AI Agent v1.10.0 släpper fyra nya temabevigade inbyggda färdigheter som automatiskt anpassar sig till det WordPress-tema du använder. Dessa färdigheter ger specialiserad vägledning och kapacitet anpassad efter ditt temas arkitektur och funktioner.

## Vad är temabevigade färdigheter?

Temabevigade färdigheter är förkonfigurerade kunskapsdatabaser och verktyg som AI-assistenten automatiskt väljer baserat på det WordPress-tema som för närvarande är aktivt på din webbplats. När du byter tema uppdateras assistentens tillgängliga färdigheter automatiskt – ingen manuell konfiguration krävs.

Varje färdighet inkluderar:

- **Temaspecifik dokumentation** — vägledning om hur man använder och anpassar temat
- **Block- och mönsterreferenser** — tillgängliga block, mönster och designalternativ
- **Anpassningsexempel** — kodsnuttar och konfigurationsmönster för vanliga uppgifter
- **Bästa praxis** — rekommendationer för tematets arkitektur och arbetsflöde

## Tillgängliga temabevigade färdigheter

### Blockteman

**Gäller för:** Teman som använder WordPress blockbaserade (Full Site Editing) arkitektur.

Blockteman-färdigheten ger vägledning om:

- Skapa och redigera mallar med hjälp av blockredigeraren
- Arbeta med blockmönster och återanvändbara block
- Anpassa globala stilar och `theme.json`-inställningar
- Använda temablock och variationer
- Bygga anpassade blockmönster för din webbplats

**Aktiveras automatiskt när:** Ditt aktiva tema är ett blocktema (stöder funktionen `block-templates`).

### Klassiska teman

**Gäller för:** Traditionella WordPress-teman som använder PHP-mallar och den klassiska redigeraren.

Klassiska teman-färdigheten ger vägledning om:

- Arbeta med PHP-mallfiler och hooks
- Anpassa tematets utseende via Customizer
- Använda widgetområden och sidofält
- Modifiera CSS och utveckla med barnteman (child theme)
- Förstå tematshierarki och malltaggar

**Aktiveras automatiskt när:** Ditt aktiva tema är ett klassiskt (icke-block) tema.

### Kadence Blocks

**Gäller för:** Webbplatser som använder Kadence Blocks-plugin för avancerad blockbaserad design.

Kadence Blocks-färdigheten ger vägledning om:

- Använda Kadences avancerade blockbibliotek (Hero, Testimonials, Pricing, etc.)
- Konfigurera Kadence blockinställningar och responsiva alternativ
- Bygga anpassade layouter med Kadences rutnät- och containermblock
- Integrera Kadence blocks med ditt tema
- Utnyttja Kadences designsystem och förinställningar

**Aktiveras automatiskt när:** Kadence Blocks-plugin är aktivt på din webbplats.

### Kadence Theme

**Gäller för:** Webbplatser som använder Kadence-temat för blockbaserad design och anpassning.

Kadence Theme-färdigheten ger vägledning om:

- Anpassa Kadence-temat via globala stilar och `theme.json`
- Använda Kadences inbyggda blockmönster och mallar
- Konfigurera Kadence tema-inställningar och alternativ
- Bygga anpassade designer med Kadences designsystem
- Integrera Kadence med populära plugins och verktyg

**Aktiveras automatiskt när:** Kadence-temat är ditt aktiva tema.

## Hur färdigheter väljs

Assistenten upptäcker automatiskt ditt aktiva tema och installerade plugins i varje meddelande. Om en matchande temabevigad färdighet finns tillgänglig laddas den automatiskt in i assistentens kontext. Du behöver inte manuellt aktivera eller byta färdigheter.

### Flera färdigheter

Om flera färdigheter gäller för din webbplats (till exempel om du har både Kadence Blocks och Kadence Theme aktiva) har assistenten tillgång till alla tillämpliga färdigheter och kan hänvisa till vägledning från var och en.

### Byte av teman

När du byter ditt aktiva tema uppdateras assistentens tillgängliga färdigheter automatiskt i nästa meddelande. Till exempel:

1. Du använder ett blocktema med **Blockteman**-färdigheten aktiv.
2. Du byter till ett klassiskt tema.
3. I ditt nästa meddelande laddas **Klassiska teman**-färdigheten automatiskt, och **Blockteman**-färdigheten är inte längre tillgänglig.

## Använda temabevigade färdigheter

För att utnyttja en temabevigad färdighet, beskriv helt enkelt vad du vill göra i chattgränssnittet. Assistenten kommer automatiskt att hänvisa till den lämpliga färdighetens vägledning.

### Exempelförfrågningar

**För Blockteman:**
> "Skapa en hero-sektion med en bakgrundsbild och centrerad text med hjälp av blockmönster."

**För Klassiska teman:**
> "Lägg till ett anpassat widgetområde i sidofältet med hjälp av ett barntema."

**För Kadence Blocks:**
> "Bygg ett vittnesmålsektion med hjälp av Kadence Testimonials-blocket."

**För Kadence Theme:**
> "Anpassa sidhuvudets layout och navigationsmenystil."

Assistenten kommer att tillhandahålla temaspecifik vägledning och kodexempel anpassade till ditt aktiva tema och dina plugins.

:::note
Temabevigade färdigheter är automatiskt tillgängliga i Superdav AI Agent v1.10.0 och senare. Ingen ytterligare uppsättning eller konfiguration krävs.
:::
