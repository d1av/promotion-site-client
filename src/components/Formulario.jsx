import '../styles/Formulario.css'
import React , { useState } from 'react';
import Botao from './Botao';


export default function Formulario() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tax_id, setTaxId] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("null");
  const [message, setMessage] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://cebf6206-739c-4ddb-808c-af3474cd42aa.mock.pstmn.io", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          tax_id: tax_id,
          password: password,
          password_confirmation: password_confirmation,
          company: company,
          segment: segment,
        }),
      });
      if (res.status === 200) {
        setName("");
        setEmail("");
        setTaxId("");
        setPassword("");
        setPasswordConfirmation("");
        setCompany("");
        setSegment("");
        setMessage("O cadastro foi feito com sucesso!");
      } else {
        setMessage("Ocorreu um erro");
      }
    } catch (err) {
      console.log(err);
    }
  };


  function segmentChange(e) {
    setSegment(e.target.value);
  }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className='tabela-topo text-center font-extrabold text-3xl mb-5'>CADASTRE-SE</h1>
                <h2 className='tabela-descricao text-center font-extrabold text-m'>
                Preencha os campos abaixo para validar sua participação
                <br /> na campanha e concorrer aos prêmios.</h2>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan='2'>
                            <p className='texto-input'>
                                <span className='text-sm'>Nome: </span>
                                <input
                                onChange={(e) => setName(e.target.value)}
                                className='inserir'
                                placeholder='Nome'
                                maxLength="150"
                                required
                                ></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='texto-input'>
                            <span className='text-sm'>CPF:</span>
                            <input
                            onChange={(e) => setTaxId(e.target.value)}
                            id='tax_id'
                            type='text'
                            className='inserir'
                            placeholder='000.000.000-00'
                            pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}'
                            maxLength="14"
                            minLength="11"
                            required
                            ></input>
                            </p>
                        </td>
                        <td>
                        <p className='texto-input'>
                        <span className='text-sm'>E-mail:</span>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        className='inserir'
                        placeholder='E-mail'
                        type='email'
                        maxLength="200"
                        required
                        ></input></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='texto-input'>
                            <span className='text-sm'>Senha:</span>
                            <input
                            onChange={(e) => setPassword(e.target.value)}
                            id='password'
                            className='inserir'
                            placeholder='Senha'
                            type="password"
                            minLength='6'
                            maxLength='50'
                            required
                            ></input></p>
                        </td>
                        <td>
                            <p className='texto-input'>
                            <span className='text-sm'>Senha:</span>
                            <input
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            id='password_confirmation'
                            className='inserir'
                            placeholder='Confirme sua Senha'
                            type='password'
                            minLength='6'
                            maxLength='50'
                            required
                            ></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='texto-input'>Empresa:
                                <input
                                onChange={(e) => setCompany(e.target.value)}
                                id='company'
                                className='inserir'
                                placeholder='Empresa'
                                type='text'
                                maxLength="150"
                                required
                                ></input>
                            </p>
                        </td>
                        <td><p className='texto-input'>
                            <span className='text-sm'>Classificação:</span></p>
                            <select name="select"
                            onChange={segmentChange}
                            value={segment}
                            className='segment inserir pr-5'

                            >
                                    <option disabled value='null'>Escolha sua Categoria</option>
                                    <option value="Manager">Gerente</option>
                                    <option value="Reseller">Revendedor</option>
                                    <option value="Distributor">Distribuidor</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <Botao texto='ENVIAR' type='submit' color></Botao>
                        </td>
                    </tr>
                    <tr>
                        <td>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    )
}