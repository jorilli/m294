import { useState, useEffect } from "react";

export default function Countdown() {
    const [countdownValue, setCountdownValue] = useState("");
    const [timeRemaining, setTimeRemaining] = useState();

    const handleChange = (e) => {
        setCountdownValue(e.target.value);
    };

    const startCountdown = () => {
        const parsedValue = parseInt(countdownValue);
        if (!isNaN(parsedValue) && parsedValue > 0) {
            setTimeRemaining(parsedValue);
        }
    };

    useEffect(() => {
        if (timeRemaining > 0) {
            const intervalHandle = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(intervalHandle);
        }
    }, [timeRemaining]);

    return (
        <div>
            <h3>Countdown</h3>
            <input type="number" value={countdownValue} onChange={handleChange}/>
            <button onClick={startCountdown}>Start Countdown</button>
            <br/>
            <span>{timeRemaining}</span>
        </div>
    );
}
