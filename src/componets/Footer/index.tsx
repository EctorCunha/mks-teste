import { Copy, Text } from "../../styles/compontents/footer";
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from "react-redux";


export default function Footer() {
  const loading = useSelector((state: any) => state.add.loading);

  return (
    <>
      {!loading ? (
        <Copy>
          <Text>MKS sistemas © Todos os direitos reservados</Text>
        </Copy>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={40} />
      )}
    </>
  );
}
