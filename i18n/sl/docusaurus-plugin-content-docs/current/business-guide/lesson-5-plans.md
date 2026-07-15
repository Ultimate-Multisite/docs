---
title: 'Lekcija 5: Oblikovanje vaših paketov'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lekcija 5: Oblikovanje vaših paketov

Vaše ravni paketov niso samo cenovne ravni -- so odraz tega, kako vaše nišne stranke dejansko delujejo. V tej lekciji boste oblikovali ravni izdelkov, ki ustrezajo resničnim potrebam fitnes podjetij v različnih fazah.

## Kje smo ostali {#where-we-left-off}

FitSite ima pripravljene tri predloge (Studio Essential, Gym Pro, Fitness Chain). Zdaj ustvarimo pakete, ki določajo, do česa stranke dobijo dostop in koliko plačajo.

## Razmišljanje v segmentih strank {#thinking-in-customer-segments}

Napaka, ki jo naredi večina ljudi, je oblikovanje paketov okrog tehničnih funkcij (shramba, pasovna širina, število strani). Vaše nišne stranke ne razmišljajo v teh izrazih. Lastnik telovadnice razmišlja o tem, kaj potrebuje za vodenje svojega podjetja.

Za fitnes studie obstajajo trije naravni segmenti:

| Segment | Kdo so | Kaj potrebujejo |
|---------|-------------|----------------|
| **Samostojni trenerji / majhni studii** | 1-3 člani osebja, ena lokacija, na začetku | Profesionalno spletno mesto, informacije o vadbah, kontaktni obrazec |
| **Uveljavljene telovadnice** | 5-20 članov osebja, ena lokacija, rast | Vse zgoraj navedeno ter rezervacije, blog, galerija, domena po meri |
| **Fitnes verige** | Več lokacij, uveljavljena blagovna znamka | Vse zgoraj navedeno ter več spletnih mest, strani lokacij, imenik osebja |

Vaši paketi naj se ujemajo s temi segmenti, ne s poljubnimi svežnji funkcij.

## Ustvarjanje paketov FitSite {#creating-the-fitsite-plans}

Za vsak paket pojdite na **Ultimate Multisite > Izdelki > Dodaj izdelek**.

### Paket 1: FitSite Starter -- 49 $/mesec {#plan-1-fitsite-starter----49month}

**Cilj**: Samostojni trenerji in majhni studii

**Zavihek Opis**:
- Ime: FitSite Starter
- Opis: "Vse, kar osebni trener ali majhen studio potrebuje, da je na spletu videti profesionalno."

**Zavihek Splošno**:
- Vrsta izdelka: Paket
- Vloga stranke: Administrator

**Zavihek Predloge spletnih mest**:
- Dovoli predloge spletnih mest: Omogočeno
- Razpoložljive predloge: samo Studio Essential

**Omejitve**:
- Spletna mesta: 1
- Prostor na disku: 1 GB
- Domena po meri: Onemogočeno (uporablja `studioname.fitsite.com`)

**Zavihek Vtičniki**:
- Vtičnik za kontaktni obrazec: Prisili aktivacijo
- Vtičnik SEO: Prisili aktivacijo
- Vtičnik za rezervacije: Ni na voljo (spodbuda za nadgradnjo)

**Zavihek Teme**:
- Vaša izbrana tema: Prisili aktivacijo
- Vse druge teme: Skrito

### Paket 2: FitSite Growth -- 99 $/mesec {#plan-2-fitsite-growth----99month}

**Cilj**: Uveljavljene telovadnice z eno lokacijo

**Zavihek Opis**:
- Ime: FitSite Growth
- Opis: "Za uveljavljene telovadnice, ki so pripravljene povečati svojo spletno prisotnost in privabiti nove člane."

**Zavihek Predloge spletnih mest**:
- Razpoložljive predloge: Studio Essential in Gym Pro

**Omejitve**:
- Spletna mesta: 1
- Prostor na disku: 5 GB
- Domena po meri: Omogočeno

