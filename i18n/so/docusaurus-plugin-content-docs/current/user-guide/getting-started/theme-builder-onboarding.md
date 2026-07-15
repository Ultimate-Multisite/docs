---
title: Habka bilaabidda Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Habaynta-sareedka Theme Builder

Superdav AI Agent v1.12.0 wuxuu soo bandhigayaa **habaynta-sareedka Theme Builder** oo kaa caawin doona inaad samayso theme gaar ah (custom block theme) inta aad ku bilaabaysid. Tani waxay beddeshaa habka hore ee Site Builder mode, iyadoo la isticmaalayo hab ka fudud oo ay ka caawiyaan agent-ka.

## Maxay tahay Habaynta-sareedka Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Habaynta-sareedka Theme Builder waa wizard (habka tilmaamada) isku-dhaf ah oo aad isticmaalayso si uu:

- Ku hagto go'aamada naqshadaynta (midabada, qaab-dhismeedka qoraalka, qaab-dhismeedka bogga)
- Ka qaado doorashooyinka muuqaalka ah ee website-kaaga
- Sameeyo theme gaar ah oo ku habboon baahiyahaaga
- Si toos ah u furto (activate) theme-ka marka uu dhammaystiro

Habayntaasi waxay la shaqaysaa **Setup Assistant agent**, kaas oo weydiinaya su'aalo faahfaahsan isagoo qayb ka dhigaya theme-kaaga si tartiib tartiib ah.

## Bilowga Habaynta-sareedka Theme Builder {#starting-the-theme-builder-onboarding}

### Wax-ii Koowaad (First-Run Setup) {#first-run-setup}

Marka aad markii ugu horreysay ku bilaabato Superdav AI Agent oo ku socda WordPress cusub, waxaad arki doontaa:

```
Soo dhowow Superdav AI Agent!

Maxaad rabtaa inaad qabato?
1. Samayso theme gaar ah (Theme Builder)
2. Isticmaal theme jira
3. Hadda ka dhaaf habka setup-ka
```

Doorashada **"Samayso theme gaar ah"** si aad u galto habaynta-sareedka Theme Builder.

### Furitaanka gacanta (Manual Activation) {#manual-activation}

Waxaad sidoo kale bilaabi kartaa habaynta-sareedka Theme Builder wakhti kasta adigoo codsiya:

```
"Start the Theme Builder onboarding"
```

ama

```
"Help me create a custom theme"
```

## Tallaabooyinka Habaynta {#the-onboarding-steps}

### Tallaabada 1: Doortid Mode-ka (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent wuxuu weydiinayaa doorashada aad rabto:

```
Sidee doonaysaa inaad samayso theme-kaaga?
- Lagu haggo (Waxaan su'aal lahayn waana kuu samayn doonaa)
- gacanta ku hayo (Waxaan kuu soo bandhigi doonaa doorashooyinka adigaana go'aanshaha)
```

**Guided mode** waa mid la talinaya dadka badankood; agent-ku wuxuu bixiyaa talooyin naqshadaynta iyadoo ku salaysan warshadaha iyo hadafkaaga.

### Tallaabada 2: Qoraalka Website-ka (Site Specification) {#step-2-site-specification}

Waxaa lagu weydiin doonaa website-kaaga:

- **Ujeeddada goobta**: E-commerce, blog, portfolio, SaaS, iwm.
- **Qofka la filayaasha**: Waa dadka soo booqda?
- **Midabada calaamadda (Brand colors)**: Midabka ugu muhiimsan iyo midabka labaad (ama "ma hubin").
- **Tirada hadalka (Tone)**: Wax barwaaqo leh, hal-abuur leh, ciyaar ah, yar oo fudud, iwm.

Macluumaadan waxaa lagu kaydyaa xusuustaada **site_brief**, taasoo agabtii la tixgelin doonaa casharrada dambe.

### Tallaabada 3: Go'aaminta Nidaamka Naqshadaynta (Design System Decisions) {#step-3-design-system-decisions}

Agabtii waxay ku hagaysaa doorashada design token-yadaas:

- **Qoraalka (Typography)**: Qoyska font-ka (serif, sans-serif, monospace) iyo heerarka cabbirka
- **Midabada**: Midabka ugu muhiimsan, labaad, midabka xoogga leh (accent), iyo midabada badankooda (neutral colors)
- **Dhaqdhaqaaqa (Spacing)**: Qaabka muuqaalka ee yar, caadiga ah, ama ballaaran
- **Udhacdo (Motion)**: Animations iyo isbeddellada (haddii aad rabto)

### Tallaabada 4: Soo-dhigista Theme-ka (Theme Generation) {#step-4-theme-generation}

Agabtii Sameynta Setup Assistant waxay kuu samaynaysaa theme-kaaga gaarka ah iyadoo la isticmaalayo:

- `theme.json` oo ku jira dhammaan design token-yadaada
- Qoraallo template-ka lagu qoro qaababka caadiga ah (homepage, blog, contact)
- Qaab-dhismeedka block-yada gaarka ah ee la jaanqaadaya nidaamka naqshadayntaada
- Metadata-da theme-ka iyo doorkii taageerada WordPress

### Tallaabada 5: Furitaanka iyo Xaqiijinta (Activation and Verification) {#step-5-activation-and-verification}

Theme-ku si toos ah ayaa loo furayaa, waxaad arki doontaa:

