export const TOKEN_KEY = "TOKEN";

// Define que a função isAuthenticated recebe o token se não for nulo
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

// Busca o token no sessionStorage
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

// Salva o token no sessionStorage
export const login = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

// Remove o token do sessionStorage
export const logout = () => {
  sessionStorage.clear();
  window.location.href = "/login";
};
