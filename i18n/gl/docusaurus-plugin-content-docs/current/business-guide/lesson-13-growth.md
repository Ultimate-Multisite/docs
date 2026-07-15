---
title: 'Lección 13: Escalado'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Lección 13: Escalar

Tes unha plataforma funcionando con clientes de pago. Esta lección cobre como medrar desde unha pequena operación ata un negocio sostible: escalar a infraestrutura, automatizar operacións e aumentar os ingresos por cliente.

## Onde o deixamos {#where-we-left-off}

FitSite está en directo, os clientes están rexistrándose e ti estás xestionando as operacións diarias. Agora centrámonos no crecemento.

## Coñece os teus números {#know-your-numbers}

Antes de escalar, entende onde estás:

### Métricas clave {#key-metrics}

- **MRR (ingresos recorrentes mensuais)**: Ingresos totais mensuais por subscrición
- **Número de clientes**: Total de subscritores activos
- **ARPU (ingreso medio por usuario)**: MRR dividido polo número de clientes
- **Taxa de abandono**: Porcentaxe de clientes que cancelan cada mes
- **LTV (valor de vida do cliente)**: Ingreso medio por cliente ao longo de toda a súa subscrición
- **CAC (custo de adquisición de cliente)**: Custo medio para adquirir un cliente

### Exemplo: FitSite con 50 clientes {#example-fitsite-at-50-customers}

| Métrica | Valor |
|--------|-------|
| Clientes | 50 (30 Inicial, 15 Crecemento, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 de order bumps) |
| ARPU | $89/mes |
| Abandono mensual | 4% (2 cancelacións/mes) |
| LTV | $89 x 25 meses = $2,225 |

Estes números dinche en que centrarte. Abandono alto? Mellora a retención. ARPU baixo? Impulsa as actualizacións. CAC alto? Optimiza as canles de adquisición.

## Escalar a infraestrutura {#scaling-infrastructure}

### Cando escalar {#when-to-scale}

Escala o aloxamento cando:

- Os tempos de carga das páxinas aumentan de forma notable
- A CPU ou a memoria do servidor supera regularmente o 70% de utilización
- Estás achegándote a máis de 100 sitios activos
- Aumentan as queixas dos clientes sobre a velocidade

### Como escalar {#how-to-scale}

- **Escalado vertical**: Actualiza a un servidor máis grande (máis CPU, RAM)
- **Capas de caché**: Engade Redis/Memcached para caché de obxectos, caché de páxina para contido estático
- **CDN**: Se aínda non usas Cloudflare ou similar, engade unha CDN para recursos estáticos
- **Optimización da base de datos**: A medida que a rede medra, as consultas á base de datos ralentízanse. Optimiza táboas, engade índices, considera un servidor de base de datos dedicado.
- **Separar responsabilidades**: Move o almacenamento multimedia a almacenamento de obxectos (compatible con S3), descarga o correo electrónico nun servizo de correo transaccional

### Migración de aloxamento {#hosting-migration}

Se o teu provedor actual non pode escalar máis, planifica unha migración:

1. Configura o novo contorno
2. Proba a fondo cunha copia da túa rede
3. Programa a migración durante horas de baixo tráfico
4. Actualiza o DNS cun TTL mínimo de antemán
5. Verifica que todo funciona despois da migración

## Automatizar operacións {#automating-operations}

A medida que medras, os procesos manuais convértense en pescozos de botella. Automatiza o que poidas:

### Webhooks e Zapier {#webhooks-and-zapier}

Usa [Webhooks](/user-guide/integrations/webhooks) ou [Zapier](/user-guide/integrations/zapier) para automatizar:

- **Notificacións de novos rexistros** → canle de Slack ou CRM
- **Alertas de cancelación** → activar secuencia de correo de recuperación
- **Fallos de pagamento** → alerta na túa ferramenta de monitorización
- **Actualizacións de plan** → correo de felicitación cunha guía das novas funcionalidades

### Automatización de correo electrónico {#email-automation}

Pasa de correos manuais a secuencias automatizadas:

- Secuencia de incorporación (xa construída na Lección 8)
- Secuencia de reactivación para clientes inactivos
- Avisos de actualización cando os clientes se achegan aos límites do plan
- Recordatorios de renovación para subscritores anuais

### Automatización de soporte {#support-automation}

- **Respostas predefinidas** para preguntas comúns
- **Respostas automáticas** confirmando a recepción de tickets de soporte
- **Suxestións da base de coñecemento** cando os clientes envían tickets que coinciden con artigos existentes

## Aumentar os ingresos {#increasing-revenue}

O crecemento non vai só de conseguir máis clientes. Tamén vai de obter máis ingresos por cliente.

### Venda adicional a clientes existentes {#upselling-existing-customers}

- **Actualizacións de plan**: Campañas segmentadas que amosan funcionalidades de Crecemento/Pro a clientes de Inicial
- **Order bumps**: Promociona produtos complementarios a clientes existentes por correo electrónico
- **Conversión anual**: Ofrece aos clientes mensuais un desconto para cambiar á facturación anual

### Novas fontes de ingresos {#new-revenue-streams}

- **Configuración feita por ti**: Cobra un prezo premium por configurar e personalizar o sitio dun cliente por el
- **Servizos de deseño personalizado**: Ofrece traballo de deseño á medida enriba do modelo
- **Sesións de formación**: Percorridos individuais de pago para clientes que queren axuda práctica
- **Plugins premium**: Ofrece plugins premium específicos do nicho como complementos de pago (por exemplo, un widget de reserva de clases de fitness)

### Subir prezos {#raising-prices}

A medida que a túa plataforma madura e engade valor:

- Mantén os clientes existentes co seu prezo actual
- Sobe os prezos para os novos rexistros
- Xustifica os aumentos con novas funcionalidades e melloras

## Construír un equipo {#building-a-team}

Nalgún momento, non poderás facelo todo só. Primeiras contratacións habituais:

1. **Persoa de soporte**: Xestiona as preguntas diarias dos clientes (inicialmente a tempo parcial)
2. **Creador de contido**: Escribe artigos da base de coñecemento, publicacións de blog e contido de marketing
3. **Deseñador**: Mellora modelos e crea novos

Non necesitas empregados. Contratistas e freelancers funcionan ben para un negocio de plataforma.

## Fitos de crecemento {#growth-milestones}

| Fito | MRR aproximado | Foco |
|-----------|-----------------|-------|
| 0-25 clientes | $0-$2,500 | Axuste produto-mercado, contacto directo |
| 25-100 clientes | $2,500-$10,000 | Sistematizar operacións, marketing de contido |
| 100-250 clientes | $10,000-$25,000 | Contratar soporte, optimizar conversión, escalar aloxamento |
| 250-500 clientes | $25,000-$50,000 | Construír equipo, novas fontes de ingresos, funcionalidades premium |
| 500+ clientes | $50,000+ | Madurez da plataforma, nichos adxacentes, saída potencial |

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Un marco de métricas** para entender a saúde do negocio
- **Plan de escalado de infraestrutura** para medrar de ducias a centos de sitios
- **Estratexias de automatización** para soporte, correo electrónico e operacións
- **Tácticas de crecemento de ingresos** máis alá de simplemente adquirir novos clientes
- **Orientación para construír equipo** para cando superes a operación en solitario
- **Fitos de crecemento** con áreas de foco para cada etapa

---

**Seguinte:** [Lección 14: Que vén despois](lesson-14-whats-next) -- expandirte máis alá do teu primeiro nicho.
