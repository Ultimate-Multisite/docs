---
title: Exportação de Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportação do Site {#site-export}

A página de administração **Exportação do Site** permite que os administradores da rede empacotem um site, ou toda a rede, em um arquivo para download, útil para migrações, backups ou trabalhos de transferência.

## Exportando um site {#exporting-one-site}

Vá para **Ultimate Multisite > Exportação do Site** e escolha **Gerar nova Exportação do Site**. Selecione o subsite que deseja exportar e depois escolha se o arquivo deve incluir uploads, plugins e temas.

Quando a exportação for concluída, baixe o ZIP da lista **Exportações Existentes**. Os ZIPs de exportação agora incluem um `index.php` auto-inicializável e um `readme.txt`, para que o arquivo possa ser carregado em um novo host e iniciado sem precisar instalar primeiro um plugin de importação separado.

## Exportando toda a rede {#exporting-the-whole-network}

Use **Exportação da Rede** na página de Exportação do Site quando precisar de um único arquivo contendo todos os subsites da rede. Isso é útil antes de migrações de host, simulações de recuperação de desastres ou reconstruções em ambiente de staging onde cada subsite precisa ser transferido junto.

Como uma exportação de rede pode ser muito maior do que a de um único site, execute-a durante um período de baixo tráfego e confirme se o armazenamento de destino tem espaço livre suficiente para uploads, plugins, temas e arquivos ZIP gerados.

### Pacotes de Importação de Rede (Network Import Bundles) {#network-import-bundles}

A partir da Ultimate Multisite 2.12.0, o Site Exporter pode gerar **pacotes de importação de rede** — arquivos especializados projetados para uma restauração simplificada de sites em toda a rede. Um pacote de importação de rede contém todos os arquivos e metadados necessários para restaurar vários sites em uma nova instalação da rede.

#### Gerando um Pacote de Importação de Rede {#generating-a-network-import-bundle}

1. Vá em **Ultimate Multisite > Site Export**
2. Clique em **Generate new Network Export** (Gerar nova Exportação de Rede)
3. Selecione **Network Import Bundle** como o tipo de exportação
4. Escolha se deseja incluir uploads, plugins e temas
5. Clique em **Generate** (Gerar)
6. Baixe o arquivo ZIP do bundle da lista **Existing Exports** (Exportações Existentes)

#### Restaurando a partir de um Network Import Bundle {#restoring-from-a-network-import-bundle}

Para restaurar sites a partir de um bundle de importação de rede:

1. Instale o Ultimate Multisite no seu host de destino
2. Conclua o assistente de configuração do multisite
3. Vá em **Ultimate Multisite > Site Export** na nova rede
4. Clique em **Import Network Bundle** (Importar Bundle de Rede)
5. Faça o upload do arquivo ZIP do bundle de importação de rede
6. Siga as instruções de importação na tela
7. O processo de importação restaurará todos os sites, seu conteúdo e configurações

Os bundles de importação de rede preservam:
- Conteúdo do site (posts, páginas, tipos de posts personalizados)
- Configurações e opções do site
- Funções e permissões de usuário
- Plugins e temas (se incluídos no bundle)
- Uploads de mídia (se incluídos no bundle)
- Tabelas de banco de dados personalizadas e dados

## Instalando um ZIP de exportação auto-inicializável {#installing-a-self-booting-export-zip}

Para restaurar um ZIP auto-inicializável em um host novo:

1. Faça o upload do conteúdo do ZIP exportado para a raiz web de destino.
2. Abra o `index.php` carregado no navegador.
3. Siga as instruções de instalação na tela do pacote de exportação incluído.
4. Verifique o `readme.txt` incluído no bundle para notas específicas da exportação antes de remover arquivos temporários.

Para detalhes de instalação e importação específicos de addons, consulte a documentação do [Site Exporter addon](/addons/site-exporter).

Para a ferramenta de site único adicionada no Ultimate Multisite 2.9.0, veja [Export & Import](/user-guide/administration/export-import).
