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

![](https://support.delta.nextpress.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2aff9b312e5b7ec95c9e2c5355480d4aa7258fd/Migration.png)

A próxima página informará quais add-ons legados você tem instalados junto com a versão 1.x. Ela terá instruções sobre se a versão que você está usando é compatível com a versão 2.0 ou se você precisa instalar uma versão atualizada do add-on após a migração.

![Message on the top of the plugins page: Thanks for updating to Ultimate Multisite version 2.0. There's a link below it that leads the user to the version upgrader. Then, there's a list of add-ons that need to be updated.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

Quando estiver pronto para prosseguir, você pode clicar no botão que diz **Visit the Installer to finish the upgrade**.

![Framed in red: button saying Visit the Installer to finish the upgrade](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

Ele então o levará à página do assistente de instalação com algumas mensagens de boas-vindas. Você só precisa clicar em **Get Started** para avançar para a próxima página.

![Setup Wizard's welcoming page. Framed in red at the bottom-right corner: Get Started button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

Depois de clicar em **Get Started**, ele redirecionará você para os Pre-install Checks_. Isso mostrará suas Informações do Sistema e a instalação do WordPress e informará se atende aos **Ultimate Multisite's requirements**.

![Pre-install Checks page showing confirmation messages that the installation meets Ultimate Multisite's requirements. Framed on red, on the bottom-right corner: Go to the next step button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

O próximo passo é inserir sua chave de licença do Ultimate Multisite e ativar o plugin. Isso garantirá que todos os recursos, incluindo add-ons, estejam disponíveis em seu site.

![License activation page listing what the support includes and what it doesn't. There's a box on the bottom to insert the plugin's license. Framed in red, on the bottom-right: Agree and activate button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

Depois de inserir sua chave, clique em **Agree & Activate**.

Após a ativação da licença, você pode iniciar a instalação real clicando em **Install** na próxima página. Isso criará automaticamente os arquivos e banco de dados necessários para que a versão 2.0 funcione.

![Installation page showing what will be updated in order to Ultimate Multisite to function. Framed in red, on the bottom-right: Install button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## Agora, a migração

O migrador possui um recurso de segurança integrado que verifica toda a sua rede para garantir que todos os dados do Ultimate Multisite possam ser migrados sem problemas. Clique no botão **Run Check** para iniciar o processo.

![Migration page explaining it will run a check to see if all your data from v1 can be converted. Framed in red, on the bottom-right corner: Run check button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

Após executar a verificação, você tem duas possibilidades: o resultado pode ser **com** um erro ou **sem** um erro.

### Com erro

Se você receber uma mensagem de erro, precisará entrar em contato com nossa equipe de suporte para que eles possam ajudá-lo a corrigir o erro. Certifique-se de **forneça o log de erro** quando criar um ticket. Você pode baixar o log ou clicar no link que diz **entre em contato com nossa equipe de suporte**. Isso abrirá o widget de ajuda no lado direito da sua página com os campos pré-preenchidos, incluindo os logs de erro na descrição.

_**Como o sistema encontrou um erro, você não poderá prosseguir para migrar para a versão 2.0. Você pode então reverter para a versão 1.x para continuar executando sua rede até que o erro seja corrigido.**_

### Sem erro

Se o sistema não encontrar nenhum erro, você verá uma mensagem de sucesso e um botão **Migrate** na parte inferior que permitirá prosseguir com a migração. Nesta página, você será lembrado de criar um backup do seu banco de dados antes de avançar, o que recomendamos fortemente. Clique em **Migrate** se já tiver um backup.

![Migration page showing a success message and a recommendation to create a backup.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![Framed in red, on the bottom-right corner: Migrate button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

E isso é tudo que você precisa fazer!

Você pode continuar a executar o assistente para atualizar seu logo e outras coisas na sua rede ou começar a navegar pelo menu do Ultimate Multisite versão 2.0 e sua nova interface. Vá em frente e divirta-se.
