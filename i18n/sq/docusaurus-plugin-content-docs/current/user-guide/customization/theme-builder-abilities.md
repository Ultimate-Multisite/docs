---
title: Aftësitë e Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Aftësitë e Theme Builder: Scaffolding dhe Aktivizimi i Temave me Blloqe

Superdav AI Agent v1.12.0 prezanton dy aftësi të fuqishme që ju lejojnë të gjeneroni dhe të vendosni theme me blloqe të personalizuara direkt nga interfejsi i bisedës.

## Përmbledhje {#overview}

Aftësitë **scaffold-block-theme** dhe **activate-theme** lehtëson agentët të:
- Gjenerojnë tema komplekse, gati për prodhim, bazuar në specifikimet tuaja
- Aktivizojnë automatikisht tema në faqen tuaj pa ndërhyrje manuale
- Krijojnë identitete vizuale kohezytë përmes vendimeve të udhëzuara të dizajnit

## Scaffolding i Temës me Blloqe (Scaffold Block Theme) {#scaffold-block-theme}

Aftësia **scaffold-block-theme** gjeneron një temë të re WordPress me strukturë komplekse, duke përfshirë:

- Konfigurim `theme.json` me design tokens
- File template për blloqe layout-e të zakonshme
- Stile dhe variacione të blloqeve të personalizuara
- Metadaten e temës dhe deklaratat e mbështetjes

### Si ta Kërkoni (How to Invoke) {#how-to-invoke}

Në bisedën tuaj me Superdav AI Agent, mund të kërkoni gjenerimin e temës:

```
"Krijoni një temë blloqi të quajtur 'Modern Agency' me skemë ngjyrash blu dhe bardhë,
tipografi sans-serif, dhe një layout profesional"
```

Agenti do të bëjë këtë:
1. Do mbledhë preferencat tuaja dizajni përmes bisedës
2. Do gjenerojë strukturën e plotë të temës
3. Do krijojë të gjitha filrat e nevojshëm të temës
4. Do përgatisë temën për aktivizim

### Output i Pritshëm (Expected Output) {#expected-output}

Kur aftësia ekzekutohet me sukses, do të shihni:

- Konfirmimin se tema është scaffolduar
- Emrin dhe vendndodhjen e temës
- Një përmbledhje të design tokens që janë aplikuar (ngjyrat, tipografia, hapësira)
- Status gati për aktivizim

Shembull i output:
```
✓ Tema "Modern Agency" është scaffolduar me sukses
  Vendndodhja: /wp-content/themes/modern-agency/
  Ngjyrat: Primare #0066CC, Sekondare #FFFFFF
  Tipografia: Inter (sans-serif)
  Status: Gata për aktivizim
```

## Aktivizimi i Temës (Activate Theme) {#activate-theme}

Aftësia **activate-theme** e ndryshon faqen tuaj në një temë bloku të krijuar ose ekzistuese.

### Si ta Kërkosh (Si ta Aktivizosh) {#how-to-invoke-1}

Pas kur keni krijuar një temë, mund ta aktivizoni menjëherë:

```
"Aktivizo temën Modern Agency"
```

Ose aktivizoni çdo temë ekzistuese:

```
"Ndrysho në temën Twentytwentyfour"
```

### Rezultati i Pritshëm {#expected-output-1}

Kur aktivizimi ka sukses:

- Konfirmim i temës aktive
- Emri i temës së mëparshme (për referencë)
- URL-i i faqes ku tema është e funksionaluar tani
- Çdo notë specifik për konfigurimin e temës

Shembull i rezultati:
```
✓ Tema u aktivizua me sukses
  Tema aktive: Modern Agency
  Tema e mëparshme: Twentytwentyfour
  E funksionaluar në: https://yoursite.com
  Shënim: Kontrollo faqen tuaj kryesore për të verifikuar dizajnin
```

## Procesi: Krijo dhe Aktivizo (Scaffold and Activate) {#workflow-scaffold-and-activate}

Një proces tipik përfshin të dy aftësitë:

1. **Kërkesa për gjenerimin e temës**: "Krijoni një temë bloku për faqen time landing page të SaaS-it"
2. **Agjenti krijon temën (scaffolds)**: Krijon skedarët dhe tokenet e dizajnit
3. **Vlerësim dhe përmirësim**: Diskutoni ndryshimet e dizajnit nëse është e nevojshme
4. **Aktivizim**: "Aktivizo temën tani"
5. **Verifikim**: Vizitoni faqen tuaj për të konfirmuar se dizajni i ri është i funksionaluar

## Tokenet e Dizajnit dhe Personalizimi (Design Tokens and Customization) {#design-tokens-and-customization}

Temat e krijuara përdorin tokenet e dizajnit të WordPress-it (përmes `theme.json`) për:

- **Ngjyrat**: Paleta kryesore, sekondare, aksent, neutrale
- **Tipografinë**: Familjet e fontit, madhësitë, pesha, lartësia e rreshtave
- **Ndërprerjet (Spacing)**: Padding, margin, skale hapësirash
- **Kufizimet (Borders)**: Tokenet e rrezisë dhe gjerësisë
- **Heshimet (Shadows)**: Niveli i lartësisë

Këto tokenet janë të centralizuara në `theme.json`, duke e bërë lehtë këtë për t'u përshtatur gjithë sistemit tuaj të dizajnit nga një skedar vetëm.

## Kufizimet dhe Shënimet {#limitations-and-notes}

Temat janë ndërtuar në `/wp-content/themes/` dhe duhet të ndjekin konvencione të emërtimit të WordPress.
Aktivimi kërkon leje të duhura në faqen tuaj të WordPress.
Kodi PHP i përshtatshëm në teme është minimal; përdorni pluginet për funksionalitete komplekse.
Temat me bloka funksionojnë më mirë me WordPress 5.9 dhe më të ri.

## Zgjidhja e problemeve (Troubleshooting) {#troubleshooting}

**Tema nuk shfaqet pas ndërtimit (scaffolding)**
- Kontrolloni nëse direktoria e temës ekziston dhe ka leje të duhura.
- Sigurohuni që `theme.json` është JSON i vlefshëm.
- Sigurohuni që emri i temës nuk ndërton konflikt me tema ekzistuese.

**Aktivimi dështon**
- Konfirmo se keni leje administratorit.
- Kontrolloni nëse direktoria e temës është e lexueshme nga WordPress.
- Rezoni logjet e gabimeve të WordPress për detaje më shumë.

**Tokenet e dizajnit nuk aplikohen**
- Verifikoni që sintaksa e `theme.json` është e saktë.
- Fshij çdo plugin cache (caching) që keni instaluar.
- Kontrolloni nëse versioni i WordPress ju mbështet tokenet që po përdorni.

## Hapat e Ardhshëm {#next-steps}

Pas aktivizimit të temës, mund të bëni:
- Përdorni aftësinë **Design System Aesthetics** për të përmirësuar tipografinë, ngjyrat dhe hapësirat (spacing).
- Personalizoni stilin e blokëve individuale përmes redaktorit të blokëve të WordPress.
- Shtoni CSS të personalizuar në skedarin `style.css` të temës.
- Krijoni shabllone bloku të personalizuara për lloje specifike të faqeve.
