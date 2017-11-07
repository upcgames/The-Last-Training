#define MAX_NODES 1024 /* número máximo de nodos */
#define INFINITY 1000000000 /* un número mayor que cualquier ruta máxima */
int n, dist[MAX_NODES][MAX_NODES]; /* dist[i][j] es la distancia de i a j */

void shortest_path(int s, int t, int path[])
{
	struct state { /* la ruta en la que se está trabajando */
		int predecessor; /* nodo previo */
		int length; /* longitud del origen a este nodo */
		enum {permanent, tentative} label; /* estado de la etiqueta */
	} state[MAX_NODES];
	struct state *p;
	int i, k, min;
	for (p = &state[0]; p < &state[n]; p++) { /* estado de inicialización*/
		p->predecessor = -1;
		p->length = INFINITY;
		p->label = tentative;
	}
	state[t].length = 0; state[t].label = permanent;
	k = t; /* k es el nodo de trabajo inicial */
	do{ /* ¿hay una ruta mejor desde k? */
		for (i = 0; i < n; i++) /* este grafo tiene n nodos */
			if (dist[k][i] != 0 && state[i].label == tentative) {
				if (state[k].length + dist[k][i] < state[i].length) {
					state[i].predecessor = k;
					state[i].length = state[k].length + dist[k][i];
				}
			}
		/* Encuentra el nodo etiquetado tentativamente con la etiqueta menor. */
		k = 0; min = INFINITY;
		for (i = 0; i < n; i++)
		if (state[i].label == tentative && state[i].length < min) {
			min = state[i].length;
			k = i;
		}
		state[k].label = permanent;
	} while (k != s);
	/* Copia la ruta en el arreglo de salida. */
	i = 0; k = s;
	do {path[i++] = k; k = state[k].predecessor; } while (k >= 0);
}
