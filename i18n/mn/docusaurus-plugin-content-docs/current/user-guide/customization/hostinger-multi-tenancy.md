---
title: Хостингер олон хуульчлалт
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 нь Hostinger multi-tenancy чадварыг нэмж оруулсан бөгөөд энэ нь хостлагдсан доменүүдийг одоо байгаа Hostinger domain-mapping интеграцийн хамт өөрийн тусгай багц (sovereign tenant) үйлчилгээ үзүүлэх боломжийг олгодог.

Таны таны домен болон тусгаарлагдсан хостын дэвсгэр (isolated tenant infrastructure)-ийг Hostinger hPanel-ээр удирдах үед энэ чадварыг ашиглана уу.

## Тохиргооны тэмдэглэл {#setup-notes}

1. **Ultimate Multisite > Settings > Host Integrations** дотор үндсэн Hostinger интеграцийг тохируулна.
2. Hostinger API token нь зорилтот домен эсвэл дэддоменыг удирдах боломжтой эсэхийг баталгаажуулна.
3. Multi-Tenancy addon-ийг идэвхжүүлнэ.
4. Таны таны домен (tenant) хэрэгжихээс өмнө тусгаарлалтын стратеги (isolation strategy)-г тохируулна.
5. Продуцийн трафикийг таны таны домене рүү илгээхээс өмнө migration verification workflow-ийг ажиллуулна.

Hostinger чадвар нь хост талын үйлдэл хийхэд нийт Hostinger холболтыг ашигладаг. DNS нь зөв Hostinger дансанд чиглэсэн байх ёстой бөгөөд hPanel-ийн дансны хязгаарлалт хамаарах байна.

## Чадвараас үүдэлтэй өөрчлөлт {#capability-specific-changes}

- Sovereign tenants (тусгай багц) нь хост талын үйлдлийг мэдэх чадвартай домен ашиглан үүсгэгдэнэ.
- Үндсэн машины хостын мөрүүдийг grant verification хийхээс өмнө нэг стандарт болгодог (normalize).
- Hostinger-ийн удирддаг tenants нь WordPress runtime-а локал хэрэгжүүлэлт шаардахгүй тохиолдолд hPanel дээр харагдах хостын утгыг ашиглана.
- SSO (Single Sign-On) хийх үйл явц нь таны домен Hostinger-ийн хостлуулсан tenant руу шилжихэд тулгуурладаг.

## Hostinger tenants-ийг асуудалтай зохицуулах {#troubleshooting-hostinger-tenants}

- Хэрэв tenant install (инсталляци) алдаа гарвал, домен нь аль хэдийн Hostinger дансанд холбогдсон эсэхийг шалгана уу.
- Database verification алдаа гарвал, таны таны домен (tenant) DB-ийн username, database name, хост байна (host binding)-ыг hPanel-тэй харьцуулна уу.
- Хэрэв **Visit (SSO)** алдаа гарвал, таны домены DNS болон SSL идэвхтэй байгаа эсэхийг баталгаажуулна уу.
- Teardown хийх үед хостын нөөцүүд үлдсэн бол, backup хийсний дараа hPanel-ээс үлдэгдэл database, user, folder-ыг арилгана уу.
