---
title: Tools a Konfiguratioun
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Tools a Konfiguratioun

Theme Builder benotzt eng Rei vun Tools, fir Är WordPress-Site ze analyséieren, ze designen an opzebauen. An der Versioun 1.16.0 ass **sd-ai-agent/site-scrape elo en Tier-1-Tool**, wouduerch et standardméisseg am Theme Builder verfügbar ass. Superdav AI Agent v1.18.0 féiert och e separat verdeelten Advanced-Begleetpaket fir vertrauenswierdeg Entwéckler-Workflows an; dës Tools sinn net Deel vum WordPress.org-Kärpaket a musse separat installéiert an autoriséiert ginn.

## Verfügbar Tools

### Tier-1-Tools (ëmmer verfügbar)

Tier-1-Tools sinn standardméisseg am Theme Builder verfügbar, ouni zousätzlech Konfiguratioun.

#### sd-ai-agent/site-scrape

**Zweck:** Bestehend Websäiten analyséieren, fir Design-Inspiratioun, Inhaltsstruktur a Funktionalitéit ze extrahéieren.

**Fäegkeeten:**

- **Websäitenanalys** — Konkurrenten- oder Inspiratiouns-Websäite scrapen an analyséieren
- **Design-Extraktioun** — Faarwen, Schrëften a Layout-Musteren identifizéieren
- **Inhaltsstruktur** — Säitenorganisatioun an Hierarchie verstoen
- **Funktiounserkennung** — Plugins a Funktionalitéit identifizéieren
- **Leeschtungsanalys** — Säitegeschwindegkeet an Optimiséierung iwwerpréiwen
- **SEO-Analys** — Meta-Tags a strukturéiert Donnéeën iwwerpréiwen

**Benotzung:**

```
Analyséier den Design vun example.com a benotz en als Inspiratioun fir meng Site.
```

**Wat et extrahéiert:**

- Faarfpalette a Faarfbenotzung
- Typografie (Schrëften a Gréissten)
- Layout-Struktur an Ofstänn
- Navigatiounsmusteren
- Inhaltsorganisatioun
- Biller a Mediennotzung
- Interaktiv Elementer
- Mobil Responsivitéit

**Aschränkungen:**

- Kann keng passwuertgeschützte Siten scrapen
- Respektéiert robots.txt a Site-Richtlinnen
- Kann dynameschen Inhalt eventuell net erfassen
- JavaScript-schwéier Siten hu méiglecherweis eng limitéiert Analys
- Grouss Siten kënnen méi laang fir d'Analys brauchen

### Tier-2-Tools (optional)

Tier-2-Tools sinn verfügbar, wann se explizitt an den Theme Builder-Astellungen aktivéiert ginn.

#### Fortgeschratt Analytics

Bitt detailléiert Leeschtungsmetriken:

- Säiteluedzäiten
- Core Web Vitals
- SEO-Score
- Accessibilitéits-Score
- Best-Practices-Score

#### Inhaltsoptimiséierer

Analyséiert a proposéiert Verbesserunge fir:

- Liesbarkeet
- SEO-Optimiséierung
- Schlësselwierder-Notzung
- Inhaltsstruktur
- Platzéierung vu Call-to-action

### Tier-3-Tools (Premium)

Tier-3-Tools erfuerderen zousätzlech Konfiguratioun oder Premium-Funktiounen.

#### AI-Inhaltsgenerator

Generéiert Inhalt fir:

- Produktbeschreiwungen
- Service-Säiten
- Blog-Beiträg
- Meta-Beschreiwungen
- Call-to-action-Text

#### Fortgeschratt Design-Tools

Bitt fortgeschratt Design-Fäegkeeten:

- Generéiere vu personaliséiertem CSS
- Erstelle vun Animatiounen
- Design vun interaktiven Elementer
- Fortgeschratt Faarftheorie
- Typografie-Optimiséierung

### Advanced-Begleet-Tools (separate Package)

Den Advanced-Begleetpaket gëtt separat vun der Kär-Verëffentlechung vum Superdav AI Agent verdeelt. E ass fir vertrauenswierdeg Entwéckler- a Site-Besëtzer-Ëmfeld geduecht, wou Administrateuren dem Agent explizitt erlaben, Tooling mat héijem Impakt ze benotzen.

