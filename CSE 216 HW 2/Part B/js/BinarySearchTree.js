class Node {
    constructor(initKey, initData, initParent, initLeft, initRight) {
        this.key = initKey;
        this.data = initData;
        this.parent = initParent;
        this.left = initLeft;
        this.right = initRight;
    }
};

export default class BinarySearchTree {
    constructor(initKeyLength) {
        this.root = null;
        this.size = 0;
        this.keyLength = initKeyLength;
    }

    // @todo - YOU MUST UPDATE THIS METHOD SO A KEY ONLY HAS LOWERCASE LETTERS, NO NUMBERS
    generateKey() {
        let key = "";
        for (let i = 0; i < this.keyLength; i++) {
            let randomNum = Math.floor(Math.random() * 26);
            let randomChar;
            randomNum += 97;
            randomChar = String.fromCharCode(randomNum);
            key += randomChar;
        }
        return key;
    }

    putValueHelper(key, value, testNode)
    {
        if(key.localeCompare(testNode.key) < 0)
        {
            if(testNode.left == null)
            {
                testNode.left = new Node(key, value, testNode, null, null);
                this.size++;
                return;
            } 
            else
            {
                this.putValueHelper(key, value, testNode.left);
            } 
        }
        else if(key.localeCompare(testNode.key) == 0)
        {
            testNode.data = value;
            return;
        }
        else
        {
            if(testNode.right == null)
            {
                testNode.right = new Node(key, value, testNode, null, null);
                this.size++;
                return;
            }
            else
            {
                this.putValueHelper(key, value, testNode.right);
            }
        }
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    putValue(key, value) {
        if(this.root == null)
        {
            this.root = new Node(key, value, null, null, null);
            this.size++;
            return;
        }
        this.putValueHelper(key, value, this.root);
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    getValue(key) {
        let tempCheck = this.root;
        while(tempCheck != null)
        {
            if(tempCheck.key == key)
            {
                return tempCheck.data;
            }
            if(key.localeCompare(tempCheck.key) > 0)
            {
                tempCheck = tempCheck.right;
            }
            else if(key.localeCompare(tempCheck.key) < 0)
            {
                tempCheck = tempCheck.left;
            }
        }
        return null;
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    removeValue(key) {
        let current = this.root;
        let previous = null;
        
        while(current != null && current.key != key)
        {
            previous = current;
            if(key.localeCompare(current.key) < 0)
            {
                current = current.left;
            }
            else
            {
                current = current.right;
            }
        }
        if(current == null)
        {
            console.log("CANNOT DELETE SINCE DOES NOT EXIST");
            return;
        }
        if(current.left == null || current.right == null)
        {
            let newCurrent;
            if(current.left == null)
            {
                newCurrent = current.right;
            }
            else
            {
                newCurrent = current.left;
            }
            if(previous == null)
            {
                return;
            }
            if(current == previous.left)
            {
                previous.left = newCurrent;
            }
            else
            {
                previous.right = newCurrent;
            }
        }
        else
        {
            let p = null;
            let temp;

            temp = current.right;
            while(temp.left != null)
            {
                p = temp;
                temp = temp.left;
            }

            if(p != null)
            {
                p.left = temp.right;
            }
            else
            {
                current.right = temp.right;
            }
            current.data = temp.data;
            current.key = temp.key;
        }
        return;
    }

    toStringRecursively(traveller, level) {
        let text = "";
        if (traveller.left != null)
            text += this.toStringRecursively(traveller.left, level+1);
        for (let i = 0; i < level; i++) {
            text += "   ";
        }
        text += "   " + traveller.data.toString() + "\n";
        if (traveller.right != null)
            text += this.toStringRecursively(traveller.right, level+1);
        return text;        
    }

    toString() {
        return this.toStringRecursively(this.root, 0);
    }
}