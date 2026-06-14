---
title: Konfigurimi dhe Konfigurimi i Proveuesit
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Vërtetues i Domenit: Konfigurimi dhe Providuesi

Addon-i "Domain Seller" vjen me një mburesh manual (wizard) që ju udhëheq në çdo hap të nevojshëm. Kjo faqe mbulon rrjedhën e këtij wizard dhe mënyrën se si ta konfigurosh ose rikonfigurosh providuesit pas kësaj.

## Kërkesat

- **Multisite Ultimate** v2.4.12 ose më i ri, aktivizuar në rrjet
- **PHP** 7.4+
- Kredencat API për të paktën një regjistrues mbështetëse

Wizardi i konfigurimit hapet automatikisht herën e parë që aktivizoni pluginin në rrjet. Gjithashtu, është i disponueshëm çdo kohë nga **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Hapi 1 — Zgjidhni një ofrues

Zgjidhni registrin që dëshironi të lidhni. Opsionet e mbështetura janë:

| Përfshëndetja | Menaxhimi i DNS-it | Privatësia WHOIS |
|---|---|---|
| OpenSRS | Po | Po |
| Namecheap | Jo | Po (WhoisGuard, falas) |
| HostAfrica | Po | Po (mbrojtje ID) |
| Openprovider | Po | Po |

| Hostinger | Mapimi i domenit bazë për domenet e hostuara nga Hostinger | Po |
| GoDaddy | Jo | Jo |
| ResellerClub | Po | Jo |
| NameSilo | Jo | Jo |
| Enom | Po | Jo |

### Hapi 2 — Vendos kredencialet

Secili ofrues ka fusha të ndryshme për kredenciale:

**OpenSRS** — Emri i përdoruesit dhe çelësi privat (nga Paneli i Kontrollit të Reseller-it të OpenSRS)

**Namecheap** — Emri i përdoruesit dhe kyçja API (nga Llogaria › Mjetet › Qedrimi i API-së)

**HostAfrica** — Pikat e API dhe kredencialet nga moduli i reselerit HostAfrica. Aktuell nuk është dokumentuar ndonjë endpoint sandbox; provoni me kontrollime të sigurta vetëm lexues (read-only) para se të keni regjistrime live.

**Openprovider** — Emërtimi dhe fjalja e fshehtë me akses API i aktivizuar. Modi i opsional i sandbox përdor API-n e sandbox të Openprovider, dhe një emërtim fillestar i opsional për klientin mund të përdoret edhe për regjistrime.

**Hostinger** — Tokeni i hPanel-it të ndarshuar nga Hostinger për integrimin bazë. Aty po përdoret edhe për mapiet e domenit bazë dhe operacionet e regjistrimit të shitësve të domenit.

**GoDaddy** — API key dhe secret (nga developer.godaddy.com)

**ResellerClub** — ID i ResellerClub dhe API key (nga paneli i kontrollit ResellerClub)

**NameSilo** — API key (nga namesilo.com › Account › API Manager)

**Enom** — ID i llogarisë dhe tokeni API

Kontrolloni **mode Sandbox**, nëse është i disponueshëm, për të testuar ndaj mjedisit të provimit të ofrues para se të shkoni në prodhim.

### Hapi 3 — Testoni lidhjen

Klikoni **Test Connection**. Wizard-i dërgon një thirrje të lehtë API për të verifikuar kredencialet dhe lidhjen. Rregulloni çdo problem me kredencialet para se të vazhdoni.

### Hapi 4 — Import TLD-ve

Klikoni në **Import TLDs** për të tërhequr të gjitha TLD-të (Top-Level Domains) dhe çmimet me llogari nga providuesi i lidhur. Kjo mbipopullon listën e TLD-ve që përdoret nga produktet e domenit. Importi mund të zgjasë 30–60 sekonda për providuesit me kataloge të mëdha TLD-sh.

TLD-të gjithashtu ri-sinkohen automatikisht një herë në ditë përmes një taski të orari (cron job).

### Hapi 5 — Krijoni produktin e domeneve (domain product)

Wizard-i krijon një produkt me domenin fillestar të përgjithshëm (catch-all) me një marzhgjim prej 10%. Mund ta modifikoni këtë produkt menjëherë ose mund ta kaloni dhe të krijoni produkte manualisht në **Ultimate Multisite › Products**.

Shikoni [Produkte dhe Çmimet e Domenit](domain-products) për udhëzimin e plotë të konfigurimit të produktit.

---

## Rikonfigurimi i një ofrues (provider)

Shkoni te **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ose klikoni në **Settings** në listën e pluginëve).

Faqja e cilësimeve përmban:

- **Aktivizimi i shitjes së domenit (Enable domain selling)** — ndryshoni këtë opsion për të aktivizuar ose deaktivizuar gjithë funksionalitetin.
- **Përfituesi i paracaktuar (Default provider)** — është prapërfituesi që përdoret për kërkimat e domenit dhe produktet e reja.

* **Maksimum TLD-t për kërkim** — sa TLD (Top-Level Domain) duhet të kontrolloni kur një klient kërkon diçka; vlerat më të larta tregojnë më shumë opsione por janë më ngadaltë.

* **Durata e cache të disponueshmësisë (Availability cache duration)** — sa kohë do të ruhet i cache i rezultateve të disponueshmësisë dhe çmimeve; vlerat më të ulëta janë më të sakta, por rritin numrin e thirrjeve API.
* **Menaxho produktet e domenit (Manage domain products)** — një link i shpejtë drejt listës së Produkteve.

- **Konfiguroni providerët** — hapet Wizard i Integrime për të shtuar ose rikonfiguruar providerë.

### Shtimi i një provideri të dytë

Klikoni në **Configure providers** dhe ekzekutoni përsëri wizardin për regjistrin e ri. Mund të keni disa provider konfiguruar njëkohësisht. Vendosni çdo produkt domen te një provider specifik, ose lëreni në default.

### Sinkronizimi manual i TLD-ve

Në faqen e cilësimeve, klikoni në **Sync TLDs** (Sinkronizoni TLD-t) pranë çdo ofrues të konfiguruar për të të tërhequr çmimet më të fundit. Kjo është e dobishme pasi një ofrues përditësoj çmimet wholesale ose shton TLD-ve të rinj.

---

## Logs

Çdo ofrues shkruan në kanalin e tyre të logut. Logjet janë të shqyera te **Network Admin › Ultimate Multisite › Logs**:

| Kanal Logimi | Përmbajtja |
|---|---|
| `domain-seller-registration` | Të gjitha përpjekjet e regjistrimit (sukces dhe dështim) |
| `domain-seller-renewal` | Rezultatet e punës së rinovimit |
| `domain-seller-opensrs` | Aktivitet i thjeshtë të API-së OpenSRS |

| `domain-seller-namecheap` | Aktivitet i API-s Raw Namecheap |
| `domain-seller-hostafrica` | Aktivitet i API-s Raw HostAfrica |
| `domain-seller-openprovider` | Aktivitet i API-s Raw Openprovider |
| `domain-seller-hostinger` | Aktivitet i API-s Raw Hostinger |

| `domain-seller-godaddy` | Aktivitet i thjeshtë nga API-ja e GoDaddy |
| `domain-seller-resellerclub` | Aktivitet i thjeshtë nga API-ja e ResellerClub |
| `domain-seller-namesilo` | Aktivitet i thjeshtë nga API-ja e NameSilo |
| `domain-seller-enom` | Aktivitet i thjeshtë nga API-ja e Enom |

## Shënim për aftësitë e ofrues

Nuk gjithçka nga API i një registri ekspozon të njëjtat operacione. Addon (përdoruesi shtesë) shfaq operacionet që nuk mbështeten me gabime të qarta për administratorin, në vend që të dështojë pa u njoftuar.

**HostAfrica** mbështet procesin më të gjerë për revenderizimin live, duke përfshirë kërkim (lookup), sinkronizim TLD/çmime, regjistrim, rinovim, transferim, përditësime të nameserver-eve, regjistrat DNS, kodet EPP, pengesat e regjistrit dhe mbrojtjen e ID-së.

**Openprovider** mbështet sinkronizimin e TLD me çmimet e reseller, regjistrimin, rinovimin, transferimeve, përditësimet e nameserverëve, zonave DNS, kodet EPP, pengesën e registrit dhe privatësinë WHOIS. Ai autentikohet me një token bearer të shkurtër që shtesat (addon) i refreshojnë automatikisht.

**Hostinger** mbështet kërkim disponueshmërie (availability search), regjistrim, kërkim i portofolios (portfolio lookup), përditësimet e nameserver-eve, pengesat e registrit (registrar lock) dhe privatësinë WHOIS përmes tokenit API të hPanel-it të ndarshuar. API publik i Hostinger për Domenet nuk shfaq çmimet e revenderuesve/wholesale, transferin hyrës (inbound transfer), rinovimin eksplorues (explicit renewal) ose marrjen e kodit EPP; rinovimet janë vetëm automatike.
