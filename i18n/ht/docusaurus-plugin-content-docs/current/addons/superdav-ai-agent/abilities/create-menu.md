---
title: Kreye meni
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Kreye meni

Kapasite **Kreye meni** a kreye meni navigasyon WordPress ak sipò pou etikèt navigasyon diferan ki separe ak tit paj yo.

## Apèsi

Kapasite sa a elaji fonksyonalite estanda pou kreye meni a avèk kapasite pou presize yon paramèt `navigation_label`. Sa pèmèt ou kreye meni kote etikèt ki parèt nan navigasyon an diferan ak tit paj la, sa ki bay plis fleksibilite nan estrikti sit la ak eksperyans itilizatè a.

## Paramèt

| Paramèt | Tip | Obligatwa | Deskripsyon |
|-----------|------|----------|-------------|
| `name` | string | Wi | Non meni, pa egzanp `Primary Navigation` |
| `location` | string | Non | Anplasman tèm pou bay meni sa a, pa egzanp `primary` |
| `navigation_label` | string | Non | Etikèt pou montre nan navigasyon an (diferan ak tit paj la) |

## Valè retounen

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Etikèt navigasyon kont tit paj

Paramèt `navigation_label` la pèmèt ou separe non meni entèn nan ak etikèt ki parèt pou itilizatè yo:

- **`name`** — Idantifyan meni entèn WordPress itilize (pa egzanp, "Primary Navigation")
- **`navigation_label`** — Etikèt ki parèt pou vizitè sit yo nan navigasyon an (pa egzanp, "Main Menu")

Sa itil lè:
- Konvansyon non entèn ou diferan ak etikèt itilizatè yo wè yo
- Ou vle etikèt ki pi kout nan navigasyon an pase nan panèl administrasyon an
- Ou bezwen sipòte plizyè lang ak longè etikèt diferan
- W ap konstwi meni pou rejyon oswa gwoup itilizatè espesifik

## Egzanp itilizasyon

### Egzanp 1: Meni senp ak etikèt navigasyon

**Enstriksyon:**
```
Kreye yon meni navigasyon prensipal ki rele "Main Navigation" ak etikèt navigasyon "Menu".
```

**Rezilta:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Egzanp 2: Meni pou anplasman tèm espesifik

**Enstriksyon:**
```
Kreye yon meni pye paj ki rele "Footer Links" ak etikèt navigasyon "Quick Links" epi bay li anplasman pye paj la.
```

**Rezilta:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Entegrasyon ak Theme Builder

Lè w ap itilize Theme Builder, kapasite Kreye meni a:

1. Detekte otomatikman anplasman meni tèm ki disponib yo
2. Kreye meni ak etikèt navigasyon ki apwopriye pou konsepsyon ou
3. Bay meni yo anplasman tèm ki kòrèk yo
4. Sipòte ajoute eleman meni apre kreyasyon

## Kapasite ki gen rapò

- **`add_menu_item`** — Ajoute eleman nan yon meni ki deja egziste
- **`update_menu`** — Chanje non yon meni oswa rebay li yon anplasman tèm
- **`delete_menu`** — Retire yon meni nan sit ou

## Pi bon pratik

- **Sèvi ak etikèt navigasyon ki klè** — kenbe etikèt yo kout epi deskriptif pou itilizatè yo
- **Matche anplasman tèm yo** — bay meni yo anplasman tèm ki kòrèk la pou afichaj apwopriye
- **Planifye estrikti meni an** — deside sou yerachi meni ou anvan ou kreye eleman yo
- **Teste reponsivite** — verifye meni yo parèt kòrèkteman sou aparèy mobil
- **Lokalize etikèt yo** — sèvi ak etikèt navigasyon diferan pou diferan vèsyon lang

## Limitasyon

- Etikèt navigasyon yo sèlman pou afichaj; `name` entèn nan toujou itilize pou idantifikasyon WordPress
- Sipò tèm varye; se pa tout tèm ki sipòte tout anplasman meni yo
- Eleman meni yo dwe ajoute apa apre kreyasyon meni an
- Chanje yon etikèt navigasyon mande pou mete meni an ajou

## Kapasite ki gen rapò

- [Jenere Logo SVG](./generate-logo-svg.md) — kreye logo pou antèt sit ou
- [Valide kontras palèt](./validate-palette-contrast.md) — asire konbinezon koulè ki aksesib
