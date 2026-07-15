---
title: Migrando da V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrando da V1

## Ultimate Multisite mudou da família original de lançamentos 1.x para a família de lançamentos 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versão 2.0 e superior é uma reescrita completa da base de código, o que significa que há muito pouco compartilhado entre a versão antiga e a nova. Por esse motivo, ao atualizar da 1.x para a 2.x, seus dados precisarão ser migrados para um formato que as novas versões consigam entender.

Felizmente, Ultimate Multisite 2.0+ **vem com um migrador** integrado ao core que é capaz de detectar dados da versão antiga e convertê-los para o novo formato. Essa migração acontece durante o **Setup Wizard** da versão 2.0+.

Esta lição aborda como o migrador funciona, o que fazer em casos de falha e como solucionar problemas que possam surgir durante esse processo.

_**IMPORTANTE: Antes de começar a atualizar da versão 1.x para a versão 2.0, certifique-se de criar um backup do banco de dados do seu site**_

## Primeiros passos {#first-steps}

O primeiro passo é baixar o arquivo .zip do plugin e instalar a versão 2.0 no Dashboard de administração da sua rede.

Depois que você [instalar e ativar a versão 2.0](../getting-started/installing-ultimate-multisite.md), o sistema detectará automaticamente que seu Multisite está rodando na versão legada e você verá esta mensagem no topo da página do plugin.

_**OBSERVAÇÃO:** Se você tiver Ultimate Multisite 1.x instalado no seu Multisite, terá a opção de substituir o plugin pela versão que acabou de baixar. Por favor, prossiga e clique em **Replace current with uploaded**._

<!-- Captura de tela indisponível: página do plugin mostrando a opção de substituir a v1 pela versão v2 enviada -->

A próxima página informará quais add-ons legados você tem instalados junto com a versão 1.x. Ela terá instruções sobre se a versão que você está usando é compatível com a versão 2.0 ou se você precisa instalar uma versão atualizada do add-on após a migração.

<!-- Captura de tela indisponível: mensagem no topo da página de plugins sobre a atualização para v2.0, com lista de add-ons que precisam ser atualizados -->

Quando estiver pronto para prosseguir, você pode clicar no botão que diz **Visit the Installer to finish the upgrade**.

<!-- Captura de tela indisponível: botão dizendo Visit the Installer to finish the upgrade -->

Em seguida, ele levará você à página do assistente de instalação com algumas mensagens de boas-vindas. Você só precisa clicar em **Get Started** para ir para a próxima página.

<!-- Captura de tela indisponível: página de boas-vindas do Setup Wizard com botão Get Started -->

Depois de clicar em **Get Started**, ele redirecionará você para as Verificações de pré-instalação_._ Isso mostrará suas Informações do sistema e a instalação do WordPress, e informará se ela atende aos **requisitos do Ultimate Multisite**.

<!-- Captura de tela indisponível: página de Verificações de pré-instalação mostrando a confirmação dos requisitos do sistema -->

O próximo passo é inserir sua chave de licença do Ultimate Multisite e ativar o plugin. Isso garantirá que todos os recursos, incluindo add-ons, estejam disponíveis no seu site.

<!-- Captura de tela indisponível: página de ativação de licença com campo de chave de licença e botão Agree and Activate -->

Depois de inserir sua chave, clique em **Agree & Activate**.

Após a ativação da licença, você pode iniciar a instalação propriamente dita clicando em **Install** na próxima página. Isso criará automaticamente os arquivos e o banco de dados necessários para a versão 2.0 funcionar.

<!-- Captura de tela indisponível: página de instalação mostrando o que será atualizado com o botão Install -->

## Agora, a migração {#now-the-migration}

O migrador tem um recurso de segurança integrado no qual verificará todo o seu multisite para garantir que todos os seus dados do Ultimate Multisite possam ser migrados sem problemas. Clique no botão **Run Check** para iniciar o processo.

<!-- Captura de tela indisponível: página de migração com botão Run Check para verificar se os dados podem ser convertidos -->

Depois de executar a verificação, você tem duas possibilidades: o resultado pode ser **com** erro ou **sem erro**.

### Com erro {#with-error}

Se você receber uma mensagem de erro, precisará entrar em contato com nossa equipe de suporte para que eles possam ajudar você a corrigir o erro. Certifique-se de **fornecer o log de erro** ao criar um ticket. Você pode baixar o log ou clicar no link que diz para entrar em contato com nossa equipe de suporte. Ele abrirá o widget de ajuda no lado direito da sua página com os campos pré-preenchidos para você, incluindo os logs de erro na descrição.

_**Como o sistema encontrou um erro, você não poderá prosseguir com a migração para a versão 2.0. Então, você pode reverter para a versão 1.x para continuar executando sua rede até que o erro seja corrigido.**_

### Sem erro {#without-error}

Se o sistema não encontrar nenhum erro, você verá uma mensagem de sucesso e um botão **Migrate** na parte inferior que permitirá prosseguir com a migração. Nesta página, você será lembrado de criar um backup do seu banco de dados antes de avançar, o que recomendamos fortemente. Clique em **Migrate** se você já tiver um backup.

<!-- Captura de tela indisponível: página de migração mostrando mensagem de sucesso e recomendação de backup -->

<!-- Captura de tela indisponível: botão Migrate no canto inferior direito -->

E isso é tudo o que é necessário!

Você pode continuar executando a configuração do Wizard para atualizar seu logo e outras coisas na sua rede, ou começar a navegar pelo menu da sua versão 2.0 do Ultimate Multisite e sua nova interface. Vá em frente e divirta-se.
