---
title: Como configurar o mapeamento de dominios
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Como configurar Domain Mapping (v2) {#how-to-configure-domain-mapping-v2}

_**NOTA IMPORTANTE: Este artigo refírese á versión 2.x de Ultimate Multisite.**_

Unha das funcións máis potentes dunha rede premium é a capacidade de ofrecer aos nosos clientes a posibilidade de anexar un dominio de nivel superior aos seus sitios. Ao fin e ao cabo, que parece máis profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com)? Por iso Ultimate Multisite ofrece esa función integrada, sen necesidade de usar plugins de terceiros.

## Que é o domain mapping? {#whats-domain-mapping}

Como suxire o nome, o domain mapping é a capacidade que ofrece Ultimate Multisite de recibir unha solicitude para un dominio personalizado e mapear esa solicitude ao sitio correspondente da rede que ten anexado ese dominio concreto.

### Como configurar o domain mapping na túa rede Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

O domain mapping require certa configuración pola túa parte para funcionar. Afortunadamente, Ultimate Multisite automatiza o traballo duro por ti para que poidas cumprir os requisitos facilmente.

Durante a instalación de Ultimate Multisite, o asistente copiará e instalará automaticamente **sunrise.php** no cartafol designado. **O asistente non che permitirá continuar ata que este paso estea completado**.

<!-- Captura de pantalla non dispoñible: asistente de instalación de Ultimate Multisite co paso de sunrise.php -->

Isto significa que, unha vez que o asistente de instalación de Ultimate Multisite complete a configuración da túa rede, poderás comezar a mapear o dominio personalizado de inmediato.

Ten en conta que o domain mapping en Ultimate Multisite non é obrigatorio. Tes a opción de usar a función nativa de domain mapping de WordPress Multisite ou calquera outra solución de domain mapping.

Se precisas desactivar o domain mapping de Ultimate Multisite para dar paso a outras solucións de domain mapping, podes desactivar esta función en **Ultimate Multisite > Settings > Domain Mapping**.

![Páxina de configuración de Domain Mapping que mostra redirección de administración, mensaxe de mapeo e opcións de DNS](/img/config/domain-mapping-settings.png)

Xusto debaixo desta opción, tamén podes ver a opción **Force Admin Redirect**. Esta opción permíteche controlar se os teus clientes poderán acceder ao seu panel de administración tanto no seu dominio personalizado como no subdominio, ou só nun deles.

Se seleccionas **Force redirect to mapped domain** , os teus clientes só poderán acceder ao seu panel de administración nos seus dominios personalizados.

A opción **Force redirect to** **network domain** fará exactamente o contrario: os teus clientes só poderán acceder aos seus Dashboard no seu subdominio, mesmo se tentan iniciar sesión nos seus dominios personalizados.

E a opción **Allow access to the admin by both mapped domain domain and network domain** permítelles acceder aos seus paneis de administración tanto no subdominio como no dominio personalizado.

![Despregable de Admin Redirect expandido que mostra as tres opcións de redirección](/img/config/domain-mapping-redirect-options.png)

Hai dúas formas de mapear un dominio personalizado. A primeira é mapeando o nome de dominio desde o panel de administración da túa rede como superadministrador, e a segunda é a través do panel de administración do subsitio na páxina da conta.

Pero antes de comezar a mapear o dominio personalizado a un dos subsitios da túa rede, terás que asegurarte de que a **configuración DNS** do nome de dominio estea correctamente configurada.

###

### Asegurarse de que a configuración DNS do dominio estea correctamente configurada {#making-sure-the-domain-dns-settings-are-properly-configured}

Para que un mapeo funcione, tes que asegurarte de que o dominio que planeas mapear apunta ao enderezo IP da túa rede. Ten en conta que precisas o enderezo IP da rede —o enderezo IP do dominio onde está instalado Ultimate Multisite—, non o enderezo IP do dominio personalizado que queres mapear. Para buscar o enderezo IP dun dominio específico, suxerimos ir a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por exemplo.

