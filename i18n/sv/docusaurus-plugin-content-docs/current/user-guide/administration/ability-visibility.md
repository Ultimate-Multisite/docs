---
title: Förmågevisibilitet
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Synlighet för förmågor (Ability Visibility)

Superdav AI Agent v1.12.0 introducerar kontrollerna **Synlighet för förmågor** (Ability Visibility), som styr vilka ytor som exponerar varje förmåga. Detta gör det möjligt för administratörer att finjustera vilka agentkapaciteter som är tillgängliga via REST API:er, MCP-servrar, WooCommerce-integrationer och andra gränssnitt.

## Vad är Synlighet för förmågor? {#what-is-ability-visibility}

Synlighet för förmågor är ett behörighetssystem som kontrollerar:

- **Vilka förmågor** som är tillgängliga för agenterna
- **Var de exponeras** (REST API, MCP, WooCommerce, etc.)
- **Vem som kan komma åt dem** (via partner-tillåtelse-listor)
- **Hur de klassificeras** (erkända vs. oklassificerade)

Varje förmåga har en synlighetsnivå som bestämmer dess tillgänglighet över olika ytor.

## Synlighetsnivåer {#visibility-levels}

### Offentlig (Public) {#public}

**Offentliga förmågor** är tillgängliga överallt:

- REST API-slutpunkter
- MCP-servrar
- WooCommerce-integrationer
- Chattgränssnitt
- Alla användarroller (med lämpliga behörigheter)

Exempel: `scaffold-block-theme`, `activate-theme`, `send-email`

### Intern (Internal) {#internal}

**Interna förmågor** är endast tillgängliga inom din WordPress-installation:

- Chattgränssnitt
- Adminpaneler
- Endast för inloggade användare
- Exponeras inte via REST API eller externa integrationer

Exempel: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partnerförmågor** är endast tillgängliga för vitlistade partners:

- Kräver explicit listning i partner-tillåtelse-listan
- Tillgängliga via REST API med partneruppgifter
- Tillgängliga via MCP med partnerautentisering
- Inte tillgängliga för vanliga användare

Exempel: `bulk-import-users`, `modify-billing`, `access-analytics`

### Inaktiverad (Disabled) {#disabled}

**Inaktiverade förmågor** är inte tillgängliga någonstans:

- Exponeras inte via någon yta
- Inte tillgängliga i chatten
- Inte tillgängliga i adminpaneler
- Användbart för inaktuella eller experimentella förmågor

## Hantering av Synlighet för förmågor {#managing-ability-visibility}

### Åtkomst till inställningar för Synlighet för förmågor {#accessing-ability-visibility-settings}

1. Gå till **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klicka på fliken **Abilities**
3. Du ser en lista över alla installerade förmågor med deras synlighetsnivåer

### Visa förmåga-detaljer {#viewing-ability-details}

Klicka på en förmåga för att se:

- **Name**: Förmågan identifierare
- **Description**: Vad förmågan gör
- **Current visibility**: Offentlig, Intern, Partner eller Inaktiverad
- **Partner allow-list**: Vilka partners som kan komma åt (om Partner-synlighet)
- **Last updated**: När synligheten senast ändrades
- **Status**: Erkänd eller Oklassificerad

### Ändra synlighetsnivåer {#changing-visibility-levels}

För att ändra en förmågas synlighet:

1. Klicka på förmågan i listan
2. Välj en ny synlighetsnivå från rullgardinsmenyn
3. Om du väljer "Partner", lägg till partneridentifierare i tillåtelse-listan
4. Klicka på **Save**

