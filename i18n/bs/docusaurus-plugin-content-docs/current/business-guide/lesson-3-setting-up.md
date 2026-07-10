---
title: 'Lekcija 3: Postavljanje vaše mreže'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lekcija 3: Postavljanje vaše mreže {#lesson-3-setting-up-your-network}

Vrijeme je za izgradnju. U ovoj lekciji instalirat ćete Ultimate Multisite i konfigurisati temelj FitSite mreže. Svaka odluka ovdje napravljena je s obzirom na nišu fitnessa.

## Gdje smo stali {#where-we-left-off}

Odabrali smo fitness studije kao našu nišu i validirali priliku. Sada tu ideju pretvaramo u funkcionalnu platformu.

## Izbor hostinga {#choosing-your-hosting}

Vaš izbor hostinga važniji je za nišnu platformu nego za jednu pojedinačnu web stranicu. Vi ne hostujete jednu stranicu — vi hostujete mrežu koja će rasti do desetak ili stotina stranica.

### Na što obratiti pažnju {#what-to-look-for}

- **Podrška za WordPress Multisite**: Nema svih hostova dobro ruku sa multisajtom
- **Wildcard SSL**: Neophodno za mreže bazirane na poddomenama
- **Skalabilni resursi**: Trebate prostor za rast bez potrebe za migracijom
- **Integracija Ultimate Multisite**: Automatsko mapiranje domena i SSL štedi značajan operativni trud

### Preporučeni pristup {#recommended-approach}

Izaberite host sa liste [Kompatibilnih pružatelja](/user-guide/host-integrations/closte). Oni su testirani s Ultimate Multisite i pružaju integracije koje vam trebaju za mapiranje domena i automatizaciju SSL-a.

Za FitSite, koristićemo konfiguraciju poddomena. To znači da će lokacije klijenata u početku izgledati kao `studioname.fitsite.com` prije nego što opciono mapiraju svoj vlastiti domen.

## Instaliranje WordPress Multisite {#installing-wordpress-multisite}

Ako već nemate instaliran WordPress Multisite:

1. Instalirajte WordPress na vašeg pružatelja hostinga
2. Pratite vodič [Kako instalirati WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Izaberite konfiguraciju **poddomena** kada vas to traže

:::tip Zašto poddomene?
Poddomeni daju svakoj lokaciji klijenta svoj jedinstveni adres (npr. `studio.fitsite.com`) umjesto putanje (npr. `fitsite.com/studio`). Ovo je profesionalnije za vaše klijente i izbjegava sukobe permalinka. Pogledajte [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) za detaljno poređenje.
:::

## Instaliranje Ultimate Multisite {#installing-ultimate-multisite}

Pratite vodič [Instaliranje Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kako biste:

1. Upload-ovali i aktivirali plugin na nivou mreže
2. Pokrenuli [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Tijekom setup wizard-a, imajte na umu nišu FitSite:

- **Valuta**: Postavite valutu koju vaši klijenti fitness studija koriste
- **Naziv tvrtke**: "FitSite" (ili naziv brenda koji ste odabrali)
- **Logo tvrtke**: Upload-ujte logo vašeg brenda — ovo će se pojaviti na računima i e-mailovima

## Konfigurisanje za fitness nišu {#configuring-for-the-fitness-niche}

Nakon instalacije Ultimate Multisite, napravite ove specifične za nišu postavke:

### Opće postavke {#general-settings}

Idite na **Ultimate Multisite > Settings** i konfigurišite:

- **Naziv stranice**: FitSite
- **Podrazumevana uloga**: Administrator — vlasnici fitness studija trebaju punu kontrolu nad sadržajem svoje stranice
- **Registracija**: Omogućite registraciju korisnika kako bi vlasnici studija mogli sami prijaviti svoje

### Konfiguracija e-pošte {#email-configuration}

Vaši sistemski e-mailovi bi trebali govoriti jezik vaše niše. Idite na **Ultimate Multisite > Settings > Emails** i prilagodite:

- Zamijenite generički jezik "vaša nova stranica" porukama specifičnim za fitness
- Primjer teme dobrodošlice: "Vaša web stranica fitness studija je spremna"
- Primjer tijela dobrodošlice: Navedite njihov studij, časove i kako početi s njihovom fitness stranicom

Detaljnije ćemo ovo usavršiti u Lekciji 8 (Onboarding klijenta), ali postavljanje tona sada osigurava da čak i rani test sign-upi osjećaju da je sve specifično za nišu.

### Konfiguracija domena {#domain-configuration}

Ako koristite kompatibilnog pružatelja hostinga, konfigurišite mapiranje domena sada:

1. Idite na **Ultimate Multisite > Settings > Domain Mapping**
2. Pratite vodič za integraciju za vašeg specifičnog hosta
3. Testirajte da li nove podstranice automatski dobijaju SSL

Ovo osigurava da kada počnemo kreirati šablone i test stranice u sljedećoj lekciji, sve radi od kraja do kraja.

## FitSite mreža do sada {#the-fitsite-network-so-far}

Na kraju ove lekcije, ovo je ono što imate:

```
FitSite Mreža
├── WordPress Multisite (režim poddomena)
├── Ultimate Multisite (instaliran i konfigurisan)
├── Hosting sa wildcard SSL-om
├── Konfigurisano mapiranje domena
├── Nišni e-mail šabloni (početni)
└── Spreman za šablone stranica (sljedeća lekcija)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Funkcionalna WordPress Multisite** instalacija u režimu poddomena
- **Ultimate Multisite instaliran** i konfigurisan s brendingom FitSite
- **Hosting i SSL** postavljeni za rastuću mrežu
- **Mapiranje domena** konfigurisano za vašeg pružatelja hostinga
- **Nišni ton e-pošte** uspostavljen od prvog dana

---

**Sljedeće:** [Lekcija 4: Izgradnja nišnih šablona](lesson-4-templates) — kreiraćemo šablone stranica koje će vlasnici fitness studija zaista željeti koristiti.
