---
title: Conceptos básicos
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Conceptos Básicos {#basic-concepts}

Para un novo usuario de WordPress Multisite e para alguén que só está a começar a usar o Ultimate Multisite, pode ter muitas palabras e frases novas para aprender no principio. Aprender estas é unha tarefa importante porque necesitarás entender a plataforma e como funciona en toto.

Nesta entrada, intentaremos definir e explicar algunhas dos conceptos clave de WordPress. Algúns son má relevantes para os usuarios, outros para os desenvolvedores, e algúns para ambos.

## WordPress Multisite {#wordpress-multisite}

O **Multisite** de WordPress é un tipo de instalación de WordPress que te permite crear e taminar unha rede de múltiples websites a partir de un único dashboard de WordPress. Podes taminar todo, incluíndo o número de sitios, as características, os temas e os roles de usuario. É posible taminar centenas e milhares de sitios.

## Rede (Network) {#network}

En termos de WordPress, unha rede multisite é onde se poden taminar moitas **subsites** a partir dun único dashboard. Aínda que a creación dunha rede multisite difere entre proveedores de alojamiento, o resultado final solte é unhas algunhas directivas adicionais no ficheiro **wp-config.php** para deixar saber a WordPress que está operando neste modo específico.

Hay moitas diferencias distintas entre unha rede multisite e unha instalación de WordPress independiente, que discutiremos brevemente.

## Base de Datos (Database) {#database}

Unha base de datos é un conjunto de datos estructurado e organizado. Na terminoloxía informática, unha base de datos refírese a software usado para almacenar e organizar datos. Pensa nela como un armario onde guardas os datos en diferentes seitos chamadas tablas.

O WordPress Multisite usa unha única base de datos e cada subsite recibe as súas propias tablas con o ID do blog no prefijo, así que unha vez instalas unha instalación de rede, deberías ter estas tablas:

_wp_1_options_ \- tabela de opções para o primeiro subsítio

_wp_2_options_ \- tabela de opções para o segundo subsítio

## Provedor de alojamento (Hosting provider) {#hosting-provider}

Un provedor de alojamento é unha empresa que permite a empresas e individuos poner os seus websites dispoñibles na World Wide Web. Os servizos que ofrecen os provedores de alojamiento varían, pero habitualmente incluíno o diseño do website, o espazo de armazenamento no host e a conectividade á Internet.

## Dominio (Domain) {#domain}

Un nome de dominio é unha dirección que asolapais para visitar o teu sitio. Dille ao navegador de Internet onde buscar o teu sitio. Así como unha dirección de calle, un dominio é a forma como asolapais o teu website en liña. E, como ter unha señal na entrada da pulpería. Se queres visitar o noso website, terás de escribir a nosa dirección web no navegador do teu dispositivo, que é [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, onde [**ultimatemultisite.com**](http://ultimatemultisite.com) é o nome do dominio.

## Subdomínio (Subdomain) {#subdomain}

Un subdominio é un tipo de jerarquía de websites dentro do dominio principal, pero en lugar de usar expedidores para organizar o contenido dun website, créase como un website propio. Está presentado como [**https://site1.domain.com/**](https://site1.domain.com/) onde _site1_ é o nome do subdominio e [_domain.com_](http://domain.com) é o dominio principal.

## Subdirectorio (Subdirectory) {#subdirectory}

Un subdirectorio é un tipo de jerarquía de websites dentro dun dominio raíz que usa expedidores para organizar o contenido dun website. Un subdirectorio é o mesmo que unha subcarpeta e os nomes poden usarse intercambialmente. Está presentado como [**https://domain.com/site1**](https://domain.com/site1) onde _site1_ é o nome do subdirectorio e [_domain.com_](http://domain.com) é o dominio principal.

## Subsítio (Subsite) {#subsite}

Subsite é un sitio hijo que creas nunha rede Multisite. Pode ser unha **subdomínio** ou **subdirectorio**, dependendo de como está configurada a súa instalación de WordPress Multisite.

## Super Admin {#super-admin}

Un Super Admin de WordPress é un tipo de usuario con capacidades completas para tamallar todos os subsites dunha rede Multisite. Para os usuarios de Multisite, é o **máximo nivel de acceso** que podes proporcionar á pulsación de WordPress.

## Plugin {#plugin}

En xeral, un plugin é un conjunto de código que añade funcionalidade extra ao teu sitio de WordPress. Isto pode ser tan simple como cambiar o logo de ingreso ou tan complexo como añadir funcionalidade de comercio electrónico. _Woocommerce e Contact Form_ son exemplos de plugins.

Numa Multisite de WordPress, os plugins só se poden instalar desde o dashboard do administrador da rede por un Super Admin. Os Administradores de Subsites só poden activar e desactivar plugins dentro do seu subsite.

## Themes {#themes}

Un tema de WordPress é un grupo de arquivos (_gráficos, folhas de estilo e código_) que dicta a apariencia geral do sitio. Proporciona todos os estilismos front-end como o estilo da fonte, o disposición das páxinas, os colores, etc.

Igual como os plugins, os temas en WordPress Multisite só se poden instalar por un Super Admin e poden activarse no nivel do subsite por os administradores dos subsites.

## Site Template {#site-template}

Un **Site Template** é un modelo de sitio que se pode usar como base ao crear novos sitios na pulsación dunha rede.

Isto significa que podes crear un sitio base, activar diferentes plugins, establecer un tema activo e personalizarlo como desexas. Aínda que o teu cliente crese unha nova conta, en lugar de obter un sitio de WordPress predefinido sen ningún contido significativo dentro, recibirán unha copia do teu sitio base con todas as personalizacións e contidos xa instalados.

## Domain Mapping {#domain-mapping}

O mapeamento de domínio com o WordPress é uma forma de redireccionar os usuarios para o host correto, através do endereço de um website. N um WordPress Multisite, os subsites son criados usando uma subpasta ou um subdomínio. O mapeamento de domínio permite que os utilizadores dos subsites usem um domínio de nível superior como [**joesbikeshop.com**](http://joesbikeshop.com) para que o endereço do site deles pare mais profissional.

## SSL {#ssl}

SSL significa **Secure Sockets Layer**. É un certificado digital que autentica a identidade de um website e permite uma ligação encriptada. Hoje em dia, é usado como a tecnologia padrão para manter uma ligação à internet segura e proteger quaisquer dados sensíveis que estão a ser enviados entre dois sistemas, impedindo criminosos de lerem e modificarem qualquer informação transferida, incluindo detalhes pessoais potenciais. Os navegadores modernos exigem SSL, o que torna essencial ao criar e executar um website.

## Media {#media}

Media son imagens, áudio, vídeo e outros ficheiros que fazem um website.

Os sites em rede partilham uma única base de dados num WordPress Multisite, mantêm caminhos separados no sistema de ficheiros para os ficheiros de media.

A localização padrão do WordPress (wp-content/uploads) mantém-se; no entanto, o seu caminho é alterado para refletir o ID único do site em rede. Consequentemente, os ficheiros de media de um site em rede aparecem como wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks son as URLs permanentes da sua publicação ou página de blog individual dentro do seu site. Os permalinks são também referidos como **pretty links**. Por padrão, os URLs do WordPress usam o formato de *query string*, que parece algo assim:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite é un plugin de WordPress, feito para instalaciones de WordPress Multisite, que transforma a súa instalación de WordPress nunha rede premium de sitios – como [WordPress.com](https://WordPress.com) – permitindo aos clientes crear sitios mediante taxas mensais, trimestrais ou anuais (tamén podes crear planos Gratuitos).

## Checkout Form (Formulario de Cobrança) {#checkout-form}

O Checkout Form é un formulario de pedido único ou de varios pasos que involucra a creación de subsites, membros e contas de usuario a través do registo de Ultimate Multisite. Consta de diferentes campos e formularios de pagamento que un usuario debe enviar durante o proceso de rexistro.

## Webhook {#webhook}

Un webhook (tambén chamado web callback ou HTTP push API) é unha forma para que unha aplicación proporcione información en tempo real a outras aplicacións. Un webhook entrega datos a outras aplicacións no momento, o que significa que obténs os datos inmediatamente.

**Ultimate Multisite webhooks** abren posibilidades infinitas, permitindo aos administradores da rede hacer todos os tipos de integración que son caó crazy pero útiles, especialmente se se usan en combinación con servizos como _Zapier e IFTTT_.

## Events (Eventos) {#events}

Un Evento é unha acción que ocorre como resultado dunha acción do usuario ou outra fonte, como un clic do rato. Ultimate Multisite guarda un rexistro de todos os eventos e logs que están ocurriendo dentro da tua rede en toto. Rastrexe diferentes actividades que ocurren no teu multisite, como cambios de plano.
