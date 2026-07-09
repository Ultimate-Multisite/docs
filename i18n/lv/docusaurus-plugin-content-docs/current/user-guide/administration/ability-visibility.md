---
title: Redzamības spējība
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Redzamība redzība (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 ieviesta **Redzamības kontroles** (Ability Visibility), kas norāda, kuras saskarenības atklāj katru iespēju. Tas ļauj administratoriem precīzi iestatīt, kuras agentu iespējas ir pieejamas REST API, MCP serveriem, WooCommerce integrācijām un citām interfeisām.

## Kāds ir Redzamība? (What is Ability Visibility?) {#what-is-ability-visibility}

Redzamība ir atļauju sistēma, kas kontrole:

- **Kurās iespējas** ir pieejamas agentiem
- **Kur tās redzams** (REST API, MCP, WooCommerce un tas)
- **Kādam var piekļūt** (partneru atļauju sarakstiem)
- **Kā tās klasificē** (atzītas vai neklassificētas)

Katras iespējas ir redzamības līmenis, kas noteik, kuras tās ir pieejamas dažādās saskarenībās.

## Redzamības līmeņi (Visibility Levels) {#visibility-levels}

### Publiski (Public) {#public}

**Publiskas iespējas** ir pieejamas visur:

- REST API endpoints
- MCP serveri
- WooCommerce integrācijas
- Čata interfejsi
- Visām lietotāja roļiem (ar atbilstošajām atļaupām)

Piemērs: `scaffold-block-theme`, `activate-theme`, `send-email`

### Īpaši (Internal) {#internal}

**Īpaši iespējas** ir pieejamas tikai jūsu WordPress instalācijā:

- Čata interfejsi
- Administrācijas paneli
- Tikai ienākošajiem lietotājiem
- Nav redzams REST API vai ārējām integrācijām

Piemērs: `manage-settings`, `view-analytics`, `export-data`

### Partneri (Partner) {#partner}

**Partneru iespējas** ir pieejamas tikai atļautajiem partneriem:

- Prasīta ekspluatēta ienākšana partneru atļauju sarakstā
- Pieejams REST API ar partnera autentifikācijas datus
- Pieejams MCP ar partnera autentifikāciju
- Nav pieejams regulārām lietotājiem

Piemērs: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dislēgti (Disabled) {#disabled}

**Dislēgtas iespējas** nav pieejamas jebkurā vietā:

- Nav redzams kādu saskarenību
- Nav pieejams čatā
- Nav pieejams administrācijas paneliem
- Noderīgs atbalstītās vai eksperimentālās iespējās

## Uzlabību iespēju pārvaldīšana {#managing-ability-visibility}

### Iesniegšanās uz uzmanības redzamības iestatījumiem {#accessing-ability-visibility-settings}

1. Atveriet **WordPress Admin** → **Superdav AI Agent** → **Settings** (Iestatījumi)
2. Nospressiet **Abilities** (Uzlabības) tabu
3. Jūs redzēsiet sarakstu visām instalēto uzmanībām un to redzamības līmeņiem

### Uzlabību detaļu skatīšana {#viewing-ability-details}

Nospressiet jebkuru uzlabību, lai redzētu:

- **Name** (Nosaukums): Uzlabības identifikators
- **Description** (Apraksts): Kas uzmanība dara
- **Current visibility** (Aktuālā redzamība): Public, Internal, Partner vai Disabled (Izvēlēta)
- **Partner allow-list** (Partneru atļauju saraksts): Kādi partneri var piekļūt (ja ir izvēlēta Partner vismazredzamība)
- **Last updated** (Pēdējā atjaunināšana): Kad redzamība tika pēdējā reizi mainīta
- **Status**: Pazināts vai Unclassified (Nklassificēts)

### Redzamības līmeņu mainīšana {#changing-visibility-levels}

Lai mainītu uzlabības redzamību:

1. Nospressiet uzmanību sarakstā
2. Izvēlieties jaunu redzamības līmeni no dropdowna
3. Ja izvēlaties "Partner", pievienojiet partneru identifikatorus atļauju sarakstam
4. Nospressiet **Save** (Saglabāt)

Piemērs:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masīnas operācijas {#bulk-operations}

Lai mainītu redzamību vairākām uzmanībām:

1. Ievadi atzīmju kops uzlabībām
2. Izvēlieties jaunu redzamības līmeni no masīnas darbības dropdowna
3. Nospressiet **Apply** (Piemērot)

## Partneru atļauju saraksts (Partner Allow-List) {#partner-allow-list}

**Partneru atļauju saraksts** liecina, kādi ārējie partneri var piekļūt Uzlabības līmeņa uzmanībām.

### Partneru pievienošana {#adding-partners}

1. Atveriet **Superdav AI Agent** → **Settings** (Iestatījumi) → **Partners** (Partneri)
2. Nospressiet **Add Partner** (Pievienot partneri)
3. Īrādieties partnera identifikatoru (parasti API kluāva vai organizācijas ID)
4. Optiāli pievienojiet partnera nosaukumu un aprakstu
5. Nospressiet **Save** (Saglabāt)

### Uzlabību atzīšana partneriem {#assigning-abilities-to-partners}

Partnera pievienošanas pēc tam:

1. Ieiet uz **Abilību** tabu.
2. Atrodiet abilību ar Partnera redzamību.
3. Nospressiet, lai to izvēlētos rediģēt.
4. "Partneru atļauju sarakstā" sadaļā atzīmējiet vakus tiem partneriem, kuriem ir pieejamība.
5. Nospressiet **Save** (Saglabāt).

### Partnera piekļuves atņemšana {#revoking-partner-access}

Lai atņemtu partneram piekļuvi:

1. Rediģējiet abilību.
2. Atzīmējiet vakus partnera vakus sarakstā.
3. Nospressiet **Save** (Saglabāt).

Partneram tūlīt zaudēs piekļuve šim abilībai.

## Neklasificēti abilības {#unclassified-abilities}

Kad instalējat tretspējas abilību, ko Superdav AI Agent nepoznā, tas tiek norādīts kā **Neklasificēts**.

### Administrāta paziņojums par neklasificētām abilībām {#admin-notice-for-unclassified-abilities}

Jūs redzēs administrācijas paziņojumu:

```
⚠️ Atrodītas neklasificētas abilības

Sejauši instalētas, bet nepoznātas abilības:
- custom-import-tool
- external-api-wrapper

Šie abiliti var radīt drošības vai compatibilitātes riskus.
Lūdzu, pārskatīt un klasificēt tos.

[Pārskatīt abilības] [Atbalstīt]
```

### Neklasificēto abilību pārskatīšana {#reviewing-unclassified-abilities}

1. Nospressiet **Review Abilities** (Pārskatīt abilības) paziņojumā.
2. Katras neklasificētās abilības laikā jūs redzēs:
   - Abilības nosaukumu un aprakstu
   - Avotu (kurš plugin/addon to instalēja)
   - Ieteikto redzamības līmeņa
   - Drošības novērtējumu

3. Izvēlieties redzamības līmeni:
   - **Public** (Publiskais): Uzticieties abilībai; atveriet to visur
   - **Internal** (Iekšējais): ierobežojiet izmantošanu tikai iekšēji
   - **Partner**: ierobežojiet specifiskajiem partneriem
   - **Disabled** (Atbalstīts): neizmantojiet šo abilību

4. Nospressiet **Classify** (Klasificēt), lai saglabātu savu lēmumu.

### Kāpēc klasificēt neklasificētas abilības? {#why-classify-unclassified-abilities}

Abilību klasificēšana:

- **Uzlabo drošību**: Jūs ekspluatāti apstiprināt to, kas ir atvērts
- **Ievērš nepatiecības**: Neklasificēti abiliti pēc defaulta ir atbalstīti
- **Atver iespējas**: Reiz klasificētas, abilība kļūst pieejama
- **Dokumentē lēmumus**: Jūs saglabājat savus izvēles audita mērķiem

## Redzamība dažādās virsmas {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Publikas iespējas** ir pieejamas ar REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Iekšējās un partneru iespējas** nav pieejamas ar REST API.

### MCP Serveri {#mcp-servers}

**Publikas iespējas** ir pieejamas ar MCP:

```
MCP Server: Superdav AI Agent
Pieejamas iespējas:
- scaffold-block-theme
- activate-theme
- send-email
```

**Iekšējās iespējas** nav atklātas ar MCP.

**Partneru iespējas** ir pieejamas tikai ar partneru autentifikācijas datus.

### WooCommerce integrācija {#woocommerce-integration}

**Publikas iespējas**, kas saistītas ar WooCommerce, ir pieejamas:

- Produkta pārvaldība
- Darba apstrāde (orders)
- Klientu komunikācija

**Iekšējās iespējas** nav atklātas WooCommerce.

### Čata interfeiss {#chat-interface}

**Visas iespējas** (publiskās, iekšējās, partneru) ir pieejamas čatā, atkarībā no lietotāja iestatījumiem:

- Administrātori redz visus iespējas
- Normālajiem lietotāji redz tikai pubiskās iespējas
- Partneri redz pubiskās + partneru iespējas (ja tās ir saskaņotas ar sarakstu)

## Drošības labākās praktikas {#security-best-practices}

### Mīlestības principa izmantošana (Principle of Least Privilege) {#principle-of-least-privilege}

- Iestatiet iespējas visrestriktīvākai redzamībai, kas tos atļauj lietot.
- Izmantojiet partneru redzamību sensitīvās operācijās.
- Izslēdziet iespējas, ko neizmantojat.

### Regulāras pārbaudes {#regular-audits}

- Pārbaudiet iespēju redzamību mēnesitām
- Pārbaudiet, vai ir nekategorizētas iespējas
- Atņemiet piekļuvi lietotajiem, kuriem nav nepieciešami partneri

### Logēšana un uzraudzība (Logging and Monitoring) {#logging-and-monitoring}

- Uzraudziet, kādas iespējas tiek izmantotas visbiežāk
- Sekojiet partneru piekļuves modeļus
- Advarslieto, ja ir neparasti iespēju lietošanas modes

### Tretpuses iespējas (Third-Party Abilities) {#third-party-abilities}

- Pārbaudiet tretpuses iespējas pirms to ieslēgšanas
- Izklāstiet tās kļūdu skaidri
- Sākiet ar iekšējām vai partneru redzamību
- Promovējiet publiski tikai pēc pārbaudes

## Troubleshooting {#troubleshooting}

**Spēja neparāda sarakstā**
- Pārbaudiet, vai spēja ir instalēta un aktīva
- Pārbaudiet, vai plugin/addon ir ieslēgts
- Atjauninājiet lapu (Refresh)

**Es nevaram izveidot spējas redzamību**
- Pārbaudiet, vai jums ir administratora iestatas
- Pārbaudiet, vai spēja nav bloccēta jebkura pluginas ar instrumentiem
- Mēģiniet desactivēt konfliktējo pluginus

**Partneram nevar piekļūt spējai**
- Pārbaudiet, vai partneris ir iekļauts atļauju sarakstā (allow-list)
- Pārbaudiet, vai spējas redzamība ir noteikta kā Partner
- Apstipriniet, ka partnera saturi ir pareizi
- Pārbaudiet API logus autentifikācijas kļūdu meklējot

**Neklasificētas spējas turpināt parādīšanos**
- Atzīmējiet un klasificējiet tās admina paziņojumos
- Pārbaudiet, vai jūsu klasifikācija ir saglabāta
- Pārbaudiet, vai spēja, kas to sniedz, ir aktuāla

## Migrācija no veco režīma (Legacy Mode) {#migration-from-legacy-mode}

Ja jūs pārvēršaties no vecākas versijas Superdav AI Agent:

- Visi jau eksistējoši spēji automātiski tiek klasificēti kā Public
- Pārbaudiet un pielāgojiet redzamību, ja tas ir nepieciešams
- Nav nepieciešama nekāda darbība, ja jūs nevietojat piekļuves

Lietojiet **Trešās puses režīma migrāciju** lai saņemt vairāk informācijas par pāreju uz vietējo Abilities API integrāciju.

## Nākamie soļi {#next-steps}

Pēc spējai redzamības konfigurēšanas:

1. **Pārbaudiet savas spējas**: Auditu visus instalētos spējus
2. **Klasificējiet neklasificētās spējas**: Atbildiet uz admina paziņojumiem
3. **Iestatījiet partnerus**: Pievienojiet partnerus, ja izmantojat Partner redzamību
4. **Pārbaudiet lietošanu**: Sekojiet, kuras spējas tiek lietotas visbiežāk
5. **Dokumentējiet lēmumus**: Saglabājiet paziņojumus par to, kāpēc jūs izvēltie katru redzamības līmeni
