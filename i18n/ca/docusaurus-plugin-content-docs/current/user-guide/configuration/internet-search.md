---
title: Cerca a Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Cerca a Internet

Gratis AI Agent v1.5.0 afegeix una capacitat de **Cerca a Internet** que permet a l'assistència AI recuperar informació actual de la web durant una conversa. Això està alimentat per [Brave Search API](https://brave.com/search/api/) o la [Tavily API](https://tavily.com/).

## Com funciona

Quan la cerca a internet està activada, l'assistència pot consultar automàticament el proveïdor de cerca configurat quan detecta que una pregunta requereix informació actual o externa — per exemple, notícies recents, preus en temps real o documentació que pot haver canviat des de la data de tancament de l'entrenament del model.

Els resultats es recuperen en temps real i es canvien al context de l'assistència abans que aquesta generi una resposta. L'assistència indica quan ha utilitzat resultats de cerca per respondre a una pregunta.

## Activar la cerca a Internet

La cerca a internet requereix una clau API (API key) del proveïdor de cerca que hagis triat. Per configurar-ho:

1. Navega a **Gratis AI Agent → Settings → Advanced**.
2. Localitza el desplegable **Internet Search Provider** i selecciona **Brave Search** o **Tavily**.
3. Introduce la teva clau API al camp corresponent. Els enllaços de registre (Sign-up) es mostren a cada camp.
4. Clica sobre **Save Settings**.

Una vegada que la clau s'ha guardat, la capacitat de cerca a Internet està automàticament disponible per l'assistència.

## Brave Search

### Obtenció d'una clau API de Brave Search

1. Visita la [pàgina de Brave Search API](https://brave.com/search/api/).
2. Registra't per un pla. Hi ha un nivell gratuït amb un límit de sol·licituds mensual.
3. Copia la teva clau API del *dashboard* de desenvolupador de Brave Search.
4. Pasta-la al camp **Brave Search API Key** a les configuracions de Gratis AI Agent.

### Límites d'ús

L'ús es factura per Brave Search basat en el nombre de consultes realitzades. Cada resposta de l'AI que trigui una cerca compteix com una consulta. Monitoritza el teu ús al [dashboard de desenvolupador de Brave Search](https://brave.com/search/api/) per evitar càrrejos inesperats.

## Tavily

Superdav AI Agent v1.10.0 afegeix **Tavily** com a proveïdor alternatiu de cerca a internet, oferint resultats de cerca més ricus i capacitats avançades de recerca.

### Obtenció d'una clau API de Tavily

1. Visita la [pàgina de Tavily API](https://tavily.com/).
2. Registra't per un compte. Hi ha un nivell gratuït amb un límit de sol·licituds mensual.
3. Copia la teva clau API del *dashboard* de Tavily.
4. Pasta-la al camp **Tavily API Key** a les configuracions de Gratis AI Agent.

### Límites d'ús

L'ús es factura per Tavily basat en el nombre de cranes API (API calls) realitzats. Cada resposta de l'AI que trigui una cerca compteix com una crana. Monitoritza el teu ús al [dashboard de Tavily](https://tavily.com/) per evitar càrrejos inesperats.

## Desactivar la cerca a Internet

Elimina la clau API del camp del proveïdor de cerca actiu i guarda. La capacitat de cerca a Internet ja no s'oferirà a l'assistència.

:::note
La cerca a internet afegeix latència a les respostes perquè l'assistència ha de esperar els resultats de la cerca abans de generar una resposta. Per casos d'ús sensibles al temps, considera si la cerca en temps real és necessària o si el coneixement integrat de l'assistència és suficient.
:::
