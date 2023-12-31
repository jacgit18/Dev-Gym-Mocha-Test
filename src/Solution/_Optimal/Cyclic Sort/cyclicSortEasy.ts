// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’
// based on their creation sequence. This means that the object
// with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and
//  without any extra space. For simplicity, let’s assume we are passed an integer array containing
//  only the sequence numbers, though each number is actually an object.

export const cyclic_sort = (nums: number[]): number[] => {
  let index = 0
  const ArrayLength = nums.length

  while (index < ArrayLength) {
    const currentSubarray = nums[index]
    const decrementedSubarray = currentSubarray - 1

    if (currentSubarray !== nums[decrementedSubarray]) {
      ;[nums[decrementedSubarray], nums[index]] = [nums[index], nums[decrementedSubarray]] // swap indices
    } else {
      ++index
    }
  }

  return nums
}

// console.log(cyclic_sort([3, 1, 5, 4, 2]))
// console.log(cyclic_sort([2, 6, 4, 3, 1, 5]))
// console.log(cyclic_sort([1, 5, 6, 4, 3, 2]))
