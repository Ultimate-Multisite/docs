---
title: Cerca i substitució automàtiques a les plantilles del lloc
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Cerca i substitució automàtiques a les plantilles de lloc (v2)

_**Aquest tutorial requereix WP UItimo versió 2.x.**_

Una de les funcionalitats més potents de Ultimate Multisite és la capacitat d’afegir camps arbitraris de text, color i selecció al formulari de registre. Un cop tinguem aquestes dades capturades, les podem utilitzar per preomplir el contingut en certes parts de la plantilla de lloc seleccionada. Després, quan es publiqui el nou lloc, Ultimate Multisite substituirà els marcadors de posició per la informació real introduïda durant el registre.

Per exemple, pots crear els teus llocs de plantilla amb marcadors de posició. Els marcadors de posició s’han d’afegir envoltats per claus dobles: {{placeholder_name}}.

Després, simplement pots afegir un camp de registre coincident per capturar aquestes dades

Aleshores, el teu client podrà omplir aquest camp durant el registre.

Ultimate Multisite substituirà automàticament els marcadors de posició per les dades proporcionades pel client.

## **Resoldre el problema de la "plantilla plena de marcadors de posició"** {#solving-the-template-full-of-placeholders-problem}

Tot això està molt bé, però ens trobem amb un problema poc atractiu: ara les nostres plantilles de lloc —que poden visitar els nostres clients— són plenes de marcadors de posició lletjos que no diuen gaire.

Per resoldre-ho, oferim l’opció d’establir valors ficticis per als marcadors de posició, i utilitzem aquests valors per cercar i substituir-ne el contingut als llocs de plantilla mentre els teus clients els visiten.

Pots accedir a l’editor de marcadors de posició de plantilla anant a **Ultimate Multisite > Settings > Sites**, desplaçant-te fins a l’àrea Opcions de plantilla de lloc, i després fent clic a l’enllaç **Edit Placeholders**.

![Àrea Opcions de plantilla de lloc a la pàgina de configuració de Sites](/img/config/settings-sites-templates-section.png)

Això et portarà a l’editor de contingut dels marcadors de posició, on pots afegir marcadors de posició i el seu contingut respectiu.

![Punt d’entrada de l’editor de marcadors de posició de plantilla](/img/config/settings-sites-templates-section.png)
