---
title: Assistència de configuració Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Assistència de configuració de Multisite

Ultimate Multisite inclou un assistència integrat que converteix automàticament una instal·lació estàndard de WordPress en una xarxa WordPress Multisite. Això elimina la necessitat de modificar manualment el `wp-config.php` o d'executar comands de la base de dades.

:::tip
Si la teva instal·lació de WordPress ja està funcionant com una xarxa Multisite, pots saltar aquest pas completament. L'assistència només apareix quan Multisite encara no està habilitat.
:::

## Quan apareix l'assistència? {#when-does-the-wizard-appear}

Quan actives Ultimate Multisite en una instal·lació estàndard (no Multisite) de WordPress, el plugin detecta que Multisite no està habilitat i et redirigeix automàticament a l'Assistència de configuració de Multisite en lloc de l'assistència de configuració regular.

També pots accedir-hi directament a **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prerequisits {#prerequisites}

Abans de executar l'assistència, assegura't de:

- Tenere **accés d'administrador** a la teva instal·lació de WordPress
- Que el fitxer `wp-config.php` del teu servidor sigui **escrivible** pel servidor web
- Tenere una **copia de segure recent** dels teus fitxers i la base de dades

:::warning
L'assistència modifica el teu fitxer `wp-config.php` i crea noves taules de la base de dades. Crea sempre una copia de segure abans de continuar.
:::

## Pas 1: Benvingut {#step-1-welcome}

La primera pantalla explica què és WordPress Multisite i què farà l'assistència:

- Habilitar la funcionalitat Multisite a la configuració de WordPress
- Crear les taules de la base de dades de xarxa necessàries
- Afegir les constants multisite requerides a `wp-config.php`
- Activar la xarxa de Ultimate Multisite a tota la xarxa

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Fes clic a **Continue** per continuar.

## Pas 2: Configuració de la xarxa {#step-2-network-configuration}

Aquest pas et demana que configureris la teva configuració de xarxa.

### Estructura del lloc {#site-structure}

Escull com s'organitzaran els llocs de la teva xarxa:

- **Subdominis** (Recomanat) — Els llocs reben el seu propi subdomini, per exemple, `site1.teudomini.com`
- **Subdirectòries** — Els llocs es creen com a camins, per exemple, `teudomini.com/site1`

:::note
Si esculles subdominis, necessitaràs configurar un DNS de **wildcard** i un certificat SSL de **wildcard** per al teu domini. La majoria dels allotjamentos de WordPress gestionats ho fan automàticament. Consulta [Ultimate Multisite 101](./ultimate-multisite-101) per a una comparativa detallada.
:::

### Títol de la xarxa {#network-title}

Inserta un nom per a la teva xarxa. Per defecte, s'assigna el títol actual del teu lloc amb "Network" afegit. Pots canviar-ho més tard des de la configuració de la xarxa.

### Correu electrònic d'administració de la xarxa {#network-admin-email}

L'adreça de correu electrònic utilitzada per a les notificacions d'administració de la xarxa. Per defecte, és l'adreça de correu electrònic de l'usuari actual.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Després de rellenar els camps, fes clic a **Continue** per continuar.

## Pas 3: Instal·lació {#step-3-installation}

Fes clic al botó **Install** per començar. L'assistència realitza cinc passos automatitzats en seqüència, mostrant el seu progrés en temps real:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Pas | Descripció |
|------|-------------|
| **Enable Multisite** | Afegir la constant `WP_ALLOW_MULTISITE` a `wp-config.php` |
| **Create Network** | Crear les taules de la base de dades multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) i popular-les amb la configuració de la teva xarxa |
| **Update Configuration** | Afegir les constants multisite finals a `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Fix Cookies** | Assegurar que l'URL del lloc és correcta a la metadada de la xarxa per prevenir problemes d'autenticació després de l'activació |
| **Network Activate Plugin** | Activar la xarxa de Ultimate Multisite perquè es faci servir a tota la xarxa |

Cada pas mostra un d'estos estats:

- **Pending** — Esperant ser processat
- **Installing...** — Executant actualment
- **Success!** — Completat amb èxit
- **Error message** — S'ha produït un error (el missatge descriurà el problema)

Quan tots els passos es completin amb èxit, veuràs un estat verd "Success!" per a cada element:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

L'assistència continuarà automàticament a la pantalla de finalització.

## Pas 4: Completar {#step-4-complete}

Quan l'instal·lació es completa, veuràs un missatge de successe que confirma que WordPress Multisite ha estat habilitat.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Ara pots continuar amb l'assistència de configuració de Ultimate Multisite per configurar la teva plataforma WaaS (detalls de l'empresa, contingut predeterminat, passaportes de pagament, etc.).

:::note
Després que l'instal·lació multisite es completi, el teu navegador te rediregirà a través de l'administrador de xarxa nou habilitat. Pot ser que hagis de iniciar sessió de nou, ja que les cookies d'autenticació es canvien per l'entorn multisite.
:::

## Fallback de configuració manual {#manual-setup-fallback}

Si l'assistència no pot escriure al teu fitxer `wp-config.php` (a causa de permisos de fitxer o restriccions del servidor), mostrarà el codi exact que has de d'afegir manualment:

1. Les **constants de `wp-config.php`** que cal afegir per sobre la línia `/* That's all, stop editing! */`
2. Les **reègles de rewrite de .htaccess** adequades per a la estructura de lloc que has triat (subdomini o subdirectori).

Després de fer els canvis manuals, refresca la pàgina i l'assistència detectarà que multisite ja està actiu.

## Solucionar problemes {#troubleshooting}

### L'assistència diu que wp-config.php no és escrivible {#the-wizard-says-wp-configphp-is-not-writable}

El procés del teu servidor web necessita permisos d'escritura al fitxer `wp-config.php`. Pots:

- Canviar temporalment els permisos del fitxer a `644` o `666`
- Utilitzar les instruccions de fallback de configuració manual proporcionades per l'assistència
- Pedir ajuda al teu allotjament.

### Els llocs no són accessibles després de la configuració (subdominis) {#sites-are-not-accessible-after-setup-subdomains}

Si vaig seleccionar l'estructura de subdomini, has de configurar un DNS de **wildcard** per al teu domini. Afafeu un registre DNS:

```
Type: A (o CNAME)
Host: *
Value: [your server IP]
```

Consulta amb el teu allotjament si no estàs segur de com configurar això.

### Problemes d'autenticació després de la configuració {#authentication-issues-after-setup}

Si estàs desconnectat o experimentes errors de cookies després de la configuració multisite:

1. Borra les cookies del teu navegador per al lloc
2. Inicia sessió de nou a `yourdomain.com/wp-login.php`
3. Si el problema persisteix, assegura't que el teu `wp-config.php` no té `COOKIE_DOMAIN` configurat a `false` — aquest és un problema conegut en instal·lacions multisite de subdomini.

### Un pas fallà durant l'instal·lació {#a-step-failed-during-installation}

Si un dels passos d'instal·lació mostra un error:

1. Nota el missatge d'error que s'exhibeix
2. Torna al pas de configuració i intenta de nou
3. Si l'error persisteix, revisa el registre d'errors de PHP del teu servidor per obtenir més detalls
4. Els passos que ja s'han completat es saltaran en les execucions posteriors (l'instal·lador és idempotent)
