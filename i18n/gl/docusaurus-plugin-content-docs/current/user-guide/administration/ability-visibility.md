---
title: Visibilidade da Capacidad
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilidade de Habilidades

O Superdav AI Agent v1.12.0 introduz controles de **Visibilidade de Habilidades** que definem quais superfícies expõem cada habilidade. Isso permite que os administradores ajustem com precisão quais capacidades do agente estão disponíveis através de APIs REST, servidores MCP, integrações WooCommerce e outras interfaces.

## O que é Visibilidade de Habilidades?

A Visibilidade de Habilidades é um sistema de permissões que controla:

- **Quais habilidades** estão disponíveis para os agentes
- **Onde elas são expostas** (API REST, MCP, WooCommerce, etc.)
- **Quem pode acessá-las** (via listas de permissão de parceiros)
- **Como elas são classificadas** (reconhecidas vs. não classificadas)

Cada habilidade carrega um nível de visibilidade que determina sua disponibilidade em diferentes superfícies.

## Níveis de Visibilidade

### Público

As **habilidades públicas** estão disponíveis em todos os lugares:

- Endpoints da API REST
- Servidores MCP
- Integrações WooCommerce
- Interfaces de chat
- Todos os papéis de usuário (com permissões apropriadas)

Exemplo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interno

As **habilidades internas** estão disponíveis apenas dentro da sua instalação do WordPress:

- Interfaces de chat
- Painéis de administração
- Apenas usuários logados
- Não expostas via API REST ou integrações externas

Exemplo: `manage-settings`, `view-analytics`, `export-data`

### Parceiro

As **habilidades de parceiro** estão disponíveis apenas para parceiros na lista branca (whitelisted):

- Requer entrada explícita na lista de permissões do parceiro
- Disponível via API REST com credenciais de parceiro
- Disponível via MCP com autenticação de parceiro
- Não disponível para usuários regulares

Exemplo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Desabilitado

As **habilidades desabilitadas** não estão disponíveis em lugar nenhum:

- Não expostas por nenhuma superfície
- Não disponíveis no chat
- Não disponíveis nos painéis de administração
- Útil para habilidades obsoletas ou experimentais

## Gestionar a Visibilidade das Habilidades

### Acceder às Configurações de Visibilidade das Habilidades

1. Vá a **WordPress Admin** → **Superdav AI Agent** → **Settings** (Configurações)
2. Clique na aba **Abilities** (Habilidades)
3. Lá verá unha lista de todas as habilidades instaladas e os seus níveis de visibilidade.

### Ver Detalle das Habilidades

Clique en calquera habilidad para ver:

- **Name** (Nome): O identificador da habilidad.
- **Description** (Descripción): O que a habilidad fai.
- **Current visibility** (Visibilidade actual): Pública, Interna, Parceiro ou Desativada.
- **Partner allow-list** (Lista de parceiros permitidos): Que parceiros poden acceder (se for visibilidade de Parceiro).
- **Last updated** (Última actualización): Quando se moi destiña a visibilidade.
- **Status** (Estado): Reconocido ou Não Classificado.

### Mudar os Niveis de Visibilidade

Para cambiar a visibilidade dunha habilidad:

1. Clica na habilidad na lista.
2. Seleita un novo nivel de visibilidade do menú desplegable.
3. Se seleccionas "Partner" (Parceiro), adiciona os identificadores dos parceiros à lista de permitidos (*allow-list*).
4. Clica en **Save** (Salvar).

Exemplo:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operacións em Massa (*Bulk Operations*)

Para cambiar a visibilidade de varias habilidades:

1. Marca as casillas ao lado das habilidades que queres modificar.
2. Seleita un novo nivel de visibilidade do menú desplegable de acción en massa.
3. Clica en **Apply** (Aplicar).

## Lista de Parceiros Permitidos (*Partner Allow-List*)

A **partner allow-list** controla que parceiros externos poden acceder às habilidades de nivel de Parceiro.

### Añadir Parceiros

1. Vai a **Superdav AI Agent** → **Settings** (Configurações) → **Partners** (Parceiros).
2. Clica en **Add Partner** (Añadir Parceiro).
3. Introduce o identificador do parceiro (normalmente unha API key ou ID da organización).
4. Opcionalmente, añade un nome e unha descripción do parceiro.
5. Clica en **Save** (Salvar).

### Asignar Habilidades a Parceiros

Despois de añadir un parceiro:

1. Vá à aba **Abilities**
2. Encontre uma habilidade com visibilidade de Parceiro (Partner visibility)
3. Clique para editar
4. Na secção "Partner allow-list" (lista de permissões de parceiros), marque as caixas dos parceiros que devem ter acesso
5. Clique em **Save**

### Revogar Acesso do Parceiro

Para remover o acesso de um parceiro:

1. Edite a habilidade
2. Desmarque a caixa do parceiro na lista de permissões (allow-list)
3. Clique em **Save**

O parceiro perderá imediatamente o acesso a essa habilidade.

## Habilidades Não Classificadas (Unclassified Abilities)

Quando instala uma habilidade de terceiros que o Superdav AI Agent não reconhece, ela é marcada como **Unclassified** (Não Classificada).

### Aviso de Administrador para Habilidades Não Classificadas

Verá um aviso de administrador:

```
⚠️ Habilidades Não Classificadas Detectadas

As seguintes habilidades foram instaladas, mas não são reconhecidas:
- custom-import-tool
- external-api-wrapper

Estas habilidades podem representar riscos de segurança ou compatibilidade.
Por favor, reveja e classifique-as.

[Review Abilities] [Dismiss]
```

### Rever Habilidades Não Classificadas

1. Clique em **Review Abilities** (Rever Habilidades) no aviso
2. Para cada habilidade não classificada, verá:
   - Nome e descrição da habilidade
   - Fonte (qual plugin/addon a instalou)
   - Nível de visibilidade sugerido
   - Avaliação de segurança

3. Escolha um nível de visibilidade:
   - **Public** (Público): Confie na habilidade; exponha-a em todo o lado
   - **Internal** (Interno): Restrinja ao uso interno apenas
   - **Partner** (Parceiro): Restrinja a parceiros específicos
   - **Disabled** (Desativado): Não use esta habilidade

4. Clique em **Classify** (Classificar) para guardar a sua decisão

### Por que Classificar Habilidades Não Classificadas?

Classificar as habilidades:

- **Melhora a segurança**: Aprova explicitamente o que é exposto
- **Evita acidentes**: As habilidades não classificadas são desativadas por defeito
- **Permite funcionalidades**: Uma vez classificadas, a habilidade torna-se disponível
- **Documenta decisões**: As suas escolhas são registadas para fins de auditoria

## Visibilidade en Diferentes Superficies

### REST API

As **capacidades públicas** están disponibles a través de los endpoints REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Las **capacidades internas y de socios** no están disponibles a través de la REST API.

### Servidores MCP

Las **capacidades públicas** están disponibles mediante MCP:

```
MCP Server: Superdav AI Agent
Capacidades disponibles:
- scaffold-block-theme
- activate-theme
- send-email
```

Las **capacidades internas** no se exponen a través de MCP.

Las **capacidades de socios** solo están disponibles con credenciales de socio.

### Integración con WooCommerce

Las **capacidades públicas** relacionadas con WooCommerce están disponibles:

- Gestión de productos
- Procesamiento de pedidos
- Comunicación con el cliente

Las **capacidades internas** no se exponen a WooCommerce.

### Interfaz de Chat

Todas las **capacidades** (Públicas, Internas, de Socios) están disponibles en el chat, dependiendo de los permisos del usuario:

- Los administradores ven todas las capacidades
- Los usuarios regulares ven solo las capacidades públicas
- Los socios ven las capacidades Públicas + de Socios (si están permitidos por la lista blanca)

## Mejores Prácticas de Seguridad

### Principio de Mínimo Privilegio

- Configura las capacidades con la visibilidad más restrictiva que aún permita su uso.
- Utiliza la visibilidad de Socio para operaciones sensibles.
- Deshabilita las capacidades que no uses.

### Auditorías Regulares

- Revisa la visibilidad de las capacidades mensualmente.
- Comprueba si hay capacidades sin clasificar.
- Elimina el acceso a socios no utilizados.

### Registro y Monitoreo (Logging and Monitoring)

- Monitorea qué capacidades se utilizan más.
- Rastrea los patrones de acceso de los socios.
- Alerta ante un uso inusual de las capacidades.

### Capacidades de Terceros

- Revisa las capacidades de terceros antes de habilitarlas.
- Clasifícalas explícitamente.
- Comienza con la visibilidad Interna o de Socio.
- Promuévelas a Pública solo después de haberlas verificado.

## Solución de problemas

**Una capacidad no aparece en la lista**
- Verifica que la capacidad esté instalada y activa
- Comprueba que el plugin/addon esté habilitado
- Refresca la página

**No puedo cambiar la visibilidad de una capacidad**
- Verifica que tengas permisos de administrador
- Comprueba que ninguna capacidad esté bloqueada por un plugin
- Intenta desactivar plugins conflictivos

**Un socio no puede acceder a una capacidad**
- Verifica que el socio esté en la lista de permitidos (allow-list)
- Comprueba que la visibilidad de la capacidad esté configurada como "Socio" (Partner)
- Confirma que las credenciales del socio son correctas
- Revisa los logs de la API para errores de autenticación

**Las capacidades sin clasificar siguen apareciendo**
- Revisa y clasifícalas en el aviso de administrador
- Comprueba que tu clasificación se haya guardado
- Verifica que el plugin que proporciona la capacidad esté actualizado

## Migración desde Modo Heredado (Legacy Mode)

Si estás actualizando desde una versión anterior de Superdav AI Agent:

- Todas las capacidades existentes se clasifican automáticamente como Públicas (Public)
- Revisa y ajusta la visibilidad según sea necesario
- No se requiere ninguna acción a menos que quieras restringir el acceso

Consulta **Migración al Modo Terceros** para más detalles sobre la transición a la integración de API de Capacidades nativas.

## Próximos pasos

Después de configurar la visibilidad de las capacidades:

1. **Revisa tus capacidades**: Audita todas las capacidades instaladas
2. **Clasifica las capacidades sin clasificar**: Responde a los avisos del administrador
3. **Configura socios**: Añade socios si estás usando la visibilidad de Socio (Partner)
4. **Monitoriza el uso**: Rastrea qué capacidades se utilizan más
5. **Documenta decisiones**: Mantén notas sobre por qué elegiste cada nivel de visibilidad
