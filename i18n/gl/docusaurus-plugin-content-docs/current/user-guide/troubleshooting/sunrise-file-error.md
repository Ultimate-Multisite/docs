---
title: Error de Sunrise File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erro Instalando o Arquivo Sunrise {#error-installing-the-sunrise-file}

O ficheiro `sunrise.php` é un ficheiro especial que o WordPress procura enquanto se inicia (bootstraps). Para que o WordPress consiga detectar o ficheiro `sunrise.php`, ele precisa estar localizado dentro da pasta **wp-content**.

Quando activa Ultimate Multisite e segue o asistente de configuración, como o que ve na captura de ecrã, o Ultimate Multisite tenta copiar o noso ficheiro `sunrise.php` para a pasta wp-content.

<!-- Captura de ecrã indisponível: Página do asistente de configuração mostrando o passo de instalação do sunrise.php -->

Na maioria das veces, conseguimos copiar o ficheiro con éxito e tudo funciona. No entanto, se algo não estiver configurado corretamente (as permissões da pasta, por exemplo), pode encontrar um cenário onde o Ultimate Multisite não consegue copiar o ficheiro.

Se ler a mensagem de erro que o Ultimo lhe dá, verá exatamente o que aconteceu aqui: **Sunrise copy failed** (Cópia do Sunrise falhou).

<!-- Captura de ecrã indisponível: Mensagem de erro mostrando Sunrise copy failed -->

Para resolver isso, pode simplesmente copiar o ficheiro `sunrise.php` dentro da pasta do plugin wp-ultimo e colá-lo na súa pasta wp-content. Después de facelo, recarregue a página do asistente e as comprobacións deberían pasar.

<!-- Captura de ecrã indisponível: Gestor de ficheiros mostrando sunrise.php dentro da pasta do plugin wp-ultimo --> De todas as formas, isto pode justificar unha comprobación geral das permissións das súas pastas para evitar problemas no futuro (non só con Ultimate Multisite, senón co outros plugins e temas tamén).

A **Health Check tool** (Herramienta de Verificación da Saúde) que forma parte do WordPress (pode acceder a ela vía o seu **admin panel principal > Tools > Health Check**) é capaz de informarse se as permissións das pastas están configuradas con valores que podrían causar problemas ao WordPress.

<!-- Captura de ecrã indisponible: Ferramenta de verificação da saúde do WordPress mostrando o estado das permissões das pastas -->
