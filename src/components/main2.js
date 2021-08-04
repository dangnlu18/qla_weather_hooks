import React, {useState, useEffect} from 'react'
import { menuActions } from '../menus'

import Weather from 'weather-view'


const Main = (props) =>{

    const [location, setLocation] = useState('San Diego')
    const [data, setData] = useState(null)
    const {rootRecord} = props


    const refreshData = () =>{
        const {rootRecord, menu} = props
        const data = rootRecord.getData()
        menu.updateToolbar(data)
        setData(rootRecord.getData())


    }

    const setupMenuActions = (rootRecord) =>{
        menuActions.toggleHighlight = () =>{
            rootRecord.getActions().onToggleHighlight();
        }
    }


    useEffect(() =>{
        const {rootRecord} = props
        rootRecord.listen(refreshData)
        refreshData()
    },[])

    return(
        <div className={"root"}>

                <input 
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />

                <Weather 
                    apiKey={'9597ddb7cfaf2f4b51709321265916ca'}
                    location={location}
                />
            </div>
    )
}


export default Main