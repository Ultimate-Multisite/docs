---
title: Operacioj de Sovena Tenantoj
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operaciaj de Tenant Soverein

Ultimate Multisite: Multi-Tenancy 1.2.0 adonas instrumenta operaciajn por tenant'o souveren: subsitite ki funkcias per sian propran bazebas, radroks root de faysil sistemo kaj routado konteksto, kiel ili restas vizibaj de la administristro de la retoj.

Uzuu ĉi ti paĝon pri la gado de izolita klientaj sitaĵoj, remotaj transiroj de sitaĵoj aŭ migraĵoj kiuj movi standardan subsitite al souverana infrastrukturo.

## Kion ŝanĝas por administratoroj

- **Stateless tenant autologin** — La administristroj de la retoj povas viziti un sovereignan tenantan sen dependi de longdaŭrantaj partaj sesio-stataj. La SSO token estas cel-scoped, origin-pinita, replay-protegita kaj limigita al malalta expirigo okazo.
- **Sovereign-aware routing** — Vétaj izolitaj retoj kaj souveran tenantoj resolvas per la sama routa jaruri de sitaĵo, reduktante diferencojn pri la startado inter viaj izolita instaloj malnovaj kaj novaj.
- **Verified migration state** — Verifikado de migraĝo kontrolas la provizio de uzantoj, la permisojn de skribanto de bazebaso, la staton de drainado de la fila (queue drain status) kaj la manco de malnovaj tabuloj antaŭ ol un tenant estas traktita kiel kompleta.
- **Safer teardown** — La safer demontado nun eliminas kredencojn de la tenantan senprobleme, tiel ke forgetaj tenantoj ne labros postaj bazebasvokoj.

## Vizito al sovereignan tenanton

1. Opun **Network Admin > Ultimate Multisite > Sites**.
2. Selektu la souveranan tenanton.
3. Uzuu **Visit (SSO)**, kiam ĝi estas disponabla, en sto de kopi parolajn vortojn aŭ kreti temporajn admin kontojn.

La vizito fludo kreas maldaŭrantan login token por tiu tenant kaj registras la SSO-event en la auditvojo de la tenanton. Se la butono ne funkcias, kontrolu ĉu la domeno de la tenanto resolvas al la esperita instalado kaj ĉu la tenant povas atingi la SSO-punktan finon de la retoj.

## Kontrolisto operaciaj remotaj sitaĵoj

Anta ke ŝanĝi un sovereignan aŭ remotan tenanton, konfirme:

- La domeno del inquilino apunta al host que posee o la carpeta del sistema de archivos del inquilino.
- El host de la base de datos del inquilino coincide con el enlace configurado para esa instalación.
- Los comandos de verificación de migración pasan para el inquilino.
- Las colas de migración asíncronas se vacían antes de realizar cambios en DNS o propiedad.
- El usuario administrador del inquilino fue provisto durante la migración y puede iniciar sesión a través de SSO.

## Eliminando inquilinos soberanos

Eliminar un inquilino soberano es destructivo. Confirme primero el estado de copia de seguridad y exportación, y luego elimínelo desde la pantalla de gestión del sitio. El flujo de desinstalación 1.2.0 elimina las credenciales de la base de datos del inquilino como parte de la limpieza, pero los administradores aún deben verificar que los usuarios de la base de datos y carpetas a nivel de host han desaparecido cuando se utiliza paneles de alojamiento externos.

:::warning
No elimine un inquilino soberano mientras la verificación de migración siga en curso o mientras se estén en cola trabajos de empuje asíncronos. Espere a que la verificación se complete para que el desinstalador no elimine las credenciales necesarias para los trabajos pendientes.
:::
