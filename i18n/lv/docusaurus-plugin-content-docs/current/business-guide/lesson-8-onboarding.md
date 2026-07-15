---
title: 'Nodarbība 8: Klientu ievadapmācība'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# 8. nodarbība: Klientu ievadapmācība

Panākt, lai klients reģistrējas, ir tikai puse darba. Ja viņš piesakās, jūtas apjucis un nekad neatgriežas, jūs viņu esat zaudējuši. Šajā nodarbībā tiek veidota pieredze, kas jaunu reģistrāciju pārvērš aktīvā, iesaistītā klientā.

## Kur mēs palikām {#where-we-left-off}

FitSite ir pilnībā zīmolots, ar strādājošu checkout plūsmu. Tagad pievērsīsimies tam, kas notiek pēc tam, kad fitnesa studijas īpašnieks pabeidz reģistrāciju un pirmo reizi nonāk savā jaunajā vietnē.

## Kāpēc ievadapmācība ir svarīga {#why-onboarding-matters}

Pirmās 30 minūtes pēc reģistrācijas nosaka, vai klients paliks vai aizies. Fitnesa studijas īpašnieks, kurš:

- Piesakās un redz vietni, kas jau izskatās kā fitnesa tīmekļa vietne → paliek
- Precīzi zina, ko darīt tālāk → paliek
- Jūtas apmaldījies vispārīgā WordPress Dashboard → aiziet

Jūsu nišas veidnes (4. nodarbība) atrisina pirmo punktu. Šī nodarbība risina otro.

## Pirmās pieteikšanās pieredze {#the-first-login-experience}

### Sveiciena Dashboard logrīks {#welcome-dashboard-widget}

Izveidojiet pielāgotu Dashboard logrīku, kas sveicina jaunos klientus un vada viņus cauri iestatīšanai. Tam vajadzētu būt labi pamanāmam, kad viņi pirmo reizi piesakās.

**FitSite ātrais starts:**

1. **Pievienojiet savas studijas nosaukumu un logotipu** -- Saite uz Customizer vai Site Identity iestatījumiem
2. **Atjauniniet savu nodarbību grafiku** -- Saite tieši uz Classes lapas redaktoru
3. **Pievienojiet savus trenerus** -- Saite uz Trainers lapas redaktoru
4. **Iestatiet savu kontaktinformāciju** -- Saite uz Contact lapas redaktoru
5. **Priekšskatiet savu vietni** -- Saite uz priekšpusi

Katrs solis ved tieši uz attiecīgo lapu vai iestatījumu. Nekādas meklēšanas pa izvēlnēm.

### Vienkāršojiet Dashboard {#simplify-the-dashboard}

Jaunajiem klientiem nav jāredz katrs WordPress izvēlnes vienums. Apsveriet:

- Paslēpt izvēlnes vienumus, kas nav saistīti ar fitnesa vietnes pārvaldību (piem., Comments, ja netiek izmantoti)
- Pārkārtot izvēlni, lai visbiežāk izmantotie vienumi būtu pirmie
- Pievienot pielāgotas izvēlnes etiķetes, kas ir saprotamas nišai ("Jūsu studija", nevis "Appearance")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) papildinājums var palīdzēt kontrolēt, ko klienti redz.

## Sveiciena e-pastu secība {#welcome-email-sequence}

Ar vienu sveiciena e-pastu nepietiek. Iestatiet secību, kas vada klientus viņu pirmajā nedēļā:

### 1. e-pasts: Sveiciens (uzreiz pēc reģistrācijas) {#email-1-welcome-immediately-after-signup}

- Tēma: "Laipni lūdzam FitSite -- jūsu studijas tīmekļa vietne ir aktīva"
- Saturs: Pieteikšanās saite, ātrā starta soļi, saite uz palīdzības resursiem
- Tonis: Aizrautīgs, iedrošinošs, fitnesam specifisks

### 2. e-pasts: Ātrie ieguvumi (1. diena) {#email-2-quick-wins-day-1}

- Tēma: "3 lietas, ko vispirms izdarīt savā FitSite"
- Saturs: Pievienojiet savu logotipu, atjauniniet sākumlapas hero attēlu, pievienojiet savu nodarbību grafiku
- Iekļaujiet ekrānuzņēmumus, kas precīzi parāda, kur klikšķināt

