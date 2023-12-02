//This is a code to output either fizzbuzz if a number is divible by 3 and 5.
//fizz if a number is only divisble 3

for (i=1; i<=100; i++)
    {
        if(i%3===0 && i%5===0)
            {
                console.log("FizzBuzz");
            }
        else if(i%3===0)
            {
                console.log("Fizz");
            }
        else if(i%5===0)
            {
                console.log("Buzz");
            }
        else
            {
                console.log(i);
            }
    }
