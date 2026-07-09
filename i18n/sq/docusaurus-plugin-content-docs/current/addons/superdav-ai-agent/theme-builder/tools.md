---
title: Mjetet dhe konfigurimi
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Mjetet dhe konfigurimi

Theme Builder përdor një grup mjetesh për të analizuar, dizajnuar dhe ndërtuar sajtin tuaj WordPress. Në versionin 1.16.0, **sd-ai-agent/site-scrape tani është një mjet i Nivelit 1**, duke e bërë të disponueshëm si parazgjedhje në Theme Builder. Superdav AI Agent v1.18.0 prezanton gjithashtu një paketë shoqëruese Advanced të shpërndarë veçmas për rrjedha pune të besuara zhvilluesish; këto mjete nuk janë pjesë e paketës bazë WordPress.org dhe duhet të instalohen dhe autorizohen veçmas.

## Mjetet e disponueshme

### Mjetet e Nivelit 1 (Gjithmonë të disponueshme)

Mjetet e Nivelit 1 janë të disponueshme si parazgjedhje në Theme Builder pa asnjë konfigurim shtesë.

#### sd-ai-agent/site-scrape

**Qëllimi:** Analizon sajte ekzistuese për të nxjerrë frymëzim dizajni, strukturë përmbajtjeje dhe funksionalitet.

**Aftësitë:**

- **Analizë sajti** — mbledh dhe analizon sajte konkurrentësh ose frymëzimi
- **Nxjerrje dizajni** — identifikon ngjyrat, fontet dhe modelet e planimetrisë
- **Strukturë përmbajtjeje** — kupton organizimin dhe hierarkinë e faqeve
- **Zbulim veçorish** — identifikon shtojca dhe funksionalitet
- **Analizë performance** — kontrollon shpejtësinë e faqes dhe optimizimin
- **Analizë SEO** — shqyrton meta tag-et dhe të dhënat e strukturuara

**Përdorimi:**

```
Analizo dizajnin e example.com dhe përdore si frymëzim për sajtin tim.
```

**Çfarë nxjerr:**

- Paletën e ngjyrave dhe përdorimin e ngjyrave
- Tipografinë (fontet dhe madhësitë)
- Strukturën e planimetrisë dhe hapësirat
- Modelet e navigimit
- Organizimin e përmbajtjes
- Përdorimin e imazheve dhe mediave
- Elementet ndërvepruese
- Përshtatshmërinë për pajisje mobile

**Kufizimet:**

- Nuk mund të mbledhë të dhëna nga sajte të mbrojtura me fjalëkalim
- Respekton robots.txt dhe politikat e sajtit
- Mund të mos kapë përmbajtje dinamike
- Sajtet me shumë JavaScript mund të kenë analizë të kufizuar
- Sajtet e mëdha mund të kërkojnë më shumë kohë për analizë

### Mjetet e Nivelit 2 (Opsionale)

Mjetet e Nivelit 2 janë të disponueshme kur aktivizohen shprehimisht në cilësimet e Theme Builder.

#### Analitika e avancuar

Ofron metrika të detajuara performance:

- Kohët e ngarkimit të faqes
- Core Web Vitals
- Pikëzimi SEO
- Pikëzimi i aksesueshmërisë
- Pikëzimi i praktikave më të mira

#### Optimizuesi i përmbajtjes

Analizon dhe sugjeron përmirësime për:

- Lexueshmërinë
- Optimizimin SEO
- Përdorimin e fjalëve kyçe
- Strukturën e përmbajtjes
- Vendosjen e thirrjeve për veprim

### Mjetet e Nivelit 3 (Premium)

Mjetet e Nivelit 3 kërkojnë konfigurim shtesë ose veçori premium.

#### Gjeneratori i përmbajtjes me AI

Gjeneron përmbajtje për:

- Përshkrime produktesh
- Faqe shërbimesh
- Postime blogu
- Meta përshkrime
- Tekst thirrjeje për veprim

#### Mjete të avancuara dizajni

Ofron aftësi të avancuara dizajni:

- Gjenerim CSS të personalizuar
- Krijim animacionesh
- Dizajn elementesh ndërvepruese
- Teori të avancuar ngjyrash
- Optimizim tipografie

