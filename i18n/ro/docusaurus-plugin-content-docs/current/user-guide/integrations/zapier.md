---
title: Integrare Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrarea Ultimate Multisite cu Zapier

Într-unul dintre articole, am discutat despre [Webhooks](webhooks.md) și despre cum pot fi folosite pentru integrarea cu aplicații terțe.

Folosirea webhooks este puțin complicată, deoarece necesită cunoștințe avansate de programare și capturare a payload-urilor. Folosirea **Zapier** este o modalitate de a ocoli acest lucru.

Zapier are integrare cu peste 5000+ aplicații, ceea ce face comunicarea dintre aplicații diferite mai ușoară.

Poți crea **Triggers** care vor fi declanșate când se produc evenimente în rețeaua ta (de ex., un Account este creat și declanșează evenimentul account_create) sau poți genera **Actions** în rețeaua ta ca reacție la evenimente externe (de ex., creează un nou membership de Account în rețeaua ta Ultimate Multisite).

Acest lucru este posibil deoarece **trigger-ele Ultimate Multisite Zapier** și actions sunt alimentate de [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cum să începi

Mai întâi, caută Ultimate Multisite în lista de aplicații Zapier. Alternativ, poți face clic pe [acest link](https://zapier.com/apps/wp-ultimo/integrations).

Mergi la dashboard-ul tău și apasă butonul **+** **Create Zap** din bara laterală stângă pentru a configura un Zap nou.

![Dashboard Zapier cu butonul Create Zap](/img/admin/webhooks-list.png)

Vei fi redirecționat către pagina de creare a Zap-ului.

În caseta de căutare, tastează „wp ultimo”. Fă clic pentru a alege opțiunea versiunii **Beta**.

![Căutarea WP Ultimo în lista de aplicații Zapier](/img/admin/webhooks-list.png)

După selectarea aplicației noastre, alege evenimentul disponibil: **New Ultimate Multisite Event**.

![Selectarea trigger-ului New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Acum trebuie să oferim Zapier acces la **rețeaua ta**. Dacă faci clic pe **Sign in**, se va deschide o fereastră nouă care solicită **credențialele API**.

![Solicitare Zapier Sign in pentru credențiale API](/img/admin/webhooks-list.png)

Mergi la panoul de administrare al rețelei tale și navighează la **Ultimate Multisite > Settings** > **API & Webhooks** și caută secțiunea API Settings.

Selectează opțiunea **Enable API**, deoarece este necesară pentru ca această conexiune să funcționeze.

![Setări API și Webhooks cu opțiunile API Settings și Enable API](/img/admin/settings-api-webhooks.png)

Folosește pictograma **Copy to Clipboard** din câmpurile API Key și API Secret și lipește acele valori pe ecranul de integrare.

În câmpul URL, introdu URL-ul complet al rețelei tale, inclusiv protocolul (HTTP sau HTTPS).

![Ecran de integrare Zapier cu câmpurile API Key, Secret și URL](/img/admin/webhooks-list.png)

Fă clic pe butonul **Yes, Continue** pentru a trece la pasul următor. Dacă totul funcționează, ar trebui să fii întâmpinat de noul tău account conectat! Fă clic pe **Continue** pentru a crea un trigger nou.

## Cum să creezi un Trigger nou

Acum că account-ul tău este conectat, poți vedea evenimentele disponibile. Să alegem evenimentul **payment_received** pentru acest tutorial.

![Selectarea evenimentului payment_received în trigger-ul Zapier](/img/admin/webhooks-list.png)

După ce evenimentul a fost selectat și faci clic pe **continue**, va apărea un **pas de test**.

![Pas de test Zapier pentru trigger](/img/admin/webhooks-list.png)

În această etapă, Zapier va testa dacă Zap-ul tău poate **prelua payload-ul specific pentru acel eveniment**. În evenimente viitoare de același tip, vor fi trimise informații cu aceeași structură.

![Test trigger Zapier finalizat cu succes cu payload](/img/admin/webhooks-list.png)

În tutorialul nostru, testul a fost **finalizat cu succes** și a returnat informațiile exemplu ale payload-ului. Aceste informații exemplu vor fi utile pentru a ne ghida în timp ce creăm actions. Trigger-ul tău este acum creat și gata să fie conectat la alte aplicații.

## Cum să creezi Actions

Actions folosesc informații din alte triggers pentru a crea intrări noi în rețeaua ta.

În **pasul de creare a unei action**, vei alege Ultimate Multisite **Beta** și opțiunea **Create Items on Ultimate Multisite**.

![Crearea unei action cu Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

În pasul următor, fie îți vei crea autentificarea, la fel cum am făcut în **Cum să începi**, fie vei selecta o autentificare creată. În acest tutorial, vom alege aceeași autentificare creată anterior.

![Selectarea autentificării pentru action-ul Zapier](/img/admin/webhooks-list.png)

### Configurarea Action

Acesta este **pasul principal al action** și aici lucrurile sunt puțin diferite. Prima informație pe care o vei alege este **Item**. Item este **modelul de informații** al rețelei tale, cum ar fi **Customers, Payments, Sites, Emails** și altele.

![Alegerea tipului de Item pentru action-ul Zapier](/img/admin/webhooks-list.png)

Când selectezi un item, formularul se va **rearanja pentru a aduce câmpurile obligatorii și opționale** pentru item-ul selectat.

De exemplu, când selectezi item-ul **Customer**, câmpurile formularului vor aduce tot ce este necesar de completat pentru a crea un Customer nou în rețea.

![Câmpuri item Customer în configurarea action Zapier](/img/admin/webhooks-list.png)

După completarea tuturor câmpurilor marcate ca **obligatorii** și după ce faci clic pe continue, un ultim ecran îți va arăta câmpurile completate și câmpurile care au fost lăsate necompletate.

![Test action Zapier care arată câmpuri completate și necompletate](/img/admin/webhooks-list.png)

De îndată ce testul tău se finalizează și are succes, action-ul tău este configurat. De asemenea, este important să verifici în rețeaua ta dacă item-ul a fost creat cu testul action-ului tău.
