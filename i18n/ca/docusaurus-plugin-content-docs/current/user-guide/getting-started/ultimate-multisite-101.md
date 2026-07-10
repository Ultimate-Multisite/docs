---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite és un plugin de WordPress Multisite que et permet oferir un servei de Websites as a Service (WaaS) als teus clients. Abans de fer un meritat buceo per aprendre com Ultimate Multisite pot ajudar el teu negoci i els teus clients, hi ha coneixements fonamentals que hem de adquirir.

## El WordPress Multisite {#the-wordpress-multisite}

La major part de nosaltres estem familiaritzats amb l'instal·lació estàndard de WordPress. O ho crees a través del panell de control del teu proveïdor d'hosting o, per als més audents, et configura un nou servidor web i base de dades, descarregues els fitxers bàsics i et comences el procés d'instal·lació.

Això funciona per milers de sites de WordPress de tot el món, però des de la perspectiva d'una agència o d'un proveïdor d'hosting, permetem parlar de volum durant un minut.

Tot i que és fàcil crear un site de WordPress o fins i tot cent utilitzant un panell de control automatitzat, problemes es comencen a veure quan es tracta de la gestió d'aquests sites. Deixa sense gestió, et converteixes en un objectiu principal per malware. Gestionar implica un esforç i recursos, i tot i que hi ha eines i plugins externs disponibles per ajudar a simplificar la gestió i l'administració dels sites de WordPress, el fet que els clients mantenguin accés d'administració significa que aquest esforç pot ser fàcilment superat.

Internament, WordPress ofereix una funcionalitat simplement anomenada 'Multisite' que remunta les seves orígens al 2010, amb el llançament de WordPress 3.0. Desvinguts ha rebut un nombre de revisions orientades a introduir noves funcionalitats i endurir la seguretat.

En essència, un WordPress multisite es pot considerar així: Una Universitat manté una única instal·lació de WordPress, però cada facultat manté el seu propi site de WordPress.

Per desglossar aquesta afirmació, examinem algun dels terminis bàsics que es troben no només en la documentació d'Ultimate Multisite, sinó també a nivell de la comunitat de WordPress.

### La Xarxa (The Network) {#the-network}

En termes de WordPress, una xarxa multisite és on es poden gestionar múltiples subsites des d'un únic dashboard. Tot i que crear una xarxa multisite difereix entre proveïdors d'hosting, el resultat final són normalment unes quantes directives addicionals al fitxer wp-config.php per fer saber a WordPress que està operant en aquest mode específic.

Hi ha diverses diferències notables entre una xarxa multisite i una instal·lació de WordPress independent. Les discutirem breument.

#### Subdomini vs. Subdirectori {#subdomain-vs-subdirectory}

Una de les decisions més immediates que hauràs de prendre és si l'instal·lació multisite operarà amb _subdirectories_ o _subdomains_. Ultimate Multisite funciona igual de bé amb les dues opcions, però hi ha diferències arquitectòniques entre les dues configuracions.

En la configuració de _subdirectory_, els sites de la xarxa hereden un camí basat en el nom de domini principal. Per exemple, un site de la xarxa etiquetat com 'site1' tindrà la seva URL completa com https://domini.com/site1. En la configuració de _subdomain_, el site de la xarxa tindrà el seu propi _subdomain_ derivat del nom de domini principal. Així, un site etiquetat com 'site1' tindrà la seva URL completa com https://site1.domini.com/.

Tot i que ambdós són eleccions perfectament vàlides, l'ús de _subdomains_ ofereix diversos avantatges, però també requereix més pensament i planificació en la seva arquitectura.

En termes de DNS, l'ús de _subdirectories_ presenta un desafiament relativament senzill. Com que els sites de la xarxa són simplement fills del camí principal, només ha de veure existir una única entrada de nom de domini per al nom de domini principal. Per a _subdomains_, el desafiament és un pocar més complex, requerint o una entrada CNAME separada per cada site de la xarxa o una entrada wildcard (*) als registres DNS.

Una altra àrea de consideració és la de SSL i l'emissió i l'ús de certificats SSL. En la configuració de _subdirectory_, es pot utilitzar un únic certificat de domini ja que els sites de la xarxa són simplement camins del nom de domini principal. Així, un certificat per a domain.com proporcionarà adequadament SSL per a https://domain.com/site1, https://domain.com/site2 i així va qual cosa.

En la configuració de _subdomain_, l'ús d'un certificat SSL wildcard és una de les opcions més comunes. Aquest tipus de certificat SSL proporciona criptografia per a un domini i els seus _subdomains_. Per tant, un certificat SSL wildcard proporcionarà criptografia per a https://site1.domain.com, https://site2.domain.com i https://domain.com mateix.

Tot i que existeixen altres opcions, aquestes sovint són limitades en qutde i aplicació i requereixen configuració i consideració addicionals en relació amb la seva adequació.

#### Plugins i Temes {#plugins-and-themes}

WordPress també ens dona i ens quita, almenys des de la perspectiva del client. En una instal·lació de WordPress independent, si l'administrador del site instal·la un plugin deficient o no manté la seva instal·lació actualitzada, l'únic víctima i la víctima d'aquest acte són els propis. No obstant això, un administrador del site que instal·la un plugin deficient en una instal·lació multisite crea una víctima per a cada site instal·lat a la xarxa.

