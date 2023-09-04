import {
     Button, Input,FormControl, FormLabel, RadioGroup, Radio,
   } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubmitHandler, useForm, useFormState, Controller } from 'react-hook-form';
import * as yup from 'yup';
import Navbar from '../components/cabecalho/cabecalho';
import Footer from '../components/rodape/rodape';
    
   function Empresa() {
    const schema = yup.object().shape({
      nomeEmpresa: yup.string().required(),
      cnpj: yup.string().required(),
      descricao: yup.string().required(),
      endereco: yup.string().required(),
      email: yup.string().email().required(),
      parceiro: yup.boolean().required(),
    });
   
     const {register, handleSubmit: onSubmit, watch, formState: {errors}, } = useForm({
      resolver: yupResolver(schema),
     });
   
    const handleSubmit = (data: object) => {
      console.log(data);
    }

    
    
     return (   
       <>
        <Navbar/>
       <form onSubmit={onSubmit(handleSubmit)}>
         <FormControl id="nomeEmpresa" mt='16px'>
            <FormLabel>Nome da empresa:</FormLabel>
            <Input type="text" {...register("nomeEmpresa", {required: true})} />
         </FormControl>

         <FormControl id="cnpj" mt='16px'>
            <FormLabel>CNPJ da empresa:</FormLabel>
            <Input type="text" {...register("cnpj", {required: true})} />
         </FormControl>

         <FormControl id="descricao" mt='16px'>
            <FormLabel>Descrição da empresa</FormLabel>
            <Input type="text" {...register("descricao", {required: true})} />
         </FormControl>
         
         <FormControl id="endereco" mt='16px'>
            <FormLabel>Endereço da empresa:</FormLabel>
            <Input type="text" {...register("endereco", {required: true})} />
         </FormControl>

         <FormControl id="email" mt='16px'>
            <FormLabel>E-mail da empresa:</FormLabel>
            <Input type="email" {...register("email", {required: true})} />
         </FormControl>

         <FormControl id='parceiro' mt='16px'>
           <FormLabel>Parceiro:</FormLabel>
           <RadioGroup defaultValue='' display="flex" gap="16px">
             <Radio value="true" {...register('parceiro', {required: true})}>Sim</Radio>
             <Radio value="false" {...register('parceiro', {required: true})}>Não</Radio>
           </RadioGroup>
         </FormControl>
   
        <Button type='submit'
         m="auto"
         display="flex"
         mt="20px">Cadastrar empresa</Button>
       </form>
       <Footer />
       </>
     )
   }
   
   export default Empresa
   