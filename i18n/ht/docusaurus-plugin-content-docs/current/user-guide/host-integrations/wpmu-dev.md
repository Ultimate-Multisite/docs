---
title: Entegrasyon WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Entegrasyon WPMU DEV

## Aperçu
WPMU DEV se pa platform WordPress ki gen tout bagay pou hosting, plugin, ak sèvis pou sit WordPress ou. Entegrasyon sa a pèmèt sincronizasyon nan domèn otomatik ak jere sertifikat SSL ant Ultimate Multisite ak hosting WPMU DEV la.

## Fonctionnalite
- Sincronizasyon domèn otomatik
- Jere sertifikat SSL
- Tentativ verifikasyon sertifikat SSL ki pi long

## Requisit
Entegrasyon an otomatikman detekte si ou ap host sou WPMU DEV epi li itilize API ki genyen la. Pa gen okenn konfigirasyon ek ki bezwen si ou ap host sou WPMU DEV.

Entegrasyon an kontwole prezans konstanta `WPMUDEV_HOSTING_SITE_ID`, ki otomatikman defini lè ou ap host sou WPMU DEV.

## Enstriksyon Setup

### 1. Verify Hosting WPMU DEV

Si ou ap host sou WPMU DEV, konstanta ki nesesè yo ta dwe deja define. Verifye ke:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` la define nan anviwònman ou
2. Ou gen yon manm aktif WPMU DEV ak aksè API

### 2. Kounye Enable Entegrasyon an

1. Nan admin WordPress ou, ale Ultimate Multisite > Settings
2. Navige nan onglet "Domain Mapping" (Mape Domèn)
3. Desann pou "Host Integrations" (Entegrasyon Host)
4. Active entegrasyon WPMU DEV la
5. Klike sou "Save Changes" (Sauveye Chanjman yo)

## Kijan Li Travay

### Sincronizasyon Domèn

Lè yon domèn mapye nan Ultimate Multisite:

1. Entegrasyon an itilize API WPMU DEV pou ajoute domèn nan kont hosting ou
2. Li otomatikman ajoute tou vèsyon www domèn nan
3. WPMU DEV la ap jere konfigirasyon domèn ak emisyon sertifikat SSL la

### Jere Sertifikat SSL

L'intégration est configurée pour augmenter le nombre de tentatives de vérification du certificat SSL pour l'hébergement WPMU DEV, car cela peut prendre un certain temps pour que les certificats SSL soient émis et installés. Par défaut, elle essaiera jusqu'à 10 fois pour la vérification du certificat SSL, comparativement aux 5 tentatives standard.

## Notes Importantes

### Suppression de Domaine

Actuellement, l'API WPMU DEV ne fournit pas de moyen de supprimer des domaines. Lorsque vous supprimez un mappage de domaine dans Ultimate Multisite, le domaine restera dans votre compte d'hébergement WPMU DEV. Vous devrez le supprimer manuellement depuis le tableau de bord d'hébergement WPMU DEV si nécessaire.

### Authentification API

L'intégration utilise la clé API WPMU DEV qui est stockée dans votre base de données WordPress comme l'option `wpmudev_apikey`. Ceci est configuré automatiquement lorsque vous connectez votre site à WPMU DEV.

## Dépannage

### Problèmes de connexion API
- Vérifiez que votre site est correctement connecté à WPMU DEV
- Vérifiez que l'option `wpmudev_apikey` est bien définie dans votre base de données WordPress
- Assurez-vous que votre adhésion WPMU DEV est active

### Problèmes de certificat SSL
- WPMU DEV peut prendre un certain temps pour émettre les certificats SSL (généralement 5 à 15 minutes)
- L'intégration est configurée pour vérifier jusqu'à 10 fois les certificats SSL
- Si les certificats SSL ne sont toujours pas émis après plusieurs tentatives, contactez le support WPMU DEV

### Domaine non ajouté
- Vérifiez les logs d'Ultimate Multisite pour toute erreur
- Vérifiez que le domaine n'est pas déjà ajouté à WPMU DEV
- Assurez-vous que votre plan d'hébergement WPMU DEV prend en charge le nombre de domaines que vous ajoutez
