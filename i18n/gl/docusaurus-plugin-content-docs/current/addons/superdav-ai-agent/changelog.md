---
title: Rexistro de cambios
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Rexistro de cambios {#changelog}

## 1.18.0 — Publicado o 2026-06-29 {#1180--released-on-2026-06-29}

### Novo {#new}

- **Ferramentas de Google Calendar** — ler calendarios e eventos configurados para automatizacións conscientes da axenda
- **Mapeo de contactos e axudantes de asistentes** — asociar participantes do calendario con usuarios e contactos do sitio
- **Portas de aprobación humana e rexistros de recordatorios** — pausar automatizacións para revisión e evitar notificacións duplicadas
- **Provedor de SMS TextBee** — enviar notificacións de mensaxes de texto configuradas a través de TextBee
- **Paquete complementario avanzado** — engadir ferramentas de sistema de ficheiros para desenvolvedores de confianza, base de datos, WP-CLI, despachador REST, construtor de plugins, instantánea de git, xestión de usuarios e benchmarks distribuídas por separado da compilación de WordPress.org

### Mellorado {#improved}

- **Configuración do servizo Superdav xestionado** — engadir endpoints de servizo aloxado e aprovisionamento automático de conexións para sitios compatibles
- **Empaquetado de versións** — compilar ZIPs separados do núcleo e Advanced, publicar ambos en GitHub e enviar só o paquete do núcleo a WordPress.org

### Corrixido {#fixed}

- **Fiabilidade das solicitudes de IA** — mellorar a selección de modelos, os tempos de espera das solicitudes, o modelo de configuración predeterminado, o manexo do texto de razoamento e a orientación de reintento para chamadas a ferramentas non válidas
- **Reforzo de calendario e recordatorios** — fortalecer os tokens de Google Calendar e a desduplicación de recordatorios
- **Incorporación e continuacións de aprobación** — corrixir os inicios de incorporación no frontend e as continuacións de capacidades confirmadas
- **Problemas de revisión do empaquetado de WordPress.org** — abordar os comentarios da revisión de empaquetado para a versión do núcleo

## 1.16.0 — Publicado o 2026-05-20 {#1160--released-on-2026-05-20}

### Novo {#new-1}

- **Capacidade de xerar SVG de logotipo** — Theme Builder agora pode xerar e inserir SVGs de logotipo personalizados con saneamento seguro para espazos de nomes
- **Subida de fotos na entrevista de descubrimento** — a entrevista de descubrimento de Theme Builder agora inclúe un paso de subida de fotos para un contexto de deseño máis rico
- **Capacidade de validar o contraste da paleta** — comprobar pares de cores para o cumprimento de WCAG antes de aplicalos a un tema
- **Menús de hostalaría** — Theme Builder agora pode xerar páxinas estruturadas de menús de comida e bebida para negocios de hostalaría
- **Renderizado de vista previa de escritorio e móbil** — previsualiza o teu deseño en dispositivos de escritorio e móbiles durante a selección da dirección de deseño
- **Parámetro de etiqueta de navegación** — a capacidade Create Menu agora admite un `navigation_label` distinto separado do título da páxina
- **Dispoñibilidade de ferramentas de nivel 1** — sd-ai-agent/site-scrape agora é unha ferramenta de nivel 1 dispoñible por defecto en Theme Builder

### Corrixido {#fixed-1}

- **Caché do cliente de IA** — agora está respaldada por transients para a persistencia entre solicitudes, evitando a perda de datos en tarefas de axente de longa duración
- **Ligazóns de acción da fila do plugin** — corrixidas e renomeadas para maior claridade

## 1.10.0 — Publicado o 2026-05-05 {#1100--released-on-2026-05-05}

### Novo {#new-2}

- **Busca en internet Tavily** — engadir Tavily como provedor de busca para resultados de busca en internet máis ricos xunto con Brave Search
- **Habilidades integradas conscientes do tema** — agora inclúense co plugin guías de habilidades para Block Themes, Classic Themes, Kadence Blocks e Kadence Theme
- **Capacidade de formulario de contacto do construtor de sitios** — engadir un formulario de contacto a calquera páxina directamente desde a interface de chat

### Mellorado {#improved-1}

- **Integración de WooCommerce refactorizada** — agora usa APIs nativas de WooCommerce para mellor fiabilidade e compatibilidade
- **A lista de provedores actualízase automaticamente** — cando se activa ou desactiva calquera plugin

### Corrixido {#fixed-2}

- **Capacidade navigate-to** — corrixido un bucle infinito de recarga nalgunhas páxinas de administración
- **Capacidade list-posts** — agora resolve correctamente os nomes de categorías e etiquetas a slugs
- **Comandos WP-CLI** — restaurados os aliases de espazo de nomes que faltaban tras unha refactorización anterior
- **Automatización de eventos** — manexa con elegancia os sitios nos que as táboas de automatización aínda non están creadas
- **Capacidade memory-save** — agora usa o prefixo de espazo de nomes correcto no construtor de instrucións do sistema
- **Resultados escalares de ferramentas** — agora envólvense correctamente antes de devolverse á IA
- **Estatísticas de uso** — agora manexan correctamente o formato de clave de capacidade herdado ao actualizar desde versións máis antigas
