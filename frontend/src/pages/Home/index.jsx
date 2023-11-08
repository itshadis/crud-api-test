import FormAdd from "../../components/FormAdd";
import FormDetail from "../../components/FormDetail";
import TableUser from "../../components/Table"
import { useState } from "react"

const Home = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [userId, setUserId] = useState();

  const handleAdd = (e) => {
    e.preventDefault();

    setIsAdd(true);
  }

  return (
    <div>
      {
        isAdd ? (
          <FormAdd setIsAdd={setIsAdd} />
        ) : null
      }
      {
        isDetail ? (
          <FormDetail userId={userId} setIsDetail={setIsDetail} />
        ) :
        null
      }
      <div className="w-[80%] mx-auto py-10">
        <button onClick={handleAdd} className="bg-blue-500 text-white h-10 px-4 rounded-md mb-4">Tambah Data</button>
        <TableUser update={isDetail} change={isAdd} setIsDetail={setIsDetail} setUserId={setUserId} />
      </div>
    </div>
  )
}

export default Home