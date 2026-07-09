---
title: Hotelli- ja restoranivaldkonna menüüd
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality-menüüd

Funktsioon **Hospitality Menus** võimaldab Theme Builderil luua ja manustada struktureeritud toidu- ja joogimenüü lehti otse sinu WordPress saidile.

## Ülevaade

Theme Builder saab nüüd luua professionaalseid, struktureeritud menüülehti majutus- ja toitlustusettevõtetele, sealhulgas restoranidele, kohvikutele, baaridele ja catering-teenustele. Need menüüd on täielikult integreeritud sinu saidi kujundusse ning neid saab hõlpsasti uuendada ja hallata.

## Toetatud Hospitality-tüübid

- **Restoranid** — täisteenindusega söögimenüüd
- **Kohvikud** — kohvi ja kergete roogade menüüd
- **Baarid ja lounge’id** — jookide ja eelroogade menüüd
- **Pagariärid** — saiakeste ja leibade menüüd
- **Catering-teenused** — ürituste menüüvalikud
- **Toiduautod** — mobiilse toitlustuse menüüd
- **Õllekojad ja veinikojad** — kirjeldustega joogimenüüd

## Menüü struktuur

### Menüü kategooriad

Menüüd on korraldatud kategooriatesse:

- **Eelroad** — suupisted ja väikesed road
- **Pearoad** — põhiroad
- **Lisandid** — lisandid ja köögiviljad
- **Magustoidud** — magusad hõrgutised
- **Joogid** — joogid (alkohoolsed ja mittealkohoolsed)
- **Eripakkumised** — päeva- või hooajalised eripakkumised

### Menüüelemendi vorming

Iga menüüelement sisaldab:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Elemendi väljad

| Väli | Tüüp | Kirjeldus |
|-------|------|-------------|
| `name` | string | Roa või joogi nimi |
| `description` | string | Elemendi üksikasjalik kirjeldus |
| `price` | string | Hind (vormindatud valuutaga) |
| `dietary_info` | array | Toitumisalased omadused (vegan, gluteenivaba jne) |
| `allergens` | array | Levinud allergeenid (pähklid, koorikloomad jne) |
| `availability` | string | Millal saadaval (iga päev, hooajaline jne) |

## Hospitality-menüüde loomine

### Samm 1: esita menüüteave

Räägi Theme Builderile oma menüüst:

```
Loo minu Itaalia restoranile restoranimenüü eelroogade,
pastaroogade, pearoogade ja magustoitudega. Lisa hinnad ja kirjeldused.
```

### Samm 2: Theme Builder loob menüü

Theme Builder:

1. Loob struktureeritud menüülehe
2. Kujundab selle vastama sinu saidi teemale
3. Korraldab elemendid kategooriatesse
4. Vormindab hinnad ja kirjeldused
5. Lisab toitumisalase ja allergeenide teabe

### Samm 3: vaata üle ja kohanda

Sa saad:

1. Muuta menüüelemente ja hindu
2. Lisada või eemaldada kategooriaid
3. Muuta elementide järjekorda kategooriates
4. Uuendada kirjeldusi ja toitumisalast teavet
5. Kohandada stiili ja paigutust

## Menüü kuvamise valikud

### Täielik menüüleht

Eraldi leht, mis kuvab kogu sinu menüü:

- Korraldatud kategooriate järgi
- Otsitav ja filtreeritav
- Printimiseks sobiv paigutus
- Mobiilisõbralik kujundus

### Menüüvidin

Manusta menüüosi teistele lehtedele:

- Esiletõstetud elemendid avalehel
- Päevapakkumised külgribal
- Joogimenüü baarilehel
- Magustoitude esitlus jaluses

### Menüü PDF

Loo allalaaditav PDF-menüü:

- Professionaalne vormindus
- Printimisvalmis kvaliteet
- Sisaldab pilte ja kirjeldusi
- Lihtne jagada ja e-postiga saata

## Toitumisalane ja allergeenide teave

### Toitumisalased omadused

Märgi elemendid toitumisalase teabega:

