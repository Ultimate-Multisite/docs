---
title: Habilidades do Construtor de Temas
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Habilidades do Construtor de Temas: Criar e Ativar Temas de Blocos

O Superdav AI Agent v1.12.0 introduz duas habilidades poderosas que permitem gerar e implantar temas de blocos personalizados diretamente na interface de chat.

## Visão Geral {#overview}

As habilidades **scaffold-block-theme** e **activate-theme** permitem que os agentes:
- Gerem temas de blocos completos e prontos para produção, com base nas suas especificações
- Ativem temas automaticamente no seu site, sem intervenção manual
- Criem identidades visuais coesas por meio de decisões de design guiadas

## Criar Tema de Blocos (Scaffold Block Theme) {#scaffold-block-theme}

A habilidade **scaffold-block-theme** gera um novo tema de blocos do WordPress com uma estrutura completa, incluindo:

- Configuração `theme.json` com tokens de design
- Arquivos de template de blocos para layouts comuns
- Estilos e variações de blocos personalizados
- Metadados e declarações de suporte do tema

### Como Invocar {#how-to-invoke}

No seu chat com o Superdav AI Agent, você pode solicitar a geração de um tema:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

O agente irá:
1. Coletar suas preferências de design através da conversa
2. Gerar a estrutura completa do tema
3. Criar todos os arquivos de tema necessários
4. Preparar o tema para ativação

### Saída Esperada {#expected-output}

Quando a habilidade for executada com sucesso, você verá:

- Confirmação de que o tema foi criado (scaffolded)
- O nome e o local do tema
- Um resumo dos tokens de design aplicados (cores, tipografia, espaçamento)
- Status pronto para ativação

Exemplo de saída:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Ativar Tema (Activate Theme) {#activate-theme}

A habilidade **activate-theme** muda seu site para um tema de blocos recém-criado ou existente.

### Como Invocar {#how-to-invoke-1}

Após criar um tema, você pode ativá-lo imediatamente:

```
"Activate the Modern Agency theme"
```

Ou ativar qualquer tema existente:

```
"Switch to the Twentytwentyfour theme"
```

### Saída Esperada {#expected-output-1}

Quando a ativação for bem-sucedida:

- Confirmação do tema ativo
- Nome do tema anterior (para referência)
- URL do site onde o tema está ativo
- Quaisquer notas de configuração específicas do tema

Exemplo de saída:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Fluxo de Trabalho: Criar e Ativar {#workflow-scaffold-and-activate}

Um fluxo de trabalho típico combina ambas as habilidades:

1. **Solicitar geração de tema**: "Create a block theme for my SaaS landing page"
2. **Agente cria o tema**: Gera arquivos e tokens de design
3. **Revisar e refinar**: Discutir mudanças de design, se necessário
4. **Ativar**: "Activate the theme now"
5. **Verificar**: Visitar seu site para confirmar que o novo design está ativo

## Tokens de Design e Personalização {#design-tokens-and-customization}

Os temas criados usam tokens de design do WordPress (via `theme.json`) para:

- **Cores**: Paleta primária, secundária, de destaque e neutra
- **Tipografia**: Famílias de fontes, tamanhos, pesos, alturas de linha
- **Espaçamento**: Escalas de preenchimento (padding), margem (margin) e lacunas (gap)
- **Bordas**: Tokens de raio e largura
- **Sombras**: Níveis de elevação

Estes tokens são centralizados em `theme.json`, facilitando o ajuste de todo o seu sistema de design a partir de um único arquivo.

## Limitações e Observações {#limitations-and-notes}

- Os temas são criados em `/wp-content/themes/` e devem seguir as convenções de nomenclatura do WordPress
- A ativação exige permissões adequadas no seu site WordPress
- O código PHP personalizado nos temas é mínimo; use plugins para funcionalidades complexas
- Os temas de blocos funcionam melhor com o WordPress 5.9 e versões posteriores

## Solução de Problemas {#troubleshooting}

**O tema não aparece após a criação**
- Verifique se o diretório do tema existe e possui permissões adequadas
- Verifique se o `theme.json` é um JSON válido
- Certifique-se de que o nome do tema não conflita com temas existentes

**A ativação falha**
- Confirme que você tem permissões de administrador
- Verifique se o diretório do tema é legível pelo WordPress
- Revise os logs de erro do WordPress para obter detalhes

**Os tokens de design não estão sendo aplicados**
- Verifique se a sintaxe do `theme.json` está correta
- Limpe quaisquer plugins de cache
- Verifique se sua versão do WordPress suporta os tokens que você está usando

## Próximos Passos {#next-steps}

Após ativar seu tema, você pode:
- Usar a **Design System Aesthetics skill** para refinar tipografia, cores e espaçamento
- Personalizar estilos de blocos individuais através do editor de blocos do WordPress
- Adicionar CSS personalizado no arquivo `style.css` do tema
- Criar templates de blocos personalizados para tipos de página específicos
