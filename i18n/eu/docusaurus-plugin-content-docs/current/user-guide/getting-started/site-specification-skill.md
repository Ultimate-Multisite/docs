---
title: Site Specification Skill
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Sailaren Kontseilua Jainazioa {#site-specification-skill}

**Sailaren kontseilua (Site Specification) jugakundia** da irudiatu, diseinatzeko eta marka-identitatea (brand identity) hartzeko estruktura bat. Horrek **site_brief** memori horretan ematen da, zehalduetan arteko agente-ek erabiltzen dute kontestu-eraketa eta ondo jakinarazten laguntzeko.

## Sailaren Kontseilua Zer da? {#what-is-site-specification}

Sailaren kontseilua da dokumentatu edo eskatzen da:

- **Site-aren objektua**: Zer egiten duzu eta zerbitzatzeko dagoen eragitema
- **Target publikoa**: Zerren irudiak joaten da eta zer behar dute
- **Marka-identitatea (Brand identity)**: Irekia, tonoa eta visuelari estiloa
- **Biznesko objektuak**: Site-aren ondo egindua jakin nahi duzu
- **Kontuentu-estruktura**: Site-aren ordaindiena

Hau kontseilua da zure **site_brief**, memori ezberdina (persistent memory) den agente-ek erabiltzen dute site-aren kontestuak zein jakinarazten.

## Sailaren Kontseilua Nondatez Erabiltzea? {#why-use-site-specification}

### Zehalduetan Arteko Kontsustua (Consistency Across Sessions) {#consistency-across-sessions}

site_brief ez dutenean, leku berri bat gaur duenean, site-aren objektua irudiatu behar duzu. Horrek dutenean, agente-ek hemen egiten dute:

- Site-aren objektuak eta publikoa
- Zure marka-irekia eta tonoa
- Kontuentu-estruktura
- Zure biznesko ondo egindutako jarduerak

### Hobitzak Kontseilua (Better Recommendations) {#better-recommendations}

Agente-ek site_brief erabilten dute:

- Site-aren objektuei batzuk pareatu funtunaldeak
- Zure objektuak eta ondo egindutako kontuentu-estrukturairekin pareatu kontuentuak
- Zure marka-identitatearekin pareatu diseinazioak
- Pareatu ez duzun funtunaldeak ematzea

### Alda Ondo Egindua (Faster Onboarding) {#faster-onboarding}

Agente-ek berriak (aldeko edo zehalduetan berriagatik) site_brief ikusten duenean, aukerak galdiztezkari jardutik lehen aurrera egin dezakete.

## Sailaren Kontseilua Aurreratzea {#initiating-site-specification}

### Theme Builder Onboardingan {#during-theme-builder-onboarding}

Site Specification jugakundia **Theme Builder onboarding flow**-aren parte batean automatikoki aurreratzen da. Setup Assistant agenteak galdizteak egiten du eta zure site_briefa sortzen du.

### Manual Aurreratzea {#manual-initiation}

Ezin ir lehen Site Specificationa gure daiteko:

```
"Mendia site-aren espezifikazioa definitu dezake"
```

noki

```
"Mendia site-aren briefa egokitzeko lagundu"
```

## Site Specification Prosesua {#the-site-specification-process}

### Irrenditua 1: Site-aren Amaia {#step-1-site-purpose}

Agenteak galdetzen du:

```
Nola daiteke site-aren amaia?
- E-commerce store (Handarpoko negozioa)
- Blog edo kontentu sitea
- Portfolio edo erakundea
- SaaS aplikazioa
- Komunitatea edo forum
- Beste: [deszkiritu]
```

Kategori bat aukeratu du edo amaia deszkiritu du.

### Irrenditua 2: Target Publikoa {#step-2-target-audience}

```
Nola daiteke target publikoa?
- Kontsumitorrak / publiko nagusia
- Profesionalak negozioetan
- Desarrolladorrak / erabiltza teknikoak
- Estudianteak / edukiaileak
- Beste: [deszkiritu]

Zer da irudiaren beharrak garrantzitsuak?
```

Zer da irudiaren beharrak garrantzitsuak?

### Irrenditua 3: Brand Identitatea {#step-3-brand-identity}

```
Nola daiteke brandaren kolorrak?
- Kolore nagusia: [kolor erresaltatzailea edo hex kodea]
- Kolore sekundaria: [kolor erresaltatzailea edo hex kodea]
- Kolore erresaltatzaile (opcional): [deszkiritu]

Nola adierazpen egin daiteke brandaren tonoa?
- Profesional / korporatibo
- Kreatiba / artistikoa
- Juguetxea / kasual
- Minimalista / modern
- Ondatu / lagun

```

### Irrenditua 4: Biznesko Amaiak {#step-4-business-goals}

```
Site-aren amaia zer eskatzen da?
- Lehenakarguak (leads) generatzea
- Produkzioak saldzea
- Komunitatea itxartzea
- Ezpotua irudiak (knowledge) jardutzea
- Autoritatea emateak
- Beste: [deszkiritu]

Zer da amaia garrantzitsuak metrikoa?
- Inguruko erresaltatza (Revenue)
- Erabiltzailearen jarduera (User engagement)
- Kontentuen irudiak (Content reach)
- Konversioak (Conversions)
- Beste
```

### Irrenditua 5: Kontentuen Estruktura {#step-5-content-structure}

```
Nola daiteke kontentua organizatuta?
- Flat (kontentua alkarte berriaan)
- Hierarkikoa (kategoria eta subkategoriak)
- Kronologikoa (blog-estiloa)
- Produkzio-baziko (katalogoa)
- Beste: [deszkiritu]

Zer kontentuen bidez erabiltzen du?
- Blog postak
- Produkzio-gehiak (Product pages)
- Kasu-estudioak (Case studies)
- Dokumentazioa
- Videoak
- Beste
```

## Site_brief Memorya Zure {#your-sitebrief-memory}

Site Specificationa amaitu ondoren, informazioak **site_brief** gisa saioz daiteke agentearen memoryan. Horren da irudialko emateko:

## Site-brief-enpatu eta jartzea {#viewing-and-updating-your-sitebrief}

### Site-briefa ikuspe {#view-your-sitebrief}
Gaitzi agentariari:

```
"Meni site-briefa erakitu"
```

noki

```
"Meni site-aren arte ez daude?"
```

Agentariak informazioa saioa izango du.

### Site-briefa updateatzea {#update-your-sitebrief}
Sitea ondorioz handitu eta gehiago dauden, updatea dezakezu:

```
"Meni site-briefa updateatu: B2B kliuntzak dira gure irudiak orain"
```

noki

```
"Meni site-aren spesifikazioa berri ezartu"
```

Hau Site Specification skilla berri ezartuko da, jakin dituen informazioa lehen puntak izateko.

## Agentariek site-briefa erabiltzen dira {#how-agents-use-sitebrief}

### Dizainio rekomendazioak {#design-recommendations}
Dizainio hasierako erantzunak gautela site-briefan dagoen:

```
Zure: "Meni homepagea redizain"
Agentari: "Site-briefan dagoen informazioaren arabera, 25-45 urteko women irudietatik aurkitzen dira eta gertu-arteski tono bat daude. Handmade jewelry eta erabilgarritasun arloak emateko dizainio bat ezarri egingo."
```

### Funktionalitatearen jendera {#feature-suggestions}
Agentariek zure objektuetan ondo egon dituzten funtzioak saioatzen dute:

```
Zure: "Nola funtazioak gehiago ematea dauden?"
Agentari: "Klientziaren fideltasunarekin fokatu duen e-commerce store bat dela, fideltasun programa, klientziaren irudien lekuak (reviews), email newsletter eta produkzio rekomendazioak saioatzen dut."
```

### Kontuentuaren jendera {#content-structure}
Agentariek zure estruktura eskatuta kontuentuaren organizazioa saioatzen dute:

Sagitale: "Zer moduan ez da blogu bide?"
Agentea: "WordPress-ek product catalogdiare blogu erabiltzen du, non postezak produkt kategorian sortzeko eta 'styling guides' egiteko ematen dut."

## Praktikak Hobola {#best-practices}

### Ezin da Ezpiritu {#be-specific}

"Ez dago guztiaren" edo "general audience" ez baduzu, zure publikoa deskribatu:

- ✓ "Emezak 25-45 urtean, errespetu eta moda eskaintzen interes dituztenak"
- ✗ "Guztia"

### Aurreratuta Updatea {#update-regularly}

Zure webu aurrekin handitu ondorioz, zure `site_brief` updateatu:

- Publikoa berri bati iruditzen duenean
- Produkt lehiak berriak jartzen duenean
- Zure brand identitatea aldatuenean
- Zure negozioa partebaitzak aldatuenean

### Terminologia Ondoan Mantitu {#use-consistent-terminology}

Sesio guztietan beste termino ezberdinetatik erabiliz:

- ✓ "sustainable jewelry" (ez "eco-friendly jewelry" eta "green products") esaten ditu
- ✓ Publikoa bere felpena egiteko kontinua erabiltu

### Kontestu Inkluditu {#include-context}

Agenteak informazioa zehazteko kontestuak emitu:

- "Kalitatea prezioaren ondorekin jartzen dituzten profesionalak dira"
- "Publikoa teknologiazko eta diseinu modern bat eskatzen dituz."
- "Bootstrapped startup batzuk dira, gertatzen da soluzioak kostu-efektiboa izan behar dute."

## Theme Builder Onboardingarekin Hautak {#relationship-to-theme-builder-onboarding}

Site Specification skill-ek **Theme Builder onboarding flow**-re integratu dago. Onboardinga amaitu ondoren, zure `site_brief` informazioak ematen duten beti sortuta da.

Zure spesifikazioa independentean ere eratu dezakezu, hori nahi du:

- Lehen eskaintzeko aukera izan behar duen artean spesifikazioa refineatzeko
- Zure webu aurrekin handitu ondoren `site_brief` updateatzea
- Theme Builder gaur egindian hasten den artean detallatuta spesifikazioa sortzeko

## Problema Eratu {#troubleshooting}

**Mezuak ez da erabiltzen ari dela**
- Agenteak memoria (memory) erabiliz lehenengatik kontrolatu
- Agentia esaten dio "mezuak egindua" (recall my site brief)
- Zure aukeretan memoria aktiboa dagoela kontrolatu

**Niaren da hautala berri le erregi batean**
- Agenteari gaut: "Clear my site brief and start fresh" (Site brief-ak zeratu eta hasieran jarri)
- Horrek ondoren Site Specification-a jartu daukatu

**Agenteak site_brief-ekin ezberdesteko emateko emateke egiten du**
- Agenteari gaut: "review my site brief" (Site brief-ak ikusi/ezberdestea)
- Hau daiteke site_brief-ak eguneratuta dagoenean jarri
- Proposak berri kontekstua ematen dituzteko

## Irudiak {#next-steps}

Site specification-ak definitu egin ondoren:

1. **Use Theme Builder**: Site brief-aren bozerra eskatzen du custom theme bat jartu (Create)
2. **Refine Design**: Detallatutako design-er buruzko lanetan Design System Aesthetics skill-a erabiliz
3. **Plan Content**: Kontuentu estruktura rekomendazioak aldatzeko agenteetari gaut
4. **Build Features**: Irekia bizigune negozio-objetiboekin jartzen dituzten feature-ek eskatzen du
