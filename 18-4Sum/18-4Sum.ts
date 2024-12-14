// Complexity should be O(n^3) (O(n^2) from 3sum and O(n) for the outer loop)
// this was a quick try. reusing my previous 3sum implementation but it's far 
// from being optimal

const threeSum = (nums: number[], target: number, startIdx: number): number[][] => {
    const results = []
    for (let i = startIdx + 1; i < nums.length - 2; i++) {
        let startIdx = i + 1
        let endIdx = nums.length - 1

        while (endIdx > startIdx) {
            const sum = nums[i] + nums[startIdx] + nums[endIdx]
            if (sum === target) {
                results.push([nums[i], nums[startIdx], nums[endIdx]])
                startIdx++
                endIdx--
            } else if (sum > target) {
                endIdx--
            } else {
                startIdx++
            }

        }
    }

    return results
};

const hash = (quadriplet: number[]): number => {
    const offset = 1e9;
    const primes = [31, 37, 41, 43]; // Prime multipliers for mixing
    let hashValue = 0;
    for (let i = 0; i < 4; i++) {
        const adjustedNum = quadriplet[i] + offset; // Shift to positive range [0, 2 * 10^9]
        hashValue = hashValue * primes[i] + adjustedNum;
        hashValue = hashValue >>> 0; // Ensure unsigned 32-bit integer
    }

    return hashValue;
}

const hash128 = (quadriplet: number[]): string => {
    const offset = 1e9; // Shift range to positive
    const modulus = BigInt("340282366920938463463374607431768211297"); // 2^128 - 159, a 128-bit prime
    const primes = [BigInt(31), BigInt(37), BigInt(41), BigInt(43)]; // Prime multipliers for mixing

    let hashValue = BigInt(0);
    for (let i = 0; i < 4; i++) {
        const adjustedNum = BigInt(quadriplet[i] + offset); // Convert to BigInt
        hashValue = (hashValue * primes[i] + adjustedNum) % modulus;
    }

    return hashValue.toString(); // Return the hash as a string (128-bit value)
};


const fourSum = (nums: number[], target: number): number[][] => {
    const result = new Map<string, number[]>()
    // const result = []
    nums.sort((a, b) => a - b)
    for (let idx = 0; idx < nums.length - 3; idx++) {
        const targetComplement = target - nums[idx]
        const triplets = threeSum(nums, targetComplement, idx)
        triplets.forEach((triplet) => {
            const quad = [nums[idx], ...triplet]
            quad.sort()
            result.set(hash128(quad), quad)
            // result.push(quad)
        })
    }

    return [...result.values()]
    // return result.filter(
    //     (item, index, self) => index === self.findIndex(obj => obj[0] === item[0] && obj[1] === item[1] && obj[2] === item[2] && obj[3] === item[3])
    // )

}