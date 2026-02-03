---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite es un plugin de WordPress Multisite que te permite ofrecer un WaaS o Websites as a Service a los clientes. Antes de sumergirnos y aprender cómo Ultimate Multisite puede ayudar a tu negocio y a tus clientes, hay algunos conocimientos fundamentales que necesitamos adquirir.

## La Red de WordPress Multisite

La mayoría de nosotros estamos familiarizados con la instalación estándar de WordPress. La creas a través del panel de control de tu proveedor de hosting o, para los valientes, configuras un nuevo servidor web y base de datos, descargas los archivos principales y comienzas el proceso de instalación.

Esto funciona para millones de sitios de WordPress en todo el mundo, pero desde la perspectiva de una agencia o proveedor de hosting, hablemos de volúmenes por un momento.

Aunque es sencillo crear un sitio de WordPress o incluso cien a través de un panel de control automatizado, los problemas comienzan a aparecer cuando se trata de gestionar estos sitios. Si no se gestionan, eres un objetivo principal para el malware. Gestionar implica un esfuerzo y recursos, y aunque existen herramientas y plugins externos disponibles para ayudar a agilizar la gestión y administración de sitios de WordPress, el hecho de que los clientes mantengan acceso administrativo significa que estos esfuerzos podrían ser fácilmente vencidos.

En su núcleo, WordPress ofrece una característica simplemente titulada ‘Multisite’ que data de 2010 con el lanzamiento de WordPress 3.0. Desde entonces ha recibido varias revisiones destinadas a introducir nuevas funciones y reforzar la seguridad.

En esencia, un multisite de WordPress puede considerarse así: una universidad mantiene una sola instalación de WordPress, pero cada facultad mantiene su propio sitio de WordPress.

Para desglosar esta afirmación, echemos un vistazo a algunos de los términos básicos presentes no solo en la documentación de Ultimate Multisite, sino también en la comunidad de WordPress.

### La Red

En términos de WordPress, una red multisite es aquella donde varios subsitios pueden gestionarse desde un único panel de control. Aunque crear una red multisite difiere entre proveedores de hosting, el resultado final suele ser unas pocas directivas adicionales en el archivo wp-config.php para que WordPress sepa que está operando en este modo específico.

Hay varias diferencias distintas entre una red multisite y una instalación de WordPress independiente que discutiremos brevemente.

#### Subdominio vs. Subdirectorio

Una de las decisiones más inmediatas que tendrás que tomar es si la instalación multisite operará con _subdirectorios_ o _subdominios_. Ultimate Multisite funciona igual de bien con ambas opciones, pero existen algunas diferencias arquitectónicas entre las dos configuraciones.

En la configuración de _subdirectorio_, los sitios de la red heredan una ruta basada en el nombre de dominio principal. Por ejemplo, un sitio de la red etiquetado como ‘site1’ tendrá su URL completa como https://domain.com/site1. En la configuración de _subdominio_, el sitio de la red tendrá su propio _subdominio_ derivado del nombre de dominio principal. Así, un sitio etiquetado como ‘site1’ tendrá su URL completa como https://site1.domain.com/.

Aunque ambas opciones son elecciones perfectamente válidas, el uso de _subdominios_ ofrece una serie de ventajas, pero también requiere más reflexión y planificación en su arquitectura.

En términos de DNS, el uso de _subdirectorios_ presenta un desafío relativamente sencillo. Como los sitios de la red son simplemente hijos de la ruta principal, solo necesita existir una entrada de nombre de dominio para el dominio principal. Para los _subdominios_, el desafío es un poco más complejo, requiriendo ya sea una entrada CNAME separada para cada sitio de la red o una entrada comodín (*) en los registros DNS.

Otra área de consideración es la SSL y la emisión y uso de certificados SSL. En la configuración de _subdirectorio_, se puede usar un solo certificado de dominio, ya que los sitios de la red son simplemente rutas del nombre de dominio principal. Así, un certificado para domain.com proporcionará adecuadamente SSL para https://domain.com/site1, https://domain.com/site2, etc.

