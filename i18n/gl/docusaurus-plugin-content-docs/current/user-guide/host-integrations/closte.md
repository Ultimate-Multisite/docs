---
title: Integración Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integración Closte {#closte-integration}

## Visión General {#overview}
Closte é unha plataforma de alojamiento WordPress gestionada construída sobre infraestruturas Google Cloud. Esta integración permite a sincronización automática de domínios e a gestión de certificados SSL entre Ultimate Multisite e Closte.

## Características {#features}
- Sincronización automática de domínios
- Gestión de certificados SSL
- Soporte para dominios *wildcard* (com asterisco)
- Non se necesita configuración se estás a usar Closte

## Requisitos {#requirements}
A constante seguinte debe estar definida no teu ficheiro `wp-config.php` se estás a usar Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'tu_api_key');
```

Esta constante solteempre está definida se estás alojando en Closte.

## Instrución de Configuración {#setup-instructions}

### 1. Verifica a Tua API Key de Closte {#1-verify-your-closte-api-key}

Se estás a alojar en Closte, a constante `CLOSTE_CLIENT_API_KEY` debería estar definida no teu ficheiro `wp-config.php`. Podes verificar isto comprobando o teu ficheiro `wp-config.php`.

### 2. Habilita a Integración {#2-enable-the-integration}

1. No o teu administrador de WordPress, ve a Ultimate Multisite > Settings (Configuración)
2. Navega á pestaña "Domain Mapping" (Mapeo de Dominios)
3. Desplázate hasta "Host Integrations" (Integracións do Alojamento)
4. Habilita a integración Closte
5. Clica en "Save Changes" (Guardar Cambios)

## Como Funciona {#how-it-works}

Cando un dominio se mapea en Ultimate Multisite:

1. A integración envía unha petición á API de Closte para añadir o dominio á túa aplicación
2. Closte gestiona automáticamente a provisión do certificado SSL
3. Cando se remove un mapeo de dominio, a integración removerá o dominio de Closte

A integración tamén funciona con a configuración do intervalo de verificación DNS en Ultimate Multisite, permitindo que configures quami frecuentemente o sistema verifica a propagación DNS e a emisión de certificados SSL.

## Creación de Registo de Dominio {#domain-record-creation}

Esta integración asegura que cuando se crea o duplica un sitio, se cree automáticamente un registro de dominio. Esto es especialmente importante para la integración Closte, ya que la creación del registro de dominio activa la API de Closte para crear el dominio y el certificado SSL.

## Solución de problemas {#troubleshooting}

### Problemas con la conexión a la API {#api-connection-issues}
- Verifica que tu clave API de Closte sea correcta
- Asegúrate de que tu cuenta de Closte tenga los permisos necesarios

### Problemas con el certificado SSL {#ssl-certificate-issues}
- Closte puede tardar un tiempo en emitir certificados SSL (normalmente 5-10 minutos)
- Verifica que tus dominios apunten correctamente a la dirección IP del servidor de Closte
- Comprueba los registros DNS de tu dominio para asegurarte de que están configurados correctamente

### Dominio no añadido {#domain-not-added}
- Revisa los logs de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a Closte
- Asegúrate de que los registros DNS de tu dominio estén configurados correctamente

### Intervalo de verificación DNS {#dns-check-interval}
- Si la emisión de certificados SSL tarda demasiado, puedes ajustar el intervalo de verificación DNS en la configuración de Mapeo de Dominios (Domain Mapping settings)
- El intervalo predeterminado es de 300 segundos (5 minutos), pero puedes configurarlo hasta 10 segundos para una verificación más rápida durante las pruebas
