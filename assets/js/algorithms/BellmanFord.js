function bellmanFord(vertexes, edges, source) {
  let distances = {};
  let parents = {};
  let c;
  if (source) {
    for (let i = 0; i < vertexes.length; i += 1) {
      distances[vertexes[i].id] = Infinity;
      parents[vertexes[i].id] = null;
    }
    distances[source.id] = 0;
    for (let i = 0; i < vertexes.length - 1; i += 1) {
      for (let j = 0; j < edges.length; j += 1) {
        c = edges[j];
        if (distances[c.from.id] + c.distance < distances[c.to.id]) {
          distances[c.to.id] = distances[c.from.id] + c.distance;
          parents[c.to.id] = c.from.id;
        }
      }
    }
    for (let i = 0; i < edges.length; i += 1) {
      c = edges[i];
      if (distances[c.from.id] + c.distance < distances[c.to.id]) {
        return undefined;
      }
    }
  }
  return { parents: parents, distances: distances };
}
