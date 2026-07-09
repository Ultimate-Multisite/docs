---
title: Gerenciando Sites
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gerenciando Sites {#managing-sites}

Sites (ou subsites) são o coração do seu negócio WaaS. O Ultimate Multisite tem 3 tipos de sites:

- **Propriedade do Cliente** — Sites pertencentes a clientes específicos
- **Modelos de Site (Site Templates)** — Sites pré-definidos que os clientes podem selecionar como ponto de partida
- **Site Principal (Main Site)** — Seu site de rede primário

## Visualizando Sites {#viewing-sites}

Navegue até **Ultimate Multisite → Sites** para ver todos os subsites na sua rede. Cada site é identificado pelo tipo e você pode filtrar por Todos os Sites, Propriedade do Cliente, Modelos ou Pendentes.

![Sites list page](/img/admin/sites-list.png)

## Adicionando um Novo Site {#adding-a-new-site}

Clique no botão **Adicionar Site** para criar um novo site. Você precisará fornecer:

- **Título do Site (Site Title)** — O nome do novo site
- **URL do Site (Site URL)** — O domínio/caminho para o site
- **Tipo de Site (Site Type)** — Se é um site de cliente, modelo ou site regular

A opção **Copiar Site (Copy Site)** permite criar um novo site baseado em um modelo de site existente. Quando ativada, você pode selecionar qual modelo usar como ponto de partida. Certifique-se de que **Copiar Mídia na Duplicação (Copy Media on Duplication)** esteja ativado para incluir os arquivos de mídia.

## Gerenciando um Site Existente {#managing-an-existing-site}

Clique em **Gerenciar (Manage)** em qualquer site para abrir a página **Editar Site (Edit Site)**. Aqui você encontrará:

### Informações Básicas {#basic-information}

O nome do site, tipo, ID do site e descrição. Você também verá o domínio mapeado, a associação de membros e a conta do cliente que possui o site.

### Opções do Site {#site-options}

Configure as capacidades e limites do site:

- **Limites de Visita (Visit limits)** — Número máximo de visitas ao site
- **Limites da Conta de Usuário (User account limits)** — Limites por função de usuário
- **Espaço em Disco (Disk space)** — Cota de armazenamento para o site
- **Domínio Personalizado (Custom domain)** — Habilita o mapeamento de domínio para este site
- **Visibilidade de Plugins e Temas (Plugin and theme visibility)** — Controle quais plugins e temas são visíveis, ocultos ou pré-ativados

Por padrão, os sites seguem os limites definidos no nível de associação (membership). Definir limites no nível do site irá sobrescrever as configurações de associação.

### Associações {#associations}

Abaixo das opções do site você encontrará informações sobre:

- **Domínios mapeados** associados ao site
- **Associação (Membership)** à qual o site pertence
- **Conta do cliente** vinculada ao site

### Barra Lateral Direita {#right-sidebar}

No lado direito, você pode:

- **Ativar/desativar o site** com um botão de alternância (toggle)
- **Mudar o tipo de site** ou reatribuir a propriedade
- **Definir uma imagem/miniatura do site** (exibida no frontend para templates de site)
- **Excluir o site** permanentemente

:::warning
Excluir um site é irreversível. O site e todo o seu conteúdo serão removidos permanentemente.
:::
