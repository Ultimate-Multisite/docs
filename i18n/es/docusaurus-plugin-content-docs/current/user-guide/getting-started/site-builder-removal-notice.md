---
title: Aviso de Eliminación del Modo Constructor de Sitios
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Aviso de Eliminación del Modo Constructor de Sitios

**El modo Constructor de Sitios (Site Builder mode) ha sido eliminado en Superdav AI Agent v1.12.0.** Si estabas utilizando el modo Constructor de Sitios, debes migrar al **agente Setup Assistant** para la creación de temas y la configuración del sitio.

## ¿Qué pasó?

### Modo Constructor de Sitios (Legacy)

El modo Constructor de Sitios era una interfaz basada en asistentes (wizard) para:

- Crear sitios a partir de plantillas
- Configurar ajustes básicos
- Elegir un tema
- Configurar contenido inicial

### ¿Qué lo reemplazó?

El **agente Setup Assistant** ahora maneja toda la funcionalidad del Constructor de Sitios con:

- Una configuración guiada por el agente más flexible
- Mejores opciones de personalización de temas
- Integración con la incorporación (onboarding) del Theme Builder
- Memoria persistente de `site_brief` para futuras sesiones

## Si estabas usando el Modo Constructor de Sitios

### Tus sitios están seguros

- Los sitios existentes creados con el modo Constructor de Sitios siguen funcionando
- No hay pérdida de datos ni interrupción del sitio
- Puedes seguir gestionando tus sitios con normalidad

### Migra al Agente Setup Assistant

Para la configuración de sitios nuevos o cambios de tema, utiliza el agente Setup Assistant:

```
"Help me set up a new site"
```

o

```
"Start the Theme Builder onboarding"
```

El agente Setup Assistant proporciona la misma funcionalidad con más flexibilidad.

## Comparación: Constructor de Sitios vs. Setup Assistant

| Característica | Constructor de Sitios (Eliminado) | Setup Assistant (Nuevo) |
|---------|----------------------|----------------------|
| Método de configuración | Formulario asistente | Conversación con el agente |
| Selección de temas | Plantillas predefinidas | Generación personalizada |
| Personalización | Opciones limitadas | Sistema de diseño completo |
| Breve del sitio | No se almacena | Memoria persistente |
| Sesiones futuras | Repetir configuración | Usar el `site_brief` almacenado |
| Flexibilidad | Flujo de trabajo fijo | Conversación adaptable |

## Migrando al Agente Setup Assistant

### Para sitios nuevos

En lugar de usar el modo Constructor de Sitios:

1. Solicita: "Help me set up a new site"
2. El agente Setup Assistant te guiará a través de:
   - Propósito y objetivos del sitio
   - Público objetivo
   - Identidad de marca
   - Generación de temas
   - Configuración inicial

### Para sitios existentes

Si tienes un sitio existente creado con el modo Constructor de Sitios:

1. Puedes seguir usándolo tal cual
2. Para actualizar el tema, solicita: "Redesign my site"
3. El agente Setup Assistant te ayudará a crear un tema nuevo
4. Los datos de tu sitio no cambiarán

### Para cambios de tema

En lugar de la selección de temas del modo Constructor de Sitios:

1. Solicita: "Change my theme"
2. El agente Setup Assistant:
   - Preguntará sobre tus preferencias de diseño
   - Generará un tema personalizado
   - Lo activará en tu sitio

## Diferencias clave

### Modo Constructor de Sitios

```
1. Elegir una plantilla
2. Seleccionar un tema
3. Configurar ajustes básicos
4. Listo
```

### Agente Setup Assistant

```
1. Describe el propósito de tu sitio
2. Define tu público objetivo
3. Elige preferencias de diseño
4. El agente genera un tema personalizado
5. El agente activa el tema
6. El site_brief se almacena para futuras sesiones
```

## Beneficios del Agente Setup Assistant

### Más flexible

- Describe tu sitio en lenguaje natural
- Obtén recomendaciones personalizadas
- Se adapta a tus necesidades específicas

### Mejor personalización

- Generación de temas personalizados
- Decisiones del sistema de diseño
- Tokens de diseño persistentes

### Memoria persistente

- Tu `site_brief` se almacena
- Los agentes futuros entienden tu sitio
- No es necesario repetir la información de configuración

### Flujo de trabajo integrado

- Incorporación del Theme Builder
- Habilidad de Estética del Sistema de Diseño (Design System Aesthetics skill)
- Controles de visibilidad de la capacidad (Ability Visibility controls)
- Todo funciona junto sin problemas

## Solución de problemas

### No encuentro el modo Constructor de Sitios

El modo Constructor de Sitios ha sido eliminado. Utiliza el agente Setup Assistant en su lugar:

```
"Help me set up a new site"
```

### Quiero recrear un sitio de Constructor de Sitios

Puedes recrearlo con el agente Setup Assistant:

1. Solicita: "Help me set up a new site"
2. Describe el propósito y el diseño de tu sitio original
3. El agente generará un tema similar
4. Tu `site_brief` se almacenará para futuras referencias

### Mi sitio existente de Constructor de Sitios no funciona

Los sitios existentes creados con el modo Constructor de Sitios siguen funcionando. Si estás experimentando problemas:

1. Verifica que tu tema siga activo
2. Confirma que tus plugins estén habilitados
3. Revisa los registros de errores de WordPress
4. Contacta con soporte si los problemas persisten

### ¿Aún puedo usar mis plantillas antiguas de Constructor de Sitios?

Las plantillas de Constructor de Sitios ya no están disponibles. Sin embargo:

- Tus sitios existentes siguen funcionando
- Puedes recrear sitios similares con el agente Setup Assistant
- El agente Setup Assistant proporciona más opciones de personalización

## Próximos pasos

1. **Para sitios nuevos**: Usa el agente Setup Assistant
2. **Para sitios existentes**: Continúa usándolos tal cual
3. **Para cambios de tema**: Solicita ayuda al agente Setup Assistant
4. **Para refinar el diseño**: Utiliza la habilidad de Estética del Sistema de Diseño

## Temas relacionados

- **Theme Builder Onboarding**: Configuración guiada para temas personalizados
- **Setup Assistant Agent**: Configuración de sitios guiada por el agente
- **Site Specification Skill**: Define los objetivos y el público de tu sitio
- **Design System Aesthetics Skill**: Refina la identidad visual de tu sitio
