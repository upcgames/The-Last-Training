package colaPrioridadSimpleEnlazada;
import colaException.*;

public class ColaPrioridad<T> implements colaPrioridadInterface.ColaPrioridad {
    class Celda<T> {
        T elemento;
        int prioridad;
        Celda sig;
    }
    private Celda cola;
    public ColaPrioridad() {
        cola = new Celda();
        cola.sig = null;
    }
    public boolean vacia() {
        return (cola.sig==null);
    } 
    public <T> primero() throws ColaVaciaException {
        if (vacia()) throw new ColaVaciaException();
        return cola.sig.elemento;
    }
    public int primero_prioridad() throws ColaVaciaException {
        if (vacia()) throw new ColaVaciaException();
        return cola.sig.prioridad;
    }      
    public void inserta(T elemento, int prioridad) {
        Celda<T> p,q;
        boolean encontrado = false;
        p = cola;
        while((p.sig!=null)&&(!encontrado)) {
            if (p.sig.prioridad<prioridad) 
                encontrado = true;
            else p = p.sig;
        }
        q = p.sig;
        p.sig = new Celda();
        p = p.sig;
        p.elemento = elemento;
        p.prioridad = prioridad;
        p.sig = q;
    }     
        public void suprime() throws ColaVaciaException {
        if (vacia()) throw new ColaVaciaException();
        cola = cola.sig;
    }
} // fin clase ColaPrioridad
