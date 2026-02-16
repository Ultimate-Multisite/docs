---
title: Migrace z V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrace z verze V1

## Ultimate Multisite přešel z původní řady verzí 1.x na řadu verzí 2.x.

Ultimate Multisite verze 2.0 a novější je kompletně přepsaný kód, což znamená, že stará a nová verze mají jen velmi málo společného. Proto je při upgradu z verze 1.x na 2.x potřeba převést vaše data do formátu, kterému nové verze rozumí.

Naštěstí Ultimate Multisite 2.0+ **obsahuje nástroj pro migraci** přímo v jádru, který dokáže rozpoznat data ze staré verze a převést je do nového formátu. Migrace probíhá během **Průvodce nastavením** ve verzi 2.0+.

Tato lekce popisuje, jak nástroj pro migraci funguje, co dělat v případě selhání a jak řešit problémy, které mohou během tohoto procesu nastat.

_**DŮLEŽITÉ: Než začnete s upgradem z verze 1.x na verzi 2.0, nezapomeňte si vytvořit zálohu databáze vašeho webu**_

## První kroky

Prvním krokem je stáhnout .zip soubor pluginu a nainstalovat verzi 2.0 v administraci vaší multisite sítě.

Po [instalaci a aktivaci verze 2.0](../getting-started/installing-ultimate-multisite.md) systém automaticky rozpozná, že vaše Multisite běží na starší verzi, a v horní části stránky pluginu se zobrazí tato zpráva.

_**POZNÁMKA:** Pokud máte na své Multisite nainstalovaný Ultimate Multisite 1.x, zobrazí se vám možnost nahradit plugin právě staženou verzí. Klikněte na **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Na další stránce uvidíte, jaké starší doplňky máte nainstalované spolu s verzí 1.x. Najdete zde informace o tom, zda je vaše verze kompatibilní s verzí 2.0, nebo zda je potřeba po migraci nainstalovat aktualizovanou verzi doplňku.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Až budete připraveni pokračovat, klikněte na tlačítko **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Poté se dostanete na stránku průvodce instalací s uvítacími zprávami. Stačí kliknout na **Get Started** a přejít na další stránku.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Po kliknutí na **Get Started** budete přesměrováni na stránku Kontroly před instalací. Zde uvidíte informace o vašem systému a instalaci WordPress a zjistíte, zda splňuje **požadavky Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Dalším krokem je zadat licenční klíč Ultimate Multisite a aktivovat plugin. Tím zajistíte, že na vašem webu budou dostupné všechny funkce včetně doplňků.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Po zadání klíče klikněte na **Agree & Activate**.

Po aktivaci licence můžete zahájit samotnou instalaci kliknutím na **Install** na další stránce. Tím se automaticky vytvoří potřebné soubory a databáze pro fungování verze 2.0.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## A teď samotná migrace

Nástroj pro migraci má zabudovanou bezpečnostní funkci, která zkontroluje celou vaši multisite síť a ujistí se, že všechna data Ultimate Multisite lze bez problémů migrovat. Kliknutím na tlačítko **Run Check** spustíte kontrolu.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Po provedení kontroly mohou nastat dvě situace: výsledek může být buď **s chybou**, nebo **bez chyby**.

### S chybou

Pokud se zobrazí chybová zpráva, budete muset kontaktovat náš tým podpory, který vám pomůže chybu opravit. Při vytváření tiketu nezapomeňte **přiložit protokol chyb**. Protokol si můžete stáhnout, nebo můžete kliknout na odkaz pro kontaktování našeho týmu podpory. Na pravé straně stránky se otevře widget nápovědy s předvyplněnými poli, včetně protokolů chyb v popisu.

_**Protože systém nalezl chybu, nebudete moci pokračovat v migraci na verzi 2.0. Můžete se vrátit k verzi 1.x a pokračovat v provozu vaší sítě, dokud nebude chyba opravena.**_

### Bez chyby

Pokud systém nenajde žádnou chybu, zobrazí se zpráva o úspěchu a tlačítko **Migrate** ve spodní části stránky, které vám umožní pokračovat v migraci. Na této stránce vám bude připomenuto, abyste si před pokračováním vytvořili zálohu databáze, což důrazně doporučujeme. Pokud už zálohu máte, klikněte na **Migrate**.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

A to je vše!

Můžete buď pokračovat v průvodci nastavením a aktualizovat logo a další věci ve vaší síti, nebo začít prozkoumávat menu Ultimate Multisite verze 2.0 a jeho nové rozhraní. Směle do toho a bavte se.
