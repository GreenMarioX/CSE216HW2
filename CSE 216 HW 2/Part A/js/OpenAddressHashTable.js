class KeyValuePair {
    constructor(initKey, initValue) {
        this.key = initKey;
        this.value = initValue;
    }
    
    toString() {
        return "(" + this.key + ", " + this.value.toString() + ")";
    }
}

export default class OpenAddressHashTable {
    constructor(initLength, initKeyLength) {
        this.length = initLength;
        this.size = 0;
        this.keyLength = initKeyLength;
        this.hashTable = [];
    }

    hashCode(key) {
        let charsSum = 0;
        for (let i = 0; i < key.length; i++) {
            let keyChar = key.charAt(i);
            let charAsNum = keyChar.charCodeAt(0);
            charsSum += charAsNum;
        }
        return charsSum % this.length;
    }

    generateKey() {
        let key = "";
        for (let i = 0; i < this.keyLength; i++) {
            let randomNum = Math.floor(Math.random() * 36);
            let randomChar;
            if (randomNum < 10) {
                randomNum += 48;
                randomChar = String.fromCharCode(randomNum);
            }
            else {
                randomNum += 55;
                randomChar = String.fromCharCode(randomNum);
            }
            key += randomChar;
        }
        return key;
    }
    
    // @todo - YOU MUST DEFINE THIS METHOD
    getValue(key) {
        let index = this.hashCode(key);
        for(let i = index; i < index + this.length; i++)
        {
            if(this.hashTable[i % this.length] == null)
            {
                return null;
            }
            if(this.hashTable[i % this.length].key == key)
            {
                return this.hashTable[i % this.length].value;
            }
        }
        
        
        return null;
    }
    
    // @todo - YOU MUST DEFINE THIS METHOD
    removeValue(key) {   
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    putValue(key, item) {
        let index = this.hashCode(key);
        let temp = new KeyValuePair(key, item);
        
        for(let i = 0; i < this.length; i++)
        {
            
            if(this.hashTable[i] == null)
            {
                continue;
            }
            if(this.hashTable[i] != null && this.hashTable[i].key == key)
            {
                this.hashTable[i].value = item;
                return;
            }
        }

        if(this.size != this.length)
        {
            for(let i = index; i < this.length + index; i++)
            {
                if(this.hashTable[i % this.length] == null)
                {
                    this.hashTable[i % this.length] = temp;
                    this.size = this.size + 1;
                    return;
                }
            }
        }
        else
        {
            let currentTable = [];
            for(let i = 0; i < this.length; i++)
            {
                currentTable[i] = this.hashTable[i];
            }
            this.hashTable = [this.length + this.length];
            this.length += this.length;
            for(let i = 0; i < this.length; i++)
            {
                this.hashTable[i] = null;
            }
            for(let i = 0; i < this.size; i++)
            {
                let kvp = currentTable[i];
                let kvpIndex = this.hashCode(kvp.key);
                for(let k = kvpIndex; k < this.length + kvpIndex; k++)
                {
                    if(this.hashTable[k % this.length] == null)
                    {
                        this.hashTable[k % this.length] = kvp;
                        break;
                    }
                }
                console.log(currentTable);
                console.log(this.hashTable);
            }
            this.putValue(key, item);
            return;
        }
    }
    
    toString() {
        let text = "[\n";
        for (let i = 0; i < this.length; i++) {
            let kvp = this.hashTable[i];
            let kvpDescription = "null";
            if (kvp != null) {
                kvpDescription = kvp.toString();
            }
            text += "   " + i + ": " + kvpDescription + "\n";
        }
        text += "]\n";
        return text;
    }
};