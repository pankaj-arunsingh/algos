// https://algodaily.com/challenges/implement-a-hash-map
class HashMap {
  constructor() {
    this._storage = [];
  }
  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;
  }
  set(key, value) {
    const idx = this.hashStr(key);
    if (!this._storage[idx]) {
      this._storage[idx] = [];
    }
    this._storage[idx].push([key, value]);
  }
  get(key) {
    const idx = this.hashStr(key);
    if (!this._storage[idx]) {
      return undefined;
    }
    for (let keyval of this._storage[idx]) {
      if (keyval[0] === key) {
        return keyval[1];
      }
    }
  }
}
const dict = new HashMap();
dict.set("jess", "213-559-6840");
dict.set("james", "123-456-7890");
console.log(dict.get("jakes"));
dict.set("jakes", "123-456-7890-100");
console.log(dict.get("jakes"));
console.log(dict.hashStr("jess"));
