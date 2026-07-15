---
title: Rexistro de cambios dos tickets de soporte
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Rexistro de cambios de tickets de soporte

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Mellorado: Eliminado o directorio vendor/ do seguimento de Git (xa cuberto por .gitignore), reducindo o tamaño do repositorio
* Mellorado: Probado ata WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Corrección: Aceptar valores nulos nos setters do modelo de ticket anulables
* Corrección: Gardar todos os tickets en táboas globais de toda a rede para un soporte multisite axeitado
* Corrección: Ocultar os campos do persoal e corrixir a redirección a páxina en branco no formulario de novo ticket do cliente
* Corrección: Substituír as chamadas add_meta() non definidas por update_meta() correcto para o almacenamento de metadatos
* Corrección: Substituír a comprobación de capacidade non rexistrada por wu_view_all_support_tickets correcto
* Corrección: Engadir os manexadores AJAX que faltaban para o estado do ticket, a asignación e as accións de edición rápida
* Corrección: Corrixir o nome do método para a detección de respostas do persoal nas vistas de tickets
* Corrección: Consolidar manexadores de respostas duplicados e aliñar os nomes das accións nonce
* Corrección: Engadir a vista frontend que faltaba para o shortcode [wu_submit_ticket]
* Corrección: Engadir a columna user_id que faltaba e corrixir o método Support_Ticket::get_user_id()
* Corrección: Eliminar unha comiña dobre adicional na etiqueta de opción do filtro de prioridade
* Corrección: Engadir un panel de xestión de tickets no administrador de rede para superadministradores
* Mellorado: Consolidar o CSS de administración nunha única folla de estilos externa
* Mellorado: Eliminar o submenú Settings do menú de administración do subsitio
* Mellorado: Cargar condicionalmente os recursos frontend só nas páxinas de tickets de soporte
* Mellorado: Omitir o autoloader do plugin cando o autoloader raíz de Bedrock xa cargou as dependencias

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Engadido: Funcionalidade completa de visualización de tickets para administración e frontend
* Engadido: Manexador AJAX para envíos de respostas a tickets
* Engadido: Soporte para a funcionalidade de resposta a tickets cun manexo axeitado do formulario
* Engadido: Visualización axeitada de avisos para envíos de tickets e respostas na administración
* Engadido: Asociación automática do ticket co usuario actual para autoenvíos de clientes
* Engadido: Mellora de seguridade para evitar que os clientes sobrescriban a propiedade do ticket
* Engadido: Funcións auxiliares que faltaban (wu_format_date, wu_user_can_view_ticket, etc.)
* Engadido: Descarga e manexo axeitados de anexos de ficheiros
* Engadido: Sistema de notificacións por correo electrónico para respostas a tickets e cambios de estado
* Corrixido: O formulario de resposta ao ticket agora inclúe o ID de ticket necesario
* Corrixido: Problemas de visibilidade de avisos nas vistas de tickets da administración
* Corrixido: Erros de sintaxe nas funcións de tickets de soporte
* Mellorado: Estrutura da base de datos con clases de consulta e esquema axeitadas para respostas e anexos
* Mellorado: Migración a propiedades reais en lugar de atributos para modelos de tickets

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Actualizado: Prefixo renomeado a ultimate-multisite para manter a coherencia
* Actualizado: Estandarización do dominio de texto
* Corrixido: Pequenas correccións de erros e melloras

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Lanzamento inicial
* Sistema completo de xestión de tickets
* Control de acceso multinivel
* Sistema de conversas en fíos
* Soporte para anexos de ficheiros
* Sistema de notificacións por correo electrónico
* Interfaces de administración e de cliente
* Estatísticas e informes
