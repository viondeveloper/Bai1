var sortSquares = function(nums)
    {
        let n = nums.length;
 
        
        for (let i = 0; i < n; i++)
            nums[i] = nums[i] * nums[i];
 
        nums.sort();
    }
 
    let nums = [ -6, -3, -1, 2, 4, 5 ];
    let n = nums.length;
 
    for (let i = 0; i < n; i++)
        console.log(nums);
 
    sortSquares(nums);
    for (let i = 0; i < n; i++)
        console.log(nums);