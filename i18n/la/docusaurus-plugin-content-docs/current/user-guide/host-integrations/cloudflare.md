---
title: Integratio Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrare con Cloudflare

## Panoramica {#overview}
Cloudflare è una rete di distribuzione dei contenuti (CDN) e un fornitore di sicurezza leader che aiuta a proteggere e velocizzare i siti web. Questa integrazione permette la gestione automatica del dominio tra Ultimate Multisite e Cloudflare, in particolare per le installazioni multisito di sottodomini.

## Caratteristiche {#features}
- Creazione automatica dei sottodomini in Cloudflare
- Supporto per sottodomini tramite proxy
- Gestione dei record DNS
- Visualizzazione migliorata dei record DNS nell'admin di Ultimate Multisite

## Requisiti {#requirements}
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'tua_chiave_api');
define('WU_CLOUDFLARE_ZONE_ID', 'il_tuo_id_zona');
```

## Istruzioni di Configurazione {#setup-instructions}

### 1. Ottieni la Tua Chiave API Cloudflare {#1-get-your-cloudflare-api-key}

1. Accedi al tuo pannello di controllo Cloudflare
2. Vai su "My Profile" (clicca sulla tua email nell'angolo in alto a destra)
3. Seleziona "API Tokens" dal menu
4. Crea un nuovo token API con i seguenti permessi:
   - Zone.Zone: Lettura (Read)
   - Zone.DNS: Modifica (Edit)
5. Copia la tua chiave API

### 2. Ottieni il Tuo ID Zona {#2-get-your-zone-id}

1. Nel tuo pannello di controllo Cloudflare, seleziona il dominio che vuoi utilizzare
2. L'ID Zona è visibile nella scheda "Overview", nella barra laterale destra sotto "API"
3. Copia l'ID Zona

### 3. Aggiungi le Costanti a wp-config.php {#3-add-constants-to-wp-configphp}

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'tua_chiave_api');
define('WU_CLOUDFLARE_ZONE_ID', 'il_tuo_id_zona');
```

### 4. Abilita l'Integrazione {#4-enable-the-integration}

1. Nell'admin di WordPress, vai su Ultimate Multisite > Settings
2. Naviga alla scheda "Domain Mapping" (Mappatura del Dominio)
3. Scorri fino a "Host Integrations" (Integrazioni Host)
4. Abilita l'integrazione Cloudflare
5. Clicca su "Save Changes" (Salva modifiche)

## Come Funziona {#how-it-works}

### Gestione dei Sottodomini {#subdomain-management}

Quando viene creato un nuovo sito in una installazione multisito di sottodomini:

1. La integratio envia una petició ad API Cloudflare ut addat nōmen CNAME pro subdominio.
2. Subdominium est configuratum ut proxibi per Cloudflare per default (hoc potest mutari cum filtris).
3. Cum situs deletur, la integratio removeret subdominium a Cloudflare.

### Exhibitio Registri DNS {#dns-record-display}

La integratio meliōrit la exhibitionem registri DNS in admin Ultimate Multisite per:

1. Captura directam registrātiones DNS ab Cloudflare.
2. Exhibere si iis sunt proxibi aut non.
3. Mostrar information additiva de registris DNS.

## Nomen Hostium Customia Cloudflare {#cloudflare-custom-hostnames}

**Nomen Hostium Customia Cloudflare** (praecipue appellatum "Cloudflare for SaaS") est feature Cloudflare quae permittit tuos clientes ut domina propria cum SSL in network multisite tua utilissint. Est approxius methodus pro installationibus multisite mappatis dominio quibus usant Cloudflare, quia Cloudflare automaticam gestionem issuance et renovationis certamin SSL ad omnia domina customia gerit.

### Quom se differt a integration standard Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integration Standard | Nomen Hostium Customia Cloudflare |
|---|---|---|
| **Finis** | Auto-creat registrātiones DNS pro subdominio | Permittit domina customia (mappatae) cum SSL gestionem Cloudflare |
| **Melior est ad** | Multisite pro subdominio | Multisite mappatum dominio |
| **SSL** | Gestionem separatim | Gestionem automaticam per Cloudflare |

### Configuratio Nomen Hostium Customia Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. In tu dashboard de Cloudflare, abre la zona para tu dominio principal.
2. Ve a **SSL/TLS > Custom Hostnames**.
3. Añade un origen de reserva (fallback origin) que apunte a la IP o nombre de host de tu servidor.
4. Para cada dominio de cliente mapeado en Ultimate Multisite, añade una entrada de Nombre de Host Personalizado (Custom Hostname) en Cloudflare. Puedes automatizar este paso usando la API de Cloudflare.
5. Cloudflare emite y renueva automáticamente los certificados TLS para cada nombre de host personalizado una vez que el DNS del cliente esté apuntando a tu red.

Para la referencia completa de la API, consulta [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Actualización de terminología
A partir de Ultimate Multisite v2.6.1, esta función se denomina **Cloudflare Custom Hostnames** en todas las configuraciones y etiquetas del plugin. Las versiones anteriores usaban el nombre "Cloudflare for SaaS", que es el nombre del producto subyacente de Cloudflare.
:::

## Notas Importantes {#important-notes}

A partir de las actualizaciones recientes de Cloudflare, ahora está disponible el proxy comodín (wildcard proxying) para todos los clientes. Esto significa que la integración estándar de DNS de Cloudflare es menos crítica para las instalaciones multisite de subdominios de lo que solía ser, ya que simplemente puedes configurar un registro DNS comodín en Cloudflare.

## Solución de Problemas {#troubleshooting}

### Problemas de Conexión API {#api-connection-issues}
- Verifica que tu token de API sea correcto y tenga los permisos necesarios.
- Comprueba que tu ID de Zona (Zone ID) sea el correcto.
- Asegúrate de que tu cuenta de Cloudflare tenga los permisos necesarios.

### Subdominio No Añadido {#subdomain-not-added}
- Revisa los logs de Ultimate Multisite en busca de cualquier mensaje de error.
- Verifica que el subdominio no esté ya añadido a Cloudflare.
- Asegúrate de que tu plan de Cloudflare soporte la cantidad de registros DNS que estás creando.

### Problematicae Proxy {#proxying-issues}

- Si subdomestia non proxysi esse vult, potes filter `wu_cloudflare_should_proxy` uti.
- Omnes functiones possunt in modo non recte operari cum proxy (exempli gratia, certas functiones admin WordPress).
- Considera ut Regulas Paginarum Cloudflare uti cache ad paginas admin circumvenias.
