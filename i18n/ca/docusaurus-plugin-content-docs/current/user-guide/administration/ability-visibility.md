---
title: Visibilitat d'habilitats
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilitat d'Habilitats

Superdav AI Agent v1.12.0 introdueix els controls de **Visibilitat d'Habilitats** (Ability Visibility), que regulen quines superfícies exposen cada habilitat. Això permet als administradors afinar quines capacitats de l'agent estan disponibles a través de les REST APIs, els serveis MCP, les integracions de WooCommerce i altres interfícies.

## Què són les Visibilitats d'Habilitats?

La Visibilitat d'Habilitats és un sistema de permisos que controla:

- **Quines habilitats** estan disponibles per als agents
- **On estan exposades** (REST API, MCP, WooCommerce, etc.)
- **Qui pot accedir-hi** (a través de llistes de permís de socis)
- **Com estan classificades** (reconegudes vs. no reconegudes)

Cada habilitat porta un nivell de visibilitat que determina la seva disponibilitat en diferents superfícies.

## Niveells de Visibilitat

### Públic (Public)

Les **habilitats públiques** estan disponibles en tota l'ubicació:

- Punts d'extinció (endpoints) de REST API
- Serveis MCP
- Integracions de WooCommerce
- Interfícies de xat
- Tots els rol d'usuari (amb els permisos adequats)

Exemple: `scaffold-block-theme`, `activate-theme`, `send-email`

### Intern (Internal)

Les **habilitats internes** només estan disponibles dins de la teva instal·lació de WordPress:

- Interfícies de xat
- Panells d'administració
- Només per a usuaris connectats
- No estan exposades a través de REST API ni integracions externes

Exemple: `manage-settings`, `view-analytics`, `export-data`

### Soci (Partner)

Les **habilitats de soci** només estan disponibles per als socis allotjats (whitelisted):

- Requereix una entrada explícita a la llista de permís de socis
- Disponible a través de REST API amb credencials de soci
- Disponible a través de MCP amb autenticació de soci
- No estan disponibles per als usuaris regulars

Exemple: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deshabilitat (Disabled)

Les **habilitats deshabilitades** no estan disponibles en cap lloc:

- No estan exposades a través de cap superfície
- No estan disponibles a xat
- No estan disponibles als panells d'administració
- Útils per a habilitats deprecades o experimentals

## Gestió de la Visibilitat d'Habilitats

### Accedament a la Configuració de Visibilitat d'Habilitats

1. Navega a **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Fes clic a la pestanya **Abilities**
3. Veuràs una llista de totes les habilitats instal·lades amb els seus nivells de visibilitat

### Veure Detalls de l'Habilitat

Fes clic a qualsevol habilitat per veure:

- **Name**: L'identificador de l'habilitat
- **Description**: Què fa l'habilitat
- **Current visibility**: Públic, Intern, Soci o Deshabilitat
- **Partner allow-list**: Quins socis poden accedir (si és visibilitat de Soci)
- **Last updated**: Quan es va modificar l'últimament la visibilitat
- **Status**: Reconeguda o No reconeguda

### Canviar Nivels de Visibilitat

Per canviar la visibilitat d'una habilitat:

1. Fes clic a l'habilitat a la llista
2. Selecciona un nou nivell de visibilitat del menú desplegable
3. Si selecciones "Partner", afegeix els identificadors de socis a la llista de permís
4. Fes clic a **Save**

Exemple:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operacions en Llotges (Bulk Operations)

Per canviar la visibilitat de múltiples habilitats:

1. Marca les caselles a prop de les habilitats
2. Selecciona un nou nivell de visibilitat del menú desplegable d'acció en llotges
3. Fes clic a **Apply**

## Llista de Permís de Socis (Partner Allow-List)

La **llista de permís de socis** controla quins socis externs poden accedir a les habilitats de nivell Soci.

### Afegir Socis

1. Navega a **Superdav AI Agent** → **Settings** → **Partners**
2. Fes clic a **Add Partner**
3. Introduceix l'identificador del soci (normalment una clau API o un ID d'organització)
4. Opcionalment afegeix un nom i una descripció del soci
5. Fes clic a **Save**

### Assignar Habilitats als Socis

Després d'afegir un soci:

1. Navega a la pestanya **Abilities**
2. Troba una habilitat amb visibilitat de Soci
3. Fes clic per editar
4. A la secció "Partner allow-list", marca les caselles dels socis que han de tenir accés
5. Fes clic a **Save**

### Revocar Accés de Soci

Per eliminar l'accés d'un soci:

1. Edita l'habilitat
2. Desmarca la casella del soci a la llista de permís
3. Fes clic a **Save**

El soci perdà immediatament l'accés a aquesta habilitat.

## Habilitats No Classificades (Unclassified Abilities)

Quan instal·les una habilitat de terceres parts que Superdav AI Agent no reconeix, es marca com a **Unclassified**.

### Avís d'Administració per a Habilitats No Classificades

