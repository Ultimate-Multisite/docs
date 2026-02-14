---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite es un plugin para WordPress Multisite que te permite ofrecer WaaS o Sitios Web como Servicio a tus clientes. Antes de sumergirnos y aprender cómo Ultimate Multisite puede ayudar a tu negocio y a tus clientes, hay algunos conocimientos fundamentales que necesitamos adquirir.

## WordPress Multisite

La mayoría de nosotros estamos familiarizados con la instalación estándar de WordPress. O la creas a través del panel de control de tu proveedor de hosting o, para los más atrevidos, configuras un nuevo servidor web y base de datos, descargas los archivos del núcleo y comienzas el proceso de instalación.

Esto funciona para millones de sitios WordPress en todo el mundo, pero desde la perspectiva de una agencia o proveedor de hosting, hablemos de volúmenes por un momento.

Si bien es muy sencillo crear un sitio WordPress o incluso cien a través de un panel de control automatizado, los problemas comienzan a aparecer cuando se trata de gestionar estos sitios. Sin una gestión adecuada, eres un blanco fácil para el malware. Gestionar significa un esfuerzo de recursos y aunque existen herramientas externas y plugins disponibles para agilizar la gestión y administración de sitios WordPress, el hecho de que los clientes mantengan acceso administrativo significa que estos esfuerzos podrían ser fácilmente anulados.

Dentro de su núcleo, WordPress proporciona una función simplemente llamada 'Multisite' que tiene sus orígenes en 2010 con el lanzamiento de WordPress 3.0. Desde entonces ha recibido varias revisiones orientadas a introducir nuevas funcionalidades y reforzar la seguridad.

En esencia, un WordPress multisite puede entenderse así: Una universidad mantiene una única instalación de WordPress pero cada facultad mantiene su propio sitio WordPress.

Para desglosar esta afirmación, echemos un vistazo a parte de la terminología básica presente no solo en la documentación de Ultimate Multisite sino también en toda la comunidad de WordPress.

### La Red

En términos de WordPress, una red multisite es donde varios subsitios pueden gestionarse desde un único dashboard. Aunque crear una red multisite difiere entre proveedores de hosting, el resultado final suele ser algunas directivas adicionales en el archivo wp-config.php para que WordPress sepa que está operando en este modo específico.

Hay varias diferencias distintivas entre una red multisite y una instalación WordPress independiente que discutiremos brevemente.

#### Subdominio vs. Subdirectorio

Una de las decisiones más inmediatas que necesitarás tomar es si la instalación multisite operará con _subdirectorios_ o _subdominios_. Ultimate Multisite funciona igualmente bien con ambas opciones, pero hay algunas diferencias arquitectónicas entre las dos configuraciones.

En la configuración de _subdirectorio_, los sitios de la red heredan una ruta basada en el nombre de dominio principal. Por ejemplo, un sitio de red llamado 'site1' tendrá su URL completa como https://domain.com/site1. En la configuración de _subdominio_, el sitio de red tendrá su propio _subdominio_ derivado del nombre de dominio principal. Así, un sitio llamado 'site1' tendrá su URL completa como https://site1.domain.com/.

Aunque ambas opciones son perfectamente válidas, el uso de _subdominios_ ofrece varias ventajas pero también requiere más reflexión y planificación en su arquitectura.

En términos de DNS, el uso de _subdirectorios_ presenta un desafío relativamente simple. Como los sitios de red son simplemente hijos de la ruta principal, solo necesita existir una única entrada de nombre de dominio para el dominio principal. Para _subdominios_ el desafío es un poco más complejo, requiriendo ya sea una entrada CNAME separada para cada sitio de red o una entrada comodín (*) en los registros DNS.

Otra área de consideración es la de SSL y la emisión y uso de certificados SSL. En la configuración de _subdirectorio_, se puede usar un único certificado de dominio ya que los sitios de red son simplemente rutas del nombre de dominio principal. Así, un certificado para domain.com proporcionará SSL adecuadamente para https://domain.com/site1, https://domain.com/site2 y así sucesivamente.

En la configuración de _subdominio_, el uso de un certificado SSL comodín es una de las opciones más comunes. Este tipo de certificado SSL proporciona cifrado para un dominio y sus _subdominios_. Por lo tanto, un certificado SSL comodín proporcionará cifrado para https://site1.domain.com, https://site2.domain.com y https://domain.com en sí.

