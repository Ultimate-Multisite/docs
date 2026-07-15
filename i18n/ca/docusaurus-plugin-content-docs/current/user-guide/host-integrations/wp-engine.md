---
title: Integració WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integració amb WP Engine

## Resum {#overview}

WP Engine és una plataforma d'hosting WordPress gestionada premium que proporciona rendiment optimitzat, seguretat i escalabilitat per als sites WordPress. Aquesta integració permet la sincronització automática de domini entre Ultimate Multisite i WP Engine.

## Característiques {#features}
- Sincronització automática de domini
- Soporte de subdomènis per a instal·lacions multisite
- Integració fluida amb els sistemes existents de WP Engine

## Requeriments {#requirements}
L'integració detecta automàticament si està hostejat en WP Engine i utilitza l'API integrada de WP Engine. No es necessita configuració addicional si el plugin WP Engine està actiu i correctament configurat.

Tot i això, si necessites configurar manualment l'integració, pots definir una d'aquestes constantes al teu fitxer `wp-config.php`:

```php
define('WPE_APIKEY', 'te_la_teva_clau_api'); // Mètode preferit
// O
define('WPE_API', 'te_la_teva_clau_api'); // Mètode alternatiu
```

## Instruccions de configuració {#setup-instructions}

### 1. Verifiqued el plugin WP Engine {#1-verify-wp-engine-plugin}

Si estàs hostejat en WP Engine, el plugin WP Engine ja ha de estar instal·lat i activat. Verifica que:

1. El plugin WP Engine estigui actiu
2. El fitxer `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existeixi

### 2. Activa l'integració {#2-enable-the-integration}

1. A la teva administració de WordPress, anomena a Ultimate Multisite > Configuració (Settings)
2. Navega a la pelta "Domain Mapping" (Mapeig de domini)
3. Desplaça fins a "Host Integrations" (Integracions d'host)
4. Activa l'integració WP Engine
5. Clica en "Save Changes" (Guardar canvis)

## Com funciona {#how-it-works}

### Sincronització de domini {#domain-syncing}

Quan es mapeja un domini en Ultimate Multisite:

1. L'integració utilitza l'API de WP Engine per afegir el domini a la teva instal·lació de WP Engine.
2. WP Engine gestiona la configuració del domini i l'emissió del certificat SSL.
3. Quan es elimina una mappatura de domini, l'integració eliminarà el domini de WP Engine.

### Soporte per a Subdomènis {#subdomain-support}

Per instal·lacions multisite amb subdomènis:

1. L'integració afegirà cada subdomèniu a WP Engine quan es cree un nou site.
2. WP Engine gestiona la configuració del subdomèniu.
3. Quan es elimina un site, l'integració eliminarà el subdomèniu de WP Engine.

## Notes Importants {#important-notes}

### Domènis Wildcard (Wildcard Domains) {#wildcard-domains}

Per les instal·lacions multisite amb subdomènis, es recomana contactar el suport de WP Engine per sol·licitar una configuració de domini wildcard. Això permet que tots els subdomènis funcionin automàticament sense necessitat d'afegir-los un per un.

### Certificats SSL {#ssl-certificates}

WP Engine gestiona automàticament l'emissió i la renovació dels certificats SSL per a tots els domènis afegits mitjançant aquesta integració. No es requereix configuració addicional.

## Resolució de Problemes (Troubleshooting) {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Comproveu que el plugin de WP Engine estigui actiu i correctament configurat.
- Si ha definixeu manualment la cleau API, verifique que sigui correcta.
- Contacteu el suport de WP Engine si teniu problemes amb l'API.

### Domini no afegit {#domain-not-added}
- Comproveu els logs d'Ultimate Multisite per qualsevol missatge d'error.
- Verifique que el domini encara no estigui afegit a WP Engine.
- Assoreu que el vostre pla de WP Engine suporti la quantitat de domènis que està afegint.

### Problemes amb subdomènis {#subdomain-issues}
- Si els subdomènis no funcionen, contacta el suport de WP Engine per sol·licitar una configuració de domini comodín (wildcard).
- Comprova que la configuració del teu DNS estigui correctament feta per al domini principal i els subdomènis.
