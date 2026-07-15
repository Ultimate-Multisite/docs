---
title: Vještina estetike dizajnerskog sistema
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Vještina estetike dizajnerskog sistema

**Vještina estetike dizajnerskog sistema** je vođeni pristup usavršavanju vizuelnog identiteta vašeg sajta. Pomaže vam da donosite dosljedne odluke o tipografiji, boji, razmaku i pokretnim elementima (motion tokens) koji definišu vaš dizajnerski sistem.

## Šta je estetika dizajnerskog sistema? {#what-is-design-system-aesthetics}

Estetika dizajnerskog sistema je strukturirana vještina koja pokriva:

- **Tipografiju**: Porodice fontova, veličine, težine i linijski razmak
- **Boje**: Primarne, sekundarne, akcentne i neutralne palete
- **Razmak**: Skale za padding, margin i gap
- **Granice**: Tokens za radijus i širinu
- **Sjenke**: Tokens za visinu i dubinu
- **Pokret**: Animacije i tranzicije

Ove odluke se pohranjuju u `theme.json` datoteku vaše teme, stvarajući kohezivan vizualni sistem.

## Zašto koristiti estetiku dizajnerskog sistema? {#why-use-design-system-aesthetics}

### Dosljednost (Consistency) {#consistency}

Dizajnerski sistem osigurava:

- Da sav tekst koristi istu tipografsku skalu
- Da se boje dosljedno koriste širom sajta
- Da razmak prati predvidljiv obrazac
- Da animacije djeluju ujednačeno

### Efikasnost (Efficiency) {#efficiency}

Umjesto da donosite dizajnerske odluke stranica po stranicu, vi:

- Definišete tokens jednom
- Primjenjujete ih svugdje
- Ažurirate globalno promjenom samo jedne vrijednosti

### Fleksibilnost (Flexibility) {#flexibility}

Možete:

- Brzo prilagoditi cijeli dizajnerski sistem
- Eksperimentisati sa različitim estetikama
- Održavati dosljednost brenda dok se razvijate

## Pokretanje vještine estetike dizajnerskog sistema {#triggering-the-design-system-aesthetics-skill}

### Ručna aktivacija {#manual-activation}

Možete pokrenuti vještinu u bilo kojem trenutku:

```
"Pomozi mi da usavršim svoj dizajnerski sistem"
```

ili

```
"Hajde da poboljšamo estetiku mog sajta"
```

ili

```
"Vodi me kroz odluke o dizajnerskom sistemu"
```

### Automatski prijedlozi {#automatic-suggestions}

Agent može predložiti korištenje vještine kada:

- Tražite promjene dizajna
- Zahtijevate "modernizaciju" ili "profesionalni" redizajn
- Želite poboljšati vizualnu dosljednost
- Pripremajate lansiranje sajta

## Proces estetike dizajnerskog sistema {#the-design-system-aesthetics-process}

### Korak 1: Tipografija {#step-1-typography}

Agent pita o vašim izborima fontova:

```
Koji je vaš preferirani tipografski stil?
- Serif (tradicionalan, elegantan)
- Sans-serif (modern, čist)
- Monospace (tehnički, fokusiran na kod)

Za font naslova:
- Da li želite poseban font za naslove, ili koristiti isti kao za tekst tijela?
- Preferencija: podebljano, elegantno, igrivo, minimalno?

Za font teksta tijela:
- Čitljivost je ključna. Preferirate li:
  - Veći, rašireniji tekst
  - Kompaktan, efikasan tekst
  - Standardna veličina
```

Zatim agent definiše:

- **Font naslova**: Primarni font za naslove i titule
- **Font teksta tijela**: Font za pasuse i tekst tijela
- **Monospace font**: Font za kod i tehnički sadržaj
- **Skala veličina**: Preddefinirane veličine (mala, osnovna, velika, XL, itd.)
- **Skala težine**: Težine fontova (regular, medium, bold, itd.)
- **Linijski razmak**: Razmak između redova radi čitljivosti

