import Youngweet from "components/Youngweet";
import { dbService } from "myBase";
import React, { useState, useEffect } from "react"

const Home = ({userObj}) => {
    const [youngWeet,setYoungWeet] = useState("") // youngWeet 하나하나
    const [youngWeets, setYoungWeets] = useState([]) // 전체 youngWeets
    // 실시간 확인이 필요 없는 경우 -> get()활용
    // const getYoungWeets = async() => {
    //     const getYWeets = await dbService.collection("youngWeets").get()
    //     getYWeets.forEach((doc)=>{
    //         const youngWeetsObj = {
    //             ...doc.data(),
    //             id: doc.id,
    //         }
    //         setYoungWeets((prev)=>[youngWeetsObj, ...prev])
    //         console.log(youngWeets)
    //     })
    // }
    useEffect(()=>{
        // 실시간 확인하는 경우 -> onSnapshot 활용
        dbService.collection("youngWeets").orderBy("createdAt","desc").onSnapshot((snapshot) => {
            const yWeetArray = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            setYoungWeets(yWeetArray)
        })
        // 실시간 확인 필요 없는 경우
        // getYoungWeets()
    },[])

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("youngWeets").add({
            text: youngWeet,
            createdAt: Date.now(),
            createdBy: userObj.uid,
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
                    <Youngweet key={weet.id} weetsObj={weet} isOwner={weet.creatorId===userObj.uid}/>
                })}
            </ul>
        </div>
    )
}
export default Home