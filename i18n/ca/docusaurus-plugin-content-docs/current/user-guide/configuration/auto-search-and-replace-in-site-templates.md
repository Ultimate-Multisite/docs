---
title: Auto Search and Replace en les plantilles del lloc web
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Cercar i Substituir Automàticament en les Plantilles de Site (v2)

_**Aquest tutorial requereix la versió 2.x de WP UItimo.**_

Una de les funcionalitats més potents d'Ultimate Multisite és la capacitat de mónar text, color i camps de selecció arbitraris al formulari de registre. Una vegada que hem capturat aquests dades, podem utilitzar-los per pre-rellenar el contingut en certes parts de la plantilla de site seleccionada. Després, quan el nou site es publiqui, Ultimate Multisite substituirà els placeholders per la informació real introduïda durant el registre.

Per exemple, podeu crear les vostres plantilles de site amb placeholders. Els placeholders han de portar-se entre doble llaves — {{placeholder_name}}.

Després, només ha demanar un camp de registre que faci match per capturar aquestes dades.

El vostre client podrà omplir aquest camp durant el registre.

Ultimate Multisite substituirà aleshores els placeholders amb les dades proporcionades pel client de manera automàtica.

## **Resoldre el problema de la "plantilla plena de placeholders"**

Tot això és genial, però ens trobem amb un problema desagradable: ara les nostres plantilles de site — que poden ser visitades pels nostres clients — estan plenes de placeholders fequins que no diuen res.

Per resoldre-ho, ofereixem la opció de configurar valors falsos per als placeholders, i utilitzem aquests valors per buscar i substituir el seu contingut a les plantilles de site mentre els vostres clients estan visitant.

Podeu accedir a l'editor de placeholders de la plantilla navegant a **Ultimate Multisite > Settings > Sites** i, després, a la barra lateral, fent clic al enllaç Edit Placeholders.

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

Això us portarà a l'editor de contingut dels placeholders, on podeu afegir placeholders i el seu respectiu contingut.

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
