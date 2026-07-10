---
title: Reducere un plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Planum de la plan (v2) {#downgrading-a-plan-v2}

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Downgradirea unui plan sau a unei abonații este o acțiune comună pe care o pot face clienții dacă au un buget limitat sau decid că nu vor avea nevoie de multe resurse pentru a rula subsite-ul lor.

## Cum să faci downgrade-ul unui plan {#how-to-downgrade-a-plan}

Clienții pot downgrada planul în orice moment prin autentificarea în dashboard-ul de administrare al subsite-ului lor și apăsând **Change** (Schimbă) sub pagina contului lor.

![Pagina de cont cu cardul Membresiei tale și butonul Change](/img/account-page/membership-change-button.png)

După apăsarea butonului **Change**, utilizatorul/client va fi redirecționat către pagina de checkout unde poate selecta planul pe care dorește să îl schimbe pentru abonamentul său.

![Pagina opțiuni downgrade a planului pe partea client](/img/account-page/downgrade-picker.png)

În acest exemplu, downgradim planul de la **Premium** la **Free**.

Pentru a continua, utilizatorul trebuie doar să apese butonul **Complete Checkout** (Finalizează Checkout). Apoi îl va duce înapoi la pagina de cont care arată un mesaj despre schimbarea în așteptare pentru membru. Schimbările vor intra în vigoare în **următorul ciclu de facturare** al clientului.

![Pagina de cont care arată banner cu schimbare în așteptare a membrusei](/img/account-page/pending-change.png)

### Ce se întâmplă când un utilizator downgrade-ul planului său {#what-happens-when-a-user-downgrades-their-plan}

Este important de reținut că downgradirea planului nu modifică configurația existentă a subsite-ului utilizatorului.

Nu schimbă automat șablonul site-ului, deoarece schimbarea șablonului site-ului va șterge și reseta complet subsite-ul. Acest lucru se face pentru a evita pierderea neașteptată de date. Deci spațiul pe disc, temele, plugin-urile etc., vor rămâne intacte cu excepția postărilor.

Comprehendemos que tu principal preocupación son los límites y cuotas que estableces bajo cada plan, pero debemos considerar el daño que podría causar al subsitio del usuario si eliminamos o cambiamos alguna de sus configuraciones.

Para las publicaciones que excedan el límite establecido en el plan, tienes 3 opciones diferentes: **Mantener las publicaciones como están** *,* **Mover las publicaciones a la papelera** *,* o **Mover las publicaciones al borrador** *. Puedes configurar esto bajo la configuración de Ultimate Multisite.

![Página de Configuración de Administrador de Red que muestra las opciones cuando se excede el límite de publicaciones](/img/account-page/settings-sites-post-limit.png)

### Qué sucede con el pago {#what-happens-to-the-payment}

En la versión 2.0, ya no es necesario realizar ajustes en cuanto a prorrateo del pago.

Esto se debe a que el sistema esperará a que la membresía existente **complete su ciclo de facturación antes** de que el nuevo plan/membresía entre en vigor. El monto de facturación nuevo para la nueva membresía se aplicará y cargará automáticamente en el próximo ciclo de facturación.
