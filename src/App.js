
import {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState("")
    let [arr, setArr] = useState([])
    var a = 0
    var b = 1
    var next;
    useEffect(() => {
        setArr(arr)
    }, [arr])


    const handleSubmit = (event) => {
        if (input === "") {
            console.log("Inavlid no")
        }
        else {
            let data = [0]
            for (let i = 1; i < input; i++) {

                next = a + b;
                a = b
                b = next
                data.push(a)

            }
            setArr(data)

        }

        var displayresult = arr.map((data) => {
            return (
                <li style={{color: "white"}} >{data}</li>
            )

        })
        event.preventDefault();
    }
    function handleInput(value) {
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
            setInput(parseInt(value))
            console.log(input)

        }



    }
    var displayresult = arr.map((data) => {
        return (
            <div style={{border: "1px solid white", margin: 5, padding: 5, borderRadius: "5px"}}>
                <p style={{minWidth: "100px", width: "fit-content"}}>{data}</p>
            </div>
        )

    })





    return (
        <div>
            <div style={{padding: 5}}>
                <h2><h1>Let's Play with Fibonacci Series</h1></h2>
            </div>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => handleInput(e.target.value)} placeholder="Enter the Number of term" type="text" required />
                    <button className="find-btn" type="submit"  >Find Series</button>
                </form>

            </div>
            <div className="show-result" >
                {displayresult}

            </div>
        </div>
    );
}

export default App;