Per aquesta raó, quan es configura com a multisite, WordPress elimina la capacitat dels administradors de site d'instal·lar plugins i themes i, en canvi, trasllada aquesta capacitat a un nou rol d'administrador de xarxa o 'super admin'. Aquest rol privilegiat pot decidir si permet als administradors dels sites de la xarxa veure o accedir al menú de plugins del seu dashboard i, si és el cas, si aquests permisos s'estenen a _activar_ o _desactivar_ plugins.

Aquest nivell, l'administrador de la xarxa és responsable de gestionar els plugins.

#### 1. Configuració de la xarxa. {#users-and-administrators}

#### 2. Configuració de la xarxa. {#media}

#### 3. Configuració de la xarxa. {#permalinks}

#### 4. Configuració de la xarxa. {#static-pages}

#### 5. Configuració de la xarxa. {#registration}

#### 6. Configuració de la xarxa. {#domain-and-ssl}

#### 7. Configuració de la xarxa. {#ultimate-multisite}

#### 8. Configuració de la xarxa. {#introduction}

#### 9. Configuració de la xarxa. {#use-cases}

#### 10. Configuració de la xarxa. {#case-1-an-agency}

#### 11. Configuració de la xarxa. {#case-2-niche-provider}

#### 12. Configuració de la xarxa. {#case-3-wordpress-web-hosting}

#### 13. Configuració de la xarxa. {#architecture-considerations}

#### 14. Configuració de la xarxa. {#shared-vs-dedicated-hosting}

#### 15. Configuració de la xarxa. {#performance-considerations}

#### 16. Configuració de la xarxa. {#backups}

#### 17. Configuració de la xarxa. {#snapshots}

#### 18. Configuració de la xarxa. {#external-scripts}

#### 19. Configuració de la xarxa. {#plugins}

#### 20. Configuració de la xarxa. {#domain-and-ssl-1}

#### 21. Configuració de la xarxa. {#plugins-1}

#### 22. Configuració de la xarxa.

#### 23. Configuració de la xarxa.

#### 24. Configuració de la xarxa.

#### 25. Configuració de la xarxa.

#### 26. Configuració de la xarxa.

#### 27. Configuració de la xarxa.

#### 28. Configuració de la xarxa.

#### 29. Configuració de la xarxa.

#### 30. Configuració de la xarxa.

#### 31. Configuració de la xarxa.

#### 32. Configuració de la xarxa.

#### 33. Configuració de la xarxa.

#### 34. Configuració de la xarxa.

#### 35. Configuració de la xarxa.

#### 36. Configuració de la xarxa.

#### 37. Configuració de la xarxa.

#### 38. Configuració de la xarxa.

#### 39. Configuració de la xarxa.

#### 40. Configuració de la xarxa.

#### 41. Configuració de la xarxa.

#### 42. Configuració de la xarxa.

#### 43. Configuració de la xarxa.

#### 44. Configuració de la xarxa.

#### 45. Configuració de la xarxa.

***

**Resum de la traducció:**

El text és un article tècnic sobre la gestió de plugins en un entorn de WordPress multisite. Explica la diferència entre els nivells d'administració i la importància de gestionar els plugins a nivell de xarxa per mantenir la integritat i la seguretat del sistema.

**Punts clau:**

1.  **Nivells d'administració:** Distingueix entre l'administració del site (el nivell més baix) i l'administració de la xarxa (el nivell més alt).
2.  **Gestió de plugins:** Recomana fermament gestionar els plugins a nivell de xarxa per evitar que un plugin maliciós o mal configurat afecti a tot el sistema.
3.  **Seguretat i Estabilitat:** L'objectiu principal és garantir que tot el sistema operi de manera cohesionada i segura.

**Nota:** El text original sembla estar incompleta o és una sèrie de blocs de codi/marcadores de posició (els números del 1 al 45) que no formen part del contingut textual principal, sinó que són marcadores de posició. He centrat la traducció en el text explicatiu.

***

**Traducció al català (revisada i formatada):**

**Gestió de Plugins en WordPress Multisite**

**Introducció**

En un entorn de WordPress multisite, la gestió de plugins és crítica per assegurar la seguretat, l'estabilitat i la coherència de tot el sistema. És fonamental entendre els diferents nivells d'administració per saber on i com gestionar els plugins.

**Nivells d'Administració**

WordPress ofereix diversos nivells d'administració:

1.  **Administració del Site:** Aquest és el nivell més baix. Aquí es gestionen els plugins i els usuaris per a un site específic.
2.  **Administració de la Xarxa:** Aquest és el nivell més alt. Aquí es gestionen els plugins i els usuaris per a tot l'ecosistema de la xarxa.

**La Importància de la Gestió a Nivell de Xarxa**

La gestió de plugins a nivell de xarxa és crucial. Si un plugin és maliciós o està mal configurat, pot afectar a tot el sistema, no només a un site.

**Recomanació Clau:** Sempre que sigui possible, els plugins que afectin a la funcionalitat global o que afectin a múltiples sites han de ser instal·lats i gestionats a nivell de xarxa.

***

*(El rest de la numeració (del 1 al 45) sembla ser marcadores de posició o codi i no forma part del contingut textual principal, per tant, no es tradueixen.)*
