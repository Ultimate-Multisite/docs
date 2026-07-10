---
title: Eithaf Fael Error
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erruon yn Cyflwyniad y Fael {#error-installing-the-sunrise-file}

Mae'r fyliau `sunrise.php` yn fyliau specialol sy mae WordPress yn ceisio chwilio gyda'i hun wrth ei ddefnyddio. I fod WordPress yn gallu gweld y fyliau `sunrise.php`, angen i fod wedi'i lleoli yn y **folder wp-content**.

Pan mae'ch Ultimate Multisite yn cael ei gyflwyno ac ydych chi yn mynd trwy'r gweithgwrdd setffol fel y un sy mae ar y llwybr, mae Ultimate Multisite yn ceisio copio'r fyliau `sunrise.php` ein i'r folder wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Yn rhaneddau llawer o gyfyngedig, byddwn yn gallu copio'r fyliau a bydd pob hyn yn gweithio'n dda. Fodd bynnag, os oes rhywbeth nid yw wedi'i setefol'n iawn (fel amgylchedd y folder, er enghasz), gallwch dod i'r sefyllfa lle mae Ultimate Multisite yn anodd copio'r fyliau.

Os ydych chi'n gweld y message erru Ultimo sy'n rhoi i chi, byddwch yn weld bod hyn yn digwydd yma: **Sunrise copy failed** (Mae copio'r Sunrise wedi cael ei ddefnyddio).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

I ffurfio hyn, gallwch eithaf copio'r fyliau `sunrise.php` yn ymlaen yn y folder plugin wp-ultimo ac i'w gael yn llwybr i'r folder wp-content. Ar ôl hynny, reolwch y gweithgwrdd y peidiad a fydd ychwanegau byddai'n ddefnyddio'n iawn.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Yn gwirioneddol, gall hyn ei fod yn angen i'r chec am ymlaen o gyflwyniad y gylch ymlaen o'ch amgylchedd y folder i ddarganfod anwy'n cael problemau yn y dyfodol (nid dim ond gyda Ultimate Multisite ond hefyd gyda pluginau a theimau eraill).

Mae'r **Health Check tool** sy mae'n yn gymharu â WordPress (gallwch ei cyffredin trwy'r panel amgylchedd main eich site **admin panel > Tools > Health Check**) yn gallu gaelch chi i weleiddio os oes gennych amgylchedd y folder wedi'i setefol ar gaelau sydd e potential i'i golygu problemau gyda WordPress.

<!-- Gwrthau'r llwybr: Tydawg o'r fwygyrau o'r dos -->
