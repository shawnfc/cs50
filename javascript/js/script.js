        // Function to change heading to say Goodbye
        // function goodbye() {
        //     document.querySelector('h1').innerHTML = 'Goodbye!';
        // }

        // const message = 'Hello!';

        // alert(message);

        // Count Function
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('button').onclick = count;
        })

        let counter = 0;

        function count() {
            counter++;
            document.querySelector('#count').innerHTML = counter;

            if (counter % 10 === 0) {
                alert(`Counter is at ${counter}!`)
            }
        }

        // Form manipulation

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('#form').onsubmit = function() {
                const name = document.querySelector('#name').value;
                alert(`How are you ${name}?`);
            }
        });

        // JS Styling
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.color-change').forEach((button) => {
                button.onclick = () => {
                    document.querySelector('#text').style.color = button.dataset.color;
                }
            })

            document.querySelector('#color-change').onchange = function() {
                document.querySelector('#myText').style.color = this.value;
            }
        });

        