---
layout: fact
---
# Guider ses développements sous contrôle

## avec Vitest & Cypress

---

## Développements guidés par les tests unitaires

<Toc text-2xl mt-10 mode="filterOnlyCurrentTree" minDepth="3" />
---
layout: statement
---

### Principes

**TDD: des tests? Non, des intentions.**

<v-clicks fade>

Si un test n'est pas le résultat d'une direction que l'on veut donner, il existe un risque qu'il ne valide rien d'intéressant.

Tester, c'est assurer qu'un comportement (action ou input) fonctionne comme attendu (output).

L'écriture d'un test pendant l'écriture initiale d'un code permet d'avoir des directives et de sécuriser son travail en minimisant la perte de temps.

</v-clicks>

---
layout: image-right
image: /rouge-vert-refactor.png
---

### Méthodologie

Avant toute chose,  
**bien comprendre la fonctionnalité cible à atteindre, elle doit être bien spécifiée**.

Identifier les petites étapes pour y parvenir et commencer par la première :

- Ecrire un test qui couvre les attentes de l'étape
- Développer la fonctionnalité le plus rapidement jusqu'à que le test passe au vert
- Nettoyer le code de manière à le rendre conforme au projet tout en assurant que les tests restent au vert
- Passer à l'étape suivante
---
layout: image-right
image: https://vitest.dev/logo-shadow.svg
---

### Vitest <Reference to="https://vitest.dev" />

Outils de tests pour exécuter les tests qui permet de réutiliser la configuration Vite.

<style>
.shiki-container {
  --slidev-code-font-size: 10px;
  --slidev-code-line-height: 12px;
}
</style>

```ts
// transform.spec.ts
describe('transform raw data to specilized data', () => {

    it('should return string from object', () => {
        const transformedData = transformData({ 
            key: 'value' 
        });
        expect(transformedData).toBeTypeOf('string');
    })

    it('should render correctly the object', () => {
        const transformedData = transformData({ 
            bar: 'foo' 
        });
        expect(transformedData).toContain('foo');
        expect(transformedData).toContain('bar');
    })

})
```

Lancer le test avec :

```bash
npx vitest
```

---
---
### Tester les composants Vue

Via le plugin Vue de Vite, Vitest par défaut peut interpréter vos composants. (<Reference to="https://github.com/vitest-dev/vitest/blob/main/examples/vue/vitest.config.ts">exemple de config avec Vue</Reference>)

Il est néanmoins nécessaire d'ajouter une librarie pour pouvoir monter virtuellement vos composants et pourvoir y faire des assertions: `@vue/test-utils`

<Reference to="https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/vue?initialPath=__vitest__" absolute>EXEMPLE LIVE</Reference>

<style>
.shiki-container {
  --slidev-code-font-size: 10px;
  --slidev-code-line-height: 12px;
}
</style>

```ts
import Hello from '../components/Hello.vue'

describe('mount component', async () => {
 
    it('should be truthy', () => {
        expect(Hello).toBeTruthy()
    })

    it('should increment on click and calculate accordingly', () => {

    const wrapper = mount(Hello, {
        props: {
        count: 4,
        },
    });

    expect(wrapper.text()).toContain('4 x 2 = 8')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('4 x 3 = 12')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('4 x 4 = 16')
    })
})
```
---
layout: image-right
image: /tdd.jpg
---
### Mise en pratique

<p text-xl>

Exporter la logique de récupération des données utilisateur dans un composable (existant ou un nouveau selon votre choix).


</p>

> Suivez la méthodologie de test pour être guidé par les tests.