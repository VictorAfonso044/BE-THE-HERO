import React,{useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'; 
export default  function Register(){
    const [name, setName] =   useState('');
    const [email, setEmail] =   useState('');
    const [whatsapp, setWhatsapp] =   useState('');
    const [city, setCity] =   useState('');
    const [uf, setUF] =   useState('');
    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf};
        try{
        const response = await api.post('ongs',data);
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
    } catch (err){alert('Erro no cadastro, tente novamente.')}
}
    return(
<div className="register-conteiner">
<div className="content">
<section>
    <img src={logoImg} alt="BE-THE-HERO"/>
    <h1>Cadastro</h1>
    <p>Ong faça seu cadastro gratuito, entre na plataforma que conecta voluntarios a você</p>
    <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Ja Tenho Cadastro
            </Link>
       </section> 
<form onSubmit={handleRegister}>
    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
    <input type="email" placeholder="E-mail"  value={email} onChange={e => setEmail(e.target.value)}/>
    <input  placeholder="WhatsApp"  value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
    <div className="input-group">
    <input  placeholder="Cidade"  value={city} onChange={e => setCity(e.target.value)}/>
    <input  placeholder="UF" style={{ width: 80 }}  value={uf} onChange={e => setUF(e.target.value)}/>
    </div>
    <button className="button" type="submit">Cadastrar</button>
    </form>
</div>
</div>
    );
}