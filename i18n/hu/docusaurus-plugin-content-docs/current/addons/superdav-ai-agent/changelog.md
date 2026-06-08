---
title: Mintaanyag
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Újdonságok naplójának (Changelog)

## 1.16.0 — Kiadás dátuma: 2026-05-20

### Új funkciók (New)

- **Logo SVG generálásának képessége** — A Theme Builder most képes generálni és beépíteni a felhasználói neévre biztonságosított, egyedi logo SVG-eket.
- **Fotó feltöltése a felfedezési interjúban** — A Theme Builder felfedezési interjúja most tartalmaz egy fotó feltöltési lépést, ami gazdagabb tervezési kontextust biztosít.
- **Paletta kontraszt validációja** — Előzetesen ellenőrzi a színeket WCAG megfelelőség szempontjából, mielőtt a témára alkalmazná őket.
- **Vendéglátói menük** — A Theme Builder most képes generálni strukturált étel- és italmenő oldalakat a vendéglátó vállalkozások számára.
- **Desktop és mobil előnézet renderelése** — A tervezési irány kiválasztása során előnézheti a dizájnját a desktop és mobil eszközökön.
- **Navigációs címke paraméter** — A Menu létrehozása most támogat egy különálló `navigation_label`-t, amely nem feltétlenül az oldaltitel.
- **Tier 1 eszköz elérhetősége** — az sd-ai-agent/site-scrape most egy Tier 1 eszköz, amely alapértelmezés szerint elérhető a Theme Builderben.

### Javítások (Fixed)

- **AI Client cache** — most transzientekkel támasztja alá a keresztkérésen keresztül történő tartósságot, ezzel megakadályozva az adatok elvesztését a hosszú ideig tartó agent feladatok során.
- **Plugin sor akciólinkei** — javítva és átnevezve a tisztább felhasználói élmény érdekében.

## 1.10.0 — Kiadás dátuma: 2026-05-05

### Új funkciók (New)

- **Tavily internetkeresés** — hozzáadja a Tavily-t keresőforrásszá, így a Brave Search mellett gazdagabb internetkeresési eredményeket kap.
- **Téma-tudatos beépített képességek** — A Block Themes, Classic Themes, Kadence Blocks és Kadence Theme képességi útmutatók most tartalmazzák a plugin-ot.
- **Oldaltíró kapcsolatfelvételi űrés** — lehetővé teszi, hogy a chat felületéről közvetlenül bármilyen oldalra kapcsolatfelvételi űrés egre helyezzen.

### Javított funkciók (Improved)

- **WooCommerce integráció átalakítása** — most a WooCommerce natív API-jait használja, ami jobb megbízhatóságot és kompatibilitást biztosít.
- **Forráslista automatikus frissítése** — minden plugin aktiválásakor vagy deaktiválásakor frissül.

### Javítások (Fixed)

- **navigate-to képesség** — javította az admin oldalakon előforduló végtelen újrafrissítési ciklust.
- **list-posts képesség** — most helyesen oldja meg a kategória és címke neveit a slug-kra.
- **WP-CLI parancsok** — helyreállította a hiányzó namespace aliasokat egy korábbi átalakítás után.
- **Esemény automatizáció** — szépen kezeli azokat az oldalakat, ahol az automatizációs táblák még nem lettek létrehozva.
- **memory-save képesség** — most használja a helyes namespace prefixet a rendszer utasításépítőben.
- **Scalar eszköz eredményei** — most helyesen csomagolja be, mielőtt visszaadja az AI-nak.
- **Felhasználási statisztikák** — most helyesen kezeli az elavult képességi kulcsformátumot az idősebb verzióktól való frissítés során.
