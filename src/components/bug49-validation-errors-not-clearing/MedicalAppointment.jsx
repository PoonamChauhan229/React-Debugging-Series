import { useState } from "react";
import "./MedicalAppointment.css";

const MedicalAppointment = () => {
    const [patientName, setPatientName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (patientName.trim() === "") {
            setError("Patient Name is required.");
            return;
        }

        alert("Appointment Booked Successfully");
    };

    return (
        <div className="container">
            <div className="card">

                <h2>React Debugging Series</h2>

                <h3>
                    Bug #49 - Validation Errors Not Clearing
                </h3>

                <input
                    type="text"
                    placeholder="Enter Patient Name"
                    value={patientName}
                    // Bug:
                    // onChange={(e) => {
                    //     setPatientName(e.target.value)
                    //     }
                    // }
                    onChange={(e) => {
                        setPatientName(e.target.value)
                        if(e.target.value.trim() !==""){
                            setError("")
                        }
                        }
                    }
                />
                {error && <p className="error">{error}</p>}

                <button onClick={handleSubmit}>
                    Book Appointment
                </button>

            </div>
        </div>
    );
};

export default MedicalAppointment;