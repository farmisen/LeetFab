const isPalindrome = (x: number): boolean => 
    x.toString() === x.toString().split("").reverse().join("")