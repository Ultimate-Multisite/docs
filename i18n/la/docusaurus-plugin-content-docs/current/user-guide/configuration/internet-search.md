---
title: Quaerere in internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Busca en Internet

Gratis AI Agent v1.5.0 añade la capacidad de **Búsqueda en Internet**, que permite al asistente de IA recuperar información actualizada de la web durante una conversación. Esto se impulsa por la [Brave Search API](https://brave.com/search/api/) o la [Tavily API](https://tavily.com/).

## Cómo Funciona {#how-it-works}

Cuando la búsqueda en internet está activada, el asistente puede consultar automáticamente tu proveedor de búsqueda configurado cuando determina que una pregunta requiere información actual o externa, por ejemplo, noticias recientes, precios en vivo o documentación que pueda haber cambiado desde la fecha de corte del entrenamiento del modelo.

Los resultados se recuperan en tiempo real y se inyectan en el contexto del asistente antes de que genere una respuesta. El asistente indica cuándo ha utilizado los resultados de la búsqueda para responder a una pregunta.

## Habilitar la Búsqueda en Internet {#enabling-internet-search}

La búsqueda en internet requiere una clave API de tu proveedor de búsqueda elegido. Para configurarla:

1. Ve a **Gratis AI Agent → Settings → Advanced**.
2. Localiza el menú desplegable **Internet Search Provider** y selecciona **Brave Search** o **Tavily**.
3. Introduce tu clave API en el campo correspondiente. Los enlaces de registro se muestran junto a cada campo.
4. Haz clic en **Save Settings** (Guardar configuración).

Una vez guardada la clave, la capacidad de Búsqueda en Internet está automáticamente disponible para el asistente.

## Brave Search {#brave-search}

### Obtener una Clave API de Brave Search {#obtaining-a-brave-search-api-key}

1. Visita la [página de la Brave Search API](https://brave.com/search/api/).
2. Regístrate para un plan. Hay un nivel gratuito con un límite de solicitudes mensual.
3. Copia tu clave API desde el panel de desarrollador de Brave Search.
4. Pégala en el campo **Brave Search API Key** en la configuración de Gratis AI Agent.

### Límites de Uso {#usage-limits}

Utilium per Brave Search se facturiant in base numero interrogativorum fecunt. Omnis responsio AI quae quaerendum provocat computatur ut unus interrogatio est. Monitora usum tuum in [Brave Search developer dashboard](https://brave.com/search/api/) ut praestationes inesperatae evitas.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 adde **Tavily** ut alternam providendum search engine, quod resultata investigationis plures et potestates research superiorem offerre.

### Obtinere Clavis API Tavily {#obtaining-a-tavily-api-key}

1. Visita [Tavily API page](https://tavily.com/).
2. Registra te pro account. Gradus liberum est disponibile cum limite mensuali requiritium.
3. Copia tui clavem API a tavily dashboard.
4. Infield in campum **Tavily API Key** in parametris Gratis AI Agent.

### Limita Usus {#usage-limits-1}

Usus per Tavily se facturiat in base numero vocabulorum API fecunt. Omnis responsio AI quae quaerendum provocat computatur ut unus vocatio est. Monitora usum tuum in [Tavily dashboard](https://tavily.com/) ut praestationes inesperatae evitas.

## Disabilitas Search Interneti {#disabling-internet-search}

Clavis API a campo providendi search activi remove et salva. Capacitas Search Interneti ad assistantem iam non offertur.

:::note
Search Interneti lentitudinem responsionum adde quia assistantus aspettare debet resultata search antequam respondere possit. Pro casibus temporis sensus, cogita si search in tempore re tuo est necessarius aut si scientia intrinseca assistantis sufficiens est.
:::