Para mapear correctamente o dominio, tes que engadir un **A RECORD** na túa configuración **DNS** que apunte a ese **enderezo IP**. A xestión DNS varía moito entre distintos rexistradores de dominios, pero hai moitos titoriais en liña que tratan isto se buscas " _Creating A Record on XXXX_ ", onde XXXX é o teu rexistrador de dominios (ex.: " _Creating A Record on_ _GoDaddy_ ").

Se tes problemas para facer que isto funcione, **contacta co soporte do teu rexistrador de dominios** e poderán axudarche con esta parte.

Se planeas permitir que os teus clientes mapeen os seus propios dominios, terán que facer eles mesmos o traballo desta parte. Remíteos ao sistema de soporte do seu rexistrador se non son quen de crear o A Record.

### Mapear un nome de dominio personalizado como superadministrador {#mapping-custom-domain-name-as-super-admin}

Cando iniciaches sesión como superadministrador na túa rede, podes engadir e xestionar facilmente nomes de dominio personalizados indo a **Ultimate Multisite > Domains**.

![Páxina de lista de dominios en Ultimate Multisite](/img/admin/domains-list.png)

Nesta páxina, podes facer clic no botón **Add Domain** da parte superior e isto abrirá unha xanela modal onde podes definir e cubrir o **nome de dominio personalizado** , **o subsitio** ao que queres aplicar o nome de dominio personalizado, e decidir se queres configuralo como o nome de **dominio principal** ou non (ten en conta que podes mapear **varios nomes de dominio a un subsitio**).

![Modal Add Domain con nome de dominio, selector de sitio e conmutador de dominio principal](/img/admin/domain-add-modal.png)

Despois de introducir toda a información, podes facer clic no botón **Add Existing Domain** da parte inferior.

Isto iniciará o proceso de verificación e obtención da información DNS do dominio personalizado. Tamén verás un rexistro na parte inferior da páxina para seguir o proceso polo que está pasando. Este proceso pode tardar uns minutos en completarse.

Ultimate Multisite v2.13.0 tamén crea automaticamente o rexistro de dominio interno cando se crea un novo sitio nun host que debe tratarse como un dominio por sitio. Se o host é o dominio principal da rede, ou un dos dominios base compartidos do formulario de checkout configurados nun campo **URL do sitio**, omítese o rexistro automático de dominio mapeado para que ese dominio base compartido siga dispoñible para todos os sitios que o usen.

Cando un cliente rexistra un novo dominio mediante Domain Seller v1.3.0 ou posterior, Ultimate Multisite mapea automaticamente o dominio rexistrado ao sitio de rede do cliente por defecto. Os administradores xa non necesitan engadir un rexistro de dominio mapeado separado despois dun rexistro correcto, a menos que queiran axustar opcións como a marca de dominio principal, o estado de activación ou a xestión de SSL.

A **Etapa** ou o estado debería cambiar de **Comprobando DNS** a **Listo** se todo está configurado correctamente.

<!-- Captura de pantalla non dispoñible: fila de dominio que mostra a etapa Comprobando DNS na lista de dominios -->

<!-- Captura de pantalla non dispoñible: fila de dominio que mostra a etapa Listo co indicador de estado verde -->

Se fas clic no nome de dominio, poderás ver algunhas opcións dentro del. Vexámolas rapidamente:

![Páxina de detalle do dominio con alternadores de etapa, sitio, activo, principal e SSL](/img/admin/domain-edit.png)

**Etapa:** Esta é a etapa na que se atopa o dominio. Cando engades o dominio por primeira vez, probablemente estará na etapa **Comprobando DNS**. O proceso comprobará as entradas DNS e confirmará que son correctas. Despois, o dominio pasará á etapa **Comprobando SSL**. Ultimate Multisite comprobará se o dominio ten SSL ou non e clasificará o teu dominio como **Listo** ou **Listo (sen SSL)**.

**Sitio:** O subdominio que está asociado con este dominio. O dominio mapeado mostrará o contido deste sitio específico.

