---
title: Avslag på Site Builder-läge
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Borttagande av Site Builder-läget

**Site Builder mode har tagits bort i Superdav AI Agent v1.12.0.** Om du använde Site Builder mode, bör du migrera till **Setup Assistant agent** för att skapa teman och ställa in webbplatsen.

## Vad hände?

### Site Builder Mode (Gammalt)

Site Builder mode var ett verktygsliknande gränssnitt för:

- Skapa webbplatser från mallar
- Konfigurera grundläggande inställningar
- Välja ett tema
- Ställa in initialt innehåll

### Vad ersatte det?

**Setup Assistant agent** hanterar nu all Site Builder-funktionalitet med:

- Mer flexibel, agentstyrd inställning
- Bättre temananpassningsalternativ
- Integration med Theme Builder onboarding
- Ett bestående `site_brief`-minne för framtida sessioner

## Om du använde Site Builder Mode

### Dina webbplatser är säkra

- Befintliga webbplatser skapade med Site Builder mode fortsätter att fungera
- Ingen förlust av data eller störning av webbplatsen
- Du kan fortsätta hantera dina webbplatser som vanligt

### Migrera till Setup Assistant Agent

För ny webbplatsuppsättning eller temaanpassningar, använd Setup Assistant agent:

```
"Help me set up a new site"
```

eller

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent ger samma funktionalitet men med mer flexibilitet.

## Jämförelse: Site Builder vs. Setup Assistant

| Funktion | Site Builder (Borttaget) | Setup Assistant (Nytt) |
|---------|----------------------|----------------------|
| Uppställningsmetod | Wizard-formulär | Agentkonversation |
| Temaval | Fördefinierade mallar | Anpassad generering |
| Anpassning | Begränsade alternativ | Fullt designsystem |
| Site brief | Sparas inte | Bestående minne |
| Framtida sessioner | Upprepar uppsättning | Använder sparad site_brief |
| Flexibilitet | Fast arbetsflöde | Adaptiv konversation |

## Migrering till Setup Assistant Agent

### För nya webbplatser

Istället för att använda Site Builder mode:

1. Begär: "Help me set up a new site"
2. Setup Assistant agent kommer att guida dig genom:
   - Webbplatsens syfte och mål
   - Målgrupp
   - Varumärkesidentitet
   - Tema­generering
   - Initial konfiguration

### För befintliga webbplatser

Om du har en befintlig webbplats från Site Builder mode:

1. Du kan fortsätta använda den som den är
2. För att uppdatera temat, begär: "Redesign my site"
3. Setup Assistant agent hjälper dig att skapa ett nytt tema
4. Din webbplatsdata förblir oförändrad

### För temaanpassningar

Istället för Site Builder modes temaval:

1. Begär: "Change my theme"
2. Setup Assistant agent kommer att:
   - Fråga om dina designpreferenser
   - Generera ett anpassat tema
   - Aktivera det på din webbplats

## Viktiga skillnader

### Site Builder Mode

```
1. Välj en mall
2. Välj ett tema
3. Konfigurera grundläggande inställningar
4. Klart
```

### Setup Assistant Agent

```
1. Beskriv webbplatsens syfte
2. Definiera målgruppen
3. Välj designpreferenser
4. Agenten genererar ett anpassat tema
5. Agenten aktiverar temat
6. Site brief sparas för framtida sessioner
```

## Fördelar med Setup Assistant Agent

### Mer flexibelt

- Beskriv din webbplats i naturligt språk
- Få anpassade rekommendationer
- Anpassar sig efter dina specifika behov

### Bättre anpassning

- Anpassad tema­generering
- Beslut baserade på designsystem
- Bestående design-tokens

### Bestående minne

- Din `site_brief` sparas
- Framtida agenter förstår din webbplats
- Ingen behöver upprepa uppsättningsinformation

### Integrerat arbetsflöde

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Allt fungerar sömlöst tillsammans

## Felsökning

### Jag hittar inte Site Builder mode

Site Builder mode har tagits bort. Använd Setup Assistant agent istället:

```
"Help me set up a new site"
```

### Jag vill återskapa en webbplats från Site Builder

Du kan återskapa den med Setup Assistant agent:

1. Begär: "Help me set up a new site"
2. Beskriv ditt ursprungliga webbplats syfte och design
3. Agenten kommer att generera ett liknande tema
4. Din `site_brief` kommer att sparas för framtida referens

### Min befintliga Site Builder-webbplats fungerar inte

Befintliga webbplatser skapade med Site Builder mode fortsätter att fungera. Om du upplever problem:

1. Kontrollera att ditt tema fortfarande är aktivt
2. Verifiera att dina plugins är aktiverade
3. Kontrollera WordPress felloggar
4. Kontakta support om problemen kvarstår

### Kan jag fortfarande använda mina gamla Site Builder-mallar?

Site Builder-mallar finns inte längre. Men:

- Dina befintliga webbplatser fortsätter att fungera
- Du kan återskapa liknande webbplatser med Setup Assistant agent
- Setup Assistant agent ger fler anpassningsalternativ

## Nästa steg

1. **För nya webbplatser**: Använd Setup Assistant agent
2. **För befintliga webbplatser**: Fortsätt använda dem som de är
3. **För temaanpassningar**: Begär hjälp från Setup Assistant agent
4. **För designförfining**: Använd Design System Aesthetics skill

## Relaterade ämnen

- **Theme Builder Onboarding**: Guidad uppsättning för anpassade teman
- **Setup Assistant Agent**: Agentstyrd webbplatsuppsättning
- **Site Specification Skill**: Definiera webbplatsens mål och målgrupp
- **Design System Aesthetics Skill**: Förfina webbplatsens visuella identitet
