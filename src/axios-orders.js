import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-386c2.firebaseio.com/'
});

export default instance;