---
title: Vermogtheidssigbaarheid
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Sigbaarheid van Vermoë

Superdav AI Agent v1.12.0 stel **Sigbaarheid van Vermoë**-beheer bekend wat bepaal watter oppervlaktes watter vermoë beskikbaar stel. Dit laat administrateurs toe om te verfyn watter agent-vermoë beskikbaar is via REST APIs, MCP-bedienerwoorde, WooCommerce-integrasies en ander koppelvlakke.

## Wat is Sigbaarheid van Vermoë? {#what-is-ability-visibility}

Sigbaarheid van Vermoë is 'n toestemmingsstelsel wat beheer oor:

- **Watter vermoë** beskikbaar is vir agente
- **Waar dit beskikbaar gestel word** (REST API, MCP, WooCommerce, ens.)
- **Wie dit kan benader** (via vennoot-toelaatlys)
- **Hoe dit geklassifiseer word** (herken vs. nie-geklassifiseer)

Elke vermoë dra 'n sigbaarheidsvlak wat sy beskikbaarheid oor verskillende oppervlaktes bepaal.

## Sigbaarheidsvlakke {#visibility-levels}

### Openbaar {#public}

**Openbare vermoë** is oral beskikbaar:

- REST API-eindpunte
- MCP-bedienerwoorde
- WooCommerce-integrasies
- Chat-koppelvlakke
- Alle gebruikersrolle (met toepaslike toestemmings)

Voorbeeld: `scaffold-block-theme`, `activate-theme`, `send-email`

### Intern {#internal}

**Interne vermoë** is slegs binne jou WordPress-installasie beskikbaar:

- Chat-koppelvlakke
- Admin-panele
- Slegs aangemelde gebruikers
- Word nie via REST API of eksterne integrasies beskikbaar gestel nie

Voorbeeld: `manage-settings`, `view-analytics`, `export-data`

### Vennoot {#partner}

**Vennootvermoë** is slegs beskikbaar vir witgelysde vennootrolle:

- Vereis eksplisiete vennoot-toelaatlys-inskrywing
- Beskikbaar via REST API met vennoot-wagwoorde
- Beskikbaar via MCP met vennoot-wagwoorde
- Nie beskikbaar vir gewone gebruikers nie

Voorbeeld: `bulk-import-users`, `modify-billing`, `access-analytics`

### Uitgeskakel {#disabled}

**Uitgeskakelde vermoë** is nêrens beskikbaar nie:

- Word nie via enige oppervlak beskikbaar gestel nie
- Nie beskikbaar in chat nie
- Nie beskikbaar in admin-panele nie
- Nuttig vir verouderde of eksperimentele vermoë

## Bestuur van Vermoësigbaarheid {#managing-ability-visibility}

### Toegang tot Sigbaarheid van Vermoë-instellings {#accessing-ability-visibility-settings}

1. Gaan na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik op die **Abilities** tab
3. Jy sal 'n lys van alle geïnstalleerde vermoë sien met hul sigbaarheidsvlakke

### Bekyk Vermoë-besonderhede {#viewing-ability-details}

Klik op enige vermoë om te sien:

- **Name**: Die vermoë se identifikator
- **Description**: Wat die vermoë doen
- **Current visibility**: Openbaar, Intern, Vennoot, of Uitgeskakel
- **Partner allow-list**: Watter vennootrolle toegang kan kry (indien Vennoot sigbaarheid)
- **Last updated**: Wanneer die sigbaarheid laas verander is
- **Status**: Herken of Nie-geklassifiseer

### Verander Sigbaarheidsvlakke {#changing-visibility-levels}

Om die sigbaarheid van 'n vermoë te verander:

1. Klik op die vermoë in die lys
2. Kies 'n nuwe sigbaarheidsvlak uit die afhangmenu
3. As jy "Vennoot" kies, voeg vennoot-identifikators by tot die toelaatlys
4. Klik op **Save**

