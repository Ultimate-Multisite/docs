---
title: '8 pamoka: Klientų įvedimas'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# 8 pamoka: klientų supažindinimas

Priversti klientą užsiregistruoti yra tik pusė darbo. Jei jis prisijungia, pasijunta priblokštas ir niekada nebegrįžta, jūs jį praradote. Šioje pamokoje kuriama patirtis, kuri naują registraciją paverčia aktyviu, įsitraukusiu klientu.

## Kur sustojome {#where-we-left-off}

FitSite yra visiškai pritaikytas prekės ženklui ir turi veikiantį atsiskaitymo srautą. Dabar sutelkiame dėmesį į tai, kas vyksta po to, kai fitneso studijos savininkas užbaigia registraciją ir pirmą kartą patenka į savo naują svetainę.

## Kodėl supažindinimas svarbus {#why-onboarding-matters}

Pirmosios 30 minučių po registracijos lemia, ar klientas pasiliks, ar pasitrauks. Fitneso studijos savininkas, kuris:

- Prisijungia ir pamato svetainę, kuri jau atrodo kaip fitneso svetainė → pasilieka
- Tiksliai žino, ką daryti toliau → pasilieka
- Pasijunta pasimetęs bendrame WordPress Dashboard → išeina

Jūsų nišiniai šablonai (4 pamoka) išsprendžia pirmą punktą. Ši pamoka išsprendžia antrą.

## Pirmojo prisijungimo patirtis {#the-first-login-experience}

### Pasveikinimo Dashboard valdiklis {#welcome-dashboard-widget}

Sukurkite pasirinktinį Dashboard valdiklį, kuris pasveikina naujus klientus ir veda juos per konfigūravimą. Jis turėtų būti aiškiai matomas, kai jie pirmą kartą prisijungia.

**FitSite greita pradžia:**

1. **Pridėkite savo studijos pavadinimą ir logotipą** -- Nuoroda į tinkintuvą arba svetainės tapatybės nustatymus
2. **Atnaujinkite savo užsiėmimų tvarkaraštį** -- Tiesioginė nuoroda į užsiėmimų puslapio redaktorių
3. **Pridėkite savo trenerius** -- Nuoroda į trenerių puslapio redaktorių
4. **Nustatykite savo kontaktinius duomenis** -- Nuoroda į kontaktų puslapio redaktorių
5. **Peržiūrėkite savo svetainę** -- Nuoroda į išorinę svetainės dalį

Kiekvienas žingsnis veda tiesiai į atitinkamą puslapį arba nustatymą. Jokio klaidžiojimo po meniu.

### Supaprastinkite Dashboard {#simplify-the-dashboard}

Naujiems klientams nereikia matyti kiekvieno WordPress meniu elemento. Apsvarstykite:

- Paslėpti meniu elementus, kurie nėra aktualūs fitneso svetainės valdymui (pvz., komentarus, jei jie nenaudojami)
- Pertvarkyti meniu taip, kad dažniausiai naudojami elementai būtų pirmi
- Pridėti pasirinktines meniu etiketes, kurios turi prasmę nišai („Jūsų studija“ vietoj „Išvaizda“)

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) papildinys gali padėti kontroliuoti, ką klientai mato.

## Pasveikinimo el. laiškų seka {#welcome-email-sequence}

Vieno pasveikinimo el. laiško nepakanka. Sukurkite seką, kuri veda klientus per jų pirmąją savaitę:

### 1 el. laiškas: pasveikinimas (iškart po registracijos) {#email-1-welcome-immediately-after-signup}

- Tema: „Sveiki atvykę į FitSite -- jūsų studijos svetainė veikia“
- Turinys: prisijungimo nuoroda, greitos pradžios žingsniai, nuoroda į pagalbos išteklius
- Tonas: entuziastingas, padrąsinantis, pritaikytas fitnesui

### 2 el. laiškas: greiti laimėjimai (1 diena) {#email-2-quick-wins-day-1}

- Tema: „3 dalykai, kuriuos pirmiausia reikia padaryti savo FitSite“
- Turinys: pridėkite logotipą, atnaujinkite pagrindinio puslapio hero paveikslėlį, pridėkite užsiėmimų tvarkaraštį
- Įtraukite ekrano kopijas, tiksliai rodančias, kur spustelėti

### 3 el. laiškas: paverskite ją sava (3 diena) {#email-3-make-it-yours-day-3}

- Tema: „Išskirkite savo fitneso svetainę“
- Turinys: pritaikykite spalvas, pridėkite trenerių nuotraukas, parašykite savo studijos istoriją
- Nuoroda į puikių fitneso svetainių platformoje pavyzdžius

### 4 el. laiškas: paleiskite viešai (7 diena) {#email-4-go-live-day-7}

- Tema: „Pasiruošę pasidalyti savo FitSite su pasauliu?“
- Turinys: kontrolinis sąrašas, ką patikrinti prieš dalijantis, kaip prijungti pasirinktinį domeną (jei naudojamas Growth/Pro), dalijimosi socialiniuose tinkluose patarimai

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Pagalbos ištekliai {#help-resources}

Sukurkite nišai pritaikytą pagalbos turinį, kuris atsako į klausimus, kuriuos fitneso studijų savininkai iš tikrųjų užduoda:

### Žinių bazės straipsniai {#knowledge-base-articles}

- „Kaip atnaujinti užsiėmimų tvarkaraštį“
- „Trenerių profilių pridėjimas ir redagavimas“
- „Studijos logotipo ir spalvų keitimas“
- „Savo domeno vardo prijungimas“ (Growth/Pro klientams)
- „Užsakymo valdiklio pridėjimas prie jūsų svetainės“

Rašykite juos ne techniniams naudotojams. Naudokite ekrano kopijas. Venkite WordPress žargono.

### Vaizdo apžvalgos {#video-walkthroughs}

Trumpos (2–3 minučių) ekrano įrašų apžvalgos, rodančios:

- Pirmą prisijungimą ir orientaciją
- Pagrindinio puslapio redagavimą
- Užsiėmimų tvarkaraščio atnaujinimą
- Naujo trenerio pridėjimą

Tai neturi būti nugludinti kūriniai. Svarbiausia, kad būtų aišku, naudinga ir pritaikyta nišai.

## Account puslapis {#the-account-page}

Ultimate Multisite apima klientams skirtą [Account puslapį](/user-guide/client-management/account-page), kuriame klientai valdo savo prenumeratą. Pritaikykite jį taip, kad:

- Rodytų jų dabartinį FitSite planą
- Rodytų atnaujinimo parinktis su fitnesui pritaikytais privalumais
- Pateiktų atsiskaitymų istoriją ir sąskaitų atsisiuntimus
- Pateiktų nuorodas į pagalbos išteklius

## Supažindinimo sėkmės matavimas {#measuring-onboarding-success}

Stebėkite šiuos rodiklius, kad žinotumėte, ar jūsų supažindinimas veikia:

- **Aktyvinimo rodiklis**: kokia registracijų dalis iš tikrųjų pritaiko savo svetainę per pirmąją savaitę?
- **Pirmos savaitės prisijungimai**: kiek kartų naujas klientas prisijungia per pirmąją savaitę?
- **Naujų klientų pagalbos užklausos**: didelis kiekis reiškia, kad jūsų supažindinime yra spragų
- **Bandomosios versijos konversija į mokamą**: jei siūlote bandomuosius laikotarpius, kokia dalis pereina į mokamą planą?

## FitSite tinklas iki šiol {#the-fitsite-network-so-far}

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

## Ką sukūrėme šioje pamokoje {#what-we-built-this-lesson}

- **Vedamą pirmojo prisijungimo patirtį** su greitos pradžios valdikliu
- **Supaprastintą Dashboard**, orientuotą į fitneso svetainės valdymo užduotis
- **Pasveikinimo el. laiškų seką**, kuri veda klientus per jų pirmąją savaitę
- **Nišai pritaikytus pagalbos išteklius**, parašytus ne techniniams fitneso studijų savininkams
- **Supažindinimo metrikas**, skirtas stebėti ir gerinti patirtį

---

**Toliau:** [9 pamoka: Kainodara pelnui](lesson-9-pricing) -- patobulinsime kainodaros strategiją, kad maksimaliai padidintume pajamas ir sumažintume klientų praradimą.
