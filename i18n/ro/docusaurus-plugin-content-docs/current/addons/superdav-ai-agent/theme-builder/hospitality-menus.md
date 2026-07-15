---
title: Meniuri pentru Ospitalitate
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Meniuri pentru Ospitalitate

Caracteristica **Meniuri pentru Ospitalitate** permite Theme Builder să genereze și să integreze pagini structurate de meniuri de alimente și băuturi direct pe site-ul tău WordPress.

## Prezentare Generală {#overview}

Acum, Theme Builder poate crea pagini de meniuri profesionale și structurate pentru afacerile din domeniul ospitalității, incluzând restaurante, cafenele, baruri și servicii de catering. Aceste meniuri sunt integrate complet în designul site-ului tău și pot fi actualizate și gestionate cu ușurință.

## Tipuri de Ospitalitate Suportate {#supported-hospitality-types}

- **Restaurante** — meniuri pentru dining complet
- **Cafenele** — meniuri de cafea și gustări ușoare
- **Baruri și Lounge-uri** — meniuri de băuturi și aperitive
- **Bucătării** — meniuri de patiserie și pâine
- **Servicii de Catering** — opțiuni de meniuri pentru evenimente
- **Food Trucks** — meniuri pentru servicii mobile de alimente
- **Brăndării și Vinicultură** — meniuri de băuturi cu descrieri

## Structura Meniului {#menu-structure}

### Categorii de Meniu {#menu-categories}

Meniurile sunt organizate în categorii:

- **Antrehepuri** — gustări și platouri mici
- **Feluri Principale** — mâncăruri principale
- **Acompaniamente** — garnituri și legume
- **Deserturi** — tratamente dulci
- **Băuturi** — băuturi (alcoolice și non-alcoolice)
- **Speciale** — specialități zilnice sau sezoniere

### Formatul Elementului de Meniu {#menu-item-format}

Fiecare element de meniu include:

```json
{
  "name": "Somon la Grătar",
  "description": "Somon atlantic proaspăt cu sos de unt și lămâne",
  "price": "$24.95",
  "dietary_info": ["Fără Gluten", "Sățios Proteic"],
  "allergens": ["Pește"],
  "availability": "Zilnic"
}
```

#### Câmpuri ale Elementului {#item-fields}

| Câmp | Tip | Descriere |
|-------|------|-------------|
| `name` | string | Numele felului sau băuturii |
| `description` | string | Descriere detaliată a elementului |
| `price` | string | Prețul (formatat cu moneda) |
| `dietary_info` | array | Atribute dietetice (Vegan, Fără Gluten, etc.) |
| `allergens` | array | Alergeni comuni (Nuci, Crustacee, etc.) |
| `availability` | string | Când este disponibil (Zilnic, Sezonier, etc.) |

## Crearea Meniurilor pentru Ospitalitate {#creating-hospitality-menus}

### Pasul 1: Furnizați Informațiile Meniului {#step-1-provide-menu-information}

