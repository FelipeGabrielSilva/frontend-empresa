import { FormControl, FormLabel, RadioGroup, Radio } from "@chakra-ui/react";

interface Props {
     id: string;
     titulo: string;
}

export default function Parceiro(props: Props){
     return(
          <>
          <FormControl id={props.id}>
           <FormLabel>{props.titulo}</FormLabel>
           <RadioGroup defaultValue='' display="flex" gap="16px">
             <Radio value="true">Sim</Radio>
             <Radio value="false">Não</Radio>
           </RadioGroup>
         </FormControl>
          </>
     )
}