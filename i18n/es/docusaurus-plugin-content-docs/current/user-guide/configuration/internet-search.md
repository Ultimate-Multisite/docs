---
title: Búsqueda en Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Búsqueda en Internet

Gratis AI Agent v1.5.0 añade una funcionalidad de **Búsqueda en Internet** que permite al asistente de IA recuperar información actualizada de la web durante una conversación. Esto está impulsado por la [Brave Search API](https://brave.com/search/api/) o la [Tavily API](https://tavily.com/).

## Cómo funciona {#how-it-works}

Cuando la búsqueda en Internet está activada, el asistente puede consultar automáticamente al proveedor de búsqueda configurado cuando determina que una pregunta requiere información actual o externa, por ejemplo, noticias recientes, precios en tiempo real o documentación que puede haber cambiado desde la fecha de corte de entrenamiento del modelo.

Los resultados se recuperan en tiempo real y se inyectan en el contexto del asistente antes de que este genere una respuesta. El asistente indica cuándo ha utilizado resultados de búsqueda para responder una pregunta.

## Habilitar la Búsqueda en Internet {#enabling-internet-search}

La búsqueda en Internet requiere una clave API de su proveedor de búsqueda elegido. Para configurarla:

1. Vaya a **Gratis AI Agent → Settings → Advanced**.
2. Localice el menú desplegable **Internet Search Provider** y seleccione **Brave Search** o **Tavily**.
3. Ingrese su clave API en el campo correspondiente. Los enlaces de registro se muestran junto a cada campo.
4. Haga clic en **Save Settings**.

Una vez que la clave se guarda, la funcionalidad de Búsqueda en Internet está automáticamente disponible para el asistente.

## Brave Search {#brave-search}

### Obtener una clave API de Brave Search {#obtaining-a-brave-search-api-key}

1. Visite la [Brave Search API page](https://brave.com/search/api/).
2. Regístrese para un plan. Hay un nivel gratuito disponible con un límite de solicitudes mensual.
3. Copie su clave API desde el panel de desarrollador de Brave Search.
4. Péguela en el campo **Brave Search API Key** en la configuración de Gratis AI Agent.

### Límites de uso {#usage-limits}

El uso se factura por Brave Search basándose en el número de consultas realizadas. Cada respuesta de IA que desencadena una búsqueda cuenta como una consulta. Monitoree su uso en el [Brave Search developer dashboard](https://brave.com/search/api/) para evitar cargos inesperados.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 añade **Tavily** como un proveedor alternativo de búsqueda en Internet, ofreciendo resultados de búsqueda más ricos y capacidades de investigación avanzadas.

### Obtener una clave API de Tavily {#obtaining-a-tavily-api-key}

1. Visite la [Tavily API page](https://tavily.com/).
2. Regístrese para una cuenta. Hay un nivel gratuito disponible con un límite de solicitudes mensual.
3. Copie su clave API desde el panel de control de Tavily.
4. Péguela en el campo **Tavily API Key** en la configuración de Gratis AI Agent.

### Límites de uso {#usage-limits-1}

El uso se factura por Tavily basándose en el número de llamadas a la API realizadas. Cada respuesta de IA que desencadena una búsqueda cuenta como una llamada. Monitoree su uso en el [Tavily dashboard](https://tavily.com/) para evitar cargos inesperados.

## Deshabilitar la Búsqueda en Internet {#disabling-internet-search}

Elimine la clave API del proveedor de búsqueda activo y guarde. La funcionalidad de Búsqueda en Internet ya no se ofrecerá al asistente.

:::note
La búsqueda en Internet añade latencia a las respuestas porque el asistente debe esperar los resultados de la búsqueda antes de generar una respuesta. Para casos de uso sensibles al tiempo, considere si la búsqueda en tiempo real es necesaria o si el conocimiento incorporado del asistente es suficiente.
:::
