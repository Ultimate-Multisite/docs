---
title: Builder și Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introducează **Sistemul Plugin Builder & Sandbox**, care permite asistentului AI să genereze, să activeze și să gestioneze plugin-uri WordPress pe rețeaua dvs.—tot în cadrul unui mediu sandbox sigur și izolat.

## Prezentare (Overview) {#overview}

Plugin Builder îi permite asistentului AI să scrie plugin-uri WordPress personalizate în răspuns la solicitări în limbaj natural. Plugin-urile generate sunt validate, stocate și activate într-un strat sandbox înainte de a afecta vreodată funcționalitatea site-ului în direct.

Cazuri de utilizare includ:

- Generarea de plugin-uri utilitare ușoare, fără implicarea unui dezvoltator.
- Prototiparea de funcționalități care necesită hook-uri WordPress sau tipuri de post personalizate (custom post types).
- Crearea de scripturi de automatizare de scurtă durată pentru operațiuni în grup (batch operations).

## Generarea unui Plugin prin AI {#generating-a-plugin-via-ai}

Pentru a genera un plugin, deschide interfața de chat a Gratis AI Agent și descrie ce ai nevoie. De exemplu:

> "Creează un plugin care adaugă un mesaj de administrare personalizat pe dashboard."

AI-ul va:

1. Produce codul PHP al plugin-ului folosind generare structurată de cod.
2. Valida rezultatul pentru erori de sintaxă și modele nesigure.
3. Salva plugin-ul generat în magazinul sandbox.
4. Returna o confirmare cu slug-ul plugin-ului și un buton **Activate in Sandbox**.

Poți rafina rezultatul urmând în același thread de conversație înainte de a activa plugin-ul.

## Activarea în Sandbox {#sandbox-activation}

Activarea unui plugin generat în sandbox este diferită de activarea acestuia pe rețeaua live. Sandbox-ul:

- Rulează plugin-ul într-un mediu WordPress izolat (wp-env).
- Capturează orice erori PHP, avertismente sau conflicte de hook-uri.
- Raportează rezultatul activării în interfața de chat.

Pentru a activa un plugin în sandbox, apasă butonul **Activate in Sandbox** din răspunsul AI în chat, sau folosește comanda cu slash:

```
/activate-plugin <plugin-slug>
```

Un mesaj de stare confirmă dacă activarea a reușit sau a eșuat. În cazul unei eșecuri, jurnalul erorilor este afișat în thread-ul de chat.

## Managementul Plugin-urilor Generate {#managing-generated-plugins}

Plugin-urile generate sunt listate în **Gratis AI Agent → Plugin Builder → Manage Plugins**. De la acest ecran poți:

| Acțiune | Descriere |
|---|---|
| **View source** | Revizuiezi întregul cod PHP al plugin-ului. |
| **Re-activate in sandbox** | Rulezi din nou verificarea activării în sandbox. |
| **Install on network** | Implementezi plugin-ul pe rețeaua live (necesită confirmare manuală). |
| **Update** | Oferi o versiune nouă prin AI, înlocuind codul existent. |
| **Delete** | Elimină plugin-ul din magazinul sandbox. Dezactivează întâi de pe toate site-urile. |

:::warning
**Install on network** implementează plugin-ul generat pe WordPress multisite-ul tău live. Revizuiește codul plugin-ului înainte de a continua. Gratis AI Agent va solicita confirmarea înainte de a finaliza o instalare live.
:::

## Instalarea unui Plugin Generat pe Rețeaua {#installing-a-generated-plugin-on-the-network}

Când ești mulțumit de un plugin sandbox-izat, îl poți instala pe rețeaua live:

1. Mergi la **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Apasă **Install on Network** lângă plugin-ul pe care vrei să îl implementezi.
3. Confirmă dialogul. Plugin-ul este instalat în `wp-content/plugins/` și activat la nivel de rețea.

Alternativ, folosește comanda cu slash în interfața de chat:

```
/install-plugin <plugin-slug>
```

## Actualizările Plugin-urilor {#plugin-updates}

Pentru a actualiza un plugin generat, descrie modificarea asistentului AI într-o conversație nouă:

> "Actualizează plugin-ul dashboard-notice pentru a arăta mesajul doar administratorilor."

AI-ul generează o versiune nouă, care apare în sandbox alături de versiunea curentă. Tu revizuiești diferența (diff) și confirmi înainte ca actualizarea să fie aplicată.

## Integrarea HookScanner {#hookscanner-integration}

Plugin Builder folosește un **HookScanner** integrat pentru a analiza hook-urile și filtrele înregistrate de fiecare plugin generat. Output-ul HookScanner este afișat în răspunsul de chat și include:

- Hook-uri de acțiune înregistrate (apeluri `add_action`).
- Hook-uri de filtrare înregistrate (apeluri `add_filter`).
- Orice hook găsit în dependențele plugin-ului (săriturile directorilor `vendor/` și `node_modules/`).

Acest lucru te ajută să înțelegi comportamentul unui plugin înainte de a-l activa.

## Considerații de Securitate {#security-considerations}

- Plugin-urile generate sunt stocate separat de plugin-urile instalate manual și nu sunt accesibile prin ecranul standard de management al plugin-urilor WordPress până când nu le instalezi explicit pe rețeaua live.
- Sandbox-ul folosește validarea căii (path validation) pentru a preveni traversarea directoriilor atunci când scrie fișierele plugin-ului.
- Plugin-urile cu apeluri de funcții periculoase (de exemplu, `eval`, `exec`, `system`) sunt marcate în timpul validării și nu vor fi activate.
