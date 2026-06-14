---
title: Elementu-gunearen hobekuntza-gainak
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Tema Builder Funtsioak: Block Temakakoa eta Aktibatu

Superdav AI Agent v1.12.0 iruditzen du bi funtzioa garrantzitsuak, zehandizko chat interface-n handiaren (block themes) generatzea eta desplokeatzea erabilizten.

## Deskribapena

**scaffold-block-theme** eta **activate-theme** funtzioak agent-ek ezagutze ditu:
- Itzultza, produktiboa tema handia (block themes) generatzea zehandizko espezifikazioak arabera
- Manual ingurumen edo ingurumenaren bidez tema automatikoki aktibatu dezake situren web-aldean
- Goidutako diseinazio erabakiak bidez visua identidad bat emate dena

## Block Tema Itzultzea (Scaffold)

**scaffold-block-theme** funtzioak WordPress block theme berria generatzen du, tema estruktura guztia bestela, zehandiz:

- `theme.json` konfiguratazioa design tokens bat hartuz
- Komun bat layout-ek beste file template batzuen
- Block style eta variantak oso espezializatutako
- Tema metadata eta suporta deklarazioak

### Ondo Erdatzea (How to Invoke)

Superdav AI Agentarekin chat egiten duenean, tema generatzea eskatzen dituzte:

```
"Modern Agency" izen bat block theme bat jartu, lapurtu eta puti kolor bat eta puti lebak,
sans-serif tipografia eta profesional layout batekin.
```

Agent-ek:
1. Goidutako diseinazio preferentziak bilatzen dua galdernarekin
2. Tema estruktura guztia generatzen du
3. Beste file tema beharrezko guztiak ematen du
4. Aktibatuera tema bat preparatzen du

### Esperatuta Outputa (Expected Output)

Funtzioa ondo erdatuenean, lehen daude:

- Tema handia itzultu daingoa konfirmazioa
- Tema-ren izena eta jarduera lekuak
- Erabilera ematen design tokens bat ezarritura (kolorrak, tipografia, espazioa)
- Aktibatuera eskatuta dagoen estatus

Udal outputa:
```
✓ "Modern Agency" tema handia ondo erdatu daingoa
  Lekuak: /wp-content/themes/modern-agency/
  Kolorrak: Primary #0066CC, Secondary #FFFFFF
  Tipografia: Inter (sans-serif)
  Estatus: Aktibatuera eskatuta dagoen
```

## Tema Aktibatu (Activate Theme)

Ez dago **activate-theme** funtua, den irudia da sizketa (scaffold) egin duen edo jakin duen blokiak tema bat erabiltzeko.

### Ondoan Indartzea

Tema bat sizketa egin ondoren, hemen indartu ditzakezu:

```
"Modern Agency tema indartu"
```

Muga, jakin duen tema bat indartu:

```
"Twentytwentyfour temari iritu"
```

### Esperatutako Outputa

Indartzea ondoan egin ondoren:

- Indartutako temaaren bidezko konformazioa
- Lehen temaaren nabarmena (referentziaren bitartean)
- Tema hori dagoen URL-a
- Tema-spediko nota edo aukera batzuk

Outputaren oinarri:
```
✓ Tema ondoan indartu da
  Indartutako tema: Modern Agency
  Lehen tema: Twentytwentyfour
  Dagoen URL-a: https://yoursite.com
  Nota: Layout-a jartzeko homepage-a ikustu
```

## Fluxua: Sizketa eta Indartzea

Fluxua tipikoa funtua gehiago bat amaitzen du:

1. **Tema generazio eskatzea**: "Meni SaaS landing page-ko bloki tema bat ezartu"
2. **Agent-ek temaa sizketa egiten du**: Faiak eta design tokens (disainaren elementuak) ematen du
3. **Ebaluatu eta refinea**: Bezaharrak behar bada, disainaren hasierakzuk hitz egiten dute
4. **Indartzea**: "Tema indartu hemen"
5. **Bestea**: Tema berria dagoela konformatu dituzte sitean

## Design Tokens eta Customization (Disainaren Elementuak eta Ajustamenduak)

Sizketa egin den temak WordPress design tokens bat erabiltzen dute (`theme.json` bidez):

- **Coloreak**: Primary, secondary, accent, neutral palette
- **Tipografia**: Font families, sizes, weights, line heights (lurtsoak eta itxarpenak)
- **Espazioa**: Padding, margin, gap scales (irrendekoak, harremanak, irrendeko erraztasunak)
- **Bordesak**: Radius eta width tokens (rande eta lebanak)
- **Sotak (Shadows)**: Elevation levels (hautzenaren mailak)

Design tokens hauek `theme.json` arrakunde daitezke, zehatz design system guztia bat file-etik aukeratu ez duena.

## Limitazioak eta Nota

- Estilak (Themes) dira `/wp-content/themes/` da dago eta WordPress-en emateko nabarmunak jarraitu behar dute.
- Aktibazioa irakurri-emateko (permissions) eskatzen duzu zure WordPress sailbidean.
- Themes-ek PHP kodea edozein oso txikiagoa jakinarazten du; kompleksa batzuk dira plugin-ek erabiltzea.
- Block themes-ek bestik WordPress 5.9 eta horrek ondoren funtzionatzen dute.

## Problema ezberdinetan (Troubleshooting)

**Estilak ez geratu ondoren ez erakusten da**
- Estilak direktorioa dagoela eta irakurri-emateko eskatzen duela jakinarazki egiaztatu.
- `theme.json` da JSON-ekin bat jakinarazki dagoela ikustee.
- Estila nazioaren (theme name) dagoen estilakarekin ondo ez dutelako.

**Aktibazioa ez duzu**
- Administrador eskatzen duzueko irakurri-emateko eskatzen duela konfirmatu.
- Estilak direktorioa WordPress-ek lehen erakusten duen jakinarazki dagoela ikustee.
- Detalioak gerratu eta WordPress-en error logs-ek ikustee.

**Design tokens ez aplikatzen dira**
- `theme.json` syntax-ek ondo dagoela ikustee.
- Caching plugin-ek jakinarazki baduzu erregitu (clear) duzu.
- Zure WordPress versionak erabiltzen dituzten tokens-ek suportatzen duen jakinarazki ikustee.

## Irudiak (Next Steps)

Estilak aktibatu ondoren, hauek egin dezakezu:
- **Design System Aesthetics** skill-a erabiliz tipografia, koloreak eta espazioak (spacing) estelatu.
- WordPress block editor-ek bidez blok-ek zehatz estelatu.
- Estilakaren `style.css` file-an CSS osoa hobetzeko.
- Erregistroen (page types) zehatz blok template-ek sortzeko.