En la configuración de _subdominio_, el uso de un certificado SSL comodín es una de las opciones más comunes. Este tipo de certificado SSL proporciona cifrado para un dominio y sus _subdominios_. Por lo tanto, un certificado SSL comodín proporcionará cifrado para https://site1.domain.com, https://site2.domain.com y https://domain.com mismo.

Aunque existen otras opciones, a menudo están limitadas en alcance y aplicación y requieren configuración adicional y consideración en cuanto a su idoneidad.

#### Plugins y Temas

Lo que WordPress da, también lo quita, al menos desde la perspectiva del cliente. En una instalación de WordPress independiente, si el administrador del sitio instala un plugin malo o no mantiene su instalación actualizada, la única víctima y víctima de este acto es él mismo. Sin embargo, un administrador de sitio que instala un plugin malo en una instalación multisite crea una víctima de cada sitio instalado en la red.

Por esta razón, cuando se configura como multisite, WordPress elimina la capacidad de los administradores de sitio para instalar plugins y temas y, en su lugar, transfiere esta capacidad a un nuevo administrador de red o rol de ‘super admin’. Este rol privilegiado puede decidir si permite a los administradores de los sitios de la red ver o acceder al menú de plugins en su panel de control y, si es así, si esos permisos se extienden a _activar_ o _desactivar_ plugins.

En este sentido, el administrador de la red es responsable de instalar plugins y temas en la red y delega permisos para usar estos plugins y temas a los sitios de la red. Los administradores de sitio no pueden instalar plugins y temas ni acceder a plugins y temas que no estén asignados a su sitio.

#### Usuarios y Administradores

En un WordPress Multisite, todos los sitios de la red comparten la misma base de datos y, por lo tanto, comparten los mismos usuarios, roles y capacidades. La forma más adecuada de pensarlo es que todos los usuarios son miembros de la red y no de un sitio en particular.

Dada esta comprensión, puede resultar indeseable permitir la creación de usuarios y, por esta razón, WordPress Multisite elimina esta capacidad de los administradores de sitio y la transfiere al administrador de la red. A su vez, el administrador de la red puede delegar los privilegios necesarios a un administrador de sitio para permitirle crear cuentas de usuario para su propio sitio.

Reiterando la afirmación anterior, aunque las cuentas de usuario parezcan estar relacionadas con el sitio, en realidad se asignan a la red y, por lo tanto, deben ser únicas en toda la red. Puede haber casos en los que los nombres de usuario no estén disponibles para registrarse debido a esta razón.

Aunque no es un concepto extraño en los sistemas empresariales, esta única fuente de registro y autenticación de usuarios suele ser un concepto difícil de comprender para las personas familiarizadas con instalaciones de WordPress independientes, donde la administración de usuarios es algo más sencilla.

#### Medios

Cuando los sitios de la red comparten una sola base de datos en un WordPress Multisite, mantienen rutas separadas en el sistema de archivos para los archivos multimedia.

La ubicación estándar de WordPress (wp-content/uploads) permanece; sin embargo, su ruta se altera para reflejar el ID único del sitio de la red. En consecuencia, los archivos multimedia de un sitio de la red aparecen como wp-contents/uploads/site/[id].

#### Enlaces permanentes

Mencionamos antes que existen ventajas distintivas de _subdominio_ sobre _subdirectorio_ y aquí están: rutas.

En una configuración de _subdirectorio_, el sitio principal (el primer sitio creado cuando se establece la red) y los subsitios de la red deben compartir la misma ruta que parte del nombre de dominio principal. Esto tiene el potencial de generar una gran cantidad de conflictos.

Para las publicaciones, se añade una ruta obligatoria /blog/ al sitio principal para evitar conflictos con los sitios de la red. Esto significa que los enlaces permanentes bonitos como ‘Post name’ se presentarán como domain.name/blog/post-name/

En una configuración de _subdominio_, esta acción no es necesaria porque cada sitio de la red se beneficia de una separación completa del dominio y, por lo tanto, no necesita depender de una sola ruta. En su lugar, mantienen sus propias rutas distintas basadas en su _subdominio_.

#### Páginas estáticas

En la configuración de _subdirectorio_, el potencial de conflictos de nombres se extiende a las páginas estáticas, ya que el sitio principal y los sitios de la red comparten la misma ruta.

