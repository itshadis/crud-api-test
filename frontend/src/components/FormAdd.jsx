import axios from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormAdd = ({setIsAdd}) => {
  const [userid, setUserid] = useState();
  const [username, setUsername] = useState();
  const [namalengkap, setNamalengkap] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      await axios.post('http://localhost:3003/api/user/create', {
        userid, namalengkap, username, password, status
      });
    
    } catch (error) {
      console.log(error)  
    } finally {
      setLoading(false)
    }
    setIsAdd(false)
  }
  return (
    <div className="absolute z-10 w-screen h-screen bg-black opacity-90 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-10 rounded">
        <div className='flex justify-between gap-5'>
          <div>
            <div className="mb-2 block">
              <Label value="User Id" />
            </div>
            <TextInput className='w-60' onChange={e => {setUserid(e.target.value)}} type="text" placeholder="user id" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Username" />
            </div>
            <TextInput className='w-60' onChange={e => {setUsername(e.target.value)}} type="text" placeholder="Username" required />
          </div>
        </div>
        <div className='flex justify-between gap-5'>
          <div>
            <div className="mb-2 block">
              <Label value="Nama Lengkap" />
            </div>
            <TextInput className='w-60' onChange={e => {setNamalengkap(e.target.value)}} type="text" placeholder="Nama Lengkap" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label  value="Password" />
            </div>
            <TextInput className='w-60' onChange={e => {setPassword(e.target.value)}} type="password" placeholder="Password" required />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label  value="Status" />
          </div>
          <TextInput onChange={e => {setStatus(e.target.value)}} type="text" placeholder="Status" required />
        </div>
        {loading? (
          <Button className='w-32' disabled>Tambah User</Button>
        ) : (
          <Button className='w-32' type="submit">Tambah User</Button>
        )}
        <Button onClick={() => {setIsAdd(false)}} className='w-32 bg-red-700'>Kembali</Button>
    </form>
    </div>
  )
}

export default FormAdd;