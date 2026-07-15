---
title: Paziņojums par Site Builder režīma atgriešanu
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Informācija par Site Builder režīma atgriešanu

**Site Builder režīms ir izslēgts Superdav AI Agent v1.12.0 versijā.** Ja jūs lietojat Site Builder režīmu, jums jāmigrē uz **Setup Assistant agentu**, lai veidotu tēmām un iestatītu vietni.

## Kā notika? {#what-happened}

### Site Builder režīms (Legacy) {#site-builder-mode-legacy}

Site Builder režīms bija wizard-dzināts interfeiss, kas lietoties šādi:

- Vietņu izveide no šabloniem
- Pamatošo iestatījumu konfigurēšana
- Tēmas izvēle
- Sākuma satura iestatīšana

### Kas to aizstāj? {#what-replaced-it}

**Setup Assistant agents** tagad pārņem visus Site Builder funkcijas, piedāvājot:

- Liellabāku un labāk vadīto konfigurēšanu agentu palīdzība
- Labākus tēmām pielāgošanas iespējas
- Integrāciju ar Theme Builder iestatīšanu
- Noteiktu vietnes `site_brief` atmiņu saglabāšanu nākamajiem sesjiem

## Ja jūs lietojat Site Builder režīmu {#if-you-were-using-site-builder-mode}

### Jūsu vietnes ir drošas {#your-sites-are-safe}

- Ar Site Builder režīmu izveidotas jau eksistējo vietnes turpinās darboties
- Nav datu zaudējumu vai vietnes traucējumus
- Jūs varat turpināt savu vietņu pārvaldīšanu normāli

### Migrējiet uz Setup Assistant agentu {#migrate-to-setup-assistant-agent}

Ja jums ir nekas jauna vietnes iestatījums vai tēmām izmaiņas, izmantojiet Setup Assistant agentu:

```
"Palīdziet man iestatīt jaunu vietni"
```

vai

```
"Sākumā tēmas izveide (Theme Builder onboarding)"
```

Setup Assistant agents sniedz to pašu funkciju ar lielāku elastību.

## Salīdzinājums: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funkcija | Site Builder (Izslēgts) | Setup Assistant (Jauns) |
|---------|----------------------|----------------------|
| Iestatīšanas metode | Wizard forma | Agentas saruna |
| Tēmas izvēle | Noteikti šabloni | Pielaugotam veidarbība |
| Pielāgošana | ierobežotas iespējas | Pilna dizaina sistēma |
| Vietnes briefa | Nav saglabāta | Saglabāta atmiņa |
| Nākamās sesijas | Atjaunota iestatīšana | Izmantot saglabāto `site_brief` |
| Elastība | Noteikts darba plāns | Adaptiv saruna |

## Migrācija uz Setup Assistant agentu {#migrating-to-setup-assistant-agent}

### Ja jums ir jaunas vietnes {#for-new-sites}

Ne vien lietot "Site Builder" režīmu:

1. Lūgums: "Palīdziet man izveidot jaunu vietni"
2. Iestatījumu asistentas (Setup Assistant) agents vismaz jums palīdzēs:
   - Vietnes mērķis un mērķi
   - Mērķauditorija
   - Brändes identitāte
   - Tēmas generēšana
   - Sākuma konfiguracija

### Saviriktajām vietnēm (For Existing Sites) {#for-existing-sites}

Ja jums ir saviriktā vietne, kas veidota ar Site Builder režīmu:

1. Jūs varat turpināt to lietot kā ir
2. Lai atjauninātu tēmu, lūgums: "Atjaunojiet manu vietni" (Redesign my site)
3. Iestatījumu asistentas agents palīdz jums izveidot jaunu tēmu
4. Jūsu vietnes dati paliek nemainīti

### Tēmas mainām (For Theme Changes) {#for-theme-changes}

Lai mainītu tēmu, ne lietojot Site Builder režīma tēmas izvēli:

1. Lūgums: "Mainiet manu tēmu" (Change my theme)
2. Iestatījumu asistentas agents darīs šo:
   - Jautāties par jūsu dizaina preferences
   - Generēs personalizētu tēmu
   - Activē to vietnē

