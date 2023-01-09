import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { ApplicationState, AppDispatch } from ".";

/**
 * Pois useDispatch, o Dispatchtipo padrão não conhece thunks.
 * Para despachar thunks corretamente, você precisa usar o AppDispatchtipo customizado específico da loja que inclui os tipos de middleware thunk e usá-lo com useDispatch.
 * Adicionar um useDispatchgancho pré-digitado evita que você se esqueça de importar AppDispatchonde é necessário.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/**
 * aqui retiramos a necessidade de toda vez que importar useSelector ter que tipar o (state: RootState),
 * - assim ele tem acesso aos states do redux e digitando state.estados diponiveis
 * - TypedUseSelectorHook  permite que você crie facilmente um hook que seja digitado corretamente para o estado raiz do store.
 * - agora não importamos mais o useSelector e sim useAppSelector nos componentes
 */
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
