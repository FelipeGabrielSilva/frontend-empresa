import {
     FormControl,
     FormLabel,
     Input,
     Button,
     RadioGroup,
     Radio,
   } from '@chakra-ui/react';
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubmitHandler, useForm, useFormState, Controller } from 'react-hook-form';
    
   function Empresa() {
   
     const {register, handleSubmit: onSubmit, watch, formState: {errors}, } = useForm();
   
     const handleSubmit = (data: object) => {
       console.log(data);
     }
   
     return (   
       <>
       <form onSubmit={onSubmit(handleSubmit)}>
         <FormControl id='nomeEmpresa'>
           <FormLabel>Nome da empresa:</FormLabel>
           <Input type='text' {...register("nomeEmpresa", {required: true})}/>
         </FormControl>
   
         <FormControl id='cnpj'>
           <FormLabel>CNPJ da empresa:</FormLabel>
           <Input type='text' {...register("cnpj", {required: true})}/>
         </FormControl>
   
         <FormControl id='descricao'>
           <FormLabel>Descrição:</FormLabel>
           <Input type='text' {...register("descricao", {required: true})}/>
         </FormControl>
   
         <FormControl id='endereco'>
           <FormLabel>Endereço:</FormLabel>
           <Input type='text' {...register("endereco", {required: true})}/>
         </FormControl>
   
         <FormControl id='email'>
           <FormLabel>E-mail:</FormLabel>
           <Input type='email' {...register("email", {required: true})}/>
         </FormControl>
   
         <FormControl id='parceiro'>
           <FormLabel>Parceiro:</FormLabel>
           <RadioGroup defaultValue='' >
             <Radio value="true" {...register("parceiro", {required: true})}>Sim</Radio>
             <Radio value="false" {...register("parceiro", {required: true})}>Não</Radio>
           </RadioGroup>
         </FormControl>
   
         <Button type='submit'>Cadastrar</Button>
       </form>
       </>
     )
   }
   
   export default Empresa
   