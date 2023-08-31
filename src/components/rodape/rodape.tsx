import { Flex } from "@chakra-ui/react"

export default function Footer(){
     return(
          <Flex
          bg="#1A5D1A"
          flexDirection="column"
          color="white"
          p="20px"
          m="5% 0 0 0"
          >
               <Flex
               justifyContent="space-between"
               >
                    <Flex
                    display="flex"
                    flexDirection="column"
                    >
                         <h1>SOBRE</h1>
                         <p>Quem somos</p>
                         <p>Fale conosco</p>
                         <p>Anuncie</p>
                         <p>Política de privacidade</p>
                    </Flex>
                    <Flex
                    display="flex"
                    flexDirection="column">
                         <h1>REDES SOCIAIS</h1>
                         <p>Fomenta Vale</p>
                         <p>Fomentavale.oficial</p>
                         <p>Fomenta Vale</p>
                    </Flex>
               </Flex>
               <Flex
               mt="5%"
               gap="20px"
               textAlign="justify"
               flexDirection="column"
               alignItems="center">
                    <p>Os dados fornecidos estão sob a proteção das disposições estabelecidas pela Lei Geral de Proteção de Dados (LGPD). Essa legislação visa garantir a privacidade e a segurança das informações pessoais, regulamentando sua coleta, armazenamento, processamento e compartilhamento por parte das organizações. Nossos procedimentos e práticas estão em conformidade com os princípios da LGPD, assegurando que seus dados sejam tratados com o devido cuidado e respeito às normas legais.</p>
                    <p>Copyright © 2023 | Todos os direitos reservados à Voluntários</p>
               </Flex>
          </Flex>
     )
}