---
title: Comprendre el Panell de Control
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Comprendre el Panell de Control d'Ultimate Multisite {#understanding-the-ultimate-multisite-dashboard}

Abans de mergar-nos en opcions de configuració més avançades i els aspectes operacionals d'Ultimate Multisite, veiem el panell de control.

Com molts plugins de WordPress, Ultimate Multisite crea una entrada de menú a nivell de xarxa titulada **Ultimate Multisite** amb una sèrie de submenús a continuació.

## Widgets del Panell de Control de la Xarxa {#network-dashboard-widgets}

Ultimate Multisite afegeu alguns widgets útils al panell de control de la xarxa. A aquest panell s'hi accedeix navegant a **My Sites → Network Admin → Dashboard**. Els widgets estan dissenyats per proporcionar un accés fàcil a la informació i a les operacions més comunes per a l'administrador de la xarxa.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Primeres Passades {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Aquest widget apareix en una instal·lació fresca d'Ultimate Multisite i recorda a l'administrador de la xarxa que ha de completar tasques addicionals, com configurar un mòd usiu de pagament i crear un compte de prova.

### Resum {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

El widget de Resum informa sobre el nombre d'inscripcions i el seu rendiment del dia. L'MRR (Monthly Recurring Revenue) indica un total projectat entre els clients amb membresdiess que generen rendiment.

### Flux d'Activitats {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Aquest widget informa sobre els esdeveniments de tot Ultimate Multisite. Els esdeveniments inclouen inscripcions, cancel·lacions, creació de sites, eliminacions i altres activitats.

Consulta la secció d'Esdeveniments de la documentació per a una descripció més detallada.

### Ara {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Aquest widget utilitzador mostra un resum curt d'usuàri i sites a la xarxa. Els atllats pràctics en la part superior permeten accedir amb un clic per crear nous sites o usuaris.

### Notícies i Discussió {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Aquest widget recupera i mostra les últimes notícies d'Ultimate Multisite. Està vigilant aquest widget per informació sobre actualitzacions, bugs crítics i correccions de seguretat.

## Panell de Control d'Ultimate Multisite {#ultimate-multisite-dashboard}

Si el panell de control de la xarxa presenta informació global sobre la xarxa, el panell de control d'Ultimate Multisite (situat a nivell superior del menú d'Ultimate Multisite) presenta informació sobre el servei.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Creixement del Rendiment Mensual Recurrent {#monthly-recurring-revenue-growth}

El diagrama de MRR (Monthly Recurring Revenue) mostra una descomposició mensual del rendiment durant un període de calendari de 12 mesos.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

El nou rendiment es registra en blau mentre que les cancel·lacions es reflecten en vermell.

### Suport de Interval de Dates {#date-range-support}

Depenent del nombre de clients i l'activitat, les estadístiques poden resultar excessives. El suport d'interval de dates integrat al panell de control permet a l'administrador de la xarxa centrar-se només en la informació i el període de temps necessari.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

L'interval de dates governa el període de la informació mostrada pels widgets directament a continuació, incloent rendiment, noves membresdiess, inscripcions per país, inscripcions per formulari i els sites més visitats.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Per fer funcionar el widget de **Sites més visitats**, activa el comptador de visites en **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
