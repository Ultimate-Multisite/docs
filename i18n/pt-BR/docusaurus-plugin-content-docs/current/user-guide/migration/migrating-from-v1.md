---
title: Migração a partir da V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Migrando do V1

## O Ultimate Multisite mudou da sua família original de lançamentos 1.x para a família 2.x.

A versão 2.0 do Ultimate Multisite e posteriores são uma reescrita completa da base de código, o que significa que há muito pouco em comum entre a versão antiga e a nova. Por isso, ao atualizar de 1.x para 2.x, seus dados precisarão ser migrados para um formato que as novas versões possam entender.

Felizmente, o Ultimate Multisite 2.0+ **vem com um migrador** integrado ao núcleo que é capaz de detectar dados da versão antiga e convertê-los para o novo formato. Essa migração acontece durante o **Setup Wizard** da versão 2.0+.

Esta lição cobre como o migrador funciona, o que fazer em caso de falha e como solucionar problemas que possam surgir durante esse processo.

_**IMPORTANTE: Antes de começar a atualizar da versão 1.x para a 2.0, certifique-se de criar um backup do banco de dados do seu site**_

## Primeiros passos

O primeiro passo é baixar o arquivo .zip do plugin e instalar a versão 2.0 no painel de administração da sua rede.

Depois de [instalar e ativar a versão 2.0](../getting-started/installing-ultimate-multisite.md), o sistema detectará automaticamente que seu Multisite está rodando na versão legado e você verá esta mensagem no topo da página do plugin.

_**NOTA:** Se você tem o Ultimate Multisite 1.x instalado no seu Multisite, terá a opção de substituir o plugin pela versão que acabou de baixar. Por favor, vá em frente e clique em **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

A próxima página informará quais add-ons legados você tem instalados junto com a versão 1.x. Ela terá instruções sobre se a versão que você está usando é compatível com a versão 2.0 ou se você precisa instalar uma versão atualizada do add-on após a migração.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Quando estiver pronto para prosseguir, você pode clicar no botão que diz **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ele então o levará à página do assistente de instalação com algumas mensagens de boas-vindas. Você só precisa clicar em **Get Started** para avançar para a próxima página.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Depois de clicar em **Get Started**, ele redirecionará você para os Pre-install Checks_. Isso mostrará suas Informações do Sistema e a instalação do WordPress e informará se atende aos **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

O próximo passo é inserir sua chave de licença do Ultimate Multisite e ativar o plugin. Isso garantirá que todos os recursos, incluindo add-ons, estejam disponíveis em seu site.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Depois de inserir sua chave, clique em **Agree & Activate**.

Após a ativação da licença, você pode iniciar a instalação real clicando em **Install** na próxima página. Isso criará automaticamente os arquivos e banco de dados necessários para que a versão 2.0 funcione.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Agora, a migração

O migrador possui um recurso de segurança integrado que verifica toda a sua rede para garantir que todos os dados do Ultimate Multisite possam ser migrados sem problemas. Clique no botão **Run Check** para iniciar o processo.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Após executar a verificação, você tem duas possibilidades: o resultado pode ser **com** um erro ou **sem** um erro.

### Com erro

Se você receber uma mensagem de erro, precisará entrar em contato com nossa equipe de suporte para que eles possam ajudá-lo a corrigir o erro. Certifique-se de **forneça o log de erro** quando criar um ticket. Você pode baixar o log ou clicar no link que diz **entre em contato com nossa equipe de suporte**. Isso abrirá o widget de ajuda no lado direito da sua página com os campos pré-preenchidos, incluindo os logs de erro na descrição.

_**Como o sistema encontrou um erro, você não poderá prosseguir para migrar para a versão 2.0. Você pode então reverter para a versão 1.x para continuar executando sua rede até que o erro seja corrigido.**_

### Sem erro

Se o sistema não encontrar nenhum erro, você verá uma mensagem de sucesso e um botão **Migrate** na parte inferior que permitirá prosseguir com a migração. Nesta página, você será lembrado de criar um backup do seu banco de dados antes de avançar, o que recomendamos fortemente. Clique em **Migrate** se já tiver um backup.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

E isso é tudo que você precisa fazer!

Você pode continuar a executar o assistente para atualizar seu logo e outras coisas na sua rede ou começar a navegar pelo menu do Ultimate Multisite versão 2.0 e sua nova interface. Vá em frente e divirta-se.
