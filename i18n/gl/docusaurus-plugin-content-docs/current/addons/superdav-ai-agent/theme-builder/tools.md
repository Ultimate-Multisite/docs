---
title: Ferramentas e configuración
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Ferramentas e configuración

Theme Builder usa un conxunto de ferramentas para analizar, deseñar e construír o teu sitio WordPress. Na versión 1.16.0, **sd-ai-agent/site-scrape é agora unha ferramenta de Nivel 1**, polo que está dispoñible por defecto en Theme Builder. Superdav AI Agent v1.18.0 tamén introduce un paquete complementario Advanced distribuído por separado para fluxos de traballo de desenvolvedores de confianza; esas ferramentas non forman parte do paquete principal de WordPress.org e deben instalarse e autorizarse por separado.

## Ferramentas dispoñibles {#available-tools}

### Ferramentas de Nivel 1 (sempre dispoñibles) {#tier-1-tools-always-available}

As ferramentas de Nivel 1 están dispoñibles por defecto en Theme Builder sen ningunha configuración adicional.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Finalidade:** Analizar sitios web existentes para extraer inspiración de deseño, estrutura de contido e funcionalidade.

**Capacidades:**

- **Análise de sitios web** — rastrexar e analizar sitios web da competencia ou de inspiración
- **Extracción de deseño** — identificar cores, fontes e patróns de disposición
- **Estrutura de contido** — comprender a organización e a xerarquía das páxinas
- **Detección de funcionalidades** — identificar complementos e funcionalidade
- **Análise de rendemento** — comprobar a velocidade da páxina e a optimización
- **Análise de SEO** — revisar etiquetas meta e datos estruturados

**Uso:**

```
Analiza o deseño de example.com e úsao como inspiración para o meu sitio.
```

**O que extrae:**

- Paleta de cores e uso das cores
- Tipografía (fontes e tamaños)
- Estrutura de disposición e espazamento
- Patróns de navegación
- Organización do contido
- Uso de imaxes e medios
- Elementos interactivos
- Adaptabilidade móbil

**Limitacións:**

- Non pode rastrexar sitios protexidos por contrasinal
- Respecta robots.txt e as políticas do sitio
- Pode non capturar contido dinámico
- Os sitios con moito JavaScript poden ter unha análise limitada
- Os sitios grandes poden tardar máis en analizarse

### Ferramentas de Nivel 2 (opcionais) {#tier-2-tools-optional}

As ferramentas de Nivel 2 están dispoñibles cando se activan explicitamente na configuración de Theme Builder.

#### Analíticas avanzadas {#advanced-analytics}

Proporciona métricas de rendemento detalladas:

- Tempos de carga das páxinas
- Core Web Vitals
- Puntuación de SEO
- Puntuación de accesibilidade
- Puntuación de boas prácticas

#### Optimizador de contido {#content-optimizer}

Analiza e suxire melloras para:

- Lexibilidade
- Optimización de SEO
- Uso de palabras clave
- Estrutura do contido
- Colocación de chamadas á acción

### Ferramentas de Nivel 3 (Premium) {#tier-3-tools-premium}

As ferramentas de Nivel 3 requiren configuración adicional ou funcións premium.

#### Xerador de contido con IA {#ai-content-generator}

Xera contido para:

- Descricións de produtos
- Páxinas de servizos
- Publicacións de blog
- Descricións meta
- Texto de chamadas á acción

#### Ferramentas de deseño avanzadas {#advanced-design-tools}

Proporciona capacidades de deseño avanzadas:

- Xeración de CSS personalizado
- Creación de animacións
- Deseño de elementos interactivos
- Teoría avanzada da cor
- Optimización da tipografía

### Ferramentas complementarias Advanced (paquete separado) {#advanced-companion-tools-separate-package}

O paquete complementario Advanced distribúese por separado da versión principal de Superdav AI Agent. Está pensado para contornos de desenvolvedores e propietarios de sitios de confianza nos que os administradores permiten explicitamente que o axente use ferramentas de alto impacto.

As capacidades complementarias Advanced poden incluír:

- **Ferramentas do sistema de ficheiros** — inspeccionar e modificar ficheiros aprobados en contornos de confianza
- **Ferramentas de base de datos** — consultar ou actualizar datos do sitio cando se autorice explicitamente
- **Ferramentas WP-CLI** — executar comandos de mantemento e inspección de WordPress
- **Ferramentas de despachador REST** — chamar endpoints REST rexistrados mediante fluxos de despacho controlados
- **Ferramentas de creación de complementos** — estruturar e iterar código de complementos
- **Ferramentas de instantáneas Git** — crear instantáneas antes de operacións de desenvolvedor arriscadas
- **Ferramentas de xestión de usuarios** — axudar a revisar ou axustar rexistros de usuarios cando estea permitido
- **Ferramentas de benchmark** — executar benchmarks de rendemento ou capacidade para revisión de desenvolvemento

Non documentes estas ferramentas como ferramentas de Theme Builder dispoñibles de maneira xeral para todas as instalacións. Só están dispoñibles cando o paquete complementario Advanced está instalado, activado e restrinxido a administradores de confianza.

## Configuración das ferramentas {#tool-configuration}

### Activar ferramentas {#enabling-tools}

Para activar ferramentas adicionais en Theme Builder:

1. Navega a **Gratis AI Agent → Configuración**
2. Vai a **Theme Builder → Ferramentas**
3. Activa ou desactiva ferramentas segundo sexa necesario
4. Garda a configuración

### Permisos das ferramentas {#tool-permissions}

Algunhas ferramentas requiren permisos:

- **Rastrexo do sitio** — require acceso a internet
- **Analíticas** — require integración con Google Analytics
- **Xeración de contido** — require claves de API
- **Funcións avanzadas** — poden requirir unha subscrición premium
- **Ferramentas complementarias Advanced** — requiren o paquete Advanced distribuído por separado e confianza explícita do administrador

### Claves de API e credenciais {#api-keys-and-credentials}

Configura as claves de API para as ferramentas que as requiren:

1. Vai a **Gratis AI Agent → Configuración → Claves de API**
2. Introduce as credenciais de cada ferramenta
3. Proba a conexión
4. Garda de forma segura

### Instalar o paquete complementario Advanced {#installing-the-advanced-companion-package}

O paquete complementario Advanced publícase por separado do ZIP principal de WordPress.org. Instálao só desde a canle oficial de distribución do proxecto para a versión e despois restrinxe o acceso a administradores de confianza. Revisa as portas de aprobación humana e o comportamento das instantáneas git antes de activar ferramentas de sistema de ficheiros, base de datos, WP-CLI, despachador REST, creación de complementos, xestión de usuarios ou benchmark nun sitio de produción.

## Usar sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Uso básico {#basic-usage}

Pídelle a Theme Builder que analice un sitio web:

```
Analiza o deseño do sitio do meu competidor en competitor.com
e suxire melloras de deseño para o meu sitio.
```

### Análise específica {#specific-analysis}

Solicita tipos específicos de análise:

```
Extrae a paleta de cores de example.com e úsaa como inspiración.
```

```
Analiza a estrutura de navegación de example.com e aplica unha
organización semellante ao meu sitio.
```

```
Comproba a adaptabilidade móbil de example.com e asegúrate de que o meu sitio
sexa igual de adaptable.
```

### Análise comparativa {#comparison-analysis}

Compara varios sitios:

```
Compara os deseños de site1.com e site2.com e crea un deseño
que combine os mellores elementos de ambos.
```

## Limitacións e consideracións das ferramentas {#tool-limitations-and-considerations}

### Limitación de taxa {#rate-limiting}

- O scraping ten límite de frecuencia para evitar a sobrecarga do servidor
- Varias solicitudes ao mesmo sitio poden ser limitadas
- Os sitios grandes poden tardar máis en analizarse

### Precisión do contido {#content-accuracy}

- É posible que o contido dinámico non se capture por completo
- O contido renderizado con JavaScript pode estar incompleto
- É posible que os datos en tempo real non se reflictan
- Algún contido pode estar detrás de muros de pagamento

### Consideracións legais e éticas {#legal-and-ethical-considerations}

- Respecta robots.txt e as políticas do sitio
- Non fagas scraping de contido con dereitos de autor para reproducilo
- Usa a análise como inspiración, non para copiar
- Verifica que tes dereitos para usar o contido extraído
- Sigue os termos de servizo dos sitios analizados

### Impacto no rendemento {#performance-impact}

- Facer scraping de sitios grandes pode levar tempo
- Varios scrapings simultáneos poden ser máis lentos
- A conectividade de rede afecta á velocidade
- Os conxuntos de datos grandes poden requirir máis procesamento

## Boas prácticas {#best-practices}

### Uso da análise do sitio {#using-site-analysis}

1. **Analiza varios sitios** — reúne inspiración de varias fontes
2. **Céntrate na estrutura** — aprende patróns de deseño e organización
3. **Extrae cores** — usa paletas de cores como puntos de partida
4. **Estuda a tipografía** — identifica combinacións de fontes que che gusten
5. **Revisa a navegación** — comprende a organización do menú

### Scraping ético {#ethical-scraping}

1. **Respecta robots.txt** — segue as directrices do sitio
2. **Non copies contido** — usa a análise só como inspiración
3. **Verifica os dereitos** — asegúrate de que podes usar o contido extraído
4. **Atribúe as fontes** — dá crédito ás fontes de inspiración
5. **Segue os termos** — cumpre os termos de servizo do sitio

### Maximizar a eficacia da ferramenta {#maximizing-tool-effectiveness}

1. **Sé específico** — solicita tipos específicos de análise
2. **Proporciona contexto** — explica o propósito do teu sitio
3. **Define expectativas** — describe os teus obxectivos de deseño
4. **Itera** — refina en función dos resultados
5. **Combina ferramentas** — usa varias ferramentas para unha análise completa

## Solución de problemas {#troubleshooting}

### O sitio non se pode scrapear {#site-wont-scrape}

- Comproba se o sitio é accesible publicamente
- Verifica que robots.txt permita o scraping
- Proba cun sitio diferente
- Comproba a conexión a internet
- Contacta co soporte se o problema persiste

### Análise incompleta {#incomplete-analysis}

- O sitio pode ter contido dinámico
- JavaScript pode non renderizarse por completo
- Os sitios grandes poden esgotar o tempo de espera
- Proba a analizar páxinas específicas no seu lugar
- Solicita tipos específicos de análise

### Rendemento lento {#slow-performance}

- Os sitios grandes tardan máis en analizarse
- Varios scrapings simultáneos son máis lentos
- A conectividade de rede afecta á velocidade
- Proba durante horas de menor actividade
- Analiza primeiro seccións máis pequenas

## Documentación relacionada {#related-documentation}

- [Entrevista de descubrimento](./discovery-interview.md) — recompila información de deseño
- [Dirección de deseño](./design-direction.md) — refina o teu deseño
- [Menús de hostalaría](./hospitality-menus.md) — crea páxinas de menú
