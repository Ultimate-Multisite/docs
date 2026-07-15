---
title: Referencia de configuración
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referencia de ajustes

Esta página registra los ajustes que afectan a la administración diaria y los cambios recientes de comportamiento en Ultimate Multisite.

## Otras opciones {#other-options}

El área **Otras opciones** aparece en **Ultimate Multisite > Ajustes > Inicio de sesión y registro**.

| Ajuste | Descripción |
|---|---|
| **Activar Jumper** | Muestra la herramienta de navegación rápida Jumper en el área de administración. Úsala para saltar directamente a las pantallas de Ultimate Multisite, objetos de red y destinos de administración compatibles. Desactívala si no quieres que este acceso directo sea visible. |

## Informes de errores y telemetría {#error-reporting-and-telemetry}

El ajuste anterior de consentimiento para informes de errores se ha eliminado de la página de ajustes. La telemetría anónima está desactivada y no hay ningún interruptor de UI para activarla.

Si mantienes guías internas o capturas de pantalla para la página de ajustes, elimina las referencias al antiguo campo de consentimiento para informes de errores para que los administradores no busquen un ajuste que ya no está presente.

## Ajustes de importación/exportación {#importexport-settings}

La pestaña de ajustes **Importación/exportación** describe qué ajustes controla y enlaza directamente con **Ultimate Multisite > Exportación de sitio** para archivos de sitio y red. Usa la pestaña de ajustes para la configuración de importación/exportación, usa **Herramientas > Exportar e importar** para el flujo de trabajo de exportación/importación de un solo sitio, y usa la herramienta Exportación de sitio cuando necesites un archivo completo de Network Export.

## Advertencia de saldo de Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Cuando el addon Domain Seller está conectado a HostAfrica, los administradores de red ahora ven una advertencia descartable de saldo bajo cuando el saldo de la cuenta de revendedor es demasiado bajo para un procesamiento fiable de registros o renovaciones de dominios.

Trata este aviso como una advertencia operativa: recarga el saldo de revendedor de HostAfrica antes de aceptar más registros de dominios de pago; luego vuelve a los ajustes de Domain Seller o a la pantalla de supervisión de dominios para confirmar que los registros y las renovaciones pueden continuar con normalidad.

## Ajustes del conector de proveedores de AI {#ai-provider-connector-settings}

Los ajustes del conector de proveedores de AI ahora exponen solo los grupos de Account OAuth compatibles:

| Proveedor | Flujo de configuración |
|---|---|
| **Anthropic Max** | Conecta una o más Account de Anthropic Max con el botón OAuth. Usa la alternativa manual de OAuth cuando un navegador en entorno aislado no pueda completar la redirección automáticamente. |
| **OpenAI ChatGPT/Codex** | Conecta Account de ChatGPT mediante el mismo flujo de trabajo de grupo OAuth. Las operaciones compatibles con el conector pueden usar llamadas a herramientas de ChatGPT Codex después de conectar la Account. |
| **Google AI Pro** | Conecta Account de Google AI Pro mediante OAuth y luego actualiza el conector si la lista de Account no se actualiza de inmediato. |

Cursor Pro ya no es un proveedor compatible. Elimina capturas de pantalla internas antiguas, guías o pasos de incorporación que mencionen campos de configuración o rutas de conector de Cursor Pro.

Al añadir o eliminar Account de proveedores, introduce una dirección de correo electrónico válida para la Account que se esté actualizando o eliminando y guarda los ajustes del proveedor antes de probar operaciones respaldadas por el conector.
