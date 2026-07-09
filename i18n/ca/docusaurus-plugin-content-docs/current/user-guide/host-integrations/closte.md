---
title: Integració Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integració amb Closte {#closte-integration}

## Resum {#overview}
Closte és una plataforma d'hosting de WordPress gestionada i construïda sobre l'infraestructura de Google Cloud. Aquesta integració permet la sincronització automàtica de domini i la gestió de certificats SSL entre Ultimate Multisite i Closte.

## Funcionalitats {#features}
- Sincronització automàtica de domini
- Gestió de certificats SSL
- Suport per dominis *wildcard*
- No cal configurar si es fa servir en Closte

## Requisits {#requirements}
Cal definir la constant següent en el teu fitxer `wp-config.php` si estàs utilitzant Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Normalment, aquesta constant ja està definida si estàs allotjant (hosting) en Closte.

## Instruccions de configuració {#setup-instructions}

### 1. Verifiqua la teva clau API de Closte {#1-verify-your-closte-api-key}

Si estàs allotjant (hosting) en Closte, la constant `CLOSTE_CLIENT_API_KEY` ja hauria de estar definida al teu fitxer `wp-config.php`. Pots verificar-ho revisant el teu fitxer `wp-config.php`.

### 2. Habilitar l'integració {#2-enable-the-integration}

1. A l'administració de WordPress, veu a Ultimate Multisite > Configuració
2. Navega a la pestanya "Domain Mapping"
3. Desplaça-te fins a "Host Integrations"
4. Habilita l'integració de Closte
5. Clica en "Save Changes"

## Com funciona {#how-it-works}

Quan es mapeja un domini a Ultimate Multisite:

1. L'integració envia una sol·licitud a l'API de Closte per afegir el domini a la teva aplicació
2. Closte gestiona automàticament el proporcionament (provisioning) del certificat SSL
3. Quan es elimina un mapege de domini, l'integració eliminarà el domini de Closte

L'integració també funciona amb la configuració de interval de revisió de DNS (DNS check interval) a Ultimate Multisite, cosa que et permet configurar la freqüència amb què el sistema revisa la propagació de DNS i l'emissió del certificat SSL.

## Creació de registres de domini {#domain-record-creation}

Aquesta integració garanteix que quan es crea o es duplica un lloc web, es crei automàticament un registre de domini. Això és especialment important per a l'integració de Closte, ja que la creació del registre de domini activa l'API de Closte per crear el domini i el certificat SSL.

## Solucionar problemes {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Verifica que la teva clau API de Closte sigui correcta
- Assegura't que la teva compte de Closte té els permisos necessaris

### Problemes amb el certificat SSL {#ssl-certificate-issues}
- Closte pot trigar una mica a emetre certificats SSL (normalment 5-10 minuts)
- Verifica que els teus dominis apunten correctament a l'adreça IP del servidor de Closte
- Comprova els registres DNS del teu domini per assegurar-te que estan configurats correctament

### Domini no afegit {#domain-not-added}
- Comprova els registres (logs) d'Ultimate Multisite per detectar qualsevol missatge d'error
- Verifica que el domini no estigui ja afegit a Closte
- Assegura't que els registres DNS del teu domini estan configurats correctament

### Interval de revisió DNS {#dns-check-interval}
- Si els certificats SSL triguen massa amb el temps, pots ajustar l'interval de revisió DNS a la configuració de Mapege de domini.
- L'interval predeterminat és de 300 segons (5 minuts), però pots configurar-lo tan baix com 10 segons per a una revisió més ràpida durant les proves.
