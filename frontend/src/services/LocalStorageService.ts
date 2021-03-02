export default class LocalStorageService {
    static getToken(token:string) {
      return localStorage.getItem(token);
    }
  
    static setToken(token:string) {
      localStorage.setItem('token', token);
    }
  
    static removeToken(token:string) {
      localStorage.removeItem(token);
    }
  }