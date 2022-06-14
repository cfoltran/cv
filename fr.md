![Spellcheck](https://github.com/cfoltran/cv/actions/workflows/main.yaml/badge.svg)
# Clément Foltran

### Software engineer<br>
```
kubectl get pods --context=🇫🇷
NAME                                  READY   STATUS    RESTARTS   AGE
clement-foltran                       1/1     Running   0          24y
```

[Email](mailto:clement.foltran@protonmail.com) / [LinkedIn](https://www.linkedin.com/in/clementfoltran/) / [GitHub](https://github.com/cfoltran/)

## 👨‍💻 Expériences

### **Ingénieur logiciel** @[panierdachat.com](https://panierdachat.com), Montréal 🇨🇦 *(depuis Oct 2021)*

Panierdachat est une entreprise québécoise permettant la création de site e-commerce simplement. Durant la pandémie, elle a connu une croissance exponencielle mettant à mal l'infrastructure existante. Les nombreux clients inscrits ont rencontré beaucoup de désagréments suite aux diverses interruptions de services. Ma mission : rendre l'infrastructure élastique aux pics de charges (ex: soldes).

* REFONTE DES FICHIERS DE DEPLOIEMENTS :<br>
Les fichiers de déploiement de la production et de la staging étaient différents, les erreurs étaient donc courantes. J'ai revu tous nos fichiers de déploiement, installé Helm (langage de templating) afin de centraliser nos déploiements dans des fichiers uniques modulables. Ce travail permet d'avoir une seule commande helm pour déployer, désinstaller, mettre à jour, tout en assurant un versionnement).

* MISE EN PLACE DU DEPLOIEMENT ROULANT : <br>
Avant mon arrivée, les mises en production entrainaient des interruptions de services pouvant aller jusqu'à 15 minutes. J'ai donc mis en place un déploiement roulant, le trafic n'est pas redirigé vers la nouvelle version tant que les pods ("serveurs") ne sont pas prêt à traiter les requêtes. Ce travail, contribuera à notre nouveau score de haute disponibilité (99% sur 8 mois).

* MISE EN PLACE DES CI/CD :<br>
Jusqu'alors, les déploiements mobilisaient à minima une personne, parfois jusqu'à une demi-journée. Mon travail fut de mettre en place des déploiements automatique dès qu'une personne pousse du code sur nos 3 dépôts GitHub : Nouveauté sur staging : une pipeline lance automatiquement la construction de l'image et son déploiement sur la staging. En 4 minutes, la nouvelle version est disponible sans aucune interruption de service. Nouveaux tag : le même processus est effectué mais sur nos serveurs de production.

* MISE EN PLACE DES TESTS END TO END :<br>
Au fur et à mesure du développement de la plateforme, des nouveaux collaborateurs, les bugs augmentaient. J'ai donc convaincu les créateurs dans la nécessité des tests. J'ai alors créer un projet de tests e2e en Cypress qui eux aussi bénéficient d'une CI/CD, permettant de les lancer chaque nuit sur les branches des devs et avant chaque mise en production.

* RESOLUTIONS DES PROBLÉMATIQUES LIÉES À LA CHARGE : <br>
Une des principale problématique était notre manque de résilience durant les périodes à fort pic (black friday, ventes éclairs...). Dans un premier temps, j'ai revu les ressources en période de charge normale. Ce travail aura permis de diviser par deux les coûts d'infrastructure. Dans un second temps, j'ai mis en place un système d'autoscaling (horizontal et vertical). En cas de forte charge, notre infrastructure peut ajouter des instances afin de supporter le pic. Cette dernière peut même ajouter une machine afin d'augmenter nos ressources verticalement.

### **Ingénieur R&D** @[Ateme](https://www.ateme.com), Paris *(Dec 2019 - Dec 2021)*<br>
Ateme est une entreprise proposant des solutions dans le domaine de la vidéo. À l'origine chez Anevia, entreprise crée par les fondateurs de VLC, notre rachat nous a propulsé comme leader de notre secteur.Passer de 100 à 500 collaborateur a été une expérience très riche.


**Anevia cloud services (6 premiers mois):**

Plateforme de gestion de 800 boitiers diffusant du contenu à la demande dans des hôtels, hopitaux, yahts...

**Anevia pilot:**

* Pilot, est une solution de gestion de serveurs de cache diffusant du contenu à la de demande. Une application web permet la gestion, le monitoring de cluster kubernetes, déployer des instances de cache.<br>

* Dans le cadre de mon travail sur Pilot, j'ai du réaliser une solution de monitoring intégré à notre plateforme. J'ai développé un module permettant d'ajouter des graphes simplement en éditant un fichier JSON avec des requêtes Prometheus. C'est en quelque sorte une reproduction de Grafana en interne.

**👨‍💻 Technologies**: Angular 11, GO, Kubernetes, Docker, Postgresql, Cypress, GitLab pipelines

### **Co-fondateur** @Stoke *(Fev 2018 - Jan 2020)*<br>
Déploiement d'une plateforme de gestion des invendus textiles. Ce projet fût incubé à Station F par l'institut Français de la mode.

### **Stage développeur Front-end** @[Soneka.am](https://www.soneka.am), Paris *(Apr 2018 - Aug 2019)*<br>
Develop an asset management platform with Angular

## 💡 Projects

**[loawn.net](https://www.loawn.net)** - status en pause ⏸<br>
Créé pendant le premier confinement, loawn est l'acronyme pour *local area worker network*. À l'inscription l'utilisateur est assigné à un "cluster" (chat) avec tous les télétravailleurs inscrit à 1km à la ronde. Il peut alors échanger, prendre une pause, s'entraider, participer à des événements.

**👨‍💻 Technologies**: Websockets, MongoDB, Node.js, Express.js, geolocation

**[cococertif.com](https://github.com/cfoltran/covid-attestation-gen)** - status terminé ⏹

Cette application permettait d'enregister vos information dans le cache de votre téléphone, et de générer automatiquement des attestations de déplacement dérogatoire (même hors ligne).

**👨‍💻 Technologies**: Nuxt

## 🥷 Hackathons

**HEC design thinking:**<br>
1 mois autour de la problématique du développement durable. Nous avons crée une plateforme de revalorisation des invendus textiles. Notre solution permettait de se connecter aux bases de données de gestions (ERP) des marques afin de les mettre à disposition des recycleries, upcycleurs. Ce projet nous permettra de remporter la première place et d'être incubé 1 an à Station F.

## ✅ Certifications Google Kubernetes

[Architecting with Google Kubernetes Engine: Workloads](https://www.coursera.org/account/accomplishments/certificate/A4AKGB86KU7A)


[Architecting with Google Kubernetes Engine: Foundations](https://www.coursera.org/account/accomplishments/certificate/L9JFVTRL8J79)

[Google Cloud Platform Fundamentals: Core Infrastructure](https://www.coursera.org/account/accomplishments/certificate/ZKDKE4QT9DAU)

## 💪 Sports

Trail, course à pied

## 💬 Languages

Français 🇫🇷
Anglais 🇬🇧

## 👨‍🎓 Formation

**42 Paris**<br>
[42.fr](https://42.fr/) - Paris, France _(Août 2018 - Juin 2020)_ <br>
42 est l'une des formations informatique les plus selectives. L'examen d'entrée s'étend sur un mois. Tous les jours, des exercices en C très bas niveau afin de comprendre le fonctionnement d'un ordinateur et le week-end, des projets de groupes.
Une seule fonction permettant d'afficher un caractère ASCII est autorisée :

`write(int fd, const void *buf, size_t count);`

Si tu as besoin d'une autre fonction, tu dois la recoder (excepté malloc).

<!-- - [Hypertube](https://github.com/owalid/hypertube): Application that allows the user to search and watch free movies on a great interface. Our API scrapped YTS, popcorn databases to retrieve torrent hashes. When a user chooses a movie, our API uploads the movie to our server and streams the content with FFMPEG. The movie is kept on our servers for 10 days.<br>
Technologies: MongoDB, Vue, Vuetify, IPTV, Node.js, Express.js<br>
⚠️ Warning: the use of this application is illegal
- [Qinder](https://github.com/cfoltran/qinder): This is a tinder clone realized with PostgresSQL and Angular. -->

**Université Paris Saclay** - DUT Informatique<br>
Paris, France _(Septembre 2016 - Juin 2018)_ <br>
