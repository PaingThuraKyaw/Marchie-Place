import {create} from "zustand"


interface storeProp {
    open : boolean,
    setOpen : (state : boolean) => void
    productId  : number,
    setProductId : (state : number) => void
    
}

export const useStore = create<storeProp>(set => {

    return {
        open : false,
        setOpen : (state) => set(() => {
            return {open : state}
        }),
        productId : 0,
        setProductId : (state) => set(() => {
            return {productId : state}
        })
    }
});


