---
title: 'Lekcija 7: Kako ga učiniti svojim'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lekcija 7: Kako ga učiniti svojim

Vaši klijenti nikada ne bi smjeli osjećati da koriste "neki WordPress plugin." Trebali bi osjećati da koriste FitSite — platformu napravljenu za njihovu industriju. Ova lekcija pokriva brendiranje, white-labeling i to kako platformu učiniti da izgleda kao stvarni proizvod.

## Gdje smo stali {#where-we-left-off}

FitSite ima funkcionalan proces naplate koji vlasnike fitness studija vodi od odabira paketa do aktivnog sajta. Sada ćemo učiniti da cijelo iskustvo izgleda kao koherentan, brendirani proizvod.

## Domen vaše platforme {#your-platform-domain}

Temelj vašeg brenda je vaš domen. Za FitSite:

- **Glavni domen**: `fitsite.com` (vaš marketinški sajt i korijen mreže)
- **Sajtovi klijenta**: `studioname.fitsite.com` (subdomeni)
- **Custom domeni**: Klijenti na Growth i Pro planovima mogu mapirati svoj vlastiti domen

### Postavljanje domena {#setting-up-your-domain}

1. Registrirajte domen vaše platforme
2. Ukažite ga na vašog hosting provajdera
3. Konfigurišite wildcard DNS (`*.fitsite.com`) za subdomene klijenta
4. Osigurajte da je wildcard SSL aktivan

Detaljne uputstva pogledajte na [Kako konfigurisati mapiranje domena](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-labeling administracije {#white-labeling-the-admin-experience}

Kada vlasnik fitness studija prijavi svoj sajt na dashboard, trebao bi vidjeti vaš brend, a ne brending WordPressa ili Ultimate Multisitea.

### Prilagođena stranica za prijavu {#custom-login-page}

Prilagodite WordPress stranicu za prijavu da prikazuje:

- Vaš FitSite logo
- Pozadinske slike koje odgovaraju fitness industriji
- Boje vašeg brenda

### Brendiranje dashboarda {#dashboard-branding}

Koristite addon [Admin Page Creator](/addons/admin-page-creator) ili custom CSS da:

- Zamijenite WordPress logo sa vašim FitSite logom
- Prilagodite boju administracije da odgovara vašem brendu
- Dodate custom widget na dashboard sa brzim linkovima i resursima za pomoć specifičnim za fitness

### Custom admin stranice {#custom-admin-pages}

Razmislite o kreiranju custom admin stranica koje prikazuju najrelevantnije akcije za vlasnike fitness studija:

- "Uredi raspored časova"
- "Ažuriraj profile trenera"
- "Pogledaj svoj sajt"

Ovo smanjuje krivulju učenja jer stavlja akcije relevantne za nišu na prvo mjesto, umjesto da ih zakopa u standardno WordPress menije.

## Brendiranje komunikacija {#branding-your-communications}

Svaki e-mail, faktura i obavijest treba da pojačavaju vaš brend.

### Sistemski e-mailovi {#system-emails}

Idite na **Ultimate Multisite > Settings > Emails** i prilagodite sve sistemske e-mailove:

- **Ime pošiljatelja**: FitSite
- **E-mail pošiljatelja**: hello@fitsite.com
- **E-mail šabloni**: Koristite boje i logo vašeg brenda
- **Jezik**: Fitness-specifično kroz cijeli tekst

Ključni e-mailovi za prilagođavanje:

| E-mail | Opšta verzija | FitSite verzija |
|-------|----------------|-----------------|
| Dobrodošlica | "Vaš novi sajt je spreman" | "Vaš sajt fitness studija je aktivan" |
| Potvrda plaćanja | "Plaćanje primljeno" | "Potvrđeno plaćanje pretplate FitSite" |
| Kraj probnog roka | "Vaš probni rok uskoro teče" | "Vaš FitSite probni rok teče za 3 dana — održite sajt vašeg studija aktivan" |

### Fakture {#invoices}

Prilagodite šablone faktura sa:

- Vaš FitSite logo i boje brenda
- Vaši poslovni podaci
- Nazivi proizvoda specifični za fitness (ne generički ID paketa)

## Sajt za klijente {#the-customer-facing-site}

Vaš glavni domen (`fitsite.com`) treba imati marketinški sajt koji prodaje platformu. Ovo je odvojeno od Ultimate Multisite network administracije — to je javno lice vašeg poslovanja.

Ključne stranice:

- **Početna stranica**: Jasna vrijednost koju nudite za fitness biznisi
- **Funkcionalnosti**: Što FitSite radi, terminima fitnessa
- **Cjenik**: Vaši tri paketa sa usporedbom funkcionalnosti specifičnih za nišu
- **Primjeri**: Prikaz sajtova napravljenih na platformi
- **Registracija**: Linkovi do vašeg formulara za naplatu

:::tip Vaš marketinški sajt može biti sajt u mreži
Napravite svoj marketinški sajt kao sajt unutar vaše vlastite mreže. To vam omogućava da ga upravljate sa istog dashboarda i pokazuje sposobnosti vaše vlastite platforme.
:::

## Custom domen za klijente {#custom-domain-for-customers}

Za klijente na planovima koji uključuju custom domene, jasno dokumentujte proces:

1. Klijent registruje ili prenosi svoj domen kod registra
2. Klijent ažurira DNS da ukaže na vašu platformu (dostavite tačne zapise)
3. Ultimate Multisite obrađuje mapiranje domena i SSL

Napravite članak pomoći ili unos u bazu znanja specifično za ovaj proces, napisan za vlasnike fitness studija koji nisu tehnički stručnjaci.

## FitSite Mreža do sada {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Što smo napravili u ovoj lekciji {#what-we-built-this-lesson}

- **Platform domen i DNS** konfigurisani za brendirano iskustvo
- **White-label administracija** sa FitSite brendingom kroz cijeli sistem
- **Prilagođene komunikacije** — e-mailovi, fakture i obavijesti sve brendirane
- **Marketinški sajt** koji prodaje FitSite vlasnicima fitness studija
- **Dokumentacija za custom domene** za klijente koji žele svoj domen

---

**Sljedeće:** [Lekcija 8: Onboarding klijenta](lesson-8-onboarding) — dizajniraćemo iskustvo koje pretvara novu prijavu u aktivnog, sretnog klijenta.
