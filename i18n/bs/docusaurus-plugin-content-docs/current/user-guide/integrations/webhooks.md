---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Prvi pogled na Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**PAŽNJA: Imajte na umu da je ova funkcija ili članak namijenjen naprednim korisnicima.**_

**webhook** je način da aplikacija ili softver poput Ultimate Multisite pruži drugim aplikacijama informacije u stvarnom vremenu. Webhook isporučuje podatke ili payload drugim aplikacijama čim se dogode, što znači da **podatke dobijate odmah.**

Ovo je korisno ako trebate integrisati ili proslijediti određene podatke iz Ultimate Multisite u drugi CRM ili sistem svaki put kada se pokrene događaj. Na primjer, trebate poslati korisnikovo ime i email adresu na mailing listu svaki put kada se kreira novi korisnički račun.

## Kako kreirati webhook {#how-to-create-a-webhook}

Da biste kreirali webhook, idite na svoj network admin dashboard. Kliknite na **Ultimate Multisite > Webhooks > Dodaj novi Webhook.**

![Stranica prazne liste Webhooks s dugmetom Dodaj novi Webhook](/img/admin/webhooks-list-empty.png)

Zatim možete urediti konfiguraciju webhooka:

![Obrazac Dodaj novi Webhook s poljima Name, Event i URL](/img/admin/webhook-add-modal.png)

Prilikom kreiranja novog webhooka od vas će se tražiti informacije kao što su **Name, URL,** i **Event**. Za svoj webhook možete koristiti bilo koje ime koje želite. Najvažnija polja su URL i Event.

![Interfejs za uređivanje webhooka koji prikazuje polje URL i pregled payload-a](/img/admin/webhook-url-field.png)

URL je **endpoint ili odredište** na koje će Ultimate Multisite poslati **payload ili podatke**. To je aplikacija koja će primiti podatke.

Zapier je najčešće rješenje koje korisnik koristi da olakša integraciju s aplikacijama trećih strana. Bez platforme kao što je Zapier, morat ćete ručno kreirati prilagođenu funkciju koja će uhvatiti podatke i obraditi ih. Pogledajte ovaj članak o tome **kako koristiti Ultimate Multisite webhook sa Zapierom.**

U ovom članku ćemo pogledati osnovni koncept kako webhook radi i događaje dostupne u Ultimate Multisite. Koristit ćemo site treće strane pod nazivom [requestbin.com](https://requestbin.com/). Ovaj site će nam omogućiti da kreiramo endpoint i uhvatimo payload bez ikakvog kodiranja. _**Odricanje od odgovornosti: sve što će uraditi jeste pokazati nam da su podaci primljeni.**_ Neće biti obrade niti bilo kakve radnje izvršene nad payloadom.

Idite na [requestbin.com](https://requestbin.com/) i kliknite Create Request Bin.

Nakon klika na to dugme, zatražit će od vas da se prijavite ako već imate račun ili da se registrujete. Ako već imate račun, odvest će vas direktno na njihov dashboard. Na njihovom dashboardu odmah ćete vidjeti endpoint ili URL koji možete koristiti pri kreiranju svog Ultimate Multisite webhooka.

Kopirajte URL i vratite se u Ultimate Multisite. Postavite endpoint u polje URL i odaberite događaj iz padajućeg menija. U ovom primjeru odabrat ćemo **Payment Received**.

Ovaj događaj se pokreće kad god korisnik izvrši plaćanje. Svi dostupni događaji, njihov opis i payloadi navedeni su na dnu stranice. Kliknite dugme **Add New Webhook** da sačuvate webhook.

![Padajući meni događaja webhooka s odabranim Payment Received](/img/admin/webhook-event-picker.png)

Sada možemo poslati testni događaj na endpoint kako bismo vidjeli da li webhook koji smo kreirali radi. To možemo uraditi klikom na **Send Test Event** ispod webhooka koji smo kreirali.

![Lista Webhooks koja prikazuje jedan konfigurisan webhook i radnju Send Test](/img/admin/webhooks-list-populated.png)

Ovo prikazuje prozor potvrde koji kaže da je test bio uspješan.

![Rezultat testnog događaja webhooka nakon slanja testnog payload-a](/img/admin/webhook-test-result.png)

Sada, ako se vratimo na _Requestbin_ site, vidjet ćemo da je payload primljen i da sadrži neke testne podatke.

Ovo je osnovni princip rada webhooka i endpointa. Ako kreirate prilagođeni endpoint, morat ćete kreirati prilagođenu funkciju za obradu podataka koje primite od Ultimate Multisite.
