---
title: Poznámky k vydání
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Release Notes

## Version 2.12.0 — Released on 2026-05-15

- Nové: Přidán Hostinger (hPanel) jako podporovaný poskytovatel hostingu s integrací mapování domény
- Nové: Site Exporter nyní zpracovává balíčky importu sítě pro zjednodušenou obnovu webu v celé síti
- Oprava: E-maily rozesílané pomocí BCC nyní používají hlavičku undisclosed-recipients, aby se zabránilo odhalení adres příjemců
- Oprava: Datum vypršení členství již není poškozeno při ukládání s neplatnou hodnotou (ne-datum)
- Oprava: Aktualizace členství Stripe nyní správně vymažou slevy bez volání zastaralého API deleteDiscount
- Oprava: Přesměrování SSO na stránkách s mapovanou doménou je nyní omezeno, aby se zabránilo nekonečným smyčkovým přesměrováním
- Oprava: Výběr obrázku v průvodci nastavení nyní správně aktualizuje základní model dat
- Oprava: Site Exporter CLI nyní zachovává správný výchozí výběr sítě
- Vylepšeno: Odebrán balíček wp-cli z balíčku pluginu, což snižuje velikost pluginu

## Version 2.11.0 — Released on 2026-05-11

- Nové: Exporty webu nyní balíčky self-bootujícího `index.php`, takže ZIP lze nainstalovat na čerstvějším hostingu bez samostatné instalace pluginu.
- Nové: Export sítě umožňuje administrátorům exportovat všechny podstránky v jednom archivu z panelu administrátora Site Export.
- Nové: Přepínač pro plán Site Templates je nyní vynucován pomocí fallback řetězce, což správně omezuje dostupnost šablon pro limity plánu.
- Nové: Editor formuláře pro pokladnu varuje, když je přidán produkt bez nakonfigurovaného povinného pole.
- Nové: Záložka nastavení Import/Export nyní jasně popisuje svůj rozsah a přímo odkazuje na nástroj Site Export.

## Version 2.10.0 — Released on 2026-05-05

- Nové: Průvodní wizard nastavení PayPal pro manuální zadávání údajů o ověřování s bránou přepínače OAuth pro bezproblémovou konfiguraci brány.
- Nové: Panel zákazníka pro přepínání šablon byl přepracován s kartou aktuální šablony, trvalým mřížkovým rozložením a tlačítkem **Reset current template**.
- Oprava: Přepínání šablon už neuvízne uživatelské rozhraní při selhání AJAX.
- Oprava: Stav povolení přepínání šablon je zabezpečen proti neoprávněnému přístupu.
- Oprava: Vstupy nadpisování stránky jsou ověřovány před ukladáním.
- Oprava: Okno s popisem fakturační adresy je nyní zobrazeno, když je adresa prázdná.
- Oprava: Vyřešeno upozornění na zastarání null-to-string v PHP 8.1.
- Oprava: Currents je nyní načítáno lazy před hookem init, aby se zabránilo časovým problémům.
- Oprava: Filtrovaná cesta SSO je respektována napříč všemi toky přihlášení.
- Oprava: Možnosti identity prázdné stránky jsou zachovány při ukládání.

## Version 2.9.0 — Released on 2026-04-30

- Nové: Přidáno export a import jedné stránky pod **Tools > Export & Import**.
- Oprava: ZIP soubory exportu jsou nyní poskytovány přes autentizovaný endpoint pro stahování.
- Oprava: Opraveno riziko SQL injekce a problémy se dotazy v čekajících dotazích na export/import.
- Oprava: Čekající stránka není publikována, když administrátor ručně ověří e-mail zákazníka.
- Oprava: Vyčištěny sirotované záznamy pending_site, když chybí členství.
- Oprava: Opraveno vybledí navigace nastavení a navigace pomocí kotvy vyhledávání.
- Oprava: Čekající stránky jsou nyní zobrazeny jako první v přehledu všech stránek.
- Oprava: Přidán User-Agent hlavička poskytovatele snímků (mShots), aby se zabránilo chybám 403.
- Oprava: Vyřešena kruhová závislost plánu cron importu.
- Oprava: ID prohlídek normalizovány na podtržítka v klíčích nastavení uživatele.
- Vylepšeno: Nyní je použito ZipArchive namísto Alchemy/Zippy pro lepší kompatibilitu.

## Version 2.8.0 — Released on 2026-04-29

- Nové: Přidán přepínač Enable Jumper do UI nastavení Other Options.
- Nové: Přidána sloupce stavu do tabulky seznamu formulářů pro pokladnu.
- Nové: Loader souborů addon sunrise pro vlastní MU-plugin sunrise rozšíření.
- Vylepšeno: Odebrána možnost povolení reportování chyb ze stránky nastavení.
- Oprava: Použití obrázku na stránce děkuji — nyní je omezeno a odkazy jsou správně stylizovány.
- Oprava: Poskytovatel snímků přepnut z thum.io na WordPress.com mShots.
- Oprava: Enable Registration a Default Role nyní nastavují správné výchozí hodnoty při čerstvém nainstalování.
- Oprava: `get_site_url()` již nevrací prázdný řetězec, když doména obsahuje port.
- Oprava: Klonování souborů média je nyní kopírováno správně, když byl nastavený `copy_media` prázdný.
- Oprava: Objektová cache je nyní správně neplatná po zápisu sitemeta network-activate.
- Oprava: Vlastní doména je automaticky promitována na primární při ověření DNS pro domény s 3 díly.
- Oprava: Členství v čekání je zrušeno, když je vyčištěn vypršující platba.
- Oprava: Kontrolér síly hesla je znovu připojen po zavření inline promptu pro přihlášení.
- Oprava: Zastaveno nekonečné obnovování stránky na stránce děkuji, když je stránka již vytvořena.
- Oprava: Možnost registrace WP core je synchronizována při aktivaci pluginu a ukládání nastavení.
- Oprava: Přidána ochrana proti nulovému vypršení v `calculate_expiration` pro kompatibilitu s PHP 8.4.
- Oprava: Zduplikované registrace jsou blokovány, když zákazník již má aktivní členství.
- Oprava: Přidána kontrola nul pro `date_expiration` v pokladně.
- Oprava: Zpevněno provisionování stránky — limity, odvození členství, promitování domény.
- Oprava: Statusní štítek předinstalace je opraven na NOT Activated, když selže kontrola.
- Oprava: Používá se doména pokladny pro URL ověření e-mailu.
- Oprava: Automatické přihlášení po pokladně, když není přítomno pole pro heslo.
- Oprava: Bezplatné členství již neuzniká — je považováno za doživotní.
- Oprava: Brána ověření e-mailu zadržuje publikaci stránky, dokud zákazník e-mail neověří.
- Oprava: Opravena základní cesta endpointu API SES v2 a cesta identity.
- Oprava: Hook `wu_inline_login_error` je emitován v bloku zachycení před odesláním.
