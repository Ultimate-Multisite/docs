---
title: '12 pamoka: Verslo valdymas'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# 12 pamoka: Verslo valdymas

Platforma nėra projektas, kurį užbaigiate -- tai verslas, kurį valdote. Šioje pamokoje aptariamos kasdienės FitSite valdymo operacijos: palaikymas, atsiskaitymai, priežiūra ir klientų pasitenkinimo užtikrinimas.

## Kur sustojome

FitSite veikia, o klientai registruojasi. Dabar turite valdyti veiklą tvariai.

## Kasdienės operacijos

### Stebėsena

Tikrinkite tai kasdien (arba nustatykite įspėjimus):

- **Veikimo laikas**: Ar platforma pasiekiama? Naudokite veikimo laiko stebėsenos paslaugą.
- **Naujos registracijos**: Kiek naujų klientų šiandien užsiregistravo?
- **Nepavykę mokėjimai**: Ar yra mokėjimo nesėkmių, kurioms reikia dėmesio?
- **Palaikymo užklausos**: Ar yra neatsakytų klientų klausimų?

### Klientų palaikymas

Jūsų nišinis fokusas čia yra pranašumas. Kadangi visi jūsų klientai yra sporto studijos, tuos pačius klausimus matysite nuolat:

**Dažni klausimai, kuriuos gausite:**

- „Kaip atnaujinti savo užsiėmimų tvarkaraštį?“
- „Ar galiu pakeisti savo svetainės spalvas?“
- „Kaip į savo svetainę pridėti naują trenerį?“
- „Mano domenas neveikia“
- „Kaip atšaukti / atnaujinti savo planą?“

Kurkite savo žinių bazę (pradėtą 8 pamokoje) pagal šiuos pasikartojančius klausimus. Kiekvienas palaikymo bilietas, kuris galėjo būti žinių bazės straipsnis, yra signalas tą straipsnį parašyti.

### Palaikymo lygiai

Augant struktūruokite palaikymą pagal planą:

| Planas | Palaikymo lygis | Atsakymo laikas |
|------|--------------|---------------|
| Starter | Žinių bazė + el. paštas | 48 valandos |
| Growth | Palaikymas el. paštu | 24 valandos |
| Pro | Prioritetinis el. paštas + įvedimo skambutis | 4 valandos |

[Support Tickets priedas](/addons/support-tickets) gali padėti valdyti palaikymo užklausas platformoje.

## Atsiskaitymo operacijos

### Pasikartojantys mokėjimai

Ultimate Multisite automatiškai tvarko pasikartojantį atsiskaitymą per jūsų mokėjimų šliuzą. Jūsų darbas yra stebėti:

- **Nepavykusius mokėjimus**: Susisiekite nedelsdami. Dauguma nesėkmių yra pasibaigusios kortelės, o ne tyčiniai atšaukimai.
- **Skolų priminimus**: Nustatykite automatizuotą pakartotinių bandymų logiką per savo mokėjimų šliuzą (Stripe tai tvarko gerai)
- **Atšaukimo užklausas**: Supraskite, kodėl klientai išeina. Kiekvienas atšaukimas yra grįžtamasis ryšys.

### Narysčių valdymas

Eikite į **Ultimate Multisite > Narystės**, kad:

- Peržiūrėtumėte visas aktyvias prenumeratas
- Tvarkytumėte atnaujinimo ir sumažinimo užklausas
- Prireikus apdorotumėte grąžinimus
- Valdytumėte bandomųjų laikotarpių pabaigą

Visą nuorodą žr. [Narysčių valdymas](/user-guide/administration/managing-memberships).

### Sąskaitų faktūrų išrašymas

Užtikrinkite, kad sąskaitos faktūros būtų teisingai sugeneruotos kiekvienam mokėjimui. Klientams gali reikėti sąskaitų faktūrų verslo išlaidų ataskaitoms. Žr. [Mokėjimų ir sąskaitų faktūrų valdymas](/user-guide/administration/managing-payments-and-invoices).

## Platformos priežiūra

### WordPress ir plugin atnaujinimai

Kaip tinklo administratorius, esate atsakingi už:

- **WordPress branduolio atnaujinimus**: Prieš taikydami produkcijoje, išbandykite staging svetainėje
- **Plugin atnaujinimus**: Taip pat -- pirmiausia išbandykite, tada taikykite visame tinkle
- **Temos atnaujinimus**: Patikrinkite, ar šablonai po temos atnaujinimų vis dar atrodo teisingai
- **Ultimate Multisite atnaujinimus**: Sekite pakeitimų žurnalą ir išbandykite prieš atnaujindami

