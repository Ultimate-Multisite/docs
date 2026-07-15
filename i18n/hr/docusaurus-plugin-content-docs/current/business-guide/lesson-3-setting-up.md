---
title: 'Lekcija 3: Postavljanje vaše mreže'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lekcija 3: Postavljanje vaše mreže

Vrijeme je za gradnju. U ovoj lekciji instalirat ćete Ultimate Multisite i konfigurirati temelje FitSite mreže. Svaka odluka ovdje donesena je s fitness nišom na umu.

## Gdje smo stali {#where-we-left-off}

Odabrali smo fitness studije kao svoju nišu i potvrdili priliku. Sada tu ideju pretvaramo u funkcionalnu platformu.

## Odabir hostinga {#choosing-your-hosting}

Vaš odabir hostinga važniji je za nišnu platformu nego za jedno web-mjesto. Ne hostate jedno web-mjesto -- hostate mrežu koja će narasti na desetke ili stotine web-mjesta.

### Što tražiti {#what-to-look-for}

- **Podrška za WordPress Multisite**: Ne rade svi hostovi dobro s multisite okruženjem
- **Wildcard SSL**: Ključan za mreže temeljene na poddomenama
- **Skalabilni resursi**: Treba vam prostor za rast bez migracije
- **Ultimate Multisite integracija**: Automatizirano mapiranje domena i SSL štedi značajan operativni trud

### Preporučeni pristup {#recommended-approach}

Odaberite host s popisa [Kompatibilnih pružatelja](/user-guide/host-integrations/closte). Oni su testirani s Ultimate Multisite i pružaju integracije koje su vam potrebne za mapiranje domena i SSL automatizaciju.

Za FitSite koristit ćemo konfiguraciju poddomena. To znači da će se web-mjesta korisnika u početku prikazivati kao `studioname.fitsite.com` prije nego što opcionalno mapiraju vlastitu domenu.

## Instaliranje WordPress Multisite {#installing-wordpress-multisite}

Ako još nemate instalaciju WordPress Multisite:

1. Instalirajte WordPress kod svog hosting pružatelja
2. Slijedite vodič [Kako instalirati WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Odaberite konfiguraciju **poddomena** kada se to od vas zatraži

:::tip Zašto poddomene?
Poddomene daju svakom korisničkom web-mjestu vlastitu zasebnu adresu (`studio.fitsite.com`) umjesto putanje (`fitsite.com/studio`). To je profesionalnije za vaše korisnike i izbjegava sukobe trajnih poveznica. Pogledajte [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) za detaljnu usporedbu.
:::

## Instaliranje Ultimate Multisite {#installing-ultimate-multisite}

Slijedite vodič [Instaliranje Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kako biste:

1. Prenijeli i aktivirali plugin na razini cijele mreže
2. Pokrenuli [Čarobnjak za postavljanje](/user-guide/getting-started/multisite-setup-wizard)

Tijekom čarobnjaka za postavljanje imajte FitSite nišu na umu:

- **Valuta**: Postavite na valutu koju koriste vaši korisnici fitness studija
- **Naziv tvrtke**: "FitSite" (ili odabrani naziv vašeg brenda)
- **Logotip tvrtke**: Prenesite logotip svog brenda -- prikazuje se na računima i e-pošti

## Konfiguriranje za fitness nišu {#configuring-for-the-fitness-niche}

Nakon što je Ultimate Multisite instaliran, donesite ove konfiguracijske odluke specifične za nišu:

### Opće postavke {#general-settings}

Idite na **Ultimate Multisite > Settings** i konfigurirajte:

- **Naziv web-mjesta**: FitSite
- **Zadana uloga**: Administrator -- vlasnicima fitness studija potrebna je potpuna kontrola nad sadržajem njihova web-mjesta
- **Registracija**: Omogućite registraciju korisnika kako bi se vlasnici studija mogli sami prijaviti

### Konfiguracija e-pošte {#email-configuration}

Sistemske poruke e-pošte trebale bi govoriti jezikom vaše niše. Idite na **Ultimate Multisite > Settings > Emails** i prilagodite:

- Zamijenite generički jezik "your new site" porukama specifičnima za fitness
- Primjer predmeta dobrodošlice: "Web-mjesto vašeg fitness studija je spremno"
- Primjer teksta dobrodošlice: Spomenite njihov studio, treninge i početak rada s njihovim fitness web-mjestom

To ćemo dodatno doraditi u Lekciji 8 (Uvođenje korisnika), ali postavljanje tona sada osigurava da čak i rane testne prijave djeluju specifično za nišu.

### Konfiguracija domene {#domain-configuration}

Ako koristite kompatibilnog hosting pružatelja, sada konfigurirajte mapiranje domena:

1. Idite na **Ultimate Multisite > Settings > Domain Mapping**
2. Slijedite vodič za integraciju za svoj određeni host
3. Testirajte dobivaju li nova podweb-mjesta SSL automatski

To osigurava da, kada u sljedećoj lekciji počnemo stvarati predloške i testna web-mjesta, sve radi od početka do kraja.

## FitSite mreža do sada {#the-fitsite-network-so-far}

Na kraju ove lekcije, evo što imate:

```
FitSite mreža
├── WordPress Multisite (način poddomena)
├── Ultimate Multisite (instaliran i konfiguriran)
├── Hosting s wildcard SSL
├── Mapiranje domena konfigurirano
├── Predlošci e-pošte specifični za nišu (početni)
└── Spremno za predloške web-mjesta (sljedeća lekcija)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Funkcionalna WordPress Multisite** instalacija u načinu poddomena
- **Ultimate Multisite instaliran** i konfiguriran s FitSite brendiranjem
- **Hosting i SSL** postavljeni za rastuću mrežu
- **Mapiranje domena** konfigurirano za vašeg hosting pružatelja
- **Ton e-pošte specifičan za nišu** uspostavljen od prvog dana

---

**Sljedeće:** [Lekcija 4: Izrada nišnih predložaka](lesson-4-templates) -- stvaramo predloške web-mjesta koje će vlasnici fitness studija zaista željeti koristiti.
