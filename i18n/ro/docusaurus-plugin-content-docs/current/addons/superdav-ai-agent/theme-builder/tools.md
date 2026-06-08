---
title: Instrumente și Configurare
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Instrumente și Configurare

Theme Builder folosește un set de instrumente pentru a analiza, proiecta și construi site-ul tău WordPress. În versiunea 1.16.0, **sd-ai-agent/site-scrape este acum un instrument de Nivel 1**, fiind disponibil implicit în Theme Builder.

## Instrumente Disponibile

### Instrumente de Nivel 1 (Disponibile Întotdeauna)

Instrumentele de Nivel 1 sunt disponibile implicit în Theme Builder, fără nicio configurare suplimentară.

#### sd-ai-agent/site-scrape

**Scop:** Analizează site-uri web existente pentru a extrage inspirație de design, structură de conținut și funcționalități.

**Capabilități:**

- **Analiza site-urilor web** — săcolește și analizează site-uri concurente sau surse de inspirație
- **Extragerea de design** — identifică culorile, fonturile și tiparele de layout
- **Structura de conținut** — înțelege organizarea și ierarhia paginii
- **Detectarea funcționalităților** — identifică plugin-uri și funcționalități
- **Analiza performanței** — verifică viteza paginii și optimizarea
- **Analiza SEO** — revizuiează meta tag-urile și datele structurate

**Utilizare:**

```
Analizează designul example.com și folosește-l ca inspirație pentru site-ul meu.
```

**Ce Extrage:**

- Paleta de culori și utilizarea acestora
- Tipografia (fonturi și mărimi)
- Structura layout-ului și spațierea
- Tiparele de navigare
- Organizarea conținutului
- Imagini și utilizarea mediilor
- Elementele interactive
- Adaptabilitatea pe dispozitive mobile

**Limitări:**

- Nu poate săcolește site-uri protejate de parole
- Respectă fișierele robots.txt și politicile site-ului
- Poate nu prinde conținutul dinamic
- Site-urile cu mult JavaScript pot avea o analiză limitată
- Site-urile mari pot necesita mai mult timp pentru analiză

### Instrumente de Nivel 2 (Opționale)

Instrumentele de Nivel 2 sunt disponibile atunci când sunt activate explicit în setările Theme Builder.

#### Advanced Analytics

Oferă metrici detaliate de performanță:

- Timpi de încărcare a paginii
- Core Web Vitals
- Scor SEO
- Scor de accesibilitate
- Scor de practici recomandate

#### Content Optimizer

Analizează și sugerează îmbunătățiri pentru:

- Citibilitate
- Optimizare SEO
- Utilizarea cuvintelor cheie
- Structura conținutului
- Plasamentul apelurilor la acțiune

### Instrumente de Nivel 3 (Premium)

Instrumentele de Nivel 3 necesită configurări suplimentare sau funcționalități premium.

#### AI Content Generator

Generează conținut pentru:

- Descrieri de produse
- Pagini de servicii
- Postări de blog
- Meta descrieri
- Text pentru apeluri la acțiune

#### Advanced Design Tools

Oferă capacități avansate de design:

- Generare de CSS personalizat
- Crearea de animații
- Design de elemente interactive
- Teoria culorilor avansată
- Optimizarea tipografiei

## Configurare Instrumente

### Activarea Instrumentelor

Pentru a activa instrumente suplimentare în Theme Builder:

1. Navighează la **Gratis AI Agent → Settings**
2. Mergi la **Theme Builder → Tools**
3. Activează/dezactivează instrumentele după nevoie
4. Salvează setările

### Permisiuni Instrumente

Unele instrumente necesită permisiuni:

- **Scraping de site-uri** — necesită acces la internet
- **Analitica** — necesită integrarea cu Google Analytics
- **Generarea de conținut** — necesită chei API
- **Funcționalități avansate** — pot necesita un abonament premium

### Chei API și Credențiale

Configurează cheile API pentru instrumentele care le necesită:

1. Mergi la **Gratis AI Agent → Settings → API Keys**
2. Introdu credențialele pentru fiecare instrument
3. Testează conexiunea
4. Salvează în siguranță

## Utilizarea sd-ai-agent/site-scrape

