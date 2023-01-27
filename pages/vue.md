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
<h1>Framework <small>ou</small> Librairie ?</h1>

<v-click>

<h3 animate-pulse>Une petite explication s'impose</h3>

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

<Toc mode="filterOnlyCurrentTree" minDepth="3" maxDepth="3" />

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
title: Atomic Design
layout: image-left
image: https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png
split: 1/3
hideInToc: true
level: 3
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

Vue adopte un système de templating pour 4 grandes raisons :

<Toc mode="filterOnlyCurrentTree" minDepth="4" maxDepth="4" />

<Reference to="guide/essentials/template-syntax.html" title="Reference syntaxe de template" absolute />

---
---

#### pouvoir utiliser le DOM comme template
> Vue en mode **html**

```html {all|2-11|4-10|all}
<div id="root">
  <section>
    <h1>{{name}}</h1>
    <nav :class="{ hidden: list.length === 0 }">
      <ul>
        <li v-for="item in list">
          {{item}}
        </li>
      </ul>
    </nav>
  </section>
</div>
```

Ce template peut tout à fait être intégré tel quel dans du HTML, le navigateur peut l'interpréter sans erreur.

<v-click>

Vue peut se monter sur un template *inline* et y ajouter la réactivité et les interactions nécessaires.

```ts
  const app = createApp()

  app.mount('#root')
```

</v-click>

---
hideInToc: true
---

#### pouvoir utiliser le DOM comme template
> Vue en mode **application**

```html
<!-- L'ancre de montage -->
<div id="root"></div>
```

```vue
<!-- menu.vue -->
<template>
  <section>
    <h1>{{name}}</h1>
    <nav :class="{ hidden: list.length === 0 }">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </nav>
  </section>
</template>
```

<v-click>

Toute l'application App est montée sur le point de montage.

```ts
  const app = createApp(App)

  app.mount('#root')
```

</v-click>

---
layout: two-cols
---

#### garder une séparation nette entre la vue et les données

Le web c'est l'HTML, le CSS et le Javascript.

L'HTML peut fonctionner seul, sans Javascript.  
Le CSS aussi.

Respecter les responsabilités de chacun assure une bonne organisation, et permet une meilleure pérennité du code.

<v-click>

![](/vue-logo-html-css-js.png)

</v-click>


::right::

<div pl-4>

