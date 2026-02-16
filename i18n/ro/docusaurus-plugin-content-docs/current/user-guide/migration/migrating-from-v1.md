---
title: Migrarea de la V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrarea de la V1

## Ultimate Multisite a trecut de la seria de versiuni 1.x la seria de versiuni 2.x.

Ultimate Multisite versiunea 2.0 și versiunile ulterioare reprezintă o rescriere completă a codului, ceea ce înseamnă că există foarte puține elemente comune între versiunea veche și cea nouă. Din acest motiv, când faci upgrade de la 1.x la 2.x, datele tale vor trebui migrate într-un format pe care noile versiuni îl pot înțelege.

Din fericire, Ultimate Multisite 2.0+ **vine cu un instrument de migrare** integrat în nucleul aplicației, capabil să detecteze datele din versiunea veche și să le convertească în noul format. Această migrare are loc în timpul **Asistentului de configurare** din versiunea 2.0+.

Această lecție acoperă modul în care funcționează instrumentul de migrare, ce să faci în cazul unei erori și cum să rezolvi problemele care pot apărea în timpul acestui proces.

_**IMPORTANT: Înainte de a începe upgrade-ul de la versiunea 1.x la versiunea 2.0, asigură-te că ai creat o copie de rezervă a bazei de date a site-ului tău**_

## Primii pași

Primul pas este să descarci fișierul .zip al plugin-ului și să instalezi versiunea 2.0 în panoul de administrare al rețelei.

După ce [instalezi și activezi versiunea 2.0](../getting-started/installing-ultimate-multisite.md), sistemul va detecta automat că Multisite-ul tău rulează pe versiunea veche și vei vedea acest mesaj în partea de sus a paginii plugin-ului.

_**NOTĂ:** Dacă ai Ultimate Multisite 1.x instalat pe Multisite-ul tău, vei avea opțiunea de a înlocui plugin-ul cu versiunea pe care tocmai ai descărcat-o. Te rugăm să dai click pe **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Pagina următoare îți va arăta ce add-on-uri vechi ai instalate împreună cu versiunea 1.x. Va conține instrucțiuni despre compatibilitatea versiunii pe care o folosești cu versiunea 2.0 sau dacă trebuie să instalezi o versiune actualizată a add-on-ului după migrare.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Când ești gata să continui, poți da click pe butonul care spune **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Vei fi apoi direcționat către pagina asistentului de instalare cu câteva mesaje de bun venit. Trebuie doar să dai click pe **Get Started** pentru a trece la pagina următoare.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

După ce dai click pe **Get Started**, vei fi redirecționat către Verificările de pre-instalare. Acestea îți vor arăta informațiile despre sistem și instalarea WordPress și îți vor spune dacă îndeplinesc **cerințele Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Următorul pas este să introduci cheia de licență Ultimate Multisite și să activezi plugin-ul. Acest lucru va asigura că toate funcțiile, inclusiv add-on-urile, vor fi disponibile pe site-ul tău.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

După ce ai introdus cheia, dă click pe **Agree & Activate**.

După activarea licenței, poți începe instalarea propriu-zisă dând click pe **Install** pe pagina următoare. Aceasta va crea automat fișierele și baza de date necesare pentru funcționarea versiunii 2.0.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Acum, migrarea

Instrumentul de migrare are o funcție de siguranță integrată care va verifica întregul tău multisite pentru a se asigura că toate datele Ultimate Multisite pot fi migrate fără probleme. Dă click pe butonul **Run Check** pentru a începe procesul.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

După rularea verificării, există două posibilități: rezultatul poate fi fie **cu** eroare, fie **fără eroare**.

### Cu eroare

Dacă primești un mesaj de eroare, va trebui să contactezi echipa noastră de suport pentru a te ajuta să rezolvi eroarea. Asigură-te că **furnizezi jurnalul de erori** când creezi un tichet. Poți descărca jurnalul sau poți da click pe linkul care spune „contactează echipa noastră de suport". Aceasta va deschide widget-ul de ajutor în partea dreaptă a paginii tale, cu câmpurile pre-completate pentru tine, inclusiv jurnalele de erori în secțiunea de descriere.

_**Deoarece sistemul a găsit o eroare, nu vei putea continua migrarea la versiunea 2.0. Poți reveni la versiunea 1.x pentru a continua să rulezi rețeaua până când eroarea este remediată.**_

### Fără eroare

Dacă sistemul nu găsește nicio eroare, vei vedea un mesaj de succes și un buton **Migrate** în partea de jos care îți va permite să continui cu migrarea. Pe această pagină, ți se va reaminti să creezi o copie de rezervă a bazei de date înainte de a continua, lucru pe care îl recomandăm cu tărie. Apasă **Migrate** dacă ai deja o copie de rezervă.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Și asta este tot!

Poți fie să continui cu asistentul de configurare pentru a actualiza logo-ul și alte elemente din rețeaua ta, fie să începi să navighezi prin meniul Ultimate Multisite versiunea 2.0 și noua sa interfață. Hai, explorează și distrează-te.