### Utilizare de Bază

Roagă Theme Builder să analizeze un site web:

```
Analizează designul site-ului meu concurent de la competitor.com
și sugerează îmbunătățiri de design pentru site-ul meu.
```

### Analiză Specifică

Solicită tipuri specifice de analiză:

```
Extrage paleta de culori de la example.com și folosește-o ca inspirație.
```

```
Analizează structura de navigare de la example.com și aplică o organizare similară
site-ului meu.
```

```
Verifică adaptabilitatea pe mobile de la example.com și asigură-te că site-ul meu
este la fel de adaptabil.
```

### Analiză Comparativă

Compară mai multe site-uri:

```
Compară designurile site1.com și site2.com și creează un design
care combină cele mai bune elemente ale ambelor.
```

## Limitări și Considerații privind Instrumentele

### Limitarea Ratei (Rate Limiting)

- Scraping-ul este limitat pentru a preveni supraîncărcarea serverului
- Multiple solicitări către același site pot fi restricționate
- Site-urile mari pot necesita mai mult timp pentru analiză

### Acuratețea Conținutului

- Conținutul dinamic poate nu fi capturat integral
- Conținutul renderizat cu JavaScript poate fi incomplet
- Datele în timp real pot nu fi reflectate
- Unele conținuturi pot fi protejate de paywall-uri

### Considerații Legale și Etice

- Respectă fișierele robots.txt și politicile site-ului
- Nu săcolești conținut protejat de drepturi de autor pentru reproducere
- Folosește analiza pentru inspirație, nu pentru copiere
- Verifică că ai dreptul de a folosi conținutul extras
- Urmează termenii de serviciu ai site-urilor analizate

### Impactul Performanței

- Scraping-ul site-urilor mari poate consuma timp
- Multiple scraping-uri simultane pot fi mai lente
- Conectivitatea rețelei afectează viteza
- Seturile de date mari pot necesita mai multă procesare

## Cele Mai Bune Practici

### Utilizarea Analizei Site-urilor

1. **Analizează mai multe site-uri** — colectează inspirație din surse diverse
2. **Concentrează-te pe structură** — învață tiparele de layout și organizare
3. **Extrage culori** — folosește paletele de culori ca punct de plecare
4. **Studează tipografia** — identifică combinațiile de fonturi care îți plac
5. **Revizuiează navigarea** — înțelege organizarea meniului

### Scraping Etic

1. **Respectă robots.txt** — urmează ghidurile site-ului
2. **Nu copia conținutul** — folosește analiza doar pentru inspirație
3. **Verifică drepturile** — asigură-te că poți folosi conținutul extras
4. **Atribuți sursele** — acreditează sursele de inspirație
5. **Urmează termenii** — respectă termenii de serviciu ai site-urilor

### Maximizarea Eficacității Instrumentelor

1. **Fii specific** — solicită tipuri specifice de analiză
2. **Oferă context** — explică scopul site-ului tău
3. **Stabilește așteptări** — descrie obiectivele de design
4. **Iterează** — rafinează pe baza rezultatelor
5. **Combină instrumentele** — folosește mai multe instrumente pentru o analiză cuprinzătoare

## Depanșare

### Site-ul nu se poate scrapa

- Verifică dacă site-ul este accesibil public
- Verifică dacă robots.txt permite scraping-ul
- Încearcă un alt site
- Verifică conexiunea la internet
- Contactează suportul dacă problema persistă

### Analiză Incompletă

- Site-ul poate avea conținut dinamic
- JavaScript-ul poate nu fi renderizat integral
- Site-urile mari pot expira (timeout)
- Încearcă să analizezi pagini specifice în schimb
- Solicită tipuri specifice de analiză

### Performanță Lentă

- Site-urile mari necesită mai mult timp pentru analiză
- Multiple scraping-uri simultane sunt mai lente
- Conectivitatea rețelei afectează viteza
- Încearcă în orele de trafic redus
- Analizează mai întâi secțiuni mai mici

## Documentație Relacionată

- [Discovery Interview](./discovery-interview.md) — colectează informații de design
- [Design Direction](./design-direction.md) — rafinează designul
- [Hospitality Menus](./hospitality-menus.md) — creează pagini de meniuri
