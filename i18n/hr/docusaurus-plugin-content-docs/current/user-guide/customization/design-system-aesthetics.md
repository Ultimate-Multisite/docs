---
title: Estetika Dizajna Sistema Vještina
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Vještina Estetike Design Sistema

**Vještina estetike Design Sistema** je usmjeren pristup poboljšanju vizualne identiteta vaše stranice. Pomaže vam donositi konzistentna odluka o tipografiji, bojama, razmjerima i tokenima za animacije koji definiraju vaš design system.

## Što je Estetika Design Sistema?

Estetika Design Sistema je strukturirana vještina koja pokriva:

- **Tipografiju**: Fontove, veličine, težine fonta i visine linija
- **Boje**: Primarne, sekundarne, akcentne i neutralne palete boja
- **Razmak (Spacing)**: Razmjerove paddinga, margina i razmjera za praznine
- **Oblikove (Borders)**: Tokene za radijus i širinu linija
- **Sjene (Shadows)**: Tokene za podizanje i dubinu sjene
- **Kretanje (Motion)**: Animacije i tranzicije

Ove odluke se obračunavaju u datom vam fajlu `theme.json` vašeg teme, stvarajući koherentni vizualni sistem.

## Zašto koristiti Estetiku Design Sistema?

### Konsistencija

Design system osigurava:

- Da se cijeli tekst koristi istajali sklop tipografije
- Da se boje koriste konzistentno na cijeloj stranici
- Da razmak slijedi predvidljivi obrazac
- Da animacije djeluju objedinjeno

### Efikasnost

Umjesto da donosite odluke o dizajnu stranicu po stranici, vi:

- Definišete tokenove jednom
- Primjenjujete ih svuda
- Ažurirate globalno mijenjajući samo jednu vrijednost

### Fleksibilnost

Možete:

- Brzo prilagoditi cijeli design system
- Eksperimentirati s različitim estetikama
- Održavati dosljednost brenda dok se razvijate

## Pokretanje Vještine Estetike Design Sistema

### Ručno Aktiviranje

Možete pokrenuti vještinu u bilo kojem trenutku:

```
"Pomozi mi poboljšati moj design system"
```

ili

```
"Dajmo da poboljšamo estetiku moje stranice"
```

ili

```
"Uputi me kroz odluke o design sistemu"
```

### Automatske Predlošci

Ag sorti mogu predložiti korištenje vještine kada:

- Pitate za promjene u dizajnu
- Tražite "moderniji" ili "profesionalniji" redizajn
- Želite poboljšati vizualnu dosljednost
- Pripremate lansiranje vaše stranice

## Proces dizajna sustava estetike

### Korak 1: Tipografija

Agent će vas pitati o vašim izborima fonta:

```
Kakav stil tipografije preferirate?
- Serif (tradicionalni, elegantan)
- Sans-serif (moderni, čist)
- Monospace (tehnički, fokusiran na kod)

Za font naslova:
- Želite li odvojeni font za naslove ili koristiti isti kao i za glavni tekst?
- Preferencija: debeli, elegantan, igrački, minimalan?

Za font glavnog teksta:
- Čitljivost je ključna. Da li preferirate:
  - Veći, prostorniji tekst
  - Kompaktniji, efikasniji tekst
  - Standardnu veličinu
```

Zatim će definirati sljedeće:

- **Font naslova (Heading font)**: Primarni font za naslove i zaglavlja.
- **Font glavnog teksta (Body font)**: Font za paragrafe i glavni tekst.
- **Monospace font**: Font za kod i tehnički sadržaj.
- **Skala veličina (Size scale)**: Preddefinirane veličine (mala, osnova, velika, XL itd.).
- **Skala težine (Weight scale)**: Težine fonta (običan, srednji, debeli itd.).
- **Visina linije (Line height)**: Razmak između linija za čitljivost.

### Korak 2: Paleta boja

```
Definirajmo vašu paletu boja.

Primarna boja (vaša brand boja):
- Trenutno: [prikazuje postojeću boju]
- Promijeniti na: [odaberanje boje ili heksadecimalni kod]

Sekundarna boja (podržavajuća boja):
- Trenutno: [prikazuje postojeću boju]
- Promijeniti na: [odaberanje boje ili heksadecimalni kod]

Akcentna boja (naglašavanje i CTA - Call to Action):
- Trenutno: [prikazuje postojeću boju]
- Promijeniti na: [odaberanje boje ili heksadecimalni kod]

Neutralna paleta (sivi tonovi za tekst, ivice, pozadine):
- Svijetla: [boja]
- Srednja: [boja]
- Tamna: [boja]
```

Agent će kreirati kompletnu paletu koja uključuje:

- Primarne, sekundarne i akcentne boje.
- Neutralne sive (svijetla, srednje, tamne).
- Semantičke boje (uspjeh, upozorenje, greška).
- Stanja prelaska miša (Hover) i aktivnog stanja (Active states).

### Korak 3: Razmak (Spacing)

Koliko prostora želite?

Preferencija razmaka (spacing scale):
- Kompaktan (čvrsti, efikasni rasporedi)
- Normalan (uravnotežen razmak)
- Prostorni (opušten prostor)

Ovo utječe na:
- Padding unutar dugmića i kartica
- Margine između sekcija
- Razmak između elemenata u gridu

Agent definiše tokene za razmake:

