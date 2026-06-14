---
title: Formulários de Contato do Construtor de Sites
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulários de Contato do Construtor de Sites

O Superdav AI Agent v1.10.0 adiciona a capacidade de criar formulários de contato diretamente da interface de chat usando o agente Site Builder. Isso permite que você adicione formulários de contato totalmente funcionais em qualquer página sem sair do chat.

## Visão Geral

A funcionalidade de formulário de contato do Site Builder (`create_contact_form`) detecta automaticamente o plugin de formulário instalado e cria um formulário de contato usando as capacidades nativas desse plugin. Os plugins de formulário suportados incluem:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

O assistente seleciona automaticamente o melhor plugin de formulário disponível no seu site e gera um formulário de contato adaptado a esse plugin.

## Criando um Formulário de Contato

Para criar um formulário de contato usando o Site Builder:

1. Abra o painel de chat do **Gratis AI Agent** no admin do WordPress.
2. Mude para o agente **Site Builder** clicando no ícone do agente na barra de cabeçalho do chat.
3. Descreva o formulário de contato que você deseja criar. Por exemplo:

   > "Adicionar um formulário de contato à página Contato com campos para nome, e-mail, mensagem e número de telefone."

   Ou simplesmente:

   > "Criar um formulário de contato para a página Contato."

4. O Site Builder gerará o formulário de contato e retornará um shortcode pronto para ser incorporado (embed).

## Usando o Shortcode Gerado

Depois que o Site Builder criar o formulário de contato, ele retorna um shortcode (por exemplo, `[contact-form-7 id="123"]`). Você pode:

1. **Incorporá-lo em uma página ou post** — Copie o shortcode e cole-o em qualquer página ou post usando o editor de blocos ou o editor clássico.
2. **Adicioná-lo via Site Builder** — Peça ao Site Builder para adicionar o formulário a uma página específica automaticamente:

   > "Adicionar o formulário de contato à página Contato."

3. **Use-o em um template** — Se você se sentir confortável com PHP, pode adicionar o shortcode a um arquivo de template do seu tema.

## Personalizando o Formulário de Contato

Depois que o Site Builder criar o formulário de contato, você pode personalizá-lo ainda mais:

### Via Interface de Chat

Peça ao Site Builder para modificar o formulário:

> "Atualize o formulário de contato para adicionar um campo de assunto e tornar o campo de mensagem obrigatório."

O Site Builder atualizará o formulário e retornará o shortcode atualizado.

### Via Interface Administrativa do Plugin de Formulário

Você também pode personalizar o formulário diretamente nas configurações do seu plugin de formulário:

1. Vá para **Contact Form 7** (ou o seu plugin de formulário instalado) no admin do WordPress.
2. Encontre o formulário criado pelo Site Builder.
3. Edite os campos do formulário, as regras de validação e as notificações por e-mail conforme necessário.

## Plugins de Formulário e Compatibilidade

O Site Builder detecta automaticamente qual plugin de formulário está instalado no seu site e o utiliza para criar o formulário de contato. Se houver vários plugins de formulário instalados, o Site Builder os prioriza nesta ordem:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Se nenhum desses plugins estiver instalado, o Site Builder recomendará a instalação de um antes de criar o formulário de contato.

## Notificações por E-mail

Os formulários de contato criados pelo Site Builder são configurados por padrão para enviar notificações por e-mail ao administrador do site. Você pode personalizar o endereço de e-mail do destinatário e a mensagem da notificação:

1. Vá para a interface administrativa do seu plugin de formulário.
2. Encontre o formulário criado pelo Site Builder.
3. Edite as configurações de notificação por e-mail.

Para instruções detalhadas, consulte a documentação do seu plugin de formulário:

- [Notificações de E-mail do Contact Form 7](https://contactform7.com/docs/)
- [Notificações de E-mail do WPForms](https://wpforms.com/docs/)
- [Notificações de E-mail do Fluent Forms](https://fluentforms.com/docs/)
- [Notificações de E-mail do Gravity Forms](https://docs.gravityforms.com/)

## Casos de Uso Exemplos

### Formulário de Contato Simples

> "Crie um formulário de contato simples com campos para nome, e-mail e mensagem."

### Formulário em Múltiplas Etapas

> "Crie um formulário de contato com uma primeira etapa para informações de contato e uma segunda etapa para a mensagem e o método de contato preferido."

### Formulário com Lógica Condicional

> "Crie um formulário de contato que exibe campos diferentes com base na seleção do usuário em um menu suspenso (dropdown)."

### Formulário com Upload de Arquivo

> "Crie um formulário de contato que permita aos usuários fazer o upload de um arquivo ou anexo."

:::note
A criação de formulários de contato está disponível no Superdav AI Agent v1.10.0 e versões posteriores. O agente Construtor de Sites deve estar ativo para usar essa funcionalidade.
:::