Spuneți Theme Builder despre meniul dumneavoastră:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Pasul 2: Theme Builder Generează Meniul {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Creează o pagină de meniu structurată
2. O proiectează pentru a se potrivi temei site-ului tău
3. Organizează elementele în categorii
4. Formatează prețurile și descrierile
5. Adaugă informații despre diete și alergeni

### Pasul 3: Revizuire și Personalizare {#step-3-review-and-customize}

Puteți:

1. Edita elementele și prețurile meniului
2. Adăuga sau elimina categorii
3. Reordona elementele din cadrul categoriilor
4. Actualiza descrierile și informațiile dietetice
5. Ajusta stilul și layout-ul

## Opțiuni de Afișare a Meniului {#menu-display-options}

### Pagina Complete a Meniului {#full-menu-page}

O pagină dedicată care afișează întregul meniu:

- Organizat pe categorii
- Cu funcționalitate de căutare și filtrare
- Layout prietenos pentru tipărire
- Design adaptabil pe mobil

### Widget de Meniu {#menu-widget}

Integrați secțiuni de meniu pe alte pagini:

- Elemente vedete pe paginea principală
- Specialități zilnice în sidebar
- Meniul de băuturi pe pagina barului
- Vitrina deserturilor în footer

### PDF de Meniu {#menu-pdf}

Generați un meniu PDF descărcabil:

- Format profesional
- Calitate gata de printare
- Include imagini și descrieri
- Ușor de partajat și trimis prin email

## Informații Dietetice și despre Alergeni {#dietary-and-allergen-information}

### Atribute Dietetice {#dietary-attributes}

Marcați elementele cu informații dietetice:

- **Vegan** — fără produse de origine animală
- **Vegetarian** — fără carne
- **Fără Gluten** — sigur pentru boala celiac
- **Fără Lactoză** — fără produse lactate
- **Fără Nuci** — fără nuci de copaci sau arahide
- **Cu Carbohidrați Reduși** — carbohidrați redusici
- **Sățios Proteic** — bogat în proteine

### Avertismente despre Alergeni {#allergen-warnings}

Includeți alergeni comuni:

- **Nuci** — nuci de copaci și arahide
- **Crustacee** — crustacee și moluște
- **Pește** — toate speciile de pește
- **Lactate** — lapte și produse lactate
- **Ouă** — ouă de găină
- **Soia** — produse din soia
- **Gluten** — grâne cu gluten (grâu)
- **Semnă** — semințe și ulei de semințe de senă

## Managementul Meniului {#menu-management}

### Actualizarea Prețurilor {#updating-prices}

Actualizați prețurile meniului cu ușurință:

1. Navigați la pagina de meniu
2. Faceți clic pe "Edit Menu"
3. Actualizați prețurile elementelor
4. Salvați modificările
5. Modificările apar imediat pe site-ul tău

### Adăugarea Elementelor Sezonier {#adding-seasonal-items}

Creați variații de meniu sezoniere:

1. Creați o nouă versiune a meniului
2. Adăugați elemente sezoniere
3. Marcați elementele ca "Sezonier"
4. Programați datele de disponibilitate
5. Afișează automat în timpul sezonului

### Gestionarea Specialităților {#managing-specials}

Afișați specialități zilnice sau săptămânale:

1. Creați o categorie "Specials"
2. Adăugați elemente cu date de disponibilitate
3. Evidențiați specialitățile pe paginea principală
4. Actualizați zilnic sau săptămânal
5. Arhivați specialitățile vechi

## Integrarea cu Theme Builder {#integration-with-theme-builder}

Când folosiți Theme Builder pentru site-uri de ospitalitate:

1. **Detectarea automată a meniului** — identifică dacă ești o afacere de alimente/băuturi
2. **Crearea paginii de meniu** — generează pagini de meniu profesionale
3. **Potrivirea designului** — meniurile se potrivesc temei site-ului tău
4. **Optimizarea pentru mobil** — meniurile afișează frumos pe telefoane
5. **Optimizarea SEO** — meniurile sunt prietenoase pentru motoarele de căutare

## Cele Mai Bune Practici {#best-practices}

### Designul Meniului {#menu-design}

- **Organizare clară** — structură de categorii logică
- **Descrieri lizibile** — apetisante și informative
- **Prețuri consistente** — moneda și formatarea clare
- **Fotografii profesionale** — imagini de alimente de înaltă calitate
- **Spațiu alb** — nu supraaglomera pagina

### Conținutul {#content}

- **Descrieri exacte** — descrieți elementele cu acuratețe
- **Evidențiați specialitățile** — faceți ca specialitățile să se facă remarcabile
- **Includeți alergenii** — listați întotdeauna alergenii
- **Actualizați regulat** — mențineți prețurile și elementele actuale
- **Folosiți limbaj apetisant** — faceți ca elementele să sune delicioase

### Accesibilitatea {#accessibility}

- **Fonturi lizibile** — folosiți tipuri de font clare și ușor de citit
- **Contrast suficient** — asigurați-vă că textul este lizibil
- **Etichete dietetice** — marcați clar opțiunile dietetice
- **Avertismente despre alergeni** — afișați alergenii în mod vizibil
- **Prietenos cu mobilele** — testați pe toate dispozitivele

## Exemple {#examples}

### Structura Meniului de Restaurant {#restaurant-menu-structure}

```
Antrehepuri
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salată Caprese

Feluri Principale
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Mâncăruri Principale
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Deserturi
├── Tiramisu
├── Panna Cotta
└── Selecție de Gelato
```

### Structura Meniului de Cafenele {#cafe-menu-structure}

```
Cafea
├── Espresso
├── Cappuccino
└── Latte

Patiserie
├── Croissant
├── Muffins
└── Scones

Sandvișuri
├── Panini Caprese
├── Club cu Pui Fumăcat
└── Wrap Vegetarian
```

## Caracteristici Conexe {#related-features}

- [Create Menu](../abilities/create-menu.md) — creează meniuri de navigare
- [Design Direction](./design-direction.md) — personalizează designul site-ului tău
- [Discovery Interview](./discovery-interview.md) — planifică structura site-ului tău
