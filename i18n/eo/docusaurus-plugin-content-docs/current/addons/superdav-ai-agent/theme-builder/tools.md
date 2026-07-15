---
title: Iloj kaj Agordo
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Iloj kaj Agordo

Theme Builder uzas aron da iloj por analizi, dezajni kaj konstrui vian WordPress retejon. En versio 1.16.0, **sd-ai-agent/site-scrape nun estas ilo de Nivelo 1**, igante ĝin disponebla defaŭlte en Theme Builder. Superdav AI Agent v1.18.0 ankaŭ enkondukas aparte distribuitan Altnivelan kunulan pakaĵon por fidindaj programistaj laborfluoj; tiuj iloj ne estas parto de la kerna pakaĵo de WordPress.org kaj devas esti instalitaj kaj rajtigitaj aparte.

## Disponeblaj Iloj {#available-tools}

### Iloj de Nivelo 1 (Ĉiam Disponeblaj) {#tier-1-tools-always-available}

Iloj de Nivelo 1 estas disponeblaj defaŭlte en Theme Builder sen ajna aldona agordo.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Celo:** Analizi ekzistantajn retejojn por eltiri dezajnan inspiron, enhavostrukturon kaj funkciecon.

**Kapabloj:**

- **Reteja analizo** — skrapi kaj analizi konkurantajn aŭ inspirajn retejojn
- **Dezajna eltiro** — identigi kolorojn, tiparojn kaj aranĝajn ŝablonojn
- **Enhavostrukturo** — kompreni paĝan organizon kaj hierarkion
- **Funkcio-detekto** — identigi plugins kaj funkciecon
- **Rendimenta analizo** — kontroli paĝan rapidecon kaj optimumigon
- **SEO-analizo** — revizii meta-etikedojn kaj strukturitajn datumojn

**Uzado:**

```
Analizu la dezajnon de example.com kaj uzu ĝin kiel inspiron por mia retejo.
```

**Kion Ĝi Eltiras:**

- Kolorpaletro kaj koloruzo
- Tipografio (tiparoj kaj grandoj)
- Aranĝostrukturo kaj interspacado
- Navigadaj ŝablonoj
- Enhava organizado
- Bildoj kaj uzado de aŭdvidaĵoj
- Interagaj elementoj
- Poŝtelefona respondemo

**Limigoj:**

- Ne povas skrapi pasvort-protektitajn retejojn
- Respektas robots.txt kaj retejo-politikojn
- Eble ne kaptas dinamikan enhavon
- JavaScript-pezaj retejoj povas havi limigitan analizon
- Grandaj retejoj povas bezoni pli da tempo por analizi

### Iloj de Nivelo 2 (Laŭvolaj) {#tier-2-tools-optional}

Iloj de Nivelo 2 estas disponeblaj kiam eksplicite ebligitaj en agordoj de Theme Builder.

#### Altnivela Analitiko {#advanced-analytics}

Provizas detalajn rendimentajn metrikojn:

- Paĝaj ŝargotempoj
- Core Web Vitals
- SEO-poentaro
- Alirebleca poentaro
- Poentaro pri plej bonaj praktikoj

#### Enhava Optimumigilo {#content-optimizer}

Analizas kaj sugestas plibonigojn por:

- Legebleco
- SEO-optimumigo
- Ŝlosilvorta uzado
- Enhavostrukturo
- Lokigo de alvoko al ago

### Iloj de Nivelo 3 (Premium) {#tier-3-tools-premium}

Iloj de Nivelo 3 postulas aldonan agordon aŭ premium-funkciojn.

#### AI Enhavgeneratoro {#ai-content-generator}

Generas enhavon por:

- Produktaj priskriboj
- Servaj paĝoj
- Blogaj afiŝoj
- Meta-priskriboj
- Teksto por alvoko al ago

#### Altnivelaj Dezajnaj Iloj {#advanced-design-tools}

Provizas altnivelajn dezajnajn kapablojn:

- Propra CSS-generado
- Kreo de animacioj
- Dezajno de interagaj elementoj
- Altnivela kolorteorio
- Tipografia optimumigo

### Altnivelaj Kunulaj Iloj (Aparta Pakaĵo) {#advanced-companion-tools-separate-package}

