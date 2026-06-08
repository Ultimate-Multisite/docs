---
title: Diari de canvis de tickets de suport
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Diari de canvis de Tickets de Suport

### 1.0.4 - 2026-05-05
* Millorat: S'ha eliminat el directori `vendor/` del seguiment de Git (ja cobert per `.gitignore`), reduint la talla del repòsitori.
* Millorat: Es va provar fins a WordPress 7.0

### 1.0.3 - 2026-05-01
* Corregit: Acceptar valors nuls (null) als configuradors del model de tiquets anul·lable.
* Corregit: Emmagatzemar tots els tiquets en taules globals de nivell de xarxa per a un suport multisite adequat.
* Corregit: Ocultar els camps del personal i solucionar el redireccionament de pàgina buida al formulari de nou tiquet del client.
* Corregit: Substituir les crides `add_meta()` no definides per `update_meta()` correcte per l'emmagatzematge de metadades.
* Corregit: Substituir la comprobació de capacitat no registrada per `wu_view_all_support_tickets` correcte.
* Corregit: Afegir gestors AJAX faltants per a l'estat del tiquet, l'assignació i les accions de edició ràpida.
* Corregit: Corregir el nom del mètode per a la detecció de la resposta del personal a les vistes de tiquets.
* Corregit: Consolidar els gestors de resposta duplicats i alinear els noms d'acció de nonce.
* Corregit: Afegir la vista frontend faltant per al shortcode `[wu_submit_ticket]`.
* Corregit: Afegir la columna `user_id` faltant i corregir el mètode `Support_Ticket::get_user_id()`.
* Corregit: Eliminar les comheses de doble guïllona a l'etiqueta d'opció del filtre de prioritat.
* Corregit: Afegir el panell de gestió de tiquets de nivell de xarxa per als superadministrators.
* Millorat: Consolidar el CSS d'administració en una única hoja de fullestil externa.
* Millorat: Eliminar el submèni de Configuració del menú d'administració del subsite.
* Millorat: Carregar els assets frontend de manera condicional només a les pàgines de tiquets de suport.
* Millorat: Saltar l'autocargador de plugins quan l'autocargador de la raó Bedrock ja ha carregat les dependències.

### 1.0.2 - 2025-12-11
* Afegit: Funcionalitat completa de visualització de tiquets per a l'administrador i el frontend.
* Afegit: Gestor AJAX per a les submissió de respostes de tiquets.
* Afegit: Suport per a la funcionalitat de resposta de tiquets amb un maneig de formulari adequat.
* Afegit: Mostra de notificacions adequada per a les submissió i respostes de tiquets a l'administrador.
* Afegit: Associació automàtica del tiquet amb l'usuari actual per a les submissiós dels clients.
* Afegit: Millora de seguretat per prevenir que els clients sobreescrivin la propietat del tiquet.
* Afegit: Funcions d'ajutador faltants (`wu_format_date`, `wu_user_can_view_ticket`, etc.).
* Afegit: Descàrrega i maneig adequats d'adjunts de fitxeres.
* Afegit: Sistema de notificació per correu electrònic per a respostes i canvis d'estat de tiquets.
* Corregit: El formulari de resposta de tiquets ara inclou l'ID de tiquet necessari.
* Corregit: Problemes de visibilitat de notificacions a les vistes de tiquets de l'administrador.
* Corregit: Errors de sintaxi a les funcions de tiquets de suport.
* Millorat: Estructura de la base de dades amb classes adequades de consulta i esquema per a respostes i adjunts.
* Millorat: Migració a propietats reeals en lloc d'atributs per als models de tiquets.

### 1.0.1 - 2025-09-28
* Actualitzat: Nom de prefix col·lida a `ultimate-multisite` per a la consistència.
* Actualitzat: Estandarització del domini de text.
* Corregit: Correccions i millores de bugs menors.

### 1.0.0 - 2025-09-01
* Llançament inicial
* Sistema complet de gestió de tiquets
* Control d'accés de múltiples nivells
* Sistema de conversa amb hilos
* Suport d'adjunt de fitxeres
* Sistema de notificació per correu electrònic
* Interfícies d'administrador i client
* Estadístiques i informes
