        // var firstNumber, secondNumber,  thirdNumber,  sum,  average, product; 

        //             // enter first number from user as a string
        //             firstNumber = window.prompt("Enter first integer");

        //             // enter second number from user as a string
        //             secondNumber = window.prompt("Enter second integer");

        //             // enter third number from user as a string
        //             thirdNumber = window.prompt("Enter third integer");

        //             // convert numbers from strings to integers
        //             firstNumber = parseInt(firstNumber);
        //             secondNumber = parseInt(secondNumber);
        //             thirdNumber = parseInt(thirdNumber);
        //             findLargNum(firstNumber,secondNumber,thirdNumber);

        //             function findLargNum(firstNumber,secondNumber,thirdNumber){
        //                 //determine result
        //                 if (firstNumber > secondNumber) {
        //                     if(firstNumber > thirdNumber) 
        //                     window.alert(firstNumber + " is largest");
        //                 }
        //                 else if(secondNumber > thirdNumber) window.alert(secondNumber + " is largest");
        //                 else window.alert(thirdNumber + " is largest");

        //                 var sum =  firstNumber + secondNumber + thirdNumber;
        //                 window.alert("the sum is " + sum); 
        //                 var average = (firstNumber + secondNumber + thirdNumber) / 3;
        //                 window.alert("the average is " + average);var product = firstNumber * secondNumber * thirdNumber;window.alert("the product is" + product);
        //             }








                    //  Initialising variables
        var number1, number2, number3, sum, average, product, largest, smallest;

        //Inpuing the Numbers 
        // parseInt is used to covert the var to integer value or else the result will be concatenation of all the values
        number1 = parseInt(window.prompt('Enter Number 1 :'));
        number2 = parseInt(window.prompt('Enter Number 2 :'));
        number3 = parseInt(window.prompt('Enter Number 3 :'));

        // Adding the Numbers
        sum = number1 + number2 + number3;

        // Finding the average
        average = parseInt(sum) / 3;

        // Finding Product 
        product = number1 * number2 * number3;

        // Checking the Largest value
        if (number1 > number2 && number1 > number3) {
            largest = number1;
        } else if (number2 > number1 && number2 > number3) {
            largest = number2;
        } else {
            largest = number3;
        }

        //Checking the smallest value

        if (number1 < number2 && number1 < number3) {
            smallest = number1;
        } else if (number2 < number1 && number2 < number3) {
            smallest = number2;
        } else {
            smallest = number3;
        }

        //Returning or Printing Result in Alert box
        window.alert('Sum : ' + sum + '\nAverage : ' + average.toFixed(2) + '\nProduct : ' + product + '\nLargest : ' + largest + '\nSmallest : ' + smallest);