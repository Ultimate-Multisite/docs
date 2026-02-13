---
title: Auto Search and Replace in Site Templates
sidebar_position: 8
_i18n_hash: 81adce2fb2df1a5296590bffea6f2d14
---
# Auto Search and Replace in Site Templates (v2)

_**Este tutorial requer a versão 2.x do WP UItimo.**_

Um dos recursos mais poderosos do Ultimate Multisite é a capacidade de adicionar textos arbitrários, cores e campos de seleção ao formulário de registro. Depois de capturarmos esses dados, podemos usá-los para pré-preencher o conteúdo em determinadas partes do template de site selecionado. Em seguida, quando o novo site for publicado, o Ultimate Multisite substituirá os placeholders pelas informações reais inseridas durante o registro.

Por exemplo, você pode criar seus sites de template com placeholders. Os placeholders devem ser adicionados entre chaves duplas - {{placeholder_name}}.

Depois, basta adicionar um campo de registro correspondente para capturar esses dados.

Seu cliente então poderá preencher esse campo durante o registro.

O Ultimate Multisite substituirá os placeholders pelos dados fornecidos pelo cliente automaticamente.

## **Resolvendo o problema de "template cheio de placeholders"**

Tudo isso é ótimo, mas enfrentamos um problema feio: agora nossos templates de site - que podem ser visitados pelos nossos clientes - estão cheios de placeholders feios que não dizem muito.

Para resolver isso, oferecemos a opção de definir valores falsos para os placeholders, e usamos esses valores para pesquisar e substituir seus conteúdos nos sites de template enquanto seus clientes estão visitando.

Você pode acessar o editor de placeholders do template indo em **Ultimate Multisite > Settings > Sites**, e então, na barra lateral, clicando no link Edit Placeholders.

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

Isso levará você ao editor de conteúdo dos placeholders, onde você pode adicionar placeholders e seus respectivos conteúdos.

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
