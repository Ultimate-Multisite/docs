---
title: Integració WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integració amb WPMU DEV {#wpmu-dev-integration}

## Resum {#overview}
WPMU DEV és una plataforma completa de WordPress que ofereix hostings, plugins i serveis per a sites WordPress. Aquesta integració permet la sincronització automática de domini i la gestió de certificats SSL entre Ultimate Multisite i l'hosting de WPMU DEV.

## Característiques {#features}
- Sincronització automática de domini
- Gestió de certificats SSL
- Tentatives ampliades de verificació de certificats SSL

## Requeriments {#requirements}
L'integració detecta automàticament si està hosteant en WPMU DEV i utilitza l'API integrada. No es necessita configuració addicional si estàs hosteant en WPMU DEV.

L'integració comprueba la presència de la constant `WPMUDEV_HOSTING_SITE_ID`, que es defineix automàticament quan es hosteja en WPMU DEV.

## Instruccions de configuració {#setup-instructions}

### 1. Verifiquen l'hosting amb WPMU DEV {#1-verify-wpmu-dev-hosting}

Si estàs hosteant en WPMU DEV, les constantes necessàries ja han estat definides. Verifique que:

1. La constant `WPMUDEV_HOSTING_SITE_ID` estigui definida en el vostre entorn
2. Teniu una membresía activa de WPMU DEV amb accés a l'API

### 2. Activen l'integració {#2-enable-the-integration}

1. A l'administració de WordPress, navegueu a Ultimate Multisite > Configuració (Settings)
2. Navegueu a la pelta "Domain Mapping" (Mapeig de domini)
3. Desplaueu fins a "Host Integrations" (Integracions d'hostings)
4. Activen l'integració WPMU DEV
5. Clicueu en "Save Changes" (Guardar canvis)

## Com funciona {#how-it-works}

### Sincronització de domini {#domain-syncing}

Quan es mapeja un domini en Ultimate Multisite:

1. L'integració utilitza l'API de WPMU DEV per afegir el domini a la teva compte d'hosting.
2. També afegirà automàticament la versió www del domini.
3. WPMU DEV es encarrega de la configuració del domini i l'emissió del certificat SSL.

### Gestió del Certificat SSL {#ssl-certificate-management}

L'integració està configurada per aumentar el nombre de tentatives de verificació del certificat SSL per a l'hosting de WPMU DEV, ja que pot prendre temps que es emissin i instalin els certificats SSL. Per par défaut, intentaran fins a 10 vegades la verificació del certificat SSL, comparat amb les 5 tentatives estàndard.

## Notes Importants {#important-notes}

### Eliminació de Domini {#domain-removal}

Actualmente, l'API de WPMU DEV no proporciona una manera de eliminar domini. Quan es elimina una mappatura de domini en Ultimate Multisite, el domini continuarà dins de la teva compte d'hosting de WPMU DEV. Si és necessari, cal que ho elimines manualment des del dashboard d'hosting de WPMU DEV.

### Autenticació API {#api-authentication}

L'integració utilitza la cleau API de WPMU DEV que es guarda en la base de dades de WordPress com l'opció `wpmudev_apikey`. Això es configura automàticament quan connectes el teu site a WPMU DEV.

## Problemes Comuns (Troubleshooting) {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Verifica que el teu site està correctament connectat a WPMU DEV.
- Comprova que l'opció `wpmudev_apikey` estigui configurada en la teva base de dades de WordPress.
- Assure't que la teva membresía de WPMU DEV estigui activa.

### Problemes amb el certificat SSL {#ssl-certificate-issues}
- WPMU DEV pot prendre un temps per emitir certificats SSL (normalment de 5 a 15 minuts).
- La integració està configurada per revisar fins a 10 vegades els certificats SSL.
- Si encara no es emiten els certificats SSL després de múltiples intents, contacta el suport de WPMU DEV.

### Dominio no afegit {#domain-not-added}
- Revisa els logs d'Ultimate Multisite per veure si hi ha missatges d'error.
- Verifica que el domini no estigui ja afegit a WPMU DEV.
- Assure't que el teu pla d'hosting de WPMU DEV suporti la quantitat de dominis que estàs afegint.