Para evitar esto, WordPress proporciona un medio para bloquear ciertos nombres de sitio para que no entren en conflicto con los nombres del primer sitio. Normalmente, el administrador de la red ingresaría las rutas raíz de las páginas del sitio principal.

En la configuración de _subdominio_, la posibilidad de conflictos de nombres se mitiga por el _subdominio_, ya que es único para el sitio de la red y no está relacionado de ninguna manera con el sitio principal.

### Registro

Dentro de los ajustes de la red de WordPress Multisite, hay varias nuevas opciones de registro de usuarios disponibles, que permiten a los usuarios nuevos y existentes crear sitios.

A diferencia de las instalaciones de WordPress independientes, los sitios de la red no mantienen las opciones familiares para permitir registros de usuarios o asignar esos registros a roles.

Cuando se crean cuentas de usuario, esas cuentas se generan a nivel de red. Por lo tanto, en lugar de pertenecer a un sitio en particular, pertenecen a la red. Esto tiene algunas ventajas y desventajas distintivas.

Por ejemplo, supongamos que tu WordPress Multisite se dedicaba a noticias e información. Establecerías el multisite y luego crearías sitios de la red para finanzas, tecnología, entretenimiento y otras áreas de interés, manteniendo el control general de plugins y temas. Cada sitio de la red tendría, a su vez, un nivel mucho mayor de control sobre la apariencia y la experiencia del usuario de su sitio de la red que los tipos de contenido personalizados o las categorías de publicaciones regulares.

En este sentido, cuando un usuario inicia sesión, inicia sesión en la red y, en última instancia, también en cada sitio de la red para proporcionar una experiencia fluida. Si tu nuevo sitio se basa en suscripción, esta sería la solución y el resultado ideal.

Sin embargo, si la naturaleza y el propósito previsto del multisite era ofrecer sitios de la red dispares que no tienen relación entre sí, casi siempre es el caso que se requieran plugins externos o adicionales para manipular los roles de usuario.

### Dominio y SSL

Hablemos de una instalación de WordPress Multisite que casi escapa nuestra atención: Wordpress.com. Es, con mucho, el ejemplo más extenso de un WordPress multisite y demuestra sus amplias capacidades para ser personalizado y moldeado para cumplir un propósito.

En la era moderna de Internet, el uso de SSL es casi obligatorio y los administradores de redes de WordPress multisites pronto se enfrentan a estos desafíos.

En la configuración de _subdominio_, los sitios se crean en función del nombre de dominio raíz. Así, un sitio etiquetado como ‘site1’ se crearía como ‘site1.domain.com’. Al usar un certificado SSL comodín, un administrador de la red puede abordar con éxito este desafío y proporcionar capacidades de cifrado SSL para la red.

WordPress Multisite contiene una función de mapeo de dominios que permite que los sitios de la red se asocien con nombres de dominio personalizados o nombres de dominio diferentes del dominio raíz de la red.

Para los administradores de la red, esto presenta una capa adicional de complejidad tanto en la configuración del nombre de dominio como en la emisión y mantenimiento de certificados SSL.

