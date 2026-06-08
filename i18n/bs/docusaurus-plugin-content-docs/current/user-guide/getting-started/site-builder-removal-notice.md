---
title: Obavještenje o uklanjanju režima izgrađivača stranica
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Uklanjanje Site Builder moda

**Site Builder mod je uklonjen u Superdav AI Agent v1.12.0.** Ako ste koristili Site Builder mod, preporučujemo da migrirate na **Setup Assistant agent** za kreiranje tema i postavljanje sajta.

## Šta se dogodilo?

### Site Builder mod (Staro)

Site Builder mod je bio interfejs baziran na vodiču (wizard) za:

- Kreiranje sajtova iz predložaka
- Konfigurisanje osnovnih postavki
- Izbor teme
- Postavljanje početnog sadržaja

### Šta ga je zamijenilo?

**Setup Assistant agent** sada upravlja svim funkcionalnostima Site Builder-a uz:

- Fleksibilnije postavljanje koje vodi agent
- Bolje opcije za prilagođavanje tema
- Integraciju sa uvođenjem Theme Builder-a
- Tračnu memoriju `site_brief` za buduće sesije

## Ako ste koristili Site Builder mod

### Vaši sajtovi su sigurni

- Postojeći sajtovi kreirani Site Builder modom i dalje rade
- Nema gubitka podataka niti prekida rada sajta
- I dalje možete normalno upravljati svojim sajtovima

### Migrirajte na Setup Assistant Agent

Za postavljanje novog sajta ili promjene teme, koristite Setup Assistant agent:

```
"Help me set up a new site"
```

ili

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent pruža istu funkcionalnost, ali sa većom fleksibilnošću.

## Poređenje: Site Builder vs. Setup Assistant

| Funkcija | Site Builder (Uklonjen) | Setup Assistant (Novi) |
|---------|------------------------|----------------------|
| Metoda postavljanja | Forma vodiča (Wizard) | Konverzacija agenta |
| Izbor teme | Preddefinirani predlošci | Prilagođena generacija |
| Prilagođavanje | Ograničene opcije | Puni dizajn sistem |
| Site brief | Nije pohranjen | Trajna memorija |
| Buduće sesije | Ponovno postavljanje | Korištenje pohranjenog site_briefa |
| Fleksibilnost | Fiksni radni tok | Adaptivna konverzacija |

## Migriranje na Setup Assistant Agent

### Za nove sajtove

Umjesto korištenja Site Builder moda:

1. Zatražite: "Help me set up a new site"
2. Setup Assistant agent će vas voditi kroz:
   - Svrhu i ciljeve sajta
   - Ciljnu publiku
   - Brend identitet
   - Generisanje teme
   - Početnu konfiguraciju

### Za postojeće sajtove

Ako imate postojeći sajt kreiran Site Builder modom:

1. Možete ga nastaviti koristiti onakav kakav jeste
2. Da biste ažurirali temu, zatražite: "Redesign my site"
3. Setup Assistant agent će vam pomoći da kreirate novu temu
4. Podaci vašeg sajta ostaju nepromijenjeni

### Za promjenu tema

Umjesto izbora tema u Site Builder modu:

1. Zatražite: "Change my theme"
2. Setup Assistant agent će:
   - Pitati o vašim preferencijama dizajna
   - Generisati prilagođenu temu
   - Aktivisati je na vašem sajtu

## Ključne razlike

### Site Builder Mod

```
1. Izaberi predložak
2. Odaberi temu
3. Konfiguriraj osnovne postavke
4. Gotovo
```

### Setup Assistant Agent

```
1. Opisite svrhu sajta
2. Definisaću ciljnu publiku
3. Izaberite preferencije dizajna
4. Agent generiše prilagođenu temu
5. Agent aktivira temu
6. Site brief pohranjen za buduće sesije
```

## Prednosti Setup Assistant Agent-a

### Fleksibilnije

- Opisite svoj sajt prirodnim jezikom
- Dobijete prilagođene preporuke
- Prilagođava se vašim specifičnim potrebama

### Bolje prilagođavanje

- Generisanje prilagođene teme
- Odluci o dizajnu sistemu
- Trajni dizajnerski tokeni

### Trajna memorija

- Vaš `site_brief` je pohranjen
- Budući agenti razumiju vaš sajt
- Nema potrebe ponavljati informacije o postavljanju

### Integrisan radni tok

- Uvođenje Theme Builder-a
- Skill za estetiku dizajnerskog sistema
- Kontrole vidljivosti sposobnosti
- Sve radi zajedno na neprekidan način

## Rješavanje problema

### Ne mogu pronaći Site Builder mod

Site Builder mod je uklonjen. Umjesto toga koristite Setup Assistant agent:

```
"Help me set up a new site"
```

### Želim ponovno kreirati sajt iz Site Builder-a

Možete ga ponovno kreirati sa Setup Assistant agent-om:

1. Zatražite: "Help me set up a new site"
2. Opširno opišite svrhu i dizajn vašeg originalnog sajta
3. Agent će generisati sličnu temu
4. Vaš `site_brief` će biti pohranjen za buduće reference

### Moj postojeći Site Builder sajt ne radi

Postojeći sajtovi kreirani Site Builder modom i dalje rade. Ako doživljavate probleme:

1. Provjerite da li je vaša tema i dalje aktivna
2. Provjerite da li su vaši pluginovi omogućeni
3. Provjerite WordPress logove grešaka
4. Kontaktirajte podršku ako problemi traju

### Mogu li i dalje koristiti svoje stare Site Builder predloške?

Site Builder predlošci više nisu dostupni. Međutim:

- Vaši postojeći sajtovi i dalje rade
- Možete kreirati slične sajtove sa Setup Assistant agent-om
- Setup Assistant agent pruža više opcija za prilagođavanje

## Sljedeći koraci

1. **Za nove sajtove**: Koristite Setup Assistant agent
2. **Za postojeće sajtove**: Nastavite korištenje onakav kakav jeste
3. **Za promjenu tema**: Zatražite pomoć od Setup Assistant agent-a
4. **Za usavršavanje dizajna**: Koristite skill za estetiku dizajnerskog sistema

## Povezani sadržaji

- **Theme Builder Onboarding**: Vođeno postavljanje za prilagođene teme
- **Setup Assistant Agent**: Postavljanje sajta koje vodi agent
- **Site Specification Skill**: Definisanje ciljeva i publike sajta
- **Design System Aesthetics Skill**: Usavršavanje vizuelnog identiteta sajta
