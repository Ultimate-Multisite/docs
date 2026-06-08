---
title: 'Liçona 6: L''experiència d''inscripció'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Aula 6: L'Experiència de Registre

El process de pagament és on l'interès es converte en rendiment. Un procés de registre confús o genèric fa perdre clients. Un flux específic del sector que parli el seu idioma i que es senti fàcil converte'ls.

## On vam deixar

FitSite té templates i plans configurats. Ara creem l'experiència de registre i pagament que transforma els propietaris de centres de fitness en clients pagadors.

## Entendre el flux de registre

Els formularis de pagament d'Ultimate Multisite són formularis multietapa totalment personalitzables. Per FitSite, volem un flux que:

1. Es senti dissenyat per empreses de fitness
2. Reculli només el que és necessari
3. Porti el client a un lloc web funcional el més ràpid possible

Consulta [The Registration Flow](/user-guide/configuration/the-registration-flow) per a la referència tècnica completa.

## Dissenyar el pagament de FitSite

Navega a **Ultimate Multisite > Checkout Forms** i crea un nou formulari.

### Pas 1: Selecció de plans

La primera cosa que veu els propietaris de centres de fitness han de ser els plans, presentats en termes que entenguin.

- Afegir un camp de **Pricing Table**
- Configurar-lo per mostrar els tres plans FitSite
- Les descripcions de plans que escrivost en la Aula 5 apareixen aquí; assegura't que parlin de les necessitats de l'empresa de fitness, no de funcionalitats tècniques

:::tip El idioma del sector és important
"1 GB de magatzematge" no significa res per a un propietari de gimnàsium. "Tot el que necessites per a un lloc web professional de centre" significa tot. Escriu les descripcions dels plans en el idioma del teu client.
:::

### Pas 2: Selecció de templates

Després de triar un plan, el client tria el seu template inicial.

- Afegir un camp de **Template Selection**
- Els templates disponibles es filtren pel plan que han seleccionat (configurat a la Aula 5)
- Cada template ha de tenir una imatge de previsualització que mostri un disseny específic de fitness

### Pas 3: Creació de compte

Mantén-ho mínim. Recull només:

- Adreça de correu electrònic
- Contrasenya
- Nom del centre/empresa (això es convertirà en el nom del seu lloc web)

No demanis informació que no necessitis al registre. Cada camp addicional redueix les conversions.

### Pas 4: Configuració del lloc web

- **Site title**: Remplenat prèviament amb el nom del centre de fitness escrit al Pas 3
- **Site URL**: Generat automàticament a partir del nom del centre (ex: `ironworks.fitsite.com`)

### Pas 5: Pagament

- Afegir el camp de **Payment**
- Configurar la teva passarela de pagament ([Stripe](/user-guide/payment-gateways/stripe) es recomana per a la facturació per subscripció)
- Si creasti *order bumps* a la Aula 5, afegeix un camp **Order Bump** abans del pas de pagament

### Pas 6: Confirmació

- Personalitza el missatge de confirmació amb un idioma específic de fitness
- Exemple: "El lloc web del teu centre de fitness està sent creat. Seràs redirigit al teu nou lloc web en uns segons."

## Afegir un interruptor de selecció de període

Si has configurat variacions de preu als teus plans (mensual vs. anual), afegeix un camp de **Period Selection** al formulari de pagament perquè els clients puguin alternar entre períodes de facturació. Consulta [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) per a les instruccions.

## Configurar el pagament

Si encara no has configurat una passarela de pagament:

1. Navega a **Ultimate Multisite > Settings > Payment Gateways**
2. Segueix la guia de configuració de [Stripe](/user-guide/payment-gateways/stripe) o la teva passarela preferida
3. Prova un flux de pagament complet amb un pagament de prova

Consulta [Getting Paid](/user-guide/payment-gateways/getting-paid) per detalls sobre com arriben els pagaments al teu compte.

## Provar el flux

Abans de continuar, completa un test de registre complet:

1. Obre el formulari de pagament en una finestra de navegació anònima/privada
2. Selecciona un plan
3. Tria un template
4. Crea un compte
5. Completa el pagament (utilitza el mode de prova)
6. Verifica que el lloc web s'ha creat amb el template correcte

Verifica que:

- [ ] Les descripcions dels plans són clares i específiques del sector
- [ ] Les previsualitzacions de templates mostren dissenys adequats per a fitness
- [ ] L'URL del lloc web es genera correctament a partir del nom del centre
- [ ] El pagament es processa amb èxit
- [ ] El client aterriar en un lloc web funcional amb el template seleccionat
- [ ] Els correus electrònics de confirmació utilitzen un idioma específic de fitness

## La xarxa FitSite fins ara

```
FitSite Network
├── WordPress Multisite (mode de subdomain)
├── Ultimate Multisite (configurat)
├── Hosting amb SSL wildcard + mapeig de domini
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## El que vam construir en aquesta Aula

- **Un formulari de pagament multietapa** adaptat als propietaris de centres de fitness
- **Idioma específic del sector** durant tot el flux de registre
- **Fricció mínima** -- només camps essencials, ruta ràpida cap a un lloc web funcional
- **Integració de pagament** amb verificació de prova
- **Un flux de punta a punta provat** des de la selecció del plan fins al lloc web funcional

---

**Pròxima:** [Lesson 7: Making It Yours](lesson-7-branding) -- farem *white-label* la plataforma i establixerem FitSite com a marca.
