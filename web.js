function Rahi() {
            var number = document.getElementById("g1").value;
            var result = '';

            if (number !== '') {  // Check if the input is not empty
                for (var i = 1; i <= 10; i++) {
                    result += number + ' x ' + i + ' = ' + (number * i) + '<br>';
                }
                
                document.getElementById("hello").innerHTML = result, document.getElementById("hello1").innerHTML = "Thanks To Using Me"
            } else {
                document.getElementById("hello1").innerHTML = 'Please enter a number';
            }
        }