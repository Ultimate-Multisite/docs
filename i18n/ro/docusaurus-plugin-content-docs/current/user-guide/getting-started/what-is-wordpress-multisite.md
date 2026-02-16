---
title: Ce este WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Ce este WordPress Multisite?

În nucleul său, WordPress oferă o funcționalitate numită „Multisite", care își are originile în 2010, odată cu lansarea WordPress 3.0. De atunci, a primit numeroase actualizări menite să introducă funcționalități noi și să îmbunătățească securitatea.

Pe scurt, un WordPress multisite poate fi descris astfel: O universitate menține o singură instalare WordPress, dar fiecare facultate își administrează propriul site WordPress.

## 

## Ce este mai exact WordPress Multisite?

Multisite este o funcționalitate WordPress care permite mai multor site-uri să folosească aceeași instalare WordPress. Când multisite este activat, site-ul WordPress original este convertit pentru a suporta ceea ce se numește de obicei o **rețea de site-uri**.

Această rețea partajează sistemul de fișiere (ceea ce înseamnă că **plugin-urile și temele sunt de asemenea partajate**), baza de date, fișierele de bază WordPress, fișierul wp-config.php etc.

Asta înseamnă că actualizările pentru WordPress, teme și plugin-uri trebuie efectuate o singură dată pentru toate site-urile din rețea, deoarece acestea folosesc aceleași fișiere din sistemul de fișiere.

Acest lucru reprezintă unul dintre principalele avantaje ale multisite, permițându-ți să crești numărul de site-uri pe care le administrezi, menținând în același timp constant volumul de sarcini necesare pentru întreținerea site-urilor clienților tăi.

## 

## Subdomeniu sau subdirector?

Există două moduri de a rula WordPress multisite – și trebuie să alegi unul dintre ele când convertești instalarea ta WordPress obișnuită într-o instalare multisite:

**Subdomeniu:** ex.: [site.domain.com](http://site.domain.com)

…sau

**Subdirector:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Fiecare mod are avantaje și dezavantaje pe care trebuie să le iei în considerare când iei această decizie.

Un lucru important de reținut: odată ce ai luat decizia, schimbarea rețelei din subdirector în subdomeniu sau invers este foarte dificilă – mai ales dacă ai deja câteva site-uri create.

Înainte de a lua această decizie, iată câteva aspecte de avut în vedere:

**Modul subdirector** este cel mai simplu în ceea ce privește configurarea și întreținerea. Acest lucru se datorează faptului că toate site-urile sunt doar căi atașate domeniului principal (de ex. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Prin urmare, ai nevoie de **un singur certificat SSL** pentru domeniul principal, care va acoperi întreaga rețea.

În același timp, din cauza structurii URL-urilor, Google și majoritatea celorlalte motoare de căutare vor considera toate subsite-urile din rețeaua ta bazată pe subdirectoare ca un singur site mare. Ca urmare, conținutul adăugat pe subsite-uri de către clienții tăi finali ar putea afecta performanța SEO a site-ului tău principal, de exemplu. Nivelul impactului este discutabil și există argumente că o astfel de configurare poate fi chiar benefică pentru performanța SEO.

**Modul subdomeniu** este puțin mai complex de configurat, dar structura URL-urilor sale (de ex. [subsite.yournetwork.com](http://subsite.yournetwork.com)) este în general percepută ca având un aspect „mai profesional".

Una dintre principalele provocări în configurarea modului subdomeniu este acoperirea SSL (HTTPS) pentru întreaga rețea. Asta se datorează faptului că browserele consideră subdomeniile ca entități izolate. Prin urmare, vei avea nevoie de un certificat SSL diferit pentru fiecare subdomeniu din rețeaua ta, sau de un tip special de certificat numit **certificat SSL Wildcard**. În ultimii ani, furnizorii de hosting și panourile de control și-au îmbunătățit serviciile de furnizare SSL, iar unii oferă certificate wildcard cu un singur click, reducând diferența dintre cele două moduri în ceea ce privește complexitatea configurării.

Spre deosebire de modul subdirector, subsite-urile dintr-o rețea bazată pe subdomenii sunt considerate de motoarele de căutare ca site-uri separate, ceea ce înseamnă că conținutul prezent pe un subsite nu interferează deloc cu performanța SEO a celorlalte subsite-uri.

## Super Adminul

Instalările WordPress cu un singur site îți permit să adaugi un număr nelimitat de utilizatori și să le acorzi diferite roluri cu diferite permisiuni.

În WordPress Multisite, un nou tip de utilizator devine disponibil: **super adminul** – și un nou panou de administrare devine accesibil: **panoul de administrare al rețelei**.

Așa cum sugerează numele, super adminul are superputeri asupra rețelei, fiind capabil să gestioneze toate subsite-urile, plugin-urile, temele, totul!

Odată ce convertești instalarea ta WordPress cu un singur site în multisite, administratorul original al site-ului va fi automat promovat la super admin.

Plugin-urile și temele pot fi instalate sau dezinstalate doar din panoul de administrare al rețelei, de către super admini. Administratorii subsite-urilor pot apoi alege să activeze sau să dezactiveze acele plugin-uri sau teme, cu excepția cazului în care super adminul activează un plugin la nivel de rețea, ceea ce îl forțează să fie activ pentru toate subsite-urile tot timpul.

_Notă: după cum poți vedea, invitarea cuiva în rețeaua ta și acordarea statutului de super admin oferă acestui utilizator control total asupra rețelei tale. De exemplu, alți super admini pot chiar să îți elimine statutul de super admin, blocându-ți efectiv accesul la propriul panou de administrare al rețelei. Pentru a permite clienților Ultimate Multisite să aibă control granular asupra a ceea ce pot face super adminii suplimentari, avem un add-on numit Support Agents. Acest add-on îți permite să creezi încă un tip de utilizator – un agent – cu doar permisiunile necesare pentru a-și îndeplini sarcinile în rețea._

## Ce este partajat între subsite-uri și ce nu

Așa cum am menționat anterior, unul dintre avantajele cheie ale WordPress multisite este că toate subsite-urile partajează aceleași configurații, fișiere de bază, teme, plugin-uri, fișiere de bază WordPress etc.

Există, totuși, elemente care sunt bine delimitate la nivelul fiecărui subsite.

\- De exemplu, fiecare subsite are propriul folder de încărcări. Ca urmare, fișierele încărcate de utilizatorii unui anumit subsite nu pot fi accesate pe alt subsite.

\- Fiecare subsite are propriul panou de administrare dedicat și poate activa sau dezactiva plugin-uri sau teme, cu excepția cazului în care acestea au fost activate la nivel de rețea de un super admin.

\- Majoritatea tabelelor din baza de date sunt create pentru fiecare subsite, ceea ce înseamnă că articolele, comentariile, paginile, setările și altele sunt delimitate pentru fiecare subsite.

## Gestionarea utilizatorilor în WordPress Multisite

Un subiect delicat în WordPress multisite este gestionarea utilizatorilor. Tabelul utilizatorilor WordPress este unul dintre puținele care este partajat între toate subsite-urile.

Această configurare poate genera unele probleme în funcție de ce plănuiești să construiești cu rețeaua ta. Exemplul de mai jos ajută la ilustrarea celei mai presante probleme.

Imaginează-ți următorul scenariu:

Creezi o rețea WordPress multisite și începi să oferi subsite-uri contra unui abonament lunar pentru persoanele care vor să aibă un magazin online.

Primești primul client plătitor – John. Creezi un site pentru John în rețeaua ta, instalezi toate plugin-urile necesare, apoi creezi un utilizator pentru John ca să își poată administra magazinul.

Apoi apare un al doilea client – Alice. Faci același lucru pentru ea și acum are și ea un magazin în rețeaua ta.

John și Alice sunt ambii clienții tăi, dar nu se cunosc. Mai important, dacă unul dintre ei vizitează site-ul magazinului celuilalt, nu are cum să știe că acest magazin este găzduit în aceeași rețea de site-uri.

Într-o zi, John are nevoie să cumpere o pereche nouă de pantofi și îi găsește pe cei perfecți în magazinul lui Alice. Când încearcă să finalizeze achiziția, primește un mesaj de eroare „adresa de email este deja folosită", ceea ce este bizar deoarece John este 100% sigur că este prima dată când vizitează site-ul lui Alice.

Ce s-a întâmplat aici este că utilizatorul lui John este partajat în întreaga rețea, așa că atunci când încearcă să creeze un cont pentru a finaliza comanda pe site-ul lui Alice, WordPress va detecta că un utilizator cu aceeași adresă de email există deja și va afișa o eroare.

_Notă: Înțelegem cât de problematic poate fi acest lucru în funcție de cazul tău de utilizare, așa că Ultimate Multisite are o opțiune care ocolește verificările obișnuite pentru un utilizator existent, permițând crearea mai multor conturi folosind aceeași adresă de email. Fiecare cont este legat de un subsite, astfel încât riscul de coliziune este menținut la minimum. În exemplul de mai sus, John nu ar primi un mesaj de eroare și ar putea cumpăra acei pantofi fără probleme. Această opțiune se numește Enable Multiple Accounts și poate fi activată din Ultimate Multisite → Settings → Login & Registration._

Chiar dacă tabelul utilizatorilor este partajat, utilizatorii pot fi adăugați sau eliminați din subsite-uri de către administratorii subsite-urilor sau de super admin, și pot avea chiar roluri diferite pe subsite-uri diferite.

## Considerații de performanță

WordPress multisite este foarte puternic în ceea ce privește numărul de site-uri pe care le poate suporta. Acest lucru poate fi demonstrat de faptul că [WordPress.com](https://WordPress.com), Edublogs și Campuspress sunt toate servicii bazate pe multisite și fiecare găzduiește mii de site-uri.

Deși teoretic nu există un număr maxim de site-uri pe care le poți găzdui pe o singură instalare WordPress multisite, în practică numărul de site-uri pe care le poți rula satisfăcător poate varia foarte mult în funcție de mai mulți factori diferiți: cât de dinamice sunt site-urile, ce plugin-uri sunt disponibile pentru subsite-uri etc.

Ca regulă generală, cu cât rețeaua ta este mai simplă, cu atât mai bine. Favorizarea site-urilor unde conținutul nu este cu adevărat dinamic (ceea ce le face candidați excelenți pentru strategii agresive de caching) și menținerea stivei de plugin-uri cât mai ușoară posibil (cu cât numărul de plugin-uri active este mai mic, cu atât mai bine) poate crește drastic numărul de subsite-uri pe care le poți găzdui.

Cea mai bună parte este că, deoarece totul este WordPress aici, aceleași instrumente pe care le cunoști și le apreciezi deja pentru îmbunătățirea performanței vor funcționa și pentru o rețea multisite.

Principalul punct de blocaj pentru multisite este baza de date, dar dacă tot restul este configurat corect, poate dura câteva mii de site-uri înainte să fie nevoie să îți faci griji în privința asta. Chiar și atunci, există soluții care pot fi adăugate progresiv în acel moment (cum ar fi soluțiile de sharding pentru baza de date, de exemplu).
