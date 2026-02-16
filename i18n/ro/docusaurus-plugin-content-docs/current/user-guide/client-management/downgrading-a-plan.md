---
title: Retrogradarea unui Plan
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Retrogradarea unui plan (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Retrogradarea unui plan sau a unui abonament este o acțiune frecventă pe care clienții tăi ar putea să o facă dacă au un buget limitat sau dacă au decis că nu vor avea nevoie de multe resurse pentru a-și gestiona subsite-ul.

## Cum se retrogradează un plan

Clienții tăi pot să își retrogradeze planul oricând, conectându-se la dashboard-ul de administrare al subsite-ului și făcând clic pe **Change** în pagina contului lor.

![Pagina contului cu butonul Change sub secțiunea de membership](/img/admin/memberships-list.png)

După ce fac clic pe butonul **Change**, utilizatorul/clientul va fi redirecționat către pagina de checkout, unde poate selecta planul la care dorește să își schimbe abonamentul.

![Pagina de checkout care afișează opțiunile de plan pentru retrogradare](/img/admin/memberships-list.png)

În acest exemplu, retrogradăm planul de la **Premium** la **Free**.

Pentru a continua, utilizatorul trebuie doar să facă clic pe butonul **Complete Checkout**. Aceasta îl va readuce în pagina contului, afișând un mesaj despre modificarea în așteptare pentru membership. Schimbările vor intra în vigoare la **următorul ciclu de facturare** al clientului.

![Pagina contului care afișează mesajul despre modificarea membership-ului în așteptare](/img/admin/memberships-list.png)

### Ce se întâmplă când un utilizator își retrogradează planul

Este important de menționat că retrogradarea planului nu modifică configurația existentă a subsite-ului utilizatorului.

Nu schimbă automat template-ul site-ului, deoarece schimbarea template-ului ar șterge complet și ar reseta subsite-ul. Acest lucru este pentru a evita pierderea inutilă de date. Astfel, spațiul pe disc, temele, plugin-urile etc. vor rămâne intacte, cu excepția postărilor.

Înțelegem că principala ta preocupare ar fi limitele și cotele pe care le-ai setat pentru fiecare plan, dar trebuie să luăm în considerare daunele pe care le-ar produce subsite-ului utilizatorului dacă am șterge sau modifica oricare dintre configurațiile sale.

Pentru postările care depășesc limita setată în plan, ai 3 opțiuni diferite: **Keep the posts as it** *,* **Move the posts to trash** *,* sau **Move the posts to draft** *.* Poți configura acest lucru în setările Ultimate Multisite.

![Opțiunile pentru depășirea limitei de postări în setările Ultimate Multisite](/img/config/settings-sites.png)

### Ce se întâmplă cu plata

În versiunea 2.0, nu mai sunt necesare ajustări ale plății în ceea ce privește calculul proporțional.

Acest lucru se datorează faptului că sistemul va aștepta ca membership-ul existent să **își finalizeze ciclul de facturare înainte ca** noul plan/membership să intre în vigoare. Noua sumă de facturare pentru noul membership va fi aplicată și încasată automat la următorul ciclu de facturare.
