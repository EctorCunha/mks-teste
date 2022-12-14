import { createContext, useState, ReactNode } from "react";

interface CartProviderProps{
  children: ReactNode;
}

interface CartItem{
  id: number;
  quantity: number;
}

interface CartContextData{
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  function getItemQuantity(id: number){
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }


  function increaseItemQuantity(id: number){
    setCartItems((currItems:any) => {
      if(currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if(item.id === id){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: number){
    setCartItems((currItems:any) => {
      if(currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          } else {
            return item;
          }
        })
      }
    })
  }



  function removeFromCart(id: number){
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }


  return (
    <CartContext.Provider value={{getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart  }}>
      {children}
    </CartContext.Provider>
  );
}
