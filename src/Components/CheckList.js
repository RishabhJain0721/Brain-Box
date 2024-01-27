import React, { useState } from "react";


const style = {
  bg: `h-[100%] w-[30%] p-4 bg-gradient-to-r from-[#750080] to-[#600080] rounded-md my-4 float-right`,
  heading: `text-3xl font-bold text-center p-2`,
  form: `flex justify-between`,
  input: `p-1 text-xl border w-full text-black`,
  button: `border p-2 ml-2 bg-slate-50 text-2xl rounded-md`,
  count: `text-center p-2`,
  li: `text-black flex justify-between border bg-purple-300 my-2 capatialize rounded-md`, 
  row: `flex p-2`,
  button2: `p-2 cursor-pointer flex items-center`,
  text: `ml-2 cursor-pointer`,
  
};
export default function CheckList() {
  // const [todos, setTodos] = useState(["Keep Learning", "Practice Daily"]);
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);


  function addActivity() {
    //  setListData([...listData,activity]);
    //  console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  

  function removeActivity(i) {
    const updatedList = listData.filter((elem, id) => {
      return i !== id;
    })
    setListData(updatedList);
  }
  return (
    <div className={style.bg}>
      <h3 className={style.heading}>TO DO LIST</h3>
      <div className={style.form}>
        <input
          type="text"
          className={style.input}
          placeholder="Your To-Do subjects"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className={style.button} onClick={activity.trim()!==""?addActivity:null}>
          ➕
        </button>
      </div>
      <ul>
        {listData != [] &&
          listData.map((todo, index) => {
            return (
              <li className={style.li} key={index}>
                <div className={style.row}>
                  <p className={style.text}>{todo}</p>
                </div>
                <button onClick={() => removeActivity(index)} className={style.button2}>
                  ➖
                </button>
              </li>
            );
          })}
      </ul>
      <p className={style.count}>You have {listData.length} todos.</p>
    </div>
  );
}
