import {
     Button,
   } from '@chakra-ui/react';
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubmitHandler, useForm, useFormState, Controller } from 'react-hook-form';
import Formulario from '../components/formulario.tsx/formulario';
import Parceiro from '../components/parceiro/parceiro';
    
   function Empresa() {
   
     const {register, handleSubmit: onSubmit, watch, formState: {errors}, } = useForm();
   
     const handleSubmit = (data: object) => {
       console.log(data);
     }
   
     return (   
       <>
       <form onSubmit={onSubmit(handleSubmit)}>
         <Formulario id="nomeEmpresa" titulo='Nome da empresa' tipo="text"
         {...register("nomeEmpresa", {required: true})}/>

         <Formulario id="cnpj" titulo='CNPJ da Empresa' tipo="text"
         {...register("cnpj", {required: true})}/>
   
        <Formulario id="descricao" titulo='Descrição da empresa' tipo="text"
         {...register("descricao", {required: true})}/>
   
        <Formulario id="endereco" titulo='Endereço da empresa' tipo="text"
         {...register("endereco", {required: true})}/>
   
        <Formulario id="email" titulo='Email da empresa' tipo="email"
         {...register("email", {required: true})}/>
   
        <Parceiro id="parceiro" titulo="Parceira" {...register("parceiro", {required: true})} />
   
        <Button type='submit'
         m="auto"
         display="flex"
         mt="20px">Cadastrar empresa</Button>
       </form>
       </>
     )
   }
   
   export default Empresa
   