---
title: Instalando Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalando o Ultimate Multisite

:::note
Este tutorial pressupõe que você já tenha o WordPress Multisite instalado e configurado. Para saber como fazer isso, confira [este tutorial](https://www.wpbeginner.com/glossary/multisite/) pelo WP Beginner.
:::

## Instalando o Plugin

O Ultimate Multisite está disponível gratuitamente no [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

A partir do seu **Network Admin Dashboard**, vá para **Plugins → Adicionar Novo Plugin**.

![Página Adicionar Novo Plugin do Administrador da Rede](/img/installation/add-new-plugin.png)

Procure por **"Ultimate Multisite"** (com aspas para uma correspondência exata) e ele aparecerá como o primeiro resultado. Clique em **Instalar Agora**.

![Resultados da pesquisa mostrando Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Após a instalação, clique em **Ativar Rede** para ativar o plugin em toda a sua rede.

![Plugin instalado com o botão Ativar Rede](/img/installation/plugin-installed.png)

Após a ativação, você será redirecionado automaticamente para o Assistente de Configuração (Setup Wizard).

![Plugin ativado e redirecionado para o assistente](/img/installation/plugin-activated.png)

## Assistente de Configuração (Setup Wizard)

O Assistente de Configuração irá guiá você na configuração do Ultimate Multisite em cerca de 10 minutos.

### Boas-vindas

Clique em **Começar** para começar.

![Tela de boas-vindas do Assistente de Configuração](/img/installation/wizard-welcome.png)

### Verificações Pré-instalação (Pre-install Checks)

Esta etapa verifica as informações do seu sistema e da instalação do WordPress para garantir que ele atenda aos requisitos do Ultimate Multisite. Se tudo parecer correto, clique em **Ir para o Próximo Passo**.

![Verificações pré-instalação mostrando os requisitos do sistema](/img/installation/wizard-pre-install-checks.png)

:::note Botão Ativar Rede (v2.6.1+)
Se o Ultimate Multisite foi instalado, mas **ainda não foi ativado na rede** — por exemplo, se você clicou em **Ativar** (site único) em vez de **Ativar Rede** na tela dos plugins da rede — a etapa Verificação Pré-instalação detectará isso e exibirá um botão **Ativar Rede**.

Clicar em **Ativar Rede** ativa o plugin automaticamente em toda a sua rede multisite. Uma vez ativado, o wizard continua normalmente para a etapa de instalação. Você não precisa sair do wizard para corrigir o estado de ativação.
:::

### Instalação

O instalador criará as tabelas do banco de dados necessárias e instalará o arquivo `sunrise.php` que o Ultimate Multisite precisa para funcionar. Clique em **Instalar** para prosseguir.

![Etapa de instalação mostrando tabelas do banco de dados e sunrise.php](/img/installation/wizard-installation.png)

### Sua Empresa

Preencha as informações da sua empresa e defina sua moeda padrão. Essas informações serão usadas em toda a sua plataforma WaaS. Clique em **Continuar** quando terminar.

![Etapa de configuração da sua empresa](/img/installation/wizard-your-company.png)

### Conteúdo Padrão

Esta etapa permite instalar modelos, produtos e outros conteúdos iniciais pré-definidos. Esta é uma ótima maneira de se familiarizar com os recursos do Ultimate Multisite. Clique em **Instalar** para adicionar o conteúdo padrão, ou pule esta etapa se preferir começar do zero.

![Etapa de instalação de conteúdo padrão](/img/installation/wizard-default-content.png)

### Plugins Recomendados

Instale opcionalmente plugins companheiros recomendados. Clique em **Instalar** para adicioná-los ou pule para continuar.

![Etapa de plugins recomendados](/img/installation/wizard-recommended-plugins.png)

### Pronto!

Pronto! Sua instalação do Ultimate Multisite está completa. Agora você pode começar a construir sua plataforma Website as a Service a partir do **Network Admin Dashboard**.

![Configuração concluída - Tela de pronto](/img/installation/wizard-ready.png)

![Network Admin Dashboard com o Ultimate Multisite ativo](/img/installation/network-dashboard.png)

Pode começar a se divertir!
