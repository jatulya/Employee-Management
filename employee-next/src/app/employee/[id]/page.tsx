const Details = ({params} : {params : {id : string}}) => {
    const {id} = params
    console.log("id : ", id)
    return <div > Employee Details of employee : {id} </div>
}

export default Details