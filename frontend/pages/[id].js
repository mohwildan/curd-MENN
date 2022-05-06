import { useState, useEffect } from "react";
import axios from "axios";
import {useRouter} from 'next/router'
function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const router = useRouter()
    const {id} = router.query

  const edit = async (e) => {
    e.preventDefault()
    try {
        await axios.patch(`${process.env.URL}${id}`, {
            name,
            email
        })
        router.push("/")
    } catch (error) {
        console.log(error);
    }
  }

  const getDataById = async () => {
    const res =  await axios.get(`${process.env.URL}${id}`)
    setName(res.data.name)
    setEmail(res.data.email)
      
  }

  useEffect(() => {
    getDataById()
  }, [])
  return (
    <section>
      <form onSubmit={edit}>
          <input type="text" placeholder="nama" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default EditUser;
