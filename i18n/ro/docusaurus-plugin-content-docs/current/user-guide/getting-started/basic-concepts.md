---
title: Concepte de bază
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Concepte de bază

Pentru un utilizator nou de WordPress Multisite și pentru cineva care tocmai a început să folosească Ultimate Multisite, pot exista multe cuvinte și expresii noi de învățat la început. Înțelegerea lor este o sarcină importantă, deoarece trebuie să cunoști platforma și modul în care funcționează în ansamblu.

În acest articol, vom încerca să definim și să explicăm câteva dintre conceptele cheie din WordPress. Unele dintre acestea sunt mai relevante pentru utilizatori, altele pentru dezvoltatori, iar unele pentru ambii.

## WordPress Multisite

WordPress **Multisite** este un tip de instalare WordPress care îți permite să creezi și să gestionezi o rețea de mai multe site-uri web dintr-un singur panou de control WordPress. Poți gestiona totul, inclusiv numărul de site-uri, funcționalitățile, temele și rolurile utilizatorilor. Este posibil să administrezi sute și mii de site-uri.

## Rețea

În termeni WordPress, o rețea multisite este locul în care mai multe **subsite-uri** pot fi gestionate dintr-un singur panou de control. Deși crearea unei rețele multisite diferă de la un furnizor de găzduire la altul, rezultatul final este de obicei câteva directive suplimentare în fișierul **wp-config.php** pentru a-i spune WordPress-ului că operează în acest mod specific.

Există mai multe diferențe distincte între o rețea multisite și o instalare WordPress independentă, pe care le vom discuta pe scurt.

## Bază de date

O bază de date este un set structurat și organizat de date. În terminologia informatică, o bază de date se referă la software-ul folosit pentru a stoca și organiza date. Gândește-te la ea ca la un dulap de dosare în care stochezi date în diferite secțiuni numite tabele.

WordPress Multisite folosește o singură bază de date, iar fiecare subsite primește propriile sale tabele cu id-ul blogului în prefix, astfel încât odată ce instalezi o rețea și creezi un subsite, ar trebui să ai aceste tabele:

_wp_1_options_ \- tabelul de opțiuni pentru primul subsite

_wp_2_options_ \- tabelul de opțiuni pentru al doilea subsite

## Furnizor de găzduire

Un furnizor de găzduire este o companie care permite afacerilor și persoanelor fizice să își facă site-urile web accesibile prin World Wide Web. Serviciile pe care le oferă furnizorii de găzduire web variază, dar de obicei includ design de site-uri web, spațiu de stocare pe un server și conectivitate la internet.

## Domeniu

Un nume de domeniu este o adresă pe care oamenii o folosesc pentru a vizita site-ul tău. Îi spune browserului web unde să caute site-ul tău. La fel ca o adresă stradală, un domeniu este modul în care oamenii vizitează site-ul tău online. Și, la fel ca un semn în fața magazinului tău. Dacă dorești să vizitezi site-ul nostru, va trebui să tastezi adresa noastră web în bara de adrese a browserului tău, care este [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ unde [**ultimatemultisite.com**](http://ultimatemultisite.com) este numele de domeniu.

## Subdomeniu

Un subdomeniu este un tip de ierarhie a site-ului web sub domeniul principal, dar în loc să folosească foldere pentru a organiza conținutul pe un site web, primește cumva un site web propriu. Este prezentat ca [**https://site1.domain.com/**](https://site1.domain.com/) unde _site1_ este numele subdomeniului și [_domain.com_](http://domain.com) este domeniul principal.

## Subdirector

Un subdirector este un tip de ierarhie a site-ului web sub un domeniu rădăcină care folosește foldere pentru a organiza conținutul pe un site web. Un subdirector este același lucru cu un subfolder și numele pot fi folosite interschimbabil. Este prezentat ca [**https://domain.com/site1**](https://domain.com/site1) unde _site1_ este numele subdirectorului și [_domain.com_](http://domain.com) este domeniul principal.

## Subsite

Subsite este un site copil pe care îl creezi într-o rețea Multisite. Poate fi fie un **subdomeniu**, fie un **subdirector**, în funcție de cum este configurată instalarea ta WordPress Multisite.

## Super Admin

Un Super Admin WordPress este un rol de utilizator cu capabilități complete de a gestiona toate subsite-urile dintr-o rețea Multisite. Pentru utilizatorii Multisite, este **cel mai înalt nivel de acces** pe care îl poți oferi instalării tale WordPress.

## Plugin

În general, un plugin este un set de cod care adaugă funcționalități suplimentare site-ului tău WordPress. Acest lucru poate fi la fel de simplu ca schimbarea logo-ului de autentificare sau la fel de complex ca adăugarea funcționalității de e-commerce. _Woocommerce și Contact Form_ sunt exemple de plugin.

Într-un WordPress Multisite, plugin-urile pot fi instalate doar din panoul de control al administratorului rețelei de către Super Admin. Administratorii subsite-urilor pot doar să activeze și să dezactiveze plugin-urile în cadrul subsite-ului lor.

## Teme

O temă WordPress este un grup de fișiere (_grafice, foi de stil și cod_) care dictează aspectul general al site-ului. Oferă toate stilizările front-end, cum ar fi stilizarea fonturilor, aspectul paginii, culorile, etc.

La fel ca plugin-urile, temele în WordPress Multisite pot fi instalate doar de Super Admin și pot fi activate la nivelul subsite-ului de către administratorii subsite-urilor.

## Șablon de site

**Șablonul de site** este un site de bază care poate fi folosit ca fundație atunci când creezi site-uri noi în rețeaua ta.

Asta înseamnă că poți crea un site de bază, activa diferite plugin-uri, seta o temă activă și o poți personaliza în orice mod dorești. Apoi, când clientul tău creează un cont nou, în loc să primească un site WordPress implicit fără conținut semnificativ în interior, va primi o copie a site-ului tău de bază cu toate personalizările și conținutul deja puse la punct.

## Mapare domeniu

**Maparea domeniului** în WordPress este o modalitate de a redirecționa utilizatorii către găzduirea corectă, prin adresa unui site web. Într-un WordPress Multisite, subsite-urile sunt create folosind fie un subdirector, fie un subdomeniu. Ceea ce face maparea domeniului este că permite utilizatorilor subsite-urilor să folosească un domeniu de nivel superior precum [**joesbikeshop.com**](http://joesbikeshop.com) pentru ca adresa site-ului lor să arate mai profesional.

## SSL

SSL înseamnă **Secure Sockets Layer** (Strat de sockeți securizați). Este un certificat digital care autentifică identitatea unui site web și permite o conexiune criptată. În zilele noastre este folosit ca tehnologie standard pentru a menține o conexiune la internet securizată și pentru a proteja orice date sensibile care sunt trimise între două sisteme, împiedicând infractorii să citească și să modifice orice informații transferate, inclusiv potențiale detalii personale. Browserele moderne necesită SSL, ceea ce îl face esențial atunci când creezi și rulezi un site web.

## Media

Media sunt imagini, audio, video și alte fișiere care alcătuiesc un site web.

Site-urile de rețea împărtășesc o singură bază de date într-un WordPress Multisite, dar mențin căi separate pe sistemul de fișiere pentru fișierele media.

Locația standard WordPress (wp-content/uploads) rămâne; totuși, calea sa este modificată pentru a reflecta ID-ul unic al site-ului de rețea. În consecință, fișierele media pentru un site de rețea apar ca wp-contents/uploads/site/[id].

## Permalink-uri

Permalink-urile sunt URL-urile permanente ale postărilor individuale de blog sau paginilor din cadrul site-ului tău. Permalink-urile sunt numite și **link-uri prietenoase**. În mod implicit, URL-urile WordPress folosesc formatul query string care arată cam așa:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite este un plugin WordPress, creat pentru instalările WordPress Multisite, care transformă instalarea ta WordPress într-o rețea premium de site-uri – precum [WordPress.com](https://WordPress.com) – permițând clienților să creeze site-uri prin taxe lunare, trimestriale sau anuale (poți crea și planuri gratuite).

## Formular de checkout

Formularul de checkout este un formular de comandă cu unul sau mai mulți pași care implică crearea subsite-ului, a abonamentului și a conturilor de utilizator prin înregistrarea Ultimate Multisite. Este format din diferite câmpuri și formulare de plată pe care un utilizator trebuie să le completeze în timpul procesului de înregistrare.

## Webhook

Un webhook (numit și web callback sau HTTP push API) este o modalitate pentru o aplicație de a furniza altor aplicații informații în timp real. Un webhook livrează date către alte aplicații pe măsură ce se întâmplă, ceea ce înseamnă că primești datele imediat.

**Webhook-urile Ultimate Multisite** deschid posibilități infinite, permițând administratorilor de rețea să facă tot felul de integrări nebunești-dar-utile, mai ales dacă sunt folosite împreună cu servicii precum _Zapier și IFTTT_.

## Evenimente

Un eveniment este o acțiune care apare ca rezultat al unei acțiuni a utilizatorului sau a unei alte surse, cum ar fi un clic de mouse. Ultimate Multisite păstrează o înregistrare a tuturor evenimentelor și jurnalelor care se întâmplă în întreaga ta rețea. Urmărește diferite activități care au loc în multisite-ul tău, precum schimbările de plan.
