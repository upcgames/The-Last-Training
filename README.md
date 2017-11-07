# The Last Training #
:zap: Can you be the fastest man in the world?

<div align="center">
  <img src="https://media.giphy.com/media/fW56oUG0CiYjC/giphy.gif">
</div>

| Windows | Mac | Linux |
|:-------------:|:---------:|:-------------------:|
|  **Version web** | **Version web** | **Version web** |
| [Aún no Disponible] | - | - |

## Enunciado
Trabajo Final del curso de Complejidad Algorítmica, consiste en la elaboración de un juego que, en una primera etapa haga uso de algoritmos de búsqueda y en una segunda etapa algoritmos de optimización basados en algoritmos codiciosos y (o) programación dinámica.

## Introducción
### Problema
En una desesperación por querer vencer a Savitar, Barry Allen mejor conocido como "The Flash" convoca a una reunión de velocitas a la que asisten Wally West "Kid Flash" y Jessie Wells "Jessie Quick". Dadas las circunstancias llegan a la conclusión de que deben hacer un entrenamiento de sus capacidades (velocidad y toma de decisión) en un escenario lleno de misiones con distintas dificultades.
### Objetivo
Para evaluar quien es el mejor tienen que empezar en un punto, haber cumplido todas las misiones planteadas en el mapa y luego terminar en otro. Gracias a esto se pueden evidenciar algoritmos de busqueda y optimización para la toma de decisiones y encontrar el camino más corto hacia la meta.

## Marco Conceptual
### Algoritmo de Prim
El algoritmo de Prim es un algoritmo perteneciente a la teoría de los grafos para encontrar un árbol recubridor mínimo en un grafo conexo, no dirigido y cuyas aristas están etiquetadas.
En otras palabras, el algoritmo encuentra un subconjunto de aristas que forman un árbol con todos los vértices, donde el peso total de todas las aristas en el árbol es el mínimo posible. Si el grafo no es conexo, entonces el algoritmo encontrará el árbol recubridor mínimo para uno de los componentes conexos que forman dicho grafo no conexo.

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg">
</div>

### Algoritmo de Dijkstra
El algoritmo de Dijkstra, también llamado algoritmo de caminos mínimos, es un algoritmo para la determinación del camino más corto dado un vértice origen al resto de los vértices en un grafo con pesos en cada arista. Su nombre se refiere a Edsger Dijkstra, quien lo describió por primera vez en 1959.
La idea subyacente en este algoritmo consiste en ir explorando todos los caminos más cortos que parten del vértice origen y que llevan a todos los demás vértices; cuando se obtiene el camino más corto desde el vértice origen, al resto de vértices que componen el grafo, el algoritmo se detiene. El algoritmo es una especialización de la búsqueda de costo uniforme, y como tal, no funciona en grafos con aristas de coste negativo (al elegir siempre el nodo con distancia menor, pueden quedar excluidos de la búsqueda nodos que en próximas iteraciones bajarían el costo general del camino al pasar por una arista con costo negativo).

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif">
</div>

## Tipos de Datos Abstractos
### Cola de Prioridades
Una cola de prioridades es un tipo de dato abstracto similar a una cola en la que los elementos tienen adicionalmente, una prioridad asignada. En una cola de prioridades un elemento con mayor prioridad será desencolado antes que un elemento de menor prioridad. Si dos elementos tienen la misma prioridad, se desencolarán siguiendo el orden de cola.

<div align="center">
  <img src="https://netmatze.files.wordpress.com/2014/08/priorityqueue.png">
</div>

### Grafos
En matemáticas y ciencias de la computación, un grafo (del griego grafos: dibujo, imagen) es un conjunto de objetos llamados vértices o nodos unidos por enlaces llamados aristas o arcos, que permiten representar relaciones binarias entre elementos de un conjunto. Son objeto de estudio de la teoría de grafos.
Típicamente, un grafo se representa gráficamente como un conjunto de puntos (vértices o nodos) unidos por líneas (aristas).
Desde un punto de vista práctico, los grafos permiten estudiar las interrelaciones entre unidades que interactúan unas con otras. Por ejemplo, una red de computadoras puede representarse y estudiarse mediante un grafo, en el cual los vértices representan terminales y las aristas representan conexiones (las cuales, a su vez, pueden ser cables o conexiones inalámbricas).

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/6n-graf.svg">
</div>

## Espacio de Búsqueda
[Aún no Disponible]


## SOBRE UPC LAB Y UPC GAMES
> En UPC LAB Somos un grupo de  de gente apasionada por la tecnología, que nos gusta desarrollar aplicaciones de todo tipo.
> También ayudamos y hacemos aplicaciones, si quieres más información escribe a: <upclabperu@gmail.com>.

> En UPC GAMES seguimos esta mentalidad, nos gusta hacer juegos; Visual Studio, Python, Unity, Unreal, Realidad Virtual, no importa la plataforma.  

> Estamos buscando activamente gente que crea en esta filosofía, para que pueda compartir sus juegos, pero mucho más que eso: 
> Comentar, corregir, sugerir, agregar funcionalidades y hacer juegos en grupo.

<div align="center">
  <a href="https://github.com/upclab">
    <img src="https://cloud.githubusercontent.com/assets/9372893/16879913/501dca4a-4a78-11e6-9783-3600e0b260d8.png">
  </a>
</div>
