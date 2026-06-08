---
title: 'Lliçó 10: Dia de llançament'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Aula 10: Dia del Lançament

De tot és construït. Abans d'obrir les portes, aquesta aula et guia per la llista de revisió pre-lançament per assegurar-te que no hi ha res trencat, faltant o vergonós.

## On acab vam

FitSite té templates, plans, pagament (*checkout*), *branding*, *onboarding* i preus configurats. Ara verifiquem que tot funciona i que podem pujar en línia.

## Llista de Revisió Pre-Lançament

Treballa amb cada punt. No et saltes cap.

### Infraestructura de la Plataforma

- [ ] L'arxivering (*hosting*) és estable i funciona bé sota càrrega
- [ ] L'SSL comodinalitat (*wildcard SSL*) és actiu i tots els subdomínis serveixen per HTTPS
- [ ] El mapeig de domini funciona: prova crear un lloc i mapejar un domini personalitzat
- [ ] Els *backups* estan configurats i provats (restaura almenys un per verificar)
- [ ] La monitorització està implementada: sabràs si la plataforma es cauteja

### Templates

- [ ] Els tres templates estan carregats correctament en els llocs nous
- [ ] El contingut de mostra és útil i no té errors d'escritura
- [ ] Tutes les imatges tenen les seves llicències correctes (sense marques d'aigua de fotos de *stock*)
- [ ] La responsivitat mòbil funciona en cada pàgina del template
- [ ] La velocitat de càrrega de la pàgina és acceptable (prova amb un eina com GTmetrix o PageSpeed Insights)
- [ ] Cap enllaç trencat ni assets faltants en cap template

### Plans i Productes

- [ ] Els tres plans estan actius i visibles
- [ ] Les descripcions dels plans són exactes i específiques del sector
- [ ] Els preus són correctes (mensuals i anuals)
- [ ] Les tasques de configuració estan configurades als plans adequats
- [ ] El període d'essai funciona al plan *Starter*
- [ ] Els impulsos de compra (*order bumps*) apareixen correctament durant el pagament
- [ ] Les limitacions de *plugin* i tema es faen servir correctament per plan

### Flux de Pagament (*Checkout Flow*)

- [ ] Completa un registre de prova complet per a cada plan (utilitza el mode de pagament de prova)
- [ ] La selecció de templates mostra els templates correctes per plan
- [ ] El pagament es processa amb èxit
- [ ] El client rebreu l'email de benvinguda després del registre
- [ ] Es crea un lloc nou amb el template correcte
- [ ] El client pot iniciar sessió al seu nou lloc immediatament
- [ ] Els codis de descompte funcionen correctament

### Branding

- [ ] La pàgina de *login* mostra el *branding* de FitSite
- [ ] El *dashboard* d'administració mostra el *branding* de FitSite
- [ ] Tots els emails del sistema utilitzen el *branding* de FitSite i llenguatge específic de fitness
- [ ] Les factures es mostren correctament amb els detalls del teu negoci
- [ ] El lloc de *marketing* és actiu i enllaça al formulari de pagament

### Onboarding

- [ ] El widget de *Quick Start* apareix als *dashboards* dels nous clients
- [ ] Tots els enllaços de *Quick Start* apunten a les pàgines correctes
- [ ] La seqüència d'emails de benvinguda està configurada i provada
- [ ] Els articles de la base de coneixement estan publicats i accessibles
- [ ] La pàgina de compte mostra la informació correcta del plan i les opcions d'actualització

### Legal i Negoci

- [ ] Els termes de servei estan publicats i enllaçats des del pagament
- [ ] La política de privacitat està publicada i és accessible
- [ ] La política de reemborse està definida i documentada
- [ ] L'entitat empresarial està configurada per rebre pagaments
- [ ] La passarela de pagament està en mode actiu (no en mode de prova)
- [ ] La configuració fiscal és correcta per la teva jurisdicció

## Lançament Suau vs. Lançament Oficial

Considera un lançament de dues fases:

### Fase 1: Lançament Suau

Convida a 5-10 propietaris de *studios* de fitness a registrar-se abans del lançament públic. Aquests són els teus clients beta. Ofereix-ls un descompte significatiu (el 50% de descompte de por vida, o 3 mesos gratis) a canvi de:

- Feedback honest sobre l'experiència de registre i *onboarding*
- Permissió per utilitzar el seu lloc com a exemple de mostra
- Reportar qualsevol bug o problema que trobin

Això et proporciona feedback real de clients i llocs actius per mostrar abans que et adreces al públic.

### Fase 2: Lançament Oficial

Una vegada que s'hagi incorporat el feedback del lançament suau:

- Passar la passarela de pagament a mode actiu
- Publicar el teu lloc de *marketing*
- Començar l'adquisició de clients (Aula 11)
- Anunciar als canals relevant de l'industria del fitness

## Accions del Dia del Lançament

El dia que et adreces al públic:

1. **Passar a pagaments reals** – desactiva el mode de prova a la teva passarela de pagament
2. **Verificar un altre cop** – realitza un registre de prova complet amb un pagament real (reembolça-t'ho després)
3. **Monitoritzar de prop** – busca errors, registracions fallides o problemes de pagament
4. **Estar disponible** – els teus primers clients reals poden necessitar ajuda, i una resposta ràpida construeix confiança
5. **Celebrar breument** – i després tornar al treball

## Què pot anar malbé

Està preparat per:

- **Problemes amb la passarela de pagament**: Ten'a a punt el contacte de suport del teu proveïdor de passarela
- **Problemes amb el certificat SSL**: Com saber verificar i renovar certificats
- **Fallades de lliurament d'emails**: Prova que els emails arriben de fet (comprova les carpetes de *spam*)
- **Rendiment sota càrrega**: Si et veus un pic de trànsit, saber com escalar el teu *hosting*
- **Confusió del client**: Ten'a preparada la teva base de coneixement i canals de suport

## La Xarxa FitSite fins ara

```
FitSite Network
├── WordPress Multisite (mode de subdomini) ✓
├── Ultimate Multisite (configurat + branditzat) ✓
├── Platform Domain (fitsite.com + SSL comodinalitat) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Impulsos de compra + Descomtes) ✓
├── Checkout Flow (provat de punt a punt) ✓
├── Branding (complet) ✓
├── Customer Onboarding (Quick Start, emails, recursos d'ajuda) ✓
├── Estratègia de preus (anual, proves, tasques de configuració, descomtes) ✓
├── Llista de Revisió Pre-Lançament (verificat) ✓
├── Lançament Suau (clients beta incorporats) ✓
└── ACTIU ✓
```

## El que vam construir en aquesta aula

- **Una llista de revisió pre-lançament completa** que cobreix infraestructura, contingut, pagaments i aspectes legals
- **Una estratègia de lançament suau** per obtenir feedback real abans de pujar en línia
- **Procediments per al dia del lançament** per pujar amb confiança
- **Un pla de contingència** per a problemes comuns del dia del lançament

---

**Pròxima:** [Aula 11: Trobar Clients](lesson-11-customers) — ara que FitSite és actiu, com et garanteu que els propietaris de *studios* de fitness es registrin?
