import axios from "axios";
import Swal from "sweetalert2";
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const TableUser = ({change, update, setIsDetail, setUserId}) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers();

  }, [change,update]);

  const getUsers = async () => {
    const data = await axios.get('http://localhost:3003/api/user/all');
    return setUsers(data.data.data);
  }

  const handleDelete = (e) => {
    e.preventDefault();

    const id = parseInt(e.target.value);

    Swal.fire({
      title: "Hapus user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3003/api/user/delete/${id}`)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
      getUsers()
    });
  } 

  const handleDetail = (e) => {
    e.preventDefault();

    setUserId(e.target.value)
    setIsDetail(true);
  }

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>No</Table.HeadCell>
        <Table.HeadCell>Nama Lengkap</Table.HeadCell>
        <Table.HeadCell>Username</Table.HeadCell>
        <Table.HeadCell>Password</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Aksi</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {users &&
          users.map((user, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {index+1}
            </Table.Cell>
            <Table.Cell>{user.namalengkap}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.password}</Table.Cell>
            <Table.Cell>{user.status}</Table.Cell>
            <Table.Cell className="flex gap-2">
              <button onClick={handleDetail} className="h-8 px-3 text-white rounded bg-emerald-500" value={user.userid}>Detail</button>
              <button onClick={handleDelete} className="h-8 px-3 text-white rounded  bg-red-600" value={user.userid}>Hapus</button>
            </Table.Cell>
          </Table.Row>
        ))}\
      </Table.Body>
    </Table>
  )
}

export default TableUser;