### Mjetet shoqëruese Advanced (Paketë e veçantë)

Paketa shoqëruese Advanced shpërndahet veçmas nga publikimi bazë i Superdav AI Agent. Ajo është menduar për mjedise të besuara zhvilluesish dhe pronarësh sajtesh, ku administratorët e lejojnë shprehimisht agjentin të përdorë mjete me ndikim të lartë.

Aftësitë shoqëruese Advanced mund të përfshijnë:

- **Mjete të sistemit të skedarëve** — inspektojnë dhe modifikojnë skedarë të miratuar në mjedise të besuara
- **Mjete baze të dhënash** — kërkojnë ose përditësojnë të dhëna sajti kur autorizohen shprehimisht
- **Mjete WP-CLI** — ekzekutojnë komanda mirëmbajtjeje dhe inspektimi për WordPress
- **Mjete shpërndarësi REST** — thërrasin REST endpoints të regjistruara përmes rrjedhave të kontrolluara të shpërndarjes
- **Mjete ndërtuesi shtojcash** — krijojnë skelet dhe përsërisin mbi kodin e shtojcave
- **Mjete snapshots Git** — krijojnë snapshots përpara operacioneve të rrezikshme zhvillimi
- **Mjete menaxhimi përdoruesish** — ndihmojnë në shqyrtimin ose rregullimin e regjistrave të përdoruesve aty ku lejohet
- **Mjete benchmark** — ekzekutojnë benchmark-e performance ose aftësish për shqyrtim zhvillimi

Mos i dokumentoni këto si mjete Theme Builder përgjithësisht të disponueshme për çdo instalim. Ato janë të disponueshme vetëm kur paketa shoqëruese Advanced është instaluar, aktivizuar dhe kufizuar për administratorë të besuar.

## Konfigurimi i mjeteve

### Aktivizimi i mjeteve

Për të aktivizuar mjete shtesë në Theme Builder:

1. Shkoni te **Gratis AI Agent → Settings**
2. Shkoni te **Theme Builder → Tools**
3. Aktivizoni/çaktivizoni mjetet sipas nevojës
4. Ruani cilësimet

### Lejet e mjeteve

Disa mjete kërkojnë leje:

- **Mbledhja e të dhënave nga sajti** — kërkon akses në internet
- **Analitika** — kërkon integrim me Google Analytics
- **Gjenerimi i përmbajtjes** — kërkon API keys
- **Veçoritë e avancuara** — mund të kërkojnë abonim premium
- **Mjetet shoqëruese Advanced** — kërkojnë paketën Advanced të shpërndarë veçmas dhe besim të shprehur të administratorit

### API Keys dhe kredencialet

Konfiguroni API keys për mjetet që i kërkojnë:

1. Shkoni te **Gratis AI Agent → Settings → API Keys**
2. Futni kredencialet për çdo mjet
3. Testoni lidhjen
4. Ruani në mënyrë të sigurt

### Instalimi i paketës shoqëruese Advanced

Paketa shoqëruese Advanced publikohet veçmas nga ZIP-i bazë WordPress.org. Instalojeni vetëm nga kanali zyrtar i shpërndarjes së projektit për publikimin, pastaj kufizoni aksesin për administratorë të besuar. Shqyrtoni portat e miratimit njerëzor dhe sjelljen e snapshot-eve git përpara se të aktivizoni mjetet e sistemit të skedarëve, bazës së të dhënave, WP-CLI, shpërndarësit REST, ndërtuesit të shtojcave, menaxhimit të përdoruesve ose benchmark në një sajt prodhimi.

## Përdorimi i sd-ai-agent/site-scrape

### Përdorimi bazë

Kërkojini Theme Builder të analizojë një sajt:

```
Analizo dizajnin e sajtit të konkurrentit tim në competitor.com
dhe sugjero përmirësime dizajni për sajtin tim.
```

### Analizë specifike

Kërkoni lloje specifike analize:

```
Nxirr paletën e ngjyrave nga example.com dhe përdore si frymëzim.
```

```
Analizo strukturën e navigimit të example.com dhe apliko organizim
të ngjashëm në sajtin tim.
```

```
Kontrollo përshtatshmërinë mobile të example.com dhe sigurohu që sajti im
të jetë po aq i përshtatshëm.
```

