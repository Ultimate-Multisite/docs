---
title: 'Õppetund 8: Kliendi sisseelamine'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Õppetund 8: Klientide sisseelamine {#lesson-8-customer-onboarding}

Kliendi registreeruma saamine on vaid pool tööst. Kui ta logib sisse, tunneb end ülekoormatuna ega tule kunagi tagasi, oled ta kaotanud. See õppetund kavandab kogemuse, mis muudab uue registreeruja aktiivseks ja kaasatud kliendiks.

## Kuhu me pooleli jäime {#where-we-left-off}

FitSite on täielikult bränditud ja töötava checkout-vooga. Nüüd keskendume sellele, mis juhtub pärast seda, kui fitness-stuudio omanik lõpetab registreerumise ja jõuab esimest korda oma uuele saidile.

## Miks sisseelamine on oluline {#why-onboarding-matters}

Esimesed 30 minutit pärast registreerumist määravad, kas klient jääb või lahkub. Fitness-stuudio omanik, kes:

- Logib sisse ja näeb saiti, mis näeb juba välja nagu fitness-veebisait → jääb
- Teab täpselt, mida järgmiseks teha → jääb
- Tunneb end üldises WordPress Dashboardis eksinuna → lahkub

Sinu nišimallid (õppetund 4) katavad esimese punkti. See õppetund katab teise.

## Esimese sisselogimise kogemus {#the-first-login-experience}

### Tervitusvidin Dashboardis {#welcome-dashboard-widget}

Loo kohandatud Dashboardi vidin, mis tervitab uusi kliente ja juhendab neid seadistamisel. See peaks olema selgelt nähtav, kui nad esimest korda sisse logivad.

**FitSite’i kiirstart:**

1. **Lisa oma stuudio nimi ja logo** -- Link Customizerisse või saidi identiteedi seadetesse
2. **Uuenda oma tundide ajakava** -- Link otse tundide lehe redaktorisse
3. **Lisa oma treenerid** -- Link treenerite lehe redaktorisse
4. **Määra oma kontaktandmed** -- Link kontaktilehe redaktorisse
5. **Vaata oma saiti eelvaates** -- Link avalehele

Iga samm viib otse asjakohase lehe või seade juurde. Menüüst otsimist pole vaja.

### Lihtsusta Dashboardi {#simplify-the-dashboard}

Uued kliendid ei pea nägema iga WordPressi menüüelementi. Kaalu järgmist:

- Peida menüüelemendid, mis ei ole fitness-saidi haldamise jaoks asjakohased (nt kommentaarid, kui neid ei kasutata)
- Järjesta menüü ümber, et enim kasutatavad elemendid oleksid eespool
- Lisa kohandatud menüüsildid, mis on niši jaoks arusaadavad ("Sinu stuudio" mitte "Välimus")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon aitab kontrollida, mida kliendid näevad.

## Tervituskirjade jada {#welcome-email-sequence}

Ühest tervituskirjast ei piisa. Seadista jada, mis juhendab kliente nende esimesel nädalal:

### E-kiri 1: Tere tulemast (kohe pärast registreerumist) {#email-1-welcome-immediately-after-signup}

- Teema: "Tere tulemast FitSite’i -- sinu stuudio veebisait on live"
- Sisu: sisselogimislink, kiirstardi sammud, link abimaterjalidele
- Toon: entusiastlik, julgustav, fitnessi-spetsiifiline

### E-kiri 2: Kiired võidud (1. päev) {#email-2-quick-wins-day-1}

- Teema: "3 asja, mida oma FitSite’is esimesena teha"
- Sisu: lisa oma logo, uuenda avalehe hero-pilti, lisa oma tundide ajakava
- Lisa ekraanipildid, mis näitavad täpselt, kuhu klõpsata

### E-kiri 3: Tee see enda omaks (3. päev) {#email-3-make-it-yours-day-3}

- Teema: "Pane oma fitness-sait silma paistma"
- Sisu: kohanda värve, lisa treenerite fotod, kirjuta oma stuudio lugu
- Link platvormil olevate suurepäraste fitness-saitide näidetele

### E-kiri 4: Mine live’i (7. päev) {#email-4-go-live-day-7}

- Teema: "Kas oled valmis oma FitSite’i maailmaga jagama?"
- Sisu: kontrollnimekiri asjadest, mida enne jagamist üle vaadata; kuidas ühendada kohandatud domeen (kui oled Growth/Pro paketis); sotsiaalmeedias jagamise nõuanded

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Abimaterjalid {#help-resources}

Loo nišipõhine abisisu, mis vastab küsimustele, mida fitness-stuudio omanikud tegelikult küsivad:

### Teadmistebaasi artiklid {#knowledge-base-articles}

- "Kuidas uuendada oma tundide ajakava"
- "Treenerite profiilide lisamine ja muutmine"
- "Stuudio logo ja värvide muutmine"
- "Oma domeeninime ühendamine" (Growth/Pro klientidele)
- "Broneerimisvidina lisamine oma saidile"

Kirjuta need mittetehnilistele kasutajatele. Kasuta ekraanipilte. Väldi WordPressi žargooni.

### Videojuhendid {#video-walkthroughs}

Lühikesed (2–3-minutilised) ekraanisalvestused, mis näitavad:

- Esimest sisselogimist ja orienteerumist
- Avalehe muutmist
- Tundide ajakava uuendamist
- Uue treeneri lisamist

Need ei pea olema lihvitud produktsioonid. Oluline on, et need oleksid selged, abistavad ja nišipõhised.

## Accounti leht {#the-account-page}

Ultimate Multisite sisaldab kliendile suunatud [Accounti lehte](/user-guide/client-management/account-page), kus kliendid haldavad oma tellimust. Kohanda seda nii, et see:

- Näitaks nende praegust FitSite’i paketti
- Kuvaks uuendusvõimalused koos fitnessi-spetsiifiliste eelistega
- Pakuks arvelduse ajalugu ja arvete allalaadimist
- Lingiks abimaterjalidele

## Sisseelamise edukuse mõõtmine {#measuring-onboarding-success}

Jälgi neid näitajaid, et teada saada, kas sinu sisseelamine töötab:

- **Aktiveerimismäär**: kui suur protsent registreerunutest kohandab oma saiti esimese nädala jooksul?
- **Esimese nädala sisselogimised**: mitu korda logib uus klient oma esimese nädala jooksul sisse?
- **Uute klientide tugipiletid**: suur maht tähendab, et sinu sisseelamises on lünki
- **Prooviversioonist tasuliseks muutumine**: kui pakud prooviversioone, siis kui suur protsent muutub tasuliseks?

## FitSite’i võrgustik seni {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Mida me selles õppetunnis ehitasime {#what-we-built-this-lesson}

- **Juhendatud esimese sisselogimise kogemuse** koos kiirstardi vidinaga
- **Lihtsustatud Dashboardi**, mis keskendub fitness-saidi haldamise ülesannetele
- **Tervituskirjade jada**, mis juhendab kliente nende esimesel nädalal
- **Nišipõhised abimaterjalid**, mis on kirjutatud mittetehnilistele fitness-stuudio omanikele
- **Sisseelamise mõõdikud**, et kogemust jälgida ja parandada

---

**Järgmine:** [9. õppetund: Kasumlik hinnastamine](lesson-9-pricing) -- täiustame hinnastrateegiat, et maksimeerida tulu ja minimeerida klientide lahkumist.
