import { Fragment } from "react"


const TableHeader = () => {


    function header (){
        const tableHeader = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return tableHeader.map(day => <th>{day}</th>)
      }

    return (
        <Fragment>
            {header()}
        </Fragment>
    )
}

export default TableHeader