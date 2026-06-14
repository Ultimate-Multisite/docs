---
title: Capacidades do Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capacidades do Theme Builder: Scaffold e Activar Temas de Bloco

O Superdav AI Agent v1.12.0 introduce duas capacidades potentes que te permitem gerar e implantar themes de bloco personalizados directamente a partir da interface de chat.

## Visión Geral

As capacidades **scaffold-block-theme** e **activate-theme** permitem aos agentes:
- Gerar themes de bloco completos e prontos para produção com base nas tuas especificações
- Ativar temas no teu site automaticamente sem intervenção manual
- Criar identidades visuais coesas através de decisões de design guiadas

## Scaffold Theme de Bloco

A capacidade **scaffold-block-theme** gera um novo theme de bloco WordPress com uma estrutura completa, incluindo:

- Configuração `theme.json` com tokens de design
- Arquivos de template de bloco para layouts comuns
- Estilos e variações de blocos personalizados
- Metadados do tema e declarações de suporte

### Como Invocar

Na tua conversa com o Superdav AI Agent, podes pedir a geração de temas:

```
"Crea un theme de bloco chamado 'Modern Agency' con esquemas de cores azul e branco,
tipografía sans-serif y un diseño profesional"
```

O agente fará o seguinte:
1. Recopilaras as teses de design através da conversa
2. Gerar a estrutura completa do theme
3. Criar todos os ficheiros necessários do theme
4. Preparar o theme para a activación

### Saída Esperada

Quando a capacidade se executa com sucesso, verás:

- Confirmação de que o theme foi scaffolded (estruturado)
- O nome e a localização do theme
- Um resumo dos tokens de design aplicados (cores, tipografia, espaçamento)
- Estado pronto para ativar

Exemplo de saída:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activar Tema

A capacidade **activate-theme** muda o seu sitio para un tema de bloco recién criado ou existente.

### Como Invocarlo

Depois de criar (scaffold) un tema, podes activalo inmediatamente:

```
"Activar o tema Modern Agency"
```

Ou activa cualquier tema existente:

```
"Mudar ao tema Twentytwentyfour"
```

### Resultado Esperado

Quando a activación é moi moi:

- Confirmación do tema activo
- Nome do tema anterior (para referencia)
- URL do sitio onde o tema está agora vivo
- Notas de configuración específicas do tema

Exemplo de resultado:
```
✓ Tema activado con éxito
  Tema activo: Modern Agency
  Tema anterior: Twentytwentyfour
  Vivo en: https://yoursite.com
  Nota: Verifica a tua página inicial para confirmar o layout
```

## Fluxo de Trabajo: Criar e Activar (Scaffold and Activate)

Un fluxo típico combina ambas as capacidades:

1. **Solicitar a creación do tema**: "Crea un tema de bloco para a mi landing page SaaS"
2. **O agente cria o tema**: Genera ficheiros e tokens de diseño
3. **Revisar e refinar**: Discute cambios de diseño se for necesario
4. **Activar**: "Activa o tema agora"
5. **Verificar**: Visita o teu sitio para confirmar que o novo design está vivo

## Tokens de Diseño y Personalización (Design Tokens and Customization)

Os temas criados com scaffold utilizan os tokens de diseño do WordPress (via `theme.json`) para:

- **Cores**: Paleta principal, secundária, de acento, neutra
- **Tipografia**: Familias de fontes, tamanhos, pesos, alturas de línea
- **Espaciamento**: Padding, margens, escalas de gap
- **Bordes**: Tokens de raio y ancho
- **Sombras**: Niveles de elevación

Estes tokens están centralizados en `theme.json`, facilitando a súa adaptación de todo o teu sistema de diseño a partir dun único ficheiro.

## Limitaciones y Notas

- Os temas son escoitados en `/wp-content/themes/` e deben seguir as convencións de nomeación do WordPress
- A activación requiere os permisos adecuados no seu sitio WordPress
- O código PHP personalizado nos temas é mínimo; use plugins para funcionalidades complexas
- Os temas de bloco funcionan mellor con WordPress 5.9 e posteriores

## Solución de problemas (Troubleshooting)

**O tema non aparece después do escoito**
- Verifique que o directorio do tema existe e ten os permisos correctos
- Verifique que `theme.json` é JSON válido
- Asegúrese de que o nome do tema non colide con outros temas existentes

**A activación falha**
- Confirme que ten permiso de administrador
- Verifique que o directorio do tema é legível para WordPress
- Revise os registos de erro do WordPress para obter detalles

**Os tokens de diseño non se aplican**
- Verifique que a sintaxe de `theme.json` é correcta
- Limpe calquera plugin de cache
- Verifique que a súa versión de WordPress suporta os tokens que está utilizando

## Próximos pasos (Next Steps)

Después de activar o seu tema, poderá:
- Usar a **habilidade Estética do Sistema de Diseño** para refinar tipografía, colores e espaçamento
- Personalizar estilos de bloc individuais a través do editor de bloques de WordPress
- Añadir CSS personalizado no ficheiro `style.css` do tema
- Crear modelos de bloc personalizados para tipos de página específicos