- Osnovna jedinica (obično 4px ili 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Specifične vrijednosti za padding, margin, gap

### Korak 4: Granice i Sjajeve (Borders and Shadows)

```
Vizualna dubina i definicija:

Preferencija za radius granice (Border radius):
- Oštri (bez zaobljenja)
- Suptilni (mala zaobljenost)
- Zaobljen (srednja zaobljenost)
- Vrlo zaobljen (velika zaobljenost)

Dubina sjajeve (Shadow depth):
- Ravna (bez sjaja)
- Suptilna (lagani sjaji)
- Izražena (snažni sjaji)
```

Agent kreira:

- Tokenove za radius granice (za dugmiće, kartice, ulaze)
- Tokenove za sjajeve za nivoe podizanja (elevation levels)
- Tokenove za širinu granice

### Korak 5: Kretanje i Animacija (Motion and Animation)

```
Kako bi vaš sajt trebao izgledati kada bude interaktivan?

Preferencija za animacije:
- Minimalne (bez animacija)
- Suptilne (lagane tranzicije)
- Zabavne (primjetne animacije)

Specifične animacije:
- Prelazi stranica: zamagljivanje, klizanje ili ništa?
- Hover na dugmiću: skaliranje, promjena boje ili oba?
- Stanja učitavanja: spinner, skeleton, ili progress bar?
```

Agent definiše:

- Trajanje tranzicija (brzo, normalno, sporo)
- Funkcije za ublažavanje (ease-in, ease-out, ease-in-out)
- Keyframes animacija za uobičajene interakcije

## Primjena Estetike Design Sistema

### Automatska primjena

Nakon što završite skill, agent:

1. Ažurira `theme.json` vašeg teme sa svim tokenovima
2. Primjenjuje design system na vaš aktivni temu
3. Regenerira stilove bloka da bi odgovarali novom sistemu
4. Aktivira ažuriranu temu

### Ručna primjena

Možete direktno uređivati `theme.json`:

## Pregledavanje vašeg Design Systema

### Pitajte Agenta

```
"Prikaži mi moj design system"
```

ili

```
"Koje su moje trenutne design tokeni?"
```

Agent će vam prikazati tipografiju, boje, razmak i druge tokene.

### Pogledajte theme.json

Otvorite datoteku `/wp-content/themes/[theme-name]/theme.json` u tekstualnom editoru kako biste vidjeli sirove definicije tokena.

## Ažuriranje vašeg Design Systema

### Brza ažuriranja

Pitajte agenta za specifične promjene:

```
"Uradi primarnu boju tamniju"
```

ili

```
"Povećaj skalu razmaka za 20%"
```

ili

```
"Promijeni font naslova na serifni"
```

### Potpuno redizajn

Ponovite vještinu Design System Aesthetics:

```
"Hajde da redizajniram cijeli moj design system"
```

Ovo će vas ponovno voditi kroz sve odluke, počevši s vaših trenutnih vrijednosti.

### Poljna ažuriranja

Ažurirajte specifične aspekte:

```
"Samo ažuriraj paletu boja, ostavi sve ostalo"
```

## Najbolje prakse Design Systema

### Dosljednost

- Koristite iste tokene svuda
- Ne kreirajte jednorazne boje ili veličine
- Referencirajte tokene umjesto da hardkodirate vrijednosti

### Imetanje imena (Naming)

Koristite jasna, semantička imena:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilnost

Dizajniraj svoj sustav koji može rasti:

- Koristi relativne jedinice (rem, em) umjesto piksela
- Kreiraj skalove (xs, sm, md, lg, xl) umjesto proizvoljnih vrijednosti
- Planiraj buduća dodavanja

### Dokumentacija

Dokumentiraj svoj dizajn sustav:

- Zašto si odabrao određene boje
- Kada koristiti svaki token
- Iznimke i rubne slučajeve

## Uobičajeni obrasci dizajna sustava (Common Design System Patterns)

### Modern Minimalist

- Sans-serif tipografija (Inter, Helvetica)
- Ograničena paleta boja (2-3 boje)
- Opterećen prostor (generous spacing)
- Suptilne sjene (subtle shadows)
- Glatke, brze animacije

### Topao i Priljubljivi (Warm and Friendly)

- Mješavina serif i sans-serif tipografije
- Topla paleta boja (narandžaste, tople sive)
- Zaokružena kutija (rounded corners)
- Mekane sjene
- Igrale animacije

### Profesionalni Korporativni (Professional Corporate)

- Čista sans-serif tipografija (Roboto, Open Sans)
- Neutralna paleta s akcentnom bojom
- Strukturiran prostor
- Minimalne sjene
- Suptilne tranzicije

### Kreativan i Odvažan (Creative and Bold)

- Izrazita tipografija
- Odvažna paleta boja
- Raznolik prostor
- Snažne sjene
- Primjetne animacije

## Rješavanje problema (Troubleshooting)

**Moje promjene u dizajnu sustava se ne prikazuju**
- Očisti keš browsera
- Ponovno izgradite svoj sajt ako koristite statički generator
- Provjeri da li je theme.json validan JSON
- Provjeri da li je tema aktivna

**Boje izgledaju drugačije na različitim stranicama**
- Provjeri postoji li sukobljiva CSS u pluginovima
- Provjeri da li sve stranice koriste istu temu
- Očisti bilo koji kešing pluginove

**Želim se vratiti na prethodni dizajn sustav**
- Pitajte agenta: "Prikaži mi historiju mog dizajna sustava" (Show me my design system history)
- Ručno uredite theme.json s prethodnim vrijednostima
- Ponovno pokrenite skill s različitim izborima

## Sljedeći koraci (Next Steps)

Nakon što definirate svoj dizajn sustav:

1. **Pregledaj svoj web dio**: Idite na svoj sajat kako biste vidjeli novi dizajn
2. **Daj još detalja**: Uradite prilagodbe koristeći tu vještinu ponovno
3. **Kreiraj predloške (templates)**: Izgradite vlastite blokove pomoću vaših dijagnostičkih podataka o dizajnu (design tokens)
4. **Dokumentiraj**: Podijelite svoj design system s članovima tima
