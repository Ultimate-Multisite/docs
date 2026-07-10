---
title: Erro de Arquivo Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erro ao Instalar o Arquivo sunrise {#error-installing-the-sunrise-file}

O arquivo `sunrise.php` é um arquivo especial que o WordPress procura enquanto inicia (bootstraps) ele mesmo. Para que o WordPress consiga detectar o arquivo `sunrise.php`, ele precisa estar localizado dentro da pasta **wp-content**.

Quando você ativa o Ultimate Multisite e passa pelo assistente de configuração, como o que aparece na captura de tela, o Ultimate Multisite tenta copiar nosso arquivo `sunrise.php` para a pasta wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Na maioria das vezes, conseguimos copiar o arquivo com sucesso e tudo funciona. No entanto, se algo não estiver configurado corretamente (permissões de pasta, por exemplo), você pode encontrar um cenário em que o Ultimate Multisite não consegue copiar o arquivo.

Se você ler a mensagem de erro que o Ultimo te dá, verá exatamente o que aconteceu aqui: **Sunrise copy failed** (Cópia do Sunrise falhou).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Para resolver isso, basta copiar o arquivo `sunrise.php` dentro da pasta do plugin wp-ultimo e colá-lo na sua pasta wp-content. Depois de fazer isso, recarregue a página do assistente e as verificações devem passar.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> De qualquer forma, isso pode justificar uma verificação geral das permissões das suas pastas para evitar problemas no futuro (não apenas com o Ultimate Multisite, mas também com outros plugins e temas).

A **Health Check tool** (Ferramenta de Verificação de Saúde) que faz parte do WordPress (você pode acessá-la através do seu painel administrativo principal: **admin panel > Tools > Health Check**) é capaz de te dizer se você tem as permissões de pasta configuradas com valores que podem causar problemas com o WordPress.

<!-- Captura de tela indisponível: Ferramenta de Verificação de Saúde do WordPress mostrando o status das permissões da pasta -->
