---
title: Capacități de Construcție a Temelor
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capacitățile de Construcție a Temelor: Crearea și Activarea Temelor de Bloc

Superdav AI Agent v1.12.0 introduce două capacități puternice care vă permit să generați și să implementați teme de bloc personalizate direct din interfața de chat.

## Prezentare Generală

Capabilitățile **scaffold-block-theme** și **activate-theme** permit agenților să:
- Să genereze teme de bloc complete, gata de utilizare în producție, pe baza specificațiilor dumneavoastră
- Să activeze automat temele de pe site-ul dumneavoastră fără intervenție manuală
- Să creeze identități vizuale coerente prin decizii de design ghidate

## Crearea Structurii Temei de Bloc (Scaffold Block Theme)

Capabilitatea **scaffold-block-theme** generează o temă de bloc WordPress nouă, cu o structură completă, care include:

- Configurația `theme.json` cu *design tokens*
- Fișiere de șablon pentru blocuri pentru layout-uri comune
- Stiluri și variații de bloc personalizate
- Metadate și declarații de suport pentru temă

### Cum se apelează

În chat-ul dumneavoastră cu Superdav AI Agent, puteți solicita generarea unei teme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agentul va:
1. Colecta preferințele dumneavoastră de design prin conversație
2. Genera structura completă a temei
3. Crea toate fișierele necesare ale temei
4. Pregăti tema pentru activare

### Ieșirea Așteptată

Când capacitatea rulează cu succes, veți vedea:

- O confirmare că tema a fost creată (scaffolded)
- Numele și locația temei
- Un rezumat al *design token*-urilor aplicate (culori, tipografie, spațiere)
- Statusul "gata de activare"

Exemplu de ieșire:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activarea Temei (Activate Theme)

Capabilitatea **activate-theme** schimbă site-ul dumneavoastră pe o temă de bloc nou creată sau deja existentă.

### Cum se apelează

După ce ați creat structura temei, puteți activa-o imediat:

```
"Activate the Modern Agency theme"
```

Sau puteți activa orice altă temă existentă:

```
"Switch to the Twentytwentyfour theme"
```

### Ieșirea Așteptată

Când activarea reușește:

- O confirmare a temei active
- Numele temei anterioare (pentru referință)
- URL-ul site-ului unde tema este acum vizibilă
- Orice notă de configurare specifică temei

Exemplu de ieșire:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Flux de Lucru: Creare și Activare

Un flux de lucru tipic combină ambele capacități:

1. **Solicitarea creării temei**: "Create a block theme for my SaaS landing page"
2. **Agentul creează structura temei**: Generează fișiere și *design token*-uri
3. **Revizuire și rafinare**: Discutați modificări de design, dacă este necesar
4. **Activare**: "Activate the theme now"
5. **Verificare**: Vizitați site-ul pentru a confirma că noul design este vizibil

## Design Tokens și Personalizare

Temele create folosesc *design tokens* WordPress (prin `theme.json`) pentru:

- **Culori**: Paleta primară, secundară, accent și neutră
- **Tipografie**: Familiile de font, dimensiunile, greutățile, înălțimile de linie
- **Spațiere**: Scale de *padding*, *margin* și *gap*
- **Borduri**: Token-uri de rază și lățime
- **Umbre**: Niveluri de elevație

Aceste *tokens* sunt centralizate în `theme.json`, ceea ce face ușor ajustarea întregului sistem de design dintr-un singur fișier.

## Limitările și Notele

- Temele sunt create în directorul `/wp-content/themes/` și trebuie să urmeze convențiile de denumire WordPress
- Activarea necesită permisiuni adecvate pe site-ul dumneavoastră WordPress
- Codul PHP personalizat în teme este minim; folosiți *plugin*-uri pentru funcționalități complexe
- Temele de bloc funcționează cel mai bine cu WordPress 5.9 și versiuni mai noi

## Depanare

**Tema nu apare după creare**
- Verificați dacă directorul temei există și are permisiuni corecte
- Asigurați-vă că `theme.json` este un JSON valid
- Asigurați-vă că numele temei nu conflictă cu alte teme existente

**Eșecul activării**
- Confirmați că aveți permisiuni de administrator
- Verificați dacă directorul temei este citibil de către WordPress
- Revizuiți jurnalele de eroare WordPress pentru detalii

**Design token-urile nu se aplică**
- Verificați dacă sintaxa `theme.json` este corectă
- Ștergeți orice *plugin* de *caching*
- Verificați dacă versiunea dumneavoastră WordPress suportă *tokens*-urile pe care le folosiți

## Pași Următori

După ce ați activat tema, puteți:
- Folosi abilitatea **Design System Aesthetics** pentru a rafina tipografia, culorile și spațierea
- Personaliza stilurile individuale ale blocurilor prin editorul de bloc WordPress
- Adăuga CSS personal în fișierul `style.css` al temei
- Crea șabloane de bloc personalizate pentru tipuri specifice de pagini
