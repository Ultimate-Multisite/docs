---
title: Migrando do V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrando da V1

## O Ultimate Multisite mudou da sua família de lançamentos original 1.x para a família 2.x.

O Ultimate Multisite versão 2.0 e superior é uma reescrita completa do código, o que significa que há pouquíssima semelhança entre a versão antiga e a nova. Por essa razão, ao atualizar da 1.x para a 2.x, seus dados precisarão ser migrados para um formato que as novas versões consigam entender.

Felizmente, o Ultimate Multisite 2.0+ **vem com um migrador** embutido no núcleo que é capaz de detectar dados da versão antiga e convertê-los para o novo formato. Essa migração acontece durante o **Assistente de Configuração (Setup Wizard)** da versão 2.0+.

Esta lição explica como funciona o migrador, o que fazer em caso de falha e como solucionar problemas que possam surgir durante este processo.

_**IMPORTANTE: Antes de começar a atualizar da versão 1.x para a versão 2.0, certifique-se de criar um backup do banco de dados do seu site**_

## Primeiros passos

O primeiro passo é baixar o arquivo .zip do plugin e instalar a versão 2.0 no painel de administração da sua rede.

Após você [instalar e ativar a versão 2.0](../getting-started/installing-ultimate-multisite.md), o sistema detectará automaticamente que seu Multisite está rodando na versão legada e você verá esta mensagem no topo da página do plugin.

_**NOTA:** Se você tiver o Ultimate Multisite 1.x instalado no seu Multisite, terá a opção de substituir o plugin pela versão que acabou de baixar. Por favor, prossiga e clique em **Substituir atual com carregado**._

<!-- Screenshot unavailable: Página do plugin mostrando a opção de substituir v1 pela versão carregada v2 -->

A próxima página informará quais add-ons legados você tem instalados junto com a versão 1.x. Ela terá instruções sobre se a versão que você está usando é compatível com a versão 2.0 ou se você precisa instalar uma versão atualizada do add-on após a migração.

<!-- Screenshot unavailable: Mensagem no topo da página de plugins sobre atualização para v2.0, com lista de add-ons que precisam ser atualizados -->

Assim que estiver pronto para prosseguir, você pode clicar no botão que diz **Visitar o Instalador para finalizar a atualização**.

<!-- Screenshot unavailable: Botão dizendo Visitar o Instalador para finalizar a atualização -->

Em seguida, ele o levará à página do assistente de instalação com algumas mensagens de boas-vindas. Você só precisa clicar em **Começar** para ir para a próxima página.

<!-- Screenshot unavailable: Página de boas-vindas do Assistente de Configuração com botão Começar -->

Após clicar em **Começar**, ele o redirecionará para as Pre-install Checks_._ Isso mostrará as Informações do Sistema e a instalação do WordPress e dirá se atende aos requisitos do **Ultimate Multisite**.

<!-- Screenshot unavailable: Página de Verificação Pré-instalação mostrando confirmação dos requisitos do sistema -->

O próximo passo é inserir sua chave de licença Ultimate Multisite e ativar o plugin. Isso garantirá que todos os recursos, incluindo add-ons, estarão disponíveis no seu site.

<!-- Screenshot unavailable: Página de ativação de licença com entrada da chave de licença e botão Concordar e Ativar -->

Depois de inserir sua chave, clique em **Concordar e Ativar**.

Após a ativação da licença, você pode começar a instalação real clicando em **Instalar** na próxima página. Isso criará automaticamente os arquivos e o banco de dados necessários para que a versão 2.0 funcione.

## Agora, a migração

O migrador tem um recurso de segurança embutido que verifica todo o seu multisite para garantir que todos os seus dados do Ultimate Multisite possam ser migrados sem problemas. Clique no botão **Run Check** (Executar Verificação) para iniciar o processo.

Após executar a verificação, você terá duas possibilidades: o resultado pode vir **com** um erro ou **sem** erro.

### Com Erro

Se você receber uma mensagem de erro, precisará entrar em contato com nossa equipe de suporte para que eles possam ajudar a corrigir o problema. Certifique-se de **fornecer o log de erro** ao criar um ticket. Você pode baixar o log ou clicar no link que diz "contact our support team" (contate nossa equipe de suporte). Isso abrirá o widget de ajuda na lateral direita da sua página com os campos pré-preenchidos para você, incluindo os logs de erro na descrição.

_**Como o sistema encontrou um erro, você não conseguirá prosseguir com a migração para a versão 2.0. Você poderá então fazer o rollback para a versão 1.x para continuar executando sua rede até que o erro seja corrigido.**_

### Sem Erro

Se o sistema não encontrar nenhum erro, você verá uma mensagem de sucesso e um botão **Migrate** (Migrar) na parte inferior que permitirá que você prossiga com a migração. Nesta página, você será lembrado de criar um backup do seu banco de dados antes de seguir em frente, o que recomendamos fortemente. Clique em **Migrate** se você já tiver um backup.

E é só isso!

Você pode continuar executando o assistente de configuração para atualizar seu logotipo e outras coisas na sua rede, ou começar a navegar no menu da sua versão 2.0 do Ultimate Multisite e em sua nova interface. Vá em frente e divirta-se!