Aunque existen otras opciones, estas a menudo son limitadas en alcance y aplicación y requieren configuración adicional y consideración respecto a su idoneidad.

#### Plugins y Temas

Lo que WordPress da, también lo quita, al menos desde la perspectiva del cliente. En una instalación WordPress independiente, si el administrador del sitio instala un plugin defectuoso o no mantiene su instalación actualizada, la única víctima y afectado de este acto es él mismo. Sin embargo, un administrador de sitio que instala un plugin defectuoso en una instalación multisite convierte en víctima a cada sitio instalado en la red.

Por esta razón, cuando se configura como multisite, WordPress elimina la capacidad de los administradores de sitio para instalar plugins y temas y en su lugar traslada esta capacidad a un administrador de red recién creado o rol de 'super admin'. Este rol privilegiado puede entonces decidir si permite a los administradores de sitios de red ver o acceder al menú de plugins en su dashboard y, de ser así, si dichos permisos se extienden a _activar_ o _desactivar_ plugins.

En este sentido, el administrador de red es responsable de instalar plugins y temas en la red y delega permisos para hacer uso de estos plugins y temas a los sitios de red. Los administradores de sitio no pueden instalar plugins y temas ni acceder a plugins y temas no asignados a su sitio.

#### Usuarios y Administradores

En un WordPress Multisite, todos los sitios de red comparten la misma base de datos y por lo tanto comparten los mismos usuarios, roles y capacidades. La forma más apropiada de pensarlo es que todos los usuarios son miembros de la red y no de un sitio en particular.

Dado este entendimiento, puede ser indeseable permitir que se creen usuarios y por esta razón WordPress Multisite elimina esta capacidad de los administradores de sitio y la traslada al administrador de red. A su vez, el administrador de red puede delegar los privilegios necesarios a un administrador de sitio para permitirle crear cuentas de usuario para su propio sitio.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Reiterando lo anterior, aunque las cuentas de usuario parecen estar relacionadas con el sitio, en realidad están asignadas a la red y por lo tanto deben ser únicas en toda la red. Puede haber casos donde los nombres de usuario no estén disponibles para registrarse por esta razón.

Aunque no es un concepto extraño en sistemas empresariales, esta fuente única de registro y autenticación de usuarios es a menudo un concepto difícil de entender para personas familiarizadas con instalaciones WordPress independientes donde la administración de usuarios es algo más sencilla.

#### Medios

Donde los sitios de red comparten una única base de datos en un WordPress Multisite, mantienen rutas separadas en el sistema de archivos para los archivos de medios.

La ubicación estándar de WordPress (wp-content/uploads) permanece; sin embargo, su ruta se altera para reflejar el ID único del sitio de red. Consecuentemente, los archivos de medios para un sitio de red aparecen como wp-contents/uploads/site/[id].

#### Enlaces Permanentes

Mencionamos antes que hay ventajas distintivas de la configuración de _subdominio_ sobre la de _subdirectorio_ y aquí está: las rutas.

En una configuración de _subdirectorio_, el sitio principal (el primer sitio creado cuando se establece la red) y los subsitios de red deben compartir la misma ruta desde el nombre de dominio. Esto tiene el potencial de generar un gran número de conflictos.

Para las entradas, se añade una ruta obligatoria /blog/ al sitio principal para evitar choques con los sitios de red. Esto significa que los enlaces permanentes bonitos como 'Nombre de la entrada' se presentarán como domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

En una configuración de _subdominio_, esta acción no es necesaria porque cada sitio de red se beneficia de una separación de dominio completa y por lo tanto no necesita depender de una única ruta. En su lugar, mantienen sus propias rutas distintas basadas en su _subdominio_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Páginas Estáticas

En la configuración de _subdirectorio_, el potencial de conflictos de nombres se extiende a las páginas estáticas ya que el sitio principal y los sitios de red comparten la misma ruta.

Para prevenir esto, WordPress proporciona un medio para poner en lista negra ciertos nombres de sitio para que no entren en conflicto con los nombres del primer sitio. Típicamente, el administrador de red introduciría las rutas raíz de las páginas del sitio principal.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

