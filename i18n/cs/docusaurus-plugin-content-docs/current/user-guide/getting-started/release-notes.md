---
title: Poznámky k vydání
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Poznámky k vydání

## Verze 2.13.0 — Vydáno dne 2026-06-05

- Nové: Přidána podpora sovereign-tenant pro toky zákaznického Account, checkoutu, fakturace, webu, faktury, přepínání šablon a mapování domén, aby tenant sítě mohly zákazníky u spravovaných akcí směrovat zpět na hlavní web.
- Nové: Přidány kontroly obnovovacích přihlašovacích údajů pro opakující se členství, aby brány mohly vypnout automatické obnovení, když chybí uložená fakturační dohoda, předplatné nebo vault token.
- Nové: Přidáno publikování přes loopback ověřené pomocí HMAC pro čekající vytvoření webu, aby bylo zřizování od checkoutu po web spolehlivější na hostinzích, kde jsou úlohy na pozadí zpožděné.
- Nové: Přidány rozšiřující body pro vývojáře pro SSO URL, základní domény checkout formuláře a automatické vytváření doménových záznamů.
- Oprava: SSO je spolehlivější napříč mapovanými doménami, anonymními návštěvami brokeru, odhlášením a konflikty závislostí mezi pluginy.
- Oprava: Čekající vytvoření webu se nyní zotaví ze zastaralých příznaků publikování a nezanechává zákazníky uváznuté na obrazovce vytváření webu.
- Oprava: Doménové záznamy se již nevytvářejí pro sdílené základní domény checkout formulářů a nepoužívané úlohy host-provider na pozadí se přeskočí, když není aktivní žádná integrace.
- Oprava: Okrajové případy checkoutu, fakturační adresy, resetu hesla, ověření e-mailu, přepínání šablon, prohlídek a zákaznického dashboardu už neblokují běžné zákaznické toky.
- Oprava: Hromadné e-maily nyní zachovávají příjemce v soukromí a zároveň se vyhýbají fatálním chybám SMTP/pluginu, když selžou seznamy příjemců nebo poštovní transporty.
- Oprava: Obnovení členství, zobrazení expirace a okrajové případy vybírání plateb se nyní vyhýbají okamžitým expiracím, pádům nebo opomenutým povinným platbám.
- Vylepšeno: Kompatibilita s WordPress je testována až do verze 7.0, produkční Vue assety jsou znovu sestaveny ze zdrojů npm a end-to-end pokrytí Cypress nyní procvičuje více toků checkoutu, nastavení, SSO a bran.

## Verze 2.12.0 — Vydáno dne 2026-05-15

- Nové: Přidán Hostinger (hPanel) jako podporovaný poskytovatel hostingu s integrací mapování domén
- Nové: Site Exporter nyní zpracovává balíčky importu sítě pro zjednodušené obnovení webů v celé síti
- Oprava: Hromadné e-maily BCC nyní používají hlavičku undisclosed-recipients, aby se zabránilo odhalení adres příjemců
- Oprava: Datum expirace členství se již nepoškodí při ukládání s hodnotou, která není datem
- Oprava: Aktualizace členství Stripe nyní správně mažou slevy bez volání zastaralého deleteDiscount API
- Oprava: Přesměrování SSO na webech s mapovanou doménou jsou nyní omezena, aby se zabránilo nekonečným smyčkám přesměrování
- Oprava: Výběr v nástroji pro výběr obrázků v průvodci nastavením nyní správně aktualizuje podkladový datový model
- Oprava: Site Exporter CLI nyní zachovává správný výběr výchozího síťového webu
- Vylepšeno: Odebrán přibalený wp-cli z balíčku pluginu, čímž se zmenšila velikost pluginu

## Verze 2.11.0 — Vydáno dne 2026-05-11

- Nové: Exporty webu nyní přibalují samo-spouštěcí `index.php`, takže ZIP lze nainstalovat na čerstvý hosting bez samostatné instalace pluginu.
- Nové: Export sítě umožňuje administrátorům exportovat všechny podweby v jednom archivu z administrační stránky exportu webu.
- Nové: Přepínač plánu Povolit šablony webu je nyní vynucován přes fallback řetězec, který správně omezuje dostupnost šablon podle limitů plánu.
- Nové: Editor checkout formuláře varuje, když je produkt přidán bez nakonfigurovaného povinného pole.
- Nové: Karta nastavení Import/Export nyní jasně popisuje svůj rozsah a odkazuje přímo na nástroj exportu webu.

## Verze 2.10.0 — Vydáno dne 2026-05-05

