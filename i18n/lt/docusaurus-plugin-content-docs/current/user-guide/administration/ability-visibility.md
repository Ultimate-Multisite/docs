---
title: Matyti galimybė
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Pasirumo galimybė matyti (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 įdaro **Pasirumo matyti** (Ability Visibility) kontrolges, kurios nurodo, kokie puslapiai atskleidžia kiekvieną galimybę. Tai leidžia administratoriams sukurti tikslines nustatymus dėl to, kokios agentų galimybės yra pasiekiamos REST API, MCP serveriuose, WooCommerce integracijose ir kitose sąsnykyse.

## Kas tai yra Pasirumo matyti? {#what-is-ability-visibility}

Pasirumo matyti yra leidimo sistema, kuri kontroliuoja:

- **Kokie galimybės** yra pasiekiamos agentams
- **Kur jos yra atskleistos** (REST API, MCP, WooCommerce ir kitas)
- **Kiti gali prie jomis naudotis** (per partnerų sąrašus)
- **Kaip jie klasifikuojami** (pažįstomi ar nepažįstomi)

Kiekviena galimybė turi matomumo lygį, kuris nurodo jos prieinamumą skirtingose puslapiuose.

## Matomumo lygiai {#visibility-levels}

### Public (Public) {#public}

**Public galimybės** yra pasiekiamos visur:

- REST API endpointai
- MCP serveriai
- WooCommerce integracijos
- Čato sąsnykai
- Visi vartotojų vaidmenys (su tinkamais leidimais)

Pavyzdys: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Vidinis) {#internal}

**Internal galimybės** pasiekiamos tik jūsų WordPress instalacijoje:

- Čato sąsnykai
- Administratoriai panelai
- Tik prisijungę vartotojai
- Neatskleistos per REST API ar vidines integracijas

Pavyzdys: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partneris) {#partner}

**Partner galimybės** pasiekiamos tik atsidarius partneriai:

- Reikia nurodyti į partnerų sąrašą
- Pasiekiamos per REST API su partnerių kredencijomis
- Pasiekiamos per MCP su partnerių autentifikavimu
- Neatskleistos reguliariaiems vartotojams

Pavyzdys: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Nenustatytas) {#disabled}

**Nenustatytos galimybės** nėra pasiekiamos kurioje vietoje:

- Neatskleistos per jokio puslapio
- Neįdiegta čate
- Neįdiegta administratoriais paneliais
- Naudojama senoms ar eksperimentinėms galimybėms

## Apiegamumo matyti {#managing-ability-visibility}

### Priešyražti įrangos matymo nustatymus {#accessing-ability-visibility-settings}

1. Eikite į **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Paspauskite į languotą **Abilities** (Įrangos)
3. Jūs pamatys sąrašą visų įdiegto įrangų ir jų matymo lygisais

### Matyti įrangos detales {#viewing-ability-details}

Paspauskite bet kuriuo įrangai, kad pamatytumėte:

- **Name** (Pavadinimas): Įrangos identifikatorius
- **Description** (Aprašymas): Kas tą įranga daro
- **Current visibility** (Dabar matomas): Public (Paprastas), Internal (Vidinis), Partner (Partneris) arba Disabled (Išjungtas)
- **Partner allow-list** (Partnerių sąrašas): Kuri partneriai gali pasiekti (jei nustatyta Partner visumas)
- **Last updated** (Kada buvo naujausia): Kada matymas buvo paskutinis keitimas
- **Status** (Status): Pažymtas ar Nipažymtas

### Keitimo lygio {#changing-visibility-levels}

Kad pakeisti įrangos matymo lygį:

1. Paspauskite į rangą sąraše
2. Pasirinkite naują matymo lygią iš išskirtinio meniu (dropdown)
3. Jei pasirinksite „Partner“, pridėkite partnerių identifikatorius prie sąrašo
4. Paspauskite **Save** (Išsaugoti)

Pavyzdys:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masinis veikimas {#bulk-operations}

Kad pakeisti matymą daugeliui įrangų:

1. Žymėkite laukus šalia jūsų pasirinktų įrangų
2. Pasirinkite naują matymo lygią iš išskirtinio meniu (dropdown) masinio veikimo skiltyje
3. Paspauskite **Apply** (Taip patikrati)

## Partnerių sąrašas (Partner allow-list) {#partner-allow-list}

**Partnerių sąrašas** nustato, kuriems iştiepiami partneriai gali pasiekti Partner lygio įrangos.

### Partnerių pridėjimas {#adding-partners}

1. Eikite į **Superdav AI Agent** → **Settings** → **Partners**
2. Paspauskite **Add Partner** (Pridėti partnerį)
3. Įveskite partnerio identifikatorių (kadangi tai dažniausiai yra API klaidų raštai arba organizacijos ID)
4. Valstybiškai pridėkite partnerio pavadinimą ir aprašymą
5. Paspauskite **Save** (Išsaugoti)

### Įrangos nurodymas partneriams {#assigning-abilities-to-partners}

Partnerį pridėję:

1. Peržiūrėkite languot **Abilities** (Galiniai).
2. Ieškokite galimybę su Partner visibility (Partner matomybė).
3. Spauskite, kad ją redaguotumėte.
4. Visiame „Partner allow-list“ (partnerų sąrašas) skelbimose pažymėkite laukus tiems partneriams, kuriems turėtų būti pateikiami prieigos.
5. Spauskite **Save** (Išsaugoti).

### Partnerio prieigos atimimas {#revoking-partner-access}

Kad pašalinti partnerio prieigą:

1. Redaguokite galimybę.
2. Apspauskite partnerio laukus sąraše.
3. Spauskite **Save** (Išsaugoti).

Partnerius iš karto praradų prieigą šiai galimybai.

## Nenumatomi galimybės (Unclassified Abilities) {#unclassified-abilities}

Kai įdėtumėte trečias pusės galimybę, kurią Superdav AI Agent nepažįsta, ji yra pažymta kaip **Unclassified** (Nenumatoma).

### Administracijos pranešimas apie nenumatomas galimybes {#admin-notice-for-unclassified-abilities}

Jūs pamatys administracinį pranešimą:

```
⚠️ Nenumatomi galimybės aptiktos

Šios galimybės buvo įdėtos, bet nėra pažymtos:
- custom-import-tool
- external-api-wrapper

Šios galimybės gali sukelti saugumo ar tinkamumo rizikas.
Prašome peržiūrėti ir pažymėti.

[Peržiūrėti galimybes] [Atmetti]
```

### Nenumatomi galimybių peržiūra {#reviewing-unclassified-abilities}

1. Spauskite **Review Abilities** (Peržiūrėti galimybės) pranešime.
2. Kiekvienai nenumatomai galimybai pamatys:
   - Galybės pavadinimas ir aprašymas
   - Šaltinis (kurio pluginas/addon ją įdėjo)
   - Sužinotas matomumo lygis
   - Saugojo vertinimas

3. Pasirinkite matomumo lygią:
   - **Public** (Viešas): Patikinkite galimybę; pateikite ją visur
   - **Internal** (Vidinis): Apribaudite naudojimą tik vidiniams vartotojams
   - **Partner**: Apribaudite specifiniais partneriais
   - **Disabled** (Nenaudojama): Nenaudojate šią galimybę

4. Spauskite **Classify** (Pažymėti), kad išsaugotumėte savo sprendimą.

### Kodėl pažymėti nenumatomas galimybes? {#why-classify-unclassified-abilities}

Galimybės pažymėjimas:

- **Paišsndina saugumą**: Jūs nurodomai patvirtinate, ką pateikote
- **Privaloma išvengti nuostolių**: Nenumatomi galimybės yra neapibrėžtos kaip pagrindinis režimas
- **Leidžia naudoti funkcijas**: Kai pažymėta, galiba ji tampa prieinama
- **Dokūruoja sprendimus**: Jūsų pasirinkimai registruojami audito tikslams

## Paskyba skirtinguose {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Viešos galimybės** yra pasiekiamos per REST endpointus:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Vidinės ir partnerių galimybės** nėra pasiekiamos per REST API.

### MCP Serveriai {#mcp-servers}

**Viešos galimybės** yra pasiekiamos per MCP:

```
MCP Serveris: Superdav AI Agentas
Paskutinės galimybės:
- scaffold-block-theme
- activate-theme
- send-email
```

**Vidinis galimybės** nėra atskleiti per MCP.

**Partnerių galimybės** pasiekiamos tik su partnerių kredencijomis.

### WooCommerce Integracija {#woocommerce-integration}

**Viešos galimybės**, susijusios su WooCommerce, yra pasiekiamos:

- Prekės valdymas
- Užsakymų apdorojimas
- Klientų komunikacija

**Vidinis galimybės** nėra atskleiti WooCommerce.

### Čato interfeys {#chat-interface}

**Visos galimybės** (viešos, vidinės, partnerių) yra pasiekiamos čate, prieldant nuo vartotojo įsipareigojimų:

- Administratoriai matyti visą galimybes
- Reguliarijai vartotojai matyti tik viešas galimybes
- Partneriai matyti viešas + partnerių galimybės (jei yra nurodyti)

## Sauginimo geriausios praktikos {#security-best-practices}

### Mažiausio privilegijų principas {#principle-of-least-privilege}

- Nustatykite galimybių visiems labiausiai restrigiestai, kuris leina jų naudoti
- Naudokite partnerių galimybės jautrioms operacijoms
- Išjunkite galimybes, kurias nenaudojate

### Reguliariai auditoji patikra {#regular-audits}

- Peržiūrėkite galimybių pasiekiamumą kas mėnesį
- Patikrinkite neklassifikuotus galimybes
- Atimkite prieigą nenaudojantiems partneriams

### Logavimas ir stebėjimas (Logging and Monitoring) {#logging-and-monitoring}

- Stabdžykite, kurios galimybės naudojamos labiausiai
- Sekkite partnerių prieiga modelius
- Praneškite apie neapibrėžtą galimybių naudojimą

### Trečiųjų šalių galimybės {#third-party-abilities}

- Peržiūrėkite trečiųjų šalių galimybes prieš įjungdami
- Apsikirkite jas aiškiai
- Pradėkite su vidiniais arba partnerių galimybėmis
- Prieš pateikti viešas, patikrinkite jas

## Rozvadinimas {#troubleshooting}

**Galiumas ne rodomas sąraše**
- Patikrinkite, ar galiumas yra įdėtas ir aktyvus
- Patikrinkite, ar pluginas/addon yra įjungtas
- Rafreskite puslapį

**Negaliu pakeisti galiumo matomumą**
- Patikrinkite, ar turite administratorius teisę
- Patikrinkite, ar galiumas nėra užblokuotas kitonu pluginu
- Bandykite išjungti konfliktus su pluginais

**Partnerius negali pasiekti galiumo**
- Patikrinkite, ar partnerius yra įskirtame sąraše (allow-list)
- Patikrinkite, ar galiumo matomumas nustatytas į Partner
- Patikrinkite, ar partnerio kredencijos yra tinkamos
- Patikrinkite API logus ir ieškokite autentifikacijos klaidos

**Neklasifikuoti galiumi visada pasirodo**
- Peržiūrėkite ir klasifikuokite juos adminiame pranešimo skiltyje (admin notice)
- Patikrinkite, ar jūsų klasifikacija buvo išsaugota
- Patikrinkite, ar pluginas, kuris suteikia galiumą, yra naujausio versijos

## Migracija iš senko režimo (Legacy Mode) {#migration-from-legacy-mode}

Jei atnaujinate Superdav AI Agent versiją iš vėjesnio versijos:

- Visi esami galiumi automatiškai klasifikuojami kaip Public
- Peržiūrėkite ir nustatymą matomumą, jei reikia
- Niekoki veiksmų ne reikalaujama, jei norite apriboti prieigą

Pateikime daugiau informacijos apie perėjimo į natūralią API integraciją galiumi **Third-Party Mode Migration**.

## Kaltinis veiksniai (Next Steps) {#next-steps}

Po nustatytos galiumo matomumas:

1. **Peržiūrėkite savo galiumus**: Patikrinkite visus įdėtus galiumus
2. **Klasifikuokite neklaifikuotus galiumus**: Atsakykite į adminiame pranešimo skiltį (admin notices)
3. **Nustatykite partnerius**: Pridėkite partnerius, jei naudojate Partner matomumą
4. **Struktūrininkite naudojimą**: Sekkite, kurie galiumi naudojami labiausiai
5. **Dokumentuokite sprendimus**: Laikykite zapisus dėl to, kodėl pasirinkote kiekvieną matomumo lygį
