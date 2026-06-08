---
title: Istoric de modificări al Vânzătorului de Domenii
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Istoric de versiuni Domain Seller

Versiunea 1.1.0 - Lansată pe 2026-05-08
- Nou: Crearea înregistrărilor DNS (add_dns_record) implementată pentru registrătorii ResellerClub, Enom și OpenSRS
- Fix: Parserul de înregistrări DNS implicite tolerează acum token-urile {DOMAIN} și {SITE_URL}
- Fix: Slugs-urile câmpurilor de checkout pentru selecția domeniului sunt namespace-uite pentru a preveni coliziunile cu site_url

Versiunea 1.0.8 - Lansată pe 2026-05-07
- Fix: Prețurile domeniilor ResellerClub preiau acum costurile live de pe endpoint-ul API corect

Versiunea 1.0.7 - Lansată pe 2026-05-06
* Fix: test_connection din ResellerClub trimite acum parametrul tlds necesar (#224)

Versiunea 1.0.6 - Lansată pe 2026-05-05
* Fix: Înregistrarea domeniului din ResellerClub funcționează acum corect, cu o gestionare îmbunătățită a răspunsului API și rutarea furnizorului bazată pe registratură
* Fix: Îmbunătățiri UX pe pagina „Register Domain”
* Eliminat: Integrarea registrătorului CyberPanel

Versiunea 1.0.5 - Lansată pe 2026-04-02
* Nou: Integrarea registrătorului GoDaddy pentru înregistrarea și gestionarea domeniilor
* Nou: Integrarea registrătorului NameSilo
* Nou: Integrarea registrătorului ResellerClub
* Nou: Verificare automată a domeniului de trimitere SES la achiziția domeniului și mapare
* Fix: Constantele pluginului Guard împotriva redefinirii în mediul de test
* Fix: MySQL flag-urile sunt împărțite corect în install-wp-tests.sh

Versiunea 1.0.4 - Lansată pe 2026-03-14
* **Fix:** Unele resurse CSS lipsă
* **Fix:** Eroare legată de TLD-uri indisponibile

Versiunea 1.0.3 - Lansată pe 2026-03-09
* **Fix:** Erori de proprietăți reactive Vue (domain_option, selected_domain, domain_provider) atunci când se folosește template-ul de înscriere vechi cu shortcode-ul de checkout
* **Fix:** Alinierea câmpului de intrare pentru subdomeniu și textul prea mare în câmpul de selecție a domeniului de checkout
* **Fix:** Ascunde blocul de preview „Your URL will be” atunci când câmpul de selecție a domeniului este prezent

Versiunea 1.0.2 - Lansată pe 2026-03-01
* **Îmbunătățit:** Setările globale de markup au fost eliminate de pe pagina de setări — prețul este acum exclusiv per produs
* **Îmbunătățit:** Adăugat link-ul „Manage Domain Products” pe pagina de setări pentru navigare rapidă
* **Îmbunătățit:** Descrieri de câmpuri și tooltips mai clare pentru setările produsului de domeniu (catch-all vs TLD-specific, tipuri de markup, prețuri introductive)
* **Îmbunătățit:** Descrieri mai bune pe tot parcursul paginii de setări (căutarea TLD-urilor, reînnoiri, DNS, notificări)

Versiunea 1.0.1 - Lansată pe 2026-02-27

* **Nou:** Instrument de import TLD pentru gestionarea prețurilor în masă
* **Nou:** Suport pentru prețuri introductive pentru produsele de domeniu
* **Nou:** Suite de test E2E cu Cypress
* **Nou:** Template-uri de email pentru notificări de ciclu de viață ale domeniilor
* **Nou:** Câmpuri de adresă a înregistrantului pe modalul de înregistrare a domeniului din admin, preumplinate din setări
* **Nou:** Interfață de management DNS pentru clienți cu suport pentru adăugare, editare și ștergere a înregistrărilor
* **Nou:** Opțiunea de checkout „Bring your own domain” cu mapare automată a domeniului
* **Nou:** Generarea automată a URL-ului site din numele domeniului în timpul checkout-ului
* **Nou:** Setări implicite de nameserver și înregistrări DNS în setări
* **Nou:** Detaliile de înregistrare a domeniului și managementul DNS pe pagina de editare a domeniului principal
* **Nou:** Setup wizard creează automat un produs de domeniu implicit cu setări raționale
* **Nou:** Sincronizare TLD automată zilnic prin cron pe toți furnizorii configurați
* **Nou:** Protecția WHOIS cu configurare per produs (întotdeauna activă, alegerea clientului sau dezactivată)
* **Nou:** Căutare de checkout pentru confidențialitatea WHOIS cu afișare preț și suport pentru dark mode
* **Nou:** Pagina de administrare „Register Domain” pentru înregistrarea manuală a domeniului
* **Nou:** Actualizări automate ale plugin-urilor prin Ultimate Multisite update server
* **Nou:** Tab de filtrare tip produs de domeniu în tabela cu lista de produse, cu stilizare de badge mov
* **Nou:** Câmpuri de contact ale înregistrantului (nume, adresă, oraș, stat, cod poștal, țară, telefon) pe formularul de checkout al domeniului
* **Nou:** Validarea câmpurilor de înregistrant înainte de apelarea API-ului registrător cu mesaje de eroare clare
* **Nou:** Canale de log specifice furnizorului pentru evenimentele de înregistrare a domeniului (ex. domain-seller-namecheap.log)
* **Nou:** Câmpuri de contact ale înregistrantului pe formularul principal de înscriere/checkout (afișate la înregistrarea unui domeniu)
* **Îmbunătățit:** Câmpul de checkout „Domain Search” înlocuit cu câmpul unificat „Domain Selection” care suportă tab-uri pentru subdomeniu, înregistrare și domeniu existent
* **Îmbunătățit:** Setările produsului de domeniu renderizate inline pe pagina de editare a produsului, prin sistemul de widget-uri core
* **Îmbunătățit:** Informațiile domeniului clientului se integrează în widget-ul core de mapare a domeniului, în loc de metabox izolat
* **Îmbunătățit:** Wizard-ul de import TLD simplificat la sincronizare cu un click din toate furnizorii
* **Îmbunătățit:** Disponibilitatea domeniului Namecheap folosește apel API în grup pentru o căutare mai rapidă
* **Îmbunătățit:** API-ul de prețuri Namecheap folosește parametrii corecți și parsarea răspunsului
* **Îmbunătățit:** Stocarea centralizată a TLD-urilor într-o singură opțiune de network
* **Îmbunătățit:** Logarea activității domeniului pentru modificări DNS, transferuri și aplicarea configurației
* **Îmbunătățit:** Sincronizare completă a TLD-urilor pentru OpenSRS folosind lista master IANA cu validare în grup
* **Îmbunătățit:** Sincronizare completă a TLD-urilor pentru Namecheap cu cereri API paginate
* **Îmbunătățit:** Clasele furnizorilor vechi înlocuite cu modelul Integration Registry
* **Îmbunătățit:** Panoul de setări cu configurarea DNS și a transferurilor
* **Îmbunătățit:** Numerele de telefon formate automat în formatul +CC.NNN al registrătorului
* **Îmbunătățit:** Validarea câmpului de telefon elimină caracterele de formatare înainte de trimitere
* **Îmbunătățit:** Cerința de versiune crescută la Ultimate Multisite 2.4.12 cu o notificare mai clară
* **Îmbunătățit:** Workflow-ul CI folosește checkout-ul corect atât pentru plugin-ul addon, cât și pentru cel core
* **Îmbunătățit:** prepare_registrant_info() citește din meta-datele utilizatorului salvate în checkout, cu fallback la adresa de facturare
* **Fixat:** AJAX-ul de căutare a domeniului eșuează pentru utilizatorii neautentificați în timpul checkout-ului
* **Fixat:** AJAX-ul de prețuri ale domeniilor eșuează pentru utilizatorii neautentificați în timpul checkout-ului
* **Fixat:** Eroare fatală de redefinire a clasei Spyc când rulează comenzi WP-CLI
* **Fixat:** Timeout-ul API sandbox Namecheap prea scurt
* **Fixat:** Textul butonului Select al căutării domeniului nu este vizibil pe fundalul verde
* **Fixat:** Înregistrarea domeniului eșuează cu eroarea „RegistrantFirstName is Missing” din cauza lipsei de informații de contact
* **Fixat:** Domeniul este creat cu blog_id=0 când site-ul nu exista încă la momentul checkout-ului
* **Fixat:** Setările TLD-urilor implicite returnate ca string în loc de array parsat
* **Eliminat:** Pagina de administrare standalone pentru Managementul Domeniilor — acum gestionată prin paginile core ale domeniilor

Versiunea 1.0.0 - Lansată pe 2025-09-28

**Rescrierea majoră pentru Ultimate Multisite v2**

* **Nou:** Rescriere completă cu arhitectura modernă PHP 7.4+
* **Nou:** Integrare fluidă cu sistemul de checkout Ultimate Multisite v2
* **Nou:** Managementul produselor de domeniu cu opțiuni de preț flexibile
* **Nou:** Arhitectură de suport pentru multiple furnizori de domenii
* **Nou:** Integrare de auto-reînnoire și abonament
* **Nou:** Interfață de management a domeniilor clienților
* **Nou:** Monitorizare și loguri ale domeniilor admin
* **Nou:** Suport pentru cupoane pentru produsele de domeniu
* **Nou:** Management de setări cuprinzător
* **Nou:** Cod bază extensibil prietenos dezvoltatorilor
* **Îmbunătățit:** Providerul OpenSRS actualizat cu suport complet pentru funcționalități
* **Îmbunătățit:** UI modern consistent cu Ultimate Multisite v2
* **Fixat:** Toate codurile v1 deprecate actualizate la standardele v2
* **Eliminat:** Compatibilitatea veche v1 (schimbare majoră)

### Versiuni anterioare (v1 Legacy)

### Versiunea 0.0.3 - 20/08/2019

* Fixat: Incompatibilitatea cu Groundhogg CRM
* Notă: Aceasta a fost ultima versiune compatibilă cu v1

### Versiunea 0.0.2 - 07/12/2018

* Fixat: Eliminat câmpul Cheie de Licență
* Fixat: Tab-urile de plan lipsă când plugin-ul de funcționalitate este activ
* Îmbunătățit: Adăugat un buton de salt pe câmpul de înscriere

### Versiunea 0.0.1 - Lansare inițială

* Integrare de bază OpenSRS pentru WP Ultimo v1
* Căutare și înregistrare simplă a domeniilor
* Permisiuni de domeniu bazate pe plan