Exempel:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Massoperationer {#bulk-operations}

För att ändra synligheten för flera förmågor:

1. Kryssa i rutorna bredvid förmågorna
2. Välj en ny synlighetsnivå från rullgardinsmenyn för massåtgärder
3. Klicka på **Apply**

## Partner-tillåtelse-lista (Partner Allow-List) {#partner-allow-list}

**Partner-tillåtelse-listan** kontrollerar vilka externa partners som kan komma åt förmågor på Partner-nivå.

### Lägga till partners {#adding-partners}

1. Gå till **Superdav AI Agent** → **Settings** → **Partners**
2. Klicka på **Add Partner**
3. Ange partneridentifieraren (vanligtvis en API-nyckel eller organisations-ID)
4. Lägg valfritt till ett partnernamn och en beskrivning
5. Klicka på **Save**

### Tilldela förmågor till partners {#assigning-abilities-to-partners}

Efter att du har lagt till en partner:

1. Gå till fliken **Abilities**
2. Hitta en förmåga med Partner-synlighet
3. Klicka för att redigera
4. I sektionen "Partner allow-list", kryssa i rutorna för de partners som ska ha tillgång
5. Klicka på **Save**

### Återkalla partneråtkomst {#revoking-partner-access}

För att ta bort en partners åtkomst:

1. Redigera förmågan
2. Kryssa bort partnerns ruta i tillåtelse-listan
3. Klicka på **Save**

Partnern förlorar omedelbart åtkomsten till den förmågan.

## Oklassificerade förmågor (Unclassified Abilities) {#unclassified-abilities}

När du installerar en tredjepartsförmåga som Superdav AI Agent inte känner igen, märks den som **Oklassificerad** (Unclassified).

### Adminmeddelande för oklassificerade förmågor {#admin-notice-for-unclassified-abilities}

Du kommer att se ett adminmeddelande:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Granska oklassificerade förmågor {#reviewing-unclassified-abilities}

1. Klicka på **Review Abilities** i meddelandet
2. För varje oklassificerad förmåga ser du:
   - Förmåganamn och beskrivning
   - Källa (vilket plugin/tillägg som installerade den)
   - Föreslagen synlighetsnivå
   - Säkerhetsbedömning

3. Välj en synlighetsnivå:
   - **Public**: Lita på förmågan; exponera den överallt
   - **Internal**: Begränsa till endast intern användning
   - **Partner**: Begränsa till specifika partners
   - **Disabled**: Använd inte denna förmåga

4. Klicka på **Classify** för att spara ditt beslut

### Varför klassificera oklassificerade förmågor? {#why-classify-unclassified-abilities}

Att klassificera förmågor:

- **Förbättrar säkerheten**: Du godkänner explicit vad som exponeras
- **Förhindrar olyckor**: Oklassificerade förmågor är inaktiverade som standard
- **Aktiverar funktioner**: När den är klassificerad blir förmågan tillgänglig
- **Dokumenterar beslut**: Dina val loggas för revisionsändamål

## Synlighet i olika ytor {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Offentliga förmågor** är tillgängliga via REST-slutpunkter:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interna och Partnerförmågor** är inte tillgängliga via REST API.

### MCP-servrar {#mcp-servers}

**Offentliga förmågor** är tillgängliga via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interna förmågor** exponeras inte via MCP.

**Partnerförmågor** är endast tillgängliga med partneruppgifter.

### WooCommerce-integration {#woocommerce-integration}

**Offentliga förmågor** relaterade till WooCommerce är tillgängliga:

- Produkthantering
- Orderbearbetning
- Kundkommunikation

**Interna förmågor** exponeras inte för WooCommerce.

### Chattgränssnitt {#chat-interface}

**Alla förmågor** (Offentliga, Interna, Partner) är tillgängliga i chatten, beroende på användarens behörigheter:

- Administratörer ser alla förmågor
- Vanliga användare ser endast Offentliga förmågor
- Partners ser Offentliga + Partnerförmågor (om de är vitlistade)

## Säkerhetspraxis (Security Best Practices) {#security-best-practices}

### Principen om minsta behörighet (Principle of Least Privilege) {#principle-of-least-privilege}

- Ställ in förmågor till den mest restriktiva synlighet som fortfarande tillåter deras användning
- Använd Partner-synlighet för känsliga operationer
- Inaktivera förmågor du inte använder

### Regelbundna revisioner (Regular Audits) {#regular-audits}

- Granska förmågas synlighet månadsvis
- Kontrollera efter oklassificerade förmågor
- Ta bort åtkomst för oanvända partners

### Loggning och övervakning (Logging and Monitoring) {#logging-and-monitoring}

- Övervaka vilka förmågor som används mest
- Spåra mönster för partneråtkomst
- Larma vid ovanlig förmåganvändning

### Tredjepartsförmågor (Third-Party Abilities) {#third-party-abilities}

- Granska tredjepartsförmågor innan du aktiverar dem
- Klassificera dem explicit
- Börja med Intern eller Partner-synlighet
- Uppgradera till Offentlig endast efter granskning

## Felsökning (Troubleshooting) {#troubleshooting}

**En förmåga visas inte i listan**
- Verifiera att förmågan är installerad och aktiv
- Kontrollera att pluginet/tillägget är aktiverat
- Uppdatera sidan

**Jag kan inte ändra en förmågas synlighet**
- Verifiera att du har administratörsbehörigheter
- Kontrollera att förmågan inte är låst av ett plugin
- Försök inaktivera konflikthämmande plugins

**En partner kan inte komma åt en förmåga**
- Verifiera att partnern finns i tillåtelse-listan
- Kontrollera att förmågan är inställd på Partner-synlighet
- Bekräfta att partnerns uppgifter är korrekta
- Kontrollera API-loggarna efter autentiseringsfel

**Oklassificerade förmågor dyker upp kontinuerligt**
- Granska och klassificera dem i adminmeddelandet
- Kontrollera att din klassificering sparades
- Verifiera att pluginet som tillhandahåller förmågan är uppdaterat

## Migration från äldre läge (Migration from Legacy Mode) {#migration-from-legacy-mode}

Om du uppgraderar från en äldre version av Superdav AI Agent:

- Alla befintliga förmågor klassificeras automatiskt som Offentliga
- Granska och justera synligheten efter behov
- Ingen åtgärd krävs om du inte vill begränsa åtkomsten

Se **Third-Party Mode Migration** för mer detaljer om övergången till inbyggd Abilities API-integration.

## Nästa steg (Next Steps) {#next-steps}

Efter att ha konfigurerat synligheten för förmågor:

1. **Granska dina förmågor**: Genomför en revision av alla installerade förmågor
2. **Klassificera oklassificerade förmågor**: Svara på adminmeddelanden
3. **Ställ in partners**: Lägg till partners om du använder Partner-synlighet
4. **Övervaka användningen**: Spåra vilka förmågor som används mest
5. **Dokumentera beslut**: Behåll anteckningar om varför du valde varje synlighetsnivå
