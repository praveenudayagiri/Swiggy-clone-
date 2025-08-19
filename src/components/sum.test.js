import { sum } from "./sum";
test("Sum function Testing",()=>{
    const res=sum(3,4);
    expect(res).toBe(7);
});