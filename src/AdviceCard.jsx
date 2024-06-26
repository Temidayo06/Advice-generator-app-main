import React, { useState, useEffect } from 'react'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import axios from 'axios'

const AdviceCard = () => {
    const [advice, setAdvice] = useState("")

    const getAdvice = async () => {
        const response = await axios.get("https://api.adviceslip.com/advice")
        const advice = await response.data.slip
        setAdvice(advice)
    }
    useEffect(() => {
        getAdvice()
    }, [])
    return (
        <div className="card">
            <h4>
                ADVICE #{advice.id}
            </h4>
            <h2>
                "{advice.advice}"
            </h2>
            <img className='divider-desktop' src={dividerDesktop} alt="divider" />
            <img className='divider-mobile' src={dividerMobile} alt="divider" />
            <div className='dice' onClick={getAdvice}>
                <img src={dice} alt="dice" />
            </div>
        </div>
    )
}

export default AdviceCard