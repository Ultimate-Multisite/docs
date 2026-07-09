---
title: Trecerea la un plan inferior
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Trecerea la un plan inferior (v2) {#downgrading-a-plan-v2}

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Trecerea la un plan sau abonament inferior este o acțiune obișnuită pe care clienții tăi ar putea să o facă dacă au un buget limitat sau au decis că nu vor avea nevoie de multe resurse pentru a-și rula subsite-ul.

## Cum să treci la un plan inferior {#how-to-downgrade-a-plan}

Clienții tăi pot trece oricând la un plan inferior autentificându-se în Dashboard-ul de administrare al subsite-ului lor și făcând clic pe **Schimbă** în pagina lor Account.

![Pagina Account a clientului cu cardul Your Membership și butonul Change](/img/account-page/membership-change-button.png)

După ce face clic pe butonul **Schimbă**, utilizatorul/clientul va fi redirecționat către pagina de finalizare a comenzii, unde poate selecta planul la care dorește să își schimbe abonamentul.

![Pagina cu opțiuni de trecere la un plan inferior pe partea clientului](/img/account-page/downgrade-picker.png)

În acest exemplu, trecem planul de la **Premium** la **Free**.

Pentru a continua, utilizatorul trebuie doar să facă clic pe butonul **Finalizează comanda**. Apoi va fi dus înapoi la pagina Account, unde se va afișa un mesaj despre modificarea în așteptare pentru abonament. Modificările vor intra în vigoare la **următorul ciclu de facturare** al clientului.

![Pagina Account afișând bannerul de modificare a abonamentului în așteptare](/img/account-page/pending-change.png)

### Ce se întâmplă când un utilizator trece la un plan inferior {#what-happens-when-a-user-downgrades-their-plan}

Este important de reținut că trecerea la un plan inferior nu modifică configurația existentă din subsite-ul utilizatorului.

Nu schimbă automat șablonul site-ului, deoarece schimbarea șablonului site-ului va șterge complet și va reseta subsite-ul. Acest lucru este pentru a evita pierderea inutilă de date. Așadar, spațiul pe disc, temele, pluginurile etc. vor rămâne intacte, cu excepția articolelor.

Înțelegem că principala ta preocupare ar fi limitele și cotele pe care le setezi pentru fiecare plan, dar trebuie să luăm în considerare daunele pe care le-ar provoca subsite-ului utilizatorului dacă am șterge sau modifica oricare dintre configurațiile acestuia.

Pentru articolele care depășesc limita setată în plan, ai 3 opțiuni diferite: **Păstrează articolele așa cum sunt** *,* **Mută articolele în coșul de gunoi** *,* sau **Mută articolele în ciornă** *.* Poți configura acest lucru în setările Ultimate Multisite.

![Pagina Sites din Network Admin Settings afișând opțiunile de comportament pentru depășirea limitei de articole](/img/account-page/settings-sites-post-limit.png)

### Ce se întâmplă cu plata {#what-happens-to-the-payment}

În versiunea 2.0, nu mai necesită nicio ajustare a plății în ceea ce privește proratarea.

Acest lucru se datorează faptului că sistemul va aștepta ca abonamentul existent să **își finalizeze ciclul de facturare înainte** ca noul plan/abonament să intre în vigoare. Noua sumă de facturare pentru noul abonament va fi aplicată și percepută automat în următorul ciclu de facturare.
