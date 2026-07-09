---
title: Reference nastavení
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Přehled nastavení

Tato stránka sleduje nastavení, která ovlivňují každodenní správu a nedávné změny chování v Ultimate Multisite.

## Další možnosti

Oblast **Další možnosti** se zobrazuje v části **Ultimate Multisite > Settings > Login & Registration**.

| Nastavení | Popis |
|---|---|
| **Enable Jumper** | Zobrazuje nástroj Jumper pro rychlou navigaci v administrační oblasti. Použijte ho k přechodu přímo na obrazovky Ultimate Multisite, síťové objekty a podporované administrační cíle. Vypněte ho, pokud nechcete, aby byla tato zkratka viditelná. |

## Hlášení chyb a telemetrie

Předchozí nastavení přihlášení k hlášení chyb bylo ze stránky nastavení odstraněno. Anonymní telemetrie je vypnutá a neexistuje žádný přepínač v UI, kterým by ji bylo možné povolit.

Pokud udržujete interní runbooky nebo snímky obrazovky pro stránku nastavení, odstraňte odkazy na staré pole přihlášení k hlášení chyb, aby správci nehledali nastavení, které už není přítomné.

## Nastavení importu/exportu

Karta nastavení **Import/Export** popisuje, která nastavení ovládá, a odkazuje přímo na **Ultimate Multisite > Site Export** pro archivy webu a sítě. Kartu nastavení použijte pro konfiguraci importu/exportu, **Tools > Export & Import** použijte pro workflow exportu/importu jednoho webu a nástroj Site Export použijte, když potřebujete úplný archiv Network Export.

## Upozornění na zůstatek Domain Seller HostAfrica

Když je addon Domain Seller připojen k HostAfrica, správci sítě nyní uvidí zavíratelné upozornění na nízký zůstatek, když je zůstatek účtu prodejce příliš nízký pro spolehlivé zpracování registrací nebo prodloužení domén.

Berte toto oznámení jako provozní upozornění: doplňte zůstatek prodejce HostAfrica před přijímáním dalších placených registrací domén, poté se vraťte do nastavení Domain Seller nebo na obrazovku monitorování domén a potvrďte, že registrace a prodloužení mohou normálně pokračovat.

## Nastavení konektorů poskytovatelů AI

Nastavení konektorů poskytovatelů AI nyní zpřístupňují pouze podporované fondy OAuth účtů:

| Poskytovatel | Průběh nastavení |
|---|---|
| **Anthropic Max** | Připojte jeden nebo více účtů Anthropic Max pomocí tlačítka OAuth. Použijte ruční záložní postup OAuth, když sandboxovaný prohlížeč nemůže automaticky dokončit přesměrování. |
| **OpenAI ChatGPT/Codex** | Připojte účty ChatGPT prostřednictvím stejného workflow fondu OAuth. Operace podporované konektorem mohou po připojení účtu používat volání nástrojů ChatGPT Codex. |
| **Google AI Pro** | Připojte účty Google AI Pro prostřednictvím OAuth a poté obnovte konektor, pokud se seznam účtů neaktualizuje okamžitě. |

Cursor Pro už není podporovaný poskytovatel. Odstraňte staré interní snímky obrazovky, runbooky nebo kroky onboardingu, které zmiňují pole nastavení Cursor Pro nebo cesty konektoru.

Při přidávání nebo odebírání účtů poskytovatele zadejte platnou e-mailovou adresu účtu, který se obnovuje nebo maže, a před testováním operací podporovaných konektorem uložte nastavení poskytovatele.