- **Vegan** — ei sisalda loomseid tooteid
- **Taimetoit** — ei sisalda liha
- **Gluteenivaba** — ohutu tsöliaakia korral
- **Piimavaba** — ei sisalda piimatooteid
- **Pähklivaba** — ei sisalda puupähkleid ega maapähkleid
- **Madala süsivesikusisaldusega** — vähendatud süsivesikute sisaldus
- **Kõrge valgusisaldusega** — valgurikas

### Allergeenihoiatused

Lisa levinud allergeenid:

- **Pähklid** — puupähklid ja maapähklid
- **Koorikloomad ja molluskid** — koorikloomad ja molluskid
- **Kala** — kõik kalaliigid
- **Piimatooted** — piim ja piimatooted
- **Munad** — kanamunad
- **Soja** — sojatooted
- **Gluteen** — nisu ja gluteeni sisaldavad teraviljad
- **Seesam** — seesamiseemned ja -õli

## Menüü haldamine

### Hindade uuendamine

Uuenda menüü hindu hõlpsasti:

1. Liigu menüülehele
2. Klõpsa "Muuda menüüd"
3. Uuenda elementide hindu
4. Salvesta muudatused
5. Muudatused ilmuvad sinu saidil kohe

### Hooajaliste elementide lisamine

Loo hooajalisi menüüvariatsioone:

1. Loo uus menüüversioon
2. Lisa hooajalised elemendid
3. Märgi elemendid kui "Hooajaline"
4. Ajasta saadavuse kuupäevad
5. Kuva hooaja ajal automaatselt

### Eripakkumiste haldamine

Kuva päeva- või nädalapakkumisi:

1. Loo kategooria "Eripakkumised"
2. Lisa elemendid koos saadavuse kuupäevadega
3. Tõsta eripakkumised avalehel esile
4. Uuenda iga päev või iga nädal
5. Arhiveeri vanad eripakkumised

## Integratsioon Theme Builderiga

Kui kasutad Theme Builderit hospitality-saitide jaoks:

1. **Automaatne menüü tuvastamine** — tuvastab, kas oled toidu-/joogiettevõte
2. **Menüülehe loomine** — loob professionaalsed menüülehed
3. **Kujunduse sobitamine** — menüüd sobivad sinu saidi teemaga
4. **Mobiili optimeerimine** — menüüd kuvatakse telefonides kaunilt
5. **SEO optimeerimine** — menüüd on otsingumootorisõbralikud

## Parimad tavad

### Menüü kujundus

- **Selge korraldus** — loogiline kategooriastruktuur
- **Loetavad kirjeldused** — isuäratavad ja informatiivsed
- **Ühtne hinnastamine** — selge valuuta ja vormindus
- **Professionaalsed fotod** — kvaliteetsed toidupildid
- **Tühi ruum** — ära kuhja lehte üle

### Sisu

- **Täpsed kirjeldused** — kirjelda elemente täpselt
- **Tõsta eripakkumised esile** — pane eripakkumised silma paistma
- **Lisa allergeenid** — loetle allergeenid alati
- **Uuenda regulaarselt** — hoia hinnad ja elemendid ajakohased
- **Kasuta isuäratavat keelt** — pane elemendid kõlama maitsvalt

### Ligipääsetavus

- **Loetavad fondid** — kasuta selgeid ja hästi loetavaid kirjatüüpe
- **Piisav kontrast** — taga, et tekst oleks loetav
- **Toitumissildid** — märgi toitumisvalikud selgelt
- **Allergeenihoiatused** — kuva allergeenid silmapaistvalt
- **Mobiilisõbralik** — testi kõigis seadmetes

## Näited

### Restoranimenüü struktuur

```
Eelroad
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese salat

Pastaroad
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Pearoad
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Magustoidud
├── Tiramisu
├── Panna Cotta
└── Gelato valik
```

### Kohviku menüü struktuur

```
Kohv
├── Espresso
├── Cappuccino
└── Latte

Küpsetised
├── Croissant’id
├── Muffinid
└── Scone’id

Võileivad
├── Caprese panini
├── Suitsutatud kalkuniga Club
└── Taimetoitlase wrap
```

## Seotud funktsioonid

- [Loo menüü](../abilities/create-menu.md) — loo navigeerimismenüüsid
- [Disainisuund](./design-direction.md) — kohanda oma saidi disaini
- [Avastamisintervjuu](./discovery-interview.md) — planeeri oma saidi struktuur