En la configuración de _subdominio_, la posibilidad de conflictos de nombres se mitiga por el _subdominio_ ya que es único para el sitio de red y no está relacionado de ninguna manera con el sitio principal.

### Registro

Dentro de la configuración de red de WordPress Multisite, hay varias opciones nuevas de registro de usuarios disponibles, permitiendo a usuarios nuevos y existentes crear sitios.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

A diferencia de las instalaciones WordPress independientes, los sitios de red no mantienen las opciones familiares para permitir registros de usuarios o asignar esos registros a roles.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Cuando se crean cuentas de usuario, esas cuentas se generan a nivel de red. Así, en lugar de pertenecer a un sitio en particular, pertenecen a la red. Esto tiene algunas ventajas y desventajas distintivas.

Por ejemplo, supongamos que tu WordPress Multisite estuviera en el negocio de noticias e información. Establecerías el multisite y luego crearías sitios de red para finanzas, tecnología, entretenimiento y otras áreas de interés mientras mantienes el control general de plugins y temas. Cada sitio de red a su vez tendría un nivel de control mucho mayor sobre la apariencia y experiencia de usuario de su sitio de red que los custom post types o las categorías de entradas regulares.

En este sentido, cuando un usuario inicia sesión, lo hace en la red y en última instancia está conectado a cada sitio de red también para proporcionar una experiencia fluida. Si tu nuevo sitio fuera basado en suscripción, esta sería la solución y resultado ideales.

Sin embargo, si la naturaleza y propósito previstos del multisite fueran ofrecer sitios de red dispares que no tienen relación entre sí, casi siempre es el caso que se requieran plugins externos o adicionales para manipular los roles de usuario.

### Dominio y SSL

Hablemos de una instalación WordPress Multisite que casi escapa a nuestra atención - WordPress.com. Este es por mucho el ejemplo más extenso de un WordPress multisite y demuestra sus amplias capacidades para ser personalizado y moldeado para cumplir un propósito.

Hoy en día en el internet moderno, el uso de SSL es casi obligatorio y los administradores de red de WordPress multisites pronto se enfrentan a estos desafíos.

En la configuración de _subdominio_, los sitios se crean basándose en el nombre de dominio raíz. Así, un sitio llamado 'site1' se crearía como 'site1.domain.com'. Haciendo uso de un certificado SSL comodín, un administrador de red puede abordar exitosamente este desafío y proporcionar capacidades de cifrado SSL para la red.

WordPress Multisite contiene una función de mapeo de dominios que permite asociar sitios de red con nombres de dominio personalizados o nombres de dominio diferentes del dominio raíz de la red.

Para los administradores de red, esto presenta una capa adicional de complejidad tanto en la configuración del nombre de dominio como en la emisión y mantenimiento de certificados SSL.

En este sentido, mientras WordPress Multisite proporciona un medio para permitir que [www.anotherdomain.com](http://www.anotherdomain.com) sea mapeado a 'site1', el administrador de red queda con el desafío de gestionar externamente las entradas DNS y la implementación de certificados SSL.

## Ultimate Multisite

Con las diferencias entre una instalación WordPress independiente y una instalación Multisite entendidas, echemos un vistazo a cómo Ultimate Multisite es el arsenal definitivo para proporcionar Sitios Web como Servicio.

### Introducción

Ultimate Multisite es tu navaja suiza cuando se trata de crear un Sitio Web como Servicio (WaaS). Piensa en Wix.com, Squarespace, WordPress.com y luego piensa en ser dueño de tu propio servicio.

Bajo el capó, Ultimate Multisite hace uso de WordPress Multisite pero lo hace de una manera que no solo resuelve la miríada de desafíos que enfrentan los administradores de red con instalaciones multisite, sino que mejora las capacidades permitiendo que se soporten una amplia variedad de casos de uso.

En las siguientes secciones, echaremos un vistazo a algunos casos de uso comunes y consideraciones requeridas para soportar esos casos.

### Casos de Uso

#### Caso 1: Una Agencia

Típicamente, las habilidades principales de una agencia residen en el diseño de sitios web, con aspectos como el hosting o el marketing siendo listados como servicios adicionales.

Para las agencias, Ultimate Multisite presenta una increíble propuesta de valor en sus capacidades para alojar y gestionar múltiples sitios web en una única plataforma. Aún más para agencias que estandarizan sus diseños en temas particulares como GeneratePress, Astra, OceanWP u otros, pueden aprovechar las capacidades de Ultimate Multisite para activar automáticamente estos temas para cada nuevo sitio.

De manera similar, con la abundancia de ofertas de precios de agencia para plugins comunes y populares, el uso de Ultimate Multisite permite a las agencias aprovechar inversiones existentes proporcionando una plataforma común desde la cual los plugins pueden ser instalados, mantenidos y utilizados.

Lo más probable es que se desee el uso de una configuración y afortunadamente Ultimate Multisite hace increíblemente fácil facilitar el mapeo de dominios y certificados SSL con sus integraciones para varios proveedores de hosting populares así como servicios como Cloudflare y cPanel.

Así, al aprovechar uno de estos proveedores o al colocar Ultimate Multisite detrás de Cloudflare, aspectos como la gestión de dominios y certificados SSL se vuelven algo triviales.

Las agencias que prefieren mantener un control estricto sobre la creación de sitios apreciarán la facilidad con la que pueden crear sitios y asociar sitios con clientes y planes a través de la interfaz optimizada de Ultimate Multisite.

![Interfaz de gestión de sitios de Ultimate Multisite](/img/admin/sites-list.png)

Se mantiene un control estricto sobre plugins y temas por producto a través de las interfaces intuitivas de Ultimate Multisite, permitiendo que los plugins y temas estén disponibles u ocultos, así como su estado de activación cuando se instancian para un nuevo sitio.

![Interfaz de limitaciones de plugins del producto](/img/config/product-plugins.png)

Los temas proporcionan funcionalidad similar, permitiendo que temas particulares se activen u oculten en la creación del sitio.

![Interfaz de limitaciones de temas del producto](/img/config/product-themes.png)

Las agencias encontrarán tranquilidad con Ultimate Multisite, permitiéndoles hacer lo que mejor saben hacer: diseñar sitios web excepcionales.

#### Caso 2: Proveedor de Nicho

Hay un viejo dicho que dice, "haz una cosa y hazla bien". Para muchos especialistas, esto significa crear un producto o servicio alrededor de una única idea central.

Quizás eres un ávido golfista promoviendo sitios web a clubes o podrías ser un ávido jugador de esports proporcionando sitios web a clanes. ¿Un individuo promoviendo un servicio de reservas a restaurantes tal vez?

Por muchas razones querrías proporcionar servicios basados en un framework y plataforma comunes. Podría ser que hayas diseñado o invertido en plugins a medida para proporcionar la funcionalidad requerida o puede ser el caso de que las mejores prácticas de la industria requieran alguna forma de enfoque estandarizado para el diseño.

Una de las características innovadoras de Ultimate Multisite es el uso de sitios plantilla. Un sitio plantilla es uno donde el tema ha sido instalado y activado, los plugins necesarios instalados y activados y las entradas o páginas de muestra creadas. Cuando un cliente crea un nuevo sitio basado en la plantilla, los contenidos y configuraciones de la plantilla se copian al sitio recién creado.

Para un proveedor de sitios y servicios de nicho, esto proporciona una ventaja incomparable en la capacidad de crear instantáneamente un sitio listo para usar con plugins y diseño personalizados. El cliente solo necesita proporcionar la entrada más mínima para completar el servicio.

Dependiendo de los requisitos, tanto las configuraciones de _subdirectorio_ como de _subdominio_ pueden ser adecuadas, en cuyo caso las elecciones de arquitectura serían entre un certificado SSL simple para _subdirectorios_ o un certificado SSL comodín para _subdominios_.

#### Caso 3: Hosting Web WordPress

Hay una miríada de formas de alojar sitios WordPress, pero rara vez es tan simple como proporcionar espacio web a un cliente con una versión preinstalada de WordPress. Esto es porque varias decisiones y consideraciones necesitan unirse para proporcionar un servicio significativo.

Ultimate Multisite sobresale en esta área al proporcionar una solución integral llave en mano para el hosting de sitios WordPress. Incluidos en la solución están los mecanismos principales para proporcionar servicios de suscripción, cobro de pagos, formularios de checkout, cupones de descuento y comunicaciones con el cliente.

Gran parte del trabajo integral requerido para instalar, configurar y mantener correctamente un WordPress Multisite es facilitado por Ultimate Multisite hasta el punto de que los administradores de red solo necesitan considerar aspectos relacionados con su servicio o nicho como niveles de producto, precios y ofertas de servicio.

Para desarrolladores que deseen integrarse con Ultimate Multisite, la solución también ofrece una API RESTful completa y Webhooks para notificación de eventos.

Sin depender de una miríada de plugins externos y licencias, Ultimate Multisite proporciona una solución rica en características y comparable a la de Wix, Squarespace, WordPress.com y otros.

### Consideraciones de Arquitectura

Aunque no es una guía completa, los siguientes elementos deberían servir como orientación para la correcta selección de tecnologías para soportar una instalación de Ultimate Multisite.

#### Hosting Compartido vs. Dedicado

Desafortunadamente no todos los proveedores de hosting son iguales y algunos practican densidades de servidor extremas. Los proveedores de bajo costo típicamente generan ingresos maximizando la densidad de servidores. Como tal, tu instalación de Ultimate Multisite puede ser solo uno de varios cientos de sitios en el mismo servidor.

Sin las salvaguardas apropiadas por parte del proveedor, los sitios en un servidor compartido experimentan el problema del 'vecino ruidoso'. Es decir, un sitio en el mismo servidor consumiendo tantos recursos que otros sitios tienen que competir por los recursos restantes. A menudo esto se presenta como sitios que son lentos o que no responden de manera oportuna.

Como proveedor de hosting web tú mismo, los efectos en cadena significarán que tus clientes experimenten velocidades pobres, bajo posicionamiento en buscadores y altas tasas de rebote, a menudo resultando en pérdida de clientes mientras buscan servicios en otro lugar.

En resumen, barato no significa bueno.

Se sabe que Ultimate Multisite funciona con varios buenos proveedores de hosting e integra bien con su entorno para proporcionar funciones como mapeo de dominios y SSL automático. Estos proveedores valoran el rendimiento y proporcionan un servicio de mayor calidad que el hosting compartido.

Para una lista de proveedores compatibles e instrucciones completas de configuración para cada uno, por favor consulta la documentación de Proveedores Compatibles.

#### Consideraciones de Rendimiento

Ultimate Multisite no es una aplicación lenta, más bien, es notablemente rápida. Sin embargo, solo rinde tan bien como la aplicación e infraestructura subyacentes y puede aprovechar solo aquello a lo que tiene acceso.

Considera esto: Eres el administrador de red de una instalación de Ultimate Multisite con 100 sitios. Algunos de esos sitios están funcionando bien y atraen varios visitantes cada día.

Este escenario sería diferente a una escala menor de digamos uno a cinco sitios, pero antes de que pase mucho tiempo, los problemas de escala serían evidentes.

Sin atención, el único sitio de Ultimate Multisite sería responsable de cumplir las solicitudes de todos los visitantes a los sitios. Estas solicitudes podrían ser para páginas PHP dinámicas o activos estáticos como hojas de estilo, javascript o archivos de medios. Ya sea uno o cien sitios, estas tareas se vuelven repetitivas, monótonas y desperdician recursos. Es innecesario usar potencia de CPU y memoria para procesar un archivo PHP cuando la salida es la misma información estática para cada solicitud.

De manera similar, una solicitud de una página PHP o HTML a su vez genera múltiples solicitudes sucesivas de scripts, hojas de estilo y archivos de imagen. Esas solicitudes se dirigen directamente a tu servidor de Ultimate Multisite.

Uno podría fácilmente resolver este problema actualizando el servidor, pero no soluciona un problema secundario: las latencias geográficas. Solo múltiples servidores en múltiples ubicaciones podrían abordar adecuadamente este problema.

Por esta razón, la mayoría de los administradores de red hacen uso de soluciones de caché de front-end y redes de distribución de contenido (CDN) para cumplir las solicitudes de páginas estáticas. Cumplir estas solicitudes y servir activos antes de que la solicitud llegue al servidor ahorra recursos de procesamiento, elimina retrasos, evita actualizaciones innecesarias y maximiza las inversiones tecnológicas.

Ultimate Multisite incluye un sofisticado add-on de Cloudflare que permite a los administradores de red colocar sus instalaciones detrás de Cloudflare y hacer uso no solo de sus capacidades de caché sino también de hosting DNS, certificados SSL y mecanismos de seguridad.

#### Copias de Seguridad

Uno podría preguntar a 50 personas por consejos sobre copias de seguridad y recibir 50 opiniones diferentes sobre estrategias de backup. La respuesta es, depende.

Lo que no se discute es que las copias de seguridad son requeridas y que es casi inconcebible que estas no sean gestionadas por el proveedor, específicamente uno que ofrece un servicio gestionado. Consecuentemente, los clientes buscarán al administrador de red para proporcionar y gestionar este servicio. A quién el administrador de red recurre es un problema completamente diferente.

Para los propósitos de esta sección, acordemos que una copia de seguridad es una copia del estado del sistema en un momento específico cuando se inició la copia. Dicho simplemente, cualquiera que sea el estado del sistema en el momento de la copia de seguridad, ese estado se captura y se guarda en la copia.

Con este entendimiento, la respuesta sobre cómo lograr las copias de seguridad y qué es mejor para tu entorno dependerá en gran medida de tus requisitos y la capacidad del proveedor de hosting para satisfacer esos requisitos. Sin embargo, en orden de más opinado a menos opinado, las siguientes opciones deberían proporcionar alguna orientación.

#### Snapshots

Los snapshots son las balas de plata para las copias de seguridad porque son fáciles, sin complicaciones (hasta que quieres restaurar) y 'simplemente funcionan'. Sin embargo, requiere algo de ayuda de tu proveedor y principalmente aplica solo si tienes un VPS (Servidor Virtual Privado) o similar. Varios proveedores listados en nuestra documentación de 'Proveedores Compatibles' ofrecen copias de seguridad sin requerir más intervención o consideración por parte del administrador de red.

Donde las copias de seguridad tradicionales apuntan a archivos y bases de datos, un snapshot apunta al disco completo. Esto significa que no solo los datos del sitio se capturan en el snapshot sino también el sistema operativo y la configuración. Para muchos esto es una ventaja distintiva ya que un nuevo sistema puede ser generado casi instantáneamente desde un snapshot y ser puesto en operación para reemplazar una instancia fallida. De manera similar, el proceso de recuperación para obtener archivos solo requiere adjuntar la imagen del snapshot como un disco a una instancia existente para que los archivos puedan ser accedidos y copiados.

Los snapshots pueden atraer un costo adicional con el proveedor de hosting, pero es una póliza de seguro contra accidentes.

#### Scripts Externos

Parece no haber escasez de scripts externos y soluciones para hacer copias de seguridad de recursos WordPress y MySQL y estos funcionarían bien para Ultimate Multisite ya que es un plugin de WordPress que hace uso del sistema de archivos y base de datos de WordPress. Así, una solución que hace copias de seguridad de sitios WordPress cubriría adecuadamente las necesidades de Ultimate Multisite.

No podemos recomendar un script sobre otro, pero nuestro consejo general es ejecutar varias pruebas de copia de seguridad y restauración para asegurar que los resultados sean los deseados y 'estar seguro de estar seguro' evaluando continuamente el script y su funcionalidad, específicamente donde se aplica alguna forma de estrategia de copia de seguridad diferencial.

Debe notarse que estos scripts, mientras se ejecutan, aumentarán la carga del sistema, lo cual debe tenerse en cuenta.

#### Plugins

No hay casi ningún problema en WordPress que no pueda resolverse con un plugin y si gestionar scripts externos no es lo tuyo, entonces quizás un plugin sea la siguiente mejor opción.

Mientras que los plugins varían en opciones y características, en su mayoría realizan la misma función y es hacer una copia de los archivos de WordPress y contenidos de la base de datos. Después, las funcionalidades difieren ya que algunos plugins pueden enviar las copias de seguridad a servicios externos como Google Drive o Dropbox o a algún tipo de servicio de almacenamiento de objetos compatible como S3, Wasabi u otros. Los plugins más completos proporcionan copias de seguridad diferenciales o algún tipo de estrategia para hacer copia solo de los datos que han cambiado para ahorrar costos de almacenamiento externo.

Al seleccionar tu plugin, ten cuidado de verificar que sea compatible con multisite. Debido a su naturaleza de operación, mientras la copia de seguridad se ejecuta puedes esperar carga temporal en el servidor hasta que el proceso haya sido completado.

#### Dominio y SSL

Ya se ha discutido mucho sobre los nombres de dominio en modo de _subdominio_ multisite. Una solución casi universal para los administradores de red es hacer uso de entradas DNS comodín.

![Ejemplo de configuración de entrada DNS comodín](/img/config/settings-domain-mapping.png)

Este tipo de entrada DNS resolverá exitosamente _subdominios_ como 'site1.domain.com' y 'site2.domain.com' a una dirección IP de 1.2.3.4, soportando así Ultimate Multisite y en mayor medida WordPress Multisite usando modo de _subdominio_.

Esto puede funcionar perfectamente bien para HTTP porque el host de destino se lee de las cabeceras HTTP, pero rara vez es la web tan simple estos días donde las transacciones HTTPS seguras son casi obligatorias.

Afortunadamente hay opciones fáciles para certificados SSL. En modo de _subdirectorio_ se puede usar un certificado de dominio regular. Estos están fácil y gratuitamente disponibles de proveedores de hosting que podrían usar el servicio gratuito LetsEncrypt u otra fuente. De lo contrario, estos están comercialmente disponibles de autoridades si puedes generar la solicitud de firma de certificado.

Para modo de _subdominio_, el uso de un certificado SSL comodín se emparejará perfectamente con un dominio comodín y permitirá que el certificado sea autoritativo para el dominio raíz y todos los _subdominios_ sin configuración extraña.

Sin embargo, debe notarse que los certificados SSL comodín pueden no funcionar con servicios como Cloudflare a menos que estés en un plan enterprise o configures la entrada a solo DNS, en cuyo caso todo el caché y optimización se omiten.

De manera predeterminada, Ultimate Multisite proporciona una solución a este problema demostrando nuestra amplia experiencia con las necesidades de WordPress multisites. Activar este simple add-on hará que Ultimate Multisite use tus credenciales de Cloudflare para agregar automáticamente entradas DNS para sitios de red en Cloudflare y establecer su modo a 'proxied'. De esta manera, cada subsitio de red, cuando se crea, tendrá la protección completa y beneficios de Cloudflare incluyendo SSL.

Dependiendo de la naturaleza y propósito de tu instalación de Ultimate Multisite, puede haber una necesidad de que los clientes usen sus propios dominios. En este caso, el administrador de red está encargado de resolver dos problemas. Uno, el hosting del nombre de dominio y dos, los certificados SSL para el dominio.

Para muchos, el uso de Cloudflare es una opción fácil. El cliente solo necesita colocar su dominio en Cloudflare, apuntar un CNAME al dominio raíz de Ultimate Multisite y mapear su dominio en Ultimate Multisite para comenzar a aprovechar su nombre de dominio personalizado.

Fuera de esto, se necesitan buscar soluciones alternativas, por lo cual Ultimate Multisite recomienda una lista de Proveedores Compatibles. Esto es porque el proceso de configurar DNS y SSL puede ser un proceso no trivial. Sin embargo, con la integración de Ultimate Multisite con estos proveedores, la complejidad se reduce mucho y el procedimiento se automatiza.

#### Plugins

Es muy probable que necesites plugins adicionales para proporcionar funcionalidad a tus clientes o sitios de red. ¿Funcionan todos los plugins con WordPress Multisite y Ultimate Multisite? Bueno, depende.

Mientras que la mayoría de los plugins son instalables en un WordPress Multisite, su activación y licenciamiento varían de autor a autor.

El desafío radica en cómo se aplica el licenciamiento, con algunos plugins requiriendo licenciamiento por dominio. Esto significaría que para algunos plugins el administrador de red necesita activar manualmente la licencia para cada plugin en cada nuevo sitio.

Por lo tanto, podría ser mejor consultar con el autor del plugin sobre cómo funcionaría su plugin con un WordPress Multisite y cualquier requisito especial o procedimiento requerido para licenciarlo.
