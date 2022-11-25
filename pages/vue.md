---
layout: fact
preload: false
---
# Développer avec <span vue-brand>Vue</span>

<div
  v-motion
  :initial="{ y: 80 }"
  :enter="{ y: 0 }">

## JOUR 1

</div>

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg
---
## Son histoire

Créé en **2014 par Evan You** pour construire rapidement une application web sans prise de tête.

Devenu viral, il a grandi en gardant sa simplicité mais en permettant de monter en complexité progressivement.

> Il se considère **évolutif** pour sa capacité à s'adapter aux besoins techniques

Aujourd'hui, il culmine parmi les plus grands framework JS utilisés (avec React, Angular, Svelte et SolidJS).

<!--
  Evolutif pour deux raisons:
  - Intégration: il peux s'utiliser sans outils de build via un usage script (à la jQuery tout en bénéficiant du système de template)
  - Programmatique: Options API vers Composition API qui présente une nette évolution en termes de complexité
-->

---
title: Framework ou Librairie ?
level: 2
layout: fact
hideInToc: true
---
# Framework ou Librairie ?

<v-click>

### Une petite explication s'impose

</v-click>

---
layout: image-right
hideInToc: true
image: /framework-library.svg
---

## Framework / Librairie

<span my-2 text-gray font-bold font-mono>Framework</span> : Ensemble de règles imposées techniquement pour guider un travail à effectuer.

<span my-2 text-gray font-bold font-mono>Librairie</span> : Ensemble de solutions techniques prêtes à l'emploi

<br>

Malgré son apparence de librairie,  
**<span vue-brand>Vue</span> se positionne comme un framework grâce à son écosystème**.

<!--
Vue seul représente le noyau apportant le minimum nécessaire pour
bénéficier de la réactivité sur les vues utilisateur.

Grâce aux projets officiels et communautaires autour de lui, il devient un framework imposant certaines règles mais gardant toujours l'ouverture nécessaire pour substituer les parties agrémentées
-->

---
layout: image-right
class: my-auto
title: Ses forces vives
level: 2
image: /vue-hero.png
---
## <span uppercase>Ses forces vives</span>

#### pour te rendre productif et efficace


<div
  v-motion
  v-motion-slide-visible-bottom
  class="mt-4 -ml-6"
>

<Toc mode="filterOnlyCurrentTree" minDepth="3" />

</div>


<!-- 
- Les données conduisent les vues : tout changement dans la vue doit être un effet d'un changement de données et non par un changement manuellement effectuer (comme on pourrait le faire avec jQuery). Cela permet d'avoir une représentation fidèle du modèle de donnée dans la vue.
- Le templating a plusieurs avantages dont la fluidité dans son écriture et l'optimisation au runtime. Le templating permet d'organiser la vue en lien avec les données et Vue propose des outils pour rendre l'organisation la moins verbeuse.
- Les données descendent sous forme de props ou de contexte (stage management, inject) mais ne peuvent remontées de la même manière: elles remontent via les événements issus de changements d'état ou d'interaction utilisateur
-->
---
---
### Composants guidés par les données

L'un des principes fondamentaux de Vue certifie que les données soient toujours bien représentées dans la vue.
Se reposant sur le principe `MVVC` (Model-View-ViewModel), Vue propose de simplifier cela via un système de réactivité.

<div grid grid-cols-2>
  <div>
  <v-click hide>

  ![](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

  </v-click>


  <div m4 relative bottom-40 v-after>

```mermaid
flowchart LR
  V-- Binding -->B
  B([MonComposant])
  B-- Event -->V{Vue}
  A([donnée1])<-- Reactive -->V
```

  <small>

  `Reactive` : Système de réactivité  
  `Binding` : Liaison utilisant le *Virtual DOM*  
  `Event` : Remontée d'événements

  </small>
  </div>

  </div>

<div>
<v-click>

Ainsi, il est interdit de :

- Modifier directement le DOM
- Respecter la responsabilité des composants

</v-click>
<v-click >
  <div ml-6 text-8px>

  > Ne pas modifier directement les props  
  > Ne pas modifier les props du parent

  </div>
</v-click>

</div>
</div>

---
layout: image-left
image: https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png
split: 1/3
---

La composition dans une application consiste en l'utilisation de plusieurs composantes pour former un organisme muni de corps inter-dépendants.

L'[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) suggère un découpage à l'image de la composition chimique en assurant la responsabilité de chacun.

<v-clicks>

- **Atome** : une entité simple ayant une sémantique unique et réutilisable  
  <small>bouton, champ texte, icône</small>
- **Molécule** : atomes assemblés pour une sémantique flexible et réutilisable  
  <small>champ avec label, table avec champ de recherche</small>
- **Organisme** : ensemble complexe d'atomes ou/et de molécules (voire d'autres organismes) de sémantiques différentes  
  <small>en-tête d'application, section d'application</small>

</v-clicks>

---
---
### Templating et ses astuces


---
---
### Évènements et interactions


---
title: Options API vs. Composition API
level: 2
layout: fact
---
# Options API <small>vs.</small> Composition API
## De la simplicité à la complétude

---
---
## Les Macros
https://vue-macros.sxzz.moe

---
---

## Mise en pratique
