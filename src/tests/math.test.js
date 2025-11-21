const {sum,sub,mod}=require("../math")
test("sum 2+3=5",()=> expect(sum(2,3)).toBe(5));
test("sub 3-2=1",()=> expect(sub(3,2)).toBe(2));
test("mod 6%2==0",()=> expect(mod(6)).toBe(true));