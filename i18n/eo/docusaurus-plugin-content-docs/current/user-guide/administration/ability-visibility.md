---
title: Vizaibilitas de la abilidad
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Kapacita Vizuilibile {#ability-visibility}

Superdav AI Agent v1.12.0 introducit **Ability Visibility** kontrollon, kiuj regas, ki surfoj (surfaces) ekpozas ĉion kapaciton. Tio permesas administratorojn finajni, kiu agent kapabilitate estas disponibile per REST API, MCP serveroj, WooCommerce integrioj kaj aliaj interfacoj.

## Kion estas Kapacita Vizuilibilo? {#what-is-ability-visibility}

Kapacita Vizuilibilo estas permeso sistema, kiu kontrolas:

- **Kian kapacito** estas disponibile agentoj
- **Kie ili estas ekpozitaj** (REST API, MCP, WooCommerce, etc.)
- **Kion povas alianci** (per partnerecoj alvlistoj)
- **Kiel ili estas klasifikita** (rekoneita vs. neklasifikita)

Chakla kapacito portas vizuilibiliton nivelon, kiu determinas ĝian disponibiliton sur diversaj surfoj.

## Vizuilibilo Niveloj {#visibility-levels}

### Publika {#public}

**Publikaj kapabilitoj** estas disponibile ĉie:

- REST API endpointoj
- MCP serveroj
- WooCommerce integrioj
- Chat interfacoj
- ĉiuj uzanto roloj (con la ĝustaj permesoj)

Ekzemplo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interna {#internal}

**Internaj kapabilitoj** estas disponibile nur en via WordPress instalacio:

- Chat interfacoj
- Administra paneloj
- Logita uzantoj nur
- Ne ekpozitaj per REST API aŭ eksteraj integrioj

Ekzemplo: `manage-settings`, `view-analytics`, `export-data`

### Partnereco {#partner}

**Partnerecoj kapabilitoj** estas disponibile nur al listita partnaroj:

- Postulas eksplicitan enmigron en la partnerecoj alvliston
- Disponabla per REST API kun partnereco kredencijoj
- Disponabla per MCP kun partnereco autentifo
- Ne disponabla por regular uzantoj

Ekzemplo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dezaktivita {#disabled}

**Deaktivitaj kapabilitoj** ne estas disponibile ĉie:

- Ne ekpozitaj per iu ajn surfazo
- Ne disponabla en chato
- Ne disponabla en administra paneloj
- Utila por dezobrekaj aŭ eksperimentaj kapabilitoj

## Kontrolado de la Visibilidad de Habilidad {#managing-ability-visibility}

### Acceso a la Configuración de Visibilidad de Habilidad {#accessing-ability-visibility-settings}

1. Vaya a **WordPress Admin** → **Superdav AI Agent** → **Settings** (Configuraciones)
2. Haga clic en la pestaña **Abilities** (Habilidades)
3. Verá una lista de todas las habilidades instaladas con sus niveles de visibilidad.

### Visualización de Detalles de Habilidad {#viewing-ability-details}

Haga clic en cualquier habilidad para ver:

- **Name** (Nombre): El identificador de la habilidad.
- **Description** (Descripción): Lo que hace la habilidad.
- **Current visibility** (Visibilidad actual): Pública, Interna, Socio o Deshabilitada.
- **Partner allow-list** (Lista blanca de socios): Qué socios pueden acceder (si es visibilidad de socio).
- **Last updated** (Última actualización): Cuándo se cambió la visibilidad por última vez.
- **Status** (Estado): Reconocida o No clasificada.

### Cambiar Niveles de Visibilidad {#changing-visibility-levels}

Para cambiar la visibilidad de una habilidad:

1. Haga clic en la habilidad en la lista.
2. Seleccione un nuevo nivel de visibilidad del menú desplegable.
3. Si selecciona "Partner" (Socio), añada los identificadores de socio a la lista blanca.
4. Haga clic en **Save** (Guardar).

Ejemplo:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operaciones Masivas {#bulk-operations}

Para cambiar la visibilidad de varias habilidades:

1. Marque las casillas junto a las habilidades.
2. Seleccione un nuevo nivel de visibilidad del menú desplegable de acción masiva.
3. Haga clic en **Apply** (Aplicar).

## Lista Blanca de Socios (Partner Allow-List) {#partner-allow-list}

La **partner allow-list** controla qué socios externos pueden acceder a las habilidades de nivel socio.

### Añadir Socios {#adding-partners}

1. Vaya a **Superdav AI Agent** → **Settings** (Configuraciones) → **Partners** (Socios).
2. Haga clic en **Add Partner** (Añadir Socio).
3. Ingrese el identificador del socio (generalmente una clave API o un ID de organización).
4. Opcionalmente, añada un nombre y una descripción del socio.
5. Haga clic en **Save** (Guardar).

### Asignar Habilidades a Socios {#assigning-abilities-to-partners}

Después de añadir un socio:

1. Altiĝu al la tabelo **Abilities** (Kapabilitetoj)
2. Trovu kapabilitaten kun vizibiliteto de Partnero (Partner visibility)
3. Kliku por editi
4. Dans la seksio "Partner allow-list" (List per partnero), selektas la karrachojn por partnero kiuj devas havi alparenco
5. Kliku **Save** (Konservu)

### Eliminado de Alparenco de Partnero {#revoking-partner-access}

Por eliminui alparencon de partnero:

1. Edite la kapabilitaten
2. Deselekte la karrachon de la partnero el la allow-list
3. Kliku **Save** (Konservu)

La partnero perdas alparencon de tiu kapabilitato tandej.

## Kapabilitetoj Neklasifikitaj (Unclassified Abilities) {#unclassified-abilities}

Kiam vi instalas terza kapabilitate, ki Superdav AI Agent ne rekonduz, ĝi estas markita kiel **Unclassified** (Ne klasifikita).

### Notado de Administrajo por Unclassified Abilities {#admin-notice-for-unclassified-abilities}

Vi vidos notadon de la administrado:

```
⚠️ Kapabilitetoj Ne klasifikitaj detektitaj

La seguenti kapabilitetoj estis instalitaj sed ne estas rekonduzita:
- custom-import-tool
- external-api-wrapper

Ĉi tiuj kapabilitetoj povas kaŭzi sekurecajn aŭ kompatibilitajn rizkojn.
Bonvolu renkonti kaj klasifiki ilin.

[Renkonti Kapabilitetojn] [Elimi]
```

### Renkontado de Unclassified Abilities {#reviewing-unclassified-abilities}

1. Kliku **Review Abilities** (Renkonti Kapabilitetojn) en la notado
2. Por ĉiu neklasifikita kapabiliteto, vi vidos:
   - Nom de la kapabiliteto kaj deskripcio
   - Surcivo (kio instalis ĝin plugino/addon)
   - Sugerita nivel de alparenco
   - Sekureca ekvaleco

3. Elekti nivel de alparenco:
   - **Public** (Publika): Fidus la kapabilitaton; ekspozi ĝin ĉie
   - **Internal** (Interna): Limiti al internaj uzoj nur
   - **Partner**: Limiti al specifaj partneroj
   - **Disabled** (Disabilitita): Ne uzu ĉi tią kapabilitaton

4. Kliku **Classify** (Klasifiki) por konservi vian decisionon

### kial Klasifi Unclassified Abilities? {#why-classify-unclassified-abilities}

Klasifiki kapabilitetojn:

- **Plivoras sekurecon**: Vi eksplice aprobas, kion ekspoziĝas
- **Prevenas katastrofojn**: Ne klasifikitaj kapabilitetoj estas desabilititaj per defolo
- **Permesas funkciojn**: Une klasifikita, la kapabiliteto fariĝas disponibile
- **Dokonigas decisionojn**: Via elektado estas logita por auditoj

## Vizuilibra en Diversaj Superfoj {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Publika abilitoj** estas disponiblaj per REST endpointoj:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internaj kaj Partnereco abilitoj** ne estas disponiblaj per REST API.

### MCP Serveroj {#mcp-servers}

**Publika abilitoj** estas disponiblaj per MCP:

```
MCP Servero: Superdav AI Agent
Disponablaj abilitoj:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internaj abilitoj** ne estas eksponitaj via MCP.

**Partnereco abilitoj** estas disponiblaj nur kun partnereco kredencijoj.

### WooCommerce Integrita {#woocommerce-integration}

**Publikaj abilitoj** rilate al WooCommerce estas disponiblaj:

- Produkto laĉo
- Ordro laĉo
- Klianto komunikado

**Internaj abilitoj** ne estas eksponitaj al WooCommerce.

### Chat Interfaco {#chat-interface}

**Tial ĉiuj abilitoj** (Publikaj, Internaj, Partnereco) estas disponiblaj en chato, dependante de uzantoj permesoj:

- Administratoroj vidas ĉiuj abilitojn
- Regularuzantoj vidas nur Publikajn abilitojn
- Partnaroj vidas Publikajn + Partnereco abilitojn (se ili estas listigita)

## Sekurecaj Bestpraktikoj {#security-best-practices}

### Principo de Minima Privilegio {#principle-of-least-privilege}

- Definiti abilitojn al la plej restriktivita vidibiliteco, kiu tamen permesas ilia uzadon
- Uzu Partnereco vidibiliton por sensivajn operaciojn
- Dezaktive habilitojn, kiujn vi ne uzas

### Regularaj Auditoj {#regular-audits}

- Revizi abilajn vidibiliteco mensonge
- Kontroli post neklasifikajn abilitojn
- Eliminigi aliron por neuzitaj partnaroj

### Logado kaj Monitorado {#logging-and-monitoring}

- Monitoru, kiuj habilitoj estas uzata plej multe
- Слеdu partnerecoj alirografiojn
- Alerdu pri neordinaj abilaj uzadoj

### Tria Vlado Abilitoj {#third-party-abilities}

- Revizi tria valido abilitojn antaŭ aktivo
- Klasifiku ilin eksplice
- Komenci kun Interna aŭ Partnereco vidibiliteco
- Promovi al Publikajn nur post verifikado

## Problema-lösuri {#troubleshooting}

**Capacitet ne aperas en la listo**
- Verifique si la capacidad está instalada y activa
- Compruebe que el plugin/addon esté habilitado
- Refresque la página

**No puedo cambiar la visibilidad de una capacidad**
- Verifique que tiene permisos de administrador
- Compruebe que la capacidad no esté bloqueada por un plugin
- Intente deshabilitar plugins conflictivos

**Un socio no puede acceder a una capacidad**
- Verifique que el socio está en la lista de permitidos (allow-list)
- Compruebe que la visibilidad de la capacidad esté configurada como "Partner"
- Confirme que las credenciales del socio son correctas
- Compruebe los registros de API para errores de autenticación

**Capacidades no clasificadas siguen apareciendo**
- Revise y clasifíquelas en el aviso del administrador (admin notice)
- Verifique que su clasificación se haya guardado
- Verifique que el plugin que proporciona la capacidad esté actualizado

## Migración de Modo Hereditario (Legacy Mode) {#migration-from-legacy-mode}

Si está actualizando desde una versión anterior de Superdav AI Agent:

- Todas las capacidades existentes se clasifican automáticamente como Públicas (Public)
- Revise y ajuste la visibilidad según sea necesario
- No se necesita ninguna acción a menos que quiera restringir el acceso

Vea **Migración al Modo Terceros** para más detalles sobre la transición a la integración de API de Capacidades nativas.

## Pasos Siguintes {#next-steps}

Después de configurar la visibilidad de las capacidades:

1. **Revise sus capacidades**: Audite todas las capacidades instaladas
2. **Clasifique las capacidades no clasificadas**: Responda a los avisos del administrador (admin notices)
3. **Configure socios**: Añada socios si está utilizando la visibilidad de "Partner"
4. **Monitoree el uso**: Rastreé qué capacidades se utilizan más
5. **Documente decisiones**: Mantenga notas sobre por qué eligió cada nivel de visibilidad
