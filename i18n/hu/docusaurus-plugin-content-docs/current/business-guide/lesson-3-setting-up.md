---
title: 'Összhang 3: Hálózat beállítása'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# 3. Bölöm: A Hálózat Beállítása

Most ideje építeni. Ebben a bölségeben telepítjük az Ultimate Multisite-ot, és beállítjuk a FitSite hálózat alapjait. Minden döntés itt a fitness körzetét figyelembe veszi.

## Mire Képtünk {#where-we-left-off}

Fitness stúdiókat választottunk körzetünkre, és validáltuk az lehetőséget. Most ezt az ötletet egy működő platformra alakítjuk.

## A Hosting Kiválasztása {#choosing-your-hosting}

A hosting választásának fontossága egy szakterületi platform esetén nagyobb, mint egyetlen weboldal esetén. Nem egyetlen oldalt héber, hanem egy hálózatot héber, amely költözhet rajzoltakra vagy akár több száz oldalra.

### Mire kell figyelni {#what-to-look-for}

- **WordPress Multisite támogatás**: Nem minden host kezeli jól a multisite-ot
- **Wildcard SSL**: Elengedhetetlen a subdomain alapú hálózatokhoz
- **Skálázható erőforrások**: Neked van szükség növekedési helyre anélküli migrálásra
- **Ultimate Multisite integráció**: Az automatikus domain mapping és SSL jelentősen csökkenti az üzemeltetési munkát

### Ajánlott megközelítés {#recommended-approach}

Válassz egy hostot a [Compatible Providers](/user-guide/host-integrations/closte) listából. Ezeket Ultimate Multisite-tal tesztelték, és biztosítják az integrációkat, amelyekre szükséged van a domain mapping és az SSL automatizációhoz.

A FitSite-hoz subdomain konfigurációt fogunk használni. Ez azt jelenti, hogy az ügyfél oldalai kezdetben `studionév.fitsite.com` címen jelennek meg, mielőtt opcionálisan saját domainjukat mappaizálnának.

## WordPress Multisite Telepítése {#installing-wordpress-multisite}

Ha még nem van telepítve WordPress Multisite:

1. Telepítsd ki a WordPress-et a hosting szolgáltatódon
2. Követted a [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) útmutatót
3. Válassz **subdomain** konfigurációt, amikor megkérdik

:::tip Miért Subdomainek?
A subdomainek minden ügyfél oldalának saját, különálló címét adnak (`studio.fitsite.com`), nem pedig egy útvonalat (`fitsite.com/studio`). Ez professzionálisabb az ügyfeleid számára, és elkerüli a permalink konfliktusokat. Látogass el a [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) oldalra egy részletes összehasonlításért.
:::

## Ultimate Multisite Telepítése {#installing-ultimate-multisite}

Kövesd a [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) útmutatót, hogy:

1. Feltöltd és aktiválod a plugin-et hálózat-szinten
2. Futatod a [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

A setup wizard alatt tartsd szem előtt a FitSite körzetét:

- **Currency**: Állítsd be a pénznemet, amelyet a fitness stúdió ügyfeleid használnak
- **Company name**: "FitSite" (vagy a választott márkanéved)
- **Company logo**: Feltöltd a márka logódat – ez látható az árajánlatokon és az e-mailküldeményekben

## Konfiguráció a Fitness Körzethez {#configuring-for-the-fitness-niche}

Miután telepítetted az Ultimate Multisite-ot, végezd el ezeket a körzetre specifikus konfigurációs lépéseket:

### Általános Beállítások {#general-settings}

Navigálj az **Ultimate Multisite > Settings** oldalra, és állítsd be:

- **Site name**: FitSite
- **Default role**: Administrator – a fitness stúdió tulajdonosok teljes kontrollra van szükségük az oldal tartalmán
- **Registration**: Aktiválj felhasználói regisztrációt, hogy a stúdió tulajdonosok maguk jelentkezhessenek

### E-mail Konfiguráció {#email-configuration}

A rendszer e-mailjeidnek a körzeted nyelvét kell beszélniük. Navigálj az **Ultimate Multisite > Settings > Emails** oldalra, és szabásoldalaz:

- Cseréld ki a általános "your new site" szöveget fitness-specifikus üzenetekre
- Példa üdvözlő tárgy: "Az Ön fitness stúdió weboldala készen áll"
- Példa üdvözlő szöveg: Hivatkozzanak a stúdiójukra, óráira és arra, hogyan kezdjenek el a fitness oldalukkal

Ezeket később finomítjuk a 8. Bölmében (Ügyfél Onboarding), de a hangnem beállítása most biztosítja, hogy még az első teszt-regisztrációk is körzetre specifikusnak tűnjenek.

### Domain Konfiguráció {#domain-configuration}

Ha kompatibilis hosting szolgáltatót használsz, állítsd be a domain mapping-et most:

1. Navigálj az **Ultimate Multisite > Settings > Domain Mapping** oldalra
2. Kövesd az integrációs útmutatót a konkrét hostodhoz
3. Teszteld, hogy az új subsite-ok automatikusan kapnak SSL-t

Ez biztosítja, hogy amikor a következő bölségeben commencerünk a sablonok és tesztoldalak létrehozását, minden végigmeneti módon működik.

## A FitSite Hálózat Állapotának {#the-fitsite-network-so-far}

Ebben a bölségen végéig ez áll rendelkezésedre:

```
FitSite Network
├── WordPress Multisite (subdomain mód)
├── Ultimate Multisite (telepítve és konfigurálva)
├── Hosting wildcard SSL-lel
├── Konfigurált domain mapping
├── Körzetre specifikus e-mail sablonok (kezdő)
└── Készenléti állapotban a site sablonokhoz (következő bölség)
```

## Amit Építettünk Ebben a Bölségen {#what-we-built-this-lesson}

- **Egy működő WordPress Multisite** telepítés subdomain módban
- **Ultimate Multisite telepítve** és konfigurálva a FitSite márkájával
- **Hosting és SSL** beállítva egy növekvő hálózat számára
- **Domain mapping** konfigurálva a hosting szolgáltatóhoz
- **Körzetre specifikus e-mail hangnem** kialakítása az első naptól kezdve

---

**Következő:** [4. Bölség: Körzetre Specifikus Sablonok Építése](lesson-4-templates) – itt létrehozunk olyan site sablonokat, amelyeket a fitness stúdió tulajdonosok valóban használni akarnak.
