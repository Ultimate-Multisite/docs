---
title: Erro de Arquivo Sunrise
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Erro ao Instalar o Arquivo Sunrise

O arquivo **sunrise.php** é um arquivo especial que o WordPress procura enquanto inicializa. Para que o WordPress consiga detectar o arquivo **sunrise.php**, ele precisa estar localizado dentro da pasta **wp-content**.

Quando você ativa o Ultimate Multisite e passa pelo assistente de configuração como o que aparece na captura de tela, o Ultimate Multisite tenta copiar nosso arquivo **sunrise.php** para a pasta **wp-content**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-v6hosgLWpt.png)

Na maioria das vezes, conseguimos copiar o arquivo com sucesso e tudo funciona. No entanto, se algo não estiver configurado corretamente (por exemplo, permissões de pasta), você pode encontrar um cenário em que o Ultimate Multisite não consegue copiar o arquivo.

Se você ler a mensagem de erro que o Ultimo fornece, verá que isso aconteceu exatamente aqui: **Falha na cópia do Sunrise**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RXS5EbirfM.png)

Para corrigir isso, basta copiar o arquivo **sunrise.php** dentro da pasta do plugin **wp-ultimo** e colá-lo na sua pasta **wp-content**. Depois de fazer isso, recarregue a página do assistente e as verificações devem passar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-p6hz1I9ycl.png)

Em qualquer caso, isso pode justificar uma verificação geral das permissões das suas pastas para evitar problemas no futuro (não apenas com o Ultimate Multisite, mas também com outros plugins e temas).

A ferramenta **Health Check** que faz parte do WordPress (você pode acessá-la através do painel principal do seu site **admin panel > Tools > Health Check**) pode informar se você tem permissões de pasta configuradas com valores que podem causar problemas no WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oZEKeyxo2E.png)
