---
title: Domino produktai ir kainos
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domenų produktai ir kaina

Domenų produktai yra tai, kaip jūs kontrolijuใจate kainą, TLD (Top-Level Domain), WHOIS privumą ir tiekėjo pasirinkimą. Kiekvienas domenų produktas yra standartinis Ultimate Multisite produktas su papildomu **Domain Settings** (Domenos nustatymai) pakuotė.

## Domeno produkto kūrimas {#creating-a-domain-product}

1. Eikite į **Network Admin › Ultimate Multisite › Products**.
2. Spauskite **Add New** (Pridėti naują).
3. Nustatykite produktų tipą į **Domain** (Domenas).
4. Konfigūruokite **Domain Settings** pakuotę (pamatykite to žemiau).
5. Išsaugokite.

Domenos produktai pasirodo su purva **Domain** (Domeno) žymėte sąraše ir gali būti filtruojami naudojant **Domain Products** (Domenų produktai) pakuotę.

## Domain settings pakuotė {#domain-settings-tab}

### Tiekėjas (Provider) {#provider}

Pasirinkite, kuris registratorius atsakingas už šio produkto registracijos procesą. Pagal baseiama globaliai nustatytam **Default provider** (Pagrindinis tiekėjas) Domain Seller nustatyjimu.

### Patikslinti TLDs (Supported TLDs) {#supported-tlds}

Palikykite laukelį tuščia, jei norite sukurti **catch-all product** (apimaicinį produktą), kuris tinka visoms TLDs, kurios nėra atitinkamos kitam produktui.

Įveskite raštyto sąrašą TLDs (pvz., `.com, .net, .org`), kad sukurotumėte **TLD-specific product** (specifikinį TLD produktą), kuris tinka tik tiems ilgaus pavadinimams.

**Kaip veikia produktų atitinkimas:** Kai klientas ieško domeno, papildomas pasirinkęs tinkamiausią atitinkamą produktą. Produktas su `.com` TLD sąrašu prioritetu yra didesnis nei apimaicinio produkto. Jei nėra nurodytų specifinio TLD produkto, naudojamas apimaicinysis. Jei nepasirinkta jokios produktų, domeno ieškojimas nebus rodomas.

### Markavimo tipas (Markup type) {#markup-type}

Tris režimai kontroliuoja, kaip jūsų pardavimų kaina skaičiuojama iš didelės tiekimo kainos:

| Režimas | Kaip veikia |
|---|---|
| **Percentage** (Procentas) | Prideda procentą prie didelės tiekimo kainos. 20% markavimo didelė į $10 didelio tiekimo kainos domeną bus $12. |
| **Fixed markup** (Kiekis markavimo) | Prideda fiksuotą doliojį sumą. $5 markavimo didelė į $10 domeną bus $15. |
| **Fixed price** (Fiksuota kaina) | Šaliai ignoruoja didelės tiekimo kainos. Tai visada skaičiuojama jūsų įvestas suma. |

### Įvadinio laisvoskaina (Introductory pricing) {#introductory-pricing}

Užvalykite pasiūlyti nuolaidytą pirmo meto kainą. Nustatykite atskirta **Pradžia kainą** (pirmo metų kainą) šalia įprastos **Atnaujinimo kainos** (2-metų ir daugiau) kainos. Klientas matys ambasame ambasdžyje, kad sukurta tikėtina ateityje atnaujinimas.

### WHOIS privumas {#whois-privacy}

Kontroliuja, ar siūlomas WHOIS privumo apsauga domenams, registruoti per šį produktą.

| Nustatymai | Elgesys |
|---|---|
| **Išjungtas** | WHOIS privumas niekada ne siūlomas ar neaktyvuojamas. |
| **Visada įtrauktas** | WHOIS privumas automatiškai įjungs registracijos metu be jokių mokėjimų. |
| **Klientas pasirinkimas** | Atnaujinimo metu pasirodys laukelis. Nustatykite **Privumumo kainą**, kuri tiks per metus, arba paimkite $0, kad siūlytumėte ją nemokamai. |

Namecheap naudoja WhoisGuard (visada nemokama) WHOIS privumui. OpenSRS naudoja OpenSRS privumų paslaugą (galima turėti kainą už dideliai).

---

## TLD importas ir sinigracija {#tld-import-and-sync}

Domeno produktai rodo realios dideliai kainas, kurias įsigijami su sujungtu tiekėju. Kad tai veiktų, reikia įvesti TLDs (Top-Level Domains).

- **Manulinis sinigracija:** Nustatymai › Domeno pardavėjas › Sinigruoti TLDs (per tiekėją)
- **Automatinis sinigracija:** Veikia kasdien via užplanuotu cron job across visus nustatytus tiekėjus.

Po sinigracijos, eikite į bet domenų produkto „Domain Settings“ puslapį ir naudokite TLD pasirinkimo mygtuką, kad pamatytumėte prieinamus TLDs su jų dabartiniais dideliais kainomis.

---

## Automatinis atnaujinimas {#auto-renewal}

Domeno atnaujinimai susiję su klientų narys statusu:

- Kai narys atnaujina ir domenui yra sujungtas, domenų atnaujinimas automatiškai įklystamas
- Atnaujinimo bandymai naudoja klientų aktyvų mokėjimo gatewayą
- Neprenkirti atnaujinimai bandomai atsiras automatiniu būdu su eksponenciniu atlaikymu (exponential backoff)
- El. laiškų pranešimai siunami sėkmingiems atnaujinimams, neprenkirimams ir nroeikiama laiku pasibaigimo

El. laiškų šablonų ID domenų saugumo įvykiams:

| Event | Template ID |
|---|---|
| Domenas registruotas | `domain_registered` |
| Domenas atnaujintas | `domain_renewed` |
| Atnaujinimas nesėkmingas | `domain_renewal_failed` |
| Domenas neturto | `domain_expiring_soon` |

---

## Administracija: Manuelis domeno registravimas {#admin-manual-domain-registration}

Jei norite registruoti domeną už klientą, nevedant jį per procesą atnaujinimo (checkout):

1. Eikite į **Network Admin › Ultimate Multisite › Register Domain**
2. Pasirinkite klientą ir įveskite domeno pavadinimą
3. Užpildykite registruotojo kontaktų duomenis (vardas, adresas, telefono numeris)
4. Spauskite mygtuką **Register**

Domenos įrašas bus sukurtas ir susijęs su klientų paskyra.
