import { Wrapper, Product, NameProduct, DivPrice, Price, Description } from "../../styles/compontents/card";
import { data } from '../../mock/data'
import Image from "next/image";
import Button from "../Button";



export default function Card() {
    return (
        <Wrapper>
            {
                data.map((item)=>{
                    return (
                        <Product /* key={item.id} */>
                            <img src='https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000'/* {item.image} */ alt=''/* {item.name} */  style={{width:'200px', height:'200px', borderRadius:'10px'}}/>
                            <NameProduct>Nome do produto{/* {item.name} */}</NameProduct>
                            <DivPrice>
                            <Price>R$ 100{/* {item.price} */}</Price>
                            </DivPrice>
                            <Description>Aqui vem a descrição do produto {/* {item.description} */}</Description>
                            <Button/>
                        </Product>
                    )
                })
            }
        </Wrapper>
    )
}