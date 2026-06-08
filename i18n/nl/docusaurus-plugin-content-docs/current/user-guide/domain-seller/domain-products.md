---
title: Domeinproducten en Prijzen
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domeinproducten en Prijzen

Domeinproducten waarmee u de prijzen, TLD's, WHOIS-privacy en de providerselectie beheert. Elk domeinproduct is een standaard Ultimate Multisite product met een extra tabblad **Domeineinstellungen**.

## Een domeinproduct aanmaken

1. Ga naar **Network Admin › Ultimate Multisite › Products**
2. Klik op **Add New**
3. Stel het producttype in op **Domain**
4. Configureer het tabblad **Domain Settings** (zie hieronder)
5. Sla op

Domeinproducten verschijnen met een paars **Domain** badge in de productlijst en kunnen worden gefilterd met behulp van het tabblad **Domain Products**.

## Domeineinstellungen tabblad

### Provider

Selecteer welke registrar de registratie voor dit product afhandelt. Standaard staat de globale **Default provider** in de Domain Seller instellingen.

### Ondersteunde TLD's

Laat dit veld leeg om een **catch-all product** te creëren dat van toepassing is op alle TLD's die niet worden gematcht door een ander product.

Voer een komma-gescheiden lijst met TLD's in (bijv. `.com, .net, .org`) om een **TLD-specifiek product** te creëren dat alleen van toepassing is op die extensies.

**Hoe productmatching werkt:** Wanneer een klant naar een domein zoekt, kiest de addon het meest specifieke overeenkomende product. Een product met `.com` in zijn TLD-lijst heeft voorrang op een catch-all product. Als er geen TLD-specifiek product overeenkomt, wordt de catch-all gebruikt. Als er geen producten zijn, wordt de domeinzoekfunctie niet getoond.

### Type marge

Drie modi bepalen hoe uw verkoopprijs wordt berekend op basis van de inkoopprijs:

| Modus | Hoe het werkt |
|---|---|
| **Percentage** | Voegt een percentage toe aan de inkoopprijs. Een marge van 20% op een inkoopprijs van $10 geeft $12. |
| **Vaste marge** | Voegt een vast bedrag toe. Een marge van $5 op een domein van $10 geeft $15. |
| **Vaste prijs** | Negeert de inkoopprijs volledig. Vraagt altijd het bedrag dat u invoert. |

### Introductieprijs

Schakel dit in om een gereduceerde prijs voor het eerste jaar aan te bieden. Stel een aparte **Introductory price** (de prijs voor jaar 1) naast de reguliere **Renewal price** (jaar 2 en verder). De klant ziet beide prijzen tijdens het afrekenproces, zodat hij weet wat hij kan verwachten bij verlenging.

### WHOIS-privacy

Bepaalt of WHOIS-privacybescherming wordt aangeboden voor domeinen die via dit product worden geregistreerd.

| Instelling | Gedrag |
|---|---|
| **Uitgeschakeld** | WHOIS-privacy wordt nooit aangeboden of ingeschakeld. |
| **Altijd inbegrepen** | WHOIS-privacy wordt automatisch ingeschakeld bij registratie zonder kosten. |
| **Keuze van de klant** | Er verschijnt een selectievakje tijdens het afrekenproces. Stel de **Privacy price** in om per jaar te rekenen, of laat deze op $0 staan om het gratis aan te bieden. |

Voor Namecheap gebruikt WHOIS-privacy WhoisGuard (altijd gratis). Voor OpenSRS gebruikt het de OpenSRS privacy service (kan een inkoopskosten hebben).

---

## TLD-import en synchronisatie

Domeinproducten tonen realtime inkoopprijzen die van de aangesloten provider worden opgehaald. Om dit te laten werken, moeten TLD's worden geïmporteerd.

- **Handmatige synchronisatie:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatische synchronisatie:** Draait dagelijks via een geplande cron job voor alle geconfigureerde providers

Na een synchronisatie ga je naar het tabblad Domeineinstellungen van een willekeurig domeinproduct en gebruik je de TLD-kiezer om de beschikbare TLD's met hun huidige inkoopprijzen te zien.

---

## Automatische verlenging

Domeinverlengingen zijn gekoppeld aan de lidmaatschapsstatus van de klant:

- Wanneer een lidmaatschap wordt verlengd en een domein is gekoppeld, wordt de domeinverlenging automatisch in de wacht gezet
- Verlengingspogingen gebruiken de actieve betaalgateway van de klant
- Mislukte verlengingen worden automatisch opnieuw geprobeerd met exponentiële terugval
- E-mailmeldingen worden verstuurd voor succesvolle verlengingen, mislukkingen en aankomende verlopen

E-mail template ID's voor domeinlevenscyclusgebeurtenissen:

| Gebeurtenis | Template ID |
|---|---|
| Domein geregistreerd | `domain_registered` |
| Domein verlengd | `domain_renewed` |
| Verlenging mislukt | `domain_renewal_failed` |
| Domein loopt bijna af | `domain_expiring_soon` |

---

## Admin: Handmatige domeinregistratie

Om een domein namens een klant te registreren zonder dat deze via het afrekenproces hoeft:

1. Ga naar **Network Admin › Ultimate Multisite › Register Domain**
2. Selecteer de klant en voer de domeinnaam in
3. Vul de contactgegevens van de registrant in (naam, adres, telefoon)
4. Klik op **Register**

Het domeinrecord wordt aangemaakt en gekoppeld aan het account van de klant.
