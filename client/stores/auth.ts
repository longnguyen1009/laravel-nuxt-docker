import { defineStore } from 'pinia'
import { fetchWrapper} from '~/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/api/auth`;

export const useAuthStore = defineStore('auth', {
  state: () => ({
      // initialize state from local storage to enable user to stay logged in
      user: JSON.parse(localStorage.getItem('user') ?? ''),
      token: localStorage.getItem('token'),
      returnUrl: null
  }),
  actions: {
    async login(email: string, password: string): Promise<any> {
        const {user, access_token } = await fetchWrapper.post(`${baseUrl}/login`, { email, password });

        // update pinia state
        this.user = user;
        this.token = access_token;

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', access_token);

        // console.log(this.$router);
        // redirect to previous url or default to home page
        // router.push(this.returnUrl || '/dashboard');
    },
    logout() {
        this.user = null;
        localStorage.removeItem('user');
        // router.push('/login');
    }
  },
  getters: {
    
  },
})
