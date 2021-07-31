import React from 'react'

export const Employee = ({employee,onDelete}) => {
    return (
        <div>
            <table className="table">
                <th>
                    EID
                </th>
                <th>
                    ENAME
                </th>
                <th>
                    EAGE
                </th>
                <tr>
                <td>{employee.eId}</td>
                <td>{employee.eName}</td>
                <td>{employee.eAge}</td>
                </tr>
                </table>
                <button className="btn btn-danger" onClick={() => { onDelete(employee) }}>DELETE</button>
                
            
        </div>
    )
}
