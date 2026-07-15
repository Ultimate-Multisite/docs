---
title: Meliora Integrare Panellum Controlis
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Mejorar la Integración del Panel de Control

## Resumen {#overview}
Enhance es un panel de control moderno que ofrece potentes capacidades de automatización y gestión de alojamiento. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y el Panel de Control Enhance.

**Discusión Relacionada:** Consulte [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para obtener consejos de la comunidad e información adicional.

## Características {#features}
- Sincronización automática de dominios cuando los dominios están mapeados en Ultimate Multisite
- Provisión automática de certificados SSL a través de LetsEncrypt cuando el DNS se resuelve
- Soporte para subdominios en redes que funcionan en modo subdominio
- Eliminación del dominio cuando se eliminan los mapeos
- Prueba de conexión para verificar las credenciales de la API

## Requisitos {#requirements}

### Requisitos del Sistema {#system-requirements}
- Panel de Control Enhance instalado y accesible
- Instalación de WordPress Multisite alojada en o conectada a un servidor Enhance
- Servidor web Apache (Enhance actualmente soporta configuraciones de Apache; LiteSpeed Enterprise está disponible a un costo reducido)

### Acceso a la API {#api-access}
Debe tener acceso de administrador al Panel de Control Enhance para crear tokens de API.

## Obtener sus Credenciales de API {#getting-your-api-credentials}

### 1. Crear un Token de API {#1-create-an-api-token}

1. Inicie sesión en su Panel de Control Enhance como administrador
2. Haga clic en **Settings** (Configuración) en el menú de navegación
3. Navegue hasta **Access Tokens** (Tokens de Acceso)
4. Haga clic en **Create Token** (Crear Token)
5. Asigne un nombre descriptivo al token (por ejemplo, "Ultimate Multisite Integration")
6. Asigne el rol de **System Administrator** (Administrador del Sistema)
7. Para la fecha de caducidad:
   - Déjela vacía si desea que el token nunca caduque
   - O establezca una fecha de caducidad específica por motivos de seguridad
8. Haga clic en **Create** (Crear)

Après la création, votre **Access Token** et votre **Organization ID** seront affichés. **Sauvegardez-les immédiatement**, car le jeton ne sera montré qu'une seule fois.

### 2. Obtenir Votre Organization ID {#2-get-your-organization-id}

L'Organization ID s'affiche sur la page des Access Tokens dans une boîte d'information bleue intitulée "Org ID: {votre_id}".

L'Organization ID est un UUID formaté comme suit : `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Vous pouvez également trouver l'Organization ID d'un client en faisant ceci :
1. Allez sur la page **Customers** (Clients)
2. Cliquez sur **Manage customer** (Gérer le client) pour le client concerné
3. Regardez l'URL - l'Organization ID est les caractères alphanumériques après `/customers/`

### 3. Obtenir Votre Server ID {#3-get-your-server-id}

Pour trouver votre Server ID (requis pour les opérations de domaine) :

1. Dans le Enhance Control Panel, allez dans **Servers** (Serveurs)
2. Cliquez sur le serveur où s'installe votre installation WordPress
3. Le Server ID (format UUID) sera visible dans l'URL ou les détails du serveur
4. Alternativement, vous pouvez utiliser l'API pour lister les serveurs :

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Le server ID suit le format UUID : `00000000-0000-0000-0000-000000000000`

### 4. Obtenir Votre API URL {#4-get-your-api-url}

Votre API URL est l'URL de votre Enhance Control Panel avec `/api/` ajouté :

```
https://your-enhance-panel.com/api/
```

**Important :** Le chemin `/api/` est obligatoire. Les erreurs courantes incluent :
- Utiliser seulement le domaine sans `/api/`
- Utiliser HTTP au lieu de HTTPS (HTTPS est requis pour la sécurité)

## Configuration {#configuration}

### Constantes Requises {#required-constants}

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

// Integrare Control Panel
define('WU_ENHANCE_API_TOKEN', 'tu-token-bearer-aqui');
define('WU_ENHANCE_API_URL', 'https://tu-panel-enhance.com/api/');
define('WU_ENHANCE_SERVER_ID', 'tu-uuid-servidor-aqui');

### Configurare tramite l'Assistente di Integrazione {#setup-via-integration-wizard}

1. Nel tuo pannello di amministrazione WordPress, vai su **Ultimate Multisite** > **Settings** (Impostazioni)
2. Vai alla scheda **Integrations** (Integrazioni)
3. Trova **Enhance Control Panel Integration** e clicca su **Configuration** (Configurazione)
4. L'assistente ti guiderà nella configurazione:
   - **Passo 1:** Introduzione e panoramica delle funzionalità
   - **Passo 2:** Inserisci le tue credenziali API (Token, URL API, ID Server)
   - **Passo 3:** Testa la connessione
   - **Passo 4:** Rivedi e attiva

Puoi scegliere di:
- Lasciare che l'assistente inserisca automaticamente queste costanti nel tuo file `wp-config.php`
- Copiare le definizioni delle costanti e aggiungerle manualmente

## Configurazione WordPress Aggiuntiva {#additional-wordpress-configuration}

In base ai feedback della comunità ([Discussione #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), potresti aver bisogno di configurare queste impostazioni aggiuntive:

### Configurazione .htaccess {#htaccess-configuration}

Se riscontri problemi con la mappatura dei domini:
1. Elimina il file `.htaccess` originale Enhance
2. Sostituiscilo con il file `.htaccess` standard di WordPress Multisite

### Costanti Cookie {#cookie-constants}

Aggiungi queste costanti a `wp-config.php` per assicurarti una gestione corretta dei cookie tra i domini mappati:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Come Funziona {#how-it-works}

### Quando un Dominio è Mappato {#when-a-domain-is-mapped}

1. Un utilisateur mappa un dominio personalizado en Ultimate Multisite (o se crea un nuevo sitio en modo subdominio)
2. La integración envía una solicitud POST a la API de Enhance: `/servers/{server_id}/domains`
3. Enhance añade el dominio a tu configuración del servidor
4. Cuando el DNS resuelve a tu servidor, Enhance aprovisiona automáticamente un certificado SSL a través de LetsEncrypt
5. El dominio se vuelve activo con HTTPS

### Cuando se Elimina un Dominio {#when-a-domain-is-removed}

1. Se elimina una asignación de dominio en Ultimate Multisite
2. La integración consulta a Enhance para encontrar el ID del dominio
3. Se envía una solicitud DELETE a: `/servers/{server_id}/domains/{domain_id}`
4. Enhance elimina el dominio de tu configuración del servidor

### Verificación de DNS y SSL {#dns-and-ssl-checking}

Ultimate Multisite incluye verificación de DNS y SSL integrada:
- Puedes configurar el intervalo de verificación en **Domain Mapping Settings** (por defecto: 300 segundos/5 minutos)
- El sistema verificará la propagación del DNS antes de marcar un dominio como activo
- La validez del certificado SSL se comprueba automáticamente
- Enhance gestiona la provisión de SSL automáticamente, por lo que no es necesario configurar el SSL manualmente

## Verificación de la Configuración {#verifying-setup}

### Probar la Conexión {#test-the-connection}

1. En el Asistente de Integración (Integration Wizard), usa el paso **Test Connection** (Probar Conexión)
2. El plugin intentará listar los dominios en tu servidor
3. Un mensaje de éxito confirma:
   - Las credenciales de la API son correctas
   - La URL de la API es accesible
   - El ID del servidor es válido
   - Los permisos están configurados correctamente

### Después de Mapear un Dominio {#after-mapping-a-domain}

1. Mapea un dominio de prueba en Ultimate Multisite
2. Revisa los registros de Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifica en el Panel de Control de Enhance que el dominio fue añadido:
   - Ve a **Servers** > **Tu Servidor** > **Domains**
   - El nuevo dominio debería aparecer en la lista
4. Una vez que el DNS se propague, verifica que el SSL se haya aprovisionado automáticamente

## Problematicae {#troubleshooting}

### Problematicae Connectionis API {#api-connection-issues}

**Error: "Connectio ad Enhance API non fecit"**
- Verifica quod `WU_ENHANCE_API_URL` includat `/api/` in fine.
- Assura te ut usus HTTPS sit, non HTTP.
- Verifica quod panel Enhance accessibilis est a server WordPress tuum.
- Verifica quod nullae regula firewall connectionem obstruant.

**Error: "Token API Enhance non invenitur"**
- Assura te quod `WU_ENHANCE_API_TOKEN` in `wp-config.php` definitor est.
- Verifica quod token non deletus aut expiratus sit in Enhance.
- Verifica si sunt errores scribendi in valore tokenis.

**Error: "Server ID non configuratus est"**
- Verifica quod `WU_ENHANCE_SERVER_ID` in `wp-config.php` definitor est.
- Assura te quod Server ID formatum UUID validum est.
- Confirma quod server in panel Enhance tuo existerit.

### Dominium Non Addebitur {#domain-not-added}

**Logos verifica:**
1. Ipse ad **Ultimate Multisite** > **Logs** adire.
2. Filtra per **integration-enhance**.
3. Quaere missa errores indicans de hoc problemo.

**Causae communes:**
- Formatum nominum domini invalidum.
- Dominium iam in Enhance existerit.
- Praemia API insufficiens (assura te quod token rol System Administrator habet).
- Server ID non concordat cum server actuali in Enhance.

### Problematicae Certificatus SSL {#ssl-certificate-issues}

**SSL non providitur:**
- Verifica si DNS ad IP adressam server tuam indicat.
- Verifica si dominium recte resolvitur: `nslookup yourdomain.com`
- Enhance DNS praecedere requirit ut SSL providere possit.
- Providitio SSL in genere 5-10 minutas post propagationem DNS.
- Verifica logs panel Control Enhancae ad errores specificos SSL.

**Troubleshooting manualis SSL in Enhance:**
1. Ad **Servers** > **Your Server** > **Domains** adire.
2. Dominium tuum invenisse et status SSL eius verifica.
3. Possuit providere SSL manualliter si necesse est.

### Intervallus Verificandi DNS {#dns-check-interval}

Si domenia vel certificat SSL tempora praecipere ad activandam:
1. Ipse in **Ultimate Multisite** > **Settings** > **Domain Mapping** ad ire.
2. Inveniat settingem **DNS Check Interval**.
3. De default 300 secundis ad valorem minimam valor (minimum: 10 secundis) adjusta.
4. **Nota:** Intervallum minimus significat frequentius check, sed maior onus serveris.

### Errores Authenticationes {#authentication-errors}

**Erros HTTP 401/403:**
- Token API tu regenera in Enhance.
- Verificas quod token **System Administrator** rolèm habet.
- Inspecta quod token non expiravit.
- Assura te ut correctum Organization ID usus, quamquam in URL saepe non est necesse.

### Analytica Logorum {#log-analysis}

Logos detektos activare:
```php
// Ad wp-config.php ad debug melior
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Deinde logores in sequendis inspecta:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: In interface admin Enhances habent.

## Referentia API {#api-reference}

### Authenticationes {#authentication}
Omnes requiestiones API usant authenticationem Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpointus Comunes Usati {#common-endpoints-used}

**Serveres Lister:**
```
GET /servers
```

**Domainas in Serverie Lister:**
```
GET /servers/{server_id}/domains
```

**Dominem Addere:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Dominum Delere:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentatio API Completa {#full-api-documentation}
Documentatio API completa: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Optima Practicae {#best-practices}

### Securitas {#security}
- **Nunca committare API tokens in version control**
- Conserva los tokens en `wp-config.php`, el cual debe excluirse de Git
- Usa tokens con permisos apropiados (Administrador del Sistema para integración completa)
- Establece fechas de caducidad para los entornos de producción
- Rota los tokens periódicamente

### Performance {#performance}
- Usa el intervalo predeterminado de verificación DNS (300 segundos) para evitar llamadas excesivas a la API
- Monitorea los recursos del servidor Enhance cuando se ejecutan operaciones de dominio a gran escala
- Considera programar las adiciones de dominios si mapeas muchos dominios a la vez

### Monitoring {#monitoring}
- Revisa regularmente los logs de Ultimate Multisite en busca de errores de integración
- Configura monitoreo para adiciones de dominio fallidas
- Verifica que los certificados SSL se estén provisionando correctamente
- Mantente atento a la capacidad del servidor Enhance y a los límites de dominios

## Recursos Adicionales {#additional-resources}

- **Documentación Oficial de Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentación de API de Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Foro Comunitario de Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Discusión en GitHub:** [Issue #265 - Consejos de Integración de Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guía de Mapeo de Dominios de Ultimate Multisite:** Consulta la página wiki "Cómo Configurar el Mapeo de Dominios v2"

## Soporte {#support}

Si encuentras problemas:
1. Revisa la sección de Solución de Problemas anterior
2. Revisa los logs de Ultimate Multisite
3. Consulta las [Discusiones de GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contacta a soporte de Enhance para problemas específicos del panel
5. Crea una nueva discusión con registros de error detallados para obtener ayuda de la comunidad

## Notas {#notes}

- Hoc integratio maneat alias domini solum; Enhance manage SSL automatic.
- Hoc integratio suportat ut domini custom mapping et sita ad subdominium basata.
- Creatio automatica subdominii www potest configurari in pengaturan Domain Mapping.
- Enhance hodie supportat configuration Apache (LiteSpeed Enterprise disponibilis est).
- Removetur dominio ex Ultimate Multisite, sed Enhancem domini removet, sed certificat SSL associati immediatam deletum non potest.
