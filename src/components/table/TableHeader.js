import { Fragment } from "react"


const TableHeader = props => {


    function header (){
        const tableHeader = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //"Week Number", 
        return tableHeader.map(day => <th>{day}</th>)
      }

    return (
        <Fragment>
            {header()}
        </Fragment>
    )
}

export default TableHeader