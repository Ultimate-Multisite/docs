---
title: 'Lekcia 3: Nastavenie vašej siete'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lekcia 3: Nastavenie vašej siete

Čas začať budovať. V tejto lekcii nainštalujete Ultimate Multisite a nakonfigurujete základ siete FitSite. Každé rozhodnutie je tu robené s ohľadom na fitness niku.

## Kde sme skončili {#where-we-left-off}

Vybrali sme si fitness štúdiá ako našu niku a overili sme príležitosť. Teraz túto myšlienku premeníme na fungujúcu platformu.

## Výber hostingu {#choosing-your-hosting}

Voľba hostingu je pre platformu v nike dôležitejšia než pre jeden web. Nehostujete jeden web -- hostujete sieť, ktorá narastie na desiatky alebo stovky webov.

### Na čo sa zamerať {#what-to-look-for}

- **Podpora WordPress Multisite**: Nie všetci poskytovatelia hostingu zvládajú multisite dobre
- **Wildcard SSL**: Nevyhnutné pre siete založené na subdoménach
- **Škálovateľné zdroje**: Potrebujete priestor na rast bez migrácie
- **Integrácia Ultimate Multisite**: Automatizované mapovanie domén a SSL šetrí významné prevádzkové úsilie

### Odporúčaný prístup {#recommended-approach}

Vyberte si poskytovateľa hostingu zo zoznamu [Kompatibilných poskytovateľov](/user-guide/host-integrations/closte). Títo boli otestovaní s Ultimate Multisite a poskytujú integrácie, ktoré potrebujete na mapovanie domén a automatizáciu SSL.

Pre FitSite použijeme konfiguráciu subdomén. To znamená, že zákaznícke weby sa najprv zobrazia ako `studioname.fitsite.com`, než si voliteľne namapujú vlastnú doménu.

## Inštalácia WordPress Multisite {#installing-wordpress-multisite}

Ak ešte nemáte inštaláciu WordPress Multisite:

1. Nainštalujte WordPress u svojho poskytovateľa hostingu
2. Postupujte podľa príručky [Ako nainštalovať WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Keď budete vyzvaní, vyberte konfiguráciu **subdomény**

:::tip Prečo subdomény?
Subdomény dávajú každému zákazníckemu webu vlastnú samostatnú adresu (`studio.fitsite.com`) namiesto cesty (`fitsite.com/studio`). Pre vašich zákazníkov to pôsobí profesionálnejšie a zabraňuje konfliktom permalinkov. Podrobné porovnanie nájdete v [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Inštalácia Ultimate Multisite {#installing-ultimate-multisite}

Postupujte podľa príručky [Inštalácia Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite), aby ste:

1. Nahrali a aktivovali plugin v celej sieti
2. Spustili [Sprievodcu nastavením](/user-guide/getting-started/multisite-setup-wizard)

Počas sprievodcu nastavením majte na pamäti niku FitSite:

- **Mena**: Nastavte menu, ktorú používajú vaši zákazníci z fitness štúdií
- **Názov spoločnosti**: „FitSite“ (alebo vami zvolený názov značky)
- **Logo spoločnosti**: Nahrajte logo svojej značky -- zobrazí sa na faktúrach a v e-mailoch

## Konfigurácia pre fitness niku {#configuring-for-the-fitness-niche}

Keď je Ultimate Multisite nainštalovaný, urobte tieto konfiguračné voľby špecifické pre niku:

### Všeobecné nastavenia {#general-settings}

Prejdite do **Ultimate Multisite > Nastavenia** a nakonfigurujte:

- **Názov webu**: FitSite
- **Predvolená rola**: Administrátor -- majitelia fitness štúdií potrebujú plnú kontrolu nad obsahom svojho webu
- **Registrácia**: Povoľte registráciu používateľov, aby sa majitelia štúdií mohli zaregistrovať sami

### Konfigurácia e-mailov {#email-configuration}

Vaše systémové e-maily by mali hovoriť jazykom vašej niky. Prejdite do **Ultimate Multisite > Nastavenia > E-maily** a prispôsobte:

- Nahraďte všeobecné formulácie typu „váš nový web“ správami špecifickými pre fitness
- Príklad predmetu uvítacieho e-mailu: „Web vašho fitness štúdia je pripravený“
- Príklad tela uvítacieho e-mailu: Odkážte na ich štúdio, lekcie a začiatok práce s ich fitness webom

Tieto texty ďalej vylepšíme v Lekcii 8 (Onboarding zákazníkov), ale nastavenie tónu už teraz zabezpečí, že aj prvé testovacie registrácie budú pôsobiť špecificky pre niku.

### Konfigurácia domén {#domain-configuration}

Ak používate kompatibilného poskytovateľa hostingu, nakonfigurujte mapovanie domén už teraz:

1. Prejdite do **Ultimate Multisite > Nastavenia > Mapovanie domén**
2. Postupujte podľa integračnej príručky pre svojho konkrétneho poskytovateľa hostingu
3. Otestujte, či nové podweby automaticky dostanú SSL

Tým zabezpečíte, že keď v ďalšej lekcii začneme vytvárať šablóny a testovacie weby, všetko bude fungovať od začiatku do konca.

## Sieť FitSite zatiaľ {#the-fitsite-network-so-far}

Na konci tejto lekcie máte toto:

```
Sieť FitSite
├── WordPress Multisite (režim subdomén)
├── Ultimate Multisite (nainštalovaný a nakonfigurovaný)
├── Hosting s wildcard SSL
├── Mapovanie domén nakonfigurované
├── E-mailové šablóny špecifické pre niku (počiatočné)
└── Pripravené na šablóny webov (ďalšia lekcia)
```

## Čo sme v tejto lekcii vybudovali {#what-we-built-this-lesson}

- **Fungujúcu inštaláciu WordPress Multisite** v režime subdomén
- **Nainštalovaný Ultimate Multisite** a nakonfigurovaný so značkou FitSite
- **Hosting a SSL** nastavené pre rastúcu sieť
- **Mapovanie domén** nakonfigurované pre vášho poskytovateľa hostingu
- **Tón e-mailov špecifický pre niku** zavedený od prvého dňa

---

**Ďalej:** [Lekcia 4: Tvorba šablón pre niku](lesson-4-templates) -- vytvoríme šablóny webov, ktoré budú majitelia fitness štúdií skutočne chcieť používať.
