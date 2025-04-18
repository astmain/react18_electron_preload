import { proxy, useSnapshot } from 'valtio';

const state = proxy({
    count: 0,
    name: 'Valtio',
    message: 'Hello, Valtio!'
});



export default state;