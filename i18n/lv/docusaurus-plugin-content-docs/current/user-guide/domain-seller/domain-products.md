---
title: Domēna produkti un cenas
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domeni produkti un cenām {#domain-products-and-pricing}

Domeni produkti ir to, kā jūs kontrolējat cenu, TLD (Top-Level Domain), WHOIS privātumu un pakalpojuma izvēli. Katrs domēns produkts ir standarta Multisite Ultimate produkts ar papildu **Domain Settings** (Domānu iestatījumi) tabu.

## Domena produkta izveide {#creating-a-domain-product}

1. Navigējiet uz **Network Admin › Ultimate Multisite › Products**.
2. Nospressiet **Add New** (Pievienot jaunu).
3. Iestatiet produktu veidu par **Domain**.
4. Konfiguriet **Domain Settings** tabu (skatīt lai).
5. Saglabājiet.

Domeni produkti parādās ar purpu **Domain** (Domāns) zīmiju sarakstā un var filtrēti izmantojot **Domain Products** (Domānu produkti) tabu.

## Domain settings tab {#domain-settings-tab}

### Piegavinātājs (Provider) {#provider}

Izvēlieties, kurš registrujums pārvaldīs šo produktu reģistrāciju. Default ir globālais **Default provider** (Default piegavinātājs), kas iestatīts Domain Seller (Domānu pārdevēja) iestatījumos.

### Atbalstītie TLD (Supported TLDs) {#supported-tlds}

Ļaujiet palikt tukšs, lai izveidotu **catch-all product** (vispārējo produktu), kas piemērots visiem TLD, kas nav atbilstoši citam produktam.

Iestatīt comma aršķirtie sarakstus TLD (piemēram: `.com, .net, .org`), lai izveidotu **TLD-specific product** (TLD-specifisku produktu), kas piemērots tikai šiem uzlaides.

**Kā darbojas produktu atbilstošums:** Kad kliente meklē domēnu, addon izvēlas visspēcīgāk atbilstošo produktu. Produktam ar `.com` TLD sarakstā ir priekšrocība pret catch-all produktu. Ja nepiemērojas nekāds TLD-specifisks produkts, tiek izmantots catch-all. Ja nav produktus, domānu meklēšana neparādās.

### Apjaunojuma veids (Markup type) {#markup-type}

Trīs režīmi kontrolē, kā jūsu veikalāc cena tiek aprēķināta no tūlītējā（wholesale）kostas:

| Režīms | Kā darbojas |
|---|---|
| **Percentage** (Procentu) | Pievieka procentus uz tūlītējās（wholesale）kostas. 20% apjaunojums par $10 tūlītējo domānu dārgu ir $12. |
| **Fixed markup** (Konkrēts apjaunojums) | Pievieka konkrētu valūtu summu. $5 apjaunojums par $10 domānu dārgu ir $15. |
| **Fixed price** (Konkreta cena) | Pilnībā ignorē tūlītās（wholesale）kostas. Vienmēr maksāta tas, ko jūs ievadāt. |

### Ievades cenas (Introductory pricing) {#introductory-pricing}

Iespējiet piedāvāt atlaidīto pirmais gadu cenu. Iestatīt atsevišķu **Ievades cenu** (pirmais gada cena) līdzsvarā ar regulāro **Atjaunojuma cenu** (2. un turpmākajos gadu). Klientam vismaz divas cenas redz, kad veic pirkumu, lai viņš zinātu, ko varētu gaistīt atjaunojumā.

### WHOIS privātums {#whois-privacy}

Kontrolē, vai domāni, kas reģistrēti ar šo produktiem, piedāvā WHOIS privātuma aizsardzību.

| Iestatījums | Uzvedība |
|---|---|
| **Izvēlēts** | WHOIS privātums nepieciešams vai neactivēts. |
| **Visdaļē ietverts** | WHOIS privātums automātiski activējas reģistrācijas laikā bez maksājumu. |
| **Klienta izvēle** | Pirkuma laikā parādās atsevišķa laika robeža. Iestatīt **Privātuma cenu**, lai maksātu pēc gada, vai atstāt $0, lai piedāvātu to bez maksājumu. |

Namecheap lieto WhoisGuard (visdaļē bez maksājuma) WHOIS privātumam. OpenSRS izmanto OpenSRS privātuma pakalpojumu (var būt maksa wholesale līmenī).

---

## TLD ievades un sinhronizācija {#tld-import-and-sync}

Domānu produkti parāda reālowholesale cenu, kas tiek saņemta no savienotās sniedzēja. Lai tas strādā, TLDs jāimēģina (importēt).

- **Manuāla sinhronizācija:** Iestatījumi › Domānu pārdevējs › Sinhronizēt TLDs (par sniedzēju)
- **Automātiska sinhronizācija:** Veicasis katru dienu ar grafiku, lai visos konfiguriētām sniedzējiem.

Pēc sinhronizācijas dodieties uz jebkuru domānu produktu "Domain Settings" (Domānas iestatījumi) tabuli un izmantojiet TLD izvēlni, lai redzētu pieejamus TLDs ar viņu pašreizējām wholesale cenām.

---

## Automātiska atjaunojums {#auto-renewal}

Domānu atjaunojumi ir saistīti ar klienta iemēgšanas statusu:

- Kad iemēga un domāns tiek savienots, domānas atjaunojums automātiski ieplānojas.
- Atjaunojuma mēģinājumi izmanto klienta aktīvo maksājumu portalu.
- Nespējusi atjaunoties mēģinājumi tiek atkārtoti automātiski ar eksponenciālu atgriešanos (exponential backoff).
- E-pasta paziņojumi tiek nosūtīti par veiksmīgas atjaunojumus, neuzvedumus un nākamās izpētes laikas.

E-pasta šablona ID domānas dzīves cikla notikumiem:

| Pasākums | Template ID |
|---|---|
| Domēna reģistrēta | `domain_registered` |
| Domēnas atjaunināts | `domain_renewed` |
| Atjauninājums neizveidots | `domain_renewal_failed` |
| Domēna nestāvīgi kļūst ilgstoši | `domain_expiring_soon` |

---

## Administrācija: Manāla domēnas reģistrācija {#admin-manual-domain-registration}

Lai reģistrētu domēnu uz klienta, neietveroties caur kasas (checkout):

1. Navigojiet uz **Network Admin › Ultimate Multisite › Register Domain**
2. Izvēlieties klientu un ievadiet domānu nosaukumu
3. Ievadiet reģistrētāja kontaktinformāciju (vārds, adrese, telefons)
4. Nospressiet **Register**

Domānas ieraksts tiek izveidots un saistīts ar klienta kontu.