Voorbeeld:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Massa-operasies {#bulk-operations}

Om sigbaarheid vir verskeie vermoë te verander:

1. Vat die blokkies langs die vermoë uit
2. Kies 'n nuwe sigbaarheidsvlak uit die massa-aksie-afhangmenu
3. Klik op **Apply**

## Vennoot-Toelaatlys {#partner-allow-list}

Die **vennoot-toelaatlys** bepaal watter eksterne vennootrolle toegang kan kry tot Vennoot-vlak vermoë.

### Vennootrolle Byvoeg {#adding-partners}

1. Gaan na **Superdav AI Agent** → **Settings** → **Partners**
2. Klik op **Add Partner**
3. Voer die vennoot-identifikator in (gewoonlik 'n API-sleutel of organisasie-ID)
4. Voeg opsioneel 'n vennootnaam en beskrywing by
5. Klik op **Save**

### Vermoë Toewys aan Vennootrolle {#assigning-abilities-to-partners}

Nadat 'n vennootrol bygevoeg is:

1. Gaan na die **Abilities** tab
2. Vind 'n vermoë met Vennoot sigbaarheid
3. Klik om te redigeer
4. In die "Partner allow-list" afdeling, vat die blokkies vir die vennootrolle uit wat toegang moet hê
5. Klik op **Save**

### Vennoot-toegang Intrek {#revoking-partner-access}

Om 'n vennootrol se toegang te verwyder:

1. Redigeer die vermoë
2. Vat die vennootrol se blokkie in die toelaatlys uit
3. Klik op **Save**

Die vennootrol sal onmiddellik toegang tot daardie vermoë verloor.

## Nie-geklassifiseerde Vermoë {#unclassified-abilities}

Wanneer jy 'n derde party-vermoë installeer wat Superdav AI Agent nie herken nie, word dit gemerk as **Nie-geklassifiseer**.

### Admin-waarskuwing vir Nie-geklassifiseerde Vermoë {#admin-notice-for-unclassified-abilities}

Jy sal 'n admin-waarskuwing sien:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Hersiening van Nie-geklassifiseerde Vermoë {#reviewing-unclassified-abilities}

1. Klik op **Review Abilities** in die waarskuwing
2. Vir elke nie-geklassifiseerde vermoë, sal jy sien:
   - Vermoënaam en beskrywing
   - Bron (watter plugin/addon dit geïnstalleer het)
   - Voorgestelde sigbaarheidsvlak
   - Sekuriteitsbeoordeling

3. Kies 'n sigbaarheidsvlak:
   - **Public**: Vertrou die vermoë; stel dit oral bloot
   - **Internal**: Beperk tot interne gebruik slegs
   - **Partner**: Beperk tot spesifieke vennootrolle
   - **Disabled**: Gebruik hierdie vermoë nie

4. Klik op **Classify** om jou besluit te stoor

### Hoekom Nie-geklassifiseerde Vermoë Klassifiseer? {#why-classify-unclassified-abilities}

Die klassifisering van vermoë:

- **Verbeter sekuriteit**: Jy keur eksplisiet goed wat blootgestel word
- **Voorkom ongelukke**: Nie-geklassifiseerde vermoë is standaard uitgeskakel
- **Maak funksionaliteit moontlik**: Sodra geklassifiseer, word die vermoë beskikbaar
- **Dokumenteer besluite**: Jou keuses word vir ouditdoele doel opgeneem

## Sigbaarheid in Verskillende Oppervlaktes {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Openbare vermoë** is beskikbaar via REST-eindpunte:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interne en Vennoot vermoë** is nie beskikbaar via REST API nie.

### MCP-bedienerwoorde {#mcp-servers}

**Openbare vermoë** is beskikbaar via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interne vermoë** word nie via MCP beskikbaar gestel nie.

**Vennoot vermoë** is slegs beskikbaar met vennoot-wagwoorde.

### WooCommerce-integrasie {#woocommerce-integration}

**Openbare vermoë** wat verband hou met WooCommerce is beskikbaar:

- Produkbestuur
- Bestelverwerking
- Klantkommunikasie

**Interne vermoë** word nie aan WooCommerce beskikbaar gestel nie.

### Chat-koppelvlak {#chat-interface}

**Alle vermoë** (Openbaar, Intern, Vennoot) is in die chat beskikbaar, afhangende van gebruikersvermoë:

- Administrateurs sien alle vermoë
- Gewone gebruikers sien slegs Openbare vermoë
- Vennootrolle sien Openbaar + Vennoot vermoë (indien witgelys)

## Sekuriteitsbeste Praktyke {#security-best-practices}

### Prinsep van Minste Privilegie {#principle-of-least-privilege}

- Stel vermoë op na die mees beperkende sigbaarheid wat hul gebruik steeds toelaat
- Gebruik Vennoot sigbaarheid vir sensitiewe operasies
- Skakel vermoë uit wat jy nie gebruik nie

### Gereelde Oudits {#regular-audits}

- Hersien vermoësigbaarheid maandeliks
- Kontroleer vir nie-geklassifiseerde vermoë
- Verwyder toegang vir ongebruikte vennootrolle

### Logboekregistrasie en Monitoring {#logging-and-monitoring}

- Monitor watter vermoë die meeste gebruik word
- Volg vennoot-toegangpatrone
- Waarskuwing oor ongewone vermoëgebruik

### Derde Party-Vermoë {#third-party-abilities}

- Hersien derde party-vermoë voordat jy dit aktiveer
- Klassifiseer dit eksplisiet
- Begin met Interne of Vennoot sigbaarheid
- Promoveer na Openbaar slegs nadat dit geëvalueer is

## Probleemoplossing {#troubleshooting}

**'n Vermoë word nie in die lys getoon nie**
- Verifieer dat die vermoë geïnstalleer en aktief is
- Kontroleer dat die plugin/addon ingskakel is
- Herlaai die bladsy

**Ek kan nie 'n vermoë se sigbaarheid verander nie**
- Verifieer dat jy administrateurvermoë het
- Kontroleer dat die vermoë nie deur 'n plugin gesluit is nie
- Probeer konflik-plugins uitskakel

**'n Vennootrol kan nie toegang tot 'n vermoë kry nie**
- Verifieer dat die vennootrol in die toelaatlys is
- Kontroleer dat die vermoë se sigbaarheid op Vennoot gestel is
- Bevestig dat die vennootrol se wagwoorde korrek is
- Kontroleer API-logboeke vir wagwoordfoute

**Nie-geklassifiseerde vermoë bly verskyn**
- Hersien en klassifiseer dit in die admin-waarskuwing
- Kontroleer dat jou klassifisering gestoor is
- Verifieer dat die plugin wat die vermoë verskaf, op datum is

## Migrasie van Legacy-modus {#migration-from-legacy-mode}

As jy opgradeer van 'n ouer weergawe van Superdav AI Agent:

- Alle bestaande vermoë word outomaties as Openbaar geklassifiseer
- Hersien en pas sigbaarheid aan so nodig
- Geen aksie vereis tensy jy toegang wil beperk nie

Kyk na **Third-Party Mode Migration** vir meer besonderhede oor die oorgang na die native Abilities API-integrasie.

## Volgende Stappe {#next-steps}

Nadat jy die vermoësigbaarheid gekonfigureer het:

1. **Hersien jou vermoë**: Oudit alle geïnstalleerde vermoë
2. **Klassifiseer nie-geklassifiseerde vermoë**: Reageer op admin-waarskuwings
3. **Stel vennootrolle op**: Voeg vennootrolle by indien jy Vennoot sigbaarheid gebruik
4. **Monitor gebruik**: Volg watter vermoë die meeste gebruik word
5. **Dokumenteer besluite**: Hou notas oor hoekom jy elke sigbaarheidsvlak gekies het
