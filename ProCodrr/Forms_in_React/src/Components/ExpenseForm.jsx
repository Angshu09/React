import React, { useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses, expense, setExpense, editingRowId, setEditingRowId}) {
  const [title, setTitle] = useState(""); //initially empty
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  //When we use useRef to update the form
  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  const [errors, setErrors] = useState({});

  //this is used for the validation of the form fields
  const validateConfig = {
    title: [
      //in every array we are making some rules
      { required: true, message: "Please Enter Title" },
      { minLength: 5, message: "Title should be atleast 5 character long" },
    ],
    category: [{ required: true, message: "Please Select a Category" }],
    amount: [{ required: true, message: "Please Enter an Amount" }, {notNumber: true, message: "Please enter numbers only" }],
    email: [
      { required: true, message: "Please Enter an email" },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Your Emial is Invalid",
      },
    ],
  };

  //form validation function
  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      //best way to understand is to log the datas
      validateConfig[key].some((rule) => {

        if(rule.notNumber && (isNaN(value) || !isFinite(value))){
          errorsData[key] = rule.message;
          return true
        }

        //it iterates over the every array of the validateConfig object
        if (rule.required && !value) {
          //if the required is true and value is not present then it will work
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < 5) {
          //here we check that the title is greater or lower than 5
          errorsData[key] = rule.message;
          return true;
        }


        if (rule.pattern && !rule.pattern.test(value)) {
          //when test gives false for an invalid email we are turning that false into true via ! operator so for that we are able to show the error message on the screen
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    // if (!formData.title) {
    //   errorsData.title = "Title is Required";
    // }
    // if (!formData.category) {
    //   errorsData.category = "Category is Required";
    // }
    // if (!formData.amount) {
    //   errorsData.amount = "Amount is Required";
    // }

    setErrors(errorsData);
    return errorsData;
  };

  //overall this function handle the data after a person submitting the form(click on the add button)
  const handleSubmit = (e) => {
    e.preventDefault(); //here we prevent the auto reloading page on submition

    const validateResult = validate(expense); //Here we check our form inputs are valid or not
    if (Object.keys(validateResult).length) return;

    if(editingRowId){
      setExpenses((prev) => (
        prev.map((e) => {
          if(e.id === editingRowId){
            return {...expense, id: editingRowId}
          }
          return e
        })
      ))
      setExpense({
        title: "",
        category: "",
        amount: "",
        email: ""
      })
      setEditingRowId('')
      return
    }

    //Method 3 (Optimise)
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({
      title: "",
      category: "",
      amount: "",
      email: ""
    });

    //Method 4 using useRef
    // setExpenses((prev) => [...prev, {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID()
    // }])

    //Method 2
    // const expense = {title, category, amount, id: crypto.randomUUID()} //it makes a same object like previous code
    // setExpenses((prev) => [...prev, expense])
    // setTitle('')
    // setCategory('')
    // setAmount('')

    //Method 1
    /*const expense = {...getFormData(e.target), id: crypto.randomUUID()} //Here I create an object eg: {name: "Book", category: "Education", amount: 300, id: 48787f478be3b3}
    setExpenses((prev) => {
      return [...prev, expense] //It is returning an array that contains multiple objects, that is why we need the previous state eg: [{this is the prev object}, {this is the current object }]
    })
    e.target.reset()*/ //It is used to reset my form after adding the item
  };

  //We create this function because it accepts the form and return the form datas in the form of an object
  /* const getFormData = (form) => {
    const formData = new FormData(form) //here we are calling the formData constructor with a form, 
    const data = {} //This is the empty data object 
    for(let [key, value] of formData.entries()){ ////formData.entries() Returns an iterator for all key-value pairs
      data[key] = value //It dynamically adds the key and values to the empty data object 
    }
    return data //returned the created object 
  } */

  //When any input field is updated means on change this function is called
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      {/* <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          // ref={titleRef}
        />
        <p className="error">{errors.title}</p>
      </div> */}
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div> */}
      <Select
        label="category"
        value={expense.category}
        onChange={handleChange}
        defaultOption="Select Category"
        error={errors.category}
        arr={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />

      {/* <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          // ref={amountRef}
        />
        <p className="error">{errors.amount}</p>
      </div> */}
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      {/*This email field is basically for demo*/}
      <Input
        label="Email"
        id="email"
        name="email"
        value={expense.email}
        onChange={handleChange}
        error={errors.email}
      />

      <button className="add-btn">{editingRowId? 'Save' : 'Add'}</button>
    </form>
  );
}
