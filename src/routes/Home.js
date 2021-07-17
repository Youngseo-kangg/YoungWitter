import { dbService } from "myBase";
import React, { useState, useEffect } from "react"

const Home = () => {
    const [youngWeet,setYoungWeet] = useState("") // youngWeet 하나하나
    const [youngWeets, setYoungWeets] = useState([]) // 전체 youngWeets
    const getYoungWeets = async() => {
        const getYWeets = await dbService.collection("youngWeets").get()
        getYWeets.forEach((doc)=>{
            const youngWeetsObj = {
                ...doc.data(),
                id: doc.id,
            }
            setYoungWeets((prev)=>[youngWeetsObj, ...prev])
            console.log(youngWeets)
        })
    }
    useEffect(()=>{
        getYoungWeets();
    },[])
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
            <ul>
                {youngWeets.map((weet)=>{
                    return <li key={weet.id}>{weet.youngWeet}</li>
                })}
            </ul>
        </div>
    )
}
export default Home