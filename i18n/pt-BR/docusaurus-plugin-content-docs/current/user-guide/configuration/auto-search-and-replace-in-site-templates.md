---
title: Busca e substituição automáticas em modelos de site
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Busca e substituição automáticas em modelos de site (v2)

_**Este tutorial requer WP UItimo versão 2.x.**_

Um dos recursos mais poderosos do Ultimate Multisite é a capacidade de adicionar campos arbitrários de texto, cor e seleção ao formulário de registro. Depois que esses dados forem capturados, podemos usá-los para pré-preencher o conteúdo em certas partes do modelo de site selecionado. Então, quando o novo site for publicado, o Ultimate Multisite substituirá os placeholders pelas informações reais inseridas durante o registro.

Por exemplo, você pode criar seus sites de modelo com placeholders. Os placeholders devem ser adicionados cercados por chaves duplas - {{placeholder_name}}.

Então, você pode simplesmente adicionar um campo de registro correspondente para capturar esses dados

Seu cliente poderá então preencher esse campo durante o registro.

O Ultimate Multisite substituirá então os placeholders pelos dados fornecidos pelo cliente automaticamente.

## **Resolvendo o problema do "modelo cheio de placeholders"**

Tudo isso é ótimo, mas acabamos enfrentando um problema desagradável: agora nossos modelos de site — que podem ser visitados por nossos clientes — estão cheios de placeholders feios que não dizem muito.

Para resolver isso, oferecemos a opção de definir valores fictícios para os placeholders, e usamos esses valores para buscar e substituir seu conteúdo nos sites de modelo enquanto seus clientes estão visitando.

Você pode acessar o editor de placeholders do modelo indo para **Ultimate Multisite > Settings > Sites**, rolando até a área Site Template Options e então clicando no link **Edit Placeholders**.

![Área Site Template Options na página de configurações Sites](/img/config/settings-sites-templates-section.png)

Isso levará você ao editor de conteúdo dos placeholders, onde você pode adicionar placeholders e seus respectivos conteúdos.

![Ponto de entrada do editor de placeholders do modelo](/img/config/settings-sites-templates-section.png)
