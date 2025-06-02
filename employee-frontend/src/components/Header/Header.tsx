import { useNavigate, useSearchParams } from 'react-router-dom'
import './Header.css'
import Select from '../select/Select'
import type { selectOptions } from '../../types/interfaces'
import { useState } from 'react'

const Header = ({heading, filter, icon} : {
    heading : string, 
    filter : boolean, 
    icon? : "Edit" | "Create"}) => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    const filterOptions : selectOptions[] = [
        {value : "Active", text : "Active"},
        {value : "Inactive", text : "Inactive"},{value : "Probation", text : "Probation"}, {value : "All", text : "All"}]


    const filterSelect = (e : any) => {
        const newParams = searchParams
        newParams.set("status", e.target.value)
        setSearchParams(newParams)
    }


    const urls  = 
        {"Create" : "../../assets/plus.png" ,
         "Edit" : "../../assets/pen.png" }

    const handleClick = (e : any, task : string) => {
        e.preventDefault()
        if (task==="Create") navigate("create")
        else navigate("edit") 
    }

    return (
        <header className="heading">
            <h1>{heading}</h1>
            
            <div className='right-items'>
                {filter ? 
                 <div className='filter'>
                    <p>Filter By</p>
                    <Select classname="filter-select" name="Filter" id="filter" label=""  options={filterOptions} onClick={filterSelect}/>
                </div>
                :
                <></>
                }
                
                {icon ? 
                    <div className='icon-button' onClick={(e)=> {handleClick(e, icon)}}>
                        <img className="icon" src={icon==="Create"? urls.Create : urls.Edit} alt={`${icon} - Icon`} />
                        <div className='task'><p>{icon} Employee</p></div>
                    </div> 
                : <></>
                }             
                               
            </div>
            
        </header>
    )
}

export default Header