---
title: Exportar sitio
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportación do Sitio {#site-export}

A páxina de administración **Site Export** permite aos administradores da rede empaquetar un sitio, ou toda a rede, nunha xunta descargable para migración, copia de seguridad ou traballo de traspaso.

## Exportar un sitio {#exporting-one-site}

Ve a **Ultimate Multisite > Site Export** e escolhe **Generate new Site Export**. Seleita o subsite que queres exportar, e despois elí decides se a xunta debe incluir os uploads, plugins e themes.

Cando termine a exportación, descarga o ZIP da lista **Existing Exports**. Os ZIPs de exportación incluídos agora un `index.php` que se auto-arranca e un `readme.txt`, para que a xunta possa ser subida a un host novo e empezar sen ter que instalar primeiro un plugin de importación separado.

## Exportar toda a rede {#exporting-the-whole-network}

Usa **Network Export** na páxina Site Export cando precisas dunha única xunta que contenga todos os subsites da rede. Isto é útil antes das migración de host, exercícios de recuperación de desastres ou reconstrución en staging onde cada subsite precisa de ir acompañado.

Como unha exportación de rede pode ser moito maior que unha exportación de un único sitio, execútala durante un momento de baixo tráfico e confirma que o almacenamiento destinado ten suficiente espazo libre para os uploads, plugins, themes e os ZIPs generados.

### Paquetes de Importación de Rede (Network Import Bundles) {#network-import-bundles}

A partir de Ultimate Multisite 2.12.0, el Site Exporter pode generar **network import bundles** — xuntas especializadas diseñadas para restauración simplificada de sitios en toda a rede. Un network import bundle contén todos os arquivos e metadatos necesarios para restaurar múltiples sitios a unha nova instalación da rede.

#### Generación dun Network Import Bundle {#generating-a-network-import-bundle}

1. Vada a **Ultimate Multisite > Site Export**
2. Clica en **Generate new Network Export**
3. Selecciona **Network Import Bundle** como tipo de exportación
4. Escolhe se queres incluír os uploads, plugins e themes
5. Clica en **Generate**
6. Descarga o ZIP do bundle da exportación da lista **Existing Exports**

#### Restaurar a partir dun Network Import Bundle {#restoring-from-a-network-import-bundle}

Para restaurar sitios a partir dun bundle de importación de rede:

1. Instala Ultimate Multisite no teu host destinado
2. Completa o asistente de configuración multisite
3. Voda a **Ultimate Multisite > Site Export** na nova rede
4. Clica en **Import Network Bundle**
5. Sube o ficheiro ZIP do bundle de importación de rede
6. Segue as instrucións de importación na pantalla
7. O proceso de importación restaurará todos os sitios, o seu contido e configuración

Os bundles de importación de rede preservan:
- O contido do sitio (posts, páxinas, tipologias de posts personalizadas)
- As configuración e opcións do sitio
- Os roles e permisos dos usuarios
- Os plugins e themes (se están incluíno no bundle)
- Os uploads de medios (se están incluíno no bundle)
- As tabelas de base de datos personalizadas e os datos

## Instalación de un ZIP de exportación que se auto-arranca {#installing-a-self-booting-export-zip}

Para restaurar un ZIP que se auto-arranca nun host novo:

1. Sube o contido do ZIP exportado á raíz web destinada.
2. Abre o `index.php` subido nun navegador.
3. Segue as instrucións de instalación na pantalla do paquete de exportación bundle.
4. Revisa o `readme.txt` bundle para notas específicas da exportación antes de remover os ficheiros temporarios.

Para detalles de instalación e importación específicos dos addons, vira a [Site Exporter addon documentation](/addons/site-exporter).

Para a ferramenta de sitio único añadida en Ultimate Multisite 2.9.0, vira a [Export & Import](/user-guide/administration/export-import).
