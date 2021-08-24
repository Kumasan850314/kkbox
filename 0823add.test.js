/* step record
    1.npm init 
    2.update package.json 【"test": "jest"】
    3.npm run test
*/
// flow test
function add(a, b) {
    return a+b;
}

describe('add function test', function(){
    it('5+10=15', function(){
        expect(add(5, 10)).toEqual(15) // toBe or toEqual
    })    
})