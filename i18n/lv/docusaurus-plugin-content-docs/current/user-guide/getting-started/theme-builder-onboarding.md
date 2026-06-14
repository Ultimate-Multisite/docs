---
title: Tema izvēlnes procesa
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 ieviest jums ir vadīts **Theme Builder onboarding flow**, kas palīdz jums izveidot personizētu bloku tēmu pirmajā iestatījumos. Tas aizstāj senā Site Builder režīmu ar vairāk elastīvu, agenta palīdzamais pieeju.

## Kas ir Theme Builder Onboarding Flow?

Theme Builder onboarding flow ir interaktīva iestatījumu viedoklis, kas:

- Vadīs jūs caur dizaina lēmumus (krāsas, tipografija, layouti)
- Uzņem jūsu vietnes vizuālo identitātes vēlmju
- Izveido personizētu bloku tēmu, kas piemērota jums vajadzībām
- Automātiski aktivizē tēmu, kad tas ir pabeigts

Flow tiek spēkots **Setup Assistant agenta** ar palīdzību, kas prasa klārinājumu jautājumus un būvē jūsu tēmu pa daudzumu.

## Theme Builder Onboarding Sākums

### Pirmais izveide

Kad pirmo reizi sāc Superdav AI Agentu jauna WordPress instalācijā, jūs redziet:

```
Laiks labienīja Superdav AI Agent!

Kas vēlaties darīt?
1. Izveidot personizētu tēmu (Theme Builder)
2. Izmantot jau eksistētu tēmu
3. Tagad pārsniegt iestatījumus
```

Izvēlieties **"Izveidot personizētu tēmu"**, lai iepriekšietu Theme Builder onboarding flow.

### Manāla aktivizācija

Jūs varat sākt Theme Builder onboarding jebkurā laikā, pieprasot:

```
"Sākt Theme Builder onboarding"
```

vai

```
"Palīdziet man izveidot personizētu tēmu"
```

## Onboarding soļi

### 1. Režima izvēle

Setup Assistant agenta jautā par jūsu vēlmēm:

```
Kā vēlaties izveidot savu tēmu?
- Vadīts (Es prāšu jautājumus un būvju to jums)
- Praktiskais (Es jums parādīšu opcijas un jūs izvēlēties)
```

**Vadīts režīms** ieteicams lielākajiem lietotājiem; agenta sniedz dizaina ieteikumus, kas balstīti jūsu industrijas un mērķiem.

### 2. Vietnes specifikācija

Jums būs jautājumi par jūsu vietni:

- **Ziņas vietnes mērķis**: E-komercija, bloga, portfējs, SaaS un tas.
- **Mērķauditorija**: Kur ir jūsu apmeklētāji?
- **Branda krāsas**: Primāras un sekundāras krāsas (vai "Es neesmu pārliecināts")
- **Tonis**: Profesionāls, kreatīvs, spēlējams, minimālists un tas.

Šī informācija tiek saglabāta jūsu **site_brief** atmiņā, ko agenti izmanto nākamās sesijās.

### 3. Dizaina sistēmas lēmumi (Design System Decisions)

Agentis palīdz jums izvēlēties dizaina tokenus:

- **Tipografija**: Fontu ģimnejs (serif, sans-serif, monospace) un izmēru skali
- **Krāsu palete**: Primāras, sekundāras, akcenta un neitrālas krāsas
- **Atstarpes (Spacing)**: Kompakti, normāli vai plaši dizains
- **Kinetika (Motion)**: Animācijas un pārejas (ja tas ir nepieciešams)

### 4. Tēmas generēšana (Theme Generation)

Iestatījumu asistentis agentis sagādā jums jūsu personālās bloka tēmu ar:

- `theme.json`, kurā ir visi jūsu dizaina tokeni
- Bloku šabloni par bieži lietotajiem lejautumiem (lapas, bloga, kontaktinformācija)
- Personīgām bloku stili, kas atbilst jūsu dizaina sistēmai
- Tēmas metadatus un WordPress atbalsta deklarācijas

### 5. Aktivizācija un apstiprinājums (Activation and Verification)

Tēma automātiski aktivizējas, un jūs redziet:

```
✓ Jūsu personālā tēma ir aktīva!
  Tēmas nosaukums: [Jūsu vietnes nosaukuma] Tēma
  Krāsas: [Primāras] / [Sekundāras]
  Tipografija: [Fontu ģimnejs]

  Apmeklējiet savu vietni, lai redzētu jaunu dizainu.
```

Tad jūs varat apmeklēt savu vietni un apstiprināt, ka tēma parāda labi.

