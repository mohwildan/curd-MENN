import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/router'
function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const router = useRouter()

  const createUser = async (e) => {
    e.preventDefault()
    try {
        await axios.post(process.env.URL, {
            name,
            email
        })
        router.push("/")
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <section>
      <form onSubmit={createUser}>
          <input type="text" placeholder="nama" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default AddUser;
