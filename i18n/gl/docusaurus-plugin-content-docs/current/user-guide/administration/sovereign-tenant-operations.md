---
title: Operación de inquilino soberano
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operación de Inquilinos Soberanos

Ultimate Multisite: Multi-Tenancy 1.2.0 añade herramientas operacionales para inquilinos soberanos: subsites que funcionan con su propia base de datos, raíz del sistema de archivos y contexto de enrutamiento, manteniendo la visibilidad desde el administrador de red.

Usa esta página cuando gestionas sitios de clientes aislados, traspasos de sitios remotos o migraciones que mueven un subsite estándar a infraestructura soberana.

## Qué cambia para los administradores

- **Autologin del inquilino sin estado** — Los administradores de red pueden visitar un inquilino soberano sin depender de estados de sesión compartidos de larga duración. El token SSO es limitado por propósito, anclado al origen, protegido contra repeticiones y tiene una ventana de expiración corta.
- **Enrutamiento consciente del soberano** — Las redes aisladas heredadas e inquilinos soberanos se resuelven a través de la misma ruta de enrutador del sitio, reduciendo las diferencias de arranque entre instalaciones antiguas y nuevas aisladas.
- **Estado de migración verificado** — La verificación de migración comprueba el aprovisionamiento de usuarios, los permisos de escritor de base de datos, el estado de drenaje de colas y la ausencia de tablas heredadas antes de que un inquilino se considere completo.
- **Desmontaje más seguro** — El desmontaje soberano ahora elimina las credenciales del inquilino de forma limpia para que los inquilinos eliminados no queden dejando acceso obsoleto a la base de datos.

## Visitar un inquilino soberano

1. Abre **Network Admin > Ultimate Multisite > Sites**.
2. Selecciona el inquilino soberano.
3. Usa **Visit (SSO)** cuando esté disponible en lugar de copiar contraseñas o crear cuentas de administrador temporales.

El flujo de visita crea un token de inicio de sesión de corta duración para ese inquilino y registra el evento SSO en el rastro de auditoría del inquilino. Si el botón falla, comprueba que el dominio del inquilino se resuelve a la instalación esperada y que el inquilino puede acceder al punto final SSO del lado de la red.

## Lista de verificación de operaciones de sitios remotos

Antes de cambiar un inquilino soberano o remoto, confirma:

O domínio do inquilino aponta para o host que é dono do sistema de ficheiros do inquilino.
O host do banco de dados do inquilino corresponde ao binding de host configurado para essa instalação.
Os comandos de verificação da migração passam para o inquilino.
As filas de migração assíncronas são esvaziadas antes de fazer alterações DNS ou de propriedade.
O utilizador administrador do inquilino foi provisionado durante a migração e pode iniciar sessão através do SSO.

## Eliminar inquilinos soberanos

Eliminar um inquilino soberano é destrutivo. Confirme primeiro o estado do backup e da exportação, depois elimine na tela de gestão do site. O fluxo de desativação 1.2.0 remove as credenciais do banco de dados do inquilino como parte da limpeza, mas os administradores devem verificar se os utilizadores de base de dados e pastas a nível do host desapareceram ao usar painéis de alojamento externos.

:::warning
Não elimine um inquilino soberano enquanto a verificação da migração ainda estiver em curso ou enquanto as tarefas de push assíncronas estiverem na fila. Espere que a verificação seja concluída para que o desativação não remova credenciais necessárias para os trabalhos pendentes.
:::
