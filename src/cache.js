class Cache{
    constructor() {
        this.Arr = []
    }
    New(Key, Value, TimeLive = 1){
        let ic = new ItemCache(Key, Value, TimeLive)
        for (let i = 0; i < this.Arr.length; i++) {
            if(this.Arr[i].Key === Key){
                this.Arr[i] = ic
                return
            }
        }
        this.Arr.push(ic)
    }
    Get(Key){
        for (let i = 0; i < this.Arr.length; i++) {
            if(this.Arr[i].Key === Key){
                let v =  this.Arr[i].Value
                this.Arr[i].TimeLiveMinus()
                if(this.Arr[i].TimeLive === 0){
                    this.Arr.splice(i, 1);
                }
                return v
            }
        }
        return null
    }
    Stat(){
        let M = []
        for (let i = 0; i < this.Arr.length; i++) {
            let T = [this.Arr[i].Key,this.Arr[i].Value,this.Arr[i].TimeLive]
            M.push(T)
        }
        return M
    }
    length(){
        return this.Arr.length
    }
}
export {Cache}


class ItemCache{
    constructor(k, v, t) {
        this._Key = k
        this._Value = v
        this._TimeLive = t
    }
    get Key() {
        return this._Key;
    }
    get Value() {
        return this._Value;
    }
    get TimeLive() {
        return this._TimeLive;
    }
    TimeLiveMinus(){
        this._TimeLive--
    }
        
}
export {ItemCache}