Les **composants monofichiers**, <br>ou les [Single-File Component (SFC)](https://vuejs.org/guide/scaling-up/sfc.html), apportent l'union des trois au sein d'un même fichier.

```vue {all|11-13|15-20|1-9} {at: 2}
<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

</div>
<!-- "Le CSS aussi" : Référence aux solution CSS-in-JS très coûteuse au runtime -->

---
---

#### proposer un sucre syntaxique facile à retenir

À la différence du JavaScript, le templating est extensible <br>et propose l'abstraction des fonctionnalités du framework tout en se reposant sur l'HTML.

Voici une liste des fonctions les plus pratiques utilisable via le template :

<Toc mode="filterOnlyCurrentTree" minDepth="5" />

---
layout: iframe-right
url: https://sfc.vuejs.org/#eNqNUctOwzAQ/JXFl4DUxKLApUorHjek/oEvIdm2LvEDex2Eovw7dlOhkEoI+eSdGc/MumdP1hZdQLZiJaGybUW4ERqgPNxu+h6yF6wloCcIGhR6X+0RpG6lRvBUkfwImMEwlDzyk26iVX5/iSwT4rCqSXa4PT94Yi1HX6ltIOhyZRps14LNuIIBj8SST9L+75S+dtISeKRgo0oqaxxBSrODAXbOKMjiKrIxbG10bJ06rCF7NuFogoMWQRndIFzBa1xAkP5nC0XUjZp5u3VyuM62Ri7geFY1X7pSo+wmtRmzbdiCjbFyVdni6I2OH9OfAp0BL9gKTpM0i3HTXbADkfUrzoO27/uiNoo/Roy7oEkqzBujHu+KZXH/wBvpaTov0Kv8zZlPjy46CraYPM7jsEOXO4ylHbo/zWbcX4Yz7MI0eQ5CD2z4BjsD5HQ=
---
##### Interpolation de texte <Reference to="guide/essentials/template-syntax.html#text-interpolation" title="Référence syntaxe de template" />

Pour rendre une variable de type texte dans le template via les moustaches `{{ ... }}`.

Le contenu doit être une expression javascript.

---
---
##### Les directives <Reference to="guide/essentials/template-syntax.html#directives" />

Dans le template, Vue propose de rendre certains attributs prédéfinis ou personnalisés pour manipuler les éléments.

Préfixés par `v-`, la valeur de l'attribut doit être une expression javascript.

> Expression javascript, c'est-à-dire quelque chose que l'on peut mettre après un `return` dans une fonction.

Les directives acceptent des arguments (via `:argument`) et des modificateurs (via `.modifier`).

Exemple d'une directive faite-maison :

```vue-html
<div v-detective:class.uppercase="maValeur"></div>
<!-- 
  Utilisation de la directive `detective` avec 
  pour argument `class`,
  pour modificateur `uppercase` et 
  comme valeur d'attribut de `maValeur` 
-->
```

Vue en propose dans son language de template des directives prêtes à l'emploi. <carbon-arrow-right animate-pulse />

<!-- Voir le rendu JS pour avoir une idée de la gestion sous jascente -->
---
layout: iframe-right
url: https://sfc.vuejs.org/#eNp9UtFu2zAM/BVOe8gGNDbQtdvgukO279CLYrGZG1sSJLpLEPjfR0mWl7bAAMMyj0fxjuZF/HSueplQNKINne8d/ZBGGjw56wk0PqlpILhIA6AVqU+f8zeAR5q8KRHAGA4NbH5Z82wnDwPCaI1G+LC5KQw6O2TKfiKy5h8c6Dwwvl4EsFfd8eDtZDTTP3799n1TcvNaNSh/QN8A+QlX8HevNZoGntQQMINzPPjFT1tfGWwJRzcoQo4A2iwKOEOSmqj0UYp4SJHvaZJMBtNZ0G5QITCYxKJeyQVnU/FCSVkuC81hFrqEcynbdUPfHbksp+ExuYtZGUVHyuXCc56TqbbOojnT1lduOEwaU8XiKw1X0t56HYd2604Q7NBrOHg8P3AqDyl/VIub8kty1dYr3U+hgTt3enjNz+YK3Smte8PLcP+OuPhaiLoPrPncgLEGC5N/UhIvbkQ/xh3cjspVz8Ea3tBsY0kEKdatkYJXOMY8OyIXmrqejDseqs6O9Y5ztZ8M9SNutR13X6rb6u6+5v50jVcYxu3e2z8BPXeUYtmrdHnN4EucAvJoPPr/NnvDfdXwTe5d07KvYv4LcaIxow==
---
##### Liaison de données réactives

Comme déjà mentionné, Vue utilise le binding via un un système de réactivité pour lier une donnée à la vue.

La réactivité se repose sur les [Proxys](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

___

Le modifier `v-bind` permet de lier une donnée à un attribut. 
`:` étant son raccourci

---
layout: fact
title: Réactivité ou Immutabilité
level: 5
hideInToc: true
---
# Réactivité <small>ou</small> Immutabilité ?

---
title: Réactivité ou Immutabilité
level: 5
layout: two-cols-header
hideInToc: true
---
# Réactivité <small>ou</small> Immutabilité ?

<style>h1 { text-align: center }</style>

::left::

<v-click fade hide>
<div>
<Reference absolute to="guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals" />

La réactivité est une manière de gérer les données, et c'est d'ailleurs la plus naturelle de le faire.

Il s'agit de modifier la valeur directement, quelle soit constante ou non.

```js
let texte = 'Bonjour'
const article = { nom: 'Sac' }

texte += ' !'
article.prix = 0.85
```

Vue (ainsi que Angular, Svelte et Solid) le pratique pour aligner les changements côté client automatiquement. 


**Un inconvénient existe :**<br> pour des développeurs non avertis, il peut vite arriver des surprises avec les référence.

</div>
</v-click>

::right::

<v-after>

L'immutabilité est inspirée du monde fonctionnel où pour modifier une donnée, il faut en retourner une nouvelle.

```js
const article = { nom: 'Sac' }
function ajouterPrix (prix) {
  return {
    ...article,
    prix
  }
}
const newArticle = ajouterPrix(0.85);
```

Une sécurité dans la manipulation de la donnée au détriment de la simplicité.

**Un inconvénient existe :**<br> performance au runtime pouvant être moindre

</v-after>


---
layout: iframe-right
url: https://sfc.vuejs.org/#eNqFUsFOwzAM/ZUoEhKItRkDLlOLxp0DEtdcstaDsCaNEqcgTft3nHatyiZBVbV5efaz/ZIDf3Yu7yLwNS9C5bXDJ2nh27UeWQ07FRtkB2kZqxWq65thzZgHjN6OiLGA4NZsOcBj+tGH3kJMogQQjGsUAiHGilp3/SI9RXDKsi7Tu1LyJMbKsmR3kk8Rrx6MBj9AkqX4EzfmQhNgJnDFVr3Ici6i9H8KU+wLBKYieggXGYUYe+/RNiK2NF+K2lSNrvanHm5vJafB0/SJe4u6UxYHhSGJmEJMtvAF1yZZnxnl8s/QWjqW3mN5IoLk69F1yencEpb8A9GFtRDRuv17XrVGbIgTPlrUBrK6NZv7fJU/PFLjAef7OQSTbX37FcBTRckXM3FBmx34zIOtwZP5fxU7i/1V8Iy7KDpeGH78AUUk1Aw=
---
##### Rendu conditionnel <Reference to="guide/essentials/conditional.html" />

Vue propose une directive pour rendre un élément de manière conditionnelle.

`v-if` prend comme valeur une condition boolean,  
si vrai, va rendre l'élément,  
si faux, ne va pas le rendre (et le retirer).

À la manière des conditions JS, on peut coupler des blocs via `v-else-if` et/ou `v-else`.

L'autre alternative pour cacher sans supprimer : `v-show` qui va simplement appliquer un style pour faire disparaitre de l'écran.

---
layout: iframe-right
url: https://sfc.vuejs.org/#eNp9UFtOwzAQvMrKPwWpiSUeP1GoyjkwH6HZgiF+dG2HSlHuziYhVVIkJMvemX2Mdzrx7H3eJhSFKMOBtI87ZfHsHUWo8VilJkKnLEBdxermdooBCGMiOyOARoeIBbzMGGCT7Ga7gDWm84qI5HRYMadURcIVddD2tCKCXkx5nYJ+ePjiU8rLEgwiGt9UERkBlKkZX44aDW12dPSkhOYa0HZaQIld1w1M35ey0VObHPtKeRkmtkKbwaDMVD7/DM6yeaMTPG5MBCWK2Rsl2N0BK/ERow+FlMn6r/f84Izcc05SslEbzGpn9vf5Xf7wKGv+zZLPMZjsjdx3QGJFJX4tGIdLJlukjNDWSEj/il3VrgSvcn9EZ5tF/wNgt7TT
---
##### Rendu de boucles <Reference to="guide/essentials/list.html" />

Pour transformer une liste de données en liste d'éléments, la directive `v-for` est de rigeur.

Il permet de répéter l'élément auquel il est utilisé et donner un contexte pour afficher les données.

<v-click hide>

```vue-html
<section v-for="information in informations">
  <datetime>{{ information.date }}</datetime>
</section>
```
</v-click>


<v-after>

On peut destructurer l'information et extraire l'information comme en JS
```vue-html
<section v-for="{ date } in informations">
  <datetime>{{ date }}</datetime>
</section>
```

</v-after>
---
---
#### optimiser la manipulation du DOM <Reference to="guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom" />

L'usage du Virtual DOM est déjà une optimisation de la manipulation DOM (très couteuse), présente depuis les débuts de Vue.

<div v-click max-w-400px mx-auto fade>

![](/virtual-dom.png)

</div>
<div v-click>

> Info: Vue travaille sur un mode appelé "**Vapor**" qui optimise l'usage du DOM sans Virtual DOM (à la sauce Solid.js)

</div>
---
hideInToc: true
---
#### optimiser la manipulation du DOM <Reference to="guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom" />

React utilise également le Virtual DOM mais un point d'optimisation lui manque : 
**la capacité changer son comportement de rendu sur les éléments statiques (sans contenu dynamique).**

Lors de la compilation, Vue va travailler en amont pour différentier les éléments :

- hisser les éléments staiques <Reference to="guide/extras/rendering-mechanism.html#static-hoisting" />
- marquer les attributs dynamiques <Reference to="guide/extras/rendering-mechanism.html#patch-flags" />
- identifier les blocs d'éléments selon certains critères <Reference to="guide/extras/rendering-mechanism.html#tree-flattening" />

<br>

> À l'exécution, Vue va éviter plusieurs opérations inutiles au DOM pour ne concentrer que celles qui soient absolument nécessaires.

---
---
### Évènements et interactions

<Toc mode="filterOnlyCurrentTree" minDepth="4" />

---
---
#### Écouter les événements <Reference to="guide/essentials/event-handling.html" />

La directive `v-on` ou son raccourci `@` permet d'ajouter une écoute d'évènements sur un élément.

Des modificateurs sont également applicables à cette directive: <Reference to="guide/essentials/event-handling.html#event-modifiers" />
- `.prevent`: permet d'annuler le comportement par défaut (`event.preventDefault()`)
- `.stop`: permet de stoper la propagation de l'évènement (`event.stopPropagation()`)
- `.self`: restreind l'écoute d'événement à l'élément seul (en excluant ses enfants)
  > TIP  
    L'ordre est important lors de l'utilisation de modificateurs, car le code correspondant est généré dans le même ordre. Par conséquent, l'utilisation de `@click.prevent.self` empêchera l'action par défaut du clic sur l'élément lui-même et ses enfants, tandis que `@click.self.prevent` empêchera uniquement l'action par défaut du clic sur l'élément lui-même.
- `.enter, .tab, .delete, .esc, .space, .up, .down, .left, .right` pour le clavier
- `.ctrl, .alt, .shift, .meta` pour le clavier et souris
- `.left, .right, .middle` pour la souris
- `.exact`: à utiliser avec d'autres modificateurs, va uniquement écouter l'événément correspondant exactement aux modificateurs

---
hideInToc: true
layout: iframe-right
url: https://sfc.vuejs.org/#eNq1Vc1u2zAMfhXCGJAWre2t6y5Z2qUYdtttV18Ui3HUyJIg0WmDog+059iLjZLjNEnbbAU2IIl+SH3fR4aiHrIb54pVh9k4m4TaK0fXlcF7Zz2BxLnoNMFDZQBapIWVYdyvAGqt6hNcoaFzaK1Uc4UermA0Oh08AIRGT71TQWuHcAYnW98vMAKxwpqHsyeEcUQ47QEezwcqsWLbwCYFib9hSn6RhTF5nZZ78HHgH/5Mym3svCBsnRaEvAKYsCwtA0ZbPDWZdUSW3XriaczD8qrK4lhl/fbGlWV1KU9grG+F3gCUPcIxvEJoYswUD1xd7yV7xLbR6atUKaXs8gYyr5rF63Qz2/ERkN6qP/JqhF33FzRMyr187me3oomAhcc5i1kQuXFZcmnehsL6psoGuc4naZucn7wbhHYGtEITNV5/5wms0AfYAkAQJoBHqTzWpCz/6eINrNbU+M+oY9YYq40VH5EGKQfZebH+lHEdwXSJa2nvzCCpkKiRMClLt4WVcxHXuLBaouf9H51j3xAivWqd5dlMI7uVryAzajo4XL8h2n4sSPgGqVgJ3SHHfcB2w3GuRB9rqgwBZLt6gfDNkP/18xhxTV7/L/avjM3N4FDEXuIn5U4H4GWgte6bQV/IQ9uRKrDXegwzbevl576WZtazhjFcuHsIVisJjcd1MvL5ZMy9kKrjVnrp7pMhdaL4HUQ8Y5hr7F3Zh6f5tpLGUFvdtWZjbIR7go1tUTUmVxwOs6WDgRNHG2vLOVQmJ8tnPrzfHnJCSmWanb2+Q6YsZOdZLB5PeStccRus4Zcjqa02hlBl20eiyvgOxHV/swJfrc64ZVPUti2nbCt9Z0i1mEvbTj8WF8Xlp5KDpt39AkObz7y9C+iZsco2z0ICL3mTL1vu0XBmY9kfITvw3SM8sD0jHR6L7PE3Xpdk/g==
---
#### Écouter les événements <Reference to="guide/essentials/event-handling.html" />

La valeur passée peut être le corps d'une fonction ou directement une fonction.

Il est préférable d'utiliser la fonction pour avoir accès à l'évènement plus simplement et éviter l'usage du `$event` pouvant être mal typé.

On peut appeler une fonction du composant, ou directement effectuer des petits changements d'état. Les variables dynamiques sont modifiables, mais à éviter pour des données critiques, il est préférable de laisser les fonctions s'en charger.

> L'écoute d'évènements ne se limite pas aux évènements natifs, mais également à ceux émis par les composants Vue.
---
layout: iframe-right
url: https://sfc.vuejs.org/#eNp9U81u2zAMfhXOGOAWqO2t6y5eumXrrjtt2EkXxWIcrbIkSHTaIsgD7Tn2YqNlJ3XaokB+RH4kP4r6uMu+el9ue8zqbBGboD19FlZ33gWCG9d5WAfXQV5WgzEE5sLifYIVrmVvCHbCAjQMO4uWYj06IKUPp/3F8KskybPzAxaQ+mBhN5yFFTT8KySpzc+Nu7M1rKWJOMbuH4t0SBunHimc/Z6Sfrm2NXgWSRIeOQBoo2M5KwvX8CbFzAsLy59Fdbw8G4SdNxzGFsBirdGoiAM2ZC3SWJaUKEf6a5GddiIyqGVDeosMzRpgf3Uoo/QWtoVeP42YcIDfTjcaDEZQ//4OAXHKrDh1bK2a9baoZm2zGenBjDdY9USOhz2mKx056qGGlXHN7afBKWjlgsJQw6W/h+iMVtAGfEgg5yewCFLpnmd/5e8TkMY3fA9NPGNYGxxDOYaPhdIBeSqO37dxpu/sBLbSP5YFkEa3ttB8HWZLifxogSa0k6HVtiDHOe/fHZO8VErbduYbnzVNIbvIRk0XnfTln+gs6z11KyYgiuyoKpGxzgdbZBsiH+uq6q2/bUsWebVkrAq9Jd1hoVy3/FBellcf+U0izf0lxq5YBXcXMTCjyJKAp+IVO7fDSNHyZDG8SvYk9oTwCfaM9KBwHsBhgU82/aVV9sFxG4dhjDKu4ZtzBiUL64WVOVkYQYtJcMvG6OaW9f0WO01n+Xxl8oup8vlR8bvd5IIvkN/IZoMhhxryH84S3y2H/f7ZNiyqketU/9n+P2rzovY=
---
#### Émettre des événements <Reference to="guide/components/events.html" />

Un composant peut transmettre des informations à son parent via l'émission d'évènements.
Depuis le template, l'usage de `$emit` permet de le faire en fournissant en paramètres :
- le nom de l'évènement
- les éventuelles données à transmettre

---
layout: image-right
image: /transition-classes.png
---
#### Transition entre état et style <Reference to="guide/built-ins/transition.html" />

Après certaines interactions utilisateur, il peut y avoir besoin d'afficher ou cacher des éléments de manière fluide:

Pour cela, les `Transition` peuvent avoir leur rôle à jouer.

Les transitions jouent sur les changements d'état et synchronise des classes d'entrée et de sortie de manière à pouvoir styliser les éléments et utiliser des transitions CSS.

Il est possible de modifier le comportement du modification du DOM via le mode : 'out-in' qui permet d'attendre la fin de l'animation de sortie pour ajouter l'élément suivant à afficher.
---
hideInToc: true
layout: iframe-right
url: https://sfc.vuejs.org/#eNp9VM1u2zAMfhXOGOAWqO2uay9eunXrrjut2MkXxVIcrbIkSHTaIMgD7Tn2YqPknzjJNiCxLZIfP/6I3CWfrc03nUjKZOFrJy1+rLRsrXEIj6a1sHKmhTQvwiEYppUWr1HNxYp1CmFXaYCa1EYLjb7sBRDh4Wt/FZ6cIbu4HHVOYOc07MJ3pSsMby6QSfV9bV50CSumvOht9wcnrcC14QcKo79G0JNpGiUuPDIUEwcArqXPZ27hHt5Em7njStNvUUzJ0wFFaxWZ0QlgsZJCcS+CLqAWsSwPGCl7+vsqOY6kSqBkNcqNINUsAJIXo5snx7SXKI0GzdpguGI8IFvDw8l0mElCDPaE4HIDm0yuTn1OFgA/jKwlKOGB//4VTPyELgg+chcH8j7HYpbkopjlT0ePW9WXYtkhUrhDfbn0ZLUtYalM/fwhCCtcGseFK+HGvoI3SnJonNhGJeGjMnOMy46aeGtfoyL2IfzHIM4YVkr0pmRDnxmXTlB5DV2U2qiu1YOyYfbgFoAp2ehMUjrEFoHUfYeDtmWukTpDQ5h31xPIMs6lbmYyii+88tCfjK44pdA3N97JXqwE24hBPIaPU5FLMJbVErdwnd95EMyLf3kO83bmF81043s/JVyPDujqxgYlV0k/t1nLbP7TG00zHVHVoPBVMk1OldAsh3OVrBGtL4ui0/a5yWmQiwfSFa7TKFuRcdM+vM9v8ts7ukEe5/Jc+DZbOvPihSPGKomBD84LEm5Ct4Wmpgv3X7IT2yPCE90Z6TjFVIBxSR1ts7+tK+sMhTEWo29bCV+MoXrHlpythZOlMIzCQ61k/UwD+Va0Ei/S+VZIrwbHl9OI7naDCD5B+sjqtXAplJB+MxoptRT2+7PhXRQ91/FkJvs/N43sow==
---
#### Transition entre état et style <Reference to="guide/built-ins/transition.html" />

Après certaines interactions utilisateur, il peut y avoir besoin d'afficher ou cacher des éléments de manière fluide:

Pour cela, les `Transition` peuvent avoir leur rôle à jouer.

Les transitions jouent sur les changements d'état et synchronise des classes d'entrée et de sortie de manière à pouvoir styliser les éléments et utiliser des transitions CSS.

Il est possible de modifier le comportement du modification du DOM via le mode : 'out-in' qui permet d'attendre la fin de l'animation de sortie pour ajouter l'élément suivant à afficher.

---
title: Options API ou Composition API ?
level: 2
layout: fact
---
# Options API <small>ou</small> Composition API ?
## De la simplicité à la complétude
---
---

- intro préférence OAPI/CAPI
- forces / faiblesses
- ref / reactive
- computed
- setup
- cycles de vie
- macros
  - defineProps / defineEmits
- Utils: Vue Use

---
---
### Les Macros <Reference to="https://vue-macros.sxzz.moe" />

---
---
## Bonnes pratiques <Reference to="style-guide" />

Vue suggère une multitude de bonnes pratiques à suivre pour éviter les pièges au fur et à mesure du développement d'applications. En voici quelques unes :

<v-clicks fade>
<div>

- Définir les types des props correctement <Reference to="style-guide/rules-essential.html#use-detailed-prop-definitions" />
> Avec des types bien définis, les erreurs bêtes pourraient être évitées
</div>
<div>

- Utiliser des clés sur les boucles via `v-for` <Reference to="style-guide/rules-essential.html#use-keyed-v-for" />
> Pour donner du contexte à Vue pour la modications de la liste
</div>
<div>

- Eviter d'imbriquer `v-for` avec un `v-if` <Reference to="style-guide/rules-essential.html#avoid-v-if-with-v-for" />
> `v-if` ayant une priorité sur `v-for`, il peut y avoir des surprises: utiliser un `<template>` ou filtrer la liste en amont
</div>
<div>

- Utiliser du style cloisoné niveau composant <Reference to="style-guide/rules-essential.html#use-component-scoped-styling" />
> À l'exception des librairies, l'usage du `scoped style` évite que du style ne s'applique sans le vouloir en dehors du composant 
</div>

</v-clicks>
---
---
## Bonnes pratiques <Reference to="style-guide" />

<v-clicks fade at="0">
<div>

- Les raccourcis de directives <Reference to="style-guide/rules-strongly-recommended.html#directive-shorthands" />
> Les raccourcis de directives (`:` pour `v-bind:`, `@` pour `v-on:` et `#` pour `v-slot`) doivent toujours être utilisés ou ne jamais l'être.
</div>
<div>

- Expressions simples dans les templates <Reference to="style-guide/rules-strongly-recommended.html#simple-expressions-in-templates" />
> Les templates de composants ne doivent inclure que des expressions simples, avec des expressions plus complexes refactorisées en propriétés calculées ou en méthodes.
</div>
<div>

- Propriétés calculées simples   <Reference to="style-guide/rules-strongly-recommended.html#simple-computed-properties" />
> Les propriétés calculées complexes doivent être divisées en propriétés plus simples.
</div>

D'autres règles à suivre sur la page <Reference to="style-guide">des bonnes pratiques en Vue</Reference>

</v-clicks>
---
layout: image-right
image: /vue-tutoriel.png
---
## Mise en pratique

Après la théorie, passons à la pratique.

La documentation Vue propose depuis sa nouvelle version un tutoriel ainsi que des exemples.

**Rendez-vous sur la page [Tutoriel](https://vuejs-docs-fr.netlify.app/tutorial/) de Vue**

<a href="https://vuejs-docs-fr.netlify.app/tutorial/" target="_blank">
  <button bg-vue p="y-2 x-4" text-white dark:text-black hover="opacity-75" uppercase text-xs rounded><carbon-play-outline-filled/> Résoudre les 15 étapes</button>
</a>
---
hideInToc: true
---

## Mise en pratique (suite)

Créons ensemble une mini-application.

Créer un nouveau projet avec la commande `npm create vite@latest` ou via [vite.new/vue-ts](https://vite.new/vue-ts) (en ligne).

> Afficher une liste d'utilisateurs avec leur nom et pouvoir afficher les détails en cliquant dessus.  
> Les détails doivent être affichés de manière bien distincte (faites appel à votre imagination)  
> Pensez à créer autant de composants que nécessaire pour bien découper les parties de l'application

Utiliser la source de données [formation-vue.free.beeceptor.com](https://formation-vue.free.beeceptor.com)
> Liste des utilisateurs: `/users`  
> Détails d'un utilisateur: `/users/<id>`

<!-- https://beeceptor.com/console/formation-vue -->