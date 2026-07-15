---
title: Produkte dhe Çmimet e Domenit
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produkte dhe Çmimet e Domenave

Produktivitetet e domenit janë mënyra se si kontrolloni çmimet, TLD-të (Top-Level Domains), privatësinë WHOIS dhe zgjedhjen e ofrues. Çdo produkt i domeneve është një produkt standard Ultimate Multisite me një tab shtesë **Domain Settings** (Cilësimet e Domenit).

## Krijimi i një produkti domen {#creating-a-domain-product}

1. Shko te **Network Admin › Ultimate Multisite › Products**
2. Kliko **Add New** (Shto të ri)
3. Vendos tipin e produktit në **Domain** (Domen).
4. Konfiguro tabin **Domain Settings** (Cilësimet e Domenit) (shiko më poshtë).
5. Ruaj

Produkte të Domenit shfaqen me një etiketë e purpël **Domain** në listën e produkteve dhe mund të filistrohen duke përdorur tabin **Domain Products**.

## Tab-i Caktimi i Domenit (Domain settings tab) {#domain-settings-tab}

### Përcjellësi (Provider) {#provider}

Zgjidhni cilin registrator do të menaxhojë regjistrimin për këtë produkt. Veprimi varet nga **Default provider** (Përshërbuesi i paracaktuar) i vendosur në cilësimet e Domain Seller.

### TLD-të e mbështetura {#supported-tlds}

Lëreni të zbrazët për të krijuar një produkt **catch-all** që vlen për të gjitha TLD-të që nuk përmbajnë produktin tjetër.

Vendosni një listë të ndarë me koma të TLD-ve (p.sh., `.com, .net, .org`) për të krijuar një produkt **specifik TLD** që vlen vetëm për ato ekstensionet.

**Si funksionon përshtatja e produktit:** Kur një klient kërkon një domen, addon-i zgjedh produktin më specifik që i përshtatet. Një produkt me `.com` në listën e TLD (Top-Level Domain) të tij ka prioritet mbi një produkt "catch-all" (përfshirës). Nëse nuk gjendet asnjë produkt specifik për një TLD, përdoret ai i përgjithshëm. Nëse nuk ekzistojnë asnjë produkt, kërkimi i domenit nuk shfaqet.

### Lloji i markimit (Markup type) {#markup-type}

Tre mënyra kontrollojnë si llogaritet çmimin tuaj retail nga kosta me produkteve (wholesale cost):

| Rregullim | Si funksionon |
|---|---|
| **Procent** | Shton një përqindje mbi koston më të madhe (wholesale cost). Një rritje 20% mbi një domen me kostë wholesale prej 10$ do të japë 12$. |
| **Rritje fikse** | Shton një shumë të caktuar në parë. Një rritje prej 5$ mbi një domen prej 10$ do të japë 15$.

| **Çmimi i fiksuar** | Ignoron plotësisht koston me llogari (wholesale). Gjithmonë e bën atë shumë që vendosni. |

### Çmimet fillestare {#introductory-pricing}

Le të lejoni t'i ofroni një çmim më të ulët për vitin e parë. Vendosni një **Çmim i hyrjes** (çmimi për vitin 1) paralel me **Çmimin e rinovimit** (çmimi për vitin 2+) standard. Klienti do të shohë të dy çmimet gjatë procesit të pagesës, kështu që di se çfarë t'i duhet të presë kur vjen kohës së rinovimit.

### Privatësia WHOIS {#whois-privacy}

Kontrollon nëse ofrohet mbrojtja e privatësisë WHOIS për domenët të regjistruar përmes këtij produkti.

| Caktimi | Sjellja |
|---|---|
| **Ihuruar (Disabled)** | Privatësia WHOIS nuk ofrohet asnjëherë ose nuk aktivizohet. |
| **Gjithmonë i përfshirë (Always Included)** | Privatësia WHOIS aktivizohet automatikisht në regjistrim pa asnjë kostim. |

| **Zgjidhja e Klientit** | Një kuti i shkurtres (checkbox) shfaqet gjatë procesit të pagesës (checkout). Vendosni **Çmimin Privat** (Privacy price) të bëhet për vit, ose lëreni në $0 për ta ofruar falas. |

Për Namecheap, privatësia WHOIS përdoret me WhoisGuard (gjithmonë falas). Për OpenSRS, përdoret shërbimi i privatësisë OpenSRS (mund të ketë një kosto në llogarinë wholesale).

---

## Import dhe sinkronizim TLD-ve {#tld-import-and-sync}

Produkte të domeneve shfaqin çmimin me llojë wholesale (me produkte më të ulë) në kohë reale nga providuesi i lidhur. Për që kjo të funksionojë, duhet të importohen TLD-të (Top-Level Domains).

- **Sink manual:** Settings › Domain Seller › Sync TLDs (për ofrues)
- **Sink automatik:** Ekzekutohet çdo ditë përmes një taski të orari (cron job) në të gjithë ofrues që keni konfiguruar

Pasi të bëni një sinkronizim, shijoni në çdo produkt domaini (domain product) tabin e Caktimit të Domenit (Domain Settings) dhe përdorni seçuesin e TLD-ve (TLD picker) për të parë TLD-të e disponueshme me çmimet e tyre aktualë të produndur (wholesale prices).

---

## Rritja automatike (Auto-renewal) {#auto-renewal}

Rritjet e domenit janë të lidhura me statusin e anëtarisë së klientit:

Kur një anëtarja rinovon dhe domeni lidhet, rinovimi i domenit vendoset automatikisht në radhë.
Provimet e rinovimit përdorin portalin aktiv të pagesave të klientit.
Rinovimet që dështojnë provohen automatikisht me një ritëm rritje exponencial (exponential backoff).

Njoftimet me email parahen për rinovime të suksesshme, dështime dhe datat e zgjidhjes së periudhës.

ID-të e shablonit (template) të email-eve për ngjarjet e ciklit të domenit:

| Eventi | ID i Template-s |
|---|---|
| Domeni është regjistruar | `domain_registered` |
| Domeni është rinovuar | `domain_renewed` |
| Rritja e rinovimit dështoi | `domain_renewal_failed` |
| Domeni po skadon shpejt | `domain_expiring_soon` |

## Admin: Regjistrimi manual i domenit {#admin-manual-domain-registration}

Për të regjistruar një domen për një klient pa kaluar përmes procesit të pagesës (checkout):

1. Shko te **Network Admin › Ultimate Multisite › Register Domain**
2. Zgjidh klientin dhe vendos emrin e domeneve
3. Plotëso detajet e kontaktit të regjistrantit (emri, adresa, telefoni)
4. Kliko **Register**

Recordi i domenit krijohet dhe lidhet me konton e klientit.
