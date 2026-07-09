---
title: 'Aula 8: Incorporació del Client'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Aula 8: Incorporació del Client {#lesson-8-customer-onboarding}

Faire que un client es registri és només la meitat del treball. Si es connecta, es sent sobrebordat i no torna mai més, l'has perdut. Aquesta aula disenya l'experiència que transforma un nou registre en un client actiu i comprometut.

## On acab vam {#where-we-left-off}

FitSite està completament marcat amb un flux de checkout funcional. Ara ens centrem en el que passa després que un propietari d'estudi de fitness completa el registre i aterri al seu nou lloc web per primera vegada.

## Per què és important l'incorporació (Onboarding) {#why-onboarding-matters}

Els 30 minuts posteriors al registre determinen si un client es queda o si abandona. Un propietari d'estudi de fitness que:

- Es connecta i veu un lloc web que ja sembla un site de fitness → es queda
- Coneix exactament què fer després → es queda
- Se sent perdut en un dashboard de WordPress genèric → marxa

Els teus templates de ni de mercat (Aula 4) gestionen el primer punt. Aquesta aula gestiona el segon.

## L'experiència del primer accés {#the-first-login-experience}

### Widget de Dashboard de Benvinguda {#welcome-dashboard-widget}

Crea un widget de dashboard personalitzat que doni la benvinguda als nous clients i els guïi durant la configuració. Ha de ser visible quan es connecten per primera vegada.

**FitSite Quick Start:**

1. **Afegir el nom i el logo del teu estudi** -- Enllaç al Customizer o a les configuracions d'Identitat del Site
2. **Actualitzar l'horari de classes** -- Enllaç directament a l'editor de la pàgina Classes
3. **Afegir els teus instructors** -- Enllaç a l'editor de la pàgina Instructors
4. **Establir els teus detalls de contacte** -- Enllaç a l'editor de la pàgina Contacte
5. **Previsualitzar el teu site** -- Enllaç al frontend

Cada pas enllaça directament a la pàgina o configuració rellevant. Sense haver de buscar per menús.

### Simplificar el Dashboard {#simplify-the-dashboard}

Els clients nous no necessiten veure tots els elements del menú de WordPress. Considera:

- Ocullar elements de menú que no són rellevants per a la gestió d'un site de fitness (per exemple, Coments si no es fan servir)
- Reordenar el menú per posar els elements més utilitzats a l'avant
- Afegir etiquetes de menú personalitzades que tenin sentit per al ni de mercat ("El teu Estudi" en lloc de "Aparença")

L'addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) pot ajudar a controlar el que veuen els clients.

## Seqüència d'emails de benvinguda {#welcome-email-sequence}

Un únic email de benvinguda no és suficient. Configura una seqüència que guïi els clients durant la seva primera setmana:

### Email 1: Benvinguda (Immediatament després del registre) {#email-1-welcome-immediately-after-signup}

- Assumpte: "Benvingut a FitSite – el teu site d'estudi és en línia"
- Contingut: Enllaç de connexió, passos de inici ràpid, enllaç a recursos d'ajuda
- Tonalitat: Entusiàstic, de reforç, específic de fitness

### Email 2: Victories Ràpides (Dia 1) {#email-2-quick-wins-day-1}

- Assumpte: "3 coses que fer primer al teu FitSite"
- Contingut: Afegir el teu logo, actualitzar l'imatge hero de la pàgina inicial, afegir l'horari de classes
- Incloure captures d'pantalla que mostrin exactament on fer clic

### Email 3: Fes-ho teu (Dia 3) {#email-3-make-it-yours-day-3}

- Assumpte: "Fes que el teu site de fitness destaqui"
- Contingut: Personalitzar colors, afegir fotos d'instructors, escriure la història del teu estudi
- Enllaçar a exemples de bons sites de fitness a la plataforma

### Email 4: En línia (Dia 7) {#email-4-go-live-day-7}

- Assumpte: "¿Preparat per compartir el teu FitSite amb el món?"
- Contingut: Llista de verificació del que verificar abans de compartir, com connectar un domini personalitzat (si és Growth/Pro), consells de compartició social

:::tip Automatització d'emails
Utilitza [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) per activar aquests emails a través de la teva plataforma de marketing per correu electrònic. Això et dona més control sobre el temps i et permet rastrejar l'engajament.
:::

## Recursos d'ajuda {#help-resources}

Crea contingut d'ajuda específic del ni de mercat que responda a les preguntes que els propietaris d'estudis de fitness pregunten de veritat:

### Articles de la Base de Coneixement {#knowledge-base-articles}

- "Com actualitzar l'horari de classes"
- "Afegir i editar perfils d'instructors"
- "Canviar el logo i els colors de l'estudi"
- "Connectar el teu propi nom de domini" (per clients Growth/Pro)
- "Afegir un widget de reserva al teu site"

Escriviu aquests articles per a usuaris no tècnics. Utigueu captures d'pantalla. Eviteu el argot de WordPress.

### Tutoriales en Vídeo {#video-walkthroughs}

Gravaacions de pantalla curtes (2-3 minuts) que mostrin:

- Primer accés i orientació
- Edició de la pàgina inicial
- Actualització de l'horari de classes
- Afegir un nou instructor

Aquests no necessiten ser produccions polides. El que importa és que siguin clars, útils i específics del ni de mercat.

## La pàgina de compte {#the-account-page}

Ultimate Multisite inclou una [Pàgina de compte](/user-guide/client-management/account-page) visible per al client on els clients gestionen la seva subscripció. Personalitza-la per:

- Mostrar el seu pla FitSite actual
- Exmostrar opcions d'actualització amb beneficis específics de fitness
- Proporcionar l'historial de facturació i descarregues de factures
- Enllaçar a recursos d'ajuda

## Mesurar l'èxit de l'incorporació {#measuring-onboarding-success}

Rastreja aquests indicadors per saber si la teva incorporació està funcionant:

- **Tasa d'activació**: Què percentatge dels registres personalitzen el seu site durant la primera setmana?
- **Connexions de la primera setmana**: Quantes vegades es connecta un client nou durant la seva primera setmana?
- **Tickets de suport de clients nous**: Un volum alt significa que la teva incorporació té manques
- **Conversió de prova a pagat**: Si ofereixes proves, què percentatge converte?

## La Xarxa FitSite fins ara {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (configurat + marcat)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (específic del ni de mercat, provat)
├── Branding (login, dashboard, emails, factures, site de marketing)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## El que vam construir en aquesta aula {#what-we-built-this-lesson}

- **Una experiència de primer accés guiada** amb un widget Quick Start
- **Un dashboard simplificat** centrat en les tasques de gestió de sites de fitness
- **Una seqüència d'emails de benvinguda** que guïa els clients durant la seva primera setmana
- **Recursos d'ajuda específics del ni de mercat** escrits per propietaris d'estudis de fitness no tècnics
- **Mètriques d'incorporació** per rastrejar i millorar l'experiència

---

**Pròxima:** [Aula 9: Preu per al profit](lesson-9-pricing) -- afinem la estratègia de preus per maximitzar els ingressos i minimitzar l'abandó.
