---
title: Aïsolació Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Aïsolació Multi-Tenància {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 suporta l'aïsol de bases de dades i del sistema de fitxers per subsite per tenants soberans. Això manté els dades dels tenants separats, però conserva la configuració a nivell de xarxa, facturació i administració.

## Estratègia d'aïsol {#isolation-strategy}

Utilitza l'aïsol soberan per als clients que necessiten una separació més forta de dades, un espai de fitxers dedicat o un perímetre d'hipervisor separat.

Cada tenant soberà ha de tenir:

- Una base de dades dedicada o una estratègia de prefix de base de dades aprovada per a l'hipervisor.
- Un radical de sistema de fitxers (filesystem root) dedicat al tenant.
- Una entrada en el registre del tenant que mapeja el site amb la seva base de dades, la ruta radical, el nom d'host i el model d'aïsol.
- Un resultat de verificació de migració abans que el tenant es consideri actiu (live).

## Vinculació a l'hipervisor de la base de dades {#database-host-binding}

La versió 1.2.0 canvia el comportament predefinit de vinculació a l'hipervisor mateix per a les instal·lacions soberanes. Els valors com `localhost` es normalitzen perquè Bedrock, FrankenPHP i les instal·lacions WordPress contenedores puguin concedir i verificar permís contra la cadena d'hipervisor que MySQL ve realment.

Quan configureu un tenant soberà:

1. Estableix l'hipervisor de la base de dades al valor que requereix el runtime del tenant.
2. Utilitza `localhost` per a les instal·lacions de sockets locals quan l'hipervisor espera connexions locals.
3. Utilitza `127.0.0.1` o un nom d'hipervisor de servei només si el servidor de la base de dades concede privilegis a aquest hipervisor.
4. Executa la verificació de migració després de canviar la vinculació a l'hipervisor.

Si la verificació reporta fallides en la concessió, compara els privilegis del usuari de la DB del tenant amb la vinculació configurada a l'hipervisor. Un usuari concedit per a `user@localhost` és diferent d'un `user@127.0.0.1` o `user@%`.

## Radical de sistema de fitxers {#filesystem-root}

La carpeta raíz del inquilino debe ser estable tras reinicios y despliegues. Evita rutas de montaje temporales. Para instalaciones estilo Bedrock, confirma que la raíz del inquilino apunte a la raíz web de WordPress esperada por el bootstrap del inquilino, no solo a la raíz del proyecto.

## Orden de aprovisionament {#provisioning-order}

Para nuevos inquilinos soberanos, utilitza aquest ordre:

1. Crear l'entrada de registre del inquili.
2. Crear la base de dades i l'usuari de la base de dades del inquili.
3. Bootstrapar el esquema del inquili.
4. Aprovisionar els usuaris del inquili.
5. Configurar les eines del sistema de fitxers (filesystem paths) del inquili.
6. Executar la verificació de migració.
7. Canviar la ruta o el DNS després que la verificació passi.

Aquest ordre impedeix que els inquilins parcialment isolats rebutin tràfic abans que el escritor de base de dades, els usuaris i el sistema de fitxers estiguin prontos.

## Fluxos de gestió del client soberan {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 manté les accions de gestió del client al site principal quan es activa el mode soberan. Un inquili encara pot funcionar com una instal·lació WordPress isolada, però les accions orientades al client que dependin de la facturació de xarxa, la membresía o dades de comptes compartits hauria de redirigir el client al site principal en lloc d'intentar completar l'acció dins del temps d'execució del inquili.

El flux del site principal s'aplica a:

- Cambios en el tramit de compra i planificació.
- La visió general de comptes i accions del perfil del client.
- Actualitzacions de l'adreça de facturació i les pantallas de gestió de pagaments.
- Vistes de història de factures i pagaments.
- Accions de gestió del site com afegir o eliminar sites.
- Canvis de plantilla (Template switching).
- Mapeig de domini i canvis de domini principal.

Quan un client comença una de aquestes accions des d'un tenant soberan, Ultimate Multisite construeix l'URL del site principal corresponent i conserva el tenant de origen com a destinació de retorn quan sigui segur fer-ho. Això permet als clients completar l'acció gestionada contra els registres de la xarxa, i després tornar al context del tenant sense duplicar l'estat de facturació o membresia en la base de dades soberana.

Per als operadors, la regla pràctica és: manteniu disponibles les pàgines de facturació, compte, checkout, factura, plantilla i gestió del domini al site principal per a les xarxes soberanes. Els dashboards dels tenants poden enllaçar-se a aquestes pàgines, però el site principal continua sent la font de veritat per a l'acció.
