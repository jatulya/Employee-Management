 const Icons = ({option} : {option : "edit" | "create"}) => {
    return (<>
        <div className="icon-div">
            <img src={option==="edit" ? "../../../assets/circle.png" : "../../../assets/plus.png"} alt="Icons" />
        </div>
    </>)
 }

 export default Icons