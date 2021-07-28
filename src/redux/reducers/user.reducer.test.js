import userReducer from "./user.reducer"

// test Set_USER
// test UNSET_USER
// test other action
// test inital value

describe('USER REDUCER TESTS', () => {

    test('SET_USER', () => {
        const action = {
            type: 'SET_USER',
            payload: {
            id:1
            }
        }
        const state = {};
        expect(userReducer(state,action)).toEqual({id : 1})
    }) 

    test('UNSET_USER', () => {
        const action = {
            type: 'UNSET_USER'
        }
        const state = {id : 1};
        expect(userReducer(state,action)).toEqual({})
    }) 

})