- Nové: Průvodce nastavením PayPal pro ruční zadání přihlašovacích údajů s OAuth flag gate pro hladkou konfiguraci brány.
- Nové: Zákaznický panel přepínání šablon byl přepracován s kartou aktuální šablony, trvalou mřížkou a tlačítkem **Resetovat aktuální šablonu**.
- Oprava: Přepínání šablon už nezasekne UI při selhání AJAX.
- Oprava: Stavy oprávnění přepínání šablon zabezpečeny proti neoprávněnému přístupu.
- Oprava: Vstupy přepsání webu ověřeny před uložením.
- Oprava: Výzva k zadání fakturační adresy se nyní zobrazí, když je adresa prázdná.
- Oprava: Vyřešena upozornění PHP 8.1 na zastaralé převody null na string.
- Oprava: Currents načítané lazy-loaded před init hookem, aby se předešlo problémům s časováním.
- Oprava: Filtrovaná cesta SSO respektována napříč všemi přihlašovacími toky.
- Oprava: Prázdné možnosti identity webu zachovány při uložení.

## Verze 2.9.0 — Vydáno dne 2026-04-30

- Nové: Export a import jednoho webu přidán pod **Nástroje > Export a import**.
- Oprava: Exportní ZIP soubory jsou nyní poskytovány přes ověřený endpoint pro stažení.
- Oprava: Opraveno riziko SQL injection a problémy s dotazy v dotazech čekajících exportů/importů.
- Oprava: Čekající web se nepublikoval, když administrátor ručně ověřil zákaznický e-mail.
- Oprava: Osiřelé záznamy pending_site se vyčistí, když členství chybí.
- Oprava: Odsazení navigace nastavení a navigace pomocí kotvy vyhledávání opraveny.
- Oprava: Čekající weby se nyní zobrazují jako první v zobrazení Všechny weby.
- Oprava: Přidána hlavička User-Agent poskytovatele snímků obrazovky (mShots), aby se předešlo chybám 403.
- Oprava: Vyřešena kruhová závislost plánování import cron.
- Oprava: ID prohlídek normalizována na podtržítka v klíčích uživatelských nastavení.
- Vylepšeno: Nyní se místo Alchemy/Zippy používá ZipArchive pro lepší kompatibilitu.

## Verze 2.8.0 — Vydáno dne 2026-04-29

- Nové: Přepínač Enable Jumper přidán do UI nastavení Other Options.
- Nové: Sloupec stavu přidán do tabulky seznamu formulářů checkoutu.
- Nové: Addon sunrise načítač souboru pro vlastní MU plugin sunrise rozšíření.
- Vylepšeno: Odebráno nastavení přihlášení k hlášení chyb ze stránky nastavení.
- Oprava: Karta webu na děkovací stránce — obrázek je nyní omezen a odkazy jsou správně stylované.
- Oprava: Poskytovatel screenshotů změněn z thum.io na WordPress.com mShots.
- Oprava: Enable Registration a Default Role nyní nastavují správné výchozí hodnoty při čerstvé instalaci.
- Oprava: `get_site_url()` už nevrací prázdnou hodnotu, když doména obsahuje port.
- Oprava: Mediální soubory klonu se nyní kopírují správně, když bylo nastavení `copy_media` prázdné.
- Oprava: Object cache je správně invalidována po zápisu sitemeta při aktivaci v síti.
- Oprava: Vlastní doména je při DNS ověření pro tříčásté domény automaticky povýšena na primární.
- Oprava: Čekající členství zrušeno, když je vyčištěna expirovaná platba.
- Oprava: Kontrola síly hesla znovu navázána po zavření vložené výzvy k přihlášení.
- Oprava: Nekonečné obnovování stránky zastaveno na děkovací stránce, když už byl web vytvořen.
- Oprava: Volba registrace jádra WP synchronizována při aktivaci pluginu a uložení nastavení.
- Oprava: Do `calculate_expiration` přidána ochrana proti null expiraci pro kompatibilitu s PHP 8.4.
- Oprava: Duplicitní registrace blokovány, když zákazník už má aktivní členství.
- Oprava: Přidána kontrola null pro `date_expiration` v checkoutu.
- Oprava: Zřizování webu posíleno — omezení, odvození členství, povýšení domény.
- Oprava: Popisek stavu předinstalační kontroly opraven na NOT Activated, když kontrola selže.
- Oprava: Doména checkoutu použita pro URL ověření e-mailu.
- Oprava: Automatické přihlášení po checkoutu, když není přítomno pole hesla.
- Oprava: Bezplatná členství už neexpirují — považují se za doživotní.
- Oprava: Brána ověření e-mailu podrží publikování webu, dokud zákazník neověří e-mail.
- Oprava: Opraveny základní cesta endpointu SES v2 API a trasa identity.
- Oprava: Hook `wu_inline_login_error` emitován v catch bloku před odesláním.
