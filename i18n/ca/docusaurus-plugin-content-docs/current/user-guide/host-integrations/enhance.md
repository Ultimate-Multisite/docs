---
title: Millorar la integració del painel de control
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Millorar la integració amb el painel de control

## Resum
Enhance és un painel de control modern que ofereix potents habilitats d'automatització i gestió d'hiestori. Aquesta integració permet la sincronització automática de domènis i la gestió de certificats SSL entre Ultimate Multisite i el Painel de Control Enhance.

**Discussió relacionada:** Consulta [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) per obtenir consells de la comunitat i informació addicional.

## Característiques
- Sincronització automática de domènis quan es mapejen en Ultimate Multisite
- Provisió automática de certificats SSL a través de LetsEncrypt quan el DNS se resuelva
- Soporte per a subdomènis per a xarxes que funcionen en mode subdomini
- Eliminació del domèni quan es eliminen els mapejs
- Test de connexió per verificar les credencials API

## Requeriments

### Requeriments del sistema
- Painel de control Enhance instal·lat i accessible
- Instalació WordPress Multisite hiestorada o connectada a un servidor Enhance
- Servidor web Apache (Enhance suporta configuracions d'Apache; LiteSpeed Enterprise està disponible a costos reduïts)

### Accés API
Has de tenir accés d'administrador al Painel de Control Enhance per crear tokens API.

## Obtenció de les teves credencials API

### 1. Crear un token API

1. Clogge en el teu Panel de Control Enhance com a permís d'administrador
2. Clic sobre **Settings** (Configuració) al menú de navegació
3. Navega fins a **Access Tokens** (Tokens d'Accés)
4. Clic sobre **Create Token** (Crear Token)
5. Dà un nom descriptiu al token (per exemple, "Ultimate Multisite Integration")
6. Assigna el rol de **System Administrator** (Administrador del Sistema)
7. Per a la data d'expiració:
   - Deixa buit si vols que el token mai expiri
   - O fixa una data d'expiració específica per a propòs de seguretat
8. Clic sobre **Create** (Crear)

Després de crear-lo, es mostrarà el teu **Access Token** i l'**Organization ID**. **Guarda aquestes informacions immediatament**, ja que el token només es mostrarà una vegada.

### 2. Obtén el teu Organization ID

L'Organization ID s'affiche a la pàgina de Access Tokens en una caixa d'informació blau etiquetada com "Org ID: {your_id}".

L'Organization ID és un UUID formatat com a següent: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

També pots trobar l'Organization ID d'un client fent el següent:
1. Ve a la pàgina **Customers** (Clients)
2. Clic sobre **Manage customer** (Gestionar client) per al client corresponent
3. Mira a la URL - l'Organization ID són els caràcters alfanòmics que seguien `/customers/`

### 3. Obtén el teu Server ID

Per trobar el teu Server ID (necessari per a les operacions del domini):

1. Al Panel de Control Enhance, navega fins a **Servers** (Serveix)
2. Clic sobre el servidor on està instal·lat el teu WordPress
3. El Server ID (format UUID) serà visible en la URL o als detalls del servidor
4. Alternativament, pots utilitzar l'API per listar els serveis:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

L'ID du serveur suit le format UUID: `00000000-0000-0000-0000-000000000000`

### 4. Obtén l'URL de ta API

L'URL de la ta API és l'URL del teu Painel de Control d'Enhancement amb `/api/` afegit:

```
https://your-enhance-panel.com/api/
```

**Important:** El camí `/api/` és obligatori. Errors comuns inclouen:
- Utilitzar només el domini sense `/api/`
- Utilitzar HTTP en lloc de HTTPS (HTTPS és necessari per la seguretat)

## Configuració

### Constantes requerides

Afegeix les següents constantes al teu fitxer `wp-config.php`:

```php
// Integració amb el Painel de Control d'Enhancement
define('WU_ENHANCE_API_TOKEN', 'teu-token-bearer-aquí');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'tu-uuid-del-serveur-aquí');
```

### Configuració mitjançant el Wizard d'Integració

1. A l'administració de WordPress, anar a **Ultimate Multisite** > **Settings** (Configuració)
2. Navegar a la pestaña **Integrations** (Integracions)
3. Trobar **Enhance Control Panel Integration** i fer clic en **Configuration** (Configuració)
4. El wizard t'indicarà el camí:
   - **Pass 1:** Introducció i resum de les funcions
   - **Pass 2:** Introduir els teus credencials d'API (Token, URL API, ID del servidor)
   - **Pass 3:** Probar la connexió
   - **Pass 4:** Revisar i activar

Pots en què pots triar:
- Deixar que el wizard injecti les constantes al teu fitxer `wp-config.php` automàticament
- Copiar les definicions de constant i afegir-les manualment

## Configuració Adicional de WordPress

Basat en la retroalimentació de la comunitat ([Discussió #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), podes necessitar configurar aquestes configuracions addicionals:

### Configuració de .htaccess

Si tens problemes amb el mapeig de domini:
1. Elimina el fitxer `.htaccess` original d'Enhance
2. Substituïu-lo pel fitxer estàndard de WordPress Multisite `.htaccess`

### Constantes de Cookie

Afegeix aquestes constantes a `wp-config.php` per assegurar un tractament correcte de les cookies entre domini mapejats:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Com Funciona

### Quan es Mapeia un Dominio

1. Un usu mappa un domini personalitzat en Ultimate Multisite (o es crea un nou site en mode de subdomini)
2. L'integració envia una petició POST a l'API d'Enhance: `/servers/{server_id}/domains`
3. Enhance afegirà el domini a la configuració del teu servidor
4. Quan el DNS es resuelva al teu servidor, Enhance provisorà automàticament un certificat SSL mitjançant LetsEncrypt
5. El domini es farà actiu amb HTTPS

### Quan es Repara un Dominio

1. S'elimina un mapeig de domini en Ultimate Multisite
2. Les queries d'integració Enhance per trobar l'ID del domini
3. Es envia una petició DELETE a: `/servers/{server_id}/domains/{domain_id}`
4. Enhance elimina el domini de la configuració del teu servidor

### Comprobació de DNS i SSL

Ultimate Multisite inclou verificacions de DNS i SSL integrades:
- Pots configurar l'interval de verificació en **Domain Mapping Settings** (default: 300 segons/5 minuts)
- El sistema verifica la propagació del DNS abans de marcar un domini com a actiu
- La validesa del certificat SSL es comprueba automàticament
- Enhance gestiona el provisionament SSL automàticament, així que no és necessari configurar el SSL manualment

## Verificació de la Configuració

### Probar la Conexió

1. A l'Assistència d'Integració (Integration Wizard), utilitza el pas **Test Connection**
2. El plugin intentarà listar els dominis del teu servidor
3. Un missatge de èxit confirma que:
   - Les credencials API són correctes
   - L'URL API és accessible
   - L'ID del servidor és màrítim (valid)
   - Els permisos estan correctament setats

### Després d'Mapejar un Domini

1. Mapeja un domini de prova en Ultimate Multisite
2. Comprova els logs de Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifica al Panel de Control d'Enhance que el domini va ser afegit:
   - Ve a **Servers** > **El teu Servidor** > **Domains**
   - El nou domini hauria de apareix en la llista
4. Una vegada el DNS es propaga, verifica que el SSL s'ha provisionat automàticament

## Problemes Comuns (Troubleshooting)

### Problemes amb la Conexió API

**Error: "No es possible connectar a l'API d'Enhance"**
- Comprueba que `WU_ENHANCE_API_URL` inclue `/api/` al final
- Assureu que estàs utilitzant HTTPS, no HTTP
- Comprova que el panel d'Enhance és accessible des del teu servidor WordPress
- Verifica que no hi haguin regles de firewall que bloqueجين la connexió

**Error: "Token API d'Enhance no trobat"**
- Assureu que `WU_ENHANCE_API_TOKEN` està definit en `wp-config.php`
- Comprova que el token no s'ha eliminat ni ha caducat en Enhance
- Comprueba si hi ha tancaments (typos) en el valor del token

**Error: "L'ID del servidor no està configurat"**
- Comprova que `WU_ENHANCE_SERVER_ID` està definit en `wp-config.php`
- Assureu que l'ID del servidor és un format UUID màximament valídic
- Confirma que el servidor existeix al teu panel d'Enhance

### Dominio no afegit

**Comprova els logs:**
1. Ve a **Ultimate Multisite** > **Logs**
2. Filtra per **integration-enhance**
3. Busca missatges d'error que indiquin el problema

**Causes comunes:**
- Format de nom de domini invalideix
- El domini ja existeix en Enhance
- Permisos API insuficients (assegura que el token té el rol de System Administrator)
- L'ID del servidor no coincide amb el servidor real en Enhance

### Problemes amb el certificat SSL

**El SSL no es provisiona:**
- Comprova que el DNS apunta a l'adreç IP del teu servidor
- Comprova que el domini es resuelva correctament: `nslookup yourdomain.com`
- Enhance requereix que el DNS es ressolvi abans de poder provisionar el SSL
- La provision de SSL normalment tarda 5-10 min després de la propagació del DNS
- Comprova els logs del Panel de Control d'Enhance per a errors específics de SSL

**Solucionar problemas de SSL manual en Enhance:**
1. Ve a **Servers** > **Your Server** > **Domains**
2. Busca tu dominio y comprueba su estado SSL
3. Puedes activar manualmente el aprovisionamiento SSL si es necesario

### Intervalo de verificación DNS

Si los dominios o los certificados SSL tardan demasiado en activarse:
1. Ve a **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Busca la configuración **DNS Check Interval** (Intervalo de verificación DNS)
3. Ajusta el valor desde el predeterminado de 300 segundos a uno más bajo (mínimo: 10 segundos)
4. **Nota:** Los intervalos más bajos significan verificaciones más frecuentes, pero una mayor carga en el servidor.

### Errores de autenticación

**Errores HTTP 401/403:**
- Regenera tu token de API en Enhance
- Verifica que el token tenga el rol de **System Administrator** (Administrador del Sistema)
- Comprueba que el token no haya caducado
- Asegúrate de estar usando el ID de Organización correcto (aunque normalmente no es necesario en la URL).

### Análisis de registros (Logs)

Activa los registros detallados:
```php
// Añade esto a wp-config.php para una depuración mejorada
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Luego comprueba los logs en:
- Logs de Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Registro de depuración de WordPress: `wp-content/debug.log`
- Logs del panel Enhance: Disponibles en la interfaz de administración de Enhance

## Referencia de API

### Autenticación
Todas las peticiones a la API utilizan autenticación con token Bearer:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints comunes utilizados

**Listar servidores:**
```
GET /servers
```

**Listar dominios en un servidor:**
```
GET /servers/{server_id}/domains
```

**Añadir un Dominio:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Eliminar un Dominio:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentación Completa de la API
Documentación completa de la API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Mejores Prácticas

### Seguridad
- **Nunca cometes tokens de la API en el control de versiones**
- Guarda los tokens en `wp-config.php`, que debe excluirse de Git
- Utiliza tokens con los permisos adecuados (Administrador del Sistema para integración completa)
- Establece fechas de caducidad para los entornos de producción
- Rota los tokens periódicamente

### Rendimiento
- Utiliza el intervalo de verificación DNS predeterminado (300 segundos) para evitar llamadas excesivas a la API
- Supervisa los recursos del servidor Enhance cuando se realizan operaciones de dominio a gran escala
- Considera intercalar las adiciones de dominios si mapeas muchos dominios a la vez

### Monitoreo
- Revisa regularmente los logs de Ultimate Multisite en busca de errores de integración
- Configura el monitoreo para adiciones de dominio fallidas
- Verifica que los certificados SSL se estén provisionando correctamente
- Mantente atento a la capacidad del servidor Enhance y a los límites de dominios

## Recursos Adicionales

- **Mejora la Documentació Oficial:** [https://enhance.com/docs](https://enhance.com/docs)
- **Mejora la Documentació API:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Mejora el Fòrum Comunitari:** [https://community.enhance.com](https://community.enhance.com)
- **Discusió en GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guia de Mapeament de Domini per Ultimate Multisite:** Consulta la pàgina wiki "Com configurar el mapeament de domini v2"

## Suport

Si tens problemes:
1. Revisa la secció de Solucionar Problemes anterior
2. Revisa els logs d'Ultimate Multisite
3. Consulta les [Discusió de GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contacta el suport d'Enhance per problemes específics del panel
5. Crea una nova discussió amb logs d'error detallats per obtenir ajuda de la comunitat

## Notes

- Aquesta integració només gestiona els alias de domini; Enhance gestiona automàticament el SSL
- L'integració suporta tant mapeaments de domini personalitzats com sites basats en subdomènis
- La creació automática de subdomènis www es pot configurar en les configuracions de Mapeament de Domini
- Enhance suporta actualment configuracions Apache (disponibilitat LiteSpeed Enterprise)
- La eliminació del domini de Ultimate Multisite eliminarà el domini d'Enhance, però potser no elimini immediatament els certifikats SSL associats
