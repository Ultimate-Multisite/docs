---
title: Multisaitų įdiegimo vadovas
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Konfigūracijos Vizardas {#multisite-setup-wizard}

Ultimate Multisite įdaliui yra įtrauktas vizardas, kuris automatiškai konvertuoja standartinį WordPress įrenginį į WordPress Multisite tinklą. Tai eliminuoja būtinybį rankiniu būdu redaguoti `wp-config.php` arba eseguire duomenų bazos komandas.

:::tip
Jei jūsų WordPress įrenginimas jau veikia kaip Multisite tinklas, galite šį etapą visiškai praleisti. Vizardas pasirodys tik tada, kai Multisite nėra įjungtas.
:::

## Kai Pasirinktas Vizardas? {#when-does-the-wizard-appear}

Kai įjungate Ultimate Multisite standartini (ne-Multisite) WordPress įrenginyje, plėkštukas pamatys, kad Multisite nėra įjungtas ir automatiškai pateiks jus į Multisite Setup Wizard instead of regular setup wizard.

Jį galite taip pat pasiekti tiesiogiai per **WP Admin > Ultimate Multisite > Multisite Setup**.

## Reikalavimai {#prerequisites}

Prieš pradėdami vizardą, užtikrinkite:

- Jame yra **administratorinis prieiga** prie jūsų WordPress įrenginio
- Jūsų serverio `wp-config.php` failas yra **rašomas** web serveriu
- Jame turite **naują rezervą** savo failams ir duomenų bazai

:::warning
Vizardas keičia jūsų `wp-config.php` failą ir sukuria naujus duomenų bazos santykius (tables). Taiverskite rezervą prieš tęsdami veiksmus.
:::

## Etapas 1: Prisijungimas {#step-1-welcome}

Pirmas ekranas paaiškinas, kas yra WordPress Multisite ir ką vizardas padary:

- Įjunkite Multisite funkciją jūsų WordPress konfigūracijoje
- Sukurkite reikalingus tinklo duomenų bazos santykius (tables)
- Pridėkite reikiamus multisite konstantas į `wp-config.php`
- Tinklo įjunkimas Ultimate Multisite po visame tinklu

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Spauskite **Tęsti** (Continue), kad tęstumėte.

## Etapas 2: Tinklo Konfigūracija {#step-2-network-configuration}

Šis etapas siūlo nustatyti jūsų tinklo parametrus.

### Sistemos struktūra {#site-structure}

Kiek tiek pasirinkta, kaip jūsų tinklo svetainės bus saugomos:

- **Subdomėniai** (Rekomenduojama) — Svetainė gauta savo subdomėnį, pavyzdžiui `site1.yourdomain.com`
- **Subdirektoriai** — Svetainės sukuriamas kaip žymos, pavyzdžiui `yourdomain.com/site1`

:::note
Jei pasirinkote subdomėnius, jums reikės nustatyti **wildcard DNS** ir **wildcard SSL sertifikatą** savo domenui. Dažnai išjungti WordPress hostai to atlieka automatiškai. Pakeiskite [Ultimate Multisite 101](./ultimate-multisite-101) lentelėje, jei norite gilių įžvalgų.
:::

### Tinklo pavadinimas {#network-title}

Įveskite pavadinimą jūsų tinklui. Pagal toje nurodytas jūsų dabartinis svetainės pavadinimas su pridėtu "Network". Galite pakeisti tai vėliau iš nustatymų tinklo.

### Tinklo administratoriaus el. pašto adresas {#network-admin-email}

El. pašto adresas, naudojamas tinklo administravimo pranešimams. Pagal toje nurodytas dabartinis vartotojo el. pašto adresas.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Įrašę laukus, spustelėkite **Tęsti**, kad grindėte procesą.

## Kaiestas 3: Instalaция {#step-3-installation}

Spustelėkite mygtuką **Instaluoja**, kad pradėtumėte. Wizard atliks penki automatizuotus veiksmus be sustojimo, ir kiekviena iš jų rodo savo progresą realiu laiku:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Krok | Aprašymas |
|------|-------------|
| **Įjunkite Multisite** | Įdėkite konstanta `WP_ALLOW_MULTISITE` į dalfą `wp-config.php` |
| **Sukurkite Tęskmį (Network)** | Sukurkite duomenų bazos lentelėms (`wp_site`, `wp_sitemeta`, `wp_blogs` ir kitoms) ir užpildykite juos savo tinklo konfigūracijos duomenimis |
| **Atnaujinkite Konfigūraciją** | Įdėkite galutinę multisite konstantas į `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` ir kitas) |
| **Taipykite Cookie'us** | Užtikrinkite, kad svetainės URL yra teisingas tinklo metadatos (network metadata) – tai padės išvengti autentifikacijos problemų po įjunkimo |
| **Įjunkite Tinklo Pluginą** | Įjunkite Ultimate Multisite, kad jis veiktų visame tinkluose |

