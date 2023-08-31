import { Container, Heading } from "@chakra-ui/react";

export default function Navbar(){
     return(
          <Container>
               <Heading>
                    <button>
                         <img className="logo" src='../img/logo_FV_branco.webp' alt='logo fomenta vale'/>
                    </button>
               </Heading>
          </Container>
     )
}