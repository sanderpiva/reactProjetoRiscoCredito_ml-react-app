import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Form() {

    const [person_age, setPerson_age] = useState("");
    const [person_income, setPerson_income] = useState("");
    const [person_emp_length, setPerson_emp_length] = useState("");
    const [loan_amnt, setLoan_amnt] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "person_age":
                setPerson_age(value);
                break;
            case "person_income":
                setPerson_income(value);
                break;
            case "person_emp_length":
                setPerson_emp_length(value);
                break;
            case "loan_amnt":
                setLoan_amnt(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await

                axios.post("https://predicaoriscocredito.azurewebsites.net/api",
                    {

                        person_age: parseFloat(person_age),
                        person_income: parseFloat(person_income),
                        person_emp_length: parseFloat(person_emp_length),
                        loan_amnt: parseFloat(loan_amnt)
                    });
            setResult(response.data);
        } catch (error) {
            console.error("Erro ao enviar a solicitação:",

                error);
        }
    };



    return (
        <div className="container mt-5">
            <h1 className="mb-4">Sistema de Predição de Risco de Crédito</h1>

            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-3">
                    <label htmlFor="person_age" className="form-label">Idade em anos

                        (person_age):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="person_age"
                        name="person_age"
                        value={person_age}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="person_income" className="form-label">Renda anual em $

                        (person_income):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="person_income"
                        name="person_income"
                        value={person_income}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="person_emp_length" className="form-label">Tempo de serviço em anos

                        (person_emp_length):</label>
                    <input

                        type="number"
                        className="form-control"
                        id="person_emp_length"
                        name="person_emp_length"
                        value={person_emp_length}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loan_amnt" className="form-label">Quantia solicitada em $

                        (loan_amnt):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="loan_amnt"
                        name="loan_amnt"
                        value={loan_amnt}
                        required
                        onChange={handleChange}
                        
                    />
                </div>

                <button type="submit" id="btn" className="btn btn-
primary">Enviar</button>

            </form>
            {result && (
                <div className="card-body">
                    <h2>Resultado da Predição</h2>
                    <p className="alert alert-primary">{result}</p>
                </div>
            )}

        </div>
    )
}
export default Form