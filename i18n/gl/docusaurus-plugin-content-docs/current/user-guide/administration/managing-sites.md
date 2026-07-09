---
title: Xestión de sitios
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gestionar Sitios {#managing-sites}

Os Sitios (ou subsitios) son o núcleo do seu negocio WaaS. O Ultimate Multisite ten 3 tipos de sitios:

- **Propriedade do Cliente** — Sitios que pertencen a clientes específicos
- **Modelos de Site (Site Templates)** — Sitios predefinidos que os clientes poden seleccionar como punto de partida
- **Site Principal (Main Site)** — O seu sitio principal da rede

## Visualizar Sitios {#viewing-sites}

Navegue para **Ultimate Multisite → Sites** para ver todos os subsitios na súa rede. Cada sitio está etiquetado por tipo e pode filtrar por Todos os Sitios, Propriedade do Cliente, Modelos ou Pendente.

![Sites list page](/img/admin/sites-list.png)

## Añadir un Novo Sitio {#adding-a-new-site}

Clique no botón **Add Site** para crear un novo sitio. Terá que proporcionar:

- **Título do Sitio (Site Title)** — O nome do novo sitio
- **URL do Sitio (Site URL)** — O dominio/caminho para o sitio
- **Tipo de Sitio (Site Type)** — Se é un sitio de cliente, modelo ou sitio normal

A opción **Copy Site** permite crear un novo sitio basado en un modelo de sitio existente. Quando está activada, pode seleccionar que modelo usar como punto de partida. Asegúrese de que **Copy Media on Duplication** este activado para incluir os ficheiros de media.

## Gestionar un Sitio Existente {#managing-an-existing-site}

Clique en **Manage** (Gestionar) en calquera sitio para abrir a página **Edit Site** (Editar Sitio). Aquí encontrará:

### Información Básica {#basic-information}

O nome do sitio, o tipo, o ID do sitio e a descripción. Tamén verá o dominio mapeado, a asociación de membros e a conta do cliente que é dono do sitio.

### Opcións do Sitio {#site-options}

Configure as capacidades e os límites do sitio:

- **Límites de visita (Visit limits)** — Número máximo de visitas ao sitio
- **Límites de conta de usuario (User account limits)** — Límites por tipo de usuario
- **Espacio en disco (Disk space)** — Quota de almacenamiento para o sitio
- **Dominio personalizado (Custom domain)** — Activar o mapeamento de dominio para este sitio
- **Visibilidade de plugins y temas (Plugin and theme visibility)** — Controlar que plugins e temas son visibles, ocultos ou pré-activados

Por defecto, os sitios seguem os límites establecidos no nivel de membro. Establecer límites no nivel do sitio anulará as configuración de membro.

### Asociacións {#associations}

Debaixo das opcións do sitio, encontrará información sobre:

- **Domínios mapeados** asociados ao sitio
- **Membro** onde o sitio se encontra
- **Conta do cliente** ligada ao sitio

### Barra Lateral Dereita {#right-sidebar}

No lado direito pode:

- **Activar/desativar o sitio** con un botón de alternancia (toggle)
- **Cambiar o tipo de sitio** ou reasignar a propriedade
- **Definir unha imagen/miniatura do sitio** (mostrada no frontend para modelos de sitio)
- **Borrar o sitio** permanentemente

:::warning
Borrar un sitio é irreversible. O sitio e todo o seu contenido serán eliminados permanentemente.
:::
