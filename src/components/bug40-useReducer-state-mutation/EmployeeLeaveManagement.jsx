import { useReducer } from "react";
import "./EmployeeLeaveManagement.css";

const initialState = {
  employees: [
    {
      id: 1,
      name: "John Smith",
      leaveBalance: 12,
    },
    {
      id: 2,
      name: "Emma Wilson",
      leaveBalance: 15,
    },
  ],
};

function reducer(state, action) {
  if (action.type === "APPROVE_LEAVE") {
    const employee = state.employees.find(
      (emp) => emp.id === action.payload
    );
    employee.leaveBalance--;
    return state;
  }
  return state;
}

const EmployeeLeaveManagement = () => {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="container">

      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #40 - useReducer State Mutation
        </h3>

        {state.employees.map((employee) => (

          <div
            className="employee"
            key={employee.id}
          >

            <h4>{employee.name}</h4>

            <p>
              Leave Balance :
              {" "}
              {employee.leaveBalance} Days
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "APPROVE_LEAVE",
                  payload: employee.id,
                })
              }
            >
              Approve Leave
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default EmployeeLeaveManagement;