Advanced-Begleetfäegkeete kënnen enthalen:

- **Filesystem-Tools** — guttgeheescht Dateien a vertrauenswierdegen Ëmfeld inspizéieren an änneren
- **Datebank-Tools** — Site-Donnéeën offroen oder aktualiséieren, wann explizitt autoriséiert
- **WP-CLI-Tools** — WordPress-Maintenance- an Inspektiounsbefeeler ausféieren
- **REST-Dispatcher-Tools** — registréiert REST-Endpoints iwwer kontrolléiert Dispatch-Workflows opruffen
- **Plugin-Builder-Tools** — Plugin-Code scaffolden an iteréieren
- **Git-Snapshot-Tools** — Snapshots viru riskanten Entwéckleroperatiounen erstellen
- **Benotzerverwaltungs-Tools** — hëllefen, Benotzerrecords ze iwwerpréiwen oder unzepassen, wou et erlaabt ass
- **Benchmark-Tools** — Leeschtungs- oder Fäegkeets-Benchmarks fir Entwécklungsreview ausféieren

Dokumentéiert dës net als allgemeng verfügbar Theme Builder-Tools fir all Installatioun. Si sinn nëmme verfügbar, wann den Advanced-Begleetpaket installéiert, aktivéiert a fir vertrauenswierdeg Administrateuren ageschränkt ass.

## Tool-Konfiguratioun

### Tools aktivéieren

Fir zousätzlech Tools am Theme Builder ze aktivéieren:

1. Navigéiert op **Gratis AI Agent → Settings**
2. Gitt op **Theme Builder → Tools**
3. Schalt Tools no Bedarf un/aus
4. Späichert d'Astellungen

### Tool-Berechtegungen

E puer Tools erfuerderen Berechtegungen:

- **Site-Scraping** — erfuerdert Internetzougang
- **Analytics** — erfuerdert Google Analytics-Integratioun
- **Inhaltsgeneréierung** — erfuerdert API-Schlësselen
- **Fortgeschratt Funktiounen** — kënnen e Premium-Abonnement erfuerderen
- **Advanced-Begleet-Tools** — erfuerderen de separat verdeelten Advanced-Paket an explizitt Administrateursvertrauen

### API-Schlësselen a Login-Donnéeën

Konfiguréiert API-Schlësselen fir Tools, déi se erfuerderen:

1. Gitt op **Gratis AI Agent → Settings → API Keys**
2. Gitt Login-Donnéeë fir all Tool an
3. Test d'Verbindung
4. Späichert sécher

### Den Advanced-Begleetpaket installéieren

Den Advanced-Begleetpaket gëtt separat vum WordPress.org-Kär-ZIP verëffentlecht. Installéiert en nëmmen aus dem offiziellen Distributiounskanal vum Projet fir d'Verëffentlechung, a beschränkt duerno den Zougang op vertrauenswierdeg Administrateuren. Iwwerpréift mënschlech Zoustëmmungs-Gates a Git-Snapshot-Verhalen, éier Dir Filesystem-, Datebank-, WP-CLI-, REST-Dispatcher-, Plugin-Builder-, Benotzerverwaltungs- oder Benchmark-Tools op enger Produktiounssite aktivéiert.

## sd-ai-agent/site-scrape benotzen

### Basisbenotzung

Frot den Theme Builder, eng Websäit ze analyséieren:

```
Analyséier den Design vu menger Konkurrente-Site op competitor.com
a proposéier Design-Verbesserunge fir meng Site.
```

### Spezifesch Analys

Frot spezifesch Aarte vun Analys un:

```
Extrahéier d'Faarfpalette vun example.com a benotz se als Inspiratioun.
```

```
Analyséier d'Navigatiounsstruktur vun example.com a benotz eng änlech
Organisatioun fir meng Site.
```

```
Iwwerpréif d'mobil Responsivitéit vun example.com a stell sécher, datt meng Site
genausou responsiv ass.
```

### Vergläichsanalys

Vergläich méi Siten:

```
Vergläich d'Designe vu site1.com a site2.com a schaf en Design,
deen déi bescht Elementer vu béiden kombinéiert.
```

## Tool-Aschränkungen an Iwwerleeungen

### Rate Limiting

- Scraping ass rate-limitéiert, fir Serveriwwerlaaschtung ze vermeiden
- Méi Ufroen un déi selwecht Site kënne gedrosselt ginn
- Grouss Siten kënnen méi laang daueren, fir analyséiert ze ginn

### Genauegkeet vum Inhalt

- Dynameschen Inhalt gëtt eventuell net komplett erfaasst
- Inhalt, dee mat JavaScript gerendert gëtt, kann onvollstänneg sinn
- Echtzäitdaten ginn eventuell net reflektéiert
- Verschidden Inhalter kënnen hannert Paywalls leien

### Juristesch an ethesch Iwwerleeungen

- Respektéier robots.txt an d'Richtlinne vun der Site
- Scrap kee urheberrechtlech geschützten Inhalt fir Reproduktioun
- Benotz d'Analyse als Inspiratioun, net fir ze kopéieren
- Iwwerpréif, datt s du d'Rechter hues, fir extrahéierten Inhalt ze benotzen
- Befolleg d'Benotzungsbedéngunge vun den analyséierte Siten

### Auswierkung op d'Leeschtung

- Scraping vu grousse Siten kann Zäit daueren
- Méi gläichzäiteg Scrapes kënne méi lues sinn
- Netzwierkverbindung beaflosst d'Vitesse
- Grouss Datesätz kënnen méi Veraarbechtung erfuerderen

## Bescht Praktiken

### Site-Analyse benotzen

1. **Analyséier méi Siten** — sammelt Inspiratioun aus verschiddene Quellen
2. **Fokusséier op d'Struktur** — léier Layout- an Organisatiounsmusteren
3. **Extrahéier Faarwen** — benotz Faarfpaletten als Ausgangspunkten
4. **Studéier Typografie** — identifizéier Schrëftkombinatiounen, déi dir gefalen
5. **Iwwerpréif d'Navigatioun** — verstéi d'Organisatioun vum Menü

### Ethischt Scraping

1. **Respektéier robots.txt** — befolleg d'Richtlinne vun der Site
2. **Kopéier keen Inhalt** — benotz d'Analyse nëmme fir Inspiratioun
3. **Iwwerpréif Rechter** — stell sécher, datt s du extrahéierten Inhalt benotze kanns
4. **Gëff Quellen un** — nenn d'Inspiratiounsquellen
5. **Befolleg Bedéngungen** — respektéier d'Benotzungsbedéngunge vun der Site

### Effektivitéit vum Tool maximéieren

1. **Sief spezifesch** — fro no spezifeschen Aarte vun Analysen
2. **Gëff Kontext** — erklär den Zweck vun denger Site
3. **Setz Erwaardungen** — beschreif deng Designziler
4. **Iteréier** — verfeiner op Basis vun de Resultater
5. **Kombinéier Tools** — benotz méi Tools fir eng ëmfaassend Analyse

## Problemléisung

### Site léisst sech net scrapen

- Kontrolléier, ob d'Site ëffentlech zougänglech ass
- Iwwerpréif, ob robots.txt Scraping erlaabt
- Probéier eng aner Site
- Kontrolléier d'Internetverbindung
- Kontaktéier de Support, wann de Problem bestoe bleift

### Onvollstänneg Analyse

- D'Site kann dynameschen Inhalt hunn
- JavaScript gëtt eventuell net komplett gerendert
- Grouss Siten kënnen an en Timeout lafen
- Probéier amplaz spezifesch Säiten ze analyséieren
- Fro spezifesch Analysentypen un

### Lues Leeschtung

- Grouss Siten dauere méi laang ze analyséieren
- Méi gläichzäiteg Scrapes si méi lues
- Netzwierkverbindung beaflosst d'Vitesse
- Probéier et ausserhalb vun de Spëtzestonnen
- Analyséier fir d'éischt méi kleng Sektiounen

## Zesummenhängend Dokumentatioun

- [Discovery Interview](./discovery-interview.md) — Designinformatioune sammelen
- [Design Direction](./design-direction.md) — däin Design verfeineren
- [Hospitality Menus](./hospitality-menus.md) — Menüsäiten erstellen
