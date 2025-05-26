/*
Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */

class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

class Delivery {
    constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(
        public shopId: number,
        public date: Date = new Date()
    ) {
        super(date);
    }
}

class Cart {
    private products: Product[] = [];
    private delivery?: Delivery;


    addProduct(product: Product) {
        this.products.push(product);
    }


    removeProduct(productId: number) {
        this.products = this.products.filter(p => p.id !== productId);
    }


    getTotalPrice(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }


    setDelivery(delivery: Delivery) {
        this.delivery = delivery;
    }


    checkout(): string {
        if (this.products.length === 0) {
            return "Корзина пуста";
        }
        if (!this.delivery) {
            return "Не задана доставка";
        }
        return "Заказ принят, всё ок!";
    }
}


const cart = new Cart();
cart.addProduct(new Product(1, "Молоко", 50));
cart.addProduct(new Product(2, "Хлеб", 30));

console.log("Итого:", cart.getTotalPrice());

cart.setDelivery(new HomeDelivery(new Date("2025-05-27"), "ул. Пушкина, д. 10"));
console.log(cart.checkout());

cart.removeProduct(1);
console.log("Итого после удаления:", cart.getTotalPrice());

cart.setDelivery(new ShopDelivery(123));
console.log(cart.checkout());