```
✓ Theme-kaaga gaarka ah wuxuu hadda yahay mid la shaqaynaya!
  Magaca theme-ka: [Magaca Website-kaaga] Theme
  Midabada: [Primary] / [Secondary]
  Qoraalka: [Font Family]

  Waxaad booqan kartaa website-kaaga si aad u aragto naqshadaynta cusub.
```

Markaas waxaad booqan kartaa website-kaaga si aad u hubiso in theme-ku si sax ah u muuqdo.

## Qaybta Gaarka Website-ka iyo Xusuusta site_brief (Site Specification and site_brief Memory) {#site-specification-and-sitebrief-memory}

Intii la bilaabayo, agabtii waxay qaatay sharraxaadda website-kaaga oo ay ku jirto qaybta xusuusta **site_brief**. Tani waxaa ka mid ah:

- Ujeeddada iyo hadafka website-ka
- Qofka la filayaa (Target audience)
- Midabada calaamadda iyo tirada hadalka
- Doorashooyinka naqshadaynta
- Qaababka macluumaadka (Content structure)

### Maxay U Muhiim Tahay site_brief? {#why-sitebrief-matters}

Casharrada dambe, agabtii waxay isticmaali doontaa **site_brief**-kaaga si ay:

### Xogidda Site-Brief-kaaga {#viewing-your-sitebrief}

Waxaad weydiin kartaa agabtii (agent) sidan:

```
"Show me my site brief"
```

ama

```
"What do you know about my site?"
```

Agabku wuxuu soo bandhigi doonaa macluumaadka aad kaydsay ee qorshaha website-kaaga.

## Wax Ka Beddelidda Marka La Soo Dhaqdo (Onboarding) {#customizing-after-onboarding}

Marka la dhammeeyo waxbarashada Theme Builder, waxaad samayn kartaa:

### Isticmaalka Xirfadda Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Codsi hagaajin muuqaal ah:

```
"Refine the typography to be more modern"
```

ama

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** wuxuu ku hagayaa hagaajinta muuqaalka aad u baahan tahay.

### Wax Ka Beddelidda theme.json Si Toos ah {#edit-themejson-directly}

Kuwa isticmaalka ugu horreeya, waxaad wax ka beddeli kartaa `/wp-content/themes/[theme-name]/theme.json` si aad u hagaajiso:

- Color tokens (Tilmaamaha midabka)
- Typography scales (Qaabdhismeedka qoraalka)
- Spacing values (Qiimaha meelaha u dhexeeya waxyaabaha)
- Border and shadow definitions (Qeexidda xad-dhaafka iyo hoos-dhigista)

### Abuurista Template-yada Block-ga Gaarka ah {#create-custom-block-templates}

Isticmaal editorka block-ga WordPress si aad u samayso template-yo gaar ah:

- Qaabka Homepage-ka
- Bogga maqaalka (Blog post pages)
- Bogga alaabta (Product pages)
- Foomamka la xiriirka (Contact forms)

## Isbarbardhig: Qoyska Dambe vs. Cusub {#comparison-old-vs-new-onboarding}

| Wax | Site Builder (Qoyska Dambe) | Theme Builder (Cusub) |
|---|---|---|
| Habka Aasaasidda | Foomka Wizard-ka ah | Wacyigii Agabka (Agent-guided conversation) |
| Soo-shaqaynta Theme-ka | Template-yo xaddidan | Qaab dhismeed gaar ah oo la samayn karo |
| Design tokens | Qorista gacanta | Go'aanno lagu hagayo |
| Isticmaalka (Flexibility) | Doorashooyin la qeexay | Wax la beddeli karo |
| Cusboonaysiinta Mustaqbalka | Ma la xiriirin | Lagu kaydsan yahay site_brief-ka |

## Xallinta Dhibaatooyinka (Troubleshooting) {#troubleshooting}

**Waxbarashada Onboarding-ku ma dhammaan:**
- Dib u bilaab waxbarashada: "Start the Theme Builder onboarding"
- Hubi in WordPress-kaaga uu yahay mid cusub (up to date)
- Hubi in agabtii Setup Assistant ay shaqaynayso

**Site_brief-ka ma la isticmaalin**
- Hubi in agabtii (agent) ay ku haysato xusuus (memory).
- Weydii agabtii "recall my site brief" (la soo celin qoraalka kooban ee website-kayga).
- Hubi in xusuusta (memory) ay furan yihiin settings-kaaga.

**Theme-ka la abuuraa ma la mid yahay rabitaanka saaxiibkayga**
- Isticmaal awoodda Design System Aesthetics si aad u hagaajiso.
- Weydii agabtii "regenerate the theme with [specific changes]" (la dib u abuuro theme-ka iyadoo la beddelay waxyaabaha gaarka ah).
- Waxaad si toos ah u wax ka beddeli kartaa file-ka `theme.json` si aad si sax ah u maamushid.

## Tallaabooyinka Xiga {#next-steps}

Marka aad dhammaystirto barashada Theme Builder:

1. **Hubi website-kaaga**: Tag website-kaaga si aad aragto theme-ka cusub.
2. **Hagaajinta naqshadda**: Isticmaal awoodda Design System Aesthetics si aad u hagaajiso waxyaabaha.
3. **Barnaamijka ku dar**: Bilow inaad bilaawdo inaad wax ka qorto website-kaaga.
4. **Aqoonsiga awoodaha**: Baro waxyaabo kale oo agabtii samaysay sida scaffold-block-theme iyo activate-theme.