## Galvenās atšķirības (Key Differences) {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Izvēlies šablonu
2. Izvēlies tēmu
3. Konfiguriē pamata iestatījumus
4. Beidzies
```

### Iestatījumu asistentas agenta (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Aprakstiet jūsu vietnes mērķi
2. Noteikiet savu mērķauditoriju
3. Izvēlies dizaina preferences
4. Agents generē personalizētu tēmu
5. Agents activē tēmu
6. Vietnes kops (site_brief) tiek saglabāts nākotnējām sesijām
```

## Iestatījumu asistentas agenta priekšrocības (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Lielākais elastība (More Flexible) {#more-flexible}

- Aprakstiet savu vietni dabisko valodā
- Saņem personalizētus ieteikumus
- Pielaupjas atbilstību jūsu konkrētām vajadzībām

### Labāka personalizācija (Better Customization) {#better-customization}

- Personalizēta tēmas generēšana
- Dizaina sistēmas lēmumi
- Noteikumi (tokens) dizainam

### Saglabāta atmiņa (Persistent Memory) {#persistent-memory}

- Jūsu `site_brief` tiek saglabāts
- Nākotnes agenti saprot savu vietni
- Nav nepieciešams atkārtoti atkārtot iestatījumu informāciju

### Integrēts darba plūsma (Integrated Workflow) {#integrated-workflow}

- Tēmas izveides ieviešana (Theme Builder onboarding)
- Dizaina sistēmas estētikas prasme (Design System Aesthetics skill)
- Redzamības kontroles iespēja (Ability Visibility controls)
- Visi strādā vienlaicīgi bez traucējumiem

## Kļūdu likums (Troubleshooting) {#troubleshooting}

### Es nevaru atrast Site Builder režīmu {#i-cant-find-site-builder-mode}

Site Builder režīms ir noņemts. Lūdzu, izmantojiet Iestatījumu asistentas agentu:

"Palīdziet man izveidot jaunu vietni"

### Esmu vēlējums atveidot vietni no Site Buildera {#i-want-to-recreate-a-site-from-site-builder}

Tā varat atveidot ar Setup Assistant agentu:

1. Lūgums: "Palīdziet man izveidot jaunu vietni"
2. Aprakstiet savas sākotnējās vietnes mērķi un dizainu
3. Agents radīs līdzīgu tēmu
4. Jums saglabāts `site_brief`, lai to varētu izmantot vēlāk

### Mans jau eksistējo Site Buildera vietne nepietiek darba {#my-existing-site-builder-site-isnt-working}

Ar Site Builder režīmā creatās vietnes turpina strādāt. Ja jums ir problēmas:

1. Pārbaudiet, vai jūsu tēma joprojām ir aktīva
2. Noteikiet, ka jūsu pluginus ir ieslēgti
3. Pārbaudiet WordPressu kļūdu datus (error logs)
4. Saizieties ar atbalstu, ja problēmas turpinās

### Vai es varu joprojām izmantot savas vecākas Site Buildera šablons? {#can-i-still-use-my-old-site-builder-templates}

Site Buildera šabloni tagad nav pieejami. Tomēr:

- Jūsu eksistējo vietnes turpina strādāt
- Jūs varat atveidot līdzīgas vietnes ar Setup Assistant agentu
- Setup Assistant agents piedāvā vairāk pielāgošanas iespējas

## Nākamie soļi {#next-steps}

1. **Ja jaunas vietnes:** Izmantojiet Setup Assistant agentu
2. **Ja eksistējo vietnes:** Turpinājiet lietot tos kā ir
3. **Ja tēmas izmaiņas:** Lūgiet palīdzību no Setup Assistant agenta
4. **Ja dizaina uzlabošana:** Izmantojiet Design System Aesthetics prasmi

## Saistītie tēmāti {#related-topics}

- **Theme Builder Onboarding**: Lūdzu, lūdzu, vietnes izveide customu temām
- **Setup Assistant Agent**: Vietnes izveide ar agenta palīdzību
- **Site Specification Skill**: Noteikiet savas vietnes mērķus un auditoriju
- **Design System Aesthetics Skill**: Uzlabojiet vietnes vizuālo identitāti