Kiekvienas kрокas rodo vieną iš šių būstatus:

- **Pending (Tikrinamas)** — Čaklius laukia apdorojimo
- **Installing... (Įdėja...)** — Dar vyksta
- **Success! (Sėkmingai!)** — Sukaupta sėkmingai
- **Error message (Klaida)** — Nastartų klaida (pranešimas apibūdina problemą)

Kai visi kairiai bus sukaupti sėkmingai, jūs pamatysite žalią „Success!“ būstatą kiekvienam elementui:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Tada vizorius automatiškai tęsinės į užbaigimo ekraną.

## Krokas 4: Užbaigti {#step-4-complete}

Kai įdėja bus baigtas, pamatysite sėkmės pranešimą, kuris patvirtina, kad WordPress Multisite yra įjunkas.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Dabar galite tęsti Ultimate Multisite nustatymo vizoriumi ir konfigūruoti savo WaaS platformą (kompanijos duomenys, pagrindinis turinys, mokėjimo persilgaus, ir kitas).

:::note
Multisite instalacija baigta požiūrėtoje instaliacijos pabaigoje jūsų naršėjas bus perdirbtas į naujai įjungtą tinklo administratorį. Galbūt jums vėl reikės prisiųsti, nes autentifikavimo slapukai atnaujinami multisite aplinkvai.
:::

## Manual Setup Fallback (Manual nustatymo alternatyva) {#manual-setup-fallback}

Jei žaida negali įrašyti į jūsų `wp-config.php` failą (dėl failų įgaliojimų ar serverio restrančių), jis pateiks tikslų kodą, kurį turite pridėti manuai:

1. **wp-config.php konstanta**, kurias reikia pridėti virš jūsų `/* That's all, stop editing! */` eilutės
2. **.htaccess rewrite taisyklės**, tinkamos jūsų pasirinktam svetainės struktūrai (subdomėniumi ar subdirektoriu)

Po atlikimo manuali pakeitimus atsisiųskite puslapį, ir žaida pamatys, kad multisite dabar yra aktyvus.

## Troubleshooting (Problemos iššvaistymo) {#troubleshooting}

### Žaida sako, kad wp-config.php nėra įrašomas (wp-config.php is not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Jūsų svetainės serverio procesui reikia rašimo įgaliojimų į `wp-config.php` failą. Jūs galite:

- Laikiai pakeisti failų įgaliojimus į `644` arba `666`
- Naudoti manuallinio nustatymo alternatyvos, pateiktos žaida
- Prašyti jūsų hostingo tiekėvas pagalbos

### Svetai nėra pasiekiami po nustatymo (subdomėniumi) {#sites-are-not-accessible-after-setup-subdomains}

Jei pasirinkote subdomėnumų struktūrą, jums reikia nustatyti **wildcard DNS** savo domenui. Pridėkite DNS įrašą:

```
Type: A (ar CNAME)
Host: *
Value: [jūsų serverio IP]
```

Patikrinkite su jūsų hostingo tiekėvu, jei esate nepatikini, kaip nustatyti šį.

### Autentifikavimo problemas po nustatymo {#authentication-issues-after-setup}

Jei esate išloguoti arba susiranki slapukų klaidos po multisite nustatymą:

1. Pakeiskite naršėtojo slapukus svetainės
2. Vėl prisiųskite į `yourdomain.com/wp-login.php`
3. Jei problema laiko, patikrinkite, kad jūsų `wp-config.php` nėra nustatytas `COOKIE_DOMAIN` = `false` – tai yra žinoma problema subdomėniumi naudojant multisite instaliacijose

### Viena veikla nepasiekė instalacijos metu {#a-step-failed-during-installation}

Jei vienas įdiegimo žingsni rodo klaidą:

1. Užakirkite ir zapiskite rodomą klaidos pranešimą.
2. Grįžkite prie nustatymų žingsnio ir bandykite vėl.
3. Jei klaida vis dar yra, patikrinkite savo serverio PHP klaidų logą gauti daugiau informacijos.
4. Vaisiai atlikti žingsnius bus praleisti saugiasse (įdiegimo procesas yra idempotentas).
