---
title: Conceitos Básicos
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Conceitos Básicos

Para um novo usuário do WordPress Multisite e alguém que acabou de começar a usar o Ultimate Multisite, pode haver muitas palavras e frases novas para absorver no início. Aprendê-las é uma tarefa importante porque você precisará entender a plataforma e como ela funciona como um todo.

Neste artigo, tentaremos definir e explicar alguns dos conceitos-chave do WordPress. Alguns deles são mais relevantes para usuários, outros para desenvolvedores e alguns para ambos.

## WordPress Multisite

O WordPress **Multisite** é um tipo de instalação do WordPress que permite criar e gerenciar uma rede de vários sites a partir de um único painel do WordPress. Você pode gerenciar tudo, incluindo o número de sites, recursos, temas e funções de usuário. É possível gerenciar centenas e milhares de sites.

## Rede

Em termos de WordPress, uma rede multisite é onde um número de **subsites** pode ser gerenciado a partir de um único painel. Embora a criação de uma rede multisite varie entre os provedores de hospedagem, o resultado final costuma ser apenas algumas diretivas adicionais no arquivo **wp-config.php** para informar ao WordPress que ele está operando neste modo específico.

Existem várias diferenças distintas entre uma rede multisite e uma instalação WordPress autônoma que discutiremos brevemente.

## Banco de Dados

Um banco de dados é um conjunto estruturado e organizado de dados. Em terminologia de computação, um banco de dados refere-se ao software usado para armazenar e organizar dados. Pense nele como uma gaveta de arquivos onde você armazena dados em diferentes seções chamadas tabelas.

O WordPress Multisite usa um único banco de dados e cada subsite recebe suas próprias tabelas com o ID do blog no prefixo, então, uma vez que você instale uma instalação de rede, seu banco de dados e crie um subsite, você deve ter estas tabelas:

```
_wp_1_options_ \- options table for first subsite
_wp_2_options_ \- options table for second subsite
```

## Provedor de Hospedagem

Um provedor de hospedagem é uma empresa que permite que empresas e indivíduos disponibilizem seus sites na World Wide Web. Os serviços oferecidos pelos provedores de hospedagem podem variar, mas geralmente incluem design de sites, espaço de armazenamento em um host e conectividade com a Internet.

## Domínio

Um nome de domínio é um endereço que as pessoas usam para visitar seu site. Ele indica ao navegador onde procurar seu site. Assim como um endereço de rua, um domínio é a forma como as pessoas visitam seu site online. E, como ter um sinal na frente da sua loja. Se você deseja visitar nosso site, terá que digitar nosso endereço na barra de endereço do seu navegador, que é [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ onde [**ultimatemultisite.com**](http://ultimatemultisite.com) é o nome de domínio.

## Subdomínio

Um subdomínio é um tipo de hierarquia de site sob o domínio principal, mas em vez de usar pastas para organizar o conteúdo de um site, ele praticamente tem seu próprio site. Ele é apresentado como [**https://site1.domain.com/**](https://site1.domain.com/) onde _site1_ é o nome do subdomínio e [_domain.com_](http://domain.com) é o domínio principal.

## Subdiretório

Um subdiretório é um tipo de hierarquia de site sob um domínio raiz que usa pastas para organizar o conteúdo de um site. Um subdiretório é o mesmo que uma subpasta e os nomes podem ser usados de forma intercambiável. Ele é apresentado como [**https://domain.com/site1**](https://domain.com/site1) onde _site1_ é o nome do subdiretório e [_domain.com_](http://domain.com) é o domínio principal.

## Subsite

Subsite é um site filho que você cria em uma rede Multisite. Ele pode ser um **subdomínio** ou **subdiretório**, dependendo de como sua instalação WordPress Multisite está configurada.

## Super Admin

Um Super Admin do WordPress é uma função de usuário com todas as capacidades para gerenciar todos os subsites em uma rede Multisite. Para usuários de Multisite, é o **nível mais alto de acesso** que você pode fornecer à sua instalação WordPress.

## Plugin

Em geral, um plugin é um conjunto de código que adiciona funcionalidades extras ao seu site WordPress. Isso pode ser tão simples quanto mudar o logotipo de login ou tão complexo quanto adicionar funcionalidades de comércio eletrônico. _Woocommerce e Contact Form_ são exemplos de um plugin.

Em um WordPress Multisite, plugins só podem ser instalados a partir do painel de administração da rede pelo Super Admin. Os administradores de subsite só podem ativar e desativar plugins dentro de seu subsite.

## Temas

Um tema WordPress é um conjunto de arquivos (_gráficos, folhas de estilo e código_) que determina a aparência geral do site. Ele fornece todos os estilos de front-end, como estilo de fonte, layout da página, cores, etc.

Assim como os plugins, os temas no WordPress Multisite só podem ser instalados pelo Super Admin e podem ser ativados no nível do subsite pelos administradores de subsite.

## Modelo de Site

**Site Template** é um site modelo que pode ser usado como base ao criar novos sites em sua rede.

Isso significa que você pode criar um site base, ativar diferentes plugins, definir um tema ativo e personalizá-lo da maneira que preferir. Em seguida, quando seu cliente criar uma nova conta, em vez de obter um site WordPress padrão sem conteúdo significativo, ele receberá uma cópia do seu site base com todas as personalizações e conteúdos já configurados.

## Mapeamento de Domínio

**Domain mapping** com WordPress é uma forma de redirecionar usuários para o host correto, por meio do endereço de um site. Em um WordPress Multisite, os subsites são criados usando um subdiretório ou subdomínio. O que o mapeamento de domínio faz é permitir que os usuários de subsite usem um domínio de nível superior, como [**joesbikeshop.com**](http://joesbikeshop.com), para que o endereço do seu site pareça mais profissional.

## SSL

SSL significa **Secure Sockets Layer**. É um certificado digital que autentica a identidade de um site e permite uma conexão criptografada. Atualmente, é usado como a tecnologia padrão para manter uma conexão de internet segura e proteger quaisquer dados sensíveis que são enviados entre dois sistemas, impedindo que criminosos leiam e modifiquem qualquer informação transferida, incluindo detalhes pessoais potenciais. Navegadores modernos exigem SSL, o que o torna essencial ao criar e operar um site.

## Mídia

Mídia são imagens, áudio, vídeo e outros arquivos que compõem um site.

Sites de rede compartilham um único banco de dados em um WordPress Multisite, mantendo caminhos separados no sistema de arquivos para arquivos de mídia.

O local padrão do WordPress (wp-content/uploads) permanece; no entanto, seu caminho é alterado para refletir o ID único do site de rede. Consequentemente, os arquivos de mídia de um site de rede aparecem como wp-contents/uploads/site/[id].

## Permalinks

Permalinks são os URLs permanentes de suas postagens ou páginas individuais dentro do seu site. Permalinks também são chamados de **pretty links**. Por padrão, os URLs do WordPress usam o formato de string de consulta, que parece algo assim:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite é um plugin do WordPress, feito para instalações do WordPress Multisite, que transforma sua instalação do WordPress em uma rede premium de sites – como [WordPress.com](https://WordPress.com) – permitindo que os clientes criem sites por meio de taxas mensais, trimestrais ou anuais (você também pode criar planos gratuitos).

## Checkout Form

Checkout Form é um formulário de pedido único ou em etapas que envolve a criação de subsite, associação e contas de usuário por meio do registro do Ultimate Multisite. Ele consiste em diferentes campos e formulários de pagamento que o usuário deve enviar durante o processo de inscrição.

## Webhook

Um webhook (também chamado de web callback ou HTTP push API) é uma forma de um aplicativo fornecer a outros aplicativos informações em tempo real. Um webhook entrega dados a outros aplicativos assim que acontecem, o que significa que você recebe os dados imediatamente.

**Ultimate Multisite webhooks** abrem possibilidades infinitas, permitindo que os administradores de rede façam todo tipo de integrações malucas, mas úteis, especialmente se usadas em conjunto com serviços como _Zapier e IFTTT_.

## Eventos

Um Evento é uma ação que ocorre como resultado de uma ação do usuário ou de outra fonte, como um clique do mouse. Ultimate Multisite mantém um registro de todos os eventos e logs que ocorrem em toda a sua rede. Ele rastreia diferentes atividades que acontecem em seu multisite, como alterações de plano.
