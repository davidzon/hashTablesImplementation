class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const index = this.hashMod(key);
    const newNode = new KeyValuePair(key, value);

    if (this.data[index] === null){
      this.data[index] = newNode;
    } else {
      let current = this.data[index];

      while (current !== null){
        if (current.key === key){
          current.value = value;
          return;
        }
        current = current.next;
      }     

          newNode.next = this.data[index];
          this.data[index] = newNode;
      }
      
        this.count ++;
      }

  read(key) {
    const index = this.hashMod(key);
    let current = this.data[index];

    while (current) {
      if (current.key === key){
        return current.value;
      }
      current = current.next;
    }
    return undefined; 
  }


  resize() {
    const oldData = this.data;
    const oldCapacity = this.capacity;

    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    oldData.forEach(bucket => {
      let current = bucket;

      while (current){
          const index = this.hashMod(current.key);
          const newNode = new KeyValuePair(current.key, current.value);

          if (!this.data[index]){
            this.data[index] = newNode;
          } else {
            let existingNode = this.data[index];

            while (existingNode.next){
              existingNode = existingNode.next;
            }
            existingNode.next = newNode;
          }

          this.count++;
          current = current.next;
          }
      });
    }



  delete(key) {
    // Your code here 
  }
}


module.exports = HashTable;
