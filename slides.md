---
theme: ./theme
highlighter: prism
lineNumbers: false
drawings:
  persist: true
css: unocss
layout: intro
title: VUE 3
---

# VUE 3

<span uppercase font-mono>de la théorie à l'application</span>

<div absolute bottom-6 right-15 text-right >
  Michel EDIGHOFFER, 7-8 décembre 2022
  <div text-cap>Capgemini Engineering</div>
</div>

<style>
  h1 {
    @apply text-vue;
  }
</style>


---

# Programme de la formation

- <span text-vue>Vue</span> (jour 1) 

  - Introduction et les bases fonctionnelles
  - Options API vs. Composition API
  - Mise en pratique

- Vitest + Cypress (jour 2)
  - Développement guidé par les tests unitaires
  - Tests d'intégration et bout en bout

---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg
---
# L'histoire de <span text-vue>Vue</span>

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
layout: fact
---
# Framework ou Librairie ?

### Une petite explication s'impose
---
layout: image-right
image: https://tomasp.net/blog/2015/library-frameworks/diagram-narrow.png
---

# Framework / Librairie

<div text-gray font-bold font-mono>Framework :</div> Ensemble de règles imposées techniquement pour guider un travail à effectuer.

<div m-t text-gray font-bold font-mono>Librairie :</div> Ensemble de solutions techniques prêt à l'emploi

<br>
<br>

Malgré son apparence de librairie,  
**<span text-vue>Vue</span> se positionne comme un framework grâce à son écosystème**.

<!--
Vue seul représente le noyau apportant le minimum nécessaire pour
bénéficier de la réactivité sur les vues utilisateur.

Grâce aux projets officiels et communautaires autour de lui, il devient un framework imposant certaines règles mais gardant toujours l'ouverture nécessaire pour substituer les parties agrémentées
-->
---