**Activo:** Podes activar ou desactivar esta opción para activar ou desactivar o dominio.

**É o dominio principal?:** Os teus clientes poden ter máis dun dominio mapeado para cada sitio. Usa esta opción para seleccionar se este é o dominio principal para o sitio específico.

**É seguro?:** Aínda que Ultimate Multisite comproba se o dominio ten un certificado SSL ou non antes de habilitalo, podes seleccionar manualmente cargar o dominio con ou sen certificado SSL. Ten en conta que, se o sitio web non ten un certificado SSL e intentas forzar a súa carga con SSL, pode darche erros.

### Mapear nome de dominio personalizado como usuario de subsite {#mapping-custom-domain-name-as-subsite-user}

Os administradores de subsite tamén poden mapear nomes de dominio personalizados desde o panel de administración do seu subsite.

Primeiro, tes que asegurarte de activar esta opción na configuración de **Mapeo de dominios**. Consulta a captura de pantalla de abaixo.

<!-- Captura de pantalla non dispoñible: configuración de mapeo de dominios que permite aos usuarios de subsite mapear dominios mediante o alternador Customer DNS Management -->

Tamén podes definir ou configurar esta opción no nivel de **Plan** ou nas opcións do produto en **Ultimate Multisite > Produtos**.

![Sección Dominios personalizados na páxina de edición do produto](/img/config/product-custom-domains.png)

Cando calquera desas opcións estea activada e un usuario de subsite teña permiso para mapear nomes de dominio personalizados, o usuario de subsite debería ver unha metabox na páxina **Account** chamada **Dominios**.

<!-- Captura de pantalla non dispoñible: metabox Dominios na páxina Account do subsite co botón Engadir dominio -->

O usuario pode facer clic no botón **Engadir dominio** e abrirase unha ventá modal con algunhas instrucións.

<!-- Captura de pantalla non dispoñible: modal Engadir dominio que mostra instrucións de rexistro A de DNS para usuarios de subsite -->

Despois, o usuario pode facer clic en **Seguinte paso** e continuar para engadir o nome de dominio personalizado. Tamén pode escoller se este será o dominio principal ou non.

<!-- Captura de pantalla non dispoñible: formulario Engadir dominio con campo de nome de dominio personalizado e alternador de dominio principal -->

<!-- Captura de pantalla non dispoñible: paso de confirmación de Engadir dominio que activa a verificación DNS -->

Facer clic en **Engadir dominio** iniciará o proceso de verificar e obter a información DNS do dominio personalizado.

### Sobre a sincronización de dominios {#about-domain-syncing}

A sincronización de dominios é un proceso no que Ultimate Multisite engade o nome de dominio personalizado á túa conta de aloxamento como dominio adicional **para que o mapeo de dominios funcione**.

A sincronización de dominios prodúcese automaticamente se o teu provedor de aloxamento ten integración coa función de mapeo de dominios de Ultimate Multisite. Actualmente, estes provedores de aloxamento son _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ e _Cpanel._

Cando unha integración de provedor de aloxamento está activa, Ultimate Multisite tamén pode poñer na cola a tarefa de creación de DNS ou subdominio no lado do provedor para sitios creados recentemente. Se ningunha integración está escoitando esa tarefa, o traballo en segundo plano omítese para evitar entradas de cola sen efecto. As comprobacións de DNS e SSL para dominios mapeados continúan executándose a través do proceso normal de etapa de dominio.

Terás que activar esta integración na configuración de Ultimate Multisite baixo a lapela **Integración**.

![Lapela Integracións na configuración de Ultimate Multisite que mostra provedores de aloxamento](/img/config/integrations-tab.png)

<!-- Captura de pantalla non dispoñible: ligazóns de configuración de provedores de aloxamento na lapela de configuración de Integracións -->

_Ten en conta que, se o teu provedor de aloxamento non é un dos provedores mencionados arriba, **terás que sincronizar manualmente ou engadir o nome de dominio** á túa conta de aloxamento._
