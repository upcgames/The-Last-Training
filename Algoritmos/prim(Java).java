public class Algoritmos {
 5     public Grafo<T> arbolExpMinPrim(Grafo<T> g, T inicio) {
 6         // Obtengo la cantidad total de vértices
 7         int verticesTotales = g.getVertices().size();
 8         Vertice<T> vOrigen = g.buscarVertice(inicio);
 9         if (vOrigen != null) {
10             Grafo<T> gNuevo = new Grafo<>(g.isDirigido());
11             g.getVertices().stream().forEach((v) -> {
12                 gNuevo.agregarVertice(v.getContenido());
13             });
14             
15             // Para esta implementación, los pesos son números enteros.
16             PriorityQueue<Arco<T>> cola = new PriorityQueue<>((Arco a1, Arco a2) -> Integer.compare(a1.getPeso(), a2.getPeso()));
17 
18             int cont = 0;
19             
20             while (cont < verticesTotales) {
21                 for (Iterator<Arco> it = vOrigen.getArcos().iterator(); it.hasNext();) {
22                     Arco<T> arc = it.next();
23                     if (!arc.getDestino().isVisitado()) {
24                         cola.offer(arc);
25                     }
26                 }
27                 
28                 Arco<T> arco = cola.poll();
29                 if (!arco.getDestino().isVisitado()) {
30                     arco.getDestino().setVisitado(true);
31                     gNuevo.agregarArco(arco.getPrevio().getContenido(), arco.getDestino().getContenido(), arco.getPeso());
32                     cont ++;
33                     vOrigen = arco.getDestino();
34                 }
35             }
36             return gNuevo;
37             
38         }
39         return null;
40     }
41 }