### Korak 2: Paleta boja {#step-2-color-palette}

```
Definisati ćemo vašu paletu boja.

Primarna boja (boja vašeg brenda):
- Trenutno: [prikazuje postojeću boju]
- Promijeniti na: [odabir boje ili heks kod]

Sekundarna boja (podržavajuća boja):
- Trenutno: [prikazuje postojeću boju]
- Promijeniti na: [odabir boje ili heks kod]

Akcentna boja (naglašavanje i CTA):
- Trenutno: [prikazuje postojeću boju]
- Promijeniti na: [odabir boje ili heks kod]

Neutralna paleta (sivi tonovi za tekst, granice, pozadine):
- Lagana: [boja]
- Srednja: [boja]
- Tamna: [boja]
```

Agent kreira kompletnu paletu koja uključuje:

- Primarne, sekundarne i akcentne boje
- Neutralne sive boje (lagana, srednja, tamna)
- Semantične boje (uspjeh, upozorenje, greška)
- Stati za hover i aktivno stanje

### Korak 3: Razmak {#step-3-spacing}

```
Koliko "dišnog prostora" želite?

Preferencija za skalu razmaka:
- Kompaktan (uska, efikasna raspoređenja)
- Normalan (uravnotežan razmak)
- Prostranstven (generozan prazan prostor)

Ovo utiče na:
- Padding unutar dugmadi i kartica
- Margin između sekcija
- Gap između elemenata u mreži
```

Agent definiše tokens za razmak:

- Osnovna jedinica (obično 4px ili 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Specifične vrijednosti za padding, margin, gap

### Korak 4: Granice i sjenke {#step-4-borders-and-shadows}

```
Vizuelna dubina i definicija:

Preferencija za radijus granica:
- Oštro (bez zaobljenja)
- Suptilno (mali radijus)
- Zaobljeno (srednji radijus)
- Vrlo zaobljeno (veliki radijus)

Dubina sjenke:
- Ravno (bez sjenki)
- Suptilno (lagane sjenke)
- Izražajno (jake sjenke)
```

Agent kreira:

- Tokens za radijus granica (za dugmad, kartice, inpute)
- Tokens za sjenke za nivoe visine
- Tokens za širinu granica

### Korak 5: Pokret i animacija {#step-5-motion-and-animation}

```
Kako bi vaš sajt trebao djelovati kada je interaktivan?

Preferencija za animaciju:
- Minimalno (bez animacija)
- Suptilno (nježne tranzicije)
- Igrivo (primjetne animacije)

Specifične animacije:
- Tranzicije stranica: fade, slide, ili none?
- Hover na dugmetu: scale, promjena boje, ili obje?
- Stati za učitavanje: spinner, skeleton, ili progress bar?
```

Agent definiše:

- Trajanje tranzicija (brzo, normalno, sporo)
- Funkcije za smanjenje (ease-in, ease-out, ease-in-out)
- Keyframe-ove animacije za uobičajene interakcije

## Primjena estetike dizajnerskog sistema {#applying-design-system-aesthetics}

### Automatska primjena {#automatic-application}

Nakon što završite vještinu, agent:

1. Ažurira `theme.json` vašoj temi sa svim tokensima
2. Primjenjuje dizajnerski sistem na aktivnu temu
3. Regeneriše stilove blokova kako bi odgovarali novom sistemu
4. Aktivira ažuriranu temu

### Ručna primjena {#manual-application}

Možete direktno uređivati `theme.json`:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Pregled dizajnerskog sistema {#viewing-your-design-system}

### Pitajte agenta {#ask-the-agent}

```
"Prikaži mi svoj dizajnerski sistem"
```

ili

```
"Koji su moji trenutni dizajnerski tokens?"
```

Agent će prikazati vašu tipografiju, boje, razmak i druge tokens.

### Pregled theme.json {#view-themejson}

Otvorite `/wp-content/themes/[theme-name]/theme.json` u tekstualnom editoru da vidite sirove definicije tokens.

## Ažuriranje dizajnerskog sistema {#updating-your-design-system}

### Brza ažuriranja {#quick-updates}

Pitajte agenta za specifične promjene:

```
"Učini primarnu boju tamnijom"
```

ili

```
"Povećaj skalu razmaka za 20%"
```

ili

```
"Promijeni font naslova u serif"
```

### Potpuni redizajn {#full-redesign}

Ponovo pokrenite vještinu estetike dizajnerskog sistema:

```
"Hajde da redizajniramo cijeli dizajnerski sistem"
```

O će vas ponovo voditi kroz sve odluke, počevši od vaših trenutnih vrijednosti.

### Parcijalna ažuriranja {#partial-updates}

Ažurirajte specifične aspekte:

```
"Ažuriraj samo paletu boja, sve ostalo ostavi"
```

## Najbolje prakse dizajnerskog sistema {#design-system-best-practices}

### Dosljednost {#consistency-1}

- Koristite iste tokens svugdje
- Ne kreirajte boje ili veličine ad hoc
- Referencirajte tokens umjesto hardkodiranja vrijednosti

### Imenovanje {#naming}

Koristite jasna, semantička imena:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilnost {#scalability}

Dizajnirajte sistem da raste:

- Koristite relativne jedinice (rem, em) umjesto piksela
- Kreirajte skale (xs, sm, md, lg, xl) umjesto proizvoljnih vrijednosti
- Planirajte buduće dodavke

### Dokumentacija {#documentation}

Dokumentujte svoj dizajnerski sistem:

- Zašto ste izabrali određene boje
- Kada koristiti svaki token
- Izuzeci i rubni slučajevi

## Uobičajeni obrasci dizajnerskog sistema {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}
- Sans-serif tipografija (Inter, Helvetica)
- Ograničena paleta boja (2-3 boje)
- Generozan razmak
- Suptilne sjenke
- Glatke, brze animacije

### Topao i prijateljski {#warm-and-friendly}
- Mješavina serif i sans-serif
- Topla paleta boja (narandžasta, topla siva)
- Zaobljene ivice
- Mekane sjenke
- Igrivo animacije

### Profesionalni korporativni {#professional-corporate}
- Čist sans-serif (Roboto, Open Sans)
- Neutralna paleta sa akcentnom bojom
- Strukturiran razmak
- Minimalne sjenke
- Suptilne tranzicije

### Kreativan i hrabar {#creative-and-bold}
- Distinktivna tipografija
- Smeđa paleta boja
- Varijabilan razmak
- Snažne sjenke
- Primjetne animacije

## Rješavanje problema {#troubleshooting}

**Promjene dizajnerskog sistema se ne prikazuju**
- Obrišite keš u pregledniku
- Ponovo izgradite sajt ako koristite statički generator
- Provjerite da li je `theme.json` validan JSON
- Potvrdite da je tema aktivna

**Boje izgledaju drugačije na različitim stranicama**
- Provjerite da li postoje sukobljene CSS definicije u pluginovima
- Potvrdite da sve stranice koriste istu temu
- Obrišite sve kešing pluginove

**Želim da se vratim na prethodni dizajnerski sistem**
- Pitajte agenta: "Prikaži mi istoriju dizajnerskog sistema"
- Ručno uredite `theme.json` na prethodne vrijednosti
- Ponovo pokrenite vještinu sa drugačijim izborima

## Sljedeći koraci {#next-steps}

Nakon definisanja dizajnerskog sistema:

1. **Pregledajte svoj sajt**: Posjetite svoj sajt da vidite novi dizajn
2. **Dalje usavršavanje**: Napravite prilagodbe ponovnim korištenjem vještine
3. **Kreiranje šablona**: Izgradite prilagođene blok šablone koristeći svoje dizajnerske tokens
4. **Dokumentacija**: Podijelite svoj dizajnerski sistem sa članovima tima
