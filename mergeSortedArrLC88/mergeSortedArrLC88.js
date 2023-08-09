function mergeSortedArray(nums1, m, nums2, n) {

    const copyOfNums1 = nums1.slice(0, m)
    const lenNums1Copy = m
    const lenNums2 = n

    let i = 0; // idx of copyNums1;
    let j = 0; // idx of nums2;
    let k = 0; // idx of nums1(original)

    while ((i < lenNums1Copy) || (j < lenNums2)) {

        if (i >= lenNums1Copy && j < lenNums2) {
            nums1[k] = nums2[j];
            j++;
            k++;
        } else if (j >= lenNums2 && i < lenNums1Copy) {
            nums1[k] = copyOfNums1[i]
            i++;
            k++;
        } else if (copyOfNums1[i] < nums2[j]) {
            nums1[k] = copyOfNums1[i]
            i++;
            k++;
        } else {
            nums1[k] == nums2[j]
            j++
            k++
        }
    }
    return nums1;
}


const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3
