---
title: Formulários de Contato do Construtor de Sites
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulários de Contato do Site Builder {#site-builder-contact-forms}

O Superdav AI Agent v1.10.0 adiciona a capacidade de criar formulários de contato diretamente da interface de chat usando o agente Site Builder. Isso permite que você adicione formulários de contato totalmente funcionais a qualquer página sem sair do chat.

## Visão Geral {#overview}

A funcionalidade de formulário de contato do Site Builder (`create_contact_form`) detecta automaticamente o plugin de formulário instalado e cria um formulário de contato usando os recursos nativos desse plugin. Os plugins de formulário suportados incluem:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

O assistente seleciona automaticamente o melhor plugin de formulário disponível no seu site e gera um formulário de contato adaptado a ele.

## Criando um Formulário de Contato {#creating-a-contact-form}

Para criar um formulário de contato usando o Site Builder:

1. Abra o painel de chat do **Gratis AI Agent** no painel de administração do WordPress.
2. Mude para o agente **Site Builder** clicando no ícone do agente no cabeçalho do chat.
3. Descreva o formulário de contato que você deseja criar. Por exemplo:

   > "Adicione um formulário de contato na página de Contato com campos para nome, e-mail, mensagem e número de telefone."

   Ou simplesmente:

   > "Crie um formulário de contato para a página de Contato."

4. O Site Builder irá gerar o formulário de contato e retornará um shortcode pronto para ser incorporado.

## Usando o Shortcode Gerado {#using-the-generated-shortcode}

Depois que o Site Builder criar o formulário de contato, ele retornará um shortcode (por exemplo, `[contact-form-7 id="123"]`). Você pode:

1. **Incorporá-lo em uma página ou post** — Copie o shortcode e cole em qualquer página ou post usando o editor de blocos ou o editor clássico.
2. **Adicioná-lo via Site Builder** — Peça ao Site Builder para adicionar o formulário a uma página específica automaticamente:

   > "Adicione o formulário de contato na página de Contato."

3. **Usá-lo em um template** — Se você se sentir confortável com PHP, pode adicionar o shortcode a um arquivo de template do tema.

## Personalizando o Formulário de Contato {#customizing-the-contact-form}

Depois que o Site Builder criar o formulário de contato, você pode personalizá-lo ainda mais:

### Via Interface de Chat {#via-the-chat-interface}

Peça ao Site Builder para modificar o formulário:

> "Atualize o formulário de contato para adicionar um campo de assunto e tornar o campo de mensagem obrigatório."

O Site Builder atualizará o formulário e retornará o shortcode atualizado.

### Via Interface de Administração do Plugin de Formulário {#via-the-form-plugins-admin-interface}

Você também pode personalizar o formulário diretamente nas configurações do seu plugin de formulário:

1. Vá para **Contact Form 7** (ou seu plugin de formulário instalado) no painel de administração do WordPress.
2. Encontre o formulário criado pelo Site Builder.
3. Edite os campos do formulário, as regras de validação e as notificações por e-mail conforme necessário.

## Plugins de Formulário e Compatibilidade {#form-plugins-and-compatibility}

O Site Builder detecta automaticamente qual plugin de formulário está instalado no seu site e o utiliza para criar o formulário de contato. Se vários plugins de formulário estiverem instalados, o Site Builder prioriza eles nesta ordem:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Se nenhum desses plugins estiver instalado, o Site Builder recomendará a instalação de um antes de criar o formulário de contato.

## Notificações por E-mail {#email-notifications}

Os formulários de contato criados pelo Site Builder são configurados para enviar notificações por e-mail ao administrador do site por padrão. Você pode personalizar o endereço de e-mail do destinatário e a mensagem de notificação:

1. Vá para a interface de administração do seu plugin de formulário.
2. Encontre o formulário criado pelo Site Builder.
3. Edite as configurações de notificação por e-mail.

Para instruções detalhadas, consulte a documentação do seu plugin de formulário:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Casos de Uso de Exemplo {#example-use-cases}

### Formulário de Contato Simples {#simple-contact-form}

> "Crie um formulário de contato simples com campos para nome, e-mail e mensagem."

### Formulário de Múltiplas Etapas {#multi-step-form}

> "Crie um formulário de contato com uma primeira etapa para informações de contato e uma segunda etapa para a mensagem e método de contato preferido."

### Formulário com Lógica Condicional {#form-with-conditional-logic}

> "Crie um formulário de contato que exiba campos diferentes com base na seleção do usuário em um menu suspenso."

### Formulário com Upload de Arquivo {#form-with-file-upload}

> "Crie um formulário de contato que permita aos usuários fazer upload de um arquivo ou anexo."

:::note
A criação de formulários de contato está disponível no Superdav AI Agent v1.10.0 e versões posteriores. O agente Site Builder deve estar ativo para usar esta funcionalidade.
:::
