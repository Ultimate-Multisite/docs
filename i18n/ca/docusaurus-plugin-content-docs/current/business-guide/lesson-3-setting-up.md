---
title: 'Liçona 3: Configurar la vostra xarxa'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Aula 3: Configuració de la teva xarxa

És hora de construir. En aquesta aula instal·laràs Ultimate Multisite i configuraràs el fonament de la xarxa FitSite. Cada decisió aquí es fa tenint en compte el segment de mercat del benestar físic.

## On acab vam

Seleccionàvem els estudis de fitness com a nostre segment de mercat i vam validar l'oportunitat. Ara transformem aquesta idea en una plataforma funcional.

## Elecció de l'acollida (Hosting)

La teva elecció d'acollida és més important per una plataforma de niche que per un únic lloc web. No estàs acollint un lloc web, sinó una xarxa que creixerà fins a dedines o centenars de llocs.

### Què buscar

- **Suport per a WordPress Multisite**: No tots els proveïdors d'acollida gestionen bé el multisite.
- **SSL de comodinalitat (Wildcard SSL)**: Essencial per a xarxes basades en subdominis.
- **Recursos escalables**: Necessites espai per créixer sense haver de migrar.
- **Integració amb Ultimate Multisite**: La assignació automàtica de domini i SSL suposa un esforç operatiu significatiu.

### Enfant recomanat

Tria un acollidori de la llista de [Proveïdors compatibles](/user-guide/host-integrations/closte). Aquests han estat provats amb Ultimate Multisite i proporcionen les integracions que necessites per a la assignació de domini i l'automatització de SSL.

Per FitSite, utilitzarem una configuració de subdomini. Això significa que els llocs dels clients apareixeran inicialment com a `nomestudi.fitsite.com` abans que opcionalsment afegeixin el seu propi domini.

## Instal·lació de WordPress Multisite

Si encara no tens una instal·lació de WordPress Multisite:

1. Installa WordPress al teu proveïdor d'acollida.
2. Segueix la guia [Com instal·lar WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. Triar la configuració de **subdomini** quan et ho demanin.

:::tip Per què subdominis?
Els subdominis donen a cada lloc del client la seva pròpia adreça distincta (`studio.fitsite.com`) en lloc d'una ruta (`fitsite.com/studio`). Això és més professional per als teus clients i evita conflictes de permalinks. Consulta [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) per a una comparativa detallada.
:::

## Instal·lació d'Ultimate Multisite

Segueix la guia [Instal·lar Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) per:

1. Carregar i activar el plugin a nivell de xarxa.
2. Executar el [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard).

Durant el setup wizard, mantingueu el segment de mercat FitSite a ment:

- **Mòneda**: Configurar-ho a la moneda que utilitzen els teus clients d'estudis de fitness.
- **Nom de l'empresa**: "FitSite" (o el nom de marca que hagis triat).
- **Logo de l'empresa**: Carrega el teu logo de marca; apareixerà en factures i correus electrònics.

## Configuració per al segment de fitness

Amb Ultimate Multisite instal·lat, realitza aquestes eleccions de configuració específiques del segment de mercat:

### Configuració general

Navega a **Ultimate Multisite > Settings** i configura:

- **Nom del lloc**: FitSite
- **Rol predeterminat**: Administrator — els propietaris d'estudis de fitness necessiten el control complet del contingut del seu lloc.
- **Registre**: Activa el registre d'utilitzadors perquè els propietaris d'estudis puguin inscriure's-hi els mateixos.

### Configuració d'emails

Els correus electrònics del teu sistema han de parlar el llenguatge del teu segment de mercat. Navega a **Ultimate Multisite > Settings > Emails** i personalitza:

- Substitueix el llenguatge genèric "el teu nou lloc" per missatges específics de fitness.
- Assumpció de benvinguda d'exemple: "El teu lloc web d'estudi de fitness està preparat".
- Cos de benvinguda d'exemple: Fes referència al seu estudi, classes i com començar amb el seu lloc web de fitness.

En el detallarem més a fons a l'Aula 8 (Onboarding del client), però configurar el to ara assegura que fins i tot les inscripcions de prova inicials es sentin específiques del segment de mercat.

### Configuració de domini

Si utilitzes un proveïdor d'acollida compatible, configura l'assignació de domini ara:

1. Navega a **Ultimate Multisite > Settings > Domain Mapping**.
2. Segueix la guia d'integració per al teu acollidori específic.
3. Prova que els nous sublòquets reben SSL automàticament.

Això garanteix que quan comencem a crear plantilles i llocs de prova a la propera aula, tot funciona de punta a punta.

## La xarxa FitSite fins ara

Al final d'aquesta aula, això és el que tens:

```
FitSite Network
├── WordPress Multisite (mode subdomini)
├── Ultimate Multisite (instal·lat i configurat)
├── Acollidori amb SSL de comodinalitat
├── Assignació de domini configurada
├── Plantilles d'emails específiques del segment de mercat (inicials)
└── Preparat per a plantilles de lloc (pròxima aula)
```

## El que vam construir en aquesta aula

- **Una instal·lació funcional de WordPress Multisite** en mode subdomini.
- **Ultimate Multisite instal·lat** i configurat amb la marca FitSite.
- **Acollidori i SSL** configurats per a una xarxa en creixement.
- **Assignació de domini** configurada per al teu proveïdor d'acollida.
- **To de correu electrònic específic del segment de mercat** establert des del primer dia.

---

**Pròxima:** [Aula 4: Creació de plantilles de niche](lesson-4-templates) — crearem plantilles de lloc web que els propietaris d'estudis de fitness desitjaran utilitzar.
