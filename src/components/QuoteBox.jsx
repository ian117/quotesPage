import React, { useState} from 'react';
import '../styles/main.css'


const QBFather = ({children, color}) => {
    return (<div className="QBFather transitionProp" style={{backgroundColor: color}}>{children}</div>)
}

const QuoteBox = ({quote,author,color, handler}) => {
    return (<div className="QuoteBox transitionProp" style={{color: {color}}}>
                <p>"{quote}"</p>
                <p className="textRigth transitionProp">-{author}</p>
                <div className="bttnParent transitionProp">
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="bttn2 transitionProp" style={{backgroundColor: color}}data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
                <span className="bttn2 transitionProp" onClick={handler} style={{backgroundColor: color}}>New Quote</span>
                </div> 
            </div>)
}

const QuoeteBox = ({data}) => {
    
    const colors = ["#f88f01","#30475e", "#f05454", "#295939", "16c79a", "393e46"]

    const [ colorClass, setColorClass] = useState(colors[Math.floor(Math.random() * colors.length)])


    function firstCall (obj) {
        const firstQuoteAndAuthor = [];
        const arrayName = "quotes";
        const position =  obj[arrayName][Math.floor(Math.random() * arrayName.length)]
        firstQuoteAndAuthor.push(position["quote"])
        firstQuoteAndAuthor.push(position["author"])
        return firstQuoteAndAuthor
    }

    const firstState = firstCall(data);
    
    
    const [ quote, setQuote] = useState(firstState[0])
    const [ autor, setAuthor] = useState(firstState[1]) 


    function newQuote (obj) {
        const arrayName = "quotes";
        const position =  obj[arrayName][Math.floor(Math.random() * arrayName.length)]
        const objQuote = position["quote"]
        const objAuthor = position["author"]
        setQuote(objQuote)
        setAuthor(objAuthor)
    }

    const handleNewQuote = (event) => {
        newQuote(data)
        setColorClass(colors[Math.floor(Math.random() * colors.length)])
    }


    return  (<QBFather color={colorClass}>
                <QuoteBox quote={quote} author={autor} color={colorClass} handler={handleNewQuote}></QuoteBox>
            </QBFather>)

}

export default QuoeteBox;