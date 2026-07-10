---
title: Erro no arquivo Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erro ao instalar o arquivo Sunrise {#error-installing-the-sunrise-file}

O arquivo sunrise.php é um arquivo especial que o WordPress procura enquanto inicializa a si mesmo. Para que o WordPress consiga detectar o arquivo sunrise.php, ele precisa estar localizado dentro da **pasta wp-content**.

Quando você ativa o Ultimate Multisite e passa pelo assistente de configuração como o que você tem na captura de tela, o Ultimate Multisite tenta copiar nosso arquivo sunrise.php para a pasta wp-content.

<!-- Captura de tela indisponível: página do assistente de configuração mostrando a etapa de instalação do sunrise.php -->

Na maioria das vezes, conseguimos copiar o arquivo com sucesso e tudo funciona. No entanto, se algo não estiver configurado corretamente (permissões de pasta, por exemplo), você pode se deparar com um cenário em que o Ultimate Multisite não consegue copiar o arquivo.

Se você ler a mensagem de erro que o Ultimo mostra, verá que foi exatamente isso que aconteceu aqui: **falha ao copiar o Sunrise**.

<!-- Captura de tela indisponível: mensagem de erro mostrando falha ao copiar o Sunrise -->

Para corrigir isso, você pode simplesmente copiar o arquivo sunrise.php dentro da pasta do plugin wp-ultimo e colá-lo na sua pasta wp-content. Depois de fazer isso, recarregue a página do assistente e as verificações deverão passar.

<!-- Captura de tela indisponível: gerenciador de arquivos mostrando o sunrise.php dentro da pasta do plugin wp-ultimo --> Em todo caso, isso pode justificar uma verificação geral das permissões das suas pastas para evitar problemas no futuro (não apenas com o Ultimate Multisite, mas também com outros plugins e temas).

A **ferramenta Health Check**, que faz parte do WordPress (você pode acessá-la pelo **painel de administração > Ferramentas > Health Check** do seu site principal), é capaz de informar se você tem permissões de pasta definidas com valores que possam causar problemas com o WordPress.

<!-- Captura de tela indisponível: ferramenta Health Check do WordPress mostrando o status das permissões de pasta -->
