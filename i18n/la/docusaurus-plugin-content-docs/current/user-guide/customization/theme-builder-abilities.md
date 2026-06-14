---
title: Abilitates Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capacitates Thematic Builder: Scaffolding and Activating Block Themes

Superdav AI Agent v1.12.0 introduce duos potentiae quae te permittunt generare et deployare themas bloc customibus directum ex interface chat.

## Visio Generalis

Capacitates **scaffold-block-theme** et **activate-theme** permittunt agentes ut:
- Themas bloc completas, ad productionem aptas, ex specificationibus tuis genereant
- Themas automatico in sit tuo activant sine interventione manuali
- Identitates visuelles cohaerentium per decisiones designitatis guidatas creant

## Scaffold Thema Bloc

Capacitas **scaffold-block-theme** novum theme bloc WordPress generat cum structura themae completa, inclusa:

- Configuratio `theme.json` cum tokenibus designatis
- File plantulae (template) blocorum pro dispositionibus communes
- Stylos et variationes blocorum customarum
- Metadatum themae et declarationes supporti

### Quomodo Invocaris

In conversatione tua cum Superdav AI Agent, potes petere generationem themae:

```
"Crea theme bloc vocatum 'Modern Agency' cum schema colorum caeruleo et album,
typographia sans-serif, et disposition professionali"
```

Agent generabit:
1. Preferentias designationes tuas per conversationem collectabit
2. Structuram themae completam generebit
3. Omnes necessarias files themae creabit
4. Themam ad activation preprare

### Output Expectatus

Cum capacitas successiva executur, vides:

- Confirmation quod thema scaffoldatum est
- Nomen et locus themae
- Summarium tokenum designatorum applicatorum (colorum, typographiae, interspatiorum)
- Status paratus ad activationem

Exemplum output:
```
✓ Thema "Modern Agency" successiva scaffoldatum est
  Locus: /wp-content/themes/modern-agency/
  Colorum: Primarius #0066CC, Secundarius #FFFFFF
  Typographia: Inter (sans-serif)
  Status: Paratus ad activationem
```

## Activare Thema

La capacidad de **activate-theme** cambia tu sitio a un tema de bloques recién creado o existente.

### Cómo Invocarlo

Después de crear un tema, puedes activarlo inmediatamente:

```
"Activar el tema Modern Agency"
```

O activar cualquier tema existente:

```
"Cambiar al tema Twentytwentyfour"
```

### Resultado Esperado

Cuando la activación tiene éxito:

- Confirmación del tema activo
- Nombre del tema anterior (para referencia)
- URL del sitio donde el tema está ahora en vivo
- Cualquier nota de configuración específica del tema

Ejemplo de resultado:
```
✓ Tema activado con éxito
  Tema activo: Modern Agency
  Tema anterior: Twentytwentyfour
  En vivo en: https://yoursite.com
  Nota: Revisa tu página de inicio para verificar el diseño
```

## Flujo de Trabajo: Crear y Activar

Un flujo de trabajo típico combina ambas capacidades:

1. **Solicitar generación de tema**: "Crear un tema de bloques para mi página de aterrizaje SaaS"
2. **El agente crea el tema**: Genera archivos y tokens de diseño
3. **Revisar y refinar**: Discutir cambios de diseño si es necesario
4. **Activar**: "Activar el tema ahora"
5. **Verificar**: Visitar tu sitio para confirmar que el nuevo diseño está en vivo

## Tokens de Diseño y Personalización

Los temas creados con scaffold utilizan tokens de diseño de WordPress (a través de `theme.json`) para:

- **Colores**: Paleta principal, secundaria, de acento, neutra
- **Tipografía**: Familias de fuentes, tamaños, pesos, alturas de línea
- **Espaciado**: Relleno (padding), margen (margin), escalas de espacio (gap)
- **Bordes**: Tokens de radio y ancho
- **Sombras**: Niveles de elevación

Estos tokens están centralizados en `theme.json`, lo que facilita ajustar todo tu sistema de diseño desde un solo archivo.

## Limitaciones y Notas

- Temi sunt structurati în `/wp-content/themes/` și trebuie să urmeze convențiile de numire ale WordPress
- Activarea necesită permisiuni adecvate pe site-ul tău WordPress
- Cod PHP personal în teme este minim; folosește plugin-uri pentru funcționalități complexe
- Temele bazate pe bloc funcționează cel mai bine cu WordPress 5.9 și versiuni ulterioare

## Depanare

**Tema nu apare după structurare (scaffolding)**
- Verifică dacă directorul temei există și are permisiuni corecte
- Verifică dacă `theme.json` este un JSON valid
- Asigură-te că numele temei nu conflictuează cu alte teme existente

**Activarea eșuează**
- Confirmă că ai permisiunile de administrator
- Verifică dacă directorul temei este citibil pentru WordPress
- Revizuiește log-urile de eroare WordPress pentru detalii

**Token-urile de design nu se aplică**
- Verifică dacă sintaxa `theme.json` este corectă
- Curăță orice plugin de caching
- Verifică dacă versiunea ta de WordPress suportă token-urile pe care le folosești

## Pași Următori

După activarea temei, poți:
- Folosi abilitatea **Design System Aesthetics** pentru a rafina tipografia, culorile și spațiile
- Personaliza stilurile blocului individual prin editorul de bloc WordPress
- Adăuga CSS personal în fișierul `style.css` al temei
- Crea șabloane de bloc personalizate pentru tipuri specifice de pagini
