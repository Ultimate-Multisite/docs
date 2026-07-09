---
title: Inställningsreferens
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Inställningsreferens

Den här sidan följer inställningar som påverkar den dagliga administrationen och senaste beteendeförändringar i Ultimate Multisite.

## Andra alternativ

Området **Andra alternativ** visas under **Ultimate Multisite > Settings > Login & Registration**.

| Inställning | Beskrivning |
|---|---|
| **Aktivera Jumper** | Visar snabbnavigeringsverktyget Jumper i adminområdet. Använd det för att hoppa direkt till Ultimate Multisite-skärmar, nätverksobjekt och stödda admindestinationer. Inaktivera det om du inte vill att den här genvägen ska vara synlig. |

## Felrapportering och telemetri

Den tidigare opt-in-inställningen för felrapportering har tagits bort från inställningssidan. Anonym telemetri är inaktiverad och det finns ingen UI-växlare för att aktivera den.

Om du underhåller interna runbooks eller skärmbilder för inställningssidan, ta bort hänvisningar till det gamla opt-in-fältet för felrapportering så att administratörer inte letar efter en inställning som inte längre finns.

## Import-/exportinställningar

Inställningsfliken **Import/Export** beskriver vilka inställningar den styr och länkar direkt till **Ultimate Multisite > Site Export** för webbplats- och nätverksarkiv. Använd inställningsfliken för import-/exportkonfiguration, använd **Tools > Export & Import** för arbetsflödet för export/import av en enskild webbplats, och använd verktyget Site Export när du behöver ett fullständigt Network Export-arkiv.

## Domain Seller HostAfrica-saldovarning

När Domain Seller addon är anslutet till HostAfrica ser nätverksadministratörer nu en avvisningsbar varning om lågt saldo när återförsäljarkontots saldo är för lågt för tillförlitlig hantering av domänregistreringar eller förnyelser.

Behandla detta meddelande som en operativ varning: fyll på HostAfrica-återförsäljarsaldot innan du accepterar fler betalda domänregistreringar, och återvänd sedan till Domain Seller-inställningarna eller skärmen för domänövervakning för att bekräfta att registreringar och förnyelser kan fortsätta normalt.

## Inställningar för AI-leverantörsanslutare

Inställningar för AI-leverantörsanslutare visar nu endast de stödda OAuth-kontopoolerna:

| Leverantör | Konfigurationsflöde |
|---|---|
| **Anthropic Max** | Anslut ett eller flera Anthropic Max-konton med OAuth-knappen. Använd den manuella OAuth-reservlösningen när en sandboxad webbläsare inte kan slutföra omdirigeringen automatiskt. |
| **OpenAI ChatGPT/Codex** | Anslut ChatGPT-konton via samma arbetsflöde för OAuth-poolen. Åtgärder som stöds av anslutaren kan använda ChatGPT Codex-verktygsanrop efter att kontot har anslutits. |
| **Google AI Pro** | Anslut Google AI Pro-konton via OAuth och uppdatera sedan anslutaren om kontolistan inte uppdateras omedelbart. |

Cursor Pro är inte längre en stödd leverantör. Ta bort gamla interna skärmbilder, runbooks eller introduktionssteg som nämner Cursor Pro-konfigurationsfält eller anslutarsökvägar.

När du lägger till eller tar bort leverantörskonton anger du en giltig e-postadress för kontot som uppdateras eller tas bort och sparar leverantörsinställningarna innan du testar åtgärder som stöds av anslutaren.
