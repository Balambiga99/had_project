import {useState} from 'react';

const Consented_records = () => {
    const [granted_consents,setConsent] = useState([
        {patient_name: 'Ram', purpose: 'Heart Disease', author: 'mario', id: 1 },
        { patient_name: 'Shyam', purpose: 'Insomnia', author: 'yoshi', id: 2 },
        { patient_name: 'Meera', purpose: 'Diabetes', author: 'mario', id: 3 }

    ]);
    return(
        <div className = "Granted_consents">
            {granted_consents.map((consent) => (
                <div className='granted_consent-info' key = {consent.id}>
                    <h2>{consent.patient_name}</h2>
                    <p> Consent purpose: {consent.purpose}</p>
                    <p>Consent Id</p>
                    <p>Check Consent log</p>
                </div>
        ))}

        </div>
    );
}

export default Consented_records;