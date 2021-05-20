export class User{
    create(user: User): void{
        console.log("create user");
    }

    createOrder(order: Order): void{
        console.log("create order");
    }

    cancelOrder(order: Order): void{
        console.log("cancel order");
    }

    countDiscount(order: Order): void{
        console.log("count discount");
    }
}