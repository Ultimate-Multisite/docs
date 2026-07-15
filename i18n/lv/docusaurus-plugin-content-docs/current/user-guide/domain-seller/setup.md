---
title: Iestatījumi un sniedzēja konfigurācija
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domen pārdevējs: Iestatījumi un sniedzēja konfigurēšana

Domen pārdevējs addon ietveru ar gida iestatījumus, kas palīdz jums veikt katru nepieciešamā soļu. Šajā lapā aprakstīts iestatījumu plāna plūsma un to, kā konfigurēt vai atkonfigurēt sniedzējus pēc tam.

## Prasības {#requirements}

- **Multisite Ultimate** v2.4.12 vai augstāka versija, ar tīkla aktivizēšanu
- **PHP** 7.4+
- API autentikācijas dati vismaz vienam atbalstītam reģistrājam

## Pirmais izvēles plāna iestatījums (First-run setup wizard) {#first-run-setup-wizard}

Iestatījumu plāns automātiski starts, kad pirms aktivizējat plugin tīklā. Tas ir pieejams arī jebkurā laikā no **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### 1. Solis — Izvēli sniedzēja {#step-1--choose-a-provider}

Izvēlieties reģistrāju, ar kuru vēlaties savienojties. Atbalstītie variantu:

| Sniedzējs | DNS pārvaldība | WHOIS privātība |
|---|---|---|
| OpenSRS | Jā | Jā |
| Namecheap | Nē | Jā (WhoisGuard, bezmaksas) |
| HostAfrica | Jā | Jā (ID aizsardzība) |
| Openprovider | Jā | Jā |
| Hostinger | Via galvenās Hostinger domēnu maptīkšanu hostētiem domeniem | Jā |
| GoDaddy | Nē | Nē |
| ResellerClub | Jā | Nē |
| NameSilo | Nē | Nē |
| Enom | Jā | Nē |

### 2. Solis — Ievadi autentikācijas datus (Enter credentials) {#step-2--enter-credentials}

Katram sniedzējam ir atšķirīgi iestatījumus:

**OpenSRS** — Lietotājvārds un privāta kluāvs (no OpenSRS Reseller Control Panel).

**Namecheap** — Lietotājvārds un API kluāvs (no Account › Tools › API Access).

**HostAfrica** — Domen reselera API punkts un autentikācijas dati no HostAfrica reselera moduļa. Šeit pašlaik nav dokumentēta atsevišķa sandbox API punkta; mēģini ar drošām lasīgo tikai pārbaudes operācijām pirms lietojamiem reģistrācijām.

**Openprovider** — Lietotājvārds un parols, kur ir aktivizēts API piekļuve. Optiālā sandbox režīma izmanto Openprovider sandbox API, un optiāli default klienta identifikators var atkal izmantot reģistrācijās.

**Hostinger** — Dalī Hostinger dalī hPanel API token no galven Hostinger integrācijas. Tas pats token spēj veikt galvenās domānu mapiģēšanu un Domānu Pārditāja reģistrācijas operācijas.

**GoDaddy** — API kluāvs un tajns (no developer.godaddy.com)

**ResellerClub** — Reseller ID un API kluāvs (no ResellerClub kontrolpanelas)

**NameSilo** — API kluāvs (no namesilo.com › Account › API Manager)

**Enom** — Konta ID un API token

Pārbaudiet **Sandbox režīmu**, ja tas ir pieejams, lai pārtests pret sniedzēja testsveidroju vidi pirms lansēšanas.

### 3. So mainiet savienojumu {#step-3--test-the-connection}

Noklikšķiniet uz **Testēt savienojumu**. Wizard nosūtīs mazliet svarīgu API zvanu, lai apstiprinātu krediti un sazinātību. Nolaiciet jebkādas kredīti problēmas pirms turpināt.

### 4. Importēt TLDs {#step-4--import-tlds}

Noklikšķiniet uz **Importēt TLDs**, lai ieņemtu visus pieejamos TLDs un tūkstogus cenās no savienojamā sniedzēja. Tas aizpilda TLD sarakstu, kas tiek izmantots domānu produktos. Importēšana var aizņemt 30–60 sekundes, ja sniedzēji ir ar lielu TLD katalogu.

TLDs automātiski atjaunojas arī reiz dienā caur grafiku (cron job).

### 5. Izveidot domānu produktu {#step-5--create-a-domain-product}

Wizard izveido defaultu catch-all domānu produktu ar 10% margīnu. Jūs varat rediģēt šo produktu neatkarīgi vai pārsniegt un izveidot produktus manuāli zem **Ultimate Multisite › Products**.

Redari [Domain Products and Pricing](./domain-products) vispārīgās produktu konfigurācijas ceļvedēj par domānu produktiem un cenām.

---

## Sniedzēja konfigūracija atjaunošana {#reconfiguring-a-provider}

Dodieties uz **Network Admin › Ultimate Multisite › Settings › Domain Seller** (vai noklikšķiniet uz **Settings** pluginu sarakstā).

Konfiguracijas lapā ir:

- **Iespēju domānu pārdošanu** — ieslēgt/izslēgt visu funkciju
- **Definīvais sniedzējs** — sniedzējs, ko izmanto domānu meklēšanai un jauniem produktiem
- **Maksimālā TLDs meklējumam** — cik daudz TLDs pārbaudīt, kad kliente meklē; augstākas vērtības parāda vairāk iespējas, bet ir lētai laika
- **Pieejamības kešēšanas laiks** — cik ilgi kešot pieejamības un cenām rezultātus; mazākas vērtības ir precīzākas, bet palielina API sūtījumus
- **Izvēlē domānu produktus** — ātrs saite uz Produktu sarakstu
- **Konfiguruēt sniedzējus** — atver integrācijas mācību (Integration Wizard) veikalu sniedzēju pievienošanai vai konfigūras

### Jaunā sniedzēja pievienošana {#adding-a-second-provider}

Noklikšķiniet uz **Konfiguruēt sniedzējus** un atkārtoti veiciet mācību jaunu reģistrājam. Jūs varat turēt konfiguriēts vairākus sniedzējus vienlaikus. Pielietojiet katru domānu produktu specifiskam sniedzējam vai atstājiet to uz defraulais.

### TLDs manāšana manuāli {#syncing-tlds-manually}

Iestatījumu lapā noklikšķiniet uz **Sinkrotēt TLDs** (Sync TLDs) blakus jebkuram konfiguriētam sniedzējam, lai saņemtu jaunāko cenām. Tas ir noderīgs pēc tam, kad sniedzējs atjauninā wholesale cenās vai pievieno jaunas TLDs.

---

## Logi {#logs}

Katrs sniedzējs raksta savam loga kanālam. Logus var skatīt **Network Admin › Ultimate Multisite › Logs**:

| Log kanāls | Saturs |
|---|---|
| `domain-seller-registration` | Visas reģistrācijas mēģinājumi (veidrojumi un neveidrojumi) |
| `domain-seller-renewal` | Atjauninājuma darba rezultāti |
| `domain-seller-opensrs` | Raw OpenSRS API aktivitāte |
| `domain-seller-namecheap` | Raw Namecheap API aktivitāte |
| `domain-seller-hostafrica` | Raw HostAfrica API aktivitāte |
| `domain-seller-openprovider` | Raw Openprovider API aktivitāte |
| `domain-seller-hostinger` | Raw Hostinger API aktivitāte |
| `domain-seller-godaddy` | Raw GoDaddy API aktivitāte |
| `domain-seller-resellerclub` | Raw ResellerClub API aktivitāte |
| `domain-seller-namesilo` | Raw NameSilo API aktivitāte |
| `domain-seller-enom` | Raw Enom API aktivitāte |

---

## Piegāvojumu iespējas atzīmes (Provider capability notes) {#provider-capability-notes}

Nevis visi registratoru API atklāj vienundas operācijas. Addon parādās neatbalstītas operācijas ar skaidri admina lietotāja kļūdas, vietā to, ka tās slēpjas un neveidrojams.

- **HostAfrica** atbalsta plašāko dzīvnieku reselera veicamo darba plāna, kur ietver meklēšanu, TLD/cienu sinkronizāciju, reģistrāciju, atjauninājumu, pārvietošanu, nameserveru atjauninājumus, DNS ierakstus, EPP kodu, registratora aizvairīšanu un ID aizsardzību.
- **Openprovider** atbalsta reselera cenās TLD sinkronizāciju, reģistrāciju, atjauninājumu, pārvietošanos, nameserveru atjauninājumus, DNS zonām, EPP kodiem, registratora aizvairīšanu un WHOIS privātību. Tas autentikējas ar īslaicīgi aktīvu bearer tokenu, ko addon automātiski atjaunina.
- **Hostinger** atbalsta pieejamības meklēšanu, reģistrāciju, portfela meklēšanu, nameserveru atjauninājumus, registratora aizvairīšanu un WHOIS privātību ar dalīto hPanel API tokenu. Hostinger public Domains API neietver reselera/wholesale cenām, iekļaujamās pārvietošanas, eksplisit atjauninājumu vai EPP kodu saņemšanu; atjauninājumi ir tikai automāti atjaunojami.
