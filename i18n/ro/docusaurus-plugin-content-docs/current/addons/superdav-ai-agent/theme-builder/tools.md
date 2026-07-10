---
title: Instrumente și configurare
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Instrumente și configurare {#tools-and-configuration}

Theme Builder folosește un set de instrumente pentru a analiza, proiecta și construi site-ul tău WordPress. În versiunea 1.16.0, **sd-ai-agent/site-scrape este acum un instrument Tier 1**, fiind disponibil implicit în Theme Builder. Superdav AI Agent v1.18.0 introduce, de asemenea, un pachet companion Advanced distribuit separat pentru fluxuri de lucru de dezvoltare de încredere; acele instrumente nu fac parte din pachetul core WordPress.org și trebuie instalate și autorizate separat.

## Instrumente disponibile {#available-tools}

### Instrumente Tier 1 (disponibile întotdeauna) {#tier-1-tools-always-available}

Instrumentele Tier 1 sunt disponibile implicit în Theme Builder fără nicio configurare suplimentară.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Scop:** Analizează site-uri web existente pentru a extrage inspirație de design, structură de conținut și funcționalitate.

**Capacități:**

- **Analiza site-urilor web** — extrage și analizează site-uri web ale concurenților sau surse de inspirație
- **Extragerea designului** — identifică culori, fonturi și tipare de aranjare în pagină
- **Structura conținutului** — înțelege organizarea și ierarhia paginilor
- **Detectarea funcționalităților** — identifică pluginuri și funcționalități
- **Analiza performanței** — verifică viteza paginii și optimizarea
- **Analiza SEO** — revizuiește etichetele meta și datele structurate

**Utilizare:**

```
Analizează designul example.com și folosește-l ca inspirație pentru site-ul meu.
```

**Ce extrage:**

- Paleta de culori și utilizarea culorilor
- Tipografia (fonturi și dimensiuni)
- Structura aranjării în pagină și spațierea
- Tiparele de navigare
- Organizarea conținutului
- Utilizarea imaginilor și a conținutului media
- Elemente interactive
- Responsivitate mobilă

**Limitări:**

- Nu poate extrage date din site-uri protejate prin parolă
- Respectă robots.txt și politicile site-ului
- Este posibil să nu captureze conținut dinamic
- Site-urile bazate intens pe JavaScript pot avea analiză limitată
- Site-urile mari pot necesita mai mult timp pentru analiză

### Instrumente Tier 2 (opționale) {#tier-2-tools-optional}

Instrumentele Tier 2 sunt disponibile când sunt activate explicit în setările Theme Builder.

#### Analiză avansată {#advanced-analytics}

Oferă metrici detaliate de performanță:

- Timpi de încărcare a paginii
- Core Web Vitals
- Scor SEO
- Scor de accesibilitate
- Scor pentru bune practici

#### Optimizator de conținut {#content-optimizer}

Analizează și sugerează îmbunătățiri pentru:

- Lizibilitate
- Optimizare SEO
- Utilizarea cuvintelor-cheie
- Structura conținutului
- Plasarea apelurilor la acțiune

### Instrumente Tier 3 (Premium) {#tier-3-tools-premium}

Instrumentele Tier 3 necesită configurare suplimentară sau funcționalități premium.

#### Generator de conținut AI {#ai-content-generator}

Generează conținut pentru:

- Descrieri de produse
- Pagini de servicii
- Articole de blog
- Descrieri meta
- Text pentru apeluri la acțiune

#### Instrumente avansate de design {#advanced-design-tools}

Oferă capacități avansate de design:

- Generare CSS personalizat
- Creare de animații
- Design de elemente interactive
- Teorie avansată a culorilor
- Optimizarea tipografiei

### Instrumente companion Advanced (pachet separat) {#advanced-companion-tools-separate-package}

Pachetul companion Advanced este distribuit separat de versiunea core Superdav AI Agent. Este destinat mediilor de dezvoltare și deținătorilor de site-uri de încredere, unde administratorii permit explicit agentului să folosească instrumente cu impact ridicat.

Capacitățile companion Advanced pot include:

- **Instrumente pentru sistemul de fișiere** — inspectează și modifică fișiere aprobate în medii de încredere
- **Instrumente pentru baza de date** — interoghează sau actualizează datele site-ului când este autorizat explicit
- **Instrumente WP-CLI** — rulează comenzi de întreținere și inspecție WordPress
- **Instrumente de dispecer REST** — apelează endpointuri REST înregistrate prin fluxuri de dispecerizare controlate
- **Instrumente pentru construirea de pluginuri** — generează schelete și iterează pe cod de plugin
- **Instrumente pentru snapshoturi Git** — creează snapshoturi înaintea operațiunilor riscante de dezvoltare
- **Instrumente de gestionare a utilizatorilor** — ajută la revizuirea sau ajustarea înregistrărilor utilizatorilor unde este permis
- **Instrumente de benchmark** — rulează benchmarkuri de performanță sau capabilitate pentru revizuirea de dezvoltare

Nu documenta aceste instrumente ca instrumente Theme Builder disponibile în general pentru fiecare instalare. Sunt disponibile numai când pachetul companion Advanced este instalat, activat și restricționat la administratori de încredere.

## Configurarea instrumentelor {#tool-configuration}

### Activarea instrumentelor {#enabling-tools}

Pentru a activa instrumente suplimentare în Theme Builder:

1. Navighează la **Gratis AI Agent → Settings**
2. Mergi la **Theme Builder → Tools**
3. Activează/dezactivează instrumentele după cum este necesar
4. Salvează setările

### Permisiuni pentru instrumente {#tool-permissions}

Unele instrumente necesită permisiuni:

- **Extragerea datelor din site** — necesită acces la internet
- **Analiză** — necesită integrare Google Analytics
- **Generare de conținut** — necesită chei API
- **Funcționalități avansate** — pot necesita abonament premium
- **Instrumente companion Advanced** — necesită pachetul Advanced distribuit separat și încredere explicită din partea administratorului

### Chei API și credențiale {#api-keys-and-credentials}

Configurează cheile API pentru instrumentele care le necesită:

1. Mergi la **Gratis AI Agent → Settings → API Keys**
2. Introdu credențialele pentru fiecare instrument
3. Testează conexiunea
4. Salvează în siguranță

### Instalarea pachetului companion Advanced {#installing-the-advanced-companion-package}

Pachetul companion Advanced este lansat separat de ZIP-ul core WordPress.org. Instalează-l numai din canalul oficial de distribuție al proiectului pentru versiunea respectivă, apoi restricționează accesul la administratori de încredere. Revizuiește porțile de aprobare umană și comportamentul snapshoturilor git înainte de a activa instrumente pentru sistemul de fișiere, baza de date, WP-CLI, dispecer REST, construire de pluginuri, gestionare a utilizatorilor sau benchmark pe un site de producție.

## Utilizarea sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Utilizare de bază {#basic-usage}

Cere Theme Builder să analizeze un site web:

```
Analizează designul site-ului concurentului meu de la competitor.com
și sugerează îmbunătățiri de design pentru site-ul meu.
```

### Analiză specifică {#specific-analysis}

Solicită tipuri specifice de analiză:

```
Extrage paleta de culori din example.com și folosește-o ca inspirație.
```

```
Analizează structura de navigare a example.com și aplică o organizare
similară site-ului meu.
```

```
Verifică responsivitatea mobilă a example.com și asigură-te că site-ul meu
este la fel de responsiv.
```

### Analiză comparativă {#comparison-analysis}

Compară mai multe site-uri:

```
Compară designurile site1.com și site2.com și creează un design
care combină cele mai bune elemente ale ambelor.
```

## Limitări și considerații privind instrumentele {#tool-limitations-and-considerations}

### Limitarea ratei {#rate-limiting}

- Scraping-ul are limitare de rată pentru a preveni supraîncărcarea serverului
- Solicitările multiple către același site pot fi încetinite
- Site-urile mari pot dura mai mult de analizat

### Acuratețea conținutului {#content-accuracy}

- Conținutul dinamic poate să nu fie capturat complet
- Conținutul redat prin JavaScript poate fi incomplet
- Datele în timp real pot să nu fie reflectate
- Unele conținuturi pot fi în spatele unor paywall-uri

### Considerații juridice și etice {#legal-and-ethical-considerations}

- Respectă robots.txt și politicile site-ului
- Nu extrage conținut protejat prin drepturi de autor pentru reproducere
- Folosește analiza pentru inspirație, nu pentru copiere
- Verifică dacă ai drepturi să folosești conținutul extras
- Respectă termenii de utilizare ai site-urilor analizate

### Impact asupra performanței {#performance-impact}

- Scraping-ul site-urilor mari poate dura
- Scraping-urile multiple simultane pot fi mai lente
- Conectivitatea la rețea afectează viteza
- Seturile mari de date pot necesita mai multă procesare

## Cele mai bune practici {#best-practices}

### Utilizarea analizei site-ului {#using-site-analysis}

1. **Analizează mai multe site-uri** — adună inspirație din mai multe surse
2. **Concentrează-te pe structură** — învață tipare de layout și organizare
3. **Extrage culori** — folosește paletele de culori ca puncte de plecare
4. **Studiază tipografia** — identifică combinațiile de fonturi care îți plac
5. **Revizuiește navigarea** — înțelege organizarea meniului

### Scraping etic {#ethical-scraping}

1. **Respectă robots.txt** — urmează ghidurile site-ului
2. **Nu copia conținut** — folosește analiza doar pentru inspirație
3. **Verifică drepturile** — asigură-te că poți folosi conținutul extras
4. **Atribuie sursele** — creditează sursele de inspirație
5. **Respectă termenii** — conformează-te termenilor de utilizare ai site-ului

### Maximizarea eficienței instrumentului {#maximizing-tool-effectiveness}

1. **Fii specific** — solicită tipuri specifice de analiză
2. **Oferă context** — explică scopul site-ului tău
3. **Stabilește așteptări** — descrie obiectivele tale de design
4. **Iterează** — rafinează pe baza rezultatelor
5. **Combină instrumente** — folosește mai multe instrumente pentru o analiză cuprinzătoare

## Depanare {#troubleshooting}

### Site-ul nu poate fi scanat prin scraping {#site-wont-scrape}

- Verifică dacă site-ul este accesibil public
- Verifică dacă robots.txt permite scraping-ul
- Încearcă un alt site
- Verifică conexiunea la internet
- Contactează suportul dacă problema persistă

### Analiză incompletă {#incomplete-analysis}

- Site-ul poate avea conținut dinamic
- JavaScript poate să nu fie redat complet
- Site-urile mari pot expira
- Încearcă să analizezi pagini specifice în schimb
- Solicită tipuri specifice de analiză

### Performanță lentă {#slow-performance}

- Site-urile mari durează mai mult de analizat
- Scraping-urile multiple simultane sunt mai lente
- Conectivitatea la rețea afectează viteza
- Încearcă în afara orelor de vârf
- Analizează mai întâi secțiuni mai mici

## Documentație conexă {#related-documentation}

- [Interviu de descoperire](./discovery-interview.md) — adună informații de design
- [Direcție de design](./design-direction.md) — rafinează-ți designul
- [Meniuri pentru ospitalitate](./hospitality-menus.md) — creează pagini de meniu
