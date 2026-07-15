---
title: Specifo de la sitio skilo
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skil

La **Site Specification skil** estas struktura alproach por kapti la celojn de viajaj, la publikon kaj la markbrand identeco de viaja. Ĉi tiu informeco estas apartigita en via **site_brief** memoro, ki agentoj referas inter sesiojn por doni konstanta, kontekst-komita asiston.

## Kion estas Site Specification? {#what-is-site-specification}

Site Specification estas la procezo de dokumenti:

- **Site celon**: Kion viaja faras kaj kial ĝi ekzistas
- **Target publikon**: Kiu vizitas viajon kaj kion ili bezonas
- **Markbrand identeco**: Viaj koloroj, tono kaj vizual stilo
- **Biznescelojn**: Kion sukces ŝajnas por viajo
- **Kontenaj strukturon**: Kiel viaja estas organigita

Ĉi tiu spesifikado fariĝas via **site_brief**, persistanta memoro, ki agentoj uzas por kompreni la kontekston de viaja.

## kial uzi Site Specification? {#why-use-site-specification}

### Konstanto inter sesioj {#consistency-across-sessions}

Sen site `site_brief`, vi devus reeksplaini la celon de viaja ĉiam pri komenci novan sesion. Con ĝi, agentoj tuteble komprenas:

- Viajon celojn kaj publikon
- Viaj markbrand kolorojn kaj tono
- Viaj kontenaj strukturon
- Viaj biznescelojn

### Megaj pli bone rekomendoj {#better-recommendations}

Agentoj uzas via `site_brief` por:

- Sugiri funkciojn, kiuj estas aligitaj kun la celo de viaja
- Rekomendas kontenajn strukturojn, kiuj korespondon kun viaj celoj
- Propozi dezajnon konsistanta kun via markbrand
- Eviti sugesti inkompatabla funkciojn

### Rapida enontigo {#faster-onboarding}

Novaj agentoj (aŭ agentoj en novaj sesioj) povas rapide akordi per legi via `site_brief` en sto de pordi klarigajn demandojn.

## Iniciado de Site Specification {#initiating-site-specification}

### Durante Theme Builder Onboarding {#during-theme-builder-onboarding}

La **Site Specification skil** estas aŭtomate iniciata durante la **Theme Builder onboarding flow**. La Setup Assistant agenteas demandojn kaj konstruas via `site_brief`.

### Manua iniciado {#manual-initiation}

Puis vous pouvez commencer la Spécification du Site à tout moment :

```
"Permet-moi définir la spécification de mon site"
```

ou

```
"Aide-moi à créer un brief de site"
```

## Le Processus de Spécification du Site {#the-site-specification-process}

### Étape 1 : Objectif du Site {#step-1-site-purpose}

L'agent demande :

```
Quel est l'objectif principal de votre site ?
- Boutique e-commerce
- Blog ou site de contenu
- Portfolio ou vitrine
- Application SaaS
- Communauté ou forum
- Autre : [décrire]
```

Vous pouvez sélectionner une catégorie ou décrire votre propre objectif.

### Étape 2 : Public Cible {#step-2-target-audience}

```
Qui est votre public principal ?
- Consommateurs / grand public
- Professionnels des affaires
- Développeurs / utilisateurs techniques
- Étudiants / éducateurs
- Autre : [décrire]

Quels sont leurs besoins principaux ?
```

### Étape 3 : Identité de la Marque {#step-3-brand-identity}

```
Quelles sont les couleurs de votre marque ?
- Couleur principale : [sélecteur de couleur ou code hexadécimal]
- Couleur secondaire : [sélecteur de couleur ou code hexadécimal]
- Couleur d'accent : [optionnel]

Comment décririez-vous le ton de votre marque ?
- Professionnel / corporatif
- Créatif / artistique
- Ludique / décontracté
- Minimaliste / moderne
- Chaleureux / amical
```

### Étape 4 : Objectifs Commerciaux {#step-4-business-goals}

```
À quoi ressemble le succès pour votre site ?
- Générer des prospects (leads)
- Vendre des produits
- Construire une communauté
- Partager des connaissances
- Établir une autorité
- Autre : [décrire]

Quelle est votre métrique principale ?
- Revenus
- Engagement utilisateur
- Portée du contenu
- Conversions
- Autre
```

### Étape 5 : Structure du Contenu {#step-5-content-structure}

```
Comment votre contenu est-il organisé ?
- Plat (tout le contenu au même niveau)
- Hiérarchique (catégories et sous-catégories)
- Chronologique (style blog)
- Basé sur les produits (catalogue)
- Autre : [décrire]

Quels types de contenu utilisez-vous ?
- Articles de blog
- Pages produits
- Études de cas
- Documentation
- Vidéos
- Autre
```

## La Mémoire site_brief {#your-sitebrief-memory}

Après avoir terminé la Spécification du Site, vos informations sont stockées sous **site_brief** dans la mémoire de votre agent. Ceci est un enregistrement structuré contenant :

## Site-brief Vizita kaj Modernigo de Viajankon {#viewing-and-updating-your-sitebrief}

### Vidui Viankone Votre site-brief {#view-your-sitebrief}

Demand la agen:

```
"Montri mi mon site-brief"
```

 aŭ

