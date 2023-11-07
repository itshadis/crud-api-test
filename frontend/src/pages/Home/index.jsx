import { useState } from "react"
import TableUser from "../../components/Table"
import FormAdd from "../../components/FormAdd";

const Home = () => {
  const [isAdd, setIsAdd] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    setIsAdd(true);
  }
  return (
    <div className="">
      {isAdd? (
        <FormAdd setIsAdd={setIsAdd} />
      ) : <></>}
      <div className="w-[80%] mx-auto py-10">
        <button onClick={handleAdd} className="bg-blue-500 text-white h-10 px-4 rounded-md mb-4">Tambah Data</button>
        <TableUser change={isAdd} />
      </div>
    </div>
  )
}

export default Home