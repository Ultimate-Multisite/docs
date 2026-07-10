---
title: Export a Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportace a importace {#export--import}

Ultimate Multisite 2.9.0 přidává nástroj **Exportace a importace** pro jednorázový web na stránce **Nástroje > Exportace a importace**. Použijte ho, když potřebujete zabalit jeden WordPress web jako ZIP soubor, obnovit tento ZIP, nebo přesunout web mezi kompatibilními instalacemi Ultimate Multisite a jednorázového WordPressu.

## Požadovaná oprávnění {#required-permissions}

Musíte se přihlásit jako administrátor, který má přístup k menu **Nástroje** v WordPressu na webu, který exportujete nebo importujete. Na multisite síti používejte účet síťového administrátora při exportu nebo importu podstráněk pomocí nástrojů Ultimate Multisite na úrovni sítě.

Stahování ZIP souborů je poskytováno přes ověřený endpoint pro stahování, takže udržujte aktivní administrátorskou relaci, dokud se stahování neúkona, a veřejně sdílejte vygenerované URL adresy pro stahování.

## Exportace webu do ZIP {#exporting-a-site-to-a-zip}

1. Na administraci WordPressu webu, který chcete zkopírovat, přejděte na **Nástroje > Exportace a importace**.
2. Otevřete oblast exportu a vyberte web, který chcete zabalit.
3. Vyberte volitelný obsah, který chcete zahrnout, například nahrání, pluginy a téma, pokud jsou takové možnosti dostupné.
4. Spusťte export a počkejte, dokud se proces neúkona. Velké weby mohou trvat v pozadí, než bude ZIP připraven.
5. Stáhněte dokončený ZIP ze seznamu exportů.

Uložte ZIP na zabezpečeném místě. Může obsahovat obsah webu, nastavení, média a vybrané kódové prvky.

## Co export zahrnuje {#what-the-export-includes}

Export ZIP může obsahovat:

- Databáze a konfigurace vybraného webu.
- Nahrávané média, pokud jsou zahrnuty nahrání.
- Pluginy a téma, pokud jsou vybrány tyto možnosti.
- Metainformace pro import, které nástroj Exportace a importace používá k rekonstrukci webu na cílové instalaci.

Přesný rozměr ZIP závisí na množství médií, vybraných pluginů a témat a velikosti tabulek databáze webu.

## Importace webu z ZIP {#importing-a-site-from-a-zip}

1. Na cílové instalaci WordPressu přejděte na **Nástroje > Exportace a importace**.
2. Otevřete oblast importu a nahrajte ZIP soubor vytvořený nástrojem Exportace a importace.
3. Zadejte náhradní URL, pokud má web používat novou adresu, nebo nechte pole prázdné, abyste zachovali původní URL.
4. Vyberte, zda chcete nahraný ZIP smazat po dokončení importu.
5. Klikněte na **Začít import**.
6. Monitorujte čekající import, dokud nedokončí. Používejte **Zrušit import** pouze tehdy, když potřebujete zastavit proces před dokončením.
7. Projděte importovaný web, než umožníte normální provoz nebo přístup zákazníkům.

Na instalaci WordPressu pro jednorázový web nahrazení ZIP nahradí aktuální web importovaným webem. Před zahájením vytvořte kompletní zálohu cílového webu a vyhněte se spouštění více importů pro stejný web současně.

## Omezení a poznámky k kompatibilitě {#limitations-and-compatibility-notes}

- Velké adresáře nahrání nebo médiátéky mohou vytvořit velké ZIP soubory. Před exportováním nebo importováním velkých webů ověřte limity nahrání PHP, limity provedení, diskový prostor, paměť a nastavení časového limitu serveru.
- Velké médiátéky je může být nutné přesunout během údržbového okna s nízkým provozem.
- Cílová instalace WordPressu by měla běžet s kompatibilními verzemi WordPressu, PHP, Ultimate Multisite, pluginů a témat.
- Importace pro jednorázový web nahrazuje cílový web. Není to nástroj pro slučování.
- Přesuny z multisite na jednorázový web a z jednorázového webu na multisite jsou podporovány pouze tehdy, když cílové prostředí dokáže spravovat pluginy, témata, URL adresy a požadované komponenty Ultimate Multisite exportovaného webu.
- Udržujte ZIP soubor soukromý. Může obsahovat obsah databáze, nahrávané soubory a konfigurační detaily z exportovaného webu.

Pro starší pracovní postupy exportu na úrovni sítě viz [Exportace webu](/user-guide/administration/site-export).
