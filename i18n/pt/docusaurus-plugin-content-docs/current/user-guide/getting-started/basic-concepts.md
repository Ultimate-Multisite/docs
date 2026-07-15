---
title: Conceitos Básicos
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Conceitos Básicos

Para um novo usuário do WordPress Multisite e alguém que está começando a usar o Ultimate Multisite, pode haver muitas palavras e frases novas para absorver no início. Aprender esses termos é uma tarefa importante porque você precisará entender a plataforma e como ela funciona como um todo.

Neste artigo, vamos tentar definir e explicar alguns dos conceitos chave do WordPress. Alguns são mais relevantes para usuários, outros para desenvolvedores e alguns para ambos.

## WordPress Multisite {#wordpress-multisite}

O **Multisite** do WordPress é um tipo de instalação do WordPress que permite criar e gerenciar uma rede de múltiplos sites a partir de um único painel (dashboard) do WordPress. Você pode gerenciar tudo, incluindo o número de sites, recursos, temas e funções de usuário. É possível gerenciar centenas e milhares de sites.

## Rede {#network}

Em termos de WordPress, uma rede multisite é onde vários **subsites** podem ser gerenciados a partir de um único painel. Embora a criação de uma rede multisite difira entre provedores de hospedagem, o resultado final geralmente envolve algumas diretivas adicionais no arquivo **wp-config.php** para avisar ao WordPress que ele está operando neste modo específico.

Existem várias diferenças distintas entre uma rede multisite e uma instalação do WordPress independente, que discutiremos brevemente.

## Banco de Dados {#database}

Um banco de dados é um conjunto estruturado e organizado de dados. Na terminologia da computação, um banco de dados refere-se a um software usado para armazenar e organizar dados. Pense nele como um armário onde você guarda dados em seções chamadas tabelas.

O WordPress Multisite usa um único banco de dados e cada subsite recebe suas próprias tabelas com o ID do blog no prefixo, então, assim que você instala uma instalação de rede e cria um subsite, você terá estas tabelas:

_wp_1_options_ - tabela de opções para o primeiro subsítio

_wp_2_options_ - tabela de opções para o segundo subsítio

## Provedor de Hospedagem {#hosting-provider}

Um provedor de hospedagem é uma empresa que permite a empresas e indivíduos disponibilizarem seus websites através da World Wide Web. Os serviços que os provedores de hospedagem oferecem variam, mas geralmente incluem design de website, espaço de armazenamento no host e conectividade com a Internet.

## Domínio {#domain}

Um nome de domínio é o endereço que as pessoas usam para visitar seu site. Ele diz ao navegador onde procurar seu site. Assim como um endereço de rua, um domínio é como as pessoas visitam seu website online. E, como ter uma placa na frente da sua loja. Se você quiser visitar nosso website, terá que digitar nosso endereço web no campo de endereço do seu navegador, que é [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), onde [**ultimatemultisite.com**](http://ultimatemultisite.com) é o nome de domínio.

## Subdomínio {#subdomain}

Um subdomínio é um tipo de hierarquia de website sob o domínio principal, mas em vez de usar pastas para organizar o conteúdo em um website, ele funciona como um website próprio. Ele é apresentado como [**https://site1.domain.com/**](https://site1.domain.com/), onde _site1_ é o nome do subdomínio e [_domain.com_](http://domain.com) é o domínio principal.

## Subdiretório {#subdirectory}

Um subdiretório é um tipo de hierarquia de website sob um domínio raiz que usa pastas para organizar o conteúdo em um website. Um subdiretório é o mesmo que uma subpasta e os nomes podem ser usados de forma intercambiável. Ele é apresentado como [**https://domain.com/site1**](https://domain.com/site1), onde _site1_ é o nome do subdiretório e [_domain.com_](http://domain.com) é o domínio principal.

## Subsítio {#subsite}

Subsite é um site filho que você cria em uma rede Multisite. Ele pode ser um **subdomínio** ou **subdiretório**, dependendo de como sua instalação do WordPress Multisite está configurada.

## Super Admin {#super-admin}

Um Super Admin do WordPress é um papel de usuário com todas as capacidades para gerenciar todos os subsites em uma rede Multisite. Para usuários Multisite, ele é o **nível de acesso mais alto** que você pode fornecer à sua instalação do WordPress.

## Plugin {#plugin}

Em geral, um plugin é um conjunto de código que adiciona funcionalidades extras ao seu site WordPress. Isso pode ser tão simples quanto mudar o logotipo de login ou tão complexo quanto adicionar funcionalidade de e-commerce. _Woocommerce_ e _Contact Form_ são exemplos de plugins.

Em uma rede Multisite do WordPress, os plugins só podem ser instalados a partir do painel de administração da rede pelo Super Admin. Os Administradores dos Subsites só podem ativar e desativar plugins dentro do seu subsite.

## Temas {#themes}

Um tema do WordPress é um grupo de arquivos (_gráficos, folhas de estilo e código_) que define a aparência geral do site. Ele fornece todos os estilos front-end, como estilização de fontes, layout de página, cores, etc.

Assim como nos plugins, os temas no WordPress Multisite só podem ser instalados pelo Super Admin e podem ser ativados no nível do subsite pelos administradores dos subsites.

## Site Template {#site-template}

**Site Template** é um modelo de site que pode ser usado como base ao criar novos sites na sua rede.

Isso significa que você pode criar um site base, ativar diferentes plugins, definir um tema ativo e personalizá-lo do jeito que quiser. Então, quando seu cliente criar uma nova conta, em vez de receber um site WordPress padrão sem conteúdo significativo, ele receberá uma cópia do seu site base com todas as personalizações e conteúdos já configurados.

## Domain Mapping {#domain-mapping}

**Mapeamento de domínio** com o WordPress é uma forma de redirecionar os usuários para o host correto, através do endereço de um site. Em um WordPress Multisite, os subsites são criados usando uma subpasta ou um subdomínio. O mapeamento de domínio permite que os usuários dos subsites usem um domínio de nível superior como [**joesbikeshop.com**](http://joesbikeshop.com) para deixar o endereço do site com uma aparência mais profissional.

## SSL {#ssl}

SSL significa **Secure Sockets Layer**. É um certificado digital que autentica a identidade de um site e permite uma conexão criptografada. Hoje, é usado como a tecnologia padrão para manter uma conexão de internet segura e proteger quaisquer dados sensíveis que estão sendo enviados entre dois sistemas, impedindo criminosos de lerem ou modificarem qualquer informação transferida, incluindo detalhes pessoais potenciais. Os navegadores modernos exigem SSL, o que torna ele essencial ao criar e gerenciar um site.

## Mídia (Media) {#media}

Mídia são imagens, áudio, vídeo e outros arquivos que compõem um website.

Sites em rede compartilham um único banco de dados no WordPress Multisite, mas mantêm caminhos separados no sistema de arquivos para os arquivos de mídia.

A localização padrão do WordPress (`wp-content/uploads`) permanece; no entanto, o caminho é alterado para refletir o ID exclusivo do site em rede. Consequentemente, os arquivos de mídia de um site em rede aparecem como `wp-contents/uploads/site/[id]`.

## Permalinks {#permalinks}

Permalinks são as URLs permanentes da sua postagem ou página individual dentro do seu site. Os permalinks também são chamados de **pretty links** (links bonitos). Por padrão, os URLs do WordPress usam o formato de *query string*, que se parece com isto:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite é um plugin do WordPress, feito para instalações de WordPress Multisite, que transforma sua instalação do WordPress em uma rede premium de sites – como o [WordPress.com](https://WordPress.com) – permitindo que os clientes criem sites através de taxas mensais, trimestrais ou anuais (você também pode criar planos Gratuitos).

## Formulário de Checkout {#checkout-form}

O Formulário de Checkout é um formulário de pedido único ou de múltiplos passos que envolve a criação de subsites, membros e contas de usuário através do registro no Ultimate Multisite. Ele consiste em diferentes campos e formulários de pagamento que o usuário deve preencher durante o processo de inscrição.

## Webhook {#webhook}

Um webhook (também chamado de web callback ou API HTTP push) é uma maneira para um aplicativo fornecer informações em tempo real a outros aplicativos. Um webhook envia dados para outros aplicativos conforme eles acontecem, o que significa que você recebe os dados imediatamente.

**Webhooks do Ultimate Multisite** abrem infinitas possibilidades, permitindo que administradores da rede façam todos os tipos de integrações malucas, mas úteis, especialmente se usados em conjunto com serviços como _Zapier e IFTTT_.

## Eventos {#events}

Um Evento é uma ação que ocorre como resultado da ação do usuário ou de outra fonte, como um clique do mouse. O Ultimate Multisite mantém um registro de todos os eventos e logs que estão acontecendo em toda a sua rede. Ele rastreia diferentes atividades ocorrendo no seu multisite, como mudanças de plano.
