import { createStore } from '@autostorejs/react';

const { $, state,useReactive } = createStore({
    user: {
        firstName: 'zhang',
        lastName: 'fisher',
        fullName: (scope)=> {
            return scope.firstName + scope.lastName;
        }
    }
});