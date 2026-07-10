---
title: 'Lektion 3: Ställa in ditt nätverk'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lektion 3: Sätta upp ditt nätverk {#lesson-3-setting-up-your-network}

Nu är det dags att bygga. I denna lektion installerar du Ultimate Multisite och konfigurerar grunden för FitSite-nätverket. Varje beslut här görs med fitnessbranschen i åtanke.

## Var vi slutade {#where-we-left-off}

Vi valde fitnessstudior som vår nisch och validerade möjligheten. Nu förvandlar vi den idén till en fungerande plattform.

## Välja hosting {#choosing-your-hosting}

Ditt val av hosting är viktigare för en nischplattform än för en enskild webbplats. Du hostar inte bara en sida – du hostar ett nätverk som kommer att växa till dussintals eller hundratals sidor.

### Vad du ska leta efter {#what-to-look-for}

- **WordPress Multisite-stöd**: Inte alla hosts hanterar multisite bra
- **Wildcard SSL**: Avgörande för nätverk baserade på underdomäner
- **Skalbara resurser**: Du behöver utrymme att växa utan att behöva migrera
- **Ultimate Multisite-integration**: Automatisk domänmappning och SSL sparar betydande driftarbete

### Rekommenderat tillvägagångssätt {#recommended-approach}

Välj en host från listan över [Kompatibla leverantörer](/user-guide/host-integrations/closte). Dessa har testats med Ultimate Multisite och erbjuder de integrationer du behöver för domänmappning och SSL-automatisering.

För FitSite kommer vi att använda en underdomänkonfiguration. Det innebär att kundernas webbplatser initialt kommer att visas som `studionamn.fitsite.com` innan de eventuellt mappar sin egen domän.

## Installera WordPress Multisite {#installing-wordpress-multisite}

Om du ännu inte har en WordPress Multisite-installation:

1. Installera WordPress hos din hostingleverantör
2. Följ guiden [Hur du installerar WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Välj **underdomän**-konfiguration när du uppmanas

:::tip Varför underdomäner?
Underdomäner ger varje kundsida sin egen unika adress (`studio.fitsite.com`) istället för en sökväg (`fitsite.com/studio`). Detta är mer professionellt för dina kunder och undviker konflikter i permalänkar. Se [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) för en detaljerad jämförelse.
:::

## Installera Ultimate Multisite {#installing-ultimate-multisite}

Följ guiden [Installera Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) för att:

1. Ladda upp och aktivera pluginet över hela nätverket
2. Kör [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Under setup wizard, tänk på FitSite-nischen:

- **Valuta**: Ställ in valutan som dina fitnessstudiekunder använder
- **Företagsnamn**: "FitSite" (eller ditt valda varumärkesnamn)
- **Företagets logotyp**: Ladda upp ditt varumärkeslogotyp – detta visas på fakturor och e-postmeddelanden

## Konfigurera för fitnessnischen {#configuring-for-the-fitness-niche}

Med Ultimate Multisite installerat, gör dessa nischspecifika konfigurationsval:

### Allmänna inställningar {#general-settings}

Gå till **Ultimate Multisite > Settings** och konfigurera:

- **Webbplatsnamn**: FitSite
- **Standardroll**: Administrator – fitnessstudieägare behöver full kontroll över sitt innehåll
- **Registrering**: Aktivera användarregistrering så att studieägare kan registrera sig själva

### E-postkonfiguration {#email-configuration}

Dina systeme-e-postmeddelanden ska tala språket i din nisch. Gå till **Ultimate Multisite > Settings > Emails** och anpassa:

- Ersätt det generiska språket "din nya webbplats" med fitnessspecifika meddelanden
- Exempel på välkomstämne: "Din fitnessstudie-webbplats är klar"
- Exempel på välkomsttext: Hänvisa till deras studio, klasser och hur de kommer igång med sin fitnesswebbplats

Vi kommer att förfina dessa ytterligare i Lektion 8 (Kundonboarding), men att sätta tonen nu säkerställer att även tidiga testregistreringar känns nischspecifika.

### Domänkonfiguration {#domain-configuration}

Om du använder en kompatibel hostingleverantör, konfigurera domänmappningen nu:

1. Gå till **Ultimate Multisite > Settings > Domain Mapping**
2. Följ integrationsguiden för din specifika host
3. Testa att nya subsites får SSL automatiskt

Detta säkerställer att när vi börjar skapa mallar och testwebbplatser i nästa lektion, fungerar allt från början till slutet.

## FitSite-nätverket hittills {#the-fitsite-network-so-far}

I slutet av denna lektion har du:

```
FitSite Network
├── WordPress Multisite (underdomänläge)
├── Ultimate Multisite (installerat och konfigurerat)
├── Hosting med wildcard SSL
├── Domänmappning konfigurerad
├── Nischspecifika e-postmallar (initiala)
└── Redo för webbplatsmallar (nästa lektion)
```

## Vad vi byggde i denna lektion {#what-we-built-this-lesson}

- **En fungerande WordPress Multisite**-installation i underdomänläge
- **Ultimate Multisite installerat** och konfigurerat med FitSite-varumärket
- **Hosting och SSL** uppsatt för ett växande nätverk
- **Domänmappning** konfigurerad för din hostingleverantör
- **Nischspecisk e-postton** etablerad från dag ett

---

**Nästa:** [Lektion 4: Bygga nischmallar](lesson-4-templates) – där vi skapar webbplatsmallar som fitnessstudieägare faktiskt kommer att vilja använda.
