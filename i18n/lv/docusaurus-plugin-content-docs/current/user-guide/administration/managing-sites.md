---
title: Saites pārvaldīšana
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Vietušu vietnes pārvaldība

Vietnes (vai subvietnes) ir galvenais daļa no jūsu WaaS biznesa. Ultimate Multisite ir 3 veidiem vietņu:

- **Klienta īpašums** — Vietnes, kas pieder specifiskajiem klientiem
- **Vietņu šabloni** — Predefined vietnes, ko klienti var izvēlēties kā sākumu
- **Galvenā vietne** — Jūsu galvenā tīkla vietne

## Vietņu skatīšana

Navigējieties uz **Ultimate Multisite → Sites**, lai redzētu visus subvietnes jūsu tīklā. Katra vietne ir norādīta veidarbem un var filtrēt pēc Visām vietnēm, Klienta īpašums, Šablonu vai Pēdējais.

![Vietņu saraksta lapa](/img/admin/sites-list.png)

## Jaunās vietnes pievienošana

Noklikšķiniet uz pogas **Pievienot vietni**, lai izveidotu jaunu vietni. Jums būs jāsniedz:

- **Vietnes nosaukums** — Jaunas vietnes nosaukums
- **Vietnes adrese (URL)** — Domēns/ceļš vietnei
- **Vietnes veids** — Vai tas ir klienta vietne, šablonis vai parasti vietne

Opcionā **Kopēt vietni** ļauj izveidot jaunu vietni uz bazas eksistējošās vietnes šablona pamatu. Ja to iespējati, varat izvēlēties, kurš šablonu izmantot kā sākumu. Nodrošinieties, ka ir ieslēgta opcija **Kopēt mediju duplikojumā**, lai iestavinātu mediju failus.

## Eksistējo vietnes pārvaldība

Noklikšķiniet uz **Pārvaldīt** jebkurās vietnes atvērt vietni **Redi vietni**. Tur jūs varat atrast:

### Pamato interviiss

Vietnes nosaukumu, veidu, vietnes ID un aprakstu. Jūs redzēs arī mapeto domēnu, saistīto pievienošanos un klienta kontu, kas īpašniec vietni.

### Vietņu opcijas

Konfiguriet vietnes iespējas un ierobežojumus:

- **Apmeklējumu ierobežojumi** — Maksimuma apmeklējumu skaits vietnei
- **Kopas kontu ierobežojumi** — Ierobežojumi lietotāju rollām
- **Diska vieta** — Vietnes glabāšanas kvota
- **Pasaulīga domēns** — Iespējiet domēnu mapešanu šai vietnei
- **Pluginu un tēmas redzamība** — Kontrolēju, kuras pluginus un tēmas ir redzamas, slēptas vai iepriekš aktivizētas

Par default vietnes seko tie limitus, kas noteikti pie biedrības līmeņa. Ja jūs iestatīsiet limitus vietnes līmenī, tie pārvarēs biedrības iestatījumus.

### Piesaistes (Associations)

Apvietē vietnes opcijas jūs atrasties informāciju par:

- **Māpu domāniem** (Mapped domains), kas saistīti ar vietni
- **Biedrību**, kurā vietne ir
- **Klienta kontu**, kas saistīts ar vietni

### Lablīgo puslapas stūra (Right Sidebar)

Lablīgo puslapas stūrī jūs varat:

- **Iestatīt/izestāt vietni** ar atslēgšanas pogu
- **Izveidot vietnes tipu** vai pārskatīt īpašumu (reassign ownership)
- **Iestatīt vietnes attēlu/miniature** (kas redzams frontendā vietnes šabloniem)
- **Drošs izslēgt vietni** pastāvīgi

:::warning
Vietnes izslēgšana ir neizgaidama. Vietne un tās viss saturs tiks pastāvīgi noņemti.
:::
