import { dbService } from "myBase";
import React, { useState } from "react"

const Home = () => {
    const [youngWeet,setYoungWeet] = useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("youngWeets").add({
            youngWeet,
            createdAt: Date.now(),
        })
        setYoungWeet("")
    }
    const onChange = (event) => {
        const {target:{value}} = event
        setYoungWeet(value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={youngWeet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120}></input>
                <input type="submit" value="youngWeet"></input>
            </form>
        </div>
    )
}
export default Home