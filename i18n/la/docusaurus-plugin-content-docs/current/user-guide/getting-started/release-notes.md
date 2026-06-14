---
title: Notae Editio
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Note de Sortie

## Versio 2.13.0 — Liberata il 2026-06-05

- Novum: Aditus supportum tenantium souverainum ad numerum clientium, processus transactionis (checkout), facturation, situm, facturas, mutatio templatorum et mappae domini, ita ut network tenantium clienti in situs principalem redireger possint actiones gestas.
- Novum: Adhibitus verificatio credentialium renovationis ad membranas recurrentes, ita ut gateways auto-renovatio debant cessare dum non sit existentia agreementi facturandi, subscriptionis aut tokeni vault.
- Novum: Adhibitus publicatio loopback HMAC-verificata pro creatione situi pendenti, ut provisionem transactionis ad situs in hostibus ubi labores in background difficili sunt, plus fidem conferat.
- Novum: Adhibitus puncta extensiones developerum pro URL SSO, domibus fundamentali formae checkout, et creationem automaticam record domini.
- Rectificatio: SSO nunc est fidelis in dominio mappatis, visitis broker anonimorum, logut, et conflictibus inter plugin.
- Rectificatio: Creationem situi pendenti nunc recuperat a flagbus publicatione antiquis et evitat ostium clientum in schismate creationis siti.
- Rectificatio: Record domini non creant adhuc pro dominio fundamentali formae checkout, et labores in background provider hostibus inutiles sunt saltati dum non est integratio activa.
- Rectificatio: Casus extremorum transactionis (checkout), facturationis adreccii, reponendi password, verificandi epistulae, mutationis templatorum, tourum, et dashboard clientium nunc fluxus ordinarios clienti non obstruunt.
- Rectificatio: Epistulae broadcast nunc recipientes privatas conservant dum errores fatales SMTP/plugin evitant cum listis recipientium aut transportibus epistolarum fallunt.
- Rectificatio: Casus extremorum renovationis membrannarum, ostensionis expirationis, et collectio pecuniae nunc expirations immediatas, crasces, aut pagationes necessarias perdit.
- Mutatum: Compatibilitas WordPress testata usque ad 7.0, assetum Vue in production re-buildi sunt ex fontibus npm, et Cypress coverage end-to-end nunc plus fluxus transactionis, setup, SSO, et gateway exercet.

## Versio 2.12.0 — Liberata in 2026-05-15

- Novum: Hostinger (hPanel) aditus ut fornitore host supportato cum integration mappae dominii
- Novum: Site Exporter nunc maneat gestionem bundled network import bundles pro restauratione site per totam retinendum rete simplici
- Rectificatio: Email broadcast BCC nunc usant header recipient non divulgatum ad praecipua adressas recipiendaria expondere prohibendi
- Rectificatio: Data expiration membership nunc non corrupta est cum salvando cum valorem non datum
- Rectificatio: Actualia membership Stripe nunc correcte discount claram sine vocando API deleteDiscount deprecata
- Rectificatio: Redirection SSO in situs mappatis dominii nunc limitati sunt ad circulos redirection infinitos prohibendi
- Rectificatio: Selectio image picker in wizard setup nunc model datam subjacens correcte actualizat
- Rectificatio: CLI Site Exporter nunc selection rete default correctam retinens conservat
- Emendatio: wp-cli bundled ex pacage plugin removata, magnitudinem plugin minimis redditam

## Versio 2.11.0 — Liberata in 2026-05-11

- Novum: Site exports nunc index.php autoinstituendum bundled maneant ita ut ZIP in host novo installari possit sine separate plugin installatione
- Novum: Export network permittit administratores omnes subsites in unum archivum exportare ex pagina admin Site Export
- Novum: Toggle plan Site Templates nunc per chain fallback coercetur, disponibilitatem template limitibus planibus correcte restringens
- Novum: Editor form checkout advertit cum producendum sine campo requirendum configuratum
- Novum: Tab settings Import/Export nunc suam ambitum claram descripit et directam link ad tool Site Export habet

## Versio 2.10.0 — Liberata in 2026-05-05