En este sentido, aunque WordPress Multisite proporciona un medio para permitir que [www.anotherdomain.com](http://www.anotherdomain.com) se asocie con ‘site1’, el administrador de la red queda con el desafío de gestionar externamente las entradas DNS y la implementación de certificados SSL.

## Ultimate Multisite

Con las diferencias entre una instalación de WordPress independiente y una instalación Multisite comprendidas, echemos un vistazo a cómo Ultimate Multisite es el arsenal definitivo para proporcionar Websites as a Service.

### Introducción

Ultimate Multisite es tu navaja suiza cuando se trata de crear un Website as a Service (WaaS). Piensa en Wix.com, Squarespace, WordPress.com y luego piensa en poseer tu propio servicio.

En el interior, Ultimate Multisite utiliza WordPress Multisite, pero lo hace de una manera que no solo resuelve la miríada de desafíos que enfrentan los administradores de redes con instalaciones multisite, sino que mejora las capacidades permitiendo que se soporten una amplia variedad de casos de uso.

En las siguientes secciones, echaremos un vistazo a algunos casos de uso comunes y consideraciones necesarias para apoyar esos casos.

### Casos de Uso

#### Caso 1: Una Agencia

Típicamente, las habilidades centrales de una agencia se encuentran en el diseño de sitios web, con aspectos como su hosting o marketing listados como servicios adicionales.

Para las agencias, Ultimate Multisite presenta una propuesta de valor increíble en sus habilidades para alojar y gestionar múltiples sitios web en una sola plataforma. Aún más para las agencias que estandarizan sus diseños en temas particulares como GeneratePress, Astra, OceanWP u otros, pueden aprovechar las habilidades de Ultimate Multisite para activar automáticamente estos temas para cada nuevo sitio.

De manera similar, con la abundancia de ofertas de precios para agencias a plugins comunes y populares, el uso de Ultimate Multisite permite a las agencias aprovechar las inversiones existentes al proporcionar una plataforma común desde la cual se pueden instalar, mantener y utilizar plugins.

Lo más probable es que se desee el uso de una configuración y, afortunadamente, Ultimate Multisite lo hace increíblemente fácil de facilitar el mapeo de dominios y certificados SSL con sus integraciones para varios proveedores de hosting populares, así como servicios como Cloudflare y cPanel.

Así, al aprovechar uno de estos proveedores o al colocar Ultimate Multisite detrás de Cloudflare, aspectos como la gestión de dominios y certificados SSL se vuelven algo trivial.

Las agencias que prefieren mantener un control estricto sobre la creación de sitios apreciarán la facilidad con la que pueden crear sitios y asociar sitios con clientes y planes a través de la interfaz optimizada de Ultimate Multisite.

El control estricto sobre plugins y temas se mantiene por producto a través de las interfaces intuitivas de Ultimate Multisite, que permiten que los plugins y temas estén disponibles o ocultos, así como su estado de activación cuando se instancian para un nuevo sitio.

Los temas proporcionan una funcionalidad similar, permitiendo que temas particulares se activen o se oculten al crear un sitio.

Las agencias encontrarán tranquilidad con Ultimate Multisite, que les permite hacer lo que mejor saben hacer: diseñar sitios web excepcionales.

#### Caso 2: Proveedor de Nicho

Hay un viejo dicho que dice: “haz una cosa y hazla bien”. Para muchos especialistas, esto significa crear un producto o servicio alrededor de una idea central única.

Tal vez seas un golfista apasionado que promociona sitios web a clubes o podrías ser un gamer de esports apasionado que proporciona sitios web a clanes. ¿Un individuo que promociona un servicio de reservas a restaurantes, quizás?

Por muchas razones, querrías proporcionar servicios basados en un marco y plataforma comunes. Podría ser que hayas diseñado o invertido en plugins a medida para proporcionar la funcionalidad requerida, o puede ser que las mejores prácticas de la industria requieran algún tipo de enfoque estandarizado de diseño.

Una de las características innovadoras de Ultimate Multisite es el uso de sitios plantilla. Un sitio plantilla es aquel donde el tema ha sido instalado y activado, los plugins necesarios instalados y activados, y se han creado publicaciones o páginas de muestra. Cuando un cliente crea un nuevo sitio basado en la plantilla, el contenido y la configuración de la plantilla se copian al sitio recién creado.

Para un proveedor de sitios y servicios de nicho, esto proporciona una ventaja inigualable en la capacidad de crear instantáneamente un sitio listo para usar con plugins y diseño personalizados. El cliente solo necesita proporcionar la entrada más mínima para completar el servicio.

Dependiendo de los requisitos, tanto las configuraciones de _subdirectorio_ como de _subdominio_ pueden ser adecuadas; en cuyo caso las opciones de arquitectura serían entre un certificado SSL simple para _subdirectorios_ o un certificado SSL comodín para _subdominios_.

#### Caso 3: Hosting Web de WordPress

Hay una miríada de formas de alojar sitios de WordPress, pero rara vez es tan simple como proporcionar espacio web a un cliente con una versión preinstalada de WordPress. Esto se debe a que una serie de decisiones y consideraciones deben unirse para proporcionar un servicio significativo.

Ultimate Multisite sobresale en esta área al proporcionar una solución integral llave en mano para el hosting de sitios de WordPress. La solución incluye los mecanismos centrales para proporcionar servicios de suscripción, recolección de pagos, formularios de pago, cupones de descuento y comunicaciones con clientes.

Gran parte del trabajo integral necesario para instalar, configurar y mantener correctamente un WordPress Multisite es facilitado por Ultimate Multisite en la medida en que los administradores de la red solo necesitan considerar aspectos relacionados con su servicio o nicho, como niveles de producto, precios y ofertas de servicio.

Para los desarrolladores que deseen integrarse con Ultimate Multisite, la solución también ofrece una API RESTful completa y Webhooks para notificaciones de eventos.

Sin depender de una miríada de plugins y licencias externas, Ultimate Multisite ofrece una solución rica en funciones y comparable con la de Wix, Squarespace, WordPress.com y otros.

### Consideraciones de Arquitectura

Aunque no es una guía completa, los siguientes elementos deben servir como orientación para la selección correcta de tecnologías que respalden una instalación de Ultimate Multisite.

#### Hosting Compartido vs. Dedicado

Desafortunadamente, no todos los proveedores de hosting son iguales y algunos practican densidades de servidor extremas. Los proveedores de bajo costo suelen generar ingresos maximizando la densidad del servidor. Por lo tanto, tu instalación de Ultimate Multisite puede ser solo una de varias cientos de sitios en el mismo servidor.

Sin salvaguardas adecuadas por parte del proveedor, los sitios en un servidor compartido experimentan el problema del ‘vecino ruidoso’. Es decir, un sitio en el mismo servidor consume tantos recursos que otros sitios tienen que competir por los recursos restantes. A menudo esto se presenta como sitios que son lentos o no responden a tiempo.

Como proveedor de hosting web tú mismo, los efectos de flujo significarán que tus clientes experimenten velocidades pobres, bajo ranking de página y altas tasas de rebote, lo que a menudo resulta en la pérdida de clientes mientras buscan servicios en otro lugar.

En resumen, barato no significa bueno.

Ultimate Multisite es conocido por funcionar con varios buenos proveedores de hosting e integrarse bien con su entorno para proporcionar funciones como mapeo de dominios y SSL automático. Estos proveedores valoran el rendimiento y ofrecen un servicio de mayor calidad que el hosting compartido.

Para una lista de proveedores compatibles e instrucciones completas de configuración para cada uno, consulta la documentación de Proveedores Compatibles.

#### Consideraciones de Rendimiento

Ultimate Multisite no es una aplicación lenta, al contrario, es notablemente rápida. Sin embargo, su rendimiento depende de la aplicación e infraestructura subyacentes y solo puede aprovechar lo que tiene acceso.

Considera esto: eres el administrador de la red de una instalación de Ultimate Multisite con 100 sitios. Algunos de esos sitios están funcionando bien y atraen a un número de visitantes del sitio web cada día.

Este escenario sería diferente en una escala más pequeña, digamos de uno a cinco, pero antes de mucho tiempo, los problemas de escala serían evidentes.

Si se deja sin supervisión, el único sitio de Ultimate Multisite sería responsable de cumplir las solicitudes de todos los visitantes de los sitios. Estas solicitudes podrían ser para páginas PHP dinámicas o recursos estáticos como hojas de estilo, javascript o archivos multimedia. Ya sea un sitio o cien, estas tareas se vuelven repetitivas, monótonas y desperdiciosas. No es necesario usar potencia de CPU y memoria para procesar un archivo PHP cuando la salida es la misma información estática para cada solicitud.

De manera similar, una solicitud de una página PHP o HTML genera múltiples solicitudes sucesivas para scripts, hojas de estilo y archivos de imagen. Esas solicitudes se dirigen directamente a tu servidor Ultimate Multisite.

Se podría resolver fácilmente este problema actualizando el servidor, pero no soluciona un problema secundario: latencias geográficas. Solo varios servidores en múltiples ubicaciones podrían abordar adecuadamente este problema.

Por esta razón, la mayoría de los administradores de la red utilizan soluciones de caché de front-end y redes de distribución de contenido (CDN) para cumplir las solicitudes de páginas estáticas. Cumplir con estas solicitudes y servir recursos antes de que la solicitud llegue al servidor ahorra recursos de procesamiento, elimina retrasos, evita actualizaciones innecesarias y maximiza las inversiones tecnológicas.

Ultimate Multisite incluye un complemento sofisticado de Cloudflare que permite a los administradores de la red colocar sus instalaciones detrás de Cloudflare y aprovechar no solo sus capacidades de caché, sino también el hosting DNS, certificados SSL y mecanismos de seguridad.

#### Copias de Seguridad

Se podría preguntar a 50 personas por consejos sobre copias de seguridad y recibir 50 opiniones diferentes sobre estrategias de respaldo. La respuesta es, depende.

Lo que no está en disputa es que las copias de seguridad son necesarias y que es casi inconcebible que no sean gestionadas por el proveedor, específicamente uno que ofrezca un servicio gestionado. En consecuencia, los clientes buscarán al administrador de la red para proporcionar y gestionar este servicio. A quién se dirige el administrador de la red es un problema completamente diferente.

Para los propósitos de esta sección, aceptemos que una copia de seguridad es una copia puntual del estado del sistema en el momento en que se inició la copia de seguridad. En pocas palabras, lo que sea el estado del sistema en el momento de la copia de seguridad, ese estado se captura y se guarda en la copia de seguridad.

Con esta comprensión, la respuesta sobre cómo lograr las copias de seguridad y lo que es mejor para tu entorno dependerá en gran medida de tus requisitos y de la capacidad del proveedor de hosting para satisfacer esos requisitos. Sin embargo, en orden de más opinado a menos opinado, las siguientes opciones deberían proporcionar alguna orientación.

##### Instantáneas

Las instantáneas son las soluciones de plata para las copias de seguridad porque son fáciles, sin complicaciones (hasta que quieras restaurar) y simplemente funcionan. Sin embargo, requieren algo de ayuda de tu proveedor y se aplica principalmente solo si tienes un VPS (Servidor Privado Virtual) o similar. Varios proveedores listados en nuestra documentación de 'Proveedores Compatibles' ofrecen copias de seguridad que no requieren intervención o consideración adicional por parte del administrador de la red.

Donde las copias de seguridad tradicionales apuntan a archivos y bases de datos, una instantánea apunta al disco completo. Esto significa que no solo se captura los datos del sitio en la instantánea, sino también el sistema operativo y la configuración. Para muchos, esto es una ventaja distinta, ya que un nuevo sistema puede generarse casi instantáneamente a partir de una instantánea y ponerse en operación para reemplazar una instancia enferma. De manera similar, el proceso de recuperación para recuperar archivos solo requiere adjuntar la imagen de la instantánea como un disco a una instancia existente para que los archivos puedan ser accedidos y copiados.

Las instantáneas pueden atraer un costo adicional con el proveedor de hosting, pero son una póliza de seguro contra accidentes.

##### Scripts Externos

Parece que no hay escasez de scripts y soluciones externas para respaldar recursos de WordPress y MySQL, y estos funcionarían bien para Ultimate Multisite, ya que es un plugin de WordPress que utiliza el sistema de archivos y la base de datos de WordPress. Por lo tanto, una solución que respalde sitios de WordPress cubriría adecuadamente las necesidades de Ultimate Multisite.

No podemos recomendar un script sobre otro, pero nuestro consejo general es ejecutar varias pruebas de respaldo y restauración para asegurarte de que los resultados sean deseados y 'asegúrate de estar seguro' evaluando continuamente el script y su funcionalidad, especialmente cuando se aplique alguna forma de estrategia de respaldo diferencial.

Cabe señalar que estos scripts, mientras se ejecutan, aumentarán la carga del sistema, lo cual debe tenerse en cuenta.

##### Plugins

Casi no hay problema en WordPress que no pueda resolverse con un plugin, y si gestionar scripts externos no es tu taza de café, entonces tal vez un plugin sea la siguiente mejor opción.

Aunque la mayoría de los plugins son instalables en un WordPress Multisite, su activación y licenciamiento varía de autor a autor.

El desafío radica en cómo se aplica la licencia, ya que algunos plugins requieren licencias por dominio. Esto significaría que, para algunos plugins, el administrador de la red necesita activar manualmente la licencia para cada plugin en cada nuevo sitio.

Por lo tanto, lo mejor sería consultar con el autor del plugin sobre cómo funcionaría su plugin con un WordPress Multisite y cualquier requisito o procedimiento especial necesario para licenciarlo.

#### Dominio y SSL

Mucho se ha discutido ya sobre nombres de dominio en modo _subdominio_ de multisite. Una solución casi universal para los administradores de la red es usar entradas DNS comodín.

Este tipo de entrada DNS resolverá con éxito los _subdominios_ como ‘site1.domain.com’ y ‘site2.domain.com’ a una dirección IP de 1.2.3.4, lo que respalda a Ultimate Multisite y, en mayor medida, a WordPress Multisite en modo _subdominio_.

Esto puede funcionar perfectamente bien para HTTP porque el host objetivo se lee de los encabezados HTTP, pero rara vez la web es tan simple hoy en día donde las transacciones HTTPS seguras son casi obligatorias.

Afortunadamente, existen opciones fáciles para certificados SSL. En modo _subdirectorio_, se puede usar un certificado de dominio regular. Estos están disponibles de forma gratuita y libremente de los proveedores de hosting que pueden usar el servicio gratuito LetsEncrypt u otra fuente. De lo contrario, están disponibles comercialmente de autoridades si puedes generar la solicitud de firma de certificado.

Para el modo _subdominio_, el uso de un certificado SSL comodín se combinará perfectamente con un dominio comodín y permitirá que el certificado sea autoritativo para el dominio raíz y todos los _subdominios_ sin configuración adicional.

Sin embargo, debe notarse que los certificados SSL comodín pueden no funcionar con servicios como Cloudflare a menos que estés en un plan empresarial o configures la entrada solo en DNS, en cuyo caso todo el caché y la optimización se omiten.

De forma predeterminada, Ultimate Multisite ofrece una solución a este problema, demostrando nuestra amplia experiencia con las necesidades de los multisites de WordPress. Activar este complemento sencillo hará que Ultimate Multisite utilice tus credenciales de Cloudflare para agregar automáticamente entradas DNS para los sitios de la red en Cloudflare y establecer su modo a ‘proxied’. De esta manera, cada subsitio de la red, al crearse, tendrá la protección completa y los beneficios de Cloudflare, incluido el SSL.

Dependiendo de la naturaleza y el propósito de tu instalación de Ultimate Multisite, puede haber necesidad de que los clientes usen sus propios dominios. En este caso, el administrador de la red debe resolver dos problemas. Uno, el hosting del nombre de dominio y dos, los certificados SSL para el dominio.

Para muchos, el uso de Cloudflare es una opción sencilla. El cliente solo necesita colocar su dominio en Cloudflare, apuntar un CNAME al dominio raíz de Ultimate Multisite y mapear su dominio en Ultimate Multisite para comenzar a aprovechar su nombre de dominio personalizado.

Fuera de esto, se deben buscar soluciones alternativas, razón por la cual Ultimate Multisite recomienda una lista de Proveedores Compatibles. Esto se debe a que el proceso de configuración de DNS y SSL puede ser un proceso no trivial. Sin embargo, con la integración de Ultimate Multisite con estos proveedores, la complejidad se reduce considerablemente y el procedimiento se automatiza.

#### Plugins

Es muy probable que necesites plugins adicionales para proporcionar funcionalidad a tus clientes o sitios de la red. ¿Todos los plugins funcionan con WordPress Multisite y Ultimate Multisite? Bueno, depende.

Aunque la mayoría de los plugins son instalables en un WordPress Multisite, su activación y licenciamiento varía de autor a autor.

El desafío radica en cómo se aplica la licencia, ya que algunos plugins requieren licencias por dominio. Esto significaría que, para algunos plugins, el administrador de la red necesita activar manualmente la licencia para cada plugin en cada nuevo sitio.

Por lo tanto, lo mejor sería consultar con el autor del plugin sobre cómo funcionaría su plugin con un WordPress Multisite y cualquier requisito o procedimiento especial necesario para licenciarlo.