### Analizë krahasuese

Krahasoni disa sajte:

```
Krahasoni dizajnet e site1.com dhe site2.com dhe krijoni një dizajn
që kombinon elementet më të mira të të dyjave.
```

## Kufizimet dhe konsideratat e mjeteve

### Kufizimi i ritmit

- Scraping është i kufizuar me normë për të parandaluar mbingarkimin e serverit
- Kërkesa të shumta në të njëjtin site mund të ngadalësohen
- Site të mëdha mund të kërkojnë më shumë kohë për t’u analizuar

### Saktësia e përmbajtjes

- Përmbajtja dinamike mund të mos kapet plotësisht
- Përmbajtja e renderuar me JavaScript mund të jetë e paplotë
- Të dhënat në kohë reale mund të mos pasqyrohen
- Disa përmbajtje mund të jenë pas paywalls

### Konsiderata ligjore dhe etike

- Respektoni robots.txt dhe politikat e site
- Mos bëni scraping të përmbajtjes me të drejta autori për riprodhim
- Përdorni analizën për frymëzim, jo për kopjim
- Verifikoni që keni të drejta për të përdorur përmbajtjen e nxjerrë
- Ndiqni kushtet e shërbimit të site të analizuara

### Ndikimi në performancë

- Scraping i site të mëdha mund të marrë kohë
- Scraping të shumëfishta të njëkohshme mund të jenë më të ngadalta
- Lidhja e rrjetit ndikon në shpejtësi
- Grupe të mëdha të dhënash mund të kërkojnë më shumë përpunim

## Praktikat më të mira

### Përdorimi i analizës së site

1. **Analizoni disa site** — mblidhni frymëzim nga disa burime
2. **Përqendrohuni te struktura** — mësoni modelet e faqosjes dhe organizimit
3. **Nxirrni ngjyrat** — përdorni paletat e ngjyrave si pika fillestare
4. **Studioni tipografinë** — identifikoni kombinimet e fonteve që ju pëlqejnë
5. **Rishikoni navigimin** — kuptoni organizimin e menusë

### Scraping etik

1. **Respektoni robots.txt** — ndiqni udhëzimet e site
2. **Mos kopjoni përmbajtje** — përdorni analizën vetëm për frymëzim
3. **Verifikoni të drejtat** — sigurohuni që mund ta përdorni përmbajtjen e nxjerrë
4. **Atribuoni burimet** — jepuni kredit burimeve të frymëzimit
5. **Ndiqni kushtet** — respektoni kushtet e shërbimit të site

### Maksimizimi i efektivitetit të mjetit

1. **Jini specifik** — kërkoni lloje specifike analizash
2. **Jepni kontekst** — shpjegoni qëllimin e site tuaj
3. **Vendosni pritshmëri** — përshkruani synimet tuaja të dizajnit
4. **Përsëritni** — rafinoni bazuar në rezultate
5. **Kombinoni mjetet** — përdorni disa mjete për analizë gjithëpërfshirëse

## Zgjidhja e problemeve

### Site nuk mund të bëhet scrape

- Kontrolloni nëse site është publikisht i aksesueshëm
- Verifikoni që robots.txt lejon scraping
- Provoni një site tjetër
- Kontrolloni lidhjen e internetit
- Kontaktoni support nëse problemi vazhdon

### Analizë e paplotë

- Site mund të ketë përmbajtje dinamike
- JavaScript mund të mos renderohet plotësisht
- Site të mëdha mund të skadojnë nga koha
- Provoni të analizoni faqe specifike në vend të kësaj
- Kërkoni lloje specifike analizash

### Performancë e ngadaltë

- Site të mëdha kërkojnë më shumë kohë për t’u analizuar
- Scraping të shumëfishta të njëkohshme janë më të ngadalta
- Lidhja e rrjetit ndikon në shpejtësi
- Provoni gjatë orëve me ngarkesë të ulët
- Analizoni fillimisht seksione më të vogla

## Dokumentacion i lidhur

- [Intervistë zbulimi](./discovery-interview.md) — mblidhni informacion dizajni
- [Drejtimi i dizajnit](./design-direction.md) — rafinoni dizajnin tuaj
- [Menutë e mikpritjes](./hospitality-menus.md) — krijoni faqe menush
