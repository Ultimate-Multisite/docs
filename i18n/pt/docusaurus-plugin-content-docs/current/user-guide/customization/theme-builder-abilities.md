---
title: Habilidades do Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Habilidades do Theme Builder: Scaffold e Ativar Temas de Bloco

O Superdav AI Agent v1.12.0 introduz duas habilidades poderosas que permitem gerar e implantar temas de bloco personalizados diretamente na interface de chat.

## Visão Geral

As habilidades **scaffold-block-theme** (esboçar tema de bloco) e **activate-theme** (ativar tema) permitem que os agentes:
- Gerem temas de bloco completos e prontos para produção com base nas suas especificações
- Ativem temas no seu site automaticamente, sem intervenção manual
- Criem identidades visuais coesas através de decisões de design guiadas

## Scaffold Block Theme (Esboçar Tema de Bloco)

A habilidade **scaffold-block-theme** gera um novo tema de bloco do WordPress com uma estrutura completa, incluindo:

- Configuração `theme.json` com tokens de design
- Arquivos de template de blocos para layouts comuns
- Estilos e variações de blocos personalizados
- Metadados do tema e declarações de suporte

### Como Invocar

Na sua conversa com o Superdav AI Agent, você pode solicitar a geração de um tema:

```
"Crie um tema de bloco chamado 'Agência Moderna' com uma paleta de cores azul e branco,
tipografia sem serifa e um layout profissional"
```

O agente fará o seguinte:
1. Coletar suas preferências de design através da conversa
2. Gerar a estrutura completa do tema
3. Criar todos os arquivos necessários do tema
4. Preparar o tema para ativação

### Saída Esperada

Quando a habilidade é executada com sucesso, você verá:

- Confirmação de que o tema foi esboçado (scaffolded)
- O nome e a localização do tema
- Um resumo dos tokens de design aplicados (cores, tipografia, espaçamento)
- Status pronto para ativar

Exemplo de saída:
```
✓ Tema "Modern Agency" esboçado com sucesso
  Localização: /wp-content/themes/modern-agency/
  Cores: Primária #0066CC, Secundária #FFFFFF
  Tipografia: Inter (sem serifa)
  Status: Pronto para ativar
```

## Activate Theme (Ativar Tema)

A habilidade **activate-theme** muda seu site para um tema recém-estruturado ou existente.

### Como Invocar

Depois de estruturar um tema, você pode ativá-lo imediatamente:

```
"Ativar o Modern Agency theme"
```

Ou ativar qualquer tema existente:

```
"Mudar para o Twentytwentyfour theme"
```

### Saída Esperada

Quando a ativação for bem-sucedida:

- Confirmação do tema ativo
- Nome do tema anterior (para referência)
- URL do site onde o tema está agora ativo
- Quaisquer notas de configuração específicas do tema

Exemplo de saída:
```
✓ Tema ativado com sucesso
  Tema ativo: Modern Agency
  Tema anterior: Twentytwentyfour
  Ativo em: https://yoursite.com
  Nota: Verifique sua página inicial para confirmar o layout
```

## Fluxo de Trabalho: Estruturar e Ativar

Um fluxo de trabalho típico combina ambas as habilidades:

1. **Solicitar geração do tema**: "Criar um tema de blocos para minha landing page SaaS"
2. **Agente estrutura o tema**: Gera arquivos e tokens de design
3. **Revisar e refinar**: Discutir mudanças de design se necessário
4. **Ativar**: "Ativar o tema agora"
5. **Verificar**: Visite seu site para confirmar que o novo design está ativo

## Tokens de Design e Personalização

Temas estruturados usam tokens de design do WordPress (via `theme.json`) para:

- **Cores**: Paleta primária, secundária, de destaque, neutra
- **Tipografia**: Famílias de fontes, tamanhos, pesos, alturas de linha
- **Espaçamento**: Padding, margem, escalas de espaçamento (gap scales)
- **Bordas**: Tokens de raio e largura
- **Sombras**: Níveis de elevação

Estes tokens ficam centralizados no `theme.json`, facilitando o ajuste de todo o seu sistema de design a partir de um único arquivo.

## Limitações e Observações

## Solução de Problemas

**O tema não aparece após o scaffolding (estrutura inicial)**
- Verifique se o diretório do tema existe e tem as permissões corretas
- Confirme se o arquivo `theme.json` é um JSON válido
- Certifique-se de que o nome do tema não conflita com outros temas existentes

**A ativação falha**
- Confirme que você tem permissões de administrador no site WordPress
- Verifique se o diretório do tema é legível pelo WordPress
- Revise os logs de erro do WordPress para obter detalhes

**Os tokens de design não estão sendo aplicados**
- Verifique se a sintaxe do `theme.json` está correta
- Limpe quaisquer plugins de cache
- Verifique se a sua versão do WordPress suporta os tokens que você está usando

## Próximos Passos

Após ativar o seu tema, você pode:
- Usar a habilidade **Design System Aesthetics** para refinar tipografia, cores e espaçamento
- Personalizar estilos de blocos individuais através do editor de blocos do WordPress
- Adicionar CSS personalizado no arquivo `style.css` do tema
- Criar modelos de blocos personalizados para tipos de página específicos
