---
title: Jurnal de modificări Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Jurnal de modificări Domain Seller {#domain-seller-changelog}

Versiunea 1.3.0 - Lansată pe 2026-06-02
- Nou: A fost adăugat un avertisment în network-admin când soldul reseller HostAfrica devine prea scăzut
- Nou: A fost adăugată maparea automată a domeniilor nou înregistrate către site-ul de rețea
- Remediere: Cerințele câmpurilor pentru solicitantul înregistrării au fost aplicate doar la înregistrarea unui domeniu nou
- Remediere: Notificările de monitorizare a soldului au devenit respingibile
- Remediere: S-a asigurat păstrarea detaliilor de facturare ale solicitantului înregistrării din WooCommerce
- Remediere: Au fost impuse cerințele de contact ale solicitantului înregistrării în timpul înregistrării
- Remediere: S-a prevenit crearea produselor de înregistrare a domeniilor cu adaos de 0%
- Remediere: Au fost păstrate selecțiile de domenii și prețurile pe parcursul fluxului sesiunii de checkout
- Remediere: A fost îmbunătățită afișarea monedei pentru prețurile domeniilor HostAfrica
- Remediere: A fost îmbunătățit comportamentul form-action la checkout pentru a preveni nepotrivirile query-var din WP-core
- Îmbunătățit: Documentația de configurare pentru reseller HostAfrica a fost legată în ghidarea de configurare

Versiunea 1.2.0 - Lansată pe 2026-05-25
- Nou: A fost adăugat HostAfrica ca integrare de vânzare de domenii cu suport pentru checkout, asistent de configurare, căutare, TLD/prețuri, înregistrare, reînnoire, transfer, nameserver, DNS, cod EPP, blocare registrar și protecție ID
- Nou: A fost adăugat Openprovider ca integrare de vânzare de domenii cu suport pentru prețuri reseller, înregistrare, reînnoire, transfer, nameserver, DNS, cod EPP, blocare registrar, confidențialitate WHOIS și sincronizare TLD
- Nou: A fost adăugat Hostinger ca integrare de vânzare de domenii folosind tokenul Hostinger API partajat din integrarea de bază pentru verificări de disponibilitate, înregistrare, actualizări nameserver, blocare registrar și confidențialitate WHOIS
- Îmbunătățit: Au fost adăugate docblock-uri pentru acțiuni și filtre din ciclul de viață al domeniilor, pentru ghidarea integrării de către dezvoltatori
- Îmbunătățit: Metadatele de compatibilitate ale pluginului au fost actualizate la WordPress 7.0 în readme-ul addonului
- Îmbunătățit: Au fost actualizate șabloanele de planificare folosite pentru coordonarea lansărilor viitoare

Versiunea 1.1.0 - Lansată pe 2026-05-08
- Nou: Crearea înregistrărilor DNS (add_dns_record) a fost implementată pentru registratorii ResellerClub, Enom și OpenSRS
- Remediere: Parserul implicit pentru DNS Records tolerează acum tokenurile {DOMAIN} și {SITE_URL}
- Remediere: Slugurile câmpului de checkout pentru selecția domeniului au fost namespaced pentru a preveni coliziunea cu site_url

Versiunea 1.0.8 - Lansată pe 2026-05-07
- Remediere: Prețurile domeniilor ResellerClub preiau acum prețurile de cost live din endpointul API corect

Versiunea 1.0.7 - Lansată pe 2026-05-06
* Remediere: ResellerClub test_connection trimite parametrul tlds necesar (#224)

Versiunea 1.0.6 - Lansată pe 2026-05-05
* Remediere: Înregistrarea domeniilor ResellerClub funcționează acum corect, cu gestionare îmbunătățită a răspunsurilor API și rutare a furnizorului determinată de registru
* Remediere: Îmbunătățiri UX pentru pagina de administrare Register Domain
* Eliminat: Integrarea registratorului CyberPanel

Versiunea 1.0.5 - Lansată pe 2026-04-02
* Nou: Integrare registrator GoDaddy pentru înregistrarea și administrarea domeniilor
* Nou: Integrare registrator NameSilo
* Nou: Integrare registrator ResellerClub
* Nou: Verificare automată a domeniului de trimitere SES la achiziționarea și maparea domeniului
* Remediere: Protejarea constantelor pluginului împotriva redefinirii în mediul de testare
* Remediere: Flagurile MySQL sunt separate corect pe cuvinte în install-wp-tests.sh

Versiunea 1.0.4 - Lansată pe 2026-03-14
* **Remediere:** Unele asseturi css lipsă
* **Remediere:** Eroare legată de tlds indisponibile

Versiunea 1.0.3 - Lansată pe 2026-03-09
* **Remediere:** Erori ale proprietăților reactive Vue (domain_option, selected_domain, domain_provider) la folosirea șablonului de înscriere legacy cu shortcode-ul de checkout
* **Remediere:** Aliniere greșită a câmpului de introducere pentru subdomeniu și text supradimensionat în câmpul de checkout pentru selecția domeniului
* **Remediere:** Ascunde blocul de previzualizare „Your URL will be” când câmpul de selecție a domeniului este prezent

Versiunea 1.0.2 - Lansată pe 2026-03-01
* **Îmbunătățit:** Setările globale de adaos au fost eliminate din pagina de setări — prețurile sunt acum exclusiv per-produs
* **Îmbunătățit:** A fost adăugat linkul „Manage Domain Products” pe pagina de setări pentru navigare rapidă
* **Îmbunătățit:** Descrieri mai clare ale câmpurilor și tooltips pentru setările produselor de domenii (catch-all vs specifice TLD, tipuri de adaos, prețuri introductive)
* **Îmbunătățit:** Descrieri mai bune în întreaga pagină de setări (căutare TLD-uri, reînnoiri, DNS, notificări)

Versiunea 1.0.1 - Lansată pe 2026-02-27

* **Nou:** Instrument de import TLD pentru gestionarea prețurilor în masă
* **Nou:** Suport pentru prețuri introductive pentru produse de domeniu
* **Nou:** Suită de teste E2E cu Cypress
* **Nou:** Șabloane de email pentru notificări privind ciclul de viață al domeniului
* **Nou:** Câmpuri pentru adresa solicitantului în modalul de înregistrare a domeniului din admin, precompletate din setări
* **Nou:** Interfață de gestionare DNS pentru clienți, cu suport pentru adăugarea, editarea și ștergerea înregistrărilor
* **Nou:** Opțiune de checkout „Adu propriul domeniu” cu mapare automată a domeniului
* **Nou:** Generare automată a URL-ului site-ului din numele domeniului în timpul checkout-ului
* **Nou:** Configurare implicită pentru nameserver și înregistrări DNS în setări
* **Nou:** Detalii de înregistrare a domeniului și gestionare DNS pe pagina principală de editare a domeniului
* **Nou:** Expertul de configurare creează automat un produs de domeniu implicit, cu valori implicite rezonabile
* **Nou:** Sincronizare TLD automată zilnică prin cron pentru toți furnizorii configurați
* **Nou:** Protecție de confidențialitate WHOIS cu configurare per produs (mereu activă, alegerea clientului sau dezactivată)
* **Nou:** Casetă de bifare pentru confidențialitate WHOIS la checkout, cu afișarea prețului și suport pentru modul întunecat
* **Nou:** Pagină admin Register Domain pentru înregistrarea manuală a domeniilor
* **Nou:** Actualizări automate ale plugin-ului prin serverul de actualizări Ultimate Multisite
* **Nou:** Filă de filtrare pentru tipul de produs de domeniu în tabelul listei de produse, cu stilizare de insignă mov
* **Nou:** Câmpuri de contact ale solicitantului (nume, adresă, oraș, stat, cod poștal, țară, telefon) în formularul de checkout pentru domeniu
* **Nou:** Validarea câmpurilor solicitantului înainte de apelarea API-ului registratorului, cu mesaje de eroare clare
* **Nou:** Canale de jurnal specifice furnizorului pentru evenimentele de înregistrare a domeniului (de ex. domain-seller-namecheap.log)
* **Nou:** Câmpuri de contact ale solicitantului în formularul principal de înregistrare/înscriere la checkout (afișate când se înregistrează un domeniu)
* **Îmbunătățit:** Câmpul Domain Search de la checkout a fost înlocuit cu câmpul unificat Domain Selection, care suportă file pentru subdomeniu, înregistrare și domeniu existent
* **Îmbunătățit:** Setările produsului de domeniu se randau inline pe pagina de editare a produsului prin sistemul de widgeturi de bază
* **Îmbunătățit:** Informațiile despre domeniul clientului se integrează în widgetul principal de mapare a domeniilor în locul unei metabox independente
* **Îmbunătățit:** Expertul de import TLD a fost simplificat la sincronizare cu un singur clic de la toți furnizorii
* **Îmbunătățit:** Disponibilitatea domeniilor Namecheap folosește apel API în lot pentru căutare mai rapidă
* **Îmbunătățit:** API-ul de prețuri Namecheap folosește parametri corecți și parsarea corectă a răspunsului
* **Îmbunătățit:** Stocare TLD centralizată într-o singură opțiune de rețea
* **Îmbunătățit:** Jurnalizarea activității domeniilor pentru modificări DNS, transferuri și aplicarea configurației
* **Îmbunătățit:** Sincronizare TLD completă pentru OpenSRS folosind lista principală IANA cu validare în lot
* **Îmbunătățit:** Sincronizare TLD completă pentru Namecheap cu cereri API paginate
* **Îmbunătățit:** Clasele vechi de furnizori au fost înlocuite cu modelul Integration Registry
* **Îmbunătățit:** Panou de setări cu configurare DNS și transfer
* **Îmbunătățit:** Numerele de telefon sunt formatate automat în formatul registratorului +CC.NNN
* **Îmbunătățit:** Validarea câmpului de telefon elimină caracterele de formatare înainte de trimitere
* **Îmbunătățit:** Cerința de versiune a fost crescută la Ultimate Multisite 2.4.12, cu notificare mai clară
* **Îmbunătățit:** Fluxul de lucru CI folosește checkout corect atât pentru addon, cât și pentru plugin-ul de bază
* **Îmbunătățit:** prepare_registrant_info() citește din meta utilizatorului salvată la checkout, cu fallback la adresa de facturare
* **Remediat:** AJAX pentru căutarea domeniilor eșua pentru utilizatorii neautentificați în timpul checkout-ului
* **Remediat:** AJAX pentru prețurile domeniilor eșua pentru utilizatorii neautentificați în timpul checkout-ului
* **Remediat:** Eroare fatală de redeclarare a clasei Spyc la rularea comenzilor WP-CLI
* **Remediat:** Timeout-ul API-ului sandbox Namecheap era prea scurt
* **Remediat:** Textul butonului Select din căutarea domeniilor nu era vizibil pe fundal verde
* **Remediat:** Înregistrarea domeniului eșua cu eroarea „RegistrantFirstName is Missing” din cauza lipsei informațiilor de contact
* **Remediat:** Înregistrarea domeniului era creată cu blog_id=0 când site-ul nu exista încă la momentul checkout-ului
* **Remediat:** Setarea TLD-urilor implicite era returnată ca șir în loc de array parsat
* **Eliminat:** Pagină admin independentă Domain Management — acum este gestionată prin paginile principale de domenii

Versiunea 1.0.0 - Lansată pe 2025-09-28

**Rescriere majoră pentru Ultimate Multisite v2**

* **Nou:** Rescriere completă cu arhitectură modernă PHP 7.4+
* **Nou:** Integrare fără întreruperi cu sistemul de checkout Ultimate Multisite v2
* **Nou:** Gestionarea produselor de domeniu cu opțiuni flexibile de prețuri
* **Nou:** Arhitectură de suport pentru mai mulți furnizori de domenii
* **Nou:** Integrare pentru reînnoire automată și abonamente
* **Nou:** Interfață de gestionare a domeniilor pentru clienți
* **Nou:** Monitorizare și jurnale admin pentru domenii
* **Nou:** Suport pentru cupoane pentru produse de domeniu
* **Nou:** Gestionare cuprinzătoare a setărilor
* **Nou:** Bază de cod extensibilă, prietenoasă pentru dezvoltatori
* **Îmbunătățit:** Furnizor OpenSRS actualizat cu suport complet pentru funcționalități
* **Îmbunătățit:** UI modernă, consecventă cu Ultimate Multisite v2
* **Remediat:** Tot codul v1 depreciat a fost actualizat la standardele v2
* **Eliminat:** Compatibilitate veche v1 (schimbare incompatibilă)

### Versiuni anterioare (v1 moștenit) {#previous-versions-v1-legacy}

### Versiunea 0.0.3 - 20/08/2019 {#version-003---20082019}

* Remediat: Incompatibilitate cu Groundhogg CRM
* Notă: Aceasta a fost ultima versiune compatibilă cu v1

### Versiunea 0.0.2 - 07/12/2018 {#version-002---07122018}

* Remediat: Câmpul License Key a fost eliminat
* Remediat: Filele de plan lipseau când plugin-ul de funcționalitate este activ
* Îmbunătățit: A fost adăugat un buton de omitere în câmpul de înregistrare

### Versiunea 0.0.1 - Lansare inițială {#version-001---initial-release}

* Integrare OpenSRS de bază pentru WP Ultimo v1
* Căutare și înregistrare simplă de domenii
* Permisiuni pentru domenii bazate pe plan
