import React, { useState } from 'react'

function Viewbtn({ Complaint }) {
    const [MyRespo, setMyRespo] = useState([]);
    const [Complaints_id, setComplaints_id] = useState(Complaint);

    // re-use function (View button - MODAL)for View Responses to Complaints section (ADMIN)
    // Get the responses to display
    const getMyRespo = async () => {
        try {
            const res = await fetch(`http://localhost:5000/myResponse/${Complaints_id}`);

            // these are the arrays being retrieve from the API
            const MyRespoArray = await res.json();

            // converts date format to MM/DD/YYYY
            MyRespoArray.forEach(responses => {
            responses.date_res = (new Date(responses.date_res)).toLocaleString()
            }); 
            
            // if there is no data then display default value
            if (MyRespoArray.length === 0) {
                MyRespoArray.push({
                    date_res: "N/A",
                    message_gov: "No Response Yet"
                })
            }

            // data transfer from array to setState then map it at table
            setMyRespo(MyRespoArray);

        } catch (err) {
            console.error(err.message)
        }
    }

    // useEffect(() => {
    //     getMyRespo();
    //   }, []);
   
  return (
    <>
        {/* button of modal */}
        <div className='d-grid gap-2'>
            <button 
                type="button" 
                className="btn btn-success btn-lg" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${Complaints_id}`}
                // performs the fetch of data
                onClick={getMyRespo}
            >
                View
            </button>
        </div>
        {/* Header of inner modal */}
        <div className="modal fade" id={`id${Complaints_id}`} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 
                    className="modal-title fs-5 text-center" 
                    id="ModalLabel"
                >
                    Responses from Barangay
                </h1>
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                >
                </button>
            </div>
            
            {/* body of inner modal */}
            <div className="modal-body">
            
            <table className="table table-bordered border-success table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date Attended by Barangay</th>
                        <th scope="col">Response from Barangay</th>
                    </tr>
                </thead>
                <tbody>
                {MyRespo.map((Respo, ind) => ( 
                    <tr key={ind}>
                        <td>{Respo.date_res}</td>
                        <td>{Respo.message_gov}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
            {/* footer of inner modal */}
            <div className="modal-footer">
            {/* button of inner modal */}
            
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Viewbtn