import { Fragment } from "react"


const TableHeader = props => {

    function customheader (){
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            <tr>
                {weekDays.map(day => <th>{day}</th>)} 
            </tr>
        )

    }
    return (
        <Fragment>
            {customheader()}
        </Fragment>
    )
}

export default TableHeader