---
title: Gerenciando Sites
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gerenciando Sites

Sites (ou subsites) são o núcleo do seu negócio WaaS. O Ultimate Multisite possui 3 tipos de sites:

- **Propriedade do Cliente** — Sites pertencentes a clientes específicos
- **Modelos de Site** — Sites pré-definidos que os clientes podem selecionar como ponto de partida
- **Site Principal** — Seu site principal da rede

## Visualizando Sites

Navegue até **Ultimate Multisite → Sites** para ver todos os subsites na sua rede. Cada site é rotulado por tipo e você pode filtrar por Todos os Sites, Propriedade do Cliente, Modelos, ou Pendente.

![Página de lista de sites](/img/admin/sites-list.png)

## Adicionando um Novo Site

Clique no botão **Add Site** para criar um novo site. Você precisará fornecer:

- **Título do Site** — O nome do novo site
- **URL do Site** — O domínio/caminho para o site
- **Tipo de Site** — Se é um site do cliente, modelo ou site regular

A opção **Copy Site** permite criar um novo site baseado em um modelo de site existente. Quando habilitada, você pode selecionar qual modelo usar como ponto de partida. Certifique-se de que **Copy Media on Duplication** esteja habilitado para incluir arquivos de mídia.

## Gerenciando um Site Existente

Clique em **Manage** em qualquer site para abrir a página **Edit Site**. Aqui você encontrará:

### Informações Básicas

O nome do site, tipo, ID do site e descrição. Você também verá o domínio mapeado, a associação de membership e a conta do cliente que possui o site.

### Opções do Site

Configure as capacidades e limites do site:

- **Limites de visitas** — Número máximo de visitas ao site
- **Limites de conta de usuário** — Limites por função de usuário
- **Espaço em disco** — Cota de armazenamento para o site
- **Domínio personalizado** — Habilitar mapeamento de domínio para este site
- **Visibilidade de plugins e temas** — Controle quais plugins e temas são visíveis, ocultos ou pré-ativados

Por padrão, os sites seguem os limites definidos no nível de membership. Definir limites no nível do site substituirá as configurações de membership.

### Associações

Abaixo das opções do site você encontrará informações sobre:

- **Domínios mapeados** associados ao site
- **Membership** em que o site está
- **Conta do cliente** vinculada ao site

### Barra Lateral Direita

No lado direito você pode:

- **Habilitar/desabilitar o site** com um botão de alternância
- **Alterar o tipo de site** ou reatribuir a propriedade
- **Definir uma imagem/miniatura do site** (exibida no frontend para modelos de site)
- **Excluir o site** permanentemente

:::warning
Excluir um site é irreversível. O site e todo o seu conteúdo serão permanentemente removidos.
:::