La Altnivela kunula pakaĵo estas distribuita aparte de la kerna eldono de Superdav AI Agent. Ĝi estas destinita por fidindaj programistaj kaj retejposedantaj medioj, kie administrantoj eksplicite permesas al la agento uzi alt-efikajn ilojn.

Altnivelaj kunulaj kapabloj povas inkluzivi:

- **Dosiersistemaj iloj** — inspekti kaj modifi aprobitajn dosierojn en fidindaj medioj
- **Datumbazaj iloj** — pridemandi aŭ ĝisdatigi retejajn datumojn kiam eksplicite rajtigitaj
- **WP-CLI-iloj** — ruli WordPress prizorgajn kaj inspektajn komandojn
- **REST-dispeĉilaj iloj** — voki registritajn REST endpoints per kontrolitaj dispeĉaj laborfluoj
- **Plugin-konstruilaj iloj** — skafaldi kaj iteracii pri plugin-kodo
- **Git-momentkopiaj iloj** — krei momentkopiojn antaŭ riskaj programistaj operacioj
- **Uzantadministraj iloj** — helpi revizii aŭ ĝustigi uzantajn registrojn kie permesite
- **Riktmezuraj iloj** — ruli rendimentajn aŭ kapablajn riktmezurojn por programista revizio

Ne dokumentu ĉi tiujn kiel ĝenerale disponeblajn ilojn de Theme Builder por ĉiu instalado. Ili estas disponeblaj nur kiam la Altnivela kunula pakaĵo estas instalita, ebligita kaj limigita al fidindaj administrantoj.

## Ila Agordo {#tool-configuration}

### Ebligado de Iloj {#enabling-tools}

Por ebligi aldonajn ilojn en Theme Builder:

1. Navigu al **Gratis AI Agent → Agordoj**
2. Iru al **Theme Builder → Iloj**
3. Ŝaltu/malŝaltu ilojn laŭbezone
4. Konservu agordojn

### Ilaj Permesoj {#tool-permissions}

Iuj iloj postulas permesojn:

- **Reteja skrapado** — postulas interretan aliron
- **Analitiko** — postulas integriĝon kun Google Analytics
- **Enhavgenerado** — postulas API-ŝlosilojn
- **Altnivelaj funkcioj** — povas postuli premium-abonon
- **Altnivelaj kunulaj iloj** — postulas la aparte distribuitan Altnivelan pakaĵon kaj eksplicitan administrantan fidon

### API-Ŝlosiloj kaj Atestiloj {#api-keys-and-credentials}

Agordu API-ŝlosilojn por iloj, kiuj postulas ilin:

1. Iru al **Gratis AI Agent → Agordoj → API-Ŝlosiloj**
2. Enigu atestilojn por ĉiu ilo
3. Testu konekton
4. Konservu sekure

### Instalado de la Altnivela Kunula Pakaĵo {#installing-the-advanced-companion-package}

La Altnivela kunula pakaĵo estas eldonita aparte de la kerna WordPress.org ZIP. Instalu ĝin nur el la oficiala projekta distribua kanalo por la eldono, poste limigu aliron al fidindaj administrantoj. Reviziu homajn aprobajn pordojn kaj git-momentkopian konduton antaŭ ol ebligi dosiersistemajn, datumbazajn, WP-CLI, REST-dispeĉilajn, plugin-konstruilajn, uzantadministrajn aŭ riktmezurajn ilojn en produktada retejo.

## Uzado de sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Baza Uzado {#basic-usage}

Petu al Theme Builder analizi retejon:

```
Analizu la dezajnon de la retejo de mia konkuranto ĉe competitor.com
kaj sugestu dezajnajn plibonigojn por mia retejo.
```

### Specifa Analizo {#specific-analysis}

Petu specifajn tipojn de analizo:

```
Eltiru la kolorpaletron de example.com kaj uzu ĝin kiel inspiron.
```

```
Analizu la navigadan strukturon de example.com kaj apliku similan
organizadon al mia retejo.
```

```
Kontrolu la poŝtelefonan respondemon de example.com kaj certigu, ke mia retejo
estas same respondema.
```

### Kompara Analizo {#comparison-analysis}

Komparu plurajn retejojn:

