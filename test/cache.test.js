import {Cache} from "../src/cache";

test('Empty length cach = 0', () => {
    const c = new Cache()
    expect(c.length()).toBe(0)
});
test('length is worked', () => {
    const c = new Cache()
    c.New(45,'v1',3)
    c.New(41,'v2')
    expect(c.length()).toBe(2)
});
test('Rewrite is worked', () => {
    const c = new Cache()
    c.New(45,'v1',3)
    c.New(45,'v2',7)
    expect(c.length()).toBe(1)
});
test('Delete is worked', () => {
    const c = new Cache()
    c.New(45,'v1')
    c.New(42,'v2',7)
    let a = c.Get(45)
    expect(c.length()).toBe(1)
});
test('No key value is null', () => {
    const c = new Cache()
    c.New(45,'v1')
    expect(c.Get(42)).toBeNull()
});
test('TimeLive is 0 then value is null', () => {
    const c = new Cache()
    c.New(45,'v1')
    let a = c.Get(45)
    expect(c.Get(45)).toBeNull()
});
test('Getter is worked', () => {
    const c = new Cache()
    c.New(45,'v1')
    c.New(42,'v2')
    expect(c.Get(45)).toBe('v1')
});
test('Stat is worked', () => {
    const c = new Cache()
    c.New(45,'v')
    c.New(45,'v1',2)
    c.New(43,'v2',7)
    c.New(77,'v3')
    let a = c.Get(43)
    a = c.Get(77)
    let M = [[45,'v1',2],[43,'v2',6]]
    expect(c.Stat()).toEqual(M)
});