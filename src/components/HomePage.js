import React, {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import AddUser from '../components/AddUser.js'
import {data} from "../data/data.js";
import '../css/HomePage.css';

const quotes = data;
let myInterval;
const Home = ({ users, setUsers }) => {
    //Flag to Display/Hide the Add User Modal.
    const [userFlag, setUserFlag] = useState(false)

    //This will contain objects containing the user email, an array of remaining quotes and the selected message to be displayed on screen.
    const [userQuoteDict, setUserQuoteDict] = useState([])

    /* On initial page load, quoteArr will have 10 values corresponding to the 10 quotes.
    For each user, a random number gets generated. That element is popped from the array.
    This random element will be stored in the selectedElement field which is used in the render function.
    */
    useEffect(() => {
        //if (userQuoteDict.length === 0) {
            var userQuoteArr = [] 
            users.forEach((user, index) => {
                var randomIndex = Math.floor(Math.random() * (quotes.length- 1))
                var quoteNumber = quotes[randomIndex]
                var newQuotes = [...quotes]
                newQuotes.splice(randomIndex, 1)
                userQuoteArr.push({'user': user, 'quoteArr': newQuotes, 'selectedElement': quoteNumber})
            })
            setUserQuoteDict([...userQuoteArr])
        // } else {
        //     var userQuoteArr = [] 
        //     var randomIndex = Math.floor(Math.random() * (quotes.length- 1))
        //     var quoteNumber = quotes[randomIndex]
        //     var newQuotes = [...quotes]
        //     newQuotes.splice(randomIndex, 1)
        //     userQuoteArr.push({'user': users[users.length - 1], 'quoteArr': newQuotes, 'selectedElement': quoteNumber})
        //     var newQuoteDict = [...userQuoteDict, userQuoteArr]
        //     setUserQuoteDict([...newQuoteDict])
        // }
    },[users])

    // This function gets called when the user clicks on Start button.
    const startQuotes = () => {
        myInterval = setInterval(startTimer, 2000)
    }

    const handleUserModal = () => {
        clearInterval(myInterval)
        setUserFlag(true)
    }

    // This function gets called every second. 
    // Essentially, the things that happen on page load are the same things that happen in this function.
    // The array associated with each user should decrement by 1 after every call. It gets reinitialized to 10 in this code.
    const startTimer = () => {
        var newQuoteArr = []
        userQuoteDict.forEach((element, index) => {
            //debugger
            var randomIndex = Math.floor(Math.random() * (element.quoteArr.length- 1))
            var quoteNumber = element.quoteArr[randomIndex]
            element.quoteArr.splice(randomIndex, 1)
            newQuoteArr.push({'user': element.user, 'quoteArr': element.quoteArr, 'selectedElement': quoteNumber})
        })
        setUserQuoteDict([...newQuoteArr])
    }

    //console.log("User Quote ", userQuoteDict)
    return (
        <>
        <Nav/>
        <div style={{marginTop:'1rem'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <div style={{flexDirection:'row'}}>
                    <button className='startButton' onClick={startQuotes}>Start</button>
                    <button className='startButton' style={{margin:'1rem'}} onClick={handleUserModal}>Add User</button>
                </div>
                <h3>Next quote will appear every three seconds!</h3>
                {userFlag && <AddUser setUserFlag = {setUserFlag} users = {users}  setUsers = {setUsers} />}
            </div>
            
            <div className='gridStyleHomePage'>
            {userQuoteDict.map((element, index) => {
                 return (
                    <>  
                        <div key={index} className='boxStyleHomePage'>
                            <h3>{element.user}</h3>
                            {element.quoteArr.length > 0 ?
                            <p className='textStyleHomePage' style={{padding:'10px'}}>{element.selectedElement}</p> :
                            <p className='emptyMessage'>You have received all the messages!</p>}
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