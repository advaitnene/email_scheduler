import React, {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import {data} from "../data/data.js";
import '../css/HomePage.css';

const Home = () => {
    //State to store the quotes.
    const [quotes, setQuotes] = useState(data.quotes)

    //Harcoded set of users to test the functionality.
    const [users, setUsers] = useState(["advaitnene@gmail.com", "devu@gmail.com", "rigved@123.com", "shreya@rediff.com", "yash@gmail.com", "TJ@gmail.com", "ravi@yahoo.com"])
    
    //State that will calculate the remaining time before the next quote appears on screen.
    const [timer, setTimer] = useState(60)

    //This will contain objects containing the user email, the set of remaining msgs and the selected message to be displayed on screen.
    const [userQuoteDict, setUserQuoteDict] = useState([])

    //State to display the timer on screen.
    const [displayTime, setDisplayTime] = useState("")

    /* On initial page load, quoteArr will have 10 values corresponding to the 10 quotes.
    For each user, a random number gets generated. That element is popped from the array.
    This random element will be stored in the selectedElement field which is used in the render function.
    */
    useEffect(() => {
        let quoteArr = []
        for (let i = 0; i < 10; i++) {
            quoteArr.push(i)
        }
        var userQuoteArr = [] 
        users.map((user, index) => {
            var randomElement = Math.floor(Math.random() * (quoteArr.length - 1))
            let newQuotes = quoteArr.filter((element, index) => {
                return randomElement !== index;
            });
            userQuoteArr.push({'user': user, 'quoteArr': newQuotes, 'selectedElement': randomElement})
        })
        setUserQuoteDict(userQuoteArr)
    },[])

    // This function gets called when the user clicks on Start button.
    const startQuotes = () => {
        //console.log("Use Effect ", userQuoteDict)
        setInterval(startTimer, 1000)
    }

    // This function gets called every second. 
    // Essentially, the things that happen on page load are the same things that happen in this function.
    // The array associated with each user should decrement by 1 after every call. It gets reinitialized to 10 in this code.
    const startTimer = () => {
        setTimer((prevState) => {return prevState - 1})

        //console.log("User Quote Dict is ", userQuoteDict)
        var newQuoteArr = []
        userQuoteDict.map((element, index) => {
            var randomElement = Math.floor(Math.random() * (element.quoteArr.length- 1))
            var quoteNumber = element.quoteArr[randomElement]
            let newQuotesArr = element.quoteArr.filter((element, index) => {
                return randomElement !== index;
            });
            newQuoteArr.push({'user': element.user, 'quoteArr': newQuotesArr, 'selectedElement': quoteNumber})
        })
        //console.log("Updated Dict is ", newQuoteArr)
        setUserQuoteDict(newQuoteArr)
    }

    // On timer change, the remaining time gets recalculated to display on screen. Nothing else!
    useEffect(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        //Depending on the number of seconds remaining, the code displays the time in MM:DD format.
        if (timer > 0) {
            if (minutes < 10 && seconds < 10) {
                setDisplayTime(`0${minutes}:0${seconds}`)
            } else if (minutes < 10) {
                setDisplayTime(`0${minutes}:${seconds}`)
            } else if (seconds < 10) {
                setDisplayTime(`${minutes}:0${seconds}`)
            } else {
                setDisplayTime(`${minutes}:${seconds}`)
            }
        } else {
            setTimer(60)
        }
    },[timer])

    return (
        <>
        <Nav/>
        <div style={{marginTop:'1rem'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <button className='startButton' onClick={startQuotes}>Start</button>
                <h3>Next quote in {displayTime}</h3>
            </div>

            <div className='gridStyleHomePage'>
            {userQuoteDict.map((element, index) => {
                 return (
                    <>  
                        <div key={index} className='boxStyleHomePage'>
                            <h3>{element.user}</h3>
                            <p className='textStyleHomePage' style={{padding:'10px'}}>{quotes[element.selectedElement].quote}</p>
                        </div>
                    </>
                )
            })}
            </div>

        </div>
        </>
    )

}

export default Home;