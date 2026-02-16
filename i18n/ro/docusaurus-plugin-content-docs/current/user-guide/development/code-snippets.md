---
title: Fragmente de cod
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Fragmente de cod pentru v2

În principiu, fragmentele de cod pentru **WordPress** sunt folosite pentru a realiza anumite acțiuni care altfel ar necesita un plugin dedicat mai mic. Astfel de fragmente de cod sunt plasate într-unul dintre fișierele de bază ale WordPress sau ale temei (de obicei fișierul functions.php al temei tale) sau pot fi folosite ca MU plugin.

În acest articol îți vom arăta trei fragmente de cod care pot fi folosite cu **Ultimate Multisite v2** :

  * [**Schimbarea poziției elementului de meniu Cont**](#changing-the-position-of-the-account-menu-item)

  * [**Cum să verifici dacă utilizatorul este într-un anumit plan și/sau are un abonament activ**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Rezolvarea problemelor CORS cu pictogramele de font în domeniile mapate**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Schimbarea poziției elementului de meniu Cont

Pentru a schimba poziția elementului de meniu Cont în Dashboard-ul clientului tău, trebuie doar să adaugi următorul fragment de cod în functions.php al temei active de pe site-ul principal. De asemenea, poți pune fragmentul într-unul dintre mu-plugins sau pluginurile tale personalizate.

add_filter('wu_my_account_menu_position', function() { return 10; // Modifică această valoare pentru a plasa meniul în poziția dorită.

## Cum să verifici dacă utilizatorul este într-un anumit plan și/sau are un abonament activ

Ca administrator de rețea, s-ar putea să ai nevoie să creezi funcții personalizate care vor efectua acțiuni de bază sau vor face un serviciu/funcționalitate disponibilă unui grup selectat de abonați sau utilizatori finali, în funcție de starea abonamentului lor și planul la care sunt abonați.

Aceste funcții native Ultimate Multisite te vor ajuta în acest sens.

Pentru a verifica dacă utilizatorul este membru al unui anumit plan, poți folosi funcția:

wu_has_plan($user_id, $plan_id)

Pentru a verifica dacă abonamentul este activ, poți folosi funcția:

wu_is_active_subscriber($user_id)

Mai jos este un exemplu de fragment de cod care verifică dacă utilizatorul curent este într-un anumit plan (_Plan ID 50_) și dacă abonamentul utilizatorului este activ.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // UTILIZATORUL ESTE MEMBRU AL PLANULUI ȘI ABONAMENTUL SĂU ESTE ACTIV, EXECUTĂ ACȚIUNI} else { // UTILIZATORUL NU ESTE MEMBRU AL PLANULUI -- SAU -- ABONAMENTUL SĂU NU ESTE ACTIV, EXECUTĂ ALTE ACȚIUNI} // end if;

Reține că _**wu_has_plan**_ necesită un „Plan ID" pentru a funcționa.

Pentru a obține ID-ul unui plan, poți accesa **Ultimate Multisite > Products**. ID-ul fiecărui produs va fi afișat în partea dreaptă a tabelului.

Reține că utilizatorii pot fi abonați doar la un **Plan**, nu la un Package sau Service, deoarece acestea sunt doar suplimente pentru un **Plan**.

![Lista de produse care arată ID-urile planurilor](/img/admin/products-list.png)

## Rezolvarea problemelor CORS cu pictogramele de font în domeniile mapate
## Rezolvarea problemelor CORS cu pictogramele de font în domeniile mapate

După maparea unui domeniu către un sub-site, s-ar putea să descoperi că site-ul are probleme cu încărcarea fonturilor personalizate. Aceasta este cauzată de o blocare cross-origin în setările serverului tău.

Deoarece fișierele de font sunt aproape întotdeauna încărcate direct din CSS, pluginul nostru de mapare a domeniilor nu poate rescrie URL-urile pentru a folosi domeniul mapat în loc de cel original, așa că pentru a rezolva problema, va trebui să modifici fișierele de configurare ale serverului.

Mai jos sunt fragmente de cod pentru a rezolva problema pentru Apache și NGINX. Aceste modificări necesită cunoștințe avansate despre fișierele de configurare ale serverului (fișiere .htaccess și fișiere de configurare NGINX). Dacă nu te simți confortabil să faci aceste modificări singur, trimite această pagină agenților de suport ai furnizorului tău de hosting când ceri asistență.

### Apache

În fișierul tău .htaccess, adaugă:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

În fișierul de configurare al serverului (locația variază de la server la server), adaugă:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
