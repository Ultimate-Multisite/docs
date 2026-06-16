---
title: Instalando o Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalando o Ultimate Multisite

:::note
Este tutorial assume que você já tem o WordPress Multisite instalado e configurado. Para aprender como, consulte [este tutorial](https://www.wpbeginner.com/glossary/multisite/) do WP Beginner.
:::

## Instalando o Plugin

O Ultimate Multisite está disponível gratuitamente em [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

No seu **Painel de Administração da Rede**, vá para **Plugins → Adicionar Novo Plugin**.

![Página "Adicionar Novo Plugin" no Painel de Administração da Rede](/img/installation/add-new-plugin.png)

Pesquise por **"Ultimate Multisite"** (com aspas para uma correspondência exata) e ele aparecerá como o primeiro resultado. Clique em **Instalar Agora**.

![Resultados da pesquisa mostrando o Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Após a instalação, clique em **Ativar na Rede** para ativar o plugin em toda a sua rede.

![Plugin instalado com o botão "Ativar na Rede"](/img/installation/plugin-installed.png)

Após a ativação, você será redirecionado automaticamente para o Assistente de Configuração.

![Plugin ativado e redirecionado para o assistente](/img/installation/plugin-activated.png)

## Assistente de Configuração

O Assistente de Configuração irá guiá-lo na configuração do Ultimate Multisite em cerca de 10 minutos.

### Bem-vindo

Clique em **Começar** para iniciar.

![Tela de boas-vindas do Assistente de Configuração](/img/installation/wizard-welcome.png)

### Verificações Pré-Instalação

Esta etapa verifica as informações do seu sistema e a instalação do WordPress para garantir que ela atenda aos requisitos do Ultimate Multisite. Se tudo estiver correto, clique em **Ir para a Próxima Etapa**.

![Verificações pré-instalação mostrando os requisitos do sistema](/img/installation/wizard-pre-install-checks.png)

:::note Botão "Ativar na Rede" (v2.6.1+)
Se o Ultimate Multisite foi instalado, mas **ainda não foi ativado na rede** — por exemplo, se você clicou em **Ativar** (site único) em vez de **Ativar na Rede** na tela de plugins da rede —, a etapa de Verificações Pré-Instalação detectará isso e exibirá um botão **Ativar na Rede**.

Clicar em **Ativar na Rede** ativa o plugin em toda a sua rede multisite automaticamente. Após a ativação, o assistente continua normalmente para a etapa de instalação. Você não precisa sair do assistente para corrigir o estado de ativação.
:::

### Instalação

O instalador criará as tabelas de banco de dados necessárias e instalará o arquivo `sunrise.php` que o Ultimate Multisite precisa para funcionar. Clique em **Instalar** para prosseguir.

![Etapa de instalação mostrando as tabelas do banco de dados e o sunrise.php](/img/installation/wizard-installation.png)

### Sua Empresa

Preencha as informações da sua empresa e defina a moeda padrão. Essas informações serão usadas em toda a sua plataforma WaaS. Clique em **Continuar** quando terminar.

![Etapa de configuração "Sua Empresa"](/img/installation/wizard-your-company.png)

### Conteúdo Padrão

Esta etapa permite instalar modelos predefinidos, produtos e outros conteúdos iniciais. Esta é uma ótima maneira de se familiarizar com os recursos do Ultimate Multisite. Clique em **Instalar** para adicionar o conteúdo padrão ou ignore esta etapa se preferir começar do zero.

![Etapa de instalação de conteúdo padrão](/img/installation/wizard-default-content.png)

### Plugins Recomendados

Opcionalmente, instale plugins complementares recomendados. Clique em **Instalar** para adicioná-los ou pule para continuar.

![Etapa de plugins recomendados](/img/installation/wizard-recommended-plugins.png)

### Pronto!

É isso! Sua instalação do Ultimate Multisite está completa. Agora você pode começar a construir sua plataforma Website as a Service a partir do **Painel de Administração da Rede**.

![Configuração concluída - Tela "Pronto"](/img/installation/wizard-ready.png)

![Painel de administração da rede com o Ultimate Multisite ativo](/img/installation/network-dashboard.png)

Divirta-se!
