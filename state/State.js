import GlobalStore from 'react-native-global-state-hooks';

const countStore = new GlobalStore(0);
const entrenamiento = new GlobalStore();
const login = new GlobalStore(false);
const alimentoAux = new GlobalStore();
const comidaIDAux = new GlobalStore();
const caloriasObjetivo = new GlobalStore(); 
const userId = new GlobalStore(); 

export const useCount = countStore.getHook();
export const useEntrenamiento = entrenamiento.getHook();
export const isSignedIn = login.getHook();
export const alimento = alimentoAux.getHook();
export const comidaID = comidaIDAux.getHook();
export const caloriasObjetivoAux = caloriasObjetivo.getHook();
export const userIdAux = userId.getHook();
