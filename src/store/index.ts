import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

/**
 * ApplicationState conecta os componentes com os estados do redux
 * - esportado e importando no /hooks.ts para definição de tipagem
 * Isso permite importá-los para qualquer arquivo de componente que precise usar os ganchos e evita possíveis problemas de dependência de importação circular.
 */
export type ApplicationState = ReturnType<typeof rootReducer>;
/**
 * AppDispatch tipo customizado específico da loja que inclui os tipos de middleware thunk e usá-lo com useDispatch
 * - esportado e importando no /hooks.ts para definição de tipagem
 * Isso permite importá-los para qualquer arquivo de componente que precise usar os ganchos e evita possíveis problemas de dependência de importação circular.
 */
export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
