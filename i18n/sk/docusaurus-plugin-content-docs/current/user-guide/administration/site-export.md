---
title: Export stránky
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportovanie siete

Administratívna stránka **Site Export** vám umožňuje balíť jednu sieti, alebo celú sieti, do stiahnutelného archívu na migrácie, zálohy alebo pre odovzdanie práce.

## Exportovanie jednej siete

Prejdite do **Ultimate Multisite > Site Export** a vyberte **Generate new Site Export**. Vyberte podsieti, ktorú chcete exportovať, potom si vyberte, či by archív mal obsahovať súbory, pluginy a témy.

Keď skončí export, stiahnite ZIP z tabuľky **Existing Exports**. Exportné ZIP sú teraz vybavené samostatným `index.php` pre samostartovanie a súborom `readme.txt`, takže archív môžete začať na novom hoste bez toho, aby ste najprv nainštalovali samostatný plugin importéra.

## Exportovanie celej siete

Použite **Network Export** na stránke Site Export, ak potrebujete jeden archív obsahujúci všetky podsiety v sieti. Toto je užitočné pred migraciou hostov, testovaním obnovy po katastrofe alebo pri reconstrukciach stagingu, kde sa každá podsieta musí prenášať spolu.

Keďže export siete môže byť oveľa väčší ako export jednej siete, vykonajte ho počas obdobia s nízkou návštevnosťou a potvrďte, že cieľové ukladacie miesto má dostatočnú voľnú plochu na súbory pre načítanie, pluginy, témy a generované ZIP súbory.

### Network Import Bundles (Balúčky importov siete)

Od verzie Ultimate Multisite 2.12.0 je Site Exporter schopný generovať **network import bundles** — špecializované archívy navrhnuté na uplynulý import sieti celého siete. Network import bundle obsahuje všetky potrebné súbory a metadát na obnovenie viacerých sietí do nového inštalovania siete.

#### Generovanie network import bundle (Generovanie balúčky importu siete)

1. Prejdite do **Ultimate Multisite > Site Export**
2. Kliknite na **Generate new Network Export** (Vytvorte nový export siete)
3. Vyberte jako typ exportu **Network Import Bundle** (Balík importu siete)
4. Vyberte, zda chcete zahrnout přílohy (uploads), pluginy a temy
5. Klikněte na **Generate** (Vytvořit)
6. Stáhněte si balík ZIP z nabídky **Existing Exports** (Existující exporty)

#### Způsob obnovy z Network Import Bundle

Abychom obnovili sítě z balíku importu siete:

1. Nainstalujte Ultimate Multisite na svůj cílový host
2. Dokončte průvodce instalací multisite
3. Přejděte do **Ultimate Multisite > Site Export** na nové síti
4. Klikněte na **Import Network Bundle** (Import balíku siete)
5. Nahrajte ZIP soubor s network import bundle
6. Sledujte pokyny pro import z obrazovky
7. Proces importu obnoví všechny sítě, jejich obsah a konfiguraci

Network import bundles zachovávají:
- Obsah sítí (příspěvky, stránky, vlastní typy příspěvků)
- Nastavení a možnosti sítí
- Role a oprávnění uživatelů
- Pluginy a temy (pokud jsou zahrnuty v balíku)
- Přílohy médií (pokud jsou zahrnuty v balíku)
- Vlastní databáze a tabulky

## Instalace ZIP exportu pro samostatně spouštěcí se instalaci na novém hostovi

Abychom obnovili ZIP soubor pro samostatnou instalaci na čerstvém hostu:

1. Nahrajte obsah exportovaného ZIP do kořenového adresáře webu (web root).
2. Otevřete nahraný `index.php` v prohlížeči.
3. Sledujte pokyny pro instalátor z balíku exportovací balíčky na obrazovce.
4. Pro kontrolę specifických poznámek pro export si přečtěte bundled `readme.txt` před odstraněním dočasných souborů.

Pro detaily instalace a importu konkrétních addonů se podívejte do [Site Exporter addon documentation](/addons/site-exporter).

Pro nástroj pro jednu síť přidaný v Ultimate Multisite 2.9.0 se podívejte na [Export & Import](/user-guide/administration/export-import).
