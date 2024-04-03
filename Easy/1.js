<html>
    <head></head>
    <body>
        <script>
            /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
            var twoSum = function (nums, target) {
                var current_elm = {
                    'index' : 0,
                    'value' : nums[0]
                };
                var sumIndex = []
                for(let i = 0; i < nums.length; i++)
                {
                    const curr = nums[i]
                    // debugger;
                    if(current_elm.index !== i){
                        if((curr + current_elm.value) > target){
                            current_elm = {
                                'index': current_elm.index +1,
                                'value' : nums[current_elm.index +1]
                            }
                            i = current_elm.index
                        }
                        console.log(current_elm,'',curr)
                        if(i !== current_elm.index  && (curr + current_elm.value) === target){
                        console.log(curr, current_elm.value)
                        console.log(i, current_elm.index)
                        var temp = [];
                        sumIndex.push(current_elm.index);
                        sumIndex.push(i);
                        console.log(temp,'temp')
                        }
                    }
                }
                
                if(sumIndex) return sumIndex;
            };
            var test =twoSum([0,4,3,0],0)
            console.log(test)
    </script>
    </body>
</html>