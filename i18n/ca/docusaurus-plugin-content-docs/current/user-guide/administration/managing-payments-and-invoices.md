---
title: Gestió de Pagaments i Factures
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gestion de Pagaments i Factures

## Configuració de Pagaments

Abans de començar a rebre pagaments, hauràs de configurar les configuracions relacionades amb pagaments. Navega a **Ultimate Multisite → Settings** i fes clic a la pestanya **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Aquí teniu una vista completa de la pàgina de configuració de pagaments:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opcions Generals de Pagament

A la configuració general pots configurar:

- **Currency** — La moneda predeterminada utilitzada per les transaccions
- **Currency Position** — On apareix el símbol de la moneda (abans/després del quantitat)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Passarelles de Pagament (Payment Gateways)

Ultimate Multisite suporta múltiples passarelles de pagament. Pots habilitar i configurar cadascuna des de la pestanya de configuració de Pagaments.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Les passarelles disponibles inclouen:

- **Stripe** — Pagaments amb targeta de crèdit a través de Stripe
- **PayPal** — Pagaments amb PayPal
- **Manual** — Per processament de pagaments offline o personalitzat

Cada passarela té la seva pròpia secció de configuració on has de introduir les clau API i altres configuracions.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Mode Sandbox

Pots activar el **Sandbox Mode** per provar la teva integració de pagaments abans de passar a l'operatiu. Quan el mode sandbox està actiu, no es realitzaran càrrejos reals.

## Veure Pagaments

Navega a la pàgina de **Payments** dins de Ultimate Multisite per veure totes les transaccions de la teva xarxa.

![Payments list](/img/admin/payments-list.png)

Pots filtrar els pagaments per estat (completat, pendents, fallit, reemborsat) i buscar transaccions específiques.

Fes clic a un pagament per veure els seus detalls complets, incloent els articles de la llista, la membresia associada, la informació del client i les dades de la passarela de pagament.

## Factures (Invoices)

Ultimate Multisite pot generar factures de manera automàtica per pagaments. Pots personalitzar la plantilla de factures i el format de numeració des de la configuració de Pagaments.

Les opcions de personalització de factures inclouen:

- **Nom i adreça de l'empresa** mostrats a les factures
- Format i seqüència de **numeració de factures**
- **Logotip** mostrat a l'encabezament de la factura
- **Text de peu de pàgina personalitzat** per termes, notes o informació legal

Per personalitzar la plantilla de factures, veu a **Ultimate Multisite → Settings → Payment** i busca les configuracions relacionades amb factures.