**Zavihek Vtičniki**:
- Vse v Starterju, plus:
- Vtičnik za rezervacije: Prisili aktivacijo
- Vtičnik za galerijo: Prisili aktivacijo
- Funkcionalnost bloga: Na voljo

**Zavihek Nadgradnje in znižanja**:
- Skupina paketov: FitSite Plans
- Vrstni red izdelka: 2

### Paket 3: FitSite Pro -- 199 $/mesec {#plan-3-fitsite-pro----199month}

**Cilj**: Fitnes verige z več lokacijami

**Zavihek Opis**:
- Ime: FitSite Pro
- Opis: "Celovita platforma za fitnes blagovne znamke z več lokacijami."

**Zavihek Predloge spletnih mest**:
- Razpoložljive predloge: vse tri predloge

**Omejitve**:
- Spletna mesta: 5 (eno na lokacijo)
- Prostor na disku: 20 GB
- Domena po meri: Omogočeno

**Zavihek Vtičniki**:
- Vse v Growthu, plus:
- Vsi premium vtičniki: Prisili aktivacijo

**Zavihek Nadgradnje in znižanja**:
- Skupina paketov: FitSite Plans
- Vrstni red izdelka: 3

## Nastavitev skupine paketov {#setting-up-the-plan-group}

Skupina paketov zagotavlja, da lahko stranke nadgradijo ali znižajo paket samo znotraj družine paketov FitSite. Na zavihku **Nadgradnje in znižanja** vsakega paketa:

1. Nastavite **Skupino paketov** na "FitSite Plans" za vse tri pakete
2. Nastavite **Vrstni red izdelka** na 1 (Starter), 2 (Growth), 3 (Pro)

To ustvari jasno pot nadgradnje: Starter → Growth → Pro.

## Dodajanje dodatnih ponudb ob naročilu {#adding-order-bumps}

Dodatne ponudbe ob naročilu so dodatni izdelki, ponujeni med zaključkom nakupa. Za FitSite razmislite o:

- **Paket dodatne shrambe** (19 $/mesec) -- dodatnih 5 GB prostora na disku
- **Prednostna podpora** (29 $/mesec) -- hitrejši odzivni časi
- **Dodatno spletno mesto** (39 $/mesec) -- za stranke, ki potrebujejo več spletnih mest, kot jih dopušča njihov paket

Ustvarite jih kot izdelke vrste **Paket** v Ultimate Multisite in jih povežite z ustreznimi paketi.

## Zakaj ta struktura deluje {#why-this-structure-works}

- **Starter** odstrani ovire za vstop -- nizka cena, preprosta ponudba, trenerje hitro spravi na splet
- **Growth** doda funkcije, ki jih telovadnice dejansko zahtevajo -- rezervacije, galerije, domene po meri
- **Pro** služi segmentu z visoko vrednostjo, ki potrebuje podporo za več lokacij
- **Dodatne ponudbe ob naročilu** strankam omogočajo prilagajanje brez zapletanja osnovnih paketov
- **Jasna pot nadgradnje** pomeni, da stranke rastejo z vami, namesto da odidejo

## Omrežje FitSite doslej {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Kaj smo zgradili v tej lekciji {#what-we-built-this-lesson}

- **Tri ravni paketov**, usklajene z resničnimi segmenti fitnes podjetij
- **Omejevanje funkcij** z uporabo nadzora vtičnikov in predlog v Ultimate Multisite
- **Skupino paketov** z jasno potjo nadgradnje
- **Izdelke dodatnih ponudb ob naročilu** za dodaten prihodek
- **Cenovno strukturo**, ki temelji na vrednosti za stranko, ne na tehničnih specifikacijah

---

**Naslednje:** [Lekcija 6: Izkušnja prijave](lesson-6-checkout) -- zgradimo tok zaključka nakupa, ki lastnike fitnes studiev pretvori v plačljive stranke.
