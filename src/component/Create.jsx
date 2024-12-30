import "../sass/form.scss"
const Create = () => {
  return (
    <div className="box">
    <div className="form">
      <h1>Add User</h1><hr/>
      <label>Name</label>
      <input type="text" placeholder="Enter Name"/>
      <label>Email</label>
      <input type="text" placeholder="Enter Name"/>
      <label>Age</label>
      <input type="text" placeholder="Enter Name"/>
    </div>
    <button>Submit</button>
    </div>
  )
}

export default Create