### 3. e-pasts: Padariet to par savu (3. diena) {#email-3-make-it-yours-day-3}

- Tēma: "Izceliet savu fitnesa vietni"
- Saturs: Pielāgojiet krāsas, pievienojiet treneru fotoattēlus, uzrakstiet savas studijas stāstu
- Saite uz lielisku fitnesa vietņu piemēriem platformā

### 4. e-pasts: Publicējiet (7. diena) {#email-4-go-live-day-7}

- Tēma: "Vai esat gatavs kopīgot savu FitSite ar pasauli?"
- Saturs: Kontrolsaraksts par to, kas jāpārbauda pirms kopīgošanas, kā pieslēgt pielāgotu domēnu (ja izmanto Growth/Pro), padomi kopīgošanai sociālajos tīklos

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Palīdzības resursi {#help-resources}

Izveidojiet nišai specifisku palīdzības saturu, kas atbild uz jautājumiem, kurus fitnesa studiju īpašnieki patiešām uzdod:

### Zināšanu bāzes raksti {#knowledge-base-articles}

- "Kā atjaunināt nodarbību grafiku"
- "Treneru profilu pievienošana un rediģēšana"
- "Studijas logotipa un krāsu maiņa"
- "Sava domēna vārda pieslēgšana" (Growth/Pro klientiem)
- "Rezervēšanas logrīka pievienošana savai vietnei"

Rakstiet tos netehniskiem lietotājiem. Izmantojiet ekrānuzņēmumus. Izvairieties no WordPress žargona.

### Video pamācības {#video-walkthroughs}

Īsi (2–3 minūšu) ekrāna ieraksti, kas parāda:

- Pirmo pieteikšanos un orientēšanos
- Sākumlapas rediģēšanu
- Nodarbību grafika atjaunināšanu
- Jauna trenera pievienošanu

Tām nav jābūt noslīpētām produkcijām. Svarīgi ir, lai tās būtu skaidras, noderīgas un nišai specifiskas.

## Account lapa {#the-account-page}

Ultimate Multisite ietver klientiem paredzētu [Account lapu](/user-guide/client-management/account-page), kur klienti pārvalda savu abonementu. Pielāgojiet to, lai:

- Parādītu viņu pašreizējo FitSite plānu
- Rādītu jaunināšanas iespējas ar fitnesam specifiskiem ieguvumiem
- Nodrošinātu norēķinu vēsturi un rēķinu lejupielādes
- Sasaistītu ar palīdzības resursiem

## Ievadapmācības panākumu mērīšana {#measuring-onboarding-success}

Sekojiet šiem rādītājiem, lai saprastu, vai jūsu ievadapmācība darbojas:

- **Aktivizācijas līmenis**: Kāds procents reģistrāciju faktiski pielāgo savu vietni pirmajā nedēļā?
- **Pirmās nedēļas pieteikšanās**: Cik reižu jaunais klients piesakās savā pirmajā nedēļā?
- **Atbalsta pieprasījumi no jauniem klientiem**: Liels apjoms nozīmē, ka jūsu ievadapmācībā ir trūkumi
- **Pāreja no izmēģinājuma uz maksas versiju**: Ja piedāvājat izmēģinājumus, kāds procents pāriet uz maksas versiju?

## FitSite tīkls līdz šim {#the-fitsite-network-so-far}

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

## Ko mēs izveidojām šajā nodarbībā {#what-we-built-this-lesson}

- **Vadītu pirmās pieteikšanās pieredzi** ar Quick Start logrīku
- **Vienkāršotu Dashboard**, kas koncentrējas uz fitnesa vietnes pārvaldības uzdevumiem
- **Sveiciena e-pastu secību**, kas vada klientus viņu pirmajā nedēļā
- **Nišai specifiskus palīdzības resursus**, kas rakstīti netehniskiem fitnesa studiju īpašniekiem
- **Ievadapmācības metriku**, lai sekotu pieredzei un to uzlabotu

---

**Tālāk:** [9. nodarbība: Cenu noteikšana peļņai](lesson-9-pricing) -- mēs pilnveidojam cenu noteikšanas stratēģiju, lai maksimāli palielinātu ieņēmumus un mazinātu klientu aiziešanu.
