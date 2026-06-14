---
title: Búsqueda y reemplazo automático en plantillas de sitio
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search e Substitución en Plantillas del Sitio (v2)

_**Este tutorial requiere WP UItimo versión 2.x.**_

Uma das características mais potentes do Ultimate Multisite é a capacidade de adicionar texto, cor e campos selecionáveis ao formulário de registo. Depois de termos capturado esses dados, podemos usá-los para preencher o conteúdo em certas partes da plantilla do site que foi selecionada. Então, quando o novo site for publicado, o Ultimate Multisite substituirá os espaços reservados pelas informações reais inseridas durante o registo.

Por exemplo, pode fazer as suas plantillas de sites com espaços reservados (placeholders). Os espaços reservados devem ser adicionados rodeados por chaves duplas - {{placeholder_name}}.

Depois, pode simplesmente adicionar um campo de registo correspondente para capturar esses dados.

O seu cliente poderá então preencher esse campo durante o registo.

O Ultimate Multisite substituirá então os espaços reservados pelos dados fornecidos pelo cliente automaticamente.

## **Resolvendo o problema da "plantilla cheia de espaços reservados"**

Tudo isso é ótimo, mas encontramos um problema feio: agora as nossas plantillas de site - que os nossos clientes podem visitar - estão cheias de espaços reservados feios que não dizem muito.

Para resolver isso, oferecemos a opção de definir valores falsos para os espaços reservados e usamos esses valores para pesquisar e substituir o seu conteúdo nas plantillas dos sites enquanto os seus clientes estão a visitá-las.

Pode aceder ao editor de espaços reservados (placeholders) indo a **Ultimate Multisite > Settings > Sites**, rolando até à área de Opções da Plantilla do Site, e depois clicando no link **Edit Placeholders** (Editar Espaços Reservados).

![Área de Opções da Plantilla do Site na página de configurações dos Sites](/img/config/settings-sites-templates-section.png)

Isto levará-o ao editor de conteúdo dos espaços reservados, onde pode adicionar os espaços reservados e o seu respetivo conteúdo.

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
