---
title: Integratio Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integratio Closte {#closte-integration}

## Visio {#overview}
Closte est plataforma de hosting WordPress gestionata construita sobre infrastructuram Google Cloud. Ha integra esta integratio sincronizatam domini et management certaminum SSL inter Ultimate Multisite et Closte.

## Caracteres {#features}
- Sincronizare automática dominii
- Management certificatuum SSL
- Support pro dominii wildcard
- Nulla configuratio necessaria si currit in Closte

## Requisitos {#requirements}
Constantem sequenti debet defini in file `wp-config.php` tuis si usus Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'tua_api_key');
```

Ha constanta haque saepe iam definita si curris in Closte.

## Instrucțiuni de Configuratio {#setup-instructions}

### 1. Verifică Chia API Closte Tuum {#1-verify-your-closte-api-key}

Si curris in Closte, constanta `CLOSTE_CLIENT_API_KEY` debet iam esse definita in file `wp-config.php` tuis. Puoi verifica hoc verificando filem `wp-config.php`.

### 2. Active Integratio {#2-enable-the-integration}

1. In admin WordPress tuum, mergi la Ultimate Multisite > Settings
2. Naviga ad tabulam "Domain Mapping" (Mappatura Dominii)
3. Descenzi ad "Host Integrations" (Integratio Host)
4. Active integratiam Closte
5. Clică pe "Save Changes" (Salvează Modificări)

## Cum Funcționează {#how-it-works}

Când un domeniu este mapat in Ultimate Multisite:

1. Integratio trimite solicitandum ad API Closte ad adita domenum in application tuam
2. Closte manage automat provizionandum certificatului SSL
3. Când mapatura dominii este șterse, integratio va remove domeniu din Closte

Integratio funcționează și cu setarea intervalului de verificare DNS in Ultimate Multisite, permițându-ți să configurezi cât de des sistemul verifică propagarea DNS și emiterea certificatului SSL.

## Crearea Înscrierii Domeniului {#domain-record-creation}

Hoc integrare assura quod cum situm creetur vel duplicetur, automatic record dominii creaturitur. Hoc est maxime importante pro integratione Closte, quia creatio record dominii excitat API Closte ut dominum et certificat SSL creetur.

## Solutio Problematum {#troubleshooting}

### Problematicae Connectionis API {#api-connection-issues}
- Verificate quod clave API Closte tua est correcta
- Assura quod account Closte tu habet necessarias permissiones

### Problematicae Certificatus SSL {#ssl-certificate-issues}
- Closte potest tempore alium habeat ad emittendum certificata SSL (solum 5-10 minutarum)
- Verificate quod domini tui recte ponunt in adressam IP serveris Closte tui
- Verifica record DNS pro tuo dominio ut sic configurati sunt

### Dominium Non Aditum {#domain-not-added}
- Verifica logs Ultimate Multisite ad quiddam error messages
- Assura quod dominium non est iam additum in Closte
- Assura quod record DNS dominii tui recte configurati sunt

### Intervallum Verificandi DNS {#dns-check-interval}
- Si certificata SSL tempore longum esse prendunt, potes intervallum verificandi DNS in pengaturanibus Domain Mapping adjustari
- Intervallum default est 300 secundarum (5 minutae), sed possis eam ponere usque ad 10 secundarum ad verficandum celerius in testibus
