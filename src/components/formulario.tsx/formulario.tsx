import { FormControl, FormLabel, Input} from '@chakra-ui/react';

interface Props {
     id: string;
     titulo: string;
     tipo: string;
}

export default function Formulario (props: Props) {

     return(
          <>
          <FormControl id={props.id}
          mt="20px">
           <FormLabel>{props.titulo}</FormLabel>
           <Input type={props.tipo}/>
         </FormControl>
          </>
     )
}