import axios from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormDetail = ({setIsDetail, userId}) => {
  const [userid, setUserid] = useState();
  const [username, setUsername] = useState();
  const [namalengkap, setNamalengkap] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = parseInt(userId);
    axios.get(`http://localhost:3003/api/user/${id}`)
    .then(res => {
      setUserid(res.data.data[0].userid);
      setNamalengkap(res.data.data[0].namalengkap);
      setUsername(res.data.data[0].username);
      setPassword(res.data.data[0].password);
      setStatus(res.data.data[0].status);
    });

  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = parseInt(userId);
    setLoading(true);

    try {
      await axios.put(`http://localhost:3003/api/user/update/${id}`, {
        userid, namalengkap, username, password, status
      });
    } catch (error) {
      console.log(error)  
    } finally {
      setLoading(false)
    }
    setIsDetail(false)
  }

  return (
    <div className="absolute z-10 w-screen h-screen bg-black opacity-90 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-10 rounded">
        <div className='flex justify-between gap-5'>
          <div>
            <div className="mb-2 block">
              <Label value="User Id" />
            </div>
            <TextInput className='w-60' onChange={e => {setUserid(e.target.value)}} type="text" placeholder="user id" required value={userid}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Username" />
            </div>
            <TextInput className='w-60' onChange={e => {setUsername(e.target.value)}} type="text" placeholder="Username" required value={username}/>
          </div>
        </div>
        <div className='flex justify-between gap-5'>
          <div>
            <div className="mb-2 block">
              <Label value="Nama Lengkap" />
            </div>
            <TextInput className='w-60' onChange={e => {setNamalengkap(e.target.value)}} type="text" placeholder="Nama Lengkap" required value={namalengkap}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label  value="Password" />
            </div>
            <TextInput className='w-60' onChange={e => {setPassword(e.target.value)}} type="password" placeholder="Password" required value={password}/>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label  value="Status" />
          </div>
          <TextInput onChange={e => {setStatus(e.target.value)}} type="text" placeholder="Status" required value={status}/>
        </div>
        {loading? (
          <Button className='w-32' disabled>Update</Button>
        ) : (
          <Button className='w-32' type="submit">Update</Button>
        )}
        <Button onClick={() => {setIsDetail(false)}} className='w-32 bg-red-700'>Kembali</Button>
    </form>
    </div>
  )
}

export default FormDetail;