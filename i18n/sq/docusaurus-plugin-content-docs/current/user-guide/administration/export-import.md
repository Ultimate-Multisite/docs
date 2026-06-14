---
title: Eksport dhe Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksportimi dhe Importi

Ultimate Multisite 2.9.0 shtoi një mjet të vetëm për **Export & Import** (Eksport dhe Import) në menynë **Tools > Export & Import**. Përdorni këtë kur keni nevojë ta paketoni një site WordPress si një file ZIP, ta rikuarkoni atë ZIP ose ta transferoni një site midis instalimeve të pajtueshme Ultimate Multisite dhe single-site WordPress.

## Lejeimet e nevojshme

Duhet të të hysh me llogarinë e administratorit që ka akses në menynë **Tools** (Mbrojtja/Marrëdhënie) të WordPress-it në faqen që po ekzheruar ose importuar. Në një rrjet multisite, përdor një llogari administratorje rrjeti kur ekzheron ose importon subsite nga mjetet e Ultimate Multisite me nivel rrjeti.

Shkarkimet në ZIP shërpen përmes një pikat (endpoint) të autentikuar për shkarkim, kështu që ruani sesionin e adminit aktiv derisa shkarkimi të përfundojë dhe mos ndaqeni URL-t e gjeneruar të shkarkimit publik.

## Eksportimi i një saiti në ZIP

1. Në adminin e WordPress për faqen që dëshironi të kopjoni, shkoni te **Tools > Export & Import** (Mbrojtja > Eksportimi dhe Importi).
2. Hapni zonën e eksportimit dhe zgjidhni faqen që dëshironi të paketoni.

3. Përzgjedhni përmbajtjen opsionale që dëshironi të përfshini, si ngarkimet (uploads), pluginet dhe temat, kur ato janë të disponueshme.
4. Filloni ekzoin e presëni që procesi të mbarojë. Sitet më të madh mund të duhen të mbarojnë në sfond para se ZIP-i të jetë gati.

5. Shkarkoni ZIP-in e përfunduar nga lista e ekzherimeve (exports).

Ruani ZIP-in në një vend të sigurt. Ai mund të përmbajë përmbajtjen e faqes, cilësimet, skedarët multimedia dhe asetet e kodit të zgjedhur.

## Çfarë përfshin ekzheri

Një ZIP i ekzherimit mund të përfshijë:

* Përmbajtja dhe konfigurimi i bazës së të vendosurit e zgjedhur.*
* Fichat multimediale të ngarkuara kur përfshijnë ngarkime.*
* Pluginet dhe temat kur janë të zgjedhur këto opsione.

Importoni metadatan e përdorur nga mjeti i Export & Import për të rikuperuar faqen në instalimin target.

Madhësia e saktë e ZIP-it varet nga sasia e medieve, pluginet dhe temat e zgjedhura, si dhe madhësia e tabelave të bazës së të dhënave të faqes.

## Importimi i një faqeje nga një ZIP

Ky udhëzues ju ndihmon të keni informacion se si ta importoni një faqe (site) në WordPress duke përdorur një arkiv ZIP. Kjo është mënyra më e shpejtë për të transferuar faqen tuaj.

### Përgatitja
Para se të filloni, sigurohuni që:
1.  Keni një kopje të plotë të faqeve të vendosura në ZIP (për shembull `site-backup.zip`).
2.  Keni akses në panelin e kontrollit të WordPress dhe bazën e të dhënave MySQL.

### Procesi i Importimit

1.  **Shkarkoni arkivin:** Shkarkoni skurtin ZIP që përmban faqeve tuaja.
2.  **Ndaloni WordPress (Opsionale, por rekomandohet):** Për një import të lehtë dhe të sigurt, është mirë të ndaloni temporarisht proceset e shkrimit në bazën e të dhënave MySQL gjatë importit.

3.  **Importimi përmes Dashboard-it:**
    *   Shkoni te **Settings (Konfigurimi)** > **Permalinks (Linket e qëndrueshme)**.
    *   Në seksionin "Restore" (Rikthimi), zgjidhni arkivin ZIP tuaj dhe klikoni në "Import".

4.  **Përdorimi i Plugin-ut:** Nëse keni nevojë për më shumë kontroll ose po përdorni një plugin si **All-in-One WP Migration**, mund të jetë më e lehtë:
    *   Instaloni dhe aktivizoni plugin-in që ju pëlqen.
    *   Në menynë e plugin-ut, zgjidhni opsionin "Import" ose "Restore".
    *   Zgjidhni arkivin ZIP tuaj dhe lëreni plugin-i të bëjë pjesën e punës.

### Çfarë ndodh pas importit?
Nëse gjithçka shkon siç duhet, WordPress do të provojë të transferojë të gjitha faqeve, postimet dhe cilat edhe media (imazhe) nga ZIP-i në bazën tuaj.

**Shënim i rëndësishëm:**
*   Nëse keni probleme me importin, shpesh është arsyeja se serveri ka kufizime për madhësinë e të dhënave ose ndonjë konflikt me versionet e plugin-eve.
*   Në rast se dëshironi një metodë më profesionale dhe ju keni nevojë për mbështetje, kontaktoni mbështetjen teknike.

1. Shko te **Tools > Export & Import** në faqen WordPress që do të marrë informacionin.
2. Hap hapësirën për import dhe ngarko ZIP-in që keni krijuar me mjetin Export & Import.
3. Vendos një URL zëvendësues (replacement URL) nëse faqja duhet të përdorë një adresë të re, ose lëri fushën të zbehtë për të ruajtur URL-n original.

4. Vendosni nëse dëshironi të fshini ZIP-in e ngarkuar pas përfundimit të importit.
5. Klikoni **Begin Import**.
6. Monitoroni importin që është në pritje derisa të përfundojë. Përdorni **Cancel Import** vetëm nëse keni nevojë ta ndaloni procesin para se të mbarojë.

7. Kontrolloni faqen e importuar para se të lejoni trafikun normal ose aksesin e klientëve.

Në një instalim të vetëm WordPress, importimi i një ZIP-i zëvendëson faqen aktuale me faqen e importuar. Krijoni një kopje të plotë (backup) të faqes që dëshironi para se të filloni, dhe mos nisni më shumë nga importime për të njëjtin site në të njëjtën kohë.

## Kufizimet dhe shënimet për pajtueshmërinë

Drejtoritë e shumë të mëdha të ngarkimeve ose bibliotekat e medieve mund të prodhojnë skedarë ZIP të madh. Sigurohuni që kufizimet e ngarkimit të PHP, kufizimet e ekzekutimit, hapësira disk, memorie dhe cilësimet e kohës së serverit të jenë në rregull para se të eksportoni ose importoni faqe me shumë përmbajtje.

Biblioteka shumë e madhe të medive mund të duhet të lëvizet gjatë një periudhë mbajtjeje me trafik të ulët.
Instancat që synojnë WordPress duhet të ekrollojnë versione të pajtueshme të WordPress, PHP, Ultimate Multisite, plugin dhe teme.

Importimi i një faqeje të vetme zëvendëson faqen që po përdoret. Nuk është mjet për bashkim (merge).

Lëvizjet nga multisite në një site të vetëm dhe nga një site i vetëm në multisite mbështeten vetëm kur mjedisi i qëllimit mund të ekzekutojë pluginet, temat, URL-t dhe komponentët e nevojshëm të Ultimate Multisite të exportuar.

Ruani ZIP-in privat. Mund të përmbajë përmbajtje bazë të të dhënave, skedarë të ngarkuar dhe detaje konfigurimi nga saiti i eksportuar.

Për mënyra më të vjetra të eksportimit në nivel rrjeti, shihni [Site Export](/user-guide/administration/site-export).