```
"Kion vi scias pri mia site?"
```

La agen montros vian stoke specifikojn.

### Modernigi Viankone Votre site-brief {#update-your-sitebrief}

Se viaja evoluas, vi povas moderni ĝin:

```
"Modernizi mon site-brief: ni nun targetu B2B klientojn"
```

aŭ

```
"Rinfresmi mia specifikon de la site"
```

Tio refaros la Skill "Site Specification" kun via ekzista informo kiel komencigo.

## Kiel Agen Utilizas Site-brief {#how-agents-use-sitebrief}

### Dezajno Rekomendasjoj {#design-recommendations}

Kiam vi petas dezajnin ŝanĝojn, agen referas al vian site-brief:

```
Vi: "Redizajni mian homa pagin"
Agen: "Bazeante sur via site-brief, vi targetujn homojn de 25-45 jaroj
kun varma, artizan temo. Mi kreos dezajnin, kiom emfazas
vian homa joerio kaj la daŭrigebla valorojn."
```

### Funkcio Sugestioj {#feature-suggestions}

Agen sugeras funkciojn, kiuj estas aligitaj kun via celoj:

```
Vi: "Kion mi devus aĉeti?"
Agen: "Por e-komerco temita al klientaj fideleco,
mi rekomendas: fidelaj programa, klientaj recenzoj, elektronika novinaro,
kaj produkta rekomendoj."
```

### Strukturo de Kontenoj {#content-structure}

Agen proponas organizon de la enon baseante sur vian strukturo:

```
Vi: "Kiel soll i min Blog organisiere?"
Agent: "Da du en Produktkatalog mit Blog bruchsch, würd i vorschlage, d'Posts nach Produktkategorie z'organisiere und 'styling guides' z'erstelle, wo mehri Produkt zäme zeige."
```

## Best Practices (Beste Praktike) {#best-practices}

### Si spezifisch sii (Sei spezifisch) {#be-specific}

Statt "allgemeini Publikum" beschrib dini tatsächlechi Zielgruppe:

- ✓ "Fraue im Alter vo 25-45, interessiert an nachhaltiger Mode"
- ✗ "Alli"

### Regelmässig aktualisiere (Aktualisiere regelmässig) {#update-regularly}

Wenn dini Site sich entwicklet, aktualisiere din site_brief:

- Wenn du uf en neui Zielgruppe umschaltisch
- Wenn du neui Produktlinie hinzufüegsch
- Wenn sich dini Markebild veränderet
- Wenn sich dini Geschäftsziele ändere

### Konsistenti Terminologie bruche (Verwende konsistenti Terminologie) {#use-consistent-terminology}

Bruche di gliiche Begriffe über alli Sitzige:

- ✓ Sag immer "nachhaltigi Schmuckware" (nöd "umweltfründigi Schmuckware" und "grüeni Produkt")
- ✓ Bezie dini Zielgruppe konsequent uf die gliichi Art

### Kontext iibringe (Kontext einbeziehen) {#include-context}

Gib Hintergrundinformatione, wo de Agent hälfe, dini Entscheidigä z'verstoh:

- "Mir richtet üs an Profis, wo Qualität über Priis setze"
- "Üsi Zielgruppe isch technikaffin und erwartet modernes Design"
- "Mir sind en Bootstrapped Startup, drum bruched mir kosteneffizienti Lösige"

## Zämehang mit Theme Builder Onboarding (Beziehung zum Theme Builder Onboarding) {#relationship-to-theme-builder-onboarding}

D'Site Specification Fähigkeit isch i de **Theme Builder onboarding flow** integriert. Wenn du s'Onboarding abschliesst, wird din site_brief automatisch mit de Informatione erstellt, wo du gäh häsch.

Du chasch d'Site Specification au unabhängig laufe lah, wenn du wetsch:

- Dini Spezifikation nach em erste Setup verfeinere
- Din site brief aktualisiere, wenn dini Site sich entwickelt
- E detaillierti Spezifikation erstelle, bevor du mit Theme Builder startisch

## Fehlerbehebig (Fehlerbehebung) {#troubleshooting}

**Min site_brief wird nöd brucht**
- Bestätige, dass de Agent Zuegang zu em Gedächtnis het
- Frag de Agent, "erinnere mich an min site brief"
- Prüef, ob s'Gedächtnis i dine Iistellige aktiviert isch

**Mi vola komenci fton novaj `site_brief`**
- Demando agenon: "Limig mon site brief kaj komenci tute"
- Tiam faru Novan Specifikon Site (Site Specification) priankon

**La agente faras rekomendas kiuj ne korespondistas al mia site_brief**
- Demando agenon: "Revizi mon site brief"
- Modernizi vian site_brief, se ĝi estas malnova
- Doni pli da konteksto en viaj demandoj

## Proksimaj Paŝoj {#next-steps}

Post kiam vi definas vian specifikon site (site specification):

1. **Uzu Theme Builder**: Krei temon bazitan sur via site_brief
2. **Refine Design**: Uzui la abiliteco Estetiko de Sistemo de Dizajno (Design System Aesthetics skill) por detale dizajni
3. **Plan Content**: Demando agenojn pri rekomendas de strukturo de la enon
4. **Build Features**: Demando funkcioj, kiuj estas aligitaj kun via bizneco celoj
