---
title: 'Lección 8: Incorporación de clientes'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lección 8: Incorporación de clientes

Conseguir que un cliente se rexistre é só a metade do traballo. Se inicia sesión, se sente desbordado e nunca volve, perdíchelo. Esta lección deseña a experiencia que converte un novo rexistro nun cliente activo e implicado.

## Onde o deixamos

FitSite está completamente adaptado á marca cun fluxo de compra funcional. Agora centrámonos no que ocorre despois de que o propietario dun estudo de fitness complete o rexistro e chegue ao seu novo sitio por primeira vez.

## Por que importa a incorporación

Os primeiros 30 minutos despois do rexistro determinan se un cliente queda ou abandona. Un propietario dun estudo de fitness que:

- Inicia sesión e ve un sitio que xa parece unha web de fitness → queda
- Sabe exactamente que facer despois → queda
- Séntese perdido nun Dashboard xenérico de WordPress → marcha

Os teus modelos de nicho (Lección 4) xestionan o primeiro punto. Esta lección xestiona o segundo.

## A experiencia do primeiro inicio de sesión

### Widget Dashboard de benvida

Crea un widget Dashboard personalizado que saude os novos clientes e os guíe pola configuración. Isto debería aparecer de forma destacada cando inicien sesión por primeira vez.

**Inicio rápido de FitSite:**

1. **Engade o nome e o logotipo do teu estudo** -- Ligazón ao Personalizador ou aos axustes de identidade do sitio
2. **Actualiza o teu horario de clases** -- Ligazón directa ao editor da páxina de clases
3. **Engade os teus adestradores** -- Ligazón ao editor da páxina de adestradores
4. **Configura os teus datos de contacto** -- Ligazón ao editor da páxina de contacto
5. **Previsualiza o teu sitio** -- Ligazón á interface pública

Cada paso enlaza directamente coa páxina ou axuste relevante. Sen ter que buscar polos menús.

### Simplifica o Dashboard

Os novos clientes non necesitan ver todos os elementos do menú de WordPress. Considera:

- Ocultar elementos do menú que non sexan relevantes para a xestión dun sitio de fitness (por exemplo, comentarios se non se usan)
- Reordenar o menú para poñer primeiro os elementos máis usados
- Engadir etiquetas de menú personalizadas que teñan sentido para o nicho ("O teu estudo" no canto de "Aparencia")

O addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) pode axudar a controlar o que ven os clientes.

## Secuencia de correos electrónicos de benvida

Un único correo electrónico de benvida non é suficiente. Configura unha secuencia que guíe os clientes durante a súa primeira semana:

### Correo electrónico 1: Benvida (inmediatamente despois do rexistro)

- Asunto: "Benvido a FitSite -- a web do teu estudo xa está activa"
- Contido: ligazón de inicio de sesión, pasos de inicio rápido, ligazón a recursos de axuda
- Ton: entusiasta, alentador, específico de fitness

### Correo electrónico 2: Logros rápidos (Día 1)

- Asunto: "3 cousas que facer primeiro no teu FitSite"
- Contido: engade o teu logotipo, actualiza a imaxe principal da páxina de inicio, engade o teu horario de clases
- Inclúe capturas de pantalla que mostren exactamente onde facer clic

### Correo electrónico 3: Faino teu (Día 3)

- Asunto: "Fai que o teu sitio de fitness destaque"
- Contido: personaliza as cores, engade fotos dos adestradores, escribe a historia do teu estudo
- Ligazón a exemplos de grandes sitios de fitness na plataforma

### Correo electrónico 4: Poñelo en marcha (Día 7)

- Asunto: "Listo para compartir o teu FitSite co mundo?"
- Contido: lista de comprobación do que verificar antes de compartilo, como conectar un dominio personalizado (se está en Growth/Pro), consellos para compartir en redes sociais

:::tip Automatización de correos electrónicos
Usa [Webhooks](/user-guide/integrations/webhooks) ou [Zapier](/user-guide/integrations/zapier) para activar estes correos electrónicos a través da túa plataforma de marketing por correo electrónico. Isto dáche máis control sobre os tempos e permíteche facer seguimento da interacción.
:::

## Recursos de axuda

Crea contido de axuda específico do nicho que responda ás preguntas que realmente fan os propietarios de estudos de fitness:

### Artigos da base de coñecemento

- "Como actualizar o teu horario de clases"
- "Engadir e editar perfís de adestradores"
- "Cambiar o logotipo e as cores do teu estudo"
- "Conectar o teu propio nome de dominio" (para clientes Growth/Pro)
- "Engadir un widget de reservas ao teu sitio"

Escríbeos para usuarios non técnicos. Usa capturas de pantalla. Evita a xerga de WordPress.

### Vídeos guiados

Gravacións de pantalla curtas (2-3 minutos) que mostren:

- Primeiro inicio de sesión e orientación
- Edición da páxina de inicio
- Actualización do horario de clases
- Engadir un novo adestrador

Non teñen que ser producións pulidas. O que importa é que sexan claros, útiles e específicos do nicho.

## A páxina Account

Ultimate Multisite inclúe unha [páxina Account](/user-guide/client-management/account-page) orientada ao cliente onde os clientes xestionan a súa subscrición. Personalízaa para:

- Mostrar o seu plan actual de FitSite
- Amosar opcións de mellora con beneficios específicos de fitness
- Proporcionar historial de facturación e descargas de facturas
- Ligar a recursos de axuda

## Medir o éxito da incorporación

Fai seguimento destes indicadores para saber se a túa incorporación está funcionando:

- **Taxa de activación**: Que porcentaxe de rexistros personaliza realmente o seu sitio durante a primeira semana?
- **Inicios de sesión da primeira semana**: Cantas veces inicia sesión un novo cliente durante a súa primeira semana?
- **Tickets de soporte de novos clientes**: Un volume alto significa que a túa incorporación ten lagoas
- **Conversión de proba a pago**: Se ofreces probas, que porcentaxe converte?

## A rede FitSite ata agora

```
Rede FitSite
├── WordPress Multisite (modo subdominio)
├── Ultimate Multisite (configurado + coa marca aplicada)
├── Dominio da plataforma (fitsite.com + SSL comodín)
├── Modelos de sitio (Studio Essential, Gym Pro, Fitness Chain)
├── Produtos (Starter, Growth, Pro + Order Bumps)
├── Fluxo de compra (específico do nicho, probado)
├── Marca (inicio de sesión, Dashboard, correos electrónicos, facturas, sitio de marketing)
├── Incorporación de clientes
│   ├── Widget Dashboard de inicio rápido
│   ├── Dashboard simplificado para a xestión de sitios de fitness
│   ├── Secuencia de benvida de 4 correos electrónicos
│   ├── Base de coñecemento específica do nicho
│   ├── Vídeos guiados
│   └── Páxina Account personalizada
└── Listo para a estratexia de prezos (seguinte lección)
```

## O que construímos nesta lección

- **Unha experiencia guiada de primeiro inicio de sesión** cun widget de inicio rápido
- **Un Dashboard simplificado** centrado en tarefas de xestión de sitios de fitness
- **Unha secuencia de correos electrónicos de benvida** que guía os clientes durante a súa primeira semana
- **Recursos de axuda específicos do nicho** escritos para propietarios non técnicos de estudos de fitness
- **Métricas de incorporación** para facer seguimento e mellorar a experiencia

---

**Seguinte:** [Lección 9: Prezos para obter beneficio](lesson-9-pricing) -- refinamos a estratexia de prezos para maximizar os ingresos e minimizar a perda de clientes.
