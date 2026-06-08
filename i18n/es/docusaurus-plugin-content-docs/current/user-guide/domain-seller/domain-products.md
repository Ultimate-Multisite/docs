---
title: Productos de Dominio y Precios
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Productos y precios de dominio

Los productos de dominio son la forma en que usted controla los precios, los TLDs, la privacidad WHOIS y la selección de proveedores. Cada producto de dominio es un producto estándar de Ultimate Multisite con una pestaña adicional de **Configuración de dominio** (Domain Settings).

## Creación de un producto de dominio

1. Vaya a **Network Admin › Ultimate Multisite › Products**
2. Haga clic en **Add New**
3. Establezca el tipo de producto en **Domain**
4. Configure la pestaña **Domain Settings** (ver más abajo)
5. Guardar

Los productos de dominio aparecen con una insignia púrpura de **Domain** en la lista de productos y se pueden filtrar usando la pestaña **Domain Products**.

## Pestaña de configuración de dominio

### Proveedor

Seleccione qué registrador gestiona el registro para este producto. Por defecto, utiliza el **Default provider** global establecido en la configuración de Domain Seller.

### TLDs compatibles

Déjelo en blanco para crear un **producto comodín** (catch-all product) que se aplica a todos los TLDs que no sean cubiertos por otro producto.

Introduzca una lista de TLDs separada por comas (ej. `.com, .net, .org`) para crear un **producto específico de TLD** que solo se aplica a esas extensiones.

**Cómo funciona la coincidencia de productos:** Cuando un cliente busca un dominio, el complemento selecciona el producto que mejor coincida y sea más específico. Un producto con `.com` en su lista de TLDs tiene prioridad sobre un producto comodín. Si ningún producto específico de TLD coincide, se utiliza el comodín. Si no existen productos, no se muestra la búsqueda de dominio.

### Tipo de margen

Tres modos controlan cómo se calcula su precio minorista a partir del costo mayorista:

| Modo | Cómo funciona |
|---|---|
| **Porcentaje** | Añade un porcentaje sobre el costo mayorista. Un margen del 20% sobre un dominio mayorista de $10 da $12. |
| **Margen fijo** | Añade una cantidad fija en dólares. Un margen de $5 sobre un dominio de $10 da $15. |
| **Precio fijo** | Ignora completamente el costo mayorista. Siempre cobra la cantidad que usted ingrese. |

### Precios de introducción

Active esta opción para ofrecer un precio de primer año con descuento. Establezca un **Introductory price** (el precio del año 1) separado del **Renewal price** regular (año 2 en adelante). El cliente verá ambos precios mostrados durante el pago para saber qué esperar en la renovación.

### Privacidad WHOIS

Controla si se ofrece protección de privacidad WHOIS para los dominios registrados a través de este producto.

| Configuración | Comportamiento |
|---|---|
| **Desactivado** | Nunca se ofrece ni se habilita la privacidad WHOIS. |
| **Siempre incluido** | La privacidad WHOIS se habilita automáticamente en el registro sin costo. |
| **Elección del cliente** | Aparece una casilla de verificación durante el pago. Establezca el **Privacy price** para cobrar por año, o déjelo en $0 para ofrecerlo gratis. |

Para Namecheap, la privacidad WHOIS utiliza WhoisGuard (siempre gratis). Para OpenSRS, utiliza el servicio de privacidad OpenSRS (puede tener un costo mayorista).

---

## Importación y sincronización de TLD

Los productos de dominio muestran precios mayoristas en tiempo real obtenidos del proveedor conectado. Para que esto funcione, los TLDs deben importarse.

- **Sincronización manual:** Settings › Domain Seller › Sync TLDs (por proveedor)
- **Sincronización automática:** Se ejecuta diariamente mediante un cron job programado en todos los proveedores configurados

Después de una sincronización, vaya a la pestaña de Configuración de dominio de cualquier producto de dominio y use el selector de TLD para ver los TLDs disponibles con sus precios mayoristas actuales.

---

## Renovación automática

Las renovaciones de dominio están vinculadas al estado de membresía del cliente:

- Cuando una membresía se renueva y un dominio está vinculado, la renovación del dominio se pone en cola automáticamente
- Los intentos de renovación utilizan la pasarela de pago activa del cliente
- Las renovaciones fallidas se reintentan automáticamente con retroceso exponencial (exponential backoff)
- Se envían notificaciones por correo electrónico por renovaciones exitosas, fallidas y expiraciones próximas

IDs de plantillas de correo electrónico para eventos del ciclo de vida del dominio:

| Evento | Template ID |
|---|---|
| Dominio registrado | `domain_registered` |
| Dominio renovado | `domain_renewed` |
| Fallo de renovación | `domain_renewal_failed` |
| Dominio a punto de expirar | `domain_expiring_soon` |

---

## Administración: Registro manual de dominio

Para registrar un dominio en nombre de un cliente sin que este pase por el proceso de pago:

1. Vaya a **Network Admin › Ultimate Multisite › Register Domain**
2. Seleccione el cliente e ingrese el nombre de dominio
3. Rellene los datos de contacto del titular (nombre, dirección, teléfono)
4. Haga clic en **Register**

El registro del dominio se crea y se vincula a la cuenta del cliente.
