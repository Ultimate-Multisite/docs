---
title: Fluj de migració soberana
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Flui de Migració Soberana {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 añade portes de verificació de migració per passar un subsite estàndard a infraestructures de tenent soberan.

## Abans que comencis {#before-you-start}

Confirma que tens:

- Una còpia de segure del site de origen.
- L'add-on Multi-Tenancy activat.
- La base de dades, el sistema de fitxers (filesystem) i el domini del tenent de destinació preparats.
- Un enllaç a l'host de la base de dades que coincide amb l'entorn de destinació.
- Accés per executar comandes WP-CLI per a la xarxa.

## Flui recomanable {#recommended-workflow}

1. Prepara la base de dades i el sistema de fitxers del tenent de destinació.
2. Registra o actualitza les configuracions d'isolament del tenent.
3. Executa la migració del tenent.
4. Provisiona o verifica els usuaris del tenent.
5. Desacaufa (drain) les tasques de migració assíncrones.
6. Executa la verificació de la migració soberana.
7. Visita el tenent amb SSO.
8. Canvia DNS o enrutament només després que la verificació passi.

## Portes de verificació {#verification-gates}

El flui de verificació comprés la migració des de diversos angles:

- El esquema del tenent existeix i pot ser escrit pel escritor de la base de dades del tenent.
- L'host de la base de dades configurat té grans (grants) valides.
- Els usuaris del tenent estan presents i coincideixen amb el nombre esperat d'usuari d'instal·lació soberana.
- La cola de push assíncron pot desacaufar-se amb èxit.
- Les trajectòries de dades del costat de la xarxa legacy no són més necessàries per al tenent soberan.

Trata les fallades de verificació com a bloquejadors pre-lanzament. Repara el problema de base de dades, usuari, cola o enrutament informat, i després executa la verificació de nou abans de presentar el tenent als clients.

## Primera visita de producció {#first-production-visit}

Després que la verificació passi, utilitza **Visit (SSO)** des de l'esdeveniment de gestió del site per a la primera visita d'administració. Això confirma el enrutament del tenent, el tractament del token SSO, el *origin pinning* i la provisió d'usuari del costat del tenent en un pas controlat.
