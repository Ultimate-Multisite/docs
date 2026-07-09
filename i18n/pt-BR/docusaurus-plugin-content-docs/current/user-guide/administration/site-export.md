---
title: Exportação do Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportação do Site {#site-export}

A página de administração **Exportação do Site** permite que administradores de rede empacotem um site inteiro, ou toda a rede, em um arquivo para download, seja para migração, backup ou entrega.

## Exportando um site {#exporting-one-site}

Vá para **Ultimate Multisite > Exportação do Site** e escolha **Gerar nova Exportação do Site**. Selecione o subsite que você deseja exportar e, em seguida, escolha se o arquivo deve incluir uploads, plugins e temas.

Quando a exportação for concluída, baixe o arquivo ZIP da lista **Exportações Existentes**. Os ZIPs de exportação agora incluem um `index.php` autoexecutável e um `readme.txt`, de modo que o arquivo possa ser carregado em um host novo e iniciado sem a necessidade de instalar um plugin importador separado.

## Exportando toda a rede {#exporting-the-whole-network}

Use **Exportação de Rede** na página Exportação do Site quando precisar de um único arquivo contendo todos os subsites da rede. Isso é útil antes de migrações de host, simulados de recuperação de desastres ou reconstruções de ambiente de *staging*, onde cada subsite precisa viajar junto.

Como uma exportação de rede pode ser muito maior do que uma exportação de site único, execute-a durante um período de baixo tráfego e confirme se o armazenamento de destino tem espaço livre suficiente para uploads, plugins, temas e arquivos ZIP gerados.

### Pacotes de Importação de Rede {#network-import-bundles}

A partir do Ultimate Multisite 2.12.0, o Site Exporter pode gerar **pacotes de importação de rede** — arquivos especializados projetados para restaurar a rede de forma simplificada. Um pacote de importação de rede contém todos os arquivos e metadados necessários para restaurar múltiplos sites em uma nova instalação de rede.

#### Gerando um Pacote de Importação de Rede {#generating-a-network-import-bundle}

1. Vá para **Ultimate Multisite > Exportação do Site**
2. Clique em **Gerar nova Exportação de Rede**
3. Selecione **Pacote de Importação de Rede** como o tipo de exportação
4. Escolha se deseja incluir uploads, plugins e temas
5. Clique em **Gerar**
6. Baixe o ZIP do pacote na lista **Exportações Existentes**

#### Restaurando a partir de um Pacote de Importação de Rede {#restoring-from-a-network-import-bundle}

Para restaurar sites a partir de um pacote de importação de rede:

1. Instale o Ultimate Multisite no seu host de destino
2. Complete o assistente de configuração do multisite
3. Vá para **Ultimate Multisite > Exportação do Site** na nova rede
4. Clique em **Importar Pacote de Rede**
5. Carregue o arquivo ZIP do pacote de importação de rede
6. Siga as instruções de importação na tela
7. O processo de importação restaurará todos os sites, seu conteúdo e configurações

Os pacotes de importação de rede preservam:
- Conteúdo do site (posts, páginas, tipos de conteúdo personalizados)
- Configurações e opções do site
- Funções e permissões de usuário
- Plugins e temas (se incluídos no pacote)
- Uploads de mídia (se incluídos no pacote)
- Tabelas e dados personalizados do banco de dados

## Instalando um ZIP de exportação autoexecutável {#installing-a-self-booting-export-zip}

Para restaurar um ZIP autoexecutável em um host novo:

1. Carregue o conteúdo do ZIP exportado na raiz web de destino.
2. Abra o `index.php` carregado em um navegador.
3. Siga as instruções do instalador na tela do pacote de exportação.
4. Consulte o `readme.txt` incluído para notas específicas da exportação antes de remover arquivos temporários.

Para detalhes de instalação e importação específicos do addon, consulte a [documentação do addon Site Exporter](/addons/site-exporter).

Para a ferramenta de site único adicionada no Ultimate Multisite 2.9.0, consulte [Exportar e Importar](/user-guide/administration/export-import).
