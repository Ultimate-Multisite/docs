---
title: Izveidot izvēlni
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Izveidot izvēlni

Funkcija **Izveidot izvēlni** izveido WordPress navigācijas izvēlnes ar atbalstu atšķirīgām navigācijas etiķetēm, kas ir nodalītas no lapu virsrakstiem.

## Pārskats

Šī funkcija paplašina standarta izvēlnes izveides funkcionalitāti ar iespēju norādīt `navigation_label` parametru. Tas ļauj izveidot izvēlnes, kurās navigācijā rādītā etiķete atšķiras no lapas virsraksta, nodrošinot lielāku elastību site struktūrā un lietotāja pieredzē.

## Parametri

| Parametrs | Tips | Obligāts | Apraksts |
|-----------|------|----------|-------------|
| `name` | string | Jā | Izvēlnes nosaukums, piem., `Primary Navigation` |
| `location` | string | Nē | Theme atrašanās vieta, kurai piešķirt šo izvēlni, piem., `primary` |
| `navigation_label` | string | Nē | Etiķete, ko rādīt navigācijā (atšķirīga no lapas virsraksta) |

## Atgrieztā vērtība

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigācijas etiķete salīdzinājumā ar lapas virsrakstu

`navigation_label` parametrs ļauj nodalīt iekšējo izvēlnes nosaukumu no etiķetes, kas tiek rādīta lietotājiem:

- **`name`** — Iekšējs izvēlnes identifikators, ko izmanto WordPress (piem., "Primārā navigācija")
- **`navigation_label`** — Etiķete, kas navigācijā tiek rādīta site apmeklētājiem (piem., "Galvenā izvēlne")

Tas ir noderīgi, ja:
- Jūsu iekšējā nosaukumu piešķiršanas kārtība atšķiras no lietotājiem redzamajām etiķetēm
- Navigācijā vēlaties īsākas etiķetes nekā administratora panelī
- Jums jāatbalsta vairākas valodas ar atšķirīgiem etiķešu garumiem
- Veidojat izvēlnes konkrētiem reģioniem vai lietotāju grupām

## Lietošanas piemēri

### 1. piemērs: Vienkārša izvēlne ar navigācijas etiķeti

**Uzvedne:**
```
Izveido primārās navigācijas izvēlni ar nosaukumu "Galvenā navigācija" un navigācijas etiķeti "Izvēlne".
```

**Rezultāts:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 2. piemērs: Izvēlne konkrētai Theme atrašanās vietai

**Uzvedne:**
```
Izveido kājenes izvēlni ar nosaukumu "Kājenes saites", navigācijas etiķeti "Ātrās saites" un piešķir to kājenes atrašanās vietai.
```

**Rezultāts:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrācija ar Theme Builder

Izmantojot Theme Builder, funkcija Izveidot izvēlni:

1. Automātiski nosaka pieejamās theme izvēlņu atrašanās vietas
2. Izveido izvēlnes ar jūsu dizainam atbilstošām navigācijas etiķetēm
3. Piešķir izvēlnes pareizajām theme atrašanās vietām
4. Atbalsta izvēlnes vienumu pievienošanu pēc izveides

## Saistītās funkcijas

- **`add_menu_item`** — Pievienot vienumus esošai izvēlnei
- **`update_menu`** — Pārdēvēt izvēlni vai atkārtoti piešķirt to theme atrašanās vietai
- **`delete_menu`** — Noņemt izvēlni no jūsu site

## Labākā prakse

- **Izmantojiet skaidras navigācijas etiķetes** — uzturiet etiķetes īsas un lietotājiem aprakstošas
- **Saskaņojiet theme atrašanās vietas** — piešķiriet izvēlnes pareizajai theme atrašanās vietai, lai nodrošinātu korektu attēlošanu
- **Plānojiet izvēlnes struktūru** — pirms vienumu izveides izlemiet par izvēlnes hierarhiju
- **Pārbaudiet pielāgošanos ekrāna izmēriem** — pārliecinieties, ka izvēlnes mobilajās ierīcēs tiek attēlotas pareizi
- **Lokalizējiet etiķetes** — izmantojiet atšķirīgas navigācijas etiķetes dažādām valodu versijām

## Ierobežojumi

- Navigācijas etiķetes ir paredzētas tikai attēlošanai; iekšējais `name` joprojām tiek izmantots WordPress identificēšanai
- Theme atbalsts atšķiras; ne visas themes atbalsta visas izvēlņu atrašanās vietas
- Izvēlnes vienumi pēc izvēlnes izveides jāpievieno atsevišķi
- Navigācijas etiķetes maiņai nepieciešams atjaunināt izvēlni

## Saistītās funkcijas

- [Ģenerēt logotipa SVG](./generate-logo-svg.md) — izveidot logotipus jūsu site galvenei
- [Validēt paletes kontrastu](./validate-palette-contrast.md) — nodrošināt pieejamas krāsu shēmas
