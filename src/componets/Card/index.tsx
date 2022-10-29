import {
  Wrapper,
  Product,
  NameProduct,
  DivPrice,
  Price,
  Description,
} from "../../styles/compontents/card";
import Button from "../Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Skeleton, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setData, setLoading } from "../../Redux/cartState";

export interface IProducts {
  id: Number;
  name: String;
  brand: String;
  description: String;
  photo: String;
  price: Number;
  quantity: any;
}

export default function Card() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const loading = useSelector((state: any) => state.add.loading);
  const data = useSelector((state: any) => state.add.listApi);
  const dispatch = useDispatch();

  // console.log(data)

  // function handleData() {
  //     dispatch(setData());
  // }

  // useEffect(() => {
  //   handleData();
  // },[]);

  function handleLoading() {
    dispatch(setLoading());
  }
  function handleData() {
    dispatch(setData(data));
  }


  useEffect(() => {
    handleLoading()
    handleData()
  },[dispatch])

  // async function getData() {
  //   try {
  //     const response = await api.get(
  //       "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  //     );
  //     setProducts(response.data.products);
  //     handleLoading();
  //   } catch {
  //     console.error("Erro ao buscar produto", "error");
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // precisa passar essa função para o carrinho
  // function addProductToCart(id: Number, props:IProducts) {
  //   const copyProducts = [...products];

  //   const item = copyProducts.find((product) => product.id === id);

  //   if(item) {
  //     item.quantity += 1;
  //     setProducts(copyProducts);
  //   } else {
  //     setProducts(currentProducts => [...currentProducts, props]);
  //   }

  //   // if (!item) {
  //   //   copyProducts.push({ id: id, quantity: 1 });
  //   // } else {
  //   //   item.quantity += 1;
  //   // }
  // }

  return (
    <Wrapper>
      {!loading ? (
        data.map((card: any) => (
          <Product key={card.id}>
            <img src={card.photo} width={150} height={150} alt={card.name} />
            <DivPrice>
              <NameProduct>{card.name}</NameProduct>
              <Price>R$ {card.price}</Price>
            </DivPrice>
            <Description>{card.description}</Description>
            <Button />
          </Product>
        ))
      ) : (
        <Wrapper
          style={{
            margin: "auto",
            width: "60vw",
            marginTop: "-2.3rem",
            marginBottom: "-3.5rem",
          }}
        >
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: "217.56px",
                height: "245px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ width: 217.56 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
        </Wrapper>
      )}
    </Wrapper>
  );
}