- Novum: Wizard de configuración guiado de PayPal para entrada manual de credenciales con puerta de enlace OAuth para una configuración fluida del gateway.
- Novum: El panel de cliente de cambio de plantilla rediseñado con la tarjeta current-template, cuadrícula persistente y el botón **Reset current template**.
- Corrección: El cambio de plantilla ya no congela la interfaz en caso de fallo AJAX.
- Corrección: Los estados de permiso del cambio de plantilla asegurados contra accesos no autorizados.
- Corrección: Las entradas de anulación del sitio validadas antes de guardar.
- Corrección: Ahora se muestra el aviso de dirección de facturación cuando la dirección está vacía.
- Corrección: Se resolvieron los avisos de desaprobación de PHP 8.1 sobre null a string.
- Corrección: Las cargas perezosas actuales se realizan antes del hook init para prevenir problemas de tiempo.
- Corrección: La ruta SSO filtrada respetada en todos los flujos de inicio de sesión.
- Corrección: Se conservan las opciones de identidad de sitio vacío al guardar.

## Versión 2.9.0 — Lanzada el 30-04-2026

- Novum: Exportación e importación de sitios únicos añadidos bajo **Herramientas > Exportar e Importar**.
- Corrección: Los archivos ZIP de exportación ahora se sirven a través de un punto final de descarga autenticado.
- Corrección: Se corrigieron los riesgos de inyección SQL y problemas de consulta en las consultas pendientes de exportación/importación.
- Corrección: El sitio pendiente no se publica cuando el administrador verifica manualmente el correo electrónico del cliente.
- Corrección: Los registros pending_site huérfanos se limpian cuando falta la membresía.
- Corrección: Se corrigieron el espaciado de navegación y los anclajes de búsqueda en la navegación de configuración.
- Corrección: Los sitios pendientes ahora se muestran primero en la vista Todos los Sitios.
- Corrección: Se añadió el encabezado User-Agent del proveedor de capturas de pantalla (mShots) para prevenir errores 403.
- Corrección: Se resolvió la dependencia circular del cron schedule de importación.
- Corrección: Los IDs de tour normalizados a guiones bajos en las claves de configuración de usuario.
- Mejora: Ahora se utiliza ZipArchive en lugar de Alchemy/Zippy para una mejor compatibilidad.

## Versión 2.8.0 — Lanzada el 29-04-2026

- Novum: Interruttore Jumper addebitus in optionibus Aliorum Configuratorum UI addito est.
- Novum: Columna Status ad tabulam formarum checkout addita est.
- Novum: Loader file sunrise Addon pro extensionibus custom MU-plugin sunrise addito est.
- Mutatum: Optionem optini reporter erroris ex pagina configuratorum remuvisse est.
- Rectum: Carta situs paginae gratiarum — imago nunc constricti et liens in modo recte styli sunt.
- Rectum: Provisor image switch a thum.io ad WordPress.com mShots mutatus est.
- Rectum: Registratio et Rolem Default nunc defaults correctos statuitur in installation nova.
- Rectum: `get_site_url()` iam non redit vacuum cum dominio portum includat.
- Rectum: File media clonus nunc recte copiatur cum optionem `copy_media` vacua est.
- Rectum: Object cache post network-activate sitemeta scripto recte invalidatur.
- Rectum: Dominium custom auto-promovetur ad primarium in verification DNS pro dominio 3-partibus.
- Rectum: Membrescia pendens cancellata est cum plactio aequoris expiratae purgatur.
- Rectum: Verificator fortitudinis password rebound post dismissio prompt login inline.
- Rectum: Reload pagina infinitus in paginam gratiarum cessavit si situs iam creatus sit.
- Rectum: Optionem registrationis WP core sincronizzata est in activation plugin et save configuratorum.
- Rectum: Guard expirationis nulli ad `calculate_expiration` additus pro compatibilitatem PHP 8.4.
- Rectum: Signuptiones duplicatae obstructae sunt cum cliente iam membrum activum habet.
- Rectum: Check nullus ad `date_expiration` in checkout additus est.
- Rectum: Provisioning situs fortificatum — limitatio, inferentia membrorum, promotio dominii.
- Rectum: Etiqueta status check pre-install rectificata in NON Activated cum check fallit.
- Rectum: Dominium checkout usutum ad URLs verificationis email.
- Rectum: Auto-login post checkout dum non est field password present.
- Rectum: Membrescia liberi iam non expirant — ut vita aeterna tractantur.

- Solutio: La verificación del correo electrónico bloquea la publicación del sitio hasta que el cliente verifica el correo.
- Solutio: Se corrigió la ruta base del endpoint de la API SES v2 y la ruta de identidad.
- Solutio: El hook `wu_inline_login_error` se emite en el bloque de captura antes de enviar el formulario.