```
Komparu la dezajnojn de site1.com kaj site2.com kaj kreu dezajnon
kiu kombinas la plej bonajn elementojn de ambaŭ.
```

## Ilaj Limigoj kaj Konsideroj {#tool-limitations-and-considerations}

### Rapideca Limigado {#rate-limiting}

- Scraping estas rapidec-limigita por malhelpi servilan troŝarĝon
- Multoblaj petoj al la sama retejo povas esti bremsitaj
- Grandaj retejoj povas postuli pli da tempo por analizi

### Precizeco de Enhavo {#content-accuracy}

- Dinamika enhavo eble ne estas plene kaptita
- Enhavo bildigita per JavaScript povas esti nekompleta
- Realtempaj datumoj eble ne estas reflektitaj
- Iu enhavo povas esti malantaŭ pagomuroj

### Juraj kaj Etikaj Konsideroj {#legal-and-ethical-considerations}

- Respektu robots.txt kaj retejajn politikojn
- Ne skrapu kopirajtan enhavon por reproduktado
- Uzu analizon por inspiro, ne por kopiado
- Kontrolu, ke vi havas rajtojn uzi eltiritaĵan enhavon
- Sekvu la servokondiĉojn de analizitaj retejoj

### Efikeca Efiko {#performance-impact}

- Scraping de grandaj retejoj povas postuli tempon
- Multoblaj samtempaj skrapoj povas esti pli malrapidaj
- Reta konektebleco influas rapidecon
- Grandaj datumaro povas postuli pli da prilaborado

## Plej Bonaj Praktikoj {#best-practices}

### Uzado de Reteja Analizo {#using-site-analysis}

1. **Analizu multoblajn retejojn** — kolektu inspiron el pluraj fontoj
2. **Fokusu je strukturo** — lernu aranĝajn kaj organizajn ŝablonojn
3. **Eltiru kolorojn** — uzu kolorpaletrojn kiel deirpunktojn
4. **Studu tipografion** — identigu tiparkajn kombinaĵojn, kiuj plaĉas al vi
5. **Reviziu navigadon** — komprenu menuan organizadon

### Etika Scraping {#ethical-scraping}

1. **Respektu robots.txt** — sekvu retejajn gvidliniojn
2. **Ne kopiu enhavon** — uzu analizon nur por inspiro
3. **Kontrolu rajtojn** — certigu, ke vi povas uzi eltiritaĵan enhavon
4. **Atribuu fontojn** — agnosku inspirfontojn
5. **Sekvu kondiĉojn** — obeu la servokondiĉojn de la retejo

### Maksimumigi Ilan Efikecon {#maximizing-tool-effectiveness}

1. **Estu specifa** — petu specifajn specojn de analizo
2. **Provizu kuntekston** — klarigu la celon de via retejo
3. **Fiksu atendojn** — priskribu viajn dezajnajn celojn
4. **Ripetu kaj rafinu** — rafinu laŭ rezultoj
5. **Kombinu ilojn** — uzu multoblajn ilojn por ampleksa analizo

## Problemsolvado {#troubleshooting}

### Retejo Ne Skrapiĝas {#site-wont-scrape}

- Kontrolu ĉu la retejo estas publike alirebla
- Kontrolu, ke robots.txt permesas scraping
- Provu alian retejon
- Kontrolu interretan konekton
- Kontaktu subtenon se la problemo daŭras

### Nekompleta Analizo {#incomplete-analysis}

- Retejo eble havas dinamikan enhavon
- JavaScript eble ne estas plene bildigita
- Grandaj retejoj povas superi tempolimon
- Provu analizi specifajn paĝojn anstataŭe
- Petu specifajn analizospecojn

### Malrapida Efikeco {#slow-performance}

- Grandaj retejoj postulas pli da tempo por analizi
- Multoblaj samtempaj skrapoj estas pli malrapidaj
- Reta konektebleco influas rapidecon
- Provu dum malpli okupataj horoj
- Analizu pli malgrandajn sekciojn unue

## Rilata Dokumentaro {#related-documentation}

- [Malkovra Intervjuo](./discovery-interview.md) — kolektu dezajnajn informojn
- [Dezajna Direkto](./design-direction.md) — rafinu vian dezajnon
- [Gastigadaj Menuoj](./hospitality-menus.md) — kreu menuajn paĝojn
