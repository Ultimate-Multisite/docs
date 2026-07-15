---
title: 'Lekcija 7: Učinite ga svojim'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lekcija 7: Učinite ga svojim

Vaši kupci nikada ne bi trebali imati osjećaj da koriste "neki WordPress plugin." Trebali bi imati osjećaj da koriste FitSite -- platformu izgrađenu za njihovu industriju. Ova lekcija obrađuje brendiranje, white-labeling i kako postići da platforma djeluje kao proizvod.

## Gdje smo stali {#where-we-left-off}

FitSite ima funkcionalan tijek naplate koji vodi vlasnike fitness studija od odabira plana do aktivnog web-mjesta. Sada ćemo učiniti da cijelo iskustvo djeluje kao kohezivan, brendirani proizvod.

## Domena vaše platforme {#your-platform-domain}

Temelj vašeg brenda je vaša domena. Za FitSite:

- **Glavna domena**: `fitsite.com` (vaše marketinško web-mjesto i korijen mreže)
- **Web-mjesta kupaca**: `studioname.fitsite.com` (poddomena)
- **Prilagođene domene**: Kupci na planovima Growth i Pro mogu mapirati vlastitu domenu

### Postavljanje vaše domene {#setting-up-your-domain}

1. Registrirajte domenu svoje platforme
2. Usmjerite je prema svom pružatelju hostinga
3. Konfigurirajte wildcard DNS (`*.fitsite.com`) za poddomene kupaca
4. Provjerite je li wildcard SSL aktivan

Pogledajte [Kako konfigurirati mapiranje domena](/user-guide/domain-mapping/how-to-configure-domain-mapping) za detaljne upute.

## White-labeling administratorskog iskustva {#white-labeling-the-admin-experience}

Kada se vlasnik fitness studija prijavi u Dashboard svojeg web-mjesta, trebao bi vidjeti vaš brend, a ne WordPress ili Ultimate Multisite brendiranje.

### Prilagođena stranica za prijavu {#custom-login-page}

Prilagodite WordPress stranicu za prijavu tako da prikazuje:

- Vaš FitSite logotip
- Pozadinske slike prikladne za fitness
- Boje vašeg brenda

### Brendiranje Dashboarda {#dashboard-branding}

Upotrijebite dodatak [Admin Page Creator](/addons/admin-page-creator) ili prilagođeni CSS kako biste:

- Zamijenili WordPress logotip svojim FitSite logotipom
- Prilagodili administratorsku shemu boja da odgovara vašem brendu
- Dodali prilagođeni widget za Dashboard s brzim poveznicama i resursima za pomoć specifičnima za fitness

### Prilagođene administratorske stranice {#custom-admin-pages}

Razmislite o izradi prilagođenih administratorskih stranica koje ističu najrelevantnije radnje za vlasnike fitness studija:

- "Uredite raspored svojih satova"
- "Ažurirajte profile trenera"
- "Pogledajte svoje web-mjesto"

Time se smanjuje krivulja učenja jer se radnje relevantne za nišu stavljaju u prvi plan umjesto da budu skrivene u standardnom WordPress izborniku.

## Brendiranje vaše komunikacije {#branding-your-communications}

Svaka e-pošta, račun i obavijest trebali bi jačati vaš brend.

### Sistemske e-poruke {#system-emails}

Idite na **Ultimate Multisite > Settings > Emails** i prilagodite sve sistemske e-poruke:

- **Ime pošiljatelja**: FitSite
- **E-pošta pošiljatelja**: hello@fitsite.com
- **Predlošci e-pošte**: Koristite boje i logotip svojeg brenda
- **Jezik**: Specifičan za fitness u cijelom sadržaju

Ključne e-poruke koje treba prilagoditi:

| E-pošta | Generička verzija | FitSite verzija |
|-------|----------------|-----------------|
| Dobrodošlica | "Vaše novo web-mjesto je spremno" | "Web-mjesto vašeg fitness studija je aktivno" |
| Potvrda plaćanja | "Plaćanje primljeno" | "Plaćanje FitSite pretplate potvrđeno" |
| Završetak probnog razdoblja | "Vaše probno razdoblje uskoro završava" | "Vaše FitSite probno razdoblje završava za 3 dana -- zadržite web-mjesto svojeg studija aktivnim" |

### Računi {#invoices}

Prilagodite predloške računa s:

- Vašim FitSite logotipom i bojama brenda
- Podacima o vašem poslovanju
- Nazivima proizvoda specifičnima za fitness (ne generičkim ID-jevima planova)

## Web-mjesto okrenuto kupcima {#the-customer-facing-site}

Vaša glavna domena (`fitsite.com`) treba marketinško web-mjesto koje prodaje platformu. To je odvojeno od administratorskog dijela Ultimate Multisite mreže -- to je javno lice vašeg poslovanja.

Ključne stranice:

- **Početna stranica**: Jasna vrijednosna ponuda za fitness poduzeća
- **Značajke**: Što FitSite radi, izraženo fitness terminima
- **Cijene**: Vaša tri plana s usporedbama značajki specifičnima za nišu
- **Primjeri**: Prikažite web-mjesta izrađena na platformi
- **Prijava**: Poveznice na vaš obrazac za naplatu

:::tip Vaše marketinško web-mjesto može biti mrežno web-mjesto
Izradite svoje marketinško web-mjesto kao web-mjesto unutar vlastite mreže. To vam omogućuje da njime upravljate iz istog Dashboarda i pokazuje mogućnosti vaše vlastite platforme.
:::

## Prilagođena domena za kupce {#custom-domain-for-customers}

Za kupce na planovima koji uključuju prilagođene domene jasno dokumentirajte postupak:

1. Kupac registrira ili prenosi svoju domenu registraru
2. Kupac ažurira DNS kako bi usmjerio domenu prema vašoj platformi (navedite točne zapise)
3. Ultimate Multisite obrađuje mapiranje domene i SSL

Izradite članak pomoći ili unos u bazu znanja posebno za ovaj postupak, napisan za netehničke vlasnike fitness studija.

## FitSite mreža do sada {#the-fitsite-network-so-far}

```
FitSite mreža
├── WordPress Multisite (način rada s poddomenama)
├── Ultimate Multisite (konfiguriran + brendiran)
├── Domena platforme (fitsite.com + wildcard SSL)
├── Predlošci web-mjesta (Studio Essential, Gym Pro, Fitness Chain)
├── Proizvodi (Starter, Growth, Pro + dodatne ponude pri narudžbi)
├── Tijek naplate (specifičan za nišu, testiran)
├── Brendiranje
│   ├── Prilagođena stranica za prijavu
│   ├── Brendirani administratorski Dashboard
│   ├── Sistemske e-poruke specifične za nišu
│   ├── Brendirani računi
│   └── Marketinško web-mjesto na fitsite.com
└── Spremno za tijek onboardinga (sljedeća lekcija)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Domena platforme i DNS** konfigurirani za brendirano iskustvo
- **White-labeled administratorsko sučelje** s FitSite brendiranjem kroz cijelo iskustvo
- **Prilagođena komunikacija** -- e-poruke, računi i obavijesti svi su u skladu s brendom
- **Marketinško web-mjesto** koje prodaje FitSite vlasnicima fitness studija
- **Dokumentacija za prilagođene domene** za kupce koji žele vlastitu domenu

---

**Sljedeće:** [Lekcija 8: Onboarding kupaca](lesson-8-onboarding) -- osmislit ćemo iskustvo koje novu prijavu pretvara u aktivnog, zadovoljnog kupca.
