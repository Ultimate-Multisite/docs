---
title: Pesquisa e Substituição Automática em Modelos de Site
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Busca e Substituição Automática em Modelos de Site (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Este tutorial requer a versão 2.x do WP UItimo.**_

Uma das funcionalidades mais poderosas do Ultimate Multisite é a capacidade de adicionar texto, cores arbitrárias e campos selecionáveis ao formulário de registro. Depois que capturamos esses dados, podemos usá-los para pré-preencher o conteúdo em certas partes do modelo de site selecionado. Em seguida, quando o novo site for publicado, o Ultimate Multisite substituirá os placeholders pelas informações reais inseridas durante o registro.

Por exemplo, você pode criar seus sites modelo com placeholders. Os placeholders devem ser adicionados cercados por chaves duplas - {{nome_do_placeholder}}.

Em seguida, você pode simplesmente adicionar um campo de registro correspondente para capturar esses dados.

Seu cliente poderá então preencher esse campo durante o registro.

O Ultimate Multisite substituirá os placeholders pelas informações fornecidas pelo cliente automaticamente.

## **Resolvendo o problema do "modelo cheio de placeholders"** {#solving-the-template-full-of-placeholders-problem}

Tudo isso é ótimo, mas encontramos um problema feio: agora nossos modelos de site - que podem ser visitados pelos nossos clientes - estão cheios de placeholders feios que não dizem muito.

Para resolver isso, oferecemos a opção de definir valores falsos para os placeholders e usamos esses valores para pesquisar e substituir seu conteúdo nos sites modelo enquanto seus clientes estão visitando.

Você pode acessar o editor de placeholders indo em **Ultimate Multisite > Settings > Sites**, rolando até a área Opções do Modelo de Site e, em seguida, clicando no link **Edit Placeholders** (Editar Placeholders).

![Área Opções do Modelo de Site na página de configurações de Sites](/img/config/settings-sites-templates-section.png)

Isso o levará ao editor de conteúdo dos placeholders, onde você pode adicionar placeholders e seu respectivo conteúdo.

![Ponto de entrada do editor de modelos de sites](/img/config/settings-sites-templates-section.png)
