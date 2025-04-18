import {proxy} from 'valtio';

const BUS2 = proxy({
    count: 0,
    name: 'Valtio',
    message: 'Hello, Valtio!'
});

export default BUS2;