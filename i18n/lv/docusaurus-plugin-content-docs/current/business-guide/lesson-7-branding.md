---
title: '7. nodarbība: Padariet to par savu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# 7. nodarbība: Padariet to par savu {#lesson-7-making-it-yours}

Jūsu klientiem nekad nevajadzētu justies tā, it kā viņi izmantotu "kādu WordPress plugin". Viņiem vajadzētu justies tā, it kā viņi izmantotu FitSite -- platformu, kas izveidota viņu nozarei. Šajā nodarbībā apskatīta zīmola veidošana, white-labeling un tas, kā panākt, lai platforma šķistu kā produkts.

## Kur mēs apstājāmies {#where-we-left-off}

FitSite ir strādājoša checkout plūsma, kas fitnesa studiju īpašniekus aizved no plāna izvēles līdz aktīvai vietnei. Tagad mēs panāksim, lai visa pieredze šķistu vienota, ar zīmolu saistīta produkta pieredze.

## Jūsu platformas domēns {#your-platform-domain}

Jūsu zīmola pamats ir jūsu domēns. FitSite gadījumā:

- **Galvenais domēns**: `fitsite.com` (jūsu mārketinga vietne un tīkla sakne)
- **Klientu vietnes**: `studioname.fitsite.com` (apakšdomēni)
- **Pielāgoti domēni**: klienti Growth un Pro plānos var piesaistīt savu domēnu

### Domēna iestatīšana {#setting-up-your-domain}

1. Reģistrējiet savas platformas domēnu
2. Norādiet to uz savu mitināšanas pakalpojumu sniedzēju
3. Konfigurējiet wildcard DNS (`*.fitsite.com`) klientu apakšdomēniem
4. Pārliecinieties, ka wildcard SSL ir aktīvs

Detalizētas instrukcijas skatiet sadaļā [Kā konfigurēt domēnu kartēšanu](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## Admin pieredzes white-labeling {#white-labeling-the-admin-experience}

Kad fitnesa studijas īpašnieks piesakās savas vietnes dashboard, viņam vajadzētu redzēt jūsu zīmolu, nevis WordPress vai Ultimate Multisite zīmolu.

### Pielāgota pieteikšanās lapa {#custom-login-page}

Pielāgojiet WordPress pieteikšanās lapu, lai tajā būtu redzams:

- Jūsu FitSite logotips
- Fitnesam piemēroti fona attēli
- Jūsu zīmola krāsas

### Dashboard zīmološana {#dashboard-branding}

Izmantojiet [Admin Page Creator](/addons/admin-page-creator) addon vai pielāgotu CSS, lai:

- Aizstātu WordPress logotipu ar jūsu FitSite logotipu
- Pielāgotu admin krāsu shēmu atbilstoši jūsu zīmolam
- Pievienotu pielāgotu dashboard logrīku ar fitnesam specifiskām ātrajām saitēm un palīdzības resursiem

### Pielāgotas admin lapas {#custom-admin-pages}

Apsveriet iespēju izveidot pielāgotas admin lapas, kas izceļ fitnesa studiju īpašniekiem visatbilstošākās darbības:

- "Rediģēt savu nodarbību grafiku"
- "Atjaunināt treneru profilus"
- "Skatīt savu vietni"

Tas samazina apgūšanas grūtības, priekšplānā izceļot nišai atbilstošas darbības, nevis paslēpjot tās standarta WordPress izvēlnē.

## Jūsu saziņas zīmološana {#branding-your-communications}

Katram e-pastam, rēķinam un paziņojumam vajadzētu stiprināt jūsu zīmolu.

### Sistēmas e-pasti {#system-emails}

Dodieties uz **Ultimate Multisite > Settings > Emails** un pielāgojiet visus sistēmas e-pastus:

- **Sūtītāja vārds**: FitSite
- **Sūtītāja e-pasts**: hello@fitsite.com
- **E-pastu veidnes**: izmantojiet sava zīmola krāsas un logotipu
- **Valoda**: viscaur fitnesam specifiska

Galvenie e-pasti, ko pielāgot:

| E-pasts | Vispārīgā versija | FitSite versija |
|-------|----------------|-----------------|
| Sveiciens | "Jūsu jaunā vietne ir gatava" | "Jūsu fitnesa studijas tīmekļa vietne ir aktīva" |
| Maksājuma kvīts | "Maksājums saņemts" | "FitSite abonementa maksājums apstiprināts" |
| Izmēģinājuma perioda beigas | "Jūsu izmēģinājuma periods drīz beigsies" | "Jūsu FitSite izmēģinājuma periods beidzas pēc 3 dienām -- saglabājiet savas studijas tīmekļa vietni aktīvu" |

### Rēķini {#invoices}

Pielāgojiet rēķinu veidnes ar:

- Jūsu FitSite logotipu un zīmola krāsām
- Jūsu uzņēmuma informāciju
- Fitnesam specifiskiem produktu nosaukumiem (nevis vispārīgiem plānu ID)

## Klientiem redzamā vietne {#the-customer-facing-site}

Jūsu galvenajam domēnam (`fitsite.com`) nepieciešama mārketinga vietne, kas pārdod platformu. Tā ir atsevišķa no Ultimate Multisite tīkla admin -- tā ir jūsu uzņēmuma publiskā seja.

Galvenās lapas:

- **Sākumlapa**: skaidrs vērtības piedāvājums fitnesa uzņēmumiem
- **Funkcijas**: ko FitSite dara, fitnesa terminoloģijā
- **Cenas**: jūsu trīs plāni ar nišai specifisku funkciju salīdzinājumiem
- **Piemēri**: demonstrējiet vietnes, kas izveidotas uz platformas
- **Reģistrēties**: saites uz jūsu checkout formu

:::tip Jūsu mārketinga vietne var būt tīkla vietne
Izveidojiet savu mārketinga vietni kā vietni savā tīklā. Tas ļauj to pārvaldīt no tā paša dashboard un demonstrē jūsu pašu platformas iespējas.
:::

## Pielāgots domēns klientiem {#custom-domain-for-customers}

Klientiem plānos, kas ietver pielāgotus domēnus, skaidri dokumentējiet procesu:

1. Klients reģistrē vai pārceļ savu domēnu pie reģistratora
2. Klients atjaunina DNS, lai tas norādītu uz jūsu platformu (sniedziet precīzus ierakstus)
3. Ultimate Multisite apstrādā domēna kartēšanu un SSL

Izveidojiet palīdzības rakstu vai zināšanu bāzes ierakstu tieši šim procesam, rakstītu netehniskiem fitnesa studiju īpašniekiem.

## FitSite tīkls līdz šim {#the-fitsite-network-so-far}

```
FitSite tīkls
├── WordPress Multisite (apakšdomēna režīms)
├── Ultimate Multisite (konfigurēts + zīmolots)
├── Platformas domēns (fitsite.com + wildcard SSL)
├── Vietņu veidnes (Studio Essential, Gym Pro, Fitness Chain)
├── Produkti (Starter, Growth, Pro + pasūtījuma papildpiedāvājumi)
├── Checkout plūsma (nišai specifiska, pārbaudīta)
├── Zīmološana
│   ├── Pielāgota pieteikšanās lapa
│   ├── Zīmolots admin dashboard
│   ├── Nišai specifiski sistēmas e-pasti
│   ├── Zīmoloti rēķini
│   └── Mārketinga vietne vietnē fitsite.com
└── Gatavs onboarding plūsmai (nākamā nodarbība)
```

## Ko mēs izveidojām šajā nodarbībā {#what-we-built-this-lesson}

- **Platformas domēns un DNS**, konfigurēti zīmolotai pieredzei
- **White-labeled admin** ar FitSite zīmolu viscaur
- **Pielāgota saziņa** -- e-pasti, rēķini un paziņojumi, viss atbilstoši zīmolam
- **Mārketinga vietne**, kas pārdod FitSite fitnesa studiju īpašniekiem
- **Pielāgota domēna dokumentācija** klientiem, kuri vēlas savu domēnu

---

**Nākamais:** [8. nodarbība: Klientu onboarding](lesson-8-onboarding) -- mēs izstrādājam pieredzi, kas jaunu reģistrāciju pārvērš aktīvā, apmierinātā klientā.
