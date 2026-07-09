---
title: 'Lección 12: Xestionar o negocio'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lección 12: Xestionar o negocio {#lesson-12-running-the-business}

Unha plataforma non é un proxecto que rematas: é un negocio que xestionas. Esta lección cobre as operacións do día a día para xestionar FitSite: soporte, facturación, mantemento e manter satisfeitos os clientes.

## Onde o deixamos {#where-we-left-off}

FitSite está en produción e os clientes están rexistrándose. Agora tes que xestionar a operación de forma sustentable.

## Operacións diarias {#daily-operations}

### Monitorización {#monitoring}

Comproba isto a diario (ou configura alertas):

- **Tempo de actividade**: A plataforma é accesible? Usa un servizo de monitorización de tempo de actividade.
- **Novos rexistros**: Cantos clientes novos se rexistraron hoxe?
- **Pagamentos fallidos**: Hai fallos de pagamento que requiran atención?
- **Solicitudes de soporte**: Hai preguntas de clientes sen responder?

### Soporte ao cliente {#customer-support}

O teu enfoque de nicho é unha vantaxe aquí. Como todos os teus clientes son estudos de fitness, verás as mesmas preguntas repetidamente:

**Preguntas comúns que recibirás:**

- "Como actualizo o meu horario de clases?"
- "Podo cambiar as cores do meu sitio?"
- "Como engado un novo adestrador ao meu sitio?"
- "O meu dominio non funciona"
- "Como cancelo/actualizo o meu plan?"

Crea a túa base de coñecemento (iniciada na Lección 8) arredor destas preguntas recorrentes. Cada tícket de soporte que podería ter sido un artigo da base de coñecemento é un sinal para escribir ese artigo.

### Niveis de soporte {#support-tiers}

A medida que medres, estrutura o soporte por plan:

| Plan | Nivel de soporte | Tempo de resposta |
|------|--------------|---------------|
| Starter | Base de coñecemento + correo electrónico | 48 horas |
| Growth | Soporte por correo electrónico | 24 horas |
| Pro | Correo electrónico prioritario + chamada de incorporación | 4 horas |

O [addon de tíckets de soporte](/addons/support-tickets) pode axudar a xestionar as solicitudes de soporte dentro da plataforma.

## Operacións de facturación {#billing-operations}

### Pagamentos recorrentes {#recurring-payments}

Ultimate Multisite xestiona automaticamente a facturación recorrente a través da túa pasarela de pagamento. O teu traballo é monitorizar:

- **Pagamentos fallidos**: Fai seguimento rapidamente. A maioría dos fallos son tarxetas caducadas, non cancelacións intencionadas.
- **Dunning**: Configura unha lóxica automatizada de reintento a través da túa pasarela de pagamento (Stripe xestiona isto ben)
- **Solicitudes de cancelación**: Entende por que marchan os clientes. Cada cancelación é feedback.

### Xestionar subscricións {#managing-memberships}

Vai a **Ultimate Multisite > Subscricións** para:

- Ver todas as subscricións activas
- Xestionar solicitudes de actualización e rebaixa de plan
- Procesar reembolsos cando sexa necesario
- Xestionar caducidades de probas

Consulta [Xestionar subscricións](/user-guide/administration/managing-memberships) para a referencia completa.

### Facturación {#invoicing}

Asegúrate de que as facturas se xeren correctamente para cada pagamento. Os clientes poden necesitar facturas para informar de gastos empresariais. Consulta [Xestionar pagamentos e facturas](/user-guide/administration/managing-payments-and-invoices).

## Mantemento da plataforma {#platform-maintenance}

### Actualizacións de WordPress e plugins {#wordpress-and-plugin-updates}

Como administrador da rede, es responsable de:

- **Actualizacións do núcleo de WordPress**: Próbaas nun sitio de staging antes de aplicalas en produción
- **Actualizacións de plugins**: O mesmo: proba primeiro e despois aplícaas en toda a rede
- **Actualizacións do tema**: Verifica que os modelos sigan véndose correctamente despois das actualizacións do tema
- **Actualizacións de Ultimate Multisite**: Sigue o rexistro de cambios e proba antes de actualizar

:::warning Nunca actualices en produción sen probar
Unha actualización rota afecta a todos os sitios de clientes da túa rede. Proba sempre primeiro as actualizacións nunha copia de staging da túa rede.
:::

### Seguridade {#security}

- Mantén todo o software actualizado
- Usa contrasinais fortes e autenticación de dous factores para as contas de administración
- Monitoriza a actividade sospeitosa
- Ten un plan para incidentes de seguridade

### Rendemento {#performance}

A medida que a túa rede medre, monitoriza:

- **Tempos de carga das páxinas**: Son rápidos os sitios dos clientes?
- **Uso de recursos do servidor**: CPU, memoria, espazo en disco
- **Rendemento da base de datos**: As redes grandes necesitan optimización da base de datos co tempo

Considera implementar caché (caché de páxina, caché de obxectos) e unha CDN se aínda non o fixeches. A [integración con Cloudflare](/user-guide/host-integrations/cloudflare) xestiona gran parte disto.

## Xestión do ciclo de vida do cliente {#customer-lifecycle-management}

### Reducir a perda de clientes {#reducing-churn}

A perda de clientes é a porcentaxe de clientes que cancelan cada mes. Para un negocio de subscrición, reducir a perda de clientes é tan importante como adquirir novos clientes.

**Razóns comúns polas que os clientes de estudos de fitness cancelan:**

- Non conseguiron entender como usar a plataforma → mellora a incorporación
- O sitio non tiña un aspecto suficientemente bo → mellora os modelos
- Non viron valor → mellora as funcionalidades ou a comunicación
- Atoparon unha alternativa máis barata → reforza o teu valor de nicho
- O seu negocio pechou → inevitable, pero fai seguimento disto por separado

### Fomentar actualizacións de plan {#encouraging-upgrades}

Débese animar os clientes de Starter que están tendo éxito a actualizar:

- Cando cheguen aos límites do plan (sitios, almacenamento), mostra avisos de actualización
- Envía correos electrónicos segmentados destacando funcionalidades do plan Growth das que se beneficiarían
- Amosa o que construíron os clientes de Growth/Pro

### Campañas de recuperación {#win-back-campaigns}

Cando un cliente cancela:

1. Pregunta por que (enquisa de saída ou correo electrónico)
2. Aborda a súa preocupación se é posible
3. Ofrece un desconto para volver (30-60 días despois da cancelación)

## Rutinas semanais e mensuais {#weekly-and-monthly-routines}

### Semanais {#weekly}

- Revisa novos rexistros e cancelacións
- Responde a todos os tíckets de soporte abertos
- Comproba o rendemento e o tempo de actividade da plataforma
- Revisa calquera pagamento fallido

### Mensuais {#monthly}

- Analiza métricas clave (MRR, perda de clientes, novos clientes, actualizacións)
- Aplica actualizacións de WordPress e plugins (despois da proba en staging)
- Revisa e actualiza a base de coñecemento segundo os patróns de soporte
- Envía un boletín ou actualización aos clientes (novas funcionalidades, consellos, novas da industria do fitness)

### Trimestrais {#quarterly}

- Revisa os prezos fronte aos competidores e o feedback dos clientes
- Avalía os deseños dos modelos: necesitan renovarse?
- Avalía a capacidade de aloxamento: necesitas escalar?
- Revisa e mellora a incorporación segundo os datos de activación

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Rutinas diarias de supervisión** para tempo de actividade, rexistros, pagamentos e soporte
- **Unha estrutura de soporte por niveis** adaptada aos niveis do plan
- **Operacións de facturación** incluíndo xestión de cobros pendentes e cancelacións
- **Procedementos de mantemento** para actualizacións, seguridade e rendemento
- **Estratexias de redución do abandono** específicas do nicho do fitness
- **Rutinas operativas semanais, mensuais e trimestrais**

---

**Seguinte:** [Lección 13: Escalar](lesson-13-growth) -- facendo crecer FitSite desde unha pequena operación ata un negocio real.
