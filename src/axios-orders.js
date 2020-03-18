import axios from 'axious';

const instance = axios.create({
    baselineURL: 'https://react-my-burger-386c2.firebaseio.com/'
});

export default instance; 