Veureu un avís d'administració:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Revisar Habilitats No Classificades

1. Fes clic a **Review Abilities** a l'avís
2. Per a cada habilitat no classificada, veureu:
   - Nom i descripció de l'habilitat
   - Font (quin plugin/addon l'ha instal·lat)
   - Nivell de visibilitat suggerit
   - Avaliació de seguretat

3. Triar un nivell de visibilitat:
   - **Public**: Confiar en l'habilitat; exposar-ho en tota l'ubicació
   - **Internal**: Restringir-ho només per a ús intern
   - **Partner**: Restringir-ho a socis específics
   - **Disabled**: No utilitzar aquesta habilitat

4. Fes clic a **Classify** per guardar la teva decisió

### Per què Classificar Habilitats No Classificades?

Classificar les habilitats:

- **Millora la seguretat**: Aprova explícitament el que s'exposa
- **Preven accidents**: Les habilitats no classificades estan deshabilitades per defecte
- **Habilita funcions**: Una vegada classificades, l'habilitat és disponible
- **Documenta decisions**: Les teves eleccions es registren per a propòsits d'auditoria

## Visibilitat en Diferents Superfícies

### REST API

Les **habilitats públiques** estan disponibles a través de punts d'extinció (endpoints) de REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Les **habilitats internes i de soci** no estan disponibles a través de REST API.

### Serveis MCP (MCP Servers)

Les **habilitats públiques** estan disponibles a través de MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

Les **habilitats internes** no estan exposades a través de MCP.

Les **habilitats de soci** només estan disponibles amb credencials de soci.

### Integració de WooCommerce

Estan disponibles les **habilitats públiques** relacionades amb WooCommerce:

- Gestió de productes
- Processament de comandes
- Comunicació amb clients

Les **habilitats internes** no estan exposades a WooCommerce.

### Interfície de Xat (Chat Interface)

**Totes les habilitats** (Públiques, Internes, de Soci) estan disponibles a xat, depenent dels permisos de l'usuari:

- Els administradors veuen totes les habilitats
- Els usuaris regulars veuen només les habilitats Públiques
- Els socis veuen habilitats Públiques + de Soci (si estan allotjats)

## Mejores Pràctiques de Seguretat

### Principi del Mínim Privilegi

- Assigna visibilitats d'habilitats al nivell més restrictiu que encara permet el seu ús
- Utgeu la visibilitat de Soci per operacions sensibles
- Deshabilita les habilitats que no utilitzeu

### Auditories Regulars

- Revisar la visibilitat de les habilitats mensualment
- Comprovar la existència d'habilitats no classificades
- Eliminar l'accés per a socis no utilitzats

### Registre i Monitorització (Logging and Monitoring)

- Monitoritzar quines habilitats s'utilitzen més
- Rastrejar els patrons d'accés dels socis
- Alertar sobre un ús d'habilitats inusual

### Habilitats de Terceres Parts

- Revisar les habilitats de terceres parts abans d'habilitar
- Classificar-les explícitament
- Començar amb visibilitat Interna o de Soci
- Promoure a Públiques només després de la revisió

## Solucionar Problemes (Troubleshooting)

**Una habilitat no apareix a la llista**
- Verifiqua que l'habilitat estigui instal·lada i activa
- Comprova que el plugin/addon estigui habilitat
- Actualitza la pàgina

**No puc canviar la visibilitat d'una habilitat**
- Verifiqua que tens permisos d'administrador
- Comprova que l'habilitat no estigui bloquejada per un plugin
- Prova a deshabilitar plugins conflictius

**Un soci no pot accedir a una habilitat**
- Verifiqua que el soci estigui a la llista de permís
- Comprova que la visibilitat de l'habilitat estigui configurada com a Soci
- Confirma que les credencials del soci són correctes
- Comprova els logs de l'API per detectar errors d'autenticació

**Les habilitats no classificades continuen apareixent**
- Revisar-les i classificar-les a l'avís d'administració
- Comprovar que la teva classificació s'ha guardat
- Verifiqua que el plugin que proporciona l'habilitat estigui actualitzat

## Migració del Mode Legacy

Si ets actualitzant des d'una versió antiga de Superdav AI Agent:

- Totes les habilitats existents es classifiquen automàticament com a Públiques
- Revisar i ajustar la visibilitat segons necessitat
- No és necessària cap acció a menys que vulguis restringir l'accés

Veure **Third-Party Mode Migration** per a més detalls sobre la transició a l'integració nativa de l'API Abilities.

## Pròxims Passos

Després de configurar la visibilitat d'habilitats:

1. **Revisar les teves habilitats**: Audita totes les habilitats instal·lades
2. **Classificar habilitats no classificades**: Respon a els avísos d'administració
3. **Configurar socis**: Afegir socis si utilitzeu visibilitat de Soci
4. **Monitoritzar l'ús**: Rastrejar quines habilitats s'utilitzen més
5. **Documentar decisions**: Manté notes sobre per què has triat cada nivell de visibilitat
