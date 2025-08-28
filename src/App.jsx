import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const initialFormState = {
    id: crypto.randomUUID(),
    name: '',
    age: '',
    gender: 'male'
  }
//Cometario para probar un ajuste en git
  const [form, setForm] = useState(initialFormState)
  const [patients, setPatients] = useState([])

  useEffect(() => {
    console.log(patients);

  }, [patients])


  const handleFormChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setPatients([
      ...patients,
      form
    ]
    )
    setForm(initialFormState)
  }

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <input
          required
          type="text"
          name="name"
          id="patient-name"
          value={form.name}
          onChange={(name) => handleFormChange(name)}
          placeholder='Patient Name' />

        <input
          required
          type="number"
          name="age"
          id="patient-age"
          value={form.age}
          onChange={(name) => handleFormChange(name)}
          placeholder='Patient Age' />

        <select
          name="gender"
          id="gender"
          onChange={(name) => handleFormChange(name)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Create Patient</button>
      </form>

      <section>
        {patients.length > 0 ? patients.map((patient) => (<p key={patient.id} > {patient.name} </p>)) : <p>No Patients Yet</p>}

      </section>

    </>
  )
}

export default App
