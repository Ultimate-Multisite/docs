---
title: Registro de cambios de Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Registro de cambios de Domain Seller

Versión 1.3.0 - Publicada el 2026-06-02
- Nuevo: Se añadió una advertencia de network-admin cuando el saldo de revendedor de HostAfrica es demasiado bajo
- Nuevo: Se añadió la asignación automática de dominios recién registrados al sitio de la red
- Corrección: Se aplicaron los requisitos de campos del registrante solo al registrar un dominio nuevo
- Corrección: Se hicieron descartables los avisos de supervisión de saldo
- Corrección: Se aseguró que se conserven los detalles de facturación del registrante de WooCommerce
- Corrección: Se aplicaron los requisitos de contacto del registrante durante el registro
- Corrección: Se evitó que los productos de registro de dominios se crearan con un margen del 0 %
- Corrección: Se conservaron las selecciones de dominios y los precios durante el flujo de sesión de checkout
- Corrección: Se mejoró la visualización de moneda en los precios de dominios de HostAfrica
- Corrección: Se mejoró el comportamiento de form-action de checkout para evitar discrepancias con query-var de WP-core
- Mejorado: Se enlazó la documentación de configuración de revendedor de HostAfrica en la guía de configuración

Version 1.2.0 - Lanzado el 2026-05-25
- Nuevo: Añadido HostAfrica como integración de venta de dominios con checkout, asistente de configuración, búsqueda, TLD/precios, registro, renovación, transferencia, nameserver, DNS, código EPP, bloqueo de registrador y compatibilidad con protección de ID
- Nuevo: Añadido Openprovider como integración de venta de dominios con precios de revendedor, registro, renovación, transferencia, nameserver, DNS, código EPP, bloqueo de registrador, privacidad WHOIS y compatibilidad con sincronización de TLD
- Nuevo: Añadido Hostinger como integración de venta de dominios usando el token compartido de la API de Hostinger desde la integración principal para comprobaciones de disponibilidad, registro, actualizaciones de nameserver, bloqueo de registrador y privacidad WHOIS
- Mejorado: Añadidos docblocks de acciones y filtros del ciclo de vida de dominios para guía de integración para desarrolladores
- Mejorado: Actualizados los metadatos de compatibilidad del plugin a WordPress 7.0 en el readme del addon
- Mejorado: Actualizadas las plantillas de planificación usadas para la coordinación de próximos lanzamientos

Version 1.1.0 - Lanzado el 2026-05-08
- Nuevo: Creación de registros DNS (add_dns_record) implementada para los registradores ResellerClub, Enom y OpenSRS
- Corrección: El analizador de registros DNS predeterminados ahora tolera los tokens {DOMAIN} y {SITE_URL}
- Corrección: Los slugs de campos de checkout de selección de dominio tienen ahora un espacio de nombres para evitar colisiones con site_url

Version 1.0.8 - Lanzado el 2026-05-07
- Corrección: Los precios de dominios de ResellerClub ahora obtienen los precios de coste en vivo desde el endpoint de API correcto

Version 1.0.7 - Lanzado el 2026-05-06
* Corrección: ResellerClub test_connection envía el parámetro tlds requerido (#224)

Versión 1.0.6 - Lanzada el 2026-05-05
* Corrección: El registro de dominios de ResellerClub ahora funciona correctamente con un manejo mejorado de respuestas de API y enrutamiento de proveedor impulsado por el registro
* Corrección: Mejoras de UX en la página de administración Register Domain
* Eliminado: Integración del registrador CyberPanel

Versión 1.0.5 - Lanzada el 2026-04-02
* Nuevo: Integración del registrador GoDaddy para registro y gestión de dominios
* Nuevo: Integración del registrador NameSilo
* Nuevo: Integración del registrador ResellerClub
* Nuevo: Verificación automática del dominio de envío SES al comprar y mapear el dominio
* Corrección: Proteger las constantes del plugin contra redefinición en el entorno de pruebas
* Corrección: Las flags de MySQL se separan correctamente por palabras en install-wp-tests.sh

Versión 1.0.4 - Lanzada el 2026-03-14
* **Corrección:** Faltan algunos recursos css
* **Corrección:** Error relacionado con tlds no disponibles

Versión 1.0.3 - Lanzada el 2026-03-09
* **Corrección:** Errores de propiedades reactivas de Vue (domain_option, selected_domain, domain_provider) al usar la plantilla de registro heredada con el shortcode de checkout
* **Corrección:** Desalineación del campo de entrada de subdominio y texto demasiado grande en el campo de checkout de selección de dominio
* **Corrección:** Ocultar el bloque de vista previa "Tu URL será" cuando el campo de selección de dominio está presente

Versión 1.0.2 - Lanzada el 2026-03-01
* **Mejorado:** Se eliminaron los ajustes globales de margen de la página de ajustes — los precios ahora son exclusivamente por producto
* **Mejorado:** Se añadió el enlace "Gestionar productos de dominio" en la página de ajustes para una navegación rápida
* **Mejorado:** Descripciones de campos y tooltips más claros para los ajustes de productos de dominio (comodín vs específicos de TLD, tipos de margen, precios introductorios)
* **Mejorado:** Mejores descripciones en toda la página de ajustes (buscar TLDs, renovaciones, DNS, notificaciones)

Versión 1.0.1 - Lanzada el 2026-02-27

* **Nuevo:** Herramienta de importación de TLD para gestión masiva de precios
* **Nuevo:** Compatibilidad con precios introductorios para productos de dominio
* **Nuevo:** Suite de pruebas E2E con Cypress
* **Nuevo:** Plantillas de email para notificaciones del ciclo de vida del dominio
* **Nuevo:** Campos de dirección del registrante en el modal de registro de dominio de admin, rellenados previamente desde los ajustes
* **Nuevo:** Interfaz de gestión de DNS para clientes con soporte para añadir, editar y eliminar registros
* **Nuevo:** Opción de checkout "Trae tu propio dominio" con asignación automática de dominio
* **Nuevo:** Generación automática de URL del sitio a partir del nombre de dominio durante el checkout
* **Nuevo:** Configuración predeterminada de nameserver y registros DNS en los ajustes
* **Nuevo:** Detalles de registro de dominio y gestión de DNS en la página principal de edición de dominio
* **Nuevo:** El asistente de configuración crea automáticamente un producto de dominio predeterminado con valores por defecto razonables
* **Nuevo:** Sincronización diaria automática de TLD mediante cron en todos los proveedores configurados
* **Nuevo:** Protección de privacidad WHOIS con configuración por producto (siempre activada, elección del cliente o desactivada)
* **Nuevo:** Casilla de verificación de privacidad WHOIS en el checkout con visualización de precios y soporte para modo oscuro
* **Nuevo:** Página de admin Register Domain para el registro manual de dominios
* **Nuevo:** Actualizaciones automáticas del plugin mediante el servidor de actualizaciones de Ultimate Multisite
* **Nuevo:** Pestaña de filtro de tipo de producto de dominio en la tabla de lista de productos con estilo de insignia morada
* **Nuevo:** Campos de contacto del registrante (nombre, dirección, ciudad, estado, código postal, país, teléfono) en el formulario de checkout de dominio

* **Nuevo:** Validación de campos del registrante antes de llamar a la API del registrador con mensajes de error claros
* **Nuevo:** Canales de registro específicos del proveedor para eventos de registro de dominios (p. ej., domain-seller-namecheap.log)
* **Nuevo:** Campos de contacto del registrante en el formulario principal de registro/alta de checkout (se muestran al registrar un dominio)
* **Mejorado:** Se reemplazó el campo de checkout de búsqueda de dominios por un campo unificado de selección de dominio compatible con pestañas de subdominio, registro y dominio existente
* **Mejorado:** La configuración del producto de dominio se muestra en línea en la página de edición del producto mediante el sistema de widgets principal
* **Mejorado:** La información del dominio del cliente se integra en el widget principal de mapeo de dominios en lugar de una metabox independiente
* **Mejorado:** El asistente de importación de TLD se simplificó a una sincronización de un clic desde todos los proveedores
* **Mejorado:** La disponibilidad de dominios de Namecheap usa una llamada API por lotes para una búsqueda más rápida
* **Mejorado:** La API de precios de Namecheap usa los parámetros correctos y el análisis de respuesta adecuado
* **Mejorado:** Almacenamiento de TLD centralizado en una única opción de red
* **Mejorado:** Registro de actividad de dominios para cambios de DNS, transferencias y aplicación de configuración
* **Mejorado:** Sincronización completa de TLD para OpenSRS usando la lista maestra de IANA con validación por lotes
* **Mejorado:** Sincronización completa de TLD para Namecheap con solicitudes API paginadas
* **Mejorado:** Se reemplazaron las clases de proveedor heredadas por el patrón Integration Registry
* **Mejorado:** Panel de configuración con configuración de DNS y transferencias
* **Mejorado:** Los números de teléfono se formatean automáticamente al formato de registrador +CC.NNN

* **Mejorado:** La validación del campo de teléfono elimina caracteres de formato antes del envío
* **Mejorado:** El requisito de versión se elevó a Ultimate Multisite 2.4.12 con un aviso más claro
* **Mejorado:** El flujo de trabajo de CI usa el checkout correcto tanto para el addon como para el plugin principal
* **Mejorado:** prepare_registrant_info() lee desde los metadatos de usuario guardados en checkout con alternativa de dirección de facturación
* **Corregido:** La búsqueda de dominios por AJAX fallaba para usuarios no conectados durante el checkout
* **Corregido:** La obtención de precios de dominios por AJAX fallaba para usuarios no conectados durante el checkout
* **Corregido:** Error fatal por redeclaración de la clase Spyc al ejecutar comandos WP-CLI
* **Corregido:** Tiempo de espera de la API sandbox de Namecheap demasiado corto
* **Corregido:** El texto del botón Select en la búsqueda de dominios no era visible sobre fondo verde
* **Corregido:** El registro de dominio fallaba con el error "RegistrantFirstName is Missing" debido a información de contacto faltante
* **Corregido:** Registro de dominio creado con blog_id=0 cuando el sitio aún no existía en el momento del checkout
* **Corregido:** La configuración de TLDs predeterminados se devolvía como cadena en lugar de como array analizado
* **Eliminado:** Página de administración independiente de Domain Management — ahora se gestiona mediante las páginas principales de dominios

Versión 1.0.0 - Lanzada el 2025-09-28

**Reescritura principal para Ultimate Multisite v2**

* **Nuevo:** Reescritura completa con arquitectura moderna PHP 7.4+
* **Nuevo:** Integración fluida con el sistema de checkout de Ultimate Multisite v2
* **Nuevo:** Gestión de productos de dominio con opciones de precios flexibles
* **Nuevo:** Arquitectura con soporte para múltiples proveedores de dominios
* **Nuevo:** Integración de renovación automática y suscripción
* **Nuevo:** Interfaz de gestión de dominios para clientes
* **Nuevo:** Monitoreo de dominios y registros para administradores
* **Nuevo:** Soporte de cupones para productos de dominio
* **Nuevo:** Gestión integral de ajustes
* **Nuevo:** Base de código extensible y amigable para desarrolladores
* **Mejorado:** Proveedor OpenSRS actualizado con soporte completo de funciones
* **Mejorado:** UI moderna coherente con Ultimate Multisite v2
* **Corregido:** Todo el código v1 obsoleto actualizado a los estándares de v2
* **Eliminado:** Compatibilidad heredada con v1 (cambio incompatible)

### Versiones anteriores (v1 heredado)

### Versión 0.0.3 - 20/08/2019

* Corregido: Incompatibilidad con Groundhogg CRM
* Nota: Esta fue la última versión compatible con v1

### Versión 0.0.2 - 07/12/2018

* Corregido: Se eliminó el campo License Key
* Corregido: Faltan las pestañas de plan cuando el plugin de funciones está activo
* Mejorado: Se añadió un botón para omitir en el campo de registro

### Versión 0.0.1 - Lanzamiento inicial

* Integración básica de OpenSRS para WP Ultimo v1
* Búsqueda y registro de dominios simples
* Permisos de dominio basados en el plan