## Vietnes specifikācija un site_brief atmiņa (Site Specification and site_brief Memory)

Iestatījumos agentis saglabā jūsu vietnes specifikāciju **site_brief** atmiņas kategorijā. To ietver:

- Vietnes mērķi un mērķi
- Mērķauditorija
- Brandu krāsas un tonis
- Dizaina preferences (priekšnoteikumi)
- Kontenta struktūra

### Kāpēc site_brief ir svarīgs

Nākamās sesijās agenti izmanto jūsu **site_brief** šādi:

### Uztveršanas drošība

*   Uzturiet dizaina vienādību visās izmaiņās.
*   Ievadi funkcijas, kas atbilst jūsu vietnes mērčiem.
*   Sniedz kontekstualizētus ieteikumus.
*   Izvadi atkārtotas konfigurācijas jautājumus.

### Skatīšanās uz jūsu site_brief

Jūs varat jautāt agentam:

```
"Show me my site brief"
```

vai

```
"What do you know about my site?"
```

Agentas parādīs jūsu saglabāto vietnes specifikāciju.

## Ievadīšana pēc onboardinga (Onboarding)

Pēc Theme Builder iedevidīšanas pabeigšanas jūs varat:

### Izmantot Dizaina sistēmas estētikas prasmes (Design System Aesthetics skill)

Lūdziet dizaina uzlabojumus:

```
"Refine the typography to be more modern"
```

vai

```
"Adjust the color palette to be warmer"
```

**Dizaina sistēmas estētikas prasme** palīdz jums veikt mērķtiecīgus dizaina atjauninājumus.

### Direkti redi theme.json

Advanced lietotāji var izveidot `/wp-content/themes/[theme-name]/theme.json` failu, lai pielāgot:

*   Krāsu tokenus (Color tokens)
*   Tipografijas skalas (Typography scales)
*   Atstarpes vērtības (Spacing values)
*   Iztarpes un gaismas efektu definīcijas (Border and shadow definitions)

### Izveidot personīgās bloku šabloni (Custom Block Templates)

Izmantojiet WordPressa bloku redaktoru, lai izveidotu personīgās šablones:

*   Pārskatījuma lapām (Homepage layouts)
*   Bloga postu lapām (Blog post pages)
*   Produktu lapām (Product pages)
*   Kontaktu formām (Contact forms)

## Salīdzinājums: Vecā vs. Jaunā iedevidīšana

| Funkcija | Site Builder (Vecais) | Theme Builder (Jauns) |
| :--- | :--- | :--- |
| Konfigurācijas metode | Wizard-balsts forma | Agentas vadīts saruna |
| Tēmas generēšana | ierobežotas šabloni | Personizētā struktūra |
| Dizaina tokeni | Manūāla ievadi | Vadīti lēmumi |
| Fleksibilitāte | Fiksēti opcijas | Pielietojami |
| Nākotnes atjauninājumi | Nav referenci | Saglabāti site_briefā |

## Kļūdu likums (Troubleshooting)

**Onboardinga procesa nebeigās**
*   Atgrieziet procesu: "Start the Theme Builder onboarding"
*   Pārbaudiet, vai jūsu WordPress instalācija ir aktuāla
*   Apstipriniet, ka Setup Assistant agenta ir ieslēgta

**Mans `site_brief` nav lietots**
- Pārbaudiet, vai agentam ir piekļuve memorijai (memory)
- Lūdzu, lūdziet agentu "atcerēt manu vietnes skatuvi" (`recall my site brief`)
- Pārbaudiet, vai atmiņa ir iespējota savās iestatās

**Izveidots tēmas nav atbilstošs manam vēlmēm**
- Izmantojiet "Design System Aesthetics" prasmes (skill) toju uzlabošanai
- Lūdzu, lūdziet agentu "izveidot tēmu ar [konkrētām izmaiņām]" (`regenerate the theme with [specific changes]`)
- Redi direktori `theme.json` tieši precīza kontrole saņemšanai

## Nākamie soļi

Tēmas veidošanas (Theme Builder) iestatīšanu pabeigt pēc tam:

1. **Pārbaudiet savu vietni**: Apmeklējiet savu vietni, lai redzētu jaunu tēmu
2. **Uzlabojiet dizainu**: Izmantojiet "Design System Aesthetics" prasmes (skill) pielāgojumiem
3. **Pievienojiet saturu**: Sākiet veidot savas vietnes saturu
4. **Izpētiet spējās**: Uzstādiet uzmanību citām agentu spējām, piemēram `scaffold-block-theme` un `activate-theme`
