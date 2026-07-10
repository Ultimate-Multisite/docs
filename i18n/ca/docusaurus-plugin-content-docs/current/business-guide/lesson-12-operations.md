---
title: 'Lliçó 12: Gestionar l''empresa'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Aula 12: Gestionar l'Empresa {#lesson-12-running-the-business}

Una plataforma no és un projecte que es termini; és un negoci que es dirigeix. Aquesta aula cobreix les operacions del dia a dia per gestionar FitSite: suport, facturació, manteniment i mantenir els clients contents.

## On acab vam {#where-we-left-off}

FitSite ja està en línia i els clients estan inscrivint-se. Ara has de gestionar l'operació de manera sostenible.

## Operacions Diàries {#daily-operations}

### Monitorització {#monitoring}

Revisa aquests elements diàriament (o configura alertes):

- **Uptime**: L'usuari pot accedir a la plataforma? Utilitza un servei de monitorització de temps de funcionament.
- **Noves inscripcions**: Quants clients nous s'han inscrit avui?
- **Pagaments fallits**: Hi ha fallades de pagament que requereixen atenció?
- **Sol·licits de suport**: Hi ha preguntes de clients sense respondre?

### Suport al Client {#customer-support}

El teu enfocament de niș és un avantatge aquí. Com que tots els teus clients són estudis de fitness, veuràs les mateixes preguntes repetidament:

**Preguntes comunes que rebràs:**

- "¿Com puc actualitzar l'horari de les meves classes?"
- "¿Puc canviar els colors del meu site?"
- "¿Com puc afegir un nou entrenador al meu site?"
- "El meu domini no funciona"
- "¿Com puc cancelar/actualitzar el meu pla?"

Construeix la teva base de coneixements (com va amb la Aula 8) al voltant de aquestes preguntes recurrents. Cada tiqueti de suport que podria ser un article de la base de coneixements és una senyal per escriure aquest article.

### Nivells de Suport {#support-tiers}

A mesura que creixes, estructura el suport segons el pla:

| Pla | Nivell de Suport | Temps de Resposta |
|------|--------------|---------------|
| Starter | Base de coneixements + correu electrònic | 48 hores |
| Growth | Suport per correu electrònic | 24 hores |
| Pro | Correu electrònic de prioritat + trucada d'onboarding | 4 hores |

L'addon [Support Tickets](/addons/support-tickets) pot ajudar a gestionar els sol·licits de suport dins de la plataforma.

## Operacions de Facturació {#billing-operations}

### Pagaments Recurrents {#recurring-payments}

Ultimate Multisite gestiona la facturació recurrent automàticament a través de la teva passarela de pagament. El teu treball és monitoritzar:

- **Pagaments fallits**: Fes seguiment ràpidament. La majoria de les fallades són cartes caducades, no cancel·lacions intencionades.
- **Dunning**: Configura la lògica de riprovi automàtic a través de la teva passarela de pagament (Stripe ho gestiona molt bé).
- **Sol·licits de cancel·lació**: Entén per què els clients marquen. Cada cancel·lació és un feedback.

### Gestió de Membresíes {#managing-memberships}

Navega a **Ultimate Multisite > Memberships** per:

- Veure totes les subscripcions actives
- Gestionar sol·licits d'actualització i degradació
- Processar reembolsos quan és necessari
- Gestionar les caducitats d'essai

Consulta [Managing Memberships](/user-guide/administration/managing-memberships) per a la referència completa.

### Facturació {#invoicing}

Assegura-te que les factures es generen correctament per a cada pagament. Els clients poden necessitar factures per informes de despeses empresarials. Consulta [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Manteniment de la Plataforma {#platform-maintenance}

### Actualitzacions de WordPress i Plugins {#wordpress-and-plugin-updates}

Com administrador de la xarxa, ets responsable de:

- **Actualitzacions del nucli de WordPress**: Prova en un entorn de prova (staging) abans d'aplicar-lo a la producció
- **Actualitzacions de plugins**: Mateix cosa -- prova abans, després aplica a tota la xarxa
- **Actualitzacions de temes**: Verifica que les plantilles encara es veuen correctes després de les actualitzacions del tema
- **Actualitzacions d'Ultimate Multisite**: Segueix el *changelog* i prova abans d'actualitzar

:::warning Nunca actualitzis en producció sense provar
Una actualització fallida afecta a tots els sites de clients de la teva xarxa. Prova sempre les actualitzacions en una còpia d'entorn de prova de la teva xarxa abans.
:::

### Seguretat {#security}

- Mantén tot el programari actualitzat
- Utilitza contrasenyes fortes i autenticació de dos factors per comptes d'administració
- Monitoritza activitats sospitoses
- Ten un pla per incidents de seguretat

### Rendiment {#performance}

A mesura que la teva xarxa creix, monitoritza:

- **Temps de càrrega de pàgines**: Els sites dels clients són ràpids?
- **Ús de recursos del servidor**: CPU, memòria, espai en disc
- **Rendiment de la base de dades**: Les xarxes grans necessiten optimització de la base de dades amb el temps

Considera implementar *caching* (cache de pàgina, cache d'objecte) i un CDN si encara no ho has fet. L'addon [Cloudflare integration](/user-guide/host-integrations/cloudflare) gestiona gran part d'aquests aspectes.

## Gestió del Cicle de Vida del Client {#customer-lifecycle-management}

### Reduir l'Abandó (Churn) {#reducing-churn}

L'abandó és el percentatge de clients que cancelen cada mes. Per a un negoci de subscripcions, reduir l'abandó és tan important com adquirir clients nous.

**Motius comuns per què els clients d'estudis de fitness abandonen:**

- No van poder descobrir com utilitzar la plataforma → millorar l'onboarding
- El site no era suficientment bonit → millorar les plantilles
- No van veure valor → millorar les funcionalitats o la comunicació
- Van trobar una alternativa més barata → reforçar el valor de la teva nișa
- El seu negoci va tancar → inevitable, però monitoritza-ho separatament

### Incentivar les Actualitzacions {#encouraging-upgrades}

Els clients de Starter que estan tenint èxit haurien de ser incentivats a actualitzar:

- Quan arriben als límits del pla (sites, emmagatzematge), mostra *prompts* d'actualització
- Envía correus electrònics dirigits que destaquen les funcionalitats del pla Growth que els podrien beneficiar
- Mostra el que han construït els clients de Growth/Pro

### Campanyes de Recuperació (Win-Back) {#win-back-campaigns}

Quan un client cancela:

1. Pregunta el motiu (enquesta de sortida o correu electrònic)
2. Adreça la seva preocupació si és possible
3. Ofereix un descompte per retornar (30-60 dies després de la cancel·lació)

## Rutines Semanals i Mensuals {#weekly-and-monthly-routines}

### Semanalment {#weekly}

- Revisar les noves inscripcions i cancel·lacions
- Respondre a tots els tiquets de suport oberts
- Comprovar el rendiment i l'uptime de la plataforma
- Revisar qualsevol pagament fallit

### Mensualment {#monthly}

- Analitzar les mètriques clau (MRR, abandó, clients nous, actualitzacions)
- Aplicar actualitzacions de WordPress i plugins (després de la prova en staging)
- Revisar i actualitzar la base de coneixements basant-se en els patrons de suport
- Enviar un *newsletter* o actualització als clients (noves funcionalitats, consells, notícies de l'industria del fitness)

### Trimestralment {#quarterly}

- Revisar els preus comparant amb la competència i el feedback dels clients
- Avaluar el disseny de les plantilles: cal refrescar-les?
- Avaluar la capacitat d'hosting: cal escalar?
- Revisar i millorar l'onboarding basant-se en les dades d'activació

## El que vam construir en aquesta Aula {#what-we-built-this-lesson}

- **Rutines de monitorització diària** per a l'uptime, inscripcions, pagaments i suport
- **Una estructura de suport escalonada** adaptada als nivells de pla
- **Operacions de facturació** incloent *dunning* i gestió de cancel·lacions
- **Procediments de manteniment** per a actualitzacions, seguretat i rendiment
- **Estratègies de reducció d'abandó** específiques per a la nișa del fitness
- **Rutines operacionals setmanals, mensuals i trimestrals**

---

**Pròxima:** [Aula 13: Escalabilitat](lesson-13-growth) -- fer creixer FitSite d'una operació petita a un negoci real.