:::warning Niekada neatnaujinkite produkcijoje be testavimo
Sugedęs atnaujinimas paveikia kiekvieną kliento svetainę jūsų tinkle. Visada pirmiausia išbandykite atnaujinimus savo tinklo staging kopijoje.
:::

### Saugumas

- Laikykite visą programinę įrangą atnaujintą
- Naudokite stiprius slaptažodžius ir dviejų veiksnių autentifikavimą administratorių paskyroms
- Stebėkite įtartiną veiklą
- Turėkite planą saugumo incidentams

### Našumas

Augant jūsų tinklui, stebėkite:

- **Puslapio įkėlimo laiką**: Ar klientų svetainės greitos?
- **Serverio išteklių naudojimą**: CPU, atmintis, disko vieta
- **Duomenų bazės našumą**: Dideliems tinklams laikui bėgant reikia duomenų bazės optimizavimo

Apsvarstykite kešavimo įgyvendinimą (puslapio kešas, objektų kešas) ir CDN, jei to dar nepadarėte. [Cloudflare integracija](/user-guide/host-integrations/cloudflare) tvarko didelę šios dalies dalį.

## Klientų gyvavimo ciklo valdymas

### Klientų praradimo mažinimas

Klientų praradimas yra procentas klientų, kurie kas mėnesį atšaukia paslaugą. Prenumeratos verslui klientų praradimo mažinimas yra toks pat svarbus kaip naujų klientų pritraukimas.

**Dažnos priežastys, kodėl sporto studijų klientai išeina:**

- Jie nesugebėjo suprasti, kaip naudotis platforma → pagerinkite įvedimą
- Svetainė neatrodė pakankamai gerai → pagerinkite šablonus
- Jie nematė vertės → pagerinkite funkcijas arba komunikaciją
- Jie rado pigesnę alternatyvą → sustiprinkite savo nišinę vertę
- Jų verslas užsidarė → neišvengiama, bet sekite tai atskirai

### Atnaujinimų skatinimas

Starter plano klientus, kuriems sekasi, reikėtų skatinti atnaujinti planą:

- Kai jie pasiekia plano ribas (svetainės, saugykla), rodykite atnaujinimo raginimus
- Siųskite tikslinius el. laiškus, pabrėžiančius Growth plano funkcijas, kurios jiems būtų naudingos
- Parodykite, ką sukūrė Growth/Pro klientai

### Susigrąžinimo kampanijos

Kai klientas atšaukia:

1. Paklauskite kodėl (išėjimo apklausa arba el. laiškas)
2. Jei įmanoma, spręskite jų rūpestį
3. Pasiūlykite nuolaidą grįžimui (30–60 dienų po atšaukimo)

## Savaitinės ir mėnesinės rutinos

### Kas savaitę

- Peržiūrėkite naujas registracijas ir atšaukimus
- Atsakykite į visus atvirus palaikymo bilietus
- Patikrinkite platformos našumą ir veikimo laiką
- Peržiūrėkite visus nepavykusius mokėjimus

### Kas mėnesį

- Analizuokite pagrindinius rodiklius (MRR, klientų praradimas, nauji klientai, atnaujinimai)
- Taikykite WordPress ir plugin atnaujinimus (po staging testo)
- Peržiūrėkite ir atnaujinkite žinių bazę pagal palaikymo tendencijas
- Siųskite klientams naujienlaiškį arba atnaujinimą (naujos funkcijos, patarimai, sporto industrijos naujienos)

### Kas ketvirtį

- Peržiūrėkite kainodarą, palygindami su konkurentais ir klientų grįžtamuoju ryšiu
- Įvertinkite šablonų dizainus -- ar juos reikia atnaujinti?
- Įvertinkite hostingo pajėgumą -- ar reikia plėstis?
- Peržiūrėkite ir pagerinkite įvedimą pagal aktyvavimo duomenis

## Ką sukūrėme šioje pamokoje

- **Kasdienės stebėsenos procedūros** veikimo laikui, registracijoms, mokėjimams ir pagalbai
- **Pakopinė pagalbos struktūra**, pritaikyta plano lygiams
- **Atsiskaitymo operacijos**, įskaitant priminimus dėl nesėkmingų mokėjimų ir atšaukimų tvarkymą
- **Priežiūros procedūros** atnaujinimams, saugumui ir našumui
- **Klientų praradimo mažinimo strategijos**, būdingos fitneso nišai
- **Savaitinės, mėnesinės ir ketvirtinės veiklos procedūros**

---

**Toliau:** [13 pamoka: Plėtra](lesson-13-growth) -- FitSite auginimas nuo nedidelės veiklos iki tikro verslo.
