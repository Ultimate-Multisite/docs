---
title: Integrare Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integrarea Ultimate Multisite cu Zapier

Într-unul dintre articole, am discutat despre [Webhooks](webhooks.md) și cum pot fi folosite pentru a integra aplicații terțe.

Utilizarea webhook-urilor este puțin complicată, deoarece necesită cunoștințe avansate de programare și procesare a datelor primite. Folosirea **Zapier** este o modalitate de a evita aceste dificultăți.

Zapier se integrează cu peste 5000 de aplicații, ceea ce face comunicarea între diferite aplicații mult mai simplă.

Poți crea **Triggers** (declanșatoare) care se vor activa când au loc evenimente în rețeaua ta (de exemplu, când se creează un cont și se declanșează evenimentul account_create) sau poți genera **Actions** (acțiuni) în rețeaua ta ca răspuns la evenimente externe (de exemplu, crearea unui nou abonament în rețeaua ta Ultimate Multisite).

Acest lucru este posibil deoarece **trigger-ele și acțiunile Zapier pentru Ultimate Multisite** sunt alimentate de [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cum să începi

Mai întâi, caută Ultimate Multisite în lista de aplicații Zapier. Alternativ, poți accesa [acest link](https://zapier.com/apps/wp-ultimo/integrations).

Mergi la dashboard și apasă butonul **+** **Create Zap** din bara laterală stângă pentru a configura un nou Zap.

![Dashboard-ul Zapier cu butonul Create Zap](/img/admin/webhooks-list.png)

Vei fi redirecționat către pagina de creare a Zap-ului.

În caseta de căutare, scrie "wp ultimo". Alege opțiunea versiunii **Beta**.

![Căutarea WP Ultimo în lista de aplicații Zapier](/img/admin/webhooks-list.png)

După ce ai selectat aplicația noastră, alege evenimentul disponibil: **New Ultimate Multisite Event**.

![Selectarea trigger-ului New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Acum trebuie să acordăm lui Zapier acces la **rețeaua ta**. Dacă apeși pe **Sign in**, se va deschide o fereastră nouă care solicită **credențialele API**.

![Promptul Zapier pentru autentificare cu credențiale API](/img/admin/webhooks-list.png)

Mergi la panoul de administrare al rețelei și navighează la **Ultimate Multisite > Settings** > **API & Webhooks** și caută secțiunea API Settings.

Selectează opțiunea **Enable API**, deoarece este necesară pentru ca această conexiune să funcționeze.

![Setări API cu opțiunea Enable API în Ultimate Multisite](/img/admin/webhooks-list.png)

Folosește iconița **Copy to Clipboard** din câmpurile API Key și API Secret și lipește acele valori în ecranul de integrare.

În câmpul URL, introdu URL-ul complet al rețelei tale, inclusiv protocolul (HTTP sau HTTPS).

![Ecranul de integrare Zapier cu câmpurile API Key, Secret și URL](/img/admin/webhooks-list.png)

Apasă butonul **Yes, Continue** pentru a trece la pasul următor. Dacă totul funcționează corect, ar trebui să vezi contul tău nou conectat! Apasă **Continue** pentru a crea un nou trigger.

## Cum să creezi un nou Trigger

Acum că ai contul conectat, poți vedea evenimentele disponibile. Să alegem evenimentul **payment_received** pentru acest tutorial.

![Selectarea evenimentului payment_received în trigger-ul Zapier](/img/admin/webhooks-list.png)

După ce ai selectat evenimentul și apeși pe **continue**, va apărea un **pas de testare**.

![Pasul de testare Zapier pentru trigger](/img/admin/webhooks-list.png)

În această etapă, Zapier va testa dacă Zap-ul tău poate **prelua payload-ul specific pentru acel eveniment**. La evenimentele viitoare de același tip, vor fi trimise informații cu aceeași structură.

![Testul trigger-ului Zapier finalizat cu succes, cu payload](/img/admin/webhooks-list.png)

În tutorialul nostru, testul a fost **finalizat cu succes** și a returnat exemplul de informații din payload. Aceste informații exemplu ne vor fi utile ca ghid atunci când creăm acțiuni. Trigger-ul tău este acum creat și gata să fie conectat la alte aplicații.

## Cum să creezi Actions

Acțiunile folosesc informații din alte trigger-e pentru a crea înregistrări noi în rețeaua ta.

În **pasul de creare a unei acțiuni**, vei alege Ultimate Multisite **Beta** și opțiunea **Create Items on Ultimate Multisite**.

![Crearea unei acțiuni cu Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

În pasul următor, vei crea o nouă autentificare, la fel cum am făcut în **Cum să începi**, sau vei selecta o autentificare existentă. În acest tutorial, vom alege aceeași autentificare creată anterior.

![Selectarea autentificării pentru acțiunea Zapier](/img/admin/webhooks-list.png)

### Configurarea acțiunii

Acesta este **pasul principal al acțiunii** și aici lucrurile sunt puțin diferite. Prima informație pe care o vei alege este **Item**. Item reprezintă **modelul de date** din rețeaua ta, cum ar fi **Customers, Payments, Sites, Emails** și altele.

![Alegerea tipului de Item pentru acțiunea Zapier](/img/admin/webhooks-list.png)

Când selectezi un item, formularul se va **reorganiza pentru a afișa câmpurile obligatorii și opționale** pentru itemul selectat.

De exemplu, când selectezi itemul **Customer**, câmpurile formularului vor afișa tot ce este necesar pentru a crea un nou Customer în rețea.

![Câmpurile itemului Customer în configurarea acțiunii Zapier](/img/admin/webhooks-list.png)

După ce completezi toate câmpurile marcate ca **obligatorii** și apeși pe continue, un ultim ecran îți va arăta câmpurile completate și cele rămase necompletate.

![Testul acțiunii Zapier care arată câmpurile completate și necompletate](/img/admin/webhooks-list.png)

Imediat ce testul tău se finalizează cu succes, acțiunea ta este configurată. Este important să verifici și în rețeaua ta dacă itemul a fost creat în urma testului acțiunii tale.
