---
title: 'Lektion 7: Gör det till ditt eget'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lektion 7: Gör det till ditt eget {#lesson-7-making-it-yours}

Dina kunder får aldrig känna att de använder "någon WordPress-plugin". De ska känna att de använder FitSite – en plattform byggd för deras bransch. Den här lektionen handlar om varumärkesbyggande (branding), white-labeling och hur man får plattformen att kännas som en egen produkt.

## Var vi slutade {#where-we-left-off}

FitSite har nu ett fungerande kassanflöde som tar fitnessstudieägare från planval till en live-sida. Nu ska vi få hela upplevelsen att kännas som en sammanhängande, varumärkesbyggd produkt.

## Din plattformdomän {#your-platform-domain}

Grundbulten i ditt varumärke är din domän. För FitSite:

- **Huvuddomän**: `fitsite.com` (din marknadsföringssida och nätverksrot)
- **Kundsidor**: `studionamn.fitsite.com` (underdomäner)
- **Anpassade domäner**: Kunder på Growth- och Pro-planer kan koppla in sin egen domän

### Inställning av din domän {#setting-up-your-domain}

1. Registrera din plattformdomän
2. Pekar den till din hostingleverantör
3. Konfigurera wildcard DNS (`*.fitsite.com`) för kundunderdomäner
4. Se till att wildcard SSL är aktiverat

Se [Hur du konfigurerar domänmappning](/user-guide/domain-mapping/how-to-configure-domain-mapping) för detaljerade instruktioner.

## White-labeling av admin-upplevelsen {#white-labeling-the-admin-experience}

När en fitnessstudieägare loggar in på sin sidans dashboard ska de se ditt varumärke, inte WordPress eller Ultimate Multisite-varumärket.

### Anpassad inloggningssida {#custom-login-page}

Anpassa WordPress-inloggningssidan så att den visar:

- Ditt FitSite-logotyp
- Bakgrundsbilder som passar inom fitness
- Dina varumärkesfärger

### Varumärkesbyggande i dashboarden {#dashboard-branding}

Använd addonet [Admin Page Creator](/addons/admin-page-creator) eller anpassad CSS för att:

- Ersätta WordPress-logotypen med ditt FitSite-logotyp
- Anpassa admin-färgschemat så att det matchar ditt varumärke
- Lägga till en anpassad widget i dashboarden med fitnessspecifika snabblänkar och hjälpresurser

### Anpassade admin-sidor {#custom-admin-pages}

Överväg att skapa anpassade admin-sidor som lyfter fram de mest relevanta åtgärderna för fitnessstudieägare:

- "Redigera din klasschema"
- "Uppdatera tränarprofiler"
- "Visa din sida"

Detta minskar inlärningskurvan genom att placera nischspecifika åtgärder i fokus istället för att begrava dem i standardmenyn i WordPress.

## Varumärkesbyggande i kommunikationen {#branding-your-communications}

Varje e-post, faktura och notifikation ska förstärka ditt varumärke.

### System-e-postmeddelanden {#system-emails}

Gå till **Ultimate Multisite > Settings > Emails** och anpassa alla system-e-postmeddelanden:

- **Avsändarnamn**: FitSite
- **Avsändare-e-post**: hello@fitsite.com
- **E-postmallar**: Använd dina varumärkesfärger och logotyp
- **Språk**: Fitnessspecifikt genomgående

Viktiga e-postmeddelanden att anpassa:

| E-post | Generisk version | FitSite-version |
|-------|----------------|-----------------|
| Välkomnande | "Din nya sida är redo" | "Din fitnessstudie-webbplats är live" |
| Betalningskvitto | "Betalning mottagen" | "FitSite-prenumerationsbetalning bekräftad" |
| Testperiod tar slut | "Din testperiod går ut snart" | "Din FitSite-testperiod går ut om 3 dagar – håll din studie-webbplats live" |

### Fakturor {#invoices}

Anpassa fakturmallarna med:

- Ditt FitSite-logotyp och varumärkesfärger
- Dina företagsuppgifter
- Fitnessspecifika produktnamn (inte generiska plan-ID:n)

## Kundsynlig sida {#the-customer-facing-site}

Din huvuddomän (`fitsite.com`) behöver en marknadsföringssida som säljer plattformen. Detta är separat från Ultimate Multisite-nätverksadmin – det är företagets offentliga ansikte.

Viktiga sidor:

- **Hem**: Tydligt värdeerbjudande för fitnessföretag
- **Funktioner**: Vad FitSite gör, i fitnesstermer
- **Prissättning**: Dina tre planer med nischspecifika jämförelser av funktioner
- **Exempel**: Visa sidor byggda på plattformen
- **Registrera dig**: Länkar till ditt kassanformulär

:::tip Din marknadsföringssida kan vara en nätverksplats
Skapa din marknadsföringssida som en sida inom ditt eget nätverk. Detta låter dig hantera den från samma dashboard och visar dina egna plattformsfunktioner.
:::

## Anpassad domän för kunder {#custom-domain-for-customers}

För kunder på planer som inkluderar anpassade domäner, dokumentera processen tydligt:

1. Kunden registrerar eller överför sin domän till en registrar
2. Kunden uppdaterar DNS för att peka till din plattform (tillhandahåll exakta poster)
3. Ultimate Multisite hanterar domänmappningen och SSL

Skapa en hjälpartikel eller en kunskapsbaspost specifikt för denna process, skriven för icke-tekniska fitnessstudieägare.

## FitSite-nätverket hittills {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (underdomänläge)
├── Ultimate Multisite (konfigurerad + varumärkesbyggd)
├── Plattformdomän (fitsite.com + wildcard SSL)
├── Sidmallar (Studio Essential, Gym Pro, Fitness Chain)
├── Produkter (Starter, Growth, Pro + Order Bumps)
├── Kassanflöde (nischspecifikt, testat)
├── Varumärkesbyggande
│   ├── Anpassad inloggningssida
│   ├── Varumärkesbyggd admin-dashboard
│   ├── Nischspecifika system-e-postmeddelanden
│   ├── Varumärkesbyggda fakturor
│   └── Marknadsföringssida på fitsite.com
└── Redo för onboarding-flöde (nästa lektion)
```

## Vad vi byggde i denna lektion {#what-we-built-this-lesson}

- **Plattformdomän och DNS** konfigurerade för en varumärkesbyggd upplevelse
- **White-labeled admin** med FitSite-varumärkesbyggande genomgående
- **Anpassad kommunikation** – e-postmeddelanden, fakturor och notifikationer är alla varumärkesbyggda
- **En marknadsföringssida** som säljer FitSite till fitnessstudieägare
- **Dokumentation för anpassad domän** för kunder som vill ha sin egen domän

---

**Nästa:** [Lektion 8: Kundonboarding](lesson-8-onboarding) – vi designar upplevelsen som förvandlar en ny registrering till en aktiv, nöjd